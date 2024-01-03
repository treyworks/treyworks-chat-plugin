var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function EO(p) {
  return p && p.__esModule && Object.prototype.hasOwnProperty.call(p, "default") ? p.default : p;
}
var YS = { exports: {} }, tv = {}, WS = { exports: {} }, iv = { exports: {} };
iv.exports;
var VR;
function CO() {
  return VR || (VR = 1, function(p, h) {
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
      var R = "18.2.0", _ = Symbol.for("react.element"), A = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), W = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), Fe = Symbol.for("react.offscreen"), St = Symbol.iterator, Dt = "@@iterator";
      function Ge(g) {
        if (g === null || typeof g != "object")
          return null;
        var b = St && g[St] || g[Dt];
        return typeof b == "function" ? b : null;
      }
      var Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, kt = {
        transition: null
      }, Ne = {
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
      }, Je = {}, xn = null;
      function gn(g) {
        xn = g;
      }
      Je.setExtraStackFrame = function(g) {
        xn = g;
      }, Je.getCurrentStack = null, Je.getStackAddendum = function() {
        var g = "";
        xn && (g += xn);
        var b = Je.getCurrentStack;
        return b && (g += b() || ""), g;
      };
      var Gt = !1, Et = !1, nn = !1, Ke = !1, at = !1, bt = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: kt,
        ReactCurrentOwner: pt
      };
      bt.ReactDebugCurrentFrame = Je, bt.ReactCurrentActQueue = Ne;
      function it(g) {
        {
          for (var b = arguments.length, H = new Array(b > 1 ? b - 1 : 0), I = 1; I < b; I++)
            H[I - 1] = arguments[I];
          we("warn", g, H);
        }
      }
      function X(g) {
        {
          for (var b = arguments.length, H = new Array(b > 1 ? b - 1 : 0), I = 1; I < b; I++)
            H[I - 1] = arguments[I];
          we("error", g, H);
        }
      }
      function we(g, b, H) {
        {
          var I = bt.ReactDebugCurrentFrame, ue = I.getStackAddendum();
          ue !== "" && (b += "%s", H = H.concat([ue]));
          var Oe = H.map(function(Ee) {
            return String(Ee);
          });
          Oe.unshift("Warning: " + b), Function.prototype.apply.call(console[g], console, Oe);
        }
      }
      var D = {};
      function J(g, b) {
        {
          var H = g.constructor, I = H && (H.displayName || H.name) || "ReactClass", ue = I + "." + b;
          if (D[ue])
            return;
          X("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", b, I), D[ue] = !0;
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
        enqueueForceUpdate: function(g, b, H) {
          J(g, "forceUpdate");
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
        enqueueReplaceState: function(g, b, H, I) {
          J(g, "replaceState");
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
        enqueueSetState: function(g, b, H, I) {
          J(g, "setState");
        }
      }, Ye = Object.assign, We = {};
      Object.freeze(We);
      function vt(g, b, H) {
        this.props = g, this.context = b, this.refs = We, this.updater = H || be;
      }
      vt.prototype.isReactComponent = {}, vt.prototype.setState = function(g, b) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, b, "setState");
      }, vt.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var ct = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(g, b) {
          Object.defineProperty(vt.prototype, g, {
            get: function() {
              it("%s(...) is deprecated in plain JavaScript React classes. %s", b[0], b[1]);
            }
          });
        };
        for (var ft in ct)
          ct.hasOwnProperty(ft) && ht(ft, ct[ft]);
      }
      function rn() {
      }
      rn.prototype = vt.prototype;
      function tr(g, b, H) {
        this.props = g, this.context = b, this.refs = We, this.updater = H || be;
      }
      var nr = tr.prototype = new rn();
      nr.constructor = tr, Ye(nr, vt.prototype), nr.isPureReactComponent = !0;
      function Vr() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var gr = Array.isArray;
      function Sn(g) {
        return gr(g);
      }
      function rr(g) {
        {
          var b = typeof Symbol == "function" && Symbol.toStringTag, H = b && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return H;
        }
      }
      function Vn(g) {
        try {
          return Un(g), !1;
        } catch {
          return !0;
        }
      }
      function Un(g) {
        return "" + g;
      }
      function zn(g) {
        if (Vn(g))
          return X("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(g)), Un(g);
      }
      function _r(g, b, H) {
        var I = g.displayName;
        if (I)
          return I;
        var ue = b.displayName || b.name || "";
        return ue !== "" ? H + "(" + ue + ")" : H;
      }
      function Sr(g) {
        return g.displayName || "Context";
      }
      function Bn(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && X("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case k:
            return "Fragment";
          case A:
            return "Portal";
          case ce:
            return "Profiler";
          case E:
            return "StrictMode";
          case te:
            return "Suspense";
          case ye:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case W:
              var b = g;
              return Sr(b) + ".Consumer";
            case ae:
              var H = g;
              return Sr(H._context) + ".Provider";
            case $:
              return _r(g, g.render, "ForwardRef");
            case Y:
              var I = g.displayName || null;
              return I !== null ? I : Bn(g.type) || "Memo";
            case Z: {
              var ue = g, Oe = ue._payload, Ee = ue._init;
              try {
                return Bn(Ee(Oe));
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
      }, Er, da, ar;
      ar = {};
      function Dr(g) {
        if (ca.call(g, "ref")) {
          var b = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function cn(g) {
        if (ca.call(g, "key")) {
          var b = Object.getOwnPropertyDescriptor(g, "key").get;
          if (b && b.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function pa(g, b) {
        var H = function() {
          Er || (Er = !0, X("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        H.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: H,
          configurable: !0
        });
      }
      function va(g, b) {
        var H = function() {
          da || (da = !0, X("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        H.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: H,
          configurable: !0
        });
      }
      function ha(g) {
        if (typeof g.ref == "string" && pt.current && g.__self && pt.current.stateNode !== g.__self) {
          var b = Bn(pt.current.type);
          ar[b] || (X('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b, g.ref), ar[b] = !0);
        }
      }
      var ve = function(g, b, H, I, ue, Oe, Ee) {
        var qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: _,
          // Built-in properties that belong on the element
          type: g,
          key: b,
          ref: H,
          props: Ee,
          // Record the component responsible for creating this element.
          _owner: Oe
        };
        return qe._store = {}, Object.defineProperty(qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: I
        }), Object.defineProperty(qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ue
        }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
      };
      function ze(g, b, H) {
        var I, ue = {}, Oe = null, Ee = null, qe = null, st = null;
        if (b != null) {
          Dr(b) && (Ee = b.ref, ha(b)), cn(b) && (zn(b.key), Oe = "" + b.key), qe = b.__self === void 0 ? null : b.__self, st = b.__source === void 0 ? null : b.__source;
          for (I in b)
            ca.call(b, I) && !fa.hasOwnProperty(I) && (ue[I] = b[I]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          ue.children = H;
        else if (Ht > 1) {
          for (var Bt = Array(Ht), $t = 0; $t < Ht; $t++)
            Bt[$t] = arguments[$t + 2];
          Object.freeze && Object.freeze(Bt), ue.children = Bt;
        }
        if (g && g.defaultProps) {
          var It = g.defaultProps;
          for (I in It)
            ue[I] === void 0 && (ue[I] = It[I]);
        }
        if (Oe || Ee) {
          var ln = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Oe && pa(ue, ln), Ee && va(ue, ln);
        }
        return ve(g, Oe, Ee, qe, st, pt.current, ue);
      }
      function ot(g, b) {
        var H = ve(g.type, b, g.ref, g._self, g._source, g._owner, g.props);
        return H;
      }
      function Ft(g, b, H) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var I, ue = Ye({}, g.props), Oe = g.key, Ee = g.ref, qe = g._self, st = g._source, Ht = g._owner;
        if (b != null) {
          Dr(b) && (Ee = b.ref, Ht = pt.current), cn(b) && (zn(b.key), Oe = "" + b.key);
          var Bt;
          g.type && g.type.defaultProps && (Bt = g.type.defaultProps);
          for (I in b)
            ca.call(b, I) && !fa.hasOwnProperty(I) && (b[I] === void 0 && Bt !== void 0 ? ue[I] = Bt[I] : ue[I] = b[I]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          ue.children = H;
        else if ($t > 1) {
          for (var It = Array($t), ln = 0; ln < $t; ln++)
            It[ln] = arguments[ln + 2];
          ue.children = It;
        }
        return ve(g.type, Oe, Ee, qe, st, Ht, ue);
      }
      function Nt(g) {
        return typeof g == "object" && g !== null && g.$$typeof === _;
      }
      var _n = ".", dn = ":";
      function Cr(g) {
        var b = /[=:]/g, H = {
          "=": "=0",
          ":": "=2"
        }, I = g.replace(b, function(ue) {
          return H[ue];
        });
        return "$" + I;
      }
      var Vt = !1, qn = /\/+/g;
      function jt(g) {
        return g.replace(qn, "$&/");
      }
      function Kt(g, b) {
        return typeof g == "object" && g !== null && g.key != null ? (zn(g.key), Cr("" + g.key)) : b.toString(36);
      }
      function Za(g, b, H, I, ue) {
        var Oe = typeof g;
        (Oe === "undefined" || Oe === "boolean") && (g = null);
        var Ee = !1;
        if (g === null)
          Ee = !0;
        else
          switch (Oe) {
            case "string":
            case "number":
              Ee = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case _:
                case A:
                  Ee = !0;
              }
          }
        if (Ee) {
          var qe = g, st = ue(qe), Ht = I === "" ? _n + Kt(qe, 0) : I;
          if (Sn(st)) {
            var Bt = "";
            Ht != null && (Bt = jt(Ht) + "/"), Za(st, b, Bt, "", function(ad) {
              return ad;
            });
          } else
            st != null && (Nt(st) && (st.key && (!qe || qe.key !== st.key) && zn(st.key), st = ot(
              st,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              H + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (st.key && (!qe || qe.key !== st.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                jt("" + st.key) + "/"
              ) : "") + Ht
            )), b.push(st));
          return 1;
        }
        var $t, It, ln = 0, _t = I === "" ? _n : I + dn;
        if (Sn(g))
          for (var wl = 0; wl < g.length; wl++)
            $t = g[wl], It = _t + Kt($t, wl), ln += Za($t, b, H, It, ue);
        else {
          var ru = Ge(g);
          if (typeof ru == "function") {
            var ds = g;
            ru === ds.entries && (Vt || it("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vt = !0);
            for (var ps = ru.call(ds), Ii, vs = 0; !(Ii = ps.next()).done; )
              $t = Ii.value, It = _t + Kt($t, vs++), ln += Za($t, b, H, It, ue);
          } else if (Oe === "object") {
            var hs = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (hs === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : hs) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ln;
      }
      function Oa(g, b, H) {
        if (g == null)
          return g;
        var I = [], ue = 0;
        return Za(g, I, "", "", function(Oe) {
          return b.call(H, Oe, ue++);
        }), I;
      }
      function ml(g) {
        var b = 0;
        return Oa(g, function() {
          b++;
        }), b;
      }
      function ro(g, b, H) {
        Oa(g, function() {
          b.apply(this, arguments);
        }, H);
      }
      function ao(g) {
        return Oa(g, function(b) {
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
          $$typeof: ae,
          _context: b
        };
        var H = !1, I = !1, ue = !1;
        {
          var Oe = {
            $$typeof: W,
            _context: b
          };
          Object.defineProperties(Oe, {
            Provider: {
              get: function() {
                return I || (I = !0, X("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), b.Provider;
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
                return H || (H = !0, X("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), b.Consumer;
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
          }), b.Consumer = Oe;
        }
        return b._currentRenderer = null, b._currentRenderer2 = null, b;
      }
      var ti = -1, ka = 0, Fi = 1, Br = 2;
      function $r(g) {
        if (g._status === ti) {
          var b = g._result, H = b();
          if (H.then(function(Oe) {
            if (g._status === ka || g._status === ti) {
              var Ee = g;
              Ee._status = Fi, Ee._result = Oe;
            }
          }, function(Oe) {
            if (g._status === ka || g._status === ti) {
              var Ee = g;
              Ee._status = Br, Ee._result = Oe;
            }
          }), g._status === ti) {
            var I = g;
            I._status = ka, I._result = H;
          }
        }
        if (g._status === Fi) {
          var ue = g._result;
          return ue === void 0 && X(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ue), "default" in ue || X(`lazy: Expected the result of a dynamic import() call. Instead received: %s

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
        }, H = {
          $$typeof: Z,
          _payload: b,
          _init: $r
        };
        {
          var I, ue;
          Object.defineProperties(H, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return I;
              },
              set: function(Oe) {
                X("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), I = Oe, Object.defineProperty(H, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ue;
              },
              set: function(Oe) {
                X("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ue = Oe, Object.defineProperty(H, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return H;
      }
      function ji(g) {
        g != null && g.$$typeof === Y ? X("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? X("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && X("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && X("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var b = {
          $$typeof: $,
          render: g
        };
        {
          var H;
          Object.defineProperty(b, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(I) {
              H = I, !g.name && !g.displayName && (g.displayName = I);
            }
          });
        }
        return b;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function re(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === k || g === ce || at || g === E || g === te || g === ye || Ke || g === Fe || Gt || Et || nn || typeof g == "object" && g !== null && (g.$$typeof === Z || g.$$typeof === Y || g.$$typeof === ae || g.$$typeof === W || g.$$typeof === $ || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === x || g.getModuleId !== void 0));
      }
      function de(g, b) {
        re(g) || X("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var H = {
          $$typeof: Y,
          type: g,
          compare: b === void 0 ? null : b
        };
        {
          var I;
          Object.defineProperty(H, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return I;
            },
            set: function(ue) {
              I = ue, !g.name && !g.displayName && (g.displayName = ue);
            }
          });
        }
        return H;
      }
      function he() {
        var g = Be.current;
        return g === null && X(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function dt(g) {
        var b = he();
        if (g._context !== void 0) {
          var H = g._context;
          H.Consumer === g ? X("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : H.Provider === g && X("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return b.useContext(g);
      }
      function Ct(g) {
        var b = he();
        return b.useState(g);
      }
      function lt(g, b, H) {
        var I = he();
        return I.useReducer(g, b, H);
      }
      function je(g) {
        var b = he();
        return b.useRef(g);
      }
      function Fn(g, b) {
        var H = he();
        return H.useEffect(g, b);
      }
      function Xt(g, b) {
        var H = he();
        return H.useInsertionEffect(g, b);
      }
      function Jt(g, b) {
        var H = he();
        return H.useLayoutEffect(g, b);
      }
      function Rr(g, b) {
        var H = he();
        return H.useCallback(g, b);
      }
      function di(g, b) {
        var H = he();
        return H.useMemo(g, b);
      }
      function Zt(g, b, H) {
        var I = he();
        return I.useImperativeHandle(g, b, H);
      }
      function Ir(g, b) {
        {
          var H = he();
          return H.useDebugValue(g, b);
        }
      }
      function ts() {
        var g = he();
        return g.useTransition();
      }
      function pi(g) {
        var b = he();
        return b.useDeferredValue(g);
      }
      function ut() {
        var g = he();
        return g.useId();
      }
      function io(g, b, H) {
        var I = he();
        return I.useSyncExternalStore(g, b, H);
      }
      var Hi = 0, gl, Yr, ns, Or, rs, as, is;
      function lo() {
      }
      lo.__reactDisabledLog = !0;
      function Go() {
        {
          if (Hi === 0) {
            gl = console.log, Yr = console.info, ns = console.warn, Or = console.error, rs = console.group, as = console.groupCollapsed, is = console.groupEnd;
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
          Hi++;
        }
      }
      function Pi() {
        {
          if (Hi--, Hi === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ye({}, g, {
                value: gl
              }),
              info: Ye({}, g, {
                value: Yr
              }),
              warn: Ye({}, g, {
                value: ns
              }),
              error: Ye({}, g, {
                value: Or
              }),
              group: Ye({}, g, {
                value: rs
              }),
              groupCollapsed: Ye({}, g, {
                value: as
              }),
              groupEnd: Ye({}, g, {
                value: is
              })
            });
          }
          Hi < 0 && X("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var vi = bt.ReactCurrentDispatcher, Na;
      function Sl(g, b, H) {
        {
          if (Na === void 0)
            try {
              throw Error();
            } catch (ue) {
              var I = ue.stack.trim().match(/\n( *(at )?)/);
              Na = I && I[1] || "";
            }
          return `
` + Na + g;
        }
      }
      var hi = !1, oo;
      {
        var uo = typeof WeakMap == "function" ? WeakMap : Map;
        oo = new uo();
      }
      function El(g, b) {
        if (!g || hi)
          return "";
        {
          var H = oo.get(g);
          if (H !== void 0)
            return H;
        }
        var I;
        hi = !0;
        var ue = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Oe;
        Oe = vi.current, vi.current = null, Go();
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
              } catch (_t) {
                I = _t;
              }
              Reflect.construct(g, [], Ee);
            } else {
              try {
                Ee.call();
              } catch (_t) {
                I = _t;
              }
              g.call(Ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_t) {
              I = _t;
            }
            g();
          }
        } catch (_t) {
          if (_t && I && typeof _t.stack == "string") {
            for (var qe = _t.stack.split(`
`), st = I.stack.split(`
`), Ht = qe.length - 1, Bt = st.length - 1; Ht >= 1 && Bt >= 0 && qe[Ht] !== st[Bt]; )
              Bt--;
            for (; Ht >= 1 && Bt >= 0; Ht--, Bt--)
              if (qe[Ht] !== st[Bt]) {
                if (Ht !== 1 || Bt !== 1)
                  do
                    if (Ht--, Bt--, Bt < 0 || qe[Ht] !== st[Bt]) {
                      var $t = `
` + qe[Ht].replace(" at new ", " at ");
                      return g.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", g.displayName)), typeof g == "function" && oo.set(g, $t), $t;
                    }
                  while (Ht >= 1 && Bt >= 0);
                break;
              }
          }
        } finally {
          hi = !1, vi.current = Oe, Pi(), Error.prepareStackTrace = ue;
        }
        var It = g ? g.displayName || g.name : "", ln = It ? Sl(It) : "";
        return typeof g == "function" && oo.set(g, ln), ln;
      }
      function ls(g, b, H) {
        return El(g, !1);
      }
      function os(g) {
        var b = g.prototype;
        return !!(b && b.isReactComponent);
      }
      function gt(g, b, H) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return El(g, os(g));
        if (typeof g == "string")
          return Sl(g);
        switch (g) {
          case te:
            return Sl("Suspense");
          case ye:
            return Sl("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case $:
              return ls(g.render);
            case Y:
              return gt(g.type, b, H);
            case Z: {
              var I = g, ue = I._payload, Oe = I._init;
              try {
                return gt(Oe(ue), b, H);
              } catch {
              }
            }
          }
        return "";
      }
      var us = {}, Ko = bt.ReactDebugCurrentFrame;
      function Cl(g) {
        if (g) {
          var b = g._owner, H = gt(g.type, g._source, b ? b.type : null);
          Ko.setExtraStackFrame(H);
        } else
          Ko.setExtraStackFrame(null);
      }
      function ss(g, b, H, I, ue) {
        {
          var Oe = Function.call.bind(ca);
          for (var Ee in g)
            if (Oe(g, Ee)) {
              var qe = void 0;
              try {
                if (typeof g[Ee] != "function") {
                  var st = Error((I || "React class") + ": " + H + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                qe = g[Ee](b, Ee, I, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                qe = Ht;
              }
              qe && !(qe instanceof Error) && (Cl(ue), X("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", H, Ee, typeof qe), Cl(null)), qe instanceof Error && !(qe.message in us) && (us[qe.message] = !0, Cl(ue), X("Failed %s type: %s", H, qe.message), Cl(null));
            }
        }
      }
      function xt(g) {
        if (g) {
          var b = g._owner, H = gt(g.type, g._source, b ? b.type : null);
          gn(H);
        } else
          gn(null);
      }
      var Xo;
      Xo = !1;
      function so() {
        if (pt.current) {
          var g = Bn(pt.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function Ze(g) {
        if (g !== void 0) {
          var b = g.fileName.replace(/^.*[\\\/]/, ""), H = g.lineNumber;
          return `

Check your code at ` + b + ":" + H + ".";
        }
        return "";
      }
      function ni(g) {
        return g != null ? Ze(g.__source) : "";
      }
      var pn = {};
      function Wr(g) {
        var b = so();
        if (!b) {
          var H = typeof g == "string" ? g : g.displayName || g.name;
          H && (b = `

Check the top-level render call using <` + H + ">.");
        }
        return b;
      }
      function La(g, b) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var H = Wr(b);
          if (!pn[H]) {
            pn[H] = !0;
            var I = "";
            g && g._owner && g._owner !== pt.current && (I = " It was passed a child from " + Bn(g._owner.type) + "."), xt(g), X('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, I), xt(null);
          }
        }
      }
      function Rl(g, b) {
        if (typeof g == "object") {
          if (Sn(g))
            for (var H = 0; H < g.length; H++) {
              var I = g[H];
              Nt(I) && La(I, b);
            }
          else if (Nt(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var ue = Ge(g);
            if (typeof ue == "function" && ue !== g.entries)
              for (var Oe = ue.call(g), Ee; !(Ee = Oe.next()).done; )
                Nt(Ee.value) && La(Ee.value, b);
          }
        }
      }
      function an(g) {
        {
          var b = g.type;
          if (b == null || typeof b == "string")
            return;
          var H;
          if (typeof b == "function")
            H = b.propTypes;
          else if (typeof b == "object" && (b.$$typeof === $ || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          b.$$typeof === Y))
            H = b.propTypes;
          else
            return;
          if (H) {
            var I = Bn(b);
            ss(H, g.props, "prop", I, g);
          } else if (b.PropTypes !== void 0 && !Xo) {
            Xo = !0;
            var ue = Bn(b);
            X("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
          }
          typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && X("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function vn(g) {
        {
          for (var b = Object.keys(g.props), H = 0; H < b.length; H++) {
            var I = b[H];
            if (I !== "children" && I !== "key") {
              xt(g), X("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), xt(null);
              break;
            }
          }
          g.ref !== null && (xt(g), X("Invalid attribute `ref` supplied to `React.Fragment`."), xt(null));
        }
      }
      function cs(g, b, H) {
        var I = re(g);
        if (!I) {
          var ue = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = ni(b);
          Oe ? ue += Oe : ue += so();
          var Ee;
          g === null ? Ee = "null" : Sn(g) ? Ee = "array" : g !== void 0 && g.$$typeof === _ ? (Ee = "<" + (Bn(g.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Ee = typeof g, X("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ee, ue);
        }
        var qe = ze.apply(this, arguments);
        if (qe == null)
          return qe;
        if (I)
          for (var st = 2; st < arguments.length; st++)
            Rl(arguments[st], g);
        return g === k ? vn(qe) : an(qe), qe;
      }
      var ir = !1;
      function Qr(g) {
        var b = cs.bind(null, g);
        return b.type = g, ir || (ir = !0, it("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(b, "type", {
          enumerable: !1,
          get: function() {
            return it("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), b;
      }
      function ri(g, b, H) {
        for (var I = Ft.apply(this, arguments), ue = 2; ue < arguments.length; ue++)
          Rl(arguments[ue], I.type);
        return an(I), I;
      }
      function Jo(g, b) {
        var H = kt.transition;
        kt.transition = {};
        var I = kt.transition;
        kt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (kt.transition = H, H === null && I._updatedFibers) {
            var ue = I._updatedFibers.size;
            ue > 10 && it("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), I._updatedFibers.clear();
          }
        }
      }
      var co = !1, fo = null;
      function Tl(g) {
        if (fo === null)
          try {
            var b = ("require" + Math.random()).slice(0, 7), H = p && p[b];
            fo = H.call(p, "timers").setImmediate;
          } catch {
            fo = function(ue) {
              co === !1 && (co = !0, typeof MessageChannel > "u" && X("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Oe = new MessageChannel();
              Oe.port1.onmessage = ue, Oe.port2.postMessage(void 0);
            };
          }
        return fo(g);
      }
      var Ma = 0, Vi = !1;
      function Zo(g) {
        {
          var b = Ma;
          Ma++, Ne.current === null && (Ne.current = []);
          var H = Ne.isBatchingLegacy, I;
          try {
            if (Ne.isBatchingLegacy = !0, I = g(), !H && Ne.didScheduleLegacyUpdate) {
              var ue = Ne.current;
              ue !== null && (Ne.didScheduleLegacyUpdate = !1, $i(ue));
            }
          } catch (It) {
            throw Bi(b), It;
          } finally {
            Ne.isBatchingLegacy = H;
          }
          if (I !== null && typeof I == "object" && typeof I.then == "function") {
            var Oe = I, Ee = !1, qe = {
              then: function(It, ln) {
                Ee = !0, Oe.then(function(_t) {
                  Bi(b), Ma === 0 ? eu(_t, It, ln) : It(_t);
                }, function(_t) {
                  Bi(b), ln(_t);
                });
              }
            };
            return !Vi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Ee || (Vi = !0, X("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), qe;
          } else {
            var st = I;
            if (Bi(b), Ma === 0) {
              var Ht = Ne.current;
              Ht !== null && ($i(Ht), Ne.current = null);
              var Bt = {
                then: function(It, ln) {
                  Ne.current === null ? (Ne.current = [], eu(st, It, ln)) : It(st);
                }
              };
              return Bt;
            } else {
              var $t = {
                then: function(It, ln) {
                  It(st);
                }
              };
              return $t;
            }
          }
        }
      }
      function Bi(g) {
        g !== Ma - 1 && X("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ma = g;
      }
      function eu(g, b, H) {
        {
          var I = Ne.current;
          if (I !== null)
            try {
              $i(I), Tl(function() {
                I.length === 0 ? (Ne.current = null, b(g)) : eu(g, b, H);
              });
            } catch (ue) {
              H(ue);
            }
          else
            b(g);
        }
      }
      var mi = !1;
      function $i(g) {
        if (!mi) {
          mi = !0;
          var b = 0;
          try {
            for (; b < g.length; b++) {
              var H = g[b];
              do
                H = H(!0);
              while (H !== null);
            }
            g.length = 0;
          } catch (I) {
            throw g = g.slice(b + 1), I;
          } finally {
            mi = !1;
          }
        }
      }
      var tu = cs, fs = ri, ai = Qr, nu = {
        map: Oa,
        forEach: ro,
        count: ml,
        toArray: ao,
        only: yl
      };
      h.Children = nu, h.Component = vt, h.Fragment = k, h.Profiler = ce, h.PureComponent = tr, h.StrictMode = E, h.Suspense = te, h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bt, h.cloneElement = fs, h.createContext = ei, h.createElement = tu, h.createFactory = ai, h.createRef = Vr, h.forwardRef = ji, h.isValidElement = Nt, h.lazy = ma, h.memo = de, h.startTransition = Jo, h.unstable_act = Zo, h.useCallback = Rr, h.useContext = dt, h.useDebugValue = Ir, h.useDeferredValue = pi, h.useEffect = Fn, h.useId = ut, h.useImperativeHandle = Zt, h.useInsertionEffect = Xt, h.useLayoutEffect = Jt, h.useMemo = di, h.useReducer = lt, h.useRef = je, h.useState = Ct, h.useSyncExternalStore = io, h.useTransition = ts, h.version = R, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(iv, iv.exports)), iv.exports;
}
var wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BR;
function RO() {
  if (BR)
    return wt;
  BR = 1;
  var p = Symbol.for("react.element"), h = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), k = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), ae = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), $ = Symbol.iterator;
  function te(D) {
    return D === null || typeof D != "object" ? null : (D = $ && D[$] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var ye = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Y = Object.assign, Z = {};
  function Fe(D, J, be) {
    this.props = D, this.context = J, this.refs = Z, this.updater = be || ye;
  }
  Fe.prototype.isReactComponent = {}, Fe.prototype.setState = function(D, J) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, J, "setState");
  }, Fe.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function St() {
  }
  St.prototype = Fe.prototype;
  function Dt(D, J, be) {
    this.props = D, this.context = J, this.refs = Z, this.updater = be || ye;
  }
  var Ge = Dt.prototype = new St();
  Ge.constructor = Dt, Y(Ge, Fe.prototype), Ge.isPureReactComponent = !0;
  var Be = Array.isArray, kt = Object.prototype.hasOwnProperty, Ne = { current: null }, pt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Je(D, J, be) {
    var Ye, We = {}, vt = null, ct = null;
    if (J != null)
      for (Ye in J.ref !== void 0 && (ct = J.ref), J.key !== void 0 && (vt = "" + J.key), J)
        kt.call(J, Ye) && !pt.hasOwnProperty(Ye) && (We[Ye] = J[Ye]);
    var ht = arguments.length - 2;
    if (ht === 1)
      We.children = be;
    else if (1 < ht) {
      for (var ft = Array(ht), rn = 0; rn < ht; rn++)
        ft[rn] = arguments[rn + 2];
      We.children = ft;
    }
    if (D && D.defaultProps)
      for (Ye in ht = D.defaultProps, ht)
        We[Ye] === void 0 && (We[Ye] = ht[Ye]);
    return { $$typeof: p, type: D, key: vt, ref: ct, props: We, _owner: Ne.current };
  }
  function xn(D, J) {
    return { $$typeof: p, type: D.type, key: J, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function gn(D) {
    return typeof D == "object" && D !== null && D.$$typeof === p;
  }
  function Gt(D) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(be) {
      return J[be];
    });
  }
  var Et = /\/+/g;
  function nn(D, J) {
    return typeof D == "object" && D !== null && D.key != null ? Gt("" + D.key) : J.toString(36);
  }
  function Ke(D, J, be, Ye, We) {
    var vt = typeof D;
    (vt === "undefined" || vt === "boolean") && (D = null);
    var ct = !1;
    if (D === null)
      ct = !0;
    else
      switch (vt) {
        case "string":
        case "number":
          ct = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case p:
            case h:
              ct = !0;
          }
      }
    if (ct)
      return ct = D, We = We(ct), D = Ye === "" ? "." + nn(ct, 0) : Ye, Be(We) ? (be = "", D != null && (be = D.replace(Et, "$&/") + "/"), Ke(We, J, be, "", function(rn) {
        return rn;
      })) : We != null && (gn(We) && (We = xn(We, be + (!We.key || ct && ct.key === We.key ? "" : ("" + We.key).replace(Et, "$&/") + "/") + D)), J.push(We)), 1;
    if (ct = 0, Ye = Ye === "" ? "." : Ye + ":", Be(D))
      for (var ht = 0; ht < D.length; ht++) {
        vt = D[ht];
        var ft = Ye + nn(vt, ht);
        ct += Ke(vt, J, be, ft, We);
      }
    else if (ft = te(D), typeof ft == "function")
      for (D = ft.call(D), ht = 0; !(vt = D.next()).done; )
        vt = vt.value, ft = Ye + nn(vt, ht++), ct += Ke(vt, J, be, ft, We);
    else if (vt === "object")
      throw J = String(D), Error("Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead.");
    return ct;
  }
  function at(D, J, be) {
    if (D == null)
      return D;
    var Ye = [], We = 0;
    return Ke(D, Ye, "", "", function(vt) {
      return J.call(be, vt, We++);
    }), Ye;
  }
  function bt(D) {
    if (D._status === -1) {
      var J = D._result;
      J = J(), J.then(function(be) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = be);
      }, function(be) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = be);
      }), D._status === -1 && (D._status = 0, D._result = J);
    }
    if (D._status === 1)
      return D._result.default;
    throw D._result;
  }
  var it = { current: null }, X = { transition: null }, we = { ReactCurrentDispatcher: it, ReactCurrentBatchConfig: X, ReactCurrentOwner: Ne };
  return wt.Children = { map: at, forEach: function(D, J, be) {
    at(D, function() {
      J.apply(this, arguments);
    }, be);
  }, count: function(D) {
    var J = 0;
    return at(D, function() {
      J++;
    }), J;
  }, toArray: function(D) {
    return at(D, function(J) {
      return J;
    }) || [];
  }, only: function(D) {
    if (!gn(D))
      throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, wt.Component = Fe, wt.Fragment = y, wt.Profiler = _, wt.PureComponent = Dt, wt.StrictMode = R, wt.Suspense = ce, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = we, wt.cloneElement = function(D, J, be) {
    if (D == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var Ye = Y({}, D.props), We = D.key, vt = D.ref, ct = D._owner;
    if (J != null) {
      if (J.ref !== void 0 && (vt = J.ref, ct = Ne.current), J.key !== void 0 && (We = "" + J.key), D.type && D.type.defaultProps)
        var ht = D.type.defaultProps;
      for (ft in J)
        kt.call(J, ft) && !pt.hasOwnProperty(ft) && (Ye[ft] = J[ft] === void 0 && ht !== void 0 ? ht[ft] : J[ft]);
    }
    var ft = arguments.length - 2;
    if (ft === 1)
      Ye.children = be;
    else if (1 < ft) {
      ht = Array(ft);
      for (var rn = 0; rn < ft; rn++)
        ht[rn] = arguments[rn + 2];
      Ye.children = ht;
    }
    return { $$typeof: p, type: D.type, key: We, ref: vt, props: Ye, _owner: ct };
  }, wt.createContext = function(D) {
    return D = { $$typeof: k, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: A, _context: D }, D.Consumer = D;
  }, wt.createElement = Je, wt.createFactory = function(D) {
    var J = Je.bind(null, D);
    return J.type = D, J;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(D) {
    return { $$typeof: E, render: D };
  }, wt.isValidElement = gn, wt.lazy = function(D) {
    return { $$typeof: W, _payload: { _status: -1, _result: D }, _init: bt };
  }, wt.memo = function(D, J) {
    return { $$typeof: ae, type: D, compare: J === void 0 ? null : J };
  }, wt.startTransition = function(D) {
    var J = X.transition;
    X.transition = {};
    try {
      D();
    } finally {
      X.transition = J;
    }
  }, wt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, wt.useCallback = function(D, J) {
    return it.current.useCallback(D, J);
  }, wt.useContext = function(D) {
    return it.current.useContext(D);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(D) {
    return it.current.useDeferredValue(D);
  }, wt.useEffect = function(D, J) {
    return it.current.useEffect(D, J);
  }, wt.useId = function() {
    return it.current.useId();
  }, wt.useImperativeHandle = function(D, J, be) {
    return it.current.useImperativeHandle(D, J, be);
  }, wt.useInsertionEffect = function(D, J) {
    return it.current.useInsertionEffect(D, J);
  }, wt.useLayoutEffect = function(D, J) {
    return it.current.useLayoutEffect(D, J);
  }, wt.useMemo = function(D, J) {
    return it.current.useMemo(D, J);
  }, wt.useReducer = function(D, J, be) {
    return it.current.useReducer(D, J, be);
  }, wt.useRef = function(D) {
    return it.current.useRef(D);
  }, wt.useState = function(D) {
    return it.current.useState(D);
  }, wt.useSyncExternalStore = function(D, J, be) {
    return it.current.useSyncExternalStore(D, J, be);
  }, wt.useTransition = function() {
    return it.current.useTransition();
  }, wt.version = "18.2.0", wt;
}
var TO = {};
TO.NODE_ENV === "production" ? WS.exports = RO() : WS.exports = CO();
var Ui = WS.exports;
const wO = /* @__PURE__ */ EO(Ui);
var $R;
function bO() {
  if ($R)
    return tv;
  $R = 1;
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
    var h = Ui, y = Symbol.for("react.element"), R = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), ce = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Z = Symbol.iterator, Fe = "@@iterator";
    function St(x) {
      if (x === null || typeof x != "object")
        return null;
      var re = Z && x[Z] || x[Fe];
      return typeof re == "function" ? re : null;
    }
    var Dt = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ge(x) {
      {
        for (var re = arguments.length, de = new Array(re > 1 ? re - 1 : 0), he = 1; he < re; he++)
          de[he - 1] = arguments[he];
        Be("error", x, de);
      }
    }
    function Be(x, re, de) {
      {
        var he = Dt.ReactDebugCurrentFrame, dt = he.getStackAddendum();
        dt !== "" && (re += "%s", de = de.concat([dt]));
        var Ct = de.map(function(lt) {
          return String(lt);
        });
        Ct.unshift("Warning: " + re), Function.prototype.apply.call(console[x], console, Ct);
      }
    }
    var kt = !1, Ne = !1, pt = !1, Je = !1, xn = !1, gn;
    gn = Symbol.for("react.module.reference");
    function Gt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === _ || x === k || xn || x === A || x === W || x === $ || Je || x === Y || kt || Ne || pt || typeof x == "object" && x !== null && (x.$$typeof === ye || x.$$typeof === te || x.$$typeof === E || x.$$typeof === ce || x.$$typeof === ae || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === gn || x.getModuleId !== void 0));
    }
    function Et(x, re, de) {
      var he = x.displayName;
      if (he)
        return he;
      var dt = re.displayName || re.name || "";
      return dt !== "" ? de + "(" + dt + ")" : de;
    }
    function nn(x) {
      return x.displayName || "Context";
    }
    function Ke(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && Ge("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case _:
          return "Fragment";
        case R:
          return "Portal";
        case k:
          return "Profiler";
        case A:
          return "StrictMode";
        case W:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case ce:
            var re = x;
            return nn(re) + ".Consumer";
          case E:
            var de = x;
            return nn(de._context) + ".Provider";
          case ae:
            return Et(x, x.render, "ForwardRef");
          case te:
            var he = x.displayName || null;
            return he !== null ? he : Ke(x.type) || "Memo";
          case ye: {
            var dt = x, Ct = dt._payload, lt = dt._init;
            try {
              return Ke(lt(Ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var at = Object.assign, bt = 0, it, X, we, D, J, be, Ye;
    function We() {
    }
    We.__reactDisabledLog = !0;
    function vt() {
      {
        if (bt === 0) {
          it = console.log, X = console.info, we = console.warn, D = console.error, J = console.group, be = console.groupCollapsed, Ye = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: We,
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
        bt++;
      }
    }
    function ct() {
      {
        if (bt--, bt === 0) {
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
              value: X
            }),
            warn: at({}, x, {
              value: we
            }),
            error: at({}, x, {
              value: D
            }),
            group: at({}, x, {
              value: J
            }),
            groupCollapsed: at({}, x, {
              value: be
            }),
            groupEnd: at({}, x, {
              value: Ye
            })
          });
        }
        bt < 0 && Ge("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = Dt.ReactCurrentDispatcher, ft;
    function rn(x, re, de) {
      {
        if (ft === void 0)
          try {
            throw Error();
          } catch (dt) {
            var he = dt.stack.trim().match(/\n( *(at )?)/);
            ft = he && he[1] || "";
          }
        return `
` + ft + x;
      }
    }
    var tr = !1, nr;
    {
      var Vr = typeof WeakMap == "function" ? WeakMap : Map;
      nr = new Vr();
    }
    function gr(x, re) {
      if (!x || tr)
        return "";
      {
        var de = nr.get(x);
        if (de !== void 0)
          return de;
      }
      var he;
      tr = !0;
      var dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ct;
      Ct = ht.current, ht.current = null, vt();
      try {
        if (re) {
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
            } catch (Ir) {
              he = Ir;
            }
            Reflect.construct(x, [], lt);
          } else {
            try {
              lt.call();
            } catch (Ir) {
              he = Ir;
            }
            x.call(lt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ir) {
            he = Ir;
          }
          x();
        }
      } catch (Ir) {
        if (Ir && he && typeof Ir.stack == "string") {
          for (var je = Ir.stack.split(`
`), Fn = he.stack.split(`
`), Xt = je.length - 1, Jt = Fn.length - 1; Xt >= 1 && Jt >= 0 && je[Xt] !== Fn[Jt]; )
            Jt--;
          for (; Xt >= 1 && Jt >= 0; Xt--, Jt--)
            if (je[Xt] !== Fn[Jt]) {
              if (Xt !== 1 || Jt !== 1)
                do
                  if (Xt--, Jt--, Jt < 0 || je[Xt] !== Fn[Jt]) {
                    var Rr = `
` + je[Xt].replace(" at new ", " at ");
                    return x.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", x.displayName)), typeof x == "function" && nr.set(x, Rr), Rr;
                  }
                while (Xt >= 1 && Jt >= 0);
              break;
            }
        }
      } finally {
        tr = !1, ht.current = Ct, ct(), Error.prepareStackTrace = dt;
      }
      var di = x ? x.displayName || x.name : "", Zt = di ? rn(di) : "";
      return typeof x == "function" && nr.set(x, Zt), Zt;
    }
    function Sn(x, re, de) {
      return gr(x, !1);
    }
    function rr(x) {
      var re = x.prototype;
      return !!(re && re.isReactComponent);
    }
    function Vn(x, re, de) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return gr(x, rr(x));
      if (typeof x == "string")
        return rn(x);
      switch (x) {
        case W:
          return rn("Suspense");
        case $:
          return rn("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case ae:
            return Sn(x.render);
          case te:
            return Vn(x.type, re, de);
          case ye: {
            var he = x, dt = he._payload, Ct = he._init;
            try {
              return Vn(Ct(dt), re, de);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, zn = {}, _r = Dt.ReactDebugCurrentFrame;
    function Sr(x) {
      if (x) {
        var re = x._owner, de = Vn(x.type, x._source, re ? re.type : null);
        _r.setExtraStackFrame(de);
      } else
        _r.setExtraStackFrame(null);
    }
    function Bn(x, re, de, he, dt) {
      {
        var Ct = Function.call.bind(Un);
        for (var lt in x)
          if (Ct(x, lt)) {
            var je = void 0;
            try {
              if (typeof x[lt] != "function") {
                var Fn = Error((he || "React class") + ": " + de + " type `" + lt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[lt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Fn.name = "Invariant Violation", Fn;
              }
              je = x[lt](re, lt, he, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Xt) {
              je = Xt;
            }
            je && !(je instanceof Error) && (Sr(dt), Ge("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", de, lt, typeof je), Sr(null)), je instanceof Error && !(je.message in zn) && (zn[je.message] = !0, Sr(dt), Ge("Failed %s type: %s", de, je.message), Sr(null));
          }
      }
    }
    var ca = Array.isArray;
    function fa(x) {
      return ca(x);
    }
    function Er(x) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, de = re && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return de;
      }
    }
    function da(x) {
      try {
        return ar(x), !1;
      } catch {
        return !0;
      }
    }
    function ar(x) {
      return "" + x;
    }
    function Dr(x) {
      if (da(x))
        return Ge("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(x)), ar(x);
    }
    var cn = Dt.ReactCurrentOwner, pa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, va, ha, ve;
    ve = {};
    function ze(x) {
      if (Un.call(x, "ref")) {
        var re = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function ot(x) {
      if (Un.call(x, "key")) {
        var re = Object.getOwnPropertyDescriptor(x, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Ft(x, re) {
      if (typeof x.ref == "string" && cn.current && re && cn.current.stateNode !== re) {
        var de = Ke(cn.current.type);
        ve[de] || (Ge('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ke(cn.current.type), x.ref), ve[de] = !0);
      }
    }
    function Nt(x, re) {
      {
        var de = function() {
          va || (va = !0, Ge("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        de.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function _n(x, re) {
      {
        var de = function() {
          ha || (ha = !0, Ge("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        de.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var dn = function(x, re, de, he, dt, Ct, lt) {
      var je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: x,
        key: re,
        ref: de,
        props: lt,
        // Record the component responsible for creating this element.
        _owner: Ct
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
        value: dt
      }), Object.freeze && (Object.freeze(je.props), Object.freeze(je)), je;
    };
    function Cr(x, re, de, he, dt) {
      {
        var Ct, lt = {}, je = null, Fn = null;
        de !== void 0 && (Dr(de), je = "" + de), ot(re) && (Dr(re.key), je = "" + re.key), ze(re) && (Fn = re.ref, Ft(re, dt));
        for (Ct in re)
          Un.call(re, Ct) && !pa.hasOwnProperty(Ct) && (lt[Ct] = re[Ct]);
        if (x && x.defaultProps) {
          var Xt = x.defaultProps;
          for (Ct in Xt)
            lt[Ct] === void 0 && (lt[Ct] = Xt[Ct]);
        }
        if (je || Fn) {
          var Jt = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          je && Nt(lt, Jt), Fn && _n(lt, Jt);
        }
        return dn(x, je, Fn, dt, he, cn.current, lt);
      }
    }
    var Vt = Dt.ReactCurrentOwner, qn = Dt.ReactDebugCurrentFrame;
    function jt(x) {
      if (x) {
        var re = x._owner, de = Vn(x.type, x._source, re ? re.type : null);
        qn.setExtraStackFrame(de);
      } else
        qn.setExtraStackFrame(null);
    }
    var Kt;
    Kt = !1;
    function Za(x) {
      return typeof x == "object" && x !== null && x.$$typeof === y;
    }
    function Oa() {
      {
        if (Vt.current) {
          var x = Ke(Vt.current.type);
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
          var re = x.fileName.replace(/^.*[\\\/]/, ""), de = x.lineNumber;
          return `

Check your code at ` + re + ":" + de + ".";
        }
        return "";
      }
    }
    var ro = {};
    function ao(x) {
      {
        var re = Oa();
        if (!re) {
          var de = typeof x == "string" ? x : x.displayName || x.name;
          de && (re = `

Check the top-level render call using <` + de + ">.");
        }
        return re;
      }
    }
    function yl(x, re) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var de = ao(re);
        if (ro[de])
          return;
        ro[de] = !0;
        var he = "";
        x && x._owner && x._owner !== Vt.current && (he = " It was passed a child from " + Ke(x._owner.type) + "."), jt(x), Ge('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, he), jt(null);
      }
    }
    function ei(x, re) {
      {
        if (typeof x != "object")
          return;
        if (fa(x))
          for (var de = 0; de < x.length; de++) {
            var he = x[de];
            Za(he) && yl(he, re);
          }
        else if (Za(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var dt = St(x);
          if (typeof dt == "function" && dt !== x.entries)
            for (var Ct = dt.call(x), lt; !(lt = Ct.next()).done; )
              Za(lt.value) && yl(lt.value, re);
        }
      }
    }
    function ti(x) {
      {
        var re = x.type;
        if (re == null || typeof re == "string")
          return;
        var de;
        if (typeof re == "function")
          de = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === ae || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === te))
          de = re.propTypes;
        else
          return;
        if (de) {
          var he = Ke(re);
          Bn(de, x.props, "prop", he, x);
        } else if (re.PropTypes !== void 0 && !Kt) {
          Kt = !0;
          var dt = Ke(re);
          Ge("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", dt || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && Ge("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ka(x) {
      {
        for (var re = Object.keys(x.props), de = 0; de < re.length; de++) {
          var he = re[de];
          if (he !== "children" && he !== "key") {
            jt(x), Ge("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), jt(null);
            break;
          }
        }
        x.ref !== null && (jt(x), Ge("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function Fi(x, re, de, he, dt, Ct) {
      {
        var lt = Gt(x);
        if (!lt) {
          var je = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fn = ml(dt);
          Fn ? je += Fn : je += Oa();
          var Xt;
          x === null ? Xt = "null" : fa(x) ? Xt = "array" : x !== void 0 && x.$$typeof === y ? (Xt = "<" + (Ke(x.type) || "Unknown") + " />", je = " Did you accidentally export a JSX literal instead of a component?") : Xt = typeof x, Ge("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Xt, je);
        }
        var Jt = Cr(x, re, de, dt, Ct);
        if (Jt == null)
          return Jt;
        if (lt) {
          var Rr = re.children;
          if (Rr !== void 0)
            if (he)
              if (fa(Rr)) {
                for (var di = 0; di < Rr.length; di++)
                  ei(Rr[di], x);
                Object.freeze && Object.freeze(Rr);
              } else
                Ge("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ei(Rr, x);
        }
        return x === _ ? ka(Jt) : ti(Jt), Jt;
      }
    }
    function Br(x, re, de) {
      return Fi(x, re, de, !0);
    }
    function $r(x, re, de) {
      return Fi(x, re, de, !1);
    }
    var ma = $r, ji = Br;
    tv.Fragment = _, tv.jsx = ma, tv.jsxs = ji;
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
var IR;
function xO() {
  if (IR)
    return nv;
  IR = 1;
  var p = Ui, h = Symbol.for("react.element"), y = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, _ = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(E, ce, ae) {
    var W, $ = {}, te = null, ye = null;
    ae !== void 0 && (te = "" + ae), ce.key !== void 0 && (te = "" + ce.key), ce.ref !== void 0 && (ye = ce.ref);
    for (W in ce)
      R.call(ce, W) && !A.hasOwnProperty(W) && ($[W] = ce[W]);
    if (E && E.defaultProps)
      for (W in ce = E.defaultProps, ce)
        $[W] === void 0 && ($[W] = ce[W]);
    return { $$typeof: h, type: E, key: te, ref: ye, props: $, _owner: _.current };
  }
  return nv.Fragment = y, nv.jsx = k, nv.jsxs = k, nv;
}
var _O = {};
_O.NODE_ENV === "production" ? YS.exports = xO() : YS.exports = bO();
var yr = YS.exports, lv = {}, QS = { exports: {} }, Xa = {}, Zm = { exports: {} }, jS = {}, YR;
function DO() {
  return YR || (YR = 1, function(p) {
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
      var y = !1, R = !1, _ = 5;
      function A(ve, ze) {
        var ot = ve.length;
        ve.push(ze), ce(ve, ze, ot);
      }
      function k(ve) {
        return ve.length === 0 ? null : ve[0];
      }
      function E(ve) {
        if (ve.length === 0)
          return null;
        var ze = ve[0], ot = ve.pop();
        return ot !== ze && (ve[0] = ot, ae(ve, ot, 0)), ze;
      }
      function ce(ve, ze, ot) {
        for (var Ft = ot; Ft > 0; ) {
          var Nt = Ft - 1 >>> 1, _n = ve[Nt];
          if (W(_n, ze) > 0)
            ve[Nt] = ze, ve[Ft] = _n, Ft = Nt;
          else
            return;
        }
      }
      function ae(ve, ze, ot) {
        for (var Ft = ot, Nt = ve.length, _n = Nt >>> 1; Ft < _n; ) {
          var dn = (Ft + 1) * 2 - 1, Cr = ve[dn], Vt = dn + 1, qn = ve[Vt];
          if (W(Cr, ze) < 0)
            Vt < Nt && W(qn, Cr) < 0 ? (ve[Ft] = qn, ve[Vt] = ze, Ft = Vt) : (ve[Ft] = Cr, ve[dn] = ze, Ft = dn);
          else if (Vt < Nt && W(qn, ze) < 0)
            ve[Ft] = qn, ve[Vt] = ze, Ft = Vt;
          else
            return;
        }
      }
      function W(ve, ze) {
        var ot = ve.sortIndex - ze.sortIndex;
        return ot !== 0 ? ot : ve.id - ze.id;
      }
      var $ = 1, te = 2, ye = 3, Y = 4, Z = 5;
      function Fe(ve, ze) {
      }
      var St = typeof performance == "object" && typeof performance.now == "function";
      if (St) {
        var Dt = performance;
        p.unstable_now = function() {
          return Dt.now();
        };
      } else {
        var Ge = Date, Be = Ge.now();
        p.unstable_now = function() {
          return Ge.now() - Be;
        };
      }
      var kt = 1073741823, Ne = -1, pt = 250, Je = 5e3, xn = 1e4, gn = kt, Gt = [], Et = [], nn = 1, Ke = null, at = ye, bt = !1, it = !1, X = !1, we = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function be(ve) {
        for (var ze = k(Et); ze !== null; ) {
          if (ze.callback === null)
            E(Et);
          else if (ze.startTime <= ve)
            E(Et), ze.sortIndex = ze.expirationTime, A(Gt, ze);
          else
            return;
          ze = k(Et);
        }
      }
      function Ye(ve) {
        if (X = !1, be(ve), !it)
          if (k(Gt) !== null)
            it = !0, Dr(We);
          else {
            var ze = k(Et);
            ze !== null && cn(Ye, ze.startTime - ve);
          }
      }
      function We(ve, ze) {
        it = !1, X && (X = !1, pa()), bt = !0;
        var ot = at;
        try {
          var Ft;
          if (!R)
            return vt(ve, ze);
        } finally {
          Ke = null, at = ot, bt = !1;
        }
      }
      function vt(ve, ze) {
        var ot = ze;
        for (be(ot), Ke = k(Gt); Ke !== null && !y && !(Ke.expirationTime > ot && (!ve || Sr())); ) {
          var Ft = Ke.callback;
          if (typeof Ft == "function") {
            Ke.callback = null, at = Ke.priorityLevel;
            var Nt = Ke.expirationTime <= ot, _n = Ft(Nt);
            ot = p.unstable_now(), typeof _n == "function" ? Ke.callback = _n : Ke === k(Gt) && E(Gt), be(ot);
          } else
            E(Gt);
          Ke = k(Gt);
        }
        if (Ke !== null)
          return !0;
        var dn = k(Et);
        return dn !== null && cn(Ye, dn.startTime - ot), !1;
      }
      function ct(ve, ze) {
        switch (ve) {
          case $:
          case te:
          case ye:
          case Y:
          case Z:
            break;
          default:
            ve = ye;
        }
        var ot = at;
        at = ve;
        try {
          return ze();
        } finally {
          at = ot;
        }
      }
      function ht(ve) {
        var ze;
        switch (at) {
          case $:
          case te:
          case ye:
            ze = ye;
            break;
          default:
            ze = at;
            break;
        }
        var ot = at;
        at = ze;
        try {
          return ve();
        } finally {
          at = ot;
        }
      }
      function ft(ve) {
        var ze = at;
        return function() {
          var ot = at;
          at = ze;
          try {
            return ve.apply(this, arguments);
          } finally {
            at = ot;
          }
        };
      }
      function rn(ve, ze, ot) {
        var Ft = p.unstable_now(), Nt;
        if (typeof ot == "object" && ot !== null) {
          var _n = ot.delay;
          typeof _n == "number" && _n > 0 ? Nt = Ft + _n : Nt = Ft;
        } else
          Nt = Ft;
        var dn;
        switch (ve) {
          case $:
            dn = Ne;
            break;
          case te:
            dn = pt;
            break;
          case Z:
            dn = gn;
            break;
          case Y:
            dn = xn;
            break;
          case ye:
          default:
            dn = Je;
            break;
        }
        var Cr = Nt + dn, Vt = {
          id: nn++,
          callback: ze,
          priorityLevel: ve,
          startTime: Nt,
          expirationTime: Cr,
          sortIndex: -1
        };
        return Nt > Ft ? (Vt.sortIndex = Nt, A(Et, Vt), k(Gt) === null && Vt === k(Et) && (X ? pa() : X = !0, cn(Ye, Nt - Ft))) : (Vt.sortIndex = Cr, A(Gt, Vt), !it && !bt && (it = !0, Dr(We))), Vt;
      }
      function tr() {
      }
      function nr() {
        !it && !bt && (it = !0, Dr(We));
      }
      function Vr() {
        return k(Gt);
      }
      function gr(ve) {
        ve.callback = null;
      }
      function Sn() {
        return at;
      }
      var rr = !1, Vn = null, Un = -1, zn = _, _r = -1;
      function Sr() {
        var ve = p.unstable_now() - _r;
        return !(ve < zn);
      }
      function Bn() {
      }
      function ca(ve) {
        if (ve < 0 || ve > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ve > 0 ? zn = Math.floor(1e3 / ve) : zn = _;
      }
      var fa = function() {
        if (Vn !== null) {
          var ve = p.unstable_now();
          _r = ve;
          var ze = !0, ot = !0;
          try {
            ot = Vn(ze, ve);
          } finally {
            ot ? Er() : (rr = !1, Vn = null);
          }
        } else
          rr = !1;
      }, Er;
      if (typeof J == "function")
        Er = function() {
          J(fa);
        };
      else if (typeof MessageChannel < "u") {
        var da = new MessageChannel(), ar = da.port2;
        da.port1.onmessage = fa, Er = function() {
          ar.postMessage(null);
        };
      } else
        Er = function() {
          we(fa, 0);
        };
      function Dr(ve) {
        Vn = ve, rr || (rr = !0, Er());
      }
      function cn(ve, ze) {
        Un = we(function() {
          ve(p.unstable_now());
        }, ze);
      }
      function pa() {
        D(Un), Un = -1;
      }
      var va = Bn, ha = null;
      p.unstable_IdlePriority = Z, p.unstable_ImmediatePriority = $, p.unstable_LowPriority = Y, p.unstable_NormalPriority = ye, p.unstable_Profiling = ha, p.unstable_UserBlockingPriority = te, p.unstable_cancelCallback = gr, p.unstable_continueExecution = nr, p.unstable_forceFrameRate = ca, p.unstable_getCurrentPriorityLevel = Sn, p.unstable_getFirstCallbackNode = Vr, p.unstable_next = ht, p.unstable_pauseExecution = tr, p.unstable_requestPaint = va, p.unstable_runWithPriority = ct, p.unstable_scheduleCallback = rn, p.unstable_shouldYield = Sr, p.unstable_wrapCallback = ft, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
var WR;
function OO() {
  return WR || (WR = 1, function(p) {
    function h(X, we) {
      var D = X.length;
      X.push(we);
      e:
        for (; 0 < D; ) {
          var J = D - 1 >>> 1, be = X[J];
          if (0 < _(be, we))
            X[J] = we, X[D] = be, D = J;
          else
            break e;
        }
    }
    function y(X) {
      return X.length === 0 ? null : X[0];
    }
    function R(X) {
      if (X.length === 0)
        return null;
      var we = X[0], D = X.pop();
      if (D !== we) {
        X[0] = D;
        e:
          for (var J = 0, be = X.length, Ye = be >>> 1; J < Ye; ) {
            var We = 2 * (J + 1) - 1, vt = X[We], ct = We + 1, ht = X[ct];
            if (0 > _(vt, D))
              ct < be && 0 > _(ht, vt) ? (X[J] = ht, X[ct] = D, J = ct) : (X[J] = vt, X[We] = D, J = We);
            else if (ct < be && 0 > _(ht, D))
              X[J] = ht, X[ct] = D, J = ct;
            else
              break e;
          }
      }
      return we;
    }
    function _(X, we) {
      var D = X.sortIndex - we.sortIndex;
      return D !== 0 ? D : X.id - we.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var A = performance;
      p.unstable_now = function() {
        return A.now();
      };
    } else {
      var k = Date, E = k.now();
      p.unstable_now = function() {
        return k.now() - E;
      };
    }
    var ce = [], ae = [], W = 1, $ = null, te = 3, ye = !1, Y = !1, Z = !1, Fe = typeof setTimeout == "function" ? setTimeout : null, St = typeof clearTimeout == "function" ? clearTimeout : null, Dt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ge(X) {
      for (var we = y(ae); we !== null; ) {
        if (we.callback === null)
          R(ae);
        else if (we.startTime <= X)
          R(ae), we.sortIndex = we.expirationTime, h(ce, we);
        else
          break;
        we = y(ae);
      }
    }
    function Be(X) {
      if (Z = !1, Ge(X), !Y)
        if (y(ce) !== null)
          Y = !0, bt(kt);
        else {
          var we = y(ae);
          we !== null && it(Be, we.startTime - X);
        }
    }
    function kt(X, we) {
      Y = !1, Z && (Z = !1, St(Je), Je = -1), ye = !0;
      var D = te;
      try {
        for (Ge(we), $ = y(ce); $ !== null && (!($.expirationTime > we) || X && !Gt()); ) {
          var J = $.callback;
          if (typeof J == "function") {
            $.callback = null, te = $.priorityLevel;
            var be = J($.expirationTime <= we);
            we = p.unstable_now(), typeof be == "function" ? $.callback = be : $ === y(ce) && R(ce), Ge(we);
          } else
            R(ce);
          $ = y(ce);
        }
        if ($ !== null)
          var Ye = !0;
        else {
          var We = y(ae);
          We !== null && it(Be, We.startTime - we), Ye = !1;
        }
        return Ye;
      } finally {
        $ = null, te = D, ye = !1;
      }
    }
    var Ne = !1, pt = null, Je = -1, xn = 5, gn = -1;
    function Gt() {
      return !(p.unstable_now() - gn < xn);
    }
    function Et() {
      if (pt !== null) {
        var X = p.unstable_now();
        gn = X;
        var we = !0;
        try {
          we = pt(!0, X);
        } finally {
          we ? nn() : (Ne = !1, pt = null);
        }
      } else
        Ne = !1;
    }
    var nn;
    if (typeof Dt == "function")
      nn = function() {
        Dt(Et);
      };
    else if (typeof MessageChannel < "u") {
      var Ke = new MessageChannel(), at = Ke.port2;
      Ke.port1.onmessage = Et, nn = function() {
        at.postMessage(null);
      };
    } else
      nn = function() {
        Fe(Et, 0);
      };
    function bt(X) {
      pt = X, Ne || (Ne = !0, nn());
    }
    function it(X, we) {
      Je = Fe(function() {
        X(p.unstable_now());
      }, we);
    }
    p.unstable_IdlePriority = 5, p.unstable_ImmediatePriority = 1, p.unstable_LowPriority = 4, p.unstable_NormalPriority = 3, p.unstable_Profiling = null, p.unstable_UserBlockingPriority = 2, p.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, p.unstable_continueExecution = function() {
      Y || ye || (Y = !0, bt(kt));
    }, p.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xn = 0 < X ? Math.floor(1e3 / X) : 5;
    }, p.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, p.unstable_getFirstCallbackNode = function() {
      return y(ce);
    }, p.unstable_next = function(X) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var we = 3;
          break;
        default:
          we = te;
      }
      var D = te;
      te = we;
      try {
        return X();
      } finally {
        te = D;
      }
    }, p.unstable_pauseExecution = function() {
    }, p.unstable_requestPaint = function() {
    }, p.unstable_runWithPriority = function(X, we) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var D = te;
      te = X;
      try {
        return we();
      } finally {
        te = D;
      }
    }, p.unstable_scheduleCallback = function(X, we, D) {
      var J = p.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? J + D : J) : D = J, X) {
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
      return be = D + be, X = { id: W++, callback: we, priorityLevel: X, startTime: D, expirationTime: be, sortIndex: -1 }, D > J ? (X.sortIndex = D, h(ae, X), y(ce) === null && X === y(ae) && (Z ? (St(Je), Je = -1) : Z = !0, it(Be, D - J))) : (X.sortIndex = be, h(ce, X), Y || ye || (Y = !0, bt(kt))), X;
    }, p.unstable_shouldYield = Gt, p.unstable_wrapCallback = function(X) {
      var we = te;
      return function() {
        var D = te;
        te = we;
        try {
          return X.apply(this, arguments);
        } finally {
          te = D;
        }
      };
    };
  }(HS)), HS;
}
var QR;
function oT() {
  if (QR)
    return Zm.exports;
  QR = 1;
  var p = {};
  return p.NODE_ENV === "production" ? Zm.exports = OO() : Zm.exports = DO(), Zm.exports;
}
var qR;
function kO() {
  if (qR)
    return Xa;
  qR = 1;
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
    var h = Ui, y = oT(), R = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
    function A(e) {
      _ = e;
    }
    function k(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ce("warn", e, a);
      }
    }
    function E(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ce("error", e, a);
      }
    }
    function ce(e, t, a) {
      {
        var i = R.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ae = 0, W = 1, $ = 2, te = 3, ye = 4, Y = 5, Z = 6, Fe = 7, St = 8, Dt = 9, Ge = 10, Be = 11, kt = 12, Ne = 13, pt = 14, Je = 15, xn = 16, gn = 17, Gt = 18, Et = 19, nn = 21, Ke = 22, at = 23, bt = 24, it = 25, X = !0, we = !1, D = !1, J = !1, be = !1, Ye = !0, We = !1, vt = !1, ct = !0, ht = !0, ft = !0, rn = /* @__PURE__ */ new Set(), tr = {}, nr = {};
    function Vr(e, t) {
      gr(e, t), gr(e + "Capture", t);
    }
    function gr(e, t) {
      tr[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), tr[e] = t;
      {
        var a = e.toLowerCase();
        nr[a] = e, e === "onDoubleClick" && (nr.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        rn.add(t[i]);
    }
    var Sn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rr = Object.prototype.hasOwnProperty;
    function Vn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Un(e) {
      try {
        return zn(e), !1;
      } catch {
        return !0;
      }
    }
    function zn(e) {
      return "" + e;
    }
    function _r(e, t) {
      if (Un(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), zn(e);
    }
    function Sr(e) {
      if (Un(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), zn(e);
    }
    function Bn(e, t) {
      if (Un(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), zn(e);
    }
    function ca(e, t) {
      if (Un(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Vn(e)), zn(e);
    }
    function fa(e) {
      if (Un(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Vn(e)), zn(e);
    }
    function Er(e) {
      if (Un(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Vn(e)), zn(e);
    }
    var da = 0, ar = 1, Dr = 2, cn = 3, pa = 4, va = 5, ha = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ze = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ot = new RegExp("^[" + ve + "][" + ze + "]*$"), Ft = {}, Nt = {};
    function _n(e) {
      return rr.call(Nt, e) ? !0 : rr.call(Ft, e) ? !1 : ot.test(e) ? (Nt[e] = !0, !0) : (Ft[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === da : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Cr(e, t, a, i) {
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
    function Vt(e, t, a, i) {
      if (t === null || typeof t > "u" || Cr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case cn:
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
    function qn(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function jt(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === Dr || t === cn || t === pa, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Kt = {}, Za = [
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
    Za.forEach(function(e) {
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
        ar,
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
        cn,
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
        cn,
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
    var Oa = /[\-\:]([a-z])/g, ml = function(e) {
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
      var t = e.replace(Oa, ml);
      Kt[t] = new jt(
        t,
        ar,
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
      var t = e.replace(Oa, ml);
      Kt[t] = new jt(
        t,
        ar,
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
      var t = e.replace(Oa, ml);
      Kt[t] = new jt(
        t,
        ar,
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
        ar,
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
      ar,
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
        ar,
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
        _r(a, t), i.sanitizeURL && ei("" + a);
        var s = i.attributeName, f = null;
        if (i.type === pa) {
          if (e.hasAttribute(s)) {
            var v = e.getAttribute(s);
            return v === "" ? !0 : Vt(t, a, i, !1) ? v : v === "" + a ? a : v;
          }
        } else if (e.hasAttribute(s)) {
          if (Vt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === cn)
            return a;
          f = e.getAttribute(s);
        }
        return Vt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ka(e, t, a, i) {
      {
        if (!_n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return _r(a, t), o === "" + a ? a : o;
      }
    }
    function Fi(e, t, a, i) {
      var o = qn(t);
      if (!dn(t, o, i)) {
        if (Vt(t, a, o, i) && (a = null), i || o === null) {
          if (_n(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (_r(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var v = o.propertyName;
          if (a === null) {
            var m = o.type;
            e[v] = m === cn ? !1 : "";
          } else
            e[v] = a;
          return;
        }
        var C = o.attributeName, T = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var M = o.type, N;
          M === cn || M === pa && a === !0 ? N = "" : (_r(a, C), N = "" + a, o.sanitizeURL && ei(N.toString())), T ? e.setAttributeNS(T, C, N) : e.setAttribute(C, N);
        }
      }
    }
    var Br = Symbol.for("react.element"), $r = Symbol.for("react.portal"), ma = Symbol.for("react.fragment"), ji = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), de = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), dt = Symbol.for("react.suspense"), Ct = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), Fn = Symbol.for("react.scope"), Xt = Symbol.for("react.debug_trace_mode"), Jt = Symbol.for("react.offscreen"), Rr = Symbol.for("react.legacy_hidden"), di = Symbol.for("react.cache"), Zt = Symbol.for("react.tracing_marker"), Ir = Symbol.iterator, ts = "@@iterator";
    function pi(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ir && e[Ir] || e[ts];
      return typeof t == "function" ? t : null;
    }
    var ut = Object.assign, io = 0, Hi, gl, Yr, ns, Or, rs, as;
    function is() {
    }
    is.__reactDisabledLog = !0;
    function lo() {
      {
        if (io === 0) {
          Hi = console.log, gl = console.info, Yr = console.warn, ns = console.error, Or = console.group, rs = console.groupCollapsed, as = console.groupEnd;
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
    function Go() {
      {
        if (io--, io === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ut({}, e, {
              value: Hi
            }),
            info: ut({}, e, {
              value: gl
            }),
            warn: ut({}, e, {
              value: Yr
            }),
            error: ut({}, e, {
              value: ns
            }),
            group: ut({}, e, {
              value: Or
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
    var Pi = R.ReactCurrentDispatcher, vi;
    function Na(e, t, a) {
      {
        if (vi === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            vi = i && i[1] || "";
          }
        return `
` + vi + e;
      }
    }
    var Sl = !1, hi;
    {
      var oo = typeof WeakMap == "function" ? WeakMap : Map;
      hi = new oo();
    }
    function uo(e, t) {
      if (!e || Sl)
        return "";
      {
        var a = hi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Sl = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Pi.current, Pi.current = null, lo();
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
            } catch (V) {
              i = V;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (V) {
              i = V;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            i = V;
          }
          e();
        }
      } catch (V) {
        if (V && i && typeof V.stack == "string") {
          for (var v = V.stack.split(`
`), m = i.stack.split(`
`), C = v.length - 1, T = m.length - 1; C >= 1 && T >= 0 && v[C] !== m[T]; )
            T--;
          for (; C >= 1 && T >= 0; C--, T--)
            if (v[C] !== m[T]) {
              if (C !== 1 || T !== 1)
                do
                  if (C--, T--, T < 0 || v[C] !== m[T]) {
                    var M = `
` + v[C].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && hi.set(e, M), M;
                  }
                while (C >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Sl = !1, Pi.current = s, Go(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", P = N ? Na(N) : "";
      return typeof e == "function" && hi.set(e, P), P;
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
    function gt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uo(e, os(e));
      if (typeof e == "string")
        return Na(e);
      switch (e) {
        case dt:
          return Na("Suspense");
        case Ct:
          return Na("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case he:
            return ls(e.render);
          case lt:
            return gt(e.type, t, a);
          case je: {
            var i = e, o = i._payload, s = i._init;
            try {
              return gt(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function us(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Y:
          return Na(e.type);
        case xn:
          return Na("Lazy");
        case Ne:
          return Na("Suspense");
        case Et:
          return Na("SuspenseList");
        case ae:
        case $:
        case Je:
          return ls(e.type);
        case Be:
          return ls(e.type.render);
        case W:
          return El(e.type);
        default:
          return "";
      }
    }
    function Ko(e) {
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
    function Cl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function ss(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ma:
          return "Fragment";
        case $r:
          return "Portal";
        case x:
          return "Profiler";
        case ji:
          return "StrictMode";
        case dt:
          return "Suspense";
        case Ct:
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
            return Cl(e, e.render, "ForwardRef");
          case lt:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case je: {
            var o = e, s = o._payload, f = o._init;
            try {
              return xt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Xo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function so(e) {
      return e.displayName || "Context";
    }
    function Ze(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case bt:
          return "Cache";
        case Dt:
          var i = a;
          return so(i) + ".Consumer";
        case Ge:
          var o = a;
          return so(o._context) + ".Provider";
        case Gt:
          return "DehydratedFragment";
        case Be:
          return Xo(a, a.render, "ForwardRef");
        case Fe:
          return "Fragment";
        case Y:
          return a;
        case ye:
          return "Portal";
        case te:
          return "Root";
        case Z:
          return "Text";
        case xn:
          return xt(a);
        case St:
          return a === ji ? "StrictMode" : "Mode";
        case Ke:
          return "Offscreen";
        case kt:
          return "Profiler";
        case nn:
          return "Scope";
        case Ne:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case it:
          return "TracingMarker";
        case W:
        case ae:
        case gn:
        case $:
        case pt:
        case Je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ni = R.ReactDebugCurrentFrame, pn = null, Wr = !1;
    function La() {
      {
        if (pn === null)
          return null;
        var e = pn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ze(e);
      }
      return null;
    }
    function Rl() {
      return pn === null ? "" : Ko(pn);
    }
    function an() {
      ni.getCurrentStack = null, pn = null, Wr = !1;
    }
    function vn(e) {
      ni.getCurrentStack = e === null ? null : Rl, pn = e, Wr = !1;
    }
    function cs() {
      return pn;
    }
    function ir(e) {
      Wr = e;
    }
    function Qr(e) {
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
    var Jo = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function co(e, t) {
      Jo[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
    function Vi(e) {
      var t = "";
      return e && (fo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Zo(e) {
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
      Tl(e) || (e._valueTracker = Zo(e));
    }
    function eu(e) {
      if (!e)
        return !1;
      var t = Tl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Vi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function mi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var $i = !1, tu = !1, fs = !1, ai = !1;
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
      co("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !tu && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component", t.type), tu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !$i && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component", t.type), $i = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ri(t.value != null ? t.value : i),
        controlled: nu(t)
      };
    }
    function H(e, t) {
      var a = e, i = t.checked;
      i != null && Fi(a, "checked", i, !1);
    }
    function I(e, t) {
      var a = e;
      {
        var i = nu(t);
        !a._wrapperState.controlled && i && !ai && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ai = !0), a._wrapperState.controlled && !i && !fs && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fs = !0);
      }
      H(e, t);
      var o = ri(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Qr(o)) : a.value !== Qr(o) && (a.value = Qr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? qe(a, t.type, o) : t.hasOwnProperty("defaultValue") && qe(a, t.type, ri(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function ue(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Qr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function Oe(e, t) {
      var a = e;
      I(a, t), Ee(a, t);
    }
    function Ee(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        _r(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var v = Hh(f);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            eu(f), I(f, v);
          }
        }
      }
    }
    function qe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || mi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Qr(e._wrapperState.initialValue) : e.defaultValue !== Qr(a) && (e.defaultValue = Qr(a)));
    }
    var st = !1, Ht = !1, Bt = !1;
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? h.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ht || (Ht = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Bt || (Bt = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !st && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), st = !0);
    }
    function It(e, t) {
      t.value != null && e.setAttribute("value", Qr(ri(t.value)));
    }
    var ln = Array.isArray;
    function _t(e) {
      return ln(e);
    }
    var wl;
    wl = !1;
    function ru() {
      var e = La();
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
            var i = _t(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ru()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ru());
          }
        }
      }
    }
    function Ii(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, v = 0; v < s.length; v++)
          f["$" + s[v]] = !0;
        for (var m = 0; m < o.length; m++) {
          var C = f.hasOwnProperty("$" + o[m].value);
          o[m].selected !== C && (o[m].selected = C), C && i && (o[m].defaultSelected = !0);
        }
      } else {
        for (var T = Qr(ri(a)), M = null, N = 0; N < o.length; N++) {
          if (o[N].value === T) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          M === null && !o[N].disabled && (M = o[N]);
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
      i != null ? Ii(a, !!t.multiple, i, !1) : t.defaultValue != null && Ii(a, !!t.multiple, t.defaultValue, !0);
    }
    function py(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Ii(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ii(a, !!t.multiple, t.defaultValue, !0) : Ii(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function cv(e, t) {
      var a = e, i = t.value;
      i != null && Ii(a, !!t.multiple, i, !1);
    }
    var fv = !1;
    function id(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ut({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Qr(a._wrapperState.initialValue)
      });
      return i;
    }
    function dv(e, t) {
      var a = e;
      co("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !fv && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", La() || "A component"), fv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
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
        initialValue: ri(i)
      };
    }
    function pv(e, t) {
      var a = e, i = ri(t.value), o = ri(t.defaultValue);
      if (i != null) {
        var s = Qr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Qr(o));
    }
    function Ec(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function vy(e, t) {
      pv(e, t);
    }
    var Yi = "http://www.w3.org/1999/xhtml", hy = "http://www.w3.org/1998/Math/MathML", Cc = "http://www.w3.org/2000/svg";
    function ld(e) {
      switch (e) {
        case "svg":
          return Cc;
        case "math":
          return hy;
        default:
          return Yi;
      }
    }
    function od(e, t) {
      return e == null || e === Yi ? ld(t) : e === Cc && t === "foreignObject" ? Yi : e;
    }
    var my = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Rc, vv = my(function(e, t) {
      if (e.namespaceURI === Cc && !("innerHTML" in e)) {
        Rc = Rc || document.createElement("div"), Rc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Rc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Wi = 3, En = 8, ya = 9, ud = 11, ms = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Wi) {
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
      var gv = /^(?:webkit|moz|o)[A-Z]/, ys = /^-ms-/, gs = /-(.)/g, Sv = /;\s*$/, Qi = {}, cd = {}, fd = !1, Tc = !1, dd = function(e) {
        return e.replace(gs, function(t, a) {
          return a.toUpperCase();
        });
      }, Ev = function(e) {
        Qi.hasOwnProperty(e) && Qi[e] || (Qi[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          dd(e.replace(ys, "ms-"))
        ));
      }, Cv = function(e) {
        Qi.hasOwnProperty(e) && Qi[e] || (Qi[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Rv = function(e, t) {
        cd.hasOwnProperty(t) && cd[t] || (cd[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Sv, "")));
      }, Ey = function(e, t) {
        fd || (fd = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Cy = function(e, t) {
        Tc || (Tc = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sd = function(e, t) {
        e.indexOf("-") > -1 ? Ev(e) : gv.test(e) ? Cv(e) : Sv.test(t) && Rv(e, t), typeof t == "number" && (isNaN(t) ? Ey(e, t) : isFinite(t) || Cy(e, t));
      };
    }
    var Ry = sd;
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
          o || Ry(i, t[i]);
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
    }, bv), _v = "__html";
    function Ss(e, t) {
      if (t) {
        if (xv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(_v in t.dangerouslySetInnerHTML))
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
    }, xl = {}, Es = new RegExp("^(aria)-[" + ze + "]*$"), pd = new RegExp("^(aria)[A-Z][" + ze + "]*$");
    function Dv(e, t) {
      {
        if (rr.call(xl, t) && xl[t])
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
    function Ov(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !xc && (xc = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Cs = function() {
    };
    {
      var Tr = {}, vd = /^on./, kv = /^on[^A-Z]/, Nv = new RegExp("^(aria)-[" + ze + "]*$"), Lv = new RegExp("^(aria)[A-Z][" + ze + "]*$");
      Cs = function(e, t, a, i) {
        if (rr.call(Tr, t) && Tr[t])
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
          return kv.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Tr[t] = !0, !0;
        if (Nv.test(t) || Lv.test(t))
          return !0;
        if (o === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Tr[t] = !0, !0;
        if (o === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Tr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Tr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Tr[t] = !0, !0;
        var m = qn(t), C = m !== null && m.type === da;
        if (wc.hasOwnProperty(o)) {
          var T = wc[o];
          if (T !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, T), Tr[t] = !0, !0;
        } else if (!C && t !== o)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Tr[t] = !0, !0;
        return typeof a == "boolean" && Cr(t, a, m, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Tr[t] = !0, !0) : C ? !0 : Cr(t, a, m, !1) ? (Tr[t] = !0, !1) : ((a === "false" || a === "true") && m !== null && m.type === cn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Tr[t] = !0), !0);
      };
    }
    var Mv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = Cs(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function _l(e, t, a) {
      po(e, t) || Mv(e, t, a);
    }
    var _c = 1, Rs = 2, Ts = 4, wy = _c | Rs | Ts, qi = null;
    function by(e) {
      qi !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), qi = e;
    }
    function Av() {
      qi === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), qi = null;
    }
    function Uv(e) {
      return e === qi;
    }
    function Qt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Wi ? t.parentNode : t;
    }
    var ws = null, Gi = null, yi = null;
    function hd(e) {
      var t = ju(e);
      if (t) {
        if (typeof ws != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Hh(a);
          ws(t.stateNode, t.type, i);
        }
      }
    }
    function md(e) {
      ws = e;
    }
    function ou(e) {
      Gi ? yi ? yi.push(e) : yi = [e] : Gi = e;
    }
    function Dc() {
      return Gi !== null || yi !== null;
    }
    function ho() {
      if (Gi) {
        var e = Gi, t = yi;
        if (Gi = null, yi = null, hd(e), t)
          for (var a = 0; a < t.length; a++)
            hd(t[a]);
      }
    }
    var yd = function(e, t) {
      return e(t);
    }, zv = function() {
    }, gd = !1;
    function Fv() {
      var e = Dc();
      e && (zv(), ho());
    }
    function bs(e, t, a) {
      if (gd)
        return e(t, a);
      gd = !0;
      try {
        return yd(e, t, a);
      } finally {
        gd = !1, Fv();
      }
    }
    function Oc(e, t, a) {
      yd = e, zv = a;
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
      var i = Hh(a);
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
    if (Sn)
      try {
        var _s = {};
        Object.defineProperty(_s, "passive", {
          get: function() {
            xs = !0;
          }
        }), window.addEventListener("test", _s, _s), window.removeEventListener("test", _s, _s);
      } catch {
        xs = !1;
      }
    function Cd(e, t, a, i, o, s, f, v, m) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (T) {
        this.onError(T);
      }
    }
    var jv = Cd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rd = document.createElement("react");
      jv = function(t, a, i, o, s, f, v, m, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var T = document.createEvent("Event"), M = !1, N = !0, P = window.event, V = Object.getOwnPropertyDescriptor(window, "event");
        function Q() {
          Rd.removeEventListener(q, Ve, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = P);
        }
        var Ce = Array.prototype.slice.call(arguments, 3);
        function Ve() {
          M = !0, Q(), a.apply(i, Ce), N = !1;
        }
        var Ue, Tt = !1, yt = !1;
        function z(F) {
          if (Ue = F.error, Tt = !0, Ue === null && F.colno === 0 && F.lineno === 0 && (yt = !0), F.defaultPrevented && Ue != null && typeof Ue == "object")
            try {
              Ue._suppressLogging = !0;
            } catch {
            }
        }
        var q = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", z), Rd.addEventListener(q, Ve, !1), T.initEvent(q, !1, !1), Rd.dispatchEvent(T), V && Object.defineProperty(window, "event", V), M && N && (Tt ? yt && (Ue = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ue = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ue)), window.removeEventListener("error", z), !M)
          return Q(), Cd.apply(this, arguments);
      };
    }
    var Td = jv, ga = !1, Ds = null, Ki = !1, Aa = null, Os = {
      onError: function(e) {
        ga = !0, Ds = e;
      }
    };
    function li(e, t, a, i, o, s, f, v, m) {
      ga = !1, Ds = null, Td.apply(Os, arguments);
    }
    function wd(e, t, a, i, o, s, f, v, m) {
      if (li.apply(this, arguments), ga) {
        var C = Xi();
        Ki || (Ki = !0, Aa = C);
      }
    }
    function xy() {
      if (Ki) {
        var e = Aa;
        throw Ki = !1, Aa = null, e;
      }
    }
    function _y() {
      return ga;
    }
    function Xi() {
      if (ga) {
        var e = Ds;
        return ga = !1, Ds = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gi(e) {
      return e._reactInternals;
    }
    function uu(e) {
      return e._reactInternals !== void 0;
    }
    function kc(e, t) {
      e._reactInternals = t;
    }
    var He = (
      /*                      */
      0
    ), oi = (
      /*                */
      1
    ), qt = (
      /*                    */
      2
    ), Le = (
      /*                       */
      4
    ), Lt = (
      /*                */
      16
    ), Ua = (
      /*                 */
      32
    ), Gn = (
      /*                     */
      64
    ), et = (
      /*                   */
      128
    ), kr = (
      /*            */
      256
    ), Sa = (
      /*                          */
      512
    ), jn = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), Si = (
      /*                    */
      4096
    ), Dl = (
      /*                   */
      8192
    ), yo = (
      /*             */
      16384
    ), Hv = Gr | Le | Gn | Sa | jn | yo, Ji = (
      /*               */
      32767
    ), Ol = (
      /*                   */
      32768
    ), lr = (
      /*                */
      65536
    ), Nc = (
      /* */
      131072
    ), Pv = (
      /*                       */
      1048576
    ), Ei = (
      /*                    */
      2097152
    ), za = (
      /*                 */
      4194304
    ), kl = (
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
      Le | jn | 0
    ), Xr = qt | Le | Lt | Ua | Sa | Si | Dl, ui = Le | Gn | Sa | Dl, Jr = Gr | Lt, or = za | kl | Ei, So = R.ReactCurrentOwner;
    function Nl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (qt | Si)) !== He && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Lc(e) {
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
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function Ea(e) {
      return Nl(e) === e;
    }
    function Ca(e) {
      {
        var t = So.current;
        if (t !== null && t.tag === W) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ze(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = gi(e);
      return o ? Nl(o) === o : !1;
    }
    function on(e) {
      if (Nl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ja(e) {
      var t = e.alternate;
      if (!t) {
        var a = Nl(e);
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
              return on(s), e;
            if (m === o)
              return on(s), t;
            m = m.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var C = !1, T = s.child; T; ) {
            if (T === i) {
              C = !0, i = s, o = f;
              break;
            }
            if (T === o) {
              C = !0, o = s, i = f;
              break;
            }
            T = T.sibling;
          }
          if (!C) {
            for (T = f.child; T; ) {
              if (T === i) {
                C = !0, i = f, o = s;
                break;
              }
              if (T === o) {
                C = !0, o = f, i = s;
                break;
              }
              T = T.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function bd(e) {
      var t = ja(e);
      return t !== null ? xd(t) : null;
    }
    function xd(e) {
      if (e.tag === Y || e.tag === Z)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = xd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function _d(e) {
      var t = ja(e);
      return t !== null ? Ac(t) : null;
    }
    function Ac(e) {
      if (e.tag === Y || e.tag === Z)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ye) {
          var a = Ac(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Dd = y.unstable_scheduleCallback, Uc = y.unstable_cancelCallback, Vv = y.unstable_shouldYield, su = y.unstable_requestPaint, Hn = y.unstable_now, Dy = y.unstable_getCurrentPriorityLevel, Zr = y.unstable_ImmediatePriority, cu = y.unstable_UserBlockingPriority, Ci = y.unstable_NormalPriority, fu = y.unstable_LowPriority, ks = y.unstable_IdlePriority, Od = y.unstable_yieldValue, kd = y.unstable_setDisableYieldValue, Ll = null, Dn = null, fe = null, wr = !1, Ra = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Bv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ct && (e = ut({}, e, {
          getLaneLabelMap: zc,
          injectProfilingHooks: Al
        })), Ll = t.inject(e), Dn = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Zi(e, t) {
      if (Dn && typeof Dn.onScheduleFiberRoot == "function")
        try {
          Dn.onScheduleFiberRoot(Ll, e, t);
        } catch (a) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function Ml(e, t) {
      if (Dn && typeof Dn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & et) === et;
          if (ht) {
            var i;
            switch (t) {
              case Ln:
                i = Zr;
                break;
              case tl:
                i = cu;
                break;
              case wi:
                i = Ci;
                break;
              case Cu:
                i = ks;
                break;
              default:
                i = Ci;
                break;
            }
            Dn.onCommitFiberRoot(Ll, e, i, a);
          }
        } catch (o) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", o));
        }
    }
    function Nd(e) {
      if (Dn && typeof Dn.onPostCommitFiberRoot == "function")
        try {
          Dn.onPostCommitFiberRoot(Ll, e);
        } catch (t) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function $v(e) {
      if (Dn && typeof Dn.onCommitFiberUnmount == "function")
        try {
          Dn.onCommitFiberUnmount(Ll, e);
        } catch (t) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function en(e) {
      if (typeof Od == "function" && (kd(e), A(e)), Dn && typeof Dn.setStrictMode == "function")
        try {
          Dn.setStrictMode(Ll, e);
        } catch (t) {
          wr || (wr = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Al(e) {
      fe = e;
    }
    function zc() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < On; a++) {
          var i = Xv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Iv(e) {
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function Ns() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function du(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function Eo() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function Ld(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function Fc() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function Yv(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Wv() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function Qv(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function Md() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function pu(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ls() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function qv(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function Gv(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function vu(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function Kv() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function Ms(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function Ri() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function hu(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function As() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function Ul() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function Ad(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function mu(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function jc(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    var Pe = (
      /*                         */
      0
    ), Ae = (
      /*                 */
      1
    ), Ot = (
      /*                    */
      2
    ), Cn = (
      /*               */
      8
    ), Ha = (
      /*              */
      16
    ), Us = Math.clz32 ? Math.clz32 : hn, Ud = Math.log, Co = Math.LN2;
    function hn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ud(t) / Co | 0) | 0;
    }
    var On = 31, G = (
      /*                        */
      0
    ), kn = (
      /*                          */
      0
    ), $e = (
      /*                        */
      1
    ), Ti = (
      /*    */
      2
    ), el = (
      /*             */
      4
    ), Rn = (
      /*            */
      8
    ), Pa = (
      /*                     */
      16
    ), Ro = (
      /*                */
      32
    ), zl = (
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
    ), zs = (
      /*                        */
      512
    ), Fs = (
      /*                        */
      1024
    ), Hc = (
      /*                        */
      2048
    ), Pc = (
      /*                        */
      4096
    ), Vc = (
      /*                        */
      8192
    ), Bc = (
      /*                        */
      16384
    ), $c = (
      /*                       */
      32768
    ), Ic = (
      /*                       */
      65536
    ), Yc = (
      /*                       */
      131072
    ), Wc = (
      /*                       */
      262144
    ), wo = (
      /*                       */
      524288
    ), Qc = (
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
    ), js = (
      /*                             */
      8388608
    ), qc = (
      /*                             */
      16777216
    ), Gc = (
      /*                             */
      33554432
    ), Kc = (
      /*                             */
      67108864
    ), zd = xo, _o = (
      /*          */
      134217728
    ), Fd = (
      /*                          */
      268435455
    ), gu = (
      /*               */
      268435456
    ), Fl = (
      /*                        */
      536870912
    ), Ta = (
      /*                   */
      1073741824
    );
    function Xv(e) {
      {
        if (e & $e)
          return "Sync";
        if (e & Ti)
          return "InputContinuousHydration";
        if (e & el)
          return "InputContinuous";
        if (e & Rn)
          return "DefaultHydration";
        if (e & Pa)
          return "Default";
        if (e & Ro)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & bo)
          return "Retry";
        if (e & _o)
          return "SelectiveHydration";
        if (e & gu)
          return "IdleHydration";
        if (e & Fl)
          return "Idle";
        if (e & Ta)
          return "Offscreen";
      }
    }
    var tn = -1, Xc = ea, Hs = xo;
    function Su(e) {
      switch (Nn(e)) {
        case $e:
          return $e;
        case Ti:
          return Ti;
        case el:
          return el;
        case Rn:
          return Rn;
        case Pa:
          return Pa;
        case Ro:
          return Ro;
        case ea:
        case ta:
        case To:
        case zs:
        case Fs:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case wo:
        case Qc:
        case yu:
          return e & zl;
        case xo:
        case js:
        case qc:
        case Gc:
        case Kc:
          return e & bo;
        case _o:
          return _o;
        case gu:
          return gu;
        case Fl:
          return Fl;
        case Ta:
          return Ta;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ps(e, t) {
      var a = e.pendingLanes;
      if (a === G)
        return G;
      var i = G, o = e.suspendedLanes, s = e.pingedLanes, f = a & Fd;
      if (f !== G) {
        var v = f & ~o;
        if (v !== G)
          i = Su(v);
        else {
          var m = f & s;
          m !== G && (i = Su(m));
        }
      } else {
        var C = a & ~o;
        C !== G ? i = Su(C) : s !== G && (i = Su(s));
      }
      if (i === G)
        return G;
      if (t !== G && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === G) {
        var T = Nn(i), M = Nn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          T >= M || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          T === Pa && (M & zl) !== G
        )
          return t;
      }
      (i & el) !== G && (i |= a & Pa);
      var N = e.entangledLanes;
      if (N !== G)
        for (var P = e.entanglements, V = i & N; V > 0; ) {
          var Q = Hl(V), Ce = 1 << Q;
          i |= P[Q], V &= ~Ce;
        }
      return i;
    }
    function Jc(e, t) {
      for (var a = e.eventTimes, i = tn; t > 0; ) {
        var o = Hl(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Oy(e, t) {
      switch (e) {
        case $e:
        case Ti:
        case el:
          return t + 250;
        case Rn:
        case Pa:
        case Ro:
        case ea:
        case ta:
        case To:
        case zs:
        case Fs:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case wo:
        case Qc:
        case yu:
          return t + 5e3;
        case xo:
        case js:
        case qc:
        case Gc:
        case Kc:
          return tn;
        case _o:
        case gu:
        case Fl:
        case Ta:
          return tn;
        default:
          return E("Should have found matching lanes. This is a bug in React."), tn;
      }
    }
    function ky(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Hl(f), m = 1 << v, C = s[v];
        C === tn ? ((m & i) === G || (m & o) !== G) && (s[v] = Oy(m, t)) : C <= t && (e.expiredLanes |= m), f &= ~m;
      }
    }
    function Ny(e) {
      return Su(e.pendingLanes);
    }
    function jl(e) {
      var t = e.pendingLanes & ~Ta;
      return t !== G ? t : t & Ta ? Ta : G;
    }
    function jd(e) {
      return (e & $e) !== G;
    }
    function Vs(e) {
      return (e & Fd) !== G;
    }
    function Jv(e) {
      return (e & bo) === e;
    }
    function Zv(e) {
      var t = $e | el | Pa;
      return (e & t) === G;
    }
    function eh(e) {
      return (e & zl) === e;
    }
    function Bs(e, t) {
      var a = Ti | el | Rn | Pa;
      return (t & a) !== G;
    }
    function th(e, t) {
      return (t & e.expiredLanes) !== G;
    }
    function Hd(e) {
      return (e & zl) !== G;
    }
    function nh() {
      var e = Xc;
      return Xc <<= 1, (Xc & zl) === G && (Xc = ea), e;
    }
    function na() {
      var e = Hs;
      return Hs <<= 1, (Hs & bo) === G && (Hs = xo), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function Eu(e) {
      return Nn(e);
    }
    function Hl(e) {
      return 31 - Us(e);
    }
    function Zc(e) {
      return Hl(e);
    }
    function ra(e, t) {
      return (e & t) !== G;
    }
    function Do(e, t) {
      return (e & t) === t;
    }
    function rt(e, t) {
      return e | t;
    }
    function $s(e, t) {
      return e & ~t;
    }
    function ef(e, t) {
      return e & t;
    }
    function Ly(e) {
      return e;
    }
    function rh(e, t) {
      return e !== kn && e < t ? e : t;
    }
    function Is(e) {
      for (var t = [], a = 0; a < On; a++)
        t.push(e);
      return t;
    }
    function Oo(e, t, a) {
      e.pendingLanes |= t, t !== Fl && (e.suspendedLanes = G, e.pingedLanes = G);
      var i = e.eventTimes, o = Zc(t);
      i[o] = a;
    }
    function ah(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Hl(i), s = 1 << o;
        a[o] = tn, i &= ~s;
      }
    }
    function tf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function nf(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = G, e.pingedLanes = G, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var v = Hl(f), m = 1 << v;
        i[v] = G, o[v] = tn, s[v] = tn, f &= ~m;
      }
    }
    function Pd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Hl(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function ih(e, t) {
      var a = Nn(t), i;
      switch (a) {
        case el:
          i = Ti;
          break;
        case Pa:
          i = Rn;
          break;
        case ea:
        case ta:
        case To:
        case zs:
        case Fs:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case wo:
        case Qc:
        case yu:
        case xo:
        case js:
        case qc:
        case Gc:
        case Kc:
          i = Ro;
          break;
        case Fl:
          i = gu;
          break;
        default:
          i = kn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== kn ? kn : i;
    }
    function rf(e, t, a) {
      if (Ra)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = Zc(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Vd(e, t) {
      if (Ra)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = Zc(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(v) {
            var m = v.alternate;
            (m === null || !i.has(m)) && i.add(v);
          }), f.clear()), t &= ~s;
        }
    }
    function Ys(e, t) {
      return null;
    }
    var Ln = $e, tl = el, wi = Pa, Cu = Fl, Ru = kn;
    function Va() {
      return Ru;
    }
    function Tn(e) {
      Ru = e;
    }
    function br(e, t) {
      var a = Ru;
      try {
        return Ru = e, t();
      } finally {
        Ru = a;
      }
    }
    function My(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ay(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Tu(e, t) {
      return e !== 0 && e < t;
    }
    function ur(e) {
      var t = Nn(e);
      return Tu(Ln, t) ? Tu(tl, t) ? Vs(t) ? wi : Cu : tl : Ln;
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
    function Uy(e) {
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
    var $d;
    function oh(e) {
      $d = e;
    }
    var Ws = !1, xu = [], fn = null, Kn = null, Nr = null, _u = /* @__PURE__ */ new Map(), Du = /* @__PURE__ */ new Map(), Xn = [], uh = [
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
    function bi(e) {
      return uh.indexOf(e) > -1;
    }
    function zy(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function Id(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          fn = null;
          break;
        case "dragenter":
        case "dragleave":
          Kn = null;
          break;
        case "mouseover":
        case "mouseout":
          Nr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          _u.delete(a);
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
    function Ou(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = zy(t, a, i, o, s);
        if (t !== null) {
          var v = ju(t);
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
          return fn = Ou(fn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return Kn = Ou(Kn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var v = o;
          return Nr = Ou(Nr, e, t, a, i, v), !0;
        }
        case "pointerover": {
          var m = o, C = m.pointerId;
          return _u.set(C, Ou(_u.get(C) || null, e, t, a, i, m)), !0;
        }
        case "gotpointercapture": {
          var T = o, M = T.pointerId;
          return Du.set(M, Ou(Du.get(M) || null, e, t, a, i, T)), !0;
        }
      }
      return !1;
    }
    function Yd(e) {
      var t = ac(e.target);
      if (t !== null) {
        var a = Nl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ne) {
            var o = Lc(a);
            if (o !== null) {
              e.blockedOn = o, $d(e.priority, function() {
                bu(a);
              });
              return;
            }
          } else if (i === te) {
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
      }, i = 0; i < Xn.length && Tu(t, Xn[i].priority); i++)
        ;
      Xn.splice(i, 0, a), i === 0 && Yd(a);
    }
    function ko(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = xr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          by(s), o.target.dispatchEvent(s), Av();
        } else {
          var f = ju(i);
          return f !== null && lf(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function sf(e, t, a) {
      ko(e) && a.delete(t);
    }
    function Ba() {
      Ws = !1, fn !== null && ko(fn) && (fn = null), Kn !== null && ko(Kn) && (Kn = null), Nr !== null && ko(Nr) && (Nr = null), _u.forEach(sf), Du.forEach(sf);
    }
    function mt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ws || (Ws = !0, y.unstable_scheduleCallback(y.unstable_NormalPriority, Ba)));
    }
    function wn(e) {
      if (xu.length > 0) {
        mt(xu[0], e);
        for (var t = 1; t < xu.length; t++) {
          var a = xu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      fn !== null && mt(fn, e), Kn !== null && mt(Kn, e), Nr !== null && mt(Nr, e);
      var i = function(v) {
        return mt(v, e);
      };
      _u.forEach(i), Du.forEach(i);
      for (var o = 0; o < Xn.length; o++) {
        var s = Xn[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Xn.length > 0; ) {
        var f = Xn[0];
        if (f.blockedOn !== null)
          break;
        Yd(f), f.blockedOn === null && Xn.shift();
      }
    }
    var un = R.ReactCurrentBatchConfig, $n = !0;
    function aa(e) {
      $n = !!e;
    }
    function ku() {
      return $n;
    }
    function In(e, t, a) {
      var i = cf(t), o;
      switch (i) {
        case Ln:
          o = Qs;
          break;
        case tl:
          o = No;
          break;
        case wi:
        default:
          o = Nu;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Qs(e, t, a, i) {
      var o = Va(), s = un.transition;
      un.transition = null;
      try {
        Tn(Ln), Nu(e, t, a, i);
      } finally {
        Tn(o), un.transition = s;
      }
    }
    function No(e, t, a, i) {
      var o = Va(), s = un.transition;
      un.transition = null;
      try {
        Tn(tl), Nu(e, t, a, i);
      } finally {
        Tn(o), un.transition = s;
      }
    }
    function Nu(e, t, a, i) {
      $n && Wd(e, t, a, i);
    }
    function Wd(e, t, a, i) {
      var o = xr(e, t, a, i);
      if (o === null) {
        eg(e, t, i, Pl, a), Id(e, i);
        return;
      }
      if (sh(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Id(e, i), t & Ts && bi(e)) {
        for (; o !== null; ) {
          var s = ju(o);
          s !== null && Bd(s);
          var f = xr(e, t, a, i);
          if (f === null && eg(e, t, i, Pl, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      eg(e, t, i, null, a);
    }
    var Pl = null;
    function xr(e, t, a, i) {
      Pl = null;
      var o = Qt(i), s = ac(o);
      if (s !== null) {
        var f = Nl(s);
        if (f === null)
          s = null;
        else {
          var v = f.tag;
          if (v === Ne) {
            var m = Lc(f);
            if (m !== null)
              return m;
            s = null;
          } else if (v === te) {
            var C = f.stateNode;
            if (af(C))
              return Mc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Pl = s, null;
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
          return Ln;
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
            case Zr:
              return Ln;
            case cu:
              return tl;
            case Ci:
            case fu:
              return wi;
            case ks:
              return Cu;
            default:
              return wi;
          }
        }
        default:
          return wi;
      }
    }
    function Lu(e, t, a) {
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
    function Qd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var $a = null, Mu = null, Ia = null;
    function df(e) {
      return $a = e, Mu = Gs(), !0;
    }
    function qs() {
      $a = null, Mu = null, Ia = null;
    }
    function pf() {
      if (Ia)
        return Ia;
      var e, t = Mu, a = t.length, i, o = Gs(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Ia = o.slice(e, v), Ia;
    }
    function Gs() {
      return "value" in $a ? $a.value : $a.textContent;
    }
    function Lo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Jn() {
      return !0;
    }
    function rl() {
      return !1;
    }
    function mn(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var m = e[v];
            m ? this[v] = m(s) : this[v] = s[v];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Jn : this.isDefaultPrevented = rl, this.isPropagationStopped = rl, this;
      }
      return ut(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Jn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Jn);
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
        isPersistent: Jn
      }), t;
    }
    var Yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, vf = mn(Yn), Mo = ut({}, Yn, {
      view: 0,
      detail: 0
    }), qd = mn(Mo), Gd, xi, Au;
    function Kd(e) {
      e !== Au && (Au && e.type === "mousemove" ? (Gd = e.screenX - Au.screenX, xi = e.screenY - Au.screenY) : (Gd = 0, xi = 0), Au = e);
    }
    var _i = ut({}, Mo, {
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
      getModifierState: Xd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Kd(e), Gd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : xi;
      }
    }), hf = mn(_i), Ao = ut({}, _i, {
      dataTransfer: 0
    }), ch = mn(Ao), fh = ut({}, Mo, {
      relatedTarget: 0
    }), Ks = mn(fh), mf = ut({}, Yn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), jy = mn(mf), Hy = ut({}, Yn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), dh = mn(Hy), ph = ut({}, Yn, {
      data: 0
    }), Vl = mn(ph), Py = Vl, Uu = {
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
    function bn(e) {
      if (e.key) {
        var t = Uu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Lo(e);
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
    function Xd(e) {
      return hh;
    }
    var By = ut({}, Mo, {
      key: bn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Lo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), mh = mn(By), yh = ut({}, _i, {
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
    }), gh = mn(yh), Ya = ut({}, Mo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xd
    }), Jd = mn(Ya), $y = ut({}, Yn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bl = mn($y), yf = ut({}, _i, {
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
    }), Uo = mn(yf), gf = [9, 13, 27, 32], Sf = 229, Xs = Sn && "CompositionEvent" in window, Js = null;
    Sn && "documentMode" in document && (Js = document.documentMode);
    var Zd = Sn && "TextEvent" in window && !Js, Sh = Sn && (!Xs || Js && Js > 8 && Js <= 11), ep = 32, tp = String.fromCharCode(ep);
    function Ef() {
      Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zs = !1;
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
    function Iy(e, t) {
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
    function Cf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ec(e) {
      return e.locale === "ko";
    }
    var $l = !1;
    function Rf(e, t, a, i, o) {
      var s, f;
      if (Xs ? s = np(t) : $l ? rp(t, i) && (s = "onCompositionEnd") : Iy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Sh && !ec(i) && (!$l && s === "onCompositionStart" ? $l = df(o) : s === "onCompositionEnd" && $l && (f = pf()));
      var v = xh(a, s);
      if (v.length > 0) {
        var m = new Vl(s, t, null, i, o);
        if (e.push({
          event: m,
          listeners: v
        }), f)
          m.data = f;
        else {
          var C = Cf(i);
          C !== null && (m.data = C);
        }
      }
    }
    function Ch(e, t) {
      switch (e) {
        case "compositionend":
          return Cf(t);
        case "keypress":
          var a = t.which;
          return a !== ep ? null : (Zs = !0, tp);
        case "textInput":
          var i = t.data;
          return i === tp && Zs ? null : i;
        default:
          return null;
      }
    }
    function Yy(e, t) {
      if ($l) {
        if (e === "compositionend" || !Xs && rp(e, t)) {
          var a = pf();
          return qs(), $l = !1, a;
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
      if (Zd ? s = Ch(t, i) : s = Yy(t, i), !s)
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
    function Wy(e, t, a, i, o, s, f) {
      Rf(e, t, a, i, o), Tf(e, t, a, i, o);
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
    function Rh(e) {
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
      if (!Sn)
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
      r(t, u, e, Qt(e)), bs(S, t);
    }
    function S(e) {
      SE(e, 0);
    }
    function w(e) {
      var t = kf(e);
      if (eu(t))
        return e;
    }
    function O(e, t) {
      if (e === "change")
        return t;
    }
    var B = !1;
    Sn && (B = wf("input") && (!document.documentMode || document.documentMode > 9));
    function ie(e, t) {
      l = e, u = t, l.attachEvent("onpropertychange", ne);
    }
    function le() {
      l && (l.detachEvent("onpropertychange", ne), l = null, u = null);
    }
    function ne(e) {
      e.propertyName === "value" && w(u) && d(e);
    }
    function ge(e, t, a) {
      e === "focusin" ? (le(), ie(t, a)) : e === "focusout" && le();
    }
    function xe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(u);
    }
    function ke(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Mn(e, t) {
      if (e === "click")
        return w(t);
    }
    function U(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || qe(e, "number", e.value);
    }
    function j(e, t, a, i, o, s, f) {
      var v = a ? kf(a) : window, m, C;
      if (c(v) ? m = O : Rh(v) ? B ? m = U : (m = xe, C = ge) : ke(v) && (m = Mn), m) {
        var T = m(t, a);
        if (T) {
          r(e, T, i, o);
          return;
        }
      }
      C && C(t, v, a), t === "focusout" && L(v);
    }
    function se() {
      gr("onMouseEnter", ["mouseout", "mouseover"]), gr("onMouseLeave", ["mouseout", "mouseover"]), gr("onPointerEnter", ["pointerout", "pointerover"]), gr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Me(e, t, a, i, o, s, f) {
      var v = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout";
      if (v && !Uv(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (ac(C) || yp(C)))
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
        var N, P;
        if (m) {
          var V = i.relatedTarget || i.toElement;
          if (N = a, P = V ? ac(V) : null, P !== null) {
            var Q = Nl(P);
            (P !== Q || P.tag !== Y && P.tag !== Z) && (P = null);
          }
        } else
          N = null, P = a;
        if (N !== P) {
          var Ce = hf, Ve = "onMouseLeave", Ue = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ce = gh, Ve = "onPointerLeave", Ue = "onPointerEnter", Tt = "pointer");
          var yt = N == null ? T : kf(N), z = P == null ? T : kf(P), q = new Ce(Ve, Tt + "leave", N, i, o);
          q.target = yt, q.relatedTarget = z;
          var F = null, oe = ac(o);
          if (oe === a) {
            var Re = new Ce(Ue, Tt + "enter", P, i, o);
            Re.target = z, Re.relatedTarget = yt, F = Re;
          }
          ZT(e, q, F, N, P);
        }
      }
    }
    function Ie(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var _e = typeof Object.is == "function" ? Object.is : Ie;
    function Qe(e, t) {
      if (_e(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!rr.call(t, s) || !_e(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Wn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Mt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function al(e, t) {
      for (var a = Wn(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Wi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Wn(Mt(a));
      }
    }
    function Qy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, v = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return MT(e, o, s, f, v);
    }
    function MT(e, t, a, i, o) {
      var s = 0, f = -1, v = -1, m = 0, C = 0, T = e, M = null;
      e:
        for (; ; ) {
          for (var N = null; T === t && (a === 0 || T.nodeType === Wi) && (f = s + a), T === i && (o === 0 || T.nodeType === Wi) && (v = s + o), T.nodeType === Wi && (s += T.nodeValue.length), (N = T.firstChild) !== null; )
            M = T, T = N;
          for (; ; ) {
            if (T === e)
              break e;
            if (M === t && ++m === a && (f = s), M === i && ++C === o && (v = s), (N = T.nextSibling) !== null)
              break;
            T = M, M = T.parentNode;
          }
          T = N;
        }
      return f === -1 || v === -1 ? null : {
        start: f,
        end: v
      };
    }
    function AT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), v = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > v) {
          var m = v;
          v = f, f = m;
        }
        var C = al(e, f), T = al(e, v);
        if (C && T) {
          if (o.rangeCount === 1 && o.anchorNode === C.node && o.anchorOffset === C.offset && o.focusNode === T.node && o.focusOffset === T.offset)
            return;
          var M = a.createRange();
          M.setStart(C.node, C.offset), o.removeAllRanges(), f > v ? (o.addRange(M), o.extend(T.node, T.offset)) : (M.setEnd(T.node, T.offset), o.addRange(M));
        }
      }
    }
    function oE(e) {
      return e && e.nodeType === Wi;
    }
    function uE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : oE(e) ? !1 : oE(t) ? uE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function UT(e) {
      return e && e.ownerDocument && uE(e.ownerDocument.documentElement, e);
    }
    function zT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function sE() {
      for (var e = window, t = mi(); t instanceof e.HTMLIFrameElement; ) {
        if (zT(t))
          e = t.contentWindow;
        else
          return t;
        t = mi(e.document);
      }
      return t;
    }
    function qy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function FT() {
      var e = sE();
      return {
        focusedElem: e,
        selectionRange: qy(e) ? HT(e) : null
      };
    }
    function jT(e) {
      var t = sE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && UT(a)) {
        i !== null && qy(a) && PT(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === qr && o.push({
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
      } : t = Qy(e), t || {
        start: 0,
        end: 0
      };
    }
    function PT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : AT(e, t);
    }
    var VT = Sn && "documentMode" in document && document.documentMode <= 11;
    function BT() {
      Vr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var bf = null, Gy = null, ap = null, Ky = !1;
    function $T(e) {
      if ("selectionStart" in e && qy(e))
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
    function IT(e) {
      return e.window === e ? e.document : e.nodeType === ya ? e : e.ownerDocument;
    }
    function cE(e, t, a) {
      var i = IT(a);
      if (!(Ky || bf == null || bf !== mi(i))) {
        var o = $T(bf);
        if (!ap || !Qe(ap, o)) {
          ap = o;
          var s = xh(Gy, "onSelect");
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
    function YT(e, t, a, i, o, s, f) {
      var v = a ? kf(a) : window;
      switch (t) {
        case "focusin":
          (Rh(v) || v.contentEditable === "true") && (bf = v, Gy = a, ap = null);
          break;
        case "focusout":
          bf = null, Gy = null, ap = null;
          break;
        case "mousedown":
          Ky = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ky = !1, cE(e, i, o);
          break;
        case "selectionchange":
          if (VT)
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
    }, Xy = {}, fE = {};
    Sn && (fE = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function wh(e) {
      if (Xy[e])
        return Xy[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in fE)
          return Xy[e] = t[a];
      return e;
    }
    var dE = wh("animationend"), pE = wh("animationiteration"), vE = wh("animationstart"), hE = wh("transitionend"), mE = /* @__PURE__ */ new Map(), yE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function zu(e, t) {
      mE.set(e, t), Vr(t, [e]);
    }
    function WT() {
      for (var e = 0; e < yE.length; e++) {
        var t = yE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        zu(a, "on" + i);
      }
      zu(dE, "onAnimationEnd"), zu(pE, "onAnimationIteration"), zu(vE, "onAnimationStart"), zu("dblclick", "onDoubleClick"), zu("focusin", "onFocus"), zu("focusout", "onBlur"), zu(hE, "onTransitionEnd");
    }
    function QT(e, t, a, i, o, s, f) {
      var v = mE.get(t);
      if (v !== void 0) {
        var m = vf, C = t;
        switch (t) {
          case "keypress":
            if (Lo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            m = mh;
            break;
          case "focusin":
            C = "focus", m = Ks;
            break;
          case "focusout":
            C = "blur", m = Ks;
            break;
          case "beforeblur":
          case "afterblur":
            m = Ks;
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
            m = Jd;
            break;
          case dE:
          case pE:
          case vE:
            m = jy;
            break;
          case hE:
            m = Bl;
            break;
          case "scroll":
            m = qd;
            break;
          case "wheel":
            m = Uo;
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
          t === "scroll", N = XT(a, v, i.type, T, M);
          if (N.length > 0) {
            var P = new m(v, C, null, i, o);
            e.push({
              event: P,
              listeners: N
            });
          }
        }
      }
    }
    WT(), se(), n(), BT(), Ef();
    function qT(e, t, a, i, o, s, f) {
      QT(e, t, a, i, o, s);
      var v = (s & wy) === 0;
      v && (Me(e, t, a, i, o), j(e, t, a, i, o), YT(e, t, a, i, o), Wy(e, t, a, i, o));
    }
    var ip = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Jy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ip));
    function gE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, wd(i, t, void 0, e), e.currentTarget = null;
    }
    function GT(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, v = s.currentTarget, m = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          gE(e, m, v), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var T = t[C], M = T.instance, N = T.currentTarget, P = T.listener;
          if (M !== i && e.isPropagationStopped())
            return;
          gE(e, P, N), i = M;
        }
    }
    function SE(e, t) {
      for (var a = (t & Ts) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        GT(s, f, a);
      }
      xy();
    }
    function KT(e, t, a, i, o) {
      var s = Qt(a), f = [];
      qT(f, e, i, a, s, t), SE(f, t);
    }
    function yn(e, t) {
      Jy.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = xb(t), o = ew(e, a);
      i.has(o) || (EE(t, e, Rs, a), i.add(o));
    }
    function Zy(e, t, a) {
      Jy.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ts), EE(a, e, i, t);
    }
    var bh = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[bh]) {
        e[bh] = !0, rn.forEach(function(a) {
          a !== "selectionchange" && (Jy.has(a) || Zy(a, !1, e), Zy(a, !0, e));
        });
        var t = e.nodeType === ya ? e : e.ownerDocument;
        t !== null && (t[bh] || (t[bh] = !0, Zy("selectionchange", !1, t)));
      }
    }
    function EE(e, t, a, i, o) {
      var s = In(e, t, a), f = void 0;
      xs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ff(e, t, s, f) : nl(e, t, s) : f !== void 0 ? Qd(e, t, s, f) : Lu(e, t, s);
    }
    function CE(e, t) {
      return e === t || e.nodeType === En && e.parentNode === t;
    }
    function eg(e, t, a, i, o) {
      var s = i;
      if (!(t & _c) && !(t & Rs)) {
        var f = o;
        if (i !== null) {
          var v = i;
          e:
            for (; ; ) {
              if (v === null)
                return;
              var m = v.tag;
              if (m === te || m === ye) {
                var C = v.stateNode.containerInfo;
                if (CE(C, f))
                  break;
                if (m === ye)
                  for (var T = v.return; T !== null; ) {
                    var M = T.tag;
                    if (M === te || M === ye) {
                      var N = T.stateNode.containerInfo;
                      if (CE(N, f))
                        return;
                    }
                    T = T.return;
                  }
                for (; C !== null; ) {
                  var P = ac(C);
                  if (P === null)
                    return;
                  var V = P.tag;
                  if (V === Y || V === Z) {
                    v = s = P;
                    continue e;
                  }
                  C = C.parentNode;
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
    function XT(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, v = i ? f : t, m = [], C = e, T = null; C !== null; ) {
        var M = C, N = M.stateNode, P = M.tag;
        if (P === Y && N !== null && (T = N, v !== null)) {
          var V = mo(C, v);
          V != null && m.push(op(C, V, T));
        }
        if (o)
          break;
        C = C.return;
      }
      return m;
    }
    function xh(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, v = s.tag;
        if (v === Y && f !== null) {
          var m = f, C = mo(o, a);
          C != null && i.unshift(op(o, C, m));
          var T = mo(o, t);
          T != null && i.push(op(o, T, m));
        }
        o = o.return;
      }
      return i;
    }
    function _f(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Y);
      return e || null;
    }
    function JT(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = _f(s))
        o++;
      for (var f = 0, v = i; v; v = _f(v))
        f++;
      for (; o - f > 0; )
        a = _f(a), o--;
      for (; f - o > 0; )
        i = _f(i), f--;
      for (var m = o; m--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = _f(a), i = _f(i);
      }
      return null;
    }
    function RE(e, t, a, i, o) {
      for (var s = t._reactName, f = [], v = a; v !== null && v !== i; ) {
        var m = v, C = m.alternate, T = m.stateNode, M = m.tag;
        if (C !== null && C === i)
          break;
        if (M === Y && T !== null) {
          var N = T;
          if (o) {
            var P = mo(v, s);
            P != null && f.unshift(op(v, P, N));
          } else if (!o) {
            var V = mo(v, s);
            V != null && f.push(op(v, V, N));
          }
        }
        v = v.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function ZT(e, t, a, i, o) {
      var s = i && o ? JT(i, o) : null;
      i !== null && RE(e, t, i, s, !1), o !== null && a !== null && RE(e, a, o, s, !0);
    }
    function ew(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Wa = !1, up = "dangerouslySetInnerHTML", _h = "suppressContentEditableWarning", Fu = "suppressHydrationWarning", TE = "autoFocus", nc = "children", rc = "style", Dh = "__html", tg, Oh, sp, wE, kh, bE, xE;
    tg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Oh = function(e, t) {
      lu(e, t), Ov(e, t), _l(e, t, {
        registrationNameDependencies: tr,
        possibleRegistrationNames: nr
      });
    }, bE = Sn && !document.documentMode, sp = function(e, t, a) {
      if (!Wa) {
        var i = Nh(a), o = Nh(t);
        o !== i && (Wa = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, wE = function(e) {
      if (!Wa) {
        Wa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, kh = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, xE = function(e, t) {
      var a = e.namespaceURI === Yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var tw = /\r\n?/g, nw = /\u0000|\uFFFD/g;
    function Nh(e) {
      fa(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(tw, `
`).replace(nw, "");
    }
    function Lh(e, t, a, i) {
      var o = Nh(t), s = Nh(e);
      if (s !== o && (i && (Wa || (Wa = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && X))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function _E(e) {
      return e.nodeType === ya ? e : e.ownerDocument;
    }
    function rw() {
    }
    function Mh(e) {
      e.onclick = rw;
    }
    function aw(e, t, a, i, o) {
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
            s === _h || s === Fu || s === TE || (tr.hasOwnProperty(s) ? f != null && (typeof f != "function" && kh(s, f), s === "onScroll" && yn("scroll", t)) : f != null && Fi(t, s, f, o));
        }
    }
    function iw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === rc ? Tv(e, f) : s === up ? vv(e, f) : s === nc ? ms(e, f) : Fi(e, s, f, i);
      }
    }
    function lw(e, t, a, i) {
      var o, s = _E(a), f, v = i;
      if (v === Yi && (v = ld(e)), v === Yi) {
        if (o = po(e, t), !o && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var m = s.createElement("div");
          m.innerHTML = "<script><\/script>";
          var C = m.firstChild;
          f = m.removeChild(C);
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
      return v === Yi && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !rr.call(tg, e) && (tg[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function ow(e, t) {
      return _E(t).createTextNode(e);
    }
    function uw(e, t, a, i) {
      var o = po(t, a);
      Oh(t, a);
      var s;
      switch (t) {
        case "dialog":
          yn("cancel", e), yn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            yn(ip[f], e);
          s = a;
          break;
        case "source":
          yn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e), s = a;
          break;
        case "details":
          yn("toggle", e), s = a;
          break;
        case "input":
          b(e, a), s = g(e, a), yn("invalid", e);
          break;
        case "option":
          $t(e, a), s = a;
          break;
        case "select":
          hs(e, a), s = vs(e, a), yn("invalid", e);
          break;
        case "textarea":
          dv(e, a), s = id(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ss(t, s), aw(t, e, i, s, o), t) {
        case "input":
          Bi(e), ue(e, a, !1);
          break;
        case "textarea":
          Bi(e), Ec(e);
          break;
        case "option":
          It(e, a);
          break;
        case "select":
          ad(e, a);
          break;
        default:
          typeof s.onClick == "function" && Mh(e);
          break;
      }
    }
    function sw(e, t, a, i, o) {
      Oh(t, i);
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
      var m, C, T = null;
      for (m in f)
        if (!(v.hasOwnProperty(m) || !f.hasOwnProperty(m) || f[m] == null))
          if (m === rc) {
            var M = f[m];
            for (C in M)
              M.hasOwnProperty(C) && (T || (T = {}), T[C] = "");
          } else
            m === up || m === nc || m === _h || m === Fu || m === TE || (tr.hasOwnProperty(m) ? s || (s = []) : (s = s || []).push(m, null));
      for (m in v) {
        var N = v[m], P = f != null ? f[m] : void 0;
        if (!(!v.hasOwnProperty(m) || N === P || N == null && P == null))
          if (m === rc)
            if (N && Object.freeze(N), P) {
              for (C in P)
                P.hasOwnProperty(C) && (!N || !N.hasOwnProperty(C)) && (T || (T = {}), T[C] = "");
              for (C in N)
                N.hasOwnProperty(C) && P[C] !== N[C] && (T || (T = {}), T[C] = N[C]);
            } else
              T || (s || (s = []), s.push(m, T)), T = N;
          else if (m === up) {
            var V = N ? N[Dh] : void 0, Q = P ? P[Dh] : void 0;
            V != null && Q !== V && (s = s || []).push(m, V);
          } else
            m === nc ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(m, "" + N) : m === _h || m === Fu || (tr.hasOwnProperty(m) ? (N != null && (typeof N != "function" && kh(m, N), m === "onScroll" && yn("scroll", e)), !s && P !== N && (s = [])) : (s = s || []).push(m, N));
      }
      return T && (wv(T, v[rc]), (s = s || []).push(rc, T)), s;
    }
    function cw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && H(e, o);
      var s = po(a, i), f = po(a, o);
      switch (iw(e, t, s, f), a) {
        case "input":
          I(e, o);
          break;
        case "textarea":
          pv(e, o);
          break;
        case "select":
          py(e, o);
          break;
      }
    }
    function fw(e) {
      {
        var t = e.toLowerCase();
        return wc.hasOwnProperty(t) && wc[t] || null;
      }
    }
    function dw(e, t, a, i, o, s, f) {
      var v, m;
      switch (v = po(t, a), Oh(t, a), t) {
        case "dialog":
          yn("cancel", e), yn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < ip.length; C++)
            yn(ip[C], e);
          break;
        case "source":
          yn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e);
          break;
        case "details":
          yn("toggle", e);
          break;
        case "input":
          b(e, a), yn("invalid", e);
          break;
        case "option":
          $t(e, a);
          break;
        case "select":
          hs(e, a), yn("invalid", e);
          break;
        case "textarea":
          dv(e, a), yn("invalid", e);
          break;
      }
      Ss(t, a);
      {
        m = /* @__PURE__ */ new Set();
        for (var T = e.attributes, M = 0; M < T.length; M++) {
          var N = T[M].name.toLowerCase();
          switch (N) {
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
      var P = null;
      for (var V in a)
        if (a.hasOwnProperty(V)) {
          var Q = a[V];
          if (V === nc)
            typeof Q == "string" ? e.textContent !== Q && (a[Fu] !== !0 && Lh(e.textContent, Q, s, f), P = [nc, Q]) : typeof Q == "number" && e.textContent !== "" + Q && (a[Fu] !== !0 && Lh(e.textContent, Q, s, f), P = [nc, "" + Q]);
          else if (tr.hasOwnProperty(V))
            Q != null && (typeof Q != "function" && kh(V, Q), V === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var Ce = void 0, Ve = v && We ? null : qn(V);
            if (a[Fu] !== !0) {
              if (!(V === _h || V === Fu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              V === "value" || V === "checked" || V === "selected")) {
                if (V === up) {
                  var Ue = e.innerHTML, Tt = Q ? Q[Dh] : void 0;
                  if (Tt != null) {
                    var yt = xE(e, Tt);
                    yt !== Ue && sp(V, Ue, yt);
                  }
                } else if (V === rc) {
                  if (m.delete(V), bE) {
                    var z = Ty(Q);
                    Ce = e.getAttribute("style"), z !== Ce && sp(V, Ce, z);
                  }
                } else if (v && !We)
                  m.delete(V.toLowerCase()), Ce = ka(e, V, Q), Q !== Ce && sp(V, Ce, Q);
                else if (!dn(V, Ve, v) && !Vt(V, Q, Ve, v)) {
                  var q = !1;
                  if (Ve !== null)
                    m.delete(Ve.attributeName), Ce = ti(e, V, Q, Ve);
                  else {
                    var F = i;
                    if (F === Yi && (F = ld(t)), F === Yi)
                      m.delete(V.toLowerCase());
                    else {
                      var oe = fw(V);
                      oe !== null && oe !== V && (q = !0, m.delete(oe)), m.delete(V);
                    }
                    Ce = ka(e, V, Q);
                  }
                  var Re = We;
                  !Re && Q !== Ce && !q && sp(V, Ce, Q);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      m.size > 0 && a[Fu] !== !0 && wE(m), t) {
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
      return P;
    }
    function pw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ng(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function rg(e, t) {
      {
        if (Wa)
          return;
        Wa = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ag(e, t, a) {
      {
        if (Wa)
          return;
        Wa = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ig(e, t) {
      {
        if (t === "" || Wa)
          return;
        Wa = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function vw(e, t, a) {
      switch (t) {
        case "input":
          Oe(e, a);
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
      var hw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], DE = [
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
      ], mw = DE.concat(["button"]), yw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], OE = {
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
        var a = ut({}, e || OE), i = {
          tag: t
        };
        return DE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), mw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), hw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var gw = function(e, t) {
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
            return yw.indexOf(t) === -1;
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
      }, Sw = function(e, t) {
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
      }, kE = {};
      cp = function(e, t, a) {
        a = a || OE;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = gw(e, o) ? null : i, f = s ? null : Sw(e, a), v = s || f;
        if (v) {
          var m = v.tag, C = !!s + "|" + e + "|" + m;
          if (!kE[C]) {
            kE[C] = !0;
            var T = e, M = "";
            if (e === "#text" ? /\S/.test(t) ? T = "Text nodes" : (T = "Whitespace text nodes", M = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : T = "<" + e + ">", s) {
              var N = "";
              m === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", T, m, M, N);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", T, m);
          }
        }
      };
    }
    var Ah = "suppressHydrationWarning", Uh = "$", zh = "/$", dp = "$?", pp = "$!", Ew = "style", lg = null, og = null;
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
          var s = i === En ? e.parentNode : e, f = s.namespaceURI || null;
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
    function Rw(e, t, a) {
      {
        var i = e, o = od(i.namespace, t), s = fp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function mN(e) {
      return e;
    }
    function Tw(e) {
      lg = ku(), og = FT();
      var t = null;
      return aa(!1), t;
    }
    function ww(e) {
      jT(og), aa(lg), lg = null, og = null;
    }
    function bw(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (cp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, m = fp(f.ancestorInfo, e);
          cp(null, v, m);
        }
        s = f.namespace;
      }
      var C = lw(e, t, a, s);
      return mp(o, C), hg(C, t), C;
    }
    function xw(e, t) {
      e.appendChild(t);
    }
    function _w(e, t, a, i, o) {
      switch (uw(e, t, a, i), t) {
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
    function Dw(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, m = fp(f.ancestorInfo, t);
          cp(null, v, m);
        }
      }
      return sw(e, t, a, i);
    }
    function ug(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ow(e, t, a, i) {
      {
        var o = a;
        cp(null, e, o.ancestorInfo);
      }
      var s = ow(e, t);
      return mp(i, s), s;
    }
    function kw() {
      var e = window.event;
      return e === void 0 ? wi : cf(e.type);
    }
    var sg = typeof setTimeout == "function" ? setTimeout : void 0, Nw = typeof clearTimeout == "function" ? clearTimeout : void 0, cg = -1, NE = typeof Promise == "function" ? Promise : void 0, Lw = typeof queueMicrotask == "function" ? queueMicrotask : typeof NE < "u" ? function(e) {
      return NE.resolve(null).then(e).catch(Mw);
    } : sg;
    function Mw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Aw(e, t, a, i) {
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
    function Uw(e, t, a, i, o, s) {
      cw(e, t, a, i, o), hg(e, o);
    }
    function LE(e) {
      ms(e, "");
    }
    function zw(e, t, a) {
      e.nodeValue = a;
    }
    function Fw(e, t) {
      e.appendChild(t);
    }
    function jw(e, t) {
      var a;
      e.nodeType === En ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Mh(a);
    }
    function Hw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Pw(e, t, a) {
      e.nodeType === En ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Vw(e, t) {
      e.removeChild(t);
    }
    function Bw(e, t) {
      e.nodeType === En ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function fg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === En) {
          var s = o.data;
          if (s === zh)
            if (i === 0) {
              e.removeChild(o), wn(t);
              return;
            } else
              i--;
          else
            (s === Uh || s === dp || s === pp) && i++;
        }
        a = o;
      } while (a);
      wn(t);
    }
    function $w(e, t) {
      e.nodeType === En ? fg(e.parentNode, t) : e.nodeType === qr && fg(e, t), wn(e);
    }
    function Iw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Yw(e) {
      e.nodeValue = "";
    }
    function Ww(e, t) {
      e = e;
      var a = t[Ew], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = bl("display", i);
    }
    function Qw(e, t) {
      e.nodeValue = t;
    }
    function qw(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === ya && e.documentElement && e.removeChild(e.documentElement);
    }
    function Gw(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Kw(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function Xw(e) {
      return e.nodeType !== En ? null : e;
    }
    function ME(e) {
      return e.data === dp;
    }
    function dg(e) {
      return e.data === pp;
    }
    function Jw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Zw(e, t) {
      e._reactRetry = t;
    }
    function Fh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Wi)
          break;
        if (t === En) {
          var a = e.data;
          if (a === Uh || a === pp || a === dp)
            break;
          if (a === zh)
            return null;
        }
      }
      return e;
    }
    function vp(e) {
      return Fh(e.nextSibling);
    }
    function eb(e) {
      return Fh(e.firstChild);
    }
    function tb(e) {
      return Fh(e.firstChild);
    }
    function nb(e) {
      return Fh(e.nextSibling);
    }
    function rb(e, t, a, i, o, s, f) {
      mp(s, e), hg(e, a);
      var v;
      {
        var m = o;
        v = m.namespace;
      }
      var C = (s.mode & Ae) !== Pe;
      return dw(e, t, a, v, i, C, f);
    }
    function ab(e, t, a, i) {
      return mp(a, e), a.mode & Ae, pw(e, t);
    }
    function ib(e, t) {
      mp(t, e);
    }
    function lb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === zh) {
            if (a === 0)
              return vp(t);
            a--;
          } else
            (i === Uh || i === pp || i === dp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function AE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === Uh || i === pp || i === dp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === zh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ob(e) {
      wn(e);
    }
    function ub(e) {
      wn(e);
    }
    function sb(e) {
      return e !== "head" && e !== "body";
    }
    function cb(e, t, a, i) {
      var o = !0;
      Lh(t.nodeValue, a, i, o);
    }
    function fb(e, t, a, i, o, s) {
      if (t[Ah] !== !0) {
        var f = !0;
        Lh(i.nodeValue, o, s, f);
      }
    }
    function db(e, t) {
      t.nodeType === qr ? ng(e, t) : t.nodeType === En || rg(e, t);
    }
    function pb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? ng(a, t) : t.nodeType === En || rg(a, t));
      }
    }
    function vb(e, t, a, i, o) {
      (o || t[Ah] !== !0) && (i.nodeType === qr ? ng(a, i) : i.nodeType === En || rg(a, i));
    }
    function hb(e, t, a) {
      ag(e, t);
    }
    function mb(e, t) {
      ig(e, t);
    }
    function yb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ag(i, t);
      }
    }
    function gb(e, t) {
      {
        var a = e.parentNode;
        a !== null && ig(a, t);
      }
    }
    function Sb(e, t, a, i, o, s) {
      (s || t[Ah] !== !0) && ag(a, i);
    }
    function Eb(e, t, a, i, o) {
      (o || t[Ah] !== !0) && ig(a, i);
    }
    function Cb(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Rb(e) {
      lp(e);
    }
    var Df = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Df, pg = "__reactProps$" + Df, hp = "__reactContainer$" + Df, vg = "__reactEvents$" + Df, Tb = "__reactListeners$" + Df, wb = "__reactHandles$" + Df;
    function bb(e) {
      delete e[Of], delete e[pg], delete e[vg], delete e[Tb], delete e[wb];
    }
    function mp(e, t) {
      t[Of] = e;
    }
    function jh(e, t) {
      t[hp] = e;
    }
    function UE(e) {
      e[hp] = null;
    }
    function yp(e) {
      return !!e[hp];
    }
    function ac(e) {
      var t = e[Of];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[hp] || a[Of], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = AE(e); o !== null; ) {
              var s = o[Of];
              if (s)
                return s;
              o = AE(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ju(e) {
      var t = e[Of] || e[hp];
      return t && (t.tag === Y || t.tag === Z || t.tag === Ne || t.tag === te) ? t : null;
    }
    function kf(e) {
      if (e.tag === Y || e.tag === Z)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Hh(e) {
      return e[pg] || null;
    }
    function hg(e, t) {
      e[pg] = t;
    }
    function xb(e) {
      var t = e[vg];
      return t === void 0 && (t = e[vg] = /* @__PURE__ */ new Set()), t;
    }
    var zE = {}, FE = R.ReactDebugCurrentFrame;
    function Ph(e) {
      if (e) {
        var t = e._owner, a = gt(e.type, e._source, t ? t.type : null);
        FE.setExtraStackFrame(a);
      } else
        FE.setExtraStackFrame(null);
    }
    function il(e, t, a, i, o) {
      {
        var s = Function.call.bind(rr);
        for (var f in e)
          if (s(e, f)) {
            var v = void 0;
            try {
              if (typeof e[f] != "function") {
                var m = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              v = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              v = C;
            }
            v && !(v instanceof Error) && (Ph(o), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof v), Ph(null)), v instanceof Error && !(v.message in zE) && (zE[v.message] = !0, Ph(o), E("Failed %s type: %s", a, v.message), Ph(null));
          }
      }
    }
    var mg = [], Vh;
    Vh = [];
    var zo = -1;
    function Hu(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (zo < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Vh[zo] && E("Unexpected Fiber popped."), e.current = mg[zo], mg[zo] = null, Vh[zo] = null, zo--;
    }
    function la(e, t, a) {
      zo++, mg[zo] = e.current, Vh[zo] = a, e.current = t;
    }
    var yg;
    yg = {};
    var si = {};
    Object.freeze(si);
    var Fo = Hu(si), Il = Hu(!1), gg = si;
    function Nf(e, t, a) {
      return a && Yl(t) ? gg : Fo.current;
    }
    function jE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Lf(e, t) {
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
          var v = Ze(e) || "Unknown";
          il(i, s, "context", v);
        }
        return o && jE(e, t, s), s;
      }
    }
    function Bh() {
      return Il.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function $h(e) {
      ia(Il, e), ia(Fo, e);
    }
    function Sg(e) {
      ia(Il, e), ia(Fo, e);
    }
    function HE(e, t, a) {
      {
        if (Fo.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(Fo, t, e), la(Il, a, e);
      }
    }
    function PE(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ze(e) || "Unknown";
            yg[s] || (yg[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var v in f)
          if (!(v in o))
            throw new Error((Ze(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var m = Ze(e) || "Unknown";
          il(o, f, "child context", m);
        }
        return ut({}, a, f);
      }
    }
    function Ih(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return gg = Fo.current, la(Fo, a, e), la(Il, Il.current, e), !0;
      }
    }
    function VE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = PE(e, t, gg);
          i.__reactInternalMemoizedMergedChildContext = o, ia(Il, e), ia(Fo, e), la(Fo, o, e), la(Il, a, e);
        } else
          ia(Il, e), la(Il, a, e);
      }
    }
    function _b(e) {
      {
        if (!Ea(e) || e.tag !== W)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case W: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Pu = 0, Yh = 1, jo = null, Eg = !1, Cg = !1;
    function BE(e) {
      jo === null ? jo = [e] : jo.push(e);
    }
    function Db(e) {
      Eg = !0, BE(e);
    }
    function $E() {
      Eg && Vu();
    }
    function Vu() {
      if (!Cg && jo !== null) {
        Cg = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = jo;
          for (Tn(Ln); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          jo = null, Eg = !1;
        } catch (s) {
          throw jo !== null && (jo = jo.slice(e + 1)), Dd(Zr, Vu), s;
        } finally {
          Tn(t), Cg = !1;
        }
      }
      return null;
    }
    var Mf = [], Af = 0, Wh = null, Qh = 0, Di = [], Oi = 0, ic = null, Ho = 1, Po = "";
    function Ob(e) {
      return oc(), (e.flags & Pv) !== He;
    }
    function kb(e) {
      return oc(), Qh;
    }
    function Nb() {
      var e = Po, t = Ho, a = t & ~Lb(t);
      return a.toString(32) + e;
    }
    function lc(e, t) {
      oc(), Mf[Af++] = Qh, Mf[Af++] = Wh, Wh = e, Qh = t;
    }
    function IE(e, t, a) {
      oc(), Di[Oi++] = Ho, Di[Oi++] = Po, Di[Oi++] = ic, ic = e;
      var i = Ho, o = Po, s = qh(i) - 1, f = i & ~(1 << s), v = a + 1, m = qh(t) + s;
      if (m > 30) {
        var C = s - s % 5, T = (1 << C) - 1, M = (f & T).toString(32), N = f >> C, P = s - C, V = qh(t) + P, Q = v << P, Ce = Q | N, Ve = M + o;
        Ho = 1 << V | Ce, Po = Ve;
      } else {
        var Ue = v << s, Tt = Ue | f, yt = o;
        Ho = 1 << m | Tt, Po = yt;
      }
    }
    function Rg(e) {
      oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        lc(e, a), IE(e, a, i);
      }
    }
    function qh(e) {
      return 32 - Us(e);
    }
    function Lb(e) {
      return 1 << qh(e) - 1;
    }
    function Tg(e) {
      for (; e === Wh; )
        Wh = Mf[--Af], Mf[Af] = null, Qh = Mf[--Af], Mf[Af] = null;
      for (; e === ic; )
        ic = Di[--Oi], Di[Oi] = null, Po = Di[--Oi], Di[Oi] = null, Ho = Di[--Oi], Di[Oi] = null;
    }
    function Mb() {
      return oc(), ic !== null ? {
        id: Ho,
        overflow: Po
      } : null;
    }
    function Ab(e, t) {
      oc(), Di[Oi++] = Ho, Di[Oi++] = Po, Di[Oi++] = ic, Ho = t.id, Po = t.overflow, ic = e;
    }
    function oc() {
      Mr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, ki = null, ll = !1, uc = !1, Bu = null;
    function Ub() {
      ll && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function YE() {
      uc = !0;
    }
    function zb() {
      return uc;
    }
    function Fb(e) {
      var t = e.stateNode.containerInfo;
      return ki = tb(t), Lr = e, ll = !0, Bu = null, uc = !1, !0;
    }
    function jb(e, t, a) {
      return ki = nb(t), Lr = e, ll = !0, Bu = null, uc = !1, a !== null && Ab(e, a), !0;
    }
    function WE(e, t) {
      switch (e.tag) {
        case te: {
          db(e.stateNode.containerInfo, t);
          break;
        }
        case Y: {
          var a = (e.mode & Ae) !== Pe;
          vb(
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
          i.dehydrated !== null && pb(i.dehydrated, t);
          break;
        }
      }
    }
    function QE(e, t) {
      WE(e, t);
      var a = VD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Lt) : i.push(a);
    }
    function wg(e, t) {
      {
        if (uc)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Y:
                var i = t.type;
                t.pendingProps, hb(a, i);
                break;
              case Z:
                var o = t.pendingProps;
                mb(a, o);
                break;
            }
            break;
          }
          case Y: {
            var s = e.type, f = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case Y: {
                var m = t.type, C = t.pendingProps, T = (e.mode & Ae) !== Pe;
                Sb(
                  s,
                  f,
                  v,
                  m,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
              case Z: {
                var M = t.pendingProps, N = (e.mode & Ae) !== Pe;
                Eb(
                  s,
                  f,
                  v,
                  M,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case Ne: {
            var P = e.memoizedState, V = P.dehydrated;
            if (V !== null)
              switch (t.tag) {
                case Y:
                  var Q = t.type;
                  t.pendingProps, yb(V, Q);
                  break;
                case Z:
                  var Ce = t.pendingProps;
                  gb(V, Ce);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function qE(e, t) {
      t.flags = t.flags & ~Si | qt, wg(e, t);
    }
    function GE(e, t) {
      switch (e.tag) {
        case Y: {
          var a = e.type;
          e.pendingProps;
          var i = Gw(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, ki = eb(i), !0) : !1;
        }
        case Z: {
          var o = e.pendingProps, s = Kw(t, o);
          return s !== null ? (e.stateNode = s, Lr = e, ki = null, !0) : !1;
        }
        case Ne: {
          var f = Xw(t);
          if (f !== null) {
            var v = {
              dehydrated: f,
              treeContext: Mb(),
              retryLane: Ta
            };
            e.memoizedState = v;
            var m = BD(f);
            return m.return = e, e.child = m, Lr = e, ki = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function bg(e) {
      return (e.mode & Ae) !== Pe && (e.flags & et) === He;
    }
    function xg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function _g(e) {
      if (ll) {
        var t = ki;
        if (!t) {
          bg(e) && (wg(Lr, e), xg()), qE(Lr, e), ll = !1, Lr = e;
          return;
        }
        var a = t;
        if (!GE(e, t)) {
          bg(e) && (wg(Lr, e), xg()), t = vp(a);
          var i = Lr;
          if (!t || !GE(e, t)) {
            qE(Lr, e), ll = !1, Lr = e;
            return;
          }
          QE(i, a);
        }
      }
    }
    function Hb(e, t, a) {
      var i = e.stateNode, o = !uc, s = rb(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function Pb(e) {
      var t = e.stateNode, a = e.memoizedProps, i = ab(t, a, e);
      if (i) {
        var o = Lr;
        if (o !== null)
          switch (o.tag) {
            case te: {
              var s = o.stateNode.containerInfo, f = (o.mode & Ae) !== Pe;
              cb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case Y: {
              var v = o.type, m = o.memoizedProps, C = o.stateNode, T = (o.mode & Ae) !== Pe;
              fb(
                v,
                m,
                C,
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
    function Vb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ib(a, e);
    }
    function Bb(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return lb(a);
    }
    function KE(e) {
      for (var t = e.return; t !== null && t.tag !== Y && t.tag !== te && t.tag !== Ne; )
        t = t.return;
      Lr = t;
    }
    function Gh(e) {
      if (e !== Lr)
        return !1;
      if (!ll)
        return KE(e), ll = !0, !1;
      if (e.tag !== te && (e.tag !== Y || sb(e.type) && !ug(e.type, e.memoizedProps))) {
        var t = ki;
        if (t)
          if (bg(e))
            XE(e), xg();
          else
            for (; t; )
              QE(e, t), t = vp(t);
      }
      return KE(e), e.tag === Ne ? ki = Bb(e) : ki = Lr ? vp(e.stateNode) : null, !0;
    }
    function $b() {
      return ll && ki !== null;
    }
    function XE(e) {
      for (var t = ki; t; )
        WE(e, t), t = vp(t);
    }
    function Uf() {
      Lr = null, ki = null, ll = !1, uc = !1;
    }
    function JE() {
      Bu !== null && (W1(Bu), Bu = null);
    }
    function Mr() {
      return ll;
    }
    function Dg(e) {
      Bu === null ? Bu = [e] : Bu.push(e);
    }
    var Ib = R.ReactCurrentBatchConfig, Yb = null;
    function Wb() {
      return Ib.transition;
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
      var Qb = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Cn && (t = a), a = a.return;
        return t;
      }, sc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], cc = /* @__PURE__ */ new Set();
      ol.recordUnsafeLifecycleWarnings = function(e, t) {
        cc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillUpdate == "function" && Tp.push(e));
      }, ol.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(N) {
          e.add(Ze(N) || "Component"), cc.add(N.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(N) {
          t.add(Ze(N) || "Component"), cc.add(N.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(N) {
          a.add(Ze(N) || "Component"), cc.add(N.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(N) {
          i.add(Ze(N) || "Component"), cc.add(N.type);
        }), Cp = []);
        var o = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(N) {
          o.add(Ze(N) || "Component"), cc.add(N.type);
        }), Rp = []);
        var s = /* @__PURE__ */ new Set();
        if (Tp.length > 0 && (Tp.forEach(function(N) {
          s.add(Ze(N) || "Component"), cc.add(N.type);
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
          var C = sc(e);
          k(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
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
          var M = sc(o);
          k(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
      };
      var Kh = /* @__PURE__ */ new Map(), ZE = /* @__PURE__ */ new Set();
      ol.recordLegacyContextWarning = function(e, t) {
        var a = Qb(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!ZE.has(e.type)) {
          var i = Kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Kh.set(a, i)), i.push(e));
        }
      }, ol.flushLegacyContextWarning = function() {
        Kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ze(s) || "Component"), ZE.add(s.type);
            });
            var o = sc(i);
            try {
              vn(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              an();
            }
          }
        });
      }, ol.discardPendingWarnings = function() {
        gp = [], Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], Kh = /* @__PURE__ */ new Map();
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
    var Og = Hu(null), kg;
    kg = {};
    var Xh = null, zf = null, Ng = null, Jh = !1;
    function Zh() {
      Xh = null, zf = null, Ng = null, Jh = !1;
    }
    function eC() {
      Jh = !0;
    }
    function tC() {
      Jh = !1;
    }
    function nC(e, t, a) {
      la(Og, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== kg && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = kg;
    }
    function Lg(e, t) {
      var a = Og.current;
      ia(Og, t), e._currentValue = a;
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
    function qb(e, t, a) {
      Gb(e, t, a);
    }
    function Gb(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === W) {
                var v = Eu(a), m = Vo(tn, v);
                m.tag = tm;
                var C = i.updateQueue;
                if (C !== null) {
                  var T = C.shared, M = T.pending;
                  M === null ? m.next = m : (m.next = M.next, M.next = m), T.pending = m;
                }
              }
              i.lanes = rt(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = rt(N.lanes, a)), Mg(i.return, a, e), s.lanes = rt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ge)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === Gt) {
          var P = i.return;
          if (P === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          P.lanes = rt(P.lanes, a);
          var V = P.alternate;
          V !== null && (V.lanes = rt(V.lanes, a)), Mg(P, a, e), o = i.sibling;
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
            var Q = o.sibling;
            if (Q !== null) {
              Q.return = o.return, o = Q;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function Ff(e, t) {
      Xh = e, zf = null, Ng = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Fp(), a.firstContext = null);
      }
    }
    function Zn(e) {
      Jh && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ng !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (zf === null) {
          if (Xh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          zf = a, Xh.dependencies = {
            lanes: G,
            firstContext: a
          };
        } else
          zf = zf.next = a;
      }
      return t;
    }
    var fc = null;
    function Ag(e) {
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
    function rC(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Ag(t)) : (a.next = o.next, o.next = a), t.interleaved = a, em(e, i);
    }
    function Xb(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Ag(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function Jb(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Ag(t)) : (a.next = o.next, o.next = a), t.interleaved = a, em(e, i);
    }
    function Qa(e, t) {
      return em(e, t);
    }
    var Zb = em;
    function em(e, t) {
      e.lanes = rt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = rt(a.lanes, t)), a === null && (e.flags & (qt | Si)) !== He && aR(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = rt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = rt(a.childLanes, t) : (o.flags & (qt | Si)) !== He && aR(e), i = o, o = o.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var aC = 0, iC = 1, tm = 2, Ug = 3, nm = !1, zg, rm;
    zg = !1, rm = null;
    function Fg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: G
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function lC(e, t) {
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
    function Vo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: aC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function $u(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (rm === o && !zg && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), zg = !0), Z_()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, Zb(e, a);
      } else
        return Jb(e, o, t, a);
    }
    function am(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Hd(a)) {
          var s = o.lanes;
          s = ef(s, e.pendingLanes);
          var f = rt(s, a);
          o.lanes = f, Pd(e, f);
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
            var m = v;
            do {
              var C = {
                eventTime: m.eventTime,
                lane: m.lane,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), m = m.next;
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
    function ex(e, t, a, i, o, s) {
      switch (a.tag) {
        case iC: {
          var f = a.payload;
          if (typeof f == "function") {
            eC();
            var v = f.call(s, i, o);
            {
              if (e.mode & Cn) {
                en(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  en(!1);
                }
              }
              tC();
            }
            return v;
          }
          return f;
        }
        case Ug:
          e.flags = e.flags & ~lr | et;
        case aC: {
          var m = a.payload, C;
          if (typeof m == "function") {
            eC(), C = m.call(s, i, o);
            {
              if (e.mode & Cn) {
                en(!0);
                try {
                  m.call(s, i, o);
                } finally {
                  en(!1);
                }
              }
              tC();
            }
          } else
            C = m;
          return C == null ? i : ut({}, i, C);
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
        var m = v, C = m.next;
        m.next = null, f === null ? s = C : f.next = C, f = m;
        var T = e.alternate;
        if (T !== null) {
          var M = T.updateQueue, N = M.lastBaseUpdate;
          N !== f && (N === null ? M.firstBaseUpdate = C : N.next = C, M.lastBaseUpdate = m);
        }
      }
      if (s !== null) {
        var P = o.baseState, V = G, Q = null, Ce = null, Ve = null, Ue = s;
        do {
          var Tt = Ue.lane, yt = Ue.eventTime;
          if (Do(i, Tt)) {
            if (Ve !== null) {
              var q = {
                eventTime: yt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kn,
                tag: Ue.tag,
                payload: Ue.payload,
                callback: Ue.callback,
                next: null
              };
              Ve = Ve.next = q;
            }
            P = ex(e, o, Ue, P, t, a);
            var F = Ue.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ue.lane !== kn) {
              e.flags |= Gn;
              var oe = o.effects;
              oe === null ? o.effects = [Ue] : oe.push(Ue);
            }
          } else {
            var z = {
              eventTime: yt,
              lane: Tt,
              tag: Ue.tag,
              payload: Ue.payload,
              callback: Ue.callback,
              next: null
            };
            Ve === null ? (Ce = Ve = z, Q = P) : Ve = Ve.next = z, V = rt(V, Tt);
          }
          if (Ue = Ue.next, Ue === null) {
            if (v = o.shared.pending, v === null)
              break;
            var Re = v, me = Re.next;
            Re.next = null, Ue = me, o.lastBaseUpdate = Re, o.shared.pending = null;
          }
        } while (!0);
        Ve === null && (Q = P), o.baseState = Q, o.firstBaseUpdate = Ce, o.lastBaseUpdate = Ve;
        var Xe = o.shared.interleaved;
        if (Xe !== null) {
          var nt = Xe;
          do
            V = rt(V, nt.lane), nt = nt.next;
          while (nt !== Xe);
        } else
          s === null && (o.shared.lanes = G);
        Gp(V), e.lanes = V, e.memoizedState = P;
      }
      rm = null;
    }
    function tx(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function oC() {
      nm = !1;
    }
    function lm() {
      return nm;
    }
    function uC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, tx(f, a));
        }
    }
    var Hg = {}, sC = new h.Component().refs, Pg, Vg, Bg, $g, Ig, cC, om, Yg, Wg, Qg;
    {
      Pg = /* @__PURE__ */ new Set(), Vg = /* @__PURE__ */ new Set(), Bg = /* @__PURE__ */ new Set(), $g = /* @__PURE__ */ new Set(), Yg = /* @__PURE__ */ new Set(), Ig = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Qg = /* @__PURE__ */ new Set();
      var fC = /* @__PURE__ */ new Set();
      om = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          fC.has(a) || (fC.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, cC = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          Ig.has(a) || (Ig.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Hg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Hg);
    }
    function qg(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & Cn) {
          en(!0);
          try {
            s = a(i, o);
          } finally {
            en(!1);
          }
        }
        cC(t, s);
      }
      var f = s == null ? o : ut({}, o, s);
      if (e.memoizedState = f, e.lanes === G) {
        var v = e.updateQueue;
        v.baseState = f;
      }
    }
    var Gg = {
      isMounted: Ca,
      enqueueSetState: function(e, t, a) {
        var i = gi(e), o = xa(), s = Xu(i), f = Vo(o, s);
        f.payload = t, a != null && (om(a, "setState"), f.callback = a);
        var v = $u(i, f, s);
        v !== null && (mr(v, i, s, o), am(v, i, s)), jc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = gi(e), o = xa(), s = Xu(i), f = Vo(o, s);
        f.tag = iC, f.payload = t, a != null && (om(a, "replaceState"), f.callback = a);
        var v = $u(i, f, s);
        v !== null && (mr(v, i, s, o), am(v, i, s)), jc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = gi(e), i = xa(), o = Xu(a), s = Vo(i, o);
        s.tag = tm, t != null && (om(t, "forceUpdate"), s.callback = t);
        var f = $u(a, s, o);
        f !== null && (mr(f, a, o, i), am(f, a, o)), mu(a, o);
      }
    };
    function dC(e, t, a, i, o, s, f) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var m = v.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Cn) {
            en(!0);
            try {
              m = v.shouldComponentUpdate(i, s, f);
            } finally {
              en(!1);
            }
          }
          m === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return m;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Qe(a, i) || !Qe(o, s) : !0;
    }
    function nx(e, t, a) {
      var i = e.stateNode;
      {
        var o = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !Wg.has(t) && (Wg.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Bg.has(t) && (Bg.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var v = i.state;
        v && (typeof v != "object" || _t(v)) && E("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function pC(e, t) {
      t.updater = Gg, e.stateNode = t, kc(t, e), t._reactInternalInstance = Hg;
    }
    function vC(e, t, a) {
      var i = !1, o = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === de && f._context === void 0
        );
        if (!v && !Qg.has(t)) {
          Qg.add(t);
          var m = "";
          f === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? m = " However, it is set to a " + typeof f + "." : f.$$typeof === re ? m = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", m);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Zn(f);
      else {
        o = Nf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Lf(e, o) : si;
      }
      var T = new t(a, s);
      if (e.mode & Cn) {
        en(!0);
        try {
          T = new t(a, s);
        } finally {
          en(!1);
        }
      }
      var M = e.memoizedState = T.state !== null && T.state !== void 0 ? T.state : null;
      pC(e, T);
      {
        if (typeof t.getDerivedStateFromProps == "function" && M === null) {
          var N = xt(t) || "Component";
          Vg.has(N) || (Vg.add(N), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, T.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof T.getSnapshotBeforeUpdate == "function") {
          var P = null, V = null, Q = null;
          if (typeof T.componentWillMount == "function" && T.componentWillMount.__suppressDeprecationWarning !== !0 ? P = "componentWillMount" : typeof T.UNSAFE_componentWillMount == "function" && (P = "UNSAFE_componentWillMount"), typeof T.componentWillReceiveProps == "function" && T.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? V = "componentWillReceiveProps" : typeof T.UNSAFE_componentWillReceiveProps == "function" && (V = "UNSAFE_componentWillReceiveProps"), typeof T.componentWillUpdate == "function" && T.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof T.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), P !== null || V !== null || Q !== null) {
            var Ce = xt(t) || "Component", Ve = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            $g.has(Ce) || ($g.add(Ce), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ce, Ve, P !== null ? `
  ` + P : "", V !== null ? `
  ` + V : "", Q !== null ? `
  ` + Q : ""));
          }
        }
      }
      return i && jE(e, o, s), T;
    }
    function rx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ze(e) || "Component"), Gg.enqueueReplaceState(t, t.state, null));
    }
    function hC(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = Ze(e) || "Component";
          Pg.has(s) || (Pg.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Gg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Kg(e, t, a, i) {
      nx(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = sC, Fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = Zn(s);
      else {
        var f = Nf(e, t, !0);
        o.context = Lf(e, f);
      }
      {
        if (o.state === a) {
          var v = xt(t) || "Component";
          Yg.has(v) || (Yg.add(v), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & Cn && ol.recordLegacyContextWarning(e, o), ol.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var m = t.getDerivedStateFromProps;
      if (typeof m == "function" && (qg(e, t, m, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (rx(e, o), im(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var C = Le;
        C |= za, (e.mode & Ha) !== Pe && (C |= Fa), e.flags |= C;
      }
    }
    function ax(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, v = t.contextType, m = si;
      if (typeof v == "object" && v !== null)
        m = Zn(v);
      else {
        var C = Nf(e, t, !0);
        m = Lf(e, C);
      }
      var T = t.getDerivedStateFromProps, M = typeof T == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !M && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== m) && hC(e, o, a, m), oC();
      var N = e.memoizedState, P = o.state = N;
      if (im(e, a, o, i), P = e.memoizedState, s === a && N === P && !Bh() && !lm()) {
        if (typeof o.componentDidMount == "function") {
          var V = Le;
          V |= za, (e.mode & Ha) !== Pe && (V |= Fa), e.flags |= V;
        }
        return !1;
      }
      typeof T == "function" && (qg(e, t, T, a), P = e.memoizedState);
      var Q = lm() || dC(e, t, s, a, N, P, m);
      if (Q) {
        if (!M && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Ce = Le;
          Ce |= za, (e.mode & Ha) !== Pe && (Ce |= Fa), e.flags |= Ce;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var Ve = Le;
          Ve |= za, (e.mode & Ha) !== Pe && (Ve |= Fa), e.flags |= Ve;
        }
        e.memoizedProps = a, e.memoizedState = P;
      }
      return o.props = a, o.state = P, o.context = m, Q;
    }
    function ix(e, t, a, i, o) {
      var s = t.stateNode;
      lC(e, t);
      var f = t.memoizedProps, v = t.type === t.elementType ? f : ul(t.type, f);
      s.props = v;
      var m = t.pendingProps, C = s.context, T = a.contextType, M = si;
      if (typeof T == "object" && T !== null)
        M = Zn(T);
      else {
        var N = Nf(t, a, !0);
        M = Lf(t, N);
      }
      var P = a.getDerivedStateFromProps, V = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !V && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== m || C !== M) && hC(t, s, i, M), oC();
      var Q = t.memoizedState, Ce = s.state = Q;
      if (im(t, i, s, o), Ce = t.memoizedState, f === m && Q === Ce && !Bh() && !lm() && !D)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= Le), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= jn), !1;
      typeof P == "function" && (qg(t, a, P, i), Ce = t.memoizedState);
      var Ve = lm() || dC(t, a, v, i, Q, Ce, M) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      D;
      return Ve ? (!V && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ce, M), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ce, M)), typeof s.componentDidUpdate == "function" && (t.flags |= Le), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= jn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= Le), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= jn), t.memoizedProps = i, t.memoizedState = Ce), s.props = i, s.state = Ce, s.context = M, Ve;
    }
    var Xg, Jg, Zg, e0, t0, mC = function(e, t) {
    };
    Xg = !1, Jg = !1, Zg = {}, e0 = {}, t0 = {}, mC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ze(t) || "Component";
        e0[a] || (e0[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Cn || vt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var o = Ze(e) || "Component";
          Zg[o] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Zg[o] = !0);
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
          Bn(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var T = function(M) {
            var N = m.refs;
            N === sC && (N = m.refs = {}), M === null ? delete N[C] : N[C] = M;
          };
          return T._stringRef = C, T;
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
        var t = Ze(e) || "Component";
        if (t0[t])
          return;
        t0[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function yC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function gC(e) {
      function t(z, q) {
        if (e) {
          var F = z.deletions;
          F === null ? (z.deletions = [q], z.flags |= Lt) : F.push(q);
        }
      }
      function a(z, q) {
        if (!e)
          return null;
        for (var F = q; F !== null; )
          t(z, F), F = F.sibling;
        return null;
      }
      function i(z, q) {
        for (var F = /* @__PURE__ */ new Map(), oe = q; oe !== null; )
          oe.key !== null ? F.set(oe.key, oe) : F.set(oe.index, oe), oe = oe.sibling;
        return F;
      }
      function o(z, q) {
        var F = Sc(z, q);
        return F.index = 0, F.sibling = null, F;
      }
      function s(z, q, F) {
        if (z.index = F, !e)
          return z.flags |= Pv, q;
        var oe = z.alternate;
        if (oe !== null) {
          var Re = oe.index;
          return Re < q ? (z.flags |= qt, q) : Re;
        } else
          return z.flags |= qt, q;
      }
      function f(z) {
        return e && z.alternate === null && (z.flags |= qt), z;
      }
      function v(z, q, F, oe) {
        if (q === null || q.tag !== Z) {
          var Re = DS(F, z.mode, oe);
          return Re.return = z, Re;
        } else {
          var me = o(q, F);
          return me.return = z, me;
        }
      }
      function m(z, q, F, oe) {
        var Re = F.type;
        if (Re === ma)
          return T(z, q, F.props.children, oe, F.key);
        if (q !== null && (q.elementType === Re || // Keep this check inline so it only runs on the false path:
        uR(q, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Re == "object" && Re !== null && Re.$$typeof === je && yC(Re) === q.type)) {
          var me = o(q, F.props);
          return me.ref = wp(z, q, F), me.return = z, me._debugSource = F._source, me._debugOwner = F._owner, me;
        }
        var Xe = _S(F, z.mode, oe);
        return Xe.ref = wp(z, q, F), Xe.return = z, Xe;
      }
      function C(z, q, F, oe) {
        if (q === null || q.tag !== ye || q.stateNode.containerInfo !== F.containerInfo || q.stateNode.implementation !== F.implementation) {
          var Re = OS(F, z.mode, oe);
          return Re.return = z, Re;
        } else {
          var me = o(q, F.children || []);
          return me.return = z, me;
        }
      }
      function T(z, q, F, oe, Re) {
        if (q === null || q.tag !== Fe) {
          var me = Zu(F, z.mode, oe, Re);
          return me.return = z, me;
        } else {
          var Xe = o(q, F);
          return Xe.return = z, Xe;
        }
      }
      function M(z, q, F) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var oe = DS("" + q, z.mode, F);
          return oe.return = z, oe;
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Br: {
              var Re = _S(q, z.mode, F);
              return Re.ref = wp(z, null, q), Re.return = z, Re;
            }
            case $r: {
              var me = OS(q, z.mode, F);
              return me.return = z, me;
            }
            case je: {
              var Xe = q._payload, nt = q._init;
              return M(z, nt(Xe), F);
            }
          }
          if (_t(q) || pi(q)) {
            var Wt = Zu(q, z.mode, F, null);
            return Wt.return = z, Wt;
          }
          um(z, q);
        }
        return typeof q == "function" && sm(z), null;
      }
      function N(z, q, F, oe) {
        var Re = q !== null ? q.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return Re !== null ? null : v(z, q, "" + F, oe);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Br:
              return F.key === Re ? m(z, q, F, oe) : null;
            case $r:
              return F.key === Re ? C(z, q, F, oe) : null;
            case je: {
              var me = F._payload, Xe = F._init;
              return N(z, q, Xe(me), oe);
            }
          }
          if (_t(F) || pi(F))
            return Re !== null ? null : T(z, q, F, oe, null);
          um(z, F);
        }
        return typeof F == "function" && sm(z), null;
      }
      function P(z, q, F, oe, Re) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var me = z.get(F) || null;
          return v(q, me, "" + oe, Re);
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Br: {
              var Xe = z.get(oe.key === null ? F : oe.key) || null;
              return m(q, Xe, oe, Re);
            }
            case $r: {
              var nt = z.get(oe.key === null ? F : oe.key) || null;
              return C(q, nt, oe, Re);
            }
            case je:
              var Wt = oe._payload, At = oe._init;
              return P(z, q, F, At(Wt), Re);
          }
          if (_t(oe) || pi(oe)) {
            var Qn = z.get(F) || null;
            return T(q, Qn, oe, Re, null);
          }
          um(q, oe);
        }
        return typeof oe == "function" && sm(q), null;
      }
      function V(z, q, F) {
        {
          if (typeof z != "object" || z === null)
            return q;
          switch (z.$$typeof) {
            case Br:
            case $r:
              mC(z, F);
              var oe = z.key;
              if (typeof oe != "string")
                break;
              if (q === null) {
                q = /* @__PURE__ */ new Set(), q.add(oe);
                break;
              }
              if (!q.has(oe)) {
                q.add(oe);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", oe);
              break;
            case je:
              var Re = z._payload, me = z._init;
              V(me(Re), q, F);
              break;
          }
        }
        return q;
      }
      function Q(z, q, F, oe) {
        for (var Re = null, me = 0; me < F.length; me++) {
          var Xe = F[me];
          Re = V(Xe, Re, z);
        }
        for (var nt = null, Wt = null, At = q, Qn = 0, Ut = 0, Pn = null; At !== null && Ut < F.length; Ut++) {
          At.index > Ut ? (Pn = At, At = null) : Pn = At.sibling;
          var ua = N(z, At, F[Ut], oe);
          if (ua === null) {
            At === null && (At = Pn);
            break;
          }
          e && At && ua.alternate === null && t(z, At), Qn = s(ua, Qn, Ut), Wt === null ? nt = ua : Wt.sibling = ua, Wt = ua, At = Pn;
        }
        if (Ut === F.length) {
          if (a(z, At), Mr()) {
            var Pr = Ut;
            lc(z, Pr);
          }
          return nt;
        }
        if (At === null) {
          for (; Ut < F.length; Ut++) {
            var fi = M(z, F[Ut], oe);
            fi !== null && (Qn = s(fi, Qn, Ut), Wt === null ? nt = fi : Wt.sibling = fi, Wt = fi);
          }
          if (Mr()) {
            var _a = Ut;
            lc(z, _a);
          }
          return nt;
        }
        for (var Da = i(z, At); Ut < F.length; Ut++) {
          var sa = P(Da, z, Ut, F[Ut], oe);
          sa !== null && (e && sa.alternate !== null && Da.delete(sa.key === null ? Ut : sa.key), Qn = s(sa, Qn, Ut), Wt === null ? nt = sa : Wt.sibling = sa, Wt = sa);
        }
        if (e && Da.forEach(function(ed) {
          return t(z, ed);
        }), Mr()) {
          var Qo = Ut;
          lc(z, Qo);
        }
        return nt;
      }
      function Ce(z, q, F, oe) {
        var Re = pi(F);
        if (typeof Re != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (Jg || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jg = !0), F.entries === Re && (Xg || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xg = !0);
          var me = Re.call(F);
          if (me)
            for (var Xe = null, nt = me.next(); !nt.done; nt = me.next()) {
              var Wt = nt.value;
              Xe = V(Wt, Xe, z);
            }
        }
        var At = Re.call(F);
        if (At == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, Ut = null, Pn = q, ua = 0, Pr = 0, fi = null, _a = At.next(); Pn !== null && !_a.done; Pr++, _a = At.next()) {
          Pn.index > Pr ? (fi = Pn, Pn = null) : fi = Pn.sibling;
          var Da = N(z, Pn, _a.value, oe);
          if (Da === null) {
            Pn === null && (Pn = fi);
            break;
          }
          e && Pn && Da.alternate === null && t(z, Pn), ua = s(Da, ua, Pr), Ut === null ? Qn = Da : Ut.sibling = Da, Ut = Da, Pn = fi;
        }
        if (_a.done) {
          if (a(z, Pn), Mr()) {
            var sa = Pr;
            lc(z, sa);
          }
          return Qn;
        }
        if (Pn === null) {
          for (; !_a.done; Pr++, _a = At.next()) {
            var Qo = M(z, _a.value, oe);
            Qo !== null && (ua = s(Qo, ua, Pr), Ut === null ? Qn = Qo : Ut.sibling = Qo, Ut = Qo);
          }
          if (Mr()) {
            var ed = Pr;
            lc(z, ed);
          }
          return Qn;
        }
        for (var ev = i(z, Pn); !_a.done; Pr++, _a = At.next()) {
          var Zl = P(ev, z, Pr, _a.value, oe);
          Zl !== null && (e && Zl.alternate !== null && ev.delete(Zl.key === null ? Pr : Zl.key), ua = s(Zl, ua, Pr), Ut === null ? Qn = Zl : Ut.sibling = Zl, Ut = Zl);
        }
        if (e && ev.forEach(function(SO) {
          return t(z, SO);
        }), Mr()) {
          var gO = Pr;
          lc(z, gO);
        }
        return Qn;
      }
      function Ve(z, q, F, oe) {
        if (q !== null && q.tag === Z) {
          a(z, q.sibling);
          var Re = o(q, F);
          return Re.return = z, Re;
        }
        a(z, q);
        var me = DS(F, z.mode, oe);
        return me.return = z, me;
      }
      function Ue(z, q, F, oe) {
        for (var Re = F.key, me = q; me !== null; ) {
          if (me.key === Re) {
            var Xe = F.type;
            if (Xe === ma) {
              if (me.tag === Fe) {
                a(z, me.sibling);
                var nt = o(me, F.props.children);
                return nt.return = z, nt._debugSource = F._source, nt._debugOwner = F._owner, nt;
              }
            } else if (me.elementType === Xe || // Keep this check inline so it only runs on the false path:
            uR(me, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Xe == "object" && Xe !== null && Xe.$$typeof === je && yC(Xe) === me.type) {
              a(z, me.sibling);
              var Wt = o(me, F.props);
              return Wt.ref = wp(z, me, F), Wt.return = z, Wt._debugSource = F._source, Wt._debugOwner = F._owner, Wt;
            }
            a(z, me);
            break;
          } else
            t(z, me);
          me = me.sibling;
        }
        if (F.type === ma) {
          var At = Zu(F.props.children, z.mode, oe, F.key);
          return At.return = z, At;
        } else {
          var Qn = _S(F, z.mode, oe);
          return Qn.ref = wp(z, q, F), Qn.return = z, Qn;
        }
      }
      function Tt(z, q, F, oe) {
        for (var Re = F.key, me = q; me !== null; ) {
          if (me.key === Re)
            if (me.tag === ye && me.stateNode.containerInfo === F.containerInfo && me.stateNode.implementation === F.implementation) {
              a(z, me.sibling);
              var Xe = o(me, F.children || []);
              return Xe.return = z, Xe;
            } else {
              a(z, me);
              break;
            }
          else
            t(z, me);
          me = me.sibling;
        }
        var nt = OS(F, z.mode, oe);
        return nt.return = z, nt;
      }
      function yt(z, q, F, oe) {
        var Re = typeof F == "object" && F !== null && F.type === ma && F.key === null;
        if (Re && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Br:
              return f(Ue(z, q, F, oe));
            case $r:
              return f(Tt(z, q, F, oe));
            case je:
              var me = F._payload, Xe = F._init;
              return yt(z, q, Xe(me), oe);
          }
          if (_t(F))
            return Q(z, q, F, oe);
          if (pi(F))
            return Ce(z, q, F, oe);
          um(z, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? f(Ve(z, q, "" + F, oe)) : (typeof F == "function" && sm(z), a(z, q));
      }
      return yt;
    }
    var jf = gC(!0), SC = gC(!1);
    function lx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function ox(e, t) {
      for (var a = e.child; a !== null; )
        zD(a, t), a = a.sibling;
    }
    var bp = {}, Iu = Hu(bp), xp = Hu(bp), cm = Hu(bp);
    function fm(e) {
      if (e === bp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = fm(cm.current);
      return e;
    }
    function n0(e, t) {
      la(cm, t, e), la(xp, e, e), la(Iu, bp, e);
      var a = Cw(t);
      ia(Iu, e), la(Iu, a, e);
    }
    function Hf(e) {
      ia(Iu, e), ia(xp, e), ia(cm, e);
    }
    function r0() {
      var e = fm(Iu.current);
      return e;
    }
    function CC(e) {
      fm(cm.current);
      var t = fm(Iu.current), a = Rw(t, e.type);
      t !== a && (la(xp, e, e), la(Iu, a, e));
    }
    function a0(e) {
      xp.current === e && (ia(Iu, e), ia(xp, e));
    }
    var ux = 0, RC = 1, TC = 1, _p = 2, sl = Hu(ux);
    function i0(e, t) {
      return (e & t) !== 0;
    }
    function Pf(e) {
      return e & RC;
    }
    function l0(e, t) {
      return e & RC | t;
    }
    function sx(e, t) {
      return e | t;
    }
    function Yu(e, t) {
      la(sl, t, e);
    }
    function Vf(e) {
      ia(sl, e);
    }
    function cx(e, t) {
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
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & et) !== He;
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
    var qa = (
      /*   */
      0
    ), sr = (
      /* */
      1
    ), Wl = (
      /*  */
      2
    ), cr = (
      /*    */
      4
    ), Ar = (
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
    function fx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Se = R.ReactCurrentDispatcher, Dp = R.ReactCurrentBatchConfig, s0, Bf;
    s0 = /* @__PURE__ */ new Set();
    var dc = G, Yt = null, fr = null, dr = null, pm = !1, Op = !1, kp = 0, dx = 0, px = 25, K = null, Ni = null, Wu = -1, c0 = !1;
    function Pt() {
      {
        var e = K;
        Ni === null ? Ni = [e] : Ni.push(e);
      }
    }
    function pe() {
      {
        var e = K;
        Ni !== null && (Wu++, Ni[Wu] !== e && vx(e));
      }
    }
    function $f(e) {
      e != null && !_t(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", K, typeof e);
    }
    function vx(e) {
      {
        var t = Ze(Yt);
        if (!s0.has(t) && (s0.add(t), Ni !== null)) {
          for (var a = "", i = 30, o = 0; o <= Wu; o++) {
            for (var s = Ni[o], f = o === Wu ? e : s, v = o + 1 + ". " + s; v.length < i; )
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
        if (!_e(e[a], t[a]))
          return !1;
      return !0;
    }
    function If(e, t, a, i, o, s) {
      dc = s, Yt = t, Ni = e !== null ? e._debugHookTypes : null, Wu = -1, c0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = G, e !== null && e.memoizedState !== null ? Se.current = YC : Ni !== null ? Se.current = IC : Se.current = $C;
      var f = a(i, o);
      if (Op) {
        var v = 0;
        do {
          if (Op = !1, kp = 0, v >= px)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, c0 = !1, fr = null, dr = null, t.updateQueue = null, Wu = -1, Se.current = WC, f = a(i, o);
        } while (Op);
      }
      Se.current = xm, t._debugHookTypes = Ni;
      var m = fr !== null && fr.next !== null;
      if (dc = G, Yt = null, fr = null, dr = null, K = null, Ni = null, Wu = -1, e !== null && (e.flags & or) !== (t.flags & or) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ae) !== Pe && E("Internal React error: Expected static flag was missing. Please notify the React team."), pm = !1, m)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Yf() {
      var e = kp !== 0;
      return kp = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ha) !== Pe ? t.flags &= ~(go | Fa | Gr | Le) : t.flags &= ~(Gr | Le), e.lanes = $s(e.lanes, a);
    }
    function bC() {
      if (Se.current = xm, pm) {
        for (var e = Yt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        pm = !1;
      }
      dc = G, Yt = null, fr = null, dr = null, Ni = null, Wu = -1, K = null, jC = !1, Op = !1, kp = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return dr === null ? Yt.memoizedState = dr = e : dr = dr.next = e, dr;
    }
    function Li() {
      var e;
      if (fr === null) {
        var t = Yt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = fr.next;
      var a;
      if (dr === null ? a = Yt.memoizedState : a = dr.next, a !== null)
        dr = a, a = dr.next, fr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        fr = e;
        var i = {
          memoizedState: fr.memoizedState,
          baseState: fr.baseState,
          baseQueue: fr.baseQueue,
          queue: fr.queue,
          next: null
        };
        dr === null ? Yt.memoizedState = dr = i : dr = dr.next = i;
      }
      return dr;
    }
    function xC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function d0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function p0(e, t, a) {
      var i = Ql(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: G,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = gx.bind(null, Yt, s);
      return [i.memoizedState, f];
    }
    function v0(e, t, a) {
      var i = Li(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = fr, f = s.baseQueue, v = o.pending;
      if (v !== null) {
        if (f !== null) {
          var m = f.next, C = v.next;
          f.next = C, v.next = m;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = v, o.pending = null;
      }
      if (f !== null) {
        var T = f.next, M = s.baseState, N = null, P = null, V = null, Q = T;
        do {
          var Ce = Q.lane;
          if (Do(dc, Ce)) {
            if (V !== null) {
              var Ue = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: kn,
                action: Q.action,
                hasEagerState: Q.hasEagerState,
                eagerState: Q.eagerState,
                next: null
              };
              V = V.next = Ue;
            }
            if (Q.hasEagerState)
              M = Q.eagerState;
            else {
              var Tt = Q.action;
              M = e(M, Tt);
            }
          } else {
            var Ve = {
              lane: Ce,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            };
            V === null ? (P = V = Ve, N = M) : V = V.next = Ve, Yt.lanes = rt(Yt.lanes, Ce), Gp(Ce);
          }
          Q = Q.next;
        } while (Q !== null && Q !== T);
        V === null ? N = M : V.next = P, _e(M, i.memoizedState) || Fp(), i.memoizedState = M, i.baseState = N, i.baseQueue = V, o.lastRenderedState = M;
      }
      var yt = o.interleaved;
      if (yt !== null) {
        var z = yt;
        do {
          var q = z.lane;
          Yt.lanes = rt(Yt.lanes, q), Gp(q), z = z.next;
        } while (z !== yt);
      } else
        f === null && (o.lanes = G);
      var F = o.dispatch;
      return [i.memoizedState, F];
    }
    function h0(e, t, a) {
      var i = Li(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, v = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var m = f.next, C = m;
        do {
          var T = C.action;
          v = e(v, T), C = C.next;
        } while (C !== m);
        _e(v, i.memoizedState) || Fp(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), o.lastRenderedState = v;
      }
      return [v, s];
    }
    function yN(e, t, a) {
    }
    function gN(e, t, a) {
    }
    function m0(e, t, a) {
      var i = Yt, o = Ql(), s, f = Mr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Bf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Bf = !0);
      } else {
        if (s = t(), !Bf) {
          var v = t();
          _e(s, v) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Bf = !0);
        }
        var m = Im();
        if (m === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Bs(m, dc) || _C(i, t, s);
      }
      o.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return o.queue = C, gm(OC.bind(null, i, C, e), [e]), i.flags |= Gr, Np(sr | Ar, DC.bind(null, i, C, s, t), void 0, null), s;
    }
    function vm(e, t, a) {
      var i = Yt, o = Li(), s = t();
      if (!Bf) {
        var f = t();
        _e(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Bf = !0);
      }
      var v = o.memoizedState, m = !_e(v, s);
      m && (o.memoizedState = s, Fp());
      var C = o.queue;
      if (Mp(OC.bind(null, i, C, e), [e]), C.getSnapshot !== t || m || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      dr !== null && dr.memoizedState.tag & sr) {
        i.flags |= Gr, Np(sr | Ar, DC.bind(null, i, C, s, t), void 0, null);
        var T = Im();
        if (T === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Bs(T, dc) || _C(i, t, s);
      }
      return s;
    }
    function _C(e, t, a) {
      e.flags |= yo;
      var i = {
        getSnapshot: t,
        value: a
      }, o = Yt.updateQueue;
      if (o === null)
        o = xC(), Yt.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function DC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, kC(t) && NC(e);
    }
    function OC(e, t, a) {
      var i = function() {
        kC(t) && NC(e);
      };
      return a(i);
    }
    function kC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !_e(a, i);
      } catch {
        return !0;
      }
    }
    function NC(e) {
      var t = Qa(e, $e);
      t !== null && mr(t, e, $e, tn);
    }
    function hm(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: G,
        dispatch: null,
        lastRenderedReducer: d0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Sx.bind(null, Yt, a);
      return [t.memoizedState, i];
    }
    function y0(e) {
      return v0(d0);
    }
    function g0(e) {
      return h0(d0);
    }
    function Np(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Yt.updateQueue;
      if (s === null)
        s = xC(), Yt.updateQueue = s, s.lastEffect = o.next = o;
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
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function mm(e) {
      var t = Li();
      return t.memoizedState;
    }
    function Lp(e, t, a, i) {
      var o = Ql(), s = i === void 0 ? null : i;
      Yt.flags |= e, o.memoizedState = Np(sr | t, a, void 0, s);
    }
    function ym(e, t, a, i) {
      var o = Li(), s = i === void 0 ? null : i, f = void 0;
      if (fr !== null) {
        var v = fr.memoizedState;
        if (f = v.destroy, s !== null) {
          var m = v.deps;
          if (f0(s, m)) {
            o.memoizedState = Np(t, a, f, s);
            return;
          }
        }
      }
      Yt.flags |= e, o.memoizedState = Np(sr | t, a, f, s);
    }
    function gm(e, t) {
      return (Yt.mode & Ha) !== Pe ? Lp(go | Gr | kl, Ar, e, t) : Lp(Gr | kl, Ar, e, t);
    }
    function Mp(e, t) {
      return ym(Gr, Ar, e, t);
    }
    function E0(e, t) {
      return Lp(Le, Wl, e, t);
    }
    function Sm(e, t) {
      return ym(Le, Wl, e, t);
    }
    function C0(e, t) {
      var a = Le;
      return a |= za, (Yt.mode & Ha) !== Pe && (a |= Fa), Lp(a, cr, e, t);
    }
    function Em(e, t) {
      return ym(Le, cr, e, t);
    }
    function LC(e, t) {
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
    function R0(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Le;
      return o |= za, (Yt.mode & Ha) !== Pe && (o |= Fa), Lp(o, cr, LC.bind(null, t, e), i);
    }
    function Cm(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return ym(Le, cr, LC.bind(null, t, e), i);
    }
    function hx(e, t) {
    }
    var Rm = hx;
    function T0(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Tm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (f0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function w0(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function wm(e, t) {
      var a = Li(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (f0(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function b0(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function MC(e) {
      var t = Li(), a = fr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function AC(e) {
      var t = Li();
      if (fr === null)
        return t.memoizedState = e, e;
      var a = fr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !Zv(dc);
      if (i) {
        if (!_e(a, t)) {
          var o = nh();
          Yt.lanes = rt(Yt.lanes, o), Gp(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Fp()), e.memoizedState = a, a;
    }
    function mx(e, t, a) {
      var i = Va();
      Tn(My(i, tl)), e(!0);
      var o = Dp.transition;
      Dp.transition = {};
      var s = Dp.transition;
      Dp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Tn(i), Dp.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && k("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function x0() {
      var e = hm(!1), t = e[0], a = e[1], i = mx.bind(null, a), o = Ql();
      return o.memoizedState = i, [t, i];
    }
    function zC() {
      var e = y0(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = g0(), t = e[0], a = Li(), i = a.memoizedState;
      return [t, i];
    }
    var jC = !1;
    function yx() {
      return jC;
    }
    function _0() {
      var e = Ql(), t = Im(), a = t.identifierPrefix, i;
      if (Mr()) {
        var o = Nb();
        i = ":" + a + "R" + o;
        var s = kp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = dx++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function bm() {
      var e = Li(), t = e.memoizedState;
      return t;
    }
    function gx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Xu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, o);
      else {
        var s = rC(e, t, o, i);
        if (s !== null) {
          var f = xa();
          mr(s, e, i, f), VC(s, t, i);
        }
      }
      BC(e, i);
    }
    function Sx(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Xu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === G && (s === null || s.lanes === G)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var v;
            v = Se.current, Se.current = cl;
            try {
              var m = t.lastRenderedState, C = f(m, a);
              if (o.hasEagerState = !0, o.eagerState = C, _e(C, m)) {
                Xb(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Se.current = v;
            }
          }
        }
        var T = rC(e, t, o, i);
        if (T !== null) {
          var M = xa();
          mr(T, e, i, M), VC(T, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === Yt || t !== null && t === Yt;
    }
    function PC(e, t) {
      Op = pm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Hd(a)) {
        var i = t.lanes;
        i = ef(i, e.pendingLanes);
        var o = rt(i, a);
        t.lanes = o, Pd(e, o);
      }
    }
    function BC(e, t, a) {
      jc(e, t);
    }
    var xm = {
      readContext: Zn,
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
    }, $C = null, IC = null, YC = null, WC = null, ql = null, cl = null, _m = null;
    {
      var D0 = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", Pt(), $f(t), T0(e, t);
        },
        useContext: function(e) {
          return K = "useContext", Pt(), Zn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", Pt(), $f(t), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", Pt(), $f(a), R0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", Pt(), $f(t), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", Pt(), $f(t), C0(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", Pt(), $f(t);
          var a = Se.current;
          Se.current = ql;
          try {
            return w0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", Pt();
          var i = Se.current;
          Se.current = ql;
          try {
            return p0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", Pt(), S0(e);
        },
        useState: function(e) {
          K = "useState", Pt();
          var t = Se.current;
          Se.current = ql;
          try {
            return hm(e);
          } finally {
            Se.current = t;
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
          return K = "useId", Pt(), _0();
        },
        unstable_isNewReconciler: we
      }, IC = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", pe(), T0(e, t);
        },
        useContext: function(e) {
          return K = "useContext", pe(), Zn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", pe(), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", pe(), R0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", pe(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", pe(), C0(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", pe();
          var a = Se.current;
          Se.current = ql;
          try {
            return w0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", pe();
          var i = Se.current;
          Se.current = ql;
          try {
            return p0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", pe(), S0(e);
        },
        useState: function(e) {
          K = "useState", pe();
          var t = Se.current;
          Se.current = ql;
          try {
            return hm(e);
          } finally {
            Se.current = t;
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
          return K = "useId", pe(), _0();
        },
        unstable_isNewReconciler: we
      }, YC = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", pe(), Tm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", pe(), Zn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", pe(), Cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", pe();
          var a = Se.current;
          Se.current = cl;
          try {
            return wm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", pe();
          var i = Se.current;
          Se.current = cl;
          try {
            return v0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", pe(), mm();
        },
        useState: function(e) {
          K = "useState", pe();
          var t = Se.current;
          Se.current = cl;
          try {
            return y0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", pe(), Rm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", pe(), MC(e);
        },
        useTransition: function() {
          return K = "useTransition", pe(), zC();
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
      }, WC = {
        readContext: function(e) {
          return Zn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", pe(), Tm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", pe(), Zn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", pe(), Cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", pe();
          var a = Se.current;
          Se.current = _m;
          try {
            return wm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", pe();
          var i = Se.current;
          Se.current = _m;
          try {
            return h0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", pe(), mm();
        },
        useState: function(e) {
          K = "useState", pe();
          var t = Se.current;
          Se.current = _m;
          try {
            return g0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", pe(), Rm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", pe(), AC(e);
        },
        useTransition: function() {
          return K = "useTransition", pe(), FC();
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
      }, ql = {
        readContext: function(e) {
          return D0(), Zn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", tt(), Pt(), T0(e, t);
        },
        useContext: function(e) {
          return K = "useContext", tt(), Pt(), Zn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", tt(), Pt(), gm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", tt(), Pt(), R0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", tt(), Pt(), E0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", tt(), Pt(), C0(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", tt(), Pt();
          var a = Se.current;
          Se.current = ql;
          try {
            return w0(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", tt(), Pt();
          var i = Se.current;
          Se.current = ql;
          try {
            return p0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", tt(), Pt(), S0(e);
        },
        useState: function(e) {
          K = "useState", tt(), Pt();
          var t = Se.current;
          Se.current = ql;
          try {
            return hm(e);
          } finally {
            Se.current = t;
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
          return K = "useId", tt(), Pt(), _0();
        },
        unstable_isNewReconciler: we
      }, cl = {
        readContext: function(e) {
          return D0(), Zn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", tt(), pe(), Tm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", tt(), pe(), Zn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", tt(), pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", tt(), pe(), Cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", tt(), pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", tt(), pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", tt(), pe();
          var a = Se.current;
          Se.current = cl;
          try {
            return wm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", tt(), pe();
          var i = Se.current;
          Se.current = cl;
          try {
            return v0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", tt(), pe(), mm();
        },
        useState: function(e) {
          K = "useState", tt(), pe();
          var t = Se.current;
          Se.current = cl;
          try {
            return y0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", tt(), pe(), Rm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", tt(), pe(), MC(e);
        },
        useTransition: function() {
          return K = "useTransition", tt(), pe(), zC();
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
      }, _m = {
        readContext: function(e) {
          return D0(), Zn(e);
        },
        useCallback: function(e, t) {
          return K = "useCallback", tt(), pe(), Tm(e, t);
        },
        useContext: function(e) {
          return K = "useContext", tt(), pe(), Zn(e);
        },
        useEffect: function(e, t) {
          return K = "useEffect", tt(), pe(), Mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return K = "useImperativeHandle", tt(), pe(), Cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return K = "useInsertionEffect", tt(), pe(), Sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return K = "useLayoutEffect", tt(), pe(), Em(e, t);
        },
        useMemo: function(e, t) {
          K = "useMemo", tt(), pe();
          var a = Se.current;
          Se.current = cl;
          try {
            return wm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          K = "useReducer", tt(), pe();
          var i = Se.current;
          Se.current = cl;
          try {
            return h0(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return K = "useRef", tt(), pe(), mm();
        },
        useState: function(e) {
          K = "useState", tt(), pe();
          var t = Se.current;
          Se.current = cl;
          try {
            return g0(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return K = "useDebugValue", tt(), pe(), Rm();
        },
        useDeferredValue: function(e) {
          return K = "useDeferredValue", tt(), pe(), AC(e);
        },
        useTransition: function() {
          return K = "useTransition", tt(), pe(), FC();
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
    var Qu = y.unstable_now, QC = 0, Dm = -1, Ap = -1, Om = -1, O0 = !1, km = !1;
    function qC() {
      return O0;
    }
    function Ex() {
      km = !0;
    }
    function Cx() {
      O0 = !1, km = !1;
    }
    function Rx() {
      O0 = km, km = !1;
    }
    function GC() {
      return QC;
    }
    function KC() {
      QC = Qu();
    }
    function k0(e) {
      Ap = Qu(), e.actualStartTime < 0 && (e.actualStartTime = Qu());
    }
    function XC(e) {
      Ap = -1;
    }
    function Nm(e, t) {
      if (Ap >= 0) {
        var a = Qu() - Ap;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Ap = -1;
      }
    }
    function Gl(e) {
      if (Dm >= 0) {
        var t = Qu() - Dm;
        Dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case kt:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function N0(e) {
      if (Om >= 0) {
        var t = Qu() - Om;
        Om = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case kt:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Kl() {
      Dm = Qu();
    }
    function L0() {
      Om = Qu();
    }
    function M0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function pc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ko(t),
        digest: null
      };
    }
    function A0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Tx(e, t) {
      return !0;
    }
    function U0(e, t) {
      try {
        var a = Tx(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === W)
            return;
          console.error(i);
        }
        var v = o ? Ze(o) : null, m = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === te)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var T = Ze(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + T + ".");
        }
        var M = m + `
` + f + `

` + ("" + C);
        console.error(M);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var wx = typeof WeakMap == "function" ? WeakMap : Map;
    function JC(e, t, a) {
      var i = Vo(tn, a);
      i.tag = Ug, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        mD(o), U0(e, t);
      }, i;
    }
    function z0(e, t, a) {
      var i = Vo(tn, a);
      i.tag = Ug;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          sR(e), U0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        sR(e), U0(e, t), typeof o != "function" && vD(this);
        var m = t.value, C = t.stack;
        this.componentDidCatch(m, {
          componentStack: C !== null ? C : ""
        }), typeof o != "function" && (ra(e.lanes, $e) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ze(e) || "Unknown"));
      }), i;
    }
    function ZC(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new wx(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = yD.bind(null, e, t, a);
        Ra && Kp(e, a), t.then(s, s);
      }
    }
    function bx(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function xx(e, t) {
      var a = e.tag;
      if ((e.mode & Ae) === Pe && (a === ae || a === Be || a === Je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function e1(e) {
      var t = e;
      do {
        if (t.tag === Ne && cx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function t1(e, t, a, i, o) {
      if ((e.mode & Ae) === Pe) {
        if (e === t)
          e.flags |= lr;
        else {
          if (e.flags |= et, a.flags |= Nc, a.flags &= ~(Hv | Ol), a.tag === W) {
            var s = a.alternate;
            if (s === null)
              a.tag = gn;
            else {
              var f = Vo(tn, $e);
              f.tag = tm, $u(a, f, $e);
            }
          }
          a.lanes = rt(a.lanes, $e);
        }
        return e;
      }
      return e.flags |= lr, e.lanes = o, e;
    }
    function _x(e, t, a, i, o) {
      if (a.flags |= Ol, Ra && Kp(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        xx(a), Mr() && a.mode & Ae && YE();
        var f = e1(t);
        if (f !== null) {
          f.flags &= ~kr, t1(f, t, a, e, o), f.mode & Ae && ZC(e, s, o), bx(f, e, s);
          return;
        } else {
          if (!jd(o)) {
            ZC(e, s, o), hS();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (Mr() && a.mode & Ae) {
        YE();
        var m = e1(t);
        if (m !== null) {
          (m.flags & lr) === He && (m.flags |= kr), t1(m, t, a, e, o), Dg(pc(i, a));
          return;
        }
      }
      i = pc(i, a), lD(i);
      var C = t;
      do {
        switch (C.tag) {
          case te: {
            var T = i;
            C.flags |= lr;
            var M = Eu(o);
            C.lanes = rt(C.lanes, M);
            var N = JC(C, T, M);
            jg(C, N);
            return;
          }
          case W:
            var P = i, V = C.type, Q = C.stateNode;
            if ((C.flags & et) === He && (typeof V.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && !eR(Q))) {
              C.flags |= lr;
              var Ce = Eu(o);
              C.lanes = rt(C.lanes, Ce);
              var Ve = z0(C, P, Ce);
              jg(C, Ve);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function Dx() {
      return null;
    }
    var Up = R.ReactCurrentOwner, fl = !1, F0, zp, j0, H0, P0, vc, V0, Lm;
    F0 = {}, zp = {}, j0 = {}, H0 = {}, P0 = {}, vc = !1, V0 = {}, Lm = {};
    function wa(e, t, a, i) {
      e === null ? t.child = SC(t, null, a, i) : t.child = jf(t, e.child, a, i);
    }
    function Ox(e, t, a, i) {
      t.child = jf(t, e.child, null, i), t.child = jf(t, null, a, i);
    }
    function n1(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, v = t.ref, m, C;
      Ff(t, o), du(t);
      {
        if (Up.current = t, ir(!0), m = If(e, t, f, i, v, o), C = Yf(), t.mode & Cn) {
          en(!0);
          try {
            m = If(e, t, f, i, v, o), C = Yf();
          } finally {
            en(!1);
          }
        }
        ir(!1);
      }
      return Eo(), e !== null && !fl ? (wC(e, t, o), Bo(e, t, o)) : (Mr() && C && Rg(t), t.flags |= oi, wa(e, t, m, o), t.child);
    }
    function r1(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (AD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Zf(s), t.tag = Je, t.type = f, I0(t, s), a1(e, t, f, i, o);
        }
        {
          var v = s.propTypes;
          v && il(
            v,
            i,
            // Resolved props
            "prop",
            xt(s)
          );
        }
        var m = xS(a.type, null, i, t, t.mode, o);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var C = a.type, T = C.propTypes;
        T && il(
          T,
          i,
          // Resolved props
          "prop",
          xt(C)
        );
      }
      var M = e.child, N = K0(e, o);
      if (!N) {
        var P = M.memoizedProps, V = a.compare;
        if (V = V !== null ? V : Qe, V(P, i) && e.ref === t.ref)
          return Bo(e, t, o);
      }
      t.flags |= oi;
      var Q = Sc(M, i);
      return Q.ref = t.ref, Q.return = t, t.child = Q, Q;
    }
    function a1(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === je) {
          var f = s, v = f._payload, m = f._init;
          try {
            s = m(v);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && il(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var T = e.memoizedProps;
        if (Qe(T, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = T, K0(e, o))
            (e.flags & Nc) !== He && (fl = !0);
          else
            return t.lanes = e.lanes, Bo(e, t, o);
      }
      return B0(e, t, a, i, o);
    }
    function i1(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || J)
        if ((t.mode & Ae) === Pe) {
          var f = {
            baseLanes: G,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Ym(t, a);
        } else if (ra(a, Ta)) {
          var M = {
            baseLanes: G,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = M;
          var N = s !== null ? s.baseLanes : a;
          Ym(t, N);
        } else {
          var v = null, m;
          if (s !== null) {
            var C = s.baseLanes;
            m = rt(C, a);
          } else
            m = a;
          t.lanes = t.childLanes = Ta;
          var T = {
            baseLanes: m,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = T, t.updateQueue = null, Ym(t, m), null;
        }
      else {
        var P;
        s !== null ? (P = rt(s.baseLanes, a), t.memoizedState = null) : P = a, Ym(t, P);
      }
      return wa(e, t, o, a), t.child;
    }
    function kx(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function Nx(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function Lx(e, t, a) {
      {
        t.flags |= Le;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return wa(e, t, s, a), t.child;
    }
    function l1(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Sa, t.flags |= Ei);
    }
    function B0(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var v = Nf(t, a, !0);
        f = Lf(t, v);
      }
      var m, C;
      Ff(t, o), du(t);
      {
        if (Up.current = t, ir(!0), m = If(e, t, a, i, f, o), C = Yf(), t.mode & Cn) {
          en(!0);
          try {
            m = If(e, t, a, i, f, o), C = Yf();
          } finally {
            en(!1);
          }
        }
        ir(!1);
      }
      return Eo(), e !== null && !fl ? (wC(e, t, o), Bo(e, t, o)) : (Mr() && C && Rg(t), t.flags |= oi, wa(e, t, m, o), t.child);
    }
    function o1(e, t, a, i, o) {
      {
        switch (GD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, v = new f(t.memoizedProps, s.context), m = v.state;
            s.updater.enqueueSetState(s, m, null);
            break;
          }
          case !0: {
            t.flags |= et, t.flags |= lr;
            var C = new Error("Simulated error coming from DevTools"), T = Eu(o);
            t.lanes = rt(t.lanes, T);
            var M = z0(t, pc(C, t), T);
            jg(t, M);
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
            xt(a)
          );
        }
      }
      var P;
      Yl(a) ? (P = !0, Ih(t)) : P = !1, Ff(t, o);
      var V = t.stateNode, Q;
      V === null ? (Am(e, t), vC(t, a, i), Kg(t, a, i, o), Q = !0) : e === null ? Q = ax(t, a, i, o) : Q = ix(e, t, a, i, o);
      var Ce = $0(e, t, a, Q, P, o);
      {
        var Ve = t.stateNode;
        Q && Ve.props !== i && (vc || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ze(t) || "a component"), vc = !0);
      }
      return Ce;
    }
    function $0(e, t, a, i, o, s) {
      l1(e, t);
      var f = (t.flags & et) !== He;
      if (!i && !f)
        return o && VE(t, a, !1), Bo(e, t, s);
      var v = t.stateNode;
      Up.current = t;
      var m;
      if (f && typeof a.getDerivedStateFromError != "function")
        m = null, XC();
      else {
        du(t);
        {
          if (ir(!0), m = v.render(), t.mode & Cn) {
            en(!0);
            try {
              v.render();
            } finally {
              en(!1);
            }
          }
          ir(!1);
        }
        Eo();
      }
      return t.flags |= oi, e !== null && f ? Ox(e, t, m, s) : wa(e, t, m, s), t.memoizedState = v.state, o && VE(t, a, !0), t.child;
    }
    function u1(e) {
      var t = e.stateNode;
      t.pendingContext ? HE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && HE(e, t.context, !1), n0(e, t.containerInfo);
    }
    function Mx(e, t, a) {
      if (u1(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      lC(e, t), im(t, i, null, a);
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
        }, C = t.updateQueue;
        if (C.baseState = m, t.memoizedState = m, t.flags & kr) {
          var T = pc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return s1(e, t, v, a, T);
        } else if (v !== s) {
          var M = pc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return s1(e, t, v, a, M);
        } else {
          Fb(t);
          var N = SC(t, null, v, a);
          t.child = N;
          for (var P = N; P; )
            P.flags = P.flags & ~qt | Si, P = P.sibling;
        }
      } else {
        if (Uf(), v === s)
          return Bo(e, t, a);
        wa(e, t, v, a);
      }
      return t.child;
    }
    function s1(e, t, a, i, o) {
      return Uf(), Dg(o), t.flags |= kr, wa(e, t, a, i), t.child;
    }
    function Ax(e, t, a) {
      CC(t), e === null && _g(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, v = ug(i, o);
      return v ? f = null : s !== null && ug(i, s) && (t.flags |= Ua), l1(e, t), wa(e, t, f, a), t.child;
    }
    function Ux(e, t) {
      return e === null && _g(t), null;
    }
    function zx(e, t, a, i) {
      Am(e, t);
      var o = t.pendingProps, s = a, f = s._payload, v = s._init, m = v(f);
      t.type = m;
      var C = t.tag = UD(m), T = ul(m, o), M;
      switch (C) {
        case ae:
          return I0(t, m), t.type = m = Zf(m), M = B0(null, t, m, T, i), M;
        case W:
          return t.type = m = ES(m), M = o1(null, t, m, T, i), M;
        case Be:
          return t.type = m = CS(m), M = n1(null, t, m, T, i), M;
        case pt: {
          if (t.type !== t.elementType) {
            var N = m.propTypes;
            N && il(
              N,
              T,
              // Resolved for outer only
              "prop",
              xt(m)
            );
          }
          return M = r1(
            null,
            t,
            m,
            ul(m.type, T),
            // The inner type can have defaults too
            i
          ), M;
        }
      }
      var P = "";
      throw m !== null && typeof m == "object" && m.$$typeof === je && (P = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + m + ". " + ("Lazy element type must resolve to a class or function." + P));
    }
    function Fx(e, t, a, i, o) {
      Am(e, t), t.tag = W;
      var s;
      return Yl(a) ? (s = !0, Ih(t)) : s = !1, Ff(t, o), vC(t, a, i), Kg(t, a, i, o), $0(null, t, a, !0, s, o);
    }
    function jx(e, t, a, i) {
      Am(e, t);
      var o = t.pendingProps, s;
      {
        var f = Nf(t, a, !1);
        s = Lf(t, f);
      }
      Ff(t, i);
      var v, m;
      du(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = xt(a) || "Unknown";
          F0[C] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), F0[C] = !0);
        }
        t.mode & Cn && ol.recordLegacyContextWarning(t, null), ir(!0), Up.current = t, v = If(null, t, a, o, s, i), m = Yf(), ir(!1);
      }
      if (Eo(), t.flags |= oi, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var T = xt(a) || "Unknown";
        zp[T] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", T, T, T), zp[T] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var M = xt(a) || "Unknown";
          zp[M] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), zp[M] = !0);
        }
        t.tag = W, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Yl(a) ? (N = !0, Ih(t)) : N = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, Fg(t), pC(t, v), Kg(t, a, o, i), $0(null, t, a, !0, N, i);
      } else {
        if (t.tag = ae, t.mode & Cn) {
          en(!0);
          try {
            v = If(null, t, a, o, s, i), m = Yf();
          } finally {
            en(!1);
          }
        }
        return Mr() && m && Rg(t), wa(null, t, v, i), I0(t, a), t.child;
      }
    }
    function I0(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = La();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), P0[o] || (P0[o] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = xt(t) || "Unknown";
          H0[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), H0[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          j0[v] || (E("%s: Function components do not support contextType.", v), j0[v] = !0);
        }
      }
    }
    var Y0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: kn
    };
    function W0(e) {
      return {
        baseLanes: e,
        cachePool: Dx(),
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
      return i0(e, _p);
    }
    function Vx(e, t) {
      return $s(e.childLanes, t);
    }
    function c1(e, t, a) {
      var i = t.pendingProps;
      KD(t) && (t.flags |= et);
      var o = sl.current, s = !1, f = (t.flags & et) !== He;
      if (f || Px(o, e) ? (s = !0, t.flags &= ~et) : (e === null || e.memoizedState !== null) && (o = sx(o, TC)), o = Pf(o), Yu(t, o), e === null) {
        _g(t);
        var v = t.memoizedState;
        if (v !== null) {
          var m = v.dehydrated;
          if (m !== null)
            return Wx(t, m);
        }
        var C = i.children, T = i.fallback;
        if (s) {
          var M = Bx(t, C, T, a), N = t.child;
          return N.memoizedState = W0(a), t.memoizedState = Y0, M;
        } else
          return Q0(t, C);
      } else {
        var P = e.memoizedState;
        if (P !== null) {
          var V = P.dehydrated;
          if (V !== null)
            return Qx(e, t, f, i, V, P, a);
        }
        if (s) {
          var Q = i.fallback, Ce = i.children, Ve = Ix(e, t, Ce, Q, a), Ue = t.child, Tt = e.child.memoizedState;
          return Ue.memoizedState = Tt === null ? W0(a) : Hx(Tt, a), Ue.childLanes = Vx(e, a), t.memoizedState = Y0, Ve;
        } else {
          var yt = i.children, z = $x(e, t, yt, a);
          return t.memoizedState = null, z;
        }
      }
    }
    function Q0(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = q0(o, i);
      return s.return = e, e.child = s, s;
    }
    function Bx(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, v, m;
      return (o & Ae) === Pe && s !== null ? (v = s, v.childLanes = G, v.pendingProps = f, e.mode & Ot && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), m = Zu(a, o, i, null)) : (v = q0(f, o), m = Zu(a, o, i, null)), v.return = e, m.return = e, v.sibling = m, e.child = v, m;
    }
    function q0(e, t, a) {
      return fR(e, t, G, null);
    }
    function f1(e, t) {
      return Sc(e, t);
    }
    function $x(e, t, a, i) {
      var o = e.child, s = o.sibling, f = f1(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ae) === Pe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [s], t.flags |= Lt) : v.push(s);
      }
      return t.child = f, f;
    }
    function Ix(e, t, a, i, o) {
      var s = t.mode, f = e.child, v = f.sibling, m = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ae) === Pe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var T = t.child;
        C = T, C.childLanes = G, C.pendingProps = m, t.mode & Ot && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = f1(f, m), C.subtreeFlags = f.subtreeFlags & or;
      var M;
      return v !== null ? M = Sc(v, i) : (M = Zu(i, s, o, null), M.flags |= qt), M.return = t, C.return = t, C.sibling = M, t.child = C, M;
    }
    function Mm(e, t, a, i) {
      i !== null && Dg(i), jf(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = Q0(t, s);
      return f.flags |= qt, t.memoizedState = null, f;
    }
    function Yx(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, v = q0(f, s), m = Zu(i, s, o, null);
      return m.flags |= qt, v.return = t, m.return = t, v.sibling = m, t.child = v, (t.mode & Ae) !== Pe && jf(t, e.child, null, o), m;
    }
    function Wx(e, t, a) {
      return (e.mode & Ae) === Pe ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = $e) : dg(t) ? e.lanes = Rn : e.lanes = Ta, null;
    }
    function Qx(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & kr) {
          t.flags &= ~kr;
          var z = A0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Mm(e, t, f, z);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= et, null;
          var q = i.children, F = i.fallback, oe = Yx(e, t, q, F, f), Re = t.child;
          return Re.memoizedState = W0(f), t.memoizedState = Y0, oe;
        }
      else {
        if (Ub(), (t.mode & Ae) === Pe)
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
          var v, m, C;
          {
            var T = Jw(o);
            v = T.digest, m = T.message, C = T.stack;
          }
          var M;
          m ? M = new Error(m) : M = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = A0(M, v, C);
          return Mm(e, t, f, N);
        }
        var P = ra(f, e.childLanes);
        if (fl || P) {
          var V = Im();
          if (V !== null) {
            var Q = ih(V, f);
            if (Q !== kn && Q !== s.retryLane) {
              s.retryLane = Q;
              var Ce = tn;
              Qa(e, Q), mr(V, e, Q, Ce);
            }
          }
          hS();
          var Ve = A0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Mm(e, t, f, Ve);
        } else if (ME(o)) {
          t.flags |= et, t.child = e.child;
          var Ue = gD.bind(null, e);
          return Zw(o, Ue), null;
        } else {
          jb(t, o, s.treeContext);
          var Tt = i.children, yt = Q0(t, Tt);
          return yt.flags |= Si, yt;
        }
      }
    }
    function d1(e, t, a) {
      e.lanes = rt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = rt(i.lanes, t)), Mg(e.return, t, a);
    }
    function qx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ne) {
          var o = i.memoizedState;
          o !== null && d1(i, a, e);
        } else if (i.tag === Et)
          d1(i, a, e);
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
    function Gx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && dm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Kx(e) {
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
    function Xx(e, t) {
      e !== void 0 && !Lm[e] && (e !== "collapsed" && e !== "hidden" ? (Lm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Lm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function p1(e, t) {
      {
        var a = _t(e), i = !a && typeof pi(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function Jx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (_t(e)) {
          for (var a = 0; a < e.length; a++)
            if (!p1(e[a], a))
              return;
        } else {
          var i = pi(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!p1(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function G0(e, t, a, i, o) {
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
    function v1(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      Kx(o), Xx(s, o), Jx(f, o), wa(e, t, f, a);
      var v = sl.current, m = i0(v, _p);
      if (m)
        v = l0(v, _p), t.flags |= et;
      else {
        var C = e !== null && (e.flags & et) !== He;
        C && qx(t, t.child, a), v = Pf(v);
      }
      if (Yu(t, v), (t.mode & Ae) === Pe)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var T = Gx(t.child), M;
            T === null ? (M = t.child, t.child = null) : (M = T.sibling, T.sibling = null), G0(
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
            var N = null, P = t.child;
            for (t.child = null; P !== null; ) {
              var V = P.alternate;
              if (V !== null && dm(V) === null) {
                t.child = P;
                break;
              }
              var Q = P.sibling;
              P.sibling = N, N = P, P = Q;
            }
            G0(
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
            G0(
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
    function Zx(e, t, a) {
      n0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = jf(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var h1 = !1;
    function e_(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, v = s.value;
      {
        "value" in s || h1 || (h1 = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var m = t.type.propTypes;
        m && il(m, s, "prop", "Context.Provider");
      }
      if (nC(t, o, v), f !== null) {
        var C = f.value;
        if (_e(C, v)) {
          if (f.children === s.children && !Bh())
            return Bo(e, t, a);
        } else
          qb(t, o, a);
      }
      var T = s.children;
      return wa(e, t, T, a), t.child;
    }
    var m1 = !1;
    function t_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (m1 || (m1 = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ff(t, a);
      var f = Zn(i);
      du(t);
      var v;
      return Up.current = t, ir(!0), v = s(f), ir(!1), Eo(), t.flags |= oi, wa(e, t, v, a), t.child;
    }
    function Fp() {
      fl = !0;
    }
    function Am(e, t) {
      (t.mode & Ae) === Pe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= qt);
    }
    function Bo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), Gp(t.lanes), ra(a, t.childLanes) ? (lx(e, t), t.child) : null;
    }
    function n_(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Lt) : s.push(e), a.flags |= qt, a;
      }
    }
    function K0(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function r_(e, t, a) {
      switch (t.tag) {
        case te:
          u1(t), t.stateNode, Uf();
          break;
        case Y:
          CC(t);
          break;
        case W: {
          var i = t.type;
          Yl(i) && Ih(t);
          break;
        }
        case ye:
          n0(t, t.stateNode.containerInfo);
          break;
        case Ge: {
          var o = t.memoizedProps.value, s = t.type._context;
          nC(t, s, o);
          break;
        }
        case kt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= Le);
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
              return Yu(t, Pf(sl.current)), t.flags |= et, null;
            var C = t.child, T = C.childLanes;
            if (ra(a, T))
              return c1(e, t, a);
            Yu(t, Pf(sl.current));
            var M = Bo(e, t, a);
            return M !== null ? M.sibling : null;
          } else
            Yu(t, Pf(sl.current));
          break;
        }
        case Et: {
          var N = (e.flags & et) !== He, P = ra(a, t.childLanes);
          if (N) {
            if (P)
              return v1(e, t, a);
            t.flags |= et;
          }
          var V = t.memoizedState;
          if (V !== null && (V.rendering = null, V.tail = null, V.lastEffect = null), Yu(t, sl.current), P)
            break;
          return null;
        }
        case Ke:
        case at:
          return t.lanes = G, i1(e, t, a);
      }
      return Bo(e, t, a);
    }
    function y1(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return n_(e, t, xS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = K0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & et) === He)
            return fl = !1, r_(e, t, a);
          (e.flags & Nc) !== He ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, Mr() && Ob(t)) {
        var f = t.index, v = kb();
        IE(t, v, f);
      }
      switch (t.lanes = G, t.tag) {
        case $:
          return jx(e, t, t.type, a);
        case xn: {
          var m = t.elementType;
          return zx(e, t, m, a);
        }
        case ae: {
          var C = t.type, T = t.pendingProps, M = t.elementType === C ? T : ul(C, T);
          return B0(e, t, C, M, a);
        }
        case W: {
          var N = t.type, P = t.pendingProps, V = t.elementType === N ? P : ul(N, P);
          return o1(e, t, N, V, a);
        }
        case te:
          return Mx(e, t, a);
        case Y:
          return Ax(e, t, a);
        case Z:
          return Ux(e, t);
        case Ne:
          return c1(e, t, a);
        case ye:
          return Zx(e, t, a);
        case Be: {
          var Q = t.type, Ce = t.pendingProps, Ve = t.elementType === Q ? Ce : ul(Q, Ce);
          return n1(e, t, Q, Ve, a);
        }
        case Fe:
          return kx(e, t, a);
        case St:
          return Nx(e, t, a);
        case kt:
          return Lx(e, t, a);
        case Ge:
          return e_(e, t, a);
        case Dt:
          return t_(e, t, a);
        case pt: {
          var Ue = t.type, Tt = t.pendingProps, yt = ul(Ue, Tt);
          if (t.type !== t.elementType) {
            var z = Ue.propTypes;
            z && il(
              z,
              yt,
              // Resolved for outer only
              "prop",
              xt(Ue)
            );
          }
          return yt = ul(Ue.type, yt), r1(e, t, Ue, yt, a);
        }
        case Je:
          return a1(e, t, t.type, t.pendingProps, a);
        case gn: {
          var q = t.type, F = t.pendingProps, oe = t.elementType === q ? F : ul(q, F);
          return Fx(e, t, q, oe, a);
        }
        case Et:
          return v1(e, t, a);
        case nn:
          break;
        case Ke:
          return i1(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Wf(e) {
      e.flags |= Le;
    }
    function g1(e) {
      e.flags |= Sa, e.flags |= Ei;
    }
    var S1, X0, E1, C1;
    S1 = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === Y || o.tag === Z)
          xw(e, o.stateNode);
        else if (o.tag !== ye) {
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
    }, X0 = function(e, t) {
    }, E1 = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, v = r0(), m = Dw(f, a, s, i, o, v);
        t.updateQueue = m, m && Wf(t);
      }
    }, C1 = function(e, t, a, i) {
      a !== i && Wf(t);
    };
    function jp(e, t) {
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
    function Ur(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = G, i = He;
      if (t) {
        if ((e.mode & Ot) !== Pe) {
          for (var m = e.selfBaseDuration, C = e.child; C !== null; )
            a = rt(a, rt(C.lanes, C.childLanes)), i |= C.subtreeFlags & or, i |= C.flags & or, m += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = m;
        } else
          for (var T = e.child; T !== null; )
            a = rt(a, rt(T.lanes, T.childLanes)), i |= T.subtreeFlags & or, i |= T.flags & or, T.return = e, T = T.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ot) !== Pe) {
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
    function a_(e, t, a) {
      if ($b() && (t.mode & Ae) !== Pe && (t.flags & et) === He)
        return XE(t), Uf(), t.flags |= kr | Ol | lr, !1;
      var i = Gh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Vb(t), Ur(t), (t.mode & Ot) !== Pe) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Uf(), (t.flags & et) === He && (t.memoizedState = null), t.flags |= Le, Ur(t), (t.mode & Ot) !== Pe) {
            var f = a !== null;
            if (f) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return JE(), !0;
    }
    function R1(e, t, a) {
      var i = t.pendingProps;
      switch (Tg(t), t.tag) {
        case $:
        case xn:
        case Je:
        case ae:
        case Be:
        case Fe:
        case St:
        case kt:
        case Dt:
        case pt:
          return Ur(t), null;
        case W: {
          var o = t.type;
          return Yl(o) && $h(t), Ur(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (Hf(t), Sg(t), u0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Gh(t);
            if (f)
              Wf(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & kr) !== He) && (t.flags |= jn, JE());
            }
          }
          return X0(e, t), Ur(t), null;
        }
        case Y: {
          a0(t);
          var m = EC(), C = t.type;
          if (e !== null && t.stateNode != null)
            E1(e, t, C, i, m), e.ref !== t.ref && g1(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Ur(t), null;
            }
            var T = r0(), M = Gh(t);
            if (M)
              Hb(t, m, T) && Wf(t);
            else {
              var N = bw(C, i, m, T, t);
              S1(N, t, !1, !1), t.stateNode = N, _w(N, C, i, m) && Wf(t);
            }
            t.ref !== null && g1(t);
          }
          return Ur(t), null;
        }
        case Z: {
          var P = i;
          if (e && t.stateNode != null) {
            var V = e.memoizedProps;
            C1(e, t, V, P);
          } else {
            if (typeof P != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Q = EC(), Ce = r0(), Ve = Gh(t);
            Ve ? Pb(t) && Wf(t) : t.stateNode = Ow(P, Q, Ce, t);
          }
          return Ur(t), null;
        }
        case Ne: {
          Vf(t);
          var Ue = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = a_(e, t, Ue);
            if (!Tt)
              return t.flags & lr ? t : null;
          }
          if ((t.flags & et) !== He)
            return t.lanes = a, (t.mode & Ot) !== Pe && M0(t), t;
          var yt = Ue !== null, z = e !== null && e.memoizedState !== null;
          if (yt !== z && yt) {
            var q = t.child;
            if (q.flags |= Dl, (t.mode & Ae) !== Pe) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !be);
              F || i0(sl.current, TC) ? iD() : hS();
            }
          }
          var oe = t.updateQueue;
          if (oe !== null && (t.flags |= Le), Ur(t), (t.mode & Ot) !== Pe && yt) {
            var Re = t.child;
            Re !== null && (t.treeBaseDuration -= Re.treeBaseDuration);
          }
          return null;
        }
        case ye:
          return Hf(t), X0(e, t), e === null && Rb(t.stateNode.containerInfo), Ur(t), null;
        case Ge:
          var me = t.type._context;
          return Lg(me, t), Ur(t), null;
        case gn: {
          var Xe = t.type;
          return Yl(Xe) && $h(t), Ur(t), null;
        }
        case Et: {
          Vf(t);
          var nt = t.memoizedState;
          if (nt === null)
            return Ur(t), null;
          var Wt = (t.flags & et) !== He, At = nt.rendering;
          if (At === null)
            if (Wt)
              jp(nt, !1);
            else {
              var Qn = oD() && (e === null || (e.flags & et) === He);
              if (!Qn)
                for (var Ut = t.child; Ut !== null; ) {
                  var Pn = dm(Ut);
                  if (Pn !== null) {
                    Wt = !0, t.flags |= et, jp(nt, !1);
                    var ua = Pn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Le), t.subtreeFlags = He, ox(t, a), Yu(t, l0(sl.current, _p)), t.child;
                  }
                  Ut = Ut.sibling;
                }
              nt.tail !== null && Hn() > $1() && (t.flags |= et, Wt = !0, jp(nt, !1), t.lanes = zd);
            }
          else {
            if (!Wt) {
              var Pr = dm(At);
              if (Pr !== null) {
                t.flags |= et, Wt = !0;
                var fi = Pr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= Le), jp(nt, !0), nt.tail === null && nt.tailMode === "hidden" && !At.alternate && !Mr())
                  return Ur(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Hn() * 2 - nt.renderingStartTime > $1() && a !== Ta && (t.flags |= et, Wt = !0, jp(nt, !1), t.lanes = zd);
            }
            if (nt.isBackwards)
              At.sibling = t.child, t.child = At;
            else {
              var _a = nt.last;
              _a !== null ? _a.sibling = At : t.child = At, nt.last = At;
            }
          }
          if (nt.tail !== null) {
            var Da = nt.tail;
            nt.rendering = Da, nt.tail = Da.sibling, nt.renderingStartTime = Hn(), Da.sibling = null;
            var sa = sl.current;
            return Wt ? sa = l0(sa, _p) : sa = Pf(sa), Yu(t, sa), Da;
          }
          return Ur(t), null;
        }
        case nn:
          break;
        case Ke:
        case at: {
          vS(t);
          var Qo = t.memoizedState, ed = Qo !== null;
          if (e !== null) {
            var ev = e.memoizedState, Zl = ev !== null;
            Zl !== ed && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !J && (t.flags |= Dl);
          }
          return !ed || (t.mode & Ae) === Pe ? Ur(t) : ra(Jl, Ta) && (Ur(t), t.subtreeFlags & (qt | Le) && (t.flags |= Dl)), null;
        }
        case bt:
          return null;
        case it:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function i_(e, t, a) {
      switch (Tg(t), t.tag) {
        case W: {
          var i = t.type;
          Yl(i) && $h(t);
          var o = t.flags;
          return o & lr ? (t.flags = o & ~lr | et, (t.mode & Ot) !== Pe && M0(t), t) : null;
        }
        case te: {
          t.stateNode, Hf(t), Sg(t), u0();
          var s = t.flags;
          return (s & lr) !== He && (s & et) === He ? (t.flags = s & ~lr | et, t) : null;
        }
        case Y:
          return a0(t), null;
        case Ne: {
          Vf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Uf();
          }
          var v = t.flags;
          return v & lr ? (t.flags = v & ~lr | et, (t.mode & Ot) !== Pe && M0(t), t) : null;
        }
        case Et:
          return Vf(t), null;
        case ye:
          return Hf(t), null;
        case Ge:
          var m = t.type._context;
          return Lg(m, t), null;
        case Ke:
        case at:
          return vS(t), null;
        case bt:
          return null;
        default:
          return null;
      }
    }
    function T1(e, t, a) {
      switch (Tg(t), t.tag) {
        case W: {
          var i = t.type.childContextTypes;
          i != null && $h(t);
          break;
        }
        case te: {
          t.stateNode, Hf(t), Sg(t), u0();
          break;
        }
        case Y: {
          a0(t);
          break;
        }
        case ye:
          Hf(t);
          break;
        case Ne:
          Vf(t);
          break;
        case Et:
          Vf(t);
          break;
        case Ge:
          var o = t.type._context;
          Lg(o, t);
          break;
        case Ke:
        case at:
          vS(t);
          break;
      }
    }
    var w1 = null;
    w1 = /* @__PURE__ */ new Set();
    var Um = !1, zr = !1, l_ = typeof WeakSet == "function" ? WeakSet : Set, De = null, Qf = null, qf = null;
    function o_(e) {
      li(null, function() {
        throw e;
      }), Xi();
    }
    var u_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ot)
        try {
          Kl(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function b1(e, t) {
      try {
        qu(cr, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function J0(e, t, a) {
      try {
        u_(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function s_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function x1(e, t) {
      try {
        D1(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function Gf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ht && ft && e.mode & Ot)
              try {
                Kl(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (o) {
            sn(e, t, o);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ze(e));
        } else
          a.current = null;
    }
    function zm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var _1 = !1;
    function c_(e, t) {
      Tw(e.containerInfo), De = t, f_();
      var a = _1;
      return _1 = !1, a;
    }
    function f_() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & Kr) !== He && t !== null ? (t.return = e, De = t) : d_();
      }
    }
    function d_() {
      for (; De !== null; ) {
        var e = De;
        vn(e);
        try {
          p_(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        an();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function p_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & jn) !== He) {
        switch (vn(e), e.tag) {
          case ae:
          case Be:
          case Je:
            break;
          case W: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !vc && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), o);
              {
                var v = w1;
                f === void 0 && !v.has(e.type) && (v.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ze(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var m = e.stateNode;
              qw(m.containerInfo);
            }
            break;
          }
          case Y:
          case Z:
          case ye:
          case gn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        an();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var v = f.destroy;
            f.destroy = void 0, v !== void 0 && ((e & Ar) !== qa ? Yv(t) : (e & cr) !== qa && pu(t), (e & Wl) !== qa && Xp(!0), zm(t, a, v), (e & Wl) !== qa && Xp(!1), (e & Ar) !== qa ? Wv() : (e & cr) !== qa && Ls());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function qu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Ar) !== qa ? Ld(t) : (e & cr) !== qa && Qv(t);
            var f = s.create;
            (e & Wl) !== qa && Xp(!0), s.destroy = f(), (e & Wl) !== qa && Xp(!1), (e & Ar) !== qa ? Fc() : (e & cr) !== qa && Md();
            {
              var v = s.destroy;
              if (v !== void 0 && typeof v != "function") {
                var m = void 0;
                (s.tag & cr) !== He ? m = "useLayoutEffect" : (s.tag & Wl) !== He ? m = "useInsertionEffect" : m = "useEffect";
                var C = void 0;
                v === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? C = `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + v, E("%s must not return anything besides a function, which is used for clean-up.%s", m, C);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function v_(e, t) {
      if ((t.flags & Le) !== He)
        switch (t.tag) {
          case kt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = GC(), v = t.alternate === null ? "mount" : "update";
            qC() && (v = "nested-update"), typeof s == "function" && s(o, v, a, f);
            var m = t.return;
            e:
              for (; m !== null; ) {
                switch (m.tag) {
                  case te:
                    var C = m.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                  case kt:
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
    function h_(e, t, a, i) {
      if ((a.flags & ui) !== He)
        switch (a.tag) {
          case ae:
          case Be:
          case Je: {
            if (!zr)
              if (a.mode & Ot)
                try {
                  Kl(), qu(cr | sr, a);
                } finally {
                  Gl(a);
                }
              else
                qu(cr | sr, a);
            break;
          }
          case W: {
            var o = a.stateNode;
            if (a.flags & Le && !zr)
              if (t === null)
                if (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), a.mode & Ot)
                  try {
                    Kl(), o.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), a.mode & Ot)
                  try {
                    Kl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var v = a.updateQueue;
            v !== null && (a.type === a.elementType && !vc && (o.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ze(a) || "instance"), o.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ze(a) || "instance")), uC(a, v, o));
            break;
          }
          case te: {
            var m = a.updateQueue;
            if (m !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Y:
                    C = a.child.stateNode;
                    break;
                  case W:
                    C = a.child.stateNode;
                    break;
                }
              uC(a, m, C);
            }
            break;
          }
          case Y: {
            var T = a.stateNode;
            if (t === null && a.flags & Le) {
              var M = a.type, N = a.memoizedProps;
              Aw(T, M, N);
            }
            break;
          }
          case Z:
            break;
          case ye:
            break;
          case kt: {
            {
              var P = a.memoizedProps, V = P.onCommit, Q = P.onRender, Ce = a.stateNode.effectDuration, Ve = GC(), Ue = t === null ? "mount" : "update";
              qC() && (Ue = "nested-update"), typeof Q == "function" && Q(a.memoizedProps.id, Ue, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ve);
              {
                typeof V == "function" && V(a.memoizedProps.id, Ue, Ce, Ve), dD(a);
                var Tt = a.return;
                e:
                  for (; Tt !== null; ) {
                    switch (Tt.tag) {
                      case te:
                        var yt = Tt.stateNode;
                        yt.effectDuration += Ce;
                        break e;
                      case kt:
                        var z = Tt.stateNode;
                        z.effectDuration += Ce;
                        break e;
                    }
                    Tt = Tt.return;
                  }
              }
            }
            break;
          }
          case Ne: {
            T_(e, a);
            break;
          }
          case Et:
          case gn:
          case nn:
          case Ke:
          case at:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      zr || a.flags & Sa && D1(a);
    }
    function m_(e) {
      switch (e.tag) {
        case ae:
        case Be:
        case Je: {
          if (e.mode & Ot)
            try {
              Kl(), b1(e, e.return);
            } finally {
              Gl(e);
            }
          else
            b1(e, e.return);
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && s_(e, e.return, t), x1(e, e.return);
          break;
        }
        case Y: {
          x1(e, e.return);
          break;
        }
      }
    }
    function y_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Y) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Iw(o) : Ww(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === Z) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Yw(s) : Qw(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === Ke || i.tag === at) && i.memoizedState !== null && i !== e)) {
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
    function D1(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Y:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & Ot)
            try {
              Kl(), o = t(i);
            } finally {
              Gl(e);
            }
          else
            o = t(i);
          typeof o == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ze(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ze(e)), t.current = i;
      }
    }
    function g_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function O1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, O1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Y) {
          var a = e.stateNode;
          a !== null && bb(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function S_(e) {
      for (var t = e.return; t !== null; ) {
        if (k1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function k1(e) {
      return e.tag === Y || e.tag === te || e.tag === ye;
    }
    function N1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || k1(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== Y && t.tag !== Z && t.tag !== Gt; ) {
            if (t.flags & qt || t.child === null || t.tag === ye)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & qt))
            return t.stateNode;
        }
    }
    function E_(e) {
      var t = S_(e);
      switch (t.tag) {
        case Y: {
          var a = t.stateNode;
          t.flags & Ua && (LE(a), t.flags &= ~Ua);
          var i = N1(e);
          eS(e, i, a);
          break;
        }
        case te:
        case ye: {
          var o = t.stateNode.containerInfo, s = N1(e);
          Z0(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Z0(e, t, a) {
      var i = e.tag, o = i === Y || i === Z;
      if (o) {
        var s = e.stateNode;
        t ? Pw(a, s, t) : jw(a, s);
      } else if (i !== ye) {
        var f = e.child;
        if (f !== null) {
          Z0(f, t, a);
          for (var v = f.sibling; v !== null; )
            Z0(v, t, a), v = v.sibling;
        }
      }
    }
    function eS(e, t, a) {
      var i = e.tag, o = i === Y || i === Z;
      if (o) {
        var s = e.stateNode;
        t ? Hw(a, s, t) : Fw(a, s);
      } else if (i !== ye) {
        var f = e.child;
        if (f !== null) {
          eS(f, t, a);
          for (var v = f.sibling; v !== null; )
            eS(v, t, a), v = v.sibling;
        }
      }
    }
    var Fr = null, pl = !1;
    function C_(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case Y: {
                Fr = i.stateNode, pl = !1;
                break e;
              }
              case te: {
                Fr = i.stateNode.containerInfo, pl = !0;
                break e;
              }
              case ye: {
                Fr = i.stateNode.containerInfo, pl = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        L1(e, t, a), Fr = null, pl = !1;
      }
      g_(a);
    }
    function Gu(e, t, a) {
      for (var i = a.child; i !== null; )
        L1(e, t, i), i = i.sibling;
    }
    function L1(e, t, a) {
      switch ($v(a), a.tag) {
        case Y:
          zr || Gf(a, t);
        case Z: {
          {
            var i = Fr, o = pl;
            Fr = null, Gu(e, t, a), Fr = i, pl = o, Fr !== null && (pl ? Bw(Fr, a.stateNode) : Vw(Fr, a.stateNode));
          }
          return;
        }
        case Gt: {
          Fr !== null && (pl ? $w(Fr, a.stateNode) : fg(Fr, a.stateNode));
          return;
        }
        case ye: {
          {
            var s = Fr, f = pl;
            Fr = a.stateNode.containerInfo, pl = !0, Gu(e, t, a), Fr = s, pl = f;
          }
          return;
        }
        case ae:
        case Be:
        case pt:
        case Je: {
          if (!zr) {
            var v = a.updateQueue;
            if (v !== null) {
              var m = v.lastEffect;
              if (m !== null) {
                var C = m.next, T = C;
                do {
                  var M = T, N = M.destroy, P = M.tag;
                  N !== void 0 && ((P & Wl) !== qa ? zm(a, t, N) : (P & cr) !== qa && (pu(a), a.mode & Ot ? (Kl(), zm(a, t, N), Gl(a)) : zm(a, t, N), Ls())), T = T.next;
                } while (T !== C);
              }
            }
          }
          Gu(e, t, a);
          return;
        }
        case W: {
          if (!zr) {
            Gf(a, t);
            var V = a.stateNode;
            typeof V.componentWillUnmount == "function" && J0(a, t, V);
          }
          Gu(e, t, a);
          return;
        }
        case nn: {
          Gu(e, t, a);
          return;
        }
        case Ke: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ae
          ) {
            var Q = zr;
            zr = Q || a.memoizedState !== null, Gu(e, t, a), zr = Q;
          } else
            Gu(e, t, a);
          break;
        }
        default: {
          Gu(e, t, a);
          return;
        }
      }
    }
    function R_(e) {
      e.memoizedState;
    }
    function T_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && ub(s);
          }
        }
      }
    }
    function M1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new l_()), t.forEach(function(i) {
          var o = SD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ra)
              if (Qf !== null && qf !== null)
                Kp(qf, Qf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function w_(e, t, a) {
      Qf = a, qf = e, vn(t), A1(t, e), vn(t), Qf = null, qf = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            C_(e, t, s);
          } catch (m) {
            sn(s, t, m);
          }
        }
      var f = cs();
      if (t.subtreeFlags & Xr)
        for (var v = t.child; v !== null; )
          vn(v), A1(v, e), v = v.sibling;
      vn(f);
    }
    function A1(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case ae:
        case Be:
        case pt:
        case Je: {
          if (vl(t, e), Xl(e), o & Le) {
            try {
              dl(Wl | sr, e, e.return), qu(Wl | sr, e);
            } catch (Xe) {
              sn(e, e.return, Xe);
            }
            if (e.mode & Ot) {
              try {
                Kl(), dl(cr | sr, e, e.return);
              } catch (Xe) {
                sn(e, e.return, Xe);
              }
              Gl(e);
            } else
              try {
                dl(cr | sr, e, e.return);
              } catch (Xe) {
                sn(e, e.return, Xe);
              }
          }
          return;
        }
        case W: {
          vl(t, e), Xl(e), o & Sa && i !== null && Gf(i, i.return);
          return;
        }
        case Y: {
          vl(t, e), Xl(e), o & Sa && i !== null && Gf(i, i.return);
          {
            if (e.flags & Ua) {
              var s = e.stateNode;
              try {
                LE(s);
              } catch (Xe) {
                sn(e, e.return, Xe);
              }
            }
            if (o & Le) {
              var f = e.stateNode;
              if (f != null) {
                var v = e.memoizedProps, m = i !== null ? i.memoizedProps : v, C = e.type, T = e.updateQueue;
                if (e.updateQueue = null, T !== null)
                  try {
                    Uw(f, T, C, m, v, e);
                  } catch (Xe) {
                    sn(e, e.return, Xe);
                  }
              }
            }
          }
          return;
        }
        case Z: {
          if (vl(t, e), Xl(e), o & Le) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var M = e.stateNode, N = e.memoizedProps, P = i !== null ? i.memoizedProps : N;
            try {
              zw(M, P, N);
            } catch (Xe) {
              sn(e, e.return, Xe);
            }
          }
          return;
        }
        case te: {
          if (vl(t, e), Xl(e), o & Le && i !== null) {
            var V = i.memoizedState;
            if (V.isDehydrated)
              try {
                ob(t.containerInfo);
              } catch (Xe) {
                sn(e, e.return, Xe);
              }
          }
          return;
        }
        case ye: {
          vl(t, e), Xl(e);
          return;
        }
        case Ne: {
          vl(t, e), Xl(e);
          var Q = e.child;
          if (Q.flags & Dl) {
            var Ce = Q.stateNode, Ve = Q.memoizedState, Ue = Ve !== null;
            if (Ce.isHidden = Ue, Ue) {
              var Tt = Q.alternate !== null && Q.alternate.memoizedState !== null;
              Tt || aD();
            }
          }
          if (o & Le) {
            try {
              R_(e);
            } catch (Xe) {
              sn(e, e.return, Xe);
            }
            M1(e);
          }
          return;
        }
        case Ke: {
          var yt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ae
          ) {
            var z = zr;
            zr = z || yt, vl(t, e), zr = z;
          } else
            vl(t, e);
          if (Xl(e), o & Dl) {
            var q = e.stateNode, F = e.memoizedState, oe = F !== null, Re = e;
            if (q.isHidden = oe, oe && !yt && (Re.mode & Ae) !== Pe) {
              De = Re;
              for (var me = Re.child; me !== null; )
                De = me, x_(me), me = me.sibling;
            }
            y_(Re, oe);
          }
          return;
        }
        case Et: {
          vl(t, e), Xl(e), o & Le && M1(e);
          return;
        }
        case nn:
          return;
        default: {
          vl(t, e), Xl(e);
          return;
        }
      }
    }
    function Xl(e) {
      var t = e.flags;
      if (t & qt) {
        try {
          E_(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~qt;
      }
      t & Si && (e.flags &= ~Si);
    }
    function b_(e, t, a) {
      Qf = a, qf = t, De = e, U1(e, t, a), Qf = null, qf = null;
    }
    function U1(e, t, a) {
      for (var i = (e.mode & Ae) !== Pe; De !== null; ) {
        var o = De, s = o.child;
        if (o.tag === Ke && i) {
          var f = o.memoizedState !== null, v = f || Um;
          if (v) {
            tS(e, t, a);
            continue;
          } else {
            var m = o.alternate, C = m !== null && m.memoizedState !== null, T = C || zr, M = Um, N = zr;
            Um = v, zr = T, zr && !N && (De = o, __(o));
            for (var P = s; P !== null; )
              De = P, U1(
                P,
                // New root; bubble back up to here and stop.
                t,
                a
              ), P = P.sibling;
            De = o, Um = M, zr = N, tS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & ui) !== He && s !== null ? (s.return = o, De = s) : tS(e, t, a);
      }
    }
    function tS(e, t, a) {
      for (; De !== null; ) {
        var i = De;
        if ((i.flags & ui) !== He) {
          var o = i.alternate;
          vn(i);
          try {
            h_(t, o, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          an();
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
    function x_(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case ae:
          case Be:
          case pt:
          case Je: {
            if (t.mode & Ot)
              try {
                Kl(), dl(cr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              dl(cr, t, t.return);
            break;
          }
          case W: {
            Gf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && J0(t, t.return, i);
            break;
          }
          case Y: {
            Gf(t, t.return);
            break;
          }
          case Ke: {
            var o = t.memoizedState !== null;
            if (o) {
              z1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : z1(e);
      }
    }
    function z1(e) {
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
    function __(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Ke) {
          var i = t.memoizedState !== null;
          if (i) {
            F1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : F1(e);
      }
    }
    function F1(e) {
      for (; De !== null; ) {
        var t = De;
        vn(t);
        try {
          m_(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (an(), t === e) {
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
    function D_(e, t, a, i) {
      De = t, O_(t, e, a, i);
    }
    function O_(e, t, a, i) {
      for (; De !== null; ) {
        var o = De, s = o.child;
        (o.subtreeFlags & Jr) !== He && s !== null ? (s.return = o, De = s) : k_(e, t, a, i);
      }
    }
    function k_(e, t, a, i) {
      for (; De !== null; ) {
        var o = De;
        if ((o.flags & Gr) !== He) {
          vn(o);
          try {
            N_(t, o, a, i);
          } catch (f) {
            sn(o, o.return, f);
          }
          an();
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
    function N_(e, t, a, i) {
      switch (t.tag) {
        case ae:
        case Be:
        case Je: {
          if (t.mode & Ot) {
            L0();
            try {
              qu(Ar | sr, t);
            } finally {
              N0(t);
            }
          } else
            qu(Ar | sr, t);
          break;
        }
      }
    }
    function L_(e) {
      De = e, M_();
    }
    function M_() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Lt) !== He) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              De = o, z_(o, e);
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
        (e.subtreeFlags & Jr) !== He && t !== null ? (t.return = e, De = t) : A_();
      }
    }
    function A_() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & Gr) !== He && (vn(e), U_(e), an());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function U_(e) {
      switch (e.tag) {
        case ae:
        case Be:
        case Je: {
          e.mode & Ot ? (L0(), dl(Ar | sr, e, e.return), N0(e)) : dl(Ar | sr, e, e.return);
          break;
        }
      }
    }
    function z_(e, t) {
      for (; De !== null; ) {
        var a = De;
        vn(a), j_(a, t), an();
        var i = a.child;
        i !== null ? (i.return = a, De = i) : F_(e);
      }
    }
    function F_(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, i = t.return;
        if (O1(t), t === e) {
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
    function j_(e, t) {
      switch (e.tag) {
        case ae:
        case Be:
        case Je: {
          e.mode & Ot ? (L0(), dl(Ar, e, t), N0(e)) : dl(Ar, e, t);
          break;
        }
      }
    }
    function H_(e) {
      switch (e.tag) {
        case ae:
        case Be:
        case Je: {
          try {
            qu(cr | sr, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function P_(e) {
      switch (e.tag) {
        case ae:
        case Be:
        case Je: {
          try {
            qu(Ar | sr, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function V_(e) {
      switch (e.tag) {
        case ae:
        case Be:
        case Je: {
          try {
            dl(cr | sr, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case W: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && J0(e, e.return, t);
          break;
        }
      }
    }
    function B_(e) {
      switch (e.tag) {
        case ae:
        case Be:
        case Je:
          try {
            dl(Ar | sr, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Hp = Symbol.for;
      Hp("selector.component"), Hp("selector.has_pseudo_class"), Hp("selector.role"), Hp("selector.test_id"), Hp("selector.text");
    }
    var $_ = [];
    function I_() {
      $_.forEach(function(e) {
        return e();
      });
    }
    var Y_ = R.ReactCurrentActQueue;
    function W_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function j1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Y_.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Q_ = Math.ceil, nS = R.ReactCurrentDispatcher, rS = R.ReactCurrentOwner, jr = R.ReactCurrentBatchConfig, hl = R.ReactCurrentActQueue, pr = (
      /*             */
      0
    ), H1 = (
      /*               */
      1
    ), Hr = (
      /*                */
      2
    ), Mi = (
      /*                */
      4
    ), $o = 0, Pp = 1, hc = 2, Fm = 3, Vp = 4, P1 = 5, aS = 6, Rt = pr, ba = null, An = null, vr = G, Jl = G, iS = Hu(G), hr = $o, Bp = null, jm = G, $p = G, Hm = G, Ip = null, Ga = null, lS = 0, V1 = 500, B1 = 1 / 0, q_ = 500, Io = null;
    function Yp() {
      B1 = Hn() + q_;
    }
    function $1() {
      return B1;
    }
    var Pm = !1, oS = null, Kf = null, mc = !1, Ku = null, Wp = G, uS = [], sS = null, G_ = 50, Qp = 0, cS = null, fS = !1, Vm = !1, K_ = 50, Xf = 0, Bm = null, qp = tn, $m = G, I1 = !1;
    function Im() {
      return ba;
    }
    function xa() {
      return (Rt & (Hr | Mi)) !== pr ? Hn() : (qp !== tn || (qp = Hn()), qp);
    }
    function Xu(e) {
      var t = e.mode;
      if ((t & Ae) === Pe)
        return $e;
      if ((Rt & Hr) !== pr && vr !== G)
        return Eu(vr);
      var a = Wb() !== Yb;
      if (a) {
        if (jr.transition !== null) {
          var i = jr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return $m === kn && ($m = nh()), $m;
      }
      var o = Va();
      if (o !== kn)
        return o;
      var s = kw();
      return s;
    }
    function X_(e) {
      var t = e.mode;
      return (t & Ae) === Pe ? $e : na();
    }
    function mr(e, t, a, i) {
      CD(), I1 && E("useInsertionEffect must not schedule updates."), fS && (Vm = !0), Oo(e, a, i), (Rt & Hr) !== G && e === ba ? wD(t) : (Ra && rf(e, t, a), bD(t), e === ba && ((Rt & Hr) === pr && ($p = rt($p, a)), hr === Vp && Ju(e, vr)), Ka(e, i), a === $e && Rt === pr && (t.mode & Ae) === Pe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && (Yp(), $E()));
    }
    function J_(e, t, a) {
      var i = e.current;
      i.lanes = t, Oo(e, t, a), Ka(e, a);
    }
    function Z_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Hr) !== pr
      );
    }
    function Ka(e, t) {
      var a = e.callbackNode;
      ky(e, t);
      var i = Ps(e, e === ba ? vr : G);
      if (i === G) {
        a !== null && lR(a), e.callbackNode = null, e.callbackPriority = kn;
        return;
      }
      var o = Nn(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== gS)) {
        a == null && s !== $e && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && lR(a);
      var f;
      if (o === $e)
        e.tag === Pu ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), Db(Q1.bind(null, e))) : BE(Q1.bind(null, e)), hl.current !== null ? hl.current.push(Vu) : Lw(function() {
          (Rt & (Hr | Mi)) === pr && Vu();
        }), f = null;
      else {
        var v;
        switch (ur(i)) {
          case Ln:
            v = Zr;
            break;
          case tl:
            v = cu;
            break;
          case wi:
            v = Ci;
            break;
          case Cu:
            v = ks;
            break;
          default:
            v = Ci;
            break;
        }
        f = SS(v, Y1.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function Y1(e, t) {
      if (Cx(), qp = tn, $m = G, (Rt & (Hr | Mi)) !== pr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Wo();
      if (i && e.callbackNode !== a)
        return null;
      var o = Ps(e, e === ba ? vr : G);
      if (o === G)
        return null;
      var s = !Bs(e, o) && !th(e, o) && !t, f = s ? sD(e, o) : Wm(e, o);
      if (f !== $o) {
        if (f === hc) {
          var v = jl(e);
          v !== G && (o = v, f = dS(e, v));
        }
        if (f === Pp) {
          var m = Bp;
          throw yc(e, G), Ju(e, o), Ka(e, Hn()), m;
        }
        if (f === aS)
          Ju(e, o);
        else {
          var C = !Bs(e, o), T = e.current.alternate;
          if (C && !tD(T)) {
            if (f = Wm(e, o), f === hc) {
              var M = jl(e);
              M !== G && (o = M, f = dS(e, M));
            }
            if (f === Pp) {
              var N = Bp;
              throw yc(e, G), Ju(e, o), Ka(e, Hn()), N;
            }
          }
          e.finishedWork = T, e.finishedLanes = o, eD(e, f, o);
        }
      }
      return Ka(e, Hn()), e.callbackNode === a ? Y1.bind(null, e) : null;
    }
    function dS(e, t) {
      var a = Ip;
      if (af(e)) {
        var i = yc(e, t);
        i.flags |= kr, Cb(e.containerInfo);
      }
      var o = Wm(e, t);
      if (o !== hc) {
        var s = Ga;
        Ga = a, s !== null && W1(s);
      }
      return o;
    }
    function W1(e) {
      Ga === null ? Ga = e : Ga.push.apply(Ga, e);
    }
    function eD(e, t, a) {
      switch (t) {
        case $o:
        case Pp:
          throw new Error("Root did not complete. This is a bug in React.");
        case hc: {
          gc(e, Ga, Io);
          break;
        }
        case Fm: {
          if (Ju(e, a), Jv(a) && // do not delay if we're inside an act() scope
          !oR()) {
            var i = lS + V1 - Hn();
            if (i > 10) {
              var o = Ps(e, G);
              if (o !== G)
                break;
              var s = e.suspendedLanes;
              if (!Do(s, a)) {
                xa(), tf(e, s);
                break;
              }
              e.timeoutHandle = sg(gc.bind(null, e, Ga, Io), i);
              break;
            }
          }
          gc(e, Ga, Io);
          break;
        }
        case Vp: {
          if (Ju(e, a), eh(a))
            break;
          if (!oR()) {
            var f = Jc(e, a), v = f, m = Hn() - v, C = ED(m) - m;
            if (C > 10) {
              e.timeoutHandle = sg(gc.bind(null, e, Ga, Io), C);
              break;
            }
          }
          gc(e, Ga, Io);
          break;
        }
        case P1: {
          gc(e, Ga, Io);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function tD(e) {
      for (var t = e; ; ) {
        if (t.flags & yo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, v = s.value;
                try {
                  if (!_e(f(), v))
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
    function Ju(e, t) {
      t = $s(t, Hm), t = $s(t, $p), ah(e, t);
    }
    function Q1(e) {
      if (Rx(), (Rt & (Hr | Mi)) !== pr)
        throw new Error("Should not already be working.");
      Wo();
      var t = Ps(e, G);
      if (!ra(t, $e))
        return Ka(e, Hn()), null;
      var a = Wm(e, t);
      if (e.tag !== Pu && a === hc) {
        var i = jl(e);
        i !== G && (t = i, a = dS(e, i));
      }
      if (a === Pp) {
        var o = Bp;
        throw yc(e, G), Ju(e, t), Ka(e, Hn()), o;
      }
      if (a === aS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, gc(e, Ga, Io), Ka(e, Hn()), null;
    }
    function nD(e, t) {
      t !== G && (Pd(e, rt(t, $e)), Ka(e, Hn()), (Rt & (Hr | Mi)) === pr && (Yp(), Vu()));
    }
    function pS(e, t) {
      var a = Rt;
      Rt |= H1;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === pr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && (Yp(), $E());
      }
    }
    function rD(e, t, a, i, o) {
      var s = Va(), f = jr.transition;
      try {
        return jr.transition = null, Tn(Ln), e(t, a, i, o);
      } finally {
        Tn(s), jr.transition = f, Rt === pr && Yp();
      }
    }
    function Yo(e) {
      Ku !== null && Ku.tag === Pu && (Rt & (Hr | Mi)) === pr && Wo();
      var t = Rt;
      Rt |= H1;
      var a = jr.transition, i = Va();
      try {
        return jr.transition = null, Tn(Ln), e ? e() : void 0;
      } finally {
        Tn(i), jr.transition = a, Rt = t, (Rt & (Hr | Mi)) === pr && Vu();
      }
    }
    function q1() {
      return (Rt & (Hr | Mi)) !== pr;
    }
    function Ym(e, t) {
      la(iS, Jl, e), Jl = rt(Jl, t);
    }
    function vS(e) {
      Jl = iS.current, ia(iS, e);
    }
    function yc(e, t) {
      e.finishedWork = null, e.finishedLanes = G;
      var a = e.timeoutHandle;
      if (a !== cg && (e.timeoutHandle = cg, Nw(a)), An !== null)
        for (var i = An.return; i !== null; ) {
          var o = i.alternate;
          T1(o, i), i = i.return;
        }
      ba = e;
      var s = Sc(e.current, null);
      return An = s, vr = Jl = t, hr = $o, Bp = null, jm = G, $p = G, Hm = G, Ip = null, Ga = null, Kb(), ol.discardPendingWarnings(), s;
    }
    function G1(e, t) {
      do {
        var a = An;
        try {
          if (Zh(), bC(), an(), rS.current = null, a === null || a.return === null) {
            hr = Pp, Bp = t, An = null;
            return;
          }
          if (ht && a.mode & Ot && Nm(a, !0), ct)
            if (Eo(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Gv(a, i, vr);
            } else
              qv(a, t, vr);
          _x(e, a.return, a, t, vr), Z1(a);
        } catch (o) {
          t = o, An === a && a !== null ? (a = a.return, An = a) : a = An;
          continue;
        }
        return;
      } while (!0);
    }
    function K1() {
      var e = nS.current;
      return nS.current = xm, e === null ? xm : e;
    }
    function X1(e) {
      nS.current = e;
    }
    function aD() {
      lS = Hn();
    }
    function Gp(e) {
      jm = rt(e, jm);
    }
    function iD() {
      hr === $o && (hr = Fm);
    }
    function hS() {
      (hr === $o || hr === Fm || hr === hc) && (hr = Vp), ba !== null && (Vs(jm) || Vs($p)) && Ju(ba, vr);
    }
    function lD(e) {
      hr !== Vp && (hr = hc), Ip === null ? Ip = [e] : Ip.push(e);
    }
    function oD() {
      return hr === $o;
    }
    function Wm(e, t) {
      var a = Rt;
      Rt |= Hr;
      var i = K1();
      if (ba !== e || vr !== t) {
        if (Ra) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Kp(e, vr), o.clear()), Vd(e, t);
        }
        Io = Ys(), yc(e, t);
      }
      hu(t);
      do
        try {
          uD();
          break;
        } catch (s) {
          G1(e, s);
        }
      while (!0);
      if (Zh(), Rt = a, X1(i), An !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ul(), ba = null, vr = G, hr;
    }
    function uD() {
      for (; An !== null; )
        J1(An);
    }
    function sD(e, t) {
      var a = Rt;
      Rt |= Hr;
      var i = K1();
      if (ba !== e || vr !== t) {
        if (Ra) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Kp(e, vr), o.clear()), Vd(e, t);
        }
        Io = Ys(), Yp(), yc(e, t);
      }
      hu(t);
      do
        try {
          cD();
          break;
        } catch (s) {
          G1(e, s);
        }
      while (!0);
      return Zh(), X1(i), Rt = a, An !== null ? (As(), $o) : (Ul(), ba = null, vr = G, hr);
    }
    function cD() {
      for (; An !== null && !Vv(); )
        J1(An);
    }
    function J1(e) {
      var t = e.alternate;
      vn(e);
      var a;
      (e.mode & Ot) !== Pe ? (k0(e), a = mS(t, e, Jl), Nm(e, !0)) : a = mS(t, e, Jl), an(), e.memoizedProps = e.pendingProps, a === null ? Z1(e) : An = a, rS.current = null;
    }
    function Z1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ol) === He) {
          vn(t);
          var o = void 0;
          if ((t.mode & Ot) === Pe ? o = R1(a, t, Jl) : (k0(t), o = R1(a, t, Jl), Nm(t, !1)), an(), o !== null) {
            An = o;
            return;
          }
        } else {
          var s = i_(a, t);
          if (s !== null) {
            s.flags &= Ji, An = s;
            return;
          }
          if ((t.mode & Ot) !== Pe) {
            Nm(t, !1);
            for (var f = t.actualDuration, v = t.child; v !== null; )
              f += v.actualDuration, v = v.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Ol, i.subtreeFlags = He, i.deletions = null;
          else {
            hr = aS, An = null;
            return;
          }
        }
        var m = t.sibling;
        if (m !== null) {
          An = m;
          return;
        }
        t = i, An = t;
      } while (t !== null);
      hr === $o && (hr = P1);
    }
    function gc(e, t, a) {
      var i = Va(), o = jr.transition;
      try {
        jr.transition = null, Tn(Ln), fD(e, t, a, i);
      } finally {
        jr.transition = o, Tn(i);
      }
      return null;
    }
    function fD(e, t, a, i) {
      do
        Wo();
      while (Ku !== null);
      if (RD(), (Rt & (Hr | Mi)) !== pr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Iv(s), o === null)
        return Ns(), null;
      if (s === G && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = G, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = kn;
      var f = rt(o.lanes, o.childLanes);
      nf(e, f), e === ba && (ba = null, An = null, vr = G), ((o.subtreeFlags & Jr) !== He || (o.flags & Jr) !== He) && (mc || (mc = !0, sS = a, SS(Ci, function() {
        return Wo(), null;
      })));
      var v = (o.subtreeFlags & (Kr | Xr | ui | Jr)) !== He, m = (o.flags & (Kr | Xr | ui | Jr)) !== He;
      if (v || m) {
        var C = jr.transition;
        jr.transition = null;
        var T = Va();
        Tn(Ln);
        var M = Rt;
        Rt |= Mi, rS.current = null, c_(e, o), KC(), w_(e, o, s), ww(e.containerInfo), e.current = o, vu(s), b_(o, e, s), Kv(), su(), Rt = M, Tn(T), jr.transition = C;
      } else
        e.current = o, KC();
      var N = mc;
      if (mc ? (mc = !1, Ku = e, Wp = s) : (Xf = 0, Bm = null), f = e.pendingLanes, f === G && (Kf = null), N || rR(e.current, !1), Ml(o.stateNode, i), Ra && e.memoizedUpdaters.clear(), I_(), Ka(e, Hn()), t !== null)
        for (var P = e.onRecoverableError, V = 0; V < t.length; V++) {
          var Q = t[V], Ce = Q.stack, Ve = Q.digest;
          P(Q.value, {
            componentStack: Ce,
            digest: Ve
          });
        }
      if (Pm) {
        Pm = !1;
        var Ue = oS;
        throw oS = null, Ue;
      }
      return ra(Wp, $e) && e.tag !== Pu && Wo(), f = e.pendingLanes, ra(f, $e) ? (Ex(), e === cS ? Qp++ : (Qp = 0, cS = e)) : Qp = 0, Vu(), Ns(), null;
    }
    function Wo() {
      if (Ku !== null) {
        var e = ur(Wp), t = Ay(wi, e), a = jr.transition, i = Va();
        try {
          return jr.transition = null, Tn(t), pD();
        } finally {
          Tn(i), jr.transition = a;
        }
      }
      return !1;
    }
    function dD(e) {
      uS.push(e), mc || (mc = !0, SS(Ci, function() {
        return Wo(), null;
      }));
    }
    function pD() {
      if (Ku === null)
        return !1;
      var e = sS;
      sS = null;
      var t = Ku, a = Wp;
      if (Ku = null, Wp = G, (Rt & (Hr | Mi)) !== pr)
        throw new Error("Cannot flush passive effects while already rendering.");
      fS = !0, Vm = !1, Ms(a);
      var i = Rt;
      Rt |= Mi, L_(t.current), D_(t, t.current, a, e);
      {
        var o = uS;
        uS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          v_(t, f);
        }
      }
      Ri(), rR(t.current, !0), Rt = i, Vu(), Vm ? t === Bm ? Xf++ : (Xf = 0, Bm = t) : Xf = 0, fS = !1, Vm = !1, Nd(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function eR(e) {
      return Kf !== null && Kf.has(e);
    }
    function vD(e) {
      Kf === null ? Kf = /* @__PURE__ */ new Set([e]) : Kf.add(e);
    }
    function hD(e) {
      Pm || (Pm = !0, oS = e);
    }
    var mD = hD;
    function tR(e, t, a) {
      var i = pc(a, t), o = JC(e, i, $e), s = $u(e, o, $e), f = xa();
      s !== null && (Oo(s, $e, f), Ka(s, f));
    }
    function sn(e, t, a) {
      if (o_(a), Xp(!1), e.tag === te) {
        tR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          tR(i, e, a);
          return;
        } else if (i.tag === W) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !eR(s)) {
            var f = pc(a, e), v = z0(i, f, $e), m = $u(i, v, $e), C = xa();
            m !== null && (Oo(m, $e, C), Ka(m, C));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function yD(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = xa();
      tf(e, a), xD(e), ba === e && Do(vr, a) && (hr === Vp || hr === Fm && Jv(vr) && Hn() - lS < V1 ? yc(e, G) : Hm = rt(Hm, a)), Ka(e, o);
    }
    function nR(e, t) {
      t === kn && (t = X_(e));
      var a = xa(), i = Qa(e, t);
      i !== null && (Oo(i, t, a), Ka(i, a));
    }
    function gD(e) {
      var t = e.memoizedState, a = kn;
      t !== null && (a = t.retryLane), nR(e, a);
    }
    function SD(e, t) {
      var a = kn, i;
      switch (e.tag) {
        case Ne:
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
      i !== null && i.delete(t), nR(e, a);
    }
    function ED(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Q_(e / 1960) * 1960;
    }
    function CD() {
      if (Qp > G_)
        throw Qp = 0, cS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Xf > K_ && (Xf = 0, Bm = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function RD() {
      ol.flushLegacyContextWarning(), ol.flushPendingUnsafeLifecycleWarnings();
    }
    function rR(e, t) {
      vn(e), Qm(e, Fa, V_), t && Qm(e, go, B_), Qm(e, Fa, H_), t && Qm(e, go, P_), an();
    }
    function Qm(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== He ? i = i.child : ((i.flags & t) !== He && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var qm = null;
    function aR(e) {
      {
        if ((Rt & Hr) !== pr || !(e.mode & Ae))
          return;
        var t = e.tag;
        if (t !== $ && t !== te && t !== W && t !== ae && t !== Be && t !== pt && t !== Je)
          return;
        var a = Ze(e) || "ReactComponent";
        if (qm !== null) {
          if (qm.has(a))
            return;
          qm.add(a);
        } else
          qm = /* @__PURE__ */ new Set([a]);
        var i = pn;
        try {
          vn(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? vn(e) : an();
        }
      }
    }
    var mS;
    {
      var TD = null;
      mS = function(e, t, a) {
        var i = dR(TD, t);
        try {
          return y1(e, t, a);
        } catch (s) {
          if (zb() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Zh(), bC(), T1(e, t), dR(t, i), t.mode & Ot && k0(t), li(null, y1, null, e, t, a), _y()) {
            var o = Xi();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var iR = !1, yS;
    yS = /* @__PURE__ */ new Set();
    function wD(e) {
      if (Wr && !yx())
        switch (e.tag) {
          case ae:
          case Be:
          case Je: {
            var t = An && Ze(An) || "Unknown", a = t;
            if (!yS.has(a)) {
              yS.add(a);
              var i = Ze(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case W: {
            iR || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), iR = !0);
            break;
          }
        }
    }
    function Kp(e, t) {
      if (Ra) {
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
    function lR(e) {
      if (e !== gS)
        return Uc(e);
    }
    function oR() {
      return hl.current !== null;
    }
    function bD(e) {
      {
        if (e.mode & Ae) {
          if (!j1())
            return;
        } else if (!W_() || Rt !== pr || e.tag !== ae && e.tag !== Be && e.tag !== Je)
          return;
        if (hl.current === null) {
          var t = pn;
          try {
            vn(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ze(e));
          } finally {
            t ? vn(e) : an();
          }
        }
      }
    }
    function xD(e) {
      e.tag !== Pu && j1() && hl.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Xp(e) {
      I1 = e;
    }
    var Ai = null, Jf = null, _D = function(e) {
      Ai = e;
    };
    function Zf(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        return t === void 0 ? e : t.current;
      }
    }
    function ES(e) {
      return Zf(e);
    }
    function CS(e) {
      {
        if (Ai === null)
          return e;
        var t = Ai(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Zf(e.render);
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
    function uR(e, t) {
      {
        if (Ai === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case W: {
            typeof i == "function" && (o = !0);
            break;
          }
          case ae: {
            (typeof i == "function" || s === je) && (o = !0);
            break;
          }
          case Be: {
            (s === he || s === je) && (o = !0);
            break;
          }
          case pt:
          case Je: {
            (s === lt || s === je) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Ai(a);
          if (f !== void 0 && f === Ai(i))
            return !0;
        }
        return !1;
      }
    }
    function sR(e) {
      {
        if (Ai === null || typeof WeakSet != "function")
          return;
        Jf === null && (Jf = /* @__PURE__ */ new WeakSet()), Jf.add(e);
      }
    }
    var DD = function(e, t) {
      {
        if (Ai === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Wo(), Yo(function() {
          RS(e.current, i, a);
        });
      }
    }, OD = function(e, t) {
      {
        if (e.context !== si)
          return;
        Wo(), Yo(function() {
          Jp(t, e, null, null);
        });
      }
    };
    function RS(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, v = e.type, m = null;
        switch (f) {
          case ae:
          case Je:
          case W:
            m = v;
            break;
          case Be:
            m = v.render;
            break;
        }
        if (Ai === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, T = !1;
        if (m !== null) {
          var M = Ai(m);
          M !== void 0 && (a.has(M) ? T = !0 : t.has(M) && (f === W ? T = !0 : C = !0));
        }
        if (Jf !== null && (Jf.has(e) || i !== null && Jf.has(i)) && (T = !0), T && (e._debugNeedsRemount = !0), T || C) {
          var N = Qa(e, $e);
          N !== null && mr(N, e, $e, tn);
        }
        o !== null && !T && RS(o, t, a), s !== null && RS(s, t, a);
      }
    }
    var kD = function(e, t) {
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
          case ae:
          case Je:
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
        var a = LD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Y:
              t.add(i.stateNode);
              return;
            case ye:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function LD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Y)
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
        var cR = Object.preventExtensions({});
      } catch {
        wS = !0;
      }
    }
    function MD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = He, this.subtreeFlags = He, this.deletions = null, this.lanes = G, this.childLanes = G, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !wS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new MD(e, t, a, i);
    };
    function bS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function AD(e) {
      return typeof e == "function" && !bS(e) && e.defaultProps === void 0;
    }
    function UD(e) {
      if (typeof e == "function")
        return bS(e) ? W : ae;
      if (e != null) {
        var t = e.$$typeof;
        if (t === he)
          return Be;
        if (t === lt)
          return pt;
      }
      return $;
    }
    function Sc(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = He, a.subtreeFlags = He, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & or, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case $:
        case ae:
        case Je:
          a.type = Zf(e.type);
          break;
        case W:
          a.type = ES(e.type);
          break;
        case Be:
          a.type = CS(e.type);
          break;
      }
      return a;
    }
    function zD(e, t) {
      e.flags &= or | qt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = G, e.lanes = t, e.child = null, e.subtreeFlags = He, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function FD(e, t, a) {
      var i;
      return e === Yh ? (i = Ae, t === !0 && (i |= Cn, i |= Ha)) : i = Pe, Ra && (i |= Ot), ci(te, null, null, i);
    }
    function xS(e, t, a, i, o, s) {
      var f = $, v = e;
      if (typeof e == "function")
        bS(e) ? (f = W, v = ES(v)) : v = Zf(v);
      else if (typeof e == "string")
        f = Y;
      else
        e:
          switch (e) {
            case ma:
              return Zu(a.children, o, s, t);
            case ji:
              f = St, o |= Cn, (o & Ae) !== Pe && (o |= Ha);
              break;
            case x:
              return jD(a, o, s, t);
            case dt:
              return HD(a, o, s, t);
            case Ct:
              return PD(a, o, s, t);
            case Jt:
              return fR(a, o, s, t);
            case Rr:
            case Fn:
            case di:
            case Zt:
            case Xt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case re:
                    f = Ge;
                    break e;
                  case de:
                    f = Dt;
                    break e;
                  case he:
                    f = Be, v = CS(v);
                    break e;
                  case lt:
                    f = pt;
                    break e;
                  case je:
                    f = xn, v = null;
                    break e;
                }
              var m = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var C = i ? Ze(i) : null;
                C && (m += `

Check the render method of \`` + C + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + m));
            }
          }
      var T = ci(f, a, t, o);
      return T.elementType = e, T.type = v, T.lanes = s, T._debugOwner = i, T;
    }
    function _S(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, v = xS(o, s, f, i, t, a);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function Zu(e, t, a, i) {
      var o = ci(Fe, e, i, t);
      return o.lanes = a, o;
    }
    function jD(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = ci(kt, e, i, t | Ot);
      return o.elementType = x, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function HD(e, t, a, i) {
      var o = ci(Ne, e, i, t);
      return o.elementType = dt, o.lanes = a, o;
    }
    function PD(e, t, a, i) {
      var o = ci(Et, e, i, t);
      return o.elementType = Ct, o.lanes = a, o;
    }
    function fR(e, t, a, i) {
      var o = ci(Ke, e, i, t);
      o.elementType = Jt, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function DS(e, t, a) {
      var i = ci(Z, e, null, t);
      return i.lanes = a, i;
    }
    function VD() {
      var e = ci(Y, null, null, Pe);
      return e.elementType = "DELETED", e;
    }
    function BD(e) {
      var t = ci(Gt, null, null, Pe);
      return t.stateNode = e, t;
    }
    function OS(e, t, a) {
      var i = e.children !== null ? e.children : [], o = ci(ye, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function dR(e, t) {
      return e === null && (e = ci($, null, null, Pe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function $D(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = cg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = kn, this.eventTimes = Is(G), this.expirationTimes = Is(tn), this.pendingLanes = G, this.suspendedLanes = G, this.pingedLanes = G, this.expiredLanes = G, this.mutableReadLanes = G, this.finishedLanes = G, this.entangledLanes = G, this.entanglements = Is(G), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < On; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Yh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Pu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function pR(e, t, a, i, o, s, f, v, m, C) {
      var T = new $D(e, t, a, v, m), M = FD(t, s);
      T.current = M, M.stateNode = T;
      {
        var N = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        M.memoizedState = N;
      }
      return Fg(M), T;
    }
    var kS = "18.2.0";
    function ID(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Sr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: $r,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var NS, LS;
    NS = !1, LS = {};
    function vR(e) {
      if (!e)
        return si;
      var t = gi(e), a = _b(t);
      if (t.tag === W) {
        var i = t.type;
        if (Yl(i))
          return PE(t, i, a);
      }
      return a;
    }
    function YD(e, t) {
      {
        var a = gi(e);
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
          var s = Ze(a) || "Component";
          if (!LS[s]) {
            LS[s] = !0;
            var f = pn;
            try {
              vn(o), a.mode & Cn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? vn(f) : an();
            }
          }
        }
        return o.stateNode;
      }
    }
    function hR(e, t, a, i, o, s, f, v) {
      var m = !1, C = null;
      return pR(e, t, m, C, a, i, o, s, f);
    }
    function mR(e, t, a, i, o, s, f, v, m, C) {
      var T = !0, M = pR(a, i, T, e, o, s, f, v, m);
      M.context = vR(null);
      var N = M.current, P = xa(), V = Xu(N), Q = Vo(P, V);
      return Q.callback = t ?? null, $u(N, Q, V), J_(M, V, P), M;
    }
    function Jp(e, t, a, i) {
      Zi(t, e);
      var o = t.current, s = xa(), f = Xu(o);
      Ad(f);
      var v = vR(a);
      t.context === null ? t.context = v : t.pendingContext = v, Wr && pn !== null && !NS && (NS = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ze(pn) || "Unknown"));
      var m = Vo(s, f);
      m.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), m.callback = i);
      var C = $u(o, m, f);
      return C !== null && (mr(C, o, f, s), am(C, o, f)), f;
    }
    function Gm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Y:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function WD(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (af(t)) {
            var a = Ny(t);
            nD(t, a);
          }
          break;
        }
        case Ne: {
          Yo(function() {
            var o = Qa(e, $e);
            if (o !== null) {
              var s = xa();
              mr(o, e, $e, s);
            }
          });
          var i = $e;
          MS(e, i);
          break;
        }
      }
    }
    function yR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = rh(a.retryLane, t));
    }
    function MS(e, t) {
      yR(e, t);
      var a = e.alternate;
      a && yR(a, t);
    }
    function QD(e) {
      if (e.tag === Ne) {
        var t = _o, a = Qa(e, t);
        if (a !== null) {
          var i = xa();
          mr(a, e, t, i);
        }
        MS(e, t);
      }
    }
    function qD(e) {
      if (e.tag === Ne) {
        var t = Xu(e), a = Qa(e, t);
        if (a !== null) {
          var i = xa();
          mr(a, e, t, i);
        }
        MS(e, t);
      }
    }
    function gR(e) {
      var t = _d(e);
      return t === null ? null : t.stateNode;
    }
    var SR = function(e) {
      return null;
    };
    function GD(e) {
      return SR(e);
    }
    var ER = function(e) {
      return !1;
    };
    function KD(e) {
      return ER(e);
    }
    var CR = null, RR = null, TR = null, wR = null, bR = null, xR = null, _R = null, DR = null, OR = null;
    {
      var kR = function(e, t, a) {
        var i = t[a], o = _t(e) ? e.slice() : ut({}, e);
        return a + 1 === t.length ? (_t(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = kR(e[i], t, a + 1), o);
      }, NR = function(e, t) {
        return kR(e, t, 0);
      }, LR = function(e, t, a, i) {
        var o = t[i], s = _t(e) ? e.slice() : ut({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], _t(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = LR(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, MR = function(e, t, a) {
        if (t.length !== a.length) {
          k("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              k("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return LR(e, t, a, 0);
      }, AR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = _t(e) ? e.slice() : ut({}, e);
        return s[o] = AR(e[o], t, a + 1, i), s;
      }, UR = function(e, t, a) {
        return AR(e, t, 0, a);
      }, AS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      CR = function(e, t, a, i) {
        var o = AS(e, t);
        if (o !== null) {
          var s = UR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Qa(e, $e);
          f !== null && mr(f, e, $e, tn);
        }
      }, RR = function(e, t, a) {
        var i = AS(e, t);
        if (i !== null) {
          var o = NR(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ut({}, e.memoizedProps);
          var s = Qa(e, $e);
          s !== null && mr(s, e, $e, tn);
        }
      }, TR = function(e, t, a, i) {
        var o = AS(e, t);
        if (o !== null) {
          var s = MR(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ut({}, e.memoizedProps);
          var f = Qa(e, $e);
          f !== null && mr(f, e, $e, tn);
        }
      }, wR = function(e, t, a) {
        e.pendingProps = UR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, $e);
        i !== null && mr(i, e, $e, tn);
      }, bR = function(e, t) {
        e.pendingProps = NR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qa(e, $e);
        a !== null && mr(a, e, $e, tn);
      }, xR = function(e, t, a) {
        e.pendingProps = MR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qa(e, $e);
        i !== null && mr(i, e, $e, tn);
      }, _R = function(e) {
        var t = Qa(e, $e);
        t !== null && mr(t, e, $e, tn);
      }, DR = function(e) {
        SR = e;
      }, OR = function(e) {
        ER = e;
      };
    }
    function XD(e) {
      var t = bd(e);
      return t === null ? null : t.stateNode;
    }
    function JD(e) {
      return null;
    }
    function ZD() {
      return pn;
    }
    function eO(e) {
      var t = e.findFiberByHostInstance, a = R.ReactCurrentDispatcher;
      return Bv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: CR,
        overrideHookStateDeletePath: RR,
        overrideHookStateRenamePath: TR,
        overrideProps: wR,
        overridePropsDeletePath: bR,
        overridePropsRenamePath: xR,
        setErrorHandler: DR,
        setSuspenseHandler: OR,
        scheduleUpdate: _R,
        currentDispatcherRef: a,
        findHostInstanceByFiber: XD,
        findFiberByHostInstance: t || JD,
        // React Refresh
        findHostInstancesForRefresh: kD,
        scheduleRefresh: DD,
        scheduleRoot: OD,
        setRefreshHandler: _D,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: ZD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: kS
      });
    }
    var zR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function US(e) {
      this._internalRoot = e;
    }
    Km.prototype.render = US.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Xm(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== En) {
          var i = gR(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Jp(e, t, null, null);
    }, Km.prototype.unmount = US.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        q1() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yo(function() {
          Jp(null, e, null, null);
        }), UE(t);
      }
    };
    function tO(e, t) {
      if (!Xm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      FR(e);
      var a = !1, i = !1, o = "", s = zR;
      t != null && (t.hydrate ? k("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Br && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = hR(e, Yh, null, a, i, o, s);
      jh(f.current, e);
      var v = e.nodeType === En ? e.parentNode : e;
      return lp(v), new US(f);
    }
    function Km(e) {
      this._internalRoot = e;
    }
    function nO(e) {
      e && Fy(e);
    }
    Km.prototype.unstable_scheduleHydration = nO;
    function rO(e, t, a) {
      if (!Xm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      FR(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, v = "", m = zR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (m = a.onRecoverableError));
      var C = mR(t, null, e, Yh, i, s, f, v, m);
      if (jh(C.current, e), lp(e), o)
        for (var T = 0; T < o.length; T++) {
          var M = o[T];
          fx(C, M);
        }
      return new Km(C);
    }
    function Xm(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === ya || e.nodeType === ud || !Ye));
    }
    function Zp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === ya || e.nodeType === ud || e.nodeType === En && e.nodeValue === " react-mount-point-unstable "));
    }
    function FR(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var aO = R.ReactCurrentOwner, jR;
    jR = function(e) {
      if (e._reactRootContainer && e.nodeType !== En) {
        var t = gR(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = zS(e), o = !!(i && ju(i));
      o && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function zS(e) {
      return e ? e.nodeType === ya ? e.documentElement : e.firstChild : null;
    }
    function HR() {
    }
    function iO(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = Gm(f);
            s.call(N);
          };
        }
        var f = mR(
          t,
          i,
          e,
          Pu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          HR
        );
        e._reactRootContainer = f, jh(f.current, e);
        var v = e.nodeType === En ? e.parentNode : e;
        return lp(v), Yo(), f;
      } else {
        for (var m; m = e.lastChild; )
          e.removeChild(m);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var N = Gm(T);
            C.call(N);
          };
        }
        var T = hR(
          e,
          Pu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          HR
        );
        e._reactRootContainer = T, jh(T.current, e);
        var M = e.nodeType === En ? e.parentNode : e;
        return lp(M), Yo(function() {
          Jp(t, T, a, i);
        }), T;
      }
    }
    function lO(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Jm(e, t, a, i, o) {
      jR(a), lO(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = iO(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var v = o;
          o = function() {
            var m = Gm(f);
            v.call(m);
          };
        }
        Jp(t, f, e, o);
      }
      return Gm(f);
    }
    function oO(e) {
      {
        var t = aO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : YD(e, "findDOMNode");
    }
    function uO(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Jm(null, e, t, !0, a);
    }
    function sO(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Jm(null, e, t, !1, a);
    }
    function cO(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Zp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !uu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Jm(e, t, a, !1, i);
    }
    function fO(e) {
      if (!Zp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = yp(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = zS(e), i = a && !ju(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yo(function() {
          Jm(null, null, e, !1, function() {
            e._reactRootContainer = null, UE(e);
          });
        }), !0;
      } else {
        {
          var o = zS(e), s = !!(o && ju(o)), f = e.nodeType === qr && Zp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wu(WD), Uy(QD), of(qD), lh(Va), oh(br), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), md(vw), Oc(pS, rD, Yo);
    function dO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Xm(t))
        throw new Error("Target container is not a DOM element.");
      return ID(e, t, null, a);
    }
    function pO(e, t, a, i) {
      return cO(e, t, a, i);
    }
    var FS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ju, kf, Hh, ou, ho, pS]
    };
    function vO(e, t) {
      return FS.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), tO(e, t);
    }
    function hO(e, t, a) {
      return FS.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), rO(e, t, a);
    }
    function mO(e) {
      return q1() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yo(e);
    }
    var yO = eO({
      findFiberByHostInstance: ac,
      bundleType: 1,
      version: kS,
      rendererPackageName: "react-dom"
    });
    if (!yO && Sn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var PR = window.location.protocol;
      /^(https?|file):$/.test(PR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (PR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FS, Xa.createPortal = dO, Xa.createRoot = vO, Xa.findDOMNode = oO, Xa.flushSync = mO, Xa.hydrate = uO, Xa.hydrateRoot = hO, Xa.render = sO, Xa.unmountComponentAtNode = fO, Xa.unstable_batchedUpdates = pS, Xa.unstable_renderSubtreeIntoContainer = pO, Xa.version = kS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Xa;
}
var Ja = {};
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GR;
function NO() {
  if (GR)
    return Ja;
  GR = 1;
  var p = Ui, h = oT();
  function y(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var R = /* @__PURE__ */ new Set(), _ = {};
  function A(n, r) {
    k(n, r), k(n + "Capture", r);
  }
  function k(n, r) {
    for (_[n] = r, n = 0; n < r.length; n++)
      R.add(r[n]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ce = Object.prototype.hasOwnProperty, ae = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, W = {}, $ = {};
  function te(n) {
    return ce.call($, n) ? !0 : ce.call(W, n) ? !1 : ae.test(n) ? $[n] = !0 : (W[n] = !0, !1);
  }
  function ye(n, r, l, u) {
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
  function Y(n, r, l, u) {
    if (r === null || typeof r > "u" || ye(n, r, l, u))
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
  function Z(n, r, l, u, c, d, S) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = S;
  }
  var Fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Fe[n] = new Z(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Fe[r] = new Z(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Fe[n] = new Z(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Fe[n] = new Z(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Fe[n] = new Z(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Fe[n] = new Z(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Fe[n] = new Z(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Fe[n] = new Z(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Fe[n] = new Z(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var St = /[\-:]([a-z])/g;
  function Dt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      St,
      Dt
    );
    Fe[r] = new Z(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(St, Dt);
    Fe[r] = new Z(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(St, Dt);
    Fe[r] = new Z(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Fe[n] = new Z(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Fe.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Fe[n] = new Z(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ge(n, r, l, u) {
    var c = Fe.hasOwnProperty(r) ? Fe[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Y(r, l, c, u) && (l = null), u || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Be = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kt = Symbol.for("react.element"), Ne = Symbol.for("react.portal"), pt = Symbol.for("react.fragment"), Je = Symbol.for("react.strict_mode"), xn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Gt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), Ke = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), it = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function we(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var D = Object.assign, J;
  function be(n) {
    if (J === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        J = r && r[1] || "";
      }
    return `
` + J + n;
  }
  var Ye = !1;
  function We(n, r) {
    if (!n || Ye)
      return "";
    Ye = !0;
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
                  var O = `
` + c[S].replace(" at new ", " at ");
                  return n.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", n.displayName)), O;
                }
              while (1 <= S && 0 <= w);
            break;
          }
      }
    } finally {
      Ye = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? be(n) : "";
  }
  function vt(n) {
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
        return n = We(n.type, !1), n;
      case 11:
        return n = We(n.type.render, !1), n;
      case 1:
        return n = We(n.type, !0), n;
      default:
        return "";
    }
  }
  function ct(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case pt:
        return "Fragment";
      case Ne:
        return "Portal";
      case xn:
        return "Profiler";
      case Je:
        return "StrictMode";
      case nn:
        return "Suspense";
      case Ke:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Gt:
          return (n.displayName || "Context") + ".Consumer";
        case gn:
          return (n._context.displayName || "Context") + ".Provider";
        case Et:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case at:
          return r = n.displayName || null, r !== null ? r : ct(n.type) || "Memo";
        case bt:
          r = n._payload, n = n._init;
          try {
            return ct(n(r));
          } catch {
          }
      }
    return null;
  }
  function ht(n) {
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
        return ct(r);
      case 8:
        return r === Je ? "StrictMode" : "Mode";
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
  function ft(n) {
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
  function rn(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function tr(n) {
    var r = rn(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
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
  function nr(n) {
    n._valueTracker || (n._valueTracker = tr(n));
  }
  function Vr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), u = "";
    return n && (u = rn(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
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
  function Sn(n, r) {
    var l = r.checked;
    return D({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function rr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = ft(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && Ge(n, "checked", r, !1);
  }
  function Un(n, r) {
    Vn(n, r);
    var l = ft(r.value), u = r.type;
    if (l != null)
      u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? _r(n, r.type, l) : r.hasOwnProperty("defaultValue") && _r(n, r.type, ft(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function zn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function _r(n, r, l) {
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
      for (l = "" + ft(l), r = null, c = 0; c < n.length; c++) {
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
    n._wrapperState = { initialValue: ft(l) };
  }
  function Er(n, r) {
    var l = ft(r.value), u = ft(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function da(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ar(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ar(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var cn, pa = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (cn = cn || document.createElement("div"), cn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = cn.firstChild; n.firstChild; )
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
  function ze(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ha.hasOwnProperty(n) && ha[n] ? ("" + r).trim() : r + "px";
  }
  function ot(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var u = l.indexOf("--") === 0, c = ze(l, r[l], u);
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
  function _n(n, r) {
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
  var dn = null;
  function Cr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Vt = null, qn = null, jt = null;
  function Kt(n) {
    if (n = gi(n)) {
      if (typeof Vt != "function")
        throw Error(y(280));
      var r = n.stateNode;
      r && (r = kc(r), Vt(n.stateNode, n.type, r));
    }
  }
  function Za(n) {
    qn ? jt ? jt.push(n) : jt = [n] : qn = n;
  }
  function Oa() {
    if (qn) {
      var n = qn, r = jt;
      if (jt = qn = null, Kt(n), r)
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
      ao = !1, (qn !== null || jt !== null) && (ro(), Oa());
    }
  }
  function ei(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var u = kc(l);
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
      var ka = {};
      Object.defineProperty(ka, "passive", { get: function() {
        ti = !0;
      } }), window.addEventListener("test", ka, ka), window.removeEventListener("test", ka, ka);
    } catch {
      ti = !1;
    }
  function Fi(n, r, l, u, c, d, S, w, O) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, B);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var Br = !1, $r = null, ma = !1, ji = null, x = { onError: function(n) {
    Br = !0, $r = n;
  } };
  function re(n, r, l, u, c, d, S, w, O) {
    Br = !1, $r = null, Fi.apply(x, arguments);
  }
  function de(n, r, l, u, c, d, S, w, O) {
    if (re.apply(this, arguments), Br) {
      if (Br) {
        var B = $r;
        Br = !1, $r = null;
      } else
        throw Error(y(198));
      ma || (ma = !0, ji = B);
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
  function dt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Ct(n) {
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
            return Ct(c), n;
          if (d === u)
            return Ct(c), r;
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
  function je(n) {
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
  var Xt = h.unstable_scheduleCallback, Jt = h.unstable_cancelCallback, Rr = h.unstable_shouldYield, di = h.unstable_requestPaint, Zt = h.unstable_now, Ir = h.unstable_getCurrentPriorityLevel, ts = h.unstable_ImmediatePriority, pi = h.unstable_UserBlockingPriority, ut = h.unstable_NormalPriority, io = h.unstable_LowPriority, Hi = h.unstable_IdlePriority, gl = null, Yr = null;
  function ns(n) {
    if (Yr && typeof Yr.onCommitFiberRoot == "function")
      try {
        Yr.onCommitFiberRoot(gl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Or = Math.clz32 ? Math.clz32 : is, rs = Math.log, as = Math.LN2;
  function is(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (rs(n) / as | 0) | 0;
  }
  var lo = 64, Go = 4194304;
  function Pi(n) {
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
  function vi(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, S = l & 268435455;
    if (S !== 0) {
      var w = S & ~c;
      w !== 0 ? u = Pi(w) : (d &= S, d !== 0 && (u = Pi(d)));
    } else
      S = l & ~c, S !== 0 ? u = Pi(S) : d !== 0 && (u = Pi(d));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        l = 31 - Or(r), c = 1 << l, u |= n[l], r &= ~c;
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
      var S = 31 - Or(d), w = 1 << S, O = c[S];
      O === -1 ? (!(w & l) || w & u) && (c[S] = Na(w, r)) : O <= r && (n.expiredLanes |= w), d &= ~w;
    }
  }
  function hi(n) {
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
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function ls(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function os(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Or(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var gt = 0;
  function us(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ko, Cl, ss, xt, Xo, so = !1, Ze = [], ni = null, pn = null, Wr = null, La = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), an = [], vn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function cs(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ni = null;
        break;
      case "dragenter":
      case "dragleave":
        pn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wr = null;
        break;
      case "pointerover":
      case "pointerout":
        La.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rl.delete(r.pointerId);
    }
  }
  function ir(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = gi(r), r !== null && Cl(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Qr(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return ni = ir(ni, n, r, l, u, c), !0;
      case "dragenter":
        return pn = ir(pn, n, r, l, u, c), !0;
      case "mouseover":
        return Wr = ir(Wr, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return La.set(d, ir(La.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rl.set(d, ir(Rl.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function ri(n) {
    var r = Xi(n.target);
    if (r !== null) {
      var l = he(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = dt(l), r !== null) {
            n.blockedOn = r, Xo(n.priority, function() {
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
  function Jo(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = tu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        dn = u, l.target.dispatchEvent(u), dn = null;
      } else
        return r = gi(l), r !== null && Cl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function co(n, r, l) {
    Jo(n) && l.delete(r);
  }
  function fo() {
    so = !1, ni !== null && Jo(ni) && (ni = null), pn !== null && Jo(pn) && (pn = null), Wr !== null && Jo(Wr) && (Wr = null), La.forEach(co), Rl.forEach(co);
  }
  function Tl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, so || (so = !0, h.unstable_scheduleCallback(h.unstable_NormalPriority, fo)));
  }
  function Ma(n) {
    function r(c) {
      return Tl(c, n);
    }
    if (0 < Ze.length) {
      Tl(Ze[0], n);
      for (var l = 1; l < Ze.length; l++) {
        var u = Ze[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (ni !== null && Tl(ni, n), pn !== null && Tl(pn, n), Wr !== null && Tl(Wr, n), La.forEach(r), Rl.forEach(r), l = 0; l < an.length; l++)
      u = an[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < an.length && (l = an[0], l.blockedOn === null); )
      ri(l), l.blockedOn === null && an.shift();
  }
  var Vi = Be.ReactCurrentBatchConfig, Zo = !0;
  function Bi(n, r, l, u) {
    var c = gt, d = Vi.transition;
    Vi.transition = null;
    try {
      gt = 1, mi(n, r, l, u);
    } finally {
      gt = c, Vi.transition = d;
    }
  }
  function eu(n, r, l, u) {
    var c = gt, d = Vi.transition;
    Vi.transition = null;
    try {
      gt = 4, mi(n, r, l, u);
    } finally {
      gt = c, Vi.transition = d;
    }
  }
  function mi(n, r, l, u) {
    if (Zo) {
      var c = tu(n, r, l, u);
      if (c === null)
        md(n, r, u, $i, l), cs(n, u);
      else if (Qr(c, n, r, l, u))
        u.stopPropagation();
      else if (cs(n, u), r & 4 && -1 < vn.indexOf(n)) {
        for (; c !== null; ) {
          var d = gi(c);
          if (d !== null && Ko(d), d = tu(n, r, l, u), d === null && md(n, r, u, $i, l), d === c)
            break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else
        md(n, r, u, null, l);
    }
  }
  var $i = null;
  function tu(n, r, l, u) {
    if ($i = null, n = Cr(u), n = Xi(n), n !== null)
      if (r = he(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = dt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return $i = n, null;
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
        switch (Ir()) {
          case ts:
            return 1;
          case pi:
            return 4;
          case ut:
          case io:
            return 16;
          case Hi:
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
  function H(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function I() {
    return !0;
  }
  function ue() {
    return !1;
  }
  function Oe(n) {
    function r(l, u, c, d, S) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = S, this.currentTarget = null;
      for (var w in n)
        n.hasOwnProperty(w) && (l = n[w], this[w] = l ? l(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? I : ue, this.isPropagationStopped = ue, this;
    }
    return D(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = I);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = I);
    }, persist: function() {
    }, isPersistent: I }), r;
  }
  var Ee = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, qe = Oe(Ee), st = D({}, Ee, { view: 0, detail: 0 }), Ht = Oe(st), Bt, $t, It, ln = D({}, st, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ec, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== It && (It && n.type === "mousemove" ? (Bt = n.screenX - It.screenX, $t = n.screenY - It.screenY) : $t = Bt = 0, It = n), Bt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : $t;
  } }), _t = Oe(ln), wl = D({}, ln, { dataTransfer: 0 }), ru = Oe(wl), ds = D({}, st, { relatedTarget: 0 }), ps = Oe(ds), Ii = D({}, Ee, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vs = Oe(Ii), hs = D({}, Ee, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ad = Oe(hs), py = D({}, Ee, { data: 0 }), cv = Oe(py), fv = {
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
    return n.type === "keypress" ? (n = H(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? id[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ec, charCode: function(n) {
    return n.type === "keypress" ? H(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? H(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Yi = Oe(vy), hy = D({}, ln, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cc = Oe(hy), ld = D({}, st, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ec }), od = Oe(ld), my = D({}, Ee, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Rc = Oe(my), vv = D({}, ln, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), qr = Oe(vv), Wi = [9, 13, 27, 32], En = E && "CompositionEvent" in window, ya = null;
  E && "documentMode" in document && (ya = document.documentMode);
  var ud = E && "TextEvent" in window && !ya, ms = E && (!En || ya && 8 < ya && 11 >= ya), hv = " ", au = !1;
  function mv(n, r) {
    switch (n) {
      case "keyup":
        return Wi.indexOf(r.keyCode) !== -1;
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
      return n === "compositionend" || !En && mv(n, r) ? (n = b(), g = nu = ai = null, bl = !1, n) : null;
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
    Za(u), r = Dc(r, "onChange"), 0 < r.length && (l = new qe("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var ys = null, gs = null;
  function Sv(n) {
    Uv(n, 0);
  }
  function Qi(n) {
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
  function Cv() {
    ys && (ys.detachEvent("onpropertychange", Rv), gs = ys = null);
  }
  function Rv(n) {
    if (n.propertyName === "value" && Qi(gs)) {
      var r = [];
      gv(r, gs, n, Cr(n)), yl(Sv, r);
    }
  }
  function Ey(n, r, l) {
    n === "focusin" ? (Cv(), ys = r, gs = l, ys.attachEvent("onpropertychange", Rv)) : n === "focusout" && Cv();
  }
  function Cy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Qi(gs);
  }
  function Ry(n, r) {
    if (n === "click")
      return Qi(r);
  }
  function Ty(n, r) {
    if (n === "input" || n === "change")
      return Qi(r);
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
  function _v() {
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
    var r = _v(), l = n.focusedElem, u = n.selectionRange;
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
    pd || vo == null || vo !== gr(u) || (u = vo, "selectionStart" in u && Ss(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Es && iu(Es, u) || (Es = u, u = Dc(xl, "onSelect"), 0 < u.length && (r = new qe("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = vo)));
  }
  function bc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var lu = { animationend: bc("Animation", "AnimationEnd"), animationiteration: bc("Animation", "AnimationIteration"), animationstart: bc("Animation", "AnimationStart"), transitionend: bc("Transition", "TransitionEnd") }, xc = {}, Ov = {};
  E && (Ov = document.createElement("div").style, "AnimationEvent" in window || (delete lu.animationend.animation, delete lu.animationiteration.animation, delete lu.animationstart.animation), "TransitionEvent" in window || delete lu.transitionend.transition);
  function Cs(n) {
    if (xc[n])
      return xc[n];
    if (!lu[n])
      return n;
    var r = lu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in Ov)
        return xc[n] = r[l];
    return n;
  }
  var Tr = Cs("animationend"), vd = Cs("animationiteration"), kv = Cs("animationstart"), Nv = Cs("transitionend"), Lv = /* @__PURE__ */ new Map(), Mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _l(n, r) {
    Lv.set(n, r), A(r, [n]);
  }
  for (var _c = 0; _c < Mv.length; _c++) {
    var Rs = Mv[_c], Ts = Rs.toLowerCase(), wy = Rs[0].toUpperCase() + Rs.slice(1);
    _l(Ts, "on" + wy);
  }
  _l(Tr, "onAnimationEnd"), _l(vd, "onAnimationIteration"), _l(kv, "onAnimationStart"), _l("dblclick", "onDoubleClick"), _l("focusin", "onFocus"), _l("focusout", "onBlur"), _l(Nv, "onTransitionEnd"), k("onMouseEnter", ["mouseout", "mouseover"]), k("onMouseLeave", ["mouseout", "mouseover"]), k("onPointerEnter", ["pointerout", "pointerover"]), k("onPointerLeave", ["pointerout", "pointerover"]), A("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), A("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), A("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), A("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), by = new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));
  function Av(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, de(u, r, void 0, n), n.currentTarget = null;
  }
  function Uv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var S = u.length - 1; 0 <= S; S--) {
            var w = u[S], O = w.instance, B = w.currentTarget;
            if (w = w.listener, O !== d && c.isPropagationStopped())
              break e;
            Av(c, w, B), d = O;
          }
        else
          for (S = 0; S < u.length; S++) {
            if (w = u[S], O = w.instance, B = w.currentTarget, w = w.listener, O !== d && c.isPropagationStopped())
              break e;
            Av(c, w, B), d = O;
          }
      }
    }
    if (ma)
      throw n = ji, ma = !1, ji = null, n;
  }
  function Qt(n, r) {
    var l = r[wd];
    l === void 0 && (l = r[wd] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (hd(r, n, 2, !1), l.add(u));
  }
  function ws(n, r, l) {
    var u = 0;
    r && (u |= 4), hd(l, n, u, r);
  }
  var Gi = "_reactListening" + Math.random().toString(36).slice(2);
  function yi(n) {
    if (!n[Gi]) {
      n[Gi] = !0, R.forEach(function(l) {
        l !== "selectionchange" && (by.has(l) || ws(l, !1, n), ws(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Gi] || (r[Gi] = !0, ws("selectionchange", !1, r));
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
        c = mi;
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
                var O = S.tag;
                if ((O === 3 || O === 4) && (O = S.stateNode.containerInfo, O === c || O.nodeType === 8 && O.parentNode === c))
                  return;
                S = S.return;
              }
            for (; w !== null; ) {
              if (S = Xi(w), S === null)
                return;
              if (O = S.tag, O === 5 || O === 6) {
                u = d = S;
                continue e;
              }
              w = w.parentNode;
            }
          }
          u = u.return;
        }
    yl(function() {
      var B = d, ie = Cr(l), le = [];
      e: {
        var ne = Lv.get(n);
        if (ne !== void 0) {
          var ge = qe, xe = n;
          switch (n) {
            case "keypress":
              if (H(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ge = Yi;
              break;
            case "focusin":
              xe = "focus", ge = ps;
              break;
            case "focusout":
              xe = "blur", ge = ps;
              break;
            case "beforeblur":
            case "afterblur":
              ge = ps;
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
              ge = _t;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = ru;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = od;
              break;
            case Tr:
            case vd:
            case kv:
              ge = vs;
              break;
            case Nv:
              ge = Rc;
              break;
            case "scroll":
              ge = Ht;
              break;
            case "wheel":
              ge = qr;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = ad;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = Cc;
          }
          var ke = (r & 4) !== 0, Mn = !ke && n === "scroll", U = ke ? ne !== null ? ne + "Capture" : null : ne;
          ke = [];
          for (var L = B, j; L !== null; ) {
            j = L;
            var se = j.stateNode;
            if (j.tag === 5 && se !== null && (j = se, U !== null && (se = ei(L, U), se != null && ke.push(ou(L, se, j)))), Mn)
              break;
            L = L.return;
          }
          0 < ke.length && (ne = new ge(ne, xe, null, l, ie), le.push({ event: ne, listeners: ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ne = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", ne && l !== dn && (xe = l.relatedTarget || l.fromElement) && (Xi(xe) || xe[li]))
            break e;
          if ((ge || ne) && (ne = ie.window === ie ? ie : (ne = ie.ownerDocument) ? ne.defaultView || ne.parentWindow : window, ge ? (xe = l.relatedTarget || l.toElement, ge = B, xe = xe ? Xi(xe) : null, xe !== null && (Mn = he(xe), xe !== Mn || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (ge = null, xe = B), ge !== xe)) {
            if (ke = _t, se = "onMouseLeave", U = "onMouseEnter", L = "mouse", (n === "pointerout" || n === "pointerover") && (ke = Cc, se = "onPointerLeave", U = "onPointerEnter", L = "pointer"), Mn = ge == null ? ne : uu(ge), j = xe == null ? ne : uu(xe), ne = new ke(se, L + "leave", ge, l, ie), ne.target = Mn, ne.relatedTarget = j, se = null, Xi(ie) === B && (ke = new ke(U, L + "enter", xe, l, ie), ke.target = j, ke.relatedTarget = Mn, se = ke), Mn = se, ge && xe)
              t: {
                for (ke = ge, U = xe, L = 0, j = ke; j; j = ho(j))
                  L++;
                for (j = 0, se = U; se; se = ho(se))
                  j++;
                for (; 0 < L - j; )
                  ke = ho(ke), L--;
                for (; 0 < j - L; )
                  U = ho(U), j--;
                for (; L--; ) {
                  if (ke === U || U !== null && ke === U.alternate)
                    break t;
                  ke = ho(ke), U = ho(U);
                }
                ke = null;
              }
            else
              ke = null;
            ge !== null && yd(le, ne, ge, ke, !1), xe !== null && Mn !== null && yd(le, Mn, xe, ke, !0);
          }
        }
        e: {
          if (ne = B ? uu(B) : window, ge = ne.nodeName && ne.nodeName.toLowerCase(), ge === "select" || ge === "input" && ne.type === "file")
            var Me = cd;
          else if (sd(ne))
            if (fd)
              Me = Ty;
            else {
              Me = Cy;
              var Ie = Ey;
            }
          else
            (ge = ne.nodeName) && ge.toLowerCase() === "input" && (ne.type === "checkbox" || ne.type === "radio") && (Me = Ry);
          if (Me && (Me = Me(n, B))) {
            gv(le, Me, l, ie);
            break e;
          }
          Ie && Ie(n, ne, B), n === "focusout" && (Ie = ne._wrapperState) && Ie.controlled && ne.type === "number" && _r(ne, "number", ne.value);
        }
        switch (Ie = B ? uu(B) : window, n) {
          case "focusin":
            (sd(Ie) || Ie.contentEditable === "true") && (vo = Ie, xl = B, Es = null);
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
        var _e;
        if (En)
          e: {
            switch (n) {
              case "compositionstart":
                var Qe = "onCompositionStart";
                break e;
              case "compositionend":
                Qe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Qe = "onCompositionUpdate";
                break e;
            }
            Qe = void 0;
          }
        else
          bl ? mv(n, l) && (Qe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Qe = "onCompositionStart");
        Qe && (ms && l.locale !== "ko" && (bl || Qe !== "onCompositionStart" ? Qe === "onCompositionEnd" && bl && (_e = b()) : (ai = ie, nu = "value" in ai ? ai.value : ai.textContent, bl = !0)), Ie = Dc(B, Qe), 0 < Ie.length && (Qe = new cv(Qe, n, null, l, ie), le.push({ event: Qe, listeners: Ie }), _e ? Qe.data = _e : (_e = yv(l), _e !== null && (Qe.data = _e)))), (_e = ud ? yy(n, l) : gy(n, l)) && (B = Dc(B, "onBeforeInput"), 0 < B.length && (ie = new cv("onBeforeInput", "beforeinput", null, l, ie), le.push({ event: ie, listeners: B }), ie.data = _e));
      }
      Uv(le, r);
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
      var w = l, O = w.alternate, B = w.stateNode;
      if (O !== null && O === u)
        break;
      w.tag === 5 && B !== null && (w = B, c ? (O = ei(l, d), O != null && S.unshift(ou(l, O, w))) : c || (O = ei(l, d), O != null && S.push(ou(l, O, w)))), l = l.return;
    }
    S.length !== 0 && n.push({ event: r, listeners: S });
  }
  var zv = /\r\n?/g, gd = /\u0000|\uFFFD/g;
  function Fv(n) {
    return (typeof n == "string" ? n : "" + n).replace(zv, `
`).replace(gd, "");
  }
  function bs(n, r, l) {
    if (r = Fv(r), Fv(n) !== r && l)
      throw Error(y(425));
  }
  function Oc() {
  }
  var Sd = null, Ed = null;
  function mo(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var xs = typeof setTimeout == "function" ? setTimeout : void 0, _s = typeof clearTimeout == "function" ? clearTimeout : void 0, Cd = typeof Promise == "function" ? Promise : void 0, jv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cd < "u" ? function(n) {
    return Cd.resolve(null).then(n).catch(Rd);
  } : xs;
  function Rd(n) {
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
  var Ki = Math.random().toString(36).slice(2), Aa = "__reactFiber$" + Ki, Os = "__reactProps$" + Ki, li = "__reactContainer$" + Ki, wd = "__reactEvents$" + Ki, xy = "__reactListeners$" + Ki, _y = "__reactHandles$" + Ki;
  function Xi(n) {
    var r = n[Aa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[li] || l[Aa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Ds(n); n !== null; ) {
            if (l = n[Aa])
              return l;
            n = Ds(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function gi(n) {
    return n = n[Aa] || n[li], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function uu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(y(33));
  }
  function kc(n) {
    return n[Os] || null;
  }
  var He = [], oi = -1;
  function qt(n) {
    return { current: n };
  }
  function Le(n) {
    0 > oi || (n.current = He[oi], He[oi] = null, oi--);
  }
  function Lt(n, r) {
    oi++, He[oi] = n.current, n.current = r;
  }
  var Ua = {}, Gn = qt(Ua), et = qt(!1), kr = Ua;
  function Sa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Ua;
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
  function Gr() {
    Le(et), Le(Gn);
  }
  function Si(n, r, l) {
    if (Gn.current !== Ua)
      throw Error(y(168));
    Lt(Gn, r), Lt(et, l);
  }
  function Dl(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return l;
    u = u.getChildContext();
    for (var c in u)
      if (!(c in r))
        throw Error(y(108, ht(n) || "Unknown", c));
    return D({}, l, u);
  }
  function yo(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ua, kr = Gn.current, Lt(Gn, n), Lt(et, et.current), !0;
  }
  function Hv(n, r, l) {
    var u = n.stateNode;
    if (!u)
      throw Error(y(169));
    l ? (n = Dl(n, r, kr), u.__reactInternalMemoizedMergedChildContext = n, Le(et), Le(Gn), Lt(Gn, n)) : Le(et), Lt(et, l);
  }
  var Ji = null, Ol = !1, lr = !1;
  function Nc(n) {
    Ji === null ? Ji = [n] : Ji.push(n);
  }
  function Pv(n) {
    Ol = !0, Nc(n);
  }
  function Ei() {
    if (!lr && Ji !== null) {
      lr = !0;
      var n = 0, r = gt;
      try {
        var l = Ji;
        for (gt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Ji = null, Ol = !1;
      } catch (c) {
        throw Ji !== null && (Ji = Ji.slice(n + 1)), Xt(ts, Ei), c;
      } finally {
        gt = r, lr = !1;
      }
    }
    return null;
  }
  var za = [], kl = 0, Fa = null, go = 0, Kr = [], Xr = 0, ui = null, Jr = 1, or = "";
  function So(n, r) {
    za[kl++] = go, za[kl++] = Fa, Fa = n, go = r;
  }
  function Nl(n, r, l) {
    Kr[Xr++] = Jr, Kr[Xr++] = or, Kr[Xr++] = ui, ui = n;
    var u = Jr;
    n = or;
    var c = 32 - Or(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - Or(r) + c;
    if (30 < d) {
      var S = c - c % 5;
      d = (u & (1 << S) - 1).toString(32), u >>= S, c -= S, Jr = 1 << 32 - Or(r) + c | l << c | u, or = d + n;
    } else
      Jr = 1 << d | l << c | u, or = n;
  }
  function Lc(n) {
    n.return !== null && (So(n, 1), Nl(n, 1, 0));
  }
  function Mc(n) {
    for (; n === Fa; )
      Fa = za[--kl], za[kl] = null, go = za[--kl], za[kl] = null;
    for (; n === ui; )
      ui = Kr[--Xr], Kr[Xr] = null, or = Kr[--Xr], Kr[Xr] = null, Jr = Kr[--Xr], Kr[Xr] = null;
  }
  var Ea = null, Ca = null, on = !1, ja = null;
  function bd(n, r) {
    var l = Ya(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ea = n, Ca = ga(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ea = n, Ca = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ui !== null ? { id: Jr, overflow: or } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ya(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ea = n, Ca = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _d(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ac(n) {
    if (on) {
      var r = Ca;
      if (r) {
        var l = r;
        if (!xd(n, r)) {
          if (_d(n))
            throw Error(y(418));
          r = ga(l.nextSibling);
          var u = Ea;
          r && xd(n, r) ? bd(u, l) : (n.flags = n.flags & -4097 | 2, on = !1, Ea = n);
        }
      } else {
        if (_d(n))
          throw Error(y(418));
        n.flags = n.flags & -4097 | 2, on = !1, Ea = n;
      }
    }
  }
  function Dd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ea = n;
  }
  function Uc(n) {
    if (n !== Ea)
      return !1;
    if (!on)
      return Dd(n), on = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !mo(n.type, n.memoizedProps)), r && (r = Ca)) {
      if (_d(n))
        throw Vv(), Error(y(418));
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
                Ca = ga(n.nextSibling);
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
      Ca = Ea ? ga(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Vv() {
    for (var n = Ca; n; )
      n = ga(n.nextSibling);
  }
  function su() {
    Ca = Ea = null, on = !1;
  }
  function Hn(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  var Dy = Be.ReactCurrentBatchConfig;
  function Zr(n, r) {
    if (n && n.defaultProps) {
      r = D({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var cu = qt(null), Ci = null, fu = null, ks = null;
  function Od() {
    ks = fu = Ci = null;
  }
  function kd(n) {
    var r = cu.current;
    Le(cu), n._currentValue = r;
  }
  function Ll(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function Dn(n, r) {
    Ci = n, ks = fu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (na = !0), n.firstContext = null);
  }
  function fe(n) {
    var r = n._currentValue;
    if (ks !== n)
      if (n = { context: n, memoizedValue: r, next: null }, fu === null) {
        if (Ci === null)
          throw Error(y(308));
        fu = n, Ci.dependencies = { lanes: 0, firstContext: n };
      } else
        fu = fu.next = n;
    return r;
  }
  var wr = null;
  function Ra(n) {
    wr === null ? wr = [n] : wr.push(n);
  }
  function Bv(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ra(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Zi(n, u);
  }
  function Zi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ml = !1;
  function Nd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $v(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function en(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Al(n, r, l) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, mt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Zi(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Ra(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Zi(n, l);
  }
  function zc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, os(n, l);
    }
  }
  function Iv(n, r) {
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
  function Ns(n, r, l, u) {
    var c = n.updateQueue;
    Ml = !1;
    var d = c.firstBaseUpdate, S = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var O = w, B = O.next;
      O.next = null, S === null ? d = B : S.next = B, S = O;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, w = ie.lastBaseUpdate, w !== S && (w === null ? ie.firstBaseUpdate = B : w.next = B, ie.lastBaseUpdate = O));
    }
    if (d !== null) {
      var le = c.baseState;
      S = 0, ie = B = O = null, w = d;
      do {
        var ne = w.lane, ge = w.eventTime;
        if ((u & ne) === ne) {
          ie !== null && (ie = ie.next = {
            eventTime: ge,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var xe = n, ke = w;
            switch (ne = r, ge = l, ke.tag) {
              case 1:
                if (xe = ke.payload, typeof xe == "function") {
                  le = xe.call(ge, le, ne);
                  break e;
                }
                le = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = ke.payload, ne = typeof xe == "function" ? xe.call(ge, le, ne) : xe, ne == null)
                  break e;
                le = D({}, le, ne);
                break e;
              case 2:
                Ml = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, ne = c.effects, ne === null ? c.effects = [w] : ne.push(w));
        } else
          ge = { eventTime: ge, lane: ne, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, ie === null ? (B = ie = ge, O = le) : ie = ie.next = ge, S |= ne;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null)
            break;
          ne = w, w = ne.next, ne.next = null, c.lastBaseUpdate = ne, c.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (O = le), c.baseState = O, c.firstBaseUpdate = B, c.lastBaseUpdate = ie, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          S |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      No |= S, n.lanes = S, n.memoizedState = le;
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
  function Ld(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : D({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Fc = { isMounted: function(n) {
    return (n = n._reactInternals) ? he(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = Jn(), c = rl(n), d = en(u, c);
    d.payload = r, l != null && (d.callback = l), r = Al(n, d, c), r !== null && (mn(r, n, c, u), zc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = Jn(), c = rl(n), d = en(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Al(n, d, c), r !== null && (mn(r, n, c, u), zc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Jn(), u = rl(n), c = en(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Al(n, c, u), r !== null && (mn(r, n, u, l), zc(r, n, u));
  } };
  function Yv(n, r, l, u, c, d, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, S) : r.prototype && r.prototype.isPureReactComponent ? !iu(l, u) || !iu(c, d) : !0;
  }
  function Wv(n, r, l) {
    var u = !1, c = Ua, d = r.contextType;
    return typeof d == "object" && d !== null ? d = fe(d) : (c = jn(r) ? kr : Gn.current, u = r.contextTypes, d = (u = u != null) ? Sa(n, c) : Ua), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Fc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qv(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && Fc.enqueueReplaceState(r, r.state, null);
  }
  function Md(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Eo, Nd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = fe(d) : (d = jn(r) ? kr : Gn.current, c.context = Sa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ld(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Fc.enqueueReplaceState(c, c.state, null), Ns(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
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
  function Ls(n, r) {
    throw n = Object.prototype.toString.call(r), Error(y(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function qv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Gv(n) {
    function r(U, L) {
      if (n) {
        var j = U.deletions;
        j === null ? (U.deletions = [L], U.flags |= 16) : j.push(L);
      }
    }
    function l(U, L) {
      if (!n)
        return null;
      for (; L !== null; )
        r(U, L), L = L.sibling;
      return null;
    }
    function u(U, L) {
      for (U = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? U.set(L.key, L) : U.set(L.index, L), L = L.sibling;
      return U;
    }
    function c(U, L) {
      return U = Bl(U, L), U.index = 0, U.sibling = null, U;
    }
    function d(U, L, j) {
      return U.index = j, n ? (j = U.alternate, j !== null ? (j = j.index, j < L ? (U.flags |= 2, L) : j) : (U.flags |= 2, L)) : (U.flags |= 1048576, L);
    }
    function S(U) {
      return n && U.alternate === null && (U.flags |= 2), U;
    }
    function w(U, L, j, se) {
      return L === null || L.tag !== 6 ? (L = Sf(j, U.mode, se), L.return = U, L) : (L = c(L, j), L.return = U, L);
    }
    function O(U, L, j, se) {
      var Me = j.type;
      return Me === pt ? ie(U, L, j.props.children, se, j.key) : L !== null && (L.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === bt && qv(Me) === L.type) ? (se = c(L, j.props), se.ref = pu(U, L, j), se.return = U, se) : (se = yf(j.type, j.key, j.props, null, U.mode, se), se.ref = pu(U, L, j), se.return = U, se);
    }
    function B(U, L, j, se) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== j.containerInfo || L.stateNode.implementation !== j.implementation ? (L = Xs(j, U.mode, se), L.return = U, L) : (L = c(L, j.children || []), L.return = U, L);
    }
    function ie(U, L, j, se, Me) {
      return L === null || L.tag !== 7 ? (L = Uo(j, U.mode, se, Me), L.return = U, L) : (L = c(L, j), L.return = U, L);
    }
    function le(U, L, j) {
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return L = Sf("" + L, U.mode, j), L.return = U, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            return j = yf(L.type, L.key, L.props, null, U.mode, j), j.ref = pu(U, null, L), j.return = U, j;
          case Ne:
            return L = Xs(L, U.mode, j), L.return = U, L;
          case bt:
            var se = L._init;
            return le(U, se(L._payload), j);
        }
        if (Sr(L) || we(L))
          return L = Uo(L, U.mode, j, null), L.return = U, L;
        Ls(U, L);
      }
      return null;
    }
    function ne(U, L, j, se) {
      var Me = L !== null ? L.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number")
        return Me !== null ? null : w(U, L, "" + j, se);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case kt:
            return j.key === Me ? O(U, L, j, se) : null;
          case Ne:
            return j.key === Me ? B(U, L, j, se) : null;
          case bt:
            return Me = j._init, ne(
              U,
              L,
              Me(j._payload),
              se
            );
        }
        if (Sr(j) || we(j))
          return Me !== null ? null : ie(U, L, j, se, null);
        Ls(U, j);
      }
      return null;
    }
    function ge(U, L, j, se, Me) {
      if (typeof se == "string" && se !== "" || typeof se == "number")
        return U = U.get(j) || null, w(L, U, "" + se, Me);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case kt:
            return U = U.get(se.key === null ? j : se.key) || null, O(L, U, se, Me);
          case Ne:
            return U = U.get(se.key === null ? j : se.key) || null, B(L, U, se, Me);
          case bt:
            var Ie = se._init;
            return ge(U, L, j, Ie(se._payload), Me);
        }
        if (Sr(se) || we(se))
          return U = U.get(j) || null, ie(L, U, se, Me, null);
        Ls(L, se);
      }
      return null;
    }
    function xe(U, L, j, se) {
      for (var Me = null, Ie = null, _e = L, Qe = L = 0, Wn = null; _e !== null && Qe < j.length; Qe++) {
        _e.index > Qe ? (Wn = _e, _e = null) : Wn = _e.sibling;
        var Mt = ne(U, _e, j[Qe], se);
        if (Mt === null) {
          _e === null && (_e = Wn);
          break;
        }
        n && _e && Mt.alternate === null && r(U, _e), L = d(Mt, L, Qe), Ie === null ? Me = Mt : Ie.sibling = Mt, Ie = Mt, _e = Wn;
      }
      if (Qe === j.length)
        return l(U, _e), on && So(U, Qe), Me;
      if (_e === null) {
        for (; Qe < j.length; Qe++)
          _e = le(U, j[Qe], se), _e !== null && (L = d(_e, L, Qe), Ie === null ? Me = _e : Ie.sibling = _e, Ie = _e);
        return on && So(U, Qe), Me;
      }
      for (_e = u(U, _e); Qe < j.length; Qe++)
        Wn = ge(_e, U, Qe, j[Qe], se), Wn !== null && (n && Wn.alternate !== null && _e.delete(Wn.key === null ? Qe : Wn.key), L = d(Wn, L, Qe), Ie === null ? Me = Wn : Ie.sibling = Wn, Ie = Wn);
      return n && _e.forEach(function(al) {
        return r(U, al);
      }), on && So(U, Qe), Me;
    }
    function ke(U, L, j, se) {
      var Me = we(j);
      if (typeof Me != "function")
        throw Error(y(150));
      if (j = Me.call(j), j == null)
        throw Error(y(151));
      for (var Ie = Me = null, _e = L, Qe = L = 0, Wn = null, Mt = j.next(); _e !== null && !Mt.done; Qe++, Mt = j.next()) {
        _e.index > Qe ? (Wn = _e, _e = null) : Wn = _e.sibling;
        var al = ne(U, _e, Mt.value, se);
        if (al === null) {
          _e === null && (_e = Wn);
          break;
        }
        n && _e && al.alternate === null && r(U, _e), L = d(al, L, Qe), Ie === null ? Me = al : Ie.sibling = al, Ie = al, _e = Wn;
      }
      if (Mt.done)
        return l(
          U,
          _e
        ), on && So(U, Qe), Me;
      if (_e === null) {
        for (; !Mt.done; Qe++, Mt = j.next())
          Mt = le(U, Mt.value, se), Mt !== null && (L = d(Mt, L, Qe), Ie === null ? Me = Mt : Ie.sibling = Mt, Ie = Mt);
        return on && So(U, Qe), Me;
      }
      for (_e = u(U, _e); !Mt.done; Qe++, Mt = j.next())
        Mt = ge(_e, U, Qe, Mt.value, se), Mt !== null && (n && Mt.alternate !== null && _e.delete(Mt.key === null ? Qe : Mt.key), L = d(Mt, L, Qe), Ie === null ? Me = Mt : Ie.sibling = Mt, Ie = Mt);
      return n && _e.forEach(function(Qy) {
        return r(U, Qy);
      }), on && So(U, Qe), Me;
    }
    function Mn(U, L, j, se) {
      if (typeof j == "object" && j !== null && j.type === pt && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case kt:
            e: {
              for (var Me = j.key, Ie = L; Ie !== null; ) {
                if (Ie.key === Me) {
                  if (Me = j.type, Me === pt) {
                    if (Ie.tag === 7) {
                      l(U, Ie.sibling), L = c(Ie, j.props.children), L.return = U, U = L;
                      break e;
                    }
                  } else if (Ie.elementType === Me || typeof Me == "object" && Me !== null && Me.$$typeof === bt && qv(Me) === Ie.type) {
                    l(U, Ie.sibling), L = c(Ie, j.props), L.ref = pu(U, Ie, j), L.return = U, U = L;
                    break e;
                  }
                  l(U, Ie);
                  break;
                } else
                  r(U, Ie);
                Ie = Ie.sibling;
              }
              j.type === pt ? (L = Uo(j.props.children, U.mode, se, j.key), L.return = U, U = L) : (se = yf(j.type, j.key, j.props, null, U.mode, se), se.ref = pu(U, L, j), se.return = U, U = se);
            }
            return S(U);
          case Ne:
            e: {
              for (Ie = j.key; L !== null; ) {
                if (L.key === Ie)
                  if (L.tag === 4 && L.stateNode.containerInfo === j.containerInfo && L.stateNode.implementation === j.implementation) {
                    l(U, L.sibling), L = c(L, j.children || []), L.return = U, U = L;
                    break e;
                  } else {
                    l(U, L);
                    break;
                  }
                else
                  r(U, L);
                L = L.sibling;
              }
              L = Xs(j, U.mode, se), L.return = U, U = L;
            }
            return S(U);
          case bt:
            return Ie = j._init, Mn(U, L, Ie(j._payload), se);
        }
        if (Sr(j))
          return xe(U, L, j, se);
        if (we(j))
          return ke(U, L, j, se);
        Ls(U, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, L !== null && L.tag === 6 ? (l(U, L.sibling), L = c(L, j), L.return = U, U = L) : (l(U, L), L = Sf(j, U.mode, se), L.return = U, U = L), S(U)) : l(U, L);
    }
    return Mn;
  }
  var vu = Gv(!0), Kv = Gv(!1), Ms = {}, Ri = qt(Ms), hu = qt(Ms), As = qt(Ms);
  function Ul(n) {
    if (n === Ms)
      throw Error(y(174));
    return n;
  }
  function Ad(n, r) {
    switch (Lt(As, r), Lt(hu, n), Lt(Ri, Ms), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Dr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Dr(r, n);
    }
    Le(Ri), Lt(Ri, r);
  }
  function mu() {
    Le(Ri), Le(hu), Le(As);
  }
  function jc(n) {
    Ul(As.current);
    var r = Ul(Ri.current), l = Dr(r, n.type);
    r !== l && (Lt(hu, n), Lt(Ri, l));
  }
  function Pe(n) {
    hu.current === n && (Le(Ri), Le(hu));
  }
  var Ae = qt(0);
  function Ot(n) {
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
  function Ha() {
    for (var n = 0; n < Cn.length; n++)
      Cn[n]._workInProgressVersionPrimary = null;
    Cn.length = 0;
  }
  var Us = Be.ReactCurrentDispatcher, Ud = Be.ReactCurrentBatchConfig, Co = 0, hn = null, On = null, G = null, kn = !1, $e = !1, Ti = 0, el = 0;
  function Rn() {
    throw Error(y(321));
  }
  function Pa(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ii(n[l], r[l]))
        return !1;
    return !0;
  }
  function Ro(n, r, l, u, c, d) {
    if (Co = d, hn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Us.current = n === null || n.memoizedState === null ? Oy : ky, n = l(u, c), $e) {
      d = 0;
      do {
        if ($e = !1, Ti = 0, 25 <= d)
          throw Error(y(301));
        d += 1, G = On = null, r.updateQueue = null, Us.current = Ny, n = l(u, c);
      } while ($e);
    }
    if (Us.current = Jc, r = On !== null && On.next !== null, Co = 0, G = On = hn = null, kn = !1, r)
      throw Error(y(300));
    return n;
  }
  function zl() {
    var n = Ti !== 0;
    return Ti = 0, n;
  }
  function ea() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return G === null ? hn.memoizedState = G = n : G = G.next = n, G;
  }
  function ta() {
    if (On === null) {
      var n = hn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = On.next;
    var r = G === null ? hn.memoizedState : G.next;
    if (r !== null)
      G = r, On = n;
    else {
      if (n === null)
        throw Error(y(310));
      On = n, n = { memoizedState: On.memoizedState, baseState: On.baseState, baseQueue: On.baseQueue, queue: On.queue, next: null }, G === null ? hn.memoizedState = G = n : G = G.next = n;
    }
    return G;
  }
  function To(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zs(n) {
    var r = ta(), l = r.queue;
    if (l === null)
      throw Error(y(311));
    l.lastRenderedReducer = n;
    var u = On, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var S = c.next;
        c.next = d.next, d.next = S;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var w = S = null, O = null, B = d;
      do {
        var ie = B.lane;
        if ((Co & ie) === ie)
          O !== null && (O = O.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), u = B.hasEagerState ? B.eagerState : n(u, B.action);
        else {
          var le = {
            lane: ie,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          O === null ? (w = O = le, S = u) : O = O.next = le, hn.lanes |= ie, No |= ie;
        }
        B = B.next;
      } while (B !== null && B !== d);
      O === null ? S = u : O.next = w, ii(u, r.memoizedState) || (na = !0), r.memoizedState = u, r.baseState = S, r.baseQueue = O, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, hn.lanes |= d, No |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Fs(n) {
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
  function Hc() {
  }
  function Pc(n, r) {
    var l = hn, u = ta(), c = r(), d = !ii(u.memoizedState, c);
    if (d && (u.memoizedState = c, na = !0), u = u.queue, js($c.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || G !== null && G.memoizedState.tag & 1) {
      if (l.flags |= 2048, wo(9, Bc.bind(null, l, u, c, r), void 0, null), wn === null)
        throw Error(y(349));
      Co & 30 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = hn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, hn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Bc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Ic(r) && Yc(n);
  }
  function $c(n, r, l) {
    return l(function() {
      Ic(r) && Yc(n);
    });
  }
  function Ic(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ii(n, l);
    } catch {
      return !0;
    }
  }
  function Yc(n) {
    var r = Zi(n, 1);
    r !== null && mn(r, n, 1, -1);
  }
  function Wc(n) {
    var r = ea();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: To, lastRenderedState: n }, r.queue = n, n = n.dispatch = Xc.bind(null, hn, n), [r.memoizedState, n];
  }
  function wo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = hn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, hn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Qc() {
    return ta().memoizedState;
  }
  function yu(n, r, l, u) {
    var c = ea();
    hn.flags |= n, c.memoizedState = wo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function bo(n, r, l, u) {
    var c = ta();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (On !== null) {
      var S = On.memoizedState;
      if (d = S.destroy, u !== null && Pa(u, S.deps)) {
        c.memoizedState = wo(r, l, d, u);
        return;
      }
    }
    hn.flags |= n, c.memoizedState = wo(1 | r, l, d, u);
  }
  function xo(n, r) {
    return yu(8390656, 8, n, r);
  }
  function js(n, r) {
    return bo(2048, 8, n, r);
  }
  function qc(n, r) {
    return bo(4, 2, n, r);
  }
  function Gc(n, r) {
    return bo(4, 4, n, r);
  }
  function Kc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function zd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bo(4, 4, Kc.bind(null, r, n), l);
  }
  function _o() {
  }
  function Fd(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Pa(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function gu(n, r) {
    var l = ta();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Pa(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Fl(n, r, l) {
    return Co & 21 ? (ii(l, r) || (l = oo(), hn.lanes |= l, No |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, na = !0), n.memoizedState = l);
  }
  function Ta(n, r) {
    var l = gt;
    gt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Ud.transition;
    Ud.transition = {};
    try {
      n(!1), r();
    } finally {
      gt = l, Ud.transition = u;
    }
  }
  function Xv() {
    return ta().memoizedState;
  }
  function tn(n, r, l) {
    var u = rl(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Hs(n))
      Su(r, l);
    else if (l = Bv(n, r, l, u), l !== null) {
      var c = Jn();
      mn(l, n, u, c), Ps(l, r, u);
    }
  }
  function Xc(n, r, l) {
    var u = rl(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Hs(n))
      Su(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var S = r.lastRenderedState, w = d(S, l);
          if (c.hasEagerState = !0, c.eagerState = w, ii(w, S)) {
            var O = r.interleaved;
            O === null ? (c.next = c, Ra(r)) : (c.next = O.next, O.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Bv(n, r, c, u), l !== null && (c = Jn(), mn(l, n, u, c), Ps(l, r, u));
    }
  }
  function Hs(n) {
    var r = n.alternate;
    return n === hn || r !== null && r === hn;
  }
  function Su(n, r) {
    $e = kn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Ps(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, os(n, l);
    }
  }
  var Jc = { readContext: fe, useCallback: Rn, useContext: Rn, useEffect: Rn, useImperativeHandle: Rn, useInsertionEffect: Rn, useLayoutEffect: Rn, useMemo: Rn, useReducer: Rn, useRef: Rn, useState: Rn, useDebugValue: Rn, useDeferredValue: Rn, useTransition: Rn, useMutableSource: Rn, useSyncExternalStore: Rn, useId: Rn, unstable_isNewReconciler: !1 }, Oy = { readContext: fe, useCallback: function(n, r) {
    return ea().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: fe, useEffect: xo, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yu(
      4194308,
      4,
      Kc.bind(null, r, n),
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
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = tn.bind(null, hn, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = ea();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Wc, useDebugValue: _o, useDeferredValue: function(n) {
    return ea().memoizedState = n;
  }, useTransition: function() {
    var n = Wc(!1), r = n[0];
    return n = Ta.bind(null, n[1]), ea().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = hn, c = ea();
    if (on) {
      if (l === void 0)
        throw Error(y(407));
      l = l();
    } else {
      if (l = r(), wn === null)
        throw Error(y(349));
      Co & 30 || Vc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, xo($c.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, wo(9, Bc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ea(), r = wn.identifierPrefix;
    if (on) {
      var l = or, u = Jr;
      l = (u & ~(1 << 32 - Or(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ti++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = el++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ky = {
    readContext: fe,
    useCallback: Fd,
    useContext: fe,
    useEffect: js,
    useImperativeHandle: zd,
    useInsertionEffect: qc,
    useLayoutEffect: Gc,
    useMemo: gu,
    useReducer: zs,
    useRef: Qc,
    useState: function() {
      return zs(To);
    },
    useDebugValue: _o,
    useDeferredValue: function(n) {
      var r = ta();
      return Fl(r, On.memoizedState, n);
    },
    useTransition: function() {
      var n = zs(To)[0], r = ta().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Pc,
    useId: Xv,
    unstable_isNewReconciler: !1
  }, Ny = { readContext: fe, useCallback: Fd, useContext: fe, useEffect: js, useImperativeHandle: zd, useInsertionEffect: qc, useLayoutEffect: Gc, useMemo: gu, useReducer: Fs, useRef: Qc, useState: function() {
    return Fs(To);
  }, useDebugValue: _o, useDeferredValue: function(n) {
    var r = ta();
    return On === null ? r.memoizedState = n : Fl(r, On.memoizedState, n);
  }, useTransition: function() {
    var n = Fs(To)[0], r = ta().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Pc, useId: Xv, unstable_isNewReconciler: !1 };
  function jl(n, r) {
    try {
      var l = "", u = r;
      do
        l += vt(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function jd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Vs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Jv = typeof WeakMap == "function" ? WeakMap : Map;
  function Zv(n, r, l) {
    l = en(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      ff || (ff = !0, Qd = u), Vs(n, r);
    }, l;
  }
  function eh(n, r, l) {
    l = en(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Vs(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Vs(n, r), typeof u != "function" && ($a === null ? $a = /* @__PURE__ */ new Set([this]) : $a.add(this));
      var S = r.stack;
      this.componentDidCatch(r.value, { componentStack: S !== null ? S : "" });
    }), l;
  }
  function Bs(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Jv();
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
  function Hd(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = en(-1, 1), r.tag = 2, Al(l, r, 1))), l.lanes |= 1), n);
  }
  var nh = Be.ReactCurrentOwner, na = !1;
  function Nn(n, r, l, u) {
    r.child = n === null ? Kv(r, null, l, u) : vu(r, n.child, l, u);
  }
  function Eu(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return Dn(r, c), u = Ro(n, r, l, u, d, c), l = zl(), n !== null && !na ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (on && l && Lc(r), r.flags |= 1, Nn(n, r, u, c), r.child);
  }
  function Hl(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Jd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Zc(n, r, d, u, c)) : (n = yf(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var S = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : iu, l(S, u) && n.ref === r.ref)
        return Ln(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Zc(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (iu(d, u) && n.ref === r.ref)
        if (na = !1, r.pendingProps = u = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (na = !0);
        else
          return r.lanes = n.lanes, Ln(n, r, c);
    }
    return rt(n, r, l, u, c);
  }
  function ra(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Lt(ku, aa), aa |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Lt(ku, aa), aa |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, Lt(ku, aa), aa |= u;
      }
    else
      d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, Lt(ku, aa), aa |= u;
    return Nn(n, r, c, l), r.child;
  }
  function Do(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function rt(n, r, l, u, c) {
    var d = jn(l) ? kr : Gn.current;
    return d = Sa(r, d), Dn(r, c), l = Ro(n, r, l, u, d, c), u = zl(), n !== null && !na ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ln(n, r, c)) : (on && u && Lc(r), r.flags |= 1, Nn(n, r, l, c), r.child);
  }
  function $s(n, r, l, u, c) {
    if (jn(l)) {
      var d = !0;
      yo(r);
    } else
      d = !1;
    if (Dn(r, c), r.stateNode === null)
      Ys(n, r), Wv(r, l, u), Md(r, l, u, c), u = !0;
    else if (n === null) {
      var S = r.stateNode, w = r.memoizedProps;
      S.props = w;
      var O = S.context, B = l.contextType;
      typeof B == "object" && B !== null ? B = fe(B) : (B = jn(l) ? kr : Gn.current, B = Sa(r, B));
      var ie = l.getDerivedStateFromProps, le = typeof ie == "function" || typeof S.getSnapshotBeforeUpdate == "function";
      le || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== u || O !== B) && Qv(r, S, u, B), Ml = !1;
      var ne = r.memoizedState;
      S.state = ne, Ns(r, u, S, c), O = r.memoizedState, w !== u || ne !== O || et.current || Ml ? (typeof ie == "function" && (Ld(r, l, ie, u), O = r.memoizedState), (w = Ml || Yv(r, l, w, u, ne, O, B)) ? (le || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount()), typeof S.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = O), S.props = u, S.state = O, S.context = B, u = w) : (typeof S.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      S = r.stateNode, $v(n, r), w = r.memoizedProps, B = r.type === r.elementType ? w : Zr(r.type, w), S.props = B, le = r.pendingProps, ne = S.context, O = l.contextType, typeof O == "object" && O !== null ? O = fe(O) : (O = jn(l) ? kr : Gn.current, O = Sa(r, O));
      var ge = l.getDerivedStateFromProps;
      (ie = typeof ge == "function" || typeof S.getSnapshotBeforeUpdate == "function") || typeof S.UNSAFE_componentWillReceiveProps != "function" && typeof S.componentWillReceiveProps != "function" || (w !== le || ne !== O) && Qv(r, S, u, O), Ml = !1, ne = r.memoizedState, S.state = ne, Ns(r, u, S, c);
      var xe = r.memoizedState;
      w !== le || ne !== xe || et.current || Ml ? (typeof ge == "function" && (Ld(r, l, ge, u), xe = r.memoizedState), (B = Ml || Yv(r, l, B, u, ne, xe, O) || !1) ? (ie || typeof S.UNSAFE_componentWillUpdate != "function" && typeof S.componentWillUpdate != "function" || (typeof S.componentWillUpdate == "function" && S.componentWillUpdate(u, xe, O), typeof S.UNSAFE_componentWillUpdate == "function" && S.UNSAFE_componentWillUpdate(u, xe, O)), typeof S.componentDidUpdate == "function" && (r.flags |= 4), typeof S.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = xe), S.props = u, S.state = xe, S.context = O, u = B) : (typeof S.componentDidUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof S.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return ef(n, r, l, u, d, c);
  }
  function ef(n, r, l, u, c, d) {
    Do(n, r);
    var S = (r.flags & 128) !== 0;
    if (!u && !S)
      return c && Hv(r, l, !1), Ln(n, r, d);
    u = r.stateNode, nh.current = r;
    var w = S && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && S ? (r.child = vu(r, n.child, null, d), r.child = vu(r, null, w, d)) : Nn(n, r, w, d), r.memoizedState = u.state, c && Hv(r, l, !0), r.child;
  }
  function Ly(n) {
    var r = n.stateNode;
    r.pendingContext ? Si(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Si(n, r.context, !1), Ad(n, r.containerInfo);
  }
  function rh(n, r, l, u, c) {
    return su(), Hn(c), r.flags |= 256, Nn(n, r, l, u), r.child;
  }
  var Is = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Oo(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ah(n, r, l) {
    var u = r.pendingProps, c = Ae.current, d = !1, S = (r.flags & 128) !== 0, w;
    if ((w = S) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Lt(Ae, c & 1), n === null)
      return Ac(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (S = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, S = { mode: "hidden", children: S }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = S) : d = gf(S, u, 0, null), n = Uo(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Oo(l), r.memoizedState = Is, n) : tf(r, S));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null))
      return Pd(n, r, S, u, w, c, l);
    if (d) {
      d = u.fallback, S = r.mode, c = n.child, w = c.sibling;
      var O = { mode: "hidden", children: u.children };
      return !(S & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = O, r.deletions = null) : (u = Bl(c, O), u.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Bl(w, d) : (d = Uo(d, S, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, S = n.child.memoizedState, S = S === null ? Oo(l) : { baseLanes: S.baseLanes | l, cachePool: null, transitions: S.transitions }, d.memoizedState = S, d.childLanes = n.childLanes & ~l, r.memoizedState = Is, u;
    }
    return d = n.child, n = d.sibling, u = Bl(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function tf(n, r) {
    return r = gf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function nf(n, r, l, u) {
    return u !== null && Hn(u), vu(r, n.child, null, l), n = tf(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Pd(n, r, l, u, c, d, S) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = jd(Error(y(422))), nf(n, r, S, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = gf({ mode: "visible", children: u.children }, c, 0, null), d = Uo(d, c, S, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && vu(r, n.child, null, S), r.child.memoizedState = Oo(S), r.memoizedState = Is, d);
    if (!(r.mode & 1))
      return nf(n, r, S, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u)
        var w = u.dgst;
      return u = w, d = Error(y(419)), u = jd(d, u, void 0), nf(n, r, S, u);
    }
    if (w = (S & n.childLanes) !== 0, na || w) {
      if (u = wn, u !== null) {
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
        c = c & (u.suspendedLanes | S) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Zi(n, c), mn(u, n, c, -1));
      }
      return Ks(), u = jd(Error(y(421))), nf(n, r, S, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Xd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Ca = ga(c.nextSibling), Ea = r, on = !0, ja = null, n !== null && (Kr[Xr++] = Jr, Kr[Xr++] = or, Kr[Xr++] = ui, Jr = n.id, or = n.overflow, ui = r), r = tf(r, u.children), r.flags |= 4096, r);
  }
  function ih(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Ll(n.return, r, l);
  }
  function rf(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function Vd(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (Nn(n, r, u.children, l), u = Ae.current, u & 2)
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
    if (Lt(Ae, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Ot(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), rf(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Ot(n) === null) {
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
  function Ys(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ln(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), No |= r.lanes, !(l & r.childLanes))
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
        Ly(r), su();
        break;
      case 5:
        jc(r);
        break;
      case 1:
        jn(r.type) && yo(r);
        break;
      case 4:
        Ad(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        Lt(cu, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Lt(Ae, Ae.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ah(n, r, l) : (Lt(Ae, Ae.current & 1), n = Ln(n, r, l), n !== null ? n.sibling : null);
        Lt(Ae, Ae.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return Vd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Lt(Ae, Ae.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ra(n, r, l);
    }
    return Ln(n, r, l);
  }
  var wi, Cu, Ru, Va;
  wi = function(n, r) {
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
  }, Cu = function() {
  }, Ru = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, Ul(Ri.current);
      var d = null;
      switch (l) {
        case "input":
          c = Sn(n, c), u = Sn(n, u), d = [];
          break;
        case "select":
          c = D({}, c, { value: void 0 }), u = D({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ca(n, c), u = ca(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Oc);
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
            B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (_.hasOwnProperty(B) ? d || (d = []) : (d = d || []).push(B, null));
      for (B in u) {
        var O = u[B];
        if (w = c != null ? c[B] : void 0, u.hasOwnProperty(B) && O !== w && (O != null || w != null))
          if (B === "style")
            if (w) {
              for (S in w)
                !w.hasOwnProperty(S) || O && O.hasOwnProperty(S) || (l || (l = {}), l[S] = "");
              for (S in O)
                O.hasOwnProperty(S) && w[S] !== O[S] && (l || (l = {}), l[S] = O[S]);
            } else
              l || (d || (d = []), d.push(
                B,
                l
              )), l = O;
          else
            B === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, w = w ? w.__html : void 0, O != null && w !== O && (d = d || []).push(B, O)) : B === "children" ? typeof O != "string" && typeof O != "number" || (d = d || []).push(B, "" + O) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (_.hasOwnProperty(B) ? (O != null && B === "onScroll" && Qt("scroll", n), d || w === O || (d = [])) : (d = d || []).push(B, O));
      }
      l && (d = d || []).push("style", l);
      var B = d;
      (r.updateQueue = B) && (r.flags |= 4);
    }
  }, Va = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function Tn(n, r) {
    if (!on)
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
        return jn(r.type) && Gr(), br(r), null;
      case 3:
        return u = r.stateNode, mu(), Le(et), Le(Gn), Ha(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Uc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (qd(ja), ja = null))), Cu(n, r), br(r), null;
      case 5:
        Pe(r);
        var c = Ul(As.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Ru(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(y(166));
            return br(r), null;
          }
          if (n = Ul(Ri.current), Uc(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[Aa] = r, u[Os] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Qt("cancel", u), Qt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Qt("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < qi.length; c++)
                  Qt(qi[c], u);
                break;
              case "source":
                Qt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Qt(
                  "error",
                  u
                ), Qt("load", u);
                break;
              case "details":
                Qt("toggle", u);
                break;
              case "input":
                rr(u, d), Qt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, Qt("invalid", u);
                break;
              case "textarea":
                fa(u, d), Qt("invalid", u);
            }
            Nt(l, d), c = null;
            for (var S in d)
              if (d.hasOwnProperty(S)) {
                var w = d[S];
                S === "children" ? typeof w == "string" ? u.textContent !== w && (d.suppressHydrationWarning !== !0 && bs(u.textContent, w, n), c = ["children", w]) : typeof w == "number" && u.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && bs(
                  u.textContent,
                  w,
                  n
                ), c = ["children", "" + w]) : _.hasOwnProperty(S) && w != null && S === "onScroll" && Qt("scroll", u);
              }
            switch (l) {
              case "input":
                nr(u), zn(u, d, !0);
                break;
              case "textarea":
                nr(u), da(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = Oc);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            S = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ar(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = S.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = S.createElement(l, { is: u.is }) : (n = S.createElement(l), l === "select" && (S = n, u.multiple ? S.multiple = !0 : u.size && (S.size = u.size))) : n = S.createElementNS(n, l), n[Aa] = r, n[Os] = u, wi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (S = _n(l, u), l) {
                case "dialog":
                  Qt("cancel", n), Qt("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Qt("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < qi.length; c++)
                    Qt(qi[c], n);
                  c = u;
                  break;
                case "source":
                  Qt("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Qt(
                    "error",
                    n
                  ), Qt("load", n), c = u;
                  break;
                case "details":
                  Qt("toggle", n), c = u;
                  break;
                case "input":
                  rr(n, u), c = Sn(n, u), Qt("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = D({}, u, { value: void 0 }), Qt("invalid", n);
                  break;
                case "textarea":
                  fa(n, u), c = ca(n, u), Qt("invalid", n);
                  break;
                default:
                  c = u;
              }
              Nt(l, c), w = c;
              for (d in w)
                if (w.hasOwnProperty(d)) {
                  var O = w[d];
                  d === "style" ? ot(n, O) : d === "dangerouslySetInnerHTML" ? (O = O ? O.__html : void 0, O != null && pa(n, O)) : d === "children" ? typeof O == "string" ? (l !== "textarea" || O !== "") && va(n, O) : typeof O == "number" && va(n, "" + O) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (_.hasOwnProperty(d) ? O != null && d === "onScroll" && Qt("scroll", n) : O != null && Ge(n, d, O, S));
                }
              switch (l) {
                case "input":
                  nr(n), zn(n, u, !1);
                  break;
                case "textarea":
                  nr(n), da(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + ft(u.value));
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
                  typeof c.onClick == "function" && (n.onclick = Oc);
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
            throw Error(y(166));
          if (l = Ul(As.current), Ul(Ri.current), Uc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Aa] = r, (d = u.nodeValue !== l) && (n = Ea, n !== null))
              switch (n.tag) {
                case 3:
                  bs(u.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && bs(u.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Aa] = r, r.stateNode = u;
        }
        return br(r), null;
      case 13:
        if (Le(Ae), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (on && Ca !== null && r.mode & 1 && !(r.flags & 128))
            Vv(), su(), r.flags |= 98560, d = !1;
          else if (d = Uc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(y(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(y(317));
              d[Aa] = r;
            } else
              su(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            br(r), d = !1;
          } else
            ja !== null && (qd(ja), ja = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Ae.current & 1 ? In === 0 && (In = 3) : Ks())), r.updateQueue !== null && (r.flags |= 4), br(r), null);
      case 4:
        return mu(), Cu(n, r), n === null && yi(r.stateNode.containerInfo), br(r), null;
      case 10:
        return kd(r.type._context), br(r), null;
      case 17:
        return jn(r.type) && Gr(), br(r), null;
      case 19:
        if (Le(Ae), d = r.memoizedState, d === null)
          return br(r), null;
        if (u = (r.flags & 128) !== 0, S = d.rendering, S === null)
          if (u)
            Tn(d, !1);
          else {
            if (In !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (S = Ot(n), S !== null) {
                  for (r.flags |= 128, Tn(d, !1), u = S.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; )
                    d = l, n = u, d.flags &= 14680066, S = d.alternate, S === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = S.childLanes, d.lanes = S.lanes, d.child = S.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = S.memoizedProps, d.memoizedState = S.memoizedState, d.updateQueue = S.updateQueue, d.type = S.type, n = S.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Lt(Ae, Ae.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Zt() > Lu && (r.flags |= 128, u = !0, Tn(d, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = Ot(S), n !== null) {
              if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Tn(d, !0), d.tail === null && d.tailMode === "hidden" && !S.alternate && !on)
                return br(r), null;
            } else
              2 * Zt() - d.renderingStartTime > Lu && l !== 1073741824 && (r.flags |= 128, u = !0, Tn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (S.sibling = r.child, r.child = S) : (l = d.last, l !== null ? l.sibling = S : r.child = S, d.last = S);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Zt(), r.sibling = null, l = Ae.current, Lt(Ae, u ? l & 1 | 2 : l & 1), r) : (br(r), null);
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
  function Ay(n, r) {
    switch (Mc(r), r.tag) {
      case 1:
        return jn(r.type) && Gr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return mu(), Le(et), Le(Gn), Ha(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Pe(r), null;
      case 13:
        if (Le(Ae), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(y(340));
          su();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Le(Ae), null;
      case 4:
        return mu(), null;
      case 10:
        return kd(r.type._context), null;
      case 22:
      case 23:
        return hf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Tu = !1, ur = !1, af = typeof WeakSet == "function" ? WeakSet : Set, Te = null;
  function wu(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          bn(n, r, u);
        }
      else
        l.current = null;
  }
  function Bd(n, r, l) {
    try {
      l();
    } catch (u) {
      bn(n, r, u);
    }
  }
  var lf = !1;
  function Uy(n, r) {
    if (Sd = Zo, n = _v(), Ss(n)) {
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
            var S = 0, w = -1, O = -1, B = 0, ie = 0, le = n, ne = null;
            t:
              for (; ; ) {
                for (var ge; le !== l || c !== 0 && le.nodeType !== 3 || (w = S + c), le !== d || u !== 0 && le.nodeType !== 3 || (O = S + u), le.nodeType === 3 && (S += le.nodeValue.length), (ge = le.firstChild) !== null; )
                  ne = le, le = ge;
                for (; ; ) {
                  if (le === n)
                    break t;
                  if (ne === l && ++B === c && (w = S), ne === d && ++ie === u && (O = S), (ge = le.nextSibling) !== null)
                    break;
                  le = ne, ne = le.parentNode;
                }
                le = ge;
              }
            l = w === -1 || O === -1 ? null : { start: w, end: O };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Ed = { focusedElem: n, selectionRange: l }, Zo = !1, Te = r; Te !== null; )
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
                    var ke = xe.memoizedProps, Mn = xe.memoizedState, U = r.stateNode, L = U.getSnapshotBeforeUpdate(r.elementType === r.type ? ke : Zr(r.type, ke), Mn);
                    U.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var j = r.stateNode.containerInfo;
                  j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
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
            bn(r, r.return, se);
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
    r !== null && (n.alternate = null, lh(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Aa], delete r[Os], delete r[wd], delete r[xy], delete r[_y])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function $d(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function oh(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || $d(n.return))
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
  function Ws(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Oc));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Ws(n, r, l), n = n.sibling; n !== null; )
        Ws(n, r, l), n = n.sibling;
  }
  function xu(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (xu(n, r, l), n = n.sibling; n !== null; )
        xu(n, r, l), n = n.sibling;
  }
  var fn = null, Kn = !1;
  function Nr(n, r, l) {
    for (l = l.child; l !== null; )
      _u(n, r, l), l = l.sibling;
  }
  function _u(n, r, l) {
    if (Yr && typeof Yr.onCommitFiberUnmount == "function")
      try {
        Yr.onCommitFiberUnmount(gl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ur || wu(l, r);
      case 6:
        var u = fn, c = Kn;
        fn = null, Nr(n, r, l), fn = u, Kn = c, fn !== null && (Kn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : fn.removeChild(l.stateNode));
        break;
      case 18:
        fn !== null && (Kn ? (n = fn, l = l.stateNode, n.nodeType === 8 ? Td(n.parentNode, l) : n.nodeType === 1 && Td(n, l), Ma(n)) : Td(fn, l.stateNode));
        break;
      case 4:
        u = fn, c = Kn, fn = l.stateNode.containerInfo, Kn = !0, Nr(n, r, l), fn = u, Kn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ur && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, S = d.destroy;
            d = d.tag, S !== void 0 && (d & 2 || d & 4) && Bd(l, r, S), c = c.next;
          } while (c !== u);
        }
        Nr(n, r, l);
        break;
      case 1:
        if (!ur && (wu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
          } catch (w) {
            bn(l, r, w);
          }
        Nr(n, r, l);
        break;
      case 21:
        Nr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ur = (u = ur) || l.memoizedState !== null, Nr(n, r, l), ur = u) : Nr(n, r, l);
        break;
      default:
        Nr(n, r, l);
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
  function Xn(n, r) {
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
                  fn = w.stateNode, Kn = !1;
                  break e;
                case 3:
                  fn = w.stateNode.containerInfo, Kn = !0;
                  break e;
                case 4:
                  fn = w.stateNode.containerInfo, Kn = !0;
                  break e;
              }
              w = w.return;
            }
          if (fn === null)
            throw Error(y(160));
          _u(d, S, c), fn = null, Kn = !1;
          var O = c.alternate;
          O !== null && (O.return = null), c.return = null;
        } catch (B) {
          bn(c, r, B);
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
        if (Xn(r, n), bi(n), u & 4) {
          try {
            bu(3, n, n.return), of(3, n);
          } catch (ke) {
            bn(n, n.return, ke);
          }
          try {
            bu(5, n, n.return);
          } catch (ke) {
            bn(n, n.return, ke);
          }
        }
        break;
      case 1:
        Xn(r, n), bi(n), u & 512 && l !== null && wu(l, l.return);
        break;
      case 5:
        if (Xn(r, n), bi(n), u & 512 && l !== null && wu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            va(c, "");
          } catch (ke) {
            bn(n, n.return, ke);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, S = l !== null ? l.memoizedProps : d, w = n.type, O = n.updateQueue;
          if (n.updateQueue = null, O !== null)
            try {
              w === "input" && d.type === "radio" && d.name != null && Vn(c, d), _n(w, S);
              var B = _n(w, d);
              for (S = 0; S < O.length; S += 2) {
                var ie = O[S], le = O[S + 1];
                ie === "style" ? ot(c, le) : ie === "dangerouslySetInnerHTML" ? pa(c, le) : ie === "children" ? va(c, le) : Ge(c, ie, le, B);
              }
              switch (w) {
                case "input":
                  Un(c, d);
                  break;
                case "textarea":
                  Er(c, d);
                  break;
                case "select":
                  var ne = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ge = d.value;
                  ge != null ? Bn(c, !!d.multiple, ge, !1) : ne !== !!d.multiple && (d.defaultValue != null ? Bn(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Bn(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Os] = d;
            } catch (ke) {
              bn(n, n.return, ke);
            }
        }
        break;
      case 6:
        if (Xn(r, n), bi(n), u & 4) {
          if (n.stateNode === null)
            throw Error(y(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ke) {
            bn(n, n.return, ke);
          }
        }
        break;
      case 3:
        if (Xn(r, n), bi(n), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ma(r.containerInfo);
          } catch (ke) {
            bn(n, n.return, ke);
          }
        break;
      case 4:
        Xn(r, n), bi(n);
        break;
      case 13:
        Xn(r, n), bi(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (cf = Zt())), u & 4 && Du(n);
        break;
      case 22:
        if (ie = l !== null && l.memoizedState !== null, n.mode & 1 ? (ur = (B = ur) || ie, Xn(r, n), ur = B) : Xn(r, n), bi(n), u & 8192) {
          if (B = n.memoizedState !== null, (n.stateNode.isHidden = B) && !ie && n.mode & 1)
            for (Te = n, ie = n.child; ie !== null; ) {
              for (le = Te = ie; Te !== null; ) {
                switch (ne = Te, ge = ne.child, ne.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    bu(4, ne, ne.return);
                    break;
                  case 1:
                    wu(ne, ne.return);
                    var xe = ne.stateNode;
                    if (typeof xe.componentWillUnmount == "function") {
                      u = ne, l = ne.return;
                      try {
                        r = u, xe.props = r.memoizedProps, xe.state = r.memoizedState, xe.componentWillUnmount();
                      } catch (ke) {
                        bn(u, l, ke);
                      }
                    }
                    break;
                  case 5:
                    wu(ne, ne.return);
                    break;
                  case 22:
                    if (ne.memoizedState !== null) {
                      sh(le);
                      continue;
                    }
                }
                ge !== null ? (ge.return = ne, Te = ge) : sh(le);
              }
              ie = ie.sibling;
            }
          e:
            for (ie = null, le = n; ; ) {
              if (le.tag === 5) {
                if (ie === null) {
                  ie = le;
                  try {
                    c = le.stateNode, B ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = le.stateNode, O = le.memoizedProps.style, S = O != null && O.hasOwnProperty("display") ? O.display : null, w.style.display = ze("display", S));
                  } catch (ke) {
                    bn(n, n.return, ke);
                  }
                }
              } else if (le.tag === 6) {
                if (ie === null)
                  try {
                    le.stateNode.nodeValue = B ? "" : le.memoizedProps;
                  } catch (ke) {
                    bn(n, n.return, ke);
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
        Xn(r, n), bi(n), u & 4 && Du(n);
        break;
      case 21:
        break;
      default:
        Xn(
          r,
          n
        ), bi(n);
    }
  }
  function bi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if ($d(l)) {
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
            Ws(n, w, S);
            break;
          default:
            throw Error(y(161));
        }
      } catch (O) {
        bn(n, n.return, O);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function zy(n, r, l) {
    Te = n, Id(n);
  }
  function Id(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Te !== null; ) {
      var c = Te, d = c.child;
      if (c.tag === 22 && u) {
        var S = c.memoizedState !== null || Tu;
        if (!S) {
          var w = c.alternate, O = w !== null && w.memoizedState !== null || ur;
          w = Tu;
          var B = ur;
          if (Tu = S, (ur = O) && !B)
            for (Te = c; Te !== null; )
              S = Te, O = S.child, S.tag === 22 && S.memoizedState !== null ? Yd(c) : O !== null ? (O.return = S, Te = O) : Yd(c);
          for (; d !== null; )
            Te = d, Id(d), d = d.sibling;
          Te = c, Tu = w, ur = B;
        }
        Ou(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, Te = d) : Ou(n);
    }
  }
  function Ou(n) {
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
                ur || of(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !ur)
                  if (l === null)
                    u.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : Zr(r.type, l.memoizedProps);
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
                  var O = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      O.autoFocus && l.focus();
                      break;
                    case "img":
                      O.src && (l.src = O.src);
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
                    var ie = B.memoizedState;
                    if (ie !== null) {
                      var le = ie.dehydrated;
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
          ur || r.flags & 512 && uf(r);
        } catch (ne) {
          bn(r, r.return, ne);
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
  function Yd(n) {
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
            } catch (O) {
              bn(r, l, O);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (O) {
                bn(r, c, O);
              }
            }
            var d = r.return;
            try {
              uf(r);
            } catch (O) {
              bn(r, d, O);
            }
            break;
          case 5:
            var S = r.return;
            try {
              uf(r);
            } catch (O) {
              bn(r, S, O);
            }
        }
      } catch (O) {
        bn(r, r.return, O);
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
  var Fy = Math.ceil, ko = Be.ReactCurrentDispatcher, sf = Be.ReactCurrentOwner, Ba = Be.ReactCurrentBatchConfig, mt = 0, wn = null, un = null, $n = 0, aa = 0, ku = qt(0), In = 0, Qs = null, No = 0, Nu = 0, Wd = 0, Pl = null, xr = null, cf = 0, Lu = 1 / 0, nl = null, ff = !1, Qd = null, $a = null, Mu = !1, Ia = null, df = 0, qs = 0, pf = null, Gs = -1, Lo = 0;
  function Jn() {
    return mt & 6 ? Zt() : Gs !== -1 ? Gs : Gs = Zt();
  }
  function rl(n) {
    return n.mode & 1 ? mt & 2 && $n !== 0 ? $n & -$n : Dy.transition !== null ? (Lo === 0 && (Lo = oo()), Lo) : (n = gt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : fs(n.type)), n) : 1;
  }
  function mn(n, r, l, u) {
    if (50 < qs)
      throw qs = 0, pf = null, Error(y(185));
    El(n, l, u), (!(mt & 2) || n !== wn) && (n === wn && (!(mt & 2) && (Nu |= l), In === 4 && xi(n, $n)), Yn(n, u), l === 1 && mt === 0 && !(r.mode & 1) && (Lu = Zt() + 500, Ol && Ei()));
  }
  function Yn(n, r) {
    var l = n.callbackNode;
    Sl(n, r);
    var u = vi(n, n === wn ? $n : 0);
    if (u === 0)
      l !== null && Jt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && Jt(l), r === 1)
        n.tag === 0 ? Pv(Au.bind(null, n)) : Nc(Au.bind(null, n)), jv(function() {
          !(mt & 6) && Ei();
        }), l = null;
      else {
        switch (us(u)) {
          case 1:
            l = ts;
            break;
          case 4:
            l = pi;
            break;
          case 16:
            l = ut;
            break;
          case 536870912:
            l = Hi;
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
    if (Gs = -1, Lo = 0, mt & 6)
      throw Error(y(327));
    var l = n.callbackNode;
    if (Uu() && n.callbackNode !== l)
      return null;
    var u = vi(n, n === wn ? $n : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = mf(n, u);
    else {
      r = u;
      var c = mt;
      mt |= 2;
      var d = fh();
      (wn !== n || $n !== r) && (nl = null, Lu = Zt() + 500, Ao(n, r));
      do
        try {
          Hy();
          break;
        } catch (w) {
          ch(n, w);
        }
      while (!0);
      Od(), ko.current = d, mt = c, un !== null ? r = 0 : (wn = null, $n = 0, r = In);
    }
    if (r !== 0) {
      if (r === 2 && (c = hi(n), c !== 0 && (u = c, r = Mo(n, c))), r === 1)
        throw l = Qs, Ao(n, 0), xi(n, u), Yn(n, Zt()), l;
      if (r === 6)
        xi(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !Gd(c) && (r = mf(n, u), r === 2 && (d = hi(n), d !== 0 && (u = d, r = Mo(n, d))), r === 1))
          throw l = Qs, Ao(n, 0), xi(n, u), Yn(n, Zt()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(y(345));
          case 2:
            Vl(n, xr, nl);
            break;
          case 3:
            if (xi(n, u), (u & 130023424) === u && (r = cf + 500 - Zt(), 10 < r)) {
              if (vi(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                Jn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = xs(Vl.bind(null, n, xr, nl), r);
              break;
            }
            Vl(n, xr, nl);
            break;
          case 4:
            if (xi(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var S = 31 - Or(u);
              d = 1 << S, S = r[S], S > c && (c = S), u &= ~d;
            }
            if (u = c, u = Zt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Fy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = xs(Vl.bind(null, n, xr, nl), u);
              break;
            }
            Vl(n, xr, nl);
            break;
          case 5:
            Vl(n, xr, nl);
            break;
          default:
            throw Error(y(329));
        }
      }
    }
    return Yn(n, Zt()), n.callbackNode === l ? vf.bind(null, n) : null;
  }
  function Mo(n, r) {
    var l = Pl;
    return n.current.memoizedState.isDehydrated && (Ao(n, r).flags |= 256), n = mf(n, r), n !== 2 && (r = xr, xr = l, r !== null && qd(r)), n;
  }
  function qd(n) {
    xr === null ? xr = n : xr.push.apply(xr, n);
  }
  function Gd(n) {
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
  function xi(n, r) {
    for (r &= ~Wd, r &= ~Nu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Au(n) {
    if (mt & 6)
      throw Error(y(327));
    Uu();
    var r = vi(n, 0);
    if (!(r & 1))
      return Yn(n, Zt()), null;
    var l = mf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = hi(n);
      u !== 0 && (r = u, l = Mo(n, u));
    }
    if (l === 1)
      throw l = Qs, Ao(n, 0), xi(n, r), Yn(n, Zt()), l;
    if (l === 6)
      throw Error(y(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Vl(n, xr, nl), Yn(n, Zt()), null;
  }
  function Kd(n, r) {
    var l = mt;
    mt |= 1;
    try {
      return n(r);
    } finally {
      mt = l, mt === 0 && (Lu = Zt() + 500, Ol && Ei());
    }
  }
  function _i(n) {
    Ia !== null && Ia.tag === 0 && !(mt & 6) && Uu();
    var r = mt;
    mt |= 1;
    var l = Ba.transition, u = gt;
    try {
      if (Ba.transition = null, gt = 1, n)
        return n();
    } finally {
      gt = u, Ba.transition = l, mt = r, !(mt & 6) && Ei();
    }
  }
  function hf() {
    aa = ku.current, Le(ku);
  }
  function Ao(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, _s(l)), un !== null)
      for (l = un.return; l !== null; ) {
        var u = l;
        switch (Mc(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && Gr();
            break;
          case 3:
            mu(), Le(et), Le(Gn), Ha();
            break;
          case 5:
            Pe(u);
            break;
          case 4:
            mu();
            break;
          case 13:
            Le(Ae);
            break;
          case 19:
            Le(Ae);
            break;
          case 10:
            kd(u.type._context);
            break;
          case 22:
          case 23:
            hf();
        }
        l = l.return;
      }
    if (wn = n, un = n = Bl(n.current, null), $n = aa = r, In = 0, Qs = null, Wd = Nu = No = 0, xr = Pl = null, wr !== null) {
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
      var l = un;
      try {
        if (Od(), Us.current = Jc, kn) {
          for (var u = hn.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          kn = !1;
        }
        if (Co = 0, G = On = hn = null, $e = !1, Ti = 0, sf.current = null, l === null || l.return === null) {
          In = 1, Qs = r, un = null;
          break;
        }
        e: {
          var d = n, S = l.return, w = l, O = r;
          if (r = $n, w.flags |= 32768, O !== null && typeof O == "object" && typeof O.then == "function") {
            var B = O, ie = w, le = ie.tag;
            if (!(ie.mode & 1) && (le === 0 || le === 11 || le === 15)) {
              var ne = ie.alternate;
              ne ? (ie.updateQueue = ne.updateQueue, ie.memoizedState = ne.memoizedState, ie.lanes = ne.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var ge = th(S);
            if (ge !== null) {
              ge.flags &= -257, Hd(ge, S, w, d, r), ge.mode & 1 && Bs(d, B, r), r = ge, O = B;
              var xe = r.updateQueue;
              if (xe === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(O), r.updateQueue = ke;
              } else
                xe.add(O);
              break e;
            } else {
              if (!(r & 1)) {
                Bs(d, B, r), Ks();
                break e;
              }
              O = Error(y(426));
            }
          } else if (on && w.mode & 1) {
            var Mn = th(S);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), Hd(Mn, S, w, d, r), Hn(jl(O, w));
              break e;
            }
          }
          d = O = jl(O, w), In !== 4 && (In = 2), Pl === null ? Pl = [d] : Pl.push(d), d = S;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var U = Zv(d, O, r);
                Iv(d, U);
                break e;
              case 1:
                w = O;
                var L = d.type, j = d.stateNode;
                if (!(d.flags & 128) && (typeof L.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && ($a === null || !$a.has(j)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var se = eh(d, w, r);
                  Iv(d, se);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ph(l);
      } catch (Me) {
        r = Me, un === l && l !== null && (un = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fh() {
    var n = ko.current;
    return ko.current = Jc, n === null ? Jc : n;
  }
  function Ks() {
    (In === 0 || In === 3 || In === 2) && (In = 4), wn === null || !(No & 268435455) && !(Nu & 268435455) || xi(wn, $n);
  }
  function mf(n, r) {
    var l = mt;
    mt |= 2;
    var u = fh();
    (wn !== n || $n !== r) && (nl = null, Ao(n, r));
    do
      try {
        jy();
        break;
      } catch (c) {
        ch(n, c);
      }
    while (!0);
    if (Od(), mt = l, ko.current = u, un !== null)
      throw Error(y(261));
    return wn = null, $n = 0, In;
  }
  function jy() {
    for (; un !== null; )
      dh(un);
  }
  function Hy() {
    for (; un !== null && !Rr(); )
      dh(un);
  }
  function dh(n) {
    var r = mh(n.alternate, n, aa);
    n.memoizedProps = n.pendingProps, r === null ? ph(n) : un = r, sf.current = null;
  }
  function ph(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Ay(l, r), l !== null) {
          l.flags &= 32767, un = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          In = 6, un = null;
          return;
        }
      } else if (l = My(l, r, aa), l !== null) {
        un = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        un = r;
        return;
      }
      un = r = n;
    } while (r !== null);
    In === 0 && (In = 5);
  }
  function Vl(n, r, l) {
    var u = gt, c = Ba.transition;
    try {
      Ba.transition = null, gt = 1, Py(n, r, l, u);
    } finally {
      Ba.transition = c, gt = u;
    }
    return null;
  }
  function Py(n, r, l, u) {
    do
      Uu();
    while (Ia !== null);
    if (mt & 6)
      throw Error(y(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(y(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (ls(n, d), n === wn && (un = wn = null, $n = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Mu || (Mu = !0, yh(ut, function() {
      return Uu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ba.transition, Ba.transition = null;
      var S = gt;
      gt = 1;
      var w = mt;
      mt |= 4, sf.current = null, Uy(n, l), uh(l, n), po(Ed), Zo = !!Sd, Ed = Sd = null, n.current = l, zy(l), di(), mt = w, gt = S, Ba.transition = d;
    } else
      n.current = l;
    if (Mu && (Mu = !1, Ia = n, df = c), d = n.pendingLanes, d === 0 && ($a = null), ns(l.stateNode), Yn(n, Zt()), r !== null)
      for (u = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (ff)
      throw ff = !1, n = Qd, Qd = null, n;
    return df & 1 && n.tag !== 0 && Uu(), d = n.pendingLanes, d & 1 ? n === pf ? qs++ : (qs = 0, pf = n) : qs = 0, Ei(), null;
  }
  function Uu() {
    if (Ia !== null) {
      var n = us(df), r = Ba.transition, l = gt;
      try {
        if (Ba.transition = null, gt = 16 > n ? 16 : n, Ia === null)
          var u = !1;
        else {
          if (n = Ia, Ia = null, df = 0, mt & 6)
            throw Error(y(331));
          var c = mt;
          for (mt |= 4, Te = n.current; Te !== null; ) {
            var d = Te, S = d.child;
            if (Te.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var O = 0; O < w.length; O++) {
                  var B = w[O];
                  for (Te = B; Te !== null; ) {
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
                        var ne = ie.sibling, ge = ie.return;
                        if (lh(ie), ie === B) {
                          Te = null;
                          break;
                        }
                        if (ne !== null) {
                          ne.return = ge, Te = ne;
                          break;
                        }
                        Te = ge;
                      }
                  }
                }
                var xe = d.alternate;
                if (xe !== null) {
                  var ke = xe.child;
                  if (ke !== null) {
                    xe.child = null;
                    do {
                      var Mn = ke.sibling;
                      ke.sibling = null, ke = Mn;
                    } while (ke !== null);
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
                  var U = d.sibling;
                  if (U !== null) {
                    U.return = d.return, Te = U;
                    break e;
                  }
                  Te = d.return;
                }
          }
          var L = n.current;
          for (Te = L; Te !== null; ) {
            S = Te;
            var j = S.child;
            if (S.subtreeFlags & 2064 && j !== null)
              j.return = S, Te = j;
            else
              e:
                for (S = L; Te !== null; ) {
                  if (w = Te, w.flags & 2048)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          of(9, w);
                      }
                    } catch (Me) {
                      bn(w, w.return, Me);
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
          if (mt = c, Ei(), Yr && typeof Yr.onPostCommitFiberRoot == "function")
            try {
              Yr.onPostCommitFiberRoot(gl, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        gt = l, Ba.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = jl(l, r), r = Zv(n, r, 1), n = Al(n, r, 1), r = Jn(), n !== null && (El(n, 1, r), Yn(n, r));
  }
  function bn(n, r, l) {
    if (n.tag === 3)
      vh(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          vh(r, n, l);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && ($a === null || !$a.has(u))) {
            n = jl(l, n), n = eh(r, n, 1), r = Al(r, n, 1), n = Jn(), r !== null && (El(r, 1, n), Yn(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Vy(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Jn(), n.pingedLanes |= n.suspendedLanes & l, wn === n && ($n & l) === l && (In === 4 || In === 3 && ($n & 130023424) === $n && 500 > Zt() - cf ? Ao(n, 0) : Wd |= l), Yn(n, r);
  }
  function hh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Go, Go <<= 1, !(Go & 130023424) && (Go = 4194304)) : r = 1);
    var l = Jn();
    n = Zi(n, r), n !== null && (El(n, r, l), Yn(n, l));
  }
  function Xd(n) {
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
      na = !1, on && r.flags & 1048576 && Nl(r, go, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ys(n, r), n = r.pendingProps;
        var c = Sa(r, Gn.current);
        Dn(r, l), c = Ro(null, r, u, n, c, l);
        var d = zl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(u) ? (d = !0, yo(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Nd(r), c.updater = Fc, r.stateNode = c, c._reactInternals = r, Md(r, u, n, l), r = ef(null, r, u, !0, d, l)) : (r.tag = 0, on && d && Lc(r), Nn(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ys(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = $y(u), n = Zr(u, n), c) {
            case 0:
              r = rt(null, r, u, n, l);
              break e;
            case 1:
              r = $s(null, r, u, n, l);
              break e;
            case 11:
              r = Eu(null, r, u, n, l);
              break e;
            case 14:
              r = Hl(null, r, u, Zr(u.type, n), l);
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
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Zr(u, c), rt(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Zr(u, c), $s(n, r, u, c, l);
      case 3:
        e: {
          if (Ly(r), n === null)
            throw Error(y(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, $v(n, r), Ns(r, u, null, l);
          var S = r.memoizedState;
          if (u = S.element, d.isDehydrated)
            if (d = { element: u, isDehydrated: !1, cache: S.cache, pendingSuspenseBoundaries: S.pendingSuspenseBoundaries, transitions: S.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = jl(Error(y(423)), r), r = rh(n, r, u, l, c);
              break e;
            } else if (u !== c) {
              c = jl(Error(y(424)), r), r = rh(n, r, u, l, c);
              break e;
            } else
              for (Ca = ga(r.stateNode.containerInfo.firstChild), Ea = r, on = !0, ja = null, l = Kv(r, null, u, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (su(), u === c) {
              r = Ln(n, r, l);
              break e;
            }
            Nn(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return jc(r), n === null && Ac(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, S = c.children, mo(u, c) ? S = null : d !== null && mo(u, d) && (r.flags |= 32), Do(n, r), Nn(n, r, S, l), r.child;
      case 6:
        return n === null && Ac(r), null;
      case 13:
        return ah(n, r, l);
      case 4:
        return Ad(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = vu(r, null, u, l) : Nn(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Zr(u, c), Eu(n, r, u, c, l);
      case 7:
        return Nn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, S = c.value, Lt(cu, u._currentValue), u._currentValue = S, d !== null)
            if (ii(d.value, S)) {
              if (d.children === c.children && !et.current) {
                r = Ln(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  S = d.child;
                  for (var O = w.firstContext; O !== null; ) {
                    if (O.context === u) {
                      if (d.tag === 1) {
                        O = en(-1, l & -l), O.tag = 2;
                        var B = d.updateQueue;
                        if (B !== null) {
                          B = B.shared;
                          var ie = B.pending;
                          ie === null ? O.next = O : (O.next = ie.next, ie.next = O), B.pending = O;
                        }
                      }
                      d.lanes |= l, O = d.alternate, O !== null && (O.lanes |= l), Ll(
                        d.return,
                        l,
                        r
                      ), w.lanes |= l;
                      break;
                    }
                    O = O.next;
                  }
                } else if (d.tag === 10)
                  S = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (S = d.return, S === null)
                    throw Error(y(341));
                  S.lanes |= l, w = S.alternate, w !== null && (w.lanes |= l), Ll(S, l, r), S = d.sibling;
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
        return c = r.type, u = r.pendingProps.children, Dn(r, l), c = fe(c), u = u(c), r.flags |= 1, Nn(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = Zr(u, r.pendingProps), c = Zr(u.type, c), Hl(n, r, u, c, l);
      case 15:
        return Zc(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : Zr(u, c), Ys(n, r), r.tag = 1, jn(u) ? (n = !0, yo(r)) : n = !1, Dn(r, l), Wv(r, u, c), Md(r, u, c, l), ef(null, r, u, !0, n, l);
      case 19:
        return Vd(n, r, l);
      case 22:
        return ra(n, r, l);
    }
    throw Error(y(156, r.tag));
  };
  function yh(n, r) {
    return Xt(n, r);
  }
  function gh(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, l, u) {
    return new gh(n, r, l, u);
  }
  function Jd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function $y(n) {
    if (typeof n == "function")
      return Jd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Et)
        return 11;
      if (n === at)
        return 14;
    }
    return 2;
  }
  function Bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ya(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function yf(n, r, l, u, c, d) {
    var S = 2;
    if (u = n, typeof n == "function")
      Jd(n) && (S = 1);
    else if (typeof n == "string")
      S = 5;
    else
      e:
        switch (n) {
          case pt:
            return Uo(l.children, c, d, r);
          case Je:
            S = 8, c |= 8;
            break;
          case xn:
            return n = Ya(12, l, r, c | 2), n.elementType = xn, n.lanes = d, n;
          case nn:
            return n = Ya(13, l, r, c), n.elementType = nn, n.lanes = d, n;
          case Ke:
            return n = Ya(19, l, r, c), n.elementType = Ke, n.lanes = d, n;
          case it:
            return gf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case gn:
                  S = 10;
                  break e;
                case Gt:
                  S = 9;
                  break e;
                case Et:
                  S = 11;
                  break e;
                case at:
                  S = 14;
                  break e;
                case bt:
                  S = 16, u = null;
                  break e;
              }
            throw Error(y(130, n == null ? n : typeof n, ""));
        }
    return r = Ya(S, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function Uo(n, r, l, u) {
    return n = Ya(7, n, u, r), n.lanes = l, n;
  }
  function gf(n, r, l, u) {
    return n = Ya(22, n, u, r), n.elementType = it, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Sf(n, r, l) {
    return n = Ya(6, n, null, r), n.lanes = l, n;
  }
  function Xs(n, r, l) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Js(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = uo(0), this.expirationTimes = uo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = uo(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Zd(n, r, l, u, c, d, S, w, O) {
    return n = new Js(n, r, l, w, O), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ya(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Nd(d), n;
  }
  function Sh(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ne, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n)
      return Ua;
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
  function tp(n, r, l, u, c, d, S, w, O) {
    return n = Zd(l, u, !0, n, c, d, S, w, O), n.context = ep(null), l = n.current, u = Jn(), c = rl(l), d = en(u, c), d.callback = r ?? null, Al(l, d, c), n.current.lanes = c, El(n, c, u), Yn(n, u), n;
  }
  function Ef(n, r, l, u) {
    var c = r.current, d = Jn(), S = rl(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = en(d, S), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Al(c, r, S), n !== null && (mn(n, c, S, d), zc(n, c, S)), S;
  }
  function Zs(n) {
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
  function Iy() {
    return null;
  }
  var rp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Cf(n) {
    this._internalRoot = n;
  }
  ec.prototype.render = Cf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(y(409));
    Ef(n, r, null, null);
  }, ec.prototype.unmount = Cf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      _i(function() {
        Ef(null, n, null, null);
      }), r[li] = null;
    }
  };
  function ec(n) {
    this._internalRoot = n;
  }
  ec.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = xt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < an.length && r !== 0 && r < an[l].priority; l++)
        ;
      an.splice(l, 0, n), l === 0 && ri(n);
    }
  };
  function $l(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Rf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ch() {
  }
  function Yy(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var B = Zs(S);
          d.call(B);
        };
      }
      var S = tp(r, u, n, 0, null, !1, !1, "", Ch);
      return n._reactRootContainer = S, n[li] = S.current, yi(n.nodeType === 8 ? n.parentNode : n), _i(), S;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof u == "function") {
      var w = u;
      u = function() {
        var B = Zs(O);
        w.call(B);
      };
    }
    var O = Zd(n, 0, !1, null, null, !1, !1, "", Ch);
    return n._reactRootContainer = O, n[li] = O.current, yi(n.nodeType === 8 ? n.parentNode : n), _i(function() {
      Ef(r, O, l, u);
    }), O;
  }
  function Tf(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var S = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var O = Zs(S);
          w.call(O);
        };
      }
      Ef(r, S, n, c);
    } else
      S = Yy(l, r, n, c, u);
    return Zs(S);
  }
  Ko = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Pi(r.pendingLanes);
          l !== 0 && (os(r, l | 1), Yn(r, Zt()), !(mt & 6) && (Lu = Zt() + 500, Ei()));
        }
        break;
      case 13:
        _i(function() {
          var u = Zi(n, 1);
          if (u !== null) {
            var c = Jn();
            mn(u, n, 1, c);
          }
        }), np(n, 1);
    }
  }, Cl = function(n) {
    if (n.tag === 13) {
      var r = Zi(n, 134217728);
      if (r !== null) {
        var l = Jn();
        mn(r, n, 134217728, l);
      }
      np(n, 134217728);
    }
  }, ss = function(n) {
    if (n.tag === 13) {
      var r = rl(n), l = Zi(n, r);
      if (l !== null) {
        var u = Jn();
        mn(l, n, r, u);
      }
      np(n, r);
    }
  }, xt = function() {
    return gt;
  }, Xo = function(n, r) {
    var l = gt;
    try {
      return gt = n, r();
    } finally {
      gt = l;
    }
  }, Vt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Un(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = kc(u);
              if (!c)
                throw Error(y(90));
              Vr(u), Un(u, c);
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
  }, ml = Kd, ro = _i;
  var Wy = { usingClientEntryPoint: !1, Events: [gi, uu, kc, Za, Oa, Kd] }, tc = { findFiberByHostInstance: Xi, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Rh = { bundleType: tc.bundleType, version: tc.version, rendererPackageName: tc.rendererPackageName, rendererConfig: tc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = je(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: tc.findFiberByHostInstance || Iy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wf.isDisabled && wf.supportsFiber)
      try {
        gl = wf.inject(Rh), Yr = wf;
      } catch {
      }
  }
  return Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wy, Ja.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!$l(r))
      throw Error(y(200));
    return Sh(n, r, null, l);
  }, Ja.createRoot = function(n, r) {
    if (!$l(n))
      throw Error(y(299));
    var l = !1, u = "", c = rp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Zd(n, 1, !1, null, null, l, !1, u, c), n[li] = r.current, yi(n.nodeType === 8 ? n.parentNode : n), new Cf(r);
  }, Ja.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(y(188)) : (n = Object.keys(n).join(","), Error(y(268, n)));
    return n = je(r), n = n === null ? null : n.stateNode, n;
  }, Ja.flushSync = function(n) {
    return _i(n);
  }, Ja.hydrate = function(n, r, l) {
    if (!Rf(r))
      throw Error(y(200));
    return Tf(null, n, r, !0, l);
  }, Ja.hydrateRoot = function(n, r, l) {
    if (!$l(n))
      throw Error(y(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", S = rp;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (S = l.onRecoverableError)), r = tp(r, null, n, 1, l ?? null, c, !1, d, S), n[li] = r.current, yi(n), u)
      for (n = 0; n < u.length; n++)
        l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new ec(r);
  }, Ja.render = function(n, r, l) {
    if (!Rf(r))
      throw Error(y(200));
    return Tf(null, n, r, !1, l);
  }, Ja.unmountComponentAtNode = function(n) {
    if (!Rf(n))
      throw Error(y(40));
    return n._reactRootContainer ? (_i(function() {
      Tf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[li] = null;
      });
    }), !0) : !1;
  }, Ja.unstable_batchedUpdates = Kd, Ja.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Rf(l))
      throw Error(y(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(y(38));
    return Tf(n, r, l, !1, u);
  }, Ja.version = "18.2.0-next-9e3b772b8-20220608", Ja;
}
var uT = {};
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (uT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (p) {
      console.error(p);
    }
  }
}
uT.NODE_ENV === "production" ? (sT(), QS.exports = NO()) : QS.exports = kO();
var LO = QS.exports, MO = {}, rv = LO;
if (MO.NODE_ENV === "production")
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
const AO = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='512pt'%20height='512pt'%20version='1.1'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m512%20179.3c0%2055.102-26.008%20104.11-66.41%20135.45-28.969%2022.477-151%20107.22-190.54%20107.22l8.6211-71.371h-92.371c-94.645%200-171.3-76.695-171.3-171.3v-7.9961c0-94.625%2076.656-171.3%20171.3-171.3h169.41c94.594%200%20171.29%2076.676%20171.29%20171.3zm-384.48-28.574c-15.625%200-28.273%2012.656-28.273%2028.277%200%2015.605%2012.645%2028.297%2028.273%2028.297%2015.609%200%2028.266-12.691%2028.266-28.297%200.007813-15.621-12.648-28.277-28.266-28.277zm128.48%200c-15.625%200-28.273%2012.656-28.273%2028.277%200%2015.605%2012.645%2028.297%2028.273%2028.297%2015.617%200%2028.277-12.691%2028.277-28.297-0.011719-15.621-12.66-28.277-28.277-28.277zm128.48%200c-15.641%200-28.266%2012.656-28.266%2028.277%200%2015.605%2012.633%2028.297%2028.266%2028.297%2015.617%200%2028.266-12.691%2028.266-28.297-0.003907-15.621-12.648-28.277-28.266-28.277z'%20fill='%23052b43'/%3e%3c/svg%3e";
function cT(p, h) {
  return function() {
    return p.apply(h, arguments);
  };
}
const { toString: UO } = Object.prototype, { getPrototypeOf: tE } = Object, oy = /* @__PURE__ */ ((p) => (h) => {
  const y = UO.call(h);
  return p[y] || (p[y] = y.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), no = (p) => (p = p.toLowerCase(), (h) => oy(h) === p), uy = (p) => (h) => typeof h === p, { isArray: rd } = Array, ov = uy("undefined");
function zO(p) {
  return p !== null && !ov(p) && p.constructor !== null && !ov(p.constructor) && zi(p.constructor.isBuffer) && p.constructor.isBuffer(p);
}
const fT = no("ArrayBuffer");
function FO(p) {
  let h;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? h = ArrayBuffer.isView(p) : h = p && p.buffer && fT(p.buffer), h;
}
const jO = uy("string"), zi = uy("function"), dT = uy("number"), sy = (p) => p !== null && typeof p == "object", HO = (p) => p === !0 || p === !1, ny = (p) => {
  if (oy(p) !== "object")
    return !1;
  const h = tE(p);
  return (h === null || h === Object.prototype || Object.getPrototypeOf(h) === null) && !(Symbol.toStringTag in p) && !(Symbol.iterator in p);
}, PO = no("Date"), VO = no("File"), BO = no("Blob"), $O = no("FileList"), IO = (p) => sy(p) && zi(p.pipe), YO = (p) => {
  let h;
  return p && (typeof FormData == "function" && p instanceof FormData || zi(p.append) && ((h = oy(p)) === "formdata" || // detect form-data instance
  h === "object" && zi(p.toString) && p.toString() === "[object FormData]"));
}, WO = no("URLSearchParams"), QO = (p) => p.trim ? p.trim() : p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function uv(p, h, { allOwnKeys: y = !1 } = {}) {
  if (p === null || typeof p > "u")
    return;
  let R, _;
  if (typeof p != "object" && (p = [p]), rd(p))
    for (R = 0, _ = p.length; R < _; R++)
      h.call(null, p[R], R, p);
  else {
    const A = y ? Object.getOwnPropertyNames(p) : Object.keys(p), k = A.length;
    let E;
    for (R = 0; R < k; R++)
      E = A[R], h.call(null, p[E], E, p);
  }
}
function pT(p, h) {
  h = h.toLowerCase();
  const y = Object.keys(p);
  let R = y.length, _;
  for (; R-- > 0; )
    if (_ = y[R], h === _.toLowerCase())
      return _;
  return null;
}
const vT = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hT = (p) => !ov(p) && p !== vT;
function qS() {
  const { caseless: p } = hT(this) && this || {}, h = {}, y = (R, _) => {
    const A = p && pT(h, _) || _;
    ny(h[A]) && ny(R) ? h[A] = qS(h[A], R) : ny(R) ? h[A] = qS({}, R) : rd(R) ? h[A] = R.slice() : h[A] = R;
  };
  for (let R = 0, _ = arguments.length; R < _; R++)
    arguments[R] && uv(arguments[R], y);
  return h;
}
const qO = (p, h, y, { allOwnKeys: R } = {}) => (uv(h, (_, A) => {
  y && zi(_) ? p[A] = cT(_, y) : p[A] = _;
}, { allOwnKeys: R }), p), GO = (p) => (p.charCodeAt(0) === 65279 && (p = p.slice(1)), p), KO = (p, h, y, R) => {
  p.prototype = Object.create(h.prototype, R), p.prototype.constructor = p, Object.defineProperty(p, "super", {
    value: h.prototype
  }), y && Object.assign(p.prototype, y);
}, XO = (p, h, y, R) => {
  let _, A, k;
  const E = {};
  if (h = h || {}, p == null)
    return h;
  do {
    for (_ = Object.getOwnPropertyNames(p), A = _.length; A-- > 0; )
      k = _[A], (!R || R(k, p, h)) && !E[k] && (h[k] = p[k], E[k] = !0);
    p = y !== !1 && tE(p);
  } while (p && (!y || y(p, h)) && p !== Object.prototype);
  return h;
}, JO = (p, h, y) => {
  p = String(p), (y === void 0 || y > p.length) && (y = p.length), y -= h.length;
  const R = p.indexOf(h, y);
  return R !== -1 && R === y;
}, ZO = (p) => {
  if (!p)
    return null;
  if (rd(p))
    return p;
  let h = p.length;
  if (!dT(h))
    return null;
  const y = new Array(h);
  for (; h-- > 0; )
    y[h] = p[h];
  return y;
}, ek = /* @__PURE__ */ ((p) => (h) => p && h instanceof p)(typeof Uint8Array < "u" && tE(Uint8Array)), tk = (p, h) => {
  const R = (p && p[Symbol.iterator]).call(p);
  let _;
  for (; (_ = R.next()) && !_.done; ) {
    const A = _.value;
    h.call(p, A[0], A[1]);
  }
}, nk = (p, h) => {
  let y;
  const R = [];
  for (; (y = p.exec(h)) !== null; )
    R.push(y);
  return R;
}, rk = no("HTMLFormElement"), ak = (p) => p.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(y, R, _) {
    return R.toUpperCase() + _;
  }
), KR = (({ hasOwnProperty: p }) => (h, y) => p.call(h, y))(Object.prototype), ik = no("RegExp"), mT = (p, h) => {
  const y = Object.getOwnPropertyDescriptors(p), R = {};
  uv(y, (_, A) => {
    let k;
    (k = h(_, A, p)) !== !1 && (R[A] = k || _);
  }), Object.defineProperties(p, R);
}, lk = (p) => {
  mT(p, (h, y) => {
    if (zi(p) && ["arguments", "caller", "callee"].indexOf(y) !== -1)
      return !1;
    const R = p[y];
    if (zi(R)) {
      if (h.enumerable = !1, "writable" in h) {
        h.writable = !1;
        return;
      }
      h.set || (h.set = () => {
        throw Error("Can not rewrite read-only method '" + y + "'");
      });
    }
  });
}, ok = (p, h) => {
  const y = {}, R = (_) => {
    _.forEach((A) => {
      y[A] = !0;
    });
  };
  return rd(p) ? R(p) : R(String(p).split(h)), y;
}, uk = () => {
}, sk = (p, h) => (p = +p, Number.isFinite(p) ? p : h), PS = "abcdefghijklmnopqrstuvwxyz", XR = "0123456789", yT = {
  DIGIT: XR,
  ALPHA: PS,
  ALPHA_DIGIT: PS + PS.toUpperCase() + XR
}, ck = (p = 16, h = yT.ALPHA_DIGIT) => {
  let y = "";
  const { length: R } = h;
  for (; p--; )
    y += h[Math.random() * R | 0];
  return y;
};
function fk(p) {
  return !!(p && zi(p.append) && p[Symbol.toStringTag] === "FormData" && p[Symbol.iterator]);
}
const dk = (p) => {
  const h = new Array(10), y = (R, _) => {
    if (sy(R)) {
      if (h.indexOf(R) >= 0)
        return;
      if (!("toJSON" in R)) {
        h[_] = R;
        const A = rd(R) ? [] : {};
        return uv(R, (k, E) => {
          const ce = y(k, _ + 1);
          !ov(ce) && (A[E] = ce);
        }), h[_] = void 0, A;
      }
    }
    return R;
  };
  return y(p, 0);
}, pk = no("AsyncFunction"), vk = (p) => p && (sy(p) || zi(p)) && zi(p.then) && zi(p.catch), ee = {
  isArray: rd,
  isArrayBuffer: fT,
  isBuffer: zO,
  isFormData: YO,
  isArrayBufferView: FO,
  isString: jO,
  isNumber: dT,
  isBoolean: HO,
  isObject: sy,
  isPlainObject: ny,
  isUndefined: ov,
  isDate: PO,
  isFile: VO,
  isBlob: BO,
  isRegExp: ik,
  isFunction: zi,
  isStream: IO,
  isURLSearchParams: WO,
  isTypedArray: ek,
  isFileList: $O,
  forEach: uv,
  merge: qS,
  extend: qO,
  trim: QO,
  stripBOM: GO,
  inherits: KO,
  toFlatObject: XO,
  kindOf: oy,
  kindOfTest: no,
  endsWith: JO,
  toArray: ZO,
  forEachEntry: tk,
  matchAll: nk,
  isHTMLForm: rk,
  hasOwnProperty: KR,
  hasOwnProp: KR,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: mT,
  freezeMethods: lk,
  toObjectSet: ok,
  toCamelCase: ak,
  noop: uk,
  toFiniteNumber: sk,
  findKey: pT,
  global: vT,
  isContextDefined: hT,
  ALPHABET: yT,
  generateString: ck,
  isSpecCompliantForm: fk,
  toJSONObject: dk,
  isAsyncFn: pk,
  isThenable: vk
};
function zt(p, h, y, R, _) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = p, this.name = "AxiosError", h && (this.code = h), y && (this.config = y), R && (this.request = R), _ && (this.response = _);
}
ee.inherits(zt, Error, {
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
const gT = zt.prototype, ST = {};
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
  ST[p] = { value: p };
});
Object.defineProperties(zt, ST);
Object.defineProperty(gT, "isAxiosError", { value: !0 });
zt.from = (p, h, y, R, _, A) => {
  const k = Object.create(gT);
  return ee.toFlatObject(p, k, function(ce) {
    return ce !== Error.prototype;
  }, (E) => E !== "isAxiosError"), zt.call(k, p.message, h, y, R, _), k.cause = p, k.name = p.name, A && Object.assign(k, A), k;
};
const hk = null;
function GS(p) {
  return ee.isPlainObject(p) || ee.isArray(p);
}
function ET(p) {
  return ee.endsWith(p, "[]") ? p.slice(0, -2) : p;
}
function JR(p, h, y) {
  return p ? p.concat(h).map(function(_, A) {
    return _ = ET(_), !y && A ? "[" + _ + "]" : _;
  }).join(y ? "." : "") : h;
}
function mk(p) {
  return ee.isArray(p) && !p.some(GS);
}
const yk = ee.toFlatObject(ee, {}, null, function(h) {
  return /^is[A-Z]/.test(h);
});
function cy(p, h, y) {
  if (!ee.isObject(p))
    throw new TypeError("target must be an object");
  h = h || new FormData(), y = ee.toFlatObject(y, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(Z, Fe) {
    return !ee.isUndefined(Fe[Z]);
  });
  const R = y.metaTokens, _ = y.visitor || W, A = y.dots, k = y.indexes, ce = (y.Blob || typeof Blob < "u" && Blob) && ee.isSpecCompliantForm(h);
  if (!ee.isFunction(_))
    throw new TypeError("visitor must be a function");
  function ae(Y) {
    if (Y === null)
      return "";
    if (ee.isDate(Y))
      return Y.toISOString();
    if (!ce && ee.isBlob(Y))
      throw new zt("Blob is not supported. Use a Buffer instead.");
    return ee.isArrayBuffer(Y) || ee.isTypedArray(Y) ? ce && typeof Blob == "function" ? new Blob([Y]) : Buffer.from(Y) : Y;
  }
  function W(Y, Z, Fe) {
    let St = Y;
    if (Y && !Fe && typeof Y == "object") {
      if (ee.endsWith(Z, "{}"))
        Z = R ? Z : Z.slice(0, -2), Y = JSON.stringify(Y);
      else if (ee.isArray(Y) && mk(Y) || (ee.isFileList(Y) || ee.endsWith(Z, "[]")) && (St = ee.toArray(Y)))
        return Z = ET(Z), St.forEach(function(Ge, Be) {
          !(ee.isUndefined(Ge) || Ge === null) && h.append(
            // eslint-disable-next-line no-nested-ternary
            k === !0 ? JR([Z], Be, A) : k === null ? Z : Z + "[]",
            ae(Ge)
          );
        }), !1;
    }
    return GS(Y) ? !0 : (h.append(JR(Fe, Z, A), ae(Y)), !1);
  }
  const $ = [], te = Object.assign(yk, {
    defaultVisitor: W,
    convertValue: ae,
    isVisitable: GS
  });
  function ye(Y, Z) {
    if (!ee.isUndefined(Y)) {
      if ($.indexOf(Y) !== -1)
        throw Error("Circular reference detected in " + Z.join("."));
      $.push(Y), ee.forEach(Y, function(St, Dt) {
        (!(ee.isUndefined(St) || St === null) && _.call(
          h,
          St,
          ee.isString(Dt) ? Dt.trim() : Dt,
          Z,
          te
        )) === !0 && ye(St, Z ? Z.concat(Dt) : [Dt]);
      }), $.pop();
    }
  }
  if (!ee.isObject(p))
    throw new TypeError("data must be an object");
  return ye(p), h;
}
function ZR(p) {
  const h = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g, function(R) {
    return h[R];
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
  const y = h ? function(R) {
    return h.call(this, R, ZR);
  } : ZR;
  return this._pairs.map(function(_) {
    return y(_[0]) + "=" + y(_[1]);
  }, "").join("&");
};
function gk(p) {
  return encodeURIComponent(p).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function RT(p, h, y) {
  if (!h)
    return p;
  const R = y && y.encode || gk, _ = y && y.serialize;
  let A;
  if (_ ? A = _(h, y) : A = ee.isURLSearchParams(h) ? h.toString() : new nE(h, y).toString(R), A) {
    const k = p.indexOf("#");
    k !== -1 && (p = p.slice(0, k)), p += (p.indexOf("?") === -1 ? "?" : "&") + A;
  }
  return p;
}
class Sk {
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
  use(h, y, R) {
    return this.handlers.push({
      fulfilled: h,
      rejected: y,
      synchronous: R ? R.synchronous : !1,
      runWhen: R ? R.runWhen : null
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
    ee.forEach(this.handlers, function(R) {
      R !== null && h(R);
    });
  }
}
const eT = Sk, TT = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ek = typeof URLSearchParams < "u" ? URLSearchParams : nE, Ck = typeof FormData < "u" ? FormData : null, Rk = typeof Blob < "u" ? Blob : null, Tk = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ek,
    FormData: Ck,
    Blob: Rk
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, wT = typeof window < "u" && typeof document < "u", wk = ((p) => wT && ["ReactNative", "NativeScript", "NS"].indexOf(p) < 0)(typeof navigator < "u" && navigator.product), bk = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: wT,
  hasStandardBrowserEnv: wk,
  hasStandardBrowserWebWorkerEnv: bk
}, Symbol.toStringTag, { value: "Module" })), eo = {
  ...xk,
  ...Tk
};
function _k(p, h) {
  return cy(p, new eo.classes.URLSearchParams(), Object.assign({
    visitor: function(y, R, _, A) {
      return eo.isNode && ee.isBuffer(y) ? (this.append(R, y.toString("base64")), !1) : A.defaultVisitor.apply(this, arguments);
    }
  }, h));
}
function Dk(p) {
  return ee.matchAll(/\w+|\[(\w*)]/g, p).map((h) => h[0] === "[]" ? "" : h[1] || h[0]);
}
function Ok(p) {
  const h = {}, y = Object.keys(p);
  let R;
  const _ = y.length;
  let A;
  for (R = 0; R < _; R++)
    A = y[R], h[A] = p[A];
  return h;
}
function bT(p) {
  function h(y, R, _, A) {
    let k = y[A++];
    const E = Number.isFinite(+k), ce = A >= y.length;
    return k = !k && ee.isArray(_) ? _.length : k, ce ? (ee.hasOwnProp(_, k) ? _[k] = [_[k], R] : _[k] = R, !E) : ((!_[k] || !ee.isObject(_[k])) && (_[k] = []), h(y, R, _[k], A) && ee.isArray(_[k]) && (_[k] = Ok(_[k])), !E);
  }
  if (ee.isFormData(p) && ee.isFunction(p.entries)) {
    const y = {};
    return ee.forEachEntry(p, (R, _) => {
      h(Dk(R), _, y, 0);
    }), y;
  }
  return null;
}
function kk(p, h, y) {
  if (ee.isString(p))
    try {
      return (h || JSON.parse)(p), ee.trim(p);
    } catch (R) {
      if (R.name !== "SyntaxError")
        throw R;
    }
  return (y || JSON.stringify)(p);
}
const rE = {
  transitional: TT,
  adapter: ["xhr", "http"],
  transformRequest: [function(h, y) {
    const R = y.getContentType() || "", _ = R.indexOf("application/json") > -1, A = ee.isObject(h);
    if (A && ee.isHTMLForm(h) && (h = new FormData(h)), ee.isFormData(h))
      return _ && _ ? JSON.stringify(bT(h)) : h;
    if (ee.isArrayBuffer(h) || ee.isBuffer(h) || ee.isStream(h) || ee.isFile(h) || ee.isBlob(h))
      return h;
    if (ee.isArrayBufferView(h))
      return h.buffer;
    if (ee.isURLSearchParams(h))
      return y.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), h.toString();
    let E;
    if (A) {
      if (R.indexOf("application/x-www-form-urlencoded") > -1)
        return _k(h, this.formSerializer).toString();
      if ((E = ee.isFileList(h)) || R.indexOf("multipart/form-data") > -1) {
        const ce = this.env && this.env.FormData;
        return cy(
          E ? { "files[]": h } : h,
          ce && new ce(),
          this.formSerializer
        );
      }
    }
    return A || _ ? (y.setContentType("application/json", !1), kk(h)) : h;
  }],
  transformResponse: [function(h) {
    const y = this.transitional || rE.transitional, R = y && y.forcedJSONParsing, _ = this.responseType === "json";
    if (h && ee.isString(h) && (R && !this.responseType || _)) {
      const k = !(y && y.silentJSONParsing) && _;
      try {
        return JSON.parse(h);
      } catch (E) {
        if (k)
          throw E.name === "SyntaxError" ? zt.from(E, zt.ERR_BAD_RESPONSE, this, null, this.response) : E;
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
const aE = rE, Nk = ee.toObjectSet([
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
]), Lk = (p) => {
  const h = {};
  let y, R, _;
  return p && p.split(`
`).forEach(function(k) {
    _ = k.indexOf(":"), y = k.substring(0, _).trim().toLowerCase(), R = k.substring(_ + 1).trim(), !(!y || h[y] && Nk[y]) && (y === "set-cookie" ? h[y] ? h[y].push(R) : h[y] = [R] : h[y] = h[y] ? h[y] + ", " + R : R);
  }), h;
}, tT = Symbol("internals");
function av(p) {
  return p && String(p).trim().toLowerCase();
}
function ry(p) {
  return p === !1 || p == null ? p : ee.isArray(p) ? p.map(ry) : String(p);
}
function Mk(p) {
  const h = /* @__PURE__ */ Object.create(null), y = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let R;
  for (; R = y.exec(p); )
    h[R[1]] = R[2];
  return h;
}
const Ak = (p) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(p.trim());
function VS(p, h, y, R, _) {
  if (ee.isFunction(R))
    return R.call(this, h, y);
  if (_ && (h = y), !!ee.isString(h)) {
    if (ee.isString(R))
      return h.indexOf(R) !== -1;
    if (ee.isRegExp(R))
      return R.test(h);
  }
}
function Uk(p) {
  return p.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (h, y, R) => y.toUpperCase() + R);
}
function zk(p, h) {
  const y = ee.toCamelCase(" " + h);
  ["get", "set", "has"].forEach((R) => {
    Object.defineProperty(p, R + y, {
      value: function(_, A, k) {
        return this[R].call(this, h, _, A, k);
      },
      configurable: !0
    });
  });
}
class fy {
  constructor(h) {
    h && this.set(h);
  }
  set(h, y, R) {
    const _ = this;
    function A(E, ce, ae) {
      const W = av(ce);
      if (!W)
        throw new Error("header name must be a non-empty string");
      const $ = ee.findKey(_, W);
      (!$ || _[$] === void 0 || ae === !0 || ae === void 0 && _[$] !== !1) && (_[$ || ce] = ry(E));
    }
    const k = (E, ce) => ee.forEach(E, (ae, W) => A(ae, W, ce));
    return ee.isPlainObject(h) || h instanceof this.constructor ? k(h, y) : ee.isString(h) && (h = h.trim()) && !Ak(h) ? k(Lk(h), y) : h != null && A(y, h, R), this;
  }
  get(h, y) {
    if (h = av(h), h) {
      const R = ee.findKey(this, h);
      if (R) {
        const _ = this[R];
        if (!y)
          return _;
        if (y === !0)
          return Mk(_);
        if (ee.isFunction(y))
          return y.call(this, _, R);
        if (ee.isRegExp(y))
          return y.exec(_);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(h, y) {
    if (h = av(h), h) {
      const R = ee.findKey(this, h);
      return !!(R && this[R] !== void 0 && (!y || VS(this, this[R], R, y)));
    }
    return !1;
  }
  delete(h, y) {
    const R = this;
    let _ = !1;
    function A(k) {
      if (k = av(k), k) {
        const E = ee.findKey(R, k);
        E && (!y || VS(R, R[E], E, y)) && (delete R[E], _ = !0);
      }
    }
    return ee.isArray(h) ? h.forEach(A) : A(h), _;
  }
  clear(h) {
    const y = Object.keys(this);
    let R = y.length, _ = !1;
    for (; R--; ) {
      const A = y[R];
      (!h || VS(this, this[A], A, h, !0)) && (delete this[A], _ = !0);
    }
    return _;
  }
  normalize(h) {
    const y = this, R = {};
    return ee.forEach(this, (_, A) => {
      const k = ee.findKey(R, A);
      if (k) {
        y[k] = ry(_), delete y[A];
        return;
      }
      const E = h ? Uk(A) : String(A).trim();
      E !== A && delete y[A], y[E] = ry(_), R[E] = !0;
    }), this;
  }
  concat(...h) {
    return this.constructor.concat(this, ...h);
  }
  toJSON(h) {
    const y = /* @__PURE__ */ Object.create(null);
    return ee.forEach(this, (R, _) => {
      R != null && R !== !1 && (y[_] = h && ee.isArray(R) ? R.join(", ") : R);
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
    const R = new this(h);
    return y.forEach((_) => R.set(_)), R;
  }
  static accessor(h) {
    const R = (this[tT] = this[tT] = {
      accessors: {}
    }).accessors, _ = this.prototype;
    function A(k) {
      const E = av(k);
      R[E] || (zk(_, k), R[E] = !0);
    }
    return ee.isArray(h) ? h.forEach(A) : A(h), this;
  }
}
fy.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
ee.reduceDescriptors(fy.prototype, ({ value: p }, h) => {
  let y = h[0].toUpperCase() + h.slice(1);
  return {
    get: () => p,
    set(R) {
      this[y] = R;
    }
  };
});
ee.freezeMethods(fy);
const qo = fy;
function BS(p, h) {
  const y = this || aE, R = h || y, _ = qo.from(R.headers);
  let A = R.data;
  return ee.forEach(p, function(E) {
    A = E.call(y, A, _.normalize(), h ? h.status : void 0);
  }), _.normalize(), A;
}
function xT(p) {
  return !!(p && p.__CANCEL__);
}
function sv(p, h, y) {
  zt.call(this, p ?? "canceled", zt.ERR_CANCELED, h, y), this.name = "CanceledError";
}
ee.inherits(sv, zt, {
  __CANCEL__: !0
});
function Fk(p, h, y) {
  const R = y.config.validateStatus;
  !y.status || !R || R(y.status) ? p(y) : h(new zt(
    "Request failed with status code " + y.status,
    [zt.ERR_BAD_REQUEST, zt.ERR_BAD_RESPONSE][Math.floor(y.status / 100) - 4],
    y.config,
    y.request,
    y
  ));
}
const jk = eo.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(p, h, y, R, _, A) {
      const k = [p + "=" + encodeURIComponent(h)];
      ee.isNumber(y) && k.push("expires=" + new Date(y).toGMTString()), ee.isString(R) && k.push("path=" + R), ee.isString(_) && k.push("domain=" + _), A === !0 && k.push("secure"), document.cookie = k.join("; ");
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
function Hk(p) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(p);
}
function Pk(p, h) {
  return h ? p.replace(/\/+$/, "") + "/" + h.replace(/^\/+/, "") : p;
}
function _T(p, h) {
  return p && !Hk(h) ? Pk(p, h) : h;
}
const Vk = eo.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const h = /(msie|trident)/i.test(navigator.userAgent), y = document.createElement("a");
    let R;
    function _(A) {
      let k = A;
      return h && (y.setAttribute("href", k), k = y.href), y.setAttribute("href", k), {
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
    return R = _(window.location.href), function(k) {
      const E = ee.isString(k) ? _(k) : k;
      return E.protocol === R.protocol && E.host === R.host;
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
function Bk(p) {
  const h = /^([-+\w]{1,25})(:?\/\/|:)/.exec(p);
  return h && h[1] || "";
}
function $k(p, h) {
  p = p || 10;
  const y = new Array(p), R = new Array(p);
  let _ = 0, A = 0, k;
  return h = h !== void 0 ? h : 1e3, function(ce) {
    const ae = Date.now(), W = R[A];
    k || (k = ae), y[_] = ce, R[_] = ae;
    let $ = A, te = 0;
    for (; $ !== _; )
      te += y[$++], $ = $ % p;
    if (_ = (_ + 1) % p, _ === A && (A = (A + 1) % p), ae - k < h)
      return;
    const ye = W && ae - W;
    return ye ? Math.round(te * 1e3 / ye) : void 0;
  };
}
function nT(p, h) {
  let y = 0;
  const R = $k(50, 250);
  return (_) => {
    const A = _.loaded, k = _.lengthComputable ? _.total : void 0, E = A - y, ce = R(E), ae = A <= k;
    y = A;
    const W = {
      loaded: A,
      total: k,
      progress: k ? A / k : void 0,
      bytes: E,
      rate: ce || void 0,
      estimated: ce && k && ae ? (k - A) / ce : void 0,
      event: _
    };
    W[h ? "download" : "upload"] = !0, p(W);
  };
}
const Ik = typeof XMLHttpRequest < "u", Yk = Ik && function(p) {
  return new Promise(function(y, R) {
    let _ = p.data;
    const A = qo.from(p.headers).normalize();
    let { responseType: k, withXSRFToken: E } = p, ce;
    function ae() {
      p.cancelToken && p.cancelToken.unsubscribe(ce), p.signal && p.signal.removeEventListener("abort", ce);
    }
    let W;
    if (ee.isFormData(_)) {
      if (eo.hasStandardBrowserEnv || eo.hasStandardBrowserWebWorkerEnv)
        A.setContentType(!1);
      else if ((W = A.getContentType()) !== !1) {
        const [Z, ...Fe] = W ? W.split(";").map((St) => St.trim()).filter(Boolean) : [];
        A.setContentType([Z || "multipart/form-data", ...Fe].join("; "));
      }
    }
    let $ = new XMLHttpRequest();
    if (p.auth) {
      const Z = p.auth.username || "", Fe = p.auth.password ? unescape(encodeURIComponent(p.auth.password)) : "";
      A.set("Authorization", "Basic " + btoa(Z + ":" + Fe));
    }
    const te = _T(p.baseURL, p.url);
    $.open(p.method.toUpperCase(), RT(te, p.params, p.paramsSerializer), !0), $.timeout = p.timeout;
    function ye() {
      if (!$)
        return;
      const Z = qo.from(
        "getAllResponseHeaders" in $ && $.getAllResponseHeaders()
      ), St = {
        data: !k || k === "text" || k === "json" ? $.responseText : $.response,
        status: $.status,
        statusText: $.statusText,
        headers: Z,
        config: p,
        request: $
      };
      Fk(function(Ge) {
        y(Ge), ae();
      }, function(Ge) {
        R(Ge), ae();
      }, St), $ = null;
    }
    if ("onloadend" in $ ? $.onloadend = ye : $.onreadystatechange = function() {
      !$ || $.readyState !== 4 || $.status === 0 && !($.responseURL && $.responseURL.indexOf("file:") === 0) || setTimeout(ye);
    }, $.onabort = function() {
      $ && (R(new zt("Request aborted", zt.ECONNABORTED, p, $)), $ = null);
    }, $.onerror = function() {
      R(new zt("Network Error", zt.ERR_NETWORK, p, $)), $ = null;
    }, $.ontimeout = function() {
      let Fe = p.timeout ? "timeout of " + p.timeout + "ms exceeded" : "timeout exceeded";
      const St = p.transitional || TT;
      p.timeoutErrorMessage && (Fe = p.timeoutErrorMessage), R(new zt(
        Fe,
        St.clarifyTimeoutError ? zt.ETIMEDOUT : zt.ECONNABORTED,
        p,
        $
      )), $ = null;
    }, eo.hasStandardBrowserEnv && (E && ee.isFunction(E) && (E = E(p)), E || E !== !1 && Vk(te))) {
      const Z = p.xsrfHeaderName && p.xsrfCookieName && jk.read(p.xsrfCookieName);
      Z && A.set(p.xsrfHeaderName, Z);
    }
    _ === void 0 && A.setContentType(null), "setRequestHeader" in $ && ee.forEach(A.toJSON(), function(Fe, St) {
      $.setRequestHeader(St, Fe);
    }), ee.isUndefined(p.withCredentials) || ($.withCredentials = !!p.withCredentials), k && k !== "json" && ($.responseType = p.responseType), typeof p.onDownloadProgress == "function" && $.addEventListener("progress", nT(p.onDownloadProgress, !0)), typeof p.onUploadProgress == "function" && $.upload && $.upload.addEventListener("progress", nT(p.onUploadProgress)), (p.cancelToken || p.signal) && (ce = (Z) => {
      $ && (R(!Z || Z.type ? new sv(null, p, $) : Z), $.abort(), $ = null);
    }, p.cancelToken && p.cancelToken.subscribe(ce), p.signal && (p.signal.aborted ? ce() : p.signal.addEventListener("abort", ce)));
    const Y = Bk(te);
    if (Y && eo.protocols.indexOf(Y) === -1) {
      R(new zt("Unsupported protocol " + Y + ":", zt.ERR_BAD_REQUEST, p));
      return;
    }
    $.send(_ || null);
  });
}, KS = {
  http: hk,
  xhr: Yk
};
ee.forEach(KS, (p, h) => {
  if (p) {
    try {
      Object.defineProperty(p, "name", { value: h });
    } catch {
    }
    Object.defineProperty(p, "adapterName", { value: h });
  }
});
const rT = (p) => `- ${p}`, Wk = (p) => ee.isFunction(p) || p === null || p === !1, DT = {
  getAdapter: (p) => {
    p = ee.isArray(p) ? p : [p];
    const { length: h } = p;
    let y, R;
    const _ = {};
    for (let A = 0; A < h; A++) {
      y = p[A];
      let k;
      if (R = y, !Wk(y) && (R = KS[(k = String(y)).toLowerCase()], R === void 0))
        throw new zt(`Unknown adapter '${k}'`);
      if (R)
        break;
      _[k || "#" + A] = R;
    }
    if (!R) {
      const A = Object.entries(_).map(
        ([E, ce]) => `adapter ${E} ` + (ce === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let k = h ? A.length > 1 ? `since :
` + A.map(rT).join(`
`) : " " + rT(A[0]) : "as no adapter specified";
      throw new zt(
        "There is no suitable adapter to dispatch the request " + k,
        "ERR_NOT_SUPPORT"
      );
    }
    return R;
  },
  adapters: KS
};
function $S(p) {
  if (p.cancelToken && p.cancelToken.throwIfRequested(), p.signal && p.signal.aborted)
    throw new sv(null, p);
}
function aT(p) {
  return $S(p), p.headers = qo.from(p.headers), p.data = BS.call(
    p,
    p.transformRequest
  ), ["post", "put", "patch"].indexOf(p.method) !== -1 && p.headers.setContentType("application/x-www-form-urlencoded", !1), DT.getAdapter(p.adapter || aE.adapter)(p).then(function(R) {
    return $S(p), R.data = BS.call(
      p,
      p.transformResponse,
      R
    ), R.headers = qo.from(R.headers), R;
  }, function(R) {
    return xT(R) || ($S(p), R && R.response && (R.response.data = BS.call(
      p,
      p.transformResponse,
      R.response
    ), R.response.headers = qo.from(R.response.headers))), Promise.reject(R);
  });
}
const iT = (p) => p instanceof qo ? p.toJSON() : p;
function td(p, h) {
  h = h || {};
  const y = {};
  function R(ae, W, $) {
    return ee.isPlainObject(ae) && ee.isPlainObject(W) ? ee.merge.call({ caseless: $ }, ae, W) : ee.isPlainObject(W) ? ee.merge({}, W) : ee.isArray(W) ? W.slice() : W;
  }
  function _(ae, W, $) {
    if (ee.isUndefined(W)) {
      if (!ee.isUndefined(ae))
        return R(void 0, ae, $);
    } else
      return R(ae, W, $);
  }
  function A(ae, W) {
    if (!ee.isUndefined(W))
      return R(void 0, W);
  }
  function k(ae, W) {
    if (ee.isUndefined(W)) {
      if (!ee.isUndefined(ae))
        return R(void 0, ae);
    } else
      return R(void 0, W);
  }
  function E(ae, W, $) {
    if ($ in h)
      return R(ae, W);
    if ($ in p)
      return R(void 0, ae);
  }
  const ce = {
    url: A,
    method: A,
    data: A,
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
    headers: (ae, W) => _(iT(ae), iT(W), !0)
  };
  return ee.forEach(Object.keys(Object.assign({}, p, h)), function(W) {
    const $ = ce[W] || _, te = $(p[W], h[W], W);
    ee.isUndefined(te) && $ !== E || (y[W] = te);
  }), y;
}
const OT = "1.6.2", iE = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((p, h) => {
  iE[p] = function(R) {
    return typeof R === p || "a" + (h < 1 ? "n " : " ") + p;
  };
});
const lT = {};
iE.transitional = function(h, y, R) {
  function _(A, k) {
    return "[Axios v" + OT + "] Transitional option '" + A + "'" + k + (R ? ". " + R : "");
  }
  return (A, k, E) => {
    if (h === !1)
      throw new zt(
        _(k, " has been removed" + (y ? " in " + y : "")),
        zt.ERR_DEPRECATED
      );
    return y && !lT[k] && (lT[k] = !0, console.warn(
      _(
        k,
        " has been deprecated since v" + y + " and will be removed in the near future"
      )
    )), h ? h(A, k, E) : !0;
  };
};
function Qk(p, h, y) {
  if (typeof p != "object")
    throw new zt("options must be an object", zt.ERR_BAD_OPTION_VALUE);
  const R = Object.keys(p);
  let _ = R.length;
  for (; _-- > 0; ) {
    const A = R[_], k = h[A];
    if (k) {
      const E = p[A], ce = E === void 0 || k(E, A, p);
      if (ce !== !0)
        throw new zt("option " + A + " must be " + ce, zt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (y !== !0)
      throw new zt("Unknown option " + A, zt.ERR_BAD_OPTION);
  }
}
const XS = {
  assertOptions: Qk,
  validators: iE
}, es = XS.validators;
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
    const { transitional: R, paramsSerializer: _, headers: A } = y;
    R !== void 0 && XS.assertOptions(R, {
      silentJSONParsing: es.transitional(es.boolean),
      forcedJSONParsing: es.transitional(es.boolean),
      clarifyTimeoutError: es.transitional(es.boolean)
    }, !1), _ != null && (ee.isFunction(_) ? y.paramsSerializer = {
      serialize: _
    } : XS.assertOptions(_, {
      encode: es.function,
      serialize: es.function
    }, !0)), y.method = (y.method || this.defaults.method || "get").toLowerCase();
    let k = A && ee.merge(
      A.common,
      A[y.method]
    );
    A && ee.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (Y) => {
        delete A[Y];
      }
    ), y.headers = qo.concat(k, A);
    const E = [];
    let ce = !0;
    this.interceptors.request.forEach(function(Z) {
      typeof Z.runWhen == "function" && Z.runWhen(y) === !1 || (ce = ce && Z.synchronous, E.unshift(Z.fulfilled, Z.rejected));
    });
    const ae = [];
    this.interceptors.response.forEach(function(Z) {
      ae.push(Z.fulfilled, Z.rejected);
    });
    let W, $ = 0, te;
    if (!ce) {
      const Y = [aT.bind(this), void 0];
      for (Y.unshift.apply(Y, E), Y.push.apply(Y, ae), te = Y.length, W = Promise.resolve(y); $ < te; )
        W = W.then(Y[$++], Y[$++]);
      return W;
    }
    te = E.length;
    let ye = y;
    for ($ = 0; $ < te; ) {
      const Y = E[$++], Z = E[$++];
      try {
        ye = Y(ye);
      } catch (Fe) {
        Z.call(this, Fe);
        break;
      }
    }
    try {
      W = aT.call(this, ye);
    } catch (Y) {
      return Promise.reject(Y);
    }
    for ($ = 0, te = ae.length; $ < te; )
      W = W.then(ae[$++], ae[$++]);
    return W;
  }
  getUri(h) {
    h = td(this.defaults, h);
    const y = _T(h.baseURL, h.url);
    return RT(y, h.params, h.paramsSerializer);
  }
}
ee.forEach(["delete", "get", "head", "options"], function(h) {
  iy.prototype[h] = function(y, R) {
    return this.request(td(R || {}, {
      method: h,
      url: y,
      data: (R || {}).data
    }));
  };
});
ee.forEach(["post", "put", "patch"], function(h) {
  function y(R) {
    return function(A, k, E) {
      return this.request(td(E || {}, {
        method: h,
        headers: R ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: A,
        data: k
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
    this.promise = new Promise(function(A) {
      y = A;
    });
    const R = this;
    this.promise.then((_) => {
      if (!R._listeners)
        return;
      let A = R._listeners.length;
      for (; A-- > 0; )
        R._listeners[A](_);
      R._listeners = null;
    }), this.promise.then = (_) => {
      let A;
      const k = new Promise((E) => {
        R.subscribe(E), A = E;
      }).then(_);
      return k.cancel = function() {
        R.unsubscribe(A);
      }, k;
    }, h(function(A, k, E) {
      R.reason || (R.reason = new sv(A, k, E), y(R.reason));
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
      token: new lE(function(_) {
        h = _;
      }),
      cancel: h
    };
  }
}
const qk = lE;
function Gk(p) {
  return function(y) {
    return p.apply(null, y);
  };
}
function Kk(p) {
  return ee.isObject(p) && p.isAxiosError === !0;
}
const JS = {
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
Object.entries(JS).forEach(([p, h]) => {
  JS[h] = p;
});
const Xk = JS;
function kT(p) {
  const h = new ay(p), y = cT(ay.prototype.request, h);
  return ee.extend(y, ay.prototype, h, { allOwnKeys: !0 }), ee.extend(y, h, null, { allOwnKeys: !0 }), y.create = function(_) {
    return kT(td(p, _));
  }, y;
}
const er = kT(aE);
er.Axios = ay;
er.CanceledError = sv;
er.CancelToken = qk;
er.isCancel = xT;
er.VERSION = OT;
er.toFormData = cy;
er.AxiosError = zt;
er.Cancel = er.CanceledError;
er.all = function(h) {
  return Promise.all(h);
};
er.spread = Gk;
er.isAxiosError = Kk;
er.mergeConfig = td;
er.AxiosHeaders = qo;
er.formToJSON = (p) => bT(ee.isHTMLForm(p) ? new FormData(p) : p);
er.getAdapter = DT.getAdapter;
er.HttpStatusCode = Xk;
er.default = er;
const Jk = er;
var NT = {}, nd = {};
Object.defineProperty(nd, "__esModule", { value: !0 });
nd.cssValue = nd.parseLengthAndUnit = void 0;
var Zk = {
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
function LT(p) {
  if (typeof p == "number")
    return {
      value: p,
      unit: "px"
    };
  var h, y = (p.match(/^[0-9.]*/) || "").toString();
  y.includes(".") ? h = parseFloat(y) : h = parseInt(y, 10);
  var R = (p.match(/[^0-9]*$/) || "").toString();
  return Zk[R] ? {
    value: h,
    unit: R
  } : (console.warn("React Spinners: ".concat(p, " is not a valid css value. Defaulting to ").concat(h, "px.")), {
    value: h,
    unit: "px"
  });
}
nd.parseLengthAndUnit = LT;
function eN(p) {
  var h = LT(p);
  return "".concat(h.value).concat(h.unit);
}
nd.cssValue = eN;
var dy = {};
Object.defineProperty(dy, "__esModule", { value: !0 });
dy.createAnimation = void 0;
var tN = function(p, h, y) {
  var R = "react-spinners-".concat(p, "-").concat(y);
  if (typeof window > "u" || !window.document)
    return R;
  var _ = document.createElement("style");
  document.head.appendChild(_);
  var A = _.sheet, k = `
    @keyframes `.concat(R, ` {
      `).concat(h, `
    }
  `);
  return A && A.insertRule(k, 0), R;
};
dy.createAnimation = tN;
var ly = to && to.__assign || function() {
  return ly = Object.assign || function(p) {
    for (var h, y = 1, R = arguments.length; y < R; y++) {
      h = arguments[y];
      for (var _ in h)
        Object.prototype.hasOwnProperty.call(h, _) && (p[_] = h[_]);
    }
    return p;
  }, ly.apply(this, arguments);
}, nN = to && to.__createBinding || (Object.create ? function(p, h, y, R) {
  R === void 0 && (R = y);
  var _ = Object.getOwnPropertyDescriptor(h, y);
  (!_ || ("get" in _ ? !h.__esModule : _.writable || _.configurable)) && (_ = { enumerable: !0, get: function() {
    return h[y];
  } }), Object.defineProperty(p, R, _);
} : function(p, h, y, R) {
  R === void 0 && (R = y), p[R] = h[y];
}), rN = to && to.__setModuleDefault || (Object.create ? function(p, h) {
  Object.defineProperty(p, "default", { enumerable: !0, value: h });
} : function(p, h) {
  p.default = h;
}), aN = to && to.__importStar || function(p) {
  if (p && p.__esModule)
    return p;
  var h = {};
  if (p != null)
    for (var y in p)
      y !== "default" && Object.prototype.hasOwnProperty.call(p, y) && nN(h, p, y);
  return rN(h, p), h;
}, iN = to && to.__rest || function(p, h) {
  var y = {};
  for (var R in p)
    Object.prototype.hasOwnProperty.call(p, R) && h.indexOf(R) < 0 && (y[R] = p[R]);
  if (p != null && typeof Object.getOwnPropertySymbols == "function")
    for (var _ = 0, R = Object.getOwnPropertySymbols(p); _ < R.length; _++)
      h.indexOf(R[_]) < 0 && Object.prototype.propertyIsEnumerable.call(p, R[_]) && (y[R[_]] = p[R[_]]);
  return y;
};
Object.defineProperty(NT, "__esModule", { value: !0 });
var ty = aN(Ui), IS = nd, lN = dy, oN = (0, lN.createAnimation)("PulseLoader", "0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}", "pulse");
function uN(p) {
  var h = p.loading, y = h === void 0 ? !0 : h, R = p.color, _ = R === void 0 ? "#000000" : R, A = p.speedMultiplier, k = A === void 0 ? 1 : A, E = p.cssOverride, ce = E === void 0 ? {} : E, ae = p.size, W = ae === void 0 ? 15 : ae, $ = p.margin, te = $ === void 0 ? 2 : $, ye = iN(p, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), Y = ly({ display: "inherit" }, ce), Z = function(Fe) {
    return {
      backgroundColor: _,
      width: (0, IS.cssValue)(W),
      height: (0, IS.cssValue)(W),
      margin: (0, IS.cssValue)(te),
      borderRadius: "100%",
      display: "inline-block",
      animation: "".concat(oN, " ").concat(0.75 / k, "s ").concat(Fe * 0.12 / k, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
      animationFillMode: "both"
    };
  };
  return y ? ty.createElement(
    "span",
    ly({ style: Y }, ye),
    ty.createElement("span", { style: Z(1) }),
    ty.createElement("span", { style: Z(2) }),
    ty.createElement("span", { style: Z(3) })
  ) : null;
}
var sN = NT.default = uN;
const cN = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='512pt'%20height='512pt'%20version='1.1'%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20fill='%23052b43'%3e%3cpath%20d='m259.59%20253.44%2053.762%20175.11%20152.06-381.44-380.93%20152.57zm57.344%2082.43-32.77-107.01-107.01-32.77%20232.96-93.695z'/%3e%3cpath%20d='m98.668%20391.35%2072.406-72.406%2021.723%2021.723-72.406%2072.406z'/%3e%3cpath%20d='m62.52%20319.2%2072.398-72.418%2021.727%2021.719-72.398%2072.418z'/%3e%3cpath%20d='m171.04%20427.8%2072.398-72.418%2021.727%2021.719-72.398%2072.418z'/%3e%3c/g%3e%3c/svg%3e", ZS = (p, h) => ({
  content: p,
  role: h
}), fN = document.getElementById("tw-chat-ui"), eE = JSON.parse(document.getElementById("tw-chat-ui-data").textContent), dN = [
  ZS(eE.greeting, "assistant")
], pN = () => {
  const [p, h] = Ui.useState(dN), [y, R] = Ui.useState(""), [_, A] = Ui.useState(!1), [k, E] = Ui.useState(0);
  Ui.useEffect(() => {
    ce();
  }, []);
  const ce = () => {
    document.getElementById("messageText").focus();
  }, ae = ($) => {
    $.preventDefault();
    let te = p;
    A(!0);
    const ye = {
      message: y,
      wpnonce: fN.dataset.wpnonce
    };
    k && (ye.threadID = k), te = [...te, ZS(y, "user")], h(te), Jk.post("/wp-json/tw-chat-ui/v1/chat-response/", ye).then((Y) => {
      console.log(Y.data), Y.data.data.length > 0 && h([...te, ZS(Y.data.data[0].content[0].text.value, "assistant")]), R(""), A(!1), E(Y.data.thread_id), ce();
    }).catch((Y) => console.error("Error fetching messages:", Y));
  }, W = ($) => {
    R($.target.value);
  };
  return /* @__PURE__ */ yr.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ yr.jsxs("div", { className: "chat-messages", children: [
      p.map(($, te) => /* @__PURE__ */ yr.jsx("p", { className: `message ${$.role}`, children: $.content }, te)),
      _ && /* @__PURE__ */ yr.jsx("div", { className: "waiting-indicator", children: /* @__PURE__ */ yr.jsx(sN, { color: "#333" }) })
    ] }),
    /* @__PURE__ */ yr.jsxs(
      "form",
      {
        onSubmit: ae,
        className: _ ? "chat-input-container chat-is-waiting" : "chat-input-container",
        children: [
          /* @__PURE__ */ yr.jsx("label", { htmlFor: "messageText", children: "Send Message" }),
          /* @__PURE__ */ yr.jsx("input", { placeholder: "Enter your message...", id: "messageText", type: "text", onChange: W, value: y, name: "message", required: "required" }),
          /* @__PURE__ */ yr.jsx("button", { children: /* @__PURE__ */ yr.jsx("img", { src: cN, alt: "Send" }) })
        ]
      }
    ),
    /* @__PURE__ */ yr.jsxs("div", { className: "chat-disclaimer-container", children: [
      /* @__PURE__ */ yr.jsx("span", { dangerouslySetInnerHTML: { __html: eE.disclaimer } }),
      " ",
      /* @__PURE__ */ yr.jsx("a", { href: eE.privacy_policy_url, target: "_blank", children: "View Privacy Policy." })
    ] })
  ] });
};
function vN() {
  const [p, h] = Ui.useState(!1), y = () => {
    h(!p);
  };
  return /* @__PURE__ */ yr.jsxs("div", { className: "chat-container", children: [
    p && /* @__PURE__ */ yr.jsx(pN, {}),
    /* @__PURE__ */ yr.jsxs("button", { className: "chat-bubble", onClick: y, children: [
      /* @__PURE__ */ yr.jsx("img", { src: AO, alt: "Chat" }),
      "Chat"
    ] })
  ] });
}
const hN = document.getElementById("tw-chat-ui");
lv.createRoot(hN).render(
  /* @__PURE__ */ yr.jsx(wO.StrictMode, { children: /* @__PURE__ */ yr.jsx(vN, {}) })
);
