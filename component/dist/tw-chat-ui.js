var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rk(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var XS = { exports: {} }, tv = {}, GS = { exports: {} }, iv = { exports: {} };
iv.exports;
var PC;
function Ck() {
  return PC || (PC = 1, function(p, h) {
    var y = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    y.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = "18.2.0", O = Symbol.for("react.element"), U = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), W = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), xe = Symbol.for("react.offscreen"), ht = Symbol.iterator, ct = "@@iterator";
      function Qe(g) {
        if (g === null || typeof g != "object")
          return null;
        var b = ht && g[ht] || g[ct];
        return typeof b == "function" ? b : null;
      }
      var Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Lt = {
        transition: null
      }, Ne = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, mt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ze = {}, On = null;
      function Sn(g) {
        On = g;
      }
      Ze.setExtraStackFrame = function(g) {
        On = g;
      }, Ze.getCurrentStack = null, Ze.getStackAddendum = function() {
        var g = "";
        On && (g += On);
        var b = Ze.getCurrentStack;
        return b && (g += b() || ""), g;
      };
      var Jt = !1, Ct = !1, rn = !1, Je = !1, at = !1, Ot = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: Lt,
        ReactCurrentOwner: mt
      };
      Ot.ReactDebugCurrentFrame = Ze, Ot.ReactCurrentActQueue = Ne;
      function it(g) {
        {
          for (var b = arguments.length, j = new Array(b > 1 ? b - 1 : 0), V = 1; V < b; V++)
            j[V - 1] = arguments[V];
          we("warn", g, j);
        }
      }
      function Z(g) {
        {
          for (var b = arguments.length, j = new Array(b > 1 ? b - 1 : 0), V = 1; V < b; V++)
            j[V - 1] = arguments[V];
          we("error", g, j);
        }
      }
      function we(g, b, j) {
        {
          var V = Ot.ReactDebugCurrentFrame, ue = V.getStackAddendum();
          ue !== "" && (b += "%s", j = j.concat([ue]));
          var _e = j.map(function(Ee) {
            return String(Ee);
          });
          _e.unshift("Warning: " + b), Function.prototype.apply.call(console[g], console, _e);
        }
      }
      var D = {};
      function $(g, b) {
        {
          var j = g.constructor, V = j && (j.displayName || j.name) || "ReactClass", ue = V + "." + b;
          if (D[ue])
            return;
          Z("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", b, V), D[ue] = !0;
        }
      }
      var be = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
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
        enqueueForceUpdate: function(g, b, j) {
          $(g, "forceUpdate");
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
        enqueueReplaceState: function(g, b, j, V) {
          $(g, "replaceState");
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
        enqueueSetState: function(g, b, j, V) {
          $(g, "setState");
        }
      }, We = Object.assign, qe = {};
      Object.freeze(qe);
      function yt(g, b, j) {
        this.props = g, this.context = b, this.refs = qe, this.updater = j || be;
      }
      yt.prototype.isReactComponent = {}, yt.prototype.setState = function(g, b) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, b, "setState");
      }, yt.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, gt = function(g, b) {
          Object.defineProperty(yt.prototype, g, {
            get: function() {
              it("%s(...) is deprecated in plain JavaScript React classes. %s", b[0], b[1]);
            }
          });
        };
        for (var dt in ft)
          ft.hasOwnProperty(dt) && gt(dt, ft[dt]);
      }
      function an() {
      }
      an.prototype = yt.prototype;
      function nr(g, b, j) {
        this.props = g, this.context = b, this.refs = qe, this.updater = j || be;
      }
      var rr = nr.prototype = new an();
      rr.constructor = nr, We(rr, yt.prototype), rr.isPureReactComponent = !0;
      function Pr() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var gr = Array.isArray;
      function En(g) {
        return gr(g);
      }
      function ar(g) {
        {
          var b = typeof Symbol == "function" && Symbol.toStringTag, j = b && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return j;
        }
      }
      function Bn(g) {
        try {
          return An(g), !1;
        } catch {
          return !0;
        }
      }
      function An(g) {
        return "" + g;
      }
      function In(g) {
        if (Bn(g))
          return Z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(g)), An(g);
      }
      function Or(g, b, j) {
        var V = g.displayName;
        if (V)
          return V;
        var ue = b.displayName || b.name || "";
        return ue !== "" ? j + "(" + ue + ")" : j;
      }
      function Sr(g) {
        return g.displayName || "Context";
      }
      function Vn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && Z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case _:
            return "Fragment";
          case U:
            return "Portal";
          case ce:
            return "Profiler";
          case E:
            return "StrictMode";
          case ie:
            return "Suspense";
          case Se:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case W:
              var b = g;
              return Sr(b) + ".Consumer";
            case re:
              var j = g;
              return Sr(j._context) + ".Provider";
            case Y:
              return Or(g, g.render, "ForwardRef");
            case G:
              var V = g.displayName || null;
              return V !== null ? V : Vn(g.type) || "Memo";
            case J: {
              var ue = g, _e = ue._payload, Ee = ue._init;
              try {
                return Vn(Ee(_e));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ca = Object.prototype.hasOwnProperty, fa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, da, ir;
      ir = {};
      function Dr(g) {
        if (ca.call(g, "ref")) {
          var b = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function fn(g) {
        if (ca.call(g, "key")) {
          var b = Object.getOwnPropertyDescriptor(g, "key").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function pa(g, b) {
        var j = function() {
          Er || (Er = !0, Z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        j.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: j,
          configurable: !0
        });
      }
      function va(g, b) {
        var j = function() {
          da || (da = !0, Z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        j.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: j,
          configurable: !0
        });
      }
      function ha(g) {
        if (typeof g.ref == "string" && mt.current && g.__self && mt.current.stateNode !== g.__self) {
          var b = Vn(mt.current.type);
          ir[b] || (Z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b, g.ref), ir[b] = !0);
        }
      }
      var ve = function(g, b, j, V, ue, _e, Ee) {
        var Ge = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: O,
          // Built-in properties that belong on the element
          type: g,
          key: b,
          ref: j,
          props: Ee,
          // Record the component responsible for creating this element.
          _owner: _e
        };
        return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ge, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: V
        }), Object.defineProperty(Ge, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ue
        }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
      };
      function Ie(g, b, j) {
        var V, ue = {}, _e = null, Ee = null, Ge = null, st = null;
        if (b != null) {
          Dr(b) && (Ee = b.ref, ha(b)), fn(b) && (In(b.key), _e = "" + b.key), Ge = b.__self === void 0 ? null : b.__self, st = b.__source === void 0 ? null : b.__source;
          for (V in b)
            ca.call(b, V) && !fa.hasOwnProperty(V) && (ue[V] = b[V]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          ue.children = j;
        else if (Ht > 1) {
          for (var Vt = Array(Ht), Yt = 0; Yt < Ht; Yt++)
            Vt[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze(Vt), ue.children = Vt;
        }
        if (g && g.defaultProps) {
          var Wt = g.defaultProps;
          for (V in Wt)
            ue[V] === void 0 && (ue[V] = Wt[V]);
        }
        if (_e || Ee) {
          var on = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          _e && pa(ue, on), Ee && va(ue, on);
        }
        return ve(g, _e, Ee, Ge, st, mt.current, ue);
      }
      function ot(g, b) {
        var j = ve(g.type, b, g.ref, g._self, g._source, g._owner, g.props);
        return j;
      }
      function Ft(g, b, j) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var V, ue = We({}, g.props), _e = g.key, Ee = g.ref, Ge = g._self, st = g._source, Ht = g._owner;
        if (b != null) {
          Dr(b) && (Ee = b.ref, Ht = mt.current), fn(b) && (In(b.key), _e = "" + b.key);
          var Vt;
          g.type && g.type.defaultProps && (Vt = g.type.defaultProps);
          for (V in b)
            ca.call(b, V) && !fa.hasOwnProperty(V) && (b[V] === void 0 && Vt !== void 0 ? ue[V] = Vt[V] : ue[V] = b[V]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          ue.children = j;
        else if (Yt > 1) {
          for (var Wt = Array(Yt), on = 0; on < Yt; on++)
            Wt[on] = arguments[on + 2];
          ue.children = Wt;
        }
        return ve(g.type, _e, Ee, Ge, st, Ht, ue);
      }
      function Nt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === O;
      }
      var Dn = ".", pn = ":";
      function Rr(g) {
        var b = /[=:]/g, j = {
          "=": "=0",
          ":": "=2"
        }, V = g.replace(b, function(ue) {
          return j[ue];
        });
        return "$" + V;
      }
      var Bt = !1, Qn = /\/+/g;
      function jt(g) {
        return g.replace(Qn, "$&/");
      }
      function Kt(g, b) {
        return typeof g == "object" && g !== null && g.key != null ? (In(g.key), Rr("" + g.key)) : b.toString(36);
      }
      function $a(g, b, j, V, ue) {
        var _e = typeof g;
        (_e === "undefined" || _e === "boolean") && (g = null);
        var Ee = !1;
        if (g === null)
          Ee = !0;
        else
          switch (_e) {
            case "string":
            case "number":
              Ee = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case O:
                case U:
                  Ee = !0;
              }
          }
        if (Ee) {
          var Ge = g, st = ue(Ge), Ht = V === "" ? Dn + Kt(Ge, 0) : V;
          if (En(st)) {
            var Vt = "";
            Ht != null && (Vt = jt(Ht) + "/"), $a(st, b, Vt, "", function(ad) {
              return ad;
            });
          } else
            st != null && (Nt(st) && (st.key && (!Ge || Ge.key !== st.key) && In(st.key), st = ot(
              st,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              j + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (st.key && (!Ge || Ge.key !== st.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                jt("" + st.key) + "/"
              ) : "") + Ht
            )), b.push(st));
          return 1;
        }
        var Yt, Wt, on = 0, kt = V === "" ? Dn : V + pn;
        if (En(g))
          for (var wl = 0; wl < g.length; wl++)
            Yt = g[wl], Wt = kt + Kt(Yt, wl), on += $a(Yt, b, j, Wt, ue);
        else {
          var ru = Qe(g);
          if (typeof ru == "function") {
            var ds = g;
            ru === ds.entries && (Bt || it("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Bt = !0);
            for (var ps = ru.call(ds), Yi, vs = 0; !(Yi = ps.next()).done; )
              Yt = Yi.value, Wt = kt + Kt(Yt, vs++), on += $a(Yt, b, j, Wt, ue);
          } else if (_e === "object") {
            var hs = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (hs === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : hs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return on;
      }
      function ka(g, b, j) {
        if (g == null)
          return g;
        var V = [], ue = 0;
        return $a(g, V, "", "", function(_e) {
          return b.call(j, _e, ue++);
        }), V;
      }
      function ml(g) {
        var b = 0;
        return ka(g, function() {
          b++;
        }), b;
      }
      function ro(g, b, j) {
        ka(g, function() {
          b.apply(this, arguments);
        }, j);
      }
      function ao(g) {
        return ka(g, function(b) {
          return b;
        }) || [];
      }
      function yl(g) {
        if (!Nt(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function ei(g) {
        var b = {
          $$typeof: W,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
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
        b.Provider = {
          $$typeof: re,
          _context: b
        };
        var j = !1, V = !1, ue = !1;
        {
          var _e = {
            $$typeof: W,
            _context: b
          };
          Object.defineProperties(_e, {
            Provider: {
              get: function() {
                return V || (V = !0, Z("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), b.Provider;
              },
              set: function(Ee) {
                b.Provider = Ee;
              }
            },
            _currentValue: {
              get: function() {
                return b._currentValue;
              },
              set: function(Ee) {
                b._currentValue = Ee;
              }
            },
            _currentValue2: {
              get: function() {
                return b._currentValue2;
              },
              set: function(Ee) {
                b._currentValue2 = Ee;
              }
            },
            _threadCount: {
              get: function() {
                return b._threadCount;
              },
              set: function(Ee) {
                b._threadCount = Ee;
              }
            },
            Consumer: {
              get: function() {
                return j || (j = !0, Z("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), b.Consumer;
              }
            },
            displayName: {
              get: function() {
                return b.displayName;
              },
              set: function(Ee) {
                ue || (it("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ee), ue = !0);
              }
            }
          }), b.Consumer = _e;
        }
        return b._currentRenderer = null, b._currentRenderer2 = null, b;
      }
      var ti = -1, _a = 0, Ii = 1, Br = 2;
      function Vr(g) {
        if (g._status === ti) {
          var b = g._result, j = b();
          if (j.then(function(_e) {
            if (g._status === _a || g._status === ti) {
              var Ee = g;
              Ee._status = Ii, Ee._result = _e;
            }
          }, function(_e) {
            if (g._status === _a || g._status === ti) {
              var Ee = g;
              Ee._status = Br, Ee._result = _e;
            }
          }), g._status === ti) {
            var V = g;
            V._status = _a, V._result = j;
          }
        }
        if (g._status === Ii) {
          var ue = g._result;
          return ue === void 0 && Z(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ue), "default" in ue || Z(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ue), ue.default;
        } else
          throw g._result;
      }
      function ma(g) {
        var b = {
          // We use these fields to store the result.
          _status: ti,
          _result: g
        }, j = {
          $$typeof: J,
          _payload: b,
          _init: Vr
        };
        {
          var V, ue;
          Object.defineProperties(j, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return V;
              },
              set: function(_e) {
                Z("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), V = _e, Object.defineProperty(j, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ue;
              },
              set: function(_e) {
                Z("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ue = _e, Object.defineProperty(j, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return j;
      }
      function Fi(g) {
        g != null && g.$$typeof === G ? Z("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? Z("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && Z("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && Z("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var b = {
          $$typeof: Y,
          render: g
        };
        {
          var j;
          Object.defineProperty(b, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(V) {
              j = V, !g.name && !g.displayName && (g.displayName = V);
            }
          });
        }
        return b;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function ne(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === _ || g === ce || at || g === E || g === ie || g === Se || Je || g === xe || Jt || Ct || rn || typeof g == "object" && g !== null && (g.$$typeof === J || g.$$typeof === G || g.$$typeof === re || g.$$typeof === W || g.$$typeof === Y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === x || g.getModuleId !== void 0));
      }
      function de(g, b) {
        ne(g) || Z("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var j = {
          $$typeof: G,
          type: g,
          compare: b === void 0 ? null : b
        };
        {
          var V;
          Object.defineProperty(j, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function(ue) {
              V = ue, !g.name && !g.displayName && (g.displayName = ue);
            }
          });
        }
        return j;
      }
      function he() {
        var g = Be.current;
        return g === null && Z(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function pt(g) {
        var b = he();
        if (g._context !== void 0) {
          var j = g._context;
          j.Consumer === g ? Z("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : j.Provider === g && Z("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return b.useContext(g);
      }
      function Tt(g) {
        var b = he();
        return b.useState(g);
      }
      function lt(g, b, j) {
        var V = he();
        return V.useReducer(g, b, j);
      }
      function Fe(g) {
        var b = he();
        return b.useRef(g);
      }
      function Fn(g, b) {
        var j = he();
        return j.useEffect(g, b);
      }
      function Zt(g, b) {
        var j = he();
        return j.useInsertionEffect(g, b);
      }
      function $t(g, b) {
        var j = he();
        return j.useLayoutEffect(g, b);
      }
      function Cr(g, b) {
        var j = he();
        return j.useCallback(g, b);
      }
      function pi(g, b) {
        var j = he();
        return j.useMemo(g, b);
      }
      function en(g, b, j) {
        var V = he();
        return V.useImperativeHandle(g, b, j);
      }
      function Yr(g, b) {
        {
          var j = he();
          return j.useDebugValue(g, b);
        }
      }
      function ts() {
        var g = he();
        return g.useTransition();
      }
      function vi(g) {
        var b = he();
        return b.useDeferredValue(g);
      }
      function ut() {
        var g = he();
        return g.useId();
      }
      function io(g, b, j) {
        var V = he();
        return V.useSyncExternalStore(g, b, j);
      }
      var ji = 0, gl, Wr, ns, kr, rs, as, is;
      function lo() {
      }
      lo.__reactDisabledLog = !0;
      function Qo() {
        {
          if (ji === 0) {
            gl = console.log, Wr = console.info, ns = console.warn, kr = console.error, rs = console.group, as = console.groupCollapsed, is = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: lo,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          ji++;
        }
      }
      function Hi() {
        {
          if (ji--, ji === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: We({}, g, {
                value: gl
              }),
              info: We({}, g, {
                value: Wr
              }),
              warn: We({}, g, {
                value: ns
              }),
              error: We({}, g, {
                value: kr
              }),
              group: We({}, g, {
                value: rs
              }),
              groupCollapsed: We({}, g, {
                value: as
              }),
              groupEnd: We({}, g, {
                value: is
              })
            });
          }
          ji < 0 && Z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var hi = Ot.ReactCurrentDispatcher, La;
      function Sl(g, b, j) {
        {
          if (La === void 0)
            try {
              throw Error();
            } catch (ue) {
              var V = ue.stack.trim().match(/\n( *(at )?)/);
              La = V && V[1] || "";
            }
          return `
` + La + g;
        }
      }
      var mi = !1, oo;
      {
        var uo = typeof WeakMap == "function" ? WeakMap : Map;
        oo = new uo();
      }
      function El(g, b) {
        if (!g || mi)
          return "";
        {
          var j = oo.get(g);
          if (j !== void 0)
            return j;
        }
        var V;
        mi = !0;
        var ue = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var _e;
        _e = hi.current, hi.current = null, Qo();
        try {
          if (b) {
            var Ee = function() {
              throw Error();
            };
            if (Object.defineProperty(Ee.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Ee, []);
              } catch (kt) {
                V = kt;
              }
              Reflect.construct(g, [], Ee);
            } else {
              try {
                Ee.call();
              } catch (kt) {
                V = kt;
              }
              g.call(Ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kt) {
              V = kt;
            }
            g();
          }
        } catch (kt) {
          if (kt && V && typeof kt.stack == "string") {
            for (var Ge = kt.stack.split(`
`), st = V.stack.split(`
`), Ht = Ge.length - 1, Vt = st.length - 1; Ht >= 1 && Vt >= 0 && Ge[Ht] !== st[Vt]; )
              Vt--;
            for (; Ht >= 1 && Vt >= 0; Ht--, Vt--)
              if (Ge[Ht] !== st[Vt]) {
                if (Ht !== 1 || Vt !== 1)
                  do
                    if (Ht--, Vt--, Vt < 0 || Ge[Ht] !== st[Vt]) {
                      var Yt = `
` + Ge[Ht].replace(" at new ", " at ");
                      return g.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", g.displayName)), typeof g == "function" && oo.set(g, Yt), Yt;
                    }
                  while (Ht >= 1 && Vt >= 0);
                break;
              }
          }
        } finally {
          mi = !1, hi.current = _e, Hi(), Error.prepareStackTrace = ue;
        }
        var Wt = g ? g.displayName || g.name : "", on = Wt ? Sl(Wt) : "";
        return typeof g == "function" && oo.set(g, on), on;
      }
      function ls(g, b, j) {
        return El(g, !1);
      }
      function os(g) {
        var b = g.prototype;
        return !!(b && b.isReactComponent);
      }
      function Rt(g, b, j) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return El(g, os(g));
        if (typeof g == "string")
          return Sl(g);
        switch (g) {
          case ie:
            return Sl("Suspense");
          case Se:
            return Sl("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case Y:
              return ls(g.render);
            case G:
              return Rt(g.type, b, j);
            case J: {
              var V = g, ue = V._payload, _e = V._init;
              try {
                return Rt(_e(ue), b, j);
              } catch {
              }
            }
          }
        return "";
      }
      var us = {}, Jo = Ot.ReactDebugCurrentFrame;
      function Rl(g) {
        if (g) {
          var b = g._owner, j = Rt(g.type, g._source, b ? b.type : null);
          Jo.setExtraStackFrame(j);
        } else
          Jo.setExtraStackFrame(null);
      }
      function ss(g, b, j, V, ue) {
        {
          var _e = Function.call.bind(ca);
          for (var Ee in g)
            if (_e(g, Ee)) {
              var Ge = void 0;
              try {
                if (typeof g[Ee] != "function") {
                  var st = Error((V || "React class") + ": " + j + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Ge = g[Ee](b, Ee, V, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                Ge = Ht;
              }
              Ge && !(Ge instanceof Error) && (Rl(ue), Z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", V || "React class", j, Ee, typeof Ge), Rl(null)), Ge instanceof Error && !(Ge.message in us) && (us[Ge.message] = !0, Rl(ue), Z("Failed %s type: %s", j, Ge.message), Rl(null));
            }
        }
      }
      function Dt(g) {
        if (g) {
          var b = g._owner, j = Rt(g.type, g._source, b ? b.type : null);
          Sn(j);
        } else
          Sn(null);
      }
      var Ko;
      Ko = !1;
      function so() {
        if (mt.current) {
          var g = Vn(mt.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function $e(g) {
        if (g !== void 0) {
          var b = g.fileName.replace(/^.*[\\\/]/, ""), j = g.lineNumber;
          return `

Check your code at ` + b + ":" + j + ".";
        }
        return "";
      }
      function ni(g) {
        return g != null ? $e(g.__source) : "";
      }
      var vn = {};
      function qr(g) {
        var b = so();
        if (!b) {
          var j = typeof g == "string" ? g : g.displayName || g.name;
          j && (b = `

Check the top-level render call using <` + j + ">.");
        }
        return b;
      }
      function Na(g, b) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var j = qr(b);
          if (!vn[j]) {
            vn[j] = !0;
            var V = "";
            g && g._owner && g._owner !== mt.current && (V = " It was passed a child from " + Vn(g._owner.type) + "."), Dt(g), Z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, V), Dt(null);
          }
        }
      }
      function Cl(g, b) {
        if (typeof g == "object") {
          if (En(g))
            for (var j = 0; j < g.length; j++) {
              var V = g[j];
              Nt(V) && Na(V, b);
            }
          else if (Nt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var ue = Qe(g);
            if (typeof ue == "function" && ue !== g.entries)
              for (var _e = ue.call(g), Ee; !(Ee = _e.next()).done; )
                Nt(Ee.value) && Na(Ee.value, b);
          }
        }
      }
      function ln(g) {
        {
          var b = g.type;
          if (b == null || typeof b == "string")
            return;
          var j;
          if (typeof b == "function")
            j = b.propTypes;
          else if (typeof b == "object" && (b.$$typeof === Y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          b.$$typeof === G))
            j = b.propTypes;
          else
            return;
          if (j) {
            var V = Vn(b);
            ss(j, g.props, "prop", V, g);
          } else if (b.PropTypes !== void 0 && !Ko) {
            Ko = !0;
            var ue = Vn(b);
            Z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
          }
          typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && Z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function hn(g) {
        {
          for (var b = Object.keys(g.props), j = 0; j < b.length; j++) {
            var V = b[j];
            if (V !== "children" && V !== "key") {
              Dt(g), Z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", V), Dt(null);
              break;
            }
          }
          g.ref !== null && (Dt(g), Z("Invalid attribute `ref` supplied to `React.Fragment`."), Dt(null));
        }
      }
      function cs(g, b, j) {
        var V = ne(g);
        if (!V) {
          var ue = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = ni(b);
          _e ? ue += _e : ue += so();
          var Ee;
          g === null ? Ee = "null" : En(g) ? Ee = "array" : g !== void 0 && g.$$typeof === O ? (Ee = "<" + (Vn(g.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, Z("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ue);
        }
        var Ge = Ie.apply(this, arguments);
        if (Ge == null)
          return Ge;
        if (V)
          for (var st = 2; st < arguments.length; st++)
            Cl(arguments[st], g);
        return g === _ ? hn(Ge) : ln(Ge), Ge;
      }
      var lr = !1;
      function Xr(g) {
        var b = cs.bind(null, g);
        return b.type = g, lr || (lr = !0, it("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(b, "type", {
          enumerable: !1,
          get: function() {
            return it("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), b;
      }
      function ri(g, b, j) {
        for (var V = Ft.apply(this, arguments), ue = 2; ue < arguments.length; ue++)
          Cl(arguments[ue], V.type);
        return ln(V), V;
      }
      function Zo(g, b) {
        var j = Lt.transition;
        Lt.transition = {};
        var V = Lt.transition;
        Lt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (Lt.transition = j, j === null && V._updatedFibers) {
            var ue = V._updatedFibers.size;
            ue > 10 && it("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), V._updatedFibers.clear();
          }
        }
      }
      var co = !1, fo = null;
      function Tl(g) {
        if (fo === null)
          try {
            var b = ("require" + Math.random()).slice(0, 7), j = p && p[b];
            fo = j.call(p, "timers").setImmediate;
          } catch {
            fo = function(ue) {
              co === !1 && (co = !0, typeof MessageChannel > "u" && Z("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var _e = new MessageChannel();
              _e.port1.onmessage = ue, _e.port2.postMessage(void 0);
            };
          }
        return fo(g);
      }
      var Ma = 0, Pi = !1;
      function $o(g) {
        {
          var b = Ma;
          Ma++, Ne.current === null && (Ne.current = []);
          var j = Ne.isBatchingLegacy, V;
          try {
            if (Ne.isBatchingLegacy = !0, V = g(), !j && Ne.didScheduleLegacyUpdate) {
              var ue = Ne.current;
              ue !== null && (Ne.didScheduleLegacyUpdate = !1, Vi(ue));
            }
          } catch (Wt) {
            throw Bi(b), Wt;
          } finally {
            Ne.isBatchingLegacy = j;
          }
          if (V !== null && typeof V == "object" && typeof V.then == "function") {
            var _e = V, Ee = !1, Ge = {
              then: function(Wt, on) {
                Ee = !0, _e.then(function(kt) {
                  Bi(b), Ma === 0 ? eu(kt, Wt, on) : Wt(kt);
                }, function(kt) {
                  Bi(b), on(kt);
                });
              }
            };
            return !Pi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ee || (Pi = !0, Z("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ge;
          } else {
            var st = V;
            if (Bi(b), Ma === 0) {
              var Ht = Ne.current;
              Ht !== null && (Vi(Ht), Ne.current = null);
              var Vt = {
                then: function(Wt, on) {
                  Ne.current === null ? (Ne.current = [], eu(st, Wt, on)) : Wt(st);
                }
              };
              return Vt;
            } else {
              var Yt = {
                then: function(Wt, on) {
                  Wt(st);
                }
              };
              return Yt;
            }
          }
        }
      }
      function Bi(g) {
        g !== Ma - 1 && Z("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = g;
      }
      function eu(g, b, j) {
        {
          var V = Ne.current;
          if (V !== null)
            try {
              Vi(V), Tl(function() {
                V.length === 0 ? (Ne.current = null, b(g)) : eu(g, b, j);
              });
            } catch (ue) {
              j(ue);
            }
          else
            b(g);
        }
      }
      var yi = !1;
      function Vi(g) {
        if (!yi) {
          yi = !0;
          var b = 0;
          try {
            for (; b < g.length; b++) {
              var j = g[b];
              do
                j = j(!0);
              while (j !== null);
            }
            g.length = 0;
          } catch (V) {
            throw g = g.slice(b + 1), V;
          } finally {
            yi = !1;
          }
        }
      }
      var tu = cs, fs = ri, ai = Xr, nu = {
        map: ka,
        forEach: ro,
        count: ml,
        toArray: ao,
        only: yl
      };
      h.Children = nu, h.Component = yt, h.Fragment = _, h.Profiler = ce, h.PureComponent = nr, h.StrictMode = E, h.Suspense = ie, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ot, h.cloneElement = fs, h.createContext = ei, h.createElement = tu, h.createFactory = ai, h.createRef = Pr, h.forwardRef = Fi, h.isValidElement = Nt, h.lazy = ma, h.memo = de, h.startTransition = Zo, h.unstable_act = $o, h.useCallback = Cr, h.useContext = pt, h.useDebugValue = Yr, h.useDeferredValue = vi, h.useEffect = Fn, h.useId = ut, h.useImperativeHandle = en, h.useInsertionEffect = Zt, h.useLayoutEffect = $t, h.useMemo = pi, h.useReducer = lt, h.useRef = Fe, h.useState = Tt, h.useSyncExternalStore = io, h.useTransition = ts, h.version = C, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(iv, iv.exports)), iv.exports;
}
var xt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BC;
function Tk() {
  if (BC)
    return xt;
  BC = 1;
  var p = Symbol.for("react.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), _ = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), re = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function ie(D) {
    return D === null || typeof D != "object" ? null : (D = Y && D[Y] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var Se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, G = Object.assign, J = {};
  function xe(D, $, be) {
    this.props = D, this.context = $, this.refs = J, this.updater = be || Se;
  }
  xe.prototype.isReactComponent = {}, xe.prototype.setState = function(D, $) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, $, "setState");
  }, xe.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function ht() {
  }
  ht.prototype = xe.prototype;
  function ct(D, $, be) {
    this.props = D, this.context = $, this.refs = J, this.updater = be || Se;
  }
  var Qe = ct.prototype = new ht();
  Qe.constructor = ct, G(Qe, xe.prototype), Qe.isPureReactComponent = !0;
  var Be = Array.isArray, Lt = Object.prototype.hasOwnProperty, Ne = { current: null }, mt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ze(D, $, be) {
    var We, qe = {}, yt = null, ft = null;
    if ($ != null)
      for (We in $.ref !== void 0 && (ft = $.ref), $.key !== void 0 && (yt = "" + $.key), $)
        Lt.call($, We) && !mt.hasOwnProperty(We) && (qe[We] = $[We]);
    var gt = arguments.length - 2;
    if (gt === 1)
      qe.children = be;
    else if (1 < gt) {
      for (var dt = Array(gt), an = 0; an < gt; an++)
        dt[an] = arguments[an + 2];
      qe.children = dt;
    }
    if (D && D.defaultProps)
      for (We in gt = D.defaultProps, gt)
        qe[We] === void 0 && (qe[We] = gt[We]);
    return { $$typeof: p, type: D, key: yt, ref: ft, props: qe, _owner: Ne.current };
  }
  function On(D, $) {
    return { $$typeof: p, type: D.type, key: $, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function Sn(D) {
    return typeof D == "object" && D !== null && D.$$typeof === p;
  }
  function Jt(D) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(be) {
      return $[be];
    });
  }
  var Ct = /\/+/g;
  function rn(D, $) {
    return typeof D == "object" && D !== null && D.key != null ? Jt("" + D.key) : $.toString(36);
  }
  function Je(D, $, be, We, qe) {
    var yt = typeof D;
    (yt === "undefined" || yt === "boolean") && (D = null);
    var ft = !1;
    if (D === null)
      ft = !0;
    else
      switch (yt) {
        case "string":
        case "number":
          ft = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case p:
            case h:
              ft = !0;
          }
      }
    if (ft)
      return ft = D, qe = qe(ft), D = We === "" ? "." + rn(ft, 0) : We, Be(qe) ? (be = "", D != null && (be = D.replace(Ct, "$&/") + "/"), Je(qe, $, be, "", function(an) {
        return an;
      })) : qe != null && (Sn(qe) && (qe = On(qe, be + (!qe.key || ft && ft.key === qe.key ? "" : ("" + qe.key).replace(Ct, "$&/") + "/") + D)), $.push(qe)), 1;
    if (ft = 0, We = We === "" ? "." : We + ":", Be(D))
      for (var gt = 0; gt < D.length; gt++) {
        yt = D[gt];
        var dt = We + rn(yt, gt);
        ft += Je(yt, $, be, dt, qe);
      }
    else if (dt = ie(D), typeof dt == "function")
      for (D = dt.call(D), gt = 0; !(yt = D.next()).done; )
        yt = yt.value, dt = We + rn(yt, gt++), ft += Je(yt, $, be, dt, qe);
    else if (yt === "object")
      throw $ = String(D), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return ft;
  }
  function at(D, $, be) {
    if (D == null)
      return D;
    var We = [], qe = 0;
    return Je(D, We, "", "", function(yt) {
      return $.call(be, yt, qe++);
    }), We;
  }
  function Ot(D) {
    if (D._status === -1) {
      var $ = D._result;
      $ = $(), $.then(function(be) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = be);
      }, function(be) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = be);
      }), D._status === -1 && (D._status = 0, D._result = $);
    }
    if (D._status === 1)
      return D._result.default;
    throw D._result;
  }
  var it = { current: null }, Z = { transition: null }, we = { ReactCurrentDispatcher: it, ReactCurrentBatchConfig: Z, ReactCurrentOwner: Ne };
  return xt.Children = { map: at, forEach: function(D, $, be) {
    at(D, function() {
      $.apply(this, arguments);
    }, be);
  }, count: function(D) {
    var $ = 0;
    return at(D, function() {
      $++;
    }), $;
  }, toArray: function(D) {
    return at(D, function($) {
      return $;
    }) || [];
  }, only: function(D) {
    if (!Sn(D))
      throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, xt.Component = xe, xt.Fragment = y, xt.Profiler = O, xt.PureComponent = ct, xt.StrictMode = C, xt.Suspense = ce, xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, xt.cloneElement = function(D, $, be) {
    if (D == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var We = G({}, D.props), qe = D.key, yt = D.ref, ft = D._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (yt = $.ref, ft = Ne.current), $.key !== void 0 && (qe = "" + $.key), D.type && D.type.defaultProps)
        var gt = D.type.defaultProps;
      for (dt in $)
        Lt.call($, dt) && !mt.hasOwnProperty(dt) && (We[dt] = $[dt] === void 0 && gt !== void 0 ? gt[dt] : $[dt]);
    }
    var dt = arguments.length - 2;
    if (dt === 1)
      We.children = be;
    else if (1 < dt) {
      gt = Array(dt);
      for (var an = 0; an < dt; an++)
        gt[an] = arguments[an + 2];
      We.children = gt;
    }
    return { $$typeof: p, type: D.type, key: qe, ref: yt, props: We, _owner: ft };
  }, xt.createContext = function(D) {
    return D = { $$typeof: _, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: U, _context: D }, D.Consumer = D;
  }, xt.createElement = Ze, xt.createFactory = function(D) {
    var $ = Ze.bind(null, D);
    return $.type = D, $;
  }, xt.createRef = function() {
    return { current: null };
  }, xt.forwardRef = function(D) {
    return { $$typeof: E, render: D };
  }, xt.isValidElement = Sn, xt.lazy = function(D) {
    return { $$typeof: W, _payload: { _status: -1, _result: D }, _init: Ot };
  }, xt.memo = function(D, $) {
    return { $$typeof: re, type: D, compare: $ === void 0 ? null : $ };
  }, xt.startTransition = function(D) {
    var $ = Z.transition;
    Z.transition = {};
    try {
      D();
    } finally {
      Z.transition = $;
    }
  }, xt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, xt.useCallback = function(D, $) {
    return it.current.useCallback(D, $);
  }, xt.useContext = function(D) {
    return it.current.useContext(D);
  }, xt.useDebugValue = function() {
  }, xt.useDeferredValue = function(D) {
    return it.current.useDeferredValue(D);
  }, xt.useEffect = function(D, $) {
    return it.current.useEffect(D, $);
  }, xt.useId = function() {
    return it.current.useId();
  }, xt.useImperativeHandle = function(D, $, be) {
    return it.current.useImperativeHandle(D, $, be);
  }, xt.useInsertionEffect = function(D, $) {
    return it.current.useInsertionEffect(D, $);
  }, xt.useLayoutEffect = function(D, $) {
    return it.current.useLayoutEffect(D, $);
  }, xt.useMemo = function(D, $) {
    return it.current.useMemo(D, $);
  }, xt.useReducer = function(D, $, be) {
    return it.current.useReducer(D, $, be);
  }, xt.useRef = function(D) {
    return it.current.useRef(D);
  }, xt.useState = function(D) {
    return it.current.useState(D);
  }, xt.useSyncExternalStore = function(D, $, be) {
    return it.current.useSyncExternalStore(D, $, be);
  }, xt.useTransition = function() {
    return it.current.useTransition();
  }, xt.version = "18.2.0", xt;
}
var wk = {};
wk.NODE_ENV === "production" ? GS.exports = Tk() : GS.exports = Ck();
var di = GS.exports;
const bk = /* @__PURE__ */ Rk(di);
var VC;
function xk() {
  if (VC)
    return tv;
  VC = 1;
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
    var h = di, y = Symbol.for("react.element"), C = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), ce = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), J = Symbol.iterator, xe = "@@iterator";
    function ht(x) {
      if (x === null || typeof x != "object")
        return null;
      var ne = J && x[J] || x[xe];
      return typeof ne == "function" ? ne : null;
    }
    var ct = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Qe(x) {
      {
        for (var ne = arguments.length, de = new Array(ne > 1 ? ne - 1 : 0), he = 1; he < ne; he++)
          de[he - 1] = arguments[he];
        Be("error", x, de);
      }
    }
    function Be(x, ne, de) {
      {
        var he = ct.ReactDebugCurrentFrame, pt = he.getStackAddendum();
        pt !== "" && (ne += "%s", de = de.concat([pt]));
        var Tt = de.map(function(lt) {
          return String(lt);
        });
        Tt.unshift("Warning: " + ne), Function.prototype.apply.call(console[x], console, Tt);
      }
    }
    var Lt = !1, Ne = !1, mt = !1, Ze = !1, On = !1, Sn;
    Sn = Symbol.for("react.module.reference");
    function Jt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === O || x === _ || On || x === U || x === W || x === Y || Ze || x === G || Lt || Ne || mt || typeof x == "object" && x !== null && (x.$$typeof === Se || x.$$typeof === ie || x.$$typeof === E || x.$$typeof === ce || x.$$typeof === re || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === Sn || x.getModuleId !== void 0));
    }
    function Ct(x, ne, de) {
      var he = x.displayName;
      if (he)
        return he;
      var pt = ne.displayName || ne.name || "";
      return pt !== "" ? de + "(" + pt + ")" : de;
    }
    function rn(x) {
      return x.displayName || "Context";
    }
    function Je(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && Qe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case O:
          return "Fragment";
        case C:
          return "Portal";
        case _:
          return "Profiler";
        case U:
          return "StrictMode";
        case W:
          return "Suspense";
        case Y:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case ce:
            var ne = x;
            return rn(ne) + ".Consumer";
          case E:
            var de = x;
            return rn(de._context) + ".Provider";
          case re:
            return Ct(x, x.render, "ForwardRef");
          case ie:
            var he = x.displayName || null;
            return he !== null ? he : Je(x.type) || "Memo";
          case Se: {
            var pt = x, Tt = pt._payload, lt = pt._init;
            try {
              return Je(lt(Tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var at = Object.assign, Ot = 0, it, Z, we, D, $, be, We;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function yt() {
      {
        if (Ot === 0) {
          it = console.log, Z = console.info, we = console.warn, D = console.error, $ = console.group, be = console.groupCollapsed, We = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: qe,
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
        Ot++;
      }
    }
    function ft() {
      {
        if (Ot--, Ot === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, x, {
              value: it
            }),
            info: at({}, x, {
              value: Z
            }),
            warn: at({}, x, {
              value: we
            }),
            error: at({}, x, {
              value: D
            }),
            group: at({}, x, {
              value: $
            }),
            groupCollapsed: at({}, x, {
              value: be
            }),
            groupEnd: at({}, x, {
              value: We
            })
          });
        }
        Ot < 0 && Qe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gt = ct.ReactCurrentDispatcher, dt;
    function an(x, ne, de) {
      {
        if (dt === void 0)
          try {
            throw Error();
          } catch (pt) {
            var he = pt.stack.trim().match(/\n( *(at )?)/);
            dt = he && he[1] || "";
          }
        return `
` + dt + x;
      }
    }
    var nr = !1, rr;
    {
      var Pr = typeof WeakMap == "function" ? WeakMap : Map;
      rr = new Pr();
    }
    function gr(x, ne) {
      if (!x || nr)
        return "";
      {
        var de = rr.get(x);
        if (de !== void 0)
          return de;
      }
      var he;
      nr = !0;
      var pt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Tt;
      Tt = gt.current, gt.current = null, yt();
      try {
        if (ne) {
          var lt = function() {
            throw Error();
          };
          if (Object.defineProperty(lt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(lt, []);
            } catch (Yr) {
              he = Yr;
            }
            Reflect.construct(x, [], lt);
          } else {
            try {
              lt.call();
            } catch (Yr) {
              he = Yr;
            }
            x.call(lt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Yr) {
            he = Yr;
          }
          x();
        }
      } catch (Yr) {
        if (Yr && he && typeof Yr.stack == "string") {
          for (var Fe = Yr.stack.split(`
`), Fn = he.stack.split(`
`), Zt = Fe.length - 1, $t = Fn.length - 1; Zt >= 1 && $t >= 0 && Fe[Zt] !== Fn[$t]; )
            $t--;
          for (; Zt >= 1 && $t >= 0; Zt--, $t--)
            if (Fe[Zt] !== Fn[$t]) {
              if (Zt !== 1 || $t !== 1)
                do
                  if (Zt--, $t--, $t < 0 || Fe[Zt] !== Fn[$t]) {
                    var Cr = `
` + Fe[Zt].replace(" at new ", " at ");
                    return x.displayName && Cr.includes("<anonymous>") && (Cr = Cr.replace("<anonymous>", x.displayName)), typeof x == "function" && rr.set(x, Cr), Cr;
                  }
                while (Zt >= 1 && $t >= 0);
              break;
            }
        }
      } finally {
        nr = !1, gt.current = Tt, ft(), Error.prepareStackTrace = pt;
      }
      var pi = x ? x.displayName || x.name : "", en = pi ? an(pi) : "";
      return typeof x == "function" && rr.set(x, en), en;
    }
    function En(x, ne, de) {
      return gr(x, !1);
    }
    function ar(x) {
      var ne = x.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function Bn(x, ne, de) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return gr(x, ar(x));
      if (typeof x == "string")
        return an(x);
      switch (x) {
        case W:
          return an("Suspense");
        case Y:
          return an("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case re:
            return En(x.render);
          case ie:
            return Bn(x.type, ne, de);
          case Se: {
            var he = x, pt = he._payload, Tt = he._init;
            try {
              return Bn(Tt(pt), ne, de);
            } catch {
            }
          }
        }
      return "";
    }
    var An = Object.prototype.hasOwnProperty, In = {}, Or = ct.ReactDebugCurrentFrame;
    function Sr(x) {
      if (x) {
        var ne = x._owner, de = Bn(x.type, x._source, ne ? ne.type : null);
        Or.setExtraStackFrame(de);
      } else
        Or.setExtraStackFrame(null);
    }
    function Vn(x, ne, de, he, pt) {
      {
        var Tt = Function.call.bind(An);
        for (var lt in x)
          if (Tt(x, lt)) {
            var Fe = void 0;
            try {
              if (typeof x[lt] != "function") {
                var Fn = Error((he || "React class") + ": " + de + " type `" + lt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[lt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fn.name = "Invariant Violation", Fn;
              }
              Fe = x[lt](ne, lt, he, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Zt) {
              Fe = Zt;
            }
            Fe && !(Fe instanceof Error) && (Sr(pt), Qe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", de, lt, typeof Fe), Sr(null)), Fe instanceof Error && !(Fe.message in In) && (In[Fe.message] = !0, Sr(pt), Qe("Failed %s type: %s", de, Fe.message), Sr(null));
          }
      }
    }
    var ca = Array.isArray;
    function fa(x) {
      return ca(x);
    }
    function Er(x) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, de = ne && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return de;
      }
    }
    function da(x) {
      try {
        return ir(x), !1;
      } catch {
        return !0;
      }
    }
    function ir(x) {
      return "" + x;
    }
    function Dr(x) {
      if (da(x))
        return Qe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(x)), ir(x);
    }
    var fn = ct.ReactCurrentOwner, pa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, va, ha, ve;
    ve = {};
    function Ie(x) {
      if (An.call(x, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function ot(x) {
      if (An.call(x, "key")) {
        var ne = Object.getOwnPropertyDescriptor(x, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Ft(x, ne) {
      if (typeof x.ref == "string" && fn.current && ne && fn.current.stateNode !== ne) {
        var de = Je(fn.current.type);
        ve[de] || (Qe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Je(fn.current.type), x.ref), ve[de] = !0);
      }
    }
    function Nt(x, ne) {
      {
        var de = function() {
          va || (va = !0, Qe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        de.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function Dn(x, ne) {
      {
        var de = function() {
          ha || (ha = !0, Qe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        de.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var pn = function(x, ne, de, he, pt, Tt, lt) {
      var Fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: x,
        key: ne,
        ref: de,
        props: lt,
        // Record the component responsible for creating this element.
        _owner: Tt
      };
      return Fe._store = {}, Object.defineProperty(Fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(Fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pt
      }), Object.freeze && (Object.freeze(Fe.props), Object.freeze(Fe)), Fe;
    };
    function Rr(x, ne, de, he, pt) {
      {
        var Tt, lt = {}, Fe = null, Fn = null;
        de !== void 0 && (Dr(de), Fe = "" + de), ot(ne) && (Dr(ne.key), Fe = "" + ne.key), Ie(ne) && (Fn = ne.ref, Ft(ne, pt));
        for (Tt in ne)
          An.call(ne, Tt) && !pa.hasOwnProperty(Tt) && (lt[Tt] = ne[Tt]);
        if (x && x.defaultProps) {
          var Zt = x.defaultProps;
          for (Tt in Zt)
            lt[Tt] === void 0 && (lt[Tt] = Zt[Tt]);
        }
        if (Fe || Fn) {
          var $t = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          Fe && Nt(lt, $t), Fn && Dn(lt, $t);
        }
        return pn(x, Fe, Fn, pt, he, fn.current, lt);
      }
    }
    var Bt = ct.ReactCurrentOwner, Qn = ct.ReactDebugCurrentFrame;
    function jt(x) {
      if (x) {
        var ne = x._owner, de = Bn(x.type, x._source, ne ? ne.type : null);
        Qn.setExtraStackFrame(de);
      } else
        Qn.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function $a(x) {
      return typeof x == "object" && x !== null && x.$$typeof === y;
    }
    function ka() {
      {
        if (Bt.current) {
          var x = Je(Bt.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function ml(x) {
      {
        if (x !== void 0) {
          var ne = x.fileName.replace(/^.*[\\\/]/, ""), de = x.lineNumber;
          return `

Check your code at ` + ne + ":" + de + ".";
        }
        return "";
      }
    }
    var ro = {};
    function ao(x) {
      {
        var ne = ka();
        if (!ne) {
          var de = typeof x == "string" ? x : x.displayName || x.name;
          de && (ne = `

Check the top-level render call using <` + de + ">.");
        }
        return ne;
      }
    }
    function yl(x, ne) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var de = ao(ne);
        if (ro[de])
          return;
        ro[de] = !0;
        var he = "";
        x && x._owner && x._owner !== Bt.current && (he = " It was passed a child from " + Je(x._owner.type) + "."), jt(x), Qe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, he), jt(null);
      }
    }
    function ei(x, ne) {
      {
        if (typeof x != "object")
          return;
        if (fa(x))
          for (var de = 0; de < x.length; de++) {
            var he = x[de];
            $a(he) && yl(he, ne);
          }
        else if ($a(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var pt = ht(x);
          if (typeof pt == "function" && pt !== x.entries)
            for (var Tt = pt.call(x), lt; !(lt = Tt.next()).done; )
              $a(lt.value) && yl(lt.value, ne);
        }
      }
    }
    function ti(x) {
      {
        var ne = x.type;
        if (ne == null || typeof ne == "string")
          return;
        var de;
        if (typeof ne == "function")
          de = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === re || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === ie))
          de = ne.propTypes;
        else
          return;
        if (de) {
          var he = Je(ne);
          Vn(de, x.props, "prop", he, x);
        } else if (ne.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var pt = Je(ne);
          Qe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pt || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && Qe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _a(x) {
      {
        for (var ne = Object.keys(x.props), de = 0; de < ne.length; de++) {
          var he = ne[de];
          if (he !== "children" && he !== "key") {
            jt(x), Qe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), jt(null);
            break;
          }
        }
        x.ref !== null && (jt(x), Qe("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function Ii(x, ne, de, he, pt, Tt) {
      {
        var lt = Jt(x);
        if (!lt) {
          var Fe = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (Fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fn = ml(pt);
          Fn ? Fe += Fn : Fe += ka();
          var Zt;
          x === null ? Zt = "null" : fa(x) ? Zt = "array" : x !== void 0 && x.$$typeof === y ? (Zt = "<" + (Je(x.type) || "Unknown") + " />", Fe = " Did you accidentally export a JSX literal instead of a component?") : Zt = typeof x, Qe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Zt, Fe);
        }
        var $t = Rr(x, ne, de, pt, Tt);
        if ($t == null)
          return $t;
        if (lt) {
          var Cr = ne.children;
          if (Cr !== void 0)
            if (he)
              if (fa(Cr)) {
                for (var pi = 0; pi < Cr.length; pi++)
                  ei(Cr[pi], x);
                Object.freeze && Object.freeze(Cr);
              } else
                Qe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ei(Cr, x);
        }
        return x === O ? _a($t) : ti($t), $t;
      }
    }
    function Br(x, ne, de) {
      return Ii(x, ne, de, !0);
    }
    function Vr(x, ne, de) {
      return Ii(x, ne, de, !1);
    }
    var ma = Vr, Fi = Br;
    tv.Fragment = O, tv.jsx = ma, tv.jsxs = Fi;
  }(), tv;
}
var nv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YC;
function Ok() {
  if (YC)
    return nv;
  YC = 1;
  var p = di, h = Symbol.for("react.element"), y = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, O = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(E, ce, re) {
    var W, Y = {}, ie = null, Se = null;
    re !== void 0 && (ie = "" + re), ce.key !== void 0 && (ie = "" + ce.key), ce.ref !== void 0 && (Se = ce.ref);
    for (W in ce)
      C.call(ce, W) && !U.hasOwnProperty(W) && (Y[W] = ce[W]);
    if (E && E.defaultProps)
      for (W in ce = E.defaultProps, ce)
        Y[W] === void 0 && (Y[W] = ce[W]);
    return { $$typeof: h, type: E, key: ie, ref: Se, props: Y, _owner: O.current };
  }
  return nv.Fragment = y, nv.jsx = _, nv.jsxs = _, nv;
}
var Dk = {};
Dk.NODE_ENV === "production" ? XS.exports = Ok() : XS.exports = xk();
var vt = XS.exports, lv = {}, QS = { exports: {} }, Ka = {}, $m = { exports: {} }, FS = {}, WC;
function kk() {
  return WC || (WC = 1, function(p) {
    var h = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    h.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var y = !1, C = !1, O = 5;
      function U(ve, Ie) {
        var ot = ve.length;
        ve.push(Ie), ce(ve, Ie, ot);
      }
      function _(ve) {
        return ve.length === 0 ? null : ve[0];
      }
      function E(ve) {
        if (ve.length === 0)
          return null;
        var Ie = ve[0], ot = ve.pop();
        return ot !== Ie && (ve[0] = ot, re(ve, ot, 0)), Ie;
      }
      function ce(ve, Ie, ot) {
        for (var Ft = ot; Ft > 0; ) {
          var Nt = Ft - 1 >>> 1, Dn = ve[Nt];
          if (W(Dn, Ie) > 0)
            ve[Nt] = Ie, ve[Ft] = Dn, Ft = Nt;
          else
            return;
        }
      }
      function re(ve, Ie, ot) {
        for (var Ft = ot, Nt = ve.length, Dn = Nt >>> 1; Ft < Dn; ) {
          var pn = (Ft + 1) * 2 - 1, Rr = ve[pn], Bt = pn + 1, Qn = ve[Bt];
          if (W(Rr, Ie) < 0)
            Bt < Nt && W(Qn, Rr) < 0 ? (ve[Ft] = Qn, ve[Bt] = Ie, Ft = Bt) : (ve[Ft] = Rr, ve[pn] = Ie, Ft = pn);
          else if (Bt < Nt && W(Qn, Ie) < 0)
            ve[Ft] = Qn, ve[Bt] = Ie, Ft = Bt;
          else
            return;
        }
      }
      function W(ve, Ie) {
        var ot = ve.sortIndex - Ie.sortIndex;
        return ot !== 0 ? ot : ve.id - Ie.id;
      }
      var Y = 1, ie = 2, Se = 3, G = 4, J = 5;
      function xe(ve, Ie) {
      }
      var ht = typeof performance == "object" && typeof performance.now == "function";
      if (ht) {
        var ct = performance;
        p.unstable_now = function() {
          return ct.now();
        };
      } else {
        var Qe = Date, Be = Qe.now();
        p.unstable_now = function() {
          return Qe.now() - Be;
        };
      }
      var Lt = 1073741823, Ne = -1, mt = 250, Ze = 5e3, On = 1e4, Sn = Lt, Jt = [], Ct = [], rn = 1, Je = null, at = Se, Ot = !1, it = !1, Z = !1, we = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function be(ve) {
        for (var Ie = _(Ct); Ie !== null; ) {
          if (Ie.callback === null)
            E(Ct);
          else if (Ie.startTime <= ve)
            E(Ct), Ie.sortIndex = Ie.expirationTime, U(Jt, Ie);
          else
            return;
          Ie = _(Ct);
        }
      }
      function We(ve) {
        if (Z = !1, be(ve), !it)
          if (_(Jt) !== null)
            it = !0, Dr(qe);
          else {
            var Ie = _(Ct);
            Ie !== null && fn(We, Ie.startTime - ve);
          }
      }
      function qe(ve, Ie) {
        it = !1, Z && (Z = !1, pa()), Ot = !0;
        var ot = at;
        try {
          var Ft;
          if (!C)
            return yt(ve, Ie);
        } finally {
          Je = null, at = ot, Ot = !1;
        }
      }
      function yt(ve, Ie) {
        var ot = Ie;
        for (be(ot), Je = _(Jt); Je !== null && !y && !(Je.expirationTime > ot && (!ve || Sr())); ) {
          var Ft = Je.callback;
          if (typeof Ft == "function") {
            Je.callback = null, at = Je.priorityLevel;
            var Nt = Je.expirationTime <= ot, Dn = Ft(Nt);
            ot = p.unstable_now(), typeof Dn == "function" ? Je.callback = Dn : Je === _(Jt) && E(Jt), be(ot);
          } else
            E(Jt);
          Je = _(Jt);
        }
        if (Je !== null)
          return !0;
        var pn = _(Ct);
        return pn !== null && fn(We, pn.startTime - ot), !1;
      }
      function ft(ve, Ie) {
        switch (ve) {
          case Y:
          case ie:
          case Se:
          case G:
          case J:
            break;
          default:
            ve = Se;
        }
        var ot = at;
        at = ve;
        try {
          return Ie();
        } finally {
          at = ot;
        }
      }
      function gt(ve) {
        var Ie;
        switch (at) {
          case Y:
          case ie:
          case Se:
            Ie = Se;
            break;
          default:
            Ie = at;
            break;
        }
        var ot = at;
        at = Ie;
        try {
          return ve();
        } finally {
          at = ot;
        }
      }
      function dt(ve) {
        var Ie = at;
        return function() {
          var ot = at;
          at = Ie;
          try {
            return ve.apply(this, arguments);
          } finally {
            at = ot;
          }
        };
      }
      function an(ve, Ie, ot) {
        var Ft = p.unstable_now(), Nt;
        if (typeof ot == "object" && ot !== null) {
          var Dn = ot.delay;
          typeof Dn == "number" && Dn > 0 ? Nt = Ft + Dn : Nt = Ft;
        } else
          Nt = Ft;
        var pn;
        switch (ve) {
          case Y:
            pn = Ne;
            break;
          case ie:
            pn = mt;
            break;
          case J:
            pn = Sn;
            break;
          case G:
            pn = On;
            break;
          case Se:
          default:
            pn = Ze;
            break;
        }
        var Rr = Nt + pn, Bt = {
          id: rn++,
          callback: Ie,
          priorityLevel: ve,
          startTime: Nt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return Nt > Ft ? (Bt.sortIndex = Nt, U(Ct, Bt), _(Jt) === null && Bt === _(Ct) && (Z ? pa() : Z = !0, fn(We, Nt - Ft))) : (Bt.sortIndex = Rr, U(Jt, Bt), !it && !Ot && (it = !0, Dr(qe))), Bt;
      }
      function nr() {
      }
      function rr() {
        !it && !Ot && (it = !0, Dr(qe));
      }
      function Pr() {
        return _(Jt);
      }
      function gr(ve) {
        ve.callback = null;
      }
      function En() {
        return at;
      }
      var ar = !1, Bn = null, An = -1, In = O, Or = -1;
      function Sr() {
        var ve = p.unstable_now() - Or;
        return !(ve < In);
      }
      function Vn() {
      }
      function ca(ve) {
        if (ve < 0 || ve > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ve > 0 ? In = Math.floor(1e3 / ve) : In = O;
      }
      var fa = function() {
        if (Bn !== null) {
          var ve = p.unstable_now();
          Or = ve;
          var Ie = !0, ot = !0;
          try {
            ot = Bn(Ie, ve);
          } finally {
            ot ? Er() : (ar = !1, Bn = null);
          }
        } else
          ar = !1;
      }, Er;
      if (typeof $ == "function")
        Er = function() {
          $(fa);
        };
      else if (typeof MessageChannel < "u") {
        var da = new MessageChannel(), ir = da.port2;
        da.port1.onmessage = fa, Er = function() {
          ir.postMessage(null);
        };
      } else
        Er = function() {
          we(fa, 0);
        };
      function Dr(ve) {
        Bn = ve, ar || (ar = !0, Er());
      }
      function fn(ve, Ie) {
        An = we(function() {
          ve(p.unstable_now());
        }, Ie);
      }
      function pa() {
        D(An), An = -1;
      }
      var va = Vn, ha = null;
      p.unstable_IdlePriority = J, p.unstable_ImmediatePriority = Y, p.unstable_LowPriority = G, p.unstable_NormalPriority = Se, p.unstable_Profiling = ha, p.unstable_UserBlockingPriority = ie, p.unstable_cancelCallback = gr, p.unstable_continueExecution = rr, p.unstable_forceFrameRate = ca, p.unstable_getCurrentPriorityLevel = En, p.unstable_getFirstCallbackNode = Pr, p.unstable_next = gt, p.unstable_pauseExecution = nr, p.unstable_requestPaint = va, p.unstable_runWithPriority = ft, p.unstable_scheduleCallback = an, p.unstable_shouldYield = Sr, p.unstable_wrapCallback = dt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(FS)), FS;
}
var jS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qC;
function _k() {
  return qC || (qC = 1, function(p) {
    function h(Z, we) {
      var D = Z.length;
      Z.push(we);
      e:
        for (; 0 < D; ) {
          var $ = D - 1 >>> 1, be = Z[$];
          if (0 < O(be, we))
            Z[$] = we, Z[D] = be, D = $;
          else
            break e;
        }
    }
    function y(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function C(Z) {
      if (Z.length === 0)
        return null;
      var we = Z[0], D = Z.pop();
      if (D !== we) {
        Z[0] = D;
        e:
          for (var $ = 0, be = Z.length, We = be >>> 1; $ < We; ) {
            var qe = 2 * ($ + 1) - 1, yt = Z[qe], ft = qe + 1, gt = Z[ft];
            if (0 > O(yt, D))
              ft < be && 0 > O(gt, yt) ? (Z[$] = gt, Z[ft] = D, $ = ft) : (Z[$] = yt, Z[qe] = D, $ = qe);
            else if (ft < be && 0 > O(gt, D))
              Z[$] = gt, Z[ft] = D, $ = ft;
            else
              break e;
          }
      }
      return we;
    }
    function O(Z, we) {
      var D = Z.sortIndex - we.sortIndex;
      return D !== 0 ? D : Z.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      p.unstable_now = function() {
        return U.now();
      };
    } else {
      var _ = Date, E = _.now();
      p.unstable_now = function() {
        return _.now() - E;
      };
    }
    var ce = [], re = [], W = 1, Y = null, ie = 3, Se = !1, G = !1, J = !1, xe = typeof setTimeout == "function" ? setTimeout : null, ht = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(Z) {
      for (var we = y(re); we !== null; ) {
        if (we.callback === null)
          C(re);
        else if (we.startTime <= Z)
          C(re), we.sortIndex = we.expirationTime, h(ce, we);
        else
          break;
        we = y(re);
      }
    }
    function Be(Z) {
      if (J = !1, Qe(Z), !G)
        if (y(ce) !== null)
          G = !0, Ot(Lt);
        else {
          var we = y(re);
          we !== null && it(Be, we.startTime - Z);
        }
    }
    function Lt(Z, we) {
      G = !1, J && (J = !1, ht(Ze), Ze = -1), Se = !0;
      var D = ie;
      try {
        for (Qe(we), Y = y(ce); Y !== null && (!(Y.expirationTime > we) || Z && !Jt()); ) {
          var $ = Y.callback;
          if (typeof $ == "function") {
            Y.callback = null, ie = Y.priorityLevel;
            var be = $(Y.expirationTime <= we);
            we = p.unstable_now(), typeof be == "function" ? Y.callback = be : Y === y(ce) && C(ce), Qe(we);
          } else
            C(ce);
          Y = y(ce);
        }
        if (Y !== null)
          var We = !0;
        else {
          var qe = y(re);
          qe !== null && it(Be, qe.startTime - we), We = !1;
        }
        return We;
      } finally {
        Y = null, ie = D, Se = !1;
      }
    }
    var Ne = !1, mt = null, Ze = -1, On = 5, Sn = -1;
    function Jt() {
      return !(p.unstable_now() - Sn < On);
    }
    function Ct() {
      if (mt !== null) {
        var Z = p.unstable_now();
        Sn = Z;
        var we = !0;
        try {
          we = mt(!0, Z);
        } finally {
          we ? rn() : (Ne = !1, mt = null);
        }
      } else
        Ne = !1;
    }
    var rn;
    if (typeof ct == "function")
      rn = function() {
        ct(Ct);
      };
    else if (typeof MessageChannel < "u") {
      var Je = new MessageChannel(), at = Je.port2;
      Je.port1.onmessage = Ct, rn = function() {
        at.postMessage(null);
      };
    } else
      rn = function() {
        xe(Ct, 0);
      };
    function Ot(Z) {
      mt = Z, Ne || (Ne = !0, rn());
    }
    function it(Z, we) {
      Ze = xe(function() {
        Z(p.unstable_now());
      }, we);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, p.unstable_continueExecution = function() {
      G || Se || (G = !0, Ot(Lt));
    }, p.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : On = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return ie;
    }, p.unstable_getFirstCallbackNode = function() {
      return y(ce);
    }, p.unstable_next = function(Z) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = ie;
      }
      var D = ie;
      ie = we;
      try {
        return Z();
      } finally {
        ie = D;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(Z, we) {
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
      var D = ie;
      ie = Z;
      try {
        return we();
      } finally {
        ie = D;
      }
    }, p.unstable_scheduleCallback = function(Z, we, D) {
      var $ = p.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? $ + D : $) : D = $, Z) {
        case 1:
          var be = -1;
          break;
        case 2:
          be = 250;
          break;
        case 5:
          be = 1073741823;
          break;
        case 4:
          be = 1e4;
          break;
        default:
          be = 5e3;
      }
      return be = D + be, Z = { id: W++, callback: we, priorityLevel: Z, startTime: D, expirationTime: be, sortIndex: -1 }, D > $ ? (Z.sortIndex = D, h(re, Z), y(ce) === null && Z === y(re) && (J ? (ht(Ze), Ze = -1) : J = !0, it(Be, D - $))) : (Z.sortIndex = be, h(ce, Z), G || Se || (G = !0, Ot(Lt))), Z;
    }, p.unstable_shouldYield = Jt, p.unstable_wrapCallback = function(Z) {
      var we = ie;
      return function() {
        var D = ie;
        ie = we;
        try {
          return Z.apply(this, arguments);
        } finally {
          ie = D;
        }
      };
    };
  }(jS)), jS;
}
var XC;
function uT() {
  if (XC)
    return $m.exports;
  XC = 1;
  var p = {};
  return p.NODE_ENV === "production" ? $m.exports = _k() : $m.exports = kk(), $m.exports;
}
var GC;
function Lk() {
  if (GC)
    return Ka;
  GC = 1;
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
    var h = di, y = uT(), C = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, O = !1;
    function U(e) {
      O = e;
    }
    function _(e) {
      if (!O) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ce("warn", e, a);
      }
    }
    function E(e) {
      if (!O) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ce("error", e, a);
      }
    }
    function ce(e, t, a) {
      {
        var i = C.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var re = 0, W = 1, Y = 2, ie = 3, Se = 4, G = 5, J = 6, xe = 7, ht = 8, ct = 9, Qe = 10, Be = 11, Lt = 12, Ne = 13, mt = 14, Ze = 15, On = 16, Sn = 17, Jt = 18, Ct = 19, rn = 21, Je = 22, at = 23, Ot = 24, it = 25, Z = !0, we = !1, D = !1, $ = !1, be = !1, We = !0, qe = !1, yt = !1, ft = !0, gt = !0, dt = !0, an = /* @__PURE__ */ new Set(), nr = {}, rr = {};
    function Pr(e, t) {
      gr(e, t), gr(e + "Capture", t);
    }
    function gr(e, t) {
      nr[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nr[e] = t;
      {
        var a = e.toLowerCase();
        rr[a] = e, e === "onDoubleClick" && (rr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        an.add(t[i]);
    }
    var En = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ar = Object.prototype.hasOwnProperty;
    function Bn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function An(e) {
      try {
        return In(e), !1;
      } catch {
        return !0;
      }
    }
    function In(e) {
      return "" + e;
    }
    function Or(e, t) {
      if (An(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), In(e);
    }
    function Sr(e) {
      if (An(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), In(e);
    }
    function Vn(e, t) {
      if (An(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), In(e);
    }
    function ca(e, t) {
      if (An(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Bn(e)), In(e);
    }
    function fa(e) {
      if (An(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Bn(e)), In(e);
    }
    function Er(e) {
      if (An(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Bn(e)), In(e);
    }
    var da = 0, ir = 1, Dr = 2, fn = 3, pa = 4, va = 5, ha = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ie = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + ve + "][" + Ie + "]*$"), Ft = {}, Nt = {};
    function Dn(e) {
      return ar.call(Nt, e) ? !0 : ar.call(Ft, e) ? !1 : ot.test(e) ? (Nt[e] = !0, !0) : (Ft[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function pn(e, t, a) {
      return t !== null ? t.type === da : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, a, i) {
      if (a !== null && a.type === da)
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
      if (t === null || typeof t > "u" || Rr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case fn:
            return !t;
          case pa:
            return t === !1;
          case va:
            return isNaN(t);
          case ha:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Qn(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function jt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Dr || t === fn || t === pa, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Kt = {}, $a = [
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
    $a.forEach(function(e) {
      Kt[e] = new jt(
        e,
        da,
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
      Kt[t] = new jt(
        t,
        ir,
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
      Kt[e] = new jt(
        e,
        Dr,
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
      Kt[e] = new jt(
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
      Kt[e] = new jt(
        e,
        fn,
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
      Kt[e] = new jt(
        e,
        fn,
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
      Kt[e] = new jt(
        e,
        pa,
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
      Kt[e] = new jt(
        e,
        ha,
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
      Kt[e] = new jt(
        e,
        va,
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
    var ka = /[\-\:]([a-z])/g, ml = function(e) {
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
      var t = e.replace(ka, ml);
      Kt[t] = new jt(
        t,
        ir,
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
      var t = e.replace(ka, ml);
      Kt[t] = new jt(
        t,
        ir,
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
      var t = e.replace(ka, ml);
      Kt[t] = new jt(
        t,
        ir,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Kt[e] = new jt(
        e,
        ir,
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
    var ro = "xlinkHref";
    Kt[ro] = new jt(
      "xlinkHref",
      ir,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Kt[e] = new jt(
        e,
        ir,
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
    var ao = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, yl = !1;
    function ei(e) {
      !yl && ao.test(e) && (yl = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ti(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Or(a, t), i.sanitizeURL && ei("" + a);
        var s = i.attributeName, f = null;
        if (i.type === pa) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : Bt(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (Bt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === fn)
            return a;
          f = e.getAttribute(s);
        }
        return Bt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function _a(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Or(a, t), o === "" + a ? a : o;
      }
    }
    function Ii(e, t, a, i) {
      var o = Qn(t);
      if (!pn(t, o, i)) {
        if (Bt(t, a, o, i) && (a = null), i || o === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Or(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var v = o.propertyName;
          if (a === null) {
            var m = o.type;
            e[v] = m === fn ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var R = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var M = o.type, L;
          M === fn || M === pa && a === !0 ? L = "" : (Or(a, R), L = "" + a, o.sanitizeURL && ei(L.toString())), T ? e.setAttributeNS(T, R, L) : e.setAttribute(R, L);
        }
      }
    }
    var Br = Symbol.for("react.element"), Vr = Symbol.for("react.portal"), ma = Symbol.for("react.fragment"), Fi = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), de = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), pt = Symbol.for("react.suspense"), Tt = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), Fn = Symbol.for("react.scope"), Zt = Symbol.for("react.debug_trace_mode"), $t = Symbol.for("react.offscreen"), Cr = Symbol.for("react.legacy_hidden"), pi = Symbol.for("react.cache"), en = Symbol.for("react.tracing_marker"), Yr = Symbol.iterator, ts = "@@iterator";
    function vi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Yr && e[Yr] || e[ts];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, io = 0, ji, gl, Wr, ns, kr, rs, as;
    function is() {
    }
    is.__reactDisabledLog = !0;
    function lo() {
      {
        if (io === 0) {
          ji = console.log, gl = console.info, Wr = console.warn, ns = console.error, kr = console.group, rs = console.groupCollapsed, as = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: is,
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
        io++;
      }
    }
    function Qo() {
      {
        if (io--, io === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, e, {
              value: ji
            }),
            info: ut({}, e, {
              value: gl
            }),
            warn: ut({}, e, {
              value: Wr
            }),
            error: ut({}, e, {
              value: ns
            }),
            group: ut({}, e, {
              value: kr
            }),
            groupCollapsed: ut({}, e, {
              value: rs
            }),
            groupEnd: ut({}, e, {
              value: as
            })
          });
        }
        io < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Hi = C.ReactCurrentDispatcher, hi;
    function La(e, t, a) {
      {
        if (hi === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            hi = i && i[1] || "";
          }
        return `
` + hi + e;
      }
    }
    var Sl = !1, mi;
    {
      var oo = typeof WeakMap == "function" ? WeakMap : Map;
      mi = new oo();
    }
    function uo(e, t) {
      if (!e || Sl)
        return "";
      {
        var a = mi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Sl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Hi.current, Hi.current = null, lo();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (P) {
              i = P;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (P) {
              i = P;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            i = P;
          }
          e();
        }
      } catch (P) {
        if (P && i && typeof P.stack == "string") {
          for (var v = P.stack.split(`
`), m = i.stack.split(`
`), R = v.length - 1, T = m.length - 1; R >= 1 && T >= 0 && v[R] !== m[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (v[R] !== m[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || v[R] !== m[T]) {
                    var M = `
` + v[R].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && mi.set(e, M), M;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Sl = !1, Hi.current = s, Qo(), Error.prepareStackTrace = o;
      }
      var L = e ? e.displayName || e.name : "", H = L ? La(L) : "";
      return typeof e == "function" && mi.set(e, H), H;
    }
    function El(e, t, a) {
      return uo(e, !0);
    }
    function ls(e, t, a) {
      return uo(e, !1);
    }
    function os(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Rt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uo(e, os(e));
      if (typeof e == "string")
        return La(e);
      switch (e) {
        case pt:
          return La("Suspense");
        case Tt:
          return La("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case he:
            return ls(e.render);
          case lt:
            return Rt(e.type, t, a);
          case Fe: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Rt(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function us(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case G:
          return La(e.type);
        case On:
          return La("Lazy");
        case Ne:
          return La("Suspense");
        case Ct:
          return La("SuspenseList");
        case re:
        case Y:
        case Ze:
          return ls(e.type);
        case Be:
          return ls(e.type.render);
        case W:
          return El(e.type);
        default:
          return "";
      }
    }
    function Jo(e) {
      try {
        var t = "", a = e;
        do
          t += us(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Rl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function ss(e) {
      return e.displayName || "Context";
    }
    function Dt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ma:
          return "Fragment";
        case Vr:
          return "Portal";
        case x:
          return "Profiler";
        case Fi:
          return "StrictMode";
        case pt:
          return "Suspense";
        case Tt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case de:
            var t = e;
            return ss(t) + ".Consumer";
          case ne:
            var a = e;
            return ss(a._context) + ".Provider";
          case he:
            return Rl(e, e.render, "ForwardRef");
          case lt:
            var i = e.displayName || null;
            return i !== null ? i : Dt(e.type) || "Memo";
          case Fe: {
            var o = e, s = o._payload, f = o._init;
            try {
              return Dt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Ko(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function so(e) {
      return e.displayName || "Context";
    }
    function $e(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ot:
          return "Cache";
        case ct:
          var i = a;
          return so(i) + ".Consumer";
        case Qe:
          var o = a;
          return so(o._context) + ".Provider";
        case Jt:
          return "DehydratedFragment";
        case Be:
          return Ko(a, a.render, "ForwardRef");
        case xe:
          return "Fragment";
        case G:
          return a;
        case Se:
          return "Portal";
        case ie:
          return "Root";
        case J:
          return "Text";
        case On:
          return Dt(a);
        case ht:
          return a === Fi ? "StrictMode" : "Mode";
        case Je:
          return "Offscreen";
        case Lt:
          return "Profiler";
        case rn:
          return "Scope";
        case Ne:
          return "Suspense";
        case Ct:
          return "SuspenseList";
        case it:
          return "TracingMarker";
        case W:
        case re:
        case Sn:
        case Y:
        case mt:
        case Ze:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ni = C.ReactDebugCurrentFrame, vn = null, qr = !1;
    function Na() {
      {
        if (vn === null)
          return null;
        var e = vn._debugOwner;
        if (e !== null && typeof e < "u")
          return $e(e);
      }
      return null;
    }
    function Cl() {
      return vn === null ? "" : Jo(vn);
    }
    function ln() {
      ni.getCurrentStack = null, vn = null, qr = !1;
    }
    function hn(e) {
      ni.getCurrentStack = e === null ? null : Cl, vn = e, qr = !1;
    }
    function cs() {
      return vn;
    }
    function lr(e) {
      qr = e;
    }
    function Xr(e) {
      return "" + e;
    }
    function ri(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Er(e), e;
        default:
          return "";
      }
    }
    var Zo = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function co(e, t) {
      Zo[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function fo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Tl(e) {
      return e._valueTracker;
    }
    function Ma(e) {
      e._valueTracker = null;
    }
    function Pi(e) {
      var t = "";
      return e && (fo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function $o(e) {
      var t = fo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Er(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(v) {
            Er(v), i = "" + v, s.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            Er(v), i = "" + v;
          },
          stopTracking: function() {
            Ma(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Bi(e) {
      Tl(e) || (e._valueTracker = $o(e));
    }
    function eu(e) {
      if (!e)
        return !1;
      var t = Tl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Pi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function yi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Vi = !1, tu = !1, fs = !1, ai = !1;
    function nu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function g(e, t) {
      var a = e, i = t.checked, o = ut({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function b(e, t) {
      co("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !tu && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), tu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Vi && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component", t.type), Vi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ri(t.value != null ? t.value : i),
        controlled: nu(t)
      };
    }
    function j(e, t) {
      var a = e, i = t.checked;
      i != null && Ii(a, "checked", i, !1);
    }
    function V(e, t) {
      var a = e;
      {
        var i = nu(t);
        !a._wrapperState.controlled && i && !ai && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ai = !0), a._wrapperState.controlled && !i && !fs && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fs = !0);
      }
      j(e, t);
      var o = ri(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Xr(o)) : a.value !== Xr(o) && (a.value = Xr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ge(a, t.type, o) : t.hasOwnProperty("defaultValue") && Ge(a, t.type, ri(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ue(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Xr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function _e(e, t) {
      var a = e;
      V(a, t), Ee(a, t);
    }
    function Ee(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Or(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var v = jh(f);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            eu(f), V(f, v);
          }
        }
      }
    }
    function Ge(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || yi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Xr(e._wrapperState.initialValue) : e.defaultValue !== Xr(a) && (e.defaultValue = Xr(a)));
    }
    var st = !1, Ht = !1, Vt = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? h.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Vt || (Vt = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function Wt(e, t) {
      t.value != null && e.setAttribute("value", Xr(ri(t.value)));
    }
    var on = Array.isArray;
    function kt(e) {
      return on(e);
    }
    var wl;
    wl = !1;
    function ru() {
      var e = Na();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ds = ["value", "defaultValue"];
    function ps(e) {
      {
        co("select", e);
        for (var t = 0; t < ds.length; t++) {
          var a = ds[t];
          if (e[a] != null) {
            var i = kt(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ru()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ru());
          }
        }
      }
    }
    function Yi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, v = 0; v < s.length; v++)
          f["$" + s[v]] = !0;
        for (var m = 0; m < o.length; m++) {
          var R = f.hasOwnProperty("$" + o[m].value);
          o[m].selected !== R && (o[m].selected = R), R && i && (o[m].defaultSelected = !0);
        }
      } else {
        for (var T = Xr(ri(a)), M = null, L = 0; L < o.length; L++) {
          if (o[L].value === T) {
            o[L].selected = !0, i && (o[L].defaultSelected = !0);
            return;
          }
          M === null && !o[L].disabled && (M = o[L]);
        }
        M !== null && (M.selected = !0);
      }
    }
    function vs(e, t) {
      return ut({}, t, {
        value: void 0
      });
    }
    function hs(e, t) {
      var a = e;
      ps(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !wl && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), wl = !0);
    }
    function ad(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Yi(a, !!t.multiple, i, !1) : t.defaultValue != null && Yi(a, !!t.multiple, t.defaultValue, !0);
    }
    function py(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Yi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Yi(a, !!t.multiple, t.defaultValue, !0) : Yi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function cv(e, t) {
      var a = e, i = t.value;
      i != null && Yi(a, !!t.multiple, i, !1);
    }
    var fv = !1;
    function id(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ut({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Xr(a._wrapperState.initialValue)
      });
      return i;
    }
    function dv(e, t) {
      var a = e;
      co("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !fv && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Na() || "A component"), fv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (kt(o)) {
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
        initialValue: ri(i)
      };
    }
    function pv(e, t) {
      var a = e, i = ri(t.value), o = ri(t.defaultValue);
      if (i != null) {
        var s = Xr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Xr(o));
    }
    function Ec(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function vy(e, t) {
      pv(e, t);
    }
    var Wi = "http://www.w3.org/1999/xhtml", hy = "http://www.w3.org/1998/Math/MathML", Rc = "http://www.w3.org/2000/svg";
    function ld(e) {
      switch (e) {
        case "svg":
          return Rc;
        case "math":
          return hy;
        default:
          return Wi;
      }
    }
    function od(e, t) {
      return e == null || e === Wi ? ld(t) : e === Rc && t === "foreignObject" ? Wi : e;
    }
    var my = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Cc, vv = my(function(e, t) {
      if (e.namespaceURI === Rc && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gr = 1, qi = 3, Rn = 8, ya = 9, ud = 11, ms = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, hv = {
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
    }, au = {
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
    function mv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var yv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(au).forEach(function(e) {
      yv.forEach(function(t) {
        au[mv(t, e)] = au[e];
      });
    });
    function bl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(au.hasOwnProperty(e) && au[e]) ? t + "px" : (ca(t, e), ("" + t).trim());
    }
    var yy = /([A-Z])/g, gy = /^ms-/;
    function Sy(e) {
      return e.replace(yy, "-$1").toLowerCase().replace(gy, "-ms-");
    }
    var sd = function() {
    };
    {
      var gv = /^(?:webkit|moz|o)[A-Z]/, ys = /^-ms-/, gs = /-(.)/g, Sv = /;\s*$/, Xi = {}, cd = {}, fd = !1, Tc = !1, dd = function(e) {
        return e.replace(gs, function(t, a) {
          return a.toUpperCase();
        });
      }, Ev = function(e) {
        Xi.hasOwnProperty(e) && Xi[e] || (Xi[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          dd(e.replace(ys, "ms-"))
        ));
      }, Rv = function(e) {
        Xi.hasOwnProperty(e) && Xi[e] || (Xi[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Cv = function(e, t) {
        cd.hasOwnProperty(t) && cd[t] || (cd[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Sv, "")));
      }, Ey = function(e, t) {
        fd || (fd = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ry = function(e, t) {
        Tc || (Tc = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sd = function(e, t) {
        e.indexOf("-") > -1 ? Ev(e) : gv.test(e) ? Rv(e) : Sv.test(t) && Cv(e, t), typeof t == "number" && (isNaN(t) ? Ey(e, t) : isFinite(t) || Ry(e, t));
      };
    }
    var Cy = sd;
    function Ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Sy(i)) + ":", t += bl(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Tv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Cy(i, t[i]);
          var s = bl(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ii(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function iu(e) {
      var t = {};
      for (var a in e)
        for (var i = hv[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function wv(e, t) {
      {
        if (!t)
          return;
        var a = iu(e), i = iu(t), o = {};
        for (var s in a) {
          var f = a[s], v = i[s];
          if (v && f !== v) {
            var m = f + "," + v;
            if (o[m])
              continue;
            o[m] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ii(e[f]) ? "Removing" : "Updating", f, v);
          }
        }
      }
    }
    var bv = {
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
    }, xv = ut({
      menuitem: !0
    }, bv), Ov = "__html";
    function Ss(e, t) {
      if (t) {
        if (xv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ov in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function po(e, t) {
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
    var wc = {
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
    }, vo = {
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
    }, xl = {}, Es = new RegExp("^(aria)-[" + Ie + "]*$"), pd = new RegExp("^(aria)[A-Z][" + Ie + "]*$");
    function Dv(e, t) {
      {
        if (ar.call(xl, t) && xl[t])
          return !0;
        if (pd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vo.hasOwnProperty(a) ? a : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), xl[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), xl[t] = !0, !0;
        }
        if (Es.test(t)) {
          var o = t.toLowerCase(), s = vo.hasOwnProperty(o) ? o : null;
          if (s == null)
            return xl[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), xl[t] = !0, !0;
        }
      }
      return !0;
    }
    function bc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Dv(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function lu(e, t) {
      po(e, t) || bc(e, t);
    }
    var xc = !1;
    function kv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !xc && (xc = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Rs = function() {
    };
    {
      var Tr = {}, vd = /^on./, _v = /^on[^A-Z]/, Lv = new RegExp("^(aria)-[" + Ie + "]*$"), Nv = new RegExp("^(aria)[A-Z][" + Ie + "]*$");
      Rs = function(e, t, a, i) {
        if (ar.call(Tr, t) && Tr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Tr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var v = f.hasOwnProperty(o) ? f[o] : null;
          if (v != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, v), Tr[t] = !0, !0;
          if (vd.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), Tr[t] = !0, !0;
        } else if (vd.test(t))
          return _v.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Tr[t] = !0, !0;
        if (Lv.test(t) || Nv.test(t))
          return !0;
        if (o === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Tr[t] = !0, !0;
        if (o === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Tr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Tr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Tr[t] = !0, !0;
        var m = Qn(t), R = m !== null && m.type === da;
        if (wc.hasOwnProperty(o)) {
          var T = wc[o];
          if (T !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Tr[t] = !0, !0;
        } else if (!R && t !== o)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Tr[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, m, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Tr[t] = !0, !0) : R ? !0 : Rr(t, a, m, !1) ? (Tr[t] = !0, !1) : ((a === "false" || a === "true") && m !== null && m.type === fn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Tr[t] = !0), !0);
      };
    }
    var Mv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = Rs(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ol(e, t, a) {
      po(e, t) || Mv(e, t, a);
    }
    var Oc = 1, Cs = 2, Ts = 4, wy = Oc | Cs | Ts, Gi = null;
    function by(e) {
      Gi !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Gi = e;
    }
    function Uv() {
      Gi === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Gi = null;
    }
    function zv(e) {
      return e === Gi;
    }
    function Gt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === qi ? t.parentNode : t;
    }
    var ws = null, Qi = null, gi = null;
    function hd(e) {
      var t = Fu(e);
      if (t) {
        if (typeof ws != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = jh(a);
          ws(t.stateNode, t.type, i);
        }
      }
    }
    function md(e) {
      ws = e;
    }
    function ou(e) {
      Qi ? gi ? gi.push(e) : gi = [e] : Qi = e;
    }
    function Dc() {
      return Qi !== null || gi !== null;
    }
    function ho() {
      if (Qi) {
        var e = Qi, t = gi;
        if (Qi = null, gi = null, hd(e), t)
          for (var a = 0; a < t.length; a++)
            hd(t[a]);
      }
    }
    var yd = function(e, t) {
      return e(t);
    }, Av = function() {
    }, gd = !1;
    function Iv() {
      var e = Dc();
      e && (Av(), ho());
    }
    function bs(e, t, a) {
      if (gd)
        return e(t, a);
      gd = !0;
      try {
        return yd(e, t, a);
      } finally {
        gd = !1, Iv();
      }
    }
    function kc(e, t, a) {
      yd = e, Av = a;
    }
    function Sd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ed(e, t, a) {
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
          return !!(a.disabled && Sd(t));
        default:
          return !1;
      }
    }
    function mo(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = jh(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Ed(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var xs = !1;
    if (En)
      try {
        var Os = {};
        Object.defineProperty(Os, "passive", {
          get: function() {
            xs = !0;
          }
        }), window.addEventListener("test", Os, Os), window.removeEventListener("test", Os, Os);
      } catch {
        xs = !1;
      }
    function Rd(e, t, a, i, o, s, f, v, m) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, R);
      } catch (T) {
        this.onError(T);
      }
    }
    var Fv = Rd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Cd = document.createElement("react");
      Fv = function(t, a, i, o, s, f, v, m, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), M = !1, L = !0, H = window.event, P = Object.getOwnPropertyDescriptor(window, "event");
        function q() {
          Cd.removeEventListener(X, Pe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
        }
        var Re = Array.prototype.slice.call(arguments, 3);
        function Pe() {
          M = !0, q(), a.apply(i, Re), L = !1;
        }
        var Ae, bt = !1, Et = !1;
        function A(I) {
          if (Ae = I.error, bt = !0, Ae === null && I.colno === 0 && I.lineno === 0 && (Et = !0), I.defaultPrevented && Ae != null && typeof Ae == "object")
            try {
              Ae._suppressLogging = !0;
            } catch {
            }
        }
        var X = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), Cd.addEventListener(X, Pe, !1), T.initEvent(X, !1, !1), Cd.dispatchEvent(T), P && Object.defineProperty(window, "event", P), M && L && (bt ? Et && (Ae = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ae = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ae)), window.removeEventListener("error", A), !M)
          return q(), Rd.apply(this, arguments);
      };
    }
    var Td = Fv, ga = !1, Ds = null, Ji = !1, Ua = null, ks = {
      onError: function(e) {
        ga = !0, Ds = e;
      }
    };
    function li(e, t, a, i, o, s, f, v, m) {
      ga = !1, Ds = null, Td.apply(ks, arguments);
    }
    function wd(e, t, a, i, o, s, f, v, m) {
      if (li.apply(this, arguments), ga) {
        var R = Ki();
        Ji || (Ji = !0, Ua = R);
      }
    }
    function xy() {
      if (Ji) {
        var e = Ua;
        throw Ji = !1, Ua = null, e;
      }
    }
    function Oy() {
      return ga;
    }
    function Ki() {
      if (ga) {
        var e = Ds;
        return ga = !1, Ds = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Si(e) {
      return e._reactInternals;
    }
    function uu(e) {
      return e._reactInternals !== void 0;
    }
    function _c(e, t) {
      e._reactInternals = t;
    }
    var je = (
      /*                      */
      0
    ), oi = (
      /*                */
      1
    ), Qt = (
      /*                    */
      2
    ), Me = (
      /*                       */
      4
    ), Mt = (
      /*                */
      16
    ), za = (
      /*                 */
      32
    ), Jn = (
      /*                     */
      64
    ), et = (
      /*                   */
      128
    ), _r = (
      /*            */
      256
    ), Sa = (
      /*                          */
      512
    ), jn = (
      /*                     */
      1024
    ), Qr = (
      /*                      */
      2048
    ), Ei = (
      /*                    */
      4096
    ), Dl = (
      /*                   */
      8192
    ), yo = (
      /*             */
      16384
    ), jv = Qr | Me | Jn | Sa | jn | yo, Zi = (
      /*               */
      32767
    ), kl = (
      /*                   */
      32768
    ), or = (
      /*                */
      65536
    ), Lc = (
      /* */
      131072
    ), Hv = (
      /*                       */
      1048576
    ), Ri = (
      /*                    */
      2097152
    ), Aa = (
      /*                 */
      4194304
    ), _l = (
      /*                */
      8388608
    ), Ia = (
      /*               */
      16777216
    ), go = (
      /*              */
      33554432
    ), Jr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Me | jn | 0
    ), Kr = Qt | Me | Mt | za | Sa | Ei | Dl, ui = Me | Jn | Sa | Dl, Zr = Qr | Mt, ur = Aa | _l | Ri, So = C.ReactCurrentOwner;
    function Ll(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Qt | Ei)) !== je && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ie ? a : null;
    }
    function Nc(e) {
      if (e.tag === Ne) {
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
    function Mc(e) {
      return e.tag === ie ? e.stateNode.containerInfo : null;
    }
    function Ea(e) {
      return Ll(e) === e;
    }
    function Ra(e) {
      {
        var t = So.current;
        if (t !== null && t.tag === W) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", $e(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Si(e);
      return o ? Ll(o) === o : !1;
    }
    function un(e) {
      if (Ll(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Fa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ll(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var v = s.return;
          if (v !== null) {
            i = o = v;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var m = s.child; m; ) {
            if (m === i)
              return un(s), e;
            if (m === o)
              return un(s), t;
            m = m.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var R = !1, T = s.child; T; ) {
            if (T === i) {
              R = !0, i = s, o = f;
              break;
            }
            if (T === o) {
              R = !0, o = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!R) {
            for (T = f.child; T; ) {
              if (T === i) {
                R = !0, i = f, o = s;
                break;
              }
              if (T === o) {
                R = !0, o = f, i = s;
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
      if (i.tag !== ie)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function bd(e) {
      var t = Fa(e);
      return t !== null ? xd(t) : null;
    }
    function xd(e) {
      if (e.tag === G || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = xd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Od(e) {
      var t = Fa(e);
      return t !== null ? Uc(t) : null;
    }
    function Uc(e) {
      if (e.tag === G || e.tag === J)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Se) {
          var a = Uc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Dd = y.unstable_scheduleCallback, zc = y.unstable_cancelCallback, Pv = y.unstable_shouldYield, su = y.unstable_requestPaint, Hn = y.unstable_now, Dy = y.unstable_getCurrentPriorityLevel, $r = y.unstable_ImmediatePriority, cu = y.unstable_UserBlockingPriority, Ci = y.unstable_NormalPriority, fu = y.unstable_LowPriority, _s = y.unstable_IdlePriority, kd = y.unstable_yieldValue, _d = y.unstable_setDisableYieldValue, Nl = null, kn = null, fe = null, wr = !1, Ca = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Bv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ft && (e = ut({}, e, {
          getLaneLabelMap: Ac,
          injectProfilingHooks: Ul
        })), Nl = t.inject(e), kn = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function $i(e, t) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(Nl, e, t);
        } catch (a) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function Ml(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & et) === et;
          if (gt) {
            var i;
            switch (t) {
              case Mn:
                i = $r;
                break;
              case tl:
                i = cu;
                break;
              case bi:
                i = Ci;
                break;
              case Ru:
                i = _s;
                break;
              default:
                i = Ci;
                break;
            }
            kn.onCommitFiberRoot(Nl, e, i, a);
          }
        } catch (o) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", o));
        }
    }
    function Ld(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(Nl, e);
        } catch (t) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Vv(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Nl, e);
        } catch (t) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function tn(e) {
      if (typeof kd == "function" && (_d(e), U(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(Nl, e);
        } catch (t) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Ul(e) {
      fe = e;
    }
    function Ac() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _n; a++) {
          var i = Kv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Yv(e) {
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function Ls() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function du(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function Eo() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function Nd(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function Ic() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function Wv(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function qv() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function Xv(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function Md() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function pu(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ns() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function Gv(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function Qv(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function vu(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function Jv() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function Ms(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function Ti() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function hu(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function Us() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function zl() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function Ud(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function mu(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function Fc(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    var He = (
      /*                         */
      0
    ), ze = (
      /*                 */
      1
    ), _t = (
      /*                    */
      2
    ), Cn = (
      /*               */
      8
    ), ja = (
      /*              */
      16
    ), zs = Math.clz32 ? Math.clz32 : mn, zd = Math.log, Ro = Math.LN2;
    function mn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (zd(t) / Ro | 0) | 0;
    }
    var _n = 31, Q = (
      /*                        */
      0
    ), Ln = (
      /*                          */
      0
    ), Ve = (
      /*                        */
      1
    ), wi = (
      /*    */
      2
    ), el = (
      /*             */
      4
    ), Tn = (
      /*            */
      8
    ), Ha = (
      /*                     */
      16
    ), Co = (
      /*                */
      32
    ), Al = (
      /*                       */
      4194240
    ), ea = (
      /*                        */
      64
    ), ta = (
      /*                        */
      128
    ), To = (
      /*                        */
      256
    ), As = (
      /*                        */
      512
    ), Is = (
      /*                        */
      1024
    ), jc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Bc = (
      /*                        */
      16384
    ), Vc = (
      /*                       */
      32768
    ), Yc = (
      /*                       */
      65536
    ), Wc = (
      /*                       */
      131072
    ), qc = (
      /*                       */
      262144
    ), wo = (
      /*                       */
      524288
    ), Xc = (
      /*                       */
      1048576
    ), yu = (
      /*                       */
      2097152
    ), bo = (
      /*                            */
      130023424
    ), xo = (
      /*                             */
      4194304
    ), Fs = (
      /*                             */
      8388608
    ), Gc = (
      /*                             */
      16777216
    ), Qc = (
      /*                             */
      33554432
    ), Jc = (
      /*                             */
      67108864
    ), Ad = xo, Oo = (
      /*          */
      134217728
    ), Id = (
      /*                          */
      268435455
    ), gu = (
      /*               */
      268435456
    ), Il = (
      /*                        */
      536870912
    ), Ta = (
      /*                   */
      1073741824
    );
    function Kv(e) {
      {
        if (e & Ve)
          return "Sync";
        if (e & wi)
          return "InputContinuousHydration";
        if (e & el)
          return "InputContinuous";
        if (e & Tn)
          return "DefaultHydration";
        if (e & Ha)
          return "Default";
        if (e & Co)
          return "TransitionHydration";
        if (e & Al)
          return "Transition";
        if (e & bo)
          return "Retry";
        if (e & Oo)
          return "SelectiveHydration";
        if (e & gu)
          return "IdleHydration";
        if (e & Il)
          return "Idle";
        if (e & Ta)
          return "Offscreen";
      }
    }
    var nn = -1, Kc = ea, js = xo;
    function Su(e) {
      switch (Nn(e)) {
        case Ve:
          return Ve;
        case wi:
          return wi;
        case el:
          return el;
        case Tn:
          return Tn;
        case Ha:
          return Ha;
        case Co:
          return Co;
        case ea:
        case ta:
        case To:
        case As:
        case Is:
        case jc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case Yc:
        case Wc:
        case qc:
        case wo:
        case Xc:
        case yu:
          return e & Al;
        case xo:
        case Fs:
        case Gc:
        case Qc:
        case Jc:
          return e & bo;
        case Oo:
          return Oo;
        case gu:
          return gu;
        case Il:
          return Il;
        case Ta:
          return Ta;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Hs(e, t) {
      var a = e.pendingLanes;
      if (a === Q)
        return Q;
      var i = Q, o = e.suspendedLanes, s = e.pingedLanes, f = a & Id;
      if (f !== Q) {
        var v = f & ~o;
        if (v !== Q)
          i = Su(v);
        else {
          var m = f & s;
          m !== Q && (i = Su(m));
        }
      } else {
        var R = a & ~o;
        R !== Q ? i = Su(R) : s !== Q && (i = Su(s));
      }
      if (i === Q)
        return Q;
      if (t !== Q && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === Q) {
        var T = Nn(i), M = Nn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= M || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Ha && (M & Al) !== Q
        )
          return t;
      }
      (i & el) !== Q && (i |= a & Ha);
      var L = e.entangledLanes;
      if (L !== Q)
        for (var H = e.entanglements, P = i & L; P > 0; ) {
          var q = jl(P), Re = 1 << q;
          i |= H[q], P &= ~Re;
        }
      return i;
    }
    function Zc(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var o = jl(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function ky(e, t) {
      switch (e) {
        case Ve:
        case wi:
        case el:
          return t + 250;
        case Tn:
        case Ha:
        case Co:
        case ea:
        case ta:
        case To:
        case As:
        case Is:
        case jc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case Yc:
        case Wc:
        case qc:
        case wo:
        case Xc:
        case yu:
          return t + 5e3;
        case xo:
        case Fs:
        case Gc:
        case Qc:
        case Jc:
          return nn;
        case Oo:
        case gu:
        case Il:
        case Ta:
          return nn;
        default:
          return E("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function _y(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = jl(f), m = 1 << v, R = s[v];
        R === nn ? ((m & i) === Q || (m & o) !== Q) && (s[v] = ky(m, t)) : R <= t && (e.expiredLanes |= m), f &= ~m;
      }
    }
    function Ly(e) {
      return Su(e.pendingLanes);
    }
    function Fl(e) {
      var t = e.pendingLanes & ~Ta;
      return t !== Q ? t : t & Ta ? Ta : Q;
    }
    function Fd(e) {
      return (e & Ve) !== Q;
    }
    function Ps(e) {
      return (e & Id) !== Q;
    }
    function Zv(e) {
      return (e & bo) === e;
    }
    function $v(e) {
      var t = Ve | el | Ha;
      return (e & t) === Q;
    }
    function eh(e) {
      return (e & Al) === e;
    }
    function Bs(e, t) {
      var a = wi | el | Tn | Ha;
      return (t & a) !== Q;
    }
    function th(e, t) {
      return (t & e.expiredLanes) !== Q;
    }
    function jd(e) {
      return (e & Al) !== Q;
    }
    function nh() {
      var e = Kc;
      return Kc <<= 1, (Kc & Al) === Q && (Kc = ea), e;
    }
    function na() {
      var e = js;
      return js <<= 1, (js & bo) === Q && (js = xo), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function Eu(e) {
      return Nn(e);
    }
    function jl(e) {
      return 31 - zs(e);
    }
    function $c(e) {
      return jl(e);
    }
    function ra(e, t) {
      return (e & t) !== Q;
    }
    function Do(e, t) {
      return (e & t) === t;
    }
    function rt(e, t) {
      return e | t;
    }
    function Vs(e, t) {
      return e & ~t;
    }
    function ef(e, t) {
      return e & t;
    }
    function Ny(e) {
      return e;
    }
    function rh(e, t) {
      return e !== Ln && e < t ? e : t;
    }
    function Ys(e) {
      for (var t = [], a = 0; a < _n; a++)
        t.push(e);
      return t;
    }
    function ko(e, t, a) {
      e.pendingLanes |= t, t !== Il && (e.suspendedLanes = Q, e.pingedLanes = Q);
      var i = e.eventTimes, o = $c(t);
      i[o] = a;
    }
    function ah(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = jl(i), s = 1 << o;
        a[o] = nn, i &= ~s;
      }
    }
    function tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function nf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = jl(f), m = 1 << v;
        i[v] = Q, o[v] = nn, s[v] = nn, f &= ~m;
      }
    }
    function Hd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = jl(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function ih(e, t) {
      var a = Nn(t), i;
      switch (a) {
        case el:
          i = wi;
          break;
        case Ha:
          i = Tn;
          break;
        case ea:
        case ta:
        case To:
        case As:
        case Is:
        case jc:
        case Hc:
        case Pc:
        case Bc:
        case Vc:
        case Yc:
        case Wc:
        case qc:
        case wo:
        case Xc:
        case yu:
        case xo:
        case Fs:
        case Gc:
        case Qc:
        case Jc:
          i = Co;
          break;
        case Il:
          i = gu;
          break;
        default:
          i = Ln;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ln ? Ln : i;
    }
    function rf(e, t, a) {
      if (Ca)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = $c(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Pd(e, t) {
      if (Ca)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = $c(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(v) {
            var m = v.alternate;
            (m === null || !i.has(m)) && i.add(v);
          }), f.clear()), t &= ~s;
        }
    }
    function Ws(e, t) {
      return null;
    }
    var Mn = Ve, tl = el, bi = Ha, Ru = Il, Cu = Ln;
    function Pa() {
      return Cu;
    }
    function wn(e) {
      Cu = e;
    }
    function br(e, t) {
      var a = Cu;
      try {
        return Cu = e, t();
      } finally {
        Cu = a;
      }
    }
    function My(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Uy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Tu(e, t) {
      return e !== 0 && e < t;
    }
    function sr(e) {
      var t = Nn(e);
      return Tu(Mn, t) ? Tu(tl, t) ? Ps(t) ? bi : Ru : tl : Mn;
    }
    function af(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Te;
    function wu(e) {
      Te = e;
    }
    function Bd(e) {
      Te(e);
    }
    var lf;
    function zy(e) {
      lf = e;
    }
    var bu;
    function of(e) {
      bu = e;
    }
    var uf;
    function lh(e) {
      uf = e;
    }
    var Vd;
    function oh(e) {
      Vd = e;
    }
    var qs = !1, xu = [], dn = null, Kn = null, Lr = null, Ou = /* @__PURE__ */ new Map(), Du = /* @__PURE__ */ new Map(), Zn = [], uh = [
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
    function xi(e) {
      return uh.indexOf(e) > -1;
    }
    function Ay(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Yd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          dn = null;
          break;
        case "dragenter":
        case "dragleave":
          Kn = null;
          break;
        case "mouseover":
        case "mouseout":
          Lr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ou.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Du.delete(i);
          break;
        }
      }
    }
    function ku(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ay(t, a, i, o, s);
        if (t !== null) {
          var v = Fu(t);
          v !== null && lf(v);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var m = e.targetContainers;
      return o !== null && m.indexOf(o) === -1 && m.push(o), e;
    }
    function sh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return dn = ku(dn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return Kn = ku(Kn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var v = o;
          return Lr = ku(Lr, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var m = o, R = m.pointerId;
          return Ou.set(R, ku(Ou.get(R) || null, e, t, a, i, m)), !0;
        }
        case "gotpointercapture": {
          var T = o, M = T.pointerId;
          return Du.set(M, ku(Du.get(M) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function Wd(e) {
      var t = ac(e.target);
      if (t !== null) {
        var a = Ll(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ne) {
            var o = Nc(a);
            if (o !== null) {
              e.blockedOn = o, Vd(e.priority, function() {
                bu(a);
              });
              return;
            }
          } else if (i === ie) {
            var s = a.stateNode;
            if (af(s)) {
              e.blockedOn = Mc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Iy(e) {
      for (var t = uf(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Zn.length && Tu(t, Zn[i].priority); i++)
        ;
      Zn.splice(i, 0, a), i === 0 && Wd(a);
    }
    function _o(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = xr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          by(s), o.target.dispatchEvent(s), Uv();
        } else {
          var f = Fu(i);
          return f !== null && lf(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function sf(e, t, a) {
      _o(e) && a.delete(t);
    }
    function Ba() {
      qs = !1, dn !== null && _o(dn) && (dn = null), Kn !== null && _o(Kn) && (Kn = null), Lr !== null && _o(Lr) && (Lr = null), Ou.forEach(sf), Du.forEach(sf);
    }
    function St(e, t) {
      e.blockedOn === t && (e.blockedOn = null, qs || (qs = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Ba)));
    }
    function bn(e) {
      if (xu.length > 0) {
        St(xu[0], e);
        for (var t = 1; t < xu.length; t++) {
          var a = xu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      dn !== null && St(dn, e), Kn !== null && St(Kn, e), Lr !== null && St(Lr, e);
      var i = function(v) {
        return St(v, e);
      };
      Ou.forEach(i), Du.forEach(i);
      for (var o = 0; o < Zn.length; o++) {
        var s = Zn[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Zn.length > 0; ) {
        var f = Zn[0];
        if (f.blockedOn !== null)
          break;
        Wd(f), f.blockedOn === null && Zn.shift();
      }
    }
    var sn = C.ReactCurrentBatchConfig, Yn = !0;
    function aa(e) {
      Yn = !!e;
    }
    function _u() {
      return Yn;
    }
    function Wn(e, t, a) {
      var i = cf(t), o;
      switch (i) {
        case Mn:
          o = Xs;
          break;
        case tl:
          o = Lo;
          break;
        case bi:
        default:
          o = Lu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Xs(e, t, a, i) {
      var o = Pa(), s = sn.transition;
      sn.transition = null;
      try {
        wn(Mn), Lu(e, t, a, i);
      } finally {
        wn(o), sn.transition = s;
      }
    }
    function Lo(e, t, a, i) {
      var o = Pa(), s = sn.transition;
      sn.transition = null;
      try {
        wn(tl), Lu(e, t, a, i);
      } finally {
        wn(o), sn.transition = s;
      }
    }
    function Lu(e, t, a, i) {
      Yn && qd(e, t, a, i);
    }
    function qd(e, t, a, i) {
      var o = xr(e, t, a, i);
      if (o === null) {
        eg(e, t, i, Hl, a), Yd(e, i);
        return;
      }
      if (sh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Yd(e, i), t & Ts && xi(e)) {
        for (; o !== null; ) {
          var s = Fu(o);
          s !== null && Bd(s);
          var f = xr(e, t, a, i);
          if (f === null && eg(e, t, i, Hl, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      eg(e, t, i, null, a);
    }
    var Hl = null;
    function xr(e, t, a, i) {
      Hl = null;
      var o = Gt(i), s = ac(o);
      if (s !== null) {
        var f = Ll(s);
        if (f === null)
          s = null;
        else {
          var v = f.tag;
          if (v === Ne) {
            var m = Nc(f);
            if (m !== null)
              return m;
            s = null;
          } else if (v === ie) {
            var R = f.stateNode;
            if (af(R))
              return Mc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Hl = s, null;
    }
    function cf(e) {
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
          return Mn;
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
          return tl;
        case "message": {
          var t = Dy();
          switch (t) {
            case $r:
              return Mn;
            case cu:
              return tl;
            case Ci:
            case fu:
              return bi;
            case _s:
              return Ru;
            default:
              return bi;
          }
        }
        default:
          return bi;
      }
    }
    function Nu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function nl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ff(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Xd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Va = null, Mu = null, Ya = null;
    function df(e) {
      return Va = e, Mu = Qs(), !0;
    }
    function Gs() {
      Va = null, Mu = null, Ya = null;
    }
    function pf() {
      if (Ya)
        return Ya;
      var e, t = Mu, a = t.length, i, o = Qs(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Ya = o.slice(e, v), Ya;
    }
    function Qs() {
      return "value" in Va ? Va.value : Va.textContent;
    }
    function No(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function $n() {
      return !0;
    }
    function rl() {
      return !1;
    }
    function yn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var m = e[v];
            m ? this[v] = m(s) : this[v] = s[v];
          }
        var R = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return R ? this.isDefaultPrevented = $n : this.isDefaultPrevented = rl, this.isPropagationStopped = rl, this;
      }
      return ut(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = $n);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = $n);
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
        isPersistent: $n
      }), t;
    }
    var qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, vf = yn(qn), Mo = ut({}, qn, {
      view: 0,
      detail: 0
    }), Gd = yn(Mo), Qd, Oi, Uu;
    function Jd(e) {
      e !== Uu && (Uu && e.type === "mousemove" ? (Qd = e.screenX - Uu.screenX, Oi = e.screenY - Uu.screenY) : (Qd = 0, Oi = 0), Uu = e);
    }
    var Di = ut({}, Mo, {
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
      getModifierState: Kd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Jd(e), Qd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Oi;
      }
    }), hf = yn(Di), Uo = ut({}, Di, {
      dataTransfer: 0
    }), ch = yn(Uo), fh = ut({}, Mo, {
      relatedTarget: 0
    }), Js = yn(fh), mf = ut({}, qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Fy = yn(mf), jy = ut({}, qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), dh = yn(jy), ph = ut({}, qn, {
      data: 0
    }), Pl = yn(ph), Hy = Pl, zu = {
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
    }, vh = {
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
    function xn(e) {
      if (e.key) {
        var t = zu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = No(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? vh[e.keyCode] || "Unidentified" : "";
    }
    var Py = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function hh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Py[e];
      return i ? !!a[i] : !1;
    }
    function Kd(e) {
      return hh;
    }
    var By = ut({}, Mo, {
      key: xn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? No(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? No(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), mh = yn(By), yh = ut({}, Di, {
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
    }), gh = yn(yh), Wa = ut({}, Mo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kd
    }), Zd = yn(Wa), Vy = ut({}, qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bl = yn(Vy), yf = ut({}, Di, {
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
    }), zo = yn(yf), gf = [9, 13, 27, 32], Sf = 229, Ks = En && "CompositionEvent" in window, Zs = null;
    En && "documentMode" in document && (Zs = document.documentMode);
    var $d = En && "TextEvent" in window && !Zs, Sh = En && (!Ks || Zs && Zs > 8 && Zs <= 11), ep = 32, tp = String.fromCharCode(ep);
    function Ef() {
      Pr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Pr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Pr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var $s = !1;
    function Eh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function np(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Yy(e, t) {
      return e === "keydown" && t.keyCode === Sf;
    }
    function rp(e, t) {
      switch (e) {
        case "keyup":
          return gf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Sf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Rf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ec(e) {
      return e.locale === "ko";
    }
    var Vl = !1;
    function Cf(e, t, a, i, o) {
      var s, f;
      if (Ks ? s = np(t) : Vl ? rp(t, i) && (s = "onCompositionEnd") : Yy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Sh && !ec(i) && (!Vl && s === "onCompositionStart" ? Vl = df(o) : s === "onCompositionEnd" && Vl && (f = pf()));
      var v = xh(a, s);
      if (v.length > 0) {
        var m = new Pl(s, t, null, i, o);
        if (e.push({
          event: m,
          listeners: v
        }), f)
          m.data = f;
        else {
          var R = Rf(i);
          R !== null && (m.data = R);
        }
      }
    }
    function Rh(e, t) {
      switch (e) {
        case "compositionend":
          return Rf(t);
        case "keypress":
          var a = t.which;
          return a !== ep ? null : ($s = !0, tp);
        case "textInput":
          var i = t.data;
          return i === tp && $s ? null : i;
        default:
          return null;
      }
    }
    function Wy(e, t) {
      if (Vl) {
        if (e === "compositionend" || !Ks && rp(e, t)) {
          var a = pf();
          return Gs(), Vl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Eh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Sh && !ec(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Tf(e, t, a, i, o) {
      var s;
      if ($d ? s = Rh(t, i) : s = Wy(t, i), !s)
        return null;
      var f = xh(a, "onBeforeInput");
      if (f.length > 0) {
        var v = new Hy("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: v,
          listeners: f
        }), v.data = s;
      }
    }
    function qy(e, t, a, i, o, s, f) {
      Cf(e, t, a, i, o), Tf(e, t, a, i, o);
    }
    var tc = {
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
    function Ch(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!tc[e.type] : t === "textarea";
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
    function wf(e) {
      if (!En)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Pr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      ou(i);
      var o = xh(t, "onChange");
      if (o.length > 0) {
        var s = new vf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var l = null, u = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, u, e, Gt(e)), bs(S, t);
    }
    function S(e) {
      SE(e, 0);
    }
    function w(e) {
      var t = _f(e);
      if (eu(t))
        return e;
    }
    function k(e, t) {
      if (e === "change")
        return t;
    }
    var B = !1;
    En && (B = wf("input") && (!document.documentMode || document.documentMode > 9));
    function ae(e, t) {
      l = e, u = t, l.attachEvent("onpropertychange", te);
    }
    function le() {
      l && (l.detachEvent("onpropertychange", te), l = null, u = null);
    }
    function te(e) {
      e.propertyName === "value" && w(u) && d(e);
    }
    function ye(e, t, a) {
      e === "focusin" ? (le(), ae(t, a)) : e === "focusout" && le();
    }
    function Oe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(u);
    }
    function Le(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Un(e, t) {
      if (e === "click")
        return w(t);
    }
    function z(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function N(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ge(e, "number", e.value);
    }
    function F(e, t, a, i, o, s, f) {
      var v = a ? _f(a) : window, m, R;
      if (c(v) ? m = k : Ch(v) ? B ? m = z : (m = Oe, R = ye) : Le(v) && (m = Un), m) {
        var T = m(t, a);
        if (T) {
          r(e, T, i, o);
          return;
        }
      }
      R && R(t, v, a), t === "focusout" && N(v);
    }
    function se() {
      gr("onMouseEnter", ["mouseout", "mouseover"]), gr("onMouseLeave", ["mouseout", "mouseover"]), gr("onPointerEnter", ["pointerout", "pointerover"]), gr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ue(e, t, a, i, o, s, f) {
      var v = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout";
      if (v && !zv(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (ac(R) || yp(R)))
          return;
      }
      if (!(!m && !v)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var M = o.ownerDocument;
          M ? T = M.defaultView || M.parentWindow : T = window;
        }
        var L, H;
        if (m) {
          var P = i.relatedTarget || i.toElement;
          if (L = a, H = P ? ac(P) : null, H !== null) {
            var q = Ll(H);
            (H !== q || H.tag !== G && H.tag !== J) && (H = null);
          }
        } else
          L = null, H = a;
        if (L !== H) {
          var Re = hf, Pe = "onMouseLeave", Ae = "onMouseEnter", bt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Re = gh, Pe = "onPointerLeave", Ae = "onPointerEnter", bt = "pointer");
          var Et = L == null ? T : _f(L), A = H == null ? T : _f(H), X = new Re(Pe, bt + "leave", L, i, o);
          X.target = Et, X.relatedTarget = A;
          var I = null, oe = ac(o);
          if (oe === a) {
            var Ce = new Re(Ae, bt + "enter", H, i, o);
            Ce.target = A, Ce.relatedTarget = Et, I = Ce;
          }
          ew(e, X, I, L, H);
        }
      }
    }
    function Ye(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var De = typeof Object.is == "function" ? Object.is : Ye;
    function Xe(e, t) {
      if (De(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!ar.call(t, s) || !De(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Xn(e) {
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
    function al(e, t) {
      for (var a = Xn(e), i = 0, o = 0; a; ) {
        if (a.nodeType === qi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Xn(Ut(a));
      }
    }
    function Xy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return UT(e, o, s, f, v);
    }
    function UT(e, t, a, i, o) {
      var s = 0, f = -1, v = -1, m = 0, R = 0, T = e, M = null;
      e:
        for (; ; ) {
          for (var L = null; T === t && (a === 0 || T.nodeType === qi) && (f = s + a), T === i && (o === 0 || T.nodeType === qi) && (v = s + o), T.nodeType === qi && (s += T.nodeValue.length), (L = T.firstChild) !== null; )
            M = T, T = L;
          for (; ; ) {
            if (T === e)
              break e;
            if (M === t && ++m === a && (f = s), M === i && ++R === o && (v = s), (L = T.nextSibling) !== null)
              break;
            T = M, M = T.parentNode;
          }
          T = L;
        }
      return f === -1 || v === -1 ? null : {
        start: f,
        end: v
      };
    }
    function zT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > v) {
          var m = v;
          v = f, f = m;
        }
        var R = al(e, f), T = al(e, v);
        if (R && T) {
          if (o.rangeCount === 1 && o.anchorNode === R.node && o.anchorOffset === R.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var M = a.createRange();
          M.setStart(R.node, R.offset), o.removeAllRanges(), f > v ? (o.addRange(M), o.extend(T.node, T.offset)) : (M.setEnd(T.node, T.offset), o.addRange(M));
        }
      }
    }
    function oE(e) {
      return e && e.nodeType === qi;
    }
    function uE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : oE(e) ? !1 : oE(t) ? uE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function AT(e) {
      return e && e.ownerDocument && uE(e.ownerDocument.documentElement, e);
    }
    function IT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function sE() {
      for (var e = window, t = yi(); t instanceof e.HTMLIFrameElement; ) {
        if (IT(t))
          e = t.contentWindow;
        else
          return t;
        t = yi(e.document);
      }
      return t;
    }
    function Gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function FT() {
      var e = sE();
      return {
        focusedElem: e,
        selectionRange: Gy(e) ? HT(e) : null
      };
    }
    function jT(e) {
      var t = sE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && AT(a)) {
        i !== null && Gy(a) && PT(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Gr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var v = o[f];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function HT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Xy(e), t || {
        start: 0,
        end: 0
      };
    }
    function PT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : zT(e, t);
    }
    var BT = En && "documentMode" in document && document.documentMode <= 11;
    function VT() {
      Pr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var bf = null, Qy = null, ap = null, Jy = !1;
    function YT(e) {
      if ("selectionStart" in e && Gy(e))
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
    function WT(e) {
      return e.window === e ? e.document : e.nodeType === ya ? e : e.ownerDocument;
    }
    function cE(e, t, a) {
      var i = WT(a);
      if (!(Jy || bf == null || bf !== yi(i))) {
        var o = YT(bf);
        if (!ap || !Xe(ap, o)) {
          ap = o;
          var s = xh(Qy, "onSelect");
          if (s.length > 0) {
            var f = new vf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = bf;
          }
        }
      }
    }
    function qT(e, t, a, i, o, s, f) {
      var v = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (Ch(v) || v.contentEditable === "true") && (bf = v, Qy = a, ap = null);
          break;
        case "focusout":
          bf = null, Qy = null, ap = null;
          break;
        case "mousedown":
          Jy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Jy = !1, cE(e, i, o);
          break;
        case "selectionchange":
          if (BT)
            break;
        case "keydown":
        case "keyup":
          cE(e, i, o);
      }
    }
    function Th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xf = {
      animationend: Th("Animation", "AnimationEnd"),
      animationiteration: Th("Animation", "AnimationIteration"),
      animationstart: Th("Animation", "AnimationStart"),
      transitionend: Th("Transition", "TransitionEnd")
    }, Ky = {}, fE = {};
    En && (fE = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function wh(e) {
      if (Ky[e])
        return Ky[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in fE)
          return Ky[e] = t[a];
      return e;
    }
    var dE = wh("animationend"), pE = wh("animationiteration"), vE = wh("animationstart"), hE = wh("transitionend"), mE = /* @__PURE__ */ new Map(), yE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Au(e, t) {
      mE.set(e, t), Pr(t, [e]);
    }
    function XT() {
      for (var e = 0; e < yE.length; e++) {
        var t = yE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Au(a, "on" + i);
      }
      Au(dE, "onAnimationEnd"), Au(pE, "onAnimationIteration"), Au(vE, "onAnimationStart"), Au("dblclick", "onDoubleClick"), Au("focusin", "onFocus"), Au("focusout", "onBlur"), Au(hE, "onTransitionEnd");
    }
    function GT(e, t, a, i, o, s, f) {
      var v = mE.get(t);
      if (v !== void 0) {
        var m = vf, R = t;
        switch (t) {
          case "keypress":
            if (No(i) === 0)
              return;
          case "keydown":
          case "keyup":
            m = mh;
            break;
          case "focusin":
            R = "focus", m = Js;
            break;
          case "focusout":
            R = "blur", m = Js;
            break;
          case "beforeblur":
          case "afterblur":
            m = Js;
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
            m = hf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = ch;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Zd;
            break;
          case dE:
          case pE:
          case vE:
            m = Fy;
            break;
          case hE:
            m = Bl;
            break;
          case "scroll":
            m = Gd;
            break;
          case "wheel":
            m = zo;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = dh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = gh;
            break;
        }
        var T = (s & Ts) !== 0;
        {
          var M = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", L = ZT(a, v, i.type, T, M);
          if (L.length > 0) {
            var H = new m(v, R, null, i, o);
            e.push({
              event: H,
              listeners: L
            });
          }
        }
      }
    }
    XT(), se(), n(), VT(), Ef();
    function QT(e, t, a, i, o, s, f) {
      GT(e, t, a, i, o, s);
      var v = (s & wy) === 0;
      v && (Ue(e, t, a, i, o), F(e, t, a, i, o), qT(e, t, a, i, o), qy(e, t, a, i, o));
    }
    var ip = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Zy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ip));
    function gE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, wd(i, t, void 0, e), e.currentTarget = null;
    }
    function JT(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, v = s.currentTarget, m = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          gE(e, m, v), i = f;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var T = t[R], M = T.instance, L = T.currentTarget, H = T.listener;
          if (M !== i && e.isPropagationStopped())
            return;
          gE(e, H, L), i = M;
        }
    }
    function SE(e, t) {
      for (var a = (t & Ts) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        JT(s, f, a);
      }
      xy();
    }
    function KT(e, t, a, i, o) {
      var s = Gt(a), f = [];
      QT(f, e, i, a, s, t), SE(f, t);
    }
    function gn(e, t) {
      Zy.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Ob(t), o = tw(e, a);
      i.has(o) || (EE(t, e, Cs, a), i.add(o));
    }
    function $y(e, t, a) {
      Zy.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ts), EE(a, e, i, t);
    }
    var bh = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[bh]) {
        e[bh] = !0, an.forEach(function(a) {
          a !== "selectionchange" && (Zy.has(a) || $y(a, !1, e), $y(a, !0, e));
        });
        var t = e.nodeType === ya ? e : e.ownerDocument;
        t !== null && (t[bh] || (t[bh] = !0, $y("selectionchange", !1, t)));
      }
    }
    function EE(e, t, a, i, o) {
      var s = Wn(e, t, a), f = void 0;
      xs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ff(e, t, s, f) : nl(e, t, s) : f !== void 0 ? Xd(e, t, s, f) : Nu(e, t, s);
    }
    function RE(e, t) {
      return e === t || e.nodeType === Rn && e.parentNode === t;
    }
    function eg(e, t, a, i, o) {
      var s = i;
      if (!(t & Oc) && !(t & Cs)) {
        var f = o;
        if (i !== null) {
          var v = i;
          e:
            for (; ; ) {
              if (v === null)
                return;
              var m = v.tag;
              if (m === ie || m === Se) {
                var R = v.stateNode.containerInfo;
                if (RE(R, f))
                  break;
                if (m === Se)
                  for (var T = v.return; T !== null; ) {
                    var M = T.tag;
                    if (M === ie || M === Se) {
                      var L = T.stateNode.containerInfo;
                      if (RE(L, f))
                        return;
                    }
                    T = T.return;
                  }
                for (; R !== null; ) {
                  var H = ac(R);
                  if (H === null)
                    return;
                  var P = H.tag;
                  if (P === G || P === J) {
                    v = s = H;
                    continue e;
                  }
                  R = R.parentNode;
                }
              }
              v = v.return;
            }
        }
      }
      bs(function() {
        return KT(e, t, a, s);
      });
    }
    function op(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ZT(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, m = [], R = e, T = null; R !== null; ) {
        var M = R, L = M.stateNode, H = M.tag;
        if (H === G && L !== null && (T = L, v !== null)) {
          var P = mo(R, v);
          P != null && m.push(op(R, P, T));
        }
        if (o)
          break;
        R = R.return;
      }
      return m;
    }
    function xh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, v = s.tag;
        if (v === G && f !== null) {
          var m = f, R = mo(o, a);
          R != null && i.unshift(op(o, R, m));
          var T = mo(o, t);
          T != null && i.push(op(o, T, m));
        }
        o = o.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== G);
      return e || null;
    }
    function $T(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Of(s))
        o++;
      for (var f = 0, v = i; v; v = Of(v))
        f++;
      for (; o - f > 0; )
        a = Of(a), o--;
      for (; f - o > 0; )
        i = Of(i), f--;
      for (var m = o; m--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function CE(e, t, a, i, o) {
      for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
        var m = v, R = m.alternate, T = m.stateNode, M = m.tag;
        if (R !== null && R === i)
          break;
        if (M === G && T !== null) {
          var L = T;
          if (o) {
            var H = mo(v, s);
            H != null && f.unshift(op(v, H, L));
          } else if (!o) {
            var P = mo(v, s);
            P != null && f.push(op(v, P, L));
          }
        }
        v = v.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function ew(e, t, a, i, o) {
      var s = i && o ? $T(i, o) : null;
      i !== null && CE(e, t, i, s, !1), o !== null && a !== null && CE(e, a, o, s, !0);
    }
    function tw(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var qa = !1, up = "dangerouslySetInnerHTML", Oh = "suppressContentEditableWarning", Iu = "suppressHydrationWarning", TE = "autoFocus", nc = "children", rc = "style", Dh = "__html", tg, kh, sp, wE, _h, bE, xE;
    tg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, kh = function(e, t) {
      lu(e, t), kv(e, t), Ol(e, t, {
        registrationNameDependencies: nr,
        possibleRegistrationNames: rr
      });
    }, bE = En && !document.documentMode, sp = function(e, t, a) {
      if (!qa) {
        var i = Lh(a), o = Lh(t);
        o !== i && (qa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, wE = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, _h = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, xE = function(e, t) {
      var a = e.namespaceURI === Wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var nw = /\r\n?/g, rw = /\u0000|\uFFFD/g;
    function Lh(e) {
      fa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(nw, `
`).replace(rw, "");
    }
    function Nh(e, t, a, i) {
      var o = Lh(t), s = Lh(e);
      if (s !== o && (i && (qa || (qa = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Z))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function OE(e) {
      return e.nodeType === ya ? e : e.ownerDocument;
    }
    function aw() {
    }
    function Mh(e) {
      e.onclick = aw;
    }
    function iw(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === rc)
            f && Object.freeze(f), Tv(t, f);
          else if (s === up) {
            var v = f ? f[Dh] : void 0;
            v != null && vv(t, v);
          } else if (s === nc)
            if (typeof f == "string") {
              var m = e !== "textarea" || f !== "";
              m && ms(t, f);
            } else
              typeof f == "number" && ms(t, "" + f);
          else
            s === Oh || s === Iu || s === TE || (nr.hasOwnProperty(s) ? f != null && (typeof f != "function" && _h(s, f), s === "onScroll" && gn("scroll", t)) : f != null && Ii(t, s, f, o));
        }
    }
    function lw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === rc ? Tv(e, f) : s === up ? vv(e, f) : s === nc ? ms(e, f) : Ii(e, s, f, i);
      }
    }
    function ow(e, t, a, i) {
      var o, s = OE(a), f, v = i;
      if (v === Wi && (v = ld(e)), v === Wi) {
        if (o = po(e, t), !o && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var m = s.createElement("div");
          m.innerHTML = "<script><\/script>";
          var R = m.firstChild;
          f = m.removeChild(R);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var T = f;
          t.multiple ? T.multiple = !0 : t.size && (T.size = t.size);
        }
      } else
        f = s.createElementNS(v, e);
      return v === Wi && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ar.call(tg, e) && (tg[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function uw(e, t) {
      return OE(t).createTextNode(e);
    }
    function sw(e, t, a, i) {
      var o = po(t, a);
      kh(t, a);
      var s;
      switch (t) {
        case "dialog":
          gn("cancel", e), gn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            gn(ip[f], e);
          s = a;
          break;
        case "source":
          gn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e), s = a;
          break;
        case "details":
          gn("toggle", e), s = a;
          break;
        case "input":
          b(e, a), s = g(e, a), gn("invalid", e);
          break;
        case "option":
          Yt(e, a), s = a;
          break;
        case "select":
          hs(e, a), s = vs(e, a), gn("invalid", e);
          break;
        case "textarea":
          dv(e, a), s = id(e, a), gn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ss(t, s), iw(t, e, i, s, o), t) {
        case "input":
          Bi(e), ue(e, a, !1);
          break;
        case "textarea":
          Bi(e), Ec(e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          ad(e, a);
          break;
        default:
          typeof s.onClick == "function" && Mh(e);
          break;
      }
    }
    function cw(e, t, a, i, o) {
      kh(t, i);
      var s = null, f, v;
      switch (t) {
        case "input":
          f = g(e, a), v = g(e, i), s = [];
          break;
        case "select":
          f = vs(e, a), v = vs(e, i), s = [];
          break;
        case "textarea":
          f = id(e, a), v = id(e, i), s = [];
          break;
        default:
          f = a, v = i, typeof f.onClick != "function" && typeof v.onClick == "function" && Mh(e);
          break;
      }
      Ss(t, v);
      var m, R, T = null;
      for (m in f)
        if (!(v.hasOwnProperty(m) || !f.hasOwnProperty(m) || f[m] == null))
          if (m === rc) {
            var M = f[m];
            for (R in M)
              M.hasOwnProperty(R) && (T || (T = {}), T[R] = "");
          } else
            m === up || m === nc || m === Oh || m === Iu || m === TE || (nr.hasOwnProperty(m) ? s || (s = []) : (s = s || []).push(m, null));
      for (m in v) {
        var L = v[m], H = f != null ? f[m] : void 0;
        if (!(!v.hasOwnProperty(m) || L === H || L == null && H == null))
          if (m === rc)
            if (L && Object.freeze(L), H) {
              for (R in H)
                H.hasOwnProperty(R) && (!L || !L.hasOwnProperty(R)) && (T || (T = {}), T[R] = "");
              for (R in L)
                L.hasOwnProperty(R) && H[R] !== L[R] && (T || (T = {}), T[R] = L[R]);
            } else
              T || (s || (s = []), s.push(m, T)), T = L;
          else if (m === up) {
            var P = L ? L[Dh] : void 0, q = H ? H[Dh] : void 0;
            P != null && q !== P && (s = s || []).push(m, P);
          } else
            m === nc ? (typeof L == "string" || typeof L == "number") && (s = s || []).push(m, "" + L) : m === Oh || m === Iu || (nr.hasOwnProperty(m) ? (L != null && (typeof L != "function" && _h(m, L), m === "onScroll" && gn("scroll", e)), !s && H !== L && (s = [])) : (s = s || []).push(m, L));
      }
      return T && (wv(T, v[rc]), (s = s || []).push(rc, T)), s;
    }
    function fw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && j(e, o);
      var s = po(a, i), f = po(a, o);
      switch (lw(e, t, s, f), a) {
        case "input":
          V(e, o);
          break;
        case "textarea":
          pv(e, o);
          break;
        case "select":
          py(e, o);
          break;
      }
    }
    function dw(e) {
      {
        var t = e.toLowerCase();
        return wc.hasOwnProperty(t) && wc[t] || null;
      }
    }
    function pw(e, t, a, i, o, s, f) {
      var v, m;
      switch (v = po(t, a), kh(t, a), t) {
        case "dialog":
          gn("cancel", e), gn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          gn("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < ip.length; R++)
            gn(ip[R], e);
          break;
        case "source":
          gn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          gn("error", e), gn("load", e);
          break;
        case "details":
          gn("toggle", e);
          break;
        case "input":
          b(e, a), gn("invalid", e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          hs(e, a), gn("invalid", e);
          break;
        case "textarea":
          dv(e, a), gn("invalid", e);
          break;
      }
      Ss(t, a);
      {
        m = /* @__PURE__ */ new Set();
        for (var T = e.attributes, M = 0; M < T.length; M++) {
          var L = T[M].name.toLowerCase();
          switch (L) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              m.add(T[M].name);
          }
        }
      }
      var H = null;
      for (var P in a)
        if (a.hasOwnProperty(P)) {
          var q = a[P];
          if (P === nc)
            typeof q == "string" ? e.textContent !== q && (a[Iu] !== !0 && Nh(e.textContent, q, s, f), H = [nc, q]) : typeof q == "number" && e.textContent !== "" + q && (a[Iu] !== !0 && Nh(e.textContent, q, s, f), H = [nc, "" + q]);
          else if (nr.hasOwnProperty(P))
            q != null && (typeof q != "function" && _h(P, q), P === "onScroll" && gn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var Re = void 0, Pe = v && qe ? null : Qn(P);
            if (a[Iu] !== !0) {
              if (!(P === Oh || P === Iu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              P === "value" || P === "checked" || P === "selected")) {
                if (P === up) {
                  var Ae = e.innerHTML, bt = q ? q[Dh] : void 0;
                  if (bt != null) {
                    var Et = xE(e, bt);
                    Et !== Ae && sp(P, Ae, Et);
                  }
                } else if (P === rc) {
                  if (m.delete(P), bE) {
                    var A = Ty(q);
                    Re = e.getAttribute("style"), A !== Re && sp(P, Re, A);
                  }
                } else if (v && !qe)
                  m.delete(P.toLowerCase()), Re = _a(e, P, q), q !== Re && sp(P, Re, q);
                else if (!pn(P, Pe, v) && !Bt(P, q, Pe, v)) {
                  var X = !1;
                  if (Pe !== null)
                    m.delete(Pe.attributeName), Re = ti(e, P, q, Pe);
                  else {
                    var I = i;
                    if (I === Wi && (I = ld(t)), I === Wi)
                      m.delete(P.toLowerCase());
                    else {
                      var oe = dw(P);
                      oe !== null && oe !== P && (X = !0, m.delete(oe)), m.delete(P);
                    }
                    Re = _a(e, P, q);
                  }
                  var Ce = qe;
                  !Ce && q !== Re && !X && sp(P, Re, q);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      m.size > 0 && a[Iu] !== !0 && wE(m), t) {
        case "input":
          Bi(e), ue(e, a, !0);
          break;
        case "textarea":
          Bi(e), Ec(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Mh(e);
          break;
      }
      return H;
    }
    function vw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ng(e, t) {
      {
        if (qa)
          return;
        qa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function rg(e, t) {
      {
        if (qa)
          return;
        qa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ag(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ig(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function hw(e, t, a) {
      switch (t) {
        case "input":
          _e(e, a);
          return;
        case "textarea":
          vy(e, a);
          return;
        case "select":
          cv(e, a);
          return;
      }
    }
    var cp = function() {
    }, fp = function() {
    };
    {
      var mw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], DE = [
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
      ], yw = DE.concat(["button"]), gw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], kE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      fp = function(e, t) {
        var a = ut({}, e || kE), i = {
          tag: t
        };
        return DE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), yw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), mw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Sw = function(e, t) {
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
            return gw.indexOf(t) === -1;
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
      }, Ew = function(e, t) {
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
      }, _E = {};
      cp = function(e, t, a) {
        a = a || kE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Sw(e, o) ? null : i, f = s ? null : Ew(e, a), v = s || f;
        if (v) {
          var m = v.tag, R = !!s + "|" + e + "|" + m;
          if (!_E[R]) {
            _E[R] = !0;
            var T = e, M = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", M = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var L = "";
              m === "table" && e === "tr" && (L += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, m, M, L);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, m);
          }
        }
      };
    }
    var Uh = "suppressHydrationWarning", zh = "$", Ah = "/$", dp = "$?", pp = "$!", Rw = "style", lg = null, og = null;
    function Cw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ya:
        case ud: {
          t = i === ya ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : od(null, "");
          break;
        }
        default: {
          var s = i === Rn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = od(f, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), m = fp(null, v);
        return {
          namespace: a,
          ancestorInfo: m
        };
      }
    }
    function Tw(e, t, a) {
      {
        var i = e, o = od(i.namespace, t), s = fp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function SL(e) {
      return e;
    }
    function ww(e) {
      lg = _u(), og = FT();
      var t = null;
      return aa(!1), t;
    }
    function bw(e) {
      jT(og), aa(lg), lg = null, og = null;
    }
    function xw(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (cp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, m = fp(f.ancestorInfo, e);
          cp(null, v, m);
        }
        s = f.namespace;
      }
      var R = ow(e, t, a, s);
      return mp(o, R), hg(R, t), R;
    }
    function Ow(e, t) {
      e.appendChild(t);
    }
    function Dw(e, t, a, i, o) {
      switch (sw(e, t, a, i), t) {
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
    function kw(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, m = fp(f.ancestorInfo, t);
          cp(null, v, m);
        }
      }
      return cw(e, t, a, i);
    }
    function ug(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function _w(e, t, a, i) {
      {
        var o = a;
        cp(null, e, o.ancestorInfo);
      }
      var s = uw(e, t);
      return mp(i, s), s;
    }
    function Lw() {
      var e = window.event;
      return e === void 0 ? bi : cf(e.type);
    }
    var sg = typeof setTimeout == "function" ? setTimeout : void 0, Nw = typeof clearTimeout == "function" ? clearTimeout : void 0, cg = -1, LE = typeof Promise == "function" ? Promise : void 0, Mw = typeof queueMicrotask == "function" ? queueMicrotask : typeof LE < "u" ? function(e) {
      return LE.resolve(null).then(e).catch(Uw);
    } : sg;
    function Uw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function zw(e, t, a, i) {
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
    function Aw(e, t, a, i, o, s) {
      fw(e, t, a, i, o), hg(e, o);
    }
    function NE(e) {
      ms(e, "");
    }
    function Iw(e, t, a) {
      e.nodeValue = a;
    }
    function Fw(e, t) {
      e.appendChild(t);
    }
    function jw(e, t) {
      var a;
      e.nodeType === Rn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Mh(a);
    }
    function Hw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Pw(e, t, a) {
      e.nodeType === Rn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Bw(e, t) {
      e.removeChild(t);
    }
    function Vw(e, t) {
      e.nodeType === Rn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function fg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Rn) {
          var s = o.data;
          if (s === Ah)
            if (i === 0) {
              e.removeChild(o), bn(t);
              return;
            } else
              i--;
          else
            (s === zh || s === dp || s === pp) && i++;
        }
        a = o;
      } while (a);
      bn(t);
    }
    function Yw(e, t) {
      e.nodeType === Rn ? fg(e.parentNode, t) : e.nodeType === Gr && fg(e, t), bn(e);
    }
    function Ww(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function qw(e) {
      e.nodeValue = "";
    }
    function Xw(e, t) {
      e = e;
      var a = t[Rw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = bl("display", i);
    }
    function Gw(e, t) {
      e.nodeValue = t;
    }
    function Qw(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === ya && e.documentElement && e.removeChild(e.documentElement);
    }
    function Jw(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Kw(e, t) {
      return t === "" || e.nodeType !== qi ? null : e;
    }
    function Zw(e) {
      return e.nodeType !== Rn ? null : e;
    }
    function ME(e) {
      return e.data === dp;
    }
    function dg(e) {
      return e.data === pp;
    }
    function $w(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function eb(e, t) {
      e._reactRetry = t;
    }
    function Ih(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === qi)
          break;
        if (t === Rn) {
          var a = e.data;
          if (a === zh || a === pp || a === dp)
            break;
          if (a === Ah)
            return null;
        }
      }
      return e;
    }
    function vp(e) {
      return Ih(e.nextSibling);
    }
    function tb(e) {
      return Ih(e.firstChild);
    }
    function nb(e) {
      return Ih(e.firstChild);
    }
    function rb(e) {
      return Ih(e.nextSibling);
    }
    function ab(e, t, a, i, o, s, f) {
      mp(s, e), hg(e, a);
      var v;
      {
        var m = o;
        v = m.namespace;
      }
      var R = (s.mode & ze) !== He;
      return pw(e, t, a, v, i, R, f);
    }
    function ib(e, t, a, i) {
      return mp(a, e), a.mode & ze, vw(e, t);
    }
    function lb(e, t) {
      mp(t, e);
    }
    function ob(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Rn) {
          var i = t.data;
          if (i === Ah) {
            if (a === 0)
              return vp(t);
            a--;
          } else
            (i === zh || i === pp || i === dp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function UE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Rn) {
          var i = t.data;
          if (i === zh || i === pp || i === dp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Ah && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ub(e) {
      bn(e);
    }
    function sb(e) {
      bn(e);
    }
    function cb(e) {
      return e !== "head" && e !== "body";
    }
    function fb(e, t, a, i) {
      var o = !0;
      Nh(t.nodeValue, a, i, o);
    }
    function db(e, t, a, i, o, s) {
      if (t[Uh] !== !0) {
        var f = !0;
        Nh(i.nodeValue, o, s, f);
      }
    }
    function pb(e, t) {
      t.nodeType === Gr ? ng(e, t) : t.nodeType === Rn || rg(e, t);
    }
    function vb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? ng(a, t) : t.nodeType === Rn || rg(a, t));
      }
    }
    function hb(e, t, a, i, o) {
      (o || t[Uh] !== !0) && (i.nodeType === Gr ? ng(a, i) : i.nodeType === Rn || rg(a, i));
    }
    function mb(e, t, a) {
      ag(e, t);
    }
    function yb(e, t) {
      ig(e, t);
    }
    function gb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ag(i, t);
      }
    }
    function Sb(e, t) {
      {
        var a = e.parentNode;
        a !== null && ig(a, t);
      }
    }
    function Eb(e, t, a, i, o, s) {
      (s || t[Uh] !== !0) && ag(a, i);
    }
    function Rb(e, t, a, i, o) {
      (o || t[Uh] !== !0) && ig(a, i);
    }
    function Cb(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Tb(e) {
      lp(e);
    }
    var Df = Math.random().toString(36).slice(2), kf = "__reactFiber$" + Df, pg = "__reactProps$" + Df, hp = "__reactContainer$" + Df, vg = "__reactEvents$" + Df, wb = "__reactListeners$" + Df, bb = "__reactHandles$" + Df;
    function xb(e) {
      delete e[kf], delete e[pg], delete e[vg], delete e[wb], delete e[bb];
    }
    function mp(e, t) {
      t[kf] = e;
    }
    function Fh(e, t) {
      t[hp] = e;
    }
    function zE(e) {
      e[hp] = null;
    }
    function yp(e) {
      return !!e[hp];
    }
    function ac(e) {
      var t = e[kf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[hp] || a[kf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = UE(e); o !== null; ) {
              var s = o[kf];
              if (s)
                return s;
              o = UE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Fu(e) {
      var t = e[kf] || e[hp];
      return t && (t.tag === G || t.tag === J || t.tag === Ne || t.tag === ie) ? t : null;
    }
    function _f(e) {
      if (e.tag === G || e.tag === J)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function jh(e) {
      return e[pg] || null;
    }
    function hg(e, t) {
      e[pg] = t;
    }
    function Ob(e) {
      var t = e[vg];
      return t === void 0 && (t = e[vg] = /* @__PURE__ */ new Set()), t;
    }
    var AE = {}, IE = C.ReactDebugCurrentFrame;
    function Hh(e) {
      if (e) {
        var t = e._owner, a = Rt(e.type, e._source, t ? t.type : null);
        IE.setExtraStackFrame(a);
      } else
        IE.setExtraStackFrame(null);
    }
    function il(e, t, a, i, o) {
      {
        var s = Function.call.bind(ar);
        for (var f in e)
          if (s(e, f)) {
            var v = void 0;
            try {
              if (typeof e[f] != "function") {
                var m = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              v = R;
            }
            v && !(v instanceof Error) && (Hh(o), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), Hh(null)), v instanceof Error && !(v.message in AE) && (AE[v.message] = !0, Hh(o), E("Failed %s type: %s", a, v.message), Hh(null));
          }
      }
    }
    var mg = [], Ph;
    Ph = [];
    var Ao = -1;
    function ju(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (Ao < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Ph[Ao] && E("Unexpected Fiber popped."), e.current = mg[Ao], mg[Ao] = null, Ph[Ao] = null, Ao--;
    }
    function la(e, t, a) {
      Ao++, mg[Ao] = e.current, Ph[Ao] = a, e.current = t;
    }
    var yg;
    yg = {};
    var si = {};
    Object.freeze(si);
    var Io = ju(si), Yl = ju(!1), gg = si;
    function Lf(e, t, a) {
      return a && Wl(t) ? gg : Io.current;
    }
    function FE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Nf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var v = $e(e) || "Unknown";
          il(i, s, "context", v);
        }
        return o && FE(e, t, s), s;
      }
    }
    function Bh() {
      return Yl.current;
    }
    function Wl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Vh(e) {
      ia(Yl, e), ia(Io, e);
    }
    function Sg(e) {
      ia(Yl, e), ia(Io, e);
    }
    function jE(e, t, a) {
      {
        if (Io.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(Io, t, e), la(Yl, a, e);
      }
    }
    function HE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = $e(e) || "Unknown";
            yg[s] || (yg[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var v in f)
          if (!(v in o))
            throw new Error(($e(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var m = $e(e) || "Unknown";
          il(o, f, "child context", m);
        }
        return ut({}, a, f);
      }
    }
    function Yh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return gg = Io.current, la(Io, a, e), la(Yl, Yl.current, e), !0;
      }
    }
    function PE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = HE(e, t, gg);
          i.__reactInternalMemoizedMergedChildContext = o, ia(Yl, e), ia(Io, e), la(Io, o, e), la(Yl, a, e);
        } else
          ia(Yl, e), la(Yl, a, e);
      }
    }
    function Db(e) {
      {
        if (!Ea(e) || e.tag !== W)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ie:
              return t.stateNode.context;
            case W: {
              var a = t.type;
              if (Wl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Hu = 0, Wh = 1, Fo = null, Eg = !1, Rg = !1;
    function BE(e) {
      Fo === null ? Fo = [e] : Fo.push(e);
    }
    function kb(e) {
      Eg = !0, BE(e);
    }
    function VE() {
      Eg && Pu();
    }
    function Pu() {
      if (!Rg && Fo !== null) {
        Rg = !0;
        var e = 0, t = Pa();
        try {
          var a = !0, i = Fo;
          for (wn(Mn); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Fo = null, Eg = !1;
        } catch (s) {
          throw Fo !== null && (Fo = Fo.slice(e + 1)), Dd($r, Pu), s;
        } finally {
          wn(t), Rg = !1;
        }
      }
      return null;
    }
    var Mf = [], Uf = 0, qh = null, Xh = 0, ki = [], _i = 0, ic = null, jo = 1, Ho = "";
    function _b(e) {
      return oc(), (e.flags & Hv) !== je;
    }
    function Lb(e) {
      return oc(), Xh;
    }
    function Nb() {
      var e = Ho, t = jo, a = t & ~Mb(t);
      return a.toString(32) + e;
    }
    function lc(e, t) {
      oc(), Mf[Uf++] = Xh, Mf[Uf++] = qh, qh = e, Xh = t;
    }
    function YE(e, t, a) {
      oc(), ki[_i++] = jo, ki[_i++] = Ho, ki[_i++] = ic, ic = e;
      var i = jo, o = Ho, s = Gh(i) - 1, f = i & ~(1 << s), v = a + 1, m = Gh(t) + s;
      if (m > 30) {
        var R = s - s % 5, T = (1 << R) - 1, M = (f & T).toString(32), L = f >> R, H = s - R, P = Gh(t) + H, q = v << H, Re = q | L, Pe = M + o;
        jo = 1 << P | Re, Ho = Pe;
      } else {
        var Ae = v << s, bt = Ae | f, Et = o;
        jo = 1 << m | bt, Ho = Et;
      }
    }
    function Cg(e) {
      oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        lc(e, a), YE(e, a, i);
      }
    }
    function Gh(e) {
      return 32 - zs(e);
    }
    function Mb(e) {
      return 1 << Gh(e) - 1;
    }
    function Tg(e) {
      for (; e === qh; )
        qh = Mf[--Uf], Mf[Uf] = null, Xh = Mf[--Uf], Mf[Uf] = null;
      for (; e === ic; )
        ic = ki[--_i], ki[_i] = null, Ho = ki[--_i], ki[_i] = null, jo = ki[--_i], ki[_i] = null;
    }
    function Ub() {
      return oc(), ic !== null ? {
        id: jo,
        overflow: Ho
      } : null;
    }
    function zb(e, t) {
      oc(), ki[_i++] = jo, ki[_i++] = Ho, ki[_i++] = ic, jo = t.id, Ho = t.overflow, ic = e;
    }
    function oc() {
      Mr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Nr = null, Li = null, ll = !1, uc = !1, Bu = null;
    function Ab() {
      ll && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function WE() {
      uc = !0;
    }
    function Ib() {
      return uc;
    }
    function Fb(e) {
      var t = e.stateNode.containerInfo;
      return Li = nb(t), Nr = e, ll = !0, Bu = null, uc = !1, !0;
    }
    function jb(e, t, a) {
      return Li = rb(t), Nr = e, ll = !0, Bu = null, uc = !1, a !== null && zb(e, a), !0;
    }
    function qE(e, t) {
      switch (e.tag) {
        case ie: {
          pb(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & ze) !== He;
          hb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ne: {
          var i = e.memoizedState;
          i.dehydrated !== null && vb(i.dehydrated, t);
          break;
        }
      }
    }
    function XE(e, t) {
      qE(e, t);
      var a = BD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Mt) : i.push(a);
    }
    function wg(e, t) {
      {
        if (uc)
          return;
        switch (e.tag) {
          case ie: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, mb(a, i);
                break;
              case J:
                var o = t.pendingProps;
                yb(a, o);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case G: {
                var m = t.type, R = t.pendingProps, T = (e.mode & ze) !== He;
                Eb(
                  s,
                  f,
                  v,
                  m,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case J: {
                var M = t.pendingProps, L = (e.mode & ze) !== He;
                Rb(
                  s,
                  f,
                  v,
                  M,
                  // TODO: Delete this argument when we remove the legacy root API.
                  L
                );
                break;
              }
            }
            break;
          }
          case Ne: {
            var H = e.memoizedState, P = H.dehydrated;
            if (P !== null)
              switch (t.tag) {
                case G:
                  var q = t.type;
                  t.pendingProps, gb(P, q);
                  break;
                case J:
                  var Re = t.pendingProps;
                  Sb(P, Re);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function GE(e, t) {
      t.flags = t.flags & ~Ei | Qt, wg(e, t);
    }
    function QE(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = Jw(t, a);
          return i !== null ? (e.stateNode = i, Nr = e, Li = tb(i), !0) : !1;
        }
        case J: {
          var o = e.pendingProps, s = Kw(t, o);
          return s !== null ? (e.stateNode = s, Nr = e, Li = null, !0) : !1;
        }
        case Ne: {
          var f = Zw(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: Ub(),
              retryLane: Ta
            };
            e.memoizedState = v;
            var m = VD(f);
            return m.return = e, e.child = m, Nr = e, Li = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function bg(e) {
      return (e.mode & ze) !== He && (e.flags & et) === je;
    }
    function xg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Og(e) {
      if (ll) {
        var t = Li;
        if (!t) {
          bg(e) && (wg(Nr, e), xg()), GE(Nr, e), ll = !1, Nr = e;
          return;
        }
        var a = t;
        if (!QE(e, t)) {
          bg(e) && (wg(Nr, e), xg()), t = vp(a);
          var i = Nr;
          if (!t || !QE(e, t)) {
            GE(Nr, e), ll = !1, Nr = e;
            return;
          }
          XE(i, a);
        }
      }
    }
    function Hb(e, t, a) {
      var i = e.stateNode, o = !uc, s = ab(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function Pb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ib(t, a, e);
      if (i) {
        var o = Nr;
        if (o !== null)
          switch (o.tag) {
            case ie: {
              var s = o.stateNode.containerInfo, f = (o.mode & ze) !== He;
              fb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var v = o.type, m = o.memoizedProps, R = o.stateNode, T = (o.mode & ze) !== He;
              db(
                v,
                m,
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
    function Bb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      lb(a, e);
    }
    function Vb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ob(a);
    }
    function JE(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== ie && t.tag !== Ne; )
        t = t.return;
      Nr = t;
    }
    function Qh(e) {
      if (e !== Nr)
        return !1;
      if (!ll)
        return JE(e), ll = !0, !1;
      if (e.tag !== ie && (e.tag !== G || cb(e.type) && !ug(e.type, e.memoizedProps))) {
        var t = Li;
        if (t)
          if (bg(e))
            KE(e), xg();
          else
            for (; t; )
              XE(e, t), t = vp(t);
      }
      return JE(e), e.tag === Ne ? Li = Vb(e) : Li = Nr ? vp(e.stateNode) : null, !0;
    }
    function Yb() {
      return ll && Li !== null;
    }
    function KE(e) {
      for (var t = Li; t; )
        qE(e, t), t = vp(t);
    }
    function zf() {
      Nr = null, Li = null, ll = !1, uc = !1;
    }
    function ZE() {
      Bu !== null && (qR(Bu), Bu = null);
    }
    function Mr() {
      return ll;
    }
    function Dg(e) {
      Bu === null ? Bu = [e] : Bu.push(e);
    }
    var Wb = C.ReactCurrentBatchConfig, qb = null;
    function Xb() {
      return Wb.transition;
    }
    var ol = {
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
      var Gb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Cn && (t = a), a = a.return;
        return t;
      }, sc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Rp = [], Cp = [], Tp = [], cc = /* @__PURE__ */ new Set();
      ol.recordUnsafeLifecycleWarnings = function(e, t) {
        cc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Rp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Cp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillUpdate == "function" && Tp.push(e));
      }, ol.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(L) {
          e.add($e(L) || "Component"), cc.add(L.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(L) {
          t.add($e(L) || "Component"), cc.add(L.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(L) {
          a.add($e(L) || "Component"), cc.add(L.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(L) {
          i.add($e(L) || "Component"), cc.add(L.type);
        }), Rp = []);
        var o = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(L) {
          o.add($e(L) || "Component"), cc.add(L.type);
        }), Cp = []);
        var s = /* @__PURE__ */ new Set();
        if (Tp.length > 0 && (Tp.forEach(function(L) {
          s.add($e(L) || "Component"), cc.add(L.type);
        }), Tp = []), t.size > 0) {
          var f = sc(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var v = sc(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (s.size > 0) {
          var m = sc(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, m);
        }
        if (e.size > 0) {
          var R = sc(e);
          _(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var T = sc(a);
          _(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var M = sc(o);
          _(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
      };
      var Jh = /* @__PURE__ */ new Map(), $E = /* @__PURE__ */ new Set();
      ol.recordLegacyContextWarning = function(e, t) {
        var a = Gb(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!$E.has(e.type)) {
          var i = Jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Jh.set(a, i)), i.push(e));
        }
      }, ol.flushLegacyContextWarning = function() {
        Jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add($e(s) || "Component"), $E.add(s.type);
            });
            var o = sc(i);
            try {
              hn(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              ln();
            }
          }
        });
      }, ol.discardPendingWarnings = function() {
        gp = [], Sp = [], Ep = [], Rp = [], Cp = [], Tp = [], Jh = /* @__PURE__ */ new Map();
      };
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = ut({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var kg = ju(null), _g;
    _g = {};
    var Kh = null, Af = null, Lg = null, Zh = !1;
    function $h() {
      Kh = null, Af = null, Lg = null, Zh = !1;
    }
    function e1() {
      Zh = !0;
    }
    function t1() {
      Zh = !1;
    }
    function n1(e, t, a) {
      la(kg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== _g && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = _g;
    }
    function Ng(e, t) {
      var a = kg.current;
      ia(kg, t), e._currentValue = a;
    }
    function Mg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Do(i.childLanes, t) ? o !== null && !Do(o.childLanes, t) && (o.childLanes = rt(o.childLanes, t)) : (i.childLanes = rt(i.childLanes, t), o !== null && (o.childLanes = rt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qb(e, t, a) {
      Jb(e, t, a);
    }
    function Jb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === W) {
                var v = Eu(a), m = Po(nn, v);
                m.tag = tm;
                var R = i.updateQueue;
                if (R !== null) {
                  var T = R.shared, M = T.pending;
                  M === null ? m.next = m : (m.next = M.next, M.next = m), T.pending = m;
                }
              }
              i.lanes = rt(i.lanes, a);
              var L = i.alternate;
              L !== null && (L.lanes = rt(L.lanes, a)), Mg(i.return, a, e), s.lanes = rt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Qe)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Jt) {
          var H = i.return;
          if (H === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          H.lanes = rt(H.lanes, a);
          var P = H.alternate;
          P !== null && (P.lanes = rt(P.lanes, a)), Mg(H, a, e), o = i.sibling;
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
            var q = o.sibling;
            if (q !== null) {
              q.return = o.return, o = q;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function If(e, t) {
      Kh = e, Af = null, Lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Ip(), a.firstContext = null);
      }
    }
    function er(e) {
      Zh && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Lg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Af === null) {
          if (Kh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Af = a, Kh.dependencies = {
            lanes: Q,
            firstContext: a
          };
        } else
          Af = Af.next = a;
      }
      return t;
    }
    var fc = null;
    function Ug(e) {
      fc === null ? fc = [e] : fc.push(e);
    }
    function Kb() {
      if (fc !== null) {
        for (var e = 0; e < fc.length; e++) {
          var t = fc[e], a = t.interleaved;
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
        fc = null;
      }
    }
    function r1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Ug(t)) : (a.next = o.next, o.next = a), t.interleaved = a, em(e, i);
    }
    function Zb(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Ug(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function $b(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Ug(t)) : (a.next = o.next, o.next = a), t.interleaved = a, em(e, i);
    }
    function Xa(e, t) {
      return em(e, t);
    }
    var ex = em;
    function em(e, t) {
      e.lanes = rt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = rt(a.lanes, t)), a === null && (e.flags & (Qt | Ei)) !== je && aC(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = rt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = rt(a.childLanes, t) : (o.flags & (Qt | Ei)) !== je && aC(e), i = o, o = o.return;
      if (i.tag === ie) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var a1 = 0, i1 = 1, tm = 2, zg = 3, nm = !1, Ag, rm;
    Ag = !1, rm = null;
    function Ig(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Q
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function l1(e, t) {
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
    function Po(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: a1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Vu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (rm === o && !Ag && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Ag = !0), eD()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, ex(e, a);
      } else
        return $b(e, o, t, a);
    }
    function am(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (jd(a)) {
          var s = o.lanes;
          s = ef(s, e.pendingLanes);
          var f = rt(s, a);
          o.lanes = f, Hd(e, f);
        }
      }
    }
    function Fg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var m = v;
            do {
              var R = {
                eventTime: m.eventTime,
                lane: m.lane,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null
              };
              f === null ? s = f = R : (f.next = R, f = R), m = m.next;
            } while (m !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var T = a.lastBaseUpdate;
      T === null ? a.firstBaseUpdate = t : T.next = t, a.lastBaseUpdate = t;
    }
    function tx(e, t, a, i, o, s) {
      switch (a.tag) {
        case i1: {
          var f = a.payload;
          if (typeof f == "function") {
            e1();
            var v = f.call(s, i, o);
            {
              if (e.mode & Cn) {
                tn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  tn(!1);
                }
              }
              t1();
            }
            return v;
          }
          return f;
        }
        case zg:
          e.flags = e.flags & ~or | et;
        case a1: {
          var m = a.payload, R;
          if (typeof m == "function") {
            e1(), R = m.call(s, i, o);
            {
              if (e.mode & Cn) {
                tn(!0);
                try {
                  m.call(s, i, o);
                } finally {
                  tn(!1);
                }
              }
              t1();
            }
          } else
            R = m;
          return R == null ? i : ut({}, i, R);
        }
        case tm:
          return nm = !0, i;
      }
      return i;
    }
    function im(e, t, a, i) {
      var o = e.updateQueue;
      nm = !1, rm = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, v = o.shared.pending;
      if (v !== null) {
        o.shared.pending = null;
        var m = v, R = m.next;
        m.next = null, f === null ? s = R : f.next = R, f = m;
        var T = e.alternate;
        if (T !== null) {
          var M = T.updateQueue, L = M.lastBaseUpdate;
          L !== f && (L === null ? M.firstBaseUpdate = R : L.next = R, M.lastBaseUpdate = m);
        }
      }
      if (s !== null) {
        var H = o.baseState, P = Q, q = null, Re = null, Pe = null, Ae = s;
        do {
          var bt = Ae.lane, Et = Ae.eventTime;
          if (Do(i, bt)) {
            if (Pe !== null) {
              var X = {
                eventTime: Et,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ln,
                tag: Ae.tag,
                payload: Ae.payload,
                callback: Ae.callback,
                next: null
              };
              Pe = Pe.next = X;
            }
            H = tx(e, o, Ae, H, t, a);
            var I = Ae.callback;
            if (I !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ae.lane !== Ln) {
              e.flags |= Jn;
              var oe = o.effects;
              oe === null ? o.effects = [Ae] : oe.push(Ae);
            }
          } else {
            var A = {
              eventTime: Et,
              lane: bt,
              tag: Ae.tag,
              payload: Ae.payload,
              callback: Ae.callback,
              next: null
            };
            Pe === null ? (Re = Pe = A, q = H) : Pe = Pe.next = A, P = rt(P, bt);
          }
          if (Ae = Ae.next, Ae === null) {
            if (v = o.shared.pending, v === null)
              break;
            var Ce = v, me = Ce.next;
            Ce.next = null, Ae = me, o.lastBaseUpdate = Ce, o.shared.pending = null;
          }
        } while (!0);
        Pe === null && (q = H), o.baseState = q, o.firstBaseUpdate = Re, o.lastBaseUpdate = Pe;
        var Ke = o.shared.interleaved;
        if (Ke !== null) {
          var nt = Ke;
          do
            P = rt(P, nt.lane), nt = nt.next;
          while (nt !== Ke);
        } else
          s === null && (o.shared.lanes = Q);
        Qp(P), e.lanes = P, e.memoizedState = H;
      }
      rm = null;
    }
    function nx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function o1() {
      nm = !1;
    }
    function lm() {
      return nm;
    }
    function u1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, nx(f, a));
        }
    }
    var jg = {}, s1 = new h.Component().refs, Hg, Pg, Bg, Vg, Yg, c1, om, Wg, qg, Xg;
    {
      Hg = /* @__PURE__ */ new Set(), Pg = /* @__PURE__ */ new Set(), Bg = /* @__PURE__ */ new Set(), Vg = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set();
      var f1 = /* @__PURE__ */ new Set();
      om = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          f1.has(a) || (f1.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, c1 = function(e, t) {
        if (t === void 0) {
          var a = Dt(e) || "Component";
          Yg.has(a) || (Yg.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(jg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(jg);
    }
    function Gg(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & Cn) {
          tn(!0);
          try {
            s = a(i, o);
          } finally {
            tn(!1);
          }
        }
        c1(t, s);
      }
      var f = s == null ? o : ut({}, o, s);
      if (e.memoizedState = f, e.lanes === Q) {
        var v = e.updateQueue;
        v.baseState = f;
      }
    }
    var Qg = {
      isMounted: Ra,
      enqueueSetState: function(e, t, a) {
        var i = Si(e), o = xa(), s = Ku(i), f = Po(o, s);
        f.payload = t, a != null && (om(a, "setState"), f.callback = a);
        var v = Vu(i, f, s);
        v !== null && (yr(v, i, s, o), am(v, i, s)), Fc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Si(e), o = xa(), s = Ku(i), f = Po(o, s);
        f.tag = i1, f.payload = t, a != null && (om(a, "replaceState"), f.callback = a);
        var v = Vu(i, f, s);
        v !== null && (yr(v, i, s, o), am(v, i, s)), Fc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Si(e), i = xa(), o = Ku(a), s = Po(i, o);
        s.tag = tm, t != null && (om(t, "forceUpdate"), s.callback = t);
        var f = Vu(a, s, o);
        f !== null && (yr(f, a, o, i), am(f, a, o)), mu(a, o);
      }
    };
    function d1(e, t, a, i, o, s, f) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var m = v.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Cn) {
            tn(!0);
            try {
              m = v.shouldComponentUpdate(i, s, f);
            } finally {
              tn(!1);
            }
          }
          m === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Dt(t) || "Component");
        }
        return m;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Xe(a, i) || !Xe(o, s) : !0;
    }
    function rx(e, t, a) {
      var i = e.stateNode;
      {
        var o = Dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !qg.has(t) && (qg.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Bg.has(t) && (Bg.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Dt(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var v = i.state;
        v && (typeof v != "object" || kt(v)) && E("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function p1(e, t) {
      t.updater = Qg, e.stateNode = t, _c(t, e), t._reactInternalInstance = jg;
    }
    function v1(e, t, a) {
      var i = !1, o = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === de && f._context === void 0
        );
        if (!v && !Xg.has(t)) {
          Xg.add(t);
          var m = "";
          f === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? m = " However, it is set to a " + typeof f + "." : f.$$typeof === ne ? m = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Dt(t) || "Component", m);
        }
      }
      if (typeof f == "object" && f !== null)
        s = er(f);
      else {
        o = Lf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, s = i ? Nf(e, o) : si;
      }
      var T = new t(a, s);
      if (e.mode & Cn) {
        tn(!0);
        try {
          T = new t(a, s);
        } finally {
          tn(!1);
        }
      }
      var M = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      p1(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && M === null) {
          var L = Dt(t) || "Component";
          Pg.has(L) || (Pg.add(L), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", L, T.state === null ? "null" : "undefined", L));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var H = null, P = null, q = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? P = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (P = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? q = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (q = "UNSAFE_componentWillUpdate"), H !== null || P !== null || q !== null) {
            var Re = Dt(t) || "Component", Pe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Vg.has(Re) || (Vg.add(Re), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Re, Pe, H !== null ? `
  ` + H : "", P !== null ? `
  ` + P : "", q !== null ? `
  ` + q : ""));
          }
        }
      }
      return i && FE(e, o, s), T;
    }
    function ax(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", $e(e) || "Component"), Qg.enqueueReplaceState(t, t.state, null));
    }
    function h1(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = $e(e) || "Component";
          Hg.has(s) || (Hg.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Qg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Jg(e, t, a, i) {
      rx(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = s1, Ig(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = er(s);
      else {
        var f = Lf(e, t, !0);
        o.context = Nf(e, f);
      }
      {
        if (o.state === a) {
          var v = Dt(t) || "Component";
          Wg.has(v) || (Wg.add(v), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & Cn && ol.recordLegacyContextWarning(e, o), ol.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var m = t.getDerivedStateFromProps;
      if (typeof m == "function" && (Gg(e, t, m, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (ax(e, o), im(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var R = Me;
        R |= Aa, (e.mode & ja) !== He && (R |= Ia), e.flags |= R;
      }
    }
    function ix(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, v = t.contextType, m = si;
      if (typeof v == "object" && v !== null)
        m = er(v);
      else {
        var R = Lf(e, t, !0);
        m = Nf(e, R);
      }
      var T = t.getDerivedStateFromProps, M = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !M && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== m) && h1(e, o, a, m), o1();
      var L = e.memoizedState, H = o.state = L;
      if (im(e, a, o, i), H = e.memoizedState, s === a && L === H && !Bh() && !lm()) {
        if (typeof o.componentDidMount == "function") {
          var P = Me;
          P |= Aa, (e.mode & ja) !== He && (P |= Ia), e.flags |= P;
        }
        return !1;
      }
      typeof T == "function" && (Gg(e, t, T, a), H = e.memoizedState);
      var q = lm() || d1(e, t, s, a, L, H, m);
      if (q) {
        if (!M && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Re = Me;
          Re |= Aa, (e.mode & ja) !== He && (Re |= Ia), e.flags |= Re;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Pe = Me;
          Pe |= Aa, (e.mode & ja) !== He && (Pe |= Ia), e.flags |= Pe;
        }
        e.memoizedProps = a, e.memoizedState = H;
      }
      return o.props = a, o.state = H, o.context = m, q;
    }
    function lx(e, t, a, i, o) {
      var s = t.stateNode;
      l1(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : ul(t.type, f);
      s.props = v;
      var m = t.pendingProps, R = s.context, T = a.contextType, M = si;
      if (typeof T == "object" && T !== null)
        M = er(T);
      else {
        var L = Lf(t, a, !0);
        M = Nf(t, L);
      }
      var H = a.getDerivedStateFromProps, P = typeof H == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !P && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== m || R !== M) && h1(t, s, i, M), o1();
      var q = t.memoizedState, Re = s.state = q;
      if (im(t, i, s, o), Re = t.memoizedState, f === m && q === Re && !Bh() && !lm() && !D)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= jn), !1;
      typeof H == "function" && (Gg(t, a, H, i), Re = t.memoizedState);
      var Pe = lm() || d1(t, a, v, i, q, Re, M) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      D;
      return Pe ? (!P && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Re, M), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Re, M)), typeof s.componentDidUpdate == "function" && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= jn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= jn), t.memoizedProps = i, t.memoizedState = Re), s.props = i, s.state = Re, s.context = M, Pe;
    }
    var Kg, Zg, $g, e0, t0, m1 = function(e, t) {
    };
    Kg = !1, Zg = !1, $g = {}, e0 = {}, t0 = {}, m1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = $e(t) || "Component";
        e0[a] || (e0[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Cn || yt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = $e(e) || "Component";
          $g[o] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), $g[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var v = s;
            if (v.tag !== W)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = v.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var m = f;
          Vn(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var T = function(M) {
            var L = m.refs;
            L === s1 && (L = m.refs = {}), M === null ? delete L[R] : L[R] = M;
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
    function um(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function sm(e) {
      {
        var t = $e(e) || "Component";
        if (t0[t])
          return;
        t0[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function y1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function g1(e) {
      function t(A, X) {
        if (e) {
          var I = A.deletions;
          I === null ? (A.deletions = [X], A.flags |= Mt) : I.push(X);
        }
      }
      function a(A, X) {
        if (!e)
          return null;
        for (var I = X; I !== null; )
          t(A, I), I = I.sibling;
        return null;
      }
      function i(A, X) {
        for (var I = /* @__PURE__ */ new Map(), oe = X; oe !== null; )
          oe.key !== null ? I.set(oe.key, oe) : I.set(oe.index, oe), oe = oe.sibling;
        return I;
      }
      function o(A, X) {
        var I = Sc(A, X);
        return I.index = 0, I.sibling = null, I;
      }
      function s(A, X, I) {
        if (A.index = I, !e)
          return A.flags |= Hv, X;
        var oe = A.alternate;
        if (oe !== null) {
          var Ce = oe.index;
          return Ce < X ? (A.flags |= Qt, X) : Ce;
        } else
          return A.flags |= Qt, X;
      }
      function f(A) {
        return e && A.alternate === null && (A.flags |= Qt), A;
      }
      function v(A, X, I, oe) {
        if (X === null || X.tag !== J) {
          var Ce = DS(I, A.mode, oe);
          return Ce.return = A, Ce;
        } else {
          var me = o(X, I);
          return me.return = A, me;
        }
      }
      function m(A, X, I, oe) {
        var Ce = I.type;
        if (Ce === ma)
          return T(A, X, I.props.children, oe, I.key);
        if (X !== null && (X.elementType === Ce || // Keep this check inline so it only runs on the false path:
        uC(X, I) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === Fe && y1(Ce) === X.type)) {
          var me = o(X, I.props);
          return me.ref = wp(A, X, I), me.return = A, me._debugSource = I._source, me._debugOwner = I._owner, me;
        }
        var Ke = OS(I, A.mode, oe);
        return Ke.ref = wp(A, X, I), Ke.return = A, Ke;
      }
      function R(A, X, I, oe) {
        if (X === null || X.tag !== Se || X.stateNode.containerInfo !== I.containerInfo || X.stateNode.implementation !== I.implementation) {
          var Ce = kS(I, A.mode, oe);
          return Ce.return = A, Ce;
        } else {
          var me = o(X, I.children || []);
          return me.return = A, me;
        }
      }
      function T(A, X, I, oe, Ce) {
        if (X === null || X.tag !== xe) {
          var me = $u(I, A.mode, oe, Ce);
          return me.return = A, me;
        } else {
          var Ke = o(X, I);
          return Ke.return = A, Ke;
        }
      }
      function M(A, X, I) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var oe = DS("" + X, A.mode, I);
          return oe.return = A, oe;
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Br: {
              var Ce = OS(X, A.mode, I);
              return Ce.ref = wp(A, null, X), Ce.return = A, Ce;
            }
            case Vr: {
              var me = kS(X, A.mode, I);
              return me.return = A, me;
            }
            case Fe: {
              var Ke = X._payload, nt = X._init;
              return M(A, nt(Ke), I);
            }
          }
          if (kt(X) || vi(X)) {
            var Xt = $u(X, A.mode, I, null);
            return Xt.return = A, Xt;
          }
          um(A, X);
        }
        return typeof X == "function" && sm(A), null;
      }
      function L(A, X, I, oe) {
        var Ce = X !== null ? X.key : null;
        if (typeof I == "string" && I !== "" || typeof I == "number")
          return Ce !== null ? null : v(A, X, "" + I, oe);
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Br:
              return I.key === Ce ? m(A, X, I, oe) : null;
            case Vr:
              return I.key === Ce ? R(A, X, I, oe) : null;
            case Fe: {
              var me = I._payload, Ke = I._init;
              return L(A, X, Ke(me), oe);
            }
          }
          if (kt(I) || vi(I))
            return Ce !== null ? null : T(A, X, I, oe, null);
          um(A, I);
        }
        return typeof I == "function" && sm(A), null;
      }
      function H(A, X, I, oe, Ce) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var me = A.get(I) || null;
          return v(X, me, "" + oe, Ce);
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Br: {
              var Ke = A.get(oe.key === null ? I : oe.key) || null;
              return m(X, Ke, oe, Ce);
            }
            case Vr: {
              var nt = A.get(oe.key === null ? I : oe.key) || null;
              return R(X, nt, oe, Ce);
            }
            case Fe:
              var Xt = oe._payload, zt = oe._init;
              return H(A, X, I, zt(Xt), Ce);
          }
          if (kt(oe) || vi(oe)) {
            var Gn = A.get(I) || null;
            return T(X, Gn, oe, Ce, null);
          }
          um(X, oe);
        }
        return typeof oe == "function" && sm(X), null;
      }
      function P(A, X, I) {
        {
          if (typeof A != "object" || A === null)
            return X;
          switch (A.$$typeof) {
            case Br:
            case Vr:
              m1(A, I);
              var oe = A.key;
              if (typeof oe != "string")
                break;
              if (X === null) {
                X = /* @__PURE__ */ new Set(), X.add(oe);
                break;
              }
              if (!X.has(oe)) {
                X.add(oe);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", oe);
              break;
            case Fe:
              var Ce = A._payload, me = A._init;
              P(me(Ce), X, I);
              break;
          }
        }
        return X;
      }
      function q(A, X, I, oe) {
        for (var Ce = null, me = 0; me < I.length; me++) {
          var Ke = I[me];
          Ce = P(Ke, Ce, A);
        }
        for (var nt = null, Xt = null, zt = X, Gn = 0, At = 0, Pn = null; zt !== null && At < I.length; At++) {
          zt.index > At ? (Pn = zt, zt = null) : Pn = zt.sibling;
          var ua = L(A, zt, I[At], oe);
          if (ua === null) {
            zt === null && (zt = Pn);
            break;
          }
          e && zt && ua.alternate === null && t(A, zt), Gn = s(ua, Gn, At), Xt === null ? nt = ua : Xt.sibling = ua, Xt = ua, zt = Pn;
        }
        if (At === I.length) {
          if (a(A, zt), Mr()) {
            var Hr = At;
            lc(A, Hr);
          }
          return nt;
        }
        if (zt === null) {
          for (; At < I.length; At++) {
            var fi = M(A, I[At], oe);
            fi !== null && (Gn = s(fi, Gn, At), Xt === null ? nt = fi : Xt.sibling = fi, Xt = fi);
          }
          if (Mr()) {
            var Oa = At;
            lc(A, Oa);
          }
          return nt;
        }
        for (var Da = i(A, zt); At < I.length; At++) {
          var sa = H(Da, A, At, I[At], oe);
          sa !== null && (e && sa.alternate !== null && Da.delete(sa.key === null ? At : sa.key), Gn = s(sa, Gn, At), Xt === null ? nt = sa : Xt.sibling = sa, Xt = sa);
        }
        if (e && Da.forEach(function(ed) {
          return t(A, ed);
        }), Mr()) {
          var Xo = At;
          lc(A, Xo);
        }
        return nt;
      }
      function Re(A, X, I, oe) {
        var Ce = vi(I);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          I[Symbol.toStringTag] === "Generator" && (Zg || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Zg = !0), I.entries === Ce && (Kg || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Kg = !0);
          var me = Ce.call(I);
          if (me)
            for (var Ke = null, nt = me.next(); !nt.done; nt = me.next()) {
              var Xt = nt.value;
              Ke = P(Xt, Ke, A);
            }
        }
        var zt = Ce.call(I);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, At = null, Pn = X, ua = 0, Hr = 0, fi = null, Oa = zt.next(); Pn !== null && !Oa.done; Hr++, Oa = zt.next()) {
          Pn.index > Hr ? (fi = Pn, Pn = null) : fi = Pn.sibling;
          var Da = L(A, Pn, Oa.value, oe);
          if (Da === null) {
            Pn === null && (Pn = fi);
            break;
          }
          e && Pn && Da.alternate === null && t(A, Pn), ua = s(Da, ua, Hr), At === null ? Gn = Da : At.sibling = Da, At = Da, Pn = fi;
        }
        if (Oa.done) {
          if (a(A, Pn), Mr()) {
            var sa = Hr;
            lc(A, sa);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Oa.done; Hr++, Oa = zt.next()) {
            var Xo = M(A, Oa.value, oe);
            Xo !== null && (ua = s(Xo, ua, Hr), At === null ? Gn = Xo : At.sibling = Xo, At = Xo);
          }
          if (Mr()) {
            var ed = Hr;
            lc(A, ed);
          }
          return Gn;
        }
        for (var ev = i(A, Pn); !Oa.done; Hr++, Oa = zt.next()) {
          var $l = H(ev, A, Hr, Oa.value, oe);
          $l !== null && (e && $l.alternate !== null && ev.delete($l.key === null ? Hr : $l.key), ua = s($l, ua, Hr), At === null ? Gn = $l : At.sibling = $l, At = $l);
        }
        if (e && ev.forEach(function(Ek) {
          return t(A, Ek);
        }), Mr()) {
          var Sk = Hr;
          lc(A, Sk);
        }
        return Gn;
      }
      function Pe(A, X, I, oe) {
        if (X !== null && X.tag === J) {
          a(A, X.sibling);
          var Ce = o(X, I);
          return Ce.return = A, Ce;
        }
        a(A, X);
        var me = DS(I, A.mode, oe);
        return me.return = A, me;
      }
      function Ae(A, X, I, oe) {
        for (var Ce = I.key, me = X; me !== null; ) {
          if (me.key === Ce) {
            var Ke = I.type;
            if (Ke === ma) {
              if (me.tag === xe) {
                a(A, me.sibling);
                var nt = o(me, I.props.children);
                return nt.return = A, nt._debugSource = I._source, nt._debugOwner = I._owner, nt;
              }
            } else if (me.elementType === Ke || // Keep this check inline so it only runs on the false path:
            uC(me, I) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ke == "object" && Ke !== null && Ke.$$typeof === Fe && y1(Ke) === me.type) {
              a(A, me.sibling);
              var Xt = o(me, I.props);
              return Xt.ref = wp(A, me, I), Xt.return = A, Xt._debugSource = I._source, Xt._debugOwner = I._owner, Xt;
            }
            a(A, me);
            break;
          } else
            t(A, me);
          me = me.sibling;
        }
        if (I.type === ma) {
          var zt = $u(I.props.children, A.mode, oe, I.key);
          return zt.return = A, zt;
        } else {
          var Gn = OS(I, A.mode, oe);
          return Gn.ref = wp(A, X, I), Gn.return = A, Gn;
        }
      }
      function bt(A, X, I, oe) {
        for (var Ce = I.key, me = X; me !== null; ) {
          if (me.key === Ce)
            if (me.tag === Se && me.stateNode.containerInfo === I.containerInfo && me.stateNode.implementation === I.implementation) {
              a(A, me.sibling);
              var Ke = o(me, I.children || []);
              return Ke.return = A, Ke;
            } else {
              a(A, me);
              break;
            }
          else
            t(A, me);
          me = me.sibling;
        }
        var nt = kS(I, A.mode, oe);
        return nt.return = A, nt;
      }
      function Et(A, X, I, oe) {
        var Ce = typeof I == "object" && I !== null && I.type === ma && I.key === null;
        if (Ce && (I = I.props.children), typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Br:
              return f(Ae(A, X, I, oe));
            case Vr:
              return f(bt(A, X, I, oe));
            case Fe:
              var me = I._payload, Ke = I._init;
              return Et(A, X, Ke(me), oe);
          }
          if (kt(I))
            return q(A, X, I, oe);
          if (vi(I))
            return Re(A, X, I, oe);
          um(A, I);
        }
        return typeof I == "string" && I !== "" || typeof I == "number" ? f(Pe(A, X, "" + I, oe)) : (typeof I == "function" && sm(A), a(A, X));
      }
      return Et;
    }
    var Ff = g1(!0), S1 = g1(!1);
    function ox(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ux(e, t) {
      for (var a = e.child; a !== null; )
        ID(a, t), a = a.sibling;
    }
    var bp = {}, Yu = ju(bp), xp = ju(bp), cm = ju(bp);
    function fm(e) {
      if (e === bp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function E1() {
      var e = fm(cm.current);
      return e;
    }
    function n0(e, t) {
      la(cm, t, e), la(xp, e, e), la(Yu, bp, e);
      var a = Cw(t);
      ia(Yu, e), la(Yu, a, e);
    }
    function jf(e) {
      ia(Yu, e), ia(xp, e), ia(cm, e);
    }
    function r0() {
      var e = fm(Yu.current);
      return e;
    }
    function R1(e) {
      fm(cm.current);
      var t = fm(Yu.current), a = Tw(t, e.type);
      t !== a && (la(xp, e, e), la(Yu, a, e));
    }
    function a0(e) {
      xp.current === e && (ia(Yu, e), ia(xp, e));
    }
    var sx = 0, C1 = 1, T1 = 1, Op = 2, sl = ju(sx);
    function i0(e, t) {
      return (e & t) !== 0;
    }
    function Hf(e) {
      return e & C1;
    }
    function l0(e, t) {
      return e & C1 | t;
    }
    function cx(e, t) {
      return e | t;
    }
    function Wu(e, t) {
      la(sl, t, e);
    }
    function Pf(e) {
      ia(sl, e);
    }
    function fx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function dm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ne) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || ME(i) || dg(i))
              return t;
          }
        } else if (t.tag === Ct && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & et) !== je;
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
    var Ga = (
      /*   */
      0
    ), cr = (
      /* */
      1
    ), ql = (
      /*  */
      2
    ), fr = (
      /*    */
      4
    ), Ur = (
      /*   */
      8
    ), o0 = [];
    function u0() {
      for (var e = 0; e < o0.length; e++) {
        var t = o0[e];
        t._workInProgressVersionPrimary = null;
      }
      o0.length = 0;
    }
    function dx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ge = C.ReactCurrentDispatcher, Dp = C.ReactCurrentBatchConfig, s0, Bf;
    s0 = /* @__PURE__ */ new Set();
    var dc = Q, qt = null, dr = null, pr = null, pm = !1, kp = !1, _p = 0, px = 0, vx = 25, K = null, Ni = null, qu = -1, c0 = !1;
    function Pt() {
      {
        var e = K;
        Ni === null ? Ni = [e] : Ni.push(e);
      }
    }
    function pe() {
      {
        var e = K;
        Ni !== null && (qu++, Ni[qu] !== e && hx(e));
      }
    }
    function Vf(e) {
      e != null && !kt(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", K, typeof e);
    }
    function hx(e) {
      {
        var t = $e(qt);
        if (!s0.has(t) && (s0.add(t), Ni !== null)) {
          for (var a = "", i = 30, o = 0; o <= qu; o++) {
            for (var s = Ni[o], f = o === qu ? e : s, v = o + 1 + ". " + s; v.length < i; )
              v += " ";
            v += f + `
`, a += v;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function f0(e, t) {
      if (c0)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", K), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, K, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!De(e[a], t[a]))
          return !1;
      return !0;
    }
    function Yf(e, t, a, i, o, s) {
      dc = s, qt = t, Ni = e !== null ? e._debugHookTypes : null, qu = -1, c0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? ge.current = W1 : Ni !== null ? ge.current = Y1 : ge.current = V1;
      var f = a(i, o);
      if (kp) {
        var v = 0;
        do {
          if (kp = !1, _p = 0, v >= vx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, c0 = !1, dr = null, pr = null, t.updateQueue = null, qu = -1, ge.current = q1, f = a(i, o);
        } while (kp);
      }
      ge.current = xm, t._debugHookTypes = Ni;
      var m = dr !== null && dr.next !== null;
      if (dc = Q, qt = null, dr = null, pr = null, K = null, Ni = null, qu = -1, e !== null && (e.flags & ur) !== (t.flags & ur) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ze) !== He && E("Internal React error: Expected static flag was missing. Please notify the React team."), pm = !1, m)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Wf() {
      var e = _p !== 0;
      return _p = 0, e;
    }
    function w1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ja) !== He ? t.flags &= ~(go | Ia | Qr | Me) : t.flags &= ~(Qr | Me), e.lanes = Vs(e.lanes, a);
    }
    function b1() {
      if (ge.current = xm, pm) {
        for (var e = qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        pm = !1;
      }
      dc = Q, qt = null, dr = null, pr = null, Ni = null, qu = -1, K = null, F1 = !1, kp = !1, _p = 0;
    }
    function Xl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Mi() {
      var e;
      if (dr === null) {
        var t = qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = qt.memoizedState : a = pr.next, a !== null)
        pr = a, a = pr.next, dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        dr = e;
        var i = {
          memoizedState: dr.memoizedState,
          baseState: dr.baseState,
          baseQueue: dr.baseQueue,
          queue: dr.queue,
          next: null
        };
        pr === null ? qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function x1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function d0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function p0(e, t, a) {
      var i = Xl(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = Sx.bind(null, qt, s);
      return [i.memoizedState, f];
    }
    function v0(e, t, a) {
      var i = Mi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, v = o.pending;
      if (v !== null) {
        if (f !== null) {
          var m = f.next, R = v.next;
          f.next = R, v.next = m;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, o.pending = null;
      }
      if (f !== null) {
        var T = f.next, M = s.baseState, L = null, H = null, P = null, q = T;
        do {
          var Re = q.lane;
          if (Do(dc, Re)) {
            if (P !== null) {
              var Ae = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ln,
                action: q.action,
                hasEagerState: q.hasEagerState,
                eagerState: q.eagerState,
                next: null
              };
              P = P.next = Ae;
            }
            if (q.hasEagerState)
              M = q.eagerState;
            else {
              var bt = q.action;
              M = e(M, bt);
            }
          } else {
            var Pe = {
              lane: Re,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            };
            P === null ? (H = P = Pe, L = M) : P = P.next = Pe, qt.lanes = rt(qt.lanes, Re), Qp(Re);
          }
          q = q.next;
        } while (q !== null && q !== T);
        P === null ? L = M : P.next = H, De(M, i.memoizedState) || Ip(), i.memoizedState = M, i.baseState = L, i.baseQueue = P, o.lastRenderedState = M;
      }
      var Et = o.interleaved;
      if (Et !== null) {
        var A = Et;
        do {
          var X = A.lane;
          qt.lanes = rt(qt.lanes, X), Qp(X), A = A.next;
        } while (A !== Et);
      } else
        f === null && (o.lanes = Q);
      var I = o.dispatch;
      return [i.memoizedState, I];
    }
    function h0(e, t, a) {
      var i = Mi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, v = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var m = f.next, R = m;
        do {
          var T = R.action;
          v = e(v, T), R = R.next;
        } while (R !== m);
        De(v, i.memoizedState) || Ip(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), o.lastRenderedState = v;
      }
      return [v, s];
    }
    function EL(e, t, a) {
    }
    function RL(e, t, a) {
    }
    function m0(e, t, a) {
      var i = qt, o = Xl(), s, f = Mr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Bf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Bf = !0);
      } else {
        if (s = t(), !Bf) {
          var v = t();
          De(s, v) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Bf = !0);
        }
        var m = Ym();
        if (m === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Bs(m, dc) || O1(i, t, s);
      }
      o.memoizedState = s;
      var R = {
        value: s,
        getSnapshot: t
      };
      return o.queue = R, gm(k1.bind(null, i, R, e), [e]), i.flags |= Qr, Lp(cr | Ur, D1.bind(null, i, R, s, t), void 0, null), s;
    }
    function vm(e, t, a) {
      var i = qt, o = Mi(), s = t();
      if (!Bf) {
        var f = t();
        De(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Bf = !0);
      }
      var v = o.memoizedState, m = !De(v, s);
      m && (o.memoizedState = s, Ip());
      var R = o.queue;
      if (Mp(k1.bind(null, i, R, e), [e]), R.getSnapshot !== t || m || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Qr, Lp(cr | Ur, D1.bind(null, i, R, s, t), void 0, null);
        var T = Ym();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Bs(T, dc) || O1(i, t, s);
      }
      return s;
    }
    function O1(e, t, a) {
      e.flags |= yo;
      var i = {
        getSnapshot: t,
        value: a
      }, o = qt.updateQueue;
      if (o === null)
        o = x1(), qt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function D1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, _1(t) && L1(e);
    }
    function k1(e, t, a) {
      var i = function() {
        _1(t) && L1(e);
      };
      return a(i);
    }
    function _1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !De(a, i);
      } catch {
        return !0;
      }
    }
    function L1(e) {
      var t = Xa(e, Ve);
      t !== null && yr(t, e, Ve, nn);
    }
    function hm(e) {
      var t = Xl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: d0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ex.bind(null, qt, a);
      return [t.memoizedState, i];
    }
    function y0(e) {
      return v0(d0);
    }
    function g0(e) {
      return h0(d0);
    }
    function Lp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = qt.updateQueue;
      if (s === null)
        s = x1(), qt.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var v = f.next;
          f.next = o, o.next = v, s.lastEffect = o;
        }
      }
      return o;
    }
    function S0(e) {
      var t = Xl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function mm(e) {
      var t = Mi();
      return t.memoizedState;
    }
    function Np(e, t, a, i) {
      var o = Xl(), s = i === void 0 ? null : i;
      qt.flags |= e, o.memoizedState = Lp(cr | t, a, void 0, s);
    }
    function ym(e, t, a, i) {
      var o = Mi(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var v = dr.memoizedState;
        if (f = v.destroy, s !== null) {
          var m = v.deps;
          if (f0(s, m)) {
            o.memoizedState = Lp(t, a, f, s);
            return;
          }
        }
      }
      qt.flags |= e, o.memoizedState = Lp(cr | t, a, f, s);
    }
    function gm(e, t) {
      return (qt.mode & ja) !== He ? Np(go | Qr | _l, Ur, e, t) : Np(Qr | _l, Ur, e, t);
    }
    function Mp(e, t) {
      return ym(Qr, Ur, e, t);
    }
    function E0(e, t) {
      return Np(Me, ql, e, t);
    }
    function Sm(e, t) {
      return ym(Me, ql, e, t);
    }
    function R0(e, t) {
      var a = Me;
      return a |= Aa, (qt.mode & ja) !== He && (a |= Ia), Np(a, fr, e, t);
    }
    function Em(e, t) {
      return ym(Me, fr, e, t);
    }
    function N1(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function C0(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Me;
      return o |= Aa, (qt.mode & ja) !== He && (o |= Ia), Np(o, fr, N1.bind(null, t, e), i);
    }
    function Rm(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return ym(Me, fr, N1.bind(null, t, e), i);
    }
    function mx(e, t) {
    }
    var Cm = mx;
    function T0(e, t) {
      var a = Xl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Tm(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (f0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function w0(e, t) {
      var a = Xl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function wm(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (f0(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function b0(e) {
      var t = Xl();
      return t.memoizedState = e, e;
    }
    function M1(e) {
      var t = Mi(), a = dr, i = a.memoizedState;
      return z1(t, i, e);
    }
    function U1(e) {
      var t = Mi();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return z1(t, a, e);
    }
    function z1(e, t, a) {
      var i = !$v(dc);
      if (i) {
        if (!De(a, t)) {
          var o = nh();
          qt.lanes = rt(qt.lanes, o), Qp(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ip()), e.memoizedState = a, a;
    }
    function yx(e, t, a) {
      var i = Pa();
      wn(My(i, tl)), e(!0);
      var o = Dp.transition;
      Dp.transition = {};
      var s = Dp.transition;
      Dp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (wn(i), Dp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && _("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function x0() {
      var e = hm(!1), t = e[0], a = e[1], i = yx.bind(null, a), o = Xl();
      return o.memoizedState = i, [t, i];
    }
    function A1() {
      var e = y0(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    function I1() {
      var e = g0(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    var F1 = !1;
    function gx() {
      return F1;
    }
    function O0() {
      var e = Xl(), t = Ym(), a = t.identifierPrefix, i;
      if (Mr()) {
        var o = Nb();
        i = ":" + a + "R" + o;
        var s = _p++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = px++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function bm() {
      var e = Mi(), t = e.memoizedState;
      return t;
    }
    function Sx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (j1(e))
        H1(t, o);
      else {
        var s = r1(e, t, o, i);
        if (s !== null) {
          var f = xa();
          yr(s, e, i, f), P1(s, t, i);
        }
      }
      B1(e, i);
    }
    function Ex(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (j1(e))
        H1(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === Q && (s === null || s.lanes === Q)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var v;
            v = ge.current, ge.current = cl;
            try {
              var m = t.lastRenderedState, R = f(m, a);
              if (o.hasEagerState = !0, o.eagerState = R, De(R, m)) {
                Zb(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              ge.current = v;
            }
          }
        }
        var T = r1(e, t, o, i);
        if (T !== null) {
          var M = xa();
          yr(T, e, i, M), P1(T, t, i);
        }
      }
      B1(e, i);
    }
    function j1(e) {
      var t = e.alternate;
      return e === qt || t !== null && t === qt;
    }
    function H1(e, t) {
      kp = pm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function P1(e, t, a) {
      if (jd(a)) {
        var i = t.lanes;
        i = ef(i, e.pendingLanes);
        var o = rt(i, a);
        t.lanes = o, Hd(e, o);
      }
    }
    function B1(e, t, a) {
      Fc(e, t);
    }
    var xm = {
      readContext: er,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: we
    }, V1 = null, Y1 = null, W1 = null, q1 = null, Gl = null, cl = null, Om = null;
    {
      var D0 = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      V1 = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", Pt(), Vf(t), T0(e, t);
        },
        useContext: function(e) {
          return K = "useContext", Pt(), er(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", Pt(), Vf(t), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", Pt(), Vf(a), C0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", Pt(), Vf(t), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", Pt(), Vf(t), R0(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", Pt(), Vf(t);
          var a = ge.current;
          ge.current = Gl;
          try {
            return w0(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", Pt();
          var i = ge.current;
          ge.current = Gl;
          try {
            return p0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", Pt(), S0(e);
        },
        useState: function(e) {
          K = "useState", Pt();
          var t = ge.current;
          ge.current = Gl;
          try {
            return hm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", Pt(), b0(e);
        },
        useTransition: function() {
          return K = "useTransition", Pt(), x0();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", Pt(), m0(e, t, a);
        },
        useId: function() {
          return K = "useId", Pt(), O0();
        },
        unstable_isNewReconciler: we
      }, Y1 = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", pe(), T0(e, t);
        },
        useContext: function(e) {
          return K = "useContext", pe(), er(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", pe(), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", pe(), C0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", pe(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", pe(), R0(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", pe();
          var a = ge.current;
          ge.current = Gl;
          try {
            return w0(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", pe();
          var i = ge.current;
          ge.current = Gl;
          try {
            return p0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", pe(), S0(e);
        },
        useState: function(e) {
          K = "useState", pe();
          var t = ge.current;
          ge.current = Gl;
          try {
            return hm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", pe(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", pe(), b0(e);
        },
        useTransition: function() {
          return K = "useTransition", pe(), x0();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", pe(), m0(e, t, a);
        },
        useId: function() {
          return K = "useId", pe(), O0();
        },
        unstable_isNewReconciler: we
      }, W1 = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", pe(), Tm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", pe(), er(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", pe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", pe();
          var a = ge.current;
          ge.current = cl;
          try {
            return wm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", pe();
          var i = ge.current;
          ge.current = cl;
          try {
            return v0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", pe(), mm();
        },
        useState: function(e) {
          K = "useState", pe();
          var t = ge.current;
          ge.current = cl;
          try {
            return y0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", pe(), Cm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", pe(), M1(e);
        },
        useTransition: function() {
          return K = "useTransition", pe(), A1();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", pe(), vm(e, t);
        },
        useId: function() {
          return K = "useId", pe(), bm();
        },
        unstable_isNewReconciler: we
      }, q1 = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", pe(), Tm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", pe(), er(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", pe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", pe();
          var a = ge.current;
          ge.current = Om;
          try {
            return wm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", pe();
          var i = ge.current;
          ge.current = Om;
          try {
            return h0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", pe(), mm();
        },
        useState: function(e) {
          K = "useState", pe();
          var t = ge.current;
          ge.current = Om;
          try {
            return g0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", pe(), Cm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", pe(), U1(e);
        },
        useTransition: function() {
          return K = "useTransition", pe(), I1();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", pe(), vm(e, t);
        },
        useId: function() {
          return K = "useId", pe(), bm();
        },
        unstable_isNewReconciler: we
      }, Gl = {
        readContext: function(e) {
          return D0(), er(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", tt(), Pt(), T0(e, t);
        },
        useContext: function(e) {
          return K = "useContext", tt(), Pt(), er(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", tt(), Pt(), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", tt(), Pt(), C0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", tt(), Pt(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", tt(), Pt(), R0(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", tt(), Pt();
          var a = ge.current;
          ge.current = Gl;
          try {
            return w0(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", tt(), Pt();
          var i = ge.current;
          ge.current = Gl;
          try {
            return p0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", tt(), Pt(), S0(e);
        },
        useState: function(e) {
          K = "useState", tt(), Pt();
          var t = ge.current;
          ge.current = Gl;
          try {
            return hm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", tt(), Pt(), void 0;
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", tt(), Pt(), b0(e);
        },
        useTransition: function() {
          return K = "useTransition", tt(), Pt(), x0();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", tt(), Pt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", tt(), Pt(), m0(e, t, a);
        },
        useId: function() {
          return K = "useId", tt(), Pt(), O0();
        },
        unstable_isNewReconciler: we
      }, cl = {
        readContext: function(e) {
          return D0(), er(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", tt(), pe(), Tm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", tt(), pe(), er(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", tt(), pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", tt(), pe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", tt(), pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", tt(), pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", tt(), pe();
          var a = ge.current;
          ge.current = cl;
          try {
            return wm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", tt(), pe();
          var i = ge.current;
          ge.current = cl;
          try {
            return v0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", tt(), pe(), mm();
        },
        useState: function(e) {
          K = "useState", tt(), pe();
          var t = ge.current;
          ge.current = cl;
          try {
            return y0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", tt(), pe(), Cm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", tt(), pe(), M1(e);
        },
        useTransition: function() {
          return K = "useTransition", tt(), pe(), A1();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", tt(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", tt(), pe(), vm(e, t);
        },
        useId: function() {
          return K = "useId", tt(), pe(), bm();
        },
        unstable_isNewReconciler: we
      }, Om = {
        readContext: function(e) {
          return D0(), er(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", tt(), pe(), Tm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", tt(), pe(), er(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", tt(), pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", tt(), pe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", tt(), pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", tt(), pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", tt(), pe();
          var a = ge.current;
          ge.current = cl;
          try {
            return wm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", tt(), pe();
          var i = ge.current;
          ge.current = cl;
          try {
            return h0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", tt(), pe(), mm();
        },
        useState: function(e) {
          K = "useState", tt(), pe();
          var t = ge.current;
          ge.current = cl;
          try {
            return g0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", tt(), pe(), Cm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", tt(), pe(), U1(e);
        },
        useTransition: function() {
          return K = "useTransition", tt(), pe(), I1();
        },
        useMutableSource: function(e, t, a) {
          return K = "useMutableSource", tt(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return K = "useSyncExternalStore", tt(), pe(), vm(e, t);
        },
        useId: function() {
          return K = "useId", tt(), pe(), bm();
        },
        unstable_isNewReconciler: we
      };
    }
    var Xu = y.unstable_now, X1 = 0, Dm = -1, Up = -1, km = -1, k0 = !1, _m = !1;
    function G1() {
      return k0;
    }
    function Rx() {
      _m = !0;
    }
    function Cx() {
      k0 = !1, _m = !1;
    }
    function Tx() {
      k0 = _m, _m = !1;
    }
    function Q1() {
      return X1;
    }
    function J1() {
      X1 = Xu();
    }
    function _0(e) {
      Up = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function K1(e) {
      Up = -1;
    }
    function Lm(e, t) {
      if (Up >= 0) {
        var a = Xu() - Up;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Up = -1;
      }
    }
    function Ql(e) {
      if (Dm >= 0) {
        var t = Xu() - Dm;
        Dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Lt:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function L0(e) {
      if (km >= 0) {
        var t = Xu() - km;
        km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ie:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Lt:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Jl() {
      Dm = Xu();
    }
    function N0() {
      km = Xu();
    }
    function M0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function pc(e, t) {
      return {
        value: e,
        source: t,
        stack: Jo(t),
        digest: null
      };
    }
    function U0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function wx(e, t) {
      return !0;
    }
    function z0(e, t) {
      try {
        var a = wx(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === W)
            return;
          console.error(i);
        }
        var v = o ? $e(o) : null, m = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === ie)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = $e(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var M = m + `
` + f + `

` + ("" + R);
        console.error(M);
      } catch (L) {
        setTimeout(function() {
          throw L;
        });
      }
    }
    var bx = typeof WeakMap == "function" ? WeakMap : Map;
    function Z1(e, t, a) {
      var i = Po(nn, a);
      i.tag = zg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        yD(o), z0(e, t);
      }, i;
    }
    function A0(e, t, a) {
      var i = Po(nn, a);
      i.tag = zg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          sC(e), z0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        sC(e), z0(e, t), typeof o != "function" && hD(this);
        var m = t.value, R = t.stack;
        this.componentDidCatch(m, {
          componentStack: R !== null ? R : ""
        }), typeof o != "function" && (ra(e.lanes, Ve) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", $e(e) || "Unknown"));
      }), i;
    }
    function $1(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new bx(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = gD.bind(null, e, t, a);
        Ca && Jp(e, a), t.then(s, s);
      }
    }
    function xx(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function Ox(e, t) {
      var a = e.tag;
      if ((e.mode & ze) === He && (a === re || a === Be || a === Ze)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function eR(e) {
      var t = e;
      do {
        if (t.tag === Ne && fx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function tR(e, t, a, i, o) {
      if ((e.mode & ze) === He) {
        if (e === t)
          e.flags |= or;
        else {
          if (e.flags |= et, a.flags |= Lc, a.flags &= ~(jv | kl), a.tag === W) {
            var s = a.alternate;
            if (s === null)
              a.tag = Sn;
            else {
              var f = Po(nn, Ve);
              f.tag = tm, Vu(a, f, Ve);
            }
          }
          a.lanes = rt(a.lanes, Ve);
        }
        return e;
      }
      return e.flags |= or, e.lanes = o, e;
    }
    function Dx(e, t, a, i, o) {
      if (a.flags |= kl, Ca && Jp(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Ox(a), Mr() && a.mode & ze && WE();
        var f = eR(t);
        if (f !== null) {
          f.flags &= ~_r, tR(f, t, a, e, o), f.mode & ze && $1(e, s, o), xx(f, e, s);
          return;
        } else {
          if (!Fd(o)) {
            $1(e, s, o), hS();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Mr() && a.mode & ze) {
        WE();
        var m = eR(t);
        if (m !== null) {
          (m.flags & or) === je && (m.flags |= _r), tR(m, t, a, e, o), Dg(pc(i, a));
          return;
        }
      }
      i = pc(i, a), oD(i);
      var R = t;
      do {
        switch (R.tag) {
          case ie: {
            var T = i;
            R.flags |= or;
            var M = Eu(o);
            R.lanes = rt(R.lanes, M);
            var L = Z1(R, T, M);
            Fg(R, L);
            return;
          }
          case W:
            var H = i, P = R.type, q = R.stateNode;
            if ((R.flags & et) === je && (typeof P.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && !eC(q))) {
              R.flags |= or;
              var Re = Eu(o);
              R.lanes = rt(R.lanes, Re);
              var Pe = A0(R, H, Re);
              Fg(R, Pe);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function kx() {
      return null;
    }
    var zp = C.ReactCurrentOwner, fl = !1, I0, Ap, F0, j0, H0, vc, P0, Nm;
    I0 = {}, Ap = {}, F0 = {}, j0 = {}, H0 = {}, vc = !1, P0 = {}, Nm = {};
    function wa(e, t, a, i) {
      e === null ? t.child = S1(t, null, a, i) : t.child = Ff(t, e.child, a, i);
    }
    function _x(e, t, a, i) {
      t.child = Ff(t, e.child, null, i), t.child = Ff(t, null, a, i);
    }
    function nR(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var f = a.render, v = t.ref, m, R;
      If(t, o), du(t);
      {
        if (zp.current = t, lr(!0), m = Yf(e, t, f, i, v, o), R = Wf(), t.mode & Cn) {
          tn(!0);
          try {
            m = Yf(e, t, f, i, v, o), R = Wf();
          } finally {
            tn(!1);
          }
        }
        lr(!1);
      }
      return Eo(), e !== null && !fl ? (w1(e, t, o), Bo(e, t, o)) : (Mr() && R && Cg(t), t.flags |= oi, wa(e, t, m, o), t.child);
    }
    function rR(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (zD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = $f(s), t.tag = Ze, t.type = f, Y0(t, s), aR(e, t, f, i, o);
        }
        {
          var v = s.propTypes;
          v && il(
            v,
            i,
            // Resolved props
            "prop",
            Dt(s)
          );
        }
        var m = xS(a.type, null, i, t, t.mode, o);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var R = a.type, T = R.propTypes;
        T && il(
          T,
          i,
          // Resolved props
          "prop",
          Dt(R)
        );
      }
      var M = e.child, L = J0(e, o);
      if (!L) {
        var H = M.memoizedProps, P = a.compare;
        if (P = P !== null ? P : Xe, P(H, i) && e.ref === t.ref)
          return Bo(e, t, o);
      }
      t.flags |= oi;
      var q = Sc(M, i);
      return q.ref = t.ref, q.return = t, t.child = q, q;
    }
    function aR(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Fe) {
          var f = s, v = f._payload, m = f._init;
          try {
            s = m(v);
          } catch {
            s = null;
          }
          var R = s && s.propTypes;
          R && il(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Dt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Xe(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = T, J0(e, o))
            (e.flags & Lc) !== je && (fl = !0);
          else
            return t.lanes = e.lanes, Bo(e, t, o);
      }
      return B0(e, t, a, i, o);
    }
    function iR(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || $)
        if ((t.mode & ze) === He) {
          var f = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Wm(t, a);
        } else if (ra(a, Ta)) {
          var M = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = M;
          var L = s !== null ? s.baseLanes : a;
          Wm(t, L);
        } else {
          var v = null, m;
          if (s !== null) {
            var R = s.baseLanes;
            m = rt(R, a);
          } else
            m = a;
          t.lanes = t.childLanes = Ta;
          var T = {
            baseLanes: m,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Wm(t, m), null;
        }
      else {
        var H;
        s !== null ? (H = rt(s.baseLanes, a), t.memoizedState = null) : H = a, Wm(t, H);
      }
      return wa(e, t, o, a), t.child;
    }
    function Lx(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function Nx(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function Mx(e, t, a) {
      {
        t.flags |= Me;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return wa(e, t, s, a), t.child;
    }
    function lR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Sa, t.flags |= Ri);
    }
    function B0(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var f;
      {
        var v = Lf(t, a, !0);
        f = Nf(t, v);
      }
      var m, R;
      If(t, o), du(t);
      {
        if (zp.current = t, lr(!0), m = Yf(e, t, a, i, f, o), R = Wf(), t.mode & Cn) {
          tn(!0);
          try {
            m = Yf(e, t, a, i, f, o), R = Wf();
          } finally {
            tn(!1);
          }
        }
        lr(!1);
      }
      return Eo(), e !== null && !fl ? (w1(e, t, o), Bo(e, t, o)) : (Mr() && R && Cg(t), t.flags |= oi, wa(e, t, m, o), t.child);
    }
    function oR(e, t, a, i, o) {
      {
        switch (JD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), m = v.state;
            s.updater.enqueueSetState(s, m, null);
            break;
          }
          case !0: {
            t.flags |= et, t.flags |= or;
            var R = new Error("Simulated error coming from DevTools"), T = Eu(o);
            t.lanes = rt(t.lanes, T);
            var M = A0(t, pc(R, t), T);
            Fg(t, M);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var L = a.propTypes;
          L && il(
            L,
            i,
            // Resolved props
            "prop",
            Dt(a)
          );
        }
      }
      var H;
      Wl(a) ? (H = !0, Yh(t)) : H = !1, If(t, o);
      var P = t.stateNode, q;
      P === null ? (Um(e, t), v1(t, a, i), Jg(t, a, i, o), q = !0) : e === null ? q = ix(t, a, i, o) : q = lx(e, t, a, i, o);
      var Re = V0(e, t, a, q, H, o);
      {
        var Pe = t.stateNode;
        q && Pe.props !== i && (vc || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", $e(t) || "a component"), vc = !0);
      }
      return Re;
    }
    function V0(e, t, a, i, o, s) {
      lR(e, t);
      var f = (t.flags & et) !== je;
      if (!i && !f)
        return o && PE(t, a, !1), Bo(e, t, s);
      var v = t.stateNode;
      zp.current = t;
      var m;
      if (f && typeof a.getDerivedStateFromError != "function")
        m = null, K1();
      else {
        du(t);
        {
          if (lr(!0), m = v.render(), t.mode & Cn) {
            tn(!0);
            try {
              v.render();
            } finally {
              tn(!1);
            }
          }
          lr(!1);
        }
        Eo();
      }
      return t.flags |= oi, e !== null && f ? _x(e, t, m, s) : wa(e, t, m, s), t.memoizedState = v.state, o && PE(t, a, !0), t.child;
    }
    function uR(e) {
      var t = e.stateNode;
      t.pendingContext ? jE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jE(e, t.context, !1), n0(e, t.containerInfo);
    }
    function Ux(e, t, a) {
      if (uR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      l1(e, t), im(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var v = f.element;
      if (o.isDehydrated) {
        var m = {
          element: v,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, R = t.updateQueue;
        if (R.baseState = m, t.memoizedState = m, t.flags & _r) {
          var T = pc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return sR(e, t, v, a, T);
        } else if (v !== s) {
          var M = pc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return sR(e, t, v, a, M);
        } else {
          Fb(t);
          var L = S1(t, null, v, a);
          t.child = L;
          for (var H = L; H; )
            H.flags = H.flags & ~Qt | Ei, H = H.sibling;
        }
      } else {
        if (zf(), v === s)
          return Bo(e, t, a);
        wa(e, t, v, a);
      }
      return t.child;
    }
    function sR(e, t, a, i, o) {
      return zf(), Dg(o), t.flags |= _r, wa(e, t, a, i), t.child;
    }
    function zx(e, t, a) {
      R1(t), e === null && Og(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, v = ug(i, o);
      return v ? f = null : s !== null && ug(i, s) && (t.flags |= za), lR(e, t), wa(e, t, f, a), t.child;
    }
    function Ax(e, t) {
      return e === null && Og(t), null;
    }
    function Ix(e, t, a, i) {
      Um(e, t);
      var o = t.pendingProps, s = a, f = s._payload, v = s._init, m = v(f);
      t.type = m;
      var R = t.tag = AD(m), T = ul(m, o), M;
      switch (R) {
        case re:
          return Y0(t, m), t.type = m = $f(m), M = B0(null, t, m, T, i), M;
        case W:
          return t.type = m = ES(m), M = oR(null, t, m, T, i), M;
        case Be:
          return t.type = m = RS(m), M = nR(null, t, m, T, i), M;
        case mt: {
          if (t.type !== t.elementType) {
            var L = m.propTypes;
            L && il(
              L,
              T,
              // Resolved for outer only
              "prop",
              Dt(m)
            );
          }
          return M = rR(
            null,
            t,
            m,
            ul(m.type, T),
            // The inner type can have defaults too
            i
          ), M;
        }
      }
      var H = "";
      throw m !== null && typeof m == "object" && m.$$typeof === Fe && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + m + ". " + ("Lazy element type must resolve to a class or function." + H));
    }
    function Fx(e, t, a, i, o) {
      Um(e, t), t.tag = W;
      var s;
      return Wl(a) ? (s = !0, Yh(t)) : s = !1, If(t, o), v1(t, a, i), Jg(t, a, i, o), V0(null, t, a, !0, s, o);
    }
    function jx(e, t, a, i) {
      Um(e, t);
      var o = t.pendingProps, s;
      {
        var f = Lf(t, a, !1);
        s = Nf(t, f);
      }
      If(t, i);
      var v, m;
      du(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = Dt(a) || "Unknown";
          I0[R] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), I0[R] = !0);
        }
        t.mode & Cn && ol.recordLegacyContextWarning(t, null), lr(!0), zp.current = t, v = Yf(null, t, a, o, s, i), m = Wf(), lr(!1);
      }
      if (Eo(), t.flags |= oi, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var T = Dt(a) || "Unknown";
        Ap[T] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Ap[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var M = Dt(a) || "Unknown";
          Ap[M] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), Ap[M] = !0);
        }
        t.tag = W, t.memoizedState = null, t.updateQueue = null;
        var L = !1;
        return Wl(a) ? (L = !0, Yh(t)) : L = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Ig(t), p1(t, v), Jg(t, a, o, i), V0(null, t, a, !0, L, i);
      } else {
        if (t.tag = re, t.mode & Cn) {
          tn(!0);
          try {
            v = Yf(null, t, a, o, s, i), m = Wf();
          } finally {
            tn(!1);
          }
        }
        return Mr() && m && Cg(t), wa(null, t, v, i), Y0(t, a), t.child;
      }
    }
    function Y0(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Na();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), H0[o] || (H0[o] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Dt(t) || "Unknown";
          j0[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), j0[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Dt(t) || "Unknown";
          F0[v] || (E("%s: Function components do not support contextType.", v), F0[v] = !0);
        }
      }
    }
    var W0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ln
    };
    function q0(e) {
      return {
        baseLanes: e,
        cachePool: kx(),
        transitions: null
      };
    }
    function Hx(e, t) {
      var a = null;
      return {
        baseLanes: rt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Px(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return i0(e, Op);
    }
    function Bx(e, t) {
      return Vs(e.childLanes, t);
    }
    function cR(e, t, a) {
      var i = t.pendingProps;
      KD(t) && (t.flags |= et);
      var o = sl.current, s = !1, f = (t.flags & et) !== je;
      if (f || Px(o, e) ? (s = !0, t.flags &= ~et) : (e === null || e.memoizedState !== null) && (o = cx(o, T1)), o = Hf(o), Wu(t, o), e === null) {
        Og(t);
        var v = t.memoizedState;
        if (v !== null) {
          var m = v.dehydrated;
          if (m !== null)
            return Xx(t, m);
        }
        var R = i.children, T = i.fallback;
        if (s) {
          var M = Vx(t, R, T, a), L = t.child;
          return L.memoizedState = q0(a), t.memoizedState = W0, M;
        } else
          return X0(t, R);
      } else {
        var H = e.memoizedState;
        if (H !== null) {
          var P = H.dehydrated;
          if (P !== null)
            return Gx(e, t, f, i, P, H, a);
        }
        if (s) {
          var q = i.fallback, Re = i.children, Pe = Wx(e, t, Re, q, a), Ae = t.child, bt = e.child.memoizedState;
          return Ae.memoizedState = bt === null ? q0(a) : Hx(bt, a), Ae.childLanes = Bx(e, a), t.memoizedState = W0, Pe;
        } else {
          var Et = i.children, A = Yx(e, t, Et, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function X0(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = G0(o, i);
      return s.return = e, e.child = s, s;
    }
    function Vx(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, m;
      return (o & ze) === He && s !== null ? (v = s, v.childLanes = Q, v.pendingProps = f, e.mode & _t && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), m = $u(a, o, i, null)) : (v = G0(f, o), m = $u(a, o, i, null)), v.return = e, m.return = e, v.sibling = m, e.child = v, m;
    }
    function G0(e, t, a) {
      return fC(e, t, Q, null);
    }
    function fR(e, t) {
      return Sc(e, t);
    }
    function Yx(e, t, a, i) {
      var o = e.child, s = o.sibling, f = fR(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ze) === He && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= Mt) : v.push(s);
      }
      return t.child = f, f;
    }
    function Wx(e, t, a, i, o) {
      var s = t.mode, f = e.child, v = f.sibling, m = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ze) === He && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        R = T, R.childLanes = Q, R.pendingProps = m, t.mode & _t && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = f.selfBaseDuration, R.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        R = fR(f, m), R.subtreeFlags = f.subtreeFlags & ur;
      var M;
      return v !== null ? M = Sc(v, i) : (M = $u(i, s, o, null), M.flags |= Qt), M.return = t, R.return = t, R.sibling = M, t.child = R, M;
    }
    function Mm(e, t, a, i) {
      i !== null && Dg(i), Ff(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = X0(t, s);
      return f.flags |= Qt, t.memoizedState = null, f;
    }
    function qx(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = G0(f, s), m = $u(i, s, o, null);
      return m.flags |= Qt, v.return = t, m.return = t, v.sibling = m, t.child = v, (t.mode & ze) !== He && Ff(t, e.child, null, o), m;
    }
    function Xx(e, t, a) {
      return (e.mode & ze) === He ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ve) : dg(t) ? e.lanes = Tn : e.lanes = Ta, null;
    }
    function Gx(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & _r) {
          t.flags &= ~_r;
          var A = U0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Mm(e, t, f, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= et, null;
          var X = i.children, I = i.fallback, oe = qx(e, t, X, I, f), Ce = t.child;
          return Ce.memoizedState = q0(f), t.memoizedState = W0, oe;
        }
      else {
        if (Ab(), (t.mode & ze) === He)
          return Mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (dg(o)) {
          var v, m, R;
          {
            var T = $w(o);
            v = T.digest, m = T.message, R = T.stack;
          }
          var M;
          m ? M = new Error(m) : M = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var L = U0(M, v, R);
          return Mm(e, t, f, L);
        }
        var H = ra(f, e.childLanes);
        if (fl || H) {
          var P = Ym();
          if (P !== null) {
            var q = ih(P, f);
            if (q !== Ln && q !== s.retryLane) {
              s.retryLane = q;
              var Re = nn;
              Xa(e, q), yr(P, e, q, Re);
            }
          }
          hS();
          var Pe = U0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Mm(e, t, f, Pe);
        } else if (ME(o)) {
          t.flags |= et, t.child = e.child;
          var Ae = SD.bind(null, e);
          return eb(o, Ae), null;
        } else {
          jb(t, o, s.treeContext);
          var bt = i.children, Et = X0(t, bt);
          return Et.flags |= Ei, Et;
        }
      }
    }
    function dR(e, t, a) {
      e.lanes = rt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = rt(i.lanes, t)), Mg(e.return, t, a);
    }
    function Qx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ne) {
          var o = i.memoizedState;
          o !== null && dR(i, a, e);
        } else if (i.tag === Ct)
          dR(i, a, e);
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
    function Jx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && dm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Kx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !P0[e])
        if (P0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Zx(e, t) {
      e !== void 0 && !Nm[e] && (e !== "collapsed" && e !== "hidden" ? (Nm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Nm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function pR(e, t) {
      {
        var a = kt(e), i = !a && typeof vi(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function $x(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!pR(e[a], a))
              return;
        } else {
          var i = vi(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!pR(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Q0(e, t, a, i, o) {
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
    function vR(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      Kx(o), Zx(s, o), $x(f, o), wa(e, t, f, a);
      var v = sl.current, m = i0(v, Op);
      if (m)
        v = l0(v, Op), t.flags |= et;
      else {
        var R = e !== null && (e.flags & et) !== je;
        R && Qx(t, t.child, a), v = Hf(v);
      }
      if (Wu(t, v), (t.mode & ze) === He)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = Jx(t.child), M;
            T === null ? (M = t.child, t.child = null) : (M = T.sibling, T.sibling = null), Q0(
              t,
              !1,
              // isBackwards
              M,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var L = null, H = t.child;
            for (t.child = null; H !== null; ) {
              var P = H.alternate;
              if (P !== null && dm(P) === null) {
                t.child = H;
                break;
              }
              var q = H.sibling;
              H.sibling = L, L = H, H = q;
            }
            Q0(
              t,
              !0,
              // isBackwards
              L,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            Q0(
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
    function eO(e, t, a) {
      n0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ff(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var hR = !1;
    function tO(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || hR || (hR = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var m = t.type.propTypes;
        m && il(m, s, "prop", "Context.Provider");
      }
      if (n1(t, o, v), f !== null) {
        var R = f.value;
        if (De(R, v)) {
          if (f.children === s.children && !Bh())
            return Bo(e, t, a);
        } else
          Qb(t, o, a);
      }
      var T = s.children;
      return wa(e, t, T, a), t.child;
    }
    var mR = !1;
    function nO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (mR || (mR = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, a);
      var f = er(i);
      du(t);
      var v;
      return zp.current = t, lr(!0), v = s(f), lr(!1), Eo(), t.flags |= oi, wa(e, t, v, a), t.child;
    }
    function Ip() {
      fl = !0;
    }
    function Um(e, t) {
      (t.mode & ze) === He && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Qt);
    }
    function Bo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), K1(), Qp(t.lanes), ra(a, t.childLanes) ? (ox(e, t), t.child) : null;
    }
    function rO(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Mt) : s.push(e), a.flags |= Qt, a;
      }
    }
    function J0(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function aO(e, t, a) {
      switch (t.tag) {
        case ie:
          uR(t), t.stateNode, zf();
          break;
        case G:
          R1(t);
          break;
        case W: {
          var i = t.type;
          Wl(i) && Yh(t);
          break;
        }
        case Se:
          n0(t, t.stateNode.containerInfo);
          break;
        case Qe: {
          var o = t.memoizedProps.value, s = t.type._context;
          n1(t, s, o);
          break;
        }
        case Lt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= Me);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case Ne: {
          var m = t.memoizedState;
          if (m !== null) {
            if (m.dehydrated !== null)
              return Wu(t, Hf(sl.current)), t.flags |= et, null;
            var R = t.child, T = R.childLanes;
            if (ra(a, T))
              return cR(e, t, a);
            Wu(t, Hf(sl.current));
            var M = Bo(e, t, a);
            return M !== null ? M.sibling : null;
          } else
            Wu(t, Hf(sl.current));
          break;
        }
        case Ct: {
          var L = (e.flags & et) !== je, H = ra(a, t.childLanes);
          if (L) {
            if (H)
              return vR(e, t, a);
            t.flags |= et;
          }
          var P = t.memoizedState;
          if (P !== null && (P.rendering = null, P.tail = null, P.lastEffect = null), Wu(t, sl.current), H)
            break;
          return null;
        }
        case Je:
        case at:
          return t.lanes = Q, iR(e, t, a);
      }
      return Bo(e, t, a);
    }
    function yR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return rO(e, t, xS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = J0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & et) === je)
            return fl = !1, aO(e, t, a);
          (e.flags & Lc) !== je ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, Mr() && _b(t)) {
        var f = t.index, v = Lb();
        YE(t, v, f);
      }
      switch (t.lanes = Q, t.tag) {
        case Y:
          return jx(e, t, t.type, a);
        case On: {
          var m = t.elementType;
          return Ix(e, t, m, a);
        }
        case re: {
          var R = t.type, T = t.pendingProps, M = t.elementType === R ? T : ul(R, T);
          return B0(e, t, R, M, a);
        }
        case W: {
          var L = t.type, H = t.pendingProps, P = t.elementType === L ? H : ul(L, H);
          return oR(e, t, L, P, a);
        }
        case ie:
          return Ux(e, t, a);
        case G:
          return zx(e, t, a);
        case J:
          return Ax(e, t);
        case Ne:
          return cR(e, t, a);
        case Se:
          return eO(e, t, a);
        case Be: {
          var q = t.type, Re = t.pendingProps, Pe = t.elementType === q ? Re : ul(q, Re);
          return nR(e, t, q, Pe, a);
        }
        case xe:
          return Lx(e, t, a);
        case ht:
          return Nx(e, t, a);
        case Lt:
          return Mx(e, t, a);
        case Qe:
          return tO(e, t, a);
        case ct:
          return nO(e, t, a);
        case mt: {
          var Ae = t.type, bt = t.pendingProps, Et = ul(Ae, bt);
          if (t.type !== t.elementType) {
            var A = Ae.propTypes;
            A && il(
              A,
              Et,
              // Resolved for outer only
              "prop",
              Dt(Ae)
            );
          }
          return Et = ul(Ae.type, Et), rR(e, t, Ae, Et, a);
        }
        case Ze:
          return aR(e, t, t.type, t.pendingProps, a);
        case Sn: {
          var X = t.type, I = t.pendingProps, oe = t.elementType === X ? I : ul(X, I);
          return Fx(e, t, X, oe, a);
        }
        case Ct:
          return vR(e, t, a);
        case rn:
          break;
        case Je:
          return iR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qf(e) {
      e.flags |= Me;
    }
    function gR(e) {
      e.flags |= Sa, e.flags |= Ri;
    }
    var SR, K0, ER, RR;
    SR = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === G || o.tag === J)
          Ow(e, o.stateNode);
        else if (o.tag !== Se) {
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
    }, K0 = function(e, t) {
    }, ER = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = r0(), m = kw(f, a, s, i, o, v);
        t.updateQueue = m, m && qf(t);
      }
    }, RR = function(e, t, a, i) {
      a !== i && qf(t);
    };
    function Fp(e, t) {
      if (!Mr())
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
    function zr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = je;
      if (t) {
        if ((e.mode & _t) !== He) {
          for (var m = e.selfBaseDuration, R = e.child; R !== null; )
            a = rt(a, rt(R.lanes, R.childLanes)), i |= R.subtreeFlags & ur, i |= R.flags & ur, m += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = m;
        } else
          for (var T = e.child; T !== null; )
            a = rt(a, rt(T.lanes, T.childLanes)), i |= T.subtreeFlags & ur, i |= T.flags & ur, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & _t) !== He) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = rt(a, rt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = rt(a, rt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function iO(e, t, a) {
      if (Yb() && (t.mode & ze) !== He && (t.flags & et) === je)
        return KE(t), zf(), t.flags |= _r | kl | or, !1;
      var i = Qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Bb(t), zr(t), (t.mode & _t) !== He) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (zf(), (t.flags & et) === je && (t.memoizedState = null), t.flags |= Me, zr(t), (t.mode & _t) !== He) {
            var f = a !== null;
            if (f) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return ZE(), !0;
    }
    function CR(e, t, a) {
      var i = t.pendingProps;
      switch (Tg(t), t.tag) {
        case Y:
        case On:
        case Ze:
        case re:
        case Be:
        case xe:
        case ht:
        case Lt:
        case ct:
        case mt:
          return zr(t), null;
        case W: {
          var o = t.type;
          return Wl(o) && Vh(t), zr(t), null;
        }
        case ie: {
          var s = t.stateNode;
          if (jf(t), Sg(t), u0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Qh(t);
            if (f)
              qf(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _r) !== je) && (t.flags |= jn, ZE());
            }
          }
          return K0(e, t), zr(t), null;
        }
        case G: {
          a0(t);
          var m = E1(), R = t.type;
          if (e !== null && t.stateNode != null)
            ER(e, t, R, i, m), e.ref !== t.ref && gR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var T = r0(), M = Qh(t);
            if (M)
              Hb(t, m, T) && qf(t);
            else {
              var L = xw(R, i, m, T, t);
              SR(L, t, !1, !1), t.stateNode = L, Dw(L, R, i, m) && qf(t);
            }
            t.ref !== null && gR(t);
          }
          return zr(t), null;
        }
        case J: {
          var H = i;
          if (e && t.stateNode != null) {
            var P = e.memoizedProps;
            RR(e, t, P, H);
          } else {
            if (typeof H != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var q = E1(), Re = r0(), Pe = Qh(t);
            Pe ? Pb(t) && qf(t) : t.stateNode = _w(H, q, Re, t);
          }
          return zr(t), null;
        }
        case Ne: {
          Pf(t);
          var Ae = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bt = iO(e, t, Ae);
            if (!bt)
              return t.flags & or ? t : null;
          }
          if ((t.flags & et) !== je)
            return t.lanes = a, (t.mode & _t) !== He && M0(t), t;
          var Et = Ae !== null, A = e !== null && e.memoizedState !== null;
          if (Et !== A && Et) {
            var X = t.child;
            if (X.flags |= Dl, (t.mode & ze) !== He) {
              var I = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !be);
              I || i0(sl.current, T1) ? lD() : hS();
            }
          }
          var oe = t.updateQueue;
          if (oe !== null && (t.flags |= Me), zr(t), (t.mode & _t) !== He && Et) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case Se:
          return jf(t), K0(e, t), e === null && Tb(t.stateNode.containerInfo), zr(t), null;
        case Qe:
          var me = t.type._context;
          return Ng(me, t), zr(t), null;
        case Sn: {
          var Ke = t.type;
          return Wl(Ke) && Vh(t), zr(t), null;
        }
        case Ct: {
          Pf(t);
          var nt = t.memoizedState;
          if (nt === null)
            return zr(t), null;
          var Xt = (t.flags & et) !== je, zt = nt.rendering;
          if (zt === null)
            if (Xt)
              Fp(nt, !1);
            else {
              var Gn = uD() && (e === null || (e.flags & et) === je);
              if (!Gn)
                for (var At = t.child; At !== null; ) {
                  var Pn = dm(At);
                  if (Pn !== null) {
                    Xt = !0, t.flags |= et, Fp(nt, !1);
                    var ua = Pn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Me), t.subtreeFlags = je, ux(t, a), Wu(t, l0(sl.current, Op)), t.child;
                  }
                  At = At.sibling;
                }
              nt.tail !== null && Hn() > VR() && (t.flags |= et, Xt = !0, Fp(nt, !1), t.lanes = Ad);
            }
          else {
            if (!Xt) {
              var Hr = dm(zt);
              if (Hr !== null) {
                t.flags |= et, Xt = !0;
                var fi = Hr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= Me), Fp(nt, !0), nt.tail === null && nt.tailMode === "hidden" && !zt.alternate && !Mr())
                  return zr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Hn() * 2 - nt.renderingStartTime > VR() && a !== Ta && (t.flags |= et, Xt = !0, Fp(nt, !1), t.lanes = Ad);
            }
            if (nt.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Oa = nt.last;
              Oa !== null ? Oa.sibling = zt : t.child = zt, nt.last = zt;
            }
          }
          if (nt.tail !== null) {
            var Da = nt.tail;
            nt.rendering = Da, nt.tail = Da.sibling, nt.renderingStartTime = Hn(), Da.sibling = null;
            var sa = sl.current;
            return Xt ? sa = l0(sa, Op) : sa = Hf(sa), Wu(t, sa), Da;
          }
          return zr(t), null;
        }
        case rn:
          break;
        case Je:
        case at: {
          vS(t);
          var Xo = t.memoizedState, ed = Xo !== null;
          if (e !== null) {
            var ev = e.memoizedState, $l = ev !== null;
            $l !== ed && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !$ && (t.flags |= Dl);
          }
          return !ed || (t.mode & ze) === He ? zr(t) : ra(Zl, Ta) && (zr(t), t.subtreeFlags & (Qt | Me) && (t.flags |= Dl)), null;
        }
        case Ot:
          return null;
        case it:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lO(e, t, a) {
      switch (Tg(t), t.tag) {
        case W: {
          var i = t.type;
          Wl(i) && Vh(t);
          var o = t.flags;
          return o & or ? (t.flags = o & ~or | et, (t.mode & _t) !== He && M0(t), t) : null;
        }
        case ie: {
          t.stateNode, jf(t), Sg(t), u0();
          var s = t.flags;
          return (s & or) !== je && (s & et) === je ? (t.flags = s & ~or | et, t) : null;
        }
        case G:
          return a0(t), null;
        case Ne: {
          Pf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            zf();
          }
          var v = t.flags;
          return v & or ? (t.flags = v & ~or | et, (t.mode & _t) !== He && M0(t), t) : null;
        }
        case Ct:
          return Pf(t), null;
        case Se:
          return jf(t), null;
        case Qe:
          var m = t.type._context;
          return Ng(m, t), null;
        case Je:
        case at:
          return vS(t), null;
        case Ot:
          return null;
        default:
          return null;
      }
    }
    function TR(e, t, a) {
      switch (Tg(t), t.tag) {
        case W: {
          var i = t.type.childContextTypes;
          i != null && Vh(t);
          break;
        }
        case ie: {
          t.stateNode, jf(t), Sg(t), u0();
          break;
        }
        case G: {
          a0(t);
          break;
        }
        case Se:
          jf(t);
          break;
        case Ne:
          Pf(t);
          break;
        case Ct:
          Pf(t);
          break;
        case Qe:
          var o = t.type._context;
          Ng(o, t);
          break;
        case Je:
        case at:
          vS(t);
          break;
      }
    }
    var wR = null;
    wR = /* @__PURE__ */ new Set();
    var zm = !1, Ar = !1, oO = typeof WeakSet == "function" ? WeakSet : Set, ke = null, Xf = null, Gf = null;
    function uO(e) {
      li(null, function() {
        throw e;
      }), Ki();
    }
    var sO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & _t)
        try {
          Jl(), t.componentWillUnmount();
        } finally {
          Ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function bR(e, t) {
      try {
        Gu(fr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Z0(e, t, a) {
      try {
        sO(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function cO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function xR(e, t) {
      try {
        DR(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Qf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (gt && dt && e.mode & _t)
              try {
                Jl(), i = a(null);
              } finally {
                Ql(e);
              }
            else
              i = a(null);
          } catch (o) {
            cn(e, t, o);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          a.current = null;
    }
    function Am(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var OR = !1;
    function fO(e, t) {
      ww(e.containerInfo), ke = t, dO();
      var a = OR;
      return OR = !1, a;
    }
    function dO() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        (e.subtreeFlags & Jr) !== je && t !== null ? (t.return = e, ke = t) : pO();
      }
    }
    function pO() {
      for (; ke !== null; ) {
        var e = ke;
        hn(e);
        try {
          vO(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function vO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & jn) !== je) {
        switch (hn(e), e.tag) {
          case re:
          case Be:
          case Ze:
            break;
          case W: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !vc && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), o);
              {
                var v = wR;
                f === void 0 && !v.has(e.type) && (v.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", $e(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ie: {
            {
              var m = e.stateNode;
              Qw(m.containerInfo);
            }
            break;
          }
          case G:
          case J:
          case Se:
          case Sn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        ln();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & Ur) !== Ga ? Wv(t) : (e & fr) !== Ga && pu(t), (e & ql) !== Ga && Kp(!0), Am(t, a, v), (e & ql) !== Ga && Kp(!1), (e & Ur) !== Ga ? qv() : (e & fr) !== Ga && Ns());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Gu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Ur) !== Ga ? Nd(t) : (e & fr) !== Ga && Xv(t);
            var f = s.create;
            (e & ql) !== Ga && Kp(!0), s.destroy = f(), (e & ql) !== Ga && Kp(!1), (e & Ur) !== Ga ? Ic() : (e & fr) !== Ga && Md();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var m = void 0;
                (s.tag & fr) !== je ? m = "useLayoutEffect" : (s.tag & ql) !== je ? m = "useInsertionEffect" : m = "useEffect";
                var R = void 0;
                v === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? R = `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + v, E("%s must not return anything besides a function, which is used for clean-up.%s", m, R);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function hO(e, t) {
      if ((t.flags & Me) !== je)
        switch (t.tag) {
          case Lt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = Q1(), v = t.alternate === null ? "mount" : "update";
            G1() && (v = "nested-update"), typeof s == "function" && s(o, v, a, f);
            var m = t.return;
            e:
              for (; m !== null; ) {
                switch (m.tag) {
                  case ie:
                    var R = m.stateNode;
                    R.passiveEffectDuration += a;
                    break e;
                  case Lt:
                    var T = m.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                m = m.return;
              }
            break;
          }
        }
    }
    function mO(e, t, a, i) {
      if ((a.flags & ui) !== je)
        switch (a.tag) {
          case re:
          case Be:
          case Ze: {
            if (!Ar)
              if (a.mode & _t)
                try {
                  Jl(), Gu(fr | cr, a);
                } finally {
                  Ql(a);
                }
              else
                Gu(fr | cr, a);
            break;
          }
          case W: {
            var o = a.stateNode;
            if (a.flags & Me && !Ar)
              if (t === null)
                if (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & _t)
                  try {
                    Jl(), o.componentDidMount();
                  } finally {
                    Ql(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & _t)
                  try {
                    Jl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ql(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), u1(a, v, o));
            break;
          }
          case ie: {
            var m = a.updateQueue;
            if (m !== null) {
              var R = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case G:
                    R = a.child.stateNode;
                    break;
                  case W:
                    R = a.child.stateNode;
                    break;
                }
              u1(a, m, R);
            }
            break;
          }
          case G: {
            var T = a.stateNode;
            if (t === null && a.flags & Me) {
              var M = a.type, L = a.memoizedProps;
              zw(T, M, L);
            }
            break;
          }
          case J:
            break;
          case Se:
            break;
          case Lt: {
            {
              var H = a.memoizedProps, P = H.onCommit, q = H.onRender, Re = a.stateNode.effectDuration, Pe = Q1(), Ae = t === null ? "mount" : "update";
              G1() && (Ae = "nested-update"), typeof q == "function" && q(a.memoizedProps.id, Ae, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Pe);
              {
                typeof P == "function" && P(a.memoizedProps.id, Ae, Re, Pe), pD(a);
                var bt = a.return;
                e:
                  for (; bt !== null; ) {
                    switch (bt.tag) {
                      case ie:
                        var Et = bt.stateNode;
                        Et.effectDuration += Re;
                        break e;
                      case Lt:
                        var A = bt.stateNode;
                        A.effectDuration += Re;
                        break e;
                    }
                    bt = bt.return;
                  }
              }
            }
            break;
          }
          case Ne: {
            wO(e, a);
            break;
          }
          case Ct:
          case Sn:
          case rn:
          case Je:
          case at:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Sa && DR(a);
    }
    function yO(e) {
      switch (e.tag) {
        case re:
        case Be:
        case Ze: {
          if (e.mode & _t)
            try {
              Jl(), bR(e, e.return);
            } finally {
              Ql(e);
            }
          else
            bR(e, e.return);
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && cO(e, e.return, t), xR(e, e.return);
          break;
        }
        case G: {
          xR(e, e.return);
          break;
        }
      }
    }
    function gO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Ww(o) : Xw(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === J) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? qw(s) : Gw(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Je || i.tag === at) && i.memoizedState !== null && i !== e)) {
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
    function DR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case G:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & _t)
            try {
              Jl(), o = t(i);
            } finally {
              Ql(e);
            }
          else
            o = t(i);
          typeof o == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", $e(e)), t.current = i;
      }
    }
    function SO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function kR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, kR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && xb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function EO(e) {
      for (var t = e.return; t !== null; ) {
        if (_R(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _R(e) {
      return e.tag === G || e.tag === ie || e.tag === Se;
    }
    function LR(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || _R(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== J && t.tag !== Jt; ) {
            if (t.flags & Qt || t.child === null || t.tag === Se)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Qt))
            return t.stateNode;
        }
    }
    function RO(e) {
      var t = EO(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & za && (NE(a), t.flags &= ~za);
          var i = LR(e);
          eS(e, i, a);
          break;
        }
        case ie:
        case Se: {
          var o = t.stateNode.containerInfo, s = LR(e);
          $0(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function $0(e, t, a) {
      var i = e.tag, o = i === G || i === J;
      if (o) {
        var s = e.stateNode;
        t ? Pw(a, s, t) : jw(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          $0(f, t, a);
          for (var v = f.sibling; v !== null; )
            $0(v, t, a), v = v.sibling;
        }
      }
    }
    function eS(e, t, a) {
      var i = e.tag, o = i === G || i === J;
      if (o) {
        var s = e.stateNode;
        t ? Hw(a, s, t) : Fw(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          eS(f, t, a);
          for (var v = f.sibling; v !== null; )
            eS(v, t, a), v = v.sibling;
        }
      }
    }
    var Ir = null, pl = !1;
    function CO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case G: {
                Ir = i.stateNode, pl = !1;
                break e;
              }
              case ie: {
                Ir = i.stateNode.containerInfo, pl = !0;
                break e;
              }
              case Se: {
                Ir = i.stateNode.containerInfo, pl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Ir === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        NR(e, t, a), Ir = null, pl = !1;
      }
      SO(a);
    }
    function Qu(e, t, a) {
      for (var i = a.child; i !== null; )
        NR(e, t, i), i = i.sibling;
    }
    function NR(e, t, a) {
      switch (Vv(a), a.tag) {
        case G:
          Ar || Qf(a, t);
        case J: {
          {
            var i = Ir, o = pl;
            Ir = null, Qu(e, t, a), Ir = i, pl = o, Ir !== null && (pl ? Vw(Ir, a.stateNode) : Bw(Ir, a.stateNode));
          }
          return;
        }
        case Jt: {
          Ir !== null && (pl ? Yw(Ir, a.stateNode) : fg(Ir, a.stateNode));
          return;
        }
        case Se: {
          {
            var s = Ir, f = pl;
            Ir = a.stateNode.containerInfo, pl = !0, Qu(e, t, a), Ir = s, pl = f;
          }
          return;
        }
        case re:
        case Be:
        case mt:
        case Ze: {
          if (!Ar) {
            var v = a.updateQueue;
            if (v !== null) {
              var m = v.lastEffect;
              if (m !== null) {
                var R = m.next, T = R;
                do {
                  var M = T, L = M.destroy, H = M.tag;
                  L !== void 0 && ((H & ql) !== Ga ? Am(a, t, L) : (H & fr) !== Ga && (pu(a), a.mode & _t ? (Jl(), Am(a, t, L), Ql(a)) : Am(a, t, L), Ns())), T = T.next;
                } while (T !== R);
              }
            }
          }
          Qu(e, t, a);
          return;
        }
        case W: {
          if (!Ar) {
            Qf(a, t);
            var P = a.stateNode;
            typeof P.componentWillUnmount == "function" && Z0(a, t, P);
          }
          Qu(e, t, a);
          return;
        }
        case rn: {
          Qu(e, t, a);
          return;
        }
        case Je: {
          if (
            // TODO: Remove this dead flag
            a.mode & ze
          ) {
            var q = Ar;
            Ar = q || a.memoizedState !== null, Qu(e, t, a), Ar = q;
          } else
            Qu(e, t, a);
          break;
        }
        default: {
          Qu(e, t, a);
          return;
        }
      }
    }
    function TO(e) {
      e.memoizedState;
    }
    function wO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && sb(s);
          }
        }
      }
    }
    function MR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new oO()), t.forEach(function(i) {
          var o = ED.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ca)
              if (Xf !== null && Gf !== null)
                Jp(Gf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function bO(e, t, a) {
      Xf = a, Gf = e, hn(t), UR(t, e), hn(t), Xf = null, Gf = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            CO(e, t, s);
          } catch (m) {
            cn(s, t, m);
          }
        }
      var f = cs();
      if (t.subtreeFlags & Kr)
        for (var v = t.child; v !== null; )
          hn(v), UR(v, e), v = v.sibling;
      hn(f);
    }
    function UR(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case re:
        case Be:
        case mt:
        case Ze: {
          if (vl(t, e), Kl(e), o & Me) {
            try {
              dl(ql | cr, e, e.return), Gu(ql | cr, e);
            } catch (Ke) {
              cn(e, e.return, Ke);
            }
            if (e.mode & _t) {
              try {
                Jl(), dl(fr | cr, e, e.return);
              } catch (Ke) {
                cn(e, e.return, Ke);
              }
              Ql(e);
            } else
              try {
                dl(fr | cr, e, e.return);
              } catch (Ke) {
                cn(e, e.return, Ke);
              }
          }
          return;
        }
        case W: {
          vl(t, e), Kl(e), o & Sa && i !== null && Qf(i, i.return);
          return;
        }
        case G: {
          vl(t, e), Kl(e), o & Sa && i !== null && Qf(i, i.return);
          {
            if (e.flags & za) {
              var s = e.stateNode;
              try {
                NE(s);
              } catch (Ke) {
                cn(e, e.return, Ke);
              }
            }
            if (o & Me) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, m = i !== null ? i.memoizedProps : v, R = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Aw(f, T, R, m, v, e);
                  } catch (Ke) {
                    cn(e, e.return, Ke);
                  }
              }
            }
          }
          return;
        }
        case J: {
          if (vl(t, e), Kl(e), o & Me) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var M = e.stateNode, L = e.memoizedProps, H = i !== null ? i.memoizedProps : L;
            try {
              Iw(M, H, L);
            } catch (Ke) {
              cn(e, e.return, Ke);
            }
          }
          return;
        }
        case ie: {
          if (vl(t, e), Kl(e), o & Me && i !== null) {
            var P = i.memoizedState;
            if (P.isDehydrated)
              try {
                ub(t.containerInfo);
              } catch (Ke) {
                cn(e, e.return, Ke);
              }
          }
          return;
        }
        case Se: {
          vl(t, e), Kl(e);
          return;
        }
        case Ne: {
          vl(t, e), Kl(e);
          var q = e.child;
          if (q.flags & Dl) {
            var Re = q.stateNode, Pe = q.memoizedState, Ae = Pe !== null;
            if (Re.isHidden = Ae, Ae) {
              var bt = q.alternate !== null && q.alternate.memoizedState !== null;
              bt || iD();
            }
          }
          if (o & Me) {
            try {
              TO(e);
            } catch (Ke) {
              cn(e, e.return, Ke);
            }
            MR(e);
          }
          return;
        }
        case Je: {
          var Et = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ze
          ) {
            var A = Ar;
            Ar = A || Et, vl(t, e), Ar = A;
          } else
            vl(t, e);
          if (Kl(e), o & Dl) {
            var X = e.stateNode, I = e.memoizedState, oe = I !== null, Ce = e;
            if (X.isHidden = oe, oe && !Et && (Ce.mode & ze) !== He) {
              ke = Ce;
              for (var me = Ce.child; me !== null; )
                ke = me, OO(me), me = me.sibling;
            }
            gO(Ce, oe);
          }
          return;
        }
        case Ct: {
          vl(t, e), Kl(e), o & Me && MR(e);
          return;
        }
        case rn:
          return;
        default: {
          vl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & Qt) {
        try {
          RO(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~Qt;
      }
      t & Ei && (e.flags &= ~Ei);
    }
    function xO(e, t, a) {
      Xf = a, Gf = t, ke = e, zR(e, t, a), Xf = null, Gf = null;
    }
    function zR(e, t, a) {
      for (var i = (e.mode & ze) !== He; ke !== null; ) {
        var o = ke, s = o.child;
        if (o.tag === Je && i) {
          var f = o.memoizedState !== null, v = f || zm;
          if (v) {
            tS(e, t, a);
            continue;
          } else {
            var m = o.alternate, R = m !== null && m.memoizedState !== null, T = R || Ar, M = zm, L = Ar;
            zm = v, Ar = T, Ar && !L && (ke = o, DO(o));
            for (var H = s; H !== null; )
              ke = H, zR(
                H,
                // New root; bubble back up to here and stop.
                t,
                a
              ), H = H.sibling;
            ke = o, zm = M, Ar = L, tS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & ui) !== je && s !== null ? (s.return = o, ke = s) : tS(e, t, a);
      }
    }
    function tS(e, t, a) {
      for (; ke !== null; ) {
        var i = ke;
        if ((i.flags & ui) !== je) {
          var o = i.alternate;
          hn(i);
          try {
            mO(t, o, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          ln();
        }
        if (i === e) {
          ke = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ke = s;
          return;
        }
        ke = i.return;
      }
    }
    function OO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        switch (t.tag) {
          case re:
          case Be:
          case mt:
          case Ze: {
            if (t.mode & _t)
              try {
                Jl(), dl(fr, t, t.return);
              } finally {
                Ql(t);
              }
            else
              dl(fr, t, t.return);
            break;
          }
          case W: {
            Qf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && Z0(t, t.return, i);
            break;
          }
          case G: {
            Qf(t, t.return);
            break;
          }
          case Je: {
            var o = t.memoizedState !== null;
            if (o) {
              AR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ke = a) : AR(e);
      }
    }
    function AR(e) {
      for (; ke !== null; ) {
        var t = ke;
        if (t === e) {
          ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ke = a;
          return;
        }
        ke = t.return;
      }
    }
    function DO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        if (t.tag === Je) {
          var i = t.memoizedState !== null;
          if (i) {
            IR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ke = a) : IR(e);
      }
    }
    function IR(e) {
      for (; ke !== null; ) {
        var t = ke;
        hn(t);
        try {
          yO(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (ln(), t === e) {
          ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ke = a;
          return;
        }
        ke = t.return;
      }
    }
    function kO(e, t, a, i) {
      ke = t, _O(t, e, a, i);
    }
    function _O(e, t, a, i) {
      for (; ke !== null; ) {
        var o = ke, s = o.child;
        (o.subtreeFlags & Zr) !== je && s !== null ? (s.return = o, ke = s) : LO(e, t, a, i);
      }
    }
    function LO(e, t, a, i) {
      for (; ke !== null; ) {
        var o = ke;
        if ((o.flags & Qr) !== je) {
          hn(o);
          try {
            NO(t, o, a, i);
          } catch (f) {
            cn(o, o.return, f);
          }
          ln();
        }
        if (o === e) {
          ke = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, ke = s;
          return;
        }
        ke = o.return;
      }
    }
    function NO(e, t, a, i) {
      switch (t.tag) {
        case re:
        case Be:
        case Ze: {
          if (t.mode & _t) {
            N0();
            try {
              Gu(Ur | cr, t);
            } finally {
              L0(t);
            }
          } else
            Gu(Ur | cr, t);
          break;
        }
      }
    }
    function MO(e) {
      ke = e, UO();
    }
    function UO() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        if ((ke.flags & Mt) !== je) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              ke = o, IO(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var v = f.sibling;
                    f.sibling = null, f = v;
                  } while (f !== null);
                }
              }
            }
            ke = e;
          }
        }
        (e.subtreeFlags & Zr) !== je && t !== null ? (t.return = e, ke = t) : zO();
      }
    }
    function zO() {
      for (; ke !== null; ) {
        var e = ke;
        (e.flags & Qr) !== je && (hn(e), AO(e), ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function AO(e) {
      switch (e.tag) {
        case re:
        case Be:
        case Ze: {
          e.mode & _t ? (N0(), dl(Ur | cr, e, e.return), L0(e)) : dl(Ur | cr, e, e.return);
          break;
        }
      }
    }
    function IO(e, t) {
      for (; ke !== null; ) {
        var a = ke;
        hn(a), jO(a, t), ln();
        var i = a.child;
        i !== null ? (i.return = a, ke = i) : FO(e);
      }
    }
    function FO(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.sibling, i = t.return;
        if (kR(t), t === e) {
          ke = null;
          return;
        }
        if (a !== null) {
          a.return = i, ke = a;
          return;
        }
        ke = i;
      }
    }
    function jO(e, t) {
      switch (e.tag) {
        case re:
        case Be:
        case Ze: {
          e.mode & _t ? (N0(), dl(Ur, e, t), L0(e)) : dl(Ur, e, t);
          break;
        }
      }
    }
    function HO(e) {
      switch (e.tag) {
        case re:
        case Be:
        case Ze: {
          try {
            Gu(fr | cr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function PO(e) {
      switch (e.tag) {
        case re:
        case Be:
        case Ze: {
          try {
            Gu(Ur | cr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function BO(e) {
      switch (e.tag) {
        case re:
        case Be:
        case Ze: {
          try {
            dl(fr | cr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Z0(e, e.return, t);
          break;
        }
      }
    }
    function VO(e) {
      switch (e.tag) {
        case re:
        case Be:
        case Ze:
          try {
            dl(Ur | cr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var jp = Symbol.for;
      jp("selector.component"), jp("selector.has_pseudo_class"), jp("selector.role"), jp("selector.test_id"), jp("selector.text");
    }
    var YO = [];
    function WO() {
      YO.forEach(function(e) {
        return e();
      });
    }
    var qO = C.ReactCurrentActQueue;
    function XO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function FR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && qO.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var GO = Math.ceil, nS = C.ReactCurrentDispatcher, rS = C.ReactCurrentOwner, Fr = C.ReactCurrentBatchConfig, hl = C.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), jR = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), Ui = (
      /*                */
      4
    ), Vo = 0, Hp = 1, hc = 2, Im = 3, Pp = 4, HR = 5, aS = 6, wt = vr, ba = null, zn = null, hr = Q, Zl = Q, iS = ju(Q), mr = Vo, Bp = null, Fm = Q, Vp = Q, jm = Q, Yp = null, Qa = null, lS = 0, PR = 500, BR = 1 / 0, QO = 500, Yo = null;
    function Wp() {
      BR = Hn() + QO;
    }
    function VR() {
      return BR;
    }
    var Hm = !1, oS = null, Jf = null, mc = !1, Ju = null, qp = Q, uS = [], sS = null, JO = 50, Xp = 0, cS = null, fS = !1, Pm = !1, KO = 50, Kf = 0, Bm = null, Gp = nn, Vm = Q, YR = !1;
    function Ym() {
      return ba;
    }
    function xa() {
      return (wt & (jr | Ui)) !== vr ? Hn() : (Gp !== nn || (Gp = Hn()), Gp);
    }
    function Ku(e) {
      var t = e.mode;
      if ((t & ze) === He)
        return Ve;
      if ((wt & jr) !== vr && hr !== Q)
        return Eu(hr);
      var a = Xb() !== qb;
      if (a) {
        if (Fr.transition !== null) {
          var i = Fr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Vm === Ln && (Vm = nh()), Vm;
      }
      var o = Pa();
      if (o !== Ln)
        return o;
      var s = Lw();
      return s;
    }
    function ZO(e) {
      var t = e.mode;
      return (t & ze) === He ? Ve : na();
    }
    function yr(e, t, a, i) {
      CD(), YR && E("useInsertionEffect must not schedule updates."), fS && (Pm = !0), ko(e, a, i), (wt & jr) !== Q && e === ba ? bD(t) : (Ca && rf(e, t, a), xD(t), e === ba && ((wt & jr) === vr && (Vp = rt(Vp, a)), mr === Pp && Zu(e, hr)), Ja(e, i), a === Ve && wt === vr && (t.mode & ze) === He && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && (Wp(), VE()));
    }
    function $O(e, t, a) {
      var i = e.current;
      i.lanes = t, ko(e, t, a), Ja(e, a);
    }
    function eD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (wt & jr) !== vr
      );
    }
    function Ja(e, t) {
      var a = e.callbackNode;
      _y(e, t);
      var i = Hs(e, e === ba ? hr : Q);
      if (i === Q) {
        a !== null && lC(a), e.callbackNode = null, e.callbackPriority = Ln;
        return;
      }
      var o = Nn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== gS)) {
        a == null && s !== Ve && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && lC(a);
      var f;
      if (o === Ve)
        e.tag === Hu ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), kb(XR.bind(null, e))) : BE(XR.bind(null, e)), hl.current !== null ? hl.current.push(Pu) : Mw(function() {
          (wt & (jr | Ui)) === vr && Pu();
        }), f = null;
      else {
        var v;
        switch (sr(i)) {
          case Mn:
            v = $r;
            break;
          case tl:
            v = cu;
            break;
          case bi:
            v = Ci;
            break;
          case Ru:
            v = _s;
            break;
          default:
            v = Ci;
            break;
        }
        f = SS(v, WR.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function WR(e, t) {
      if (Cx(), Gp = nn, Vm = Q, (wt & (jr | Ui)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = qo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Hs(e, e === ba ? hr : Q);
      if (o === Q)
        return null;
      var s = !Bs(e, o) && !th(e, o) && !t, f = s ? cD(e, o) : qm(e, o);
      if (f !== Vo) {
        if (f === hc) {
          var v = Fl(e);
          v !== Q && (o = v, f = dS(e, v));
        }
        if (f === Hp) {
          var m = Bp;
          throw yc(e, Q), Zu(e, o), Ja(e, Hn()), m;
        }
        if (f === aS)
          Zu(e, o);
        else {
          var R = !Bs(e, o), T = e.current.alternate;
          if (R && !nD(T)) {
            if (f = qm(e, o), f === hc) {
              var M = Fl(e);
              M !== Q && (o = M, f = dS(e, M));
            }
            if (f === Hp) {
              var L = Bp;
              throw yc(e, Q), Zu(e, o), Ja(e, Hn()), L;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, tD(e, f, o);
        }
      }
      return Ja(e, Hn()), e.callbackNode === a ? WR.bind(null, e) : null;
    }
    function dS(e, t) {
      var a = Yp;
      if (af(e)) {
        var i = yc(e, t);
        i.flags |= _r, Cb(e.containerInfo);
      }
      var o = qm(e, t);
      if (o !== hc) {
        var s = Qa;
        Qa = a, s !== null && qR(s);
      }
      return o;
    }
    function qR(e) {
      Qa === null ? Qa = e : Qa.push.apply(Qa, e);
    }
    function tD(e, t, a) {
      switch (t) {
        case Vo:
        case Hp:
          throw new Error("Root did not complete. This is a bug in React.");
        case hc: {
          gc(e, Qa, Yo);
          break;
        }
        case Im: {
          if (Zu(e, a), Zv(a) && // do not delay if we're inside an act() scope
          !oC()) {
            var i = lS + PR - Hn();
            if (i > 10) {
              var o = Hs(e, Q);
              if (o !== Q)
                break;
              var s = e.suspendedLanes;
              if (!Do(s, a)) {
                xa(), tf(e, s);
                break;
              }
              e.timeoutHandle = sg(gc.bind(null, e, Qa, Yo), i);
              break;
            }
          }
          gc(e, Qa, Yo);
          break;
        }
        case Pp: {
          if (Zu(e, a), eh(a))
            break;
          if (!oC()) {
            var f = Zc(e, a), v = f, m = Hn() - v, R = RD(m) - m;
            if (R > 10) {
              e.timeoutHandle = sg(gc.bind(null, e, Qa, Yo), R);
              break;
            }
          }
          gc(e, Qa, Yo);
          break;
        }
        case HR: {
          gc(e, Qa, Yo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function nD(e) {
      for (var t = e; ; ) {
        if (t.flags & yo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, v = s.value;
                try {
                  if (!De(f(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var m = t.child;
        if (t.subtreeFlags & yo && m !== null) {
          m.return = t, t = m;
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
    function Zu(e, t) {
      t = Vs(t, jm), t = Vs(t, Vp), ah(e, t);
    }
    function XR(e) {
      if (Tx(), (wt & (jr | Ui)) !== vr)
        throw new Error("Should not already be working.");
      qo();
      var t = Hs(e, Q);
      if (!ra(t, Ve))
        return Ja(e, Hn()), null;
      var a = qm(e, t);
      if (e.tag !== Hu && a === hc) {
        var i = Fl(e);
        i !== Q && (t = i, a = dS(e, i));
      }
      if (a === Hp) {
        var o = Bp;
        throw yc(e, Q), Zu(e, t), Ja(e, Hn()), o;
      }
      if (a === aS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, gc(e, Qa, Yo), Ja(e, Hn()), null;
    }
    function rD(e, t) {
      t !== Q && (Hd(e, rt(t, Ve)), Ja(e, Hn()), (wt & (jr | Ui)) === vr && (Wp(), Pu()));
    }
    function pS(e, t) {
      var a = wt;
      wt |= jR;
      try {
        return e(t);
      } finally {
        wt = a, wt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && (Wp(), VE());
      }
    }
    function aD(e, t, a, i, o) {
      var s = Pa(), f = Fr.transition;
      try {
        return Fr.transition = null, wn(Mn), e(t, a, i, o);
      } finally {
        wn(s), Fr.transition = f, wt === vr && Wp();
      }
    }
    function Wo(e) {
      Ju !== null && Ju.tag === Hu && (wt & (jr | Ui)) === vr && qo();
      var t = wt;
      wt |= jR;
      var a = Fr.transition, i = Pa();
      try {
        return Fr.transition = null, wn(Mn), e ? e() : void 0;
      } finally {
        wn(i), Fr.transition = a, wt = t, (wt & (jr | Ui)) === vr && Pu();
      }
    }
    function GR() {
      return (wt & (jr | Ui)) !== vr;
    }
    function Wm(e, t) {
      la(iS, Zl, e), Zl = rt(Zl, t);
    }
    function vS(e) {
      Zl = iS.current, ia(iS, e);
    }
    function yc(e, t) {
      e.finishedWork = null, e.finishedLanes = Q;
      var a = e.timeoutHandle;
      if (a !== cg && (e.timeoutHandle = cg, Nw(a)), zn !== null)
        for (var i = zn.return; i !== null; ) {
          var o = i.alternate;
          TR(o, i), i = i.return;
        }
      ba = e;
      var s = Sc(e.current, null);
      return zn = s, hr = Zl = t, mr = Vo, Bp = null, Fm = Q, Vp = Q, jm = Q, Yp = null, Qa = null, Kb(), ol.discardPendingWarnings(), s;
    }
    function QR(e, t) {
      do {
        var a = zn;
        try {
          if ($h(), b1(), ln(), rS.current = null, a === null || a.return === null) {
            mr = Hp, Bp = t, zn = null;
            return;
          }
          if (gt && a.mode & _t && Lm(a, !0), ft)
            if (Eo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Qv(a, i, hr);
            } else
              Gv(a, t, hr);
          Dx(e, a.return, a, t, hr), $R(a);
        } catch (o) {
          t = o, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
          continue;
        }
        return;
      } while (!0);
    }
    function JR() {
      var e = nS.current;
      return nS.current = xm, e === null ? xm : e;
    }
    function KR(e) {
      nS.current = e;
    }
    function iD() {
      lS = Hn();
    }
    function Qp(e) {
      Fm = rt(e, Fm);
    }
    function lD() {
      mr === Vo && (mr = Im);
    }
    function hS() {
      (mr === Vo || mr === Im || mr === hc) && (mr = Pp), ba !== null && (Ps(Fm) || Ps(Vp)) && Zu(ba, hr);
    }
    function oD(e) {
      mr !== Pp && (mr = hc), Yp === null ? Yp = [e] : Yp.push(e);
    }
    function uD() {
      return mr === Vo;
    }
    function qm(e, t) {
      var a = wt;
      wt |= jr;
      var i = JR();
      if (ba !== e || hr !== t) {
        if (Ca) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Jp(e, hr), o.clear()), Pd(e, t);
        }
        Yo = Ws(), yc(e, t);
      }
      hu(t);
      do
        try {
          sD();
          break;
        } catch (s) {
          QR(e, s);
        }
      while (!0);
      if ($h(), wt = a, KR(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return zl(), ba = null, hr = Q, mr;
    }
    function sD() {
      for (; zn !== null; )
        ZR(zn);
    }
    function cD(e, t) {
      var a = wt;
      wt |= jr;
      var i = JR();
      if (ba !== e || hr !== t) {
        if (Ca) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Jp(e, hr), o.clear()), Pd(e, t);
        }
        Yo = Ws(), Wp(), yc(e, t);
      }
      hu(t);
      do
        try {
          fD();
          break;
        } catch (s) {
          QR(e, s);
        }
      while (!0);
      return $h(), KR(i), wt = a, zn !== null ? (Us(), Vo) : (zl(), ba = null, hr = Q, mr);
    }
    function fD() {
      for (; zn !== null && !Pv(); )
        ZR(zn);
    }
    function ZR(e) {
      var t = e.alternate;
      hn(e);
      var a;
      (e.mode & _t) !== He ? (_0(e), a = mS(t, e, Zl), Lm(e, !0)) : a = mS(t, e, Zl), ln(), e.memoizedProps = e.pendingProps, a === null ? $R(e) : zn = a, rS.current = null;
    }
    function $R(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & kl) === je) {
          hn(t);
          var o = void 0;
          if ((t.mode & _t) === He ? o = CR(a, t, Zl) : (_0(t), o = CR(a, t, Zl), Lm(t, !1)), ln(), o !== null) {
            zn = o;
            return;
          }
        } else {
          var s = lO(a, t);
          if (s !== null) {
            s.flags &= Zi, zn = s;
            return;
          }
          if ((t.mode & _t) !== He) {
            Lm(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= kl, i.subtreeFlags = je, i.deletions = null;
          else {
            mr = aS, zn = null;
            return;
          }
        }
        var m = t.sibling;
        if (m !== null) {
          zn = m;
          return;
        }
        t = i, zn = t;
      } while (t !== null);
      mr === Vo && (mr = HR);
    }
    function gc(e, t, a) {
      var i = Pa(), o = Fr.transition;
      try {
        Fr.transition = null, wn(Mn), dD(e, t, a, i);
      } finally {
        Fr.transition = o, wn(i);
      }
      return null;
    }
    function dD(e, t, a, i) {
      do
        qo();
      while (Ju !== null);
      if (TD(), (wt & (jr | Ui)) !== vr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Yv(s), o === null)
        return Ls(), null;
      if (s === Q && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ln;
      var f = rt(o.lanes, o.childLanes);
      nf(e, f), e === ba && (ba = null, zn = null, hr = Q), ((o.subtreeFlags & Zr) !== je || (o.flags & Zr) !== je) && (mc || (mc = !0, sS = a, SS(Ci, function() {
        return qo(), null;
      })));
      var v = (o.subtreeFlags & (Jr | Kr | ui | Zr)) !== je, m = (o.flags & (Jr | Kr | ui | Zr)) !== je;
      if (v || m) {
        var R = Fr.transition;
        Fr.transition = null;
        var T = Pa();
        wn(Mn);
        var M = wt;
        wt |= Ui, rS.current = null, fO(e, o), J1(), bO(e, o, s), bw(e.containerInfo), e.current = o, vu(s), xO(o, e, s), Jv(), su(), wt = M, wn(T), Fr.transition = R;
      } else
        e.current = o, J1();
      var L = mc;
      if (mc ? (mc = !1, Ju = e, qp = s) : (Kf = 0, Bm = null), f = e.pendingLanes, f === Q && (Jf = null), L || rC(e.current, !1), Ml(o.stateNode, i), Ca && e.memoizedUpdaters.clear(), WO(), Ja(e, Hn()), t !== null)
        for (var H = e.onRecoverableError, P = 0; P < t.length; P++) {
          var q = t[P], Re = q.stack, Pe = q.digest;
          H(q.value, {
            componentStack: Re,
            digest: Pe
          });
        }
      if (Hm) {
        Hm = !1;
        var Ae = oS;
        throw oS = null, Ae;
      }
      return ra(qp, Ve) && e.tag !== Hu && qo(), f = e.pendingLanes, ra(f, Ve) ? (Rx(), e === cS ? Xp++ : (Xp = 0, cS = e)) : Xp = 0, Pu(), Ls(), null;
    }
    function qo() {
      if (Ju !== null) {
        var e = sr(qp), t = Uy(bi, e), a = Fr.transition, i = Pa();
        try {
          return Fr.transition = null, wn(t), vD();
        } finally {
          wn(i), Fr.transition = a;
        }
      }
      return !1;
    }
    function pD(e) {
      uS.push(e), mc || (mc = !0, SS(Ci, function() {
        return qo(), null;
      }));
    }
    function vD() {
      if (Ju === null)
        return !1;
      var e = sS;
      sS = null;
      var t = Ju, a = qp;
      if (Ju = null, qp = Q, (wt & (jr | Ui)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      fS = !0, Pm = !1, Ms(a);
      var i = wt;
      wt |= Ui, MO(t.current), kO(t, t.current, a, e);
      {
        var o = uS;
        uS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          hO(t, f);
        }
      }
      Ti(), rC(t.current, !0), wt = i, Pu(), Pm ? t === Bm ? Kf++ : (Kf = 0, Bm = t) : Kf = 0, fS = !1, Pm = !1, Ld(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function eC(e) {
      return Jf !== null && Jf.has(e);
    }
    function hD(e) {
      Jf === null ? Jf = /* @__PURE__ */ new Set([e]) : Jf.add(e);
    }
    function mD(e) {
      Hm || (Hm = !0, oS = e);
    }
    var yD = mD;
    function tC(e, t, a) {
      var i = pc(a, t), o = Z1(e, i, Ve), s = Vu(e, o, Ve), f = xa();
      s !== null && (ko(s, Ve, f), Ja(s, f));
    }
    function cn(e, t, a) {
      if (uO(a), Kp(!1), e.tag === ie) {
        tC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ie) {
          tC(i, e, a);
          return;
        } else if (i.tag === W) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !eC(s)) {
            var f = pc(a, e), v = A0(i, f, Ve), m = Vu(i, v, Ve), R = xa();
            m !== null && (ko(m, Ve, R), Ja(m, R));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function gD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = xa();
      tf(e, a), OD(e), ba === e && Do(hr, a) && (mr === Pp || mr === Im && Zv(hr) && Hn() - lS < PR ? yc(e, Q) : jm = rt(jm, a)), Ja(e, o);
    }
    function nC(e, t) {
      t === Ln && (t = ZO(e));
      var a = xa(), i = Xa(e, t);
      i !== null && (ko(i, t, a), Ja(i, a));
    }
    function SD(e) {
      var t = e.memoizedState, a = Ln;
      t !== null && (a = t.retryLane), nC(e, a);
    }
    function ED(e, t) {
      var a = Ln, i;
      switch (e.tag) {
        case Ne:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Ct:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), nC(e, a);
    }
    function RD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : GO(e / 1960) * 1960;
    }
    function CD() {
      if (Xp > JO)
        throw Xp = 0, cS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Kf > KO && (Kf = 0, Bm = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function TD() {
      ol.flushLegacyContextWarning(), ol.flushPendingUnsafeLifecycleWarnings();
    }
    function rC(e, t) {
      hn(e), Xm(e, Ia, BO), t && Xm(e, go, VO), Xm(e, Ia, HO), t && Xm(e, go, PO), ln();
    }
    function Xm(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== je ? i = i.child : ((i.flags & t) !== je && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var Gm = null;
    function aC(e) {
      {
        if ((wt & jr) !== vr || !(e.mode & ze))
          return;
        var t = e.tag;
        if (t !== Y && t !== ie && t !== W && t !== re && t !== Be && t !== mt && t !== Ze)
          return;
        var a = $e(e) || "ReactComponent";
        if (Gm !== null) {
          if (Gm.has(a))
            return;
          Gm.add(a);
        } else
          Gm = /* @__PURE__ */ new Set([a]);
        var i = vn;
        try {
          hn(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? hn(e) : ln();
        }
      }
    }
    var mS;
    {
      var wD = null;
      mS = function(e, t, a) {
        var i = dC(wD, t);
        try {
          return yR(e, t, a);
        } catch (s) {
          if (Ib() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if ($h(), b1(), TR(e, t), dC(t, i), t.mode & _t && _0(t), li(null, yR, null, e, t, a), Oy()) {
            var o = Ki();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var iC = !1, yS;
    yS = /* @__PURE__ */ new Set();
    function bD(e) {
      if (qr && !gx())
        switch (e.tag) {
          case re:
          case Be:
          case Ze: {
            var t = zn && $e(zn) || "Unknown", a = t;
            if (!yS.has(a)) {
              yS.add(a);
              var i = $e(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case W: {
            iC || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), iC = !0);
            break;
          }
        }
    }
    function Jp(e, t) {
      if (Ca) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          rf(e, i, t);
        });
      }
    }
    var gS = {};
    function SS(e, t) {
      {
        var a = hl.current;
        return a !== null ? (a.push(t), gS) : Dd(e, t);
      }
    }
    function lC(e) {
      if (e !== gS)
        return zc(e);
    }
    function oC() {
      return hl.current !== null;
    }
    function xD(e) {
      {
        if (e.mode & ze) {
          if (!FR())
            return;
        } else if (!XO() || wt !== vr || e.tag !== re && e.tag !== Be && e.tag !== Ze)
          return;
        if (hl.current === null) {
          var t = vn;
          try {
            hn(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, $e(e));
          } finally {
            t ? hn(e) : ln();
          }
        }
      }
    }
    function OD(e) {
      e.tag !== Hu && FR() && hl.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Kp(e) {
      YR = e;
    }
    var zi = null, Zf = null, DD = function(e) {
      zi = e;
    };
    function $f(e) {
      {
        if (zi === null)
          return e;
        var t = zi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function ES(e) {
      return $f(e);
    }
    function RS(e) {
      {
        if (zi === null)
          return e;
        var t = zi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = $f(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: he,
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
    function uC(e, t) {
      {
        if (zi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case W: {
            typeof i == "function" && (o = !0);
            break;
          }
          case re: {
            (typeof i == "function" || s === Fe) && (o = !0);
            break;
          }
          case Be: {
            (s === he || s === Fe) && (o = !0);
            break;
          }
          case mt:
          case Ze: {
            (s === lt || s === Fe) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = zi(a);
          if (f !== void 0 && f === zi(i))
            return !0;
        }
        return !1;
      }
    }
    function sC(e) {
      {
        if (zi === null || typeof WeakSet != "function")
          return;
        Zf === null && (Zf = /* @__PURE__ */ new WeakSet()), Zf.add(e);
      }
    }
    var kD = function(e, t) {
      {
        if (zi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        qo(), Wo(function() {
          CS(e.current, i, a);
        });
      }
    }, _D = function(e, t) {
      {
        if (e.context !== si)
          return;
        qo(), Wo(function() {
          Zp(t, e, null, null);
        });
      }
    };
    function CS(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, v = e.type, m = null;
        switch (f) {
          case re:
          case Ze:
          case W:
            m = v;
            break;
          case Be:
            m = v.render;
            break;
        }
        if (zi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, T = !1;
        if (m !== null) {
          var M = zi(m);
          M !== void 0 && (a.has(M) ? T = !0 : t.has(M) && (f === W ? T = !0 : R = !0));
        }
        if (Zf !== null && (Zf.has(e) || i !== null && Zf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || R) {
          var L = Xa(e, Ve);
          L !== null && yr(L, e, Ve, nn);
        }
        o !== null && !T && CS(o, t, a), s !== null && CS(s, t, a);
      }
    }
    var LD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return TS(e.current, i, a), a;
      }
    };
    function TS(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, v = null;
        switch (s) {
          case re:
          case Ze:
          case W:
            v = f;
            break;
          case Be:
            v = f.render;
            break;
        }
        var m = !1;
        v !== null && t.has(v) && (m = !0), m ? ND(e, a) : i !== null && TS(i, t, a), o !== null && TS(o, t, a);
      }
    }
    function ND(e, t) {
      {
        var a = MD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case G:
              t.add(i.stateNode);
              return;
            case Se:
              t.add(i.stateNode.containerInfo);
              return;
            case ie:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function MD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === G)
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
    var wS;
    {
      wS = !1;
      try {
        var cC = Object.preventExtensions({});
      } catch {
        wS = !0;
      }
    }
    function UD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = je, this.subtreeFlags = je, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !wS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new UD(e, t, a, i);
    };
    function bS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function zD(e) {
      return typeof e == "function" && !bS(e) && e.defaultProps === void 0;
    }
    function AD(e) {
      if (typeof e == "function")
        return bS(e) ? W : re;
      if (e != null) {
        var t = e.$$typeof;
        if (t === he)
          return Be;
        if (t === lt)
          return mt;
      }
      return Y;
    }
    function Sc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = je, a.subtreeFlags = je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ur, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Y:
        case re:
        case Ze:
          a.type = $f(e.type);
          break;
        case W:
          a.type = ES(e.type);
          break;
        case Be:
          a.type = RS(e.type);
          break;
      }
      return a;
    }
    function ID(e, t) {
      e.flags &= ur | Qt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = je, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function FD(e, t, a) {
      var i;
      return e === Wh ? (i = ze, t === !0 && (i |= Cn, i |= ja)) : i = He, Ca && (i |= _t), ci(ie, null, null, i);
    }
    function xS(e, t, a, i, o, s) {
      var f = Y, v = e;
      if (typeof e == "function")
        bS(e) ? (f = W, v = ES(v)) : v = $f(v);
      else if (typeof e == "string")
        f = G;
      else
        e:
          switch (e) {
            case ma:
              return $u(a.children, o, s, t);
            case Fi:
              f = ht, o |= Cn, (o & ze) !== He && (o |= ja);
              break;
            case x:
              return jD(a, o, s, t);
            case pt:
              return HD(a, o, s, t);
            case Tt:
              return PD(a, o, s, t);
            case $t:
              return fC(a, o, s, t);
            case Cr:
            case Fn:
            case pi:
            case en:
            case Zt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case ne:
                    f = Qe;
                    break e;
                  case de:
                    f = ct;
                    break e;
                  case he:
                    f = Be, v = RS(v);
                    break e;
                  case lt:
                    f = mt;
                    break e;
                  case Fe:
                    f = On, v = null;
                    break e;
                }
              var m = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var R = i ? $e(i) : null;
                R && (m += `

Check the render method of \`` + R + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + m));
            }
          }
      var T = ci(f, a, t, o);
      return T.elementType = e, T.type = v, T.lanes = s, T._debugOwner = i, T;
    }
    function OS(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, v = xS(o, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function $u(e, t, a, i) {
      var o = ci(xe, e, i, t);
      return o.lanes = a, o;
    }
    function jD(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = ci(Lt, e, i, t | _t);
      return o.elementType = x, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function HD(e, t, a, i) {
      var o = ci(Ne, e, i, t);
      return o.elementType = pt, o.lanes = a, o;
    }
    function PD(e, t, a, i) {
      var o = ci(Ct, e, i, t);
      return o.elementType = Tt, o.lanes = a, o;
    }
    function fC(e, t, a, i) {
      var o = ci(Je, e, i, t);
      o.elementType = $t, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function DS(e, t, a) {
      var i = ci(J, e, null, t);
      return i.lanes = a, i;
    }
    function BD() {
      var e = ci(G, null, null, He);
      return e.elementType = "DELETED", e;
    }
    function VD(e) {
      var t = ci(Jt, null, null, He);
      return t.stateNode = e, t;
    }
    function kS(e, t, a) {
      var i = e.children !== null ? e.children : [], o = ci(Se, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function dC(e, t) {
      return e === null && (e = ci(Y, null, null, He)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function YD(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = cg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ln, this.eventTimes = Ys(Q), this.expirationTimes = Ys(nn), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = Ys(Q), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _n; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Wh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Hu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function pC(e, t, a, i, o, s, f, v, m, R) {
      var T = new YD(e, t, a, v, m), M = FD(t, s);
      T.current = M, M.stateNode = T;
      {
        var L = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        M.memoizedState = L;
      }
      return Ig(M), T;
    }
    var _S = "18.2.0";
    function WD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Sr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Vr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var LS, NS;
    LS = !1, NS = {};
    function vC(e) {
      if (!e)
        return si;
      var t = Si(e), a = Db(t);
      if (t.tag === W) {
        var i = t.type;
        if (Wl(i))
          return HE(t, i, a);
      }
      return a;
    }
    function qD(e, t) {
      {
        var a = Si(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = bd(a);
        if (o === null)
          return null;
        if (o.mode & Cn) {
          var s = $e(a) || "Component";
          if (!NS[s]) {
            NS[s] = !0;
            var f = vn;
            try {
              hn(o), a.mode & Cn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? hn(f) : ln();
            }
          }
        }
        return o.stateNode;
      }
    }
    function hC(e, t, a, i, o, s, f, v) {
      var m = !1, R = null;
      return pC(e, t, m, R, a, i, o, s, f);
    }
    function mC(e, t, a, i, o, s, f, v, m, R) {
      var T = !0, M = pC(a, i, T, e, o, s, f, v, m);
      M.context = vC(null);
      var L = M.current, H = xa(), P = Ku(L), q = Po(H, P);
      return q.callback = t ?? null, Vu(L, q, P), $O(M, P, H), M;
    }
    function Zp(e, t, a, i) {
      $i(t, e);
      var o = t.current, s = xa(), f = Ku(o);
      Ud(f);
      var v = vC(a);
      t.context === null ? t.context = v : t.pendingContext = v, qr && vn !== null && !LS && (LS = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, $e(vn) || "Unknown"));
      var m = Po(s, f);
      m.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), m.callback = i);
      var R = Vu(o, m, f);
      return R !== null && (yr(R, o, f, s), am(R, o, f)), f;
    }
    function Qm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case G:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function XD(e) {
      switch (e.tag) {
        case ie: {
          var t = e.stateNode;
          if (af(t)) {
            var a = Ly(t);
            rD(t, a);
          }
          break;
        }
        case Ne: {
          Wo(function() {
            var o = Xa(e, Ve);
            if (o !== null) {
              var s = xa();
              yr(o, e, Ve, s);
            }
          });
          var i = Ve;
          MS(e, i);
          break;
        }
      }
    }
    function yC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = rh(a.retryLane, t));
    }
    function MS(e, t) {
      yC(e, t);
      var a = e.alternate;
      a && yC(a, t);
    }
    function GD(e) {
      if (e.tag === Ne) {
        var t = Oo, a = Xa(e, t);
        if (a !== null) {
          var i = xa();
          yr(a, e, t, i);
        }
        MS(e, t);
      }
    }
    function QD(e) {
      if (e.tag === Ne) {
        var t = Ku(e), a = Xa(e, t);
        if (a !== null) {
          var i = xa();
          yr(a, e, t, i);
        }
        MS(e, t);
      }
    }
    function gC(e) {
      var t = Od(e);
      return t === null ? null : t.stateNode;
    }
    var SC = function(e) {
      return null;
    };
    function JD(e) {
      return SC(e);
    }
    var EC = function(e) {
      return !1;
    };
    function KD(e) {
      return EC(e);
    }
    var RC = null, CC = null, TC = null, wC = null, bC = null, xC = null, OC = null, DC = null, kC = null;
    {
      var _C = function(e, t, a) {
        var i = t[a], o = kt(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (kt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = _C(e[i], t, a + 1), o);
      }, LC = function(e, t) {
        return _C(e, t, 0);
      }, NC = function(e, t, a, i) {
        var o = t[i], s = kt(e) ? e.slice() : ut({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], kt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = NC(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, MC = function(e, t, a) {
        if (t.length !== a.length) {
          _("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              _("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return NC(e, t, a, 0);
      }, UC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = kt(e) ? e.slice() : ut({}, e);
        return s[o] = UC(e[o], t, a + 1, i), s;
      }, zC = function(e, t, a) {
        return UC(e, t, 0, a);
      }, US = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      RC = function(e, t, a, i) {
        var o = US(e, t);
        if (o !== null) {
          var s = zC(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Xa(e, Ve);
          f !== null && yr(f, e, Ve, nn);
        }
      }, CC = function(e, t, a) {
        var i = US(e, t);
        if (i !== null) {
          var o = LC(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ut({}, e.memoizedProps);
          var s = Xa(e, Ve);
          s !== null && yr(s, e, Ve, nn);
        }
      }, TC = function(e, t, a, i) {
        var o = US(e, t);
        if (o !== null) {
          var s = MC(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Xa(e, Ve);
          f !== null && yr(f, e, Ve, nn);
        }
      }, wC = function(e, t, a) {
        e.pendingProps = zC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, Ve);
        i !== null && yr(i, e, Ve, nn);
      }, bC = function(e, t) {
        e.pendingProps = LC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Xa(e, Ve);
        a !== null && yr(a, e, Ve, nn);
      }, xC = function(e, t, a) {
        e.pendingProps = MC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Xa(e, Ve);
        i !== null && yr(i, e, Ve, nn);
      }, OC = function(e) {
        var t = Xa(e, Ve);
        t !== null && yr(t, e, Ve, nn);
      }, DC = function(e) {
        SC = e;
      }, kC = function(e) {
        EC = e;
      };
    }
    function ZD(e) {
      var t = bd(e);
      return t === null ? null : t.stateNode;
    }
    function $D(e) {
      return null;
    }
    function ek() {
      return vn;
    }
    function tk(e) {
      var t = e.findFiberByHostInstance, a = C.ReactCurrentDispatcher;
      return Bv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: RC,
        overrideHookStateDeletePath: CC,
        overrideHookStateRenamePath: TC,
        overrideProps: wC,
        overridePropsDeletePath: bC,
        overridePropsRenamePath: xC,
        setErrorHandler: DC,
        setSuspenseHandler: kC,
        scheduleUpdate: OC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ZD,
        findFiberByHostInstance: t || $D,
        // React Refresh
        findHostInstancesForRefresh: LD,
        scheduleRefresh: kD,
        scheduleRoot: _D,
        setRefreshHandler: DD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ek,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: _S
      });
    }
    var AC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function zS(e) {
      this._internalRoot = e;
    }
    Jm.prototype.render = zS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Km(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Rn) {
          var i = gC(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Zp(e, t, null, null);
    }, Jm.prototype.unmount = zS.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        GR() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Wo(function() {
          Zp(null, e, null, null);
        }), zE(t);
      }
    };
    function nk(e, t) {
      if (!Km(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IC(e);
      var a = !1, i = !1, o = "", s = AC;
      t != null && (t.hydrate ? _("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Br && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = hC(e, Wh, null, a, i, o, s);
      Fh(f.current, e);
      var v = e.nodeType === Rn ? e.parentNode : e;
      return lp(v), new zS(f);
    }
    function Jm(e) {
      this._internalRoot = e;
    }
    function rk(e) {
      e && Iy(e);
    }
    Jm.prototype.unstable_scheduleHydration = rk;
    function ak(e, t, a) {
      if (!Km(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IC(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", m = AC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (m = a.onRecoverableError));
      var R = mC(t, null, e, Wh, i, s, f, v, m);
      if (Fh(R.current, e), lp(e), o)
        for (var T = 0; T < o.length; T++) {
          var M = o[T];
          dx(R, M);
        }
      return new Jm(R);
    }
    function Km(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === ya || e.nodeType === ud || !We));
    }
    function $p(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === ya || e.nodeType === ud || e.nodeType === Rn && e.nodeValue === " react-mount-point-unstable "));
    }
    function IC(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var ik = C.ReactCurrentOwner, FC;
    FC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Rn) {
        var t = gC(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = AS(e), o = !!(i && Fu(i));
      o && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function AS(e) {
      return e ? e.nodeType === ya ? e.documentElement : e.firstChild : null;
    }
    function jC() {
    }
    function lk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var L = Qm(f);
            s.call(L);
          };
        }
        var f = mC(
          t,
          i,
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          jC
        );
        e._reactRootContainer = f, Fh(f.current, e);
        var v = e.nodeType === Rn ? e.parentNode : e;
        return lp(v), Wo(), f;
      } else {
        for (var m; m = e.lastChild; )
          e.removeChild(m);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var L = Qm(T);
            R.call(L);
          };
        }
        var T = hC(
          e,
          Hu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          jC
        );
        e._reactRootContainer = T, Fh(T.current, e);
        var M = e.nodeType === Rn ? e.parentNode : e;
        return lp(M), Wo(function() {
          Zp(t, T, a, i);
        }), T;
      }
    }
    function ok(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Zm(e, t, a, i, o) {
      FC(a), ok(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = lk(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var v = o;
          o = function() {
            var m = Qm(f);
            v.call(m);
          };
        }
        Zp(t, f, e, o);
      }
      return Qm(f);
    }
    function uk(e) {
      {
        var t = ik.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : qD(e, "findDOMNode");
    }
    function sk(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Zm(null, e, t, !0, a);
    }
    function ck(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Zm(null, e, t, !1, a);
    }
    function fk(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !uu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Zm(e, t, a, !1, i);
    }
    function dk(e) {
      if (!$p(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = yp(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = AS(e), i = a && !Fu(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Wo(function() {
          Zm(null, null, e, !1, function() {
            e._reactRootContainer = null, zE(e);
          });
        }), !0;
      } else {
        {
          var o = AS(e), s = !!(o && Fu(o)), f = e.nodeType === Gr && $p(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wu(XD), zy(GD), of(QD), lh(Pa), oh(br), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), md(hw), kc(pS, aD, Wo);
    function pk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Km(t))
        throw new Error("Target container is not a DOM element.");
      return WD(e, t, null, a);
    }
    function vk(e, t, a, i) {
      return fk(e, t, a, i);
    }
    var IS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Fu, _f, jh, ou, ho, pS]
    };
    function hk(e, t) {
      return IS.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), nk(e, t);
    }
    function mk(e, t, a) {
      return IS.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ak(e, t, a);
    }
    function yk(e) {
      return GR() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Wo(e);
    }
    var gk = tk({
      findFiberByHostInstance: ac,
      bundleType: 1,
      version: _S,
      rendererPackageName: "react-dom"
    });
    if (!gk && En && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var HC = window.location.protocol;
      /^(https?|file):$/.test(HC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (HC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = IS, Ka.createPortal = pk, Ka.createRoot = hk, Ka.findDOMNode = uk, Ka.flushSync = yk, Ka.hydrate = sk, Ka.hydrateRoot = mk, Ka.render = ck, Ka.unmountComponentAtNode = dk, Ka.unstable_batchedUpdates = pS, Ka.unstable_renderSubtreeIntoContainer = vk, Ka.version = _S, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ka;
}
var Za = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QC;
function Nk() {
  if (QC)
    return Za;
  QC = 1;
  var p = di, h = uT();
  function y(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), O = {};
  function U(n, r) {
    _(n, r), _(n + "Capture", r);
  }
  function _(n, r) {
    for (O[n] = r, n = 0; n < r.length; n++)
      C.add(r[n]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ce = Object.prototype.hasOwnProperty, re = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, W = {}, Y = {};
  function ie(n) {
    return ce.call(Y, n) ? !0 : ce.call(W, n) ? !1 : re.test(n) ? Y[n] = !0 : (W[n] = !0, !1);
  }
  function Se(n, r, l, u) {
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
  function G(n, r, l, u) {
    if (r === null || typeof r > "u" || Se(n, r, l, u))
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
  function J(n, r, l, u, c, d, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = S;
  }
  var xe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    xe[n] = new J(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    xe[r] = new J(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    xe[n] = new J(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    xe[n] = new J(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    xe[n] = new J(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    xe[n] = new J(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    xe[n] = new J(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    xe[n] = new J(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    xe[n] = new J(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ht = /[\-:]([a-z])/g;
  function ct(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ht,
      ct
    );
    xe[r] = new J(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ht, ct);
    xe[r] = new J(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ht, ct);
    xe[r] = new J(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    xe[n] = new J(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), xe.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    xe[n] = new J(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, u) {
    var c = xe.hasOwnProperty(r) ? xe[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (G(r, l, c, u) && (l = null), u || c === null ? ie(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Be = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Lt = Symbol.for("react.element"), Ne = Symbol.for("react.portal"), mt = Symbol.for("react.fragment"), Ze = Symbol.for("react.strict_mode"), On = Symbol.for("react.profiler"), Sn = Symbol.for("react.provider"), Jt = Symbol.for("react.context"), Ct = Symbol.for("react.forward_ref"), rn = Symbol.for("react.suspense"), Je = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), it = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var D = Object.assign, $;
  function be(n) {
    if ($ === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        $ = r && r[1] || "";
      }
    return `
` + $ + n;
  }
  var We = !1;
  function qe(n, r) {
    if (!n || We)
      return "";
    We = !0;
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
          } catch (B) {
            var u = B;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (B) {
            u = B;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (B) {
          u = B;
        }
        n();
      }
    } catch (B) {
      if (B && u && typeof B.stack == "string") {
        for (var c = B.stack.split(`
`), d = u.stack.split(`
`), S = c.length - 1, w = d.length - 1; 1 <= S && 0 <= w && c[S] !== d[w]; )
          w--;
        for (; 1 <= S && 0 <= w; S--, w--)
          if (c[S] !== d[w]) {
            if (S !== 1 || w !== 1)
              do
                if (S--, w--, 0 > w || c[S] !== d[w]) {
                  var k = `
` + c[S].replace(" at new ", " at ");
                  return n.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", n.displayName)), k;
                }
              while (1 <= S && 0 <= w);
            break;
          }
      }
    } finally {
      We = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? be(n) : "";
  }
  function yt(n) {
    switch (n.tag) {
      case 5:
        return be(n.type);
      case 16:
        return be("Lazy");
      case 13:
        return be("Suspense");
      case 19:
        return be("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = qe(n.type, !1), n;
      case 11:
        return n = qe(n.type.render, !1), n;
      case 1:
        return n = qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ft(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case mt:
        return "Fragment";
      case Ne:
        return "Portal";
      case On:
        return "Profiler";
      case Ze:
        return "StrictMode";
      case rn:
        return "Suspense";
      case Je:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Jt:
          return (n.displayName || "Context") + ".Consumer";
        case Sn:
          return (n._context.displayName || "Context") + ".Provider";
        case Ct:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case at:
          return r = n.displayName || null, r !== null ? r : ft(n.type) || "Memo";
        case Ot:
          r = n._payload, n = n._init;
          try {
            return ft(n(r));
          } catch {
          }
      }
    return null;
  }
  function gt(n) {
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
        return ft(r);
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
  function dt(n) {
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
  function an(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function nr(n) {
    var r = an(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(S) {
        u = "" + S, d.call(this, S);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(S) {
        u = "" + S;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function rr(n) {
    n._valueTracker || (n._valueTracker = nr(n));
  }
  function Pr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = an(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function gr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function En(n, r) {
    var l = r.checked;
    return D({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function ar(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = dt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function An(n, r) {
    Bn(n, r);
    var l = dt(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Or(n, r.type, l) : r.hasOwnProperty("defaultValue") && Or(n, r.type, dt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function In(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Or(n, r, l) {
    (r !== "number" || gr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Sr = Array.isArray;
  function Vn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + dt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ca(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(y(91));
    return D({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function fa(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(y(92));
        if (Sr(l)) {
          if (1 < l.length)
            throw Error(y(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: dt(l) };
  }
  function Er(n, r) {
    var l = dt(r.value), u = dt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function da(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ir(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ir(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var fn, pa = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (fn = fn || document.createElement("div"), fn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = fn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function va(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ha = {
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
  }, ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ha).forEach(function(n) {
    ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ha[r] = ha[n];
    });
  });
  function Ie(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ha.hasOwnProperty(n) && ha[n] ? ("" + r).trim() : r + "px";
  }
  function ot(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, c = Ie(l, r[l], u);
        l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Ft = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nt(n, r) {
    if (r) {
      if (Ft[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(y(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(y(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(y(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(y(62));
    }
  }
  function Dn(n, r) {
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
  var pn = null;
  function Rr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Bt = null, Qn = null, jt = null;
  function Kt(n) {
    if (n = Si(n)) {
      if (typeof Bt != "function")
        throw Error(y(280));
      var r = n.stateNode;
      r && (r = _c(r), Bt(n.stateNode, n.type, r));
    }
  }
  function $a(n) {
    Qn ? jt ? jt.push(n) : jt = [n] : Qn = n;
  }
  function ka() {
    if (Qn) {
      var n = Qn, r = jt;
      if (jt = Qn = null, Kt(n), r)
        for (n = 0; n < r.length; n++)
          Kt(r[n]);
    }
  }
  function ml(n, r) {
    return n(r);
  }
  function ro() {
  }
  var ao = !1;
  function yl(n, r, l) {
    if (ao)
      return n(r, l);
    ao = !0;
    try {
      return ml(n, r, l);
    } finally {
      ao = !1, (Qn !== null || jt !== null) && (ro(), ka());
    }
  }
  function ei(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var u = _c(l);
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
      throw Error(y(231, r, typeof l));
    return l;
  }
  var ti = !1;
  if (E)
    try {
      var _a = {};
      Object.defineProperty(_a, "passive", { get: function() {
        ti = !0;
      } }), window.addEventListener("test", _a, _a), window.removeEventListener("test", _a, _a);
    } catch {
      ti = !1;
    }
  function Ii(n, r, l, u, c, d, S, w, k) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, B);
    } catch (ae) {
      this.onError(ae);
    }
  }
  var Br = !1, Vr = null, ma = !1, Fi = null, x = { onError: function(n) {
    Br = !0, Vr = n;
  } };
  function ne(n, r, l, u, c, d, S, w, k) {
    Br = !1, Vr = null, Ii.apply(x, arguments);
  }
  function de(n, r, l, u, c, d, S, w, k) {
    if (ne.apply(this, arguments), Br) {
      if (Br) {
        var B = Vr;
        Br = !1, Vr = null;
      } else
        throw Error(y(198));
      ma || (ma = !0, Fi = B);
    }
  }
  function he(n) {
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
  function pt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Tt(n) {
    if (he(n) !== n)
      throw Error(y(188));
  }
  function lt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = he(n), r === null)
        throw Error(y(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Tt(c), n;
          if (d === u)
            return Tt(c), r;
          d = d.sibling;
        }
        throw Error(y(188));
      }
      if (l.return !== u.return)
        l = c, u = d;
      else {
        for (var S = !1, w = c.child; w; ) {
          if (w === l) {
            S = !0, l = c, u = d;
            break;
          }
          if (w === u) {
            S = !0, u = c, l = d;
            break;
          }
          w = w.sibling;
        }
        if (!S) {
          for (w = d.child; w; ) {
            if (w === l) {
              S = !0, l = d, u = c;
              break;
            }
            if (w === u) {
              S = !0, u = d, l = c;
              break;
            }
            w = w.sibling;
          }
          if (!S)
            throw Error(y(189));
        }
      }
      if (l.alternate !== u)
        throw Error(y(190));
    }
    if (l.tag !== 3)
      throw Error(y(188));
    return l.stateNode.current === l ? n : r;
  }
  function Fe(n) {
    return n = lt(n), n !== null ? Fn(n) : null;
  }
  function Fn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Fn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Zt = h.unstable_scheduleCallback, $t = h.unstable_cancelCallback, Cr = h.unstable_shouldYield, pi = h.unstable_requestPaint, en = h.unstable_now, Yr = h.unstable_getCurrentPriorityLevel, ts = h.unstable_ImmediatePriority, vi = h.unstable_UserBlockingPriority, ut = h.unstable_NormalPriority, io = h.unstable_LowPriority, ji = h.unstable_IdlePriority, gl = null, Wr = null;
  function ns(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function")
      try {
        Wr.onCommitFiberRoot(gl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var kr = Math.clz32 ? Math.clz32 : is, rs = Math.log, as = Math.LN2;
  function is(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (rs(n) / as | 0) | 0;
  }
  var lo = 64, Qo = 4194304;
  function Hi(n) {
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
  function hi(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, S = l & 268435455;
    if (S !== 0) {
      var w = S & ~c;
      w !== 0 ? u = Hi(w) : (d &= S, d !== 0 && (u = Hi(d)));
    } else
      S = l & ~c, S !== 0 ? u = Hi(S) : d !== 0 && (u = Hi(d));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        l = 31 - kr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function La(n, r) {
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
  function Sl(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var S = 31 - kr(d), w = 1 << S, k = c[S];
      k === -1 ? (!(w & l) || w & u) && (c[S] = La(w, r)) : k <= r && (n.expiredLanes |= w), d &= ~w;
    }
  }
  function mi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function oo() {
    var n = lo;
    return lo <<= 1, !(lo & 4194240) && (lo = 64), n;
  }
  function uo(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function El(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function ls(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function os(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - kr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Rt = 0;
  function us(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Jo, Rl, ss, Dt, Ko, so = !1, $e = [], ni = null, vn = null, qr = null, Na = /* @__PURE__ */ new Map(), Cl = /* @__PURE__ */ new Map(), ln = [], hn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function cs(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ni = null;
        break;
      case "dragenter":
      case "dragleave":
        vn = null;
        break;
      case "mouseover":
      case "mouseout":
        qr = null;
        break;
      case "pointerover":
      case "pointerout":
        Na.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cl.delete(r.pointerId);
    }
  }
  function lr(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Si(r), r !== null && Rl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xr(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return ni = lr(ni, n, r, l, u, c), !0;
      case "dragenter":
        return vn = lr(vn, n, r, l, u, c), !0;
      case "mouseover":
        return qr = lr(qr, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Na.set(d, lr(Na.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cl.set(d, lr(Cl.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function ri(n) {
    var r = Ki(n.target);
    if (r !== null) {
      var l = he(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = pt(l), r !== null) {
            n.blockedOn = r, Ko(n.priority, function() {
              ss(l);
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
  function Zo(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = tu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        pn = u, l.target.dispatchEvent(u), pn = null;
      } else
        return r = Si(l), r !== null && Rl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function co(n, r, l) {
    Zo(n) && l.delete(r);
  }
  function fo() {
    so = !1, ni !== null && Zo(ni) && (ni = null), vn !== null && Zo(vn) && (vn = null), qr !== null && Zo(qr) && (qr = null), Na.forEach(co), Cl.forEach(co);
  }
  function Tl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, so || (so = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, fo)));
  }
  function Ma(n) {
    function r(c) {
      return Tl(c, n);
    }
    if (0 < $e.length) {
      Tl($e[0], n);
      for (var l = 1; l < $e.length; l++) {
        var u = $e[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (ni !== null && Tl(ni, n), vn !== null && Tl(vn, n), qr !== null && Tl(qr, n), Na.forEach(r), Cl.forEach(r), l = 0; l < ln.length; l++)
      u = ln[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < ln.length && (l = ln[0], l.blockedOn === null); )
      ri(l), l.blockedOn === null && ln.shift();
  }
  var Pi = Be.ReactCurrentBatchConfig, $o = !0;
  function Bi(n, r, l, u) {
    var c = Rt, d = Pi.transition;
    Pi.transition = null;
    try {
      Rt = 1, yi(n, r, l, u);
    } finally {
      Rt = c, Pi.transition = d;
    }
  }
  function eu(n, r, l, u) {
    var c = Rt, d = Pi.transition;
    Pi.transition = null;
    try {
      Rt = 4, yi(n, r, l, u);
    } finally {
      Rt = c, Pi.transition = d;
    }
  }
  function yi(n, r, l, u) {
    if ($o) {
      var c = tu(n, r, l, u);
      if (c === null)
        md(n, r, u, Vi, l), cs(n, u);
      else if (Xr(c, n, r, l, u))
        u.stopPropagation();
      else if (cs(n, u), r & 4 && -1 < hn.indexOf(n)) {
        for (; c !== null; ) {
          var d = Si(c);
          if (d !== null && Jo(d), d = tu(n, r, l, u), d === null && md(n, r, u, Vi, l), d === c)
            break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else
        md(n, r, u, null, l);
    }
  }
  var Vi = null;
  function tu(n, r, l, u) {
    if (Vi = null, n = Rr(u), n = Ki(n), n !== null)
      if (r = he(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = pt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Vi = n, null;
  }
  function fs(n) {
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
        switch (Yr()) {
          case ts:
            return 1;
          case vi:
            return 4;
          case ut:
          case io:
            return 16;
          case ji:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, nu = null, g = null;
  function b() {
    if (g)
      return g;
    var n, r = nu, l = r.length, u, c = "value" in ai ? ai.value : ai.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var S = l - n;
    for (u = 1; u <= S && r[l - u] === c[d - u]; u++)
      ;
    return g = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function j(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function V() {
    return !0;
  }
  function ue() {
    return !1;
  }
  function _e(n) {
    function r(l, u, c, d, S) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = S, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (l = n[w], this[w] = l ? l(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? V : ue, this.isPropagationStopped = ue, this;
    }
    return D(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = V);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = V);
    }, persist: function() {
    }, isPersistent: V }), r;
  }
  var Ee = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ge = _e(Ee), st = D({}, Ee, { view: 0, detail: 0 }), Ht = _e(st), Vt, Yt, Wt, on = D({}, st, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ec, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Wt && (Wt && n.type === "mousemove" ? (Vt = n.screenX - Wt.screenX, Yt = n.screenY - Wt.screenY) : Yt = Vt = 0, Wt = n), Vt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Yt;
  } }), kt = _e(on), wl = D({}, on, { dataTransfer: 0 }), ru = _e(wl), ds = D({}, st, { relatedTarget: 0 }), ps = _e(ds), Yi = D({}, Ee, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vs = _e(Yi), hs = D({}, Ee, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ad = _e(hs), py = D({}, Ee, { data: 0 }), cv = _e(py), fv = {
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
  }, id = {
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
  }, dv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = dv[n]) ? !!r[n] : !1;
  }
  function Ec() {
    return pv;
  }
  var vy = D({}, st, { key: function(n) {
    if (n.key) {
      var r = fv[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = j(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? id[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ec, charCode: function(n) {
    return n.type === "keypress" ? j(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? j(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Wi = _e(vy), hy = D({}, on, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rc = _e(hy), ld = D({}, st, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ec }), od = _e(ld), my = D({}, Ee, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = _e(my), vv = D({}, on, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gr = _e(vv), qi = [9, 13, 27, 32], Rn = E && "CompositionEvent" in window, ya = null;
  E && "documentMode" in document && (ya = document.documentMode);
  var ud = E && "TextEvent" in window && !ya, ms = E && (!Rn || ya && 8 < ya && 11 >= ya), hv = " ", au = !1;
  function mv(n, r) {
    switch (n) {
      case "keyup":
        return qi.indexOf(r.keyCode) !== -1;
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
  function yv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var bl = !1;
  function yy(n, r) {
    switch (n) {
      case "compositionend":
        return yv(r);
      case "keypress":
        return r.which !== 32 ? null : (au = !0, hv);
      case "textInput":
        return n = r.data, n === hv && au ? null : n;
      default:
        return null;
    }
  }
  function gy(n, r) {
    if (bl)
      return n === "compositionend" || !Rn && mv(n, r) ? (n = b(), g = nu = ai = null, bl = !1, n) : null;
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
        return ms && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Sy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function sd(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Sy[n.type] : r === "textarea";
  }
  function gv(n, r, l, u) {
    $a(u), r = Dc(r, "onChange"), 0 < r.length && (l = new Ge("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var ys = null, gs = null;
  function Sv(n) {
    zv(n, 0);
  }
  function Xi(n) {
    var r = uu(n);
    if (Pr(r))
      return n;
  }
  function cd(n, r) {
    if (n === "change")
      return r;
  }
  var fd = !1;
  if (E) {
    var Tc;
    if (E) {
      var dd = "oninput" in document;
      if (!dd) {
        var Ev = document.createElement("div");
        Ev.setAttribute("oninput", "return;"), dd = typeof Ev.oninput == "function";
      }
      Tc = dd;
    } else
      Tc = !1;
    fd = Tc && (!document.documentMode || 9 < document.documentMode);
  }
  function Rv() {
    ys && (ys.detachEvent("onpropertychange", Cv), gs = ys = null);
  }
  function Cv(n) {
    if (n.propertyName === "value" && Xi(gs)) {
      var r = [];
      gv(r, gs, n, Rr(n)), yl(Sv, r);
    }
  }
  function Ey(n, r, l) {
    n === "focusin" ? (Rv(), ys = r, gs = l, ys.attachEvent("onpropertychange", Cv)) : n === "focusout" && Rv();
  }
  function Ry(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Xi(gs);
  }
  function Cy(n, r) {
    if (n === "click")
      return Xi(r);
  }
  function Ty(n, r) {
    if (n === "input" || n === "change")
      return Xi(r);
  }
  function Tv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ii = typeof Object.is == "function" ? Object.is : Tv;
  function iu(n, r) {
    if (ii(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length)
      return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!ce.call(r, c) || !ii(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function wv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function bv(n, r) {
    var l = wv(n);
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
      l = wv(l);
    }
  }
  function xv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? xv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ov() {
    for (var n = window, r = gr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = gr(n.document);
    }
    return r;
  }
  function Ss(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function po(n) {
    var r = Ov(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && xv(l.ownerDocument.documentElement, l)) {
      if (u !== null && Ss(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = bv(l, d);
          var S = bv(
            l,
            u
          );
          c && S && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== S.node || n.focusOffset !== S.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(S.node, S.offset)) : (r.setEnd(S.node, S.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var wc = E && "documentMode" in document && 11 >= document.documentMode, vo = null, xl = null, Es = null, pd = !1;
  function Dv(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pd || vo == null || vo !== gr(u) || (u = vo, "selectionStart" in u && Ss(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Es && iu(Es, u) || (Es = u, u = Dc(xl, "onSelect"), 0 < u.length && (r = new Ge("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = vo)));
  }
  function bc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var lu = { animationend: bc("Animation", "AnimationEnd"), animationiteration: bc("Animation", "AnimationIteration"), animationstart: bc("Animation", "AnimationStart"), transitionend: bc("Transition", "TransitionEnd") }, xc = {}, kv = {};
  E && (kv = document.createElement("div").style, "AnimationEvent" in window || (delete lu.animationend.animation, delete lu.animationiteration.animation, delete lu.animationstart.animation), "TransitionEvent" in window || delete lu.transitionend.transition);
  function Rs(n) {
    if (xc[n])
      return xc[n];
    if (!lu[n])
      return n;
    var r = lu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in kv)
        return xc[n] = r[l];
    return n;
  }
  var Tr = Rs("animationend"), vd = Rs("animationiteration"), _v = Rs("animationstart"), Lv = Rs("transitionend"), Nv = /* @__PURE__ */ new Map(), Mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ol(n, r) {
    Nv.set(n, r), U(r, [n]);
  }
  for (var Oc = 0; Oc < Mv.length; Oc++) {
    var Cs = Mv[Oc], Ts = Cs.toLowerCase(), wy = Cs[0].toUpperCase() + Cs.slice(1);
    Ol(Ts, "on" + wy);
  }
  Ol(Tr, "onAnimationEnd"), Ol(vd, "onAnimationIteration"), Ol(_v, "onAnimationStart"), Ol("dblclick", "onDoubleClick"), Ol("focusin", "onFocus"), Ol("focusout", "onBlur"), Ol(Lv, "onTransitionEnd"), _("onMouseEnter", ["mouseout", "mouseover"]), _("onMouseLeave", ["mouseout", "mouseover"]), _("onPointerEnter", ["pointerout", "pointerover"]), _("onPointerLeave", ["pointerout", "pointerover"]), U("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), U("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), U("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), U("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), U("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), U("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), by = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));
  function Uv(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, de(u, r, void 0, n), n.currentTarget = null;
  }
  function zv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var S = u.length - 1; 0 <= S; S--) {
            var w = u[S], k = w.instance, B = w.currentTarget;
            if (w = w.listener, k !== d && c.isPropagationStopped())
              break e;
            Uv(c, w, B), d = k;
          }
        else
          for (S = 0; S < u.length; S++) {
            if (w = u[S], k = w.instance, B = w.currentTarget, w = w.listener, k !== d && c.isPropagationStopped())
              break e;
            Uv(c, w, B), d = k;
          }
      }
    }
    if (ma)
      throw n = Fi, ma = !1, Fi = null, n;
  }
  function Gt(n, r) {
    var l = r[wd];
    l === void 0 && (l = r[wd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (hd(r, n, 2, !1), l.add(u));
  }
  function ws(n, r, l) {
    var u = 0;
    r && (u |= 4), hd(l, n, u, r);
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function gi(n) {
    if (!n[Qi]) {
      n[Qi] = !0, C.forEach(function(l) {
        l !== "selectionchange" && (by.has(l) || ws(l, !1, n), ws(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, ws("selectionchange", !1, r));
    }
  }
  function hd(n, r, l, u) {
    switch (fs(r)) {
      case 1:
        var c = Bi;
        break;
      case 4:
        c = eu;
        break;
      default:
        c = yi;
    }
    l = c.bind(null, r, l, n), c = void 0, !ti || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function md(n, r, l, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var S = u.tag;
          if (S === 3 || S === 4) {
            var w = u.stateNode.containerInfo;
            if (w === c || w.nodeType === 8 && w.parentNode === c)
              break;
            if (S === 4)
              for (S = u.return; S !== null; ) {
                var k = S.tag;
                if ((k === 3 || k === 4) && (k = S.stateNode.containerInfo, k === c || k.nodeType === 8 && k.parentNode === c))
                  return;
                S = S.return;
              }
            for (; w !== null; ) {
              if (S = Ki(w), S === null)
                return;
              if (k = S.tag, k === 5 || k === 6) {
                u = d = S;
                continue e;
              }
              w = w.parentNode;
            }
          }
          u = u.return;
        }
    yl(function() {
      var B = d, ae = Rr(l), le = [];
      e: {
        var te = Nv.get(n);
        if (te !== void 0) {
          var ye = Ge, Oe = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ye = Wi;
              break;
            case "focusin":
              Oe = "focus", ye = ps;
              break;
            case "focusout":
              Oe = "blur", ye = ps;
              break;
            case "beforeblur":
            case "afterblur":
              ye = ps;
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
              ye = kt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ye = ru;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ye = od;
              break;
            case Tr:
            case vd:
            case _v:
              ye = vs;
              break;
            case Lv:
              ye = Cc;
              break;
            case "scroll":
              ye = Ht;
              break;
            case "wheel":
              ye = Gr;
              break;
            case "copy":
            case "cut":
            case "paste":
              ye = ad;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ye = Rc;
          }
          var Le = (r & 4) !== 0, Un = !Le && n === "scroll", z = Le ? te !== null ? te + "Capture" : null : te;
          Le = [];
          for (var N = B, F; N !== null; ) {
            F = N;
            var se = F.stateNode;
            if (F.tag === 5 && se !== null && (F = se, z !== null && (se = ei(N, z), se != null && Le.push(ou(N, se, F)))), Un)
              break;
            N = N.return;
          }
          0 < Le.length && (te = new ye(te, Oe, null, l, ae), le.push({ event: te, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", ye = n === "mouseout" || n === "pointerout", te && l !== pn && (Oe = l.relatedTarget || l.fromElement) && (Ki(Oe) || Oe[li]))
            break e;
          if ((ye || te) && (te = ae.window === ae ? ae : (te = ae.ownerDocument) ? te.defaultView || te.parentWindow : window, ye ? (Oe = l.relatedTarget || l.toElement, ye = B, Oe = Oe ? Ki(Oe) : null, Oe !== null && (Un = he(Oe), Oe !== Un || Oe.tag !== 5 && Oe.tag !== 6) && (Oe = null)) : (ye = null, Oe = B), ye !== Oe)) {
            if (Le = kt, se = "onMouseLeave", z = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (Le = Rc, se = "onPointerLeave", z = "onPointerEnter", N = "pointer"), Un = ye == null ? te : uu(ye), F = Oe == null ? te : uu(Oe), te = new Le(se, N + "leave", ye, l, ae), te.target = Un, te.relatedTarget = F, se = null, Ki(ae) === B && (Le = new Le(z, N + "enter", Oe, l, ae), Le.target = F, Le.relatedTarget = Un, se = Le), Un = se, ye && Oe)
              t: {
                for (Le = ye, z = Oe, N = 0, F = Le; F; F = ho(F))
                  N++;
                for (F = 0, se = z; se; se = ho(se))
                  F++;
                for (; 0 < N - F; )
                  Le = ho(Le), N--;
                for (; 0 < F - N; )
                  z = ho(z), F--;
                for (; N--; ) {
                  if (Le === z || z !== null && Le === z.alternate)
                    break t;
                  Le = ho(Le), z = ho(z);
                }
                Le = null;
              }
            else
              Le = null;
            ye !== null && yd(le, te, ye, Le, !1), Oe !== null && Un !== null && yd(le, Un, Oe, Le, !0);
          }
        }
        e: {
          if (te = B ? uu(B) : window, ye = te.nodeName && te.nodeName.toLowerCase(), ye === "select" || ye === "input" && te.type === "file")
            var Ue = cd;
          else if (sd(te))
            if (fd)
              Ue = Ty;
            else {
              Ue = Ry;
              var Ye = Ey;
            }
          else
            (ye = te.nodeName) && ye.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (Ue = Cy);
          if (Ue && (Ue = Ue(n, B))) {
            gv(le, Ue, l, ae);
            break e;
          }
          Ye && Ye(n, te, B), n === "focusout" && (Ye = te._wrapperState) && Ye.controlled && te.type === "number" && Or(te, "number", te.value);
        }
        switch (Ye = B ? uu(B) : window, n) {
          case "focusin":
            (sd(Ye) || Ye.contentEditable === "true") && (vo = Ye, xl = B, Es = null);
            break;
          case "focusout":
            Es = xl = vo = null;
            break;
          case "mousedown":
            pd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pd = !1, Dv(le, l, ae);
            break;
          case "selectionchange":
            if (wc)
              break;
          case "keydown":
          case "keyup":
            Dv(le, l, ae);
        }
        var De;
        if (Rn)
          e: {
            switch (n) {
              case "compositionstart":
                var Xe = "onCompositionStart";
                break e;
              case "compositionend":
                Xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Xe = "onCompositionUpdate";
                break e;
            }
            Xe = void 0;
          }
        else
          bl ? mv(n, l) && (Xe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Xe = "onCompositionStart");
        Xe && (ms && l.locale !== "ko" && (bl || Xe !== "onCompositionStart" ? Xe === "onCompositionEnd" && bl && (De = b()) : (ai = ae, nu = "value" in ai ? ai.value : ai.textContent, bl = !0)), Ye = Dc(B, Xe), 0 < Ye.length && (Xe = new cv(Xe, n, null, l, ae), le.push({ event: Xe, listeners: Ye }), De ? Xe.data = De : (De = yv(l), De !== null && (Xe.data = De)))), (De = ud ? yy(n, l) : gy(n, l)) && (B = Dc(B, "onBeforeInput"), 0 < B.length && (ae = new cv("onBeforeInput", "beforeinput", null, l, ae), le.push({ event: ae, listeners: B }), ae.data = De));
      }
      zv(le, r);
    });
  }
  function ou(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Dc(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ei(n, l), d != null && u.unshift(ou(n, d, c)), d = ei(n, r), d != null && u.push(ou(n, d, c))), n = n.return;
    }
    return u;
  }
  function ho(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function yd(n, r, l, u, c) {
    for (var d = r._reactName, S = []; l !== null && l !== u; ) {
      var w = l, k = w.alternate, B = w.stateNode;
      if (k !== null && k === u)
        break;
      w.tag === 5 && B !== null && (w = B, c ? (k = ei(l, d), k != null && S.unshift(ou(l, k, w))) : c || (k = ei(l, d), k != null && S.push(ou(l, k, w)))), l = l.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var Av = /\r\n?/g, gd = /\u0000|\uFFFD/g;
  function Iv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Av, `
`).replace(gd, "");
  }
  function bs(n, r, l) {
    if (r = Iv(r), Iv(n) !== r && l)
      throw Error(y(425));
  }
  function kc() {
  }
  var Sd = null, Ed = null;
  function mo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var xs = typeof setTimeout == "function" ? setTimeout : void 0, Os = typeof clearTimeout == "function" ? clearTimeout : void 0, Rd = typeof Promise == "function" ? Promise : void 0, Fv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rd < "u" ? function(n) {
    return Rd.resolve(null).then(n).catch(Cd);
  } : xs;
  function Cd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Td(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (u === 0) {
            n.removeChild(c), Ma(r);
            return;
          }
          u--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    Ma(r);
  }
  function ga(n) {
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
  function Ds(n) {
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
  var Ji = Math.random().toString(36).slice(2), Ua = "__reactFiber$" + Ji, ks = "__reactProps$" + Ji, li = "__reactContainer$" + Ji, wd = "__reactEvents$" + Ji, xy = "__reactListeners$" + Ji, Oy = "__reactHandles$" + Ji;
  function Ki(n) {
    var r = n[Ua];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[li] || l[Ua]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Ds(n); n !== null; ) {
            if (l = n[Ua])
              return l;
            n = Ds(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Si(n) {
    return n = n[Ua] || n[li], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function uu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(y(33));
  }
  function _c(n) {
    return n[ks] || null;
  }
  var je = [], oi = -1;
  function Qt(n) {
    return { current: n };
  }
  function Me(n) {
    0 > oi || (n.current = je[oi], je[oi] = null, oi--);
  }
  function Mt(n, r) {
    oi++, je[oi] = n.current, n.current = r;
  }
  var za = {}, Jn = Qt(za), et = Qt(!1), _r = za;
  function Sa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return za;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Qr() {
    Me(et), Me(Jn);
  }
  function Ei(n, r, l) {
    if (Jn.current !== za)
      throw Error(y(168));
    Mt(Jn, r), Mt(et, l);
  }
  function Dl(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(y(108, gt(n) || "Unknown", c));
    return D({}, l, u);
  }
  function yo(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || za, _r = Jn.current, Mt(Jn, n), Mt(et, et.current), !0;
  }
  function jv(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(y(169));
    l ? (n = Dl(n, r, _r), u.__reactInternalMemoizedMergedChildContext = n, Me(et), Me(Jn), Mt(Jn, n)) : Me(et), Mt(et, l);
  }
  var Zi = null, kl = !1, or = !1;
  function Lc(n) {
    Zi === null ? Zi = [n] : Zi.push(n);
  }
  function Hv(n) {
    kl = !0, Lc(n);
  }
  function Ri() {
    if (!or && Zi !== null) {
      or = !0;
      var n = 0, r = Rt;
      try {
        var l = Zi;
        for (Rt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Zi = null, kl = !1;
      } catch (c) {
        throw Zi !== null && (Zi = Zi.slice(n + 1)), Zt(ts, Ri), c;
      } finally {
        Rt = r, or = !1;
      }
    }
    return null;
  }
  var Aa = [], _l = 0, Ia = null, go = 0, Jr = [], Kr = 0, ui = null, Zr = 1, ur = "";
  function So(n, r) {
    Aa[_l++] = go, Aa[_l++] = Ia, Ia = n, go = r;
  }
  function Ll(n, r, l) {
    Jr[Kr++] = Zr, Jr[Kr++] = ur, Jr[Kr++] = ui, ui = n;
    var u = Zr;
    n = ur;
    var c = 32 - kr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var S = c - c % 5;
      d = (u & (1 << S) - 1).toString(32), u >>= S, c -= S, Zr = 1 << 32 - kr(r) + c | l << c | u, ur = d + n;
    } else
      Zr = 1 << d | l << c | u, ur = n;
  }
  function Nc(n) {
    n.return !== null && (So(n, 1), Ll(n, 1, 0));
  }
  function Mc(n) {
    for (; n === Ia; )
      Ia = Aa[--_l], Aa[_l] = null, go = Aa[--_l], Aa[_l] = null;
    for (; n === ui; )
      ui = Jr[--Kr], Jr[Kr] = null, ur = Jr[--Kr], Jr[Kr] = null, Zr = Jr[--Kr], Jr[Kr] = null;
  }
  var Ea = null, Ra = null, un = !1, Fa = null;
  function bd(n, r) {
    var l = Wa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ea = n, Ra = ga(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ea = n, Ra = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ui !== null ? { id: Zr, overflow: ur } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Wa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ea = n, Ra = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Od(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Uc(n) {
    if (un) {
      var r = Ra;
      if (r) {
        var l = r;
        if (!xd(n, r)) {
          if (Od(n))
            throw Error(y(418));
          r = ga(l.nextSibling);
          var u = Ea;
          r && xd(n, r) ? bd(u, l) : (n.flags = n.flags & -4097 | 2, un = !1, Ea = n);
        }
      } else {
        if (Od(n))
          throw Error(y(418));
        n.flags = n.flags & -4097 | 2, un = !1, Ea = n;
      }
    }
  }
  function Dd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ea = n;
  }
  function zc(n) {
    if (n !== Ea)
      return !1;
    if (!un)
      return Dd(n), un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !mo(n.type, n.memoizedProps)), r && (r = Ra)) {
      if (Od(n))
        throw Pv(), Error(y(418));
      for (; r; )
        bd(n, r), r = ga(r.nextSibling);
    }
    if (Dd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(y(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ra = ga(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ra = null;
      }
    } else
      Ra = Ea ? ga(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Pv() {
    for (var n = Ra; n; )
      n = ga(n.nextSibling);
  }
  function su() {
    Ra = Ea = null, un = !1;
  }
  function Hn(n) {
    Fa === null ? Fa = [n] : Fa.push(n);
  }
  var Dy = Be.ReactCurrentBatchConfig;
  function $r(n, r) {
    if (n && n.defaultProps) {
      r = D({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var cu = Qt(null), Ci = null, fu = null, _s = null;
  function kd() {
    _s = fu = Ci = null;
  }
  function _d(n) {
    var r = cu.current;
    Me(cu), n._currentValue = r;
  }
  function Nl(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function kn(n, r) {
    Ci = n, _s = fu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (na = !0), n.firstContext = null);
  }
  function fe(n) {
    var r = n._currentValue;
    if (_s !== n)
      if (n = { context: n, memoizedValue: r, next: null }, fu === null) {
        if (Ci === null)
          throw Error(y(308));
        fu = n, Ci.dependencies = { lanes: 0, firstContext: n };
      } else
        fu = fu.next = n;
    return r;
  }
  var wr = null;
  function Ca(n) {
    wr === null ? wr = [n] : wr.push(n);
  }
  function Bv(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ca(r)) : (l.next = c.next, c.next = l), r.interleaved = l, $i(n, u);
  }
  function $i(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ml = !1;
  function Ld(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Vv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function tn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ul(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, St & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, $i(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Ca(u)) : (r.next = c.next, c.next = r), u.interleaved = r, $i(n, l);
  }
  function Ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, os(n, l);
    }
  }
  function Yv(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var S = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = S : d = d.next = S, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ls(n, r, l, u) {
    var c = n.updateQueue;
    Ml = !1;
    var d = c.firstBaseUpdate, S = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var k = w, B = k.next;
      k.next = null, S === null ? d = B : S.next = B, S = k;
      var ae = n.alternate;
      ae !== null && (ae = ae.updateQueue, w = ae.lastBaseUpdate, w !== S && (w === null ? ae.firstBaseUpdate = B : w.next = B, ae.lastBaseUpdate = k));
    }
    if (d !== null) {
      var le = c.baseState;
      S = 0, ae = B = k = null, w = d;
      do {
        var te = w.lane, ye = w.eventTime;
        if ((u & te) === te) {
          ae !== null && (ae = ae.next = {
            eventTime: ye,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var Oe = n, Le = w;
            switch (te = r, ye = l, Le.tag) {
              case 1:
                if (Oe = Le.payload, typeof Oe == "function") {
                  le = Oe.call(ye, le, te);
                  break e;
                }
                le = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = Le.payload, te = typeof Oe == "function" ? Oe.call(ye, le, te) : Oe, te == null)
                  break e;
                le = D({}, le, te);
                break e;
              case 2:
                Ml = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, te = c.effects, te === null ? c.effects = [w] : te.push(w));
        } else
          ye = { eventTime: ye, lane: te, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, ae === null ? (B = ae = ye, k = le) : ae = ae.next = ye, S |= te;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null)
            break;
          te = w, w = te.next, te.next = null, c.lastBaseUpdate = te, c.shared.pending = null;
        }
      } while (!0);
      if (ae === null && (k = le), c.baseState = k, c.firstBaseUpdate = B, c.lastBaseUpdate = ae, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          S |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Lo |= S, n.lanes = S, n.memoizedState = le;
    }
  }
  function du(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], c = u.callback;
        if (c !== null) {
          if (u.callback = null, u = l, typeof c != "function")
            throw Error(y(191, c));
          c.call(u);
        }
      }
  }
  var Eo = new p.Component().refs;
  function Nd(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : D({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ic = { isMounted: function(n) {
    return (n = n._reactInternals) ? he(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = $n(), c = rl(n), d = tn(u, c);
    d.payload = r, l != null && (d.callback = l), r = Ul(n, d, c), r !== null && (yn(r, n, c, u), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = $n(), c = rl(n), d = tn(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ul(n, d, c), r !== null && (yn(r, n, c, u), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = $n(), u = rl(n), c = tn(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Ul(n, c, u), r !== null && (yn(r, n, u, l), Ac(r, n, u));
  } };
  function Wv(n, r, l, u, c, d, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, S) : r.prototype && r.prototype.isPureReactComponent ? !iu(l, u) || !iu(c, d) : !0;
  }
  function qv(n, r, l) {
    var u = !1, c = za, d = r.contextType;
    return typeof d == "object" && d !== null ? d = fe(d) : (c = jn(r) ? _r : Jn.current, u = r.contextTypes, d = (u = u != null) ? Sa(n, c) : za), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Xv(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function Md(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Eo, Ld(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = fe(d) : (d = jn(r) ? _r : Jn.current, c.context = Sa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Nd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), Ls(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function pu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(y(309));
          var u = l.stateNode;
        }
        if (!u)
          throw Error(y(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(S) {
          var w = c.refs;
          w === Eo && (w = c.refs = {}), S === null ? delete w[d] : w[d] = S;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(y(284));
      if (!l._owner)
        throw Error(y(290, n));
    }
    return n;
  }
  function Ns(n, r) {
    throw n = Object.prototype.toString.call(r), Error(y(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Gv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Qv(n) {
    function r(z, N) {
      if (n) {
        var F = z.deletions;
        F === null ? (z.deletions = [N], z.flags |= 16) : F.push(N);
      }
    }
    function l(z, N) {
      if (!n)
        return null;
      for (; N !== null; )
        r(z, N), N = N.sibling;
      return null;
    }
    function u(z, N) {
      for (z = /* @__PURE__ */ new Map(); N !== null; )
        N.key !== null ? z.set(N.key, N) : z.set(N.index, N), N = N.sibling;
      return z;
    }
    function c(z, N) {
      return z = Bl(z, N), z.index = 0, z.sibling = null, z;
    }
    function d(z, N, F) {
      return z.index = F, n ? (F = z.alternate, F !== null ? (F = F.index, F < N ? (z.flags |= 2, N) : F) : (z.flags |= 2, N)) : (z.flags |= 1048576, N);
    }
    function S(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function w(z, N, F, se) {
      return N === null || N.tag !== 6 ? (N = Sf(F, z.mode, se), N.return = z, N) : (N = c(N, F), N.return = z, N);
    }
    function k(z, N, F, se) {
      var Ue = F.type;
      return Ue === mt ? ae(z, N, F.props.children, se, F.key) : N !== null && (N.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === Ot && Gv(Ue) === N.type) ? (se = c(N, F.props), se.ref = pu(z, N, F), se.return = z, se) : (se = yf(F.type, F.key, F.props, null, z.mode, se), se.ref = pu(z, N, F), se.return = z, se);
    }
    function B(z, N, F, se) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== F.containerInfo || N.stateNode.implementation !== F.implementation ? (N = Ks(F, z.mode, se), N.return = z, N) : (N = c(N, F.children || []), N.return = z, N);
    }
    function ae(z, N, F, se, Ue) {
      return N === null || N.tag !== 7 ? (N = zo(F, z.mode, se, Ue), N.return = z, N) : (N = c(N, F), N.return = z, N);
    }
    function le(z, N, F) {
      if (typeof N == "string" && N !== "" || typeof N == "number")
        return N = Sf("" + N, z.mode, F), N.return = z, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Lt:
            return F = yf(N.type, N.key, N.props, null, z.mode, F), F.ref = pu(z, null, N), F.return = z, F;
          case Ne:
            return N = Ks(N, z.mode, F), N.return = z, N;
          case Ot:
            var se = N._init;
            return le(z, se(N._payload), F);
        }
        if (Sr(N) || we(N))
          return N = zo(N, z.mode, F, null), N.return = z, N;
        Ns(z, N);
      }
      return null;
    }
    function te(z, N, F, se) {
      var Ue = N !== null ? N.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return Ue !== null ? null : w(z, N, "" + F, se);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Lt:
            return F.key === Ue ? k(z, N, F, se) : null;
          case Ne:
            return F.key === Ue ? B(z, N, F, se) : null;
          case Ot:
            return Ue = F._init, te(
              z,
              N,
              Ue(F._payload),
              se
            );
        }
        if (Sr(F) || we(F))
          return Ue !== null ? null : ae(z, N, F, se, null);
        Ns(z, F);
      }
      return null;
    }
    function ye(z, N, F, se, Ue) {
      if (typeof se == "string" && se !== "" || typeof se == "number")
        return z = z.get(F) || null, w(N, z, "" + se, Ue);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case Lt:
            return z = z.get(se.key === null ? F : se.key) || null, k(N, z, se, Ue);
          case Ne:
            return z = z.get(se.key === null ? F : se.key) || null, B(N, z, se, Ue);
          case Ot:
            var Ye = se._init;
            return ye(z, N, F, Ye(se._payload), Ue);
        }
        if (Sr(se) || we(se))
          return z = z.get(F) || null, ae(N, z, se, Ue, null);
        Ns(N, se);
      }
      return null;
    }
    function Oe(z, N, F, se) {
      for (var Ue = null, Ye = null, De = N, Xe = N = 0, Xn = null; De !== null && Xe < F.length; Xe++) {
        De.index > Xe ? (Xn = De, De = null) : Xn = De.sibling;
        var Ut = te(z, De, F[Xe], se);
        if (Ut === null) {
          De === null && (De = Xn);
          break;
        }
        n && De && Ut.alternate === null && r(z, De), N = d(Ut, N, Xe), Ye === null ? Ue = Ut : Ye.sibling = Ut, Ye = Ut, De = Xn;
      }
      if (Xe === F.length)
        return l(z, De), un && So(z, Xe), Ue;
      if (De === null) {
        for (; Xe < F.length; Xe++)
          De = le(z, F[Xe], se), De !== null && (N = d(De, N, Xe), Ye === null ? Ue = De : Ye.sibling = De, Ye = De);
        return un && So(z, Xe), Ue;
      }
      for (De = u(z, De); Xe < F.length; Xe++)
        Xn = ye(De, z, Xe, F[Xe], se), Xn !== null && (n && Xn.alternate !== null && De.delete(Xn.key === null ? Xe : Xn.key), N = d(Xn, N, Xe), Ye === null ? Ue = Xn : Ye.sibling = Xn, Ye = Xn);
      return n && De.forEach(function(al) {
        return r(z, al);
      }), un && So(z, Xe), Ue;
    }
    function Le(z, N, F, se) {
      var Ue = we(F);
      if (typeof Ue != "function")
        throw Error(y(150));
      if (F = Ue.call(F), F == null)
        throw Error(y(151));
      for (var Ye = Ue = null, De = N, Xe = N = 0, Xn = null, Ut = F.next(); De !== null && !Ut.done; Xe++, Ut = F.next()) {
        De.index > Xe ? (Xn = De, De = null) : Xn = De.sibling;
        var al = te(z, De, Ut.value, se);
        if (al === null) {
          De === null && (De = Xn);
          break;
        }
        n && De && al.alternate === null && r(z, De), N = d(al, N, Xe), Ye === null ? Ue = al : Ye.sibling = al, Ye = al, De = Xn;
      }
      if (Ut.done)
        return l(
          z,
          De
        ), un && So(z, Xe), Ue;
      if (De === null) {
        for (; !Ut.done; Xe++, Ut = F.next())
          Ut = le(z, Ut.value, se), Ut !== null && (N = d(Ut, N, Xe), Ye === null ? Ue = Ut : Ye.sibling = Ut, Ye = Ut);
        return un && So(z, Xe), Ue;
      }
      for (De = u(z, De); !Ut.done; Xe++, Ut = F.next())
        Ut = ye(De, z, Xe, Ut.value, se), Ut !== null && (n && Ut.alternate !== null && De.delete(Ut.key === null ? Xe : Ut.key), N = d(Ut, N, Xe), Ye === null ? Ue = Ut : Ye.sibling = Ut, Ye = Ut);
      return n && De.forEach(function(Xy) {
        return r(z, Xy);
      }), un && So(z, Xe), Ue;
    }
    function Un(z, N, F, se) {
      if (typeof F == "object" && F !== null && F.type === mt && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Lt:
            e: {
              for (var Ue = F.key, Ye = N; Ye !== null; ) {
                if (Ye.key === Ue) {
                  if (Ue = F.type, Ue === mt) {
                    if (Ye.tag === 7) {
                      l(z, Ye.sibling), N = c(Ye, F.props.children), N.return = z, z = N;
                      break e;
                    }
                  } else if (Ye.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === Ot && Gv(Ue) === Ye.type) {
                    l(z, Ye.sibling), N = c(Ye, F.props), N.ref = pu(z, Ye, F), N.return = z, z = N;
                    break e;
                  }
                  l(z, Ye);
                  break;
                } else
                  r(z, Ye);
                Ye = Ye.sibling;
              }
              F.type === mt ? (N = zo(F.props.children, z.mode, se, F.key), N.return = z, z = N) : (se = yf(F.type, F.key, F.props, null, z.mode, se), se.ref = pu(z, N, F), se.return = z, z = se);
            }
            return S(z);
          case Ne:
            e: {
              for (Ye = F.key; N !== null; ) {
                if (N.key === Ye)
                  if (N.tag === 4 && N.stateNode.containerInfo === F.containerInfo && N.stateNode.implementation === F.implementation) {
                    l(z, N.sibling), N = c(N, F.children || []), N.return = z, z = N;
                    break e;
                  } else {
                    l(z, N);
                    break;
                  }
                else
                  r(z, N);
                N = N.sibling;
              }
              N = Ks(F, z.mode, se), N.return = z, z = N;
            }
            return S(z);
          case Ot:
            return Ye = F._init, Un(z, N, Ye(F._payload), se);
        }
        if (Sr(F))
          return Oe(z, N, F, se);
        if (we(F))
          return Le(z, N, F, se);
        Ns(z, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, N !== null && N.tag === 6 ? (l(z, N.sibling), N = c(N, F), N.return = z, z = N) : (l(z, N), N = Sf(F, z.mode, se), N.return = z, z = N), S(z)) : l(z, N);
    }
    return Un;
  }
  var vu = Qv(!0), Jv = Qv(!1), Ms = {}, Ti = Qt(Ms), hu = Qt(Ms), Us = Qt(Ms);
  function zl(n) {
    if (n === Ms)
      throw Error(y(174));
    return n;
  }
  function Ud(n, r) {
    switch (Mt(Us, r), Mt(hu, n), Mt(Ti, Ms), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Dr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Dr(r, n);
    }
    Me(Ti), Mt(Ti, r);
  }
  function mu() {
    Me(Ti), Me(hu), Me(Us);
  }
  function Fc(n) {
    zl(Us.current);
    var r = zl(Ti.current), l = Dr(r, n.type);
    r !== l && (Mt(hu, n), Mt(Ti, l));
  }
  function He(n) {
    hu.current === n && (Me(Ti), Me(hu));
  }
  var ze = Qt(0);
  function _t(n) {
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
  var Cn = [];
  function ja() {
    for (var n = 0; n < Cn.length; n++)
      Cn[n]._workInProgressVersionPrimary = null;
    Cn.length = 0;
  }
  var zs = Be.ReactCurrentDispatcher, zd = Be.ReactCurrentBatchConfig, Ro = 0, mn = null, _n = null, Q = null, Ln = !1, Ve = !1, wi = 0, el = 0;
  function Tn() {
    throw Error(y(321));
  }
  function Ha(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ii(n[l], r[l]))
        return !1;
    return !0;
  }
  function Co(n, r, l, u, c, d) {
    if (Ro = d, mn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, zs.current = n === null || n.memoizedState === null ? ky : _y, n = l(u, c), Ve) {
      d = 0;
      do {
        if (Ve = !1, wi = 0, 25 <= d)
          throw Error(y(301));
        d += 1, Q = _n = null, r.updateQueue = null, zs.current = Ly, n = l(u, c);
      } while (Ve);
    }
    if (zs.current = Zc, r = _n !== null && _n.next !== null, Ro = 0, Q = _n = mn = null, Ln = !1, r)
      throw Error(y(300));
    return n;
  }
  function Al() {
    var n = wi !== 0;
    return wi = 0, n;
  }
  function ea() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Q === null ? mn.memoizedState = Q = n : Q = Q.next = n, Q;
  }
  function ta() {
    if (_n === null) {
      var n = mn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = _n.next;
    var r = Q === null ? mn.memoizedState : Q.next;
    if (r !== null)
      Q = r, _n = n;
    else {
      if (n === null)
        throw Error(y(310));
      _n = n, n = { memoizedState: _n.memoizedState, baseState: _n.baseState, baseQueue: _n.baseQueue, queue: _n.queue, next: null }, Q === null ? mn.memoizedState = Q = n : Q = Q.next = n;
    }
    return Q;
  }
  function To(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function As(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(y(311));
    l.lastRenderedReducer = n;
    var u = _n, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var S = c.next;
        c.next = d.next, d.next = S;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var w = S = null, k = null, B = d;
      do {
        var ae = B.lane;
        if ((Ro & ae) === ae)
          k !== null && (k = k.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), u = B.hasEagerState ? B.eagerState : n(u, B.action);
        else {
          var le = {
            lane: ae,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          k === null ? (w = k = le, S = u) : k = k.next = le, mn.lanes |= ae, Lo |= ae;
        }
        B = B.next;
      } while (B !== null && B !== d);
      k === null ? S = u : k.next = w, ii(u, r.memoizedState) || (na = !0), r.memoizedState = u, r.baseState = S, r.baseQueue = k, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, mn.lanes |= d, Lo |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Is(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(y(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var S = c = c.next;
      do
        d = n(d, S.action), S = S.next;
      while (S !== c);
      ii(d, r.memoizedState) || (na = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function jc() {
  }
  function Hc(n, r) {
    var l = mn, u = ta(), c = r(), d = !ii(u.memoizedState, c);
    if (d && (u.memoizedState = c, na = !0), u = u.queue, Fs(Vc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || Q !== null && Q.memoizedState.tag & 1) {
      if (l.flags |= 2048, wo(9, Bc.bind(null, l, u, c, r), void 0, null), bn === null)
        throw Error(y(349));
      Ro & 30 || Pc(l, r, c);
    }
    return c;
  }
  function Pc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = mn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, mn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Bc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Yc(r) && Wc(n);
  }
  function Vc(n, r, l) {
    return l(function() {
      Yc(r) && Wc(n);
    });
  }
  function Yc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ii(n, l);
    } catch {
      return !0;
    }
  }
  function Wc(n) {
    var r = $i(n, 1);
    r !== null && yn(r, n, 1, -1);
  }
  function qc(n) {
    var r = ea();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: To, lastRenderedState: n }, r.queue = n, n = n.dispatch = Kc.bind(null, mn, n), [r.memoizedState, n];
  }
  function wo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = mn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, mn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Xc() {
    return ta().memoizedState;
  }
  function yu(n, r, l, u) {
    var c = ea();
    mn.flags |= n, c.memoizedState = wo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function bo(n, r, l, u) {
    var c = ta();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (_n !== null) {
      var S = _n.memoizedState;
      if (d = S.destroy, u !== null && Ha(u, S.deps)) {
        c.memoizedState = wo(r, l, d, u);
        return;
      }
    }
    mn.flags |= n, c.memoizedState = wo(1 | r, l, d, u);
  }
  function xo(n, r) {
    return yu(8390656, 8, n, r);
  }
  function Fs(n, r) {
    return bo(2048, 8, n, r);
  }
  function Gc(n, r) {
    return bo(4, 2, n, r);
  }
  function Qc(n, r) {
    return bo(4, 4, n, r);
  }
  function Jc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ad(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bo(4, 4, Jc.bind(null, r, n), l);
  }
  function Oo() {
  }
  function Id(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ha(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function gu(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ha(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Il(n, r, l) {
    return Ro & 21 ? (ii(l, r) || (l = oo(), mn.lanes |= l, Lo |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, na = !0), n.memoizedState = l);
  }
  function Ta(n, r) {
    var l = Rt;
    Rt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = zd.transition;
    zd.transition = {};
    try {
      n(!1), r();
    } finally {
      Rt = l, zd.transition = u;
    }
  }
  function Kv() {
    return ta().memoizedState;
  }
  function nn(n, r, l) {
    var u = rl(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, js(n))
      Su(r, l);
    else if (l = Bv(n, r, l, u), l !== null) {
      var c = $n();
      yn(l, n, u, c), Hs(l, r, u);
    }
  }
  function Kc(n, r, l) {
    var u = rl(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (js(n))
      Su(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var S = r.lastRenderedState, w = d(S, l);
          if (c.hasEagerState = !0, c.eagerState = w, ii(w, S)) {
            var k = r.interleaved;
            k === null ? (c.next = c, Ca(r)) : (c.next = k.next, k.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Bv(n, r, c, u), l !== null && (c = $n(), yn(l, n, u, c), Hs(l, r, u));
    }
  }
  function js(n) {
    var r = n.alternate;
    return n === mn || r !== null && r === mn;
  }
  function Su(n, r) {
    Ve = Ln = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Hs(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, os(n, l);
    }
  }
  var Zc = { readContext: fe, useCallback: Tn, useContext: Tn, useEffect: Tn, useImperativeHandle: Tn, useInsertionEffect: Tn, useLayoutEffect: Tn, useMemo: Tn, useReducer: Tn, useRef: Tn, useState: Tn, useDebugValue: Tn, useDeferredValue: Tn, useTransition: Tn, useMutableSource: Tn, useSyncExternalStore: Tn, useId: Tn, unstable_isNewReconciler: !1 }, ky = { readContext: fe, useCallback: function(n, r) {
    return ea().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: fe, useEffect: xo, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yu(
      4194308,
      4,
      Jc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ea();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = ea();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = nn.bind(null, mn, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = ea();
    return n = { current: n }, r.memoizedState = n;
  }, useState: qc, useDebugValue: Oo, useDeferredValue: function(n) {
    return ea().memoizedState = n;
  }, useTransition: function() {
    var n = qc(!1), r = n[0];
    return n = Ta.bind(null, n[1]), ea().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = mn, c = ea();
    if (un) {
      if (l === void 0)
        throw Error(y(407));
      l = l();
    } else {
      if (l = r(), bn === null)
        throw Error(y(349));
      Ro & 30 || Pc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, xo(Vc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, wo(9, Bc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ea(), r = bn.identifierPrefix;
    if (un) {
      var l = ur, u = Zr;
      l = (u & ~(1 << 32 - kr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = wi++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = el++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, _y = {
    readContext: fe,
    useCallback: Id,
    useContext: fe,
    useEffect: Fs,
    useImperativeHandle: Ad,
    useInsertionEffect: Gc,
    useLayoutEffect: Qc,
    useMemo: gu,
    useReducer: As,
    useRef: Xc,
    useState: function() {
      return As(To);
    },
    useDebugValue: Oo,
    useDeferredValue: function(n) {
      var r = ta();
      return Il(r, _n.memoizedState, n);
    },
    useTransition: function() {
      var n = As(To)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: jc,
    useSyncExternalStore: Hc,
    useId: Kv,
    unstable_isNewReconciler: !1
  }, Ly = { readContext: fe, useCallback: Id, useContext: fe, useEffect: Fs, useImperativeHandle: Ad, useInsertionEffect: Gc, useLayoutEffect: Qc, useMemo: gu, useReducer: Is, useRef: Xc, useState: function() {
    return Is(To);
  }, useDebugValue: Oo, useDeferredValue: function(n) {
    var r = ta();
    return _n === null ? r.memoizedState = n : Il(r, _n.memoizedState, n);
  }, useTransition: function() {
    var n = Is(To)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: jc, useSyncExternalStore: Hc, useId: Kv, unstable_isNewReconciler: !1 };
  function Fl(n, r) {
    try {
      var l = "", u = r;
      do
        l += yt(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Fd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ps(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Zv = typeof WeakMap == "function" ? WeakMap : Map;
  function $v(n, r, l) {
    l = tn(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      ff || (ff = !0, Xd = u), Ps(n, r);
    }, l;
  }
  function eh(n, r, l) {
    l = tn(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Ps(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ps(n, r), typeof u != "function" && (Va === null ? Va = /* @__PURE__ */ new Set([this]) : Va.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), l;
  }
  function Bs(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Zv();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = Py.bind(null, n, r, l), r.then(n, n));
  }
  function th(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function jd(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = tn(-1, 1), r.tag = 2, Ul(l, r, 1))), l.lanes |= 1), n);
  }
  var nh = Be.ReactCurrentOwner, na = !1;
  function Nn(n, r, l, u) {
    r.child = n === null ? Jv(r, null, l, u) : vu(r, n.child, l, u);
  }
  function Eu(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return kn(r, c), u = Co(n, r, l, u, d, c), l = Al(), n !== null && !na ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Mn(n, r, c)) : (un && l && Nc(r), r.flags |= 1, Nn(n, r, u, c), r.child);
  }
  function jl(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Zd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, $c(n, r, d, u, c)) : (n = yf(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var S = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : iu, l(S, u) && n.ref === r.ref)
        return Mn(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function $c(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (iu(d, u) && n.ref === r.ref)
        if (na = !1, r.pendingProps = u = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (na = !0);
        else
          return r.lanes = n.lanes, Mn(n, r, c);
    }
    return rt(n, r, l, u, c);
  }
  function ra(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Mt(_u, aa), aa |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Mt(_u, aa), aa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, Mt(_u, aa), aa |= u;
      }
    else
      d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, Mt(_u, aa), aa |= u;
    return Nn(n, r, c, l), r.child;
  }
  function Do(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function rt(n, r, l, u, c) {
    var d = jn(l) ? _r : Jn.current;
    return d = Sa(r, d), kn(r, c), l = Co(n, r, l, u, d, c), u = Al(), n !== null && !na ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Mn(n, r, c)) : (un && u && Nc(r), r.flags |= 1, Nn(n, r, l, c), r.child);
  }
  function Vs(n, r, l, u, c) {
    if (jn(l)) {
      var d = !0;
      yo(r);
    } else
      d = !1;
    if (kn(r, c), r.stateNode === null)
      Ws(n, r), qv(r, l, u), Md(r, l, u, c), u = !0;
    else if (n === null) {
      var S = r.stateNode, w = r.memoizedProps;
      S.props = w;
      var k = S.context, B = l.contextType;
      typeof B == "object" && B !== null ? B = fe(B) : (B = jn(l) ? _r : Jn.current, B = Sa(r, B));
      var ae = l.getDerivedStateFromProps, le = typeof ae == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      le || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== u || k !== B) && Xv(r, S, u, B), Ml = !1;
      var te = r.memoizedState;
      S.state = te, Ls(r, u, S, c), k = r.memoizedState, w !== u || te !== k || et.current || Ml ? (typeof ae == "function" && (Nd(r, l, ae, u), k = r.memoizedState), (w = Ml || Wv(r, l, w, u, te, k, B)) ? (le || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = k), S.props = u, S.state = k, S.context = B, u = w) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      S = r.stateNode, Vv(n, r), w = r.memoizedProps, B = r.type === r.elementType ? w : $r(r.type, w), S.props = B, le = r.pendingProps, te = S.context, k = l.contextType, typeof k == "object" && k !== null ? k = fe(k) : (k = jn(l) ? _r : Jn.current, k = Sa(r, k));
      var ye = l.getDerivedStateFromProps;
      (ae = typeof ye == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== le || te !== k) && Xv(r, S, u, k), Ml = !1, te = r.memoizedState, S.state = te, Ls(r, u, S, c);
      var Oe = r.memoizedState;
      w !== le || te !== Oe || et.current || Ml ? (typeof ye == "function" && (Nd(r, l, ye, u), Oe = r.memoizedState), (B = Ml || Wv(r, l, B, u, te, Oe, k) || !1) ? (ae || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(u, Oe, k), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(u, Oe, k)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Oe), S.props = u, S.state = Oe, S.context = k, u = B) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return ef(n, r, l, u, d, c);
  }
  function ef(n, r, l, u, c, d) {
    Do(n, r);
    var S = (r.flags & 128) !== 0;
    if (!u && !S)
      return c && jv(r, l, !1), Mn(n, r, d);
    u = r.stateNode, nh.current = r;
    var w = S && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && S ? (r.child = vu(r, n.child, null, d), r.child = vu(r, null, w, d)) : Nn(n, r, w, d), r.memoizedState = u.state, c && jv(r, l, !0), r.child;
  }
  function Ny(n) {
    var r = n.stateNode;
    r.pendingContext ? Ei(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ei(n, r.context, !1), Ud(n, r.containerInfo);
  }
  function rh(n, r, l, u, c) {
    return su(), Hn(c), r.flags |= 256, Nn(n, r, l, u), r.child;
  }
  var Ys = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ko(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ah(n, r, l) {
    var u = r.pendingProps, c = ze.current, d = !1, S = (r.flags & 128) !== 0, w;
    if ((w = S) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Mt(ze, c & 1), n === null)
      return Uc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, S = { mode: "hidden", children: S }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = S) : d = gf(S, u, 0, null), n = zo(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = ko(l), r.memoizedState = Ys, n) : tf(r, S));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null))
      return Hd(n, r, S, u, w, c, l);
    if (d) {
      d = u.fallback, S = r.mode, c = n.child, w = c.sibling;
      var k = { mode: "hidden", children: u.children };
      return !(S & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = k, r.deletions = null) : (u = Bl(c, k), u.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Bl(w, d) : (d = zo(d, S, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, S = n.child.memoizedState, S = S === null ? ko(l) : { baseLanes: S.baseLanes | l, cachePool: null, transitions: S.transitions }, d.memoizedState = S, d.childLanes = n.childLanes & ~l, r.memoizedState = Ys, u;
    }
    return d = n.child, n = d.sibling, u = Bl(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function tf(n, r) {
    return r = gf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function nf(n, r, l, u) {
    return u !== null && Hn(u), vu(r, n.child, null, l), n = tf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Hd(n, r, l, u, c, d, S) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Fd(Error(y(422))), nf(n, r, S, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = gf({ mode: "visible", children: u.children }, c, 0, null), d = zo(d, c, S, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && vu(r, n.child, null, S), r.child.memoizedState = ko(S), r.memoizedState = Ys, d);
    if (!(r.mode & 1))
      return nf(n, r, S, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var w = u.dgst;
      return u = w, d = Error(y(419)), u = Fd(d, u, void 0), nf(n, r, S, u);
    }
    if (w = (S & n.childLanes) !== 0, na || w) {
      if (u = bn, u !== null) {
        switch (S & -S) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | S) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, $i(n, c), yn(u, n, c, -1));
      }
      return Js(), u = Fd(Error(y(421))), nf(n, r, S, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Kd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Ra = ga(c.nextSibling), Ea = r, un = !0, Fa = null, n !== null && (Jr[Kr++] = Zr, Jr[Kr++] = ur, Jr[Kr++] = ui, Zr = n.id, ur = n.overflow, ui = r), r = tf(r, u.children), r.flags |= 4096, r);
  }
  function ih(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Nl(n.return, r, l);
  }
  function rf(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function Pd(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (Nn(n, r, u.children, l), u = ze.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && ih(n, l, r);
            else if (n.tag === 19)
              ih(n, l, r);
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
    if (Mt(ze, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && _t(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), rf(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && _t(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          rf(r, !0, l, null, d);
          break;
        case "together":
          rf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Ws(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Mn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Lo |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(y(153));
    if (r.child !== null) {
      for (n = r.child, l = Bl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Bl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tl(n, r, l) {
    switch (r.tag) {
      case 3:
        Ny(r), su();
        break;
      case 5:
        Fc(r);
        break;
      case 1:
        jn(r.type) && yo(r);
        break;
      case 4:
        Ud(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Mt(cu, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Mt(ze, ze.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ah(n, r, l) : (Mt(ze, ze.current & 1), n = Mn(n, r, l), n !== null ? n.sibling : null);
        Mt(ze, ze.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return Pd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Mt(ze, ze.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ra(n, r, l);
    }
    return Mn(n, r, l);
  }
  var bi, Ru, Cu, Pa;
  bi = function(n, r) {
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
  }, Ru = function() {
  }, Cu = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, zl(Ti.current);
      var d = null;
      switch (l) {
        case "input":
          c = En(n, c), u = En(n, u), d = [];
          break;
        case "select":
          c = D({}, c, { value: void 0 }), u = D({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ca(n, c), u = ca(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = kc);
      }
      Nt(l, u);
      var S;
      l = null;
      for (B in c)
        if (!u.hasOwnProperty(B) && c.hasOwnProperty(B) && c[B] != null)
          if (B === "style") {
            var w = c[B];
            for (S in w)
              w.hasOwnProperty(S) && (l || (l = {}), l[S] = "");
          } else
            B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (O.hasOwnProperty(B) ? d || (d = []) : (d = d || []).push(B, null));
      for (B in u) {
        var k = u[B];
        if (w = c != null ? c[B] : void 0, u.hasOwnProperty(B) && k !== w && (k != null || w != null))
          if (B === "style")
            if (w) {
              for (S in w)
                !w.hasOwnProperty(S) || k && k.hasOwnProperty(S) || (l || (l = {}), l[S] = "");
              for (S in k)
                k.hasOwnProperty(S) && w[S] !== k[S] && (l || (l = {}), l[S] = k[S]);
            } else
              l || (d || (d = []), d.push(
                B,
                l
              )), l = k;
          else
            B === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, w = w ? w.__html : void 0, k != null && w !== k && (d = d || []).push(B, k)) : B === "children" ? typeof k != "string" && typeof k != "number" || (d = d || []).push(B, "" + k) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (O.hasOwnProperty(B) ? (k != null && B === "onScroll" && Gt("scroll", n), d || w === k || (d = [])) : (d = d || []).push(B, k));
      }
      l && (d = d || []).push("style", l);
      var B = d;
      (r.updateQueue = B) && (r.flags |= 4);
    }
  }, Pa = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function wn(n, r) {
    if (!un)
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
  function br(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function My(n, r, l) {
    var u = r.pendingProps;
    switch (Mc(r), r.tag) {
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
        return br(r), null;
      case 1:
        return jn(r.type) && Qr(), br(r), null;
      case 3:
        return u = r.stateNode, mu(), Me(et), Me(Jn), ja(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (zc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Fa !== null && (Gd(Fa), Fa = null))), Ru(n, r), br(r), null;
      case 5:
        He(r);
        var c = zl(Us.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Cu(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(y(166));
            return br(r), null;
          }
          if (n = zl(Ti.current), zc(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[Ua] = r, u[ks] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Gt("cancel", u), Gt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Gt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Gi.length; c++)
                  Gt(Gi[c], u);
                break;
              case "source":
                Gt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Gt(
                  "error",
                  u
                ), Gt("load", u);
                break;
              case "details":
                Gt("toggle", u);
                break;
              case "input":
                ar(u, d), Gt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, Gt("invalid", u);
                break;
              case "textarea":
                fa(u, d), Gt("invalid", u);
            }
            Nt(l, d), c = null;
            for (var S in d)
              if (d.hasOwnProperty(S)) {
                var w = d[S];
                S === "children" ? typeof w == "string" ? u.textContent !== w && (d.suppressHydrationWarning !== !0 && bs(u.textContent, w, n), c = ["children", w]) : typeof w == "number" && u.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && bs(
                  u.textContent,
                  w,
                  n
                ), c = ["children", "" + w]) : O.hasOwnProperty(S) && w != null && S === "onScroll" && Gt("scroll", u);
              }
            switch (l) {
              case "input":
                rr(u), In(u, d, !0);
                break;
              case "textarea":
                rr(u), da(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = kc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            S = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = S.createElement(l, { is: u.is }) : (n = S.createElement(l), l === "select" && (S = n, u.multiple ? S.multiple = !0 : u.size && (S.size = u.size))) : n = S.createElementNS(n, l), n[Ua] = r, n[ks] = u, bi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = Dn(l, u), l) {
                case "dialog":
                  Gt("cancel", n), Gt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Gt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Gi.length; c++)
                    Gt(Gi[c], n);
                  c = u;
                  break;
                case "source":
                  Gt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Gt(
                    "error",
                    n
                  ), Gt("load", n), c = u;
                  break;
                case "details":
                  Gt("toggle", n), c = u;
                  break;
                case "input":
                  ar(n, u), c = En(n, u), Gt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = D({}, u, { value: void 0 }), Gt("invalid", n);
                  break;
                case "textarea":
                  fa(n, u), c = ca(n, u), Gt("invalid", n);
                  break;
                default:
                  c = u;
              }
              Nt(l, c), w = c;
              for (d in w)
                if (w.hasOwnProperty(d)) {
                  var k = w[d];
                  d === "style" ? ot(n, k) : d === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && pa(n, k)) : d === "children" ? typeof k == "string" ? (l !== "textarea" || k !== "") && va(n, k) : typeof k == "number" && va(n, "" + k) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (O.hasOwnProperty(d) ? k != null && d === "onScroll" && Gt("scroll", n) : k != null && Qe(n, d, k, S));
                }
              switch (l) {
                case "input":
                  rr(n), In(n, u, !1);
                  break;
                case "textarea":
                  rr(n), da(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + dt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? Vn(n, !!u.multiple, d, !1) : u.defaultValue != null && Vn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = kc);
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
        return br(r), null;
      case 6:
        if (n && r.stateNode != null)
          Pa(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(y(166));
          if (l = zl(Us.current), zl(Ti.current), zc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Ua] = r, (d = u.nodeValue !== l) && (n = Ea, n !== null))
              switch (n.tag) {
                case 3:
                  bs(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && bs(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Ua] = r, r.stateNode = u;
        }
        return br(r), null;
      case 13:
        if (Me(ze), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (un && Ra !== null && r.mode & 1 && !(r.flags & 128))
            Pv(), su(), r.flags |= 98560, d = !1;
          else if (d = zc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(y(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(y(317));
              d[Ua] = r;
            } else
              su(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            br(r), d = !1;
          } else
            Fa !== null && (Gd(Fa), Fa = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || ze.current & 1 ? Wn === 0 && (Wn = 3) : Js())), r.updateQueue !== null && (r.flags |= 4), br(r), null);
      case 4:
        return mu(), Ru(n, r), n === null && gi(r.stateNode.containerInfo), br(r), null;
      case 10:
        return _d(r.type._context), br(r), null;
      case 17:
        return jn(r.type) && Qr(), br(r), null;
      case 19:
        if (Me(ze), d = r.memoizedState, d === null)
          return br(r), null;
        if (u = (r.flags & 128) !== 0, S = d.rendering, S === null)
          if (u)
            wn(d, !1);
          else {
            if (Wn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = _t(n), S !== null) {
                  for (r.flags |= 128, wn(d, !1), u = S.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    d = l, n = u, d.flags &= 14680066, S = d.alternate, S === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = S.childLanes, d.lanes = S.lanes, d.child = S.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = S.memoizedProps, d.memoizedState = S.memoizedState, d.updateQueue = S.updateQueue, d.type = S.type, n = S.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Mt(ze, ze.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && en() > Nu && (r.flags |= 128, u = !0, wn(d, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = _t(S), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), wn(d, !0), d.tail === null && d.tailMode === "hidden" && !S.alternate && !un)
                return br(r), null;
            } else
              2 * en() - d.renderingStartTime > Nu && l !== 1073741824 && (r.flags |= 128, u = !0, wn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (S.sibling = r.child, r.child = S) : (l = d.last, l !== null ? l.sibling = S : r.child = S, d.last = S);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = en(), r.sibling = null, l = ze.current, Mt(ze, u ? l & 1 | 2 : l & 1), r) : (br(r), null);
      case 22:
      case 23:
        return hf(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? aa & 1073741824 && (br(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : br(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(y(156, r.tag));
  }
  function Uy(n, r) {
    switch (Mc(r), r.tag) {
      case 1:
        return jn(r.type) && Qr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return mu(), Me(et), Me(Jn), ja(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return He(r), null;
      case 13:
        if (Me(ze), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(y(340));
          su();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Me(ze), null;
      case 4:
        return mu(), null;
      case 10:
        return _d(r.type._context), null;
      case 22:
      case 23:
        return hf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Tu = !1, sr = !1, af = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function wu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          xn(n, r, u);
        }
      else
        l.current = null;
  }
  function Bd(n, r, l) {
    try {
      l();
    } catch (u) {
      xn(n, r, u);
    }
  }
  var lf = !1;
  function zy(n, r) {
    if (Sd = $o, n = Ov(), Ss(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var c = u.anchorOffset, d = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var S = 0, w = -1, k = -1, B = 0, ae = 0, le = n, te = null;
            t:
              for (; ; ) {
                for (var ye; le !== l || c !== 0 && le.nodeType !== 3 || (w = S + c), le !== d || u !== 0 && le.nodeType !== 3 || (k = S + u), le.nodeType === 3 && (S += le.nodeValue.length), (ye = le.firstChild) !== null; )
                  te = le, le = ye;
                for (; ; ) {
                  if (le === n)
                    break t;
                  if (te === l && ++B === c && (w = S), te === d && ++ae === u && (k = S), (ye = le.nextSibling) !== null)
                    break;
                  le = te, te = le.parentNode;
                }
                le = ye;
              }
            l = w === -1 || k === -1 ? null : { start: w, end: k };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Ed = { focusedElem: n, selectionRange: l }, $o = !1, Te = r; Te !== null; )
      if (r = Te, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Te = n;
      else
        for (; Te !== null; ) {
          r = Te;
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
                    var Le = Oe.memoizedProps, Un = Oe.memoizedState, z = r.stateNode, N = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : $r(r.type, Le), Un);
                    z.__reactInternalSnapshotBeforeUpdate = N;
                  }
                  break;
                case 3:
                  var F = r.stateNode.containerInfo;
                  F.nodeType === 1 ? F.textContent = "" : F.nodeType === 9 && F.documentElement && F.removeChild(F.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(y(163));
              }
          } catch (se) {
            xn(r, r.return, se);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Te = n;
            break;
          }
          Te = r.return;
        }
    return Oe = lf, lf = !1, Oe;
  }
  function bu(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Bd(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function of(n, r) {
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
  function uf(n) {
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
  function lh(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, lh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ua], delete r[ks], delete r[wd], delete r[xy], delete r[Oy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Vd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function oh(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Vd(n.return))
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
  function qs(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = kc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (qs(n, r, l), n = n.sibling; n !== null; )
        qs(n, r, l), n = n.sibling;
  }
  function xu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (xu(n, r, l), n = n.sibling; n !== null; )
        xu(n, r, l), n = n.sibling;
  }
  var dn = null, Kn = !1;
  function Lr(n, r, l) {
    for (l = l.child; l !== null; )
      Ou(n, r, l), l = l.sibling;
  }
  function Ou(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function")
      try {
        Wr.onCommitFiberUnmount(gl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        sr || wu(l, r);
      case 6:
        var u = dn, c = Kn;
        dn = null, Lr(n, r, l), dn = u, Kn = c, dn !== null && (Kn ? (n = dn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : dn.removeChild(l.stateNode));
        break;
      case 18:
        dn !== null && (Kn ? (n = dn, l = l.stateNode, n.nodeType === 8 ? Td(n.parentNode, l) : n.nodeType === 1 && Td(n, l), Ma(n)) : Td(dn, l.stateNode));
        break;
      case 4:
        u = dn, c = Kn, dn = l.stateNode.containerInfo, Kn = !0, Lr(n, r, l), dn = u, Kn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, S = d.destroy;
            d = d.tag, S !== void 0 && (d & 2 || d & 4) && Bd(l, r, S), c = c.next;
          } while (c !== u);
        }
        Lr(n, r, l);
        break;
      case 1:
        if (!sr && (wu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (w) {
            xn(l, r, w);
          }
        Lr(n, r, l);
        break;
      case 21:
        Lr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (sr = (u = sr) || l.memoizedState !== null, Lr(n, r, l), sr = u) : Lr(n, r, l);
        break;
      default:
        Lr(n, r, l);
    }
  }
  function Du(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new af()), r.forEach(function(u) {
        var c = By.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function Zn(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var c = l[u];
        try {
          var d = n, S = r, w = S;
          e:
            for (; w !== null; ) {
              switch (w.tag) {
                case 5:
                  dn = w.stateNode, Kn = !1;
                  break e;
                case 3:
                  dn = w.stateNode.containerInfo, Kn = !0;
                  break e;
                case 4:
                  dn = w.stateNode.containerInfo, Kn = !0;
                  break e;
              }
              w = w.return;
            }
          if (dn === null)
            throw Error(y(160));
          Ou(d, S, c), dn = null, Kn = !1;
          var k = c.alternate;
          k !== null && (k.return = null), c.return = null;
        } catch (B) {
          xn(c, r, B);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        uh(r, n), r = r.sibling;
  }
  function uh(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Zn(r, n), xi(n), u & 4) {
          try {
            bu(3, n, n.return), of(3, n);
          } catch (Le) {
            xn(n, n.return, Le);
          }
          try {
            bu(5, n, n.return);
          } catch (Le) {
            xn(n, n.return, Le);
          }
        }
        break;
      case 1:
        Zn(r, n), xi(n), u & 512 && l !== null && wu(l, l.return);
        break;
      case 5:
        if (Zn(r, n), xi(n), u & 512 && l !== null && wu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            va(c, "");
          } catch (Le) {
            xn(n, n.return, Le);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, S = l !== null ? l.memoizedProps : d, w = n.type, k = n.updateQueue;
          if (n.updateQueue = null, k !== null)
            try {
              w === "input" && d.type === "radio" && d.name != null && Bn(c, d), Dn(w, S);
              var B = Dn(w, d);
              for (S = 0; S < k.length; S += 2) {
                var ae = k[S], le = k[S + 1];
                ae === "style" ? ot(c, le) : ae === "dangerouslySetInnerHTML" ? pa(c, le) : ae === "children" ? va(c, le) : Qe(c, ae, le, B);
              }
              switch (w) {
                case "input":
                  An(c, d);
                  break;
                case "textarea":
                  Er(c, d);
                  break;
                case "select":
                  var te = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ye = d.value;
                  ye != null ? Vn(c, !!d.multiple, ye, !1) : te !== !!d.multiple && (d.defaultValue != null ? Vn(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Vn(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[ks] = d;
            } catch (Le) {
              xn(n, n.return, Le);
            }
        }
        break;
      case 6:
        if (Zn(r, n), xi(n), u & 4) {
          if (n.stateNode === null)
            throw Error(y(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Le) {
            xn(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (Zn(r, n), xi(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ma(r.containerInfo);
          } catch (Le) {
            xn(n, n.return, Le);
          }
        break;
      case 4:
        Zn(r, n), xi(n);
        break;
      case 13:
        Zn(r, n), xi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (cf = en())), u & 4 && Du(n);
        break;
      case 22:
        if (ae = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (B = sr) || ae, Zn(r, n), sr = B) : Zn(r, n), xi(n), u & 8192) {
          if (B = n.memoizedState !== null, (n.stateNode.isHidden = B) && !ae && n.mode & 1)
            for (Te = n, ae = n.child; ae !== null; ) {
              for (le = Te = ae; Te !== null; ) {
                switch (te = Te, ye = te.child, te.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    bu(4, te, te.return);
                    break;
                  case 1:
                    wu(te, te.return);
                    var Oe = te.stateNode;
                    if (typeof Oe.componentWillUnmount == "function") {
                      u = te, l = te.return;
                      try {
                        r = u, Oe.props = r.memoizedProps, Oe.state = r.memoizedState, Oe.componentWillUnmount();
                      } catch (Le) {
                        xn(u, l, Le);
                      }
                    }
                    break;
                  case 5:
                    wu(te, te.return);
                    break;
                  case 22:
                    if (te.memoizedState !== null) {
                      sh(le);
                      continue;
                    }
                }
                ye !== null ? (ye.return = te, Te = ye) : sh(le);
              }
              ae = ae.sibling;
            }
          e:
            for (ae = null, le = n; ; ) {
              if (le.tag === 5) {
                if (ae === null) {
                  ae = le;
                  try {
                    c = le.stateNode, B ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = le.stateNode, k = le.memoizedProps.style, S = k != null && k.hasOwnProperty("display") ? k.display : null, w.style.display = Ie("display", S));
                  } catch (Le) {
                    xn(n, n.return, Le);
                  }
                }
              } else if (le.tag === 6) {
                if (ae === null)
                  try {
                    le.stateNode.nodeValue = B ? "" : le.memoizedProps;
                  } catch (Le) {
                    xn(n, n.return, Le);
                  }
              } else if ((le.tag !== 22 && le.tag !== 23 || le.memoizedState === null || le === n) && le.child !== null) {
                le.child.return = le, le = le.child;
                continue;
              }
              if (le === n)
                break e;
              for (; le.sibling === null; ) {
                if (le.return === null || le.return === n)
                  break e;
                ae === le && (ae = null), le = le.return;
              }
              ae === le && (ae = null), le.sibling.return = le.return, le = le.sibling;
            }
        }
        break;
      case 19:
        Zn(r, n), xi(n), u & 4 && Du(n);
        break;
      case 21:
        break;
      default:
        Zn(
          r,
          n
        ), xi(n);
    }
  }
  function xi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Vd(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(y(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (va(c, ""), u.flags &= -33);
            var d = oh(n);
            xu(n, d, c);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, w = oh(n);
            qs(n, w, S);
            break;
          default:
            throw Error(y(161));
        }
      } catch (k) {
        xn(n, n.return, k);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ay(n, r, l) {
    Te = n, Yd(n);
  }
  function Yd(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Te !== null; ) {
      var c = Te, d = c.child;
      if (c.tag === 22 && u) {
        var S = c.memoizedState !== null || Tu;
        if (!S) {
          var w = c.alternate, k = w !== null && w.memoizedState !== null || sr;
          w = Tu;
          var B = sr;
          if (Tu = S, (sr = k) && !B)
            for (Te = c; Te !== null; )
              S = Te, k = S.child, S.tag === 22 && S.memoizedState !== null ? Wd(c) : k !== null ? (k.return = S, Te = k) : Wd(c);
          for (; d !== null; )
            Te = d, Yd(d), d = d.sibling;
          Te = c, Tu = w, sr = B;
        }
        ku(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Te = d) : ku(n);
    }
  }
  function ku(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                sr || of(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !sr)
                  if (l === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : $r(r.type, l.memoizedProps);
                    u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && du(r, d, u);
                break;
              case 3:
                var S = r.updateQueue;
                if (S !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  du(r, S, l);
                }
                break;
              case 5:
                var w = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = w;
                  var k = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k.autoFocus && l.focus();
                      break;
                    case "img":
                      k.src && (l.src = k.src);
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
                  var B = r.alternate;
                  if (B !== null) {
                    var ae = B.memoizedState;
                    if (ae !== null) {
                      var le = ae.dehydrated;
                      le !== null && Ma(le);
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
                throw Error(y(163));
            }
          sr || r.flags & 512 && uf(r);
        } catch (te) {
          xn(r, r.return, te);
        }
      }
      if (r === n) {
        Te = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Te = l;
        break;
      }
      Te = r.return;
    }
  }
  function sh(n) {
    for (; Te !== null; ) {
      var r = Te;
      if (r === n) {
        Te = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Te = l;
        break;
      }
      Te = r.return;
    }
  }
  function Wd(n) {
    for (; Te !== null; ) {
      var r = Te;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              of(4, r);
            } catch (k) {
              xn(r, l, k);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (k) {
                xn(r, c, k);
              }
            }
            var d = r.return;
            try {
              uf(r);
            } catch (k) {
              xn(r, d, k);
            }
            break;
          case 5:
            var S = r.return;
            try {
              uf(r);
            } catch (k) {
              xn(r, S, k);
            }
        }
      } catch (k) {
        xn(r, r.return, k);
      }
      if (r === n) {
        Te = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, Te = w;
        break;
      }
      Te = r.return;
    }
  }
  var Iy = Math.ceil, _o = Be.ReactCurrentDispatcher, sf = Be.ReactCurrentOwner, Ba = Be.ReactCurrentBatchConfig, St = 0, bn = null, sn = null, Yn = 0, aa = 0, _u = Qt(0), Wn = 0, Xs = null, Lo = 0, Lu = 0, qd = 0, Hl = null, xr = null, cf = 0, Nu = 1 / 0, nl = null, ff = !1, Xd = null, Va = null, Mu = !1, Ya = null, df = 0, Gs = 0, pf = null, Qs = -1, No = 0;
  function $n() {
    return St & 6 ? en() : Qs !== -1 ? Qs : Qs = en();
  }
  function rl(n) {
    return n.mode & 1 ? St & 2 && Yn !== 0 ? Yn & -Yn : Dy.transition !== null ? (No === 0 && (No = oo()), No) : (n = Rt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : fs(n.type)), n) : 1;
  }
  function yn(n, r, l, u) {
    if (50 < Gs)
      throw Gs = 0, pf = null, Error(y(185));
    El(n, l, u), (!(St & 2) || n !== bn) && (n === bn && (!(St & 2) && (Lu |= l), Wn === 4 && Oi(n, Yn)), qn(n, u), l === 1 && St === 0 && !(r.mode & 1) && (Nu = en() + 500, kl && Ri()));
  }
  function qn(n, r) {
    var l = n.callbackNode;
    Sl(n, r);
    var u = hi(n, n === bn ? Yn : 0);
    if (u === 0)
      l !== null && $t(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && $t(l), r === 1)
        n.tag === 0 ? Hv(Uu.bind(null, n)) : Lc(Uu.bind(null, n)), Fv(function() {
          !(St & 6) && Ri();
        }), l = null;
      else {
        switch (us(u)) {
          case 1:
            l = ts;
            break;
          case 4:
            l = vi;
            break;
          case 16:
            l = ut;
            break;
          case 536870912:
            l = ji;
            break;
          default:
            l = ut;
        }
        l = yh(l, vf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function vf(n, r) {
    if (Qs = -1, No = 0, St & 6)
      throw Error(y(327));
    var l = n.callbackNode;
    if (zu() && n.callbackNode !== l)
      return null;
    var u = hi(n, n === bn ? Yn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = mf(n, u);
    else {
      r = u;
      var c = St;
      St |= 2;
      var d = fh();
      (bn !== n || Yn !== r) && (nl = null, Nu = en() + 500, Uo(n, r));
      do
        try {
          jy();
          break;
        } catch (w) {
          ch(n, w);
        }
      while (!0);
      kd(), _o.current = d, St = c, sn !== null ? r = 0 : (bn = null, Yn = 0, r = Wn);
    }
    if (r !== 0) {
      if (r === 2 && (c = mi(n), c !== 0 && (u = c, r = Mo(n, c))), r === 1)
        throw l = Xs, Uo(n, 0), Oi(n, u), qn(n, en()), l;
      if (r === 6)
        Oi(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Qd(c) && (r = mf(n, u), r === 2 && (d = mi(n), d !== 0 && (u = d, r = Mo(n, d))), r === 1))
          throw l = Xs, Uo(n, 0), Oi(n, u), qn(n, en()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            Pl(n, xr, nl);
            break;
          case 3:
            if (Oi(n, u), (u & 130023424) === u && (r = cf + 500 - en(), 10 < r)) {
              if (hi(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                $n(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = xs(Pl.bind(null, n, xr, nl), r);
              break;
            }
            Pl(n, xr, nl);
            break;
          case 4:
            if (Oi(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var S = 31 - kr(u);
              d = 1 << S, S = r[S], S > c && (c = S), u &= ~d;
            }
            if (u = c, u = en() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Iy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = xs(Pl.bind(null, n, xr, nl), u);
              break;
            }
            Pl(n, xr, nl);
            break;
          case 5:
            Pl(n, xr, nl);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return qn(n, en()), n.callbackNode === l ? vf.bind(null, n) : null;
  }
  function Mo(n, r) {
    var l = Hl;
    return n.current.memoizedState.isDehydrated && (Uo(n, r).flags |= 256), n = mf(n, r), n !== 2 && (r = xr, xr = l, r !== null && Gd(r)), n;
  }
  function Gd(n) {
    xr === null ? xr = n : xr.push.apply(xr, n);
  }
  function Qd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var u = 0; u < l.length; u++) {
            var c = l[u], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ii(d(), c))
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
  function Oi(n, r) {
    for (r &= ~qd, r &= ~Lu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Uu(n) {
    if (St & 6)
      throw Error(y(327));
    zu();
    var r = hi(n, 0);
    if (!(r & 1))
      return qn(n, en()), null;
    var l = mf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = mi(n);
      u !== 0 && (r = u, l = Mo(n, u));
    }
    if (l === 1)
      throw l = Xs, Uo(n, 0), Oi(n, r), qn(n, en()), l;
    if (l === 6)
      throw Error(y(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Pl(n, xr, nl), qn(n, en()), null;
  }
  function Jd(n, r) {
    var l = St;
    St |= 1;
    try {
      return n(r);
    } finally {
      St = l, St === 0 && (Nu = en() + 500, kl && Ri());
    }
  }
  function Di(n) {
    Ya !== null && Ya.tag === 0 && !(St & 6) && zu();
    var r = St;
    St |= 1;
    var l = Ba.transition, u = Rt;
    try {
      if (Ba.transition = null, Rt = 1, n)
        return n();
    } finally {
      Rt = u, Ba.transition = l, St = r, !(St & 6) && Ri();
    }
  }
  function hf() {
    aa = _u.current, Me(_u);
  }
  function Uo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Os(l)), sn !== null)
      for (l = sn.return; l !== null; ) {
        var u = l;
        switch (Mc(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Qr();
            break;
          case 3:
            mu(), Me(et), Me(Jn), ja();
            break;
          case 5:
            He(u);
            break;
          case 4:
            mu();
            break;
          case 13:
            Me(ze);
            break;
          case 19:
            Me(ze);
            break;
          case 10:
            _d(u.type._context);
            break;
          case 22:
          case 23:
            hf();
        }
        l = l.return;
      }
    if (bn = n, sn = n = Bl(n.current, null), Yn = aa = r, Wn = 0, Xs = null, qd = Lu = Lo = 0, xr = Hl = null, wr !== null) {
      for (r = 0; r < wr.length; r++)
        if (l = wr[r], u = l.interleaved, u !== null) {
          l.interleaved = null;
          var c = u.next, d = l.pending;
          if (d !== null) {
            var S = d.next;
            d.next = c, u.next = S;
          }
          l.pending = u;
        }
      wr = null;
    }
    return n;
  }
  function ch(n, r) {
    do {
      var l = sn;
      try {
        if (kd(), zs.current = Zc, Ln) {
          for (var u = mn.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Ln = !1;
        }
        if (Ro = 0, Q = _n = mn = null, Ve = !1, wi = 0, sf.current = null, l === null || l.return === null) {
          Wn = 1, Xs = r, sn = null;
          break;
        }
        e: {
          var d = n, S = l.return, w = l, k = r;
          if (r = Yn, w.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var B = k, ae = w, le = ae.tag;
            if (!(ae.mode & 1) && (le === 0 || le === 11 || le === 15)) {
              var te = ae.alternate;
              te ? (ae.updateQueue = te.updateQueue, ae.memoizedState = te.memoizedState, ae.lanes = te.lanes) : (ae.updateQueue = null, ae.memoizedState = null);
            }
            var ye = th(S);
            if (ye !== null) {
              ye.flags &= -257, jd(ye, S, w, d, r), ye.mode & 1 && Bs(d, B, r), r = ye, k = B;
              var Oe = r.updateQueue;
              if (Oe === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(k), r.updateQueue = Le;
              } else
                Oe.add(k);
              break e;
            } else {
              if (!(r & 1)) {
                Bs(d, B, r), Js();
                break e;
              }
              k = Error(y(426));
            }
          } else if (un && w.mode & 1) {
            var Un = th(S);
            if (Un !== null) {
              !(Un.flags & 65536) && (Un.flags |= 256), jd(Un, S, w, d, r), Hn(Fl(k, w));
              break e;
            }
          }
          d = k = Fl(k, w), Wn !== 4 && (Wn = 2), Hl === null ? Hl = [d] : Hl.push(d), d = S;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var z = $v(d, k, r);
                Yv(d, z);
                break e;
              case 1:
                w = k;
                var N = d.type, F = d.stateNode;
                if (!(d.flags & 128) && (typeof N.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (Va === null || !Va.has(F)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var se = eh(d, w, r);
                  Yv(d, se);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ph(l);
      } catch (Ue) {
        r = Ue, sn === l && l !== null && (sn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fh() {
    var n = _o.current;
    return _o.current = Zc, n === null ? Zc : n;
  }
  function Js() {
    (Wn === 0 || Wn === 3 || Wn === 2) && (Wn = 4), bn === null || !(Lo & 268435455) && !(Lu & 268435455) || Oi(bn, Yn);
  }
  function mf(n, r) {
    var l = St;
    St |= 2;
    var u = fh();
    (bn !== n || Yn !== r) && (nl = null, Uo(n, r));
    do
      try {
        Fy();
        break;
      } catch (c) {
        ch(n, c);
      }
    while (!0);
    if (kd(), St = l, _o.current = u, sn !== null)
      throw Error(y(261));
    return bn = null, Yn = 0, Wn;
  }
  function Fy() {
    for (; sn !== null; )
      dh(sn);
  }
  function jy() {
    for (; sn !== null && !Cr(); )
      dh(sn);
  }
  function dh(n) {
    var r = mh(n.alternate, n, aa);
    n.memoizedProps = n.pendingProps, r === null ? ph(n) : sn = r, sf.current = null;
  }
  function ph(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Uy(l, r), l !== null) {
          l.flags &= 32767, sn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Wn = 6, sn = null;
          return;
        }
      } else if (l = My(l, r, aa), l !== null) {
        sn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        sn = r;
        return;
      }
      sn = r = n;
    } while (r !== null);
    Wn === 0 && (Wn = 5);
  }
  function Pl(n, r, l) {
    var u = Rt, c = Ba.transition;
    try {
      Ba.transition = null, Rt = 1, Hy(n, r, l, u);
    } finally {
      Ba.transition = c, Rt = u;
    }
    return null;
  }
  function Hy(n, r, l, u) {
    do
      zu();
    while (Ya !== null);
    if (St & 6)
      throw Error(y(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(y(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ls(n, d), n === bn && (sn = bn = null, Yn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Mu || (Mu = !0, yh(ut, function() {
      return zu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ba.transition, Ba.transition = null;
      var S = Rt;
      Rt = 1;
      var w = St;
      St |= 4, sf.current = null, zy(n, l), uh(l, n), po(Ed), $o = !!Sd, Ed = Sd = null, n.current = l, Ay(l), pi(), St = w, Rt = S, Ba.transition = d;
    } else
      n.current = l;
    if (Mu && (Mu = !1, Ya = n, df = c), d = n.pendingLanes, d === 0 && (Va = null), ns(l.stateNode), qn(n, en()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (ff)
      throw ff = !1, n = Xd, Xd = null, n;
    return df & 1 && n.tag !== 0 && zu(), d = n.pendingLanes, d & 1 ? n === pf ? Gs++ : (Gs = 0, pf = n) : Gs = 0, Ri(), null;
  }
  function zu() {
    if (Ya !== null) {
      var n = us(df), r = Ba.transition, l = Rt;
      try {
        if (Ba.transition = null, Rt = 16 > n ? 16 : n, Ya === null)
          var u = !1;
        else {
          if (n = Ya, Ya = null, df = 0, St & 6)
            throw Error(y(331));
          var c = St;
          for (St |= 4, Te = n.current; Te !== null; ) {
            var d = Te, S = d.child;
            if (Te.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var k = 0; k < w.length; k++) {
                  var B = w[k];
                  for (Te = B; Te !== null; ) {
                    var ae = Te;
                    switch (ae.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bu(8, ae, d);
                    }
                    var le = ae.child;
                    if (le !== null)
                      le.return = ae, Te = le;
                    else
                      for (; Te !== null; ) {
                        ae = Te;
                        var te = ae.sibling, ye = ae.return;
                        if (lh(ae), ae === B) {
                          Te = null;
                          break;
                        }
                        if (te !== null) {
                          te.return = ye, Te = te;
                          break;
                        }
                        Te = ye;
                      }
                  }
                }
                var Oe = d.alternate;
                if (Oe !== null) {
                  var Le = Oe.child;
                  if (Le !== null) {
                    Oe.child = null;
                    do {
                      var Un = Le.sibling;
                      Le.sibling = null, Le = Un;
                    } while (Le !== null);
                  }
                }
                Te = d;
              }
            }
            if (d.subtreeFlags & 2064 && S !== null)
              S.return = d, Te = S;
            else
              e:
                for (; Te !== null; ) {
                  if (d = Te, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bu(9, d, d.return);
                    }
                  var z = d.sibling;
                  if (z !== null) {
                    z.return = d.return, Te = z;
                    break e;
                  }
                  Te = d.return;
                }
          }
          var N = n.current;
          for (Te = N; Te !== null; ) {
            S = Te;
            var F = S.child;
            if (S.subtreeFlags & 2064 && F !== null)
              F.return = S, Te = F;
            else
              e:
                for (S = N; Te !== null; ) {
                  if (w = Te, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          of(9, w);
                      }
                    } catch (Ue) {
                      xn(w, w.return, Ue);
                    }
                  if (w === S) {
                    Te = null;
                    break e;
                  }
                  var se = w.sibling;
                  if (se !== null) {
                    se.return = w.return, Te = se;
                    break e;
                  }
                  Te = w.return;
                }
          }
          if (St = c, Ri(), Wr && typeof Wr.onPostCommitFiberRoot == "function")
            try {
              Wr.onPostCommitFiberRoot(gl, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Rt = l, Ba.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = Fl(l, r), r = $v(n, r, 1), n = Ul(n, r, 1), r = $n(), n !== null && (El(n, 1, r), qn(n, r));
  }
  function xn(n, r, l) {
    if (n.tag === 3)
      vh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          vh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Va === null || !Va.has(u))) {
            n = Fl(l, n), n = eh(r, n, 1), r = Ul(r, n, 1), n = $n(), r !== null && (El(r, 1, n), qn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Py(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = $n(), n.pingedLanes |= n.suspendedLanes & l, bn === n && (Yn & l) === l && (Wn === 4 || Wn === 3 && (Yn & 130023424) === Yn && 500 > en() - cf ? Uo(n, 0) : qd |= l), qn(n, r);
  }
  function hh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Qo, Qo <<= 1, !(Qo & 130023424) && (Qo = 4194304)) : r = 1);
    var l = $n();
    n = $i(n, r), n !== null && (El(n, r, l), qn(n, l));
  }
  function Kd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), hh(n, l);
  }
  function By(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(y(314));
    }
    u !== null && u.delete(r), hh(n, l);
  }
  var mh;
  mh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || et.current)
        na = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return na = !1, tl(n, r, l);
        na = !!(n.flags & 131072);
      }
    else
      na = !1, un && r.flags & 1048576 && Ll(r, go, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ws(n, r), n = r.pendingProps;
        var c = Sa(r, Jn.current);
        kn(r, l), c = Co(null, r, u, n, c, l);
        var d = Al();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(u) ? (d = !0, yo(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ld(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, Md(r, u, n, l), r = ef(null, r, u, !0, d, l)) : (r.tag = 0, un && d && Nc(r), Nn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ws(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Vy(u), n = $r(u, n), c) {
            case 0:
              r = rt(null, r, u, n, l);
              break e;
            case 1:
              r = Vs(null, r, u, n, l);
              break e;
            case 11:
              r = Eu(null, r, u, n, l);
              break e;
            case 14:
              r = jl(null, r, u, $r(u.type, n), l);
              break e;
          }
          throw Error(y(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : $r(u, c), rt(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : $r(u, c), Vs(n, r, u, c, l);
      case 3:
        e: {
          if (Ny(r), n === null)
            throw Error(y(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Vv(n, r), Ls(r, u, null, l);
          var S = r.memoizedState;
          if (u = S.element, d.isDehydrated)
            if (d = { element: u, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Fl(Error(y(423)), r), r = rh(n, r, u, l, c);
              break e;
            } else if (u !== c) {
              c = Fl(Error(y(424)), r), r = rh(n, r, u, l, c);
              break e;
            } else
              for (Ra = ga(r.stateNode.containerInfo.firstChild), Ea = r, un = !0, Fa = null, l = Jv(r, null, u, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (su(), u === c) {
              r = Mn(n, r, l);
              break e;
            }
            Nn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fc(r), n === null && Uc(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, S = c.children, mo(u, c) ? S = null : d !== null && mo(u, d) && (r.flags |= 32), Do(n, r), Nn(n, r, S, l), r.child;
      case 6:
        return n === null && Uc(r), null;
      case 13:
        return ah(n, r, l);
      case 4:
        return Ud(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = vu(r, null, u, l) : Nn(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : $r(u, c), Eu(n, r, u, c, l);
      case 7:
        return Nn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, S = c.value, Mt(cu, u._currentValue), u._currentValue = S, d !== null)
            if (ii(d.value, S)) {
              if (d.children === c.children && !et.current) {
                r = Mn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  S = d.child;
                  for (var k = w.firstContext; k !== null; ) {
                    if (k.context === u) {
                      if (d.tag === 1) {
                        k = tn(-1, l & -l), k.tag = 2;
                        var B = d.updateQueue;
                        if (B !== null) {
                          B = B.shared;
                          var ae = B.pending;
                          ae === null ? k.next = k : (k.next = ae.next, ae.next = k), B.pending = k;
                        }
                      }
                      d.lanes |= l, k = d.alternate, k !== null && (k.lanes |= l), Nl(
                        d.return,
                        l,
                        r
                      ), w.lanes |= l;
                      break;
                    }
                    k = k.next;
                  }
                } else if (d.tag === 10)
                  S = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (S = d.return, S === null)
                    throw Error(y(341));
                  S.lanes |= l, w = S.alternate, w !== null && (w.lanes |= l), Nl(S, l, r), S = d.sibling;
                } else
                  S = d.child;
                if (S !== null)
                  S.return = d;
                else
                  for (S = d; S !== null; ) {
                    if (S === r) {
                      S = null;
                      break;
                    }
                    if (d = S.sibling, d !== null) {
                      d.return = S.return, S = d;
                      break;
                    }
                    S = S.return;
                  }
                d = S;
              }
          Nn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, kn(r, l), c = fe(c), u = u(c), r.flags |= 1, Nn(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = $r(u, r.pendingProps), c = $r(u.type, c), jl(n, r, u, c, l);
      case 15:
        return $c(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : $r(u, c), Ws(n, r), r.tag = 1, jn(u) ? (n = !0, yo(r)) : n = !1, kn(r, l), qv(r, u, c), Md(r, u, c, l), ef(null, r, u, !0, n, l);
      case 19:
        return Pd(n, r, l);
      case 22:
        return ra(n, r, l);
    }
    throw Error(y(156, r.tag));
  };
  function yh(n, r) {
    return Zt(n, r);
  }
  function gh(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Wa(n, r, l, u) {
    return new gh(n, r, l, u);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Vy(n) {
    if (typeof n == "function")
      return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ct)
        return 11;
      if (n === at)
        return 14;
    }
    return 2;
  }
  function Bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Wa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function yf(n, r, l, u, c, d) {
    var S = 2;
    if (u = n, typeof n == "function")
      Zd(n) && (S = 1);
    else if (typeof n == "string")
      S = 5;
    else
      e:
        switch (n) {
          case mt:
            return zo(l.children, c, d, r);
          case Ze:
            S = 8, c |= 8;
            break;
          case On:
            return n = Wa(12, l, r, c | 2), n.elementType = On, n.lanes = d, n;
          case rn:
            return n = Wa(13, l, r, c), n.elementType = rn, n.lanes = d, n;
          case Je:
            return n = Wa(19, l, r, c), n.elementType = Je, n.lanes = d, n;
          case it:
            return gf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Sn:
                  S = 10;
                  break e;
                case Jt:
                  S = 9;
                  break e;
                case Ct:
                  S = 11;
                  break e;
                case at:
                  S = 14;
                  break e;
                case Ot:
                  S = 16, u = null;
                  break e;
              }
            throw Error(y(130, n == null ? n : typeof n, ""));
        }
    return r = Wa(S, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function zo(n, r, l, u) {
    return n = Wa(7, n, u, r), n.lanes = l, n;
  }
  function gf(n, r, l, u) {
    return n = Wa(22, n, u, r), n.elementType = it, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Sf(n, r, l) {
    return n = Wa(6, n, null, r), n.lanes = l, n;
  }
  function Ks(n, r, l) {
    return r = Wa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Zs(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uo(0), this.expirationTimes = uo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uo(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function $d(n, r, l, u, c, d, S, w, k) {
    return n = new Zs(n, r, l, w, k), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Wa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ld(d), n;
  }
  function Sh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ne, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n)
      return za;
    n = n._reactInternals;
    e: {
      if (he(n) !== n || n.tag !== 1)
        throw Error(y(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (jn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (jn(l))
        return Dl(n, l, r);
    }
    return r;
  }
  function tp(n, r, l, u, c, d, S, w, k) {
    return n = $d(l, u, !0, n, c, d, S, w, k), n.context = ep(null), l = n.current, u = $n(), c = rl(l), d = tn(u, c), d.callback = r ?? null, Ul(l, d, c), n.current.lanes = c, El(n, c, u), qn(n, u), n;
  }
  function Ef(n, r, l, u) {
    var c = r.current, d = $n(), S = rl(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = tn(d, S), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Ul(c, r, S), n !== null && (yn(n, c, S, d), Ac(n, c, S)), S;
  }
  function $s(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Eh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function np(n, r) {
    Eh(n, r), (n = n.alternate) && Eh(n, r);
  }
  function Yy() {
    return null;
  }
  var rp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Rf(n) {
    this._internalRoot = n;
  }
  ec.prototype.render = Rf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(y(409));
    Ef(n, r, null, null);
  }, ec.prototype.unmount = Rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Di(function() {
        Ef(null, n, null, null);
      }), r[li] = null;
    }
  };
  function ec(n) {
    this._internalRoot = n;
  }
  ec.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Dt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ln.length && r !== 0 && r < ln[l].priority; l++)
        ;
      ln.splice(l, 0, n), l === 0 && ri(n);
    }
  };
  function Vl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Cf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Rh() {
  }
  function Wy(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var B = $s(S);
          d.call(B);
        };
      }
      var S = tp(r, u, n, 0, null, !1, !1, "", Rh);
      return n._reactRootContainer = S, n[li] = S.current, gi(n.nodeType === 8 ? n.parentNode : n), Di(), S;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var w = u;
      u = function() {
        var B = $s(k);
        w.call(B);
      };
    }
    var k = $d(n, 0, !1, null, null, !1, !1, "", Rh);
    return n._reactRootContainer = k, n[li] = k.current, gi(n.nodeType === 8 ? n.parentNode : n), Di(function() {
      Ef(r, k, l, u);
    }), k;
  }
  function Tf(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var S = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var k = $s(S);
          w.call(k);
        };
      }
      Ef(r, S, n, c);
    } else
      S = Wy(l, r, n, c, u);
    return $s(S);
  }
  Jo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Hi(r.pendingLanes);
          l !== 0 && (os(r, l | 1), qn(r, en()), !(St & 6) && (Nu = en() + 500, Ri()));
        }
        break;
      case 13:
        Di(function() {
          var u = $i(n, 1);
          if (u !== null) {
            var c = $n();
            yn(u, n, 1, c);
          }
        }), np(n, 1);
    }
  }, Rl = function(n) {
    if (n.tag === 13) {
      var r = $i(n, 134217728);
      if (r !== null) {
        var l = $n();
        yn(r, n, 134217728, l);
      }
      np(n, 134217728);
    }
  }, ss = function(n) {
    if (n.tag === 13) {
      var r = rl(n), l = $i(n, r);
      if (l !== null) {
        var u = $n();
        yn(l, n, r, u);
      }
      np(n, r);
    }
  }, Dt = function() {
    return Rt;
  }, Ko = function(n, r) {
    var l = Rt;
    try {
      return Rt = n, r();
    } finally {
      Rt = l;
    }
  }, Bt = function(n, r, l) {
    switch (r) {
      case "input":
        if (An(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = _c(u);
              if (!c)
                throw Error(y(90));
              Pr(u), An(u, c);
            }
          }
        }
        break;
      case "textarea":
        Er(n, l);
        break;
      case "select":
        r = l.value, r != null && Vn(n, !!l.multiple, r, !1);
    }
  }, ml = Jd, ro = Di;
  var qy = { usingClientEntryPoint: !1, Events: [Si, uu, _c, $a, ka, Jd] }, tc = { findFiberByHostInstance: Ki, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ch = { bundleType: tc.bundleType, version: tc.version, rendererPackageName: tc.rendererPackageName, rendererConfig: tc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Fe(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: tc.findFiberByHostInstance || Yy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wf.isDisabled && wf.supportsFiber)
      try {
        gl = wf.inject(Ch), Wr = wf;
      } catch {
      }
  }
  return Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qy, Za.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vl(r))
      throw Error(y(200));
    return Sh(n, r, null, l);
  }, Za.createRoot = function(n, r) {
    if (!Vl(n))
      throw Error(y(299));
    var l = !1, u = "", c = rp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = $d(n, 1, !1, null, null, l, !1, u, c), n[li] = r.current, gi(n.nodeType === 8 ? n.parentNode : n), new Rf(r);
  }, Za.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(y(188)) : (n = Object.keys(n).join(","), Error(y(268, n)));
    return n = Fe(r), n = n === null ? null : n.stateNode, n;
  }, Za.flushSync = function(n) {
    return Di(n);
  }, Za.hydrate = function(n, r, l) {
    if (!Cf(r))
      throw Error(y(200));
    return Tf(null, n, r, !0, l);
  }, Za.hydrateRoot = function(n, r, l) {
    if (!Vl(n))
      throw Error(y(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", S = rp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (S = l.onRecoverableError)), r = tp(r, null, n, 1, l ?? null, c, !1, d, S), n[li] = r.current, gi(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new ec(r);
  }, Za.render = function(n, r, l) {
    if (!Cf(r))
      throw Error(y(200));
    return Tf(null, n, r, !1, l);
  }, Za.unmountComponentAtNode = function(n) {
    if (!Cf(n))
      throw Error(y(40));
    return n._reactRootContainer ? (Di(function() {
      Tf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[li] = null;
      });
    }), !0) : !1;
  }, Za.unstable_batchedUpdates = Jd, Za.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Cf(l))
      throw Error(y(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(y(38));
    return Tf(n, r, l, !1, u);
  }, Za.version = "18.2.0-next-9e3b772b8-20220608", Za;
}
var sT = {};
function cT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (sT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT);
    } catch (p) {
      console.error(p);
    }
  }
}
sT.NODE_ENV === "production" ? (cT(), QS.exports = Nk()) : QS.exports = Lk();
var Mk = QS.exports, Uk = {}, rv = Mk;
if (Uk.NODE_ENV === "production")
  lv.createRoot = rv.createRoot, lv.hydrateRoot = rv.hydrateRoot;
else {
  var ey = rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  lv.createRoot = function(p, h) {
    ey.usingClientEntryPoint = !0;
    try {
      return rv.createRoot(p, h);
    } finally {
      ey.usingClientEntryPoint = !1;
    }
  }, lv.hydrateRoot = function(p, h, y) {
    ey.usingClientEntryPoint = !0;
    try {
      return rv.hydrateRoot(p, h, y);
    } finally {
      ey.usingClientEntryPoint = !1;
    }
  };
}
function fT(p, h) {
  return function() {
    return p.apply(h, arguments);
  };
}
const { toString: zk } = Object.prototype, { getPrototypeOf: tE } = Object, oy = /* @__PURE__ */ ((p) => (h) => {
  const y = zk.call(h);
  return p[y] || (p[y] = y.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), no = (p) => (p = p.toLowerCase(), (h) => oy(h) === p), uy = (p) => (h) => typeof h === p, { isArray: rd } = Array, ov = uy("undefined");
function Ak(p) {
  return p !== null && !ov(p) && p.constructor !== null && !ov(p.constructor) && Ai(p.constructor.isBuffer) && p.constructor.isBuffer(p);
}
const dT = no("ArrayBuffer");
function Ik(p) {
  let h;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? h = ArrayBuffer.isView(p) : h = p && p.buffer && dT(p.buffer), h;
}
const Fk = uy("string"), Ai = uy("function"), pT = uy("number"), sy = (p) => p !== null && typeof p == "object", jk = (p) => p === !0 || p === !1, ny = (p) => {
  if (oy(p) !== "object")
    return !1;
  const h = tE(p);
  return (h === null || h === Object.prototype || Object.getPrototypeOf(h) === null) && !(Symbol.toStringTag in p) && !(Symbol.iterator in p);
}, Hk = no("Date"), Pk = no("File"), Bk = no("Blob"), Vk = no("FileList"), Yk = (p) => sy(p) && Ai(p.pipe), Wk = (p) => {
  let h;
  return p && (typeof FormData == "function" && p instanceof FormData || Ai(p.append) && ((h = oy(p)) === "formdata" || // detect form-data instance
  h === "object" && Ai(p.toString) && p.toString() === "[object FormData]"));
}, qk = no("URLSearchParams"), Xk = (p) => p.trim ? p.trim() : p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function uv(p, h, { allOwnKeys: y = !1 } = {}) {
  if (p === null || typeof p > "u")
    return;
  let C, O;
  if (typeof p != "object" && (p = [p]), rd(p))
    for (C = 0, O = p.length; C < O; C++)
      h.call(null, p[C], C, p);
  else {
    const U = y ? Object.getOwnPropertyNames(p) : Object.keys(p), _ = U.length;
    let E;
    for (C = 0; C < _; C++)
      E = U[C], h.call(null, p[E], E, p);
  }
}
function vT(p, h) {
  h = h.toLowerCase();
  const y = Object.keys(p);
  let C = y.length, O;
  for (; C-- > 0; )
    if (O = y[C], h === O.toLowerCase())
      return O;
  return null;
}
const hT = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, mT = (p) => !ov(p) && p !== hT;
function JS() {
  const { caseless: p } = mT(this) && this || {}, h = {}, y = (C, O) => {
    const U = p && vT(h, O) || O;
    ny(h[U]) && ny(C) ? h[U] = JS(h[U], C) : ny(C) ? h[U] = JS({}, C) : rd(C) ? h[U] = C.slice() : h[U] = C;
  };
  for (let C = 0, O = arguments.length; C < O; C++)
    arguments[C] && uv(arguments[C], y);
  return h;
}
const Gk = (p, h, y, { allOwnKeys: C } = {}) => (uv(h, (O, U) => {
  y && Ai(O) ? p[U] = fT(O, y) : p[U] = O;
}, { allOwnKeys: C }), p), Qk = (p) => (p.charCodeAt(0) === 65279 && (p = p.slice(1)), p), Jk = (p, h, y, C) => {
  p.prototype = Object.create(h.prototype, C), p.prototype.constructor = p, Object.defineProperty(p, "super", {
    value: h.prototype
  }), y && Object.assign(p.prototype, y);
}, Kk = (p, h, y, C) => {
  let O, U, _;
  const E = {};
  if (h = h || {}, p == null)
    return h;
  do {
    for (O = Object.getOwnPropertyNames(p), U = O.length; U-- > 0; )
      _ = O[U], (!C || C(_, p, h)) && !E[_] && (h[_] = p[_], E[_] = !0);
    p = y !== !1 && tE(p);
  } while (p && (!y || y(p, h)) && p !== Object.prototype);
  return h;
}, Zk = (p, h, y) => {
  p = String(p), (y === void 0 || y > p.length) && (y = p.length), y -= h.length;
  const C = p.indexOf(h, y);
  return C !== -1 && C === y;
}, $k = (p) => {
  if (!p)
    return null;
  if (rd(p))
    return p;
  let h = p.length;
  if (!pT(h))
    return null;
  const y = new Array(h);
  for (; h-- > 0; )
    y[h] = p[h];
  return y;
}, e_ = /* @__PURE__ */ ((p) => (h) => p && h instanceof p)(typeof Uint8Array < "u" && tE(Uint8Array)), t_ = (p, h) => {
  const C = (p && p[Symbol.iterator]).call(p);
  let O;
  for (; (O = C.next()) && !O.done; ) {
    const U = O.value;
    h.call(p, U[0], U[1]);
  }
}, n_ = (p, h) => {
  let y;
  const C = [];
  for (; (y = p.exec(h)) !== null; )
    C.push(y);
  return C;
}, r_ = no("HTMLFormElement"), a_ = (p) => p.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(y, C, O) {
    return C.toUpperCase() + O;
  }
), JC = (({ hasOwnProperty: p }) => (h, y) => p.call(h, y))(Object.prototype), i_ = no("RegExp"), yT = (p, h) => {
  const y = Object.getOwnPropertyDescriptors(p), C = {};
  uv(y, (O, U) => {
    let _;
    (_ = h(O, U, p)) !== !1 && (C[U] = _ || O);
  }), Object.defineProperties(p, C);
}, l_ = (p) => {
  yT(p, (h, y) => {
    if (Ai(p) && ["arguments", "caller", "callee"].indexOf(y) !== -1)
      return !1;
    const C = p[y];
    if (Ai(C)) {
      if (h.enumerable = !1, "writable" in h) {
        h.writable = !1;
        return;
      }
      h.set || (h.set = () => {
        throw Error("Can not rewrite read-only method '" + y + "'");
      });
    }
  });
}, o_ = (p, h) => {
  const y = {}, C = (O) => {
    O.forEach((U) => {
      y[U] = !0;
    });
  };
  return rd(p) ? C(p) : C(String(p).split(h)), y;
}, u_ = () => {
}, s_ = (p, h) => (p = +p, Number.isFinite(p) ? p : h), HS = "abcdefghijklmnopqrstuvwxyz", KC = "0123456789", gT = {
  DIGIT: KC,
  ALPHA: HS,
  ALPHA_DIGIT: HS + HS.toUpperCase() + KC
}, c_ = (p = 16, h = gT.ALPHA_DIGIT) => {
  let y = "";
  const { length: C } = h;
  for (; p--; )
    y += h[Math.random() * C | 0];
  return y;
};
function f_(p) {
  return !!(p && Ai(p.append) && p[Symbol.toStringTag] === "FormData" && p[Symbol.iterator]);
}
const d_ = (p) => {
  const h = new Array(10), y = (C, O) => {
    if (sy(C)) {
      if (h.indexOf(C) >= 0)
        return;
      if (!("toJSON" in C)) {
        h[O] = C;
        const U = rd(C) ? [] : {};
        return uv(C, (_, E) => {
          const ce = y(_, O + 1);
          !ov(ce) && (U[E] = ce);
        }), h[O] = void 0, U;
      }
    }
    return C;
  };
  return y(p, 0);
}, p_ = no("AsyncFunction"), v_ = (p) => p && (sy(p) || Ai(p)) && Ai(p.then) && Ai(p.catch), ee = {
  isArray: rd,
  isArrayBuffer: dT,
  isBuffer: Ak,
  isFormData: Wk,
  isArrayBufferView: Ik,
  isString: Fk,
  isNumber: pT,
  isBoolean: jk,
  isObject: sy,
  isPlainObject: ny,
  isUndefined: ov,
  isDate: Hk,
  isFile: Pk,
  isBlob: Bk,
  isRegExp: i_,
  isFunction: Ai,
  isStream: Yk,
  isURLSearchParams: qk,
  isTypedArray: e_,
  isFileList: Vk,
  forEach: uv,
  merge: JS,
  extend: Gk,
  trim: Xk,
  stripBOM: Qk,
  inherits: Jk,
  toFlatObject: Kk,
  kindOf: oy,
  kindOfTest: no,
  endsWith: Zk,
  toArray: $k,
  forEachEntry: t_,
  matchAll: n_,
  isHTMLForm: r_,
  hasOwnProperty: JC,
  hasOwnProp: JC,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: yT,
  freezeMethods: l_,
  toObjectSet: o_,
  toCamelCase: a_,
  noop: u_,
  toFiniteNumber: s_,
  findKey: vT,
  global: hT,
  isContextDefined: mT,
  ALPHABET: gT,
  generateString: c_,
  isSpecCompliantForm: f_,
  toJSONObject: d_,
  isAsyncFn: p_,
  isThenable: v_
};
function It(p, h, y, C, O) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = p, this.name = "AxiosError", h && (this.code = h), y && (this.config = y), C && (this.request = C), O && (this.response = O);
}
ee.inherits(It, Error, {
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
      config: ee.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ST = It.prototype, ET = {};
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
  ET[p] = { value: p };
});
Object.defineProperties(It, ET);
Object.defineProperty(ST, "isAxiosError", { value: !0 });
It.from = (p, h, y, C, O, U) => {
  const _ = Object.create(ST);
  return ee.toFlatObject(p, _, function(ce) {
    return ce !== Error.prototype;
  }, (E) => E !== "isAxiosError"), It.call(_, p.message, h, y, C, O), _.cause = p, _.name = p.name, U && Object.assign(_, U), _;
};
const h_ = null;
function KS(p) {
  return ee.isPlainObject(p) || ee.isArray(p);
}
function RT(p) {
  return ee.endsWith(p, "[]") ? p.slice(0, -2) : p;
}
function ZC(p, h, y) {
  return p ? p.concat(h).map(function(O, U) {
    return O = RT(O), !y && U ? "[" + O + "]" : O;
  }).join(y ? "." : "") : h;
}
function m_(p) {
  return ee.isArray(p) && !p.some(KS);
}
const y_ = ee.toFlatObject(ee, {}, null, function(h) {
  return /^is[A-Z]/.test(h);
});
function cy(p, h, y) {
  if (!ee.isObject(p))
    throw new TypeError("target must be an object");
  h = h || new FormData(), y = ee.toFlatObject(y, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(J, xe) {
    return !ee.isUndefined(xe[J]);
  });
  const C = y.metaTokens, O = y.visitor || W, U = y.dots, _ = y.indexes, ce = (y.Blob || typeof Blob < "u" && Blob) && ee.isSpecCompliantForm(h);
  if (!ee.isFunction(O))
    throw new TypeError("visitor must be a function");
  function re(G) {
    if (G === null)
      return "";
    if (ee.isDate(G))
      return G.toISOString();
    if (!ce && ee.isBlob(G))
      throw new It("Blob is not supported. Use a Buffer instead.");
    return ee.isArrayBuffer(G) || ee.isTypedArray(G) ? ce && typeof Blob == "function" ? new Blob([G]) : Buffer.from(G) : G;
  }
  function W(G, J, xe) {
    let ht = G;
    if (G && !xe && typeof G == "object") {
      if (ee.endsWith(J, "{}"))
        J = C ? J : J.slice(0, -2), G = JSON.stringify(G);
      else if (ee.isArray(G) && m_(G) || (ee.isFileList(G) || ee.endsWith(J, "[]")) && (ht = ee.toArray(G)))
        return J = RT(J), ht.forEach(function(Qe, Be) {
          !(ee.isUndefined(Qe) || Qe === null) && h.append(
            // eslint-disable-next-line no-nested-ternary
            _ === !0 ? ZC([J], Be, U) : _ === null ? J : J + "[]",
            re(Qe)
          );
        }), !1;
    }
    return KS(G) ? !0 : (h.append(ZC(xe, J, U), re(G)), !1);
  }
  const Y = [], ie = Object.assign(y_, {
    defaultVisitor: W,
    convertValue: re,
    isVisitable: KS
  });
  function Se(G, J) {
    if (!ee.isUndefined(G)) {
      if (Y.indexOf(G) !== -1)
        throw Error("Circular reference detected in " + J.join("."));
      Y.push(G), ee.forEach(G, function(ht, ct) {
        (!(ee.isUndefined(ht) || ht === null) && O.call(
          h,
          ht,
          ee.isString(ct) ? ct.trim() : ct,
          J,
          ie
        )) === !0 && Se(ht, J ? J.concat(ct) : [ct]);
      }), Y.pop();
    }
  }
  if (!ee.isObject(p))
    throw new TypeError("data must be an object");
  return Se(p), h;
}
function $C(p) {
  const h = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g, function(C) {
    return h[C];
  });
}
function nE(p, h) {
  this._pairs = [], p && cy(p, this, h);
}
const CT = nE.prototype;
CT.append = function(h, y) {
  this._pairs.push([h, y]);
};
CT.toString = function(h) {
  const y = h ? function(C) {
    return h.call(this, C, $C);
  } : $C;
  return this._pairs.map(function(O) {
    return y(O[0]) + "=" + y(O[1]);
  }, "").join("&");
};
function g_(p) {
  return encodeURIComponent(p).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function TT(p, h, y) {
  if (!h)
    return p;
  const C = y && y.encode || g_, O = y && y.serialize;
  let U;
  if (O ? U = O(h, y) : U = ee.isURLSearchParams(h) ? h.toString() : new nE(h, y).toString(C), U) {
    const _ = p.indexOf("#");
    _ !== -1 && (p = p.slice(0, _)), p += (p.indexOf("?") === -1 ? "?" : "&") + U;
  }
  return p;
}
class S_ {
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
  use(h, y, C) {
    return this.handlers.push({
      fulfilled: h,
      rejected: y,
      synchronous: C ? C.synchronous : !1,
      runWhen: C ? C.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(h) {
    this.handlers[h] && (this.handlers[h] = null);
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
  forEach(h) {
    ee.forEach(this.handlers, function(C) {
      C !== null && h(C);
    });
  }
}
const eT = S_, wT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, E_ = typeof URLSearchParams < "u" ? URLSearchParams : nE, R_ = typeof FormData < "u" ? FormData : null, C_ = typeof Blob < "u" ? Blob : null, T_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: E_,
    FormData: R_,
    Blob: C_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bT = typeof window < "u" && typeof document < "u", w_ = ((p) => bT && ["ReactNative", "NativeScript", "NS"].indexOf(p) < 0)(typeof navigator < "u" && navigator.product), b_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", x_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bT,
  hasStandardBrowserEnv: w_,
  hasStandardBrowserWebWorkerEnv: b_
}, Symbol.toStringTag, { value: "Module" })), eo = {
  ...x_,
  ...T_
};
function O_(p, h) {
  return cy(p, new eo.classes.URLSearchParams(), Object.assign({
    visitor: function(y, C, O, U) {
      return eo.isNode && ee.isBuffer(y) ? (this.append(C, y.toString("base64")), !1) : U.defaultVisitor.apply(this, arguments);
    }
  }, h));
}
function D_(p) {
  return ee.matchAll(/\w+|\[(\w*)]/g, p).map((h) => h[0] === "[]" ? "" : h[1] || h[0]);
}
function k_(p) {
  const h = {}, y = Object.keys(p);
  let C;
  const O = y.length;
  let U;
  for (C = 0; C < O; C++)
    U = y[C], h[U] = p[U];
  return h;
}
function xT(p) {
  function h(y, C, O, U) {
    let _ = y[U++];
    const E = Number.isFinite(+_), ce = U >= y.length;
    return _ = !_ && ee.isArray(O) ? O.length : _, ce ? (ee.hasOwnProp(O, _) ? O[_] = [O[_], C] : O[_] = C, !E) : ((!O[_] || !ee.isObject(O[_])) && (O[_] = []), h(y, C, O[_], U) && ee.isArray(O[_]) && (O[_] = k_(O[_])), !E);
  }
  if (ee.isFormData(p) && ee.isFunction(p.entries)) {
    const y = {};
    return ee.forEachEntry(p, (C, O) => {
      h(D_(C), O, y, 0);
    }), y;
  }
  return null;
}
function __(p, h, y) {
  if (ee.isString(p))
    try {
      return (h || JSON.parse)(p), ee.trim(p);
    } catch (C) {
      if (C.name !== "SyntaxError")
        throw C;
    }
  return (y || JSON.stringify)(p);
}
const rE = {
  transitional: wT,
  adapter: ["xhr", "http"],
  transformRequest: [function(h, y) {
    const C = y.getContentType() || "", O = C.indexOf("application/json") > -1, U = ee.isObject(h);
    if (U && ee.isHTMLForm(h) && (h = new FormData(h)), ee.isFormData(h))
      return O && O ? JSON.stringify(xT(h)) : h;
    if (ee.isArrayBuffer(h) || ee.isBuffer(h) || ee.isStream(h) || ee.isFile(h) || ee.isBlob(h))
      return h;
    if (ee.isArrayBufferView(h))
      return h.buffer;
    if (ee.isURLSearchParams(h))
      return y.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), h.toString();
    let E;
    if (U) {
      if (C.indexOf("application/x-www-form-urlencoded") > -1)
        return O_(h, this.formSerializer).toString();
      if ((E = ee.isFileList(h)) || C.indexOf("multipart/form-data") > -1) {
        const ce = this.env && this.env.FormData;
        return cy(
          E ? { "files[]": h } : h,
          ce && new ce(),
          this.formSerializer
        );
      }
    }
    return U || O ? (y.setContentType("application/json", !1), __(h)) : h;
  }],
  transformResponse: [function(h) {
    const y = this.transitional || rE.transitional, C = y && y.forcedJSONParsing, O = this.responseType === "json";
    if (h && ee.isString(h) && (C && !this.responseType || O)) {
      const _ = !(y && y.silentJSONParsing) && O;
      try {
        return JSON.parse(h);
      } catch (E) {
        if (_)
          throw E.name === "SyntaxError" ? It.from(E, It.ERR_BAD_RESPONSE, this, null, this.response) : E;
      }
    }
    return h;
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
    FormData: eo.classes.FormData,
    Blob: eo.classes.Blob
  },
  validateStatus: function(h) {
    return h >= 200 && h < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
ee.forEach(["delete", "get", "head", "post", "put", "patch"], (p) => {
  rE.headers[p] = {};
});
const aE = rE, L_ = ee.toObjectSet([
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
]), N_ = (p) => {
  const h = {};
  let y, C, O;
  return p && p.split(`
`).forEach(function(_) {
    O = _.indexOf(":"), y = _.substring(0, O).trim().toLowerCase(), C = _.substring(O + 1).trim(), !(!y || h[y] && L_[y]) && (y === "set-cookie" ? h[y] ? h[y].push(C) : h[y] = [C] : h[y] = h[y] ? h[y] + ", " + C : C);
  }), h;
}, tT = Symbol("internals");
function av(p) {
  return p && String(p).trim().toLowerCase();
}
function ry(p) {
  return p === !1 || p == null ? p : ee.isArray(p) ? p.map(ry) : String(p);
}
function M_(p) {
  const h = /* @__PURE__ */ Object.create(null), y = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let C;
  for (; C = y.exec(p); )
    h[C[1]] = C[2];
  return h;
}
const U_ = (p) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(p.trim());
function PS(p, h, y, C, O) {
  if (ee.isFunction(C))
    return C.call(this, h, y);
  if (O && (h = y), !!ee.isString(h)) {
    if (ee.isString(C))
      return h.indexOf(C) !== -1;
    if (ee.isRegExp(C))
      return C.test(h);
  }
}
function z_(p) {
  return p.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (h, y, C) => y.toUpperCase() + C);
}
function A_(p, h) {
  const y = ee.toCamelCase(" " + h);
  ["get", "set", "has"].forEach((C) => {
    Object.defineProperty(p, C + y, {
      value: function(O, U, _) {
        return this[C].call(this, h, O, U, _);
      },
      configurable: !0
    });
  });
}
class fy {
  constructor(h) {
    h && this.set(h);
  }
  set(h, y, C) {
    const O = this;
    function U(E, ce, re) {
      const W = av(ce);
      if (!W)
        throw new Error("header name must be a non-empty string");
      const Y = ee.findKey(O, W);
      (!Y || O[Y] === void 0 || re === !0 || re === void 0 && O[Y] !== !1) && (O[Y || ce] = ry(E));
    }
    const _ = (E, ce) => ee.forEach(E, (re, W) => U(re, W, ce));
    return ee.isPlainObject(h) || h instanceof this.constructor ? _(h, y) : ee.isString(h) && (h = h.trim()) && !U_(h) ? _(N_(h), y) : h != null && U(y, h, C), this;
  }
  get(h, y) {
    if (h = av(h), h) {
      const C = ee.findKey(this, h);
      if (C) {
        const O = this[C];
        if (!y)
          return O;
        if (y === !0)
          return M_(O);
        if (ee.isFunction(y))
          return y.call(this, O, C);
        if (ee.isRegExp(y))
          return y.exec(O);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(h, y) {
    if (h = av(h), h) {
      const C = ee.findKey(this, h);
      return !!(C && this[C] !== void 0 && (!y || PS(this, this[C], C, y)));
    }
    return !1;
  }
  delete(h, y) {
    const C = this;
    let O = !1;
    function U(_) {
      if (_ = av(_), _) {
        const E = ee.findKey(C, _);
        E && (!y || PS(C, C[E], E, y)) && (delete C[E], O = !0);
      }
    }
    return ee.isArray(h) ? h.forEach(U) : U(h), O;
  }
  clear(h) {
    const y = Object.keys(this);
    let C = y.length, O = !1;
    for (; C--; ) {
      const U = y[C];
      (!h || PS(this, this[U], U, h, !0)) && (delete this[U], O = !0);
    }
    return O;
  }
  normalize(h) {
    const y = this, C = {};
    return ee.forEach(this, (O, U) => {
      const _ = ee.findKey(C, U);
      if (_) {
        y[_] = ry(O), delete y[U];
        return;
      }
      const E = h ? z_(U) : String(U).trim();
      E !== U && delete y[U], y[E] = ry(O), C[E] = !0;
    }), this;
  }
  concat(...h) {
    return this.constructor.concat(this, ...h);
  }
  toJSON(h) {
    const y = /* @__PURE__ */ Object.create(null);
    return ee.forEach(this, (C, O) => {
      C != null && C !== !1 && (y[O] = h && ee.isArray(C) ? C.join(", ") : C);
    }), y;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([h, y]) => h + ": " + y).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(h) {
    return h instanceof this ? h : new this(h);
  }
  static concat(h, ...y) {
    const C = new this(h);
    return y.forEach((O) => C.set(O)), C;
  }
  static accessor(h) {
    const C = (this[tT] = this[tT] = {
      accessors: {}
    }).accessors, O = this.prototype;
    function U(_) {
      const E = av(_);
      C[E] || (A_(O, _), C[E] = !0);
    }
    return ee.isArray(h) ? h.forEach(U) : U(h), this;
  }
}
fy.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ee.reduceDescriptors(fy.prototype, ({ value: p }, h) => {
  let y = h[0].toUpperCase() + h.slice(1);
  return {
    get: () => p,
    set(C) {
      this[y] = C;
    }
  };
});
ee.freezeMethods(fy);
const Go = fy;
function BS(p, h) {
  const y = this || aE, C = h || y, O = Go.from(C.headers);
  let U = C.data;
  return ee.forEach(p, function(E) {
    U = E.call(y, U, O.normalize(), h ? h.status : void 0);
  }), O.normalize(), U;
}
function OT(p) {
  return !!(p && p.__CANCEL__);
}
function sv(p, h, y) {
  It.call(this, p ?? "canceled", It.ERR_CANCELED, h, y), this.name = "CanceledError";
}
ee.inherits(sv, It, {
  __CANCEL__: !0
});
function I_(p, h, y) {
  const C = y.config.validateStatus;
  !y.status || !C || C(y.status) ? p(y) : h(new It(
    "Request failed with status code " + y.status,
    [It.ERR_BAD_REQUEST, It.ERR_BAD_RESPONSE][Math.floor(y.status / 100) - 4],
    y.config,
    y.request,
    y
  ));
}
const F_ = eo.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(p, h, y, C, O, U) {
      const _ = [p + "=" + encodeURIComponent(h)];
      ee.isNumber(y) && _.push("expires=" + new Date(y).toGMTString()), ee.isString(C) && _.push("path=" + C), ee.isString(O) && _.push("domain=" + O), U === !0 && _.push("secure"), document.cookie = _.join("; ");
    },
    read(p) {
      const h = document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"));
      return h ? decodeURIComponent(h[3]) : null;
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
function j_(p) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(p);
}
function H_(p, h) {
  return h ? p.replace(/\/+$/, "") + "/" + h.replace(/^\/+/, "") : p;
}
function DT(p, h) {
  return p && !j_(h) ? H_(p, h) : h;
}
const P_ = eo.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const h = /(msie|trident)/i.test(navigator.userAgent), y = document.createElement("a");
    let C;
    function O(U) {
      let _ = U;
      return h && (y.setAttribute("href", _), _ = y.href), y.setAttribute("href", _), {
        href: y.href,
        protocol: y.protocol ? y.protocol.replace(/:$/, "") : "",
        host: y.host,
        search: y.search ? y.search.replace(/^\?/, "") : "",
        hash: y.hash ? y.hash.replace(/^#/, "") : "",
        hostname: y.hostname,
        port: y.port,
        pathname: y.pathname.charAt(0) === "/" ? y.pathname : "/" + y.pathname
      };
    }
    return C = O(window.location.href), function(_) {
      const E = ee.isString(_) ? O(_) : _;
      return E.protocol === C.protocol && E.host === C.host;
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
function B_(p) {
  const h = /^([-+\w]{1,25})(:?\/\/|:)/.exec(p);
  return h && h[1] || "";
}
function V_(p, h) {
  p = p || 10;
  const y = new Array(p), C = new Array(p);
  let O = 0, U = 0, _;
  return h = h !== void 0 ? h : 1e3, function(ce) {
    const re = Date.now(), W = C[U];
    _ || (_ = re), y[O] = ce, C[O] = re;
    let Y = U, ie = 0;
    for (; Y !== O; )
      ie += y[Y++], Y = Y % p;
    if (O = (O + 1) % p, O === U && (U = (U + 1) % p), re - _ < h)
      return;
    const Se = W && re - W;
    return Se ? Math.round(ie * 1e3 / Se) : void 0;
  };
}
function nT(p, h) {
  let y = 0;
  const C = V_(50, 250);
  return (O) => {
    const U = O.loaded, _ = O.lengthComputable ? O.total : void 0, E = U - y, ce = C(E), re = U <= _;
    y = U;
    const W = {
      loaded: U,
      total: _,
      progress: _ ? U / _ : void 0,
      bytes: E,
      rate: ce || void 0,
      estimated: ce && _ && re ? (_ - U) / ce : void 0,
      event: O
    };
    W[h ? "download" : "upload"] = !0, p(W);
  };
}
const Y_ = typeof XMLHttpRequest < "u", W_ = Y_ && function(p) {
  return new Promise(function(y, C) {
    let O = p.data;
    const U = Go.from(p.headers).normalize();
    let { responseType: _, withXSRFToken: E } = p, ce;
    function re() {
      p.cancelToken && p.cancelToken.unsubscribe(ce), p.signal && p.signal.removeEventListener("abort", ce);
    }
    let W;
    if (ee.isFormData(O)) {
      if (eo.hasStandardBrowserEnv || eo.hasStandardBrowserWebWorkerEnv)
        U.setContentType(!1);
      else if ((W = U.getContentType()) !== !1) {
        const [J, ...xe] = W ? W.split(";").map((ht) => ht.trim()).filter(Boolean) : [];
        U.setContentType([J || "multipart/form-data", ...xe].join("; "));
      }
    }
    let Y = new XMLHttpRequest();
    if (p.auth) {
      const J = p.auth.username || "", xe = p.auth.password ? unescape(encodeURIComponent(p.auth.password)) : "";
      U.set("Authorization", "Basic " + btoa(J + ":" + xe));
    }
    const ie = DT(p.baseURL, p.url);
    Y.open(p.method.toUpperCase(), TT(ie, p.params, p.paramsSerializer), !0), Y.timeout = p.timeout;
    function Se() {
      if (!Y)
        return;
      const J = Go.from(
        "getAllResponseHeaders" in Y && Y.getAllResponseHeaders()
      ), ht = {
        data: !_ || _ === "text" || _ === "json" ? Y.responseText : Y.response,
        status: Y.status,
        statusText: Y.statusText,
        headers: J,
        config: p,
        request: Y
      };
      I_(function(Qe) {
        y(Qe), re();
      }, function(Qe) {
        C(Qe), re();
      }, ht), Y = null;
    }
    if ("onloadend" in Y ? Y.onloadend = Se : Y.onreadystatechange = function() {
      !Y || Y.readyState !== 4 || Y.status === 0 && !(Y.responseURL && Y.responseURL.indexOf("file:") === 0) || setTimeout(Se);
    }, Y.onabort = function() {
      Y && (C(new It("Request aborted", It.ECONNABORTED, p, Y)), Y = null);
    }, Y.onerror = function() {
      C(new It("Network Error", It.ERR_NETWORK, p, Y)), Y = null;
    }, Y.ontimeout = function() {
      let xe = p.timeout ? "timeout of " + p.timeout + "ms exceeded" : "timeout exceeded";
      const ht = p.transitional || wT;
      p.timeoutErrorMessage && (xe = p.timeoutErrorMessage), C(new It(
        xe,
        ht.clarifyTimeoutError ? It.ETIMEDOUT : It.ECONNABORTED,
        p,
        Y
      )), Y = null;
    }, eo.hasStandardBrowserEnv && (E && ee.isFunction(E) && (E = E(p)), E || E !== !1 && P_(ie))) {
      const J = p.xsrfHeaderName && p.xsrfCookieName && F_.read(p.xsrfCookieName);
      J && U.set(p.xsrfHeaderName, J);
    }
    O === void 0 && U.setContentType(null), "setRequestHeader" in Y && ee.forEach(U.toJSON(), function(xe, ht) {
      Y.setRequestHeader(ht, xe);
    }), ee.isUndefined(p.withCredentials) || (Y.withCredentials = !!p.withCredentials), _ && _ !== "json" && (Y.responseType = p.responseType), typeof p.onDownloadProgress == "function" && Y.addEventListener("progress", nT(p.onDownloadProgress, !0)), typeof p.onUploadProgress == "function" && Y.upload && Y.upload.addEventListener("progress", nT(p.onUploadProgress)), (p.cancelToken || p.signal) && (ce = (J) => {
      Y && (C(!J || J.type ? new sv(null, p, Y) : J), Y.abort(), Y = null);
    }, p.cancelToken && p.cancelToken.subscribe(ce), p.signal && (p.signal.aborted ? ce() : p.signal.addEventListener("abort", ce)));
    const G = B_(ie);
    if (G && eo.protocols.indexOf(G) === -1) {
      C(new It("Unsupported protocol " + G + ":", It.ERR_BAD_REQUEST, p));
      return;
    }
    Y.send(O || null);
  });
}, ZS = {
  http: h_,
  xhr: W_
};
ee.forEach(ZS, (p, h) => {
  if (p) {
    try {
      Object.defineProperty(p, "name", { value: h });
    } catch {
    }
    Object.defineProperty(p, "adapterName", { value: h });
  }
});
const rT = (p) => `- ${p}`, q_ = (p) => ee.isFunction(p) || p === null || p === !1, kT = {
  getAdapter: (p) => {
    p = ee.isArray(p) ? p : [p];
    const { length: h } = p;
    let y, C;
    const O = {};
    for (let U = 0; U < h; U++) {
      y = p[U];
      let _;
      if (C = y, !q_(y) && (C = ZS[(_ = String(y)).toLowerCase()], C === void 0))
        throw new It(`Unknown adapter '${_}'`);
      if (C)
        break;
      O[_ || "#" + U] = C;
    }
    if (!C) {
      const U = Object.entries(O).map(
        ([E, ce]) => `adapter ${E} ` + (ce === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let _ = h ? U.length > 1 ? `since :
` + U.map(rT).join(`
`) : " " + rT(U[0]) : "as no adapter specified";
      throw new It(
        "There is no suitable adapter to dispatch the request " + _,
        "ERR_NOT_SUPPORT"
      );
    }
    return C;
  },
  adapters: ZS
};
function VS(p) {
  if (p.cancelToken && p.cancelToken.throwIfRequested(), p.signal && p.signal.aborted)
    throw new sv(null, p);
}
function aT(p) {
  return VS(p), p.headers = Go.from(p.headers), p.data = BS.call(
    p,
    p.transformRequest
  ), ["post", "put", "patch"].indexOf(p.method) !== -1 && p.headers.setContentType("application/x-www-form-urlencoded", !1), kT.getAdapter(p.adapter || aE.adapter)(p).then(function(C) {
    return VS(p), C.data = BS.call(
      p,
      p.transformResponse,
      C
    ), C.headers = Go.from(C.headers), C;
  }, function(C) {
    return OT(C) || (VS(p), C && C.response && (C.response.data = BS.call(
      p,
      p.transformResponse,
      C.response
    ), C.response.headers = Go.from(C.response.headers))), Promise.reject(C);
  });
}
const iT = (p) => p instanceof Go ? p.toJSON() : p;
function td(p, h) {
  h = h || {};
  const y = {};
  function C(re, W, Y) {
    return ee.isPlainObject(re) && ee.isPlainObject(W) ? ee.merge.call({ caseless: Y }, re, W) : ee.isPlainObject(W) ? ee.merge({}, W) : ee.isArray(W) ? W.slice() : W;
  }
  function O(re, W, Y) {
    if (ee.isUndefined(W)) {
      if (!ee.isUndefined(re))
        return C(void 0, re, Y);
    } else
      return C(re, W, Y);
  }
  function U(re, W) {
    if (!ee.isUndefined(W))
      return C(void 0, W);
  }
  function _(re, W) {
    if (ee.isUndefined(W)) {
      if (!ee.isUndefined(re))
        return C(void 0, re);
    } else
      return C(void 0, W);
  }
  function E(re, W, Y) {
    if (Y in h)
      return C(re, W);
    if (Y in p)
      return C(void 0, re);
  }
  const ce = {
    url: U,
    method: U,
    data: U,
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
    validateStatus: E,
    headers: (re, W) => O(iT(re), iT(W), !0)
  };
  return ee.forEach(Object.keys(Object.assign({}, p, h)), function(W) {
    const Y = ce[W] || O, ie = Y(p[W], h[W], W);
    ee.isUndefined(ie) && Y !== E || (y[W] = ie);
  }), y;
}
const _T = "1.6.2", iE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((p, h) => {
  iE[p] = function(C) {
    return typeof C === p || "a" + (h < 1 ? "n " : " ") + p;
  };
});
const lT = {};
iE.transitional = function(h, y, C) {
  function O(U, _) {
    return "[Axios v" + _T + "] Transitional option '" + U + "'" + _ + (C ? ". " + C : "");
  }
  return (U, _, E) => {
    if (h === !1)
      throw new It(
        O(_, " has been removed" + (y ? " in " + y : "")),
        It.ERR_DEPRECATED
      );
    return y && !lT[_] && (lT[_] = !0, console.warn(
      O(
        _,
        " has been deprecated since v" + y + " and will be removed in the near future"
      )
    )), h ? h(U, _, E) : !0;
  };
};
function X_(p, h, y) {
  if (typeof p != "object")
    throw new It("options must be an object", It.ERR_BAD_OPTION_VALUE);
  const C = Object.keys(p);
  let O = C.length;
  for (; O-- > 0; ) {
    const U = C[O], _ = h[U];
    if (_) {
      const E = p[U], ce = E === void 0 || _(E, U, p);
      if (ce !== !0)
        throw new It("option " + U + " must be " + ce, It.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (y !== !0)
      throw new It("Unknown option " + U, It.ERR_BAD_OPTION);
  }
}
const $S = {
  assertOptions: X_,
  validators: iE
}, es = $S.validators;
class iy {
  constructor(h) {
    this.defaults = h, this.interceptors = {
      request: new eT(),
      response: new eT()
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
  request(h, y) {
    typeof h == "string" ? (y = y || {}, y.url = h) : y = h || {}, y = td(this.defaults, y);
    const { transitional: C, paramsSerializer: O, headers: U } = y;
    C !== void 0 && $S.assertOptions(C, {
      silentJSONParsing: es.transitional(es.boolean),
      forcedJSONParsing: es.transitional(es.boolean),
      clarifyTimeoutError: es.transitional(es.boolean)
    }, !1), O != null && (ee.isFunction(O) ? y.paramsSerializer = {
      serialize: O
    } : $S.assertOptions(O, {
      encode: es.function,
      serialize: es.function
    }, !0)), y.method = (y.method || this.defaults.method || "get").toLowerCase();
    let _ = U && ee.merge(
      U.common,
      U[y.method]
    );
    U && ee.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (G) => {
        delete U[G];
      }
    ), y.headers = Go.concat(_, U);
    const E = [];
    let ce = !0;
    this.interceptors.request.forEach(function(J) {
      typeof J.runWhen == "function" && J.runWhen(y) === !1 || (ce = ce && J.synchronous, E.unshift(J.fulfilled, J.rejected));
    });
    const re = [];
    this.interceptors.response.forEach(function(J) {
      re.push(J.fulfilled, J.rejected);
    });
    let W, Y = 0, ie;
    if (!ce) {
      const G = [aT.bind(this), void 0];
      for (G.unshift.apply(G, E), G.push.apply(G, re), ie = G.length, W = Promise.resolve(y); Y < ie; )
        W = W.then(G[Y++], G[Y++]);
      return W;
    }
    ie = E.length;
    let Se = y;
    for (Y = 0; Y < ie; ) {
      const G = E[Y++], J = E[Y++];
      try {
        Se = G(Se);
      } catch (xe) {
        J.call(this, xe);
        break;
      }
    }
    try {
      W = aT.call(this, Se);
    } catch (G) {
      return Promise.reject(G);
    }
    for (Y = 0, ie = re.length; Y < ie; )
      W = W.then(re[Y++], re[Y++]);
    return W;
  }
  getUri(h) {
    h = td(this.defaults, h);
    const y = DT(h.baseURL, h.url);
    return TT(y, h.params, h.paramsSerializer);
  }
}
ee.forEach(["delete", "get", "head", "options"], function(h) {
  iy.prototype[h] = function(y, C) {
    return this.request(td(C || {}, {
      method: h,
      url: y,
      data: (C || {}).data
    }));
  };
});
ee.forEach(["post", "put", "patch"], function(h) {
  function y(C) {
    return function(U, _, E) {
      return this.request(td(E || {}, {
        method: h,
        headers: C ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: U,
        data: _
      }));
    };
  }
  iy.prototype[h] = y(), iy.prototype[h + "Form"] = y(!0);
});
const ay = iy;
class lE {
  constructor(h) {
    if (typeof h != "function")
      throw new TypeError("executor must be a function.");
    let y;
    this.promise = new Promise(function(U) {
      y = U;
    });
    const C = this;
    this.promise.then((O) => {
      if (!C._listeners)
        return;
      let U = C._listeners.length;
      for (; U-- > 0; )
        C._listeners[U](O);
      C._listeners = null;
    }), this.promise.then = (O) => {
      let U;
      const _ = new Promise((E) => {
        C.subscribe(E), U = E;
      }).then(O);
      return _.cancel = function() {
        C.unsubscribe(U);
      }, _;
    }, h(function(U, _, E) {
      C.reason || (C.reason = new sv(U, _, E), y(C.reason));
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
  subscribe(h) {
    if (this.reason) {
      h(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(h) : this._listeners = [h];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(h) {
    if (!this._listeners)
      return;
    const y = this._listeners.indexOf(h);
    y !== -1 && this._listeners.splice(y, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let h;
    return {
      token: new lE(function(O) {
        h = O;
      }),
      cancel: h
    };
  }
}
const G_ = lE;
function Q_(p) {
  return function(y) {
    return p.apply(null, y);
  };
}
function J_(p) {
  return ee.isObject(p) && p.isAxiosError === !0;
}
const eE = {
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
Object.entries(eE).forEach(([p, h]) => {
  eE[h] = p;
});
const K_ = eE;
function LT(p) {
  const h = new ay(p), y = fT(ay.prototype.request, h);
  return ee.extend(y, ay.prototype, h, { allOwnKeys: !0 }), ee.extend(y, h, null, { allOwnKeys: !0 }), y.create = function(O) {
    return LT(td(p, O));
  }, y;
}
const tr = LT(aE);
tr.Axios = ay;
tr.CanceledError = sv;
tr.CancelToken = G_;
tr.isCancel = OT;
tr.VERSION = _T;
tr.toFormData = cy;
tr.AxiosError = It;
tr.Cancel = tr.CanceledError;
tr.all = function(h) {
  return Promise.all(h);
};
tr.spread = Q_;
tr.isAxiosError = J_;
tr.mergeConfig = td;
tr.AxiosHeaders = Go;
tr.formToJSON = (p) => xT(ee.isHTMLForm(p) ? new FormData(p) : p);
tr.getAdapter = kT.getAdapter;
tr.HttpStatusCode = K_;
tr.default = tr;
const Z_ = tr;
var NT = {}, nd = {};
Object.defineProperty(nd, "__esModule", { value: !0 });
nd.cssValue = nd.parseLengthAndUnit = void 0;
var $_ = {
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
function MT(p) {
  if (typeof p == "number")
    return {
      value: p,
      unit: "px"
    };
  var h, y = (p.match(/^[0-9.]*/) || "").toString();
  y.includes(".") ? h = parseFloat(y) : h = parseInt(y, 10);
  var C = (p.match(/[^0-9]*$/) || "").toString();
  return $_[C] ? {
    value: h,
    unit: C
  } : (console.warn("React Spinners: ".concat(p, " is not a valid css value. Defaulting to ").concat(h, "px.")), {
    value: h,
    unit: "px"
  });
}
nd.parseLengthAndUnit = MT;
function eL(p) {
  var h = MT(p);
  return "".concat(h.value).concat(h.unit);
}
nd.cssValue = eL;
var dy = {};
Object.defineProperty(dy, "__esModule", { value: !0 });
dy.createAnimation = void 0;
var tL = function(p, h, y) {
  var C = "react-spinners-".concat(p, "-").concat(y);
  if (typeof window > "u" || !window.document)
    return C;
  var O = document.createElement("style");
  document.head.appendChild(O);
  var U = O.sheet, _ = `
    @keyframes `.concat(C, ` {
      `).concat(h, `
    }
  `);
  return U && U.insertRule(_, 0), C;
};
dy.createAnimation = tL;
var ly = to && to.__assign || function() {
  return ly = Object.assign || function(p) {
    for (var h, y = 1, C = arguments.length; y < C; y++) {
      h = arguments[y];
      for (var O in h)
        Object.prototype.hasOwnProperty.call(h, O) && (p[O] = h[O]);
    }
    return p;
  }, ly.apply(this, arguments);
}, nL = to && to.__createBinding || (Object.create ? function(p, h, y, C) {
  C === void 0 && (C = y);
  var O = Object.getOwnPropertyDescriptor(h, y);
  (!O || ("get" in O ? !h.__esModule : O.writable || O.configurable)) && (O = { enumerable: !0, get: function() {
    return h[y];
  } }), Object.defineProperty(p, C, O);
} : function(p, h, y, C) {
  C === void 0 && (C = y), p[C] = h[y];
}), rL = to && to.__setModuleDefault || (Object.create ? function(p, h) {
  Object.defineProperty(p, "default", { enumerable: !0, value: h });
} : function(p, h) {
  p.default = h;
}), aL = to && to.__importStar || function(p) {
  if (p && p.__esModule)
    return p;
  var h = {};
  if (p != null)
    for (var y in p)
      y !== "default" && Object.prototype.hasOwnProperty.call(p, y) && nL(h, p, y);
  return rL(h, p), h;
}, iL = to && to.__rest || function(p, h) {
  var y = {};
  for (var C in p)
    Object.prototype.hasOwnProperty.call(p, C) && h.indexOf(C) < 0 && (y[C] = p[C]);
  if (p != null && typeof Object.getOwnPropertySymbols == "function")
    for (var O = 0, C = Object.getOwnPropertySymbols(p); O < C.length; O++)
      h.indexOf(C[O]) < 0 && Object.prototype.propertyIsEnumerable.call(p, C[O]) && (y[C[O]] = p[C[O]]);
  return y;
};
Object.defineProperty(NT, "__esModule", { value: !0 });
var ty = aL(di), YS = nd, lL = dy, oL = (0, lL.createAnimation)("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function uL(p) {
  var h = p.loading, y = h === void 0 ? !0 : h, C = p.color, O = C === void 0 ? "#000000" : C, U = p.speedMultiplier, _ = U === void 0 ? 1 : U, E = p.cssOverride, ce = E === void 0 ? {} : E, re = p.size, W = re === void 0 ? 15 : re, Y = p.margin, ie = Y === void 0 ? 2 : Y, Se = iL(p, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), G = ly({ display: "inherit" }, ce), J = function(xe) {
    return {
      backgroundColor: O,
      width: (0, YS.cssValue)(W),
      height: (0, YS.cssValue)(W),
      margin: (0, YS.cssValue)(ie),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(oL, " ").concat(0.75 / _, "s ").concat(xe * 0.12 / _, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return y ? ty.createElement(
    "span",
    ly({ style: G }, Se),
    ty.createElement("span", { style: J(1) }),
    ty.createElement("span", { style: J(2) }),
    ty.createElement("span", { style: J(3) })
  ) : null;
}
var sL = NT.default = uL;
const cL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAw4AAADyCAYAAADk+pKyAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3Xd4FFXbBvB7N430hEBo0ntNQHrvAkqTJiIo0ov03ot0RHoVBQRpIgrSe2gJBAIIoUPoPSGk1/3+4IsvQsicszuzuwn377q8vveDc2aehGR2npnzPEcHwAAiIiIiIqI02AKAzskDOmdPS8dCRERERERWxhAVBkP0y/9PHJw9YeNdwNIxERERERGRlUl6eguG6JfQWzoQIiIiIiKyfkwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISJGtpQNIiyExDoiNtHQYAnTQuWS2dBBERERERJqx7sQhMgxJDy5ZOgxlehvYFa9t6SiIiIiIiDTDpUpERERERKQoXSQOXl5eMBgMVvffxo0bLf2tISIiIiIyi3SROBARERERkWUxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFNlaOgAiIiKS553ZA6WLFkCpwvmRO4c3XJ2d4ObsBA83V7g6OyI6Ng6RUdF4FRWNiKgYPAt9ieAbIbh4/TZu3HmAxKQkS38JRGaTzcsTRfPnRqG8H6FgnpzIlS0LMtnbw93VBY6Z7KHT6RAdE4fwiEhEx8bhZUQkrt2+h2sh93At5D7uP35m6S/BKjBxyEAWjuuP8qWKWjoMTY3+8SccOHlWeLytjQ2OrV+gYUTvehUZjaSkZETHxOL+k2d4+iIMV2/fs5oP67WzRqNQ3lwWjcEUMbHxqNNpQKp/Z29niz8XT0Fmd1fh4125dRffjJiuVnhGsbO1xdZF3yOLp5vwnJNBwRg4beG////yyUNQpmgB4fkL127F2m37pOI01bYlU+Ht5SE09lVkND7pMhQGg0HjqP6n1Se1MLRLO+Hxw2YuhV/gBQ0j+q+CeXKhSc1KqF/1Y5QrWQTZvDyNPlZsXDyCb4bgyKnz2Hv8NI6cOm/xa1MKeztb+K2bb9Zzvn3dfvI8FNdC7lvNdfu32WNRIE8OobHHz17E4OmLNY7oXTOG9ECtij5ScwwGYODUhfA/H6x6PK7OTmhYvQLqVPJFnYplUTjfRyYdL+xVBA4HnMPe46ex78QZ3H34RKVI0xcmDhlI4bwfoVyJIpYOQ1MebuI3hACg0+ms6nsSERUNv9Pnsfd4ILbsOYKnoS/NHkOxAnlQpmhBs59XLVExse/9u/iERPx96CTmjuorfLxyJYpg085D2OkXoEZ4Runa5lM0rFZeeHxysgF9Js79z5/de/QU37RsJHyMlvVrmDVxyJ3DG41qVJSaU6xAHly+eUejiN7VvG414etFYlISLly9pXFEgFMmB3Ro1gCdmn+CSj7FVTtuJgd7lCtRBOVKFMHAb9rgaehLbNp1CEvXb8O1kHuqnccYer3eqq7bryKj4Xf63L/X7Wdh4WaPoXjBvChZOJ/Q2MfPw7QNJhVje3fCwG/aSM8bNmup6klD+VJF0bXNp2jbuA5cnBxVO66nmytaNqiBlg1qAADOBl/D0vXbsHHnIcTExal2HmvHGgciM3J1dsKntatg3ujvcPvgBmyZPwlVy5a0dFgZyvKN26VvNqcO6gYbvWUuh24uThjdq6PUnLXb9uLMpWv/+bPdR09JHaNGhTJm/ZprVZB7EmnsHFPInO9k0CW8jIjULBYXJ0eM7d0JN/evx6JxA1RNGlLjndkDfTu0xIVtP2PrwsnwKZZ+Hy6ozc3FCZ/VqYr5Y/oh5NBG/D5vIir7lLB0WFajR7umGNu7k/S8mT9twNzVv6sWR2WfEjiwag5ObFiEb1s1UTVpSE25EkWwfPIQ3D64AVMHdZN6052eMXEgshA7W1s0rVsVh3+dh10rZqJYgTyWDilDSExKwtCZS6TmlCiUD19LPK1X0+Bv28E7s9jyHQCIjI7B2Hkr3/nzM5euSr3B8nB1gW/xQsLjTWXtiUORfLmRw9tLeLxsoiaj/Wf1cHnXGozt3QleHuLL19Sg1+vwae0qCNi0FD9PHS71s/khsLO1RbN61eC3bj52LJ+OIvlyWzoki/q8YU3MHf2d9Lyft+xM9TpmjFzZsuL3eRPht24+apQvo8oxZWR2d8WQb9vh0o7V6PlFM4s9hDKXjP3VEaUT9aqUQ+CW5RjZvQP0ep2lw0n39h4PxI4j/lJzxvf5Gs6OmTSKKHU5vbOgf6fWUnNmrliPR89C3/nz5GQD9kjezNau6Cs13hS1jDhXjQo+0OnM8/sg+73Y6Sf38yUii6c7NswZh9XTR5pUv6AGvV6Hr5o1wPltP6NNo9oWjcVaNahaHme3rsDwbu3N9nNqTWpX9MXq6SOlb5T/OnAMfSbOVaV+qWWDGjjzx3I0q1fN5GOZysvDDfPH9MOp35eidBHxerP0hokDkZWwt7PFxH6d8dfiqXBzcbJ0OOne8FnLkJCYKDw+h7cXBnwtdxNvqgnffQOnTA7C40MePMbcNe9/tb9Lsk7DmJt5Y+TJmQ35cmWXnued2QPFC+bVIKJ3yRR13nv0FJeuh6h6/obVXt+Eft6wpqrHNZWXhxvWzR6DReMGwN6OZZFvs7ezxeT+XbB10fdwdf5wrtu+xQvh9/mT4GBvJzXv8Klz6DhsKpKSk006v06nw6xhvbDxx/FWt0SodJECOLZ+ATq1+MTSoWgiXVwFEhMTERgYaOkw3nHrlvaFcfTh+aR6Bez9eTaa9hhpkSK8jOJayD0s/u0v9O/USnjOoM5t8dPmHXjyQvviwlKF86Nj84ZSc0b8sByxcfHv/fv9J84gMSkJtjY2Qser/nFp2NnaSiVYxqhpwvKB2hV9EXwjRL1gUqHT6VBTYlnUrqPqFtJ3aNoAK74fIvzvZgnd2n6GIvlzo23/CQh7FWHpcKxOk5qVsGflLDTtORIvXr6ydDiaKpA7J7YtkX/AFRR8Ha37jUvzGibCRq/H0omDLLa8VISjgwN++n4oqviWRL/v52t+jTWndJE4hIeHo0KFCpYOg8hsypUogm1Lp6He1wMRHfvhdGtQ25Qlv+LLpvWR1dNdaLyrsxPG9umEvpPmaRyZfEG2X+AF/LHXL80xLyMicSLokvCNuouTI8qXKoqT5y4Jx2EMU2oValXwweLf/lQxmncVL5hXamnQLj/16hv6dGiBOSP6pIulLrUq+GDvz7PRqOvQDH9zbIzypYpi25KpqP/N4AzbZSeblyd2Lp+O7FkyS827cecBmvYciVeR0SbHsHDcAKtOGt7UpXUTeHm4ocOQ7zNM8sClSkRW6uOSRbByyjBLh5GuvYyIxMQFq6TmfNuqCYrm17bgsV6VclKtSZOTDRgyQ6wv+27J5UrmqHMwZUlUjfJlNL+plklsYuPicTggSJXzDvymDX4c2TddJA0pfIoVxI7l06WW2H1IKpQuhuWTB1s6DE24uThh+9JpKJA7p9S8h0+fo3H34aq0H+/Sugm6tG5i8nHMqUX96lj/w9gMs9TPqr8Kvbs39K7iXS6ITBUdG4e4eONfo3pK7jOhpNUntdD+0Ams//uAqsf9kKz8fQd6tm+GUoXzC423tbHB1IHd0KrfOE3i0et1mDaou9ScVVt34dzlG0Jjd/oFYOqgbsLHrlXRF9OWr5OKR4ax9Q0psni6o2ShfLh4/baKUf2XTPLkF3ghzb1ERDWqUVH65yA1cfEJCLhwGecuX8eFq7fw4MkzhEdEITwyCo4ODnB3dYa7qwtKFMyDssULo2KZ4sidw9ukc5YrUQTLJg1Gx2FTTY5fDdZ23W7XpC62HTyBzbsPq3pcS3Kwt8PmeROlO7GFhkfg0x4jcOfBY5NjKFU4P+aOku/glCI+IRFHTp+D/7lgnL96E/cePcXTFy8R/f+/z7Y2erg4OyGzuyvyf5QDxQvmRanC+VGroq/JdRTN6lXDqmkj0WHo92bd1FILVp04QKcHbPhSRFTrfuM1WyN79/Am4SKobQeOo9vY2ZrEERUTo8lxU4yYvQxLN2wz6Riuzk5wcXZE8QJ54FOsEKr4lkTjmpWki8hSzB7eG38fOomIKNNf8co66B+E9oMmmf28aZG96CYlJ2PIjMXY/dMs4TlN61ZF9Y9L49iZf2TDU9T+0/pSH76vIqMxfv4vwuODb4Tg7sMnyJMzm9D4KmVLwMHeDnHxCcLnkKFGS9XaFX01Sxx0Op1UC0fZNzqpKZQ3F9bMHGVSB7VjZ/7Bmj/34M/9x4T2k/j70AkAr7/eSmWKo12TuujUoqHRBb3tmtTFmUvXVO3Db6yhM5dgxaa/TTrG29ftqmVLolEN46/bc0b2wc4j/qokmZam1+uwevpI1KlUVmpedGwcWvQerVojgTkj+xj173H7/iPMW7MFG3YcQGh42vU5z8LCcfv+o//sk2Oj16Oybwl83rAmvmnZyOjfmdaNauHcleuY+dMGo+ZbC+tOHEiKJW4sUxOfkPhBF89FREUjIioaj56+wEH/IPyIzcjs7opOLT7BmF6dpAvKsnq6o8+XLTB9xW8aRfx+CYkZ49/yoH8Qth88gaZ1qwrPmT64O2p06Kfq06FMDvaY1K+z1Jxpy9ZKF2vv9AtAzy+aCY11dHBAZZ8SOHL6vNQ5RKmRONSq6IOF67aqEM27ShXOjyyCNTAAsMvE/RscHRzw+7yJ8HB1MWr+2eBrGPPjSuw/ecao+QaDAf7ng+F/PhjTlq3FqJ5foWubz4xaRjF1UDcEXryqSYJtbu9ct1e9vm5/07IxRvf6SvpmMZuXJ3q1b47ZP2/UKGLzmTvqO+luXwmJifhi4ETVdoVuXq+69LLK+IRETF68GnN+2WxSfUFScjKOn72I42cvYtLC1ejS+lMM797eqDdVE/t9i7OXrhv9+2sN+DifyAxCwyMwd/Xv8G3RxagP2Z7tM/6mMlobNnuZ1FP1imWKo5XKrTH7dmgptUzk5t0HRt0wyz4V17Itq1LiEHD+smIhafWPy2i2v4nMzcj1kPu4efeBSecb0qUdShTKJz0vOdmAyYvXoOoXfVS76Xga+hIDpi5E7Y79cffhE+n5tjY2WDCmv1V3gzJFaHgE5qzaBN8WXXEi6KL0/F7tm6f7fXnG9Ooo/BAiRXKyAV1Gz1R1k8RBndtIjY+KiUWzXiMxY8V6VYuSwyOjMGfVJpRp+q1RS4ht9Hp81/Fz1eKxBN6JEJnR/cfP0Lz36P+8BhWR0zuL9Gti+i9jbsK/H9BFtYI2Lw83DOvWXmrO8B+WG7WE6FDAOamuLloVSOfNlR15FeobDgacVazf8PJwQ6nC2myoJPO1m9qGNV+u7BjSpZ30vKiYWDTvPQqTF69BcrL666MDL15Fpba94Bd4QXpuycL5pG8s05t7j56iWa9RCAq+LjUvdw5v1Cxvvt3P1dat7WcY1+dr6XlDZizGhh0HVYujWIE8qOJbUmpOrwlzcNBfnSYGqXnyIgxfj5iGr4ZOkbrWBl68ik5WUhtkLCYORGYWERWNdgMnSt8QNqop3oWHUie77KdA7pzo0U6dm6KRPTpILU856B+EbQeOG3WumLg4HA44Jzy+YpnimuyaLdIWNvDiVQRevKo4To0lT2/T63WoXr608PjdJrZh/WF4bzg6yHUjiotPQJt+47Hn2GmTzq3kxctXaNlnjNC/xdvG9ukk3PI4vXoV+fq6HZ8g9/Q6vV63W9Svjvlj+knPm7J0rerLCts1qSs1fvfRU6omLmnZtOsQ6n09CI+evlAcGxR8HZ92H4HwyCgzRKYdJg5EFnD34RPpIuz0/OTKWsgWGgPAqJ5fGb0ePUX+j3Kg5xfNhcenFHSbQmaZgL2dLaqWLWXS+VIjcrMfePEqzlxUfgOnxVsRn2KFhNcpR0bH4OgZ+SfyKaqWLSlVY5Oi88jpZlsPHREVjWa9RiFEsgOOp5srRvTooFFU1iPkwWMs37Rdak56vG7XquCDNTNGSS+PXb5pOyYuXKV6PNXKyV2b5q/ZonoMaQm8eBX1Og9K86HU+Ss30bjbsAxRM/hhJQ5JiTDERlr/f3HKHTIo/Vu9dbfU+OIF87LOQQWrtu6SWirm5eGGoV2/MOmcUwZ0lVry9NPmHSZ3Efr78Emp8TI7J4tSutl/8OQZHj19gdMXrygeq9rHpVVfLy6TjBw8edakzlO9v2whPeeXP3bh9z1HjD6nMZ6HheObEdOQlJwsNa9L608z/FsHQP66XbJwvnS1T0epwvmxad4EZHKwl5q37cBx9P9+gerx2Oj1KF+qqPD4mLg4zRo9pOXGnQdo3HVYql2b/rl2C427pf536dEH1VUpOfIFku7LFziZnd4GdsVrWzoK0tilGyF4/DxUeAdOB3s75Mqe1agiRvqf5GQDhs9aiv2r5gjP+e6rz7F0wzbce/RU+nwVShdDq0/Ei6xfRkRikgpP7e49eorgGyHChbh1Kqn7RD9vruyKLWFT3jTcuPMALyMi03yzk9ndFWWKFhTez0KETLK0+5jxy5SyeXmiRf0aUnPuPHiMITOWGH1OU5wIuoTFv/2J774SL+J0yuSAb1s3wYwV6zWMzPIuXL2Fp6Ev4Z3ZQ2i8o4MDcmT1wsOnzzWOzHT5P8qBHctnSHcLOnDyLL4cMlk62RSRw9sLLk6OwuNv3X1ksR2aL16/jbb9x2P3yln/NgwIvhGCRl2G4nlYuEVi0gIfXxJZiMFgwIWrt6TmiH5YUdr8Ai/gj71+wuONaaOaYvrg7lJPHKcs+RXPVPqQkWkdWq5kEelWwWkRXaYEvP5dOHtJufBUzToHWxsb1PhYbP8Gg8GAXSbUN3Rp3US6yH7CwtUWbbE9ZcmveBUpd/7OnzdOV0/XjWEwGPCP7HXby/qv296ZPbBz+XTkyCr2ICtF4MWraNN/vHTthyjZJEamUFkLfoEX/l2udeXWXXzSZahq13Nr8UG9cUjh7u6O4GB1eguraefOnejWTXzHV0r/noe9lBov8+SF0jbih+VoUquy8Cv59p/Wx7w1W6SeeDetW1Vqc7FrIfew+Le/hMcr2e0XgMGd2wqNTbmR3nHEX5VzyyQOKf+7buW0O4fVruiLeSqtXy5borBwovTPtdc7MhurU4tPpMZfvX0PG3ZYdrf40PAILF7/J0Z0+1J4ToHcOVGpTHHVevdbq4x23XZ1dsK2pVNRME8uqXlXb99Ds16jEBmt3casnm5y9WXWsFxu1soNyJYlM2b9tF56D5704INMHHQ6HXLmzGnpMN7h6elp6RDIzF6+kqtnyaj90i0h5MFjzFuzBcMFW6Tq9TpMG9QdjbsNExpva2ODqQPlHgQMn7VM1dfsJ4IuKS4BelOtir5mSxwMBsN/ak0CBescbPR6VZZEyLy9MOVtQ4HcOVEgt9znzayVGzRZ9iFr/potGPh1G6ndehtWr5DhE4eXEXJdcaz5um1vZ4vN8yaiXIkiUvPuP36Gxt2Gab4EJzEpSWp8npzZkMPbS6jLkVaSkw0YNG2Rxc6vNS5VIrIg2d1Io2JiNYrkwzTzp/V49CxUeHy9KuXQoGp5obGdWzVG0fy5hY+993igajftKRISE7H/uHhHHrU6F+UTqG+4effhfzqMiLQB9XB1gU+xQibHB8hterfbhP0b6lf5WGp8dGwctu47avT51PQ8LBy7JDcTbFhN7PcjPXN1lnuDYK3Xbb1eh1+mjVB80/e252HhaNJ9OO4/Nv4tnCjZ5XI6nQ5fNW2gUTQEMHEgsigvydeq6b3/s7WJiIrG2HkrpeaM76u8IVImB3uMkmhPmZiUhKEztSmElSnqLVO0ILw83Ew+p0jR8duJwv3Hz/D4uXISV6ui6XUOdra2wi0eQ8MjEHD+stHnalBNLnH4+9AJi9Y2vO3XbXulxn9cqqgqP0PWzMtD8rot+YbCXOaM6IM2jWpLzYmMjkHz3qNx5dZdbYJ6izHJyeBv20nXapA4Jg5EFlRM4om0wWDAHcn+6qRs7ba9Uu1ZK5Ypjk9rVU5zTI92TZErW1bhYy7fuB2Xb94RHi9jz9FTwrsN6/U6qZqM95Gtb0hxRmQjOBXeinxcsojwuvP9JwKll0uk0Ot10vFu3X/MqHNpZc/RU1JPzG30etTO4Lvcy1y3k5MNuPvI+jrhjerRQbpFcHxCItr2n4DT/ygvK1TLy4hI6fqizO6u2Dh3gqrNHuh/mDgQWUj+j3JIrX1+/CzUal95p2fJyQYMnr4IBoPYzTUAjOvz9Xu7x7g4OWJoV7G6CeD1E+1Ji1YLj5f15EUYzlwS3w1YjeVKYonDuzcfIsuVqpUrZfJ+JjJfoyn1DblzZJPePPDE2X+MPp8W4hMS4X9OrmahTNECGkVjeYXy5kLeXNmFxz948gyxcfEaRiSvS+smGN/3G6k5yckGfDNimtk2I3zTySD5mpnKPiXgv3EJKvkU1yCiDxsTByILadu4ttT4k+cuaRMI4UTQJWzefVh4fNkShd+7C/B3X30u1TZ38uLVmm8MJLOLtKmJg0h9Q2JSUqrdqUQSB3cXZ5QtUdjo+ADxtxbJyQbsNWH/hiJ5P5IaH/LgsVTNjbkcl0xmiuYTfyKf3rSVXNpjbdftZvWqYeG4AdJtc/tPmW/2zQhTbD98wqh5hfLmgt/a+dgyfxKqlSuV4VsFmwsTByIL8HRzxSDBNpkpDp86p1E0BAAj56yQ6gE+vs/X7+xk7OnmioGd2wgf4/LNO1i2YbvweGPJFLgWL5gX2byM7/AmclN++eYdRMe++70WXTJmyn4O9na2qFK2pNDYwItXTOrBXjifXOJgziUgMmTfOBSRWMqTnnh5uGHAN+K/34B1XbdrlC+DtTNHS7+xm7RoNZZt1P469T7bD574TyMFGTqdDk3rVsWhNXNx6e9VGNfna1TyKW7yW8sPGb9zRGZmo9dj2aTBUhvbJCYlWU2nlYzq3qOnmPPLZuHxpYsUQMsG/90RemDnNlJLU4bOXGL0+nkZZ4OvCRUeA68/aE2pIzC2vgF43a3l9v1HivNldnx+W8UyxeGUyUForMybmtQUkUwcbt57aNL5tHLj7gOp8YXy5MpwN2Y2ej2WTxoi9fsdn5CIP62kZqV0kQLYsmCS8L41KU7/cwXfL/lVo6jEREbHqJK4FMqbC2N6dcTRdQtw3+93bJk/CUO7fIEa5cvA2TGTCpF+GD7IfRyILMXRwQELxvZDi/rVpebtOhJgkY1kcmfPiq5tPjXrORMTk7Bq626znjPF7JUb0PnzRsjpnUVo/LjenbB1nx+Skw3wzuyBvh1aCp9rp18A9h4PNDZUKcnJBuw5egpft2wkNL52RV9s2nXIqHOJJA5HAy+89++OnfkH+T/Kkeb86h+Xhq2NjVFJl1x9g/FtWAEofh1vs9bmB/cfP0NCYiLsbMVuGTI52CNntiy49+ipxpGZh6ODAxZPGPDe5Ynvs+PwSc33ORCRN1d2/L10mnS9DQCUL1UUdSqVxaGAIA0iEzfrpw1o36SuVH1JWrw83NC0btV//00Tk5Lwz9Vb8D8fjIDzl+F/Phi3rDSRtzQmDkRmoNPp0KDqx/hxZF/p5QsGgwFTl63VKLK0lSiUD4vHDzTrOWPi4iyWOETFxGLUnJ+wavoIofHFC+ZF28Z1sGHHQQzt2l64U09CYiKGzVxqSqjSdkkkDnUqGffGIf9HOZA7h7fiuEMB71++cdA/CB2bN0xzvquzE8qVLIJTF+TbpIq+rXj8PBRng69LH/9N7q7OUuPvPLC+7jvA65uq+4+fSSVCHq4u6T5x0Ol0aFitPOaO6iu9q7Ilr9tvyurpjp3LpiOHt5dR83U6HZZMGIhyLbulurzQXCKiovHt6JnY/dNM4QRWhq2NDcqWKIyyJQqjV/vmAICnoS9x6nwwAi5chv+5YARevMoGJWDiQKQZ78we8ClWCFXKlkSHpvWlnz6m2LjzkFS7UDLN+h0H0PvL5qhYRqwbx5heHXEi6BJ6tGsqfI7Fv/2FayH3jA3RKAdOnBF+alwwTy58lD2rdA91kZvy6yH302yveDDgrNC5alXwkU4cMjnYo7JPCaGxe46ekuq0lRrRRDLFi/BXJp1PS8/DwqWuYbJfu7XI5uUJn2IFUaVsKXRoWh/5jHzCvW77fpy/clPl6OS4ODli29Jp0g+r3lYgd06M7/sNhs9eplJkxjkaeAHdx/6An6cOM0uhs3dmD3xWpyo+q/O/txJBwdex/+QZ7D9xBv7ngpGQmKh5HNaGiQPRG4Z2+QLffC72VDY1tjY2cHV2gpeHuyo9pB8/D8XAaQt1nRspAAAf1klEQVRNPg6JMxgMGDxjMfzWzhf6cCqSLzd2r5gpvHb4eVg4plhgzXB4ZBSOn70ovFSndkVfrN22T+ocIsuUDioseXj09AUu37yD4gXzpjmuZgUfzFq5QSq+yj4lhP+ddplY3wDI3zzHWPCJrhLZp82yuyubYkS3L9GldROj59va2MDNxRmZ3d1UuW4/evoCg6cvNvk4prC3s8WmeRPwcckiqhyvX6dW2Lz7sFDnMy2t274PNjZ6LJkwUJM3D2mxtbFBhdLFUKF0MYzs3gGR0TE45B+Etdv34e9DJz+YJIKJA9EbcufwFlpqYQ6xcfFoN2AiXry03qeQGVXA+ctYv+MAvvysvtD4QnnFlzFMXLgKLyMijQ3NJLv9Tlk8cRBZK33QP0gxcahWrhTsbG2lPqxFlyklJCbiwAnT+9U7SRZcWnIpiBLZJRrOZnzjYE3X7Zi4OLQZMMHoLkBq0Ot0WDllGOpXkdu1PC02ej2WTx6CSm16WfwGec2fe3D/8VOsmj4S2bNYbodoFyfHf+skHj8PxZo/92Ll7zuEGjykZxmr7QFRBhEXn4Cvhk2xuh7gH5LRP65UfT3rxeu38dPmHaoeU8ZOP3/hsXUkd/8VqW9ITjbgiEB7SpHlSi5OjtJPU0WTphNBlxAeGSV17NTIdmqJs7KNwt4UK5nUfIhdamLj4vHloMlG1d6oqV6VcmjXpK7qxy1VOD+Gdf1C9eMa46B/EMq17Ibfd1tmb4m3Zc+SGcO6foGLf/+CH0b0luqamN4wcSCyMuGRUWjeexS2HThu6VA+aA+ePMMPP29U9ZhDZixGUnKyqseUceXWXYQIdu7JncNbamdzkbcNF67eFHqDdvT0BaHvU62K4m1ZnTI5CNet7Daxm1KKuPgEqfG2Zl56IcPeTi422a89vXsZEYmmPUdixxHx5FwrWi7hGdG9g+LbQHN5HhaOL4dMRvUvv8O+E+bpUKfEztYW3331OYJ3rkb3tk0z5KZzTByIrMipC5dRsXVPHPS3bOs7eu2Hnzep1hlm+8ETVvHvulPixkamdanITbxo4fPLiEicEVhLLbOfQ5WyJYVvftWobwCAqOgYqfGOmeR67JuTYya5NwiyX3t65n8+GBVa98SR0+ctHYqUR09f4Ne/9krNcbC3w7JJg9/Z/NKSTl24jE+7j0DZll2xdMM2Vd4WmsrLww0Lx/XHhjnjhPeNSS+YOBBZgbBXERg4bSFqdxyQ4ddHpicxcXEYOWeFyceJT0jEMAt3JEkhs6mZVOJQQXns4TTasL5NqYgaAKqWLSWcDIhuanf34RME3wgRGqtEdqmbk+TNuTk5O8nFFvEBJA5hryLQf8oC1Ok4wGr34HifsFcRaNJjOPpOmoebkhv8VfYpgd7tW2gUmfEuXQ9Bv+/n46OardGy71is3bYPT0NfWjSmlg1qYNvSaRkqeWDiQGRBj5+HYty8n1GsUScsWvenWXYRJjmbdx/GiaCLJh1jwdo/pD+ctXL41DnhItxaFX2FXrUXyJ0TH2XPmuaYhMREHDvzj9B5AeCQwNsZZ8dMKF+qqNDxRJMgtd42AK93vJVhzk5Estyc5boNyX7t6cmjZ6EYO28lin7SEUvW/2XR5YfGiI6NQ4veY3Dpeghi4uLQe+Jc6dbDk/p/q9pmbGqLi0/AjsMn8e2oGchdqw3Kt+qBYbOWYtuB43j8PNTs8dQsXwaLxg8w+3m1Yr0LKokyqKTkZKzbtg+bdx/GgZNnrTpZOBp4AV3HzDLrOU3tna82g8GAwdMX4/j6RUa9nn/yIgzTrGAjqBSxcfE4FBCET2tVVhybI2tmFM2fG1du3U1zXM3yZRSPderCFambyZPnLiEmLg6ODmk/qatVwRcngtJuIiBTSK1WfQMAREbLvXGwls5AqcmTM5vU+IioaI0isYyk5GSs/WsvNu8+jIP+QVZ93U5LQmIi2g+a9J/GG4cCgvDLH7vwbSvxlrYuTo5YPH4APu0utlmmpRgMBly4ehMXrt7E3NW/A3jdyKGKb0lU9i2BKr4lUapIftjotX2O3qFpA/ifC8ayjds1PY85MHEgMjMbvR57jwdiz7HTlg5FUXRsHJdOAThz6RrWbtuLTi0+kZ47fv4veBVpXTdRu/0ChBIH4PWTeqXEQaS+QaQN65ti4+Jx4uwl1KtSLs1xNSv4YNrydWmOSWndKnJO2TjTcv+xXH1MvpzW+QTXO7OH1J4UyckGPHj8XMOIzM9Gr8fuY6ex97h1FOEaw2AwoNuY2diVSnI88ocVaFyzMnJkFW9v2qBqeXRs3lC6TsLSbt9/hNv3H+G3v/cDeJ0EVSxTDFV8S6KSTwlU8imuSVekmcN64i8LvfVQExMHojfsOxGIc5dvSM+r4lsS1T8uLTz+x1F9cdD/LJ6HhUufiyxj7LyV+LxhTakbqPNXbmL11t0aRmWcnX4BWCA4tnZFXyzdsC3NMSL1DcbckB8KOKuYOKQUPccnvL+3vGh9g8wyLhGyu4Pn+8g6E4d8krve33v0BDFx5tuTYu/xQJy/In/drlauFKqWLSU8fu6ovjgcEJRu99YZMmPJvzfLbwt7FYEBUxdg44/jpY45a1gv7D12Gk9ehKkRokVERsfgoH/Qv80rdDodihXIg8o+JVC17OvP9oJ5xPfqeR9HBwcM/KaNxXfgNhUTB6I3bD94QvEmKTXZs2TG+W0rhZ9SZPV0x5wRfdBp+FTpc5FlPHoWinlrtmB0z6+E54z+cYVVrn++9+gpLl0PQcnC+RTH1qzgA71eh+Tk1JeQidQ3RMXEIuB8sHScIl2oUtqsplU/IdIqFgD2HFOvvgEAroXclxpfpmhBVc+vlrLFC0mNv3JbLmEy1V8HjmHFpr+l5+XImhkXtv8CdxdnofHZvDwxe3gvdB45Q/pcljZt+TosWPtHmmO27juKvw4cQ/N61YWPm9ndFXNH9UX7wZNNDdFqGAwGXL55B5dv3sEvf+wCAOTLlR2NalREx+YNUaF0MaOP3b1dU8xY8RtCwy23QaCpWBxNpILHz0Mx+sefpOZ88Wld4eUiZB1kO6eEPHiiUSSmE90MLounO0oVLvDevxe5KT9+9mKabwTeJyj4utAOvGnF4ObihLIlCgudb5efuonD9TtyiYNPsYJW2X1F5m0qIP+mxVIePQvFGMnrdoemDdC4ZiWNItLGT5t3YPz8X4TG9puyQHpn+1af1EKzetWMCS3dCHnwGEs3bEO19n1RuW1vo1trOztmQj0Vd/S2BCYORCpZ+ftOHD8r131n0fgBwk+7iNSkVltWkfqGw0bWDSQlJ+PIKeXe+Gnt51Dj4zKwtbFRPMbV2/dw695DqfiU3Lz7UKqI1s7WVrhLlDlVKyeXOCjVxFiTFZv//k+hsIhF4wbAzUWuy5SlbN13FN9Nnic8/tHTFxj5w3Lp8ywY3Q8eri7S89Kjs8HX0KjrUHw3eZ5RRfJ1K6e9/NLaMXEgUonBYEDviT9KPVnN6Z0F04f00DAqotSdDLok9DQfAGqnkRyIvHEwZeO7g/7Km8ZV9i0BB3u7VP9OdJO41ApGTRUbF49TFy5LzalfrbzqcZiiZOF8ikvR3nb4lPh+HZaWnPz6up2QKH7d/ih7Vkwd1E3DqNRx0D8InYZPlV4u+fOWXdKb2eXw9sL0Id2l5qR3yzZuR7/v50vPE106aa2YOBCp6PLNO5i1coPUnG9bNUadSmU1iogodYlJSdh/4ozQ2Orly6TarrBgnlzIlS3tm8rQ8AijCldTiCQdjg4OqFSmeKp/J7p/w+6j6icOAIS/xynaNa4jtHeGuXz5WX2p8SEPHuO6ZG2HpV26HoIfftkkNadbm8+E2hBbyplL19Cm/3jExSdIzzUYDOg1YY50gXvnzz+8z7KfNu+Q7rQlm4hbGyYORCqbseI3qQ9OnU6HpRMHwdnReneNpYxJ9Cm7h6tLqnUCIk/OjgaeN6lA/FrIPTx48kxxXGqdkzzdXOFTTLmwNyIqWmpzOhmyiUP+j3KgYhnjiy/VpNfr0P7TelJz9qXTdqXTlq6T2qRRp9Nh2aTBVlmTcvfhEzTrOdKkvTRu3HmAKUt+lZqj0+mwZMJATb8nmd1dhWuWzGW25MPCTA72cJXcUNGaMHEgUllsXDz6TJLbiTP/Rzkw4bvOGkZF9K49R0+9t1vS21J7cl+zgvITV1OWKckcI7UlSdXLlxbatO+g/1mjirdFBF68Kl1s2ufLlprEIqtZ3WrST0fT6z4HMXFx6CtRCwC8fuM2ru/XGkVkvIs3QvBMhVbfc37ZLN2evEDunBjf9xuTz50aNxcnbF86Db/NHmNVD9qOnflHOknz8nDTKBrtMXEg0sDhU+ekN8Xp+1VLVPJJfbkFkRaehYXj9D9XhMam9kRf5I2DGhuqiSQOlcoURyYH+//8megyJbW7Kb0pMSkJf+4/JjWnbeM6KFU4v0YRidHpdBjbu5PUnLBXEdh33Po3tnyfAyfPYt32fVJz+ndqbVJ7TmuWmJSEnuPnSBcA9+vUSvUif2fHTPhr8VRUKF0MBfPkwvwx/VQ9vikSk5Jw75HcZo/pdedxgIkDkWaGz14m9dTHRq/H8klD3lvkSaQF0bX9b+++LFLf8OjpC1U67BwMUC6QzuRgj8o+Jf7zZyKJg8FgkOowZYyl6+X2htHrdZg8oItG0Yhp/UktlC7y/ja8qfnlj12qbqBnCcNmLpXa4C3lum1vlzG3xTobfA1zV/8uNcdGr8eySYOFdmsXkcnBHr/Pn4Rq5f63WV/H5g3x3Vefq3J8NcgmAqHpdBNBgIkDkWZevHyF4bOWSs0pXjAvRvYQ32CMyFSiT9tdnBxRofT/niIKvW04ZfrbBuB1AnL55h3FcW8uV3q9/4TyU/sLV2/h4dPnJsWn5GzwNenuSp/WqoyvmjXQKKK0eWf2wI+j+krNSUpOlk6QrNGzsHCMkGxHWrJwPgzv9qVGEVne5EVrpOo/AKB0kQIY1vULk89tb2eL9XPGpbqD/KxhvdCuSV2Tz6GGHN5ZhMfGxMWl6wSbiQORhtZt3y+9xntol3ZWu4MsZTxBl6/j0bNQobFvPsHXug2rMcd6M6Ya5csIdSfapVE3pbcZsyP93FHfIV+u7BpE8346nQ6Lxw+Ed2YPqXm7jvgjRHKDRGu15s890i1lh3f70uLLy7QSExeH3hPl6vYAYET3DiheMK/R57W1scGaGaPeu1GqXq/Dz1OHWTx5KJzvI2T1dBcef/HabQ2j0R4TByINGQwG9Jk0V6qtnZ2tLZZPHiy0aRWRqV4v1RG7eX6zzkFk4zc16htSiCxXqlimOBwdXnd0EW7DqsH+DanZtOsQbtyRe2rr5uKEv5dNQzYvT42ieteUgV2ldwFOTjZg6rJ1GkVkfinX7di4eOE59na2WD55SKptizOCQwFBWLV1t9QcB3s7LJs0WKhBwdv0eh1+mjIUnzesmeY4O1tbrJ4+EgO/aSN9DrV83aKR1HjZDQetTcb8CSeyIjfvPsC0pXIfquVKFLHohZA+LKJr/Kv4lkQmB3sUypsLORVezd+480C6YDAtR09fUGzr6mBvhyplX9c5iCQOoeERCDgvt4TIWPEJiRg4baH0vCL5cmPnihnIIvFE01ije36FId+2k5635q89CLx4VYOILOd6yH3MWPGb1JzypYqif6fWGkVkeSNmLxd+O5misk8J9G7fQmqOTqfDonEDhfcQ0et1mDGkBzbNnQBPN1epc5kqX67s6P1lc6k5RwO1af1sLkwciMxgzqpNuHQ9RGrO2N6dUCRfbm0CInrDgZNnhNqRphQgm6ub0pteRkTijMDNac0Kvsjm5YliBfIojt177LRJe0zI2nPsNLYdOC49r3SRAgjYtESz7j1OmRywavoIo9pohkdGYezcleoHZQVmrdwgXdw//ruvUShvLo0isqywVxEYMHWB9LxJ/b9FXokld2WKFkDnzxtLn6dF/eo4v22l2ZYuZXZ3xaa5E+Di5Cg851lYuGabTZoLEwciM4hPSETviT8K98wHXt+kGfual0jGq0jxDdBqVfRFzfLmTxwA4KDAMWtV8EHNCj5C9Q1ad1NKzeCZSxAVEys9L3cObxxc/SPG9OoodaOipE6lsji+fpH0DtEpJi1cjScvwlSLx5qkXLdl1vY7Ojhg6cTBVrX7t5q27juKvw7ItRd2cXLEonEDhMefv3IT3y9ZIxsaACB7lsz4deYo+K2bj0+qVzDqGCLKFC0Iv3Xz4VtceYPJN/2yZZdRu3lbk4zZP0yBwWDAw4cPLR3GO8LCMubFl147ee4Sfvr9b3Rv21R4TrVypdDzi+ZY/NufGkZG9Lota93KZRXH1ankq1iwm5xswBHJ4lIRh/yDMEKhe02F0sXQpFYlxWMlJSdjrwX2HLjz4DG6jpmF32aPkb65dLC3w7g+X6PHF83ww88b8dv2/Xga+lI6Br1eh9oVfTGoczs0rFZeen6K7QdPYOG6rUbPTw+OnfkHP2/ZhS6tmwjPqVm+DLq3/QzLNm7XMDLL6TdlAWpV9IWHq4vwnIbVyqNj84bC+xtNXbYWJQvlQ6tPahkVY2WfEti+dBouXr+NnzbvwMadB6Xa7L5PvlzZMfjbdvi2VWPpdrOR0TFYsv4vk2OwtA8ycQgPD0euXBnzVSJZtzE/rkTTOtWQI2tm4TnfD+iCvw+fxN2HTzSMLHXlSxXFrhUzzX5eEXN+2YR9J9LnLrXWaJdfAGYO7ak4rrJPScW3YBev31Jl59q3nTx3CTFxcf8WQKfG3s4WbRvXUTzW6X+u4LkGMYrYsucIZhYrhOHd2hs1P5uXJ2YO7Ympg7rhwMmz2Hc8EOcuX8f5KzcRHhn1zngbvR6F8uaCb/HCqORTHK0a1EQOby+Tvoart++h86jp0p120qNRc1bgszpVpIrUpw7qhp1+AarW+ViLR09fYNScFVg8fqDUvFnDemHvsdNCb6iSkw34esQ0uLu5oH6Vj40NFaUK58fcUX3xw4jeCPznKg74n0VQ8HWcv3ID9x49VVyq6OHqgpKF86GKb0nUr1oetSv6Gr0K4PvFv+LBk2dGzbUmH2TiQGQpLyMiMXj6Ivz2w1jhOS5OjlgyYSA+6zHS7B/SXh5uqfbPtgbrdxywdAgZytXb93Dr3kMUyJ0zzXEiH5pqtmF9U2xcPE6cvaT4MynyJNBc3ZTeZ/yCn+FTrCAa1aho9DFsbWzwSfUK/1mSERkdg/CISIRHRMExkwPcXV3g4eqi6pLHV5HRaNN/PF5FRqt2TGsW9ioCQ2Yswa8zRwnPcXV2wqJxA9Csl/ic9GTl7zvRrkldoXqnFJndXTF3VF+0HzxZaHx8QiLa9BuPTfMmoEFV49+MAa+T50o+xVHJp/i/f5aYlIQnz0Px5EUYoqJjEZ+QCAd7O7i7OsPD1QVurs5wd3E26bwpzl2+gfm/blHlWJb2QSUOehcv6Aoqv8K2uIy5NJL+3+97juCr5g3RpKb4z2KDqq9f8675c4+GkdGHbqdfAPp2aGnycQ5rUN+Q4lDAWVWS2V0WqG94U3KyAV8MnIiNcyeouhbbxckRLk6Oirt6GysyOgYt+oxWZUfw9GTjzoP4qlkDqX+rRjUqokPTBli3fZ+GkVmGwWBA74k/InDLsjTfAL6t1Se10GznQeEmAVExsWjZZwxWTRuJ1o2MW7b0PrY2NsiVLatmvyspHj0LRat+46R3l7ZWH1ZxtI0tdJlcrP8/B/F1g5Q+9ft+vnSB5KxhPaWWOBHJUuMpfEJiIo4KFlobQ423GY+eheLc5RsqRGOa6Ng4tPpuLDbvPmzpUISEhkfgsx4jhAvpM5rvJs+T3vF39vBeZt2Hw5yuh9zHlCW/Ss9bMLqfVH1EfEIiOgz9HhMXrpJqMGINomJi8XnfMRlqydqHlTgQWYm7D59g4sJVUnM83Vwxf0w/bQIiAuAXeMGojj9vCrx4FRFR2i1hCQq+jrBXESYdY8+xU1azNj8+IREdh02x+gYI10LuoWaHfjgRlL43rzJFyIPHmLxotdQcLw83zBv9nUYRWd6cXzbj/JWbUnNyeHth2uDuUnMMBgOmLF2LFn1GS+8lYSmPn4ei/jeDcObSNUuHoiomDkQWsnDtVgQFX5ea07xedaO7TBApiY2LxyF/5R2a06JVfUOKpORkHDl13qRj7LJwfcPbkpMNGDB1IVr2HYvHz63rpshgMGDJ+r9QsXVPXAu5Z+lwLG7emi24cFXuRvnzhjXRon51jSKyrMSkJPQY94P0MpxvWzVGnUrKXdzetvvoKfg274K12/ZZTfKfmovXb6NGh34ZLmkAmDgQWUxiUhJ6T/xRegOquaP6wsvDTaOo6ENn6tp/LesbUhw0IblJSEzEgZNnVIxGPTsOn0S5lt3wx14/S4cCAHj49Dk+6zES/acskF6ik1ElJiWh1wT56/b8Mf2Q2d28uxqby9nga5i3Rq7wV6fTYcmEgXDKJF4fkSLsVQS+HTUDtb7qjxNBF6Xnayk+IRGTF69B5ba9cOfBY0uHowkmDkQWdObSNSyS7IOezcsTs4f30igi+tCZ8jQ+OjYO/ueDVYwmdaa81Th+9qJVdwN6HhaOLwZNQpNuw3E22DJPK19FRmPSotUo9VlntjxOxel/rmDp+m1Sc7JnySzU7ji9mrxoNW7efSA1p0DunBjX92ujz+l/Phi1Ow5Ai96jceS0aW8hTZWcbMDWfUdRoXUPTF68BvEJiRaNR0tMHIgsbMKCVbj/WK63c4emDdBYoisTkaj7j5/hn2u3jJp7IuiiWXZFvRZyz+h+6Lv9LNtNSdT+k2dQpV0ffNp9BHb5BZilI8utew8x8oflKFi/Pb5f8isio2M0P2d6NX7Bz9I/g51afGLShnvWLDo2Dr0nzpVePtS/U2uUL1XUpHPv9AtAg86DUaltL6zY9LfJNVAyIqNjsObPPfBt0QXtBk7E5Zt3zHZuS7HuxMGQDCQlpI//iIwUGR2DflMWSM9bNG4A3FycNIiIPnQ7jxj31sEcy5RSGPvWYddR66pvSIvBYMC+E4Fo3ns0ctdqg25jZ2PHEX9Vk7PLN+9g6rJ1qNimJ4o17oQfftmU6iZy9F+vIqMxYOoi6XmLxw+Eq3PGvG4fCgjCqq27pebY6PVYNmmw9C7MqQkKvo4+k+YiT+22aN1/PJZv2q5JXc7zsHD8sdcP7QdPRq4ardF1zKwPqj2xDoBBnzU/bLwLWDqWdyS/fIykB+mgg4PeBnbFa1s6Ck3ly5UdOp3YBhPRMbFCO0Oag06nQ75c2YXHv3gZbrFlDHlzZYde8Huc4umLMOkuOLmyZYW9XfrfwuV5WLim3XtS4+rshCye7sLj7z9+hoTE9PfK2sXJEVkze0jPM+bn0Vgeri7wNGLN+O37jzSIxrycHTOhdJECKFUk/+v/Wzg/cufwhrurM9xd3t3sLTI6BhGR0XgR/grBN0Lwz7VbuHjtNi5cu2WVbSLT03Vb5rMxxZPnodI1IzLX7ZjYOIsV2WdysEeOrPK7kj98+lyzt5U5smZGmaIFUapwfhQvmBf5PsqBbF6eyOntlWYS9zIiEncfPsGdB09w+8EjXLh6C/7ngj/YJgFJT28h+dltJg6q+AASByIiSh9cnBzh6uyI2LgEhEdGprve90Tm5O7iDL1eDxdnR0RGxSA2Lh4xcWwG8LaUxCFdPHZ0d3fH/v37LR3GO/bv34+RI0daOgwiIqJ/RUbHsD6BSFDK0jxz1kakZ+kicbC1tUX58tZXUHTrlnEFhERERERE6Y11F0cTEREREZFVYOJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkiIkDEREREREpYuJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkiIkDEREREREpYuJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkyNbSAYh48eIFdDqdpcMgIiIiIvpg8Y0DEREREREpsuo3DjoXT9jm9bV0GAL4NoSIiIiIMjbrThxsHQAXB0uHQURERET0weNSJSIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBTpABh0Th7QOXtaOhYiIiIiIrIyhqgwGKJfvk4cLB0MERERERFZt/8DIAA0PUbrwnkAAAAASUVORK5CYII=";
function fL({ iconColor: p }) {
  return /* @__PURE__ */ vt.jsx("svg", { width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ vt.jsx("path", { d: "m60.875 276.5 99.766 53.922 174.7-143.03-161.79 206.74v77.512l72.832-96.914 115.88 63.434v0.003906c5.7188 3.1289 12.594 3.3203 18.477 0.51563 5.8828-2.8086 10.059-8.2734 11.219-14.688l69.797-384.68-400.35 201.14c-4.4648 2.2227-7.957 6.0117-9.8047 10.645-1.8477 4.6328-1.9219 9.7852-0.21094 14.469 1.7109 4.6875 5.0859 8.5781 9.4883 10.93z", fill: p }) });
}
function dL({ iconColor: p }) {
  return /* @__PURE__ */ vt.jsx("svg", { width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ vt.jsx("path", { d: "m256 112c89.859 0 172.86 51.543 219.85 136.24l4.3047 7.7617-4.3047 7.7617c-46.973 84.691-129.99 136.24-219.85 136.24-89.852 0-172.86-51.547-219.84-136.24l-4.3047-7.7617 4.3047-7.7617c46.98-84.695 129.99-136.24 219.84-136.24zm0 32c-73.402 0-141.95 39.918-184.33 107.04l-3.0508 4.9609 3.0508 4.9609c42.375 67.117 110.93 107.04 184.33 107.04 75.199 0 145.3-41.895 187.38-112-42.086-70.109-112.19-112-187.38-112zm0 32c44.184 0 80 35.816 80 80s-35.816 80-80 80-80-35.816-80-80 35.816-80 80-80zm0 32c-26.508 0-48 21.492-48 48s21.492 48 48 48 48-21.492 48-48-21.492-48-48-48z", fill: p }) });
}
function pL({ iconColor: p }) {
  return /* @__PURE__ */ vt.jsx("svg", { width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ vt.jsxs("g", { fill: p, children: [
    /* @__PURE__ */ vt.jsx("path", { d: "m83.84 360.16 22.879-22.719c-25.051-22.496-44.734-50.328-57.598-81.441 32.48-81.121 122.08-144 206.88-144 21.824 0.28906 43.445 4.1797 64 11.52l24.801-24.961c-28.117-11.883-58.277-18.184-88.801-18.559-52.152 1.9609-102.59 19.16-145.07 49.473-42.48 30.312-75.152 72.41-93.969 121.09-1.2734 3.5156-1.2734 7.3672 0 10.883 14.211 37.711 37.125 71.535 66.879 98.719z" }),
    /* @__PURE__ */ vt.jsx("path", { d: "m192 251.68c1.1133-15.332 7.707-29.754 18.578-40.621 10.871-10.871 25.289-17.465 40.621-18.578l28.961-29.121c-16.227-4.2734-33.293-4.2148-49.492 0.16016-16.199 4.3789-30.969 12.93-42.836 24.793-11.863 11.867-20.414 26.637-24.793 42.836-4.375 16.199-4.4336 33.266-0.16016 49.492z" }),
    /* @__PURE__ */ vt.jsx("path", { d: "m495.04 250.56c-18.344-47.789-50.27-89.168-91.84-119.04l76.801-76.961-22.559-22.559-425.44 425.44 22.559 22.559 81.602-81.602c36.383 21.344 77.664 32.922 119.84 33.602 52.152-1.9609 102.59-19.16 145.07-49.473 42.48-30.312 75.152-72.41 93.969-121.09 1.2695-3.5156 1.2695-7.3672 0-10.883zm-175.04 5.4414c-0.066406 11.203-3.0742 22.188-8.7188 31.863s-13.73 17.703-23.449 23.273c-9.7148 5.5703-20.727 8.4961-31.93 8.4766-11.199-0.015625-22.203-2.9727-31.902-8.5742l87.039-87.039c5.7539 9.6914 8.8438 20.73 8.9609 32zm-64 144c-33.566-0.58594-66.496-9.2578-96-25.281l40.641-40.641c18.484 12.828 40.887 18.754 63.297 16.746 22.41-2.0078 43.402-11.824 59.309-27.734 15.914-15.91 25.73-36.902 27.734-59.312 2.0117-22.41-3.9141-44.812-16.742-63.297l45.922-45.922c36.715 25.199 65.426 60.406 82.719 101.44-32.48 81.121-122.08 144-206.88 144z" })
  ] }) });
}
document.getElementById("tw-chat-ui");
const WS = JSON.parse(document.getElementById("tw-chat-ui-data").textContent), qS = (p, h) => ({
  content: p,
  role: h
}), vL = ({ iconColor: p }) => {
  const [h, y] = di.useState([qS(WS.greeting, "assistant")]), [C, O] = di.useState(""), [U, _] = di.useState(!1), [E, ce] = di.useState(!1), [re, W] = di.useState(0);
  di.useEffect(() => {
    Y();
  }, []);
  const Y = () => {
    document.getElementById("messageText").focus();
  }, ie = (J) => {
    J.preventDefault();
    let xe = h;
    _(!0);
    const ht = {
      message: C
    };
    re && (ht.threadID = re), xe = [...xe, qS(C, "user")], y(xe), Z_.post("/wp-json/tw-chat-ui/v1/chat-response/", ht).then((ct) => {
      console.log(ct.data), ct.data.data.length > 0 && y([...xe, qS(ct.data.data[0].content[0].text.value, "assistant")]), O(""), _(!1), W(ct.data.thread_id), Y();
    }).catch((ct) => console.error("Error fetching messages:", ct));
  }, Se = (J) => {
    O(J.target.value);
  }, G = () => E ? /* @__PURE__ */ vt.jsxs(vt.Fragment, { children: [
    /* @__PURE__ */ vt.jsx(pL, { iconColor: p }),
    " Hide Disclaimer"
  ] }) : /* @__PURE__ */ vt.jsxs(vt.Fragment, { children: [
    /* @__PURE__ */ vt.jsx(dL, { iconColor: p }),
    " Show Disclaimer "
  ] });
  return /* @__PURE__ */ vt.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ vt.jsxs("div", { className: "chat-messages", children: [
      h.map((J, xe) => /* @__PURE__ */ vt.jsx("p", { className: `message ${J.role}`, children: J.content }, xe)),
      U && /* @__PURE__ */ vt.jsx("div", { className: "waiting-indicator", children: /* @__PURE__ */ vt.jsx(sL, { color: "#333" }) })
    ] }),
    /* @__PURE__ */ vt.jsxs(
      "form",
      {
        onSubmit: ie,
        className: U ? "chat-input-container chat-opacity-0" : "chat-input-container",
        children: [
          /* @__PURE__ */ vt.jsx("label", { htmlFor: "messageText", children: "Send Message" }),
          /* @__PURE__ */ vt.jsx("input", { placeholder: "Enter your message...", id: "messageText", type: "text", onChange: Se, value: C, name: "message", required: "required" }),
          /* @__PURE__ */ vt.jsxs("button", { children: [
            /* @__PURE__ */ vt.jsx(fL, { iconColor: p }),
            /* @__PURE__ */ vt.jsx("span", { className: "sr-only", children: "Send Message" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ vt.jsxs("div", { className: "chat-disclaimer-container", children: [
      E && /* @__PURE__ */ vt.jsx("div", { dangerouslySetInnerHTML: { __html: WS.disclaimer } }),
      /* @__PURE__ */ vt.jsxs("div", { className: "chat-disclaimer-links", children: [
        WS.disclaimer && /* @__PURE__ */ vt.jsx("button", { onClick: () => ce(!E), children: G() }),
        /* @__PURE__ */ vt.jsx("a", { className: "brand-link", href: "https://treyworks.com/?utm_source=tw-chat-ui&utm_medium=referral", target: "_blank", children: /* @__PURE__ */ vt.jsx("img", { src: cL, alt: "Powered by Treyworks" }) })
      ] })
    ] })
  ] });
};
function hL({ iconColor: p }) {
  return /* @__PURE__ */ vt.jsx("svg", { class: "tw-chat-icon", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ vt.jsx("path", { d: "m512 179.3c0 55.102-26.008 104.11-66.41 135.45-28.969 22.477-151 107.22-190.54 107.22l8.6211-71.371h-92.371c-94.645 0-171.3-76.695-171.3-171.3v-7.9961c0-94.625 76.656-171.3 171.3-171.3h169.41c94.594 0 171.29 76.676 171.29 171.3zm-384.48-28.574c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.609 0 28.266-12.691 28.266-28.297 0.007813-15.621-12.648-28.277-28.266-28.277zm128.48 0c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.617 0 28.277-12.691 28.277-28.297-0.011719-15.621-12.66-28.277-28.277-28.277zm128.48 0c-15.641 0-28.266 12.656-28.266 28.277 0 15.605 12.633 28.297 28.266 28.297 15.617 0 28.266-12.691 28.266-28.297-0.003907-15.621-12.648-28.277-28.266-28.277z", fill: p }) });
}
var mL = getComputedStyle(document.documentElement), oT = mL.getPropertyValue("--tw-chat-icon-color").trim();
function yL() {
  const [p, h] = di.useState(!1), y = () => {
    p || document.getElementById("messageText").focus(), h(!p);
  };
  return /* @__PURE__ */ vt.jsxs("div", { className: "chat-container", children: [
    /* @__PURE__ */ vt.jsx("div", { className: p ? "" : "chat-opacity-0", children: /* @__PURE__ */ vt.jsx(vL, { iconColor: oT }) }),
    /* @__PURE__ */ vt.jsxs("button", { className: "chat-bubble", onClick: y, children: [
      /* @__PURE__ */ vt.jsx(hL, { iconColor: oT }),
      "Chat"
    ] })
  ] });
}
const gL = document.getElementById("tw-chat-ui");
lv.createRoot(gL).render(
  /* @__PURE__ */ vt.jsx(bk.StrictMode, { children: /* @__PURE__ */ vt.jsx(yL, {}) })
);
