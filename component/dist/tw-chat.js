var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sT(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var XS = { exports: {} }, tv = {}, GS = { exports: {} }, iv = { exports: {} };
iv.exports;
var VC;
function wk() {
  return VC || (VC = 1, function(p, h) {
    var m = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    m.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = "18.2.0", x = Symbol.for("react.element"), _ = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), W = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), Ne = Symbol.for("react.offscreen"), yt = Symbol.iterator, st = "@@iterator";
      function Fe(g) {
        if (g === null || typeof g != "object")
          return null;
        var b = yt && g[yt] || g[st];
        return typeof b == "function" ? b : null;
      }
      var Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Dt = {
        transition: null
      }, _e = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, pt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ze = {}, vn = null;
      function jt(g) {
        vn = g;
      }
      Ze.setExtraStackFrame = function(g) {
        vn = g;
      }, Ze.getCurrentStack = null, Ze.getStackAddendum = function() {
        var g = "";
        vn && (g += vn);
        var b = Ze.getCurrentStack;
        return b && (g += b() || ""), g;
      };
      var Ct = !1, it = !1, Ht = !1, Xe = !1, lt = !1, kt = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: Dt,
        ReactCurrentOwner: pt
      };
      kt.ReactDebugCurrentFrame = Ze, kt.ReactCurrentActQueue = _e;
      function ot(g) {
        {
          for (var b = arguments.length, j = new Array(b > 1 ? b - 1 : 0), B = 1; B < b; B++)
            j[B - 1] = arguments[B];
          we("warn", g, j);
        }
      }
      function Z(g) {
        {
          for (var b = arguments.length, j = new Array(b > 1 ? b - 1 : 0), B = 1; B < b; B++)
            j[B - 1] = arguments[B];
          we("error", g, j);
        }
      }
      function we(g, b, j) {
        {
          var B = kt.ReactDebugCurrentFrame, ue = B.getStackAddendum();
          ue !== "" && (b += "%s", j = j.concat([ue]));
          var ke = j.map(function(Ee) {
            return String(Ee);
          });
          ke.unshift("Warning: " + b), Function.prototype.apply.call(console[g], console, ke);
        }
      }
      var D = {};
      function $(g, b) {
        {
          var j = g.constructor, B = j && (j.displayName || j.name) || "ReactClass", ue = B + "." + b;
          if (D[ue])
            return;
          Z("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", b, B), D[ue] = !0;
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
        enqueueReplaceState: function(g, b, j, B) {
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
        enqueueSetState: function(g, b, j, B) {
          $(g, "setState");
        }
      }, Ge = Object.assign, Qe = {};
      Object.freeze(Qe);
      function gt(g, b, j) {
        this.props = g, this.context = b, this.refs = Qe, this.updater = j || be;
      }
      gt.prototype.isReactComponent = {}, gt.prototype.setState = function(g, b) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, b, "setState");
      }, gt.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var vt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, St = function(g, b) {
          Object.defineProperty(gt.prototype, g, {
            get: function() {
              ot("%s(...) is deprecated in plain JavaScript React classes. %s", b[0], b[1]);
            }
          });
        };
        for (var ht in vt)
          vt.hasOwnProperty(ht) && St(ht, vt[ht]);
      }
      function ln() {
      }
      ln.prototype = gt.prototype;
      function nr(g, b, j) {
        this.props = g, this.context = b, this.refs = Qe, this.updater = j || be;
      }
      var rr = nr.prototype = new ln();
      rr.constructor = nr, Ge(rr, gt.prototype), rr.isPureReactComponent = !0;
      function Vr() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var gr = Array.isArray;
      function Rn(g) {
        return gr(g);
      }
      function ar(g) {
        {
          var b = typeof Symbol == "function" && Symbol.toStringTag, j = b && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return j;
        }
      }
      function Vn(g) {
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
        if (Vn(g))
          return Z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(g)), An(g);
      }
      function Or(g, b, j) {
        var B = g.displayName;
        if (B)
          return B;
        var ue = b.displayName || b.name || "";
        return ue !== "" ? j + "(" + ue + ")" : j;
      }
      function Sr(g) {
        return g.displayName || "Context";
      }
      function Bn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && Z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case k:
            return "Fragment";
          case _:
            return "Portal";
          case ce:
            return "Profiler";
          case E:
            return "StrictMode";
          case ae:
            return "Suspense";
          case Se:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case W:
              var b = g;
              return Sr(b) + ".Consumer";
            case ne:
              var j = g;
              return Sr(j._context) + ".Provider";
            case Y:
              return Or(g, g.render, "ForwardRef");
            case G:
              var B = g.displayName || null;
              return B !== null ? B : Bn(g.type) || "Memo";
            case K: {
              var ue = g, ke = ue._payload, Ee = ue._init;
              try {
                return Bn(Ee(ke));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var fa = Object.prototype.hasOwnProperty, da = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, pa, ir;
      ir = {};
      function Dr(g) {
        if (fa.call(g, "ref")) {
          var b = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function dn(g) {
        if (fa.call(g, "key")) {
          var b = Object.getOwnPropertyDescriptor(g, "key").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function va(g, b) {
        var j = function() {
          Er || (Er = !0, Z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        j.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: j,
          configurable: !0
        });
      }
      function ha(g, b) {
        var j = function() {
          pa || (pa = !0, Z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        j.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: j,
          configurable: !0
        });
      }
      function ma(g) {
        if (typeof g.ref == "string" && pt.current && g.__self && pt.current.stateNode !== g.__self) {
          var b = Bn(pt.current.type);
          ir[b] || (Z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b, g.ref), ir[b] = !0);
        }
      }
      var ve = function(g, b, j, B, ue, ke, Ee) {
        var Ke = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: x,
          // Built-in properties that belong on the element
          type: g,
          key: b,
          ref: j,
          props: Ee,
          // Record the component responsible for creating this element.
          _owner: ke
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
          value: B
        }), Object.defineProperty(Ke, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ue
        }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
      };
      function Ie(g, b, j) {
        var B, ue = {}, ke = null, Ee = null, Ke = null, dt = null;
        if (b != null) {
          Dr(b) && (Ee = b.ref, ma(b)), dn(b) && (In(b.key), ke = "" + b.key), Ke = b.__self === void 0 ? null : b.__self, dt = b.__source === void 0 ? null : b.__source;
          for (B in b)
            fa.call(b, B) && !da.hasOwnProperty(B) && (ue[B] = b[B]);
        }
        var Bt = arguments.length - 2;
        if (Bt === 1)
          ue.children = j;
        else if (Bt > 1) {
          for (var qt = Array(Bt), Xt = 0; Xt < Bt; Xt++)
            qt[Xt] = arguments[Xt + 2];
          Object.freeze && Object.freeze(qt), ue.children = qt;
        }
        if (g && g.defaultProps) {
          var Gt = g.defaultProps;
          for (B in Gt)
            ue[B] === void 0 && (ue[B] = Gt[B]);
        }
        if (ke || Ee) {
          var un = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          ke && va(ue, un), Ee && ha(ue, un);
        }
        return ve(g, ke, Ee, Ke, dt, pt.current, ue);
      }
      function ct(g, b) {
        var j = ve(g.type, b, g.ref, g._self, g._source, g._owner, g.props);
        return j;
      }
      function Pt(g, b, j) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var B, ue = Ge({}, g.props), ke = g.key, Ee = g.ref, Ke = g._self, dt = g._source, Bt = g._owner;
        if (b != null) {
          Dr(b) && (Ee = b.ref, Bt = pt.current), dn(b) && (In(b.key), ke = "" + b.key);
          var qt;
          g.type && g.type.defaultProps && (qt = g.type.defaultProps);
          for (B in b)
            fa.call(b, B) && !da.hasOwnProperty(B) && (b[B] === void 0 && qt !== void 0 ? ue[B] = qt[B] : ue[B] = b[B]);
        }
        var Xt = arguments.length - 2;
        if (Xt === 1)
          ue.children = j;
        else if (Xt > 1) {
          for (var Gt = Array(Xt), un = 0; un < Xt; un++)
            Gt[un] = arguments[un + 2];
          ue.children = Gt;
        }
        return ve(g.type, ke, Ee, Ke, dt, Bt, ue);
      }
      function Mt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === x;
      }
      var Dn = ".", hn = ":";
      function Rr(g) {
        var b = /[=:]/g, j = {
          "=": "=0",
          ":": "=2"
        }, B = g.replace(b, function(ue) {
          return j[ue];
        });
        return "$" + B;
      }
      var Wt = !1, Qn = /\/+/g;
      function Vt(g) {
        return g.replace(Qn, "$&/");
      }
      function $t(g, b) {
        return typeof g == "object" && g !== null && g.key != null ? (In(g.key), Rr("" + g.key)) : b.toString(36);
      }
      function ei(g, b, j, B, ue) {
        var ke = typeof g;
        (ke === "undefined" || ke === "boolean") && (g = null);
        var Ee = !1;
        if (g === null)
          Ee = !0;
        else
          switch (ke) {
            case "string":
            case "number":
              Ee = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case x:
                case _:
                  Ee = !0;
              }
          }
        if (Ee) {
          var Ke = g, dt = ue(Ke), Bt = B === "" ? Dn + $t(Ke, 0) : B;
          if (Rn(dt)) {
            var qt = "";
            Bt != null && (qt = Vt(Bt) + "/"), ei(dt, b, qt, "", function(ad) {
              return ad;
            });
          } else
            dt != null && (Mt(dt) && (dt.key && (!Ke || Ke.key !== dt.key) && In(dt.key), dt = ct(
              dt,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              j + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (dt.key && (!Ke || Ke.key !== dt.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Vt("" + dt.key) + "/"
              ) : "") + Bt
            )), b.push(dt));
          return 1;
        }
        var Xt, Gt, un = 0, Lt = B === "" ? Dn : B + hn;
        if (Rn(g))
          for (var wl = 0; wl < g.length; wl++)
            Xt = g[wl], Gt = Lt + $t(Xt, wl), un += ei(Xt, b, j, Gt, ue);
        else {
          var ru = Fe(g);
          if (typeof ru == "function") {
            var ds = g;
            ru === ds.entries && (Wt || ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Wt = !0);
            for (var ps = ru.call(ds), Yi, vs = 0; !(Yi = ps.next()).done; )
              Xt = Yi.value, Gt = Lt + $t(Xt, vs++), un += ei(Xt, b, j, Gt, ue);
          } else if (ke === "object") {
            var hs = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (hs === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : hs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return un;
      }
      function _a(g, b, j) {
        if (g == null)
          return g;
        var B = [], ue = 0;
        return ei(g, B, "", "", function(ke) {
          return b.call(j, ke, ue++);
        }), B;
      }
      function ml(g) {
        var b = 0;
        return _a(g, function() {
          b++;
        }), b;
      }
      function ro(g, b, j) {
        _a(g, function() {
          b.apply(this, arguments);
        }, j);
      }
      function ao(g) {
        return _a(g, function(b) {
          return b;
        }) || [];
      }
      function yl(g) {
        if (!Mt(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function ti(g) {
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
          $$typeof: ne,
          _context: b
        };
        var j = !1, B = !1, ue = !1;
        {
          var ke = {
            $$typeof: W,
            _context: b
          };
          Object.defineProperties(ke, {
            Provider: {
              get: function() {
                return B || (B = !0, Z("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), b.Provider;
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
                ue || (ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Ee), ue = !0);
              }
            }
          }), b.Consumer = ke;
        }
        return b._currentRenderer = null, b._currentRenderer2 = null, b;
      }
      var ni = -1, La = 0, Ii = 1, Br = 2;
      function Yr(g) {
        if (g._status === ni) {
          var b = g._result, j = b();
          if (j.then(function(ke) {
            if (g._status === La || g._status === ni) {
              var Ee = g;
              Ee._status = Ii, Ee._result = ke;
            }
          }, function(ke) {
            if (g._status === La || g._status === ni) {
              var Ee = g;
              Ee._status = Br, Ee._result = ke;
            }
          }), g._status === ni) {
            var B = g;
            B._status = La, B._result = j;
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
      function ya(g) {
        var b = {
          // We use these fields to store the result.
          _status: ni,
          _result: g
        }, j = {
          $$typeof: K,
          _payload: b,
          _init: Yr
        };
        {
          var B, ue;
          Object.defineProperties(j, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return B;
              },
              set: function(ke) {
                Z("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), B = ke, Object.defineProperty(j, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ue;
              },
              set: function(ke) {
                Z("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ue = ke, Object.defineProperty(j, "propTypes", {
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
            set: function(B) {
              j = B, !g.name && !g.displayName && (g.displayName = B);
            }
          });
        }
        return b;
      }
      var O;
      O = Symbol.for("react.module.reference");
      function re(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === k || g === ce || lt || g === E || g === ae || g === Se || Xe || g === Ne || Ct || it || Ht || typeof g == "object" && g !== null && (g.$$typeof === K || g.$$typeof === G || g.$$typeof === ne || g.$$typeof === W || g.$$typeof === Y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === O || g.getModuleId !== void 0));
      }
      function de(g, b) {
        re(g) || Z("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var j = {
          $$typeof: G,
          type: g,
          compare: b === void 0 ? null : b
        };
        {
          var B;
          Object.defineProperty(j, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(ue) {
              B = ue, !g.name && !g.displayName && (g.displayName = ue);
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
      function mt(g) {
        var b = he();
        if (g._context !== void 0) {
          var j = g._context;
          j.Consumer === g ? Z("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : j.Provider === g && Z("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return b.useContext(g);
      }
      function wt(g) {
        var b = he();
        return b.useState(g);
      }
      function ut(g, b, j) {
        var B = he();
        return B.useReducer(g, b, j);
      }
      function je(g) {
        var b = he();
        return b.useRef(g);
      }
      function Fn(g, b) {
        var j = he();
        return j.useEffect(g, b);
      }
      function en(g, b) {
        var j = he();
        return j.useInsertionEffect(g, b);
      }
      function tn(g, b) {
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
      function nn(g, b, j) {
        var B = he();
        return B.useImperativeHandle(g, b, j);
      }
      function Wr(g, b) {
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
      function ft() {
        var g = he();
        return g.useId();
      }
      function io(g, b, j) {
        var B = he();
        return B.useSyncExternalStore(g, b, j);
      }
      var ji = 0, gl, qr, ns, kr, rs, as, is;
      function lo() {
      }
      lo.__reactDisabledLog = !0;
      function Qo() {
        {
          if (ji === 0) {
            gl = console.log, qr = console.info, ns = console.warn, kr = console.error, rs = console.group, as = console.groupCollapsed, is = console.groupEnd;
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
              log: Ge({}, g, {
                value: gl
              }),
              info: Ge({}, g, {
                value: qr
              }),
              warn: Ge({}, g, {
                value: ns
              }),
              error: Ge({}, g, {
                value: kr
              }),
              group: Ge({}, g, {
                value: rs
              }),
              groupCollapsed: Ge({}, g, {
                value: as
              }),
              groupEnd: Ge({}, g, {
                value: is
              })
            });
          }
          ji < 0 && Z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var hi = kt.ReactCurrentDispatcher, Na;
      function Sl(g, b, j) {
        {
          if (Na === void 0)
            try {
              throw Error();
            } catch (ue) {
              var B = ue.stack.trim().match(/\n( *(at )?)/);
              Na = B && B[1] || "";
            }
          return `
` + Na + g;
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
        var B;
        mi = !0;
        var ue = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ke;
        ke = hi.current, hi.current = null, Qo();
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
              } catch (Lt) {
                B = Lt;
              }
              Reflect.construct(g, [], Ee);
            } else {
              try {
                Ee.call();
              } catch (Lt) {
                B = Lt;
              }
              g.call(Ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Lt) {
              B = Lt;
            }
            g();
          }
        } catch (Lt) {
          if (Lt && B && typeof Lt.stack == "string") {
            for (var Ke = Lt.stack.split(`
`), dt = B.stack.split(`
`), Bt = Ke.length - 1, qt = dt.length - 1; Bt >= 1 && qt >= 0 && Ke[Bt] !== dt[qt]; )
              qt--;
            for (; Bt >= 1 && qt >= 0; Bt--, qt--)
              if (Ke[Bt] !== dt[qt]) {
                if (Bt !== 1 || qt !== 1)
                  do
                    if (Bt--, qt--, qt < 0 || Ke[Bt] !== dt[qt]) {
                      var Xt = `
` + Ke[Bt].replace(" at new ", " at ");
                      return g.displayName && Xt.includes("<anonymous>") && (Xt = Xt.replace("<anonymous>", g.displayName)), typeof g == "function" && oo.set(g, Xt), Xt;
                    }
                  while (Bt >= 1 && qt >= 0);
                break;
              }
          }
        } finally {
          mi = !1, hi.current = ke, Hi(), Error.prepareStackTrace = ue;
        }
        var Gt = g ? g.displayName || g.name : "", un = Gt ? Sl(Gt) : "";
        return typeof g == "function" && oo.set(g, un), un;
      }
      function ls(g, b, j) {
        return El(g, !1);
      }
      function os(g) {
        var b = g.prototype;
        return !!(b && b.isReactComponent);
      }
      function Tt(g, b, j) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return El(g, os(g));
        if (typeof g == "string")
          return Sl(g);
        switch (g) {
          case ae:
            return Sl("Suspense");
          case Se:
            return Sl("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case Y:
              return ls(g.render);
            case G:
              return Tt(g.type, b, j);
            case K: {
              var B = g, ue = B._payload, ke = B._init;
              try {
                return Tt(ke(ue), b, j);
              } catch {
              }
            }
          }
        return "";
      }
      var us = {}, Jo = kt.ReactDebugCurrentFrame;
      function Rl(g) {
        if (g) {
          var b = g._owner, j = Tt(g.type, g._source, b ? b.type : null);
          Jo.setExtraStackFrame(j);
        } else
          Jo.setExtraStackFrame(null);
      }
      function ss(g, b, j, B, ue) {
        {
          var ke = Function.call.bind(fa);
          for (var Ee in g)
            if (ke(g, Ee)) {
              var Ke = void 0;
              try {
                if (typeof g[Ee] != "function") {
                  var dt = Error((B || "React class") + ": " + j + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw dt.name = "Invariant Violation", dt;
                }
                Ke = g[Ee](b, Ee, B, j, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Bt) {
                Ke = Bt;
              }
              Ke && !(Ke instanceof Error) && (Rl(ue), Z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", j, Ee, typeof Ke), Rl(null)), Ke instanceof Error && !(Ke.message in us) && (us[Ke.message] = !0, Rl(ue), Z("Failed %s type: %s", j, Ke.message), Rl(null));
            }
        }
      }
      function _t(g) {
        if (g) {
          var b = g._owner, j = Tt(g.type, g._source, b ? b.type : null);
          jt(j);
        } else
          jt(null);
      }
      var Ko;
      Ko = !1;
      function so() {
        if (pt.current) {
          var g = Bn(pt.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function et(g) {
        if (g !== void 0) {
          var b = g.fileName.replace(/^.*[\\\/]/, ""), j = g.lineNumber;
          return `

Check your code at ` + b + ":" + j + ".";
        }
        return "";
      }
      function ri(g) {
        return g != null ? et(g.__source) : "";
      }
      var mn = {};
      function Xr(g) {
        var b = so();
        if (!b) {
          var j = typeof g == "string" ? g : g.displayName || g.name;
          j && (b = `

Check the top-level render call using <` + j + ">.");
        }
        return b;
      }
      function Ma(g, b) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var j = Xr(b);
          if (!mn[j]) {
            mn[j] = !0;
            var B = "";
            g && g._owner && g._owner !== pt.current && (B = " It was passed a child from " + Bn(g._owner.type) + "."), _t(g), Z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', j, B), _t(null);
          }
        }
      }
      function Cl(g, b) {
        if (typeof g == "object") {
          if (Rn(g))
            for (var j = 0; j < g.length; j++) {
              var B = g[j];
              Mt(B) && Ma(B, b);
            }
          else if (Mt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var ue = Fe(g);
            if (typeof ue == "function" && ue !== g.entries)
              for (var ke = ue.call(g), Ee; !(Ee = ke.next()).done; )
                Mt(Ee.value) && Ma(Ee.value, b);
          }
        }
      }
      function on(g) {
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
            var B = Bn(b);
            ss(j, g.props, "prop", B, g);
          } else if (b.PropTypes !== void 0 && !Ko) {
            Ko = !0;
            var ue = Bn(b);
            Z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
          }
          typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && Z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function yn(g) {
        {
          for (var b = Object.keys(g.props), j = 0; j < b.length; j++) {
            var B = b[j];
            if (B !== "children" && B !== "key") {
              _t(g), Z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), _t(null);
              break;
            }
          }
          g.ref !== null && (_t(g), Z("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
        }
      }
      function cs(g, b, j) {
        var B = re(g);
        if (!B) {
          var ue = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = ri(b);
          ke ? ue += ke : ue += so();
          var Ee;
          g === null ? Ee = "null" : Rn(g) ? Ee = "array" : g !== void 0 && g.$$typeof === x ? (Ee = "<" + (Bn(g.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, Z("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ue);
        }
        var Ke = Ie.apply(this, arguments);
        if (Ke == null)
          return Ke;
        if (B)
          for (var dt = 2; dt < arguments.length; dt++)
            Cl(arguments[dt], g);
        return g === k ? yn(Ke) : on(Ke), Ke;
      }
      var lr = !1;
      function Gr(g) {
        var b = cs.bind(null, g);
        return b.type = g, lr || (lr = !0, ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(b, "type", {
          enumerable: !1,
          get: function() {
            return ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), b;
      }
      function ai(g, b, j) {
        for (var B = Pt.apply(this, arguments), ue = 2; ue < arguments.length; ue++)
          Cl(arguments[ue], B.type);
        return on(B), B;
      }
      function Zo(g, b) {
        var j = Dt.transition;
        Dt.transition = {};
        var B = Dt.transition;
        Dt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (Dt.transition = j, j === null && B._updatedFibers) {
            var ue = B._updatedFibers.size;
            ue > 10 && ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), B._updatedFibers.clear();
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
              var ke = new MessageChannel();
              ke.port1.onmessage = ue, ke.port2.postMessage(void 0);
            };
          }
        return fo(g);
      }
      var Ua = 0, Pi = !1;
      function $o(g) {
        {
          var b = Ua;
          Ua++, _e.current === null && (_e.current = []);
          var j = _e.isBatchingLegacy, B;
          try {
            if (_e.isBatchingLegacy = !0, B = g(), !j && _e.didScheduleLegacyUpdate) {
              var ue = _e.current;
              ue !== null && (_e.didScheduleLegacyUpdate = !1, Bi(ue));
            }
          } catch (Gt) {
            throw Vi(b), Gt;
          } finally {
            _e.isBatchingLegacy = j;
          }
          if (B !== null && typeof B == "object" && typeof B.then == "function") {
            var ke = B, Ee = !1, Ke = {
              then: function(Gt, un) {
                Ee = !0, ke.then(function(Lt) {
                  Vi(b), Ua === 0 ? eu(Lt, Gt, un) : Gt(Lt);
                }, function(Lt) {
                  Vi(b), un(Lt);
                });
              }
            };
            return !Pi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ee || (Pi = !0, Z("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ke;
          } else {
            var dt = B;
            if (Vi(b), Ua === 0) {
              var Bt = _e.current;
              Bt !== null && (Bi(Bt), _e.current = null);
              var qt = {
                then: function(Gt, un) {
                  _e.current === null ? (_e.current = [], eu(dt, Gt, un)) : Gt(dt);
                }
              };
              return qt;
            } else {
              var Xt = {
                then: function(Gt, un) {
                  Gt(dt);
                }
              };
              return Xt;
            }
          }
        }
      }
      function Vi(g) {
        g !== Ua - 1 && Z("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = g;
      }
      function eu(g, b, j) {
        {
          var B = _e.current;
          if (B !== null)
            try {
              Bi(B), Tl(function() {
                B.length === 0 ? (_e.current = null, b(g)) : eu(g, b, j);
              });
            } catch (ue) {
              j(ue);
            }
          else
            b(g);
        }
      }
      var yi = !1;
      function Bi(g) {
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
          } catch (B) {
            throw g = g.slice(b + 1), B;
          } finally {
            yi = !1;
          }
        }
      }
      var tu = cs, fs = ai, ii = Gr, nu = {
        map: _a,
        forEach: ro,
        count: ml,
        toArray: ao,
        only: yl
      };
      h.Children = nu, h.Component = gt, h.Fragment = k, h.Profiler = ce, h.PureComponent = nr, h.StrictMode = E, h.Suspense = ae, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kt, h.cloneElement = fs, h.createContext = ti, h.createElement = tu, h.createFactory = ii, h.createRef = Vr, h.forwardRef = Fi, h.isValidElement = Mt, h.lazy = ya, h.memo = de, h.startTransition = Zo, h.unstable_act = $o, h.useCallback = Cr, h.useContext = mt, h.useDebugValue = Wr, h.useDeferredValue = vi, h.useEffect = Fn, h.useId = ft, h.useImperativeHandle = nn, h.useInsertionEffect = en, h.useLayoutEffect = tn, h.useMemo = pi, h.useReducer = ut, h.useRef = je, h.useState = wt, h.useSyncExternalStore = io, h.useTransition = ts, h.version = C, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(iv, iv.exports)), iv.exports;
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
var BC;
function bk() {
  if (BC)
    return Ot;
  BC = 1;
  var p = Symbol.for("react.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), k = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), ne = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function ae(D) {
    return D === null || typeof D != "object" ? null : (D = Y && D[Y] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var Se = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, G = Object.assign, K = {};
  function Ne(D, $, be) {
    this.props = D, this.context = $, this.refs = K, this.updater = be || Se;
  }
  Ne.prototype.isReactComponent = {}, Ne.prototype.setState = function(D, $) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, $, "setState");
  }, Ne.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function yt() {
  }
  yt.prototype = Ne.prototype;
  function st(D, $, be) {
    this.props = D, this.context = $, this.refs = K, this.updater = be || Se;
  }
  var Fe = st.prototype = new yt();
  Fe.constructor = st, G(Fe, Ne.prototype), Fe.isPureReactComponent = !0;
  var Be = Array.isArray, Dt = Object.prototype.hasOwnProperty, _e = { current: null }, pt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ze(D, $, be) {
    var Ge, Qe = {}, gt = null, vt = null;
    if ($ != null)
      for (Ge in $.ref !== void 0 && (vt = $.ref), $.key !== void 0 && (gt = "" + $.key), $)
        Dt.call($, Ge) && !pt.hasOwnProperty(Ge) && (Qe[Ge] = $[Ge]);
    var St = arguments.length - 2;
    if (St === 1)
      Qe.children = be;
    else if (1 < St) {
      for (var ht = Array(St), ln = 0; ln < St; ln++)
        ht[ln] = arguments[ln + 2];
      Qe.children = ht;
    }
    if (D && D.defaultProps)
      for (Ge in St = D.defaultProps, St)
        Qe[Ge] === void 0 && (Qe[Ge] = St[Ge]);
    return { $$typeof: p, type: D, key: gt, ref: vt, props: Qe, _owner: _e.current };
  }
  function vn(D, $) {
    return { $$typeof: p, type: D.type, key: $, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function jt(D) {
    return typeof D == "object" && D !== null && D.$$typeof === p;
  }
  function Ct(D) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(be) {
      return $[be];
    });
  }
  var it = /\/+/g;
  function Ht(D, $) {
    return typeof D == "object" && D !== null && D.key != null ? Ct("" + D.key) : $.toString(36);
  }
  function Xe(D, $, be, Ge, Qe) {
    var gt = typeof D;
    (gt === "undefined" || gt === "boolean") && (D = null);
    var vt = !1;
    if (D === null)
      vt = !0;
    else
      switch (gt) {
        case "string":
        case "number":
          vt = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case p:
            case h:
              vt = !0;
          }
      }
    if (vt)
      return vt = D, Qe = Qe(vt), D = Ge === "" ? "." + Ht(vt, 0) : Ge, Be(Qe) ? (be = "", D != null && (be = D.replace(it, "$&/") + "/"), Xe(Qe, $, be, "", function(ln) {
        return ln;
      })) : Qe != null && (jt(Qe) && (Qe = vn(Qe, be + (!Qe.key || vt && vt.key === Qe.key ? "" : ("" + Qe.key).replace(it, "$&/") + "/") + D)), $.push(Qe)), 1;
    if (vt = 0, Ge = Ge === "" ? "." : Ge + ":", Be(D))
      for (var St = 0; St < D.length; St++) {
        gt = D[St];
        var ht = Ge + Ht(gt, St);
        vt += Xe(gt, $, be, ht, Qe);
      }
    else if (ht = ae(D), typeof ht == "function")
      for (D = ht.call(D), St = 0; !(gt = D.next()).done; )
        gt = gt.value, ht = Ge + Ht(gt, St++), vt += Xe(gt, $, be, ht, Qe);
    else if (gt === "object")
      throw $ = String(D), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return vt;
  }
  function lt(D, $, be) {
    if (D == null)
      return D;
    var Ge = [], Qe = 0;
    return Xe(D, Ge, "", "", function(gt) {
      return $.call(be, gt, Qe++);
    }), Ge;
  }
  function kt(D) {
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
  var ot = { current: null }, Z = { transition: null }, we = { ReactCurrentDispatcher: ot, ReactCurrentBatchConfig: Z, ReactCurrentOwner: _e };
  return Ot.Children = { map: lt, forEach: function(D, $, be) {
    lt(D, function() {
      $.apply(this, arguments);
    }, be);
  }, count: function(D) {
    var $ = 0;
    return lt(D, function() {
      $++;
    }), $;
  }, toArray: function(D) {
    return lt(D, function($) {
      return $;
    }) || [];
  }, only: function(D) {
    if (!jt(D))
      throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, Ot.Component = Ne, Ot.Fragment = m, Ot.Profiler = x, Ot.PureComponent = st, Ot.StrictMode = C, Ot.Suspense = ce, Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, Ot.cloneElement = function(D, $, be) {
    if (D == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var Ge = G({}, D.props), Qe = D.key, gt = D.ref, vt = D._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (gt = $.ref, vt = _e.current), $.key !== void 0 && (Qe = "" + $.key), D.type && D.type.defaultProps)
        var St = D.type.defaultProps;
      for (ht in $)
        Dt.call($, ht) && !pt.hasOwnProperty(ht) && (Ge[ht] = $[ht] === void 0 && St !== void 0 ? St[ht] : $[ht]);
    }
    var ht = arguments.length - 2;
    if (ht === 1)
      Ge.children = be;
    else if (1 < ht) {
      St = Array(ht);
      for (var ln = 0; ln < ht; ln++)
        St[ln] = arguments[ln + 2];
      Ge.children = St;
    }
    return { $$typeof: p, type: D.type, key: Qe, ref: gt, props: Ge, _owner: vt };
  }, Ot.createContext = function(D) {
    return D = { $$typeof: k, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: _, _context: D }, D.Consumer = D;
  }, Ot.createElement = Ze, Ot.createFactory = function(D) {
    var $ = Ze.bind(null, D);
    return $.type = D, $;
  }, Ot.createRef = function() {
    return { current: null };
  }, Ot.forwardRef = function(D) {
    return { $$typeof: E, render: D };
  }, Ot.isValidElement = jt, Ot.lazy = function(D) {
    return { $$typeof: W, _payload: { _status: -1, _result: D }, _init: kt };
  }, Ot.memo = function(D, $) {
    return { $$typeof: ne, type: D, compare: $ === void 0 ? null : $ };
  }, Ot.startTransition = function(D) {
    var $ = Z.transition;
    Z.transition = {};
    try {
      D();
    } finally {
      Z.transition = $;
    }
  }, Ot.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Ot.useCallback = function(D, $) {
    return ot.current.useCallback(D, $);
  }, Ot.useContext = function(D) {
    return ot.current.useContext(D);
  }, Ot.useDebugValue = function() {
  }, Ot.useDeferredValue = function(D) {
    return ot.current.useDeferredValue(D);
  }, Ot.useEffect = function(D, $) {
    return ot.current.useEffect(D, $);
  }, Ot.useId = function() {
    return ot.current.useId();
  }, Ot.useImperativeHandle = function(D, $, be) {
    return ot.current.useImperativeHandle(D, $, be);
  }, Ot.useInsertionEffect = function(D, $) {
    return ot.current.useInsertionEffect(D, $);
  }, Ot.useLayoutEffect = function(D, $) {
    return ot.current.useLayoutEffect(D, $);
  }, Ot.useMemo = function(D, $) {
    return ot.current.useMemo(D, $);
  }, Ot.useReducer = function(D, $, be) {
    return ot.current.useReducer(D, $, be);
  }, Ot.useRef = function(D) {
    return ot.current.useRef(D);
  }, Ot.useState = function(D) {
    return ot.current.useState(D);
  }, Ot.useSyncExternalStore = function(D, $, be) {
    return ot.current.useSyncExternalStore(D, $, be);
  }, Ot.useTransition = function() {
    return ot.current.useTransition();
  }, Ot.version = "18.2.0", Ot;
}
var xk = {};
xk.NODE_ENV === "production" ? GS.exports = bk() : GS.exports = wk();
var Pr = GS.exports;
const Ok = /* @__PURE__ */ sT(Pr);
var YC;
function Dk() {
  if (YC)
    return tv;
  YC = 1;
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
    var h = Pr, m = Symbol.for("react.element"), C = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), ce = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), K = Symbol.iterator, Ne = "@@iterator";
    function yt(O) {
      if (O === null || typeof O != "object")
        return null;
      var re = K && O[K] || O[Ne];
      return typeof re == "function" ? re : null;
    }
    var st = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Fe(O) {
      {
        for (var re = arguments.length, de = new Array(re > 1 ? re - 1 : 0), he = 1; he < re; he++)
          de[he - 1] = arguments[he];
        Be("error", O, de);
      }
    }
    function Be(O, re, de) {
      {
        var he = st.ReactDebugCurrentFrame, mt = he.getStackAddendum();
        mt !== "" && (re += "%s", de = de.concat([mt]));
        var wt = de.map(function(ut) {
          return String(ut);
        });
        wt.unshift("Warning: " + re), Function.prototype.apply.call(console[O], console, wt);
      }
    }
    var Dt = !1, _e = !1, pt = !1, Ze = !1, vn = !1, jt;
    jt = Symbol.for("react.module.reference");
    function Ct(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === x || O === k || vn || O === _ || O === W || O === Y || Ze || O === G || Dt || _e || pt || typeof O == "object" && O !== null && (O.$$typeof === Se || O.$$typeof === ae || O.$$typeof === E || O.$$typeof === ce || O.$$typeof === ne || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === jt || O.getModuleId !== void 0));
    }
    function it(O, re, de) {
      var he = O.displayName;
      if (he)
        return he;
      var mt = re.displayName || re.name || "";
      return mt !== "" ? de + "(" + mt + ")" : de;
    }
    function Ht(O) {
      return O.displayName || "Context";
    }
    function Xe(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && Fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case x:
          return "Fragment";
        case C:
          return "Portal";
        case k:
          return "Profiler";
        case _:
          return "StrictMode";
        case W:
          return "Suspense";
        case Y:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case ce:
            var re = O;
            return Ht(re) + ".Consumer";
          case E:
            var de = O;
            return Ht(de._context) + ".Provider";
          case ne:
            return it(O, O.render, "ForwardRef");
          case ae:
            var he = O.displayName || null;
            return he !== null ? he : Xe(O.type) || "Memo";
          case Se: {
            var mt = O, wt = mt._payload, ut = mt._init;
            try {
              return Xe(ut(wt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var lt = Object.assign, kt = 0, ot, Z, we, D, $, be, Ge;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function gt() {
      {
        if (kt === 0) {
          ot = console.log, Z = console.info, we = console.warn, D = console.error, $ = console.group, be = console.groupCollapsed, Ge = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
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
        kt++;
      }
    }
    function vt() {
      {
        if (kt--, kt === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, O, {
              value: ot
            }),
            info: lt({}, O, {
              value: Z
            }),
            warn: lt({}, O, {
              value: we
            }),
            error: lt({}, O, {
              value: D
            }),
            group: lt({}, O, {
              value: $
            }),
            groupCollapsed: lt({}, O, {
              value: be
            }),
            groupEnd: lt({}, O, {
              value: Ge
            })
          });
        }
        kt < 0 && Fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var St = st.ReactCurrentDispatcher, ht;
    function ln(O, re, de) {
      {
        if (ht === void 0)
          try {
            throw Error();
          } catch (mt) {
            var he = mt.stack.trim().match(/\n( *(at )?)/);
            ht = he && he[1] || "";
          }
        return `
` + ht + O;
      }
    }
    var nr = !1, rr;
    {
      var Vr = typeof WeakMap == "function" ? WeakMap : Map;
      rr = new Vr();
    }
    function gr(O, re) {
      if (!O || nr)
        return "";
      {
        var de = rr.get(O);
        if (de !== void 0)
          return de;
      }
      var he;
      nr = !0;
      var mt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var wt;
      wt = St.current, St.current = null, gt();
      try {
        if (re) {
          var ut = function() {
            throw Error();
          };
          if (Object.defineProperty(ut.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ut, []);
            } catch (Wr) {
              he = Wr;
            }
            Reflect.construct(O, [], ut);
          } else {
            try {
              ut.call();
            } catch (Wr) {
              he = Wr;
            }
            O.call(ut.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Wr) {
            he = Wr;
          }
          O();
        }
      } catch (Wr) {
        if (Wr && he && typeof Wr.stack == "string") {
          for (var je = Wr.stack.split(`
`), Fn = he.stack.split(`
`), en = je.length - 1, tn = Fn.length - 1; en >= 1 && tn >= 0 && je[en] !== Fn[tn]; )
            tn--;
          for (; en >= 1 && tn >= 0; en--, tn--)
            if (je[en] !== Fn[tn]) {
              if (en !== 1 || tn !== 1)
                do
                  if (en--, tn--, tn < 0 || je[en] !== Fn[tn]) {
                    var Cr = `
` + je[en].replace(" at new ", " at ");
                    return O.displayName && Cr.includes("<anonymous>") && (Cr = Cr.replace("<anonymous>", O.displayName)), typeof O == "function" && rr.set(O, Cr), Cr;
                  }
                while (en >= 1 && tn >= 0);
              break;
            }
        }
      } finally {
        nr = !1, St.current = wt, vt(), Error.prepareStackTrace = mt;
      }
      var pi = O ? O.displayName || O.name : "", nn = pi ? ln(pi) : "";
      return typeof O == "function" && rr.set(O, nn), nn;
    }
    function Rn(O, re, de) {
      return gr(O, !1);
    }
    function ar(O) {
      var re = O.prototype;
      return !!(re && re.isReactComponent);
    }
    function Vn(O, re, de) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return gr(O, ar(O));
      if (typeof O == "string")
        return ln(O);
      switch (O) {
        case W:
          return ln("Suspense");
        case Y:
          return ln("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case ne:
            return Rn(O.render);
          case ae:
            return Vn(O.type, re, de);
          case Se: {
            var he = O, mt = he._payload, wt = he._init;
            try {
              return Vn(wt(mt), re, de);
            } catch {
            }
          }
        }
      return "";
    }
    var An = Object.prototype.hasOwnProperty, In = {}, Or = st.ReactDebugCurrentFrame;
    function Sr(O) {
      if (O) {
        var re = O._owner, de = Vn(O.type, O._source, re ? re.type : null);
        Or.setExtraStackFrame(de);
      } else
        Or.setExtraStackFrame(null);
    }
    function Bn(O, re, de, he, mt) {
      {
        var wt = Function.call.bind(An);
        for (var ut in O)
          if (wt(O, ut)) {
            var je = void 0;
            try {
              if (typeof O[ut] != "function") {
                var Fn = Error((he || "React class") + ": " + de + " type `" + ut + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[ut] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fn.name = "Invariant Violation", Fn;
              }
              je = O[ut](re, ut, he, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (en) {
              je = en;
            }
            je && !(je instanceof Error) && (Sr(mt), Fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", de, ut, typeof je), Sr(null)), je instanceof Error && !(je.message in In) && (In[je.message] = !0, Sr(mt), Fe("Failed %s type: %s", de, je.message), Sr(null));
          }
      }
    }
    var fa = Array.isArray;
    function da(O) {
      return fa(O);
    }
    function Er(O) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, de = re && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return de;
      }
    }
    function pa(O) {
      try {
        return ir(O), !1;
      } catch {
        return !0;
      }
    }
    function ir(O) {
      return "" + O;
    }
    function Dr(O) {
      if (pa(O))
        return Fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(O)), ir(O);
    }
    var dn = st.ReactCurrentOwner, va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ha, ma, ve;
    ve = {};
    function Ie(O) {
      if (An.call(O, "ref")) {
        var re = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function ct(O) {
      if (An.call(O, "key")) {
        var re = Object.getOwnPropertyDescriptor(O, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function Pt(O, re) {
      if (typeof O.ref == "string" && dn.current && re && dn.current.stateNode !== re) {
        var de = Xe(dn.current.type);
        ve[de] || (Fe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Xe(dn.current.type), O.ref), ve[de] = !0);
      }
    }
    function Mt(O, re) {
      {
        var de = function() {
          ha || (ha = !0, Fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        de.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function Dn(O, re) {
      {
        var de = function() {
          ma || (ma = !0, Fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        de.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var hn = function(O, re, de, he, mt, wt, ut) {
      var je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: O,
        key: re,
        ref: de,
        props: ut,
        // Record the component responsible for creating this element.
        _owner: wt
      };
      return je._store = {}, Object.defineProperty(je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: mt
      }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    };
    function Rr(O, re, de, he, mt) {
      {
        var wt, ut = {}, je = null, Fn = null;
        de !== void 0 && (Dr(de), je = "" + de), ct(re) && (Dr(re.key), je = "" + re.key), Ie(re) && (Fn = re.ref, Pt(re, mt));
        for (wt in re)
          An.call(re, wt) && !va.hasOwnProperty(wt) && (ut[wt] = re[wt]);
        if (O && O.defaultProps) {
          var en = O.defaultProps;
          for (wt in en)
            ut[wt] === void 0 && (ut[wt] = en[wt]);
        }
        if (je || Fn) {
          var tn = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          je && Mt(ut, tn), Fn && Dn(ut, tn);
        }
        return hn(O, je, Fn, mt, he, dn.current, ut);
      }
    }
    var Wt = st.ReactCurrentOwner, Qn = st.ReactDebugCurrentFrame;
    function Vt(O) {
      if (O) {
        var re = O._owner, de = Vn(O.type, O._source, re ? re.type : null);
        Qn.setExtraStackFrame(de);
      } else
        Qn.setExtraStackFrame(null);
    }
    var $t;
    $t = !1;
    function ei(O) {
      return typeof O == "object" && O !== null && O.$$typeof === m;
    }
    function _a() {
      {
        if (Wt.current) {
          var O = Xe(Wt.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function ml(O) {
      {
        if (O !== void 0) {
          var re = O.fileName.replace(/^.*[\\\/]/, ""), de = O.lineNumber;
          return `

Check your code at ` + re + ":" + de + ".";
        }
        return "";
      }
    }
    var ro = {};
    function ao(O) {
      {
        var re = _a();
        if (!re) {
          var de = typeof O == "string" ? O : O.displayName || O.name;
          de && (re = `

Check the top-level render call using <` + de + ">.");
        }
        return re;
      }
    }
    function yl(O, re) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var de = ao(re);
        if (ro[de])
          return;
        ro[de] = !0;
        var he = "";
        O && O._owner && O._owner !== Wt.current && (he = " It was passed a child from " + Xe(O._owner.type) + "."), Vt(O), Fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, he), Vt(null);
      }
    }
    function ti(O, re) {
      {
        if (typeof O != "object")
          return;
        if (da(O))
          for (var de = 0; de < O.length; de++) {
            var he = O[de];
            ei(he) && yl(he, re);
          }
        else if (ei(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var mt = yt(O);
          if (typeof mt == "function" && mt !== O.entries)
            for (var wt = mt.call(O), ut; !(ut = wt.next()).done; )
              ei(ut.value) && yl(ut.value, re);
        }
      }
    }
    function ni(O) {
      {
        var re = O.type;
        if (re == null || typeof re == "string")
          return;
        var de;
        if (typeof re == "function")
          de = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === ne || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === ae))
          de = re.propTypes;
        else
          return;
        if (de) {
          var he = Xe(re);
          Bn(de, O.props, "prop", he, O);
        } else if (re.PropTypes !== void 0 && !$t) {
          $t = !0;
          var mt = Xe(re);
          Fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", mt || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && Fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function La(O) {
      {
        for (var re = Object.keys(O.props), de = 0; de < re.length; de++) {
          var he = re[de];
          if (he !== "children" && he !== "key") {
            Vt(O), Fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Vt(null);
            break;
          }
        }
        O.ref !== null && (Vt(O), Fe("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
      }
    }
    function Ii(O, re, de, he, mt, wt) {
      {
        var ut = Ct(O);
        if (!ut) {
          var je = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fn = ml(mt);
          Fn ? je += Fn : je += _a();
          var en;
          O === null ? en = "null" : da(O) ? en = "array" : O !== void 0 && O.$$typeof === m ? (en = "<" + (Xe(O.type) || "Unknown") + " />", je = " Did you accidentally export a JSX literal instead of a component?") : en = typeof O, Fe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", en, je);
        }
        var tn = Rr(O, re, de, mt, wt);
        if (tn == null)
          return tn;
        if (ut) {
          var Cr = re.children;
          if (Cr !== void 0)
            if (he)
              if (da(Cr)) {
                for (var pi = 0; pi < Cr.length; pi++)
                  ti(Cr[pi], O);
                Object.freeze && Object.freeze(Cr);
              } else
                Fe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ti(Cr, O);
        }
        return O === x ? La(tn) : ni(tn), tn;
      }
    }
    function Br(O, re, de) {
      return Ii(O, re, de, !0);
    }
    function Yr(O, re, de) {
      return Ii(O, re, de, !1);
    }
    var ya = Yr, Fi = Br;
    tv.Fragment = x, tv.jsx = ya, tv.jsxs = Fi;
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
var WC;
function kk() {
  if (WC)
    return nv;
  WC = 1;
  var p = Pr, h = Symbol.for("react.element"), m = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, x = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(E, ce, ne) {
    var W, Y = {}, ae = null, Se = null;
    ne !== void 0 && (ae = "" + ne), ce.key !== void 0 && (ae = "" + ce.key), ce.ref !== void 0 && (Se = ce.ref);
    for (W in ce)
      C.call(ce, W) && !_.hasOwnProperty(W) && (Y[W] = ce[W]);
    if (E && E.defaultProps)
      for (W in ce = E.defaultProps, ce)
        Y[W] === void 0 && (Y[W] = ce[W]);
    return { $$typeof: h, type: E, key: ae, ref: Se, props: Y, _owner: x.current };
  }
  return nv.Fragment = m, nv.jsx = k, nv.jsxs = k, nv;
}
var _k = {};
_k.NODE_ENV === "production" ? XS.exports = kk() : XS.exports = Dk();
var Ye = XS.exports, lv = {}, QS = { exports: {} }, Za = {}, $m = { exports: {} }, jS = {}, qC;
function Lk() {
  return qC || (qC = 1, function(p) {
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
      var m = !1, C = !1, x = 5;
      function _(ve, Ie) {
        var ct = ve.length;
        ve.push(Ie), ce(ve, Ie, ct);
      }
      function k(ve) {
        return ve.length === 0 ? null : ve[0];
      }
      function E(ve) {
        if (ve.length === 0)
          return null;
        var Ie = ve[0], ct = ve.pop();
        return ct !== Ie && (ve[0] = ct, ne(ve, ct, 0)), Ie;
      }
      function ce(ve, Ie, ct) {
        for (var Pt = ct; Pt > 0; ) {
          var Mt = Pt - 1 >>> 1, Dn = ve[Mt];
          if (W(Dn, Ie) > 0)
            ve[Mt] = Ie, ve[Pt] = Dn, Pt = Mt;
          else
            return;
        }
      }
      function ne(ve, Ie, ct) {
        for (var Pt = ct, Mt = ve.length, Dn = Mt >>> 1; Pt < Dn; ) {
          var hn = (Pt + 1) * 2 - 1, Rr = ve[hn], Wt = hn + 1, Qn = ve[Wt];
          if (W(Rr, Ie) < 0)
            Wt < Mt && W(Qn, Rr) < 0 ? (ve[Pt] = Qn, ve[Wt] = Ie, Pt = Wt) : (ve[Pt] = Rr, ve[hn] = Ie, Pt = hn);
          else if (Wt < Mt && W(Qn, Ie) < 0)
            ve[Pt] = Qn, ve[Wt] = Ie, Pt = Wt;
          else
            return;
        }
      }
      function W(ve, Ie) {
        var ct = ve.sortIndex - Ie.sortIndex;
        return ct !== 0 ? ct : ve.id - Ie.id;
      }
      var Y = 1, ae = 2, Se = 3, G = 4, K = 5;
      function Ne(ve, Ie) {
      }
      var yt = typeof performance == "object" && typeof performance.now == "function";
      if (yt) {
        var st = performance;
        p.unstable_now = function() {
          return st.now();
        };
      } else {
        var Fe = Date, Be = Fe.now();
        p.unstable_now = function() {
          return Fe.now() - Be;
        };
      }
      var Dt = 1073741823, _e = -1, pt = 250, Ze = 5e3, vn = 1e4, jt = Dt, Ct = [], it = [], Ht = 1, Xe = null, lt = Se, kt = !1, ot = !1, Z = !1, we = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function be(ve) {
        for (var Ie = k(it); Ie !== null; ) {
          if (Ie.callback === null)
            E(it);
          else if (Ie.startTime <= ve)
            E(it), Ie.sortIndex = Ie.expirationTime, _(Ct, Ie);
          else
            return;
          Ie = k(it);
        }
      }
      function Ge(ve) {
        if (Z = !1, be(ve), !ot)
          if (k(Ct) !== null)
            ot = !0, Dr(Qe);
          else {
            var Ie = k(it);
            Ie !== null && dn(Ge, Ie.startTime - ve);
          }
      }
      function Qe(ve, Ie) {
        ot = !1, Z && (Z = !1, va()), kt = !0;
        var ct = lt;
        try {
          var Pt;
          if (!C)
            return gt(ve, Ie);
        } finally {
          Xe = null, lt = ct, kt = !1;
        }
      }
      function gt(ve, Ie) {
        var ct = Ie;
        for (be(ct), Xe = k(Ct); Xe !== null && !m && !(Xe.expirationTime > ct && (!ve || Sr())); ) {
          var Pt = Xe.callback;
          if (typeof Pt == "function") {
            Xe.callback = null, lt = Xe.priorityLevel;
            var Mt = Xe.expirationTime <= ct, Dn = Pt(Mt);
            ct = p.unstable_now(), typeof Dn == "function" ? Xe.callback = Dn : Xe === k(Ct) && E(Ct), be(ct);
          } else
            E(Ct);
          Xe = k(Ct);
        }
        if (Xe !== null)
          return !0;
        var hn = k(it);
        return hn !== null && dn(Ge, hn.startTime - ct), !1;
      }
      function vt(ve, Ie) {
        switch (ve) {
          case Y:
          case ae:
          case Se:
          case G:
          case K:
            break;
          default:
            ve = Se;
        }
        var ct = lt;
        lt = ve;
        try {
          return Ie();
        } finally {
          lt = ct;
        }
      }
      function St(ve) {
        var Ie;
        switch (lt) {
          case Y:
          case ae:
          case Se:
            Ie = Se;
            break;
          default:
            Ie = lt;
            break;
        }
        var ct = lt;
        lt = Ie;
        try {
          return ve();
        } finally {
          lt = ct;
        }
      }
      function ht(ve) {
        var Ie = lt;
        return function() {
          var ct = lt;
          lt = Ie;
          try {
            return ve.apply(this, arguments);
          } finally {
            lt = ct;
          }
        };
      }
      function ln(ve, Ie, ct) {
        var Pt = p.unstable_now(), Mt;
        if (typeof ct == "object" && ct !== null) {
          var Dn = ct.delay;
          typeof Dn == "number" && Dn > 0 ? Mt = Pt + Dn : Mt = Pt;
        } else
          Mt = Pt;
        var hn;
        switch (ve) {
          case Y:
            hn = _e;
            break;
          case ae:
            hn = pt;
            break;
          case K:
            hn = jt;
            break;
          case G:
            hn = vn;
            break;
          case Se:
          default:
            hn = Ze;
            break;
        }
        var Rr = Mt + hn, Wt = {
          id: Ht++,
          callback: Ie,
          priorityLevel: ve,
          startTime: Mt,
          expirationTime: Rr,
          sortIndex: -1
        };
        return Mt > Pt ? (Wt.sortIndex = Mt, _(it, Wt), k(Ct) === null && Wt === k(it) && (Z ? va() : Z = !0, dn(Ge, Mt - Pt))) : (Wt.sortIndex = Rr, _(Ct, Wt), !ot && !kt && (ot = !0, Dr(Qe))), Wt;
      }
      function nr() {
      }
      function rr() {
        !ot && !kt && (ot = !0, Dr(Qe));
      }
      function Vr() {
        return k(Ct);
      }
      function gr(ve) {
        ve.callback = null;
      }
      function Rn() {
        return lt;
      }
      var ar = !1, Vn = null, An = -1, In = x, Or = -1;
      function Sr() {
        var ve = p.unstable_now() - Or;
        return !(ve < In);
      }
      function Bn() {
      }
      function fa(ve) {
        if (ve < 0 || ve > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ve > 0 ? In = Math.floor(1e3 / ve) : In = x;
      }
      var da = function() {
        if (Vn !== null) {
          var ve = p.unstable_now();
          Or = ve;
          var Ie = !0, ct = !0;
          try {
            ct = Vn(Ie, ve);
          } finally {
            ct ? Er() : (ar = !1, Vn = null);
          }
        } else
          ar = !1;
      }, Er;
      if (typeof $ == "function")
        Er = function() {
          $(da);
        };
      else if (typeof MessageChannel < "u") {
        var pa = new MessageChannel(), ir = pa.port2;
        pa.port1.onmessage = da, Er = function() {
          ir.postMessage(null);
        };
      } else
        Er = function() {
          we(da, 0);
        };
      function Dr(ve) {
        Vn = ve, ar || (ar = !0, Er());
      }
      function dn(ve, Ie) {
        An = we(function() {
          ve(p.unstable_now());
        }, Ie);
      }
      function va() {
        D(An), An = -1;
      }
      var ha = Bn, ma = null;
      p.unstable_IdlePriority = K, p.unstable_ImmediatePriority = Y, p.unstable_LowPriority = G, p.unstable_NormalPriority = Se, p.unstable_Profiling = ma, p.unstable_UserBlockingPriority = ae, p.unstable_cancelCallback = gr, p.unstable_continueExecution = rr, p.unstable_forceFrameRate = fa, p.unstable_getCurrentPriorityLevel = Rn, p.unstable_getFirstCallbackNode = Vr, p.unstable_next = St, p.unstable_pauseExecution = nr, p.unstable_requestPaint = ha, p.unstable_runWithPriority = vt, p.unstable_scheduleCallback = ln, p.unstable_shouldYield = Sr, p.unstable_wrapCallback = ht, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(jS)), jS;
}
var HS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XC;
function Nk() {
  return XC || (XC = 1, function(p) {
    function h(Z, we) {
      var D = Z.length;
      Z.push(we);
      e:
        for (; 0 < D; ) {
          var $ = D - 1 >>> 1, be = Z[$];
          if (0 < x(be, we))
            Z[$] = we, Z[D] = be, D = $;
          else
            break e;
        }
    }
    function m(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function C(Z) {
      if (Z.length === 0)
        return null;
      var we = Z[0], D = Z.pop();
      if (D !== we) {
        Z[0] = D;
        e:
          for (var $ = 0, be = Z.length, Ge = be >>> 1; $ < Ge; ) {
            var Qe = 2 * ($ + 1) - 1, gt = Z[Qe], vt = Qe + 1, St = Z[vt];
            if (0 > x(gt, D))
              vt < be && 0 > x(St, gt) ? (Z[$] = St, Z[vt] = D, $ = vt) : (Z[$] = gt, Z[Qe] = D, $ = Qe);
            else if (vt < be && 0 > x(St, D))
              Z[$] = St, Z[vt] = D, $ = vt;
            else
              break e;
          }
      }
      return we;
    }
    function x(Z, we) {
      var D = Z.sortIndex - we.sortIndex;
      return D !== 0 ? D : Z.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _ = performance;
      p.unstable_now = function() {
        return _.now();
      };
    } else {
      var k = Date, E = k.now();
      p.unstable_now = function() {
        return k.now() - E;
      };
    }
    var ce = [], ne = [], W = 1, Y = null, ae = 3, Se = !1, G = !1, K = !1, Ne = typeof setTimeout == "function" ? setTimeout : null, yt = typeof clearTimeout == "function" ? clearTimeout : null, st = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Fe(Z) {
      for (var we = m(ne); we !== null; ) {
        if (we.callback === null)
          C(ne);
        else if (we.startTime <= Z)
          C(ne), we.sortIndex = we.expirationTime, h(ce, we);
        else
          break;
        we = m(ne);
      }
    }
    function Be(Z) {
      if (K = !1, Fe(Z), !G)
        if (m(ce) !== null)
          G = !0, kt(Dt);
        else {
          var we = m(ne);
          we !== null && ot(Be, we.startTime - Z);
        }
    }
    function Dt(Z, we) {
      G = !1, K && (K = !1, yt(Ze), Ze = -1), Se = !0;
      var D = ae;
      try {
        for (Fe(we), Y = m(ce); Y !== null && (!(Y.expirationTime > we) || Z && !Ct()); ) {
          var $ = Y.callback;
          if (typeof $ == "function") {
            Y.callback = null, ae = Y.priorityLevel;
            var be = $(Y.expirationTime <= we);
            we = p.unstable_now(), typeof be == "function" ? Y.callback = be : Y === m(ce) && C(ce), Fe(we);
          } else
            C(ce);
          Y = m(ce);
        }
        if (Y !== null)
          var Ge = !0;
        else {
          var Qe = m(ne);
          Qe !== null && ot(Be, Qe.startTime - we), Ge = !1;
        }
        return Ge;
      } finally {
        Y = null, ae = D, Se = !1;
      }
    }
    var _e = !1, pt = null, Ze = -1, vn = 5, jt = -1;
    function Ct() {
      return !(p.unstable_now() - jt < vn);
    }
    function it() {
      if (pt !== null) {
        var Z = p.unstable_now();
        jt = Z;
        var we = !0;
        try {
          we = pt(!0, Z);
        } finally {
          we ? Ht() : (_e = !1, pt = null);
        }
      } else
        _e = !1;
    }
    var Ht;
    if (typeof st == "function")
      Ht = function() {
        st(it);
      };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), lt = Xe.port2;
      Xe.port1.onmessage = it, Ht = function() {
        lt.postMessage(null);
      };
    } else
      Ht = function() {
        Ne(it, 0);
      };
    function kt(Z) {
      pt = Z, _e || (_e = !0, Ht());
    }
    function ot(Z, we) {
      Ze = Ne(function() {
        Z(p.unstable_now());
      }, we);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, p.unstable_continueExecution = function() {
      G || Se || (G = !0, kt(Dt));
    }, p.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : vn = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return ae;
    }, p.unstable_getFirstCallbackNode = function() {
      return m(ce);
    }, p.unstable_next = function(Z) {
      switch (ae) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = ae;
      }
      var D = ae;
      ae = we;
      try {
        return Z();
      } finally {
        ae = D;
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
      var D = ae;
      ae = Z;
      try {
        return we();
      } finally {
        ae = D;
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
      return be = D + be, Z = { id: W++, callback: we, priorityLevel: Z, startTime: D, expirationTime: be, sortIndex: -1 }, D > $ ? (Z.sortIndex = D, h(ne, Z), m(ce) === null && Z === m(ne) && (K ? (yt(Ze), Ze = -1) : K = !0, ot(Be, D - $))) : (Z.sortIndex = be, h(ce, Z), G || Se || (G = !0, kt(Dt))), Z;
    }, p.unstable_shouldYield = Ct, p.unstable_wrapCallback = function(Z) {
      var we = ae;
      return function() {
        var D = ae;
        ae = we;
        try {
          return Z.apply(this, arguments);
        } finally {
          ae = D;
        }
      };
    };
  }(HS)), HS;
}
var GC;
function cT() {
  if (GC)
    return $m.exports;
  GC = 1;
  var p = {};
  return p.NODE_ENV === "production" ? $m.exports = Nk() : $m.exports = Lk(), $m.exports;
}
var QC;
function Mk() {
  if (QC)
    return Za;
  QC = 1;
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
    var h = Pr, m = cT(), C = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = !1;
    function _(e) {
      x = e;
    }
    function k(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ce("warn", e, a);
      }
    }
    function E(e) {
      if (!x) {
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
    var ne = 0, W = 1, Y = 2, ae = 3, Se = 4, G = 5, K = 6, Ne = 7, yt = 8, st = 9, Fe = 10, Be = 11, Dt = 12, _e = 13, pt = 14, Ze = 15, vn = 16, jt = 17, Ct = 18, it = 19, Ht = 21, Xe = 22, lt = 23, kt = 24, ot = 25, Z = !0, we = !1, D = !1, $ = !1, be = !1, Ge = !0, Qe = !1, gt = !1, vt = !0, St = !0, ht = !0, ln = /* @__PURE__ */ new Set(), nr = {}, rr = {};
    function Vr(e, t) {
      gr(e, t), gr(e + "Capture", t);
    }
    function gr(e, t) {
      nr[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nr[e] = t;
      {
        var a = e.toLowerCase();
        rr[a] = e, e === "onDoubleClick" && (rr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ln.add(t[i]);
    }
    var Rn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ar = Object.prototype.hasOwnProperty;
    function Vn(e) {
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
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), In(e);
    }
    function Sr(e) {
      if (An(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), In(e);
    }
    function Bn(e, t) {
      if (An(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), In(e);
    }
    function fa(e, t) {
      if (An(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), In(e);
    }
    function da(e) {
      if (An(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), In(e);
    }
    function Er(e) {
      if (An(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Vn(e)), In(e);
    }
    var pa = 0, ir = 1, Dr = 2, dn = 3, va = 4, ha = 5, ma = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ie = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ct = new RegExp("^[" + ve + "][" + Ie + "]*$"), Pt = {}, Mt = {};
    function Dn(e) {
      return ar.call(Mt, e) ? !0 : ar.call(Pt, e) ? !1 : ct.test(e) ? (Mt[e] = !0, !0) : (Pt[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function hn(e, t, a) {
      return t !== null ? t.type === pa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Rr(e, t, a, i) {
      if (a !== null && a.type === pa)
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
          case dn:
            return !t;
          case va:
            return t === !1;
          case ha:
            return isNaN(t);
          case ma:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Qn(e) {
      return $t.hasOwnProperty(e) ? $t[e] : null;
    }
    function Vt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Dr || t === dn || t === va, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var $t = {}, ei = [
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
    ei.forEach(function(e) {
      $t[e] = new Vt(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      $t[t] = new Vt(
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
      $t[e] = new Vt(
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
      $t[e] = new Vt(
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
      $t[e] = new Vt(
        e,
        dn,
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
      $t[e] = new Vt(
        e,
        dn,
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
      $t[e] = new Vt(
        e,
        va,
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
      $t[e] = new Vt(
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
    }), ["rowSpan", "start"].forEach(function(e) {
      $t[e] = new Vt(
        e,
        ha,
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
    var _a = /[\-\:]([a-z])/g, ml = function(e) {
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
      var t = e.replace(_a, ml);
      $t[t] = new Vt(
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
      var t = e.replace(_a, ml);
      $t[t] = new Vt(
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
      var t = e.replace(_a, ml);
      $t[t] = new Vt(
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
      $t[e] = new Vt(
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
    $t[ro] = new Vt(
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
      $t[e] = new Vt(
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
    function ti(e) {
      !yl && ao.test(e) && (yl = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ni(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Or(a, t), i.sanitizeURL && ti("" + a);
        var s = i.attributeName, f = null;
        if (i.type === va) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : Wt(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (Wt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === dn)
            return a;
          f = e.getAttribute(s);
        }
        return Wt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function La(e, t, a, i) {
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
      if (!hn(t, o, i)) {
        if (Wt(t, a, o, i) && (a = null), i || o === null) {
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
            var y = o.type;
            e[v] = y === dn ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var R = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(R);
        else {
          var U = o.type, N;
          U === dn || U === va && a === !0 ? N = "" : (Or(a, R), N = "" + a, o.sanitizeURL && ti(N.toString())), T ? e.setAttributeNS(T, R, N) : e.setAttribute(R, N);
        }
      }
    }
    var Br = Symbol.for("react.element"), Yr = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), Fi = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), de = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), wt = Symbol.for("react.suspense_list"), ut = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), Fn = Symbol.for("react.scope"), en = Symbol.for("react.debug_trace_mode"), tn = Symbol.for("react.offscreen"), Cr = Symbol.for("react.legacy_hidden"), pi = Symbol.for("react.cache"), nn = Symbol.for("react.tracing_marker"), Wr = Symbol.iterator, ts = "@@iterator";
    function vi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Wr && e[Wr] || e[ts];
      return typeof t == "function" ? t : null;
    }
    var ft = Object.assign, io = 0, ji, gl, qr, ns, kr, rs, as;
    function is() {
    }
    is.__reactDisabledLog = !0;
    function lo() {
      {
        if (io === 0) {
          ji = console.log, gl = console.info, qr = console.warn, ns = console.error, kr = console.group, rs = console.groupCollapsed, as = console.groupEnd;
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
            log: ft({}, e, {
              value: ji
            }),
            info: ft({}, e, {
              value: gl
            }),
            warn: ft({}, e, {
              value: qr
            }),
            error: ft({}, e, {
              value: ns
            }),
            group: ft({}, e, {
              value: kr
            }),
            groupCollapsed: ft({}, e, {
              value: rs
            }),
            groupEnd: ft({}, e, {
              value: as
            })
          });
        }
        io < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Hi = C.ReactCurrentDispatcher, hi;
    function Na(e, t, a) {
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
`), y = i.stack.split(`
`), R = v.length - 1, T = y.length - 1; R >= 1 && T >= 0 && v[R] !== y[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (v[R] !== y[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || v[R] !== y[T]) {
                    var U = `
` + v[R].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && mi.set(e, U), U;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Sl = !1, Hi.current = s, Qo(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", H = N ? Na(N) : "";
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
    function Tt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uo(e, os(e));
      if (typeof e == "string")
        return Na(e);
      switch (e) {
        case mt:
          return Na("Suspense");
        case wt:
          return Na("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case he:
            return ls(e.render);
          case ut:
            return Tt(e.type, t, a);
          case je: {
            var i = e, o = i._payload, s = i._init;
            try {
              return Tt(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function us(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case G:
          return Na(e.type);
        case vn:
          return Na("Lazy");
        case _e:
          return Na("Suspense");
        case it:
          return Na("SuspenseList");
        case ne:
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
    function _t(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ya:
          return "Fragment";
        case Yr:
          return "Portal";
        case O:
          return "Profiler";
        case Fi:
          return "StrictMode";
        case mt:
          return "Suspense";
        case wt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case de:
            var t = e;
            return ss(t) + ".Consumer";
          case re:
            var a = e;
            return ss(a._context) + ".Provider";
          case he:
            return Rl(e, e.render, "ForwardRef");
          case ut:
            var i = e.displayName || null;
            return i !== null ? i : _t(e.type) || "Memo";
          case je: {
            var o = e, s = o._payload, f = o._init;
            try {
              return _t(f(s));
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
    function et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case kt:
          return "Cache";
        case st:
          var i = a;
          return so(i) + ".Consumer";
        case Fe:
          var o = a;
          return so(o._context) + ".Provider";
        case Ct:
          return "DehydratedFragment";
        case Be:
          return Ko(a, a.render, "ForwardRef");
        case Ne:
          return "Fragment";
        case G:
          return a;
        case Se:
          return "Portal";
        case ae:
          return "Root";
        case K:
          return "Text";
        case vn:
          return _t(a);
        case yt:
          return a === Fi ? "StrictMode" : "Mode";
        case Xe:
          return "Offscreen";
        case Dt:
          return "Profiler";
        case Ht:
          return "Scope";
        case _e:
          return "Suspense";
        case it:
          return "SuspenseList";
        case ot:
          return "TracingMarker";
        case W:
        case ne:
        case jt:
        case Y:
        case pt:
        case Ze:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ri = C.ReactDebugCurrentFrame, mn = null, Xr = !1;
    function Ma() {
      {
        if (mn === null)
          return null;
        var e = mn._debugOwner;
        if (e !== null && typeof e < "u")
          return et(e);
      }
      return null;
    }
    function Cl() {
      return mn === null ? "" : Jo(mn);
    }
    function on() {
      ri.getCurrentStack = null, mn = null, Xr = !1;
    }
    function yn(e) {
      ri.getCurrentStack = e === null ? null : Cl, mn = e, Xr = !1;
    }
    function cs() {
      return mn;
    }
    function lr(e) {
      Xr = e;
    }
    function Gr(e) {
      return "" + e;
    }
    function ai(e) {
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
    function Ua(e) {
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
            Ua(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Vi(e) {
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
    var Bi = !1, tu = !1, fs = !1, ii = !1;
    function nu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function g(e, t) {
      var a = e, i = t.checked, o = ft({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function b(e, t) {
      co("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !tu && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component", t.type), tu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Bi && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component", t.type), Bi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ai(t.value != null ? t.value : i),
        controlled: nu(t)
      };
    }
    function j(e, t) {
      var a = e, i = t.checked;
      i != null && Ii(a, "checked", i, !1);
    }
    function B(e, t) {
      var a = e;
      {
        var i = nu(t);
        !a._wrapperState.controlled && i && !ii && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ii = !0), a._wrapperState.controlled && !i && !fs && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fs = !0);
      }
      j(e, t);
      var o = ai(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Gr(o)) : a.value !== Gr(o) && (a.value = Gr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ke(a, t.type, o) : t.hasOwnProperty("defaultValue") && Ke(a, t.type, ai(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ue(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Gr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function ke(e, t) {
      var a = e;
      B(a, t), Ee(a, t);
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
            eu(f), B(f, v);
          }
        }
      }
    }
    function Ke(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || yi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Gr(e._wrapperState.initialValue) : e.defaultValue !== Gr(a) && (e.defaultValue = Gr(a)));
    }
    var dt = !1, Bt = !1, qt = !1;
    function Xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? h.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Bt || (Bt = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (qt || (qt = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !dt && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), dt = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", Gr(ai(t.value)));
    }
    var un = Array.isArray;
    function Lt(e) {
      return un(e);
    }
    var wl;
    wl = !1;
    function ru() {
      var e = Ma();
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
            var i = Lt(e[a]);
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
        for (var y = 0; y < o.length; y++) {
          var R = f.hasOwnProperty("$" + o[y].value);
          o[y].selected !== R && (o[y].selected = R), R && i && (o[y].defaultSelected = !0);
        }
      } else {
        for (var T = Gr(ai(a)), U = null, N = 0; N < o.length; N++) {
          if (o[N].value === T) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          U === null && !o[N].disabled && (U = o[N]);
        }
        U !== null && (U.selected = !0);
      }
    }
    function vs(e, t) {
      return ft({}, t, {
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
    function vy(e, t) {
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
      var i = ft({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Gr(a._wrapperState.initialValue)
      });
      return i;
    }
    function dv(e, t) {
      var a = e;
      co("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !fv && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ma() || "A component"), fv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Lt(o)) {
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
        initialValue: ai(i)
      };
    }
    function pv(e, t) {
      var a = e, i = ai(t.value), o = ai(t.defaultValue);
      if (i != null) {
        var s = Gr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Gr(o));
    }
    function Ec(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function hy(e, t) {
      pv(e, t);
    }
    var Wi = "http://www.w3.org/1999/xhtml", my = "http://www.w3.org/1998/Math/MathML", Rc = "http://www.w3.org/2000/svg";
    function ld(e) {
      switch (e) {
        case "svg":
          return Rc;
        case "math":
          return my;
        default:
          return Wi;
      }
    }
    function od(e, t) {
      return e == null || e === Wi ? ld(t) : e === Rc && t === "foreignObject" ? Wi : e;
    }
    var yy = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Cc, vv = yy(function(e, t) {
      if (e.namespaceURI === Rc && !("innerHTML" in e)) {
        Cc = Cc || document.createElement("div"), Cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Qr = 1, qi = 3, Cn = 8, ga = 9, ud = 11, ms = function(e, t) {
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
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(au.hasOwnProperty(e) && au[e]) ? t + "px" : (fa(t, e), ("" + t).trim());
    }
    var gy = /([A-Z])/g, Sy = /^ms-/;
    function Ey(e) {
      return e.replace(gy, "-$1").toLowerCase().replace(Sy, "-ms-");
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
      }, Ry = function(e, t) {
        fd || (fd = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Cy = function(e, t) {
        Tc || (Tc = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sd = function(e, t) {
        e.indexOf("-") > -1 ? Ev(e) : gv.test(e) ? Rv(e) : Sv.test(t) && Cv(e, t), typeof t == "number" && (isNaN(t) ? Ry(e, t) : isFinite(t) || Cy(e, t));
      };
    }
    var Ty = sd;
    function wy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Ey(i)) + ":", t += bl(i, o, s), a = ";";
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
          o || Ty(i, t[i]);
          var s = bl(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function li(e) {
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
            var y = f + "," + v;
            if (o[y])
              continue;
            o[y] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", li(e[f]) ? "Removing" : "Updating", f, v);
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
    }, xv = ft({
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
        var y = Qn(t), R = y !== null && y.type === pa;
        if (wc.hasOwnProperty(o)) {
          var T = wc[o];
          if (T !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Tr[t] = !0, !0;
        } else if (!R && t !== o)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Tr[t] = !0, !0;
        return typeof a == "boolean" && Rr(t, a, y, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Tr[t] = !0, !0) : R ? !0 : Rr(t, a, y, !1) ? (Tr[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === dn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Tr[t] = !0), !0);
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
    var Oc = 1, Cs = 2, Ts = 4, by = Oc | Cs | Ts, Gi = null;
    function xy(e) {
      Gi !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Gi = e;
    }
    function Uv() {
      Gi === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Gi = null;
    }
    function zv(e) {
      return e === Gi;
    }
    function Kt(e) {
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
    if (Rn)
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
    function Rd(e, t, a, i, o, s, f, v, y) {
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
      Fv = function(t, a, i, o, s, f, v, y, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), U = !1, N = !0, H = window.event, P = Object.getOwnPropertyDescriptor(window, "event");
        function q() {
          Cd.removeEventListener(X, Ve, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
        }
        var Re = Array.prototype.slice.call(arguments, 3);
        function Ve() {
          U = !0, q(), a.apply(i, Re), N = !1;
        }
        var Ae, xt = !1, Rt = !1;
        function A(I) {
          if (Ae = I.error, xt = !0, Ae === null && I.colno === 0 && I.lineno === 0 && (Rt = !0), I.defaultPrevented && Ae != null && typeof Ae == "object")
            try {
              Ae._suppressLogging = !0;
            } catch {
            }
        }
        var X = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), Cd.addEventListener(X, Ve, !1), T.initEvent(X, !1, !1), Cd.dispatchEvent(T), P && Object.defineProperty(window, "event", P), U && N && (xt ? Rt && (Ae = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ae = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ae)), window.removeEventListener("error", A), !U)
          return q(), Rd.apply(this, arguments);
      };
    }
    var Td = Fv, Sa = !1, Ds = null, Ji = !1, za = null, ks = {
      onError: function(e) {
        Sa = !0, Ds = e;
      }
    };
    function oi(e, t, a, i, o, s, f, v, y) {
      Sa = !1, Ds = null, Td.apply(ks, arguments);
    }
    function wd(e, t, a, i, o, s, f, v, y) {
      if (oi.apply(this, arguments), Sa) {
        var R = Ki();
        Ji || (Ji = !0, za = R);
      }
    }
    function Oy() {
      if (Ji) {
        var e = za;
        throw Ji = !1, za = null, e;
      }
    }
    function Dy() {
      return Sa;
    }
    function Ki() {
      if (Sa) {
        var e = Ds;
        return Sa = !1, Ds = null, e;
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
    var He = (
      /*                      */
      0
    ), ui = (
      /*                */
      1
    ), Zt = (
      /*                    */
      2
    ), Me = (
      /*                       */
      4
    ), Ut = (
      /*                */
      16
    ), Aa = (
      /*                 */
      32
    ), Jn = (
      /*                     */
      64
    ), tt = (
      /*                   */
      128
    ), _r = (
      /*            */
      256
    ), Ea = (
      /*                          */
      512
    ), jn = (
      /*                     */
      1024
    ), Jr = (
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
    ), jv = Jr | Me | Jn | Ea | jn | yo, Zi = (
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
    ), Ia = (
      /*                 */
      4194304
    ), _l = (
      /*                */
      8388608
    ), Fa = (
      /*               */
      16777216
    ), go = (
      /*              */
      33554432
    ), Kr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Me | jn | 0
    ), Zr = Zt | Me | Ut | Aa | Ea | Ei | Dl, si = Me | Jn | Ea | Dl, $r = Jr | Ut, ur = Ia | _l | Ri, So = C.ReactCurrentOwner;
    function Ll(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Zt | Ei)) !== He && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ae ? a : null;
    }
    function Nc(e) {
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
    function Mc(e) {
      return e.tag === ae ? e.stateNode.containerInfo : null;
    }
    function Ra(e) {
      return Ll(e) === e;
    }
    function Ca(e) {
      {
        var t = So.current;
        if (t !== null && t.tag === W) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", et(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Si(e);
      return o ? Ll(o) === o : !1;
    }
    function sn(e) {
      if (Ll(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ja(e) {
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
          for (var y = s.child; y; ) {
            if (y === i)
              return sn(s), e;
            if (y === o)
              return sn(s), t;
            y = y.sibling;
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
      if (i.tag !== ae)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function bd(e) {
      var t = ja(e);
      return t !== null ? xd(t) : null;
    }
    function xd(e) {
      if (e.tag === G || e.tag === K)
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
      var t = ja(e);
      return t !== null ? Uc(t) : null;
    }
    function Uc(e) {
      if (e.tag === G || e.tag === K)
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
    var Dd = m.unstable_scheduleCallback, zc = m.unstable_cancelCallback, Pv = m.unstable_shouldYield, su = m.unstable_requestPaint, Hn = m.unstable_now, ky = m.unstable_getCurrentPriorityLevel, ea = m.unstable_ImmediatePriority, cu = m.unstable_UserBlockingPriority, Ci = m.unstable_NormalPriority, fu = m.unstable_LowPriority, _s = m.unstable_IdlePriority, kd = m.unstable_yieldValue, _d = m.unstable_setDisableYieldValue, Nl = null, kn = null, fe = null, wr = !1, Ta = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Vv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        vt && (e = ft({}, e, {
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
          var a = (e.current.flags & tt) === tt;
          if (St) {
            var i;
            switch (t) {
              case Mn:
                i = ea;
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
    function Bv(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Nl, e);
        } catch (t) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function rn(e) {
      if (typeof kd == "function" && (_d(e), _(e)), kn && typeof kn.setStrictMode == "function")
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
    var Pe = (
      /*                         */
      0
    ), ze = (
      /*                 */
      1
    ), Nt = (
      /*                    */
      2
    ), Tn = (
      /*               */
      8
    ), Ha = (
      /*              */
      16
    ), zs = Math.clz32 ? Math.clz32 : gn, zd = Math.log, Ro = Math.LN2;
    function gn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (zd(t) / Ro | 0) | 0;
    }
    var _n = 31, Q = (
      /*                        */
      0
    ), Ln = (
      /*                          */
      0
    ), We = (
      /*                        */
      1
    ), wi = (
      /*    */
      2
    ), el = (
      /*             */
      4
    ), wn = (
      /*            */
      8
    ), Pa = (
      /*                     */
      16
    ), Co = (
      /*                */
      32
    ), Al = (
      /*                       */
      4194240
    ), ta = (
      /*                        */
      64
    ), na = (
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
    ), Vc = (
      /*                        */
      16384
    ), Bc = (
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
    ), wa = (
      /*                   */
      1073741824
    );
    function Kv(e) {
      {
        if (e & We)
          return "Sync";
        if (e & wi)
          return "InputContinuousHydration";
        if (e & el)
          return "InputContinuous";
        if (e & wn)
          return "DefaultHydration";
        if (e & Pa)
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
        if (e & wa)
          return "Offscreen";
      }
    }
    var an = -1, Kc = ta, js = xo;
    function Su(e) {
      switch (Nn(e)) {
        case We:
          return We;
        case wi:
          return wi;
        case el:
          return el;
        case wn:
          return wn;
        case Pa:
          return Pa;
        case Co:
          return Co;
        case ta:
        case na:
        case To:
        case As:
        case Is:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
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
        case wa:
          return wa;
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
          var y = f & s;
          y !== Q && (i = Su(y));
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
        var T = Nn(i), U = Nn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= U || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Pa && (U & Al) !== Q
        )
          return t;
      }
      (i & el) !== Q && (i |= a & Pa);
      var N = e.entangledLanes;
      if (N !== Q)
        for (var H = e.entanglements, P = i & N; P > 0; ) {
          var q = jl(P), Re = 1 << q;
          i |= H[q], P &= ~Re;
        }
      return i;
    }
    function Zc(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var o = jl(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function _y(e, t) {
      switch (e) {
        case We:
        case wi:
        case el:
          return t + 250;
        case wn:
        case Pa:
        case Co:
        case ta:
        case na:
        case To:
        case As:
        case Is:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
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
          return an;
        case Oo:
        case gu:
        case Il:
        case wa:
          return an;
        default:
          return E("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function Ly(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = jl(f), y = 1 << v, R = s[v];
        R === an ? ((y & i) === Q || (y & o) !== Q) && (s[v] = _y(y, t)) : R <= t && (e.expiredLanes |= y), f &= ~y;
      }
    }
    function Ny(e) {
      return Su(e.pendingLanes);
    }
    function Fl(e) {
      var t = e.pendingLanes & ~wa;
      return t !== Q ? t : t & wa ? wa : Q;
    }
    function Fd(e) {
      return (e & We) !== Q;
    }
    function Ps(e) {
      return (e & Id) !== Q;
    }
    function Zv(e) {
      return (e & bo) === e;
    }
    function $v(e) {
      var t = We | el | Pa;
      return (e & t) === Q;
    }
    function eh(e) {
      return (e & Al) === e;
    }
    function Vs(e, t) {
      var a = wi | el | wn | Pa;
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
      return Kc <<= 1, (Kc & Al) === Q && (Kc = ta), e;
    }
    function ra() {
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
    function aa(e, t) {
      return (e & t) !== Q;
    }
    function Do(e, t) {
      return (e & t) === t;
    }
    function at(e, t) {
      return e | t;
    }
    function Bs(e, t) {
      return e & ~t;
    }
    function ef(e, t) {
      return e & t;
    }
    function My(e) {
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
        a[o] = an, i &= ~s;
      }
    }
    function tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function nf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Q, e.pingedLanes = Q, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = jl(f), y = 1 << v;
        i[v] = Q, o[v] = an, s[v] = an, f &= ~y;
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
        case Pa:
          i = wn;
          break;
        case ta:
        case na:
        case To:
        case As:
        case Is:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
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
      if (Ta)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = $c(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Pd(e, t) {
      if (Ta)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = $c(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(v) {
            var y = v.alternate;
            (y === null || !i.has(y)) && i.add(v);
          }), f.clear()), t &= ~s;
        }
    }
    function Ws(e, t) {
      return null;
    }
    var Mn = We, tl = el, bi = Pa, Ru = Il, Cu = Ln;
    function Va() {
      return Cu;
    }
    function bn(e) {
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
    function Uy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function zy(e, t) {
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
    function Vd(e) {
      Te(e);
    }
    var lf;
    function Ay(e) {
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
    var Bd;
    function oh(e) {
      Bd = e;
    }
    var qs = !1, xu = [], pn = null, Kn = null, Lr = null, Ou = /* @__PURE__ */ new Map(), Du = /* @__PURE__ */ new Map(), Zn = [], uh = [
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
    function Iy(e, t, a, i, o) {
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
          pn = null;
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
        var f = Iy(t, a, i, o, s);
        if (t !== null) {
          var v = Fu(t);
          v !== null && lf(v);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return o !== null && y.indexOf(o) === -1 && y.push(o), e;
    }
    function sh(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return pn = ku(pn, e, t, a, i, s), !0;
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
          var y = o, R = y.pointerId;
          return Ou.set(R, ku(Ou.get(R) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var T = o, U = T.pointerId;
          return Du.set(U, ku(Du.get(U) || null, e, t, a, i, T)), !0;
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
          if (i === _e) {
            var o = Nc(a);
            if (o !== null) {
              e.blockedOn = o, Bd(e.priority, function() {
                bu(a);
              });
              return;
            }
          } else if (i === ae) {
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
    function Fy(e) {
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
          xy(s), o.target.dispatchEvent(s), Uv();
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
      qs = !1, pn !== null && _o(pn) && (pn = null), Kn !== null && _o(Kn) && (Kn = null), Lr !== null && _o(Lr) && (Lr = null), Ou.forEach(sf), Du.forEach(sf);
    }
    function Et(e, t) {
      e.blockedOn === t && (e.blockedOn = null, qs || (qs = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Ba)));
    }
    function xn(e) {
      if (xu.length > 0) {
        Et(xu[0], e);
        for (var t = 1; t < xu.length; t++) {
          var a = xu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      pn !== null && Et(pn, e), Kn !== null && Et(Kn, e), Lr !== null && Et(Lr, e);
      var i = function(v) {
        return Et(v, e);
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
    var cn = C.ReactCurrentBatchConfig, Yn = !0;
    function ia(e) {
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
      var o = Va(), s = cn.transition;
      cn.transition = null;
      try {
        bn(Mn), Lu(e, t, a, i);
      } finally {
        bn(o), cn.transition = s;
      }
    }
    function Lo(e, t, a, i) {
      var o = Va(), s = cn.transition;
      cn.transition = null;
      try {
        bn(tl), Lu(e, t, a, i);
      } finally {
        bn(o), cn.transition = s;
      }
    }
    function Lu(e, t, a, i) {
      Yn && qd(e, t, a, i);
    }
    function qd(e, t, a, i) {
      var o = xr(e, t, a, i);
      if (o === null) {
        tg(e, t, i, Hl, a), Yd(e, i);
        return;
      }
      if (sh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Yd(e, i), t & Ts && xi(e)) {
        for (; o !== null; ) {
          var s = Fu(o);
          s !== null && Vd(s);
          var f = xr(e, t, a, i);
          if (f === null && tg(e, t, i, Hl, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      tg(e, t, i, null, a);
    }
    var Hl = null;
    function xr(e, t, a, i) {
      Hl = null;
      var o = Kt(i), s = ac(o);
      if (s !== null) {
        var f = Ll(s);
        if (f === null)
          s = null;
        else {
          var v = f.tag;
          if (v === _e) {
            var y = Nc(f);
            if (y !== null)
              return y;
            s = null;
          } else if (v === ae) {
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
          var t = ky();
          switch (t) {
            case ea:
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
    var Ya = null, Mu = null, Wa = null;
    function df(e) {
      return Ya = e, Mu = Qs(), !0;
    }
    function Gs() {
      Ya = null, Mu = null, Wa = null;
    }
    function pf() {
      if (Wa)
        return Wa;
      var e, t = Mu, a = t.length, i, o = Qs(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Wa = o.slice(e, v), Wa;
    }
    function Qs() {
      return "value" in Ya ? Ya.value : Ya.textContent;
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
    function Sn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var y = e[v];
            y ? this[v] = y(s) : this[v] = s[v];
          }
        var R = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return R ? this.isDefaultPrevented = $n : this.isDefaultPrevented = rl, this.isPropagationStopped = rl, this;
      }
      return ft(t.prototype, {
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
    }, vf = Sn(qn), Mo = ft({}, qn, {
      view: 0,
      detail: 0
    }), Gd = Sn(Mo), Qd, Oi, Uu;
    function Jd(e) {
      e !== Uu && (Uu && e.type === "mousemove" ? (Qd = e.screenX - Uu.screenX, Oi = e.screenY - Uu.screenY) : (Qd = 0, Oi = 0), Uu = e);
    }
    var Di = ft({}, Mo, {
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
    }), hf = Sn(Di), Uo = ft({}, Di, {
      dataTransfer: 0
    }), ch = Sn(Uo), fh = ft({}, Mo, {
      relatedTarget: 0
    }), Js = Sn(fh), mf = ft({}, qn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), jy = Sn(mf), Hy = ft({}, qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), dh = Sn(Hy), ph = ft({}, qn, {
      data: 0
    }), Pl = Sn(ph), Py = Pl, zu = {
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
    function On(e) {
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
    var Vy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function hh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Vy[e];
      return i ? !!a[i] : !1;
    }
    function Kd(e) {
      return hh;
    }
    var By = ft({}, Mo, {
      key: On,
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
    }), mh = Sn(By), yh = ft({}, Di, {
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
    }), gh = Sn(yh), qa = ft({}, Mo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kd
    }), Zd = Sn(qa), Yy = ft({}, qn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Vl = Sn(Yy), yf = ft({}, Di, {
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
    }), zo = Sn(yf), gf = [9, 13, 27, 32], Sf = 229, Ks = Rn && "CompositionEvent" in window, Zs = null;
    Rn && "documentMode" in document && (Zs = document.documentMode);
    var $d = Rn && "TextEvent" in window && !Zs, Sh = Rn && (!Ks || Zs && Zs > 8 && Zs <= 11), ep = 32, tp = String.fromCharCode(ep);
    function Ef() {
      Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
    function Wy(e, t) {
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
    var Bl = !1;
    function Cf(e, t, a, i, o) {
      var s, f;
      if (Ks ? s = np(t) : Bl ? rp(t, i) && (s = "onCompositionEnd") : Wy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Sh && !ec(i) && (!Bl && s === "onCompositionStart" ? Bl = df(o) : s === "onCompositionEnd" && Bl && (f = pf()));
      var v = xh(a, s);
      if (v.length > 0) {
        var y = new Pl(s, t, null, i, o);
        if (e.push({
          event: y,
          listeners: v
        }), f)
          y.data = f;
        else {
          var R = Rf(i);
          R !== null && (y.data = R);
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
    function qy(e, t) {
      if (Bl) {
        if (e === "compositionend" || !Ks && rp(e, t)) {
          var a = pf();
          return Gs(), Bl = !1, a;
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
      if ($d ? s = Rh(t, i) : s = qy(t, i), !s)
        return null;
      var f = xh(a, "onBeforeInput");
      if (f.length > 0) {
        var v = new Py("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: v,
          listeners: f
        }), v.data = s;
      }
    }
    function Xy(e, t, a, i, o, s, f) {
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
      Vr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
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
      r(t, u, e, Kt(e)), bs(S, t);
    }
    function S(e) {
      EE(e, 0);
    }
    function w(e) {
      var t = _f(e);
      if (eu(t))
        return e;
    }
    function L(e, t) {
      if (e === "change")
        return t;
    }
    var V = !1;
    Rn && (V = wf("input") && (!document.documentMode || document.documentMode > 9));
    function ie(e, t) {
      l = e, u = t, l.attachEvent("onpropertychange", te);
    }
    function le() {
      l && (l.detachEvent("onpropertychange", te), l = null, u = null);
    }
    function te(e) {
      e.propertyName === "value" && w(u) && d(e);
    }
    function ye(e, t, a) {
      e === "focusin" ? (le(), ie(t, a)) : e === "focusout" && le();
    }
    function xe(e, t) {
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
    function M(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ke(e, "number", e.value);
    }
    function F(e, t, a, i, o, s, f) {
      var v = a ? _f(a) : window, y, R;
      if (c(v) ? y = L : Ch(v) ? V ? y = z : (y = xe, R = ye) : Le(v) && (y = Un), y) {
        var T = y(t, a);
        if (T) {
          r(e, T, i, o);
          return;
        }
      }
      R && R(t, v, a), t === "focusout" && M(v);
    }
    function se() {
      gr("onMouseEnter", ["mouseout", "mouseover"]), gr("onMouseLeave", ["mouseout", "mouseover"]), gr("onPointerEnter", ["pointerout", "pointerover"]), gr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ue(e, t, a, i, o, s, f) {
      var v = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (v && !zv(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (ac(R) || yp(R)))
          return;
      }
      if (!(!y && !v)) {
        var T;
        if (o.window === o)
          T = o;
        else {
          var U = o.ownerDocument;
          U ? T = U.defaultView || U.parentWindow : T = window;
        }
        var N, H;
        if (y) {
          var P = i.relatedTarget || i.toElement;
          if (N = a, H = P ? ac(P) : null, H !== null) {
            var q = Ll(H);
            (H !== q || H.tag !== G && H.tag !== K) && (H = null);
          }
        } else
          N = null, H = a;
        if (N !== H) {
          var Re = hf, Ve = "onMouseLeave", Ae = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Re = gh, Ve = "onPointerLeave", Ae = "onPointerEnter", xt = "pointer");
          var Rt = N == null ? T : _f(N), A = H == null ? T : _f(H), X = new Re(Ve, xt + "leave", N, i, o);
          X.target = Rt, X.relatedTarget = A;
          var I = null, oe = ac(o);
          if (oe === a) {
            var Ce = new Re(Ae, xt + "enter", H, i, o);
            Ce.target = A, Ce.relatedTarget = Rt, I = Ce;
          }
          rw(e, X, I, N, H);
        }
      }
    }
    function qe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Oe = typeof Object.is == "function" ? Object.is : qe;
    function Je(e, t) {
      if (Oe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!ar.call(t, s) || !Oe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Xn(e) {
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
        a = Xn(zt(a));
      }
    }
    function Gy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return IT(e, o, s, f, v);
    }
    function IT(e, t, a, i, o) {
      var s = 0, f = -1, v = -1, y = 0, R = 0, T = e, U = null;
      e:
        for (; ; ) {
          for (var N = null; T === t && (a === 0 || T.nodeType === qi) && (f = s + a), T === i && (o === 0 || T.nodeType === qi) && (v = s + o), T.nodeType === qi && (s += T.nodeValue.length), (N = T.firstChild) !== null; )
            U = T, T = N;
          for (; ; ) {
            if (T === e)
              break e;
            if (U === t && ++y === a && (f = s), U === i && ++R === o && (v = s), (N = T.nextSibling) !== null)
              break;
            T = U, U = T.parentNode;
          }
          T = N;
        }
      return f === -1 || v === -1 ? null : {
        start: f,
        end: v
      };
    }
    function FT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > v) {
          var y = v;
          v = f, f = y;
        }
        var R = al(e, f), T = al(e, v);
        if (R && T) {
          if (o.rangeCount === 1 && o.anchorNode === R.node && o.anchorOffset === R.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var U = a.createRange();
          U.setStart(R.node, R.offset), o.removeAllRanges(), f > v ? (o.addRange(U), o.extend(T.node, T.offset)) : (U.setEnd(T.node, T.offset), o.addRange(U));
        }
      }
    }
    function uE(e) {
      return e && e.nodeType === qi;
    }
    function sE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : uE(e) ? !1 : uE(t) ? sE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jT(e) {
      return e && e.ownerDocument && sE(e.ownerDocument.documentElement, e);
    }
    function HT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function cE() {
      for (var e = window, t = yi(); t instanceof e.HTMLIFrameElement; ) {
        if (HT(t))
          e = t.contentWindow;
        else
          return t;
        t = yi(e.document);
      }
      return t;
    }
    function Qy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function PT() {
      var e = cE();
      return {
        focusedElem: e,
        selectionRange: Qy(e) ? BT(e) : null
      };
    }
    function VT(e) {
      var t = cE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jT(a)) {
        i !== null && Qy(a) && YT(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && o.push({
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
    function BT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Gy(e), t || {
        start: 0,
        end: 0
      };
    }
    function YT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : FT(e, t);
    }
    var WT = Rn && "documentMode" in document && document.documentMode <= 11;
    function qT() {
      Vr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var bf = null, Jy = null, ap = null, Ky = !1;
    function XT(e) {
      if ("selectionStart" in e && Qy(e))
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
    function GT(e) {
      return e.window === e ? e.document : e.nodeType === ga ? e : e.ownerDocument;
    }
    function fE(e, t, a) {
      var i = GT(a);
      if (!(Ky || bf == null || bf !== yi(i))) {
        var o = XT(bf);
        if (!ap || !Je(ap, o)) {
          ap = o;
          var s = xh(Jy, "onSelect");
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
    function QT(e, t, a, i, o, s, f) {
      var v = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (Ch(v) || v.contentEditable === "true") && (bf = v, Jy = a, ap = null);
          break;
        case "focusout":
          bf = null, Jy = null, ap = null;
          break;
        case "mousedown":
          Ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ky = !1, fE(e, i, o);
          break;
        case "selectionchange":
          if (WT)
            break;
        case "keydown":
        case "keyup":
          fE(e, i, o);
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
    }, Zy = {}, dE = {};
    Rn && (dE = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function wh(e) {
      if (Zy[e])
        return Zy[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in dE)
          return Zy[e] = t[a];
      return e;
    }
    var pE = wh("animationend"), vE = wh("animationiteration"), hE = wh("animationstart"), mE = wh("transitionend"), yE = /* @__PURE__ */ new Map(), gE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Au(e, t) {
      yE.set(e, t), Vr(t, [e]);
    }
    function JT() {
      for (var e = 0; e < gE.length; e++) {
        var t = gE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Au(a, "on" + i);
      }
      Au(pE, "onAnimationEnd"), Au(vE, "onAnimationIteration"), Au(hE, "onAnimationStart"), Au("dblclick", "onDoubleClick"), Au("focusin", "onFocus"), Au("focusout", "onBlur"), Au(mE, "onTransitionEnd");
    }
    function KT(e, t, a, i, o, s, f) {
      var v = yE.get(t);
      if (v !== void 0) {
        var y = vf, R = t;
        switch (t) {
          case "keypress":
            if (No(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = mh;
            break;
          case "focusin":
            R = "focus", y = Js;
            break;
          case "focusout":
            R = "blur", y = Js;
            break;
          case "beforeblur":
          case "afterblur":
            y = Js;
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
            y = hf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ch;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Zd;
            break;
          case pE:
          case vE:
          case hE:
            y = jy;
            break;
          case mE:
            y = Vl;
            break;
          case "scroll":
            y = Gd;
            break;
          case "wheel":
            y = zo;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = dh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = gh;
            break;
        }
        var T = (s & Ts) !== 0;
        {
          var U = !T && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = tw(a, v, i.type, T, U);
          if (N.length > 0) {
            var H = new y(v, R, null, i, o);
            e.push({
              event: H,
              listeners: N
            });
          }
        }
      }
    }
    JT(), se(), n(), qT(), Ef();
    function ZT(e, t, a, i, o, s, f) {
      KT(e, t, a, i, o, s);
      var v = (s & by) === 0;
      v && (Ue(e, t, a, i, o), F(e, t, a, i, o), QT(e, t, a, i, o), Xy(e, t, a, i, o));
    }
    var ip = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], $y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ip));
    function SE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, wd(i, t, void 0, e), e.currentTarget = null;
    }
    function $T(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, v = s.currentTarget, y = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          SE(e, y, v), i = f;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var T = t[R], U = T.instance, N = T.currentTarget, H = T.listener;
          if (U !== i && e.isPropagationStopped())
            return;
          SE(e, H, N), i = U;
        }
    }
    function EE(e, t) {
      for (var a = (t & Ts) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        $T(s, f, a);
      }
      Oy();
    }
    function ew(e, t, a, i, o) {
      var s = Kt(a), f = [];
      ZT(f, e, i, a, s, t), EE(f, t);
    }
    function En(e, t) {
      $y.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = _b(t), o = aw(e, a);
      i.has(o) || (RE(t, e, Cs, a), i.add(o));
    }
    function eg(e, t, a) {
      $y.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ts), RE(a, e, i, t);
    }
    var bh = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[bh]) {
        e[bh] = !0, ln.forEach(function(a) {
          a !== "selectionchange" && ($y.has(a) || eg(a, !1, e), eg(a, !0, e));
        });
        var t = e.nodeType === ga ? e : e.ownerDocument;
        t !== null && (t[bh] || (t[bh] = !0, eg("selectionchange", !1, t)));
      }
    }
    function RE(e, t, a, i, o) {
      var s = Wn(e, t, a), f = void 0;
      xs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ff(e, t, s, f) : nl(e, t, s) : f !== void 0 ? Xd(e, t, s, f) : Nu(e, t, s);
    }
    function CE(e, t) {
      return e === t || e.nodeType === Cn && e.parentNode === t;
    }
    function tg(e, t, a, i, o) {
      var s = i;
      if (!(t & Oc) && !(t & Cs)) {
        var f = o;
        if (i !== null) {
          var v = i;
          e:
            for (; ; ) {
              if (v === null)
                return;
              var y = v.tag;
              if (y === ae || y === Se) {
                var R = v.stateNode.containerInfo;
                if (CE(R, f))
                  break;
                if (y === Se)
                  for (var T = v.return; T !== null; ) {
                    var U = T.tag;
                    if (U === ae || U === Se) {
                      var N = T.stateNode.containerInfo;
                      if (CE(N, f))
                        return;
                    }
                    T = T.return;
                  }
                for (; R !== null; ) {
                  var H = ac(R);
                  if (H === null)
                    return;
                  var P = H.tag;
                  if (P === G || P === K) {
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
        return ew(e, t, a, s);
      });
    }
    function op(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function tw(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, y = [], R = e, T = null; R !== null; ) {
        var U = R, N = U.stateNode, H = U.tag;
        if (H === G && N !== null && (T = N, v !== null)) {
          var P = mo(R, v);
          P != null && y.push(op(R, P, T));
        }
        if (o)
          break;
        R = R.return;
      }
      return y;
    }
    function xh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, v = s.tag;
        if (v === G && f !== null) {
          var y = f, R = mo(o, a);
          R != null && i.unshift(op(o, R, y));
          var T = mo(o, t);
          T != null && i.push(op(o, T, y));
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
    function nw(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Of(s))
        o++;
      for (var f = 0, v = i; v; v = Of(v))
        f++;
      for (; o - f > 0; )
        a = Of(a), o--;
      for (; f - o > 0; )
        i = Of(i), f--;
      for (var y = o; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function TE(e, t, a, i, o) {
      for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
        var y = v, R = y.alternate, T = y.stateNode, U = y.tag;
        if (R !== null && R === i)
          break;
        if (U === G && T !== null) {
          var N = T;
          if (o) {
            var H = mo(v, s);
            H != null && f.unshift(op(v, H, N));
          } else if (!o) {
            var P = mo(v, s);
            P != null && f.push(op(v, P, N));
          }
        }
        v = v.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function rw(e, t, a, i, o) {
      var s = i && o ? nw(i, o) : null;
      i !== null && TE(e, t, i, s, !1), o !== null && a !== null && TE(e, a, o, s, !0);
    }
    function aw(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Xa = !1, up = "dangerouslySetInnerHTML", Oh = "suppressContentEditableWarning", Iu = "suppressHydrationWarning", wE = "autoFocus", nc = "children", rc = "style", Dh = "__html", ng, kh, sp, bE, _h, xE, OE;
    ng = {
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
    }, xE = Rn && !document.documentMode, sp = function(e, t, a) {
      if (!Xa) {
        var i = Lh(a), o = Lh(t);
        o !== i && (Xa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, bE = function(e) {
      if (!Xa) {
        Xa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, _h = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, OE = function(e, t) {
      var a = e.namespaceURI === Wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var iw = /\r\n?/g, lw = /\u0000|\uFFFD/g;
    function Lh(e) {
      da(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(iw, `
`).replace(lw, "");
    }
    function Nh(e, t, a, i) {
      var o = Lh(t), s = Lh(e);
      if (s !== o && (i && (Xa || (Xa = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Z))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function DE(e) {
      return e.nodeType === ga ? e : e.ownerDocument;
    }
    function ow() {
    }
    function Mh(e) {
      e.onclick = ow;
    }
    function uw(e, t, a, i, o) {
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
              var y = e !== "textarea" || f !== "";
              y && ms(t, f);
            } else
              typeof f == "number" && ms(t, "" + f);
          else
            s === Oh || s === Iu || s === wE || (nr.hasOwnProperty(s) ? f != null && (typeof f != "function" && _h(s, f), s === "onScroll" && En("scroll", t)) : f != null && Ii(t, s, f, o));
        }
    }
    function sw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === rc ? Tv(e, f) : s === up ? vv(e, f) : s === nc ? ms(e, f) : Ii(e, s, f, i);
      }
    }
    function cw(e, t, a, i) {
      var o, s = DE(a), f, v = i;
      if (v === Wi && (v = ld(e)), v === Wi) {
        if (o = po(e, t), !o && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var R = y.firstChild;
          f = y.removeChild(R);
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
      return v === Wi && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ar.call(ng, e) && (ng[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function fw(e, t) {
      return DE(t).createTextNode(e);
    }
    function dw(e, t, a, i) {
      var o = po(t, a);
      kh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            En(ip[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          b(e, a), s = g(e, a), En("invalid", e);
          break;
        case "option":
          Xt(e, a), s = a;
          break;
        case "select":
          hs(e, a), s = vs(e, a), En("invalid", e);
          break;
        case "textarea":
          dv(e, a), s = id(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ss(t, s), uw(t, e, i, s, o), t) {
        case "input":
          Vi(e), ue(e, a, !1);
          break;
        case "textarea":
          Vi(e), Ec(e);
          break;
        case "option":
          Gt(e, a);
          break;
        case "select":
          ad(e, a);
          break;
        default:
          typeof s.onClick == "function" && Mh(e);
          break;
      }
    }
    function pw(e, t, a, i, o) {
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
      var y, R, T = null;
      for (y in f)
        if (!(v.hasOwnProperty(y) || !f.hasOwnProperty(y) || f[y] == null))
          if (y === rc) {
            var U = f[y];
            for (R in U)
              U.hasOwnProperty(R) && (T || (T = {}), T[R] = "");
          } else
            y === up || y === nc || y === Oh || y === Iu || y === wE || (nr.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in v) {
        var N = v[y], H = f != null ? f[y] : void 0;
        if (!(!v.hasOwnProperty(y) || N === H || N == null && H == null))
          if (y === rc)
            if (N && Object.freeze(N), H) {
              for (R in H)
                H.hasOwnProperty(R) && (!N || !N.hasOwnProperty(R)) && (T || (T = {}), T[R] = "");
              for (R in N)
                N.hasOwnProperty(R) && H[R] !== N[R] && (T || (T = {}), T[R] = N[R]);
            } else
              T || (s || (s = []), s.push(y, T)), T = N;
          else if (y === up) {
            var P = N ? N[Dh] : void 0, q = H ? H[Dh] : void 0;
            P != null && q !== P && (s = s || []).push(y, P);
          } else
            y === nc ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(y, "" + N) : y === Oh || y === Iu || (nr.hasOwnProperty(y) ? (N != null && (typeof N != "function" && _h(y, N), y === "onScroll" && En("scroll", e)), !s && H !== N && (s = [])) : (s = s || []).push(y, N));
      }
      return T && (wv(T, v[rc]), (s = s || []).push(rc, T)), s;
    }
    function vw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && j(e, o);
      var s = po(a, i), f = po(a, o);
      switch (sw(e, t, s, f), a) {
        case "input":
          B(e, o);
          break;
        case "textarea":
          pv(e, o);
          break;
        case "select":
          vy(e, o);
          break;
      }
    }
    function hw(e) {
      {
        var t = e.toLowerCase();
        return wc.hasOwnProperty(t) && wc[t] || null;
      }
    }
    function mw(e, t, a, i, o, s, f) {
      var v, y;
      switch (v = po(t, a), kh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < ip.length; R++)
            En(ip[R], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          b(e, a), En("invalid", e);
          break;
        case "option":
          Xt(e, a);
          break;
        case "select":
          hs(e, a), En("invalid", e);
          break;
        case "textarea":
          dv(e, a), En("invalid", e);
          break;
      }
      Ss(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var T = e.attributes, U = 0; U < T.length; U++) {
          var N = T[U].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(T[U].name);
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
            q != null && (typeof q != "function" && _h(P, q), P === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var Re = void 0, Ve = v && Qe ? null : Qn(P);
            if (a[Iu] !== !0) {
              if (!(P === Oh || P === Iu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              P === "value" || P === "checked" || P === "selected")) {
                if (P === up) {
                  var Ae = e.innerHTML, xt = q ? q[Dh] : void 0;
                  if (xt != null) {
                    var Rt = OE(e, xt);
                    Rt !== Ae && sp(P, Ae, Rt);
                  }
                } else if (P === rc) {
                  if (y.delete(P), xE) {
                    var A = wy(q);
                    Re = e.getAttribute("style"), A !== Re && sp(P, Re, A);
                  }
                } else if (v && !Qe)
                  y.delete(P.toLowerCase()), Re = La(e, P, q), q !== Re && sp(P, Re, q);
                else if (!hn(P, Ve, v) && !Wt(P, q, Ve, v)) {
                  var X = !1;
                  if (Ve !== null)
                    y.delete(Ve.attributeName), Re = ni(e, P, q, Ve);
                  else {
                    var I = i;
                    if (I === Wi && (I = ld(t)), I === Wi)
                      y.delete(P.toLowerCase());
                    else {
                      var oe = hw(P);
                      oe !== null && oe !== P && (X = !0, y.delete(oe)), y.delete(P);
                    }
                    Re = La(e, P, q);
                  }
                  var Ce = Qe;
                  !Ce && q !== Re && !X && sp(P, Re, q);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Iu] !== !0 && bE(y), t) {
        case "input":
          Vi(e), ue(e, a, !0);
          break;
        case "textarea":
          Vi(e), Ec(e);
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
    function yw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function rg(e, t) {
      {
        if (Xa)
          return;
        Xa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ag(e, t) {
      {
        if (Xa)
          return;
        Xa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ig(e, t, a) {
      {
        if (Xa)
          return;
        Xa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function lg(e, t) {
      {
        if (t === "" || Xa)
          return;
        Xa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function gw(e, t, a) {
      switch (t) {
        case "input":
          ke(e, a);
          return;
        case "textarea":
          hy(e, a);
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
      var Sw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], kE = [
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
      ], Ew = kE.concat(["button"]), Rw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], _E = {
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
        var a = ft({}, e || _E), i = {
          tag: t
        };
        return kE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Ew.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Sw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Cw = function(e, t) {
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
            return Rw.indexOf(t) === -1;
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
      }, Tw = function(e, t) {
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
      }, LE = {};
      cp = function(e, t, a) {
        a = a || _E;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Cw(e, o) ? null : i, f = s ? null : Tw(e, a), v = s || f;
        if (v) {
          var y = v.tag, R = !!s + "|" + e + "|" + y;
          if (!LE[R]) {
            LE[R] = !0;
            var T = e, U = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", U = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var N = "";
              y === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, y, U, N);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, y);
          }
        }
      };
    }
    var Uh = "suppressHydrationWarning", zh = "$", Ah = "/$", dp = "$?", pp = "$!", ww = "style", og = null, ug = null;
    function bw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ga:
        case ud: {
          t = i === ga ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : od(null, "");
          break;
        }
        default: {
          var s = i === Cn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = od(f, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), y = fp(null, v);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function xw(e, t, a) {
      {
        var i = e, o = od(i.namespace, t), s = fp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function CL(e) {
      return e;
    }
    function Ow(e) {
      og = _u(), ug = PT();
      var t = null;
      return ia(!1), t;
    }
    function Dw(e) {
      VT(ug), ia(og), og = null, ug = null;
    }
    function kw(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (cp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, y = fp(f.ancestorInfo, e);
          cp(null, v, y);
        }
        s = f.namespace;
      }
      var R = cw(e, t, a, s);
      return mp(o, R), mg(R, t), R;
    }
    function _w(e, t) {
      e.appendChild(t);
    }
    function Lw(e, t, a, i, o) {
      switch (dw(e, t, a, i), t) {
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
    function Nw(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, y = fp(f.ancestorInfo, t);
          cp(null, v, y);
        }
      }
      return pw(e, t, a, i);
    }
    function sg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Mw(e, t, a, i) {
      {
        var o = a;
        cp(null, e, o.ancestorInfo);
      }
      var s = fw(e, t);
      return mp(i, s), s;
    }
    function Uw() {
      var e = window.event;
      return e === void 0 ? bi : cf(e.type);
    }
    var cg = typeof setTimeout == "function" ? setTimeout : void 0, zw = typeof clearTimeout == "function" ? clearTimeout : void 0, fg = -1, NE = typeof Promise == "function" ? Promise : void 0, Aw = typeof queueMicrotask == "function" ? queueMicrotask : typeof NE < "u" ? function(e) {
      return NE.resolve(null).then(e).catch(Iw);
    } : cg;
    function Iw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Fw(e, t, a, i) {
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
    function jw(e, t, a, i, o, s) {
      vw(e, t, a, i, o), mg(e, o);
    }
    function ME(e) {
      ms(e, "");
    }
    function Hw(e, t, a) {
      e.nodeValue = a;
    }
    function Pw(e, t) {
      e.appendChild(t);
    }
    function Vw(e, t) {
      var a;
      e.nodeType === Cn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Mh(a);
    }
    function Bw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Yw(e, t, a) {
      e.nodeType === Cn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Ww(e, t) {
      e.removeChild(t);
    }
    function qw(e, t) {
      e.nodeType === Cn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function dg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Cn) {
          var s = o.data;
          if (s === Ah)
            if (i === 0) {
              e.removeChild(o), xn(t);
              return;
            } else
              i--;
          else
            (s === zh || s === dp || s === pp) && i++;
        }
        a = o;
      } while (a);
      xn(t);
    }
    function Xw(e, t) {
      e.nodeType === Cn ? dg(e.parentNode, t) : e.nodeType === Qr && dg(e, t), xn(e);
    }
    function Gw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Qw(e) {
      e.nodeValue = "";
    }
    function Jw(e, t) {
      e = e;
      var a = t[ww], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = bl("display", i);
    }
    function Kw(e, t) {
      e.nodeValue = t;
    }
    function Zw(e) {
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === ga && e.documentElement && e.removeChild(e.documentElement);
    }
    function $w(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function eb(e, t) {
      return t === "" || e.nodeType !== qi ? null : e;
    }
    function tb(e) {
      return e.nodeType !== Cn ? null : e;
    }
    function UE(e) {
      return e.data === dp;
    }
    function pg(e) {
      return e.data === pp;
    }
    function nb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function rb(e, t) {
      e._reactRetry = t;
    }
    function Ih(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Qr || t === qi)
          break;
        if (t === Cn) {
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
    function ab(e) {
      return Ih(e.firstChild);
    }
    function ib(e) {
      return Ih(e.firstChild);
    }
    function lb(e) {
      return Ih(e.nextSibling);
    }
    function ob(e, t, a, i, o, s, f) {
      mp(s, e), mg(e, a);
      var v;
      {
        var y = o;
        v = y.namespace;
      }
      var R = (s.mode & ze) !== Pe;
      return mw(e, t, a, v, i, R, f);
    }
    function ub(e, t, a, i) {
      return mp(a, e), a.mode & ze, yw(e, t);
    }
    function sb(e, t) {
      mp(t, e);
    }
    function cb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Cn) {
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
    function zE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Cn) {
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
    function fb(e) {
      xn(e);
    }
    function db(e) {
      xn(e);
    }
    function pb(e) {
      return e !== "head" && e !== "body";
    }
    function vb(e, t, a, i) {
      var o = !0;
      Nh(t.nodeValue, a, i, o);
    }
    function hb(e, t, a, i, o, s) {
      if (t[Uh] !== !0) {
        var f = !0;
        Nh(i.nodeValue, o, s, f);
      }
    }
    function mb(e, t) {
      t.nodeType === Qr ? rg(e, t) : t.nodeType === Cn || ag(e, t);
    }
    function yb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? rg(a, t) : t.nodeType === Cn || ag(a, t));
      }
    }
    function gb(e, t, a, i, o) {
      (o || t[Uh] !== !0) && (i.nodeType === Qr ? rg(a, i) : i.nodeType === Cn || ag(a, i));
    }
    function Sb(e, t, a) {
      ig(e, t);
    }
    function Eb(e, t) {
      lg(e, t);
    }
    function Rb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ig(i, t);
      }
    }
    function Cb(e, t) {
      {
        var a = e.parentNode;
        a !== null && lg(a, t);
      }
    }
    function Tb(e, t, a, i, o, s) {
      (s || t[Uh] !== !0) && ig(a, i);
    }
    function wb(e, t, a, i, o) {
      (o || t[Uh] !== !0) && lg(a, i);
    }
    function bb(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function xb(e) {
      lp(e);
    }
    var Df = Math.random().toString(36).slice(2), kf = "__reactFiber$" + Df, vg = "__reactProps$" + Df, hp = "__reactContainer$" + Df, hg = "__reactEvents$" + Df, Ob = "__reactListeners$" + Df, Db = "__reactHandles$" + Df;
    function kb(e) {
      delete e[kf], delete e[vg], delete e[hg], delete e[Ob], delete e[Db];
    }
    function mp(e, t) {
      t[kf] = e;
    }
    function Fh(e, t) {
      t[hp] = e;
    }
    function AE(e) {
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
            for (var o = zE(e); o !== null; ) {
              var s = o[kf];
              if (s)
                return s;
              o = zE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Fu(e) {
      var t = e[kf] || e[hp];
      return t && (t.tag === G || t.tag === K || t.tag === _e || t.tag === ae) ? t : null;
    }
    function _f(e) {
      if (e.tag === G || e.tag === K)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function jh(e) {
      return e[vg] || null;
    }
    function mg(e, t) {
      e[vg] = t;
    }
    function _b(e) {
      var t = e[hg];
      return t === void 0 && (t = e[hg] = /* @__PURE__ */ new Set()), t;
    }
    var IE = {}, FE = C.ReactDebugCurrentFrame;
    function Hh(e) {
      if (e) {
        var t = e._owner, a = Tt(e.type, e._source, t ? t.type : null);
        FE.setExtraStackFrame(a);
      } else
        FE.setExtraStackFrame(null);
    }
    function il(e, t, a, i, o) {
      {
        var s = Function.call.bind(ar);
        for (var f in e)
          if (s(e, f)) {
            var v = void 0;
            try {
              if (typeof e[f] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              v = R;
            }
            v && !(v instanceof Error) && (Hh(o), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), Hh(null)), v instanceof Error && !(v.message in IE) && (IE[v.message] = !0, Hh(o), E("Failed %s type: %s", a, v.message), Hh(null));
          }
      }
    }
    var yg = [], Ph;
    Ph = [];
    var Ao = -1;
    function ju(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (Ao < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Ph[Ao] && E("Unexpected Fiber popped."), e.current = yg[Ao], yg[Ao] = null, Ph[Ao] = null, Ao--;
    }
    function oa(e, t, a) {
      Ao++, yg[Ao] = e.current, Ph[Ao] = a, e.current = t;
    }
    var gg;
    gg = {};
    var ci = {};
    Object.freeze(ci);
    var Io = ju(ci), Yl = ju(!1), Sg = ci;
    function Lf(e, t, a) {
      return a && Wl(t) ? Sg : Io.current;
    }
    function jE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Nf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ci;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var v = et(e) || "Unknown";
          il(i, s, "context", v);
        }
        return o && jE(e, t, s), s;
      }
    }
    function Vh() {
      return Yl.current;
    }
    function Wl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Bh(e) {
      la(Yl, e), la(Io, e);
    }
    function Eg(e) {
      la(Yl, e), la(Io, e);
    }
    function HE(e, t, a) {
      {
        if (Io.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        oa(Io, t, e), oa(Yl, a, e);
      }
    }
    function PE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = et(e) || "Unknown";
            gg[s] || (gg[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var v in f)
          if (!(v in o))
            throw new Error((et(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var y = et(e) || "Unknown";
          il(o, f, "child context", y);
        }
        return ft({}, a, f);
      }
    }
    function Yh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return Sg = Io.current, oa(Io, a, e), oa(Yl, Yl.current, e), !0;
      }
    }
    function VE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = PE(e, t, Sg);
          i.__reactInternalMemoizedMergedChildContext = o, la(Yl, e), la(Io, e), oa(Io, o, e), oa(Yl, a, e);
        } else
          la(Yl, e), oa(Yl, a, e);
      }
    }
    function Lb(e) {
      {
        if (!Ra(e) || e.tag !== W)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ae:
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
    var Hu = 0, Wh = 1, Fo = null, Rg = !1, Cg = !1;
    function BE(e) {
      Fo === null ? Fo = [e] : Fo.push(e);
    }
    function Nb(e) {
      Rg = !0, BE(e);
    }
    function YE() {
      Rg && Pu();
    }
    function Pu() {
      if (!Cg && Fo !== null) {
        Cg = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = Fo;
          for (bn(Mn); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Fo = null, Rg = !1;
        } catch (s) {
          throw Fo !== null && (Fo = Fo.slice(e + 1)), Dd(ea, Pu), s;
        } finally {
          bn(t), Cg = !1;
        }
      }
      return null;
    }
    var Mf = [], Uf = 0, qh = null, Xh = 0, ki = [], _i = 0, ic = null, jo = 1, Ho = "";
    function Mb(e) {
      return oc(), (e.flags & Hv) !== He;
    }
    function Ub(e) {
      return oc(), Xh;
    }
    function zb() {
      var e = Ho, t = jo, a = t & ~Ab(t);
      return a.toString(32) + e;
    }
    function lc(e, t) {
      oc(), Mf[Uf++] = Xh, Mf[Uf++] = qh, qh = e, Xh = t;
    }
    function WE(e, t, a) {
      oc(), ki[_i++] = jo, ki[_i++] = Ho, ki[_i++] = ic, ic = e;
      var i = jo, o = Ho, s = Gh(i) - 1, f = i & ~(1 << s), v = a + 1, y = Gh(t) + s;
      if (y > 30) {
        var R = s - s % 5, T = (1 << R) - 1, U = (f & T).toString(32), N = f >> R, H = s - R, P = Gh(t) + H, q = v << H, Re = q | N, Ve = U + o;
        jo = 1 << P | Re, Ho = Ve;
      } else {
        var Ae = v << s, xt = Ae | f, Rt = o;
        jo = 1 << y | xt, Ho = Rt;
      }
    }
    function Tg(e) {
      oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        lc(e, a), WE(e, a, i);
      }
    }
    function Gh(e) {
      return 32 - zs(e);
    }
    function Ab(e) {
      return 1 << Gh(e) - 1;
    }
    function wg(e) {
      for (; e === qh; )
        qh = Mf[--Uf], Mf[Uf] = null, Xh = Mf[--Uf], Mf[Uf] = null;
      for (; e === ic; )
        ic = ki[--_i], ki[_i] = null, Ho = ki[--_i], ki[_i] = null, jo = ki[--_i], ki[_i] = null;
    }
    function Ib() {
      return oc(), ic !== null ? {
        id: jo,
        overflow: Ho
      } : null;
    }
    function Fb(e, t) {
      oc(), ki[_i++] = jo, ki[_i++] = Ho, ki[_i++] = ic, jo = t.id, Ho = t.overflow, ic = e;
    }
    function oc() {
      Mr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Nr = null, Li = null, ll = !1, uc = !1, Vu = null;
    function jb() {
      ll && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function qE() {
      uc = !0;
    }
    function Hb() {
      return uc;
    }
    function Pb(e) {
      var t = e.stateNode.containerInfo;
      return Li = ib(t), Nr = e, ll = !0, Vu = null, uc = !1, !0;
    }
    function Vb(e, t, a) {
      return Li = lb(t), Nr = e, ll = !0, Vu = null, uc = !1, a !== null && Fb(e, a), !0;
    }
    function XE(e, t) {
      switch (e.tag) {
        case ae: {
          mb(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & ze) !== Pe;
          gb(
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
          i.dehydrated !== null && yb(i.dehydrated, t);
          break;
        }
      }
    }
    function GE(e, t) {
      XE(e, t);
      var a = WD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function bg(e, t) {
      {
        if (uc)
          return;
        switch (e.tag) {
          case ae: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, Sb(a, i);
                break;
              case K:
                var o = t.pendingProps;
                Eb(a, o);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case G: {
                var y = t.type, R = t.pendingProps, T = (e.mode & ze) !== Pe;
                Tb(
                  s,
                  f,
                  v,
                  y,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case K: {
                var U = t.pendingProps, N = (e.mode & ze) !== Pe;
                wb(
                  s,
                  f,
                  v,
                  U,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case _e: {
            var H = e.memoizedState, P = H.dehydrated;
            if (P !== null)
              switch (t.tag) {
                case G:
                  var q = t.type;
                  t.pendingProps, Rb(P, q);
                  break;
                case K:
                  var Re = t.pendingProps;
                  Cb(P, Re);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function QE(e, t) {
      t.flags = t.flags & ~Ei | Zt, bg(e, t);
    }
    function JE(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = $w(t, a);
          return i !== null ? (e.stateNode = i, Nr = e, Li = ab(i), !0) : !1;
        }
        case K: {
          var o = e.pendingProps, s = eb(t, o);
          return s !== null ? (e.stateNode = s, Nr = e, Li = null, !0) : !1;
        }
        case _e: {
          var f = tb(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: Ib(),
              retryLane: wa
            };
            e.memoizedState = v;
            var y = qD(f);
            return y.return = e, e.child = y, Nr = e, Li = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function xg(e) {
      return (e.mode & ze) !== Pe && (e.flags & tt) === He;
    }
    function Og(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Dg(e) {
      if (ll) {
        var t = Li;
        if (!t) {
          xg(e) && (bg(Nr, e), Og()), QE(Nr, e), ll = !1, Nr = e;
          return;
        }
        var a = t;
        if (!JE(e, t)) {
          xg(e) && (bg(Nr, e), Og()), t = vp(a);
          var i = Nr;
          if (!t || !JE(e, t)) {
            QE(Nr, e), ll = !1, Nr = e;
            return;
          }
          GE(i, a);
        }
      }
    }
    function Bb(e, t, a) {
      var i = e.stateNode, o = !uc, s = ob(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function Yb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ub(t, a, e);
      if (i) {
        var o = Nr;
        if (o !== null)
          switch (o.tag) {
            case ae: {
              var s = o.stateNode.containerInfo, f = (o.mode & ze) !== Pe;
              vb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var v = o.type, y = o.memoizedProps, R = o.stateNode, T = (o.mode & ze) !== Pe;
              hb(
                v,
                y,
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
    function Wb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      sb(a, e);
    }
    function qb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return cb(a);
    }
    function KE(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== ae && t.tag !== _e; )
        t = t.return;
      Nr = t;
    }
    function Qh(e) {
      if (e !== Nr)
        return !1;
      if (!ll)
        return KE(e), ll = !0, !1;
      if (e.tag !== ae && (e.tag !== G || pb(e.type) && !sg(e.type, e.memoizedProps))) {
        var t = Li;
        if (t)
          if (xg(e))
            ZE(e), Og();
          else
            for (; t; )
              GE(e, t), t = vp(t);
      }
      return KE(e), e.tag === _e ? Li = qb(e) : Li = Nr ? vp(e.stateNode) : null, !0;
    }
    function Xb() {
      return ll && Li !== null;
    }
    function ZE(e) {
      for (var t = Li; t; )
        XE(e, t), t = vp(t);
    }
    function zf() {
      Nr = null, Li = null, ll = !1, uc = !1;
    }
    function $E() {
      Vu !== null && (XR(Vu), Vu = null);
    }
    function Mr() {
      return ll;
    }
    function kg(e) {
      Vu === null ? Vu = [e] : Vu.push(e);
    }
    var Gb = C.ReactCurrentBatchConfig, Qb = null;
    function Jb() {
      return Gb.transition;
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
      var Kb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Tn && (t = a), a = a.return;
        return t;
      }, sc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Rp = [], Cp = [], Tp = [], cc = /* @__PURE__ */ new Set();
      ol.recordUnsafeLifecycleWarnings = function(e, t) {
        cc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & Tn && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & Tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Rp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Cp.push(e), e.mode & Tn && typeof t.UNSAFE_componentWillUpdate == "function" && Tp.push(e));
      }, ol.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(N) {
          e.add(et(N) || "Component"), cc.add(N.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(N) {
          t.add(et(N) || "Component"), cc.add(N.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(N) {
          a.add(et(N) || "Component"), cc.add(N.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(N) {
          i.add(et(N) || "Component"), cc.add(N.type);
        }), Rp = []);
        var o = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(N) {
          o.add(et(N) || "Component"), cc.add(N.type);
        }), Cp = []);
        var s = /* @__PURE__ */ new Set();
        if (Tp.length > 0 && (Tp.forEach(function(N) {
          s.add(et(N) || "Component"), cc.add(N.type);
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
          var y = sc(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var R = sc(e);
          k(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (a.size > 0) {
          var T = sc(a);
          k(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (o.size > 0) {
          var U = sc(o);
          k(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, U);
        }
      };
      var Jh = /* @__PURE__ */ new Map(), e1 = /* @__PURE__ */ new Set();
      ol.recordLegacyContextWarning = function(e, t) {
        var a = Kb(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!e1.has(e.type)) {
          var i = Jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Jh.set(a, i)), i.push(e));
        }
      }, ol.flushLegacyContextWarning = function() {
        Jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(et(s) || "Component"), e1.add(s.type);
            });
            var o = sc(i);
            try {
              yn(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              on();
            }
          }
        });
      }, ol.discardPendingWarnings = function() {
        gp = [], Sp = [], Ep = [], Rp = [], Cp = [], Tp = [], Jh = /* @__PURE__ */ new Map();
      };
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = ft({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var _g = ju(null), Lg;
    Lg = {};
    var Kh = null, Af = null, Ng = null, Zh = !1;
    function $h() {
      Kh = null, Af = null, Ng = null, Zh = !1;
    }
    function t1() {
      Zh = !0;
    }
    function n1() {
      Zh = !1;
    }
    function r1(e, t, a) {
      oa(_g, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Lg && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Lg;
    }
    function Mg(e, t) {
      var a = _g.current;
      la(_g, t), e._currentValue = a;
    }
    function Ug(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Do(i.childLanes, t) ? o !== null && !Do(o.childLanes, t) && (o.childLanes = at(o.childLanes, t)) : (i.childLanes = at(i.childLanes, t), o !== null && (o.childLanes = at(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Zb(e, t, a) {
      $b(e, t, a);
    }
    function $b(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === W) {
                var v = Eu(a), y = Po(an, v);
                y.tag = tm;
                var R = i.updateQueue;
                if (R !== null) {
                  var T = R.shared, U = T.pending;
                  U === null ? y.next = y : (y.next = U.next, U.next = y), T.pending = y;
                }
              }
              i.lanes = at(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = at(N.lanes, a)), Ug(i.return, a, e), s.lanes = at(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Fe)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Ct) {
          var H = i.return;
          if (H === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          H.lanes = at(H.lanes, a);
          var P = H.alternate;
          P !== null && (P.lanes = at(P.lanes, a)), Ug(H, a, e), o = i.sibling;
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
      Kh = e, Af = null, Ng = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (aa(a.lanes, t) && Ip(), a.firstContext = null);
      }
    }
    function er(e) {
      Zh && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ng !== e) {
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
    function zg(e) {
      fc === null ? fc = [e] : fc.push(e);
    }
    function ex() {
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
    function a1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, zg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, em(e, i);
    }
    function tx(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, zg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function nx(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, zg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, em(e, i);
    }
    function Ga(e, t) {
      return em(e, t);
    }
    var rx = em;
    function em(e, t) {
      e.lanes = at(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = at(a.lanes, t)), a === null && (e.flags & (Zt | Ei)) !== He && iC(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = at(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = at(a.childLanes, t) : (o.flags & (Zt | Ei)) !== He && iC(e), i = o, o = o.return;
      if (i.tag === ae) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var i1 = 0, l1 = 1, tm = 2, Ag = 3, nm = !1, Ig, rm;
    Ig = !1, rm = null;
    function Fg(e) {
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
    function o1(e, t) {
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
        tag: i1,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Bu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (rm === o && !Ig && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Ig = !0), rD()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, rx(e, a);
      } else
        return nx(e, o, t, a);
    }
    function am(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (jd(a)) {
          var s = o.lanes;
          s = ef(s, e.pendingLanes);
          var f = at(s, a);
          o.lanes = f, Hd(e, f);
        }
      }
    }
    function jg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, v = a.firstBaseUpdate;
          if (v !== null) {
            var y = v;
            do {
              var R = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              f === null ? s = f = R : (f.next = R, f = R), y = y.next;
            } while (y !== null);
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
    function ax(e, t, a, i, o, s) {
      switch (a.tag) {
        case l1: {
          var f = a.payload;
          if (typeof f == "function") {
            t1();
            var v = f.call(s, i, o);
            {
              if (e.mode & Tn) {
                rn(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  rn(!1);
                }
              }
              n1();
            }
            return v;
          }
          return f;
        }
        case Ag:
          e.flags = e.flags & ~or | tt;
        case i1: {
          var y = a.payload, R;
          if (typeof y == "function") {
            t1(), R = y.call(s, i, o);
            {
              if (e.mode & Tn) {
                rn(!0);
                try {
                  y.call(s, i, o);
                } finally {
                  rn(!1);
                }
              }
              n1();
            }
          } else
            R = y;
          return R == null ? i : ft({}, i, R);
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
        var y = v, R = y.next;
        y.next = null, f === null ? s = R : f.next = R, f = y;
        var T = e.alternate;
        if (T !== null) {
          var U = T.updateQueue, N = U.lastBaseUpdate;
          N !== f && (N === null ? U.firstBaseUpdate = R : N.next = R, U.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var H = o.baseState, P = Q, q = null, Re = null, Ve = null, Ae = s;
        do {
          var xt = Ae.lane, Rt = Ae.eventTime;
          if (Do(i, xt)) {
            if (Ve !== null) {
              var X = {
                eventTime: Rt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ln,
                tag: Ae.tag,
                payload: Ae.payload,
                callback: Ae.callback,
                next: null
              };
              Ve = Ve.next = X;
            }
            H = ax(e, o, Ae, H, t, a);
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
              eventTime: Rt,
              lane: xt,
              tag: Ae.tag,
              payload: Ae.payload,
              callback: Ae.callback,
              next: null
            };
            Ve === null ? (Re = Ve = A, q = H) : Ve = Ve.next = A, P = at(P, xt);
          }
          if (Ae = Ae.next, Ae === null) {
            if (v = o.shared.pending, v === null)
              break;
            var Ce = v, me = Ce.next;
            Ce.next = null, Ae = me, o.lastBaseUpdate = Ce, o.shared.pending = null;
          }
        } while (!0);
        Ve === null && (q = H), o.baseState = q, o.firstBaseUpdate = Re, o.lastBaseUpdate = Ve;
        var $e = o.shared.interleaved;
        if ($e !== null) {
          var rt = $e;
          do
            P = at(P, rt.lane), rt = rt.next;
          while (rt !== $e);
        } else
          s === null && (o.shared.lanes = Q);
        Qp(P), e.lanes = P, e.memoizedState = H;
      }
      rm = null;
    }
    function ix(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function u1() {
      nm = !1;
    }
    function lm() {
      return nm;
    }
    function s1(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, ix(f, a));
        }
    }
    var Hg = {}, c1 = new h.Component().refs, Pg, Vg, Bg, Yg, Wg, f1, om, qg, Xg, Gg;
    {
      Pg = /* @__PURE__ */ new Set(), Vg = /* @__PURE__ */ new Set(), Bg = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set();
      var d1 = /* @__PURE__ */ new Set();
      om = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          d1.has(a) || (d1.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, f1 = function(e, t) {
        if (t === void 0) {
          var a = _t(e) || "Component";
          Wg.has(a) || (Wg.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Hg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Hg);
    }
    function Qg(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & Tn) {
          rn(!0);
          try {
            s = a(i, o);
          } finally {
            rn(!1);
          }
        }
        f1(t, s);
      }
      var f = s == null ? o : ft({}, o, s);
      if (e.memoizedState = f, e.lanes === Q) {
        var v = e.updateQueue;
        v.baseState = f;
      }
    }
    var Jg = {
      isMounted: Ca,
      enqueueSetState: function(e, t, a) {
        var i = Si(e), o = Oa(), s = Ku(i), f = Po(o, s);
        f.payload = t, a != null && (om(a, "setState"), f.callback = a);
        var v = Bu(i, f, s);
        v !== null && (yr(v, i, s, o), am(v, i, s)), Fc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Si(e), o = Oa(), s = Ku(i), f = Po(o, s);
        f.tag = l1, f.payload = t, a != null && (om(a, "replaceState"), f.callback = a);
        var v = Bu(i, f, s);
        v !== null && (yr(v, i, s, o), am(v, i, s)), Fc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Si(e), i = Oa(), o = Ku(a), s = Po(i, o);
        s.tag = tm, t != null && (om(t, "forceUpdate"), s.callback = t);
        var f = Bu(a, s, o);
        f !== null && (yr(f, a, o, i), am(f, a, o)), mu(a, o);
      }
    };
    function p1(e, t, a, i, o, s, f) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var y = v.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Tn) {
            rn(!0);
            try {
              y = v.shouldComponentUpdate(i, s, f);
            } finally {
              rn(!1);
            }
          }
          y === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _t(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Je(a, i) || !Je(o, s) : !0;
    }
    function lx(e, t, a) {
      var i = e.stateNode;
      {
        var o = _t(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !Xg.has(t) && (Xg.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Bg.has(t) && (Bg.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _t(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var v = i.state;
        v && (typeof v != "object" || Lt(v)) && E("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function v1(e, t) {
      t.updater = Jg, e.stateNode = t, _c(t, e), t._reactInternalInstance = Hg;
    }
    function h1(e, t, a) {
      var i = !1, o = ci, s = ci, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === de && f._context === void 0
        );
        if (!v && !Gg.has(t)) {
          Gg.add(t);
          var y = "";
          f === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? y = " However, it is set to a " + typeof f + "." : f.$$typeof === re ? y = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _t(t) || "Component", y);
        }
      }
      if (typeof f == "object" && f !== null)
        s = er(f);
      else {
        o = Lf(e, t, !0);
        var R = t.contextTypes;
        i = R != null, s = i ? Nf(e, o) : ci;
      }
      var T = new t(a, s);
      if (e.mode & Tn) {
        rn(!0);
        try {
          T = new t(a, s);
        } finally {
          rn(!1);
        }
      }
      var U = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      v1(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && U === null) {
          var N = _t(t) || "Component";
          Vg.has(N) || (Vg.add(N), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, T.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var H = null, P = null, q = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? P = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (P = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? q = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (q = "UNSAFE_componentWillUpdate"), H !== null || P !== null || q !== null) {
            var Re = _t(t) || "Component", Ve = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Yg.has(Re) || (Yg.add(Re), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Re, Ve, H !== null ? `
  ` + H : "", P !== null ? `
  ` + P : "", q !== null ? `
  ` + q : ""));
          }
        }
      }
      return i && jE(e, o, s), T;
    }
    function ox(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", et(e) || "Component"), Jg.enqueueReplaceState(t, t.state, null));
    }
    function m1(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = et(e) || "Component";
          Pg.has(s) || (Pg.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Jg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Kg(e, t, a, i) {
      lx(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = c1, Fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = er(s);
      else {
        var f = Lf(e, t, !0);
        o.context = Nf(e, f);
      }
      {
        if (o.state === a) {
          var v = _t(t) || "Component";
          qg.has(v) || (qg.add(v), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & Tn && ol.recordLegacyContextWarning(e, o), ol.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (Qg(e, t, y, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (ox(e, o), im(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var R = Me;
        R |= Ia, (e.mode & Ha) !== Pe && (R |= Fa), e.flags |= R;
      }
    }
    function ux(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, v = t.contextType, y = ci;
      if (typeof v == "object" && v !== null)
        y = er(v);
      else {
        var R = Lf(e, t, !0);
        y = Nf(e, R);
      }
      var T = t.getDerivedStateFromProps, U = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !U && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== y) && m1(e, o, a, y), u1();
      var N = e.memoizedState, H = o.state = N;
      if (im(e, a, o, i), H = e.memoizedState, s === a && N === H && !Vh() && !lm()) {
        if (typeof o.componentDidMount == "function") {
          var P = Me;
          P |= Ia, (e.mode & Ha) !== Pe && (P |= Fa), e.flags |= P;
        }
        return !1;
      }
      typeof T == "function" && (Qg(e, t, T, a), H = e.memoizedState);
      var q = lm() || p1(e, t, s, a, N, H, y);
      if (q) {
        if (!U && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Re = Me;
          Re |= Ia, (e.mode & Ha) !== Pe && (Re |= Fa), e.flags |= Re;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Ve = Me;
          Ve |= Ia, (e.mode & Ha) !== Pe && (Ve |= Fa), e.flags |= Ve;
        }
        e.memoizedProps = a, e.memoizedState = H;
      }
      return o.props = a, o.state = H, o.context = y, q;
    }
    function sx(e, t, a, i, o) {
      var s = t.stateNode;
      o1(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : ul(t.type, f);
      s.props = v;
      var y = t.pendingProps, R = s.context, T = a.contextType, U = ci;
      if (typeof T == "object" && T !== null)
        U = er(T);
      else {
        var N = Lf(t, a, !0);
        U = Nf(t, N);
      }
      var H = a.getDerivedStateFromProps, P = typeof H == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !P && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== y || R !== U) && m1(t, s, i, U), u1();
      var q = t.memoizedState, Re = s.state = q;
      if (im(t, i, s, o), Re = t.memoizedState, f === y && q === Re && !Vh() && !lm() && !D)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= jn), !1;
      typeof H == "function" && (Qg(t, a, H, i), Re = t.memoizedState);
      var Ve = lm() || p1(t, a, v, i, q, Re, U) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      D;
      return Ve ? (!P && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Re, U), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Re, U)), typeof s.componentDidUpdate == "function" && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= jn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= Me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || q !== e.memoizedState) && (t.flags |= jn), t.memoizedProps = i, t.memoizedState = Re), s.props = i, s.state = Re, s.context = U, Ve;
    }
    var Zg, $g, e0, t0, n0, y1 = function(e, t) {
    };
    Zg = !1, $g = !1, e0 = {}, t0 = {}, n0 = {}, y1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = et(t) || "Component";
        t0[a] || (t0[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Tn || gt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = et(e) || "Component";
          e0[o] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), e0[o] = !0);
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
          var y = f;
          Bn(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var T = function(U) {
            var N = y.refs;
            N === c1 && (N = y.refs = {}), U === null ? delete N[R] : N[R] = U;
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
        var t = et(e) || "Component";
        if (n0[t])
          return;
        n0[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function g1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function S1(e) {
      function t(A, X) {
        if (e) {
          var I = A.deletions;
          I === null ? (A.deletions = [X], A.flags |= Ut) : I.push(X);
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
          return Ce < X ? (A.flags |= Zt, X) : Ce;
        } else
          return A.flags |= Zt, X;
      }
      function f(A) {
        return e && A.alternate === null && (A.flags |= Zt), A;
      }
      function v(A, X, I, oe) {
        if (X === null || X.tag !== K) {
          var Ce = kS(I, A.mode, oe);
          return Ce.return = A, Ce;
        } else {
          var me = o(X, I);
          return me.return = A, me;
        }
      }
      function y(A, X, I, oe) {
        var Ce = I.type;
        if (Ce === ya)
          return T(A, X, I.props.children, oe, I.key);
        if (X !== null && (X.elementType === Ce || // Keep this check inline so it only runs on the false path:
        sC(X, I) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === je && g1(Ce) === X.type)) {
          var me = o(X, I.props);
          return me.ref = wp(A, X, I), me.return = A, me._debugSource = I._source, me._debugOwner = I._owner, me;
        }
        var $e = DS(I, A.mode, oe);
        return $e.ref = wp(A, X, I), $e.return = A, $e;
      }
      function R(A, X, I, oe) {
        if (X === null || X.tag !== Se || X.stateNode.containerInfo !== I.containerInfo || X.stateNode.implementation !== I.implementation) {
          var Ce = _S(I, A.mode, oe);
          return Ce.return = A, Ce;
        } else {
          var me = o(X, I.children || []);
          return me.return = A, me;
        }
      }
      function T(A, X, I, oe, Ce) {
        if (X === null || X.tag !== Ne) {
          var me = $u(I, A.mode, oe, Ce);
          return me.return = A, me;
        } else {
          var $e = o(X, I);
          return $e.return = A, $e;
        }
      }
      function U(A, X, I) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var oe = kS("" + X, A.mode, I);
          return oe.return = A, oe;
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Br: {
              var Ce = DS(X, A.mode, I);
              return Ce.ref = wp(A, null, X), Ce.return = A, Ce;
            }
            case Yr: {
              var me = _S(X, A.mode, I);
              return me.return = A, me;
            }
            case je: {
              var $e = X._payload, rt = X._init;
              return U(A, rt($e), I);
            }
          }
          if (Lt(X) || vi(X)) {
            var Jt = $u(X, A.mode, I, null);
            return Jt.return = A, Jt;
          }
          um(A, X);
        }
        return typeof X == "function" && sm(A), null;
      }
      function N(A, X, I, oe) {
        var Ce = X !== null ? X.key : null;
        if (typeof I == "string" && I !== "" || typeof I == "number")
          return Ce !== null ? null : v(A, X, "" + I, oe);
        if (typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Br:
              return I.key === Ce ? y(A, X, I, oe) : null;
            case Yr:
              return I.key === Ce ? R(A, X, I, oe) : null;
            case je: {
              var me = I._payload, $e = I._init;
              return N(A, X, $e(me), oe);
            }
          }
          if (Lt(I) || vi(I))
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
              var $e = A.get(oe.key === null ? I : oe.key) || null;
              return y(X, $e, oe, Ce);
            }
            case Yr: {
              var rt = A.get(oe.key === null ? I : oe.key) || null;
              return R(X, rt, oe, Ce);
            }
            case je:
              var Jt = oe._payload, At = oe._init;
              return H(A, X, I, At(Jt), Ce);
          }
          if (Lt(oe) || vi(oe)) {
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
            case Yr:
              y1(A, I);
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
            case je:
              var Ce = A._payload, me = A._init;
              P(me(Ce), X, I);
              break;
          }
        }
        return X;
      }
      function q(A, X, I, oe) {
        for (var Ce = null, me = 0; me < I.length; me++) {
          var $e = I[me];
          Ce = P($e, Ce, A);
        }
        for (var rt = null, Jt = null, At = X, Gn = 0, It = 0, Pn = null; At !== null && It < I.length; It++) {
          At.index > It ? (Pn = At, At = null) : Pn = At.sibling;
          var sa = N(A, At, I[It], oe);
          if (sa === null) {
            At === null && (At = Pn);
            break;
          }
          e && At && sa.alternate === null && t(A, At), Gn = s(sa, Gn, It), Jt === null ? rt = sa : Jt.sibling = sa, Jt = sa, At = Pn;
        }
        if (It === I.length) {
          if (a(A, At), Mr()) {
            var Hr = It;
            lc(A, Hr);
          }
          return rt;
        }
        if (At === null) {
          for (; It < I.length; It++) {
            var di = U(A, I[It], oe);
            di !== null && (Gn = s(di, Gn, It), Jt === null ? rt = di : Jt.sibling = di, Jt = di);
          }
          if (Mr()) {
            var Da = It;
            lc(A, Da);
          }
          return rt;
        }
        for (var ka = i(A, At); It < I.length; It++) {
          var ca = H(ka, A, It, I[It], oe);
          ca !== null && (e && ca.alternate !== null && ka.delete(ca.key === null ? It : ca.key), Gn = s(ca, Gn, It), Jt === null ? rt = ca : Jt.sibling = ca, Jt = ca);
        }
        if (e && ka.forEach(function(ed) {
          return t(A, ed);
        }), Mr()) {
          var Xo = It;
          lc(A, Xo);
        }
        return rt;
      }
      function Re(A, X, I, oe) {
        var Ce = vi(I);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          I[Symbol.toStringTag] === "Generator" && ($g || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), $g = !0), I.entries === Ce && (Zg || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zg = !0);
          var me = Ce.call(I);
          if (me)
            for (var $e = null, rt = me.next(); !rt.done; rt = me.next()) {
              var Jt = rt.value;
              $e = P(Jt, $e, A);
            }
        }
        var At = Ce.call(I);
        if (At == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Gn = null, It = null, Pn = X, sa = 0, Hr = 0, di = null, Da = At.next(); Pn !== null && !Da.done; Hr++, Da = At.next()) {
          Pn.index > Hr ? (di = Pn, Pn = null) : di = Pn.sibling;
          var ka = N(A, Pn, Da.value, oe);
          if (ka === null) {
            Pn === null && (Pn = di);
            break;
          }
          e && Pn && ka.alternate === null && t(A, Pn), sa = s(ka, sa, Hr), It === null ? Gn = ka : It.sibling = ka, It = ka, Pn = di;
        }
        if (Da.done) {
          if (a(A, Pn), Mr()) {
            var ca = Hr;
            lc(A, ca);
          }
          return Gn;
        }
        if (Pn === null) {
          for (; !Da.done; Hr++, Da = At.next()) {
            var Xo = U(A, Da.value, oe);
            Xo !== null && (sa = s(Xo, sa, Hr), It === null ? Gn = Xo : It.sibling = Xo, It = Xo);
          }
          if (Mr()) {
            var ed = Hr;
            lc(A, ed);
          }
          return Gn;
        }
        for (var ev = i(A, Pn); !Da.done; Hr++, Da = At.next()) {
          var $l = H(ev, A, Hr, Da.value, oe);
          $l !== null && (e && $l.alternate !== null && ev.delete($l.key === null ? Hr : $l.key), sa = s($l, sa, Hr), It === null ? Gn = $l : It.sibling = $l, It = $l);
        }
        if (e && ev.forEach(function(Tk) {
          return t(A, Tk);
        }), Mr()) {
          var Ck = Hr;
          lc(A, Ck);
        }
        return Gn;
      }
      function Ve(A, X, I, oe) {
        if (X !== null && X.tag === K) {
          a(A, X.sibling);
          var Ce = o(X, I);
          return Ce.return = A, Ce;
        }
        a(A, X);
        var me = kS(I, A.mode, oe);
        return me.return = A, me;
      }
      function Ae(A, X, I, oe) {
        for (var Ce = I.key, me = X; me !== null; ) {
          if (me.key === Ce) {
            var $e = I.type;
            if ($e === ya) {
              if (me.tag === Ne) {
                a(A, me.sibling);
                var rt = o(me, I.props.children);
                return rt.return = A, rt._debugSource = I._source, rt._debugOwner = I._owner, rt;
              }
            } else if (me.elementType === $e || // Keep this check inline so it only runs on the false path:
            sC(me, I) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof $e == "object" && $e !== null && $e.$$typeof === je && g1($e) === me.type) {
              a(A, me.sibling);
              var Jt = o(me, I.props);
              return Jt.ref = wp(A, me, I), Jt.return = A, Jt._debugSource = I._source, Jt._debugOwner = I._owner, Jt;
            }
            a(A, me);
            break;
          } else
            t(A, me);
          me = me.sibling;
        }
        if (I.type === ya) {
          var At = $u(I.props.children, A.mode, oe, I.key);
          return At.return = A, At;
        } else {
          var Gn = DS(I, A.mode, oe);
          return Gn.ref = wp(A, X, I), Gn.return = A, Gn;
        }
      }
      function xt(A, X, I, oe) {
        for (var Ce = I.key, me = X; me !== null; ) {
          if (me.key === Ce)
            if (me.tag === Se && me.stateNode.containerInfo === I.containerInfo && me.stateNode.implementation === I.implementation) {
              a(A, me.sibling);
              var $e = o(me, I.children || []);
              return $e.return = A, $e;
            } else {
              a(A, me);
              break;
            }
          else
            t(A, me);
          me = me.sibling;
        }
        var rt = _S(I, A.mode, oe);
        return rt.return = A, rt;
      }
      function Rt(A, X, I, oe) {
        var Ce = typeof I == "object" && I !== null && I.type === ya && I.key === null;
        if (Ce && (I = I.props.children), typeof I == "object" && I !== null) {
          switch (I.$$typeof) {
            case Br:
              return f(Ae(A, X, I, oe));
            case Yr:
              return f(xt(A, X, I, oe));
            case je:
              var me = I._payload, $e = I._init;
              return Rt(A, X, $e(me), oe);
          }
          if (Lt(I))
            return q(A, X, I, oe);
          if (vi(I))
            return Re(A, X, I, oe);
          um(A, I);
        }
        return typeof I == "string" && I !== "" || typeof I == "number" ? f(Ve(A, X, "" + I, oe)) : (typeof I == "function" && sm(A), a(A, X));
      }
      return Rt;
    }
    var Ff = S1(!0), E1 = S1(!1);
    function cx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function fx(e, t) {
      for (var a = e.child; a !== null; )
        HD(a, t), a = a.sibling;
    }
    var bp = {}, Yu = ju(bp), xp = ju(bp), cm = ju(bp);
    function fm(e) {
      if (e === bp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function R1() {
      var e = fm(cm.current);
      return e;
    }
    function r0(e, t) {
      oa(cm, t, e), oa(xp, e, e), oa(Yu, bp, e);
      var a = bw(t);
      la(Yu, e), oa(Yu, a, e);
    }
    function jf(e) {
      la(Yu, e), la(xp, e), la(cm, e);
    }
    function a0() {
      var e = fm(Yu.current);
      return e;
    }
    function C1(e) {
      fm(cm.current);
      var t = fm(Yu.current), a = xw(t, e.type);
      t !== a && (oa(xp, e, e), oa(Yu, a, e));
    }
    function i0(e) {
      xp.current === e && (la(Yu, e), la(xp, e));
    }
    var dx = 0, T1 = 1, w1 = 1, Op = 2, sl = ju(dx);
    function l0(e, t) {
      return (e & t) !== 0;
    }
    function Hf(e) {
      return e & T1;
    }
    function o0(e, t) {
      return e & T1 | t;
    }
    function px(e, t) {
      return e | t;
    }
    function Wu(e, t) {
      oa(sl, t, e);
    }
    function Pf(e) {
      la(sl, e);
    }
    function vx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function dm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === _e) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || UE(i) || pg(i))
              return t;
          }
        } else if (t.tag === it && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & tt) !== He;
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
    var Qa = (
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
    ), u0 = [];
    function s0() {
      for (var e = 0; e < u0.length; e++) {
        var t = u0[e];
        t._workInProgressVersionPrimary = null;
      }
      u0.length = 0;
    }
    function hx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ge = C.ReactCurrentDispatcher, Dp = C.ReactCurrentBatchConfig, c0, Vf;
    c0 = /* @__PURE__ */ new Set();
    var dc = Q, Qt = null, dr = null, pr = null, pm = !1, kp = !1, _p = 0, mx = 0, yx = 25, J = null, Ni = null, qu = -1, f0 = !1;
    function Yt() {
      {
        var e = J;
        Ni === null ? Ni = [e] : Ni.push(e);
      }
    }
    function pe() {
      {
        var e = J;
        Ni !== null && (qu++, Ni[qu] !== e && gx(e));
      }
    }
    function Bf(e) {
      e != null && !Lt(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function gx(e) {
      {
        var t = et(Qt);
        if (!c0.has(t) && (c0.add(t), Ni !== null)) {
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
    function ua() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function d0(e, t) {
      if (f0)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Oe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Yf(e, t, a, i, o, s) {
      dc = s, Qt = t, Ni = e !== null ? e._debugHookTypes : null, qu = -1, f0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Q, e !== null && e.memoizedState !== null ? ge.current = q1 : Ni !== null ? ge.current = W1 : ge.current = Y1;
      var f = a(i, o);
      if (kp) {
        var v = 0;
        do {
          if (kp = !1, _p = 0, v >= yx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, f0 = !1, dr = null, pr = null, t.updateQueue = null, qu = -1, ge.current = X1, f = a(i, o);
        } while (kp);
      }
      ge.current = xm, t._debugHookTypes = Ni;
      var y = dr !== null && dr.next !== null;
      if (dc = Q, Qt = null, dr = null, pr = null, J = null, Ni = null, qu = -1, e !== null && (e.flags & ur) !== (t.flags & ur) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ze) !== Pe && E("Internal React error: Expected static flag was missing. Please notify the React team."), pm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Wf() {
      var e = _p !== 0;
      return _p = 0, e;
    }
    function b1(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ha) !== Pe ? t.flags &= ~(go | Fa | Jr | Me) : t.flags &= ~(Jr | Me), e.lanes = Bs(e.lanes, a);
    }
    function x1() {
      if (ge.current = xm, pm) {
        for (var e = Qt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        pm = !1;
      }
      dc = Q, Qt = null, dr = null, pr = null, Ni = null, qu = -1, J = null, j1 = !1, kp = !1, _p = 0;
    }
    function Xl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pr === null ? Qt.memoizedState = pr = e : pr = pr.next = e, pr;
    }
    function Mi() {
      var e;
      if (dr === null) {
        var t = Qt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = dr.next;
      var a;
      if (pr === null ? a = Qt.memoizedState : a = pr.next, a !== null)
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
        pr === null ? Qt.memoizedState = pr = i : pr = pr.next = i;
      }
      return pr;
    }
    function O1() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function p0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function v0(e, t, a) {
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
      var f = s.dispatch = Cx.bind(null, Qt, s);
      return [i.memoizedState, f];
    }
    function h0(e, t, a) {
      var i = Mi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = dr, f = s.baseQueue, v = o.pending;
      if (v !== null) {
        if (f !== null) {
          var y = f.next, R = v.next;
          f.next = R, v.next = y;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, o.pending = null;
      }
      if (f !== null) {
        var T = f.next, U = s.baseState, N = null, H = null, P = null, q = T;
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
              U = q.eagerState;
            else {
              var xt = q.action;
              U = e(U, xt);
            }
          } else {
            var Ve = {
              lane: Re,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            };
            P === null ? (H = P = Ve, N = U) : P = P.next = Ve, Qt.lanes = at(Qt.lanes, Re), Qp(Re);
          }
          q = q.next;
        } while (q !== null && q !== T);
        P === null ? N = U : P.next = H, Oe(U, i.memoizedState) || Ip(), i.memoizedState = U, i.baseState = N, i.baseQueue = P, o.lastRenderedState = U;
      }
      var Rt = o.interleaved;
      if (Rt !== null) {
        var A = Rt;
        do {
          var X = A.lane;
          Qt.lanes = at(Qt.lanes, X), Qp(X), A = A.next;
        } while (A !== Rt);
      } else
        f === null && (o.lanes = Q);
      var I = o.dispatch;
      return [i.memoizedState, I];
    }
    function m0(e, t, a) {
      var i = Mi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, v = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var y = f.next, R = y;
        do {
          var T = R.action;
          v = e(v, T), R = R.next;
        } while (R !== y);
        Oe(v, i.memoizedState) || Ip(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), o.lastRenderedState = v;
      }
      return [v, s];
    }
    function TL(e, t, a) {
    }
    function wL(e, t, a) {
    }
    function y0(e, t, a) {
      var i = Qt, o = Xl(), s, f = Mr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Vf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Vf = !0);
      } else {
        if (s = t(), !Vf) {
          var v = t();
          Oe(s, v) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Vf = !0);
        }
        var y = Ym();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Vs(y, dc) || D1(i, t, s);
      }
      o.memoizedState = s;
      var R = {
        value: s,
        getSnapshot: t
      };
      return o.queue = R, gm(_1.bind(null, i, R, e), [e]), i.flags |= Jr, Lp(cr | Ur, k1.bind(null, i, R, s, t), void 0, null), s;
    }
    function vm(e, t, a) {
      var i = Qt, o = Mi(), s = t();
      if (!Vf) {
        var f = t();
        Oe(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Vf = !0);
      }
      var v = o.memoizedState, y = !Oe(v, s);
      y && (o.memoizedState = s, Ip());
      var R = o.queue;
      if (Mp(_1.bind(null, i, R, e), [e]), R.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      pr !== null && pr.memoizedState.tag & cr) {
        i.flags |= Jr, Lp(cr | Ur, k1.bind(null, i, R, s, t), void 0, null);
        var T = Ym();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Vs(T, dc) || D1(i, t, s);
      }
      return s;
    }
    function D1(e, t, a) {
      e.flags |= yo;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Qt.updateQueue;
      if (o === null)
        o = O1(), Qt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function k1(e, t, a, i) {
      t.value = a, t.getSnapshot = i, L1(t) && N1(e);
    }
    function _1(e, t, a) {
      var i = function() {
        L1(t) && N1(e);
      };
      return a(i);
    }
    function L1(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Oe(a, i);
      } catch {
        return !0;
      }
    }
    function N1(e) {
      var t = Ga(e, We);
      t !== null && yr(t, e, We, an);
    }
    function hm(e) {
      var t = Xl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Q,
        dispatch: null,
        lastRenderedReducer: p0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Tx.bind(null, Qt, a);
      return [t.memoizedState, i];
    }
    function g0(e) {
      return h0(p0);
    }
    function S0(e) {
      return m0(p0);
    }
    function Lp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Qt.updateQueue;
      if (s === null)
        s = O1(), Qt.updateQueue = s, s.lastEffect = o.next = o;
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
    function E0(e) {
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
      Qt.flags |= e, o.memoizedState = Lp(cr | t, a, void 0, s);
    }
    function ym(e, t, a, i) {
      var o = Mi(), s = i === void 0 ? null : i, f = void 0;
      if (dr !== null) {
        var v = dr.memoizedState;
        if (f = v.destroy, s !== null) {
          var y = v.deps;
          if (d0(s, y)) {
            o.memoizedState = Lp(t, a, f, s);
            return;
          }
        }
      }
      Qt.flags |= e, o.memoizedState = Lp(cr | t, a, f, s);
    }
    function gm(e, t) {
      return (Qt.mode & Ha) !== Pe ? Np(go | Jr | _l, Ur, e, t) : Np(Jr | _l, Ur, e, t);
    }
    function Mp(e, t) {
      return ym(Jr, Ur, e, t);
    }
    function R0(e, t) {
      return Np(Me, ql, e, t);
    }
    function Sm(e, t) {
      return ym(Me, ql, e, t);
    }
    function C0(e, t) {
      var a = Me;
      return a |= Ia, (Qt.mode & Ha) !== Pe && (a |= Fa), Np(a, fr, e, t);
    }
    function Em(e, t) {
      return ym(Me, fr, e, t);
    }
    function M1(e, t) {
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
    function T0(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Me;
      return o |= Ia, (Qt.mode & Ha) !== Pe && (o |= Fa), Np(o, fr, M1.bind(null, t, e), i);
    }
    function Rm(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return ym(Me, fr, M1.bind(null, t, e), i);
    }
    function Sx(e, t) {
    }
    var Cm = Sx;
    function w0(e, t) {
      var a = Xl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Tm(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (d0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function b0(e, t) {
      var a = Xl(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function wm(e, t) {
      var a = Mi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (d0(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function x0(e) {
      var t = Xl();
      return t.memoizedState = e, e;
    }
    function U1(e) {
      var t = Mi(), a = dr, i = a.memoizedState;
      return A1(t, i, e);
    }
    function z1(e) {
      var t = Mi();
      if (dr === null)
        return t.memoizedState = e, e;
      var a = dr.memoizedState;
      return A1(t, a, e);
    }
    function A1(e, t, a) {
      var i = !$v(dc);
      if (i) {
        if (!Oe(a, t)) {
          var o = nh();
          Qt.lanes = at(Qt.lanes, o), Qp(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ip()), e.memoizedState = a, a;
    }
    function Ex(e, t, a) {
      var i = Va();
      bn(Uy(i, tl)), e(!0);
      var o = Dp.transition;
      Dp.transition = {};
      var s = Dp.transition;
      Dp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (bn(i), Dp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && k("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function O0() {
      var e = hm(!1), t = e[0], a = e[1], i = Ex.bind(null, a), o = Xl();
      return o.memoizedState = i, [t, i];
    }
    function I1() {
      var e = g0(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    function F1() {
      var e = S0(), t = e[0], a = Mi(), i = a.memoizedState;
      return [t, i];
    }
    var j1 = !1;
    function Rx() {
      return j1;
    }
    function D0() {
      var e = Xl(), t = Ym(), a = t.identifierPrefix, i;
      if (Mr()) {
        var o = zb();
        i = ":" + a + "R" + o;
        var s = _p++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = mx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function bm() {
      var e = Mi(), t = e.memoizedState;
      return t;
    }
    function Cx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (H1(e))
        P1(t, o);
      else {
        var s = a1(e, t, o, i);
        if (s !== null) {
          var f = Oa();
          yr(s, e, i, f), V1(s, t, i);
        }
      }
      B1(e, i);
    }
    function Tx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ku(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (H1(e))
        P1(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === Q && (s === null || s.lanes === Q)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var v;
            v = ge.current, ge.current = cl;
            try {
              var y = t.lastRenderedState, R = f(y, a);
              if (o.hasEagerState = !0, o.eagerState = R, Oe(R, y)) {
                tx(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              ge.current = v;
            }
          }
        }
        var T = a1(e, t, o, i);
        if (T !== null) {
          var U = Oa();
          yr(T, e, i, U), V1(T, t, i);
        }
      }
      B1(e, i);
    }
    function H1(e) {
      var t = e.alternate;
      return e === Qt || t !== null && t === Qt;
    }
    function P1(e, t) {
      kp = pm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function V1(e, t, a) {
      if (jd(a)) {
        var i = t.lanes;
        i = ef(i, e.pendingLanes);
        var o = at(i, a);
        t.lanes = o, Hd(e, o);
      }
    }
    function B1(e, t, a) {
      Fc(e, t);
    }
    var xm = {
      readContext: er,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: we
    }, Y1 = null, W1 = null, q1 = null, X1 = null, Gl = null, cl = null, Om = null;
    {
      var k0 = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, nt = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Y1 = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Yt(), Bf(t), w0(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Yt(), er(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Yt(), Bf(t), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Yt(), Bf(a), T0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Yt(), Bf(t), R0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Yt(), Bf(t), C0(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Yt(), Bf(t);
          var a = ge.current;
          ge.current = Gl;
          try {
            return b0(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Yt();
          var i = ge.current;
          ge.current = Gl;
          try {
            return v0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Yt(), E0(e);
        },
        useState: function(e) {
          J = "useState", Yt();
          var t = ge.current;
          ge.current = Gl;
          try {
            return hm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Yt(), x0(e);
        },
        useTransition: function() {
          return J = "useTransition", Yt(), O0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Yt(), y0(e, t, a);
        },
        useId: function() {
          return J = "useId", Yt(), D0();
        },
        unstable_isNewReconciler: we
      }, W1 = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pe(), w0(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pe(), er(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pe(), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pe(), T0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pe(), R0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pe(), C0(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pe();
          var a = ge.current;
          ge.current = Gl;
          try {
            return b0(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pe();
          var i = ge.current;
          ge.current = Gl;
          try {
            return v0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pe(), E0(e);
        },
        useState: function(e) {
          J = "useState", pe();
          var t = ge.current;
          ge.current = Gl;
          try {
            return hm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pe(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pe(), x0(e);
        },
        useTransition: function() {
          return J = "useTransition", pe(), O0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pe(), y0(e, t, a);
        },
        useId: function() {
          return J = "useId", pe(), D0();
        },
        unstable_isNewReconciler: we
      }, q1 = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pe(), Tm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pe(), er(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pe();
          var a = ge.current;
          ge.current = cl;
          try {
            return wm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pe();
          var i = ge.current;
          ge.current = cl;
          try {
            return h0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pe(), mm();
        },
        useState: function(e) {
          J = "useState", pe();
          var t = ge.current;
          ge.current = cl;
          try {
            return g0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pe(), Cm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pe(), U1(e);
        },
        useTransition: function() {
          return J = "useTransition", pe(), I1();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pe(), vm(e, t);
        },
        useId: function() {
          return J = "useId", pe(), bm();
        },
        unstable_isNewReconciler: we
      }, X1 = {
        readContext: function(e) {
          return er(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pe(), Tm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pe(), er(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pe();
          var a = ge.current;
          ge.current = Om;
          try {
            return wm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pe();
          var i = ge.current;
          ge.current = Om;
          try {
            return m0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pe(), mm();
        },
        useState: function(e) {
          J = "useState", pe();
          var t = ge.current;
          ge.current = Om;
          try {
            return S0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pe(), Cm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pe(), z1(e);
        },
        useTransition: function() {
          return J = "useTransition", pe(), F1();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pe(), vm(e, t);
        },
        useId: function() {
          return J = "useId", pe(), bm();
        },
        unstable_isNewReconciler: we
      }, Gl = {
        readContext: function(e) {
          return k0(), er(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", nt(), Yt(), w0(e, t);
        },
        useContext: function(e) {
          return J = "useContext", nt(), Yt(), er(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", nt(), Yt(), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", nt(), Yt(), T0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", nt(), Yt(), R0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", nt(), Yt(), C0(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", nt(), Yt();
          var a = ge.current;
          ge.current = Gl;
          try {
            return b0(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", nt(), Yt();
          var i = ge.current;
          ge.current = Gl;
          try {
            return v0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", nt(), Yt(), E0(e);
        },
        useState: function(e) {
          J = "useState", nt(), Yt();
          var t = ge.current;
          ge.current = Gl;
          try {
            return hm(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", nt(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", nt(), Yt(), x0(e);
        },
        useTransition: function() {
          return J = "useTransition", nt(), Yt(), O0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", nt(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", nt(), Yt(), y0(e, t, a);
        },
        useId: function() {
          return J = "useId", nt(), Yt(), D0();
        },
        unstable_isNewReconciler: we
      }, cl = {
        readContext: function(e) {
          return k0(), er(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", nt(), pe(), Tm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", nt(), pe(), er(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", nt(), pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", nt(), pe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", nt(), pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", nt(), pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", nt(), pe();
          var a = ge.current;
          ge.current = cl;
          try {
            return wm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", nt(), pe();
          var i = ge.current;
          ge.current = cl;
          try {
            return h0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", nt(), pe(), mm();
        },
        useState: function(e) {
          J = "useState", nt(), pe();
          var t = ge.current;
          ge.current = cl;
          try {
            return g0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", nt(), pe(), Cm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", nt(), pe(), U1(e);
        },
        useTransition: function() {
          return J = "useTransition", nt(), pe(), I1();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", nt(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", nt(), pe(), vm(e, t);
        },
        useId: function() {
          return J = "useId", nt(), pe(), bm();
        },
        unstable_isNewReconciler: we
      }, Om = {
        readContext: function(e) {
          return k0(), er(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", nt(), pe(), Tm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", nt(), pe(), er(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", nt(), pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", nt(), pe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", nt(), pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", nt(), pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", nt(), pe();
          var a = ge.current;
          ge.current = cl;
          try {
            return wm(e, t);
          } finally {
            ge.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", nt(), pe();
          var i = ge.current;
          ge.current = cl;
          try {
            return m0(e, t, a);
          } finally {
            ge.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", nt(), pe(), mm();
        },
        useState: function(e) {
          J = "useState", nt(), pe();
          var t = ge.current;
          ge.current = cl;
          try {
            return S0(e);
          } finally {
            ge.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", nt(), pe(), Cm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", nt(), pe(), z1(e);
        },
        useTransition: function() {
          return J = "useTransition", nt(), pe(), F1();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", nt(), pe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", nt(), pe(), vm(e, t);
        },
        useId: function() {
          return J = "useId", nt(), pe(), bm();
        },
        unstable_isNewReconciler: we
      };
    }
    var Xu = m.unstable_now, G1 = 0, Dm = -1, Up = -1, km = -1, _0 = !1, _m = !1;
    function Q1() {
      return _0;
    }
    function wx() {
      _m = !0;
    }
    function bx() {
      _0 = !1, _m = !1;
    }
    function xx() {
      _0 = _m, _m = !1;
    }
    function J1() {
      return G1;
    }
    function K1() {
      G1 = Xu();
    }
    function L0(e) {
      Up = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function Z1(e) {
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
            case ae:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Dt:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function N0(e) {
      if (km >= 0) {
        var t = Xu() - km;
        km = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ae:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Dt:
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
    function M0() {
      km = Xu();
    }
    function U0(e) {
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
    function z0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Ox(e, t) {
      return !0;
    }
    function A0(e, t) {
      try {
        var a = Ox(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === W)
            return;
          console.error(i);
        }
        var v = o ? et(o) : null, y = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === ae)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = et(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var U = y + `
` + f + `

` + ("" + R);
        console.error(U);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var Dx = typeof WeakMap == "function" ? WeakMap : Map;
    function $1(e, t, a) {
      var i = Po(an, a);
      i.tag = Ag, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        ED(o), A0(e, t);
      }, i;
    }
    function I0(e, t, a) {
      var i = Po(an, a);
      i.tag = Ag;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          cC(e), A0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        cC(e), A0(e, t), typeof o != "function" && gD(this);
        var y = t.value, R = t.stack;
        this.componentDidCatch(y, {
          componentStack: R !== null ? R : ""
        }), typeof o != "function" && (aa(e.lanes, We) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", et(e) || "Unknown"));
      }), i;
    }
    function eR(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new Dx(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = RD.bind(null, e, t, a);
        Ta && Jp(e, a), t.then(s, s);
      }
    }
    function kx(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function _x(e, t) {
      var a = e.tag;
      if ((e.mode & ze) === Pe && (a === ne || a === Be || a === Ze)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function tR(e) {
      var t = e;
      do {
        if (t.tag === _e && vx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function nR(e, t, a, i, o) {
      if ((e.mode & ze) === Pe) {
        if (e === t)
          e.flags |= or;
        else {
          if (e.flags |= tt, a.flags |= Lc, a.flags &= ~(jv | kl), a.tag === W) {
            var s = a.alternate;
            if (s === null)
              a.tag = jt;
            else {
              var f = Po(an, We);
              f.tag = tm, Bu(a, f, We);
            }
          }
          a.lanes = at(a.lanes, We);
        }
        return e;
      }
      return e.flags |= or, e.lanes = o, e;
    }
    function Lx(e, t, a, i, o) {
      if (a.flags |= kl, Ta && Jp(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        _x(a), Mr() && a.mode & ze && qE();
        var f = tR(t);
        if (f !== null) {
          f.flags &= ~_r, nR(f, t, a, e, o), f.mode & ze && eR(e, s, o), kx(f, e, s);
          return;
        } else {
          if (!Fd(o)) {
            eR(e, s, o), mS();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Mr() && a.mode & ze) {
        qE();
        var y = tR(t);
        if (y !== null) {
          (y.flags & or) === He && (y.flags |= _r), nR(y, t, a, e, o), kg(pc(i, a));
          return;
        }
      }
      i = pc(i, a), cD(i);
      var R = t;
      do {
        switch (R.tag) {
          case ae: {
            var T = i;
            R.flags |= or;
            var U = Eu(o);
            R.lanes = at(R.lanes, U);
            var N = $1(R, T, U);
            jg(R, N);
            return;
          }
          case W:
            var H = i, P = R.type, q = R.stateNode;
            if ((R.flags & tt) === He && (typeof P.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && !tC(q))) {
              R.flags |= or;
              var Re = Eu(o);
              R.lanes = at(R.lanes, Re);
              var Ve = I0(R, H, Re);
              jg(R, Ve);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function Nx() {
      return null;
    }
    var zp = C.ReactCurrentOwner, fl = !1, F0, Ap, j0, H0, P0, vc, V0, Nm;
    F0 = {}, Ap = {}, j0 = {}, H0 = {}, P0 = {}, vc = !1, V0 = {}, Nm = {};
    function ba(e, t, a, i) {
      e === null ? t.child = E1(t, null, a, i) : t.child = Ff(t, e.child, a, i);
    }
    function Mx(e, t, a, i) {
      t.child = Ff(t, e.child, null, i), t.child = Ff(t, null, a, i);
    }
    function rR(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f = a.render, v = t.ref, y, R;
      If(t, o), du(t);
      {
        if (zp.current = t, lr(!0), y = Yf(e, t, f, i, v, o), R = Wf(), t.mode & Tn) {
          rn(!0);
          try {
            y = Yf(e, t, f, i, v, o), R = Wf();
          } finally {
            rn(!1);
          }
        }
        lr(!1);
      }
      return Eo(), e !== null && !fl ? (b1(e, t, o), Vo(e, t, o)) : (Mr() && R && Tg(t), t.flags |= ui, ba(e, t, y, o), t.child);
    }
    function aR(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (FD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = $f(s), t.tag = Ze, t.type = f, W0(t, s), iR(e, t, f, i, o);
        }
        {
          var v = s.propTypes;
          v && il(
            v,
            i,
            // Resolved props
            "prop",
            _t(s)
          );
        }
        var y = OS(a.type, null, i, t, t.mode, o);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var R = a.type, T = R.propTypes;
        T && il(
          T,
          i,
          // Resolved props
          "prop",
          _t(R)
        );
      }
      var U = e.child, N = K0(e, o);
      if (!N) {
        var H = U.memoizedProps, P = a.compare;
        if (P = P !== null ? P : Je, P(H, i) && e.ref === t.ref)
          return Vo(e, t, o);
      }
      t.flags |= ui;
      var q = Sc(U, i);
      return q.ref = t.ref, q.return = t, t.child = q, q;
    }
    function iR(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === je) {
          var f = s, v = f._payload, y = f._init;
          try {
            s = y(v);
          } catch {
            s = null;
          }
          var R = s && s.propTypes;
          R && il(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            _t(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Je(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = T, K0(e, o))
            (e.flags & Lc) !== He && (fl = !0);
          else
            return t.lanes = e.lanes, Vo(e, t, o);
      }
      return B0(e, t, a, i, o);
    }
    function lR(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || $)
        if ((t.mode & ze) === Pe) {
          var f = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Wm(t, a);
        } else if (aa(a, wa)) {
          var U = {
            baseLanes: Q,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = U;
          var N = s !== null ? s.baseLanes : a;
          Wm(t, N);
        } else {
          var v = null, y;
          if (s !== null) {
            var R = s.baseLanes;
            y = at(R, a);
          } else
            y = a;
          t.lanes = t.childLanes = wa;
          var T = {
            baseLanes: y,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Wm(t, y), null;
        }
      else {
        var H;
        s !== null ? (H = at(s.baseLanes, a), t.memoizedState = null) : H = a, Wm(t, H);
      }
      return ba(e, t, o, a), t.child;
    }
    function Ux(e, t, a) {
      var i = t.pendingProps;
      return ba(e, t, i, a), t.child;
    }
    function zx(e, t, a) {
      var i = t.pendingProps.children;
      return ba(e, t, i, a), t.child;
    }
    function Ax(e, t, a) {
      {
        t.flags |= Me;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return ba(e, t, s, a), t.child;
    }
    function oR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Ea, t.flags |= Ri);
    }
    function B0(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f;
      {
        var v = Lf(t, a, !0);
        f = Nf(t, v);
      }
      var y, R;
      If(t, o), du(t);
      {
        if (zp.current = t, lr(!0), y = Yf(e, t, a, i, f, o), R = Wf(), t.mode & Tn) {
          rn(!0);
          try {
            y = Yf(e, t, a, i, f, o), R = Wf();
          } finally {
            rn(!1);
          }
        }
        lr(!1);
      }
      return Eo(), e !== null && !fl ? (b1(e, t, o), Vo(e, t, o)) : (Mr() && R && Tg(t), t.flags |= ui, ba(e, t, y, o), t.child);
    }
    function uR(e, t, a, i, o) {
      {
        switch ($D(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), y = v.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= tt, t.flags |= or;
            var R = new Error("Simulated error coming from DevTools"), T = Eu(o);
            t.lanes = at(t.lanes, T);
            var U = I0(t, pc(R, t), T);
            jg(t, U);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var N = a.propTypes;
          N && il(
            N,
            i,
            // Resolved props
            "prop",
            _t(a)
          );
        }
      }
      var H;
      Wl(a) ? (H = !0, Yh(t)) : H = !1, If(t, o);
      var P = t.stateNode, q;
      P === null ? (Um(e, t), h1(t, a, i), Kg(t, a, i, o), q = !0) : e === null ? q = ux(t, a, i, o) : q = sx(e, t, a, i, o);
      var Re = Y0(e, t, a, q, H, o);
      {
        var Ve = t.stateNode;
        q && Ve.props !== i && (vc || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", et(t) || "a component"), vc = !0);
      }
      return Re;
    }
    function Y0(e, t, a, i, o, s) {
      oR(e, t);
      var f = (t.flags & tt) !== He;
      if (!i && !f)
        return o && VE(t, a, !1), Vo(e, t, s);
      var v = t.stateNode;
      zp.current = t;
      var y;
      if (f && typeof a.getDerivedStateFromError != "function")
        y = null, Z1();
      else {
        du(t);
        {
          if (lr(!0), y = v.render(), t.mode & Tn) {
            rn(!0);
            try {
              v.render();
            } finally {
              rn(!1);
            }
          }
          lr(!1);
        }
        Eo();
      }
      return t.flags |= ui, e !== null && f ? Mx(e, t, y, s) : ba(e, t, y, s), t.memoizedState = v.state, o && VE(t, a, !0), t.child;
    }
    function sR(e) {
      var t = e.stateNode;
      t.pendingContext ? HE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && HE(e, t.context, !1), r0(e, t.containerInfo);
    }
    function Ix(e, t, a) {
      if (sR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      o1(e, t), im(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var v = f.element;
      if (o.isDehydrated) {
        var y = {
          element: v,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, R = t.updateQueue;
        if (R.baseState = y, t.memoizedState = y, t.flags & _r) {
          var T = pc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return cR(e, t, v, a, T);
        } else if (v !== s) {
          var U = pc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return cR(e, t, v, a, U);
        } else {
          Pb(t);
          var N = E1(t, null, v, a);
          t.child = N;
          for (var H = N; H; )
            H.flags = H.flags & ~Zt | Ei, H = H.sibling;
        }
      } else {
        if (zf(), v === s)
          return Vo(e, t, a);
        ba(e, t, v, a);
      }
      return t.child;
    }
    function cR(e, t, a, i, o) {
      return zf(), kg(o), t.flags |= _r, ba(e, t, a, i), t.child;
    }
    function Fx(e, t, a) {
      C1(t), e === null && Dg(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, v = sg(i, o);
      return v ? f = null : s !== null && sg(i, s) && (t.flags |= Aa), oR(e, t), ba(e, t, f, a), t.child;
    }
    function jx(e, t) {
      return e === null && Dg(t), null;
    }
    function Hx(e, t, a, i) {
      Um(e, t);
      var o = t.pendingProps, s = a, f = s._payload, v = s._init, y = v(f);
      t.type = y;
      var R = t.tag = jD(y), T = ul(y, o), U;
      switch (R) {
        case ne:
          return W0(t, y), t.type = y = $f(y), U = B0(null, t, y, T, i), U;
        case W:
          return t.type = y = RS(y), U = uR(null, t, y, T, i), U;
        case Be:
          return t.type = y = CS(y), U = rR(null, t, y, T, i), U;
        case pt: {
          if (t.type !== t.elementType) {
            var N = y.propTypes;
            N && il(
              N,
              T,
              // Resolved for outer only
              "prop",
              _t(y)
            );
          }
          return U = aR(
            null,
            t,
            y,
            ul(y.type, T),
            // The inner type can have defaults too
            i
          ), U;
        }
      }
      var H = "";
      throw y !== null && typeof y == "object" && y.$$typeof === je && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + H));
    }
    function Px(e, t, a, i, o) {
      Um(e, t), t.tag = W;
      var s;
      return Wl(a) ? (s = !0, Yh(t)) : s = !1, If(t, o), h1(t, a, i), Kg(t, a, i, o), Y0(null, t, a, !0, s, o);
    }
    function Vx(e, t, a, i) {
      Um(e, t);
      var o = t.pendingProps, s;
      {
        var f = Lf(t, a, !1);
        s = Nf(t, f);
      }
      If(t, i);
      var v, y;
      du(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var R = _t(a) || "Unknown";
          F0[R] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), F0[R] = !0);
        }
        t.mode & Tn && ol.recordLegacyContextWarning(t, null), lr(!0), zp.current = t, v = Yf(null, t, a, o, s, i), y = Wf(), lr(!1);
      }
      if (Eo(), t.flags |= ui, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var T = _t(a) || "Unknown";
        Ap[T] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), Ap[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var U = _t(a) || "Unknown";
          Ap[U] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", U, U, U), Ap[U] = !0);
        }
        t.tag = W, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Wl(a) ? (N = !0, Yh(t)) : N = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Fg(t), v1(t, v), Kg(t, a, o, i), Y0(null, t, a, !0, N, i);
      } else {
        if (t.tag = ne, t.mode & Tn) {
          rn(!0);
          try {
            v = Yf(null, t, a, o, s, i), y = Wf();
          } finally {
            rn(!1);
          }
        }
        return Mr() && y && Tg(t), ba(null, t, v, i), W0(t, a), t.child;
      }
    }
    function W0(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ma();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), P0[o] || (P0[o] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = _t(t) || "Unknown";
          H0[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), H0[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = _t(t) || "Unknown";
          j0[v] || (E("%s: Function components do not support contextType.", v), j0[v] = !0);
        }
      }
    }
    var q0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ln
    };
    function X0(e) {
      return {
        baseLanes: e,
        cachePool: Nx(),
        transitions: null
      };
    }
    function Bx(e, t) {
      var a = null;
      return {
        baseLanes: at(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Yx(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return l0(e, Op);
    }
    function Wx(e, t) {
      return Bs(e.childLanes, t);
    }
    function fR(e, t, a) {
      var i = t.pendingProps;
      ek(t) && (t.flags |= tt);
      var o = sl.current, s = !1, f = (t.flags & tt) !== He;
      if (f || Yx(o, e) ? (s = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (o = px(o, w1)), o = Hf(o), Wu(t, o), e === null) {
        Dg(t);
        var v = t.memoizedState;
        if (v !== null) {
          var y = v.dehydrated;
          if (y !== null)
            return Jx(t, y);
        }
        var R = i.children, T = i.fallback;
        if (s) {
          var U = qx(t, R, T, a), N = t.child;
          return N.memoizedState = X0(a), t.memoizedState = q0, U;
        } else
          return G0(t, R);
      } else {
        var H = e.memoizedState;
        if (H !== null) {
          var P = H.dehydrated;
          if (P !== null)
            return Kx(e, t, f, i, P, H, a);
        }
        if (s) {
          var q = i.fallback, Re = i.children, Ve = Gx(e, t, Re, q, a), Ae = t.child, xt = e.child.memoizedState;
          return Ae.memoizedState = xt === null ? X0(a) : Bx(xt, a), Ae.childLanes = Wx(e, a), t.memoizedState = q0, Ve;
        } else {
          var Rt = i.children, A = Xx(e, t, Rt, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function G0(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = Q0(o, i);
      return s.return = e, e.child = s, s;
    }
    function qx(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, y;
      return (o & ze) === Pe && s !== null ? (v = s, v.childLanes = Q, v.pendingProps = f, e.mode & Nt && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), y = $u(a, o, i, null)) : (v = Q0(f, o), y = $u(a, o, i, null)), v.return = e, y.return = e, v.sibling = y, e.child = v, y;
    }
    function Q0(e, t, a) {
      return dC(e, t, Q, null);
    }
    function dR(e, t) {
      return Sc(e, t);
    }
    function Xx(e, t, a, i) {
      var o = e.child, s = o.sibling, f = dR(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ze) === Pe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= Ut) : v.push(s);
      }
      return t.child = f, f;
    }
    function Gx(e, t, a, i, o) {
      var s = t.mode, f = e.child, v = f.sibling, y = {
        mode: "hidden",
        children: a
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ze) === Pe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        R = T, R.childLanes = Q, R.pendingProps = y, t.mode & Nt && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = f.selfBaseDuration, R.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        R = dR(f, y), R.subtreeFlags = f.subtreeFlags & ur;
      var U;
      return v !== null ? U = Sc(v, i) : (U = $u(i, s, o, null), U.flags |= Zt), U.return = t, R.return = t, R.sibling = U, t.child = R, U;
    }
    function Mm(e, t, a, i) {
      i !== null && kg(i), Ff(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = G0(t, s);
      return f.flags |= Zt, t.memoizedState = null, f;
    }
    function Qx(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = Q0(f, s), y = $u(i, s, o, null);
      return y.flags |= Zt, v.return = t, y.return = t, v.sibling = y, t.child = v, (t.mode & ze) !== Pe && Ff(t, e.child, null, o), y;
    }
    function Jx(e, t, a) {
      return (e.mode & ze) === Pe ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = We) : pg(t) ? e.lanes = wn : e.lanes = wa, null;
    }
    function Kx(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & _r) {
          t.flags &= ~_r;
          var A = z0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Mm(e, t, f, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= tt, null;
          var X = i.children, I = i.fallback, oe = Qx(e, t, X, I, f), Ce = t.child;
          return Ce.memoizedState = X0(f), t.memoizedState = q0, oe;
        }
      else {
        if (jb(), (t.mode & ze) === Pe)
          return Mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (pg(o)) {
          var v, y, R;
          {
            var T = nb(o);
            v = T.digest, y = T.message, R = T.stack;
          }
          var U;
          y ? U = new Error(y) : U = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = z0(U, v, R);
          return Mm(e, t, f, N);
        }
        var H = aa(f, e.childLanes);
        if (fl || H) {
          var P = Ym();
          if (P !== null) {
            var q = ih(P, f);
            if (q !== Ln && q !== s.retryLane) {
              s.retryLane = q;
              var Re = an;
              Ga(e, q), yr(P, e, q, Re);
            }
          }
          mS();
          var Ve = z0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Mm(e, t, f, Ve);
        } else if (UE(o)) {
          t.flags |= tt, t.child = e.child;
          var Ae = CD.bind(null, e);
          return rb(o, Ae), null;
        } else {
          Vb(t, o, s.treeContext);
          var xt = i.children, Rt = G0(t, xt);
          return Rt.flags |= Ei, Rt;
        }
      }
    }
    function pR(e, t, a) {
      e.lanes = at(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = at(i.lanes, t)), Ug(e.return, t, a);
    }
    function Zx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === _e) {
          var o = i.memoizedState;
          o !== null && pR(i, a, e);
        } else if (i.tag === it)
          pR(i, a, e);
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
    function $x(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && dm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function eO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !V0[e])
        if (V0[e] = !0, typeof e == "string")
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
    function tO(e, t) {
      e !== void 0 && !Nm[e] && (e !== "collapsed" && e !== "hidden" ? (Nm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Nm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function vR(e, t) {
      {
        var a = Lt(e), i = !a && typeof vi(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function nO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Lt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!vR(e[a], a))
              return;
        } else {
          var i = vi(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!vR(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function J0(e, t, a, i, o) {
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
    function hR(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      eO(o), tO(s, o), nO(f, o), ba(e, t, f, a);
      var v = sl.current, y = l0(v, Op);
      if (y)
        v = o0(v, Op), t.flags |= tt;
      else {
        var R = e !== null && (e.flags & tt) !== He;
        R && Zx(t, t.child, a), v = Hf(v);
      }
      if (Wu(t, v), (t.mode & ze) === Pe)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = $x(t.child), U;
            T === null ? (U = t.child, t.child = null) : (U = T.sibling, T.sibling = null), J0(
              t,
              !1,
              // isBackwards
              U,
              T,
              s
            );
            break;
          }
          case "backwards": {
            var N = null, H = t.child;
            for (t.child = null; H !== null; ) {
              var P = H.alternate;
              if (P !== null && dm(P) === null) {
                t.child = H;
                break;
              }
              var q = H.sibling;
              H.sibling = N, N = H, H = q;
            }
            J0(
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
            J0(
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
    function rO(e, t, a) {
      r0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ff(t, null, i, a) : ba(e, t, i, a), t.child;
    }
    var mR = !1;
    function aO(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || mR || (mR = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && il(y, s, "prop", "Context.Provider");
      }
      if (r1(t, o, v), f !== null) {
        var R = f.value;
        if (Oe(R, v)) {
          if (f.children === s.children && !Vh())
            return Vo(e, t, a);
        } else
          Zb(t, o, a);
      }
      var T = s.children;
      return ba(e, t, T, a), t.child;
    }
    var yR = !1;
    function iO(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (yR || (yR = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), If(t, a);
      var f = er(i);
      du(t);
      var v;
      return zp.current = t, lr(!0), v = s(f), lr(!1), Eo(), t.flags |= ui, ba(e, t, v, a), t.child;
    }
    function Ip() {
      fl = !0;
    }
    function Um(e, t) {
      (t.mode & ze) === Pe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
    }
    function Vo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Z1(), Qp(t.lanes), aa(a, t.childLanes) ? (cx(e, t), t.child) : null;
    }
    function lO(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Ut) : s.push(e), a.flags |= Zt, a;
      }
    }
    function K0(e, t) {
      var a = e.lanes;
      return !!aa(a, t);
    }
    function oO(e, t, a) {
      switch (t.tag) {
        case ae:
          sR(t), t.stateNode, zf();
          break;
        case G:
          C1(t);
          break;
        case W: {
          var i = t.type;
          Wl(i) && Yh(t);
          break;
        }
        case Se:
          r0(t, t.stateNode.containerInfo);
          break;
        case Fe: {
          var o = t.memoizedProps.value, s = t.type._context;
          r1(t, s, o);
          break;
        }
        case Dt:
          {
            var f = aa(a, t.childLanes);
            f && (t.flags |= Me);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case _e: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Wu(t, Hf(sl.current)), t.flags |= tt, null;
            var R = t.child, T = R.childLanes;
            if (aa(a, T))
              return fR(e, t, a);
            Wu(t, Hf(sl.current));
            var U = Vo(e, t, a);
            return U !== null ? U.sibling : null;
          } else
            Wu(t, Hf(sl.current));
          break;
        }
        case it: {
          var N = (e.flags & tt) !== He, H = aa(a, t.childLanes);
          if (N) {
            if (H)
              return hR(e, t, a);
            t.flags |= tt;
          }
          var P = t.memoizedState;
          if (P !== null && (P.rendering = null, P.tail = null, P.lastEffect = null), Wu(t, sl.current), H)
            break;
          return null;
        }
        case Xe:
        case lt:
          return t.lanes = Q, lR(e, t, a);
      }
      return Vo(e, t, a);
    }
    function gR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return lO(e, t, OS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Vh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = K0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & tt) === He)
            return fl = !1, oO(e, t, a);
          (e.flags & Lc) !== He ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, Mr() && Mb(t)) {
        var f = t.index, v = Ub();
        WE(t, v, f);
      }
      switch (t.lanes = Q, t.tag) {
        case Y:
          return Vx(e, t, t.type, a);
        case vn: {
          var y = t.elementType;
          return Hx(e, t, y, a);
        }
        case ne: {
          var R = t.type, T = t.pendingProps, U = t.elementType === R ? T : ul(R, T);
          return B0(e, t, R, U, a);
        }
        case W: {
          var N = t.type, H = t.pendingProps, P = t.elementType === N ? H : ul(N, H);
          return uR(e, t, N, P, a);
        }
        case ae:
          return Ix(e, t, a);
        case G:
          return Fx(e, t, a);
        case K:
          return jx(e, t);
        case _e:
          return fR(e, t, a);
        case Se:
          return rO(e, t, a);
        case Be: {
          var q = t.type, Re = t.pendingProps, Ve = t.elementType === q ? Re : ul(q, Re);
          return rR(e, t, q, Ve, a);
        }
        case Ne:
          return Ux(e, t, a);
        case yt:
          return zx(e, t, a);
        case Dt:
          return Ax(e, t, a);
        case Fe:
          return aO(e, t, a);
        case st:
          return iO(e, t, a);
        case pt: {
          var Ae = t.type, xt = t.pendingProps, Rt = ul(Ae, xt);
          if (t.type !== t.elementType) {
            var A = Ae.propTypes;
            A && il(
              A,
              Rt,
              // Resolved for outer only
              "prop",
              _t(Ae)
            );
          }
          return Rt = ul(Ae.type, Rt), aR(e, t, Ae, Rt, a);
        }
        case Ze:
          return iR(e, t, t.type, t.pendingProps, a);
        case jt: {
          var X = t.type, I = t.pendingProps, oe = t.elementType === X ? I : ul(X, I);
          return Px(e, t, X, oe, a);
        }
        case it:
          return hR(e, t, a);
        case Ht:
          break;
        case Xe:
          return lR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qf(e) {
      e.flags |= Me;
    }
    function SR(e) {
      e.flags |= Ea, e.flags |= Ri;
    }
    var ER, Z0, RR, CR;
    ER = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === G || o.tag === K)
          _w(e, o.stateNode);
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
    }, Z0 = function(e, t) {
    }, RR = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = a0(), y = Nw(f, a, s, i, o, v);
        t.updateQueue = y, y && qf(t);
      }
    }, CR = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = Q, i = He;
      if (t) {
        if ((e.mode & Nt) !== Pe) {
          for (var y = e.selfBaseDuration, R = e.child; R !== null; )
            a = at(a, at(R.lanes, R.childLanes)), i |= R.subtreeFlags & ur, i |= R.flags & ur, y += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = y;
        } else
          for (var T = e.child; T !== null; )
            a = at(a, at(T.lanes, T.childLanes)), i |= T.subtreeFlags & ur, i |= T.flags & ur, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Nt) !== Pe) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = at(a, at(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var v = e.child; v !== null; )
            a = at(a, at(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function uO(e, t, a) {
      if (Xb() && (t.mode & ze) !== Pe && (t.flags & tt) === He)
        return ZE(t), zf(), t.flags |= _r | kl | or, !1;
      var i = Qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Wb(t), zr(t), (t.mode & Nt) !== Pe) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (zf(), (t.flags & tt) === He && (t.memoizedState = null), t.flags |= Me, zr(t), (t.mode & Nt) !== Pe) {
            var f = a !== null;
            if (f) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return $E(), !0;
    }
    function TR(e, t, a) {
      var i = t.pendingProps;
      switch (wg(t), t.tag) {
        case Y:
        case vn:
        case Ze:
        case ne:
        case Be:
        case Ne:
        case yt:
        case Dt:
        case st:
        case pt:
          return zr(t), null;
        case W: {
          var o = t.type;
          return Wl(o) && Bh(t), zr(t), null;
        }
        case ae: {
          var s = t.stateNode;
          if (jf(t), Eg(t), s0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Qh(t);
            if (f)
              qf(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _r) !== He) && (t.flags |= jn, $E());
            }
          }
          return Z0(e, t), zr(t), null;
        }
        case G: {
          i0(t);
          var y = R1(), R = t.type;
          if (e !== null && t.stateNode != null)
            RR(e, t, R, i, y), e.ref !== t.ref && SR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return zr(t), null;
            }
            var T = a0(), U = Qh(t);
            if (U)
              Bb(t, y, T) && qf(t);
            else {
              var N = kw(R, i, y, T, t);
              ER(N, t, !1, !1), t.stateNode = N, Lw(N, R, i, y) && qf(t);
            }
            t.ref !== null && SR(t);
          }
          return zr(t), null;
        }
        case K: {
          var H = i;
          if (e && t.stateNode != null) {
            var P = e.memoizedProps;
            CR(e, t, P, H);
          } else {
            if (typeof H != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var q = R1(), Re = a0(), Ve = Qh(t);
            Ve ? Yb(t) && qf(t) : t.stateNode = Mw(H, q, Re, t);
          }
          return zr(t), null;
        }
        case _e: {
          Pf(t);
          var Ae = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = uO(e, t, Ae);
            if (!xt)
              return t.flags & or ? t : null;
          }
          if ((t.flags & tt) !== He)
            return t.lanes = a, (t.mode & Nt) !== Pe && U0(t), t;
          var Rt = Ae !== null, A = e !== null && e.memoizedState !== null;
          if (Rt !== A && Rt) {
            var X = t.child;
            if (X.flags |= Dl, (t.mode & ze) !== Pe) {
              var I = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !be);
              I || l0(sl.current, w1) ? sD() : mS();
            }
          }
          var oe = t.updateQueue;
          if (oe !== null && (t.flags |= Me), zr(t), (t.mode & Nt) !== Pe && Rt) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case Se:
          return jf(t), Z0(e, t), e === null && xb(t.stateNode.containerInfo), zr(t), null;
        case Fe:
          var me = t.type._context;
          return Mg(me, t), zr(t), null;
        case jt: {
          var $e = t.type;
          return Wl($e) && Bh(t), zr(t), null;
        }
        case it: {
          Pf(t);
          var rt = t.memoizedState;
          if (rt === null)
            return zr(t), null;
          var Jt = (t.flags & tt) !== He, At = rt.rendering;
          if (At === null)
            if (Jt)
              Fp(rt, !1);
            else {
              var Gn = fD() && (e === null || (e.flags & tt) === He);
              if (!Gn)
                for (var It = t.child; It !== null; ) {
                  var Pn = dm(It);
                  if (Pn !== null) {
                    Jt = !0, t.flags |= tt, Fp(rt, !1);
                    var sa = Pn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= Me), t.subtreeFlags = He, fx(t, a), Wu(t, o0(sl.current, Op)), t.child;
                  }
                  It = It.sibling;
                }
              rt.tail !== null && Hn() > YR() && (t.flags |= tt, Jt = !0, Fp(rt, !1), t.lanes = Ad);
            }
          else {
            if (!Jt) {
              var Hr = dm(At);
              if (Hr !== null) {
                t.flags |= tt, Jt = !0;
                var di = Hr.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= Me), Fp(rt, !0), rt.tail === null && rt.tailMode === "hidden" && !At.alternate && !Mr())
                  return zr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Hn() * 2 - rt.renderingStartTime > YR() && a !== wa && (t.flags |= tt, Jt = !0, Fp(rt, !1), t.lanes = Ad);
            }
            if (rt.isBackwards)
              At.sibling = t.child, t.child = At;
            else {
              var Da = rt.last;
              Da !== null ? Da.sibling = At : t.child = At, rt.last = At;
            }
          }
          if (rt.tail !== null) {
            var ka = rt.tail;
            rt.rendering = ka, rt.tail = ka.sibling, rt.renderingStartTime = Hn(), ka.sibling = null;
            var ca = sl.current;
            return Jt ? ca = o0(ca, Op) : ca = Hf(ca), Wu(t, ca), ka;
          }
          return zr(t), null;
        }
        case Ht:
          break;
        case Xe:
        case lt: {
          hS(t);
          var Xo = t.memoizedState, ed = Xo !== null;
          if (e !== null) {
            var ev = e.memoizedState, $l = ev !== null;
            $l !== ed && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !$ && (t.flags |= Dl);
          }
          return !ed || (t.mode & ze) === Pe ? zr(t) : aa(Zl, wa) && (zr(t), t.subtreeFlags & (Zt | Me) && (t.flags |= Dl)), null;
        }
        case kt:
          return null;
        case ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function sO(e, t, a) {
      switch (wg(t), t.tag) {
        case W: {
          var i = t.type;
          Wl(i) && Bh(t);
          var o = t.flags;
          return o & or ? (t.flags = o & ~or | tt, (t.mode & Nt) !== Pe && U0(t), t) : null;
        }
        case ae: {
          t.stateNode, jf(t), Eg(t), s0();
          var s = t.flags;
          return (s & or) !== He && (s & tt) === He ? (t.flags = s & ~or | tt, t) : null;
        }
        case G:
          return i0(t), null;
        case _e: {
          Pf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            zf();
          }
          var v = t.flags;
          return v & or ? (t.flags = v & ~or | tt, (t.mode & Nt) !== Pe && U0(t), t) : null;
        }
        case it:
          return Pf(t), null;
        case Se:
          return jf(t), null;
        case Fe:
          var y = t.type._context;
          return Mg(y, t), null;
        case Xe:
        case lt:
          return hS(t), null;
        case kt:
          return null;
        default:
          return null;
      }
    }
    function wR(e, t, a) {
      switch (wg(t), t.tag) {
        case W: {
          var i = t.type.childContextTypes;
          i != null && Bh(t);
          break;
        }
        case ae: {
          t.stateNode, jf(t), Eg(t), s0();
          break;
        }
        case G: {
          i0(t);
          break;
        }
        case Se:
          jf(t);
          break;
        case _e:
          Pf(t);
          break;
        case it:
          Pf(t);
          break;
        case Fe:
          var o = t.type._context;
          Mg(o, t);
          break;
        case Xe:
        case lt:
          hS(t);
          break;
      }
    }
    var bR = null;
    bR = /* @__PURE__ */ new Set();
    var zm = !1, Ar = !1, cO = typeof WeakSet == "function" ? WeakSet : Set, De = null, Xf = null, Gf = null;
    function fO(e) {
      oi(null, function() {
        throw e;
      }), Ki();
    }
    var dO = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Nt)
        try {
          Jl(), t.componentWillUnmount();
        } finally {
          Ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function xR(e, t) {
      try {
        Gu(fr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function $0(e, t, a) {
      try {
        dO(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function pO(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function OR(e, t) {
      try {
        kR(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Qf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (St && ht && e.mode & Nt)
              try {
                Jl(), i = a(null);
              } finally {
                Ql(e);
              }
            else
              i = a(null);
          } catch (o) {
            fn(e, t, o);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          a.current = null;
    }
    function Am(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var DR = !1;
    function vO(e, t) {
      Ow(e.containerInfo), De = t, hO();
      var a = DR;
      return DR = !1, a;
    }
    function hO() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & Kr) !== He && t !== null ? (t.return = e, De = t) : mO();
      }
    }
    function mO() {
      for (; De !== null; ) {
        var e = De;
        yn(e);
        try {
          yO(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        on();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function yO(e) {
      var t = e.alternate, a = e.flags;
      if ((a & jn) !== He) {
        switch (yn(e), e.tag) {
          case ne:
          case Be:
          case Ze:
            break;
          case W: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !vc && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), o);
              {
                var v = bR;
                f === void 0 && !v.has(e.type) && (v.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", et(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ae: {
            {
              var y = e.stateNode;
              Zw(y.containerInfo);
            }
            break;
          }
          case G:
          case K:
          case Se:
          case jt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        on();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & Ur) !== Qa ? Wv(t) : (e & fr) !== Qa && pu(t), (e & ql) !== Qa && Kp(!0), Am(t, a, v), (e & ql) !== Qa && Kp(!1), (e & Ur) !== Qa ? qv() : (e & fr) !== Qa && Ns());
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
            (e & Ur) !== Qa ? Nd(t) : (e & fr) !== Qa && Xv(t);
            var f = s.create;
            (e & ql) !== Qa && Kp(!0), s.destroy = f(), (e & ql) !== Qa && Kp(!1), (e & Ur) !== Qa ? Ic() : (e & fr) !== Qa && Md();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var y = void 0;
                (s.tag & fr) !== He ? y = "useLayoutEffect" : (s.tag & ql) !== He ? y = "useInsertionEffect" : y = "useEffect";
                var R = void 0;
                v === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? R = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + v, E("%s must not return anything besides a function, which is used for clean-up.%s", y, R);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function gO(e, t) {
      if ((t.flags & Me) !== He)
        switch (t.tag) {
          case Dt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = J1(), v = t.alternate === null ? "mount" : "update";
            Q1() && (v = "nested-update"), typeof s == "function" && s(o, v, a, f);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case ae:
                    var R = y.stateNode;
                    R.passiveEffectDuration += a;
                    break e;
                  case Dt:
                    var T = y.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function SO(e, t, a, i) {
      if ((a.flags & si) !== He)
        switch (a.tag) {
          case ne:
          case Be:
          case Ze: {
            if (!Ar)
              if (a.mode & Nt)
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
                if (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & Nt)
                  try {
                    Jl(), o.componentDidMount();
                  } finally {
                    Ql(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & Nt)
                  try {
                    Jl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ql(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), s1(a, v, o));
            break;
          }
          case ae: {
            var y = a.updateQueue;
            if (y !== null) {
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
              s1(a, y, R);
            }
            break;
          }
          case G: {
            var T = a.stateNode;
            if (t === null && a.flags & Me) {
              var U = a.type, N = a.memoizedProps;
              Fw(T, U, N);
            }
            break;
          }
          case K:
            break;
          case Se:
            break;
          case Dt: {
            {
              var H = a.memoizedProps, P = H.onCommit, q = H.onRender, Re = a.stateNode.effectDuration, Ve = J1(), Ae = t === null ? "mount" : "update";
              Q1() && (Ae = "nested-update"), typeof q == "function" && q(a.memoizedProps.id, Ae, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ve);
              {
                typeof P == "function" && P(a.memoizedProps.id, Ae, Re, Ve), mD(a);
                var xt = a.return;
                e:
                  for (; xt !== null; ) {
                    switch (xt.tag) {
                      case ae:
                        var Rt = xt.stateNode;
                        Rt.effectDuration += Re;
                        break e;
                      case Dt:
                        var A = xt.stateNode;
                        A.effectDuration += Re;
                        break e;
                    }
                    xt = xt.return;
                  }
              }
            }
            break;
          }
          case _e: {
            OO(e, a);
            break;
          }
          case it:
          case jt:
          case Ht:
          case Xe:
          case lt:
          case ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Ea && kR(a);
    }
    function EO(e) {
      switch (e.tag) {
        case ne:
        case Be:
        case Ze: {
          if (e.mode & Nt)
            try {
              Jl(), xR(e, e.return);
            } finally {
              Ql(e);
            }
          else
            xR(e, e.return);
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && pO(e, e.return, t), OR(e, e.return);
          break;
        }
        case G: {
          OR(e, e.return);
          break;
        }
      }
    }
    function RO(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Gw(o) : Jw(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === K) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Qw(s) : Kw(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === Xe || i.tag === lt) && i.memoizedState !== null && i !== e)) {
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
    function kR(e) {
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
          if (e.mode & Nt)
            try {
              Jl(), o = t(i);
            } finally {
              Ql(e);
            }
          else
            o = t(i);
          typeof o == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", et(e)), t.current = i;
      }
    }
    function CO(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function _R(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, _R(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && kb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function TO(e) {
      for (var t = e.return; t !== null; ) {
        if (LR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function LR(e) {
      return e.tag === G || e.tag === ae || e.tag === Se;
    }
    function NR(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || LR(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== K && t.tag !== Ct; ) {
            if (t.flags & Zt || t.child === null || t.tag === Se)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Zt))
            return t.stateNode;
        }
    }
    function wO(e) {
      var t = TO(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & Aa && (ME(a), t.flags &= ~Aa);
          var i = NR(e);
          tS(e, i, a);
          break;
        }
        case ae:
        case Se: {
          var o = t.stateNode.containerInfo, s = NR(e);
          eS(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function eS(e, t, a) {
      var i = e.tag, o = i === G || i === K;
      if (o) {
        var s = e.stateNode;
        t ? Yw(a, s, t) : Vw(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          eS(f, t, a);
          for (var v = f.sibling; v !== null; )
            eS(v, t, a), v = v.sibling;
        }
      }
    }
    function tS(e, t, a) {
      var i = e.tag, o = i === G || i === K;
      if (o) {
        var s = e.stateNode;
        t ? Bw(a, s, t) : Pw(a, s);
      } else if (i !== Se) {
        var f = e.child;
        if (f !== null) {
          tS(f, t, a);
          for (var v = f.sibling; v !== null; )
            tS(v, t, a), v = v.sibling;
        }
      }
    }
    var Ir = null, pl = !1;
    function bO(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case G: {
                Ir = i.stateNode, pl = !1;
                break e;
              }
              case ae: {
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
        MR(e, t, a), Ir = null, pl = !1;
      }
      CO(a);
    }
    function Qu(e, t, a) {
      for (var i = a.child; i !== null; )
        MR(e, t, i), i = i.sibling;
    }
    function MR(e, t, a) {
      switch (Bv(a), a.tag) {
        case G:
          Ar || Qf(a, t);
        case K: {
          {
            var i = Ir, o = pl;
            Ir = null, Qu(e, t, a), Ir = i, pl = o, Ir !== null && (pl ? qw(Ir, a.stateNode) : Ww(Ir, a.stateNode));
          }
          return;
        }
        case Ct: {
          Ir !== null && (pl ? Xw(Ir, a.stateNode) : dg(Ir, a.stateNode));
          return;
        }
        case Se: {
          {
            var s = Ir, f = pl;
            Ir = a.stateNode.containerInfo, pl = !0, Qu(e, t, a), Ir = s, pl = f;
          }
          return;
        }
        case ne:
        case Be:
        case pt:
        case Ze: {
          if (!Ar) {
            var v = a.updateQueue;
            if (v !== null) {
              var y = v.lastEffect;
              if (y !== null) {
                var R = y.next, T = R;
                do {
                  var U = T, N = U.destroy, H = U.tag;
                  N !== void 0 && ((H & ql) !== Qa ? Am(a, t, N) : (H & fr) !== Qa && (pu(a), a.mode & Nt ? (Jl(), Am(a, t, N), Ql(a)) : Am(a, t, N), Ns())), T = T.next;
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
            typeof P.componentWillUnmount == "function" && $0(a, t, P);
          }
          Qu(e, t, a);
          return;
        }
        case Ht: {
          Qu(e, t, a);
          return;
        }
        case Xe: {
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
    function xO(e) {
      e.memoizedState;
    }
    function OO(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && db(s);
          }
        }
      }
    }
    function UR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new cO()), t.forEach(function(i) {
          var o = TD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ta)
              if (Xf !== null && Gf !== null)
                Jp(Gf, Xf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function DO(e, t, a) {
      Xf = a, Gf = e, yn(t), zR(t, e), yn(t), Xf = null, Gf = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            bO(e, t, s);
          } catch (y) {
            fn(s, t, y);
          }
        }
      var f = cs();
      if (t.subtreeFlags & Zr)
        for (var v = t.child; v !== null; )
          yn(v), zR(v, e), v = v.sibling;
      yn(f);
    }
    function zR(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case ne:
        case Be:
        case pt:
        case Ze: {
          if (vl(t, e), Kl(e), o & Me) {
            try {
              dl(ql | cr, e, e.return), Gu(ql | cr, e);
            } catch ($e) {
              fn(e, e.return, $e);
            }
            if (e.mode & Nt) {
              try {
                Jl(), dl(fr | cr, e, e.return);
              } catch ($e) {
                fn(e, e.return, $e);
              }
              Ql(e);
            } else
              try {
                dl(fr | cr, e, e.return);
              } catch ($e) {
                fn(e, e.return, $e);
              }
          }
          return;
        }
        case W: {
          vl(t, e), Kl(e), o & Ea && i !== null && Qf(i, i.return);
          return;
        }
        case G: {
          vl(t, e), Kl(e), o & Ea && i !== null && Qf(i, i.return);
          {
            if (e.flags & Aa) {
              var s = e.stateNode;
              try {
                ME(s);
              } catch ($e) {
                fn(e, e.return, $e);
              }
            }
            if (o & Me) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, y = i !== null ? i.memoizedProps : v, R = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    jw(f, T, R, y, v, e);
                  } catch ($e) {
                    fn(e, e.return, $e);
                  }
              }
            }
          }
          return;
        }
        case K: {
          if (vl(t, e), Kl(e), o & Me) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var U = e.stateNode, N = e.memoizedProps, H = i !== null ? i.memoizedProps : N;
            try {
              Hw(U, H, N);
            } catch ($e) {
              fn(e, e.return, $e);
            }
          }
          return;
        }
        case ae: {
          if (vl(t, e), Kl(e), o & Me && i !== null) {
            var P = i.memoizedState;
            if (P.isDehydrated)
              try {
                fb(t.containerInfo);
              } catch ($e) {
                fn(e, e.return, $e);
              }
          }
          return;
        }
        case Se: {
          vl(t, e), Kl(e);
          return;
        }
        case _e: {
          vl(t, e), Kl(e);
          var q = e.child;
          if (q.flags & Dl) {
            var Re = q.stateNode, Ve = q.memoizedState, Ae = Ve !== null;
            if (Re.isHidden = Ae, Ae) {
              var xt = q.alternate !== null && q.alternate.memoizedState !== null;
              xt || uD();
            }
          }
          if (o & Me) {
            try {
              xO(e);
            } catch ($e) {
              fn(e, e.return, $e);
            }
            UR(e);
          }
          return;
        }
        case Xe: {
          var Rt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ze
          ) {
            var A = Ar;
            Ar = A || Rt, vl(t, e), Ar = A;
          } else
            vl(t, e);
          if (Kl(e), o & Dl) {
            var X = e.stateNode, I = e.memoizedState, oe = I !== null, Ce = e;
            if (X.isHidden = oe, oe && !Rt && (Ce.mode & ze) !== Pe) {
              De = Ce;
              for (var me = Ce.child; me !== null; )
                De = me, _O(me), me = me.sibling;
            }
            RO(Ce, oe);
          }
          return;
        }
        case it: {
          vl(t, e), Kl(e), o & Me && UR(e);
          return;
        }
        case Ht:
          return;
        default: {
          vl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & Zt) {
        try {
          wO(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~Zt;
      }
      t & Ei && (e.flags &= ~Ei);
    }
    function kO(e, t, a) {
      Xf = a, Gf = t, De = e, AR(e, t, a), Xf = null, Gf = null;
    }
    function AR(e, t, a) {
      for (var i = (e.mode & ze) !== Pe; De !== null; ) {
        var o = De, s = o.child;
        if (o.tag === Xe && i) {
          var f = o.memoizedState !== null, v = f || zm;
          if (v) {
            nS(e, t, a);
            continue;
          } else {
            var y = o.alternate, R = y !== null && y.memoizedState !== null, T = R || Ar, U = zm, N = Ar;
            zm = v, Ar = T, Ar && !N && (De = o, LO(o));
            for (var H = s; H !== null; )
              De = H, AR(
                H,
                // New root; bubble back up to here and stop.
                t,
                a
              ), H = H.sibling;
            De = o, zm = U, Ar = N, nS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & si) !== He && s !== null ? (s.return = o, De = s) : nS(e, t, a);
      }
    }
    function nS(e, t, a) {
      for (; De !== null; ) {
        var i = De;
        if ((i.flags & si) !== He) {
          var o = i.alternate;
          yn(i);
          try {
            SO(t, o, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          on();
        }
        if (i === e) {
          De = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, De = s;
          return;
        }
        De = i.return;
      }
    }
    function _O(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case ne:
          case Be:
          case pt:
          case Ze: {
            if (t.mode & Nt)
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
            typeof i.componentWillUnmount == "function" && $0(t, t.return, i);
            break;
          }
          case G: {
            Qf(t, t.return);
            break;
          }
          case Xe: {
            var o = t.memoizedState !== null;
            if (o) {
              IR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : IR(e);
      }
    }
    function IR(e) {
      for (; De !== null; ) {
        var t = De;
        if (t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function LO(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Xe) {
          var i = t.memoizedState !== null;
          if (i) {
            FR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : FR(e);
      }
    }
    function FR(e) {
      for (; De !== null; ) {
        var t = De;
        yn(t);
        try {
          EO(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (on(), t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function NO(e, t, a, i) {
      De = t, MO(t, e, a, i);
    }
    function MO(e, t, a, i) {
      for (; De !== null; ) {
        var o = De, s = o.child;
        (o.subtreeFlags & $r) !== He && s !== null ? (s.return = o, De = s) : UO(e, t, a, i);
      }
    }
    function UO(e, t, a, i) {
      for (; De !== null; ) {
        var o = De;
        if ((o.flags & Jr) !== He) {
          yn(o);
          try {
            zO(t, o, a, i);
          } catch (f) {
            fn(o, o.return, f);
          }
          on();
        }
        if (o === e) {
          De = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, De = s;
          return;
        }
        De = o.return;
      }
    }
    function zO(e, t, a, i) {
      switch (t.tag) {
        case ne:
        case Be:
        case Ze: {
          if (t.mode & Nt) {
            M0();
            try {
              Gu(Ur | cr, t);
            } finally {
              N0(t);
            }
          } else
            Gu(Ur | cr, t);
          break;
        }
      }
    }
    function AO(e) {
      De = e, IO();
    }
    function IO() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Ut) !== He) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              De = o, HO(o, e);
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
            De = e;
          }
        }
        (e.subtreeFlags & $r) !== He && t !== null ? (t.return = e, De = t) : FO();
      }
    }
    function FO() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & Jr) !== He && (yn(e), jO(e), on());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function jO(e) {
      switch (e.tag) {
        case ne:
        case Be:
        case Ze: {
          e.mode & Nt ? (M0(), dl(Ur | cr, e, e.return), N0(e)) : dl(Ur | cr, e, e.return);
          break;
        }
      }
    }
    function HO(e, t) {
      for (; De !== null; ) {
        var a = De;
        yn(a), VO(a, t), on();
        var i = a.child;
        i !== null ? (i.return = a, De = i) : PO(e);
      }
    }
    function PO(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, i = t.return;
        if (_R(t), t === e) {
          De = null;
          return;
        }
        if (a !== null) {
          a.return = i, De = a;
          return;
        }
        De = i;
      }
    }
    function VO(e, t) {
      switch (e.tag) {
        case ne:
        case Be:
        case Ze: {
          e.mode & Nt ? (M0(), dl(Ur, e, t), N0(e)) : dl(Ur, e, t);
          break;
        }
      }
    }
    function BO(e) {
      switch (e.tag) {
        case ne:
        case Be:
        case Ze: {
          try {
            Gu(fr | cr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function YO(e) {
      switch (e.tag) {
        case ne:
        case Be:
        case Ze: {
          try {
            Gu(Ur | cr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function WO(e) {
      switch (e.tag) {
        case ne:
        case Be:
        case Ze: {
          try {
            dl(fr | cr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && $0(e, e.return, t);
          break;
        }
      }
    }
    function qO(e) {
      switch (e.tag) {
        case ne:
        case Be:
        case Ze:
          try {
            dl(Ur | cr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var jp = Symbol.for;
      jp("selector.component"), jp("selector.has_pseudo_class"), jp("selector.role"), jp("selector.test_id"), jp("selector.text");
    }
    var XO = [];
    function GO() {
      XO.forEach(function(e) {
        return e();
      });
    }
    var QO = C.ReactCurrentActQueue;
    function JO(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function jR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && QO.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var KO = Math.ceil, rS = C.ReactCurrentDispatcher, aS = C.ReactCurrentOwner, Fr = C.ReactCurrentBatchConfig, hl = C.ReactCurrentActQueue, vr = (
      /*             */
      0
    ), HR = (
      /*               */
      1
    ), jr = (
      /*                */
      2
    ), Ui = (
      /*                */
      4
    ), Bo = 0, Hp = 1, hc = 2, Im = 3, Pp = 4, PR = 5, iS = 6, bt = vr, xa = null, zn = null, hr = Q, Zl = Q, lS = ju(Q), mr = Bo, Vp = null, Fm = Q, Bp = Q, jm = Q, Yp = null, Ja = null, oS = 0, VR = 500, BR = 1 / 0, ZO = 500, Yo = null;
    function Wp() {
      BR = Hn() + ZO;
    }
    function YR() {
      return BR;
    }
    var Hm = !1, uS = null, Jf = null, mc = !1, Ju = null, qp = Q, sS = [], cS = null, $O = 50, Xp = 0, fS = null, dS = !1, Pm = !1, eD = 50, Kf = 0, Vm = null, Gp = an, Bm = Q, WR = !1;
    function Ym() {
      return xa;
    }
    function Oa() {
      return (bt & (jr | Ui)) !== vr ? Hn() : (Gp !== an || (Gp = Hn()), Gp);
    }
    function Ku(e) {
      var t = e.mode;
      if ((t & ze) === Pe)
        return We;
      if ((bt & jr) !== vr && hr !== Q)
        return Eu(hr);
      var a = Jb() !== Qb;
      if (a) {
        if (Fr.transition !== null) {
          var i = Fr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Bm === Ln && (Bm = nh()), Bm;
      }
      var o = Va();
      if (o !== Ln)
        return o;
      var s = Uw();
      return s;
    }
    function tD(e) {
      var t = e.mode;
      return (t & ze) === Pe ? We : ra();
    }
    function yr(e, t, a, i) {
      bD(), WR && E("useInsertionEffect must not schedule updates."), dS && (Pm = !0), ko(e, a, i), (bt & jr) !== Q && e === xa ? DD(t) : (Ta && rf(e, t, a), kD(t), e === xa && ((bt & jr) === vr && (Bp = at(Bp, a)), mr === Pp && Zu(e, hr)), Ka(e, i), a === We && bt === vr && (t.mode & ze) === Pe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && (Wp(), YE()));
    }
    function nD(e, t, a) {
      var i = e.current;
      i.lanes = t, ko(e, t, a), Ka(e, a);
    }
    function rD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (bt & jr) !== vr
      );
    }
    function Ka(e, t) {
      var a = e.callbackNode;
      Ly(e, t);
      var i = Hs(e, e === xa ? hr : Q);
      if (i === Q) {
        a !== null && oC(a), e.callbackNode = null, e.callbackPriority = Ln;
        return;
      }
      var o = Nn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== SS)) {
        a == null && s !== We && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && oC(a);
      var f;
      if (o === We)
        e.tag === Hu ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), Nb(GR.bind(null, e))) : BE(GR.bind(null, e)), hl.current !== null ? hl.current.push(Pu) : Aw(function() {
          (bt & (jr | Ui)) === vr && Pu();
        }), f = null;
      else {
        var v;
        switch (sr(i)) {
          case Mn:
            v = ea;
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
        f = ES(v, qR.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function qR(e, t) {
      if (bx(), Gp = an, Bm = Q, (bt & (jr | Ui)) !== vr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = qo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Hs(e, e === xa ? hr : Q);
      if (o === Q)
        return null;
      var s = !Vs(e, o) && !th(e, o) && !t, f = s ? pD(e, o) : qm(e, o);
      if (f !== Bo) {
        if (f === hc) {
          var v = Fl(e);
          v !== Q && (o = v, f = pS(e, v));
        }
        if (f === Hp) {
          var y = Vp;
          throw yc(e, Q), Zu(e, o), Ka(e, Hn()), y;
        }
        if (f === iS)
          Zu(e, o);
        else {
          var R = !Vs(e, o), T = e.current.alternate;
          if (R && !iD(T)) {
            if (f = qm(e, o), f === hc) {
              var U = Fl(e);
              U !== Q && (o = U, f = pS(e, U));
            }
            if (f === Hp) {
              var N = Vp;
              throw yc(e, Q), Zu(e, o), Ka(e, Hn()), N;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, aD(e, f, o);
        }
      }
      return Ka(e, Hn()), e.callbackNode === a ? qR.bind(null, e) : null;
    }
    function pS(e, t) {
      var a = Yp;
      if (af(e)) {
        var i = yc(e, t);
        i.flags |= _r, bb(e.containerInfo);
      }
      var o = qm(e, t);
      if (o !== hc) {
        var s = Ja;
        Ja = a, s !== null && XR(s);
      }
      return o;
    }
    function XR(e) {
      Ja === null ? Ja = e : Ja.push.apply(Ja, e);
    }
    function aD(e, t, a) {
      switch (t) {
        case Bo:
        case Hp:
          throw new Error("Root did not complete. This is a bug in React.");
        case hc: {
          gc(e, Ja, Yo);
          break;
        }
        case Im: {
          if (Zu(e, a), Zv(a) && // do not delay if we're inside an act() scope
          !uC()) {
            var i = oS + VR - Hn();
            if (i > 10) {
              var o = Hs(e, Q);
              if (o !== Q)
                break;
              var s = e.suspendedLanes;
              if (!Do(s, a)) {
                Oa(), tf(e, s);
                break;
              }
              e.timeoutHandle = cg(gc.bind(null, e, Ja, Yo), i);
              break;
            }
          }
          gc(e, Ja, Yo);
          break;
        }
        case Pp: {
          if (Zu(e, a), eh(a))
            break;
          if (!uC()) {
            var f = Zc(e, a), v = f, y = Hn() - v, R = wD(y) - y;
            if (R > 10) {
              e.timeoutHandle = cg(gc.bind(null, e, Ja, Yo), R);
              break;
            }
          }
          gc(e, Ja, Yo);
          break;
        }
        case PR: {
          gc(e, Ja, Yo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function iD(e) {
      for (var t = e; ; ) {
        if (t.flags & yo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, v = s.value;
                try {
                  if (!Oe(f(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & yo && y !== null) {
          y.return = t, t = y;
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
      t = Bs(t, jm), t = Bs(t, Bp), ah(e, t);
    }
    function GR(e) {
      if (xx(), (bt & (jr | Ui)) !== vr)
        throw new Error("Should not already be working.");
      qo();
      var t = Hs(e, Q);
      if (!aa(t, We))
        return Ka(e, Hn()), null;
      var a = qm(e, t);
      if (e.tag !== Hu && a === hc) {
        var i = Fl(e);
        i !== Q && (t = i, a = pS(e, i));
      }
      if (a === Hp) {
        var o = Vp;
        throw yc(e, Q), Zu(e, t), Ka(e, Hn()), o;
      }
      if (a === iS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, gc(e, Ja, Yo), Ka(e, Hn()), null;
    }
    function lD(e, t) {
      t !== Q && (Hd(e, at(t, We)), Ka(e, Hn()), (bt & (jr | Ui)) === vr && (Wp(), Pu()));
    }
    function vS(e, t) {
      var a = bt;
      bt |= HR;
      try {
        return e(t);
      } finally {
        bt = a, bt === vr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && (Wp(), YE());
      }
    }
    function oD(e, t, a, i, o) {
      var s = Va(), f = Fr.transition;
      try {
        return Fr.transition = null, bn(Mn), e(t, a, i, o);
      } finally {
        bn(s), Fr.transition = f, bt === vr && Wp();
      }
    }
    function Wo(e) {
      Ju !== null && Ju.tag === Hu && (bt & (jr | Ui)) === vr && qo();
      var t = bt;
      bt |= HR;
      var a = Fr.transition, i = Va();
      try {
        return Fr.transition = null, bn(Mn), e ? e() : void 0;
      } finally {
        bn(i), Fr.transition = a, bt = t, (bt & (jr | Ui)) === vr && Pu();
      }
    }
    function QR() {
      return (bt & (jr | Ui)) !== vr;
    }
    function Wm(e, t) {
      oa(lS, Zl, e), Zl = at(Zl, t);
    }
    function hS(e) {
      Zl = lS.current, la(lS, e);
    }
    function yc(e, t) {
      e.finishedWork = null, e.finishedLanes = Q;
      var a = e.timeoutHandle;
      if (a !== fg && (e.timeoutHandle = fg, zw(a)), zn !== null)
        for (var i = zn.return; i !== null; ) {
          var o = i.alternate;
          wR(o, i), i = i.return;
        }
      xa = e;
      var s = Sc(e.current, null);
      return zn = s, hr = Zl = t, mr = Bo, Vp = null, Fm = Q, Bp = Q, jm = Q, Yp = null, Ja = null, ex(), ol.discardPendingWarnings(), s;
    }
    function JR(e, t) {
      do {
        var a = zn;
        try {
          if ($h(), x1(), on(), aS.current = null, a === null || a.return === null) {
            mr = Hp, Vp = t, zn = null;
            return;
          }
          if (St && a.mode & Nt && Lm(a, !0), vt)
            if (Eo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Qv(a, i, hr);
            } else
              Gv(a, t, hr);
          Lx(e, a.return, a, t, hr), eC(a);
        } catch (o) {
          t = o, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
          continue;
        }
        return;
      } while (!0);
    }
    function KR() {
      var e = rS.current;
      return rS.current = xm, e === null ? xm : e;
    }
    function ZR(e) {
      rS.current = e;
    }
    function uD() {
      oS = Hn();
    }
    function Qp(e) {
      Fm = at(e, Fm);
    }
    function sD() {
      mr === Bo && (mr = Im);
    }
    function mS() {
      (mr === Bo || mr === Im || mr === hc) && (mr = Pp), xa !== null && (Ps(Fm) || Ps(Bp)) && Zu(xa, hr);
    }
    function cD(e) {
      mr !== Pp && (mr = hc), Yp === null ? Yp = [e] : Yp.push(e);
    }
    function fD() {
      return mr === Bo;
    }
    function qm(e, t) {
      var a = bt;
      bt |= jr;
      var i = KR();
      if (xa !== e || hr !== t) {
        if (Ta) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Jp(e, hr), o.clear()), Pd(e, t);
        }
        Yo = Ws(), yc(e, t);
      }
      hu(t);
      do
        try {
          dD();
          break;
        } catch (s) {
          JR(e, s);
        }
      while (!0);
      if ($h(), bt = a, ZR(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return zl(), xa = null, hr = Q, mr;
    }
    function dD() {
      for (; zn !== null; )
        $R(zn);
    }
    function pD(e, t) {
      var a = bt;
      bt |= jr;
      var i = KR();
      if (xa !== e || hr !== t) {
        if (Ta) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Jp(e, hr), o.clear()), Pd(e, t);
        }
        Yo = Ws(), Wp(), yc(e, t);
      }
      hu(t);
      do
        try {
          vD();
          break;
        } catch (s) {
          JR(e, s);
        }
      while (!0);
      return $h(), ZR(i), bt = a, zn !== null ? (Us(), Bo) : (zl(), xa = null, hr = Q, mr);
    }
    function vD() {
      for (; zn !== null && !Pv(); )
        $R(zn);
    }
    function $R(e) {
      var t = e.alternate;
      yn(e);
      var a;
      (e.mode & Nt) !== Pe ? (L0(e), a = yS(t, e, Zl), Lm(e, !0)) : a = yS(t, e, Zl), on(), e.memoizedProps = e.pendingProps, a === null ? eC(e) : zn = a, aS.current = null;
    }
    function eC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & kl) === He) {
          yn(t);
          var o = void 0;
          if ((t.mode & Nt) === Pe ? o = TR(a, t, Zl) : (L0(t), o = TR(a, t, Zl), Lm(t, !1)), on(), o !== null) {
            zn = o;
            return;
          }
        } else {
          var s = sO(a, t);
          if (s !== null) {
            s.flags &= Zi, zn = s;
            return;
          }
          if ((t.mode & Nt) !== Pe) {
            Lm(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= kl, i.subtreeFlags = He, i.deletions = null;
          else {
            mr = iS, zn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          zn = y;
          return;
        }
        t = i, zn = t;
      } while (t !== null);
      mr === Bo && (mr = PR);
    }
    function gc(e, t, a) {
      var i = Va(), o = Fr.transition;
      try {
        Fr.transition = null, bn(Mn), hD(e, t, a, i);
      } finally {
        Fr.transition = o, bn(i);
      }
      return null;
    }
    function hD(e, t, a, i) {
      do
        qo();
      while (Ju !== null);
      if (xD(), (bt & (jr | Ui)) !== vr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Yv(s), o === null)
        return Ls(), null;
      if (s === Q && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Q, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ln;
      var f = at(o.lanes, o.childLanes);
      nf(e, f), e === xa && (xa = null, zn = null, hr = Q), ((o.subtreeFlags & $r) !== He || (o.flags & $r) !== He) && (mc || (mc = !0, cS = a, ES(Ci, function() {
        return qo(), null;
      })));
      var v = (o.subtreeFlags & (Kr | Zr | si | $r)) !== He, y = (o.flags & (Kr | Zr | si | $r)) !== He;
      if (v || y) {
        var R = Fr.transition;
        Fr.transition = null;
        var T = Va();
        bn(Mn);
        var U = bt;
        bt |= Ui, aS.current = null, vO(e, o), K1(), DO(e, o, s), Dw(e.containerInfo), e.current = o, vu(s), kO(o, e, s), Jv(), su(), bt = U, bn(T), Fr.transition = R;
      } else
        e.current = o, K1();
      var N = mc;
      if (mc ? (mc = !1, Ju = e, qp = s) : (Kf = 0, Vm = null), f = e.pendingLanes, f === Q && (Jf = null), N || aC(e.current, !1), Ml(o.stateNode, i), Ta && e.memoizedUpdaters.clear(), GO(), Ka(e, Hn()), t !== null)
        for (var H = e.onRecoverableError, P = 0; P < t.length; P++) {
          var q = t[P], Re = q.stack, Ve = q.digest;
          H(q.value, {
            componentStack: Re,
            digest: Ve
          });
        }
      if (Hm) {
        Hm = !1;
        var Ae = uS;
        throw uS = null, Ae;
      }
      return aa(qp, We) && e.tag !== Hu && qo(), f = e.pendingLanes, aa(f, We) ? (wx(), e === fS ? Xp++ : (Xp = 0, fS = e)) : Xp = 0, Pu(), Ls(), null;
    }
    function qo() {
      if (Ju !== null) {
        var e = sr(qp), t = zy(bi, e), a = Fr.transition, i = Va();
        try {
          return Fr.transition = null, bn(t), yD();
        } finally {
          bn(i), Fr.transition = a;
        }
      }
      return !1;
    }
    function mD(e) {
      sS.push(e), mc || (mc = !0, ES(Ci, function() {
        return qo(), null;
      }));
    }
    function yD() {
      if (Ju === null)
        return !1;
      var e = cS;
      cS = null;
      var t = Ju, a = qp;
      if (Ju = null, qp = Q, (bt & (jr | Ui)) !== vr)
        throw new Error("Cannot flush passive effects while already rendering.");
      dS = !0, Pm = !1, Ms(a);
      var i = bt;
      bt |= Ui, AO(t.current), NO(t, t.current, a, e);
      {
        var o = sS;
        sS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          gO(t, f);
        }
      }
      Ti(), aC(t.current, !0), bt = i, Pu(), Pm ? t === Vm ? Kf++ : (Kf = 0, Vm = t) : Kf = 0, dS = !1, Pm = !1, Ld(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function tC(e) {
      return Jf !== null && Jf.has(e);
    }
    function gD(e) {
      Jf === null ? Jf = /* @__PURE__ */ new Set([e]) : Jf.add(e);
    }
    function SD(e) {
      Hm || (Hm = !0, uS = e);
    }
    var ED = SD;
    function nC(e, t, a) {
      var i = pc(a, t), o = $1(e, i, We), s = Bu(e, o, We), f = Oa();
      s !== null && (ko(s, We, f), Ka(s, f));
    }
    function fn(e, t, a) {
      if (fO(a), Kp(!1), e.tag === ae) {
        nC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ae) {
          nC(i, e, a);
          return;
        } else if (i.tag === W) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !tC(s)) {
            var f = pc(a, e), v = I0(i, f, We), y = Bu(i, v, We), R = Oa();
            y !== null && (ko(y, We, R), Ka(y, R));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function RD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Oa();
      tf(e, a), _D(e), xa === e && Do(hr, a) && (mr === Pp || mr === Im && Zv(hr) && Hn() - oS < VR ? yc(e, Q) : jm = at(jm, a)), Ka(e, o);
    }
    function rC(e, t) {
      t === Ln && (t = tD(e));
      var a = Oa(), i = Ga(e, t);
      i !== null && (ko(i, t, a), Ka(i, a));
    }
    function CD(e) {
      var t = e.memoizedState, a = Ln;
      t !== null && (a = t.retryLane), rC(e, a);
    }
    function TD(e, t) {
      var a = Ln, i;
      switch (e.tag) {
        case _e:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case it:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), rC(e, a);
    }
    function wD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : KO(e / 1960) * 1960;
    }
    function bD() {
      if (Xp > $O)
        throw Xp = 0, fS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Kf > eD && (Kf = 0, Vm = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function xD() {
      ol.flushLegacyContextWarning(), ol.flushPendingUnsafeLifecycleWarnings();
    }
    function aC(e, t) {
      yn(e), Xm(e, Fa, WO), t && Xm(e, go, qO), Xm(e, Fa, BO), t && Xm(e, go, YO), on();
    }
    function Xm(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== He ? i = i.child : ((i.flags & t) !== He && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var Gm = null;
    function iC(e) {
      {
        if ((bt & jr) !== vr || !(e.mode & ze))
          return;
        var t = e.tag;
        if (t !== Y && t !== ae && t !== W && t !== ne && t !== Be && t !== pt && t !== Ze)
          return;
        var a = et(e) || "ReactComponent";
        if (Gm !== null) {
          if (Gm.has(a))
            return;
          Gm.add(a);
        } else
          Gm = /* @__PURE__ */ new Set([a]);
        var i = mn;
        try {
          yn(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? yn(e) : on();
        }
      }
    }
    var yS;
    {
      var OD = null;
      yS = function(e, t, a) {
        var i = pC(OD, t);
        try {
          return gR(e, t, a);
        } catch (s) {
          if (Hb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if ($h(), x1(), wR(e, t), pC(t, i), t.mode & Nt && L0(t), oi(null, gR, null, e, t, a), Dy()) {
            var o = Ki();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var lC = !1, gS;
    gS = /* @__PURE__ */ new Set();
    function DD(e) {
      if (Xr && !Rx())
        switch (e.tag) {
          case ne:
          case Be:
          case Ze: {
            var t = zn && et(zn) || "Unknown", a = t;
            if (!gS.has(a)) {
              gS.add(a);
              var i = et(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case W: {
            lC || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), lC = !0);
            break;
          }
        }
    }
    function Jp(e, t) {
      if (Ta) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          rf(e, i, t);
        });
      }
    }
    var SS = {};
    function ES(e, t) {
      {
        var a = hl.current;
        return a !== null ? (a.push(t), SS) : Dd(e, t);
      }
    }
    function oC(e) {
      if (e !== SS)
        return zc(e);
    }
    function uC() {
      return hl.current !== null;
    }
    function kD(e) {
      {
        if (e.mode & ze) {
          if (!jR())
            return;
        } else if (!JO() || bt !== vr || e.tag !== ne && e.tag !== Be && e.tag !== Ze)
          return;
        if (hl.current === null) {
          var t = mn;
          try {
            yn(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, et(e));
          } finally {
            t ? yn(e) : on();
          }
        }
      }
    }
    function _D(e) {
      e.tag !== Hu && jR() && hl.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Kp(e) {
      WR = e;
    }
    var zi = null, Zf = null, LD = function(e) {
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
    function RS(e) {
      return $f(e);
    }
    function CS(e) {
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
    function sC(e, t) {
      {
        if (zi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case W: {
            typeof i == "function" && (o = !0);
            break;
          }
          case ne: {
            (typeof i == "function" || s === je) && (o = !0);
            break;
          }
          case Be: {
            (s === he || s === je) && (o = !0);
            break;
          }
          case pt:
          case Ze: {
            (s === ut || s === je) && (o = !0);
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
    function cC(e) {
      {
        if (zi === null || typeof WeakSet != "function")
          return;
        Zf === null && (Zf = /* @__PURE__ */ new WeakSet()), Zf.add(e);
      }
    }
    var ND = function(e, t) {
      {
        if (zi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        qo(), Wo(function() {
          TS(e.current, i, a);
        });
      }
    }, MD = function(e, t) {
      {
        if (e.context !== ci)
          return;
        qo(), Wo(function() {
          Zp(t, e, null, null);
        });
      }
    };
    function TS(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, v = e.type, y = null;
        switch (f) {
          case ne:
          case Ze:
          case W:
            y = v;
            break;
          case Be:
            y = v.render;
            break;
        }
        if (zi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, T = !1;
        if (y !== null) {
          var U = zi(y);
          U !== void 0 && (a.has(U) ? T = !0 : t.has(U) && (f === W ? T = !0 : R = !0));
        }
        if (Zf !== null && (Zf.has(e) || i !== null && Zf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || R) {
          var N = Ga(e, We);
          N !== null && yr(N, e, We, an);
        }
        o !== null && !T && TS(o, t, a), s !== null && TS(s, t, a);
      }
    }
    var UD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return wS(e.current, i, a), a;
      }
    };
    function wS(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, v = null;
        switch (s) {
          case ne:
          case Ze:
          case W:
            v = f;
            break;
          case Be:
            v = f.render;
            break;
        }
        var y = !1;
        v !== null && t.has(v) && (y = !0), y ? zD(e, a) : i !== null && wS(i, t, a), o !== null && wS(o, t, a);
      }
    }
    function zD(e, t) {
      {
        var a = AD(e, t);
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
            case ae:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function AD(e, t) {
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
    var bS;
    {
      bS = !1;
      try {
        var fC = Object.preventExtensions({});
      } catch {
        bS = !0;
      }
    }
    function ID(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = He, this.subtreeFlags = He, this.deletions = null, this.lanes = Q, this.childLanes = Q, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !bS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, i) {
      return new ID(e, t, a, i);
    };
    function xS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function FD(e) {
      return typeof e == "function" && !xS(e) && e.defaultProps === void 0;
    }
    function jD(e) {
      if (typeof e == "function")
        return xS(e) ? W : ne;
      if (e != null) {
        var t = e.$$typeof;
        if (t === he)
          return Be;
        if (t === ut)
          return pt;
      }
      return Y;
    }
    function Sc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = He, a.subtreeFlags = He, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ur, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Y:
        case ne:
        case Ze:
          a.type = $f(e.type);
          break;
        case W:
          a.type = RS(e.type);
          break;
        case Be:
          a.type = CS(e.type);
          break;
      }
      return a;
    }
    function HD(e, t) {
      e.flags &= ur | Zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Q, e.lanes = t, e.child = null, e.subtreeFlags = He, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = He, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function PD(e, t, a) {
      var i;
      return e === Wh ? (i = ze, t === !0 && (i |= Tn, i |= Ha)) : i = Pe, Ta && (i |= Nt), fi(ae, null, null, i);
    }
    function OS(e, t, a, i, o, s) {
      var f = Y, v = e;
      if (typeof e == "function")
        xS(e) ? (f = W, v = RS(v)) : v = $f(v);
      else if (typeof e == "string")
        f = G;
      else
        e:
          switch (e) {
            case ya:
              return $u(a.children, o, s, t);
            case Fi:
              f = yt, o |= Tn, (o & ze) !== Pe && (o |= Ha);
              break;
            case O:
              return VD(a, o, s, t);
            case mt:
              return BD(a, o, s, t);
            case wt:
              return YD(a, o, s, t);
            case tn:
              return dC(a, o, s, t);
            case Cr:
            case Fn:
            case pi:
            case nn:
            case en:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case re:
                    f = Fe;
                    break e;
                  case de:
                    f = st;
                    break e;
                  case he:
                    f = Be, v = CS(v);
                    break e;
                  case ut:
                    f = pt;
                    break e;
                  case je:
                    f = vn, v = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var R = i ? et(i) : null;
                R && (y += `

Check the render method of \`` + R + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      var T = fi(f, a, t, o);
      return T.elementType = e, T.type = v, T.lanes = s, T._debugOwner = i, T;
    }
    function DS(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, v = OS(o, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function $u(e, t, a, i) {
      var o = fi(Ne, e, i, t);
      return o.lanes = a, o;
    }
    function VD(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = fi(Dt, e, i, t | Nt);
      return o.elementType = O, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function BD(e, t, a, i) {
      var o = fi(_e, e, i, t);
      return o.elementType = mt, o.lanes = a, o;
    }
    function YD(e, t, a, i) {
      var o = fi(it, e, i, t);
      return o.elementType = wt, o.lanes = a, o;
    }
    function dC(e, t, a, i) {
      var o = fi(Xe, e, i, t);
      o.elementType = tn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function kS(e, t, a) {
      var i = fi(K, e, null, t);
      return i.lanes = a, i;
    }
    function WD() {
      var e = fi(G, null, null, Pe);
      return e.elementType = "DELETED", e;
    }
    function qD(e) {
      var t = fi(Ct, null, null, Pe);
      return t.stateNode = e, t;
    }
    function _S(e, t, a) {
      var i = e.children !== null ? e.children : [], o = fi(Se, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function pC(e, t) {
      return e === null && (e = fi(Y, null, null, Pe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function XD(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = fg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ln, this.eventTimes = Ys(Q), this.expirationTimes = Ys(an), this.pendingLanes = Q, this.suspendedLanes = Q, this.pingedLanes = Q, this.expiredLanes = Q, this.mutableReadLanes = Q, this.finishedLanes = Q, this.entangledLanes = Q, this.entanglements = Ys(Q), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
    function vC(e, t, a, i, o, s, f, v, y, R) {
      var T = new XD(e, t, a, v, y), U = PD(t, s);
      T.current = U, U.stateNode = T;
      {
        var N = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        U.memoizedState = N;
      }
      return Fg(U), T;
    }
    var LS = "18.2.0";
    function GD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Sr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Yr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var NS, MS;
    NS = !1, MS = {};
    function hC(e) {
      if (!e)
        return ci;
      var t = Si(e), a = Lb(t);
      if (t.tag === W) {
        var i = t.type;
        if (Wl(i))
          return PE(t, i, a);
      }
      return a;
    }
    function QD(e, t) {
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
        if (o.mode & Tn) {
          var s = et(a) || "Component";
          if (!MS[s]) {
            MS[s] = !0;
            var f = mn;
            try {
              yn(o), a.mode & Tn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? yn(f) : on();
            }
          }
        }
        return o.stateNode;
      }
    }
    function mC(e, t, a, i, o, s, f, v) {
      var y = !1, R = null;
      return vC(e, t, y, R, a, i, o, s, f);
    }
    function yC(e, t, a, i, o, s, f, v, y, R) {
      var T = !0, U = vC(a, i, T, e, o, s, f, v, y);
      U.context = hC(null);
      var N = U.current, H = Oa(), P = Ku(N), q = Po(H, P);
      return q.callback = t ?? null, Bu(N, q, P), nD(U, P, H), U;
    }
    function Zp(e, t, a, i) {
      $i(t, e);
      var o = t.current, s = Oa(), f = Ku(o);
      Ud(f);
      var v = hC(a);
      t.context === null ? t.context = v : t.pendingContext = v, Xr && mn !== null && !NS && (NS = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, et(mn) || "Unknown"));
      var y = Po(s, f);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var R = Bu(o, y, f);
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
    function JD(e) {
      switch (e.tag) {
        case ae: {
          var t = e.stateNode;
          if (af(t)) {
            var a = Ny(t);
            lD(t, a);
          }
          break;
        }
        case _e: {
          Wo(function() {
            var o = Ga(e, We);
            if (o !== null) {
              var s = Oa();
              yr(o, e, We, s);
            }
          });
          var i = We;
          US(e, i);
          break;
        }
      }
    }
    function gC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = rh(a.retryLane, t));
    }
    function US(e, t) {
      gC(e, t);
      var a = e.alternate;
      a && gC(a, t);
    }
    function KD(e) {
      if (e.tag === _e) {
        var t = Oo, a = Ga(e, t);
        if (a !== null) {
          var i = Oa();
          yr(a, e, t, i);
        }
        US(e, t);
      }
    }
    function ZD(e) {
      if (e.tag === _e) {
        var t = Ku(e), a = Ga(e, t);
        if (a !== null) {
          var i = Oa();
          yr(a, e, t, i);
        }
        US(e, t);
      }
    }
    function SC(e) {
      var t = Od(e);
      return t === null ? null : t.stateNode;
    }
    var EC = function(e) {
      return null;
    };
    function $D(e) {
      return EC(e);
    }
    var RC = function(e) {
      return !1;
    };
    function ek(e) {
      return RC(e);
    }
    var CC = null, TC = null, wC = null, bC = null, xC = null, OC = null, DC = null, kC = null, _C = null;
    {
      var LC = function(e, t, a) {
        var i = t[a], o = Lt(e) ? e.slice() : ft({}, e);
        return a + 1 === t.length ? (Lt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = LC(e[i], t, a + 1), o);
      }, NC = function(e, t) {
        return LC(e, t, 0);
      }, MC = function(e, t, a, i) {
        var o = t[i], s = Lt(e) ? e.slice() : ft({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], Lt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = MC(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, UC = function(e, t, a) {
        if (t.length !== a.length) {
          k("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              k("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return MC(e, t, a, 0);
      }, zC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = Lt(e) ? e.slice() : ft({}, e);
        return s[o] = zC(e[o], t, a + 1, i), s;
      }, AC = function(e, t, a) {
        return zC(e, t, 0, a);
      }, zS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      CC = function(e, t, a, i) {
        var o = zS(e, t);
        if (o !== null) {
          var s = AC(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var f = Ga(e, We);
          f !== null && yr(f, e, We, an);
        }
      }, TC = function(e, t, a) {
        var i = zS(e, t);
        if (i !== null) {
          var o = NC(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ft({}, e.memoizedProps);
          var s = Ga(e, We);
          s !== null && yr(s, e, We, an);
        }
      }, wC = function(e, t, a, i) {
        var o = zS(e, t);
        if (o !== null) {
          var s = UC(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var f = Ga(e, We);
          f !== null && yr(f, e, We, an);
        }
      }, bC = function(e, t, a) {
        e.pendingProps = AC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, We);
        i !== null && yr(i, e, We, an);
      }, xC = function(e, t) {
        e.pendingProps = NC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ga(e, We);
        a !== null && yr(a, e, We, an);
      }, OC = function(e, t, a) {
        e.pendingProps = UC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, We);
        i !== null && yr(i, e, We, an);
      }, DC = function(e) {
        var t = Ga(e, We);
        t !== null && yr(t, e, We, an);
      }, kC = function(e) {
        EC = e;
      }, _C = function(e) {
        RC = e;
      };
    }
    function tk(e) {
      var t = bd(e);
      return t === null ? null : t.stateNode;
    }
    function nk(e) {
      return null;
    }
    function rk() {
      return mn;
    }
    function ak(e) {
      var t = e.findFiberByHostInstance, a = C.ReactCurrentDispatcher;
      return Vv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: CC,
        overrideHookStateDeletePath: TC,
        overrideHookStateRenamePath: wC,
        overrideProps: bC,
        overridePropsDeletePath: xC,
        overridePropsRenamePath: OC,
        setErrorHandler: kC,
        setSuspenseHandler: _C,
        scheduleUpdate: DC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: tk,
        findFiberByHostInstance: t || nk,
        // React Refresh
        findHostInstancesForRefresh: UD,
        scheduleRefresh: ND,
        scheduleRoot: MD,
        setRefreshHandler: LD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: rk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: LS
      });
    }
    var IC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function AS(e) {
      this._internalRoot = e;
    }
    Jm.prototype.render = AS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Km(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Cn) {
          var i = SC(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Zp(e, t, null, null);
    }, Jm.prototype.unmount = AS.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        QR() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Wo(function() {
          Zp(null, e, null, null);
        }), AE(t);
      }
    };
    function ik(e, t) {
      if (!Km(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      FC(e);
      var a = !1, i = !1, o = "", s = IC;
      t != null && (t.hydrate ? k("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Br && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = mC(e, Wh, null, a, i, o, s);
      Fh(f.current, e);
      var v = e.nodeType === Cn ? e.parentNode : e;
      return lp(v), new AS(f);
    }
    function Jm(e) {
      this._internalRoot = e;
    }
    function lk(e) {
      e && Fy(e);
    }
    Jm.prototype.unstable_scheduleHydration = lk;
    function ok(e, t, a) {
      if (!Km(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      FC(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", y = IC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var R = yC(t, null, e, Wh, i, s, f, v, y);
      if (Fh(R.current, e), lp(e), o)
        for (var T = 0; T < o.length; T++) {
          var U = o[T];
          hx(R, U);
        }
      return new Jm(R);
    }
    function Km(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === ga || e.nodeType === ud || !Ge));
    }
    function $p(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === ga || e.nodeType === ud || e.nodeType === Cn && e.nodeValue === " react-mount-point-unstable "));
    }
    function FC(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uk = C.ReactCurrentOwner, jC;
    jC = function(e) {
      if (e._reactRootContainer && e.nodeType !== Cn) {
        var t = SC(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = IS(e), o = !!(i && Fu(i));
      o && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function IS(e) {
      return e ? e.nodeType === ga ? e.documentElement : e.firstChild : null;
    }
    function HC() {
    }
    function sk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = Qm(f);
            s.call(N);
          };
        }
        var f = yC(
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
          HC
        );
        e._reactRootContainer = f, Fh(f.current, e);
        var v = e.nodeType === Cn ? e.parentNode : e;
        return lp(v), Wo(), f;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var N = Qm(T);
            R.call(N);
          };
        }
        var T = mC(
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
          HC
        );
        e._reactRootContainer = T, Fh(T.current, e);
        var U = e.nodeType === Cn ? e.parentNode : e;
        return lp(U), Wo(function() {
          Zp(t, T, a, i);
        }), T;
      }
    }
    function ck(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Zm(e, t, a, i, o) {
      jC(a), ck(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = sk(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var v = o;
          o = function() {
            var y = Qm(f);
            v.call(y);
          };
        }
        Zp(t, f, e, o);
      }
      return Qm(f);
    }
    function fk(e) {
      {
        var t = uk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : QD(e, "findDOMNode");
    }
    function dk(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Zm(null, e, t, !0, a);
    }
    function pk(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Zm(null, e, t, !1, a);
    }
    function vk(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !$p(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !uu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Zm(e, t, a, !1, i);
    }
    function hk(e) {
      if (!$p(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = yp(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = IS(e), i = a && !Fu(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Wo(function() {
          Zm(null, null, e, !1, function() {
            e._reactRootContainer = null, AE(e);
          });
        }), !0;
      } else {
        {
          var o = IS(e), s = !!(o && Fu(o)), f = e.nodeType === Qr && $p(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wu(JD), Ay(KD), of(ZD), lh(Va), oh(br), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), md(gw), kc(vS, oD, Wo);
    function mk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Km(t))
        throw new Error("Target container is not a DOM element.");
      return GD(e, t, null, a);
    }
    function yk(e, t, a, i) {
      return vk(e, t, a, i);
    }
    var FS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Fu, _f, jh, ou, ho, vS]
    };
    function gk(e, t) {
      return FS.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ik(e, t);
    }
    function Sk(e, t, a) {
      return FS.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ok(e, t, a);
    }
    function Ek(e) {
      return QR() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Wo(e);
    }
    var Rk = ak({
      findFiberByHostInstance: ac,
      bundleType: 1,
      version: LS,
      rendererPackageName: "react-dom"
    });
    if (!Rk && Rn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var PC = window.location.protocol;
      /^(https?|file):$/.test(PC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (PC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FS, Za.createPortal = mk, Za.createRoot = gk, Za.findDOMNode = fk, Za.flushSync = Ek, Za.hydrate = dk, Za.hydrateRoot = Sk, Za.render = pk, Za.unmountComponentAtNode = hk, Za.unstable_batchedUpdates = vS, Za.unstable_renderSubtreeIntoContainer = yk, Za.version = LS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Za;
}
var $a = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JC;
function Uk() {
  if (JC)
    return $a;
  JC = 1;
  var p = Pr, h = cT();
  function m(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), x = {};
  function _(n, r) {
    k(n, r), k(n + "Capture", r);
  }
  function k(n, r) {
    for (x[n] = r, n = 0; n < r.length; n++)
      C.add(r[n]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ce = Object.prototype.hasOwnProperty, ne = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, W = {}, Y = {};
  function ae(n) {
    return ce.call(Y, n) ? !0 : ce.call(W, n) ? !1 : ne.test(n) ? Y[n] = !0 : (W[n] = !0, !1);
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
  function K(n, r, l, u, c, d, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = S;
  }
  var Ne = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ne[n] = new K(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ne[r] = new K(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ne[n] = new K(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ne[n] = new K(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ne[n] = new K(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ne[n] = new K(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ne[n] = new K(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ne[n] = new K(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ne[n] = new K(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var yt = /[\-:]([a-z])/g;
  function st(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      yt,
      st
    );
    Ne[r] = new K(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(yt, st);
    Ne[r] = new K(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(yt, st);
    Ne[r] = new K(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ne[n] = new K(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ne.xlinkHref = new K("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ne[n] = new K(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Fe(n, r, l, u) {
    var c = Ne.hasOwnProperty(r) ? Ne[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (G(r, l, c, u) && (l = null), u || c === null ? ae(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Be = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dt = Symbol.for("react.element"), _e = Symbol.for("react.portal"), pt = Symbol.for("react.fragment"), Ze = Symbol.for("react.strict_mode"), vn = Symbol.for("react.profiler"), jt = Symbol.for("react.provider"), Ct = Symbol.for("react.context"), it = Symbol.for("react.forward_ref"), Ht = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), ot = Symbol.for("react.offscreen"), Z = Symbol.iterator;
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
  var Ge = !1;
  function Qe(n, r) {
    if (!n || Ge)
      return "";
    Ge = !0;
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
          } catch (V) {
            var u = V;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (V) {
            u = V;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (V) {
          u = V;
        }
        n();
      }
    } catch (V) {
      if (V && u && typeof V.stack == "string") {
        for (var c = V.stack.split(`
`), d = u.stack.split(`
`), S = c.length - 1, w = d.length - 1; 1 <= S && 0 <= w && c[S] !== d[w]; )
          w--;
        for (; 1 <= S && 0 <= w; S--, w--)
          if (c[S] !== d[w]) {
            if (S !== 1 || w !== 1)
              do
                if (S--, w--, 0 > w || c[S] !== d[w]) {
                  var L = `
` + c[S].replace(" at new ", " at ");
                  return n.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", n.displayName)), L;
                }
              while (1 <= S && 0 <= w);
            break;
          }
      }
    } finally {
      Ge = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? be(n) : "";
  }
  function gt(n) {
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
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
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
      case pt:
        return "Fragment";
      case _e:
        return "Portal";
      case vn:
        return "Profiler";
      case Ze:
        return "StrictMode";
      case Ht:
        return "Suspense";
      case Xe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ct:
          return (n.displayName || "Context") + ".Consumer";
        case jt:
          return (n._context.displayName || "Context") + ".Provider";
        case it:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case lt:
          return r = n.displayName || null, r !== null ? r : vt(n.type) || "Memo";
        case kt:
          r = n._payload, n = n._init;
          try {
            return vt(n(r));
          } catch {
          }
      }
    return null;
  }
  function St(n) {
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
  function ln(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function nr(n) {
    var r = ln(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
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
  function Vr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = ln(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
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
  function Rn(n, r) {
    var l = r.checked;
    return D({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function ar(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = ht(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && Fe(n, "checked", r, !1);
  }
  function An(n, r) {
    Vn(n, r);
    var l = ht(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Or(n, r.type, l) : r.hasOwnProperty("defaultValue") && Or(n, r.type, ht(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
  function Bn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ht(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function fa(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return D({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function da(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(m(92));
        if (Sr(l)) {
          if (1 < l.length)
            throw Error(m(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ht(l) };
  }
  function Er(n, r) {
    var l = ht(r.value), u = ht(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function pa(n) {
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
  var dn, va = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (dn = dn || document.createElement("div"), dn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = dn.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ha(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ma = {
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
  Object.keys(ma).forEach(function(n) {
    ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ma[r] = ma[n];
    });
  });
  function Ie(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ma.hasOwnProperty(n) && ma[n] ? ("" + r).trim() : r + "px";
  }
  function ct(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, c = Ie(l, r[l], u);
        l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Pt = D({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Mt(n, r) {
    if (r) {
      if (Pt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(m(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(m(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(m(62));
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
  var hn = null;
  function Rr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Wt = null, Qn = null, Vt = null;
  function $t(n) {
    if (n = Si(n)) {
      if (typeof Wt != "function")
        throw Error(m(280));
      var r = n.stateNode;
      r && (r = _c(r), Wt(n.stateNode, n.type, r));
    }
  }
  function ei(n) {
    Qn ? Vt ? Vt.push(n) : Vt = [n] : Qn = n;
  }
  function _a() {
    if (Qn) {
      var n = Qn, r = Vt;
      if (Vt = Qn = null, $t(n), r)
        for (n = 0; n < r.length; n++)
          $t(r[n]);
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
      ao = !1, (Qn !== null || Vt !== null) && (ro(), _a());
    }
  }
  function ti(n, r) {
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
      throw Error(m(231, r, typeof l));
    return l;
  }
  var ni = !1;
  if (E)
    try {
      var La = {};
      Object.defineProperty(La, "passive", { get: function() {
        ni = !0;
      } }), window.addEventListener("test", La, La), window.removeEventListener("test", La, La);
    } catch {
      ni = !1;
    }
  function Ii(n, r, l, u, c, d, S, w, L) {
    var V = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, V);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var Br = !1, Yr = null, ya = !1, Fi = null, O = { onError: function(n) {
    Br = !0, Yr = n;
  } };
  function re(n, r, l, u, c, d, S, w, L) {
    Br = !1, Yr = null, Ii.apply(O, arguments);
  }
  function de(n, r, l, u, c, d, S, w, L) {
    if (re.apply(this, arguments), Br) {
      if (Br) {
        var V = Yr;
        Br = !1, Yr = null;
      } else
        throw Error(m(198));
      ya || (ya = !0, Fi = V);
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
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function wt(n) {
    if (he(n) !== n)
      throw Error(m(188));
  }
  function ut(n) {
    var r = n.alternate;
    if (!r) {
      if (r = he(n), r === null)
        throw Error(m(188));
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
            return wt(c), n;
          if (d === u)
            return wt(c), r;
          d = d.sibling;
        }
        throw Error(m(188));
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
            throw Error(m(189));
        }
      }
      if (l.alternate !== u)
        throw Error(m(190));
    }
    if (l.tag !== 3)
      throw Error(m(188));
    return l.stateNode.current === l ? n : r;
  }
  function je(n) {
    return n = ut(n), n !== null ? Fn(n) : null;
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
  var en = h.unstable_scheduleCallback, tn = h.unstable_cancelCallback, Cr = h.unstable_shouldYield, pi = h.unstable_requestPaint, nn = h.unstable_now, Wr = h.unstable_getCurrentPriorityLevel, ts = h.unstable_ImmediatePriority, vi = h.unstable_UserBlockingPriority, ft = h.unstable_NormalPriority, io = h.unstable_LowPriority, ji = h.unstable_IdlePriority, gl = null, qr = null;
  function ns(n) {
    if (qr && typeof qr.onCommitFiberRoot == "function")
      try {
        qr.onCommitFiberRoot(gl, n, void 0, (n.current.flags & 128) === 128);
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
  function Na(n, r) {
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
      var S = 31 - kr(d), w = 1 << S, L = c[S];
      L === -1 ? (!(w & l) || w & u) && (c[S] = Na(w, r)) : L <= r && (n.expiredLanes |= w), d &= ~w;
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
  var Tt = 0;
  function us(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Jo, Rl, ss, _t, Ko, so = !1, et = [], ri = null, mn = null, Xr = null, Ma = /* @__PURE__ */ new Map(), Cl = /* @__PURE__ */ new Map(), on = [], yn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function cs(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ri = null;
        break;
      case "dragenter":
      case "dragleave":
        mn = null;
        break;
      case "mouseover":
      case "mouseout":
        Xr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ma.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cl.delete(r.pointerId);
    }
  }
  function lr(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Si(r), r !== null && Rl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Gr(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return ri = lr(ri, n, r, l, u, c), !0;
      case "dragenter":
        return mn = lr(mn, n, r, l, u, c), !0;
      case "mouseover":
        return Xr = lr(Xr, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Ma.set(d, lr(Ma.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cl.set(d, lr(Cl.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function ai(n) {
    var r = Ki(n.target);
    if (r !== null) {
      var l = he(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = mt(l), r !== null) {
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
        hn = u, l.target.dispatchEvent(u), hn = null;
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
    so = !1, ri !== null && Zo(ri) && (ri = null), mn !== null && Zo(mn) && (mn = null), Xr !== null && Zo(Xr) && (Xr = null), Ma.forEach(co), Cl.forEach(co);
  }
  function Tl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, so || (so = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, fo)));
  }
  function Ua(n) {
    function r(c) {
      return Tl(c, n);
    }
    if (0 < et.length) {
      Tl(et[0], n);
      for (var l = 1; l < et.length; l++) {
        var u = et[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (ri !== null && Tl(ri, n), mn !== null && Tl(mn, n), Xr !== null && Tl(Xr, n), Ma.forEach(r), Cl.forEach(r), l = 0; l < on.length; l++)
      u = on[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < on.length && (l = on[0], l.blockedOn === null); )
      ai(l), l.blockedOn === null && on.shift();
  }
  var Pi = Be.ReactCurrentBatchConfig, $o = !0;
  function Vi(n, r, l, u) {
    var c = Tt, d = Pi.transition;
    Pi.transition = null;
    try {
      Tt = 1, yi(n, r, l, u);
    } finally {
      Tt = c, Pi.transition = d;
    }
  }
  function eu(n, r, l, u) {
    var c = Tt, d = Pi.transition;
    Pi.transition = null;
    try {
      Tt = 4, yi(n, r, l, u);
    } finally {
      Tt = c, Pi.transition = d;
    }
  }
  function yi(n, r, l, u) {
    if ($o) {
      var c = tu(n, r, l, u);
      if (c === null)
        md(n, r, u, Bi, l), cs(n, u);
      else if (Gr(c, n, r, l, u))
        u.stopPropagation();
      else if (cs(n, u), r & 4 && -1 < yn.indexOf(n)) {
        for (; c !== null; ) {
          var d = Si(c);
          if (d !== null && Jo(d), d = tu(n, r, l, u), d === null && md(n, r, u, Bi, l), d === c)
            break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else
        md(n, r, u, null, l);
    }
  }
  var Bi = null;
  function tu(n, r, l, u) {
    if (Bi = null, n = Rr(u), n = Ki(n), n !== null)
      if (r = he(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = mt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Bi = n, null;
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
        switch (Wr()) {
          case ts:
            return 1;
          case vi:
            return 4;
          case ft:
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
  var ii = null, nu = null, g = null;
  function b() {
    if (g)
      return g;
    var n, r = nu, l = r.length, u, c = "value" in ii ? ii.value : ii.textContent, d = c.length;
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
  function B() {
    return !0;
  }
  function ue() {
    return !1;
  }
  function ke(n) {
    function r(l, u, c, d, S) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = S, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (l = n[w], this[w] = l ? l(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? B : ue, this.isPropagationStopped = ue, this;
    }
    return D(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = B);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = B);
    }, persist: function() {
    }, isPersistent: B }), r;
  }
  var Ee = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ke = ke(Ee), dt = D({}, Ee, { view: 0, detail: 0 }), Bt = ke(dt), qt, Xt, Gt, un = D({}, dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ec, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Gt && (Gt && n.type === "mousemove" ? (qt = n.screenX - Gt.screenX, Xt = n.screenY - Gt.screenY) : Xt = qt = 0, Gt = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Xt;
  } }), Lt = ke(un), wl = D({}, un, { dataTransfer: 0 }), ru = ke(wl), ds = D({}, dt, { relatedTarget: 0 }), ps = ke(ds), Yi = D({}, Ee, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vs = ke(Yi), hs = D({}, Ee, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ad = ke(hs), vy = D({}, Ee, { data: 0 }), cv = ke(vy), fv = {
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
  var hy = D({}, dt, { key: function(n) {
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
  } }), Wi = ke(hy), my = D({}, un, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Rc = ke(my), ld = D({}, dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ec }), od = ke(ld), yy = D({}, Ee, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cc = ke(yy), vv = D({}, un, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qr = ke(vv), qi = [9, 13, 27, 32], Cn = E && "CompositionEvent" in window, ga = null;
  E && "documentMode" in document && (ga = document.documentMode);
  var ud = E && "TextEvent" in window && !ga, ms = E && (!Cn || ga && 8 < ga && 11 >= ga), hv = " ", au = !1;
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
  function gy(n, r) {
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
  function Sy(n, r) {
    if (bl)
      return n === "compositionend" || !Cn && mv(n, r) ? (n = b(), g = nu = ii = null, bl = !1, n) : null;
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
  var Ey = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function sd(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Ey[n.type] : r === "textarea";
  }
  function gv(n, r, l, u) {
    ei(u), r = Dc(r, "onChange"), 0 < r.length && (l = new Ke("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var ys = null, gs = null;
  function Sv(n) {
    zv(n, 0);
  }
  function Xi(n) {
    var r = uu(n);
    if (Vr(r))
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
  function Ry(n, r, l) {
    n === "focusin" ? (Rv(), ys = r, gs = l, ys.attachEvent("onpropertychange", Cv)) : n === "focusout" && Rv();
  }
  function Cy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Xi(gs);
  }
  function Ty(n, r) {
    if (n === "click")
      return Xi(r);
  }
  function wy(n, r) {
    if (n === "input" || n === "change")
      return Xi(r);
  }
  function Tv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var li = typeof Object.is == "function" ? Object.is : Tv;
  function iu(n, r) {
    if (li(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length)
      return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!ce.call(r, c) || !li(n[c], r[c]))
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
    pd || vo == null || vo !== gr(u) || (u = vo, "selectionStart" in u && Ss(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Es && iu(Es, u) || (Es = u, u = Dc(xl, "onSelect"), 0 < u.length && (r = new Ke("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = vo)));
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
    Nv.set(n, r), _(r, [n]);
  }
  for (var Oc = 0; Oc < Mv.length; Oc++) {
    var Cs = Mv[Oc], Ts = Cs.toLowerCase(), by = Cs[0].toUpperCase() + Cs.slice(1);
    Ol(Ts, "on" + by);
  }
  Ol(Tr, "onAnimationEnd"), Ol(vd, "onAnimationIteration"), Ol(_v, "onAnimationStart"), Ol("dblclick", "onDoubleClick"), Ol("focusin", "onFocus"), Ol("focusout", "onBlur"), Ol(Lv, "onTransitionEnd"), k("onMouseEnter", ["mouseout", "mouseover"]), k("onMouseLeave", ["mouseout", "mouseover"]), k("onPointerEnter", ["pointerout", "pointerover"]), k("onPointerLeave", ["pointerout", "pointerover"]), _("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));
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
            var w = u[S], L = w.instance, V = w.currentTarget;
            if (w = w.listener, L !== d && c.isPropagationStopped())
              break e;
            Uv(c, w, V), d = L;
          }
        else
          for (S = 0; S < u.length; S++) {
            if (w = u[S], L = w.instance, V = w.currentTarget, w = w.listener, L !== d && c.isPropagationStopped())
              break e;
            Uv(c, w, V), d = L;
          }
      }
    }
    if (ya)
      throw n = Fi, ya = !1, Fi = null, n;
  }
  function Kt(n, r) {
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
        l !== "selectionchange" && (xy.has(l) || ws(l, !1, n), ws(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Qi] || (r[Qi] = !0, ws("selectionchange", !1, r));
    }
  }
  function hd(n, r, l, u) {
    switch (fs(r)) {
      case 1:
        var c = Vi;
        break;
      case 4:
        c = eu;
        break;
      default:
        c = yi;
    }
    l = c.bind(null, r, l, n), c = void 0, !ni || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
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
                var L = S.tag;
                if ((L === 3 || L === 4) && (L = S.stateNode.containerInfo, L === c || L.nodeType === 8 && L.parentNode === c))
                  return;
                S = S.return;
              }
            for (; w !== null; ) {
              if (S = Ki(w), S === null)
                return;
              if (L = S.tag, L === 5 || L === 6) {
                u = d = S;
                continue e;
              }
              w = w.parentNode;
            }
          }
          u = u.return;
        }
    yl(function() {
      var V = d, ie = Rr(l), le = [];
      e: {
        var te = Nv.get(n);
        if (te !== void 0) {
          var ye = Ke, xe = n;
          switch (n) {
            case "keypress":
              if (j(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ye = Wi;
              break;
            case "focusin":
              xe = "focus", ye = ps;
              break;
            case "focusout":
              xe = "blur", ye = ps;
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
              ye = Lt;
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
              ye = Bt;
              break;
            case "wheel":
              ye = Qr;
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
          for (var M = V, F; M !== null; ) {
            F = M;
            var se = F.stateNode;
            if (F.tag === 5 && se !== null && (F = se, z !== null && (se = ti(M, z), se != null && Le.push(ou(M, se, F)))), Un)
              break;
            M = M.return;
          }
          0 < Le.length && (te = new ye(te, xe, null, l, ie), le.push({ event: te, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (te = n === "mouseover" || n === "pointerover", ye = n === "mouseout" || n === "pointerout", te && l !== hn && (xe = l.relatedTarget || l.fromElement) && (Ki(xe) || xe[oi]))
            break e;
          if ((ye || te) && (te = ie.window === ie ? ie : (te = ie.ownerDocument) ? te.defaultView || te.parentWindow : window, ye ? (xe = l.relatedTarget || l.toElement, ye = V, xe = xe ? Ki(xe) : null, xe !== null && (Un = he(xe), xe !== Un || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (ye = null, xe = V), ye !== xe)) {
            if (Le = Lt, se = "onMouseLeave", z = "onMouseEnter", M = "mouse", (n === "pointerout" || n === "pointerover") && (Le = Rc, se = "onPointerLeave", z = "onPointerEnter", M = "pointer"), Un = ye == null ? te : uu(ye), F = xe == null ? te : uu(xe), te = new Le(se, M + "leave", ye, l, ie), te.target = Un, te.relatedTarget = F, se = null, Ki(ie) === V && (Le = new Le(z, M + "enter", xe, l, ie), Le.target = F, Le.relatedTarget = Un, se = Le), Un = se, ye && xe)
              t: {
                for (Le = ye, z = xe, M = 0, F = Le; F; F = ho(F))
                  M++;
                for (F = 0, se = z; se; se = ho(se))
                  F++;
                for (; 0 < M - F; )
                  Le = ho(Le), M--;
                for (; 0 < F - M; )
                  z = ho(z), F--;
                for (; M--; ) {
                  if (Le === z || z !== null && Le === z.alternate)
                    break t;
                  Le = ho(Le), z = ho(z);
                }
                Le = null;
              }
            else
              Le = null;
            ye !== null && yd(le, te, ye, Le, !1), xe !== null && Un !== null && yd(le, Un, xe, Le, !0);
          }
        }
        e: {
          if (te = V ? uu(V) : window, ye = te.nodeName && te.nodeName.toLowerCase(), ye === "select" || ye === "input" && te.type === "file")
            var Ue = cd;
          else if (sd(te))
            if (fd)
              Ue = wy;
            else {
              Ue = Cy;
              var qe = Ry;
            }
          else
            (ye = te.nodeName) && ye.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (Ue = Ty);
          if (Ue && (Ue = Ue(n, V))) {
            gv(le, Ue, l, ie);
            break e;
          }
          qe && qe(n, te, V), n === "focusout" && (qe = te._wrapperState) && qe.controlled && te.type === "number" && Or(te, "number", te.value);
        }
        switch (qe = V ? uu(V) : window, n) {
          case "focusin":
            (sd(qe) || qe.contentEditable === "true") && (vo = qe, xl = V, Es = null);
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
            pd = !1, Dv(le, l, ie);
            break;
          case "selectionchange":
            if (wc)
              break;
          case "keydown":
          case "keyup":
            Dv(le, l, ie);
        }
        var Oe;
        if (Cn)
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
          bl ? mv(n, l) && (Je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Je = "onCompositionStart");
        Je && (ms && l.locale !== "ko" && (bl || Je !== "onCompositionStart" ? Je === "onCompositionEnd" && bl && (Oe = b()) : (ii = ie, nu = "value" in ii ? ii.value : ii.textContent, bl = !0)), qe = Dc(V, Je), 0 < qe.length && (Je = new cv(Je, n, null, l, ie), le.push({ event: Je, listeners: qe }), Oe ? Je.data = Oe : (Oe = yv(l), Oe !== null && (Je.data = Oe)))), (Oe = ud ? gy(n, l) : Sy(n, l)) && (V = Dc(V, "onBeforeInput"), 0 < V.length && (ie = new cv("onBeforeInput", "beforeinput", null, l, ie), le.push({ event: ie, listeners: V }), ie.data = Oe));
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
      c.tag === 5 && d !== null && (c = d, d = ti(n, l), d != null && u.unshift(ou(n, d, c)), d = ti(n, r), d != null && u.push(ou(n, d, c))), n = n.return;
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
      var w = l, L = w.alternate, V = w.stateNode;
      if (L !== null && L === u)
        break;
      w.tag === 5 && V !== null && (w = V, c ? (L = ti(l, d), L != null && S.unshift(ou(l, L, w))) : c || (L = ti(l, d), L != null && S.push(ou(l, L, w)))), l = l.return;
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
      throw Error(m(425));
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
            n.removeChild(c), Ua(r);
            return;
          }
          u--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    Ua(r);
  }
  function Sa(n) {
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
  var Ji = Math.random().toString(36).slice(2), za = "__reactFiber$" + Ji, ks = "__reactProps$" + Ji, oi = "__reactContainer$" + Ji, wd = "__reactEvents$" + Ji, Oy = "__reactListeners$" + Ji, Dy = "__reactHandles$" + Ji;
  function Ki(n) {
    var r = n[za];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[oi] || l[za]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Ds(n); n !== null; ) {
            if (l = n[za])
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
    return n = n[za] || n[oi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function uu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(m(33));
  }
  function _c(n) {
    return n[ks] || null;
  }
  var He = [], ui = -1;
  function Zt(n) {
    return { current: n };
  }
  function Me(n) {
    0 > ui || (n.current = He[ui], He[ui] = null, ui--);
  }
  function Ut(n, r) {
    ui++, He[ui] = n.current, n.current = r;
  }
  var Aa = {}, Jn = Zt(Aa), tt = Zt(!1), _r = Aa;
  function Ea(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Aa;
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
  function Jr() {
    Me(tt), Me(Jn);
  }
  function Ei(n, r, l) {
    if (Jn.current !== Aa)
      throw Error(m(168));
    Ut(Jn, r), Ut(tt, l);
  }
  function Dl(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(m(108, St(n) || "Unknown", c));
    return D({}, l, u);
  }
  function yo(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Aa, _r = Jn.current, Ut(Jn, n), Ut(tt, tt.current), !0;
  }
  function jv(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(m(169));
    l ? (n = Dl(n, r, _r), u.__reactInternalMemoizedMergedChildContext = n, Me(tt), Me(Jn), Ut(Jn, n)) : Me(tt), Ut(tt, l);
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
      var n = 0, r = Tt;
      try {
        var l = Zi;
        for (Tt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Zi = null, kl = !1;
      } catch (c) {
        throw Zi !== null && (Zi = Zi.slice(n + 1)), en(ts, Ri), c;
      } finally {
        Tt = r, or = !1;
      }
    }
    return null;
  }
  var Ia = [], _l = 0, Fa = null, go = 0, Kr = [], Zr = 0, si = null, $r = 1, ur = "";
  function So(n, r) {
    Ia[_l++] = go, Ia[_l++] = Fa, Fa = n, go = r;
  }
  function Ll(n, r, l) {
    Kr[Zr++] = $r, Kr[Zr++] = ur, Kr[Zr++] = si, si = n;
    var u = $r;
    n = ur;
    var c = 32 - kr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var S = c - c % 5;
      d = (u & (1 << S) - 1).toString(32), u >>= S, c -= S, $r = 1 << 32 - kr(r) + c | l << c | u, ur = d + n;
    } else
      $r = 1 << d | l << c | u, ur = n;
  }
  function Nc(n) {
    n.return !== null && (So(n, 1), Ll(n, 1, 0));
  }
  function Mc(n) {
    for (; n === Fa; )
      Fa = Ia[--_l], Ia[_l] = null, go = Ia[--_l], Ia[_l] = null;
    for (; n === si; )
      si = Kr[--Zr], Kr[Zr] = null, ur = Kr[--Zr], Kr[Zr] = null, $r = Kr[--Zr], Kr[Zr] = null;
  }
  var Ra = null, Ca = null, sn = !1, ja = null;
  function bd(n, r) {
    var l = qa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ra = n, Ca = Sa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ra = n, Ca = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = si !== null ? { id: $r, overflow: ur } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = qa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ra = n, Ca = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Od(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Uc(n) {
    if (sn) {
      var r = Ca;
      if (r) {
        var l = r;
        if (!xd(n, r)) {
          if (Od(n))
            throw Error(m(418));
          r = Sa(l.nextSibling);
          var u = Ra;
          r && xd(n, r) ? bd(u, l) : (n.flags = n.flags & -4097 | 2, sn = !1, Ra = n);
        }
      } else {
        if (Od(n))
          throw Error(m(418));
        n.flags = n.flags & -4097 | 2, sn = !1, Ra = n;
      }
    }
  }
  function Dd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ra = n;
  }
  function zc(n) {
    if (n !== Ra)
      return !1;
    if (!sn)
      return Dd(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !mo(n.type, n.memoizedProps)), r && (r = Ca)) {
      if (Od(n))
        throw Pv(), Error(m(418));
      for (; r; )
        bd(n, r), r = Sa(r.nextSibling);
    }
    if (Dd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(m(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ca = Sa(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ca = null;
      }
    } else
      Ca = Ra ? Sa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Pv() {
    for (var n = Ca; n; )
      n = Sa(n.nextSibling);
  }
  function su() {
    Ca = Ra = null, sn = !1;
  }
  function Hn(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var ky = Be.ReactCurrentBatchConfig;
  function ea(n, r) {
    if (n && n.defaultProps) {
      r = D({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var cu = Zt(null), Ci = null, fu = null, _s = null;
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
    Ci = n, _s = fu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (ra = !0), n.firstContext = null);
  }
  function fe(n) {
    var r = n._currentValue;
    if (_s !== n)
      if (n = { context: n, memoizedValue: r, next: null }, fu === null) {
        if (Ci === null)
          throw Error(m(308));
        fu = n, Ci.dependencies = { lanes: 0, firstContext: n };
      } else
        fu = fu.next = n;
    return r;
  }
  var wr = null;
  function Ta(n) {
    wr === null ? wr = [n] : wr.push(n);
  }
  function Vv(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ta(r)) : (l.next = c.next, c.next = l), r.interleaved = l, $i(n, u);
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
  function Bv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function rn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ul(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, Et & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, $i(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Ta(u)) : (r.next = c.next, c.next = r), u.interleaved = r, $i(n, l);
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
      var L = w, V = L.next;
      L.next = null, S === null ? d = V : S.next = V, S = L;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, w = ie.lastBaseUpdate, w !== S && (w === null ? ie.firstBaseUpdate = V : w.next = V, ie.lastBaseUpdate = L));
    }
    if (d !== null) {
      var le = c.baseState;
      S = 0, ie = V = L = null, w = d;
      do {
        var te = w.lane, ye = w.eventTime;
        if ((u & te) === te) {
          ie !== null && (ie = ie.next = {
            eventTime: ye,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var xe = n, Le = w;
            switch (te = r, ye = l, Le.tag) {
              case 1:
                if (xe = Le.payload, typeof xe == "function") {
                  le = xe.call(ye, le, te);
                  break e;
                }
                le = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = Le.payload, te = typeof xe == "function" ? xe.call(ye, le, te) : xe, te == null)
                  break e;
                le = D({}, le, te);
                break e;
              case 2:
                Ml = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, te = c.effects, te === null ? c.effects = [w] : te.push(w));
        } else
          ye = { eventTime: ye, lane: te, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, ie === null ? (V = ie = ye, L = le) : ie = ie.next = ye, S |= te;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null)
            break;
          te = w, w = te.next, te.next = null, c.lastBaseUpdate = te, c.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (L = le), c.baseState = L, c.firstBaseUpdate = V, c.lastBaseUpdate = ie, r = c.shared.interleaved, r !== null) {
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
            throw Error(m(191, c));
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
    var u = $n(), c = rl(n), d = rn(u, c);
    d.payload = r, l != null && (d.callback = l), r = Ul(n, d, c), r !== null && (Sn(r, n, c, u), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = $n(), c = rl(n), d = rn(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ul(n, d, c), r !== null && (Sn(r, n, c, u), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = $n(), u = rl(n), c = rn(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Ul(n, c, u), r !== null && (Sn(r, n, u, l), Ac(r, n, u));
  } };
  function Wv(n, r, l, u, c, d, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, S) : r.prototype && r.prototype.isPureReactComponent ? !iu(l, u) || !iu(c, d) : !0;
  }
  function qv(n, r, l) {
    var u = !1, c = Aa, d = r.contextType;
    return typeof d == "object" && d !== null ? d = fe(d) : (c = jn(r) ? _r : Jn.current, u = r.contextTypes, d = (u = u != null) ? Ea(n, c) : Aa), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Xv(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function Md(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Eo, Ld(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = fe(d) : (d = jn(r) ? _r : Jn.current, c.context = Ea(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Nd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), Ls(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function pu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(m(309));
          var u = l.stateNode;
        }
        if (!u)
          throw Error(m(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(S) {
          var w = c.refs;
          w === Eo && (w = c.refs = {}), S === null ? delete w[d] : w[d] = S;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(m(284));
      if (!l._owner)
        throw Error(m(290, n));
    }
    return n;
  }
  function Ns(n, r) {
    throw n = Object.prototype.toString.call(r), Error(m(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Gv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Qv(n) {
    function r(z, M) {
      if (n) {
        var F = z.deletions;
        F === null ? (z.deletions = [M], z.flags |= 16) : F.push(M);
      }
    }
    function l(z, M) {
      if (!n)
        return null;
      for (; M !== null; )
        r(z, M), M = M.sibling;
      return null;
    }
    function u(z, M) {
      for (z = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
      return z;
    }
    function c(z, M) {
      return z = Vl(z, M), z.index = 0, z.sibling = null, z;
    }
    function d(z, M, F) {
      return z.index = F, n ? (F = z.alternate, F !== null ? (F = F.index, F < M ? (z.flags |= 2, M) : F) : (z.flags |= 2, M)) : (z.flags |= 1048576, M);
    }
    function S(z) {
      return n && z.alternate === null && (z.flags |= 2), z;
    }
    function w(z, M, F, se) {
      return M === null || M.tag !== 6 ? (M = Sf(F, z.mode, se), M.return = z, M) : (M = c(M, F), M.return = z, M);
    }
    function L(z, M, F, se) {
      var Ue = F.type;
      return Ue === pt ? ie(z, M, F.props.children, se, F.key) : M !== null && (M.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === kt && Gv(Ue) === M.type) ? (se = c(M, F.props), se.ref = pu(z, M, F), se.return = z, se) : (se = yf(F.type, F.key, F.props, null, z.mode, se), se.ref = pu(z, M, F), se.return = z, se);
    }
    function V(z, M, F, se) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== F.containerInfo || M.stateNode.implementation !== F.implementation ? (M = Ks(F, z.mode, se), M.return = z, M) : (M = c(M, F.children || []), M.return = z, M);
    }
    function ie(z, M, F, se, Ue) {
      return M === null || M.tag !== 7 ? (M = zo(F, z.mode, se, Ue), M.return = z, M) : (M = c(M, F), M.return = z, M);
    }
    function le(z, M, F) {
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return M = Sf("" + M, z.mode, F), M.return = z, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Dt:
            return F = yf(M.type, M.key, M.props, null, z.mode, F), F.ref = pu(z, null, M), F.return = z, F;
          case _e:
            return M = Ks(M, z.mode, F), M.return = z, M;
          case kt:
            var se = M._init;
            return le(z, se(M._payload), F);
        }
        if (Sr(M) || we(M))
          return M = zo(M, z.mode, F, null), M.return = z, M;
        Ns(z, M);
      }
      return null;
    }
    function te(z, M, F, se) {
      var Ue = M !== null ? M.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return Ue !== null ? null : w(z, M, "" + F, se);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Dt:
            return F.key === Ue ? L(z, M, F, se) : null;
          case _e:
            return F.key === Ue ? V(z, M, F, se) : null;
          case kt:
            return Ue = F._init, te(
              z,
              M,
              Ue(F._payload),
              se
            );
        }
        if (Sr(F) || we(F))
          return Ue !== null ? null : ie(z, M, F, se, null);
        Ns(z, F);
      }
      return null;
    }
    function ye(z, M, F, se, Ue) {
      if (typeof se == "string" && se !== "" || typeof se == "number")
        return z = z.get(F) || null, w(M, z, "" + se, Ue);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case Dt:
            return z = z.get(se.key === null ? F : se.key) || null, L(M, z, se, Ue);
          case _e:
            return z = z.get(se.key === null ? F : se.key) || null, V(M, z, se, Ue);
          case kt:
            var qe = se._init;
            return ye(z, M, F, qe(se._payload), Ue);
        }
        if (Sr(se) || we(se))
          return z = z.get(F) || null, ie(M, z, se, Ue, null);
        Ns(M, se);
      }
      return null;
    }
    function xe(z, M, F, se) {
      for (var Ue = null, qe = null, Oe = M, Je = M = 0, Xn = null; Oe !== null && Je < F.length; Je++) {
        Oe.index > Je ? (Xn = Oe, Oe = null) : Xn = Oe.sibling;
        var zt = te(z, Oe, F[Je], se);
        if (zt === null) {
          Oe === null && (Oe = Xn);
          break;
        }
        n && Oe && zt.alternate === null && r(z, Oe), M = d(zt, M, Je), qe === null ? Ue = zt : qe.sibling = zt, qe = zt, Oe = Xn;
      }
      if (Je === F.length)
        return l(z, Oe), sn && So(z, Je), Ue;
      if (Oe === null) {
        for (; Je < F.length; Je++)
          Oe = le(z, F[Je], se), Oe !== null && (M = d(Oe, M, Je), qe === null ? Ue = Oe : qe.sibling = Oe, qe = Oe);
        return sn && So(z, Je), Ue;
      }
      for (Oe = u(z, Oe); Je < F.length; Je++)
        Xn = ye(Oe, z, Je, F[Je], se), Xn !== null && (n && Xn.alternate !== null && Oe.delete(Xn.key === null ? Je : Xn.key), M = d(Xn, M, Je), qe === null ? Ue = Xn : qe.sibling = Xn, qe = Xn);
      return n && Oe.forEach(function(al) {
        return r(z, al);
      }), sn && So(z, Je), Ue;
    }
    function Le(z, M, F, se) {
      var Ue = we(F);
      if (typeof Ue != "function")
        throw Error(m(150));
      if (F = Ue.call(F), F == null)
        throw Error(m(151));
      for (var qe = Ue = null, Oe = M, Je = M = 0, Xn = null, zt = F.next(); Oe !== null && !zt.done; Je++, zt = F.next()) {
        Oe.index > Je ? (Xn = Oe, Oe = null) : Xn = Oe.sibling;
        var al = te(z, Oe, zt.value, se);
        if (al === null) {
          Oe === null && (Oe = Xn);
          break;
        }
        n && Oe && al.alternate === null && r(z, Oe), M = d(al, M, Je), qe === null ? Ue = al : qe.sibling = al, qe = al, Oe = Xn;
      }
      if (zt.done)
        return l(
          z,
          Oe
        ), sn && So(z, Je), Ue;
      if (Oe === null) {
        for (; !zt.done; Je++, zt = F.next())
          zt = le(z, zt.value, se), zt !== null && (M = d(zt, M, Je), qe === null ? Ue = zt : qe.sibling = zt, qe = zt);
        return sn && So(z, Je), Ue;
      }
      for (Oe = u(z, Oe); !zt.done; Je++, zt = F.next())
        zt = ye(Oe, z, Je, zt.value, se), zt !== null && (n && zt.alternate !== null && Oe.delete(zt.key === null ? Je : zt.key), M = d(zt, M, Je), qe === null ? Ue = zt : qe.sibling = zt, qe = zt);
      return n && Oe.forEach(function(Gy) {
        return r(z, Gy);
      }), sn && So(z, Je), Ue;
    }
    function Un(z, M, F, se) {
      if (typeof F == "object" && F !== null && F.type === pt && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Dt:
            e: {
              for (var Ue = F.key, qe = M; qe !== null; ) {
                if (qe.key === Ue) {
                  if (Ue = F.type, Ue === pt) {
                    if (qe.tag === 7) {
                      l(z, qe.sibling), M = c(qe, F.props.children), M.return = z, z = M;
                      break e;
                    }
                  } else if (qe.elementType === Ue || typeof Ue == "object" && Ue !== null && Ue.$$typeof === kt && Gv(Ue) === qe.type) {
                    l(z, qe.sibling), M = c(qe, F.props), M.ref = pu(z, qe, F), M.return = z, z = M;
                    break e;
                  }
                  l(z, qe);
                  break;
                } else
                  r(z, qe);
                qe = qe.sibling;
              }
              F.type === pt ? (M = zo(F.props.children, z.mode, se, F.key), M.return = z, z = M) : (se = yf(F.type, F.key, F.props, null, z.mode, se), se.ref = pu(z, M, F), se.return = z, z = se);
            }
            return S(z);
          case _e:
            e: {
              for (qe = F.key; M !== null; ) {
                if (M.key === qe)
                  if (M.tag === 4 && M.stateNode.containerInfo === F.containerInfo && M.stateNode.implementation === F.implementation) {
                    l(z, M.sibling), M = c(M, F.children || []), M.return = z, z = M;
                    break e;
                  } else {
                    l(z, M);
                    break;
                  }
                else
                  r(z, M);
                M = M.sibling;
              }
              M = Ks(F, z.mode, se), M.return = z, z = M;
            }
            return S(z);
          case kt:
            return qe = F._init, Un(z, M, qe(F._payload), se);
        }
        if (Sr(F))
          return xe(z, M, F, se);
        if (we(F))
          return Le(z, M, F, se);
        Ns(z, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, M !== null && M.tag === 6 ? (l(z, M.sibling), M = c(M, F), M.return = z, z = M) : (l(z, M), M = Sf(F, z.mode, se), M.return = z, z = M), S(z)) : l(z, M);
    }
    return Un;
  }
  var vu = Qv(!0), Jv = Qv(!1), Ms = {}, Ti = Zt(Ms), hu = Zt(Ms), Us = Zt(Ms);
  function zl(n) {
    if (n === Ms)
      throw Error(m(174));
    return n;
  }
  function Ud(n, r) {
    switch (Ut(Us, r), Ut(hu, n), Ut(Ti, Ms), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Dr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Dr(r, n);
    }
    Me(Ti), Ut(Ti, r);
  }
  function mu() {
    Me(Ti), Me(hu), Me(Us);
  }
  function Fc(n) {
    zl(Us.current);
    var r = zl(Ti.current), l = Dr(r, n.type);
    r !== l && (Ut(hu, n), Ut(Ti, l));
  }
  function Pe(n) {
    hu.current === n && (Me(Ti), Me(hu));
  }
  var ze = Zt(0);
  function Nt(n) {
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
  var Tn = [];
  function Ha() {
    for (var n = 0; n < Tn.length; n++)
      Tn[n]._workInProgressVersionPrimary = null;
    Tn.length = 0;
  }
  var zs = Be.ReactCurrentDispatcher, zd = Be.ReactCurrentBatchConfig, Ro = 0, gn = null, _n = null, Q = null, Ln = !1, We = !1, wi = 0, el = 0;
  function wn() {
    throw Error(m(321));
  }
  function Pa(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!li(n[l], r[l]))
        return !1;
    return !0;
  }
  function Co(n, r, l, u, c, d) {
    if (Ro = d, gn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, zs.current = n === null || n.memoizedState === null ? _y : Ly, n = l(u, c), We) {
      d = 0;
      do {
        if (We = !1, wi = 0, 25 <= d)
          throw Error(m(301));
        d += 1, Q = _n = null, r.updateQueue = null, zs.current = Ny, n = l(u, c);
      } while (We);
    }
    if (zs.current = Zc, r = _n !== null && _n.next !== null, Ro = 0, Q = _n = gn = null, Ln = !1, r)
      throw Error(m(300));
    return n;
  }
  function Al() {
    var n = wi !== 0;
    return wi = 0, n;
  }
  function ta() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Q === null ? gn.memoizedState = Q = n : Q = Q.next = n, Q;
  }
  function na() {
    if (_n === null) {
      var n = gn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = _n.next;
    var r = Q === null ? gn.memoizedState : Q.next;
    if (r !== null)
      Q = r, _n = n;
    else {
      if (n === null)
        throw Error(m(310));
      _n = n, n = { memoizedState: _n.memoizedState, baseState: _n.baseState, baseQueue: _n.baseQueue, queue: _n.queue, next: null }, Q === null ? gn.memoizedState = Q = n : Q = Q.next = n;
    }
    return Q;
  }
  function To(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function As(n) {
    var r = na(), l = r.queue;
    if (l === null)
      throw Error(m(311));
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
      var w = S = null, L = null, V = d;
      do {
        var ie = V.lane;
        if ((Ro & ie) === ie)
          L !== null && (L = L.next = { lane: 0, action: V.action, hasEagerState: V.hasEagerState, eagerState: V.eagerState, next: null }), u = V.hasEagerState ? V.eagerState : n(u, V.action);
        else {
          var le = {
            lane: ie,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          };
          L === null ? (w = L = le, S = u) : L = L.next = le, gn.lanes |= ie, Lo |= ie;
        }
        V = V.next;
      } while (V !== null && V !== d);
      L === null ? S = u : L.next = w, li(u, r.memoizedState) || (ra = !0), r.memoizedState = u, r.baseState = S, r.baseQueue = L, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, gn.lanes |= d, Lo |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Is(n) {
    var r = na(), l = r.queue;
    if (l === null)
      throw Error(m(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var S = c = c.next;
      do
        d = n(d, S.action), S = S.next;
      while (S !== c);
      li(d, r.memoizedState) || (ra = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function jc() {
  }
  function Hc(n, r) {
    var l = gn, u = na(), c = r(), d = !li(u.memoizedState, c);
    if (d && (u.memoizedState = c, ra = !0), u = u.queue, Fs(Bc.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || Q !== null && Q.memoizedState.tag & 1) {
      if (l.flags |= 2048, wo(9, Vc.bind(null, l, u, c, r), void 0, null), xn === null)
        throw Error(m(349));
      Ro & 30 || Pc(l, r, c);
    }
    return c;
  }
  function Pc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = gn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, gn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Vc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Yc(r) && Wc(n);
  }
  function Bc(n, r, l) {
    return l(function() {
      Yc(r) && Wc(n);
    });
  }
  function Yc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !li(n, l);
    } catch {
      return !0;
    }
  }
  function Wc(n) {
    var r = $i(n, 1);
    r !== null && Sn(r, n, 1, -1);
  }
  function qc(n) {
    var r = ta();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: To, lastRenderedState: n }, r.queue = n, n = n.dispatch = Kc.bind(null, gn, n), [r.memoizedState, n];
  }
  function wo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = gn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, gn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Xc() {
    return na().memoizedState;
  }
  function yu(n, r, l, u) {
    var c = ta();
    gn.flags |= n, c.memoizedState = wo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function bo(n, r, l, u) {
    var c = na();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (_n !== null) {
      var S = _n.memoizedState;
      if (d = S.destroy, u !== null && Pa(u, S.deps)) {
        c.memoizedState = wo(r, l, d, u);
        return;
      }
    }
    gn.flags |= n, c.memoizedState = wo(1 | r, l, d, u);
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
    var l = na();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Pa(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function gu(n, r) {
    var l = na();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Pa(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Il(n, r, l) {
    return Ro & 21 ? (li(l, r) || (l = oo(), gn.lanes |= l, Lo |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, ra = !0), n.memoizedState = l);
  }
  function wa(n, r) {
    var l = Tt;
    Tt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = zd.transition;
    zd.transition = {};
    try {
      n(!1), r();
    } finally {
      Tt = l, zd.transition = u;
    }
  }
  function Kv() {
    return na().memoizedState;
  }
  function an(n, r, l) {
    var u = rl(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, js(n))
      Su(r, l);
    else if (l = Vv(n, r, l, u), l !== null) {
      var c = $n();
      Sn(l, n, u, c), Hs(l, r, u);
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
          if (c.hasEagerState = !0, c.eagerState = w, li(w, S)) {
            var L = r.interleaved;
            L === null ? (c.next = c, Ta(r)) : (c.next = L.next, L.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Vv(n, r, c, u), l !== null && (c = $n(), Sn(l, n, u, c), Hs(l, r, u));
    }
  }
  function js(n) {
    var r = n.alternate;
    return n === gn || r !== null && r === gn;
  }
  function Su(n, r) {
    We = Ln = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Hs(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, os(n, l);
    }
  }
  var Zc = { readContext: fe, useCallback: wn, useContext: wn, useEffect: wn, useImperativeHandle: wn, useInsertionEffect: wn, useLayoutEffect: wn, useMemo: wn, useReducer: wn, useRef: wn, useState: wn, useDebugValue: wn, useDeferredValue: wn, useTransition: wn, useMutableSource: wn, useSyncExternalStore: wn, useId: wn, unstable_isNewReconciler: !1 }, _y = { readContext: fe, useCallback: function(n, r) {
    return ta().memoizedState = [n, r === void 0 ? null : r], n;
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
    var l = ta();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = ta();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = an.bind(null, gn, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = ta();
    return n = { current: n }, r.memoizedState = n;
  }, useState: qc, useDebugValue: Oo, useDeferredValue: function(n) {
    return ta().memoizedState = n;
  }, useTransition: function() {
    var n = qc(!1), r = n[0];
    return n = wa.bind(null, n[1]), ta().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = gn, c = ta();
    if (sn) {
      if (l === void 0)
        throw Error(m(407));
      l = l();
    } else {
      if (l = r(), xn === null)
        throw Error(m(349));
      Ro & 30 || Pc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, xo(Bc.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, wo(9, Vc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ta(), r = xn.identifierPrefix;
    if (sn) {
      var l = ur, u = $r;
      l = (u & ~(1 << 32 - kr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = wi++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = el++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ly = {
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
      var r = na();
      return Il(r, _n.memoizedState, n);
    },
    useTransition: function() {
      var n = As(To)[0], r = na().memoizedState;
      return [n, r];
    },
    useMutableSource: jc,
    useSyncExternalStore: Hc,
    useId: Kv,
    unstable_isNewReconciler: !1
  }, Ny = { readContext: fe, useCallback: Id, useContext: fe, useEffect: Fs, useImperativeHandle: Ad, useInsertionEffect: Gc, useLayoutEffect: Qc, useMemo: gu, useReducer: Is, useRef: Xc, useState: function() {
    return Is(To);
  }, useDebugValue: Oo, useDeferredValue: function(n) {
    var r = na();
    return _n === null ? r.memoizedState = n : Il(r, _n.memoizedState, n);
  }, useTransition: function() {
    var n = Is(To)[0], r = na().memoizedState;
    return [n, r];
  }, useMutableSource: jc, useSyncExternalStore: Hc, useId: Kv, unstable_isNewReconciler: !1 };
  function Fl(n, r) {
    try {
      var l = "", u = r;
      do
        l += gt(u), u = u.return;
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
    l = rn(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      ff || (ff = !0, Xd = u), Ps(n, r);
    }, l;
  }
  function eh(n, r, l) {
    l = rn(-1, l), l.tag = 3;
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
      Ps(n, r), typeof u != "function" && (Ya === null ? Ya = /* @__PURE__ */ new Set([this]) : Ya.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), l;
  }
  function Vs(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Zv();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else
      c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = Vy.bind(null, n, r, l), r.then(n, n));
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
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = rn(-1, 1), r.tag = 2, Ul(l, r, 1))), l.lanes |= 1), n);
  }
  var nh = Be.ReactCurrentOwner, ra = !1;
  function Nn(n, r, l, u) {
    r.child = n === null ? Jv(r, null, l, u) : vu(r, n.child, l, u);
  }
  function Eu(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return kn(r, c), u = Co(n, r, l, u, d, c), l = Al(), n !== null && !ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Mn(n, r, c)) : (sn && l && Nc(r), r.flags |= 1, Nn(n, r, u, c), r.child);
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
    return r.flags |= 1, n = Vl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function $c(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (iu(d, u) && n.ref === r.ref)
        if (ra = !1, r.pendingProps = u = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (ra = !0);
        else
          return r.lanes = n.lanes, Mn(n, r, c);
    }
    return at(n, r, l, u, c);
  }
  function aa(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ut(_u, ia), ia |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ut(_u, ia), ia |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, Ut(_u, ia), ia |= u;
      }
    else
      d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, Ut(_u, ia), ia |= u;
    return Nn(n, r, c, l), r.child;
  }
  function Do(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function at(n, r, l, u, c) {
    var d = jn(l) ? _r : Jn.current;
    return d = Ea(r, d), kn(r, c), l = Co(n, r, l, u, d, c), u = Al(), n !== null && !ra ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Mn(n, r, c)) : (sn && u && Nc(r), r.flags |= 1, Nn(n, r, l, c), r.child);
  }
  function Bs(n, r, l, u, c) {
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
      var L = S.context, V = l.contextType;
      typeof V == "object" && V !== null ? V = fe(V) : (V = jn(l) ? _r : Jn.current, V = Ea(r, V));
      var ie = l.getDerivedStateFromProps, le = typeof ie == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      le || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== u || L !== V) && Xv(r, S, u, V), Ml = !1;
      var te = r.memoizedState;
      S.state = te, Ls(r, u, S, c), L = r.memoizedState, w !== u || te !== L || tt.current || Ml ? (typeof ie == "function" && (Nd(r, l, ie, u), L = r.memoizedState), (w = Ml || Wv(r, l, w, u, te, L, V)) ? (le || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = L), S.props = u, S.state = L, S.context = V, u = w) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      S = r.stateNode, Bv(n, r), w = r.memoizedProps, V = r.type === r.elementType ? w : ea(r.type, w), S.props = V, le = r.pendingProps, te = S.context, L = l.contextType, typeof L == "object" && L !== null ? L = fe(L) : (L = jn(l) ? _r : Jn.current, L = Ea(r, L));
      var ye = l.getDerivedStateFromProps;
      (ie = typeof ye == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== le || te !== L) && Xv(r, S, u, L), Ml = !1, te = r.memoizedState, S.state = te, Ls(r, u, S, c);
      var xe = r.memoizedState;
      w !== le || te !== xe || tt.current || Ml ? (typeof ye == "function" && (Nd(r, l, ye, u), xe = r.memoizedState), (V = Ml || Wv(r, l, V, u, te, xe, L) || !1) ? (ie || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(u, xe, L), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(u, xe, L)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = xe), S.props = u, S.state = xe, S.context = L, u = V) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && te === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && te === n.memoizedState || (r.flags |= 1024), u = !1);
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
  function My(n) {
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
    if ((w = S) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ut(ze, c & 1), n === null)
      return Uc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, S = { mode: "hidden", children: S }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = S) : d = gf(S, u, 0, null), n = zo(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = ko(l), r.memoizedState = Ys, n) : tf(r, S));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null))
      return Hd(n, r, S, u, w, c, l);
    if (d) {
      d = u.fallback, S = r.mode, c = n.child, w = c.sibling;
      var L = { mode: "hidden", children: u.children };
      return !(S & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = L, r.deletions = null) : (u = Vl(c, L), u.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Vl(w, d) : (d = zo(d, S, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, S = n.child.memoizedState, S = S === null ? ko(l) : { baseLanes: S.baseLanes | l, cachePool: null, transitions: S.transitions }, d.memoizedState = S, d.childLanes = n.childLanes & ~l, r.memoizedState = Ys, u;
    }
    return d = n.child, n = d.sibling, u = Vl(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function tf(n, r) {
    return r = gf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function nf(n, r, l, u) {
    return u !== null && Hn(u), vu(r, n.child, null, l), n = tf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Hd(n, r, l, u, c, d, S) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = Fd(Error(m(422))), nf(n, r, S, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = gf({ mode: "visible", children: u.children }, c, 0, null), d = zo(d, c, S, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && vu(r, n.child, null, S), r.child.memoizedState = ko(S), r.memoizedState = Ys, d);
    if (!(r.mode & 1))
      return nf(n, r, S, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var w = u.dgst;
      return u = w, d = Error(m(419)), u = Fd(d, u, void 0), nf(n, r, S, u);
    }
    if (w = (S & n.childLanes) !== 0, ra || w) {
      if (u = xn, u !== null) {
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
        c = c & (u.suspendedLanes | S) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, $i(n, c), Sn(u, n, c, -1));
      }
      return Js(), u = Fd(Error(m(421))), nf(n, r, S, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Kd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Ca = Sa(c.nextSibling), Ra = r, sn = !0, ja = null, n !== null && (Kr[Zr++] = $r, Kr[Zr++] = ur, Kr[Zr++] = si, $r = n.id, ur = n.overflow, si = r), r = tf(r, u.children), r.flags |= 4096, r);
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
    if (Ut(ze, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Nt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), rf(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Nt(n) === null) {
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
      throw Error(m(153));
    if (r.child !== null) {
      for (n = r.child, l = Vl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Vl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tl(n, r, l) {
    switch (r.tag) {
      case 3:
        My(r), su();
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
        Ut(cu, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ut(ze, ze.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ah(n, r, l) : (Ut(ze, ze.current & 1), n = Mn(n, r, l), n !== null ? n.sibling : null);
        Ut(ze, ze.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return Pd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ut(ze, ze.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, aa(n, r, l);
    }
    return Mn(n, r, l);
  }
  var bi, Ru, Cu, Va;
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
          c = Rn(n, c), u = Rn(n, u), d = [];
          break;
        case "select":
          c = D({}, c, { value: void 0 }), u = D({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = fa(n, c), u = fa(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = kc);
      }
      Mt(l, u);
      var S;
      l = null;
      for (V in c)
        if (!u.hasOwnProperty(V) && c.hasOwnProperty(V) && c[V] != null)
          if (V === "style") {
            var w = c[V];
            for (S in w)
              w.hasOwnProperty(S) && (l || (l = {}), l[S] = "");
          } else
            V !== "dangerouslySetInnerHTML" && V !== "children" && V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && V !== "autoFocus" && (x.hasOwnProperty(V) ? d || (d = []) : (d = d || []).push(V, null));
      for (V in u) {
        var L = u[V];
        if (w = c != null ? c[V] : void 0, u.hasOwnProperty(V) && L !== w && (L != null || w != null))
          if (V === "style")
            if (w) {
              for (S in w)
                !w.hasOwnProperty(S) || L && L.hasOwnProperty(S) || (l || (l = {}), l[S] = "");
              for (S in L)
                L.hasOwnProperty(S) && w[S] !== L[S] && (l || (l = {}), l[S] = L[S]);
            } else
              l || (d || (d = []), d.push(
                V,
                l
              )), l = L;
          else
            V === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, w = w ? w.__html : void 0, L != null && w !== L && (d = d || []).push(V, L)) : V === "children" ? typeof L != "string" && typeof L != "number" || (d = d || []).push(V, "" + L) : V !== "suppressContentEditableWarning" && V !== "suppressHydrationWarning" && (x.hasOwnProperty(V) ? (L != null && V === "onScroll" && Kt("scroll", n), d || w === L || (d = [])) : (d = d || []).push(V, L));
      }
      l && (d = d || []).push("style", l);
      var V = d;
      (r.updateQueue = V) && (r.flags |= 4);
    }
  }, Va = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function bn(n, r) {
    if (!sn)
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
  function Uy(n, r, l) {
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
        return jn(r.type) && Jr(), br(r), null;
      case 3:
        return u = r.stateNode, mu(), Me(tt), Me(Jn), Ha(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (zc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (Gd(ja), ja = null))), Ru(n, r), br(r), null;
      case 5:
        Pe(r);
        var c = zl(Us.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Cu(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(m(166));
            return br(r), null;
          }
          if (n = zl(Ti.current), zc(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[za] = r, u[ks] = d, n = (r.mode & 1) !== 0, l) {
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
                for (c = 0; c < Gi.length; c++)
                  Kt(Gi[c], u);
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
                ar(u, d), Kt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, Kt("invalid", u);
                break;
              case "textarea":
                da(u, d), Kt("invalid", u);
            }
            Mt(l, d), c = null;
            for (var S in d)
              if (d.hasOwnProperty(S)) {
                var w = d[S];
                S === "children" ? typeof w == "string" ? u.textContent !== w && (d.suppressHydrationWarning !== !0 && bs(u.textContent, w, n), c = ["children", w]) : typeof w == "number" && u.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && bs(
                  u.textContent,
                  w,
                  n
                ), c = ["children", "" + w]) : x.hasOwnProperty(S) && w != null && S === "onScroll" && Kt("scroll", u);
              }
            switch (l) {
              case "input":
                rr(u), In(u, d, !0);
                break;
              case "textarea":
                rr(u), pa(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = kc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            S = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ir(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = S.createElement(l, { is: u.is }) : (n = S.createElement(l), l === "select" && (S = n, u.multiple ? S.multiple = !0 : u.size && (S.size = u.size))) : n = S.createElementNS(n, l), n[za] = r, n[ks] = u, bi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = Dn(l, u), l) {
                case "dialog":
                  Kt("cancel", n), Kt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Kt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Gi.length; c++)
                    Kt(Gi[c], n);
                  c = u;
                  break;
                case "source":
                  Kt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Kt(
                    "error",
                    n
                  ), Kt("load", n), c = u;
                  break;
                case "details":
                  Kt("toggle", n), c = u;
                  break;
                case "input":
                  ar(n, u), c = Rn(n, u), Kt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = D({}, u, { value: void 0 }), Kt("invalid", n);
                  break;
                case "textarea":
                  da(n, u), c = fa(n, u), Kt("invalid", n);
                  break;
                default:
                  c = u;
              }
              Mt(l, c), w = c;
              for (d in w)
                if (w.hasOwnProperty(d)) {
                  var L = w[d];
                  d === "style" ? ct(n, L) : d === "dangerouslySetInnerHTML" ? (L = L ? L.__html : void 0, L != null && va(n, L)) : d === "children" ? typeof L == "string" ? (l !== "textarea" || L !== "") && ha(n, L) : typeof L == "number" && ha(n, "" + L) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (x.hasOwnProperty(d) ? L != null && d === "onScroll" && Kt("scroll", n) : L != null && Fe(n, d, L, S));
                }
              switch (l) {
                case "input":
                  rr(n), In(n, u, !1);
                  break;
                case "textarea":
                  rr(n), pa(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + ht(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? Bn(n, !!u.multiple, d, !1) : u.defaultValue != null && Bn(
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
          Va(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(m(166));
          if (l = zl(Us.current), zl(Ti.current), zc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[za] = r, (d = u.nodeValue !== l) && (n = Ra, n !== null))
              switch (n.tag) {
                case 3:
                  bs(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && bs(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[za] = r, r.stateNode = u;
        }
        return br(r), null;
      case 13:
        if (Me(ze), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && Ca !== null && r.mode & 1 && !(r.flags & 128))
            Pv(), su(), r.flags |= 98560, d = !1;
          else if (d = zc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(m(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(m(317));
              d[za] = r;
            } else
              su(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            br(r), d = !1;
          } else
            ja !== null && (Gd(ja), ja = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || ze.current & 1 ? Wn === 0 && (Wn = 3) : Js())), r.updateQueue !== null && (r.flags |= 4), br(r), null);
      case 4:
        return mu(), Ru(n, r), n === null && gi(r.stateNode.containerInfo), br(r), null;
      case 10:
        return _d(r.type._context), br(r), null;
      case 17:
        return jn(r.type) && Jr(), br(r), null;
      case 19:
        if (Me(ze), d = r.memoizedState, d === null)
          return br(r), null;
        if (u = (r.flags & 128) !== 0, S = d.rendering, S === null)
          if (u)
            bn(d, !1);
          else {
            if (Wn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = Nt(n), S !== null) {
                  for (r.flags |= 128, bn(d, !1), u = S.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    d = l, n = u, d.flags &= 14680066, S = d.alternate, S === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = S.childLanes, d.lanes = S.lanes, d.child = S.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = S.memoizedProps, d.memoizedState = S.memoizedState, d.updateQueue = S.updateQueue, d.type = S.type, n = S.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ut(ze, ze.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && nn() > Nu && (r.flags |= 128, u = !0, bn(d, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Nt(S), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), bn(d, !0), d.tail === null && d.tailMode === "hidden" && !S.alternate && !sn)
                return br(r), null;
            } else
              2 * nn() - d.renderingStartTime > Nu && l !== 1073741824 && (r.flags |= 128, u = !0, bn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (S.sibling = r.child, r.child = S) : (l = d.last, l !== null ? l.sibling = S : r.child = S, d.last = S);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = nn(), r.sibling = null, l = ze.current, Ut(ze, u ? l & 1 | 2 : l & 1), r) : (br(r), null);
      case 22:
      case 23:
        return hf(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? ia & 1073741824 && (br(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : br(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, r.tag));
  }
  function zy(n, r) {
    switch (Mc(r), r.tag) {
      case 1:
        return jn(r.type) && Jr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return mu(), Me(tt), Me(Jn), Ha(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Pe(r), null;
      case 13:
        if (Me(ze), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(m(340));
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
          On(n, r, u);
        }
      else
        l.current = null;
  }
  function Vd(n, r, l) {
    try {
      l();
    } catch (u) {
      On(n, r, u);
    }
  }
  var lf = !1;
  function Ay(n, r) {
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
            var S = 0, w = -1, L = -1, V = 0, ie = 0, le = n, te = null;
            t:
              for (; ; ) {
                for (var ye; le !== l || c !== 0 && le.nodeType !== 3 || (w = S + c), le !== d || u !== 0 && le.nodeType !== 3 || (L = S + u), le.nodeType === 3 && (S += le.nodeValue.length), (ye = le.firstChild) !== null; )
                  te = le, le = ye;
                for (; ; ) {
                  if (le === n)
                    break t;
                  if (te === l && ++V === c && (w = S), te === d && ++ie === u && (L = S), (ye = le.nextSibling) !== null)
                    break;
                  le = te, te = le.parentNode;
                }
                le = ye;
              }
            l = w === -1 || L === -1 ? null : { start: w, end: L };
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
            var xe = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (xe !== null) {
                    var Le = xe.memoizedProps, Un = xe.memoizedState, z = r.stateNode, M = z.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : ea(r.type, Le), Un);
                    z.__reactInternalSnapshotBeforeUpdate = M;
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
                  throw Error(m(163));
              }
          } catch (se) {
            On(r, r.return, se);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Te = n;
            break;
          }
          Te = r.return;
        }
    return xe = lf, lf = !1, xe;
  }
  function bu(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Vd(r, l, d);
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
    r !== null && (n.alternate = null, lh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[za], delete r[ks], delete r[wd], delete r[Oy], delete r[Dy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Bd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function oh(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Bd(n.return))
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
  var pn = null, Kn = !1;
  function Lr(n, r, l) {
    for (l = l.child; l !== null; )
      Ou(n, r, l), l = l.sibling;
  }
  function Ou(n, r, l) {
    if (qr && typeof qr.onCommitFiberUnmount == "function")
      try {
        qr.onCommitFiberUnmount(gl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        sr || wu(l, r);
      case 6:
        var u = pn, c = Kn;
        pn = null, Lr(n, r, l), pn = u, Kn = c, pn !== null && (Kn ? (n = pn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : pn.removeChild(l.stateNode));
        break;
      case 18:
        pn !== null && (Kn ? (n = pn, l = l.stateNode, n.nodeType === 8 ? Td(n.parentNode, l) : n.nodeType === 1 && Td(n, l), Ua(n)) : Td(pn, l.stateNode));
        break;
      case 4:
        u = pn, c = Kn, pn = l.stateNode.containerInfo, Kn = !0, Lr(n, r, l), pn = u, Kn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, S = d.destroy;
            d = d.tag, S !== void 0 && (d & 2 || d & 4) && Vd(l, r, S), c = c.next;
          } while (c !== u);
        }
        Lr(n, r, l);
        break;
      case 1:
        if (!sr && (wu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (w) {
            On(l, r, w);
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
                  pn = w.stateNode, Kn = !1;
                  break e;
                case 3:
                  pn = w.stateNode.containerInfo, Kn = !0;
                  break e;
                case 4:
                  pn = w.stateNode.containerInfo, Kn = !0;
                  break e;
              }
              w = w.return;
            }
          if (pn === null)
            throw Error(m(160));
          Ou(d, S, c), pn = null, Kn = !1;
          var L = c.alternate;
          L !== null && (L.return = null), c.return = null;
        } catch (V) {
          On(c, r, V);
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
            On(n, n.return, Le);
          }
          try {
            bu(5, n, n.return);
          } catch (Le) {
            On(n, n.return, Le);
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
            ha(c, "");
          } catch (Le) {
            On(n, n.return, Le);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, S = l !== null ? l.memoizedProps : d, w = n.type, L = n.updateQueue;
          if (n.updateQueue = null, L !== null)
            try {
              w === "input" && d.type === "radio" && d.name != null && Vn(c, d), Dn(w, S);
              var V = Dn(w, d);
              for (S = 0; S < L.length; S += 2) {
                var ie = L[S], le = L[S + 1];
                ie === "style" ? ct(c, le) : ie === "dangerouslySetInnerHTML" ? va(c, le) : ie === "children" ? ha(c, le) : Fe(c, ie, le, V);
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
                  ye != null ? Bn(c, !!d.multiple, ye, !1) : te !== !!d.multiple && (d.defaultValue != null ? Bn(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Bn(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[ks] = d;
            } catch (Le) {
              On(n, n.return, Le);
            }
        }
        break;
      case 6:
        if (Zn(r, n), xi(n), u & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Le) {
            On(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (Zn(r, n), xi(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ua(r.containerInfo);
          } catch (Le) {
            On(n, n.return, Le);
          }
        break;
      case 4:
        Zn(r, n), xi(n);
        break;
      case 13:
        Zn(r, n), xi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (cf = nn())), u & 4 && Du(n);
        break;
      case 22:
        if (ie = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (V = sr) || ie, Zn(r, n), sr = V) : Zn(r, n), xi(n), u & 8192) {
          if (V = n.memoizedState !== null, (n.stateNode.isHidden = V) && !ie && n.mode & 1)
            for (Te = n, ie = n.child; ie !== null; ) {
              for (le = Te = ie; Te !== null; ) {
                switch (te = Te, ye = te.child, te.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    bu(4, te, te.return);
                    break;
                  case 1:
                    wu(te, te.return);
                    var xe = te.stateNode;
                    if (typeof xe.componentWillUnmount == "function") {
                      u = te, l = te.return;
                      try {
                        r = u, xe.props = r.memoizedProps, xe.state = r.memoizedState, xe.componentWillUnmount();
                      } catch (Le) {
                        On(u, l, Le);
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
              ie = ie.sibling;
            }
          e:
            for (ie = null, le = n; ; ) {
              if (le.tag === 5) {
                if (ie === null) {
                  ie = le;
                  try {
                    c = le.stateNode, V ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = le.stateNode, L = le.memoizedProps.style, S = L != null && L.hasOwnProperty("display") ? L.display : null, w.style.display = Ie("display", S));
                  } catch (Le) {
                    On(n, n.return, Le);
                  }
                }
              } else if (le.tag === 6) {
                if (ie === null)
                  try {
                    le.stateNode.nodeValue = V ? "" : le.memoizedProps;
                  } catch (Le) {
                    On(n, n.return, Le);
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
                ie === le && (ie = null), le = le.return;
              }
              ie === le && (ie = null), le.sibling.return = le.return, le = le.sibling;
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
            if (Bd(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(m(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (ha(c, ""), u.flags &= -33);
            var d = oh(n);
            xu(n, d, c);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, w = oh(n);
            qs(n, w, S);
            break;
          default:
            throw Error(m(161));
        }
      } catch (L) {
        On(n, n.return, L);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Iy(n, r, l) {
    Te = n, Yd(n);
  }
  function Yd(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Te !== null; ) {
      var c = Te, d = c.child;
      if (c.tag === 22 && u) {
        var S = c.memoizedState !== null || Tu;
        if (!S) {
          var w = c.alternate, L = w !== null && w.memoizedState !== null || sr;
          w = Tu;
          var V = sr;
          if (Tu = S, (sr = L) && !V)
            for (Te = c; Te !== null; )
              S = Te, L = S.child, S.tag === 22 && S.memoizedState !== null ? Wd(c) : L !== null ? (L.return = S, Te = L) : Wd(c);
          for (; d !== null; )
            Te = d, Yd(d), d = d.sibling;
          Te = c, Tu = w, sr = V;
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
                    var c = r.elementType === r.type ? l.memoizedProps : ea(r.type, l.memoizedProps);
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
                  var V = r.alternate;
                  if (V !== null) {
                    var ie = V.memoizedState;
                    if (ie !== null) {
                      var le = ie.dehydrated;
                      le !== null && Ua(le);
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
                throw Error(m(163));
            }
          sr || r.flags & 512 && uf(r);
        } catch (te) {
          On(r, r.return, te);
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
            } catch (L) {
              On(r, l, L);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (L) {
                On(r, c, L);
              }
            }
            var d = r.return;
            try {
              uf(r);
            } catch (L) {
              On(r, d, L);
            }
            break;
          case 5:
            var S = r.return;
            try {
              uf(r);
            } catch (L) {
              On(r, S, L);
            }
        }
      } catch (L) {
        On(r, r.return, L);
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
  var Fy = Math.ceil, _o = Be.ReactCurrentDispatcher, sf = Be.ReactCurrentOwner, Ba = Be.ReactCurrentBatchConfig, Et = 0, xn = null, cn = null, Yn = 0, ia = 0, _u = Zt(0), Wn = 0, Xs = null, Lo = 0, Lu = 0, qd = 0, Hl = null, xr = null, cf = 0, Nu = 1 / 0, nl = null, ff = !1, Xd = null, Ya = null, Mu = !1, Wa = null, df = 0, Gs = 0, pf = null, Qs = -1, No = 0;
  function $n() {
    return Et & 6 ? nn() : Qs !== -1 ? Qs : Qs = nn();
  }
  function rl(n) {
    return n.mode & 1 ? Et & 2 && Yn !== 0 ? Yn & -Yn : ky.transition !== null ? (No === 0 && (No = oo()), No) : (n = Tt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : fs(n.type)), n) : 1;
  }
  function Sn(n, r, l, u) {
    if (50 < Gs)
      throw Gs = 0, pf = null, Error(m(185));
    El(n, l, u), (!(Et & 2) || n !== xn) && (n === xn && (!(Et & 2) && (Lu |= l), Wn === 4 && Oi(n, Yn)), qn(n, u), l === 1 && Et === 0 && !(r.mode & 1) && (Nu = nn() + 500, kl && Ri()));
  }
  function qn(n, r) {
    var l = n.callbackNode;
    Sl(n, r);
    var u = hi(n, n === xn ? Yn : 0);
    if (u === 0)
      l !== null && tn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && tn(l), r === 1)
        n.tag === 0 ? Hv(Uu.bind(null, n)) : Lc(Uu.bind(null, n)), Fv(function() {
          !(Et & 6) && Ri();
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
            l = ft;
            break;
          case 536870912:
            l = ji;
            break;
          default:
            l = ft;
        }
        l = yh(l, vf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function vf(n, r) {
    if (Qs = -1, No = 0, Et & 6)
      throw Error(m(327));
    var l = n.callbackNode;
    if (zu() && n.callbackNode !== l)
      return null;
    var u = hi(n, n === xn ? Yn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = mf(n, u);
    else {
      r = u;
      var c = Et;
      Et |= 2;
      var d = fh();
      (xn !== n || Yn !== r) && (nl = null, Nu = nn() + 500, Uo(n, r));
      do
        try {
          Hy();
          break;
        } catch (w) {
          ch(n, w);
        }
      while (!0);
      kd(), _o.current = d, Et = c, cn !== null ? r = 0 : (xn = null, Yn = 0, r = Wn);
    }
    if (r !== 0) {
      if (r === 2 && (c = mi(n), c !== 0 && (u = c, r = Mo(n, c))), r === 1)
        throw l = Xs, Uo(n, 0), Oi(n, u), qn(n, nn()), l;
      if (r === 6)
        Oi(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Qd(c) && (r = mf(n, u), r === 2 && (d = mi(n), d !== 0 && (u = d, r = Mo(n, d))), r === 1))
          throw l = Xs, Uo(n, 0), Oi(n, u), qn(n, nn()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            Pl(n, xr, nl);
            break;
          case 3:
            if (Oi(n, u), (u & 130023424) === u && (r = cf + 500 - nn(), 10 < r)) {
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
            if (u = c, u = nn() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Fy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = xs(Pl.bind(null, n, xr, nl), u);
              break;
            }
            Pl(n, xr, nl);
            break;
          case 5:
            Pl(n, xr, nl);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return qn(n, nn()), n.callbackNode === l ? vf.bind(null, n) : null;
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
              if (!li(d(), c))
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
    if (Et & 6)
      throw Error(m(327));
    zu();
    var r = hi(n, 0);
    if (!(r & 1))
      return qn(n, nn()), null;
    var l = mf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = mi(n);
      u !== 0 && (r = u, l = Mo(n, u));
    }
    if (l === 1)
      throw l = Xs, Uo(n, 0), Oi(n, r), qn(n, nn()), l;
    if (l === 6)
      throw Error(m(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Pl(n, xr, nl), qn(n, nn()), null;
  }
  function Jd(n, r) {
    var l = Et;
    Et |= 1;
    try {
      return n(r);
    } finally {
      Et = l, Et === 0 && (Nu = nn() + 500, kl && Ri());
    }
  }
  function Di(n) {
    Wa !== null && Wa.tag === 0 && !(Et & 6) && zu();
    var r = Et;
    Et |= 1;
    var l = Ba.transition, u = Tt;
    try {
      if (Ba.transition = null, Tt = 1, n)
        return n();
    } finally {
      Tt = u, Ba.transition = l, Et = r, !(Et & 6) && Ri();
    }
  }
  function hf() {
    ia = _u.current, Me(_u);
  }
  function Uo(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Os(l)), cn !== null)
      for (l = cn.return; l !== null; ) {
        var u = l;
        switch (Mc(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Jr();
            break;
          case 3:
            mu(), Me(tt), Me(Jn), Ha();
            break;
          case 5:
            Pe(u);
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
    if (xn = n, cn = n = Vl(n.current, null), Yn = ia = r, Wn = 0, Xs = null, qd = Lu = Lo = 0, xr = Hl = null, wr !== null) {
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
      var l = cn;
      try {
        if (kd(), zs.current = Zc, Ln) {
          for (var u = gn.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Ln = !1;
        }
        if (Ro = 0, Q = _n = gn = null, We = !1, wi = 0, sf.current = null, l === null || l.return === null) {
          Wn = 1, Xs = r, cn = null;
          break;
        }
        e: {
          var d = n, S = l.return, w = l, L = r;
          if (r = Yn, w.flags |= 32768, L !== null && typeof L == "object" && typeof L.then == "function") {
            var V = L, ie = w, le = ie.tag;
            if (!(ie.mode & 1) && (le === 0 || le === 11 || le === 15)) {
              var te = ie.alternate;
              te ? (ie.updateQueue = te.updateQueue, ie.memoizedState = te.memoizedState, ie.lanes = te.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var ye = th(S);
            if (ye !== null) {
              ye.flags &= -257, jd(ye, S, w, d, r), ye.mode & 1 && Vs(d, V, r), r = ye, L = V;
              var xe = r.updateQueue;
              if (xe === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(L), r.updateQueue = Le;
              } else
                xe.add(L);
              break e;
            } else {
              if (!(r & 1)) {
                Vs(d, V, r), Js();
                break e;
              }
              L = Error(m(426));
            }
          } else if (sn && w.mode & 1) {
            var Un = th(S);
            if (Un !== null) {
              !(Un.flags & 65536) && (Un.flags |= 256), jd(Un, S, w, d, r), Hn(Fl(L, w));
              break e;
            }
          }
          d = L = Fl(L, w), Wn !== 4 && (Wn = 2), Hl === null ? Hl = [d] : Hl.push(d), d = S;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var z = $v(d, L, r);
                Yv(d, z);
                break e;
              case 1:
                w = L;
                var M = d.type, F = d.stateNode;
                if (!(d.flags & 128) && (typeof M.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (Ya === null || !Ya.has(F)))) {
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
        r = Ue, cn === l && l !== null && (cn = l = l.return);
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
    (Wn === 0 || Wn === 3 || Wn === 2) && (Wn = 4), xn === null || !(Lo & 268435455) && !(Lu & 268435455) || Oi(xn, Yn);
  }
  function mf(n, r) {
    var l = Et;
    Et |= 2;
    var u = fh();
    (xn !== n || Yn !== r) && (nl = null, Uo(n, r));
    do
      try {
        jy();
        break;
      } catch (c) {
        ch(n, c);
      }
    while (!0);
    if (kd(), Et = l, _o.current = u, cn !== null)
      throw Error(m(261));
    return xn = null, Yn = 0, Wn;
  }
  function jy() {
    for (; cn !== null; )
      dh(cn);
  }
  function Hy() {
    for (; cn !== null && !Cr(); )
      dh(cn);
  }
  function dh(n) {
    var r = mh(n.alternate, n, ia);
    n.memoizedProps = n.pendingProps, r === null ? ph(n) : cn = r, sf.current = null;
  }
  function ph(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = zy(l, r), l !== null) {
          l.flags &= 32767, cn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Wn = 6, cn = null;
          return;
        }
      } else if (l = Uy(l, r, ia), l !== null) {
        cn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        cn = r;
        return;
      }
      cn = r = n;
    } while (r !== null);
    Wn === 0 && (Wn = 5);
  }
  function Pl(n, r, l) {
    var u = Tt, c = Ba.transition;
    try {
      Ba.transition = null, Tt = 1, Py(n, r, l, u);
    } finally {
      Ba.transition = c, Tt = u;
    }
    return null;
  }
  function Py(n, r, l, u) {
    do
      zu();
    while (Wa !== null);
    if (Et & 6)
      throw Error(m(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(m(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ls(n, d), n === xn && (cn = xn = null, Yn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Mu || (Mu = !0, yh(ft, function() {
      return zu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ba.transition, Ba.transition = null;
      var S = Tt;
      Tt = 1;
      var w = Et;
      Et |= 4, sf.current = null, Ay(n, l), uh(l, n), po(Ed), $o = !!Sd, Ed = Sd = null, n.current = l, Iy(l), pi(), Et = w, Tt = S, Ba.transition = d;
    } else
      n.current = l;
    if (Mu && (Mu = !1, Wa = n, df = c), d = n.pendingLanes, d === 0 && (Ya = null), ns(l.stateNode), qn(n, nn()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (ff)
      throw ff = !1, n = Xd, Xd = null, n;
    return df & 1 && n.tag !== 0 && zu(), d = n.pendingLanes, d & 1 ? n === pf ? Gs++ : (Gs = 0, pf = n) : Gs = 0, Ri(), null;
  }
  function zu() {
    if (Wa !== null) {
      var n = us(df), r = Ba.transition, l = Tt;
      try {
        if (Ba.transition = null, Tt = 16 > n ? 16 : n, Wa === null)
          var u = !1;
        else {
          if (n = Wa, Wa = null, df = 0, Et & 6)
            throw Error(m(331));
          var c = Et;
          for (Et |= 4, Te = n.current; Te !== null; ) {
            var d = Te, S = d.child;
            if (Te.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var L = 0; L < w.length; L++) {
                  var V = w[L];
                  for (Te = V; Te !== null; ) {
                    var ie = Te;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        bu(8, ie, d);
                    }
                    var le = ie.child;
                    if (le !== null)
                      le.return = ie, Te = le;
                    else
                      for (; Te !== null; ) {
                        ie = Te;
                        var te = ie.sibling, ye = ie.return;
                        if (lh(ie), ie === V) {
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
                var xe = d.alternate;
                if (xe !== null) {
                  var Le = xe.child;
                  if (Le !== null) {
                    xe.child = null;
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
          var M = n.current;
          for (Te = M; Te !== null; ) {
            S = Te;
            var F = S.child;
            if (S.subtreeFlags & 2064 && F !== null)
              F.return = S, Te = F;
            else
              e:
                for (S = M; Te !== null; ) {
                  if (w = Te, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          of(9, w);
                      }
                    } catch (Ue) {
                      On(w, w.return, Ue);
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
          if (Et = c, Ri(), qr && typeof qr.onPostCommitFiberRoot == "function")
            try {
              qr.onPostCommitFiberRoot(gl, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Tt = l, Ba.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = Fl(l, r), r = $v(n, r, 1), n = Ul(n, r, 1), r = $n(), n !== null && (El(n, 1, r), qn(n, r));
  }
  function On(n, r, l) {
    if (n.tag === 3)
      vh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          vh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ya === null || !Ya.has(u))) {
            n = Fl(l, n), n = eh(r, n, 1), r = Ul(r, n, 1), n = $n(), r !== null && (El(r, 1, n), qn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Vy(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = $n(), n.pingedLanes |= n.suspendedLanes & l, xn === n && (Yn & l) === l && (Wn === 4 || Wn === 3 && (Yn & 130023424) === Yn && 500 > nn() - cf ? Uo(n, 0) : qd |= l), qn(n, r);
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
        throw Error(m(314));
    }
    u !== null && u.delete(r), hh(n, l);
  }
  var mh;
  mh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || tt.current)
        ra = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return ra = !1, tl(n, r, l);
        ra = !!(n.flags & 131072);
      }
    else
      ra = !1, sn && r.flags & 1048576 && Ll(r, go, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ws(n, r), n = r.pendingProps;
        var c = Ea(r, Jn.current);
        kn(r, l), c = Co(null, r, u, n, c, l);
        var d = Al();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(u) ? (d = !0, yo(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ld(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, Md(r, u, n, l), r = ef(null, r, u, !0, d, l)) : (r.tag = 0, sn && d && Nc(r), Nn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ws(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = Yy(u), n = ea(u, n), c) {
            case 0:
              r = at(null, r, u, n, l);
              break e;
            case 1:
              r = Bs(null, r, u, n, l);
              break e;
            case 11:
              r = Eu(null, r, u, n, l);
              break e;
            case 14:
              r = jl(null, r, u, ea(u.type, n), l);
              break e;
          }
          throw Error(m(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ea(u, c), at(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ea(u, c), Bs(n, r, u, c, l);
      case 3:
        e: {
          if (My(r), n === null)
            throw Error(m(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Bv(n, r), Ls(r, u, null, l);
          var S = r.memoizedState;
          if (u = S.element, d.isDehydrated)
            if (d = { element: u, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Fl(Error(m(423)), r), r = rh(n, r, u, l, c);
              break e;
            } else if (u !== c) {
              c = Fl(Error(m(424)), r), r = rh(n, r, u, l, c);
              break e;
            } else
              for (Ca = Sa(r.stateNode.containerInfo.firstChild), Ra = r, sn = !0, ja = null, l = Jv(r, null, u, l), r.child = l; l; )
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
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ea(u, c), Eu(n, r, u, c, l);
      case 7:
        return Nn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, S = c.value, Ut(cu, u._currentValue), u._currentValue = S, d !== null)
            if (li(d.value, S)) {
              if (d.children === c.children && !tt.current) {
                r = Mn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  S = d.child;
                  for (var L = w.firstContext; L !== null; ) {
                    if (L.context === u) {
                      if (d.tag === 1) {
                        L = rn(-1, l & -l), L.tag = 2;
                        var V = d.updateQueue;
                        if (V !== null) {
                          V = V.shared;
                          var ie = V.pending;
                          ie === null ? L.next = L : (L.next = ie.next, ie.next = L), V.pending = L;
                        }
                      }
                      d.lanes |= l, L = d.alternate, L !== null && (L.lanes |= l), Nl(
                        d.return,
                        l,
                        r
                      ), w.lanes |= l;
                      break;
                    }
                    L = L.next;
                  }
                } else if (d.tag === 10)
                  S = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (S = d.return, S === null)
                    throw Error(m(341));
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
        return u = r.type, c = ea(u, r.pendingProps), c = ea(u.type, c), jl(n, r, u, c, l);
      case 15:
        return $c(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ea(u, c), Ws(n, r), r.tag = 1, jn(u) ? (n = !0, yo(r)) : n = !1, kn(r, l), qv(r, u, c), Md(r, u, c, l), ef(null, r, u, !0, n, l);
      case 19:
        return Pd(n, r, l);
      case 22:
        return aa(n, r, l);
    }
    throw Error(m(156, r.tag));
  };
  function yh(n, r) {
    return en(n, r);
  }
  function gh(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function qa(n, r, l, u) {
    return new gh(n, r, l, u);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Yy(n) {
    if (typeof n == "function")
      return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === it)
        return 11;
      if (n === lt)
        return 14;
    }
    return 2;
  }
  function Vl(n, r) {
    var l = n.alternate;
    return l === null ? (l = qa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
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
          case pt:
            return zo(l.children, c, d, r);
          case Ze:
            S = 8, c |= 8;
            break;
          case vn:
            return n = qa(12, l, r, c | 2), n.elementType = vn, n.lanes = d, n;
          case Ht:
            return n = qa(13, l, r, c), n.elementType = Ht, n.lanes = d, n;
          case Xe:
            return n = qa(19, l, r, c), n.elementType = Xe, n.lanes = d, n;
          case ot:
            return gf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case jt:
                  S = 10;
                  break e;
                case Ct:
                  S = 9;
                  break e;
                case it:
                  S = 11;
                  break e;
                case lt:
                  S = 14;
                  break e;
                case kt:
                  S = 16, u = null;
                  break e;
              }
            throw Error(m(130, n == null ? n : typeof n, ""));
        }
    return r = qa(S, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function zo(n, r, l, u) {
    return n = qa(7, n, u, r), n.lanes = l, n;
  }
  function gf(n, r, l, u) {
    return n = qa(22, n, u, r), n.elementType = ot, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Sf(n, r, l) {
    return n = qa(6, n, null, r), n.lanes = l, n;
  }
  function Ks(n, r, l) {
    return r = qa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Zs(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uo(0), this.expirationTimes = uo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uo(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function $d(n, r, l, u, c, d, S, w, L) {
    return n = new Zs(n, r, l, w, L), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = qa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ld(d), n;
  }
  function Sh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: _e, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n)
      return Aa;
    n = n._reactInternals;
    e: {
      if (he(n) !== n || n.tag !== 1)
        throw Error(m(170));
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
      throw Error(m(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (jn(l))
        return Dl(n, l, r);
    }
    return r;
  }
  function tp(n, r, l, u, c, d, S, w, L) {
    return n = $d(l, u, !0, n, c, d, S, w, L), n.context = ep(null), l = n.current, u = $n(), c = rl(l), d = rn(u, c), d.callback = r ?? null, Ul(l, d, c), n.current.lanes = c, El(n, c, u), qn(n, u), n;
  }
  function Ef(n, r, l, u) {
    var c = r.current, d = $n(), S = rl(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = rn(d, S), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Ul(c, r, S), n !== null && (Sn(n, c, S, d), Ac(n, c, S)), S;
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
  function Wy() {
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
      throw Error(m(409));
    Ef(n, r, null, null);
  }, ec.prototype.unmount = Rf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Di(function() {
        Ef(null, n, null, null);
      }), r[oi] = null;
    }
  };
  function ec(n) {
    this._internalRoot = n;
  }
  ec.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = _t();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < on.length && r !== 0 && r < on[l].priority; l++)
        ;
      on.splice(l, 0, n), l === 0 && ai(n);
    }
  };
  function Bl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Cf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Rh() {
  }
  function qy(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var V = $s(S);
          d.call(V);
        };
      }
      var S = tp(r, u, n, 0, null, !1, !1, "", Rh);
      return n._reactRootContainer = S, n[oi] = S.current, gi(n.nodeType === 8 ? n.parentNode : n), Di(), S;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var w = u;
      u = function() {
        var V = $s(L);
        w.call(V);
      };
    }
    var L = $d(n, 0, !1, null, null, !1, !1, "", Rh);
    return n._reactRootContainer = L, n[oi] = L.current, gi(n.nodeType === 8 ? n.parentNode : n), Di(function() {
      Ef(r, L, l, u);
    }), L;
  }
  function Tf(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var S = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var L = $s(S);
          w.call(L);
        };
      }
      Ef(r, S, n, c);
    } else
      S = qy(l, r, n, c, u);
    return $s(S);
  }
  Jo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Hi(r.pendingLanes);
          l !== 0 && (os(r, l | 1), qn(r, nn()), !(Et & 6) && (Nu = nn() + 500, Ri()));
        }
        break;
      case 13:
        Di(function() {
          var u = $i(n, 1);
          if (u !== null) {
            var c = $n();
            Sn(u, n, 1, c);
          }
        }), np(n, 1);
    }
  }, Rl = function(n) {
    if (n.tag === 13) {
      var r = $i(n, 134217728);
      if (r !== null) {
        var l = $n();
        Sn(r, n, 134217728, l);
      }
      np(n, 134217728);
    }
  }, ss = function(n) {
    if (n.tag === 13) {
      var r = rl(n), l = $i(n, r);
      if (l !== null) {
        var u = $n();
        Sn(l, n, r, u);
      }
      np(n, r);
    }
  }, _t = function() {
    return Tt;
  }, Ko = function(n, r) {
    var l = Tt;
    try {
      return Tt = n, r();
    } finally {
      Tt = l;
    }
  }, Wt = function(n, r, l) {
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
                throw Error(m(90));
              Vr(u), An(u, c);
            }
          }
        }
        break;
      case "textarea":
        Er(n, l);
        break;
      case "select":
        r = l.value, r != null && Bn(n, !!l.multiple, r, !1);
    }
  }, ml = Jd, ro = Di;
  var Xy = { usingClientEntryPoint: !1, Events: [Si, uu, _c, ei, _a, Jd] }, tc = { findFiberByHostInstance: Ki, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ch = { bundleType: tc.bundleType, version: tc.version, rendererPackageName: tc.rendererPackageName, rendererConfig: tc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = je(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: tc.findFiberByHostInstance || Wy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wf.isDisabled && wf.supportsFiber)
      try {
        gl = wf.inject(Ch), qr = wf;
      } catch {
      }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xy, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Bl(r))
      throw Error(m(200));
    return Sh(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Bl(n))
      throw Error(m(299));
    var l = !1, u = "", c = rp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = $d(n, 1, !1, null, null, l, !1, u, c), n[oi] = r.current, gi(n.nodeType === 8 ? n.parentNode : n), new Rf(r);
  }, $a.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = je(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Di(n);
  }, $a.hydrate = function(n, r, l) {
    if (!Cf(r))
      throw Error(m(200));
    return Tf(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Bl(n))
      throw Error(m(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", S = rp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (S = l.onRecoverableError)), r = tp(r, null, n, 1, l ?? null, c, !1, d, S), n[oi] = r.current, gi(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new ec(r);
  }, $a.render = function(n, r, l) {
    if (!Cf(r))
      throw Error(m(200));
    return Tf(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!Cf(n))
      throw Error(m(40));
    return n._reactRootContainer ? (Di(function() {
      Tf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[oi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = Jd, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Cf(l))
      throw Error(m(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(m(38));
    return Tf(n, r, l, !1, u);
  }, $a.version = "18.2.0-next-9e3b772b8-20220608", $a;
}
var fT = {};
function dT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (fT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dT);
    } catch (p) {
      console.error(p);
    }
  }
}
fT.NODE_ENV === "production" ? (dT(), QS.exports = Uk()) : QS.exports = Mk();
var zk = QS.exports, Ak = {}, rv = zk;
if (Ak.NODE_ENV === "production")
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
  }, lv.hydrateRoot = function(p, h, m) {
    ey.usingClientEntryPoint = !0;
    try {
      return rv.hydrateRoot(p, h, m);
    } finally {
      ey.usingClientEntryPoint = !1;
    }
  };
}
function pT(p, h) {
  return function() {
    return p.apply(h, arguments);
  };
}
const { toString: Ik } = Object.prototype, { getPrototypeOf: nE } = Object, uy = /* @__PURE__ */ ((p) => (h) => {
  const m = Ik.call(h);
  return p[m] || (p[m] = m.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), no = (p) => (p = p.toLowerCase(), (h) => uy(h) === p), sy = (p) => (h) => typeof h === p, { isArray: rd } = Array, ov = sy("undefined");
function Fk(p) {
  return p !== null && !ov(p) && p.constructor !== null && !ov(p.constructor) && Ai(p.constructor.isBuffer) && p.constructor.isBuffer(p);
}
const vT = no("ArrayBuffer");
function jk(p) {
  let h;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? h = ArrayBuffer.isView(p) : h = p && p.buffer && vT(p.buffer), h;
}
const Hk = sy("string"), Ai = sy("function"), hT = sy("number"), cy = (p) => p !== null && typeof p == "object", Pk = (p) => p === !0 || p === !1, ny = (p) => {
  if (uy(p) !== "object")
    return !1;
  const h = nE(p);
  return (h === null || h === Object.prototype || Object.getPrototypeOf(h) === null) && !(Symbol.toStringTag in p) && !(Symbol.iterator in p);
}, Vk = no("Date"), Bk = no("File"), Yk = no("Blob"), Wk = no("FileList"), qk = (p) => cy(p) && Ai(p.pipe), Xk = (p) => {
  let h;
  return p && (typeof FormData == "function" && p instanceof FormData || Ai(p.append) && ((h = uy(p)) === "formdata" || // detect form-data instance
  h === "object" && Ai(p.toString) && p.toString() === "[object FormData]"));
}, Gk = no("URLSearchParams"), Qk = (p) => p.trim ? p.trim() : p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function uv(p, h, { allOwnKeys: m = !1 } = {}) {
  if (p === null || typeof p > "u")
    return;
  let C, x;
  if (typeof p != "object" && (p = [p]), rd(p))
    for (C = 0, x = p.length; C < x; C++)
      h.call(null, p[C], C, p);
  else {
    const _ = m ? Object.getOwnPropertyNames(p) : Object.keys(p), k = _.length;
    let E;
    for (C = 0; C < k; C++)
      E = _[C], h.call(null, p[E], E, p);
  }
}
function mT(p, h) {
  h = h.toLowerCase();
  const m = Object.keys(p);
  let C = m.length, x;
  for (; C-- > 0; )
    if (x = m[C], h === x.toLowerCase())
      return x;
  return null;
}
const yT = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, gT = (p) => !ov(p) && p !== yT;
function JS() {
  const { caseless: p } = gT(this) && this || {}, h = {}, m = (C, x) => {
    const _ = p && mT(h, x) || x;
    ny(h[_]) && ny(C) ? h[_] = JS(h[_], C) : ny(C) ? h[_] = JS({}, C) : rd(C) ? h[_] = C.slice() : h[_] = C;
  };
  for (let C = 0, x = arguments.length; C < x; C++)
    arguments[C] && uv(arguments[C], m);
  return h;
}
const Jk = (p, h, m, { allOwnKeys: C } = {}) => (uv(h, (x, _) => {
  m && Ai(x) ? p[_] = pT(x, m) : p[_] = x;
}, { allOwnKeys: C }), p), Kk = (p) => (p.charCodeAt(0) === 65279 && (p = p.slice(1)), p), Zk = (p, h, m, C) => {
  p.prototype = Object.create(h.prototype, C), p.prototype.constructor = p, Object.defineProperty(p, "super", {
    value: h.prototype
  }), m && Object.assign(p.prototype, m);
}, $k = (p, h, m, C) => {
  let x, _, k;
  const E = {};
  if (h = h || {}, p == null)
    return h;
  do {
    for (x = Object.getOwnPropertyNames(p), _ = x.length; _-- > 0; )
      k = x[_], (!C || C(k, p, h)) && !E[k] && (h[k] = p[k], E[k] = !0);
    p = m !== !1 && nE(p);
  } while (p && (!m || m(p, h)) && p !== Object.prototype);
  return h;
}, e_ = (p, h, m) => {
  p = String(p), (m === void 0 || m > p.length) && (m = p.length), m -= h.length;
  const C = p.indexOf(h, m);
  return C !== -1 && C === m;
}, t_ = (p) => {
  if (!p)
    return null;
  if (rd(p))
    return p;
  let h = p.length;
  if (!hT(h))
    return null;
  const m = new Array(h);
  for (; h-- > 0; )
    m[h] = p[h];
  return m;
}, n_ = /* @__PURE__ */ ((p) => (h) => p && h instanceof p)(typeof Uint8Array < "u" && nE(Uint8Array)), r_ = (p, h) => {
  const C = (p && p[Symbol.iterator]).call(p);
  let x;
  for (; (x = C.next()) && !x.done; ) {
    const _ = x.value;
    h.call(p, _[0], _[1]);
  }
}, a_ = (p, h) => {
  let m;
  const C = [];
  for (; (m = p.exec(h)) !== null; )
    C.push(m);
  return C;
}, i_ = no("HTMLFormElement"), l_ = (p) => p.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(m, C, x) {
    return C.toUpperCase() + x;
  }
), KC = (({ hasOwnProperty: p }) => (h, m) => p.call(h, m))(Object.prototype), o_ = no("RegExp"), ST = (p, h) => {
  const m = Object.getOwnPropertyDescriptors(p), C = {};
  uv(m, (x, _) => {
    let k;
    (k = h(x, _, p)) !== !1 && (C[_] = k || x);
  }), Object.defineProperties(p, C);
}, u_ = (p) => {
  ST(p, (h, m) => {
    if (Ai(p) && ["arguments", "caller", "callee"].indexOf(m) !== -1)
      return !1;
    const C = p[m];
    if (Ai(C)) {
      if (h.enumerable = !1, "writable" in h) {
        h.writable = !1;
        return;
      }
      h.set || (h.set = () => {
        throw Error("Can not rewrite read-only method '" + m + "'");
      });
    }
  });
}, s_ = (p, h) => {
  const m = {}, C = (x) => {
    x.forEach((_) => {
      m[_] = !0;
    });
  };
  return rd(p) ? C(p) : C(String(p).split(h)), m;
}, c_ = () => {
}, f_ = (p, h) => (p = +p, Number.isFinite(p) ? p : h), PS = "abcdefghijklmnopqrstuvwxyz", ZC = "0123456789", ET = {
  DIGIT: ZC,
  ALPHA: PS,
  ALPHA_DIGIT: PS + PS.toUpperCase() + ZC
}, d_ = (p = 16, h = ET.ALPHA_DIGIT) => {
  let m = "";
  const { length: C } = h;
  for (; p--; )
    m += h[Math.random() * C | 0];
  return m;
};
function p_(p) {
  return !!(p && Ai(p.append) && p[Symbol.toStringTag] === "FormData" && p[Symbol.iterator]);
}
const v_ = (p) => {
  const h = new Array(10), m = (C, x) => {
    if (cy(C)) {
      if (h.indexOf(C) >= 0)
        return;
      if (!("toJSON" in C)) {
        h[x] = C;
        const _ = rd(C) ? [] : {};
        return uv(C, (k, E) => {
          const ce = m(k, x + 1);
          !ov(ce) && (_[E] = ce);
        }), h[x] = void 0, _;
      }
    }
    return C;
  };
  return m(p, 0);
}, h_ = no("AsyncFunction"), m_ = (p) => p && (cy(p) || Ai(p)) && Ai(p.then) && Ai(p.catch), ee = {
  isArray: rd,
  isArrayBuffer: vT,
  isBuffer: Fk,
  isFormData: Xk,
  isArrayBufferView: jk,
  isString: Hk,
  isNumber: hT,
  isBoolean: Pk,
  isObject: cy,
  isPlainObject: ny,
  isUndefined: ov,
  isDate: Vk,
  isFile: Bk,
  isBlob: Yk,
  isRegExp: o_,
  isFunction: Ai,
  isStream: qk,
  isURLSearchParams: Gk,
  isTypedArray: n_,
  isFileList: Wk,
  forEach: uv,
  merge: JS,
  extend: Jk,
  trim: Qk,
  stripBOM: Kk,
  inherits: Zk,
  toFlatObject: $k,
  kindOf: uy,
  kindOfTest: no,
  endsWith: e_,
  toArray: t_,
  forEachEntry: r_,
  matchAll: a_,
  isHTMLForm: i_,
  hasOwnProperty: KC,
  hasOwnProp: KC,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ST,
  freezeMethods: u_,
  toObjectSet: s_,
  toCamelCase: l_,
  noop: c_,
  toFiniteNumber: f_,
  findKey: mT,
  global: yT,
  isContextDefined: gT,
  ALPHABET: ET,
  generateString: d_,
  isSpecCompliantForm: p_,
  toJSONObject: v_,
  isAsyncFn: h_,
  isThenable: m_
};
function Ft(p, h, m, C, x) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = p, this.name = "AxiosError", h && (this.code = h), m && (this.config = m), C && (this.request = C), x && (this.response = x);
}
ee.inherits(Ft, Error, {
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
const RT = Ft.prototype, CT = {};
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
  CT[p] = { value: p };
});
Object.defineProperties(Ft, CT);
Object.defineProperty(RT, "isAxiosError", { value: !0 });
Ft.from = (p, h, m, C, x, _) => {
  const k = Object.create(RT);
  return ee.toFlatObject(p, k, function(ce) {
    return ce !== Error.prototype;
  }, (E) => E !== "isAxiosError"), Ft.call(k, p.message, h, m, C, x), k.cause = p, k.name = p.name, _ && Object.assign(k, _), k;
};
const y_ = null;
function KS(p) {
  return ee.isPlainObject(p) || ee.isArray(p);
}
function TT(p) {
  return ee.endsWith(p, "[]") ? p.slice(0, -2) : p;
}
function $C(p, h, m) {
  return p ? p.concat(h).map(function(x, _) {
    return x = TT(x), !m && _ ? "[" + x + "]" : x;
  }).join(m ? "." : "") : h;
}
function g_(p) {
  return ee.isArray(p) && !p.some(KS);
}
const S_ = ee.toFlatObject(ee, {}, null, function(h) {
  return /^is[A-Z]/.test(h);
});
function fy(p, h, m) {
  if (!ee.isObject(p))
    throw new TypeError("target must be an object");
  h = h || new FormData(), m = ee.toFlatObject(m, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(K, Ne) {
    return !ee.isUndefined(Ne[K]);
  });
  const C = m.metaTokens, x = m.visitor || W, _ = m.dots, k = m.indexes, ce = (m.Blob || typeof Blob < "u" && Blob) && ee.isSpecCompliantForm(h);
  if (!ee.isFunction(x))
    throw new TypeError("visitor must be a function");
  function ne(G) {
    if (G === null)
      return "";
    if (ee.isDate(G))
      return G.toISOString();
    if (!ce && ee.isBlob(G))
      throw new Ft("Blob is not supported. Use a Buffer instead.");
    return ee.isArrayBuffer(G) || ee.isTypedArray(G) ? ce && typeof Blob == "function" ? new Blob([G]) : Buffer.from(G) : G;
  }
  function W(G, K, Ne) {
    let yt = G;
    if (G && !Ne && typeof G == "object") {
      if (ee.endsWith(K, "{}"))
        K = C ? K : K.slice(0, -2), G = JSON.stringify(G);
      else if (ee.isArray(G) && g_(G) || (ee.isFileList(G) || ee.endsWith(K, "[]")) && (yt = ee.toArray(G)))
        return K = TT(K), yt.forEach(function(Fe, Be) {
          !(ee.isUndefined(Fe) || Fe === null) && h.append(
            // eslint-disable-next-line no-nested-ternary
            k === !0 ? $C([K], Be, _) : k === null ? K : K + "[]",
            ne(Fe)
          );
        }), !1;
    }
    return KS(G) ? !0 : (h.append($C(Ne, K, _), ne(G)), !1);
  }
  const Y = [], ae = Object.assign(S_, {
    defaultVisitor: W,
    convertValue: ne,
    isVisitable: KS
  });
  function Se(G, K) {
    if (!ee.isUndefined(G)) {
      if (Y.indexOf(G) !== -1)
        throw Error("Circular reference detected in " + K.join("."));
      Y.push(G), ee.forEach(G, function(yt, st) {
        (!(ee.isUndefined(yt) || yt === null) && x.call(
          h,
          yt,
          ee.isString(st) ? st.trim() : st,
          K,
          ae
        )) === !0 && Se(yt, K ? K.concat(st) : [st]);
      }), Y.pop();
    }
  }
  if (!ee.isObject(p))
    throw new TypeError("data must be an object");
  return Se(p), h;
}
function eT(p) {
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
function rE(p, h) {
  this._pairs = [], p && fy(p, this, h);
}
const wT = rE.prototype;
wT.append = function(h, m) {
  this._pairs.push([h, m]);
};
wT.toString = function(h) {
  const m = h ? function(C) {
    return h.call(this, C, eT);
  } : eT;
  return this._pairs.map(function(x) {
    return m(x[0]) + "=" + m(x[1]);
  }, "").join("&");
};
function E_(p) {
  return encodeURIComponent(p).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function bT(p, h, m) {
  if (!h)
    return p;
  const C = m && m.encode || E_, x = m && m.serialize;
  let _;
  if (x ? _ = x(h, m) : _ = ee.isURLSearchParams(h) ? h.toString() : new rE(h, m).toString(C), _) {
    const k = p.indexOf("#");
    k !== -1 && (p = p.slice(0, k)), p += (p.indexOf("?") === -1 ? "?" : "&") + _;
  }
  return p;
}
class R_ {
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
  use(h, m, C) {
    return this.handlers.push({
      fulfilled: h,
      rejected: m,
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
const tT = R_, xT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, C_ = typeof URLSearchParams < "u" ? URLSearchParams : rE, T_ = typeof FormData < "u" ? FormData : null, w_ = typeof Blob < "u" ? Blob : null, b_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: C_,
    FormData: T_,
    Blob: w_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, OT = typeof window < "u" && typeof document < "u", x_ = ((p) => OT && ["ReactNative", "NativeScript", "NS"].indexOf(p) < 0)(typeof navigator < "u" && navigator.product), O_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", D_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: OT,
  hasStandardBrowserEnv: x_,
  hasStandardBrowserWebWorkerEnv: O_
}, Symbol.toStringTag, { value: "Module" })), eo = {
  ...D_,
  ...b_
};
function k_(p, h) {
  return fy(p, new eo.classes.URLSearchParams(), Object.assign({
    visitor: function(m, C, x, _) {
      return eo.isNode && ee.isBuffer(m) ? (this.append(C, m.toString("base64")), !1) : _.defaultVisitor.apply(this, arguments);
    }
  }, h));
}
function __(p) {
  return ee.matchAll(/\w+|\[(\w*)]/g, p).map((h) => h[0] === "[]" ? "" : h[1] || h[0]);
}
function L_(p) {
  const h = {}, m = Object.keys(p);
  let C;
  const x = m.length;
  let _;
  for (C = 0; C < x; C++)
    _ = m[C], h[_] = p[_];
  return h;
}
function DT(p) {
  function h(m, C, x, _) {
    let k = m[_++];
    const E = Number.isFinite(+k), ce = _ >= m.length;
    return k = !k && ee.isArray(x) ? x.length : k, ce ? (ee.hasOwnProp(x, k) ? x[k] = [x[k], C] : x[k] = C, !E) : ((!x[k] || !ee.isObject(x[k])) && (x[k] = []), h(m, C, x[k], _) && ee.isArray(x[k]) && (x[k] = L_(x[k])), !E);
  }
  if (ee.isFormData(p) && ee.isFunction(p.entries)) {
    const m = {};
    return ee.forEachEntry(p, (C, x) => {
      h(__(C), x, m, 0);
    }), m;
  }
  return null;
}
function N_(p, h, m) {
  if (ee.isString(p))
    try {
      return (h || JSON.parse)(p), ee.trim(p);
    } catch (C) {
      if (C.name !== "SyntaxError")
        throw C;
    }
  return (m || JSON.stringify)(p);
}
const aE = {
  transitional: xT,
  adapter: ["xhr", "http"],
  transformRequest: [function(h, m) {
    const C = m.getContentType() || "", x = C.indexOf("application/json") > -1, _ = ee.isObject(h);
    if (_ && ee.isHTMLForm(h) && (h = new FormData(h)), ee.isFormData(h))
      return x && x ? JSON.stringify(DT(h)) : h;
    if (ee.isArrayBuffer(h) || ee.isBuffer(h) || ee.isStream(h) || ee.isFile(h) || ee.isBlob(h))
      return h;
    if (ee.isArrayBufferView(h))
      return h.buffer;
    if (ee.isURLSearchParams(h))
      return m.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), h.toString();
    let E;
    if (_) {
      if (C.indexOf("application/x-www-form-urlencoded") > -1)
        return k_(h, this.formSerializer).toString();
      if ((E = ee.isFileList(h)) || C.indexOf("multipart/form-data") > -1) {
        const ce = this.env && this.env.FormData;
        return fy(
          E ? { "files[]": h } : h,
          ce && new ce(),
          this.formSerializer
        );
      }
    }
    return _ || x ? (m.setContentType("application/json", !1), N_(h)) : h;
  }],
  transformResponse: [function(h) {
    const m = this.transitional || aE.transitional, C = m && m.forcedJSONParsing, x = this.responseType === "json";
    if (h && ee.isString(h) && (C && !this.responseType || x)) {
      const k = !(m && m.silentJSONParsing) && x;
      try {
        return JSON.parse(h);
      } catch (E) {
        if (k)
          throw E.name === "SyntaxError" ? Ft.from(E, Ft.ERR_BAD_RESPONSE, this, null, this.response) : E;
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
  aE.headers[p] = {};
});
const iE = aE, M_ = ee.toObjectSet([
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
]), U_ = (p) => {
  const h = {};
  let m, C, x;
  return p && p.split(`
`).forEach(function(k) {
    x = k.indexOf(":"), m = k.substring(0, x).trim().toLowerCase(), C = k.substring(x + 1).trim(), !(!m || h[m] && M_[m]) && (m === "set-cookie" ? h[m] ? h[m].push(C) : h[m] = [C] : h[m] = h[m] ? h[m] + ", " + C : C);
  }), h;
}, nT = Symbol("internals");
function av(p) {
  return p && String(p).trim().toLowerCase();
}
function ry(p) {
  return p === !1 || p == null ? p : ee.isArray(p) ? p.map(ry) : String(p);
}
function z_(p) {
  const h = /* @__PURE__ */ Object.create(null), m = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let C;
  for (; C = m.exec(p); )
    h[C[1]] = C[2];
  return h;
}
const A_ = (p) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(p.trim());
function VS(p, h, m, C, x) {
  if (ee.isFunction(C))
    return C.call(this, h, m);
  if (x && (h = m), !!ee.isString(h)) {
    if (ee.isString(C))
      return h.indexOf(C) !== -1;
    if (ee.isRegExp(C))
      return C.test(h);
  }
}
function I_(p) {
  return p.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (h, m, C) => m.toUpperCase() + C);
}
function F_(p, h) {
  const m = ee.toCamelCase(" " + h);
  ["get", "set", "has"].forEach((C) => {
    Object.defineProperty(p, C + m, {
      value: function(x, _, k) {
        return this[C].call(this, h, x, _, k);
      },
      configurable: !0
    });
  });
}
class dy {
  constructor(h) {
    h && this.set(h);
  }
  set(h, m, C) {
    const x = this;
    function _(E, ce, ne) {
      const W = av(ce);
      if (!W)
        throw new Error("header name must be a non-empty string");
      const Y = ee.findKey(x, W);
      (!Y || x[Y] === void 0 || ne === !0 || ne === void 0 && x[Y] !== !1) && (x[Y || ce] = ry(E));
    }
    const k = (E, ce) => ee.forEach(E, (ne, W) => _(ne, W, ce));
    return ee.isPlainObject(h) || h instanceof this.constructor ? k(h, m) : ee.isString(h) && (h = h.trim()) && !A_(h) ? k(U_(h), m) : h != null && _(m, h, C), this;
  }
  get(h, m) {
    if (h = av(h), h) {
      const C = ee.findKey(this, h);
      if (C) {
        const x = this[C];
        if (!m)
          return x;
        if (m === !0)
          return z_(x);
        if (ee.isFunction(m))
          return m.call(this, x, C);
        if (ee.isRegExp(m))
          return m.exec(x);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(h, m) {
    if (h = av(h), h) {
      const C = ee.findKey(this, h);
      return !!(C && this[C] !== void 0 && (!m || VS(this, this[C], C, m)));
    }
    return !1;
  }
  delete(h, m) {
    const C = this;
    let x = !1;
    function _(k) {
      if (k = av(k), k) {
        const E = ee.findKey(C, k);
        E && (!m || VS(C, C[E], E, m)) && (delete C[E], x = !0);
      }
    }
    return ee.isArray(h) ? h.forEach(_) : _(h), x;
  }
  clear(h) {
    const m = Object.keys(this);
    let C = m.length, x = !1;
    for (; C--; ) {
      const _ = m[C];
      (!h || VS(this, this[_], _, h, !0)) && (delete this[_], x = !0);
    }
    return x;
  }
  normalize(h) {
    const m = this, C = {};
    return ee.forEach(this, (x, _) => {
      const k = ee.findKey(C, _);
      if (k) {
        m[k] = ry(x), delete m[_];
        return;
      }
      const E = h ? I_(_) : String(_).trim();
      E !== _ && delete m[_], m[E] = ry(x), C[E] = !0;
    }), this;
  }
  concat(...h) {
    return this.constructor.concat(this, ...h);
  }
  toJSON(h) {
    const m = /* @__PURE__ */ Object.create(null);
    return ee.forEach(this, (C, x) => {
      C != null && C !== !1 && (m[x] = h && ee.isArray(C) ? C.join(", ") : C);
    }), m;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([h, m]) => h + ": " + m).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(h) {
    return h instanceof this ? h : new this(h);
  }
  static concat(h, ...m) {
    const C = new this(h);
    return m.forEach((x) => C.set(x)), C;
  }
  static accessor(h) {
    const C = (this[nT] = this[nT] = {
      accessors: {}
    }).accessors, x = this.prototype;
    function _(k) {
      const E = av(k);
      C[E] || (F_(x, k), C[E] = !0);
    }
    return ee.isArray(h) ? h.forEach(_) : _(h), this;
  }
}
dy.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ee.reduceDescriptors(dy.prototype, ({ value: p }, h) => {
  let m = h[0].toUpperCase() + h.slice(1);
  return {
    get: () => p,
    set(C) {
      this[m] = C;
    }
  };
});
ee.freezeMethods(dy);
const Go = dy;
function BS(p, h) {
  const m = this || iE, C = h || m, x = Go.from(C.headers);
  let _ = C.data;
  return ee.forEach(p, function(E) {
    _ = E.call(m, _, x.normalize(), h ? h.status : void 0);
  }), x.normalize(), _;
}
function kT(p) {
  return !!(p && p.__CANCEL__);
}
function sv(p, h, m) {
  Ft.call(this, p ?? "canceled", Ft.ERR_CANCELED, h, m), this.name = "CanceledError";
}
ee.inherits(sv, Ft, {
  __CANCEL__: !0
});
function j_(p, h, m) {
  const C = m.config.validateStatus;
  !m.status || !C || C(m.status) ? p(m) : h(new Ft(
    "Request failed with status code " + m.status,
    [Ft.ERR_BAD_REQUEST, Ft.ERR_BAD_RESPONSE][Math.floor(m.status / 100) - 4],
    m.config,
    m.request,
    m
  ));
}
const H_ = eo.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(p, h, m, C, x, _) {
      const k = [p + "=" + encodeURIComponent(h)];
      ee.isNumber(m) && k.push("expires=" + new Date(m).toGMTString()), ee.isString(C) && k.push("path=" + C), ee.isString(x) && k.push("domain=" + x), _ === !0 && k.push("secure"), document.cookie = k.join("; ");
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
function P_(p) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(p);
}
function V_(p, h) {
  return h ? p.replace(/\/+$/, "") + "/" + h.replace(/^\/+/, "") : p;
}
function _T(p, h) {
  return p && !P_(h) ? V_(p, h) : h;
}
const B_ = eo.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const h = /(msie|trident)/i.test(navigator.userAgent), m = document.createElement("a");
    let C;
    function x(_) {
      let k = _;
      return h && (m.setAttribute("href", k), k = m.href), m.setAttribute("href", k), {
        href: m.href,
        protocol: m.protocol ? m.protocol.replace(/:$/, "") : "",
        host: m.host,
        search: m.search ? m.search.replace(/^\?/, "") : "",
        hash: m.hash ? m.hash.replace(/^#/, "") : "",
        hostname: m.hostname,
        port: m.port,
        pathname: m.pathname.charAt(0) === "/" ? m.pathname : "/" + m.pathname
      };
    }
    return C = x(window.location.href), function(k) {
      const E = ee.isString(k) ? x(k) : k;
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
function Y_(p) {
  const h = /^([-+\w]{1,25})(:?\/\/|:)/.exec(p);
  return h && h[1] || "";
}
function W_(p, h) {
  p = p || 10;
  const m = new Array(p), C = new Array(p);
  let x = 0, _ = 0, k;
  return h = h !== void 0 ? h : 1e3, function(ce) {
    const ne = Date.now(), W = C[_];
    k || (k = ne), m[x] = ce, C[x] = ne;
    let Y = _, ae = 0;
    for (; Y !== x; )
      ae += m[Y++], Y = Y % p;
    if (x = (x + 1) % p, x === _ && (_ = (_ + 1) % p), ne - k < h)
      return;
    const Se = W && ne - W;
    return Se ? Math.round(ae * 1e3 / Se) : void 0;
  };
}
function rT(p, h) {
  let m = 0;
  const C = W_(50, 250);
  return (x) => {
    const _ = x.loaded, k = x.lengthComputable ? x.total : void 0, E = _ - m, ce = C(E), ne = _ <= k;
    m = _;
    const W = {
      loaded: _,
      total: k,
      progress: k ? _ / k : void 0,
      bytes: E,
      rate: ce || void 0,
      estimated: ce && k && ne ? (k - _) / ce : void 0,
      event: x
    };
    W[h ? "download" : "upload"] = !0, p(W);
  };
}
const q_ = typeof XMLHttpRequest < "u", X_ = q_ && function(p) {
  return new Promise(function(m, C) {
    let x = p.data;
    const _ = Go.from(p.headers).normalize();
    let { responseType: k, withXSRFToken: E } = p, ce;
    function ne() {
      p.cancelToken && p.cancelToken.unsubscribe(ce), p.signal && p.signal.removeEventListener("abort", ce);
    }
    let W;
    if (ee.isFormData(x)) {
      if (eo.hasStandardBrowserEnv || eo.hasStandardBrowserWebWorkerEnv)
        _.setContentType(!1);
      else if ((W = _.getContentType()) !== !1) {
        const [K, ...Ne] = W ? W.split(";").map((yt) => yt.trim()).filter(Boolean) : [];
        _.setContentType([K || "multipart/form-data", ...Ne].join("; "));
      }
    }
    let Y = new XMLHttpRequest();
    if (p.auth) {
      const K = p.auth.username || "", Ne = p.auth.password ? unescape(encodeURIComponent(p.auth.password)) : "";
      _.set("Authorization", "Basic " + btoa(K + ":" + Ne));
    }
    const ae = _T(p.baseURL, p.url);
    Y.open(p.method.toUpperCase(), bT(ae, p.params, p.paramsSerializer), !0), Y.timeout = p.timeout;
    function Se() {
      if (!Y)
        return;
      const K = Go.from(
        "getAllResponseHeaders" in Y && Y.getAllResponseHeaders()
      ), yt = {
        data: !k || k === "text" || k === "json" ? Y.responseText : Y.response,
        status: Y.status,
        statusText: Y.statusText,
        headers: K,
        config: p,
        request: Y
      };
      j_(function(Fe) {
        m(Fe), ne();
      }, function(Fe) {
        C(Fe), ne();
      }, yt), Y = null;
    }
    if ("onloadend" in Y ? Y.onloadend = Se : Y.onreadystatechange = function() {
      !Y || Y.readyState !== 4 || Y.status === 0 && !(Y.responseURL && Y.responseURL.indexOf("file:") === 0) || setTimeout(Se);
    }, Y.onabort = function() {
      Y && (C(new Ft("Request aborted", Ft.ECONNABORTED, p, Y)), Y = null);
    }, Y.onerror = function() {
      C(new Ft("Network Error", Ft.ERR_NETWORK, p, Y)), Y = null;
    }, Y.ontimeout = function() {
      let Ne = p.timeout ? "timeout of " + p.timeout + "ms exceeded" : "timeout exceeded";
      const yt = p.transitional || xT;
      p.timeoutErrorMessage && (Ne = p.timeoutErrorMessage), C(new Ft(
        Ne,
        yt.clarifyTimeoutError ? Ft.ETIMEDOUT : Ft.ECONNABORTED,
        p,
        Y
      )), Y = null;
    }, eo.hasStandardBrowserEnv && (E && ee.isFunction(E) && (E = E(p)), E || E !== !1 && B_(ae))) {
      const K = p.xsrfHeaderName && p.xsrfCookieName && H_.read(p.xsrfCookieName);
      K && _.set(p.xsrfHeaderName, K);
    }
    x === void 0 && _.setContentType(null), "setRequestHeader" in Y && ee.forEach(_.toJSON(), function(Ne, yt) {
      Y.setRequestHeader(yt, Ne);
    }), ee.isUndefined(p.withCredentials) || (Y.withCredentials = !!p.withCredentials), k && k !== "json" && (Y.responseType = p.responseType), typeof p.onDownloadProgress == "function" && Y.addEventListener("progress", rT(p.onDownloadProgress, !0)), typeof p.onUploadProgress == "function" && Y.upload && Y.upload.addEventListener("progress", rT(p.onUploadProgress)), (p.cancelToken || p.signal) && (ce = (K) => {
      Y && (C(!K || K.type ? new sv(null, p, Y) : K), Y.abort(), Y = null);
    }, p.cancelToken && p.cancelToken.subscribe(ce), p.signal && (p.signal.aborted ? ce() : p.signal.addEventListener("abort", ce)));
    const G = Y_(ae);
    if (G && eo.protocols.indexOf(G) === -1) {
      C(new Ft("Unsupported protocol " + G + ":", Ft.ERR_BAD_REQUEST, p));
      return;
    }
    Y.send(x || null);
  });
}, ZS = {
  http: y_,
  xhr: X_
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
const aT = (p) => `- ${p}`, G_ = (p) => ee.isFunction(p) || p === null || p === !1, LT = {
  getAdapter: (p) => {
    p = ee.isArray(p) ? p : [p];
    const { length: h } = p;
    let m, C;
    const x = {};
    for (let _ = 0; _ < h; _++) {
      m = p[_];
      let k;
      if (C = m, !G_(m) && (C = ZS[(k = String(m)).toLowerCase()], C === void 0))
        throw new Ft(`Unknown adapter '${k}'`);
      if (C)
        break;
      x[k || "#" + _] = C;
    }
    if (!C) {
      const _ = Object.entries(x).map(
        ([E, ce]) => `adapter ${E} ` + (ce === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let k = h ? _.length > 1 ? `since :
` + _.map(aT).join(`
`) : " " + aT(_[0]) : "as no adapter specified";
      throw new Ft(
        "There is no suitable adapter to dispatch the request " + k,
        "ERR_NOT_SUPPORT"
      );
    }
    return C;
  },
  adapters: ZS
};
function YS(p) {
  if (p.cancelToken && p.cancelToken.throwIfRequested(), p.signal && p.signal.aborted)
    throw new sv(null, p);
}
function iT(p) {
  return YS(p), p.headers = Go.from(p.headers), p.data = BS.call(
    p,
    p.transformRequest
  ), ["post", "put", "patch"].indexOf(p.method) !== -1 && p.headers.setContentType("application/x-www-form-urlencoded", !1), LT.getAdapter(p.adapter || iE.adapter)(p).then(function(C) {
    return YS(p), C.data = BS.call(
      p,
      p.transformResponse,
      C
    ), C.headers = Go.from(C.headers), C;
  }, function(C) {
    return kT(C) || (YS(p), C && C.response && (C.response.data = BS.call(
      p,
      p.transformResponse,
      C.response
    ), C.response.headers = Go.from(C.response.headers))), Promise.reject(C);
  });
}
const lT = (p) => p instanceof Go ? p.toJSON() : p;
function td(p, h) {
  h = h || {};
  const m = {};
  function C(ne, W, Y) {
    return ee.isPlainObject(ne) && ee.isPlainObject(W) ? ee.merge.call({ caseless: Y }, ne, W) : ee.isPlainObject(W) ? ee.merge({}, W) : ee.isArray(W) ? W.slice() : W;
  }
  function x(ne, W, Y) {
    if (ee.isUndefined(W)) {
      if (!ee.isUndefined(ne))
        return C(void 0, ne, Y);
    } else
      return C(ne, W, Y);
  }
  function _(ne, W) {
    if (!ee.isUndefined(W))
      return C(void 0, W);
  }
  function k(ne, W) {
    if (ee.isUndefined(W)) {
      if (!ee.isUndefined(ne))
        return C(void 0, ne);
    } else
      return C(void 0, W);
  }
  function E(ne, W, Y) {
    if (Y in h)
      return C(ne, W);
    if (Y in p)
      return C(void 0, ne);
  }
  const ce = {
    url: _,
    method: _,
    data: _,
    baseURL: k,
    transformRequest: k,
    transformResponse: k,
    paramsSerializer: k,
    timeout: k,
    timeoutMessage: k,
    withCredentials: k,
    withXSRFToken: k,
    adapter: k,
    responseType: k,
    xsrfCookieName: k,
    xsrfHeaderName: k,
    onUploadProgress: k,
    onDownloadProgress: k,
    decompress: k,
    maxContentLength: k,
    maxBodyLength: k,
    beforeRedirect: k,
    transport: k,
    httpAgent: k,
    httpsAgent: k,
    cancelToken: k,
    socketPath: k,
    responseEncoding: k,
    validateStatus: E,
    headers: (ne, W) => x(lT(ne), lT(W), !0)
  };
  return ee.forEach(Object.keys(Object.assign({}, p, h)), function(W) {
    const Y = ce[W] || x, ae = Y(p[W], h[W], W);
    ee.isUndefined(ae) && Y !== E || (m[W] = ae);
  }), m;
}
const NT = "1.6.2", lE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((p, h) => {
  lE[p] = function(C) {
    return typeof C === p || "a" + (h < 1 ? "n " : " ") + p;
  };
});
const oT = {};
lE.transitional = function(h, m, C) {
  function x(_, k) {
    return "[Axios v" + NT + "] Transitional option '" + _ + "'" + k + (C ? ". " + C : "");
  }
  return (_, k, E) => {
    if (h === !1)
      throw new Ft(
        x(k, " has been removed" + (m ? " in " + m : "")),
        Ft.ERR_DEPRECATED
      );
    return m && !oT[k] && (oT[k] = !0, console.warn(
      x(
        k,
        " has been deprecated since v" + m + " and will be removed in the near future"
      )
    )), h ? h(_, k, E) : !0;
  };
};
function Q_(p, h, m) {
  if (typeof p != "object")
    throw new Ft("options must be an object", Ft.ERR_BAD_OPTION_VALUE);
  const C = Object.keys(p);
  let x = C.length;
  for (; x-- > 0; ) {
    const _ = C[x], k = h[_];
    if (k) {
      const E = p[_], ce = E === void 0 || k(E, _, p);
      if (ce !== !0)
        throw new Ft("option " + _ + " must be " + ce, Ft.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (m !== !0)
      throw new Ft("Unknown option " + _, Ft.ERR_BAD_OPTION);
  }
}
const $S = {
  assertOptions: Q_,
  validators: lE
}, es = $S.validators;
class ly {
  constructor(h) {
    this.defaults = h, this.interceptors = {
      request: new tT(),
      response: new tT()
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
  request(h, m) {
    typeof h == "string" ? (m = m || {}, m.url = h) : m = h || {}, m = td(this.defaults, m);
    const { transitional: C, paramsSerializer: x, headers: _ } = m;
    C !== void 0 && $S.assertOptions(C, {
      silentJSONParsing: es.transitional(es.boolean),
      forcedJSONParsing: es.transitional(es.boolean),
      clarifyTimeoutError: es.transitional(es.boolean)
    }, !1), x != null && (ee.isFunction(x) ? m.paramsSerializer = {
      serialize: x
    } : $S.assertOptions(x, {
      encode: es.function,
      serialize: es.function
    }, !0)), m.method = (m.method || this.defaults.method || "get").toLowerCase();
    let k = _ && ee.merge(
      _.common,
      _[m.method]
    );
    _ && ee.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (G) => {
        delete _[G];
      }
    ), m.headers = Go.concat(k, _);
    const E = [];
    let ce = !0;
    this.interceptors.request.forEach(function(K) {
      typeof K.runWhen == "function" && K.runWhen(m) === !1 || (ce = ce && K.synchronous, E.unshift(K.fulfilled, K.rejected));
    });
    const ne = [];
    this.interceptors.response.forEach(function(K) {
      ne.push(K.fulfilled, K.rejected);
    });
    let W, Y = 0, ae;
    if (!ce) {
      const G = [iT.bind(this), void 0];
      for (G.unshift.apply(G, E), G.push.apply(G, ne), ae = G.length, W = Promise.resolve(m); Y < ae; )
        W = W.then(G[Y++], G[Y++]);
      return W;
    }
    ae = E.length;
    let Se = m;
    for (Y = 0; Y < ae; ) {
      const G = E[Y++], K = E[Y++];
      try {
        Se = G(Se);
      } catch (Ne) {
        K.call(this, Ne);
        break;
      }
    }
    try {
      W = iT.call(this, Se);
    } catch (G) {
      return Promise.reject(G);
    }
    for (Y = 0, ae = ne.length; Y < ae; )
      W = W.then(ne[Y++], ne[Y++]);
    return W;
  }
  getUri(h) {
    h = td(this.defaults, h);
    const m = _T(h.baseURL, h.url);
    return bT(m, h.params, h.paramsSerializer);
  }
}
ee.forEach(["delete", "get", "head", "options"], function(h) {
  ly.prototype[h] = function(m, C) {
    return this.request(td(C || {}, {
      method: h,
      url: m,
      data: (C || {}).data
    }));
  };
});
ee.forEach(["post", "put", "patch"], function(h) {
  function m(C) {
    return function(_, k, E) {
      return this.request(td(E || {}, {
        method: h,
        headers: C ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: _,
        data: k
      }));
    };
  }
  ly.prototype[h] = m(), ly.prototype[h + "Form"] = m(!0);
});
const ay = ly;
class oE {
  constructor(h) {
    if (typeof h != "function")
      throw new TypeError("executor must be a function.");
    let m;
    this.promise = new Promise(function(_) {
      m = _;
    });
    const C = this;
    this.promise.then((x) => {
      if (!C._listeners)
        return;
      let _ = C._listeners.length;
      for (; _-- > 0; )
        C._listeners[_](x);
      C._listeners = null;
    }), this.promise.then = (x) => {
      let _;
      const k = new Promise((E) => {
        C.subscribe(E), _ = E;
      }).then(x);
      return k.cancel = function() {
        C.unsubscribe(_);
      }, k;
    }, h(function(_, k, E) {
      C.reason || (C.reason = new sv(_, k, E), m(C.reason));
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
    const m = this._listeners.indexOf(h);
    m !== -1 && this._listeners.splice(m, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let h;
    return {
      token: new oE(function(x) {
        h = x;
      }),
      cancel: h
    };
  }
}
const J_ = oE;
function K_(p) {
  return function(m) {
    return p.apply(null, m);
  };
}
function Z_(p) {
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
const $_ = eE;
function MT(p) {
  const h = new ay(p), m = pT(ay.prototype.request, h);
  return ee.extend(m, ay.prototype, h, { allOwnKeys: !0 }), ee.extend(m, h, null, { allOwnKeys: !0 }), m.create = function(x) {
    return MT(td(p, x));
  }, m;
}
const tr = MT(iE);
tr.Axios = ay;
tr.CanceledError = sv;
tr.CancelToken = J_;
tr.isCancel = kT;
tr.VERSION = NT;
tr.toFormData = fy;
tr.AxiosError = Ft;
tr.Cancel = tr.CanceledError;
tr.all = function(h) {
  return Promise.all(h);
};
tr.spread = K_;
tr.isAxiosError = Z_;
tr.mergeConfig = td;
tr.AxiosHeaders = Go;
tr.formToJSON = (p) => DT(ee.isHTMLForm(p) ? new FormData(p) : p);
tr.getAdapter = LT.getAdapter;
tr.HttpStatusCode = $_;
tr.default = tr;
const eL = tr;
var UT = {}, nd = {};
Object.defineProperty(nd, "__esModule", { value: !0 });
nd.cssValue = nd.parseLengthAndUnit = void 0;
var tL = {
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
function zT(p) {
  if (typeof p == "number")
    return {
      value: p,
      unit: "px"
    };
  var h, m = (p.match(/^[0-9.]*/) || "").toString();
  m.includes(".") ? h = parseFloat(m) : h = parseInt(m, 10);
  var C = (p.match(/[^0-9]*$/) || "").toString();
  return tL[C] ? {
    value: h,
    unit: C
  } : (console.warn("React Spinners: ".concat(p, " is not a valid css value. Defaulting to ").concat(h, "px.")), {
    value: h,
    unit: "px"
  });
}
nd.parseLengthAndUnit = zT;
function nL(p) {
  var h = zT(p);
  return "".concat(h.value).concat(h.unit);
}
nd.cssValue = nL;
var py = {};
Object.defineProperty(py, "__esModule", { value: !0 });
py.createAnimation = void 0;
var rL = function(p, h, m) {
  var C = "react-spinners-".concat(p, "-").concat(m);
  if (typeof window > "u" || !window.document)
    return C;
  var x = document.createElement("style");
  document.head.appendChild(x);
  var _ = x.sheet, k = `
    @keyframes `.concat(C, ` {
      `).concat(h, `
    }
  `);
  return _ && _.insertRule(k, 0), C;
};
py.createAnimation = rL;
var oy = to && to.__assign || function() {
  return oy = Object.assign || function(p) {
    for (var h, m = 1, C = arguments.length; m < C; m++) {
      h = arguments[m];
      for (var x in h)
        Object.prototype.hasOwnProperty.call(h, x) && (p[x] = h[x]);
    }
    return p;
  }, oy.apply(this, arguments);
}, aL = to && to.__createBinding || (Object.create ? function(p, h, m, C) {
  C === void 0 && (C = m);
  var x = Object.getOwnPropertyDescriptor(h, m);
  (!x || ("get" in x ? !h.__esModule : x.writable || x.configurable)) && (x = { enumerable: !0, get: function() {
    return h[m];
  } }), Object.defineProperty(p, C, x);
} : function(p, h, m, C) {
  C === void 0 && (C = m), p[C] = h[m];
}), iL = to && to.__setModuleDefault || (Object.create ? function(p, h) {
  Object.defineProperty(p, "default", { enumerable: !0, value: h });
} : function(p, h) {
  p.default = h;
}), lL = to && to.__importStar || function(p) {
  if (p && p.__esModule)
    return p;
  var h = {};
  if (p != null)
    for (var m in p)
      m !== "default" && Object.prototype.hasOwnProperty.call(p, m) && aL(h, p, m);
  return iL(h, p), h;
}, oL = to && to.__rest || function(p, h) {
  var m = {};
  for (var C in p)
    Object.prototype.hasOwnProperty.call(p, C) && h.indexOf(C) < 0 && (m[C] = p[C]);
  if (p != null && typeof Object.getOwnPropertySymbols == "function")
    for (var x = 0, C = Object.getOwnPropertySymbols(p); x < C.length; x++)
      h.indexOf(C[x]) < 0 && Object.prototype.propertyIsEnumerable.call(p, C[x]) && (m[C[x]] = p[C[x]]);
  return m;
};
Object.defineProperty(UT, "__esModule", { value: !0 });
var ty = lL(Pr), WS = nd, uL = py, sL = (0, uL.createAnimation)("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function cL(p) {
  var h = p.loading, m = h === void 0 ? !0 : h, C = p.color, x = C === void 0 ? "#000000" : C, _ = p.speedMultiplier, k = _ === void 0 ? 1 : _, E = p.cssOverride, ce = E === void 0 ? {} : E, ne = p.size, W = ne === void 0 ? 15 : ne, Y = p.margin, ae = Y === void 0 ? 2 : Y, Se = oL(p, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), G = oy({ display: "inherit" }, ce), K = function(Ne) {
    return {
      backgroundColor: x,
      width: (0, WS.cssValue)(W),
      height: (0, WS.cssValue)(W),
      margin: (0, WS.cssValue)(ae),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(sL, " ").concat(0.75 / k, "s ").concat(Ne * 0.12 / k, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return m ? ty.createElement(
    "span",
    oy({ style: G }, Se),
    ty.createElement("span", { style: K(1) }),
    ty.createElement("span", { style: K(2) }),
    ty.createElement("span", { style: K(3) })
  ) : null;
}
var fL = UT.default = cL, AT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(p) {
  (function() {
    var h = {}.hasOwnProperty;
    function m() {
      for (var _ = "", k = 0; k < arguments.length; k++) {
        var E = arguments[k];
        E && (_ = x(_, C(E)));
      }
      return _;
    }
    function C(_) {
      if (typeof _ == "string" || typeof _ == "number")
        return _;
      if (typeof _ != "object")
        return "";
      if (Array.isArray(_))
        return m.apply(null, _);
      if (_.toString !== Object.prototype.toString && !_.toString.toString().includes("[native code]"))
        return _.toString();
      var k = "";
      for (var E in _)
        h.call(_, E) && _[E] && (k = x(k, E));
      return k;
    }
    function x(_, k) {
      return k ? _ ? _ + " " + k : _ + k : _;
    }
    p.exports ? (m.default = m, p.exports = m) : window.classNames = m;
  })();
})(AT);
var dL = AT.exports;
const pL = /* @__PURE__ */ sT(dL);
function iy(p, h) {
  return {
    content: p,
    role: h
  };
}
function tE(p) {
  document.getElementById(`message-text-${p}`).focus();
}
const vL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAw4AAADyCAYAAADk+pKyAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3Xd4FFXbBvB7N430hEBo0ntNQHrvAkqTJiIo0ov03ot0RHoVBQRpIgrSe2gJBAIIoUPoPSGk1/3+4IsvQsicszuzuwn377q8vveDc2aehGR2npnzPEcHwAAiIiIiIqI02AKAzskDOmdPS8dCRERERERWxhAVBkP0y/9PHJw9YeNdwNIxERERERGRlUl6eguG6JfQWzoQIiIiIiKyfkwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISJGtpQNIiyExDoiNtHQYAnTQuWS2dBBERERERJqx7sQhMgxJDy5ZOgxlehvYFa9t6SiIiIiIiDTDpUpERERERKQoXSQOXl5eMBgMVvffxo0bLf2tISIiIiIyi3SROBARERERkWUxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFNlaOgAiIiKS553ZA6WLFkCpwvmRO4c3XJ2d4ObsBA83V7g6OyI6Ng6RUdF4FRWNiKgYPAt9ieAbIbh4/TZu3HmAxKQkS38JRGaTzcsTRfPnRqG8H6FgnpzIlS0LMtnbw93VBY6Z7KHT6RAdE4fwiEhEx8bhZUQkrt2+h2sh93At5D7uP35m6S/BKjBxyEAWjuuP8qWKWjoMTY3+8SccOHlWeLytjQ2OrV+gYUTvehUZjaSkZETHxOL+k2d4+iIMV2/fs5oP67WzRqNQ3lwWjcEUMbHxqNNpQKp/Z29niz8XT0Fmd1fh4125dRffjJiuVnhGsbO1xdZF3yOLp5vwnJNBwRg4beG////yyUNQpmgB4fkL127F2m37pOI01bYlU+Ht5SE09lVkND7pMhQGg0HjqP6n1Se1MLRLO+Hxw2YuhV/gBQ0j+q+CeXKhSc1KqF/1Y5QrWQTZvDyNPlZsXDyCb4bgyKnz2Hv8NI6cOm/xa1MKeztb+K2bb9Zzvn3dfvI8FNdC7lvNdfu32WNRIE8OobHHz17E4OmLNY7oXTOG9ECtij5ScwwGYODUhfA/H6x6PK7OTmhYvQLqVPJFnYplUTjfRyYdL+xVBA4HnMPe46ex78QZ3H34RKVI0xcmDhlI4bwfoVyJIpYOQ1MebuI3hACg0+ms6nsSERUNv9Pnsfd4ILbsOYKnoS/NHkOxAnlQpmhBs59XLVExse/9u/iERPx96CTmjuorfLxyJYpg085D2OkXoEZ4Runa5lM0rFZeeHxysgF9Js79z5/de/QU37RsJHyMlvVrmDVxyJ3DG41qVJSaU6xAHly+eUejiN7VvG414etFYlISLly9pXFEgFMmB3Ro1gCdmn+CSj7FVTtuJgd7lCtRBOVKFMHAb9rgaehLbNp1CEvXb8O1kHuqnccYer3eqq7bryKj4Xf63L/X7Wdh4WaPoXjBvChZOJ/Q2MfPw7QNJhVje3fCwG/aSM8bNmup6klD+VJF0bXNp2jbuA5cnBxVO66nmytaNqiBlg1qAADOBl/D0vXbsHHnIcTExal2HmvHGgciM3J1dsKntatg3ujvcPvgBmyZPwlVy5a0dFgZyvKN26VvNqcO6gYbvWUuh24uThjdq6PUnLXb9uLMpWv/+bPdR09JHaNGhTJm/ZprVZB7EmnsHFPInO9k0CW8jIjULBYXJ0eM7d0JN/evx6JxA1RNGlLjndkDfTu0xIVtP2PrwsnwKZZ+Hy6ozc3FCZ/VqYr5Y/oh5NBG/D5vIir7lLB0WFajR7umGNu7k/S8mT9twNzVv6sWR2WfEjiwag5ObFiEb1s1UTVpSE25EkWwfPIQ3D64AVMHdZN6052eMXEgshA7W1s0rVsVh3+dh10rZqJYgTyWDilDSExKwtCZS6TmlCiUD19LPK1X0+Bv28E7s9jyHQCIjI7B2Hkr3/nzM5euSr3B8nB1gW/xQsLjTWXtiUORfLmRw9tLeLxsoiaj/Wf1cHnXGozt3QleHuLL19Sg1+vwae0qCNi0FD9PHS71s/khsLO1RbN61eC3bj52LJ+OIvlyWzoki/q8YU3MHf2d9Lyft+xM9TpmjFzZsuL3eRPht24+apQvo8oxZWR2d8WQb9vh0o7V6PlFM4s9hDKXjP3VEaUT9aqUQ+CW5RjZvQP0ep2lw0n39h4PxI4j/lJzxvf5Gs6OmTSKKHU5vbOgf6fWUnNmrliPR89C3/nz5GQD9kjezNau6Cs13hS1jDhXjQo+0OnM8/sg+73Y6Sf38yUii6c7NswZh9XTR5pUv6AGvV6Hr5o1wPltP6NNo9oWjcVaNahaHme3rsDwbu3N9nNqTWpX9MXq6SOlb5T/OnAMfSbOVaV+qWWDGjjzx3I0q1fN5GOZysvDDfPH9MOp35eidBHxerP0hokDkZWwt7PFxH6d8dfiqXBzcbJ0OOne8FnLkJCYKDw+h7cXBnwtdxNvqgnffQOnTA7C40MePMbcNe9/tb9Lsk7DmJt5Y+TJmQ35cmWXnued2QPFC+bVIKJ3yRR13nv0FJeuh6h6/obVXt+Eft6wpqrHNZWXhxvWzR6DReMGwN6OZZFvs7ezxeT+XbB10fdwdf5wrtu+xQvh9/mT4GBvJzXv8Klz6DhsKpKSk006v06nw6xhvbDxx/FWt0SodJECOLZ+ATq1+MTSoWgiXVwFEhMTERgYaOkw3nHrlvaFcfTh+aR6Bez9eTaa9hhpkSK8jOJayD0s/u0v9O/USnjOoM5t8dPmHXjyQvviwlKF86Nj84ZSc0b8sByxcfHv/fv9J84gMSkJtjY2Qser/nFp2NnaSiVYxqhpwvKB2hV9EXwjRL1gUqHT6VBTYlnUrqPqFtJ3aNoAK74fIvzvZgnd2n6GIvlzo23/CQh7FWHpcKxOk5qVsGflLDTtORIvXr6ydDiaKpA7J7YtkX/AFRR8Ha37jUvzGibCRq/H0omDLLa8VISjgwN++n4oqviWRL/v52t+jTWndJE4hIeHo0KFCpYOg8hsypUogm1Lp6He1wMRHfvhdGtQ25Qlv+LLpvWR1dNdaLyrsxPG9umEvpPmaRyZfEG2X+AF/LHXL80xLyMicSLokvCNuouTI8qXKoqT5y4Jx2EMU2oValXwweLf/lQxmncVL5hXamnQLj/16hv6dGiBOSP6pIulLrUq+GDvz7PRqOvQDH9zbIzypYpi25KpqP/N4AzbZSeblyd2Lp+O7FkyS827cecBmvYciVeR0SbHsHDcAKtOGt7UpXUTeHm4ocOQ7zNM8sClSkRW6uOSRbByyjBLh5GuvYyIxMQFq6TmfNuqCYrm17bgsV6VclKtSZOTDRgyQ6wv+27J5UrmqHMwZUlUjfJlNL+plklsYuPicTggSJXzDvymDX4c2TddJA0pfIoVxI7l06WW2H1IKpQuhuWTB1s6DE24uThh+9JpKJA7p9S8h0+fo3H34aq0H+/Sugm6tG5i8nHMqUX96lj/w9gMs9TPqr8Kvbs39K7iXS6ITBUdG4e4eONfo3pK7jOhpNUntdD+0Ams//uAqsf9kKz8fQd6tm+GUoXzC423tbHB1IHd0KrfOE3i0et1mDaou9ScVVt34dzlG0Jjd/oFYOqgbsLHrlXRF9OWr5OKR4ax9Q0psni6o2ShfLh4/baKUf2XTPLkF3ghzb1ERDWqUVH65yA1cfEJCLhwGecuX8eFq7fw4MkzhEdEITwyCo4ODnB3dYa7qwtKFMyDssULo2KZ4sidw9ukc5YrUQTLJg1Gx2FTTY5fDdZ23W7XpC62HTyBzbsPq3pcS3Kwt8PmeROlO7GFhkfg0x4jcOfBY5NjKFU4P+aOku/glCI+IRFHTp+D/7lgnL96E/cePcXTFy8R/f+/z7Y2erg4OyGzuyvyf5QDxQvmRanC+VGroq/JdRTN6lXDqmkj0WHo92bd1FILVp04QKcHbPhSRFTrfuM1WyN79/Am4SKobQeOo9vY2ZrEERUTo8lxU4yYvQxLN2wz6Riuzk5wcXZE8QJ54FOsEKr4lkTjmpWki8hSzB7eG38fOomIKNNf8co66B+E9oMmmf28aZG96CYlJ2PIjMXY/dMs4TlN61ZF9Y9L49iZf2TDU9T+0/pSH76vIqMxfv4vwuODb4Tg7sMnyJMzm9D4KmVLwMHeDnHxCcLnkKFGS9XaFX01Sxx0Op1UC0fZNzqpKZQ3F9bMHGVSB7VjZ/7Bmj/34M/9x4T2k/j70AkAr7/eSmWKo12TuujUoqHRBb3tmtTFmUvXVO3Db6yhM5dgxaa/TTrG29ftqmVLolEN46/bc0b2wc4j/qokmZam1+uwevpI1KlUVmpedGwcWvQerVojgTkj+xj173H7/iPMW7MFG3YcQGh42vU5z8LCcfv+o//sk2Oj16Oybwl83rAmvmnZyOjfmdaNauHcleuY+dMGo+ZbC+tOHEiKJW4sUxOfkPhBF89FREUjIioaj56+wEH/IPyIzcjs7opOLT7BmF6dpAvKsnq6o8+XLTB9xW8aRfx+CYkZ49/yoH8Qth88gaZ1qwrPmT64O2p06Kfq06FMDvaY1K+z1Jxpy9ZKF2vv9AtAzy+aCY11dHBAZZ8SOHL6vNQ5RKmRONSq6IOF67aqEM27ShXOjyyCNTAAsMvE/RscHRzw+7yJ8HB1MWr+2eBrGPPjSuw/ecao+QaDAf7ng+F/PhjTlq3FqJ5foWubz4xaRjF1UDcEXryqSYJtbu9ct1e9vm5/07IxRvf6SvpmMZuXJ3q1b47ZP2/UKGLzmTvqO+luXwmJifhi4ETVdoVuXq+69LLK+IRETF68GnN+2WxSfUFScjKOn72I42cvYtLC1ejS+lMM797eqDdVE/t9i7OXrhv9+2sN+DifyAxCwyMwd/Xv8G3RxagP2Z7tM/6mMlobNnuZ1FP1imWKo5XKrTH7dmgptUzk5t0HRt0wyz4V17Itq1LiEHD+smIhafWPy2i2v4nMzcj1kPu4efeBSecb0qUdShTKJz0vOdmAyYvXoOoXfVS76Xga+hIDpi5E7Y79cffhE+n5tjY2WDCmv1V3gzJFaHgE5qzaBN8WXXEi6KL0/F7tm6f7fXnG9Ooo/BAiRXKyAV1Gz1R1k8RBndtIjY+KiUWzXiMxY8V6VYuSwyOjMGfVJpRp+q1RS4ht9Hp81/Fz1eKxBN6JEJnR/cfP0Lz36P+8BhWR0zuL9Gti+i9jbsK/H9BFtYI2Lw83DOvWXmrO8B+WG7WE6FDAOamuLloVSOfNlR15FeobDgacVazf8PJwQ6nC2myoJPO1m9qGNV+u7BjSpZ30vKiYWDTvPQqTF69BcrL666MDL15Fpba94Bd4QXpuycL5pG8s05t7j56iWa9RCAq+LjUvdw5v1Cxvvt3P1dat7WcY1+dr6XlDZizGhh0HVYujWIE8qOJbUmpOrwlzcNBfnSYGqXnyIgxfj5iGr4ZOkbrWBl68ik5WUhtkLCYORGYWERWNdgMnSt8QNqop3oWHUie77KdA7pzo0U6dm6KRPTpILU856B+EbQeOG3WumLg4HA44Jzy+YpnimuyaLdIWNvDiVQRevKo4To0lT2/T63WoXr608PjdJrZh/WF4bzg6yHUjiotPQJt+47Hn2GmTzq3kxctXaNlnjNC/xdvG9ukk3PI4vXoV+fq6HZ8g9/Q6vV63W9Svjvlj+knPm7J0rerLCts1qSs1fvfRU6omLmnZtOsQ6n09CI+evlAcGxR8HZ92H4HwyCgzRKYdJg5EFnD34RPpIuz0/OTKWsgWGgPAqJ5fGb0ePUX+j3Kg5xfNhcenFHSbQmaZgL2dLaqWLWXS+VIjcrMfePEqzlxUfgOnxVsRn2KFhNcpR0bH4OgZ+SfyKaqWLSlVY5Oi88jpZlsPHREVjWa9RiFEsgOOp5srRvTooFFU1iPkwWMs37Rdak56vG7XquCDNTNGSS+PXb5pOyYuXKV6PNXKyV2b5q/ZonoMaQm8eBX1Og9K86HU+Ss30bjbsAxRM/hhJQ5JiTDERlr/f3HKHTIo/Vu9dbfU+OIF87LOQQWrtu6SWirm5eGGoV2/MOmcUwZ0lVry9NPmHSZ3Efr78Emp8TI7J4tSutl/8OQZHj19gdMXrygeq9rHpVVfLy6TjBw8edakzlO9v2whPeeXP3bh9z1HjD6nMZ6HheObEdOQlJwsNa9L608z/FsHQP66XbJwvnS1T0epwvmxad4EZHKwl5q37cBx9P9+gerx2Oj1KF+qqPD4mLg4zRo9pOXGnQdo3HVYql2b/rl2C427pf536dEH1VUpOfIFku7LFziZnd4GdsVrWzoK0tilGyF4/DxUeAdOB3s75Mqe1agiRvqf5GQDhs9aiv2r5gjP+e6rz7F0wzbce/RU+nwVShdDq0/Ei6xfRkRikgpP7e49eorgGyHChbh1Kqn7RD9vruyKLWFT3jTcuPMALyMi03yzk9ndFWWKFhTez0KETLK0+5jxy5SyeXmiRf0aUnPuPHiMITOWGH1OU5wIuoTFv/2J774SL+J0yuSAb1s3wYwV6zWMzPIuXL2Fp6Ev4Z3ZQ2i8o4MDcmT1wsOnzzWOzHT5P8qBHctnSHcLOnDyLL4cMlk62RSRw9sLLk6OwuNv3X1ksR2aL16/jbb9x2P3yln/NgwIvhGCRl2G4nlYuEVi0gIfXxJZiMFgwIWrt6TmiH5YUdr8Ai/gj71+wuONaaOaYvrg7lJPHKcs+RXPVPqQkWkdWq5kEelWwWkRXaYEvP5dOHtJufBUzToHWxsb1PhYbP8Gg8GAXSbUN3Rp3US6yH7CwtUWbbE9ZcmveBUpd/7OnzdOV0/XjWEwGPCP7HXby/qv296ZPbBz+XTkyCr2ICtF4MWraNN/vHTthyjZJEamUFkLfoEX/l2udeXWXXzSZahq13Nr8UG9cUjh7u6O4GB1eguraefOnejWTXzHV0r/noe9lBov8+SF0jbih+VoUquy8Cv59p/Wx7w1W6SeeDetW1Vqc7FrIfew+Le/hMcr2e0XgMGd2wqNTbmR3nHEX5VzyyQOKf+7buW0O4fVruiLeSqtXy5borBwovTPtdc7MhurU4tPpMZfvX0PG3ZYdrf40PAILF7/J0Z0+1J4ToHcOVGpTHHVevdbq4x23XZ1dsK2pVNRME8uqXlXb99Ds16jEBmt3casnm5y9WXWsFxu1soNyJYlM2b9tF56D5704INMHHQ6HXLmzGnpMN7h6elp6RDIzF6+kqtnyaj90i0h5MFjzFuzBcMFW6Tq9TpMG9QdjbsNExpva2ODqQPlHgQMn7VM1dfsJ4IuKS4BelOtir5mSxwMBsN/ak0CBescbPR6VZZEyLy9MOVtQ4HcOVEgt9znzayVGzRZ9iFr/potGPh1G6ndehtWr5DhE4eXEXJdcaz5um1vZ4vN8yaiXIkiUvPuP36Gxt2Gab4EJzEpSWp8npzZkMPbS6jLkVaSkw0YNG2Rxc6vNS5VIrIg2d1Io2JiNYrkwzTzp/V49CxUeHy9KuXQoGp5obGdWzVG0fy5hY+993igajftKRISE7H/uHhHHrU6F+UTqG+4effhfzqMiLQB9XB1gU+xQibHB8hterfbhP0b6lf5WGp8dGwctu47avT51PQ8LBy7JDcTbFhN7PcjPXN1lnuDYK3Xbb1eh1+mjVB80/e252HhaNJ9OO4/Nv4tnCjZ5XI6nQ5fNW2gUTQEMHEgsigvydeq6b3/s7WJiIrG2HkrpeaM76u8IVImB3uMkmhPmZiUhKEztSmElSnqLVO0ILw83Ew+p0jR8duJwv3Hz/D4uXISV6ui6XUOdra2wi0eQ8MjEHD+stHnalBNLnH4+9AJi9Y2vO3XbXulxn9cqqgqP0PWzMtD8rot+YbCXOaM6IM2jWpLzYmMjkHz3qNx5dZdbYJ6izHJyeBv20nXapA4Jg5EFlRM4om0wWDAHcn+6qRs7ba9Uu1ZK5Ypjk9rVU5zTI92TZErW1bhYy7fuB2Xb94RHi9jz9FTwrsN6/U6qZqM95Gtb0hxRmQjOBXeinxcsojwuvP9JwKll0uk0Ot10vFu3X/MqHNpZc/RU1JPzG30etTO4Lvcy1y3k5MNuPvI+jrhjerRQbpFcHxCItr2n4DT/ygvK1TLy4hI6fqizO6u2Dh3gqrNHuh/mDgQWUj+j3JIrX1+/CzUal95p2fJyQYMnr4IBoPYzTUAjOvz9Xu7x7g4OWJoV7G6CeD1E+1Ji1YLj5f15EUYzlwS3w1YjeVKYonDuzcfIsuVqpUrZfJ+JjJfoyn1DblzZJPePPDE2X+MPp8W4hMS4X9OrmahTNECGkVjeYXy5kLeXNmFxz948gyxcfEaRiSvS+smGN/3G6k5yckGfDNimtk2I3zTySD5mpnKPiXgv3EJKvkU1yCiDxsTByILadu4ttT4k+cuaRMI4UTQJWzefVh4fNkShd+7C/B3X30u1TZ38uLVmm8MJLOLtKmJg0h9Q2JSUqrdqUQSB3cXZ5QtUdjo+ADxtxbJyQbsNWH/hiJ5P5IaH/LgsVTNjbkcl0xmiuYTfyKf3rSVXNpjbdftZvWqYeG4AdJtc/tPmW/2zQhTbD98wqh5hfLmgt/a+dgyfxKqlSuV4VsFmwsTByIL8HRzxSDBNpkpDp86p1E0BAAj56yQ6gE+vs/X7+xk7OnmioGd2wgf4/LNO1i2YbvweGPJFLgWL5gX2byM7/AmclN++eYdRMe++70WXTJmyn4O9na2qFK2pNDYwItXTOrBXjifXOJgziUgMmTfOBSRWMqTnnh5uGHAN+K/34B1XbdrlC+DtTNHS7+xm7RoNZZt1P469T7bD574TyMFGTqdDk3rVsWhNXNx6e9VGNfna1TyKW7yW8sPGb9zRGZmo9dj2aTBUhvbJCYlWU2nlYzq3qOnmPPLZuHxpYsUQMsG/90RemDnNlJLU4bOXGL0+nkZZ4OvCRUeA68/aE2pIzC2vgF43a3l9v1HivNldnx+W8UyxeGUyUForMybmtQUkUwcbt57aNL5tHLj7gOp8YXy5MpwN2Y2ej2WTxoi9fsdn5CIP62kZqV0kQLYsmCS8L41KU7/cwXfL/lVo6jEREbHqJK4FMqbC2N6dcTRdQtw3+93bJk/CUO7fIEa5cvA2TGTCpF+GD7IfRyILMXRwQELxvZDi/rVpebtOhJgkY1kcmfPiq5tPjXrORMTk7Bq626znjPF7JUb0PnzRsjpnUVo/LjenbB1nx+Skw3wzuyBvh1aCp9rp18A9h4PNDZUKcnJBuw5egpft2wkNL52RV9s2nXIqHOJJA5HAy+89++OnfkH+T/Kkeb86h+Xhq2NjVFJl1x9g/FtWAEofh1vs9bmB/cfP0NCYiLsbMVuGTI52CNntiy49+ipxpGZh6ODAxZPGPDe5Ynvs+PwSc33ORCRN1d2/L10mnS9DQCUL1UUdSqVxaGAIA0iEzfrpw1o36SuVH1JWrw83NC0btV//00Tk5Lwz9Vb8D8fjIDzl+F/Phi3rDSRtzQmDkRmoNPp0KDqx/hxZF/p5QsGgwFTl63VKLK0lSiUD4vHDzTrOWPi4iyWOETFxGLUnJ+wavoIofHFC+ZF28Z1sGHHQQzt2l64U09CYiKGzVxqSqjSdkkkDnUqGffGIf9HOZA7h7fiuEMB71++cdA/CB2bN0xzvquzE8qVLIJTF+TbpIq+rXj8PBRng69LH/9N7q7OUuPvPLC+7jvA65uq+4+fSSVCHq4u6T5x0Ol0aFitPOaO6iu9q7Ilr9tvyurpjp3LpiOHt5dR83U6HZZMGIhyLbulurzQXCKiovHt6JnY/dNM4QRWhq2NDcqWKIyyJQqjV/vmAICnoS9x6nwwAi5chv+5YARevMoGJWDiQKQZ78we8ClWCFXKlkSHpvWlnz6m2LjzkFS7UDLN+h0H0PvL5qhYRqwbx5heHXEi6BJ6tGsqfI7Fv/2FayH3jA3RKAdOnBF+alwwTy58lD2rdA91kZvy6yH302yveDDgrNC5alXwkU4cMjnYo7JPCaGxe46ekuq0lRrRRDLFi/BXJp1PS8/DwqWuYbJfu7XI5uUJn2IFUaVsKXRoWh/5jHzCvW77fpy/clPl6OS4ODli29Jp0g+r3lYgd06M7/sNhs9eplJkxjkaeAHdx/6An6cOM0uhs3dmD3xWpyo+q/O/txJBwdex/+QZ7D9xBv7ngpGQmKh5HNaGiQPRG4Z2+QLffC72VDY1tjY2cHV2gpeHuyo9pB8/D8XAaQt1nRspAAAf1klEQVRNPg6JMxgMGDxjMfzWzhf6cCqSLzd2r5gpvHb4eVg4plhgzXB4ZBSOn70ovFSndkVfrN22T+ocIsuUDioseXj09AUu37yD4gXzpjmuZgUfzFq5QSq+yj4lhP+ddplY3wDI3zzHWPCJrhLZp82yuyubYkS3L9GldROj59va2MDNxRmZ3d1UuW4/evoCg6cvNvk4prC3s8WmeRPwcckiqhyvX6dW2Lz7sFDnMy2t274PNjZ6LJkwUJM3D2mxtbFBhdLFUKF0MYzs3gGR0TE45B+Etdv34e9DJz+YJIKJA9EbcufwFlpqYQ6xcfFoN2AiXry03qeQGVXA+ctYv+MAvvysvtD4QnnFlzFMXLgKLyMijQ3NJLv9Tlk8cRBZK33QP0gxcahWrhTsbG2lPqxFlyklJCbiwAnT+9U7SRZcWnIpiBLZJRrOZnzjYE3X7Zi4OLQZMMHoLkBq0Ot0WDllGOpXkdu1PC02ej2WTx6CSm16WfwGec2fe3D/8VOsmj4S2bNYbodoFyfHf+skHj8PxZo/92Ll7zuEGjykZxmr7QFRBhEXn4Cvhk2xuh7gH5LRP65UfT3rxeu38dPmHaoeU8ZOP3/hsXUkd/8VqW9ITjbgiEB7SpHlSi5OjtJPU0WTphNBlxAeGSV17NTIdmqJs7KNwt4UK5nUfIhdamLj4vHloMlG1d6oqV6VcmjXpK7qxy1VOD+Gdf1C9eMa46B/EMq17Ibfd1tmb4m3Zc+SGcO6foGLf/+CH0b0luqamN4wcSCyMuGRUWjeexS2HThu6VA+aA+ePMMPP29U9ZhDZixGUnKyqseUceXWXYQIdu7JncNbamdzkbcNF67eFHqDdvT0BaHvU62K4m1ZnTI5CNet7Daxm1KKuPgEqfG2Zl56IcPeTi422a89vXsZEYmmPUdixxHx5FwrWi7hGdG9g+LbQHN5HhaOL4dMRvUvv8O+E+bpUKfEztYW3331OYJ3rkb3tk0z5KZzTByIrMipC5dRsXVPHPS3bOs7eu2Hnzep1hlm+8ETVvHvulPixkamdanITbxo4fPLiEicEVhLLbOfQ5WyJYVvftWobwCAqOgYqfGOmeR67JuTYya5NwiyX3t65n8+GBVa98SR0+ctHYqUR09f4Ne/9krNcbC3w7JJg9/Z/NKSTl24jE+7j0DZll2xdMM2Vd4WmsrLww0Lx/XHhjnjhPeNSS+YOBBZgbBXERg4bSFqdxyQ4ddHpicxcXEYOWeFyceJT0jEMAt3JEkhs6mZVOJQQXns4TTasL5NqYgaAKqWLSWcDIhuanf34RME3wgRGqtEdqmbk+TNuTk5O8nFFvEBJA5hryLQf8oC1Ok4wGr34HifsFcRaNJjOPpOmoebkhv8VfYpgd7tW2gUmfEuXQ9Bv+/n46OardGy71is3bYPT0NfWjSmlg1qYNvSaRkqeWDiQGRBj5+HYty8n1GsUScsWvenWXYRJjmbdx/GiaCLJh1jwdo/pD+ctXL41DnhItxaFX2FXrUXyJ0TH2XPmuaYhMREHDvzj9B5AeCQwNsZZ8dMKF+qqNDxRJMgtd42AK93vJVhzk5Estyc5boNyX7t6cmjZ6EYO28lin7SEUvW/2XR5YfGiI6NQ4veY3Dpeghi4uLQe+Jc6dbDk/p/q9pmbGqLi0/AjsMn8e2oGchdqw3Kt+qBYbOWYtuB43j8PNTs8dQsXwaLxg8w+3m1Yr0LKokyqKTkZKzbtg+bdx/GgZNnrTpZOBp4AV3HzDLrOU3tna82g8GAwdMX4/j6RUa9nn/yIgzTrGAjqBSxcfE4FBCET2tVVhybI2tmFM2fG1du3U1zXM3yZRSPderCFambyZPnLiEmLg6ODmk/qatVwRcngtJuIiBTSK1WfQMAREbLvXGwls5AqcmTM5vU+IioaI0isYyk5GSs/WsvNu8+jIP+QVZ93U5LQmIi2g+a9J/GG4cCgvDLH7vwbSvxlrYuTo5YPH4APu0utlmmpRgMBly4ehMXrt7E3NW/A3jdyKGKb0lU9i2BKr4lUapIftjotX2O3qFpA/ifC8ayjds1PY85MHEgMjMbvR57jwdiz7HTlg5FUXRsHJdOAThz6RrWbtuLTi0+kZ47fv4veBVpXTdRu/0ChBIH4PWTeqXEQaS+QaQN65ti4+Jx4uwl1KtSLs1xNSv4YNrydWmOSWndKnJO2TjTcv+xXH1MvpzW+QTXO7OH1J4UyckGPHj8XMOIzM9Gr8fuY6ex97h1FOEaw2AwoNuY2diVSnI88ocVaFyzMnJkFW9v2qBqeXRs3lC6TsLSbt9/hNv3H+G3v/cDeJ0EVSxTDFV8S6KSTwlU8imuSVekmcN64i8LvfVQExMHojfsOxGIc5dvSM+r4lsS1T8uLTz+x1F9cdD/LJ6HhUufiyxj7LyV+LxhTakbqPNXbmL11t0aRmWcnX4BWCA4tnZFXyzdsC3NMSL1DcbckB8KOKuYOKQUPccnvL+3vGh9g8wyLhGyu4Pn+8g6E4d8krve33v0BDFx5tuTYu/xQJy/In/drlauFKqWLSU8fu6ovjgcEJRu99YZMmPJvzfLbwt7FYEBUxdg44/jpY45a1gv7D12Gk9ehKkRokVERsfgoH/Qv80rdDodihXIg8o+JVC17OvP9oJ5xPfqeR9HBwcM/KaNxXfgNhUTB6I3bD94QvEmKTXZs2TG+W0rhZ9SZPV0x5wRfdBp+FTpc5FlPHoWinlrtmB0z6+E54z+cYVVrn++9+gpLl0PQcnC+RTH1qzgA71eh+Tk1JeQidQ3RMXEIuB8sHScIl2oUtqsplU/IdIqFgD2HFOvvgEAroXclxpfpmhBVc+vlrLFC0mNv3JbLmEy1V8HjmHFpr+l5+XImhkXtv8CdxdnofHZvDwxe3gvdB45Q/pcljZt+TosWPtHmmO27juKvw4cQ/N61YWPm9ndFXNH9UX7wZNNDdFqGAwGXL55B5dv3sEvf+wCAOTLlR2NalREx+YNUaF0MaOP3b1dU8xY8RtCwy23QaCpWBxNpILHz0Mx+sefpOZ88Wld4eUiZB1kO6eEPHiiUSSmE90MLounO0oVLvDevxe5KT9+9mKabwTeJyj4utAOvGnF4ObihLIlCgudb5efuonD9TtyiYNPsYJW2X1F5m0qIP+mxVIePQvFGMnrdoemDdC4ZiWNItLGT5t3YPz8X4TG9puyQHpn+1af1EKzetWMCS3dCHnwGEs3bEO19n1RuW1vo1trOztmQj0Vd/S2BCYORCpZ+ftOHD8r131n0fgBwk+7iNSkVltWkfqGw0bWDSQlJ+PIKeXe+Gnt51Dj4zKwtbFRPMbV2/dw695DqfiU3Lz7UKqI1s7WVrhLlDlVKyeXOCjVxFiTFZv//k+hsIhF4wbAzUWuy5SlbN13FN9Nnic8/tHTFxj5w3Lp8ywY3Q8eri7S89Kjs8HX0KjrUHw3eZ5RRfJ1K6e9/NLaMXEgUonBYEDviT9KPVnN6Z0F04f00DAqotSdDLok9DQfAGqnkRyIvHEwZeO7g/7Km8ZV9i0BB3u7VP9OdJO41ApGTRUbF49TFy5LzalfrbzqcZiiZOF8ikvR3nb4lPh+HZaWnPz6up2QKH7d/ih7Vkwd1E3DqNRx0D8InYZPlV4u+fOWXdKb2eXw9sL0Id2l5qR3yzZuR7/v50vPE106aa2YOBCp6PLNO5i1coPUnG9bNUadSmU1iogodYlJSdh/4ozQ2Orly6TarrBgnlzIlS3tm8rQ8AijCldTiCQdjg4OqFSmeKp/J7p/w+6j6icOAIS/xynaNa4jtHeGuXz5WX2p8SEPHuO6ZG2HpV26HoIfftkkNadbm8+E2hBbyplL19Cm/3jExSdIzzUYDOg1YY50gXvnzz+8z7KfNu+Q7rQlm4hbGyYORCqbseI3qQ9OnU6HpRMHwdnReneNpYxJ9Cm7h6tLqnUCIk/OjgaeN6lA/FrIPTx48kxxXGqdkzzdXOFTTLmwNyIqWmpzOhmyiUP+j3KgYhnjiy/VpNfr0P7TelJz9qXTdqXTlq6T2qRRp9Nh2aTBVlmTcvfhEzTrOdKkvTRu3HmAKUt+lZqj0+mwZMJATb8nmd1dhWuWzGW25MPCTA72cJXcUNGaMHEgUllsXDz6TJLbiTP/Rzkw4bvOGkZF9K49R0+9t1vS21J7cl+zgvITV1OWKckcI7UlSdXLlxbatO+g/1mjirdFBF68Kl1s2ufLlprEIqtZ3WrST0fT6z4HMXFx6CtRCwC8fuM2ru/XGkVkvIs3QvBMhVbfc37ZLN2evEDunBjf9xuTz50aNxcnbF86Db/NHmNVD9qOnflHOknz8nDTKBrtMXEg0sDhU+ekN8Xp+1VLVPJJfbkFkRaehYXj9D9XhMam9kRf5I2DGhuqiSQOlcoURyYH+//8megyJbW7Kb0pMSkJf+4/JjWnbeM6KFU4v0YRidHpdBjbu5PUnLBXEdh33Po3tnyfAyfPYt32fVJz+ndqbVJ7TmuWmJSEnuPnSBcA9+vUSvUif2fHTPhr8VRUKF0MBfPkwvwx/VQ9vikSk5Jw75HcZo/pdedxgIkDkWaGz14m9dTHRq/H8klD3lvkSaQF0bX9b+++LFLf8OjpC1U67BwMUC6QzuRgj8o+Jf7zZyKJg8FgkOowZYyl6+X2htHrdZg8oItG0Yhp/UktlC7y/ja8qfnlj12qbqBnCcNmLpXa4C3lum1vlzG3xTobfA1zV/8uNcdGr8eySYOFdmsXkcnBHr/Pn4Rq5f63WV/H5g3x3Vefq3J8NcgmAqHpdBNBgIkDkWZevHyF4bOWSs0pXjAvRvYQ32CMyFSiT9tdnBxRofT/niIKvW04ZfrbBuB1AnL55h3FcW8uV3q9/4TyU/sLV2/h4dPnJsWn5GzwNenuSp/WqoyvmjXQKKK0eWf2wI+j+krNSUpOlk6QrNGzsHCMkGxHWrJwPgzv9qVGEVne5EVrpOo/AKB0kQIY1vULk89tb2eL9XPGpbqD/KxhvdCuSV2Tz6GGHN5ZhMfGxMWl6wSbiQORhtZt3y+9xntol3ZWu4MsZTxBl6/j0bNQobFvPsHXug2rMcd6M6Ya5csIdSfapVE3pbcZsyP93FHfIV+u7BpE8346nQ6Lxw+Ed2YPqXm7jvgjRHKDRGu15s890i1lh3f70uLLy7QSExeH3hPl6vYAYET3DiheMK/R57W1scGaGaPeu1GqXq/Dz1OHWTx5KJzvI2T1dBcef/HabQ2j0R4TByINGQwG9Jk0V6qtnZ2tLZZPHiy0aRWRqV4v1RG7eX6zzkFk4zc16htSiCxXqlimOBwdXnd0EW7DqsH+DanZtOsQbtyRe2rr5uKEv5dNQzYvT42ieteUgV2ldwFOTjZg6rJ1GkVkfinX7di4eOE59na2WD55SKptizOCQwFBWLV1t9QcB3s7LJs0WKhBwdv0eh1+mjIUnzesmeY4O1tbrJ4+EgO/aSN9DrV83aKR1HjZDQetTcb8CSeyIjfvPsC0pXIfquVKFLHohZA+LKJr/Kv4lkQmB3sUypsLORVezd+480C6YDAtR09fUGzr6mBvhyplX9c5iCQOoeERCDgvt4TIWPEJiRg4baH0vCL5cmPnihnIIvFE01ije36FId+2k5635q89CLx4VYOILOd6yH3MWPGb1JzypYqif6fWGkVkeSNmLxd+O5misk8J9G7fQmqOTqfDonEDhfcQ0et1mDGkBzbNnQBPN1epc5kqX67s6P1lc6k5RwO1af1sLkwciMxgzqpNuHQ9RGrO2N6dUCRfbm0CInrDgZNnhNqRphQgm6ub0pteRkTijMDNac0Kvsjm5YliBfIojt177LRJe0zI2nPsNLYdOC49r3SRAgjYtESz7j1OmRywavoIo9pohkdGYezcleoHZQVmrdwgXdw//ruvUShvLo0isqywVxEYMHWB9LxJ/b9FXokld2WKFkDnzxtLn6dF/eo4v22l2ZYuZXZ3xaa5E+Di5Cg851lYuGabTZoLEwciM4hPSETviT8K98wHXt+kGfual0jGq0jxDdBqVfRFzfLmTxwA4KDAMWtV8EHNCj5C9Q1ad1NKzeCZSxAVEys9L3cObxxc/SPG9OoodaOipE6lsji+fpH0DtEpJi1cjScvwlSLx5qkXLdl1vY7Ojhg6cTBVrX7t5q27juKvw7ItRd2cXLEonEDhMefv3IT3y9ZIxsaACB7lsz4deYo+K2bj0+qVzDqGCLKFC0Iv3Xz4VtceYPJN/2yZZdRu3lbk4zZP0yBwWDAw4cPLR3GO8LCMubFl147ee4Sfvr9b3Rv21R4TrVypdDzi+ZY/NufGkZG9Lota93KZRXH1ankq1iwm5xswBHJ4lIRh/yDMEKhe02F0sXQpFYlxWMlJSdjrwX2HLjz4DG6jpmF32aPkb65dLC3w7g+X6PHF83ww88b8dv2/Xga+lI6Br1eh9oVfTGoczs0rFZeen6K7QdPYOG6rUbPTw+OnfkHP2/ZhS6tmwjPqVm+DLq3/QzLNm7XMDLL6TdlAWpV9IWHq4vwnIbVyqNj84bC+xtNXbYWJQvlQ6tPahkVY2WfEti+dBouXr+NnzbvwMadB6Xa7L5PvlzZMfjbdvi2VWPpdrOR0TFYsv4vk2OwtA8ycQgPD0euXBnzVSJZtzE/rkTTOtWQI2tm4TnfD+iCvw+fxN2HTzSMLHXlSxXFrhUzzX5eEXN+2YR9J9LnLrXWaJdfAGYO7ak4rrJPScW3YBev31Jl59q3nTx3CTFxcf8WQKfG3s4WbRvXUTzW6X+u4LkGMYrYsucIZhYrhOHd2hs1P5uXJ2YO7Ympg7rhwMmz2Hc8EOcuX8f5KzcRHhn1zngbvR6F8uaCb/HCqORTHK0a1EQOby+Tvoart++h86jp0p120qNRc1bgszpVpIrUpw7qhp1+AarW+ViLR09fYNScFVg8fqDUvFnDemHvsdNCb6iSkw34esQ0uLu5oH6Vj40NFaUK58fcUX3xw4jeCPznKg74n0VQ8HWcv3ID9x49VVyq6OHqgpKF86GKb0nUr1oetSv6Gr0K4PvFv+LBk2dGzbUmH2TiQGQpLyMiMXj6Ivz2w1jhOS5OjlgyYSA+6zHS7B/SXh5uqfbPtgbrdxywdAgZytXb93Dr3kMUyJ0zzXEiH5pqtmF9U2xcPE6cvaT4MynyJNBc3ZTeZ/yCn+FTrCAa1aho9DFsbWzwSfUK/1mSERkdg/CISIRHRMExkwPcXV3g4eqi6pLHV5HRaNN/PF5FRqt2TGsW9ioCQ2Yswa8zRwnPcXV2wqJxA9Csl/ic9GTl7zvRrkldoXqnFJndXTF3VF+0HzxZaHx8QiLa9BuPTfMmoEFV49+MAa+T50o+xVHJp/i/f5aYlIQnz0Px5EUYoqJjEZ+QCAd7O7i7OsPD1QVurs5wd3E26bwpzl2+gfm/blHlWJb2QSUOehcv6Aoqv8K2uIy5NJL+3+97juCr5g3RpKb4z2KDqq9f8675c4+GkdGHbqdfAPp2aGnycQ5rUN+Q4lDAWVWS2V0WqG94U3KyAV8MnIiNcyeouhbbxckRLk6Oirt6GysyOgYt+oxWZUfw9GTjzoP4qlkDqX+rRjUqokPTBli3fZ+GkVmGwWBA74k/InDLsjTfAL6t1Se10GznQeEmAVExsWjZZwxWTRuJ1o2MW7b0PrY2NsiVLatmvyspHj0LRat+46R3l7ZWH1ZxtI0tdJlcrP8/B/F1g5Q+9ft+vnSB5KxhPaWWOBHJUuMpfEJiIo4KFlobQ423GY+eheLc5RsqRGOa6Ng4tPpuLDbvPmzpUISEhkfgsx4jhAvpM5rvJs+T3vF39vBeZt2Hw5yuh9zHlCW/Ss9bMLqfVH1EfEIiOgz9HhMXrpJqMGINomJi8XnfMRlqydqHlTgQWYm7D59g4sJVUnM83Vwxf0w/bQIiAuAXeMGojj9vCrx4FRFR2i1hCQq+jrBXESYdY8+xU1azNj8+IREdh02x+gYI10LuoWaHfjgRlL43rzJFyIPHmLxotdQcLw83zBv9nUYRWd6cXzbj/JWbUnNyeHth2uDuUnMMBgOmLF2LFn1GS+8lYSmPn4ei/jeDcObSNUuHoiomDkQWsnDtVgQFX5ea07xedaO7TBApiY2LxyF/5R2a06JVfUOKpORkHDl13qRj7LJwfcPbkpMNGDB1IVr2HYvHz63rpshgMGDJ+r9QsXVPXAu5Z+lwLG7emi24cFXuRvnzhjXRon51jSKyrMSkJPQY94P0MpxvWzVGnUrKXdzetvvoKfg274K12/ZZTfKfmovXb6NGh34ZLmkAmDgQWUxiUhJ6T/xRegOquaP6wsvDTaOo6ENn6tp/LesbUhw0IblJSEzEgZNnVIxGPTsOn0S5lt3wx14/S4cCAHj49Dk+6zES/acskF6ik1ElJiWh1wT56/b8Mf2Q2d28uxqby9nga5i3Rq7wV6fTYcmEgXDKJF4fkSLsVQS+HTUDtb7qjxNBF6Xnayk+IRGTF69B5ba9cOfBY0uHowkmDkQWdObSNSyS7IOezcsTs4f30igi+tCZ8jQ+OjYO/ueDVYwmdaa81Th+9qJVdwN6HhaOLwZNQpNuw3E22DJPK19FRmPSotUo9VlntjxOxel/rmDp+m1Sc7JnySzU7ji9mrxoNW7efSA1p0DunBjX92ujz+l/Phi1Ow5Ai96jceS0aW8hTZWcbMDWfUdRoXUPTF68BvEJiRaNR0tMHIgsbMKCVbj/WK63c4emDdBYoisTkaj7j5/hn2u3jJp7IuiiWXZFvRZyz+h+6Lv9LNtNSdT+k2dQpV0ffNp9BHb5BZilI8utew8x8oflKFi/Pb5f8isio2M0P2d6NX7Bz9I/g51afGLShnvWLDo2Dr0nzpVePtS/U2uUL1XUpHPv9AtAg86DUaltL6zY9LfJNVAyIqNjsObPPfBt0QXtBk7E5Zt3zHZuS7HuxMGQDCQlpI//iIwUGR2DflMWSM9bNG4A3FycNIiIPnQ7jxj31sEcy5RSGPvWYddR66pvSIvBYMC+E4Fo3ns0ctdqg25jZ2PHEX9Vk7PLN+9g6rJ1qNimJ4o17oQfftmU6iZy9F+vIqMxYOoi6XmLxw+Eq3PGvG4fCgjCqq27pebY6PVYNmmw9C7MqQkKvo4+k+YiT+22aN1/PJZv2q5JXc7zsHD8sdcP7QdPRq4ardF1zKwPqj2xDoBBnzU/bLwLWDqWdyS/fIykB+mgg4PeBnbFa1s6Ck3ly5UdOp3YBhPRMbFCO0Oag06nQ75c2YXHv3gZbrFlDHlzZYde8Huc4umLMOkuOLmyZYW9XfrfwuV5WLim3XtS4+rshCye7sLj7z9+hoTE9PfK2sXJEVkze0jPM+bn0Vgeri7wNGLN+O37jzSIxrycHTOhdJECKFUk/+v/Wzg/cufwhrurM9xd3t3sLTI6BhGR0XgR/grBN0Lwz7VbuHjtNi5cu2WVbSLT03Vb5rMxxZPnodI1IzLX7ZjYOIsV2WdysEeOrPK7kj98+lyzt5U5smZGmaIFUapwfhQvmBf5PsqBbF6eyOntlWYS9zIiEncfPsGdB09w+8EjXLh6C/7ngj/YJgFJT28h+dltJg6q+AASByIiSh9cnBzh6uyI2LgEhEdGprve90Tm5O7iDL1eDxdnR0RGxSA2Lh4xcWwG8LaUxCFdPHZ0d3fH/v37LR3GO/bv34+RI0daOgwiIqJ/RUbHsD6BSFDK0jxz1kakZ+kicbC1tUX58tZXUHTrlnEFhERERERE6Y11F0cTEREREZFVYOJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkiIkDEREREREpYuJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkiIkDEREREREpYuJARERERESKmDgQEREREZEiJg5ERERERKSIiQMRERERESli4kBERERERIqYOBARERERkSImDkREREREpIiJAxERERERKWLiQEREREREipg4EBERERGRIiYORERERESkyNbSAYh48eIFdDqdpcMgIiIiIvpg8Y0DEREREREpsuo3DjoXT9jm9bV0GAL4NoSIiIiIMjbrThxsHQAXB0uHQURERET0weNSJSIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBQxcSAiIiIiIkVMHIiIiIiISBETByIiIiIiUsTEgYiIiIiIFDFxICIiIiIiRUwciIiIiIhIERMHIiIiIiJSxMSBiIiIiIgUMXEgIiIiIiJFTByIiIiIiEgREwciIiIiIlLExIGIiIiIiBTpABh0Th7QOXtaOhYiIiIiIrIyhqgwGKJfvk4cLB0MERERERFZt/8DIAA0PUbrwnkAAAAASUVORK5CYII=";
function hL({ iconColor: p }) {
  return /* @__PURE__ */ Ye.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Ye.jsx("path", { d: "m60.875 276.5 99.766 53.922 174.7-143.03-161.79 206.74v77.512l72.832-96.914 115.88 63.434v0.003906c5.7188 3.1289 12.594 3.3203 18.477 0.51563 5.8828-2.8086 10.059-8.2734 11.219-14.688l69.797-384.68-400.35 201.14c-4.4648 2.2227-7.957 6.0117-9.8047 10.645-1.8477 4.6328-1.9219 9.7852-0.21094 14.469 1.7109 4.6875 5.0859 8.5781 9.4883 10.93z", fill: p }) });
}
function mL({ iconColor: p }) {
  return /* @__PURE__ */ Ye.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Ye.jsx("path", { d: "m256 112c89.859 0 172.86 51.543 219.85 136.24l4.3047 7.7617-4.3047 7.7617c-46.973 84.691-129.99 136.24-219.85 136.24-89.852 0-172.86-51.547-219.84-136.24l-4.3047-7.7617 4.3047-7.7617c46.98-84.695 129.99-136.24 219.84-136.24zm0 32c-73.402 0-141.95 39.918-184.33 107.04l-3.0508 4.9609 3.0508 4.9609c42.375 67.117 110.93 107.04 184.33 107.04 75.199 0 145.3-41.895 187.38-112-42.086-70.109-112.19-112-187.38-112zm0 32c44.184 0 80 35.816 80 80s-35.816 80-80 80-80-35.816-80-80 35.816-80 80-80zm0 32c-26.508 0-48 21.492-48 48s21.492 48 48 48 48-21.492 48-48-21.492-48-48-48z", fill: p }) });
}
function yL({ iconColor: p }) {
  return /* @__PURE__ */ Ye.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Ye.jsxs("g", { fill: p, children: [
    /* @__PURE__ */ Ye.jsx("path", { d: "m83.84 360.16 22.879-22.719c-25.051-22.496-44.734-50.328-57.598-81.441 32.48-81.121 122.08-144 206.88-144 21.824 0.28906 43.445 4.1797 64 11.52l24.801-24.961c-28.117-11.883-58.277-18.184-88.801-18.559-52.152 1.9609-102.59 19.16-145.07 49.473-42.48 30.312-75.152 72.41-93.969 121.09-1.2734 3.5156-1.2734 7.3672 0 10.883 14.211 37.711 37.125 71.535 66.879 98.719z" }),
    /* @__PURE__ */ Ye.jsx("path", { d: "m192 251.68c1.1133-15.332 7.707-29.754 18.578-40.621 10.871-10.871 25.289-17.465 40.621-18.578l28.961-29.121c-16.227-4.2734-33.293-4.2148-49.492 0.16016-16.199 4.3789-30.969 12.93-42.836 24.793-11.863 11.867-20.414 26.637-24.793 42.836-4.375 16.199-4.4336 33.266-0.16016 49.492z" }),
    /* @__PURE__ */ Ye.jsx("path", { d: "m495.04 250.56c-18.344-47.789-50.27-89.168-91.84-119.04l76.801-76.961-22.559-22.559-425.44 425.44 22.559 22.559 81.602-81.602c36.383 21.344 77.664 32.922 119.84 33.602 52.152-1.9609 102.59-19.16 145.07-49.473 42.48-30.312 75.152-72.41 93.969-121.09 1.2695-3.5156 1.2695-7.3672 0-10.883zm-175.04 5.4414c-0.066406 11.203-3.0742 22.188-8.7188 31.863s-13.73 17.703-23.449 23.273c-9.7148 5.5703-20.727 8.4961-31.93 8.4766-11.199-0.015625-22.203-2.9727-31.902-8.5742l87.039-87.039c5.7539 9.6914 8.8438 20.73 8.9609 32zm-64 144c-33.566-0.58594-66.496-9.2578-96-25.281l40.641-40.641c18.484 12.828 40.887 18.754 63.297 16.746 22.41-2.0078 43.402-11.824 59.309-27.734 15.914-15.91 25.73-36.902 27.734-59.312 2.0117-22.41-3.9141-44.812-16.742-63.297l45.922-45.922c36.715 25.199 65.426 60.406 82.719 101.44-32.48 81.121-122.08 144-206.88 144z" })
  ] }) });
}
function gL({ iconColor: p }) {
  return /* @__PURE__ */ Ye.jsx("svg", { role: "img", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Ye.jsx("path", { d: "m227.5 256-86.512 86.516c-7.8711 7.8594-7.8711 20.637 0 28.496 7.8594 7.8672 20.633 7.8672 28.492 0l86.516-86.516 86.516 86.516c7.8594 7.8672 20.637 7.8672 28.496 0 7.8672-7.8594 7.8672-20.637 0-28.496l-86.516-86.516 86.516-86.516c7.8672-7.8594 7.8672-20.633 0-28.492-7.8594-7.8711-20.637-7.8711-28.496 0l-86.516 86.512-86.516-86.512c-7.8594-7.8711-20.633-7.8711-28.492 0-7.8711 7.8594-7.8711 20.633 0 28.492z", fill: p, fillRule: "evenodd" }) });
}
const uT = ({ iconColor: p, toggleChat: h, widgetID: m, sticky: C }) => {
  const [x, _] = Pr.useState(twChatMessages[m]), [k, E] = Pr.useState(""), [ce, ne] = Pr.useState(!1), [W, Y] = Pr.useState(!1), [ae, Se] = Pr.useState(0), [G, K] = Pr.useState(0), Ne = Pr.useRef(null), yt = Pr.useRef(null), st = window.twChatPluginSettings, Fe = st.tw_chat_max_characters, Dt = getComputedStyle(document.documentElement).getPropertyValue("--tw-chat-header-close-color").trim();
  Pr.useEffect(() => {
    C && tE(m);
  }, []), Pr.useEffect(() => {
    Ne.current && yt.current && Ne.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }, [x]);
  const _e = (jt) => {
    jt.preventDefault(), ne(!0);
    const Ct = {
      widget_id: m,
      message: k
      // _wpnonce: chatSettings.nonce
    }, it = {
      headers: {
        "X-WP-Nonce": st.nonce
      }
    };
    ae && (Ct.thread_id = ae), twChatMessages[m] = [...x, iy(k, "user")], _(twChatMessages[m]), eL.post(
      `${st.root}tw-chat-assistant/v1/chat-response/`,
      Ct,
      it
    ).then((Ht) => {
      if (Ht.data.length > 0) {
        const Xe = Ht.data.replace(/(?:\r\n|\r|\n)/g, "<br />").replace(/【\d+†source】/g, "");
        _([...twChatMessages[m], iy(Xe, "assistant")]);
      }
      E(""), K(0), ne(!1), Se(Ht.data.thread_id), tE(m);
    }).catch((Ht) => {
      console.error("Error fetching messages:", Ht), _([...twChatMessages[m], iy(st.tw_chat_error_message, "error")]), ne(!1);
    });
  }, pt = (jt) => {
    const Ct = jt.target.value;
    let it = Ct.length;
    Fe && it > Fe && (jt.target.value = Ct.slice(0, Fe), it = Fe), E(jt.target.value), K(it);
  }, Ze = () => W ? /* @__PURE__ */ Ye.jsxs(Ye.Fragment, { children: [
    /* @__PURE__ */ Ye.jsx(yL, { iconColor: p }),
    " Hide Disclaimer"
  ] }) : /* @__PURE__ */ Ye.jsxs(Ye.Fragment, { children: [
    /* @__PURE__ */ Ye.jsx(mL, { iconColor: p }),
    " Show Disclaimer "
  ] }), vn = pL(
    "tw-chat-interface",
    { sticky: C },
    { embedded: !C }
  );
  return /* @__PURE__ */ Ye.jsxs("div", { className: vn, children: [
    /* @__PURE__ */ Ye.jsxs("div", { className: "tw-chat-header", children: [
      /* @__PURE__ */ Ye.jsx("span", { children: st.tw_chat_assistant_name }),
      C == 1 && /* @__PURE__ */ Ye.jsx(
        "button",
        {
          className: "close",
          onClick: () => h(),
          "aria-label": "Close chat interface",
          children: /* @__PURE__ */ Ye.jsx(gL, { iconColor: Dt })
        }
      )
    ] }),
    /* @__PURE__ */ Ye.jsxs("div", { ref: yt, className: "tw-chat-messages", id: `tw-chat-messages-${m}`, children: [
      x.map((jt, Ct) => {
        const it = Ct === x.length - 1;
        return /* @__PURE__ */ Ye.jsx(
          "p",
          {
            ref: it ? Ne : null,
            id: `tw-chat-message-${m}-${Ct}`,
            className: `message ${jt.role}`,
            children: /* @__PURE__ */ Ye.jsx("span", { dangerouslySetInnerHTML: { __html: jt.content } })
          },
          Ct
        );
      }),
      ce && /* @__PURE__ */ Ye.jsx("div", { className: "waiting-indicator", children: /* @__PURE__ */ Ye.jsx(fL, { color: "#333" }) })
    ] }),
    /* @__PURE__ */ Ye.jsxs(
      "form",
      {
        onSubmit: _e,
        className: ce ? "tw-chat-form tw-chat-visibility-0" : "tw-chat-form",
        children: [
          /* @__PURE__ */ Ye.jsxs("div", { className: "tw-chat-input-container", children: [
            /* @__PURE__ */ Ye.jsx("label", { htmlFor: `message-text-${m}`, children: "Send Message" }),
            /* @__PURE__ */ Ye.jsx("input", { placeholder: "Enter your message...", id: `message-text-${m}`, type: "text", onChange: pt, value: k, name: "message", required: "required" }),
            Fe && /* @__PURE__ */ Ye.jsx("div", { className: "tw-chat-char-count", children: /* @__PURE__ */ Ye.jsxs("span", { className: G == Fe ? "tw-chat-max-characters" : "", children: [
              G,
              " / ",
              Fe,
              " characters"
            ] }) })
          ] }),
          /* @__PURE__ */ Ye.jsxs("button", { children: [
            /* @__PURE__ */ Ye.jsx(hL, { iconColor: p }),
            /* @__PURE__ */ Ye.jsx("span", { className: "sr-only", children: "Send Message" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ Ye.jsxs("div", { className: "tw-chat-disclaimer-container", children: [
      W && /* @__PURE__ */ Ye.jsx("div", { dangerouslySetInnerHTML: { __html: st.tw_chat_disclaimer } }),
      /* @__PURE__ */ Ye.jsxs("div", { className: "tw-chat-disclaimer-links", children: [
        st.tw_chat_disclaimer && /* @__PURE__ */ Ye.jsx("button", { onClick: () => Y(!W), children: Ze() }),
        /* @__PURE__ */ Ye.jsx("a", { className: "brand-link", href: "https://treyworks.com/?utm_source=tw-chat-ui&utm_medium=referral", target: "_blank", children: /* @__PURE__ */ Ye.jsx("img", { src: vL, alt: "Powered by Treyworks" }) })
      ] })
    ] })
  ] });
};
function SL({ iconColor: p }) {
  return /* @__PURE__ */ Ye.jsx("svg", { role: "img", className: "tw-chat-icon", width: "512pt", height: "512pt", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ Ye.jsx("path", { d: "m512 179.3c0 55.102-26.008 104.11-66.41 135.45-28.969 22.477-151 107.22-190.54 107.22l8.6211-71.371h-92.371c-94.645 0-171.3-76.695-171.3-171.3v-7.9961c0-94.625 76.656-171.3 171.3-171.3h169.41c94.594 0 171.29 76.676 171.29 171.3zm-384.48-28.574c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.609 0 28.266-12.691 28.266-28.297 0.007813-15.621-12.648-28.277-28.266-28.277zm128.48 0c-15.625 0-28.273 12.656-28.273 28.277 0 15.605 12.645 28.297 28.273 28.297 15.617 0 28.277-12.691 28.277-28.297-0.011719-15.621-12.66-28.277-28.277-28.277zm128.48 0c-15.641 0-28.266 12.656-28.266 28.277 0 15.605 12.633 28.297 28.266 28.297 15.617 0 28.266-12.691 28.266-28.297-0.003907-15.621-12.648-28.277-28.266-28.277z", fill: p }) });
}
const EL = getComputedStyle(document.documentElement), qS = EL.getPropertyValue("--tw-chat-icon-color").trim();
function RL({ widgetID: p, sticky: h }) {
  const [m, C] = Pr.useState(!1), x = window.twChatPluginSettings.tw_chat_button_text || "Chat", _ = () => {
    m || tE(p), C(!m);
  }, k = () => /* @__PURE__ */ Ye.jsxs("div", { className: "tw-chat-container", children: [
    /* @__PURE__ */ Ye.jsx("div", { className: m ? "" : "tw-chat-visibility-0", children: /* @__PURE__ */ Ye.jsx(uT, { widgetID: p, iconColor: qS, toggleChat: _, sticky: h }) }),
    /* @__PURE__ */ Ye.jsxs("button", { className: "tw-chat-bubble", onClick: _, "aria-label": "Open chat interface", children: [
      /* @__PURE__ */ Ye.jsx(SL, { iconColor: qS }),
      x
    ] })
  ] });
  return /* @__PURE__ */ Ye.jsx(Ye.Fragment, { children: h ? /* @__PURE__ */ Ye.jsx(k, {}) : /* @__PURE__ */ Ye.jsx(uT, { widgetID: p, iconColor: qS, toggleChat: _, sticky: h }) });
}
window.twChatMessages = window.twChatMessages || {};
window.twChatWidgetSettings = window.twChatWidgetSettings || {};
window.twChatInitWidget = function(p, h) {
  const m = document.getElementById(`tw-chat-widget-${p}`);
  twChatWidgetSettings[p] = JSON.parse(document.getElementById(`tw-chat-widget-data-${p}`).textContent), twChatMessages[p] = [iy(twChatWidgetSettings[p].tw_chat_greeting, "assistant")], lv.createRoot(m).render(
    /* @__PURE__ */ Ye.jsx(Ok.StrictMode, { children: /* @__PURE__ */ Ye.jsx(RL, { widgetID: p, sticky: h }) })
  );
};
