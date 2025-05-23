var link, jsGame;
(function () {
  var g, B, C, b, e, n, h = window.eval;
  window.eval = function () {
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout;
  window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;
  String || (String = {});
  String.format || (String.format = function () {
    if (0 == arguments.length) return null;
    for (var a = arguments[0] || "", c, i = 1, v = arguments.length; i < v; i++) c = RegExp("\\{" + (i - 1) + "\\}", "gm"), a = a.replace(c, arguments[i]);
    return a
  });
  String.getByteLength || (String.getByteLength = function (a) {
    for (var c = 0, i = a || "", v = i.length, a = 0; a < v; a++) c = 0 <= i.charCodeAt(a) & 255 >= i.charCodeAt(a) ? c + 1 : c + 2;
    return c
  });
  if (!Array || !Array.prototype) Array.prototype = {};
  Array.prototype.indexOfAttr = function (a, c) {
    for (var i = (typeof a).toLowerCase(), v = -1, b = 0,
           d = this.length; b < d; b++) if ("string" == i && this[b][a] == c || "number" == i && this[b] == a) {
      v = b;
      break
    }
    return v
  };
  var j = "linkScreen", p = "12px Arial", s = 240, t = 320, w = [], E = [], A = "", D = 1, ha = !1, x = 1, f = {
      loadRes: null,
      pageLoad: null,
      menu: null,
      run: null,
      runFn: function () {
      },
      rafRun: null,
      stop: null,
      over: null,
      zone: null,
      active: null,
      lastDate: Date.now(),
      timeout: 30,
      isPause: !1,
      gameFlow: -1,
      loadedImageToGameFlow: -1,
      zoneArgs: null,
      activeArgs: null,
      spendTime: 0,
      loadResTimer: null,
      playTimer: null
    }, d = {
      key: 0,
      keys: {
        up: !1, down: !1, left: !1, right: !1, a: !1,
        b: !1, c: !1, menu: !1, quit: !1
      },
      lastKey: {up: !1, down: !1, left: !1, right: !1, a: !1, b: !1, c: !1, menu: !1, quit: !1},
      pressedKey: {up: !1, down: !1, left: !1, right: !1, a: !1, b: !1, c: !1, menu: !1, quit: !1},
      keyPressCtrl: {up: !0, down: !0, left: !0, right: !0, a: !0, b: !0, c: !0, menu: !0, quit: !0},
      keyDownGo: !1,
      keyUpGo: !1,
      keyPressedGo: !1,
      keyDownCallBack: null,
      keyUpCallBack: null,
      orientationChange: null,
      touchStart: null,
      touchEnd: null,
      touchMove: null,
      touchCancel: null,
      clickCallBack: null,
      mouseDownCallBack: null,
      mouseUpCallBack: null,
      mouseMoveCallBack: null,
      focused: !1,
      pageFocusCallBack: null,
      pageUnFocusCallBack: null,
      pageOffX: 0,
      pageOffY: 0
    }, u = {}, F = [], S = {}, K = {}, J = 0, q = 0, L = "", X = !1, y = {}, r = {
      xhrObj: null,
      pool: [],
      poolLength: 5,
      date: null,
      isTimeout: !1,
      param: {
        type: "get", data: null, dataType: "json", url: "", xhr: null, timeout: 5E3, before: function () {
        }, success: function () {
        }, error: function () {
        }, complete: function () {
        }
      }
    }, da = [], ea = {up: 38, down: 40, left: 37, right: 39, a: 90, b: 88, c: 67, menu: 49, quit: 50},
    z = {menu: 0, run: 1, stop: 2, over: 3, zone: 4, active: 5, loadImage: 6, loadedImage: 7}, fa, l = {
      getCanvasDom: function () {
        fa ||
        (fa = m.getDom("linkScreen"));
        return fa
      }, getOffsetX: function (a) {
        return a.offsetX || (a.targetTouches && a.targetTouches[0] ? a.targetTouches[0].clientX - l.getCanvasDom().offsetLeft : a.clientX - l.getCanvasDom().offsetLeft) || 0
      }, getOffsetY: function (a) {
        return a.offsetY || (a.targetTouches && a.targetTouches[0] ? a.targetTouches[0].clientY - l.getCanvasDom().offsetTop : a.clientY - l.getCanvasDom().offsetTop) || 0
      }, keydown: function (a) {
        var c = l.checkKey(a.keyCode);
        d.keyDownGo && void 0 != d.keys[c] && (d.keys[c] = !0);
        d.keyUpGo && void 0 !=
        d.lastKey[c] && (d.lastKey[c] = !1);
        d.keyPressCtrl[c] && d.keyPressedGo && (void 0 != d.pressedKey[c] && (d.pressedKey[c] = !0), d.keyPressCtrl[c] = !1);
        null != d.keyDownCallBack && d.keyDownCallBack(a)
      }, keyup: function (a) {
        var c = l.checkKey(a.keyCode);
        d.keyDownGo && void 0 != d.keys[c] && (d.keys[c] = !1);
        d.keyUpGo && void 0 != d.lastKey[c] && (d.lastKey[c] = !0);
        d.keyPressedGo && (void 0 != d.pressedKey[c] && (d.pressedKey[c] = !1), d.keyPressCtrl[c] = !0);
        null != d.keyUpCallBack && d.keyUpCallBack(a)
      }, orientationchange: function (a) {
        null != d.orientationChange &&
        d.orientationChange(a)
      }, touchstart: function (a) {
        d.pageOffX = l.getOffsetX(a);
        d.pageOffY = l.getOffsetY(a);
        null != d.touchStart && d.touchStart(a, d.pageOffX, d.pageOffY)
      }, touchend: function (a) {
        a.preventDefault();
        null != d.touchEnd && d.touchEnd(a, d.pageOffX, d.pageOffY)
      }, touchmove: function (a) {
        1 == a.touches.length && a.preventDefault();
        d.pageOffX = l.getOffsetX(a);
        d.pageOffY = l.getOffsetY(a);
        null != d.touchMove && d.touchMove(a, d.pageOffX, d.pageOffY)
      }, touchcancel: function (a) {
        d.pageOffX = l.getOffsetX(a);
        d.pageOffY = l.getOffsetY(a);
        null != d.touchCancel && d.touchCancel(a, d.pageOffX, d.pageOffY)
      }, click: function (a) {
        null != d.clickCallBack && d.clickCallBack(a, l.getOffsetX(a), l.getOffsetY(a))
      }, mouseDown: function (a) {
        null != d.mouseDownCallBack && d.mouseDownCallBack(a, l.getOffsetX(a), l.getOffsetY(a))
      }, mouseUp: function (a) {
        null != d.mouseUpCallBack && d.mouseUpCallBack(a, l.getOffsetX(a), l.getOffsetY(a))
      }, mouseMove: function (a) {
        null != d.mouseMoveCallBack && d.mouseMoveCallBack(a, l.getOffsetX(a), l.getOffsetY(a))
      }, pageFocus: function (a) {
        if (d.focused) return d.focused =
          !1;
        null != d.pageFocusCallBack && d.pageFocusCallBack(a)
      }, pageUnFocus: function (a) {
        null != d.pageUnFocusCallBack && d.pageUnFocusCallBack(a)
      }, checkKey: function (a) {
        var c = "0", i;
        for (i in ea) if (ea[i] == a) {
          c = i;
          break
        }
        return c
      }, getDeviceConfig: function () {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("duopaosafari") ? {
          device: "duopaoSafari",
          fps: 1,
          touch: !0,
          zoom: 1
        } : -1 != a.indexOf("iphone") || -1 != a.indexOf("ipod") ? {
          device: "iphone",
          fps: 1,
          touch: !0,
          zoom: 1
        } : -1 != a.indexOf("ipad") ? {device: "ipad", fps: 1, touch: !0, zoom: 1} :
          -1 != a.indexOf("duopaoandroid") ? {
            device: "duopaoAndroid",
            fps: 1,
            touch: !0,
            zoom: 1
          } : -1 != a.indexOf("duopaowindowsphone") ? {
            device: "duopaoWindowsPhone",
            fps: 1,
            touch: !0,
            zoom: 1
          } : -1 != a.indexOf("opera mobi") ? {
            device: "operamobile",
            fps: 1,
            touch: !0,
            zoom: 1
          } : -1 != a.indexOf("flyflow") ? {
            device: "flyflow",
            fps: 1,
            touch: !0,
            zoom: 1
          } : -1 != a.indexOf("android") ? {
            device: "android",
            fps: 1,
            touch: !0,
            zoom: 1
          } : -1 != a.indexOf("iemobile") ? {
            device: "iemobile",
            fps: 1,
            touch: !1,
            zoom: 1
          } : -1 != a.indexOf("j2me") ? {device: "j2me", fps: 1, touch: !1, zoom: 1} : -1 !=
          a.indexOf("symbian v5") ? {
            device: "symbian5",
            fps: 1,
            touch: !0,
            zoom: 1
          } : -1 != a.indexOf("symbian v3") ? {
            device: "symbian3",
            fps: 1,
            touch: !1,
            zoom: 1
          } : -1 != a.indexOf("chrome") ? {
            device: "chrome",
            fps: 1,
            touch: !1,
            zoom: 1
          } : -1 != a.indexOf("firefox") ? {
            device: "firefox",
            fps: 1,
            touch: !1,
            zoom: 1
          } : -1 != a.indexOf("msie") ? {
            device: "ie",
            fps: 0.5,
            touch: !1,
            zoom: 1
          } : -1 != a.indexOf("windows") ? {
            device: "ie",
            fps: 0.5,
            touch: !1,
            zoom: 1
          } : -1 != a.indexOf("safari") ? {device: "safari", fps: 1, touch: !1, zoom: 1} : -1 != a.indexOf("opera") ? {
            device: "opera", fps: 1, touch: !1,
            zoom: 1
          } : {device: "", fps: 1, touch: !1, zoom: 1}
      }, setImage: function (a, c, i, v, b) {
        if (!a || !c) return !1;
        u[a] || (u[a] = new Image, u[a].onload = function () {
          q++;
          this.loaded = !0;
          this.cache && m.canvas.pass(this.id, this.width, this.height).drawImage(this.id, 0, 0).pass().base().delImage(this.id, !0)
        }, u[a].src = c + ("" != L ? "?v=" + L : ""), u[a].id = a, u[a].url = c, u[a].benchId = i, u[a].bench = v, u[a].cache = b, u[a].refreshed = !1)
      }, setAudio: function (a, c, i, v, b, d) {
        if (!a || !c) return !1;
        y[a] || (c = new Audio(c + ("" != L ? "?v=" + L : "")), c.id = a, c.autoplay = v, c.preload =
          b, c.autobuffer = d, c.loop = i, y[c.id] = c)
      }, loadingCallBack: function (a, c, i) {
        var v = m.canvas.screen.getWidth(), b = m.canvas.screen.getHeight(), d = parseInt(v - v >> 1), e = b - 5,
          a = a > c ? c : a, ia = parseInt(100 * (a / c)) + "%";
        m.canvas.fillStyle("#000").fillRect(0, 0, v, b).fillStyle("#00FFFF").fillRect(d, e, parseInt(a / c * v), 5).fillStyle("#FFF").fillText("loading " + i, 5, b - 10).fillText(ia, v - m.canvas.measureText(ia).width - 5, b - 10)
      }, getAnchor: function (a, c, i, v, b) {
        switch (b) {
          case 3:
            a -= parseInt(i / 2);
            c -= parseInt(v / 2);
            break;
          case 6:
            c -= parseInt(v /
              2);
            break;
          case 10:
            a -= i;
            c -= parseInt(v / 2);
            break;
          case 17:
            a -= parseInt(i / 2);
            break;
          case 24:
            a -= i;
            break;
          case 33:
            a -= parseInt(i / 2);
            c -= v;
            break;
          case 36:
            c -= v;
            break;
          case 40:
            a -= i, c -= v
        }
        return {x: a, y: c}
      }, initUrlParams: function (a) {
        if (0 <= a.indexOf("?")) {
          var c = a.split("?"), a = [];
          0 <= c[1].indexOf("&") ? a = c[1].split("&") : a.push(c[1]);
          for (var c = [], i = 0; i < a.length; i++) 0 <= a[i].indexOf("=") && (c = a[i].split("="), da[c[0]] = c[1])
        }
      }, audioEnded: function () {
        m.audio.replay(this.id)
      }, pageLoaded: function () {
        X = !0;
        f.pageLoad(m)
      }
    }, k, G, P, Q, H, T,
    R, U, Y = [], ja = 0, Z = 0, V, M, W, N, m = jsGame = link = {
      init: function (a, c) {
        !a && !c ? (this.version = 1, this.request.init(), this.canvas.initDevice(), this.localStorage.init(), this.sessionStorage.init()) : (s = a, t = c);
        return this
      },
      extend: function (a, c, i) {
        i = i || {};
        if (c) {
          var b = function () {
          };
          b.prototype = c.prototype;
          a.prototype = new b;
          a.prototype.constructor = a;
          a.prototype.superClass = c.prototype;
          b = null
        }
        for (var d in i) a.prototype[d] = i[d];
        i = null;
        return a
      },
      setAjax: function (a) {
        r.param = this.objExtend(r.param, a || {});
        return this
      },
      ajax: function (a) {
        a &&
        r.pool.length < r.poolLength && r.pool.push(a);
        a && a.clear && (r.pool = []);
        r.xhr || (r.xhr = new XMLHttpRequest, r.xhr.onreadystatechange = function () {
          if (r.isTimeout) return !1;
          var a = r.xhr, c = r.xhrObj;
          if (c && 4 == a.readyState) {
            r.date && (clearTimeout(r.date), r.date = null);
            if (200 == a.status) {
              switch (c.dataType) {
                case "HTML":
                case "SCRIPT":
                case "XML":
                  a = a.responseText;
                  break;
                default:
                  a = a.responseText.replace(/<[^>].*?>/g, "");
                  break;
                case "JSON":
                  a = m.getJson(a.responseText)
              }
              c.success(a, c);
              c.complete(c)
            } else c.error(c, "error");
            r.xhrObj =
              null;
            m.ajax()
          }
        });
        if (null == r.xhrObj && 0 < r.pool.length) {
          r.xhrObj = this.objExtend(r.param, r.pool.shift() || {});
          var a = r.xhr, c = r.xhrObj, i = r.xhrObj.url, b = null, d = c.data;
          c.type = c.type.toUpperCase();
          c.dataType = c.dataType.toUpperCase();
          r.isTimeout = !1;
          if ("string" == typeof d) b = d; else if ("object" == typeof d) {
            var b = [], e;
            for (e in d) b.push(e + "=" + d[e]);
            b = b.join("&")
          }
          "GET" == c.type && (i += "?" + b);
          a.open(c.type, i, !0);
          c.before(r.xhrObj);
          "POST" == c.type && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
          a.send(b);
          a = c = b = d = i = null;
          r.date = setTimeout(function () {
            m.ajax({clear: !0});
            r.isTimeout = !0;
            r.xhrObj && (r.xhrObj.error(r.xhrObj, "timeout"), r.xhrObj = null)
          }, r.xhrObj.timeout)
        }
        return this
      },
      getDom: function (a) {
        try {
          return document.getElementById(a)
        } catch (c) {
          return document.all[a]
        }
      },
      objExtend: function () {
        var a = this.clone(arguments[0]) || {}, c = 1, i = arguments.length, b = !1, d;
        "boolean" === typeof a && (b = a, a = arguments[1] || {}, c = 2);
        "object" !== typeof a && (a = {});
        i == c && (a = this, --c);
        if (!arguments[1]) return a;
        for (; c < i; c++) if (null !=
          (d = arguments[c])) for (var e in d) {
          var h = a[e], g = d[e];
          a !== g && (b && g && "object" === typeof g && !g.nodeType ? a[e] = this.objExtend(b, h || (null != g.length ? [] : {}), g) : void 0 !== g && (a[e] = g))
        }
        return a
      },
      getJson: function (a) {
        var c = {};
        try {
          c = window.JSON ? JSON.parse(a) : h("(" + a + ")")
        } catch (i) {
        }
        return c
      },
      clone: function (a) {
        var c = a || [];
        if ("object" == typeof c) if (void 0 != c.length) for (var a = [], i = 0, b = c.length; i < b; i++) void 0 !== c[i] && (a[i] = null != c[i] && "object" == typeof c[i] ? void 0 != c[i].length ? c[i].slice(0) : c[i] : c[i]); else for (i in a = {},
          c) void 0 !== c[i] && (a[i] = null != c[i] && "object" == typeof c[i] ? void 0 != c[i].length ? c[i].slice(0) : c[i] : c[i]);
        return a
      },
      classes: {},
      comm: {
        registerNotify: function (a, c) {
          null != a && a.register(c)
        }, rangeRegisterNotify: function (a, c) {
          for (var i = 0; i < c.length; i++) m.commandFuns.registerNotify(a, c[i])
        }, unRegisterNotify: function (a, c) {
          null != a && a.unregister(c)
        }, rangeUnRegisterNotify: function (a, c) {
          for (var i = 0; i < c.length; i++) m.commandFuns.unRegisterNotify(a, c[i])
        }, getRandom: function (a, c) {
          if (c) return Math.round(Math.random() *
            (c - a) + a);
          var i = a;
          if (!i || 0 > i) i = 0;
          return Math.round(Math.random() * i)
        }, getArray: function (a, c) {
          Y = [];
          ja = a.toString().length;
          Z = a;
          for (var i = 0; i < ja; i++) Y.push(Z % 10), Z = parseInt(Z / 10);
          c || Y.reverse();
          return Y
        }, inArray: function (a, c) {
          var i, b = c.length;
          for (i = 0; i < b; i++) if (a == c[i]) return i;
          return -1
        }, collision: function (a, c, i, b, d, e, g, h) {
          return g && Math.abs(a + parseInt(i / 2) - (d + parseInt(g / 2))) < parseInt((i + g) / 2) && Math.abs(c + parseInt(b / 2) - (e + parseInt(h / 2))) < parseInt((b + h) / 2) ? !0 : !1
        }, circleCollision: function (a, c, i, b, d, e) {
          a =
            Math.abs(a - b);
          c = Math.abs(c - d);
          return Math.sqrt(a * a + c * c) < i + e ? !0 : !1
        }, createPath: function (a, c, i, b, d) {
          for (var e = [], a = (i || 0) - (a || 0), g = (b || 0) - (c || 0), c = Math.sqrt(Math.pow(a, 2) + Math.pow(g, 2)), b = d = d || 5, h = i = 0, f = 180 * (Math.atan2(g, a) / Math.PI), f = 0 <= f ? f : f + 360; b < c + d;) b = b > c ? c : b, a = b * Math.cos(f / 180 * Math.PI), g = b * Math.sin(f / 180 * Math.PI), e.unshift([a - i, g - h]), i = a, h = g, b += d;
          return e
        }
      },
      localStorage: {
        init: function () {
          V = this;
          if (!M) {
            var a;
            try {
              a = window.localStorage, a.getItem || (a.getItem = function () {
                return null
              }), a.setItem || (a.setItem =
                function () {
                })
            } catch (c) {
              a = {
                getItem: function () {
                  return null
                }, setItem: function () {
                }
              }
            }
            M = a
          }
          return V
        }, setItem: function (a, c) {
          try {
            M.setItem(a, c)
          } catch (i) {
          }
          return V
        }, getItem: function (a) {
          return M.getItem(a)
        }, removeItem: function (a) {
          M.removeItem(a);
          return V
        }, clear: function () {
          M.clear();
          return V
        }, key: function (a) {
          return M.key(a)
        }, getLength: function () {
          return M.length
        }, base: function () {
          return m
        }
      },
      sessionStorage: {
        init: function () {
          W = this;
          if (!N) {
            var a;
            try {
              a = window.sessionStorage, a.getItem || (a.getItem = function () {
                return null
              }),
              a.setItem || (a.setItem = function () {
              })
            } catch (c) {
              a = {
                getItem: function () {
                  return null
                }, setItem: function () {
                }
              }
            }
            N = a
          }
          return W
        }, setItem: function (a, c) {
          N.setItem(a, c);
          return W
        }, getItem: function (a) {
          return N.getItem(a)
        }, removeItem: function (a) {
          N.removeItem(a);
          return W
        }, clear: function () {
          N.clear();
          return W
        }, key: function (a) {
          return N.key(a)
        }, getLength: function () {
          return N.length
        }, base: function () {
          return m
        }
      },
      pageLoad: function (a) {
        null == f.pageLoad && (f.pageLoad = a, window.addEventListener("load", function () {
          m.canvas.init();
          m.graphics.ANCHOR_LT =
            20;
          m.graphics.ANCHOR_LV = 6;
          m.graphics.ANCHOR_LB = 36;
          m.graphics.ANCHOR_HT = 17;
          m.graphics.ANCHOR_HV = 3;
          m.graphics.ANCHOR_HB = 33;
          m.graphics.ANCHOR_RT = 24;
          m.graphics.ANCHOR_RV = 10;
          m.graphics.ANCHOR_RB = 40;
          var a = m.getDom("linkScreen");
          a && (m.canvas.screen.getTouch() ? (window.addEventListener("orientationchange", l.orientationchange, !1), a.addEventListener("touchstart", l.touchstart, !1), a.addEventListener("touchend", l.touchend, !1), a.addEventListener("touchmove", l.touchmove, !1), a.addEventListener("touchcancel", l.touchcancel,
            !1)) : (document.onkeydown = l.keydown, document.onkeyup = l.keyup, a.addEventListener("click", l.click, !1), a.addEventListener("mousedown", l.mouseDown, !1), a.addEventListener("mouseup", l.mouseUp, !1), a.addEventListener("mousemove", l.mouseMove, !1)));
          a = m.canvas.screen.getDevice();
          "ipad" == a || "iphone" == a ? (d.focused = !0, window.addEventListener("pageshow", l.pageFocus, !1), window.addEventListener("pagehide", l.pageUnFocus, !1)) : ("firefox" == a && (d.focused = !0), window.addEventListener("focus", l.pageFocus, !1), window.addEventListener("blur",
            l.pageUnFocus, !1));
          m.canvas.fillStyle("#000").fillRect(0, 0, m.canvas.screen.getWidth(), m.canvas.screen.getHeight());
          X = !1;
          m.gameFlow.run().base().play();
          0 < F.length ? m.loadImage(F) : l.pageLoaded()
        }, !1));
        return m
      },
      menu: function (a) {
        "function" == typeof a && (f.menu = a);
        return this
      },
      run: function (a) {
        "function" == typeof a && (f.runFn = a);
        return this
      },
      stop: function (a) {
        "function" == typeof a && (f.stop = a);
        return this
      },
      over: function (a) {
        "function" == typeof a && (f.over = a);
        return this
      },
      zone: function (a) {
        "function" == typeof a && (f.zone =
          a);
        return this
      },
      active: function (a) {
        "function" == typeof a && (f.active = a);
        return this
      },
      play: function () {
        f.run || (f.run = function () {
          var a = Date.now();
          switch (f.gameFlow) {
            case z.menu:
              f.menu();
              break;
            case z.run:
              f.runFn();
              break;
            case z.stop:
              f.stop();
              break;
            case z.over:
              f.over();
              break;
            case z.zone:
              f.zone(f.zoneArgs);
              break;
            case z.active:
              f.active(f.activeArgs);
              break;
            case z.loadImage:
              if (null != l.loadingCallBack) {
                var c = J, i = q > c ? c : q;
                i == c && (f.gameFlow = z.loadedImage);
                0 < c && l.loadingCallBack(i, c, "image")
              }
              break;
            case z.loadedImage:
              f.gameFlow =
                f.loadedImageToGameFlow, F = [], q = 0, X || l.pageLoaded()
          }
          f.spendTime = Date.now() - a
        });
        f.playTimer || (f.isPause = !1, (f.rafRun = function () {
          var a = Date.now();
          a - f.lastDate >= f.timeout - f.spendTime && (f.lastDate = a, f.isPause || f.run());
          f.rafRun && (f.playTimer = requestAnimationFrame(f.rafRun))
        })());
        return this
      },
      pause: function () {
        f.playTimer && (f.isPause = !0, f.rafRun = null, cancelAnimationFrame(f.playTimer), f.playTimer = null);
        return this
      },
      gameFlow: {
        menu: function () {
          null != f.menu && (f.gameFlow = z.menu, m.resetKeys());
          return this
        }, run: function () {
          null !=
          f.runFn && (f.gameFlow = z.run, m.resetKeys());
          return this
        }, stop: function () {
          null != f.stop && (f.gameFlow = z.stop, m.resetKeys());
          return this
        }, over: function () {
          null != f.over && (f.gameFlow = z.over, m.resetKeys());
          return this
        }, zone: function (a) {
          null != f.zone && (f.gameFlow = z.zone, f.zoneArgs = a, m.resetKeys());
          return this
        }, active: function (a) {
          null != f.active && (f.gameFlow = z.active, f.activeArgs = a, m.resetKeys());
          return this
        }, isIn: function (a) {
          return f.gameFlow == z[a]
        }, base: function () {
          return m
        }
      },
      keyRepeated: function (a) {
        d.keyDownGo ||
        (d.keyDownGo = !0);
        return d.keys[a]
      },
      keyPressed: function (a) {
        d.keyPressedGo || (d.keyPressedGo = !0);
        var c = d.pressedKey[a];
        d.pressedKey[a] = !1;
        return c
      },
      keyReleased: function (a) {
        d.keyUpGo || (d.keyUpGo = !0);
        var c = d.lastKey[a];
        d.lastKey[a] = !1;
        return c
      },
      setKeyCode: function (a, c) {
        d.keys[a] = !1;
        d.lastKey[a] = !1;
        d.pressedKey[a] = !1;
        d.keyPressCtrl[a] = !0;
        ea[a] = c;
        return this
      },
      resetKeys: function () {
        for (var a in d.keys) d.keys[a] = !1;
        for (a in d.lastKey) d.lastKey[a] = !1;
        for (a in d.pressedKey) d.pressedKey[a] = !1;
        for (a in d.keyPressCtrl) d.keyPressCtrl[a] =
          !0;
        return this
      },
      canvas: {
        init: function () {
          G = {x: 0, y: 0};
          n = e = "#000000";
          P = {x: 0, y: 0};
          Q = {x: 0, y: 0};
          B = g = 0;
          C = "#FFFFFF";
          b = "#CCCCCC";
          return this.pass()
        }, initDevice: function () {
          T = l.getDeviceConfig();
          A = T.device;
          D = T.fps;
          ha = T.touch;
          x = T.zoom;
          return this
        }, pass: function (a, c, i) {
          var b, a = !a || "" == a ? "linkScreen" : a;
          E[a] || (b = this.base().getDom(a) || document.createElement("canvas"), E[a] = null, delete E[a], E[a] = b.getContext("2d"), b.width = c ? c : s, b.style.width = parseInt(b.width * x) + "px", b.height = i ? i : t, b.style.height = parseInt(b.height *
            x) + "px", w[a] = null, delete w[a], w[a] = b);
          k = E[a];
          k.font = p;
          H = w[a];
          R = parseInt(H.width);
          U = parseInt(H.height);
          this.screen.setId(a);
          return this
        }, font: function (a) {
          p = a;
          k.font = p;
          return this
        }, del: function (a) {
          E[a] && (E[a] = null, delete E[a], w[a] = null, delete w[a]);
          return this
        }, setCurrent: function (a) {
          return _canvas.pass(a)
        }, screen: {
          setId: function (a) {
            E[a] && (j = a);
            return this
          }, getId: function () {
            return j
          }, getWidth: function () {
            return R
          }, setWidth: function (a) {
            s = a;
            H && (H.width = s, H.style.width = H.width + "px", R = parseInt(H.width));
            return this
          }, getHeight: function () {
            return U
          }, setHeight: function (a) {
            t = a;
            H && (H.height = t, H.style.height = H.height + "px", U = parseInt(H.height));
            return this
          }, getDevice: function () {
            return A
          }, getFps: function () {
            return D
          }, setFps: function (a) {
            0 < a && (D = a);
            return this
          }, getTouch: function () {
            return ha
          }, getZoom: function () {
            return x
          }
        }, fillStyle: function (a) {
          k.fillStyle = a;
          return this
        }, fillRect: function (a, c, i, b, d) {
          i = i ? i : 0;
          b = b ? b : 0;
          d ? Q = l.getAnchor(a, c, i, b, d) : (Q.x = a, Q.y = c);
          k.fillRect(Q.x, Q.y, i, b);
          return this
        }, fillText: function (a,
                               c, i, b) {
          k.font = b || p;
          k.fillText(a, c, i);
          return this
        }, clearRect: function (a, c, i, b) {
          k.clearRect(a, c, i, b);
          return this
        }, clearScreen: function () {
          return this.clearRect(0, 0, R, U)
        }, fillScreen: function () {
          return this.fillRect(0, 0, R, U)
        }, strokeStyle: function (a) {
          k.strokeStyle = a;
          return this
        }, lineWidth: function (a) {
          k.lineWidth = a || 1;
          return this
        }, strokeRect: function (a, c, i, b, d) {
          d ? P = l.getAnchor(a, c, i, b, d) : (P.x = a, P.y = c);
          k.strokeRect(P.x, P.y, i, b);
          return this
        }, strokeText: function (a, c, i, b) {
          k.font = b || p;
          k.strokeText(a, c, i);
          return this
        },
        setColor: function (a, c, i) {
          null == i ? (e = a, n = c ? c : a) : n = e = "rgb(" + a + ", " + c + ", " + i + ")";
          return this.fillStyle(e).strokeStyle(n)
        }, drawImage: function (a, c, i, b, d, e, g, h, f, q) {
          var j = m.getImage(a);
          if (j.refreshed) this.drawCache(a, c, i, b, d, e, g, h, f, q); else if (null != j.src) null != h && (c = 0 > c ? 0 : c, h = 0 >= h ? 0.1 : h), null != f && (i = 0 > i ? 0 : i, f = 0 >= f ? 0.1 : f), null != b && null != h && (b = 0 >= b ? 0.1 : c + b <= j.width ? b : j.width - c), null != d && null != f && (d = 0 >= d ? 0.1 : i + d <= j.height ? d : j.height - i), j.loaded && (b ? d ? q ? (G = l.getAnchor(e, g, h, f, q), k.drawImage(j, c, i, b, d, G.x,
            G.y, h, f)) : k.drawImage(j, c, i, b, d, e, g, h, f) : (G = l.getAnchor(c, i, j.width, j.height, b), k.drawImage(j, G.x, G.y)) : k.drawImage(j, c, i)); else if ((a = K[a]) && !a.inited) l.setImage(a.id, a.src, a.benchId, a.bench, a.cache), a.inited = !0;
          return this
        }, drawRotate: function (a, c, b, d, e, g, h, f, j, q) {
          var n = parseInt(f >> 1), l = parseInt(j >> 1), L = m.getImage(a), a = L ? L : w[a], g = g - n, h = h - l;
          k.save();
          k.translate(g + n, h + l);
          k.rotate(q * Math.PI / 180);
          k.translate(-(g + n), -(h + l));
          k.drawImage(a, c, b, d, e, g, h, f, j);
          k.restore();
          return this
        }, drawCache: function (a,
                                c, b, d, e, g, h, f, j, q) {
          if (a = w[a]) null != f && (c = 0 > c ? 0 : c, f = 0 >= f ? 0.1 : f), null != j && (b = 0 > b ? 0 : b, j = 0 >= j ? 0.1 : j), null != d && null != f && (d = 0 >= d ? 0.1 : c + d <= a.width ? d : a.width - c), null != e && null != j && (e = 0 >= e ? 0.1 : b + e <= a.height ? e : a.height - b), d ? e ? q ? (G = l.getAnchor(g, h, f, j, q), k.drawImage(a, c, b, d, e, G.x, G.y, f, j)) : k.drawImage(a, c, b, d, e, g, h, f, j) : (G = l.getAnchor(c, b, a.width, a.height, d), k.drawImage(a, G.x, G.y)) : k.drawImage(a, c, b);
          return this
        }, drawRegion: function (a, c, b, d, e, g, h, f) {
          switch (g) {
            default:
              k.transform(1, 0, 0, 1, h, f);
              break;
            case 5:
              k.transform(0,
                1, -1, 0, e + h, f);
              break;
            case 3:
              k.transform(-1, 0, 0, -1, d + h, e + f);
              break;
            case 6:
              k.transform(0, -1, 1, 0, h, d + f);
              break;
            case 2:
              k.transform(-1, 0, 0, 1, d + h, f);
              break;
            case 7:
              k.transform(0, -1, -1, 0, e + h, d + f);
              break;
            case 1:
              k.transform(1, 0, 0, -1, h, e + f);
              break;
            case 4:
              k.transform(0, 1, 1, 0, h, f)
          }
          (!m.getImage(a).cache ? this.drawImage : this.drawCache)(a, c, b, d, e, 0, 0, d, e);
          k.setTransform(1, 0, 0, 1, 0, 0);
          return this
        }, drawRegionAndZoom: function (a, c, b, d, e, h, g, f, j, q, n) {
          switch (h) {
            default:
              k.transform(1, 0, 0, 1, g, f);
              break;
            case 5:
              k.transform(0, 1, -1,
                0, n + g, f);
              break;
            case 3:
              k.transform(-1, 0, 0, -1, q + g, n + f);
              break;
            case 6:
              k.transform(0, -1, 1, 0, g, q + f);
              break;
            case 2:
              k.transform(-1, 0, 0, 1, q + g, f);
              break;
            case 7:
              k.transform(0, -1, -1, 0, n + g, q + f);
              break;
            case 1:
              k.transform(1, 0, 0, -1, g, n + f);
              break;
            case 4:
              k.transform(0, 1, 1, 0, g, f)
          }
          (!m.getImage(a).cache ? this.drawImage : this.drawCache)(a, c, b, d, e, 0, 0, q, n);
          k.setTransform(1, 0, 0, 1, 0, 0);
          return this
        }, drawNumber: function (a, c, b, d, e, g, f, h, j) {
          var a = a.toString(), q = a.length, h = h ? h : b, j = j ? j : d;
          if ("center" == f) {
            e += parseInt(R - h * q >> 1);
            for (f = 0; f <
            q; f++) this.drawImage(c, parseInt(a.charAt(f)) * b, 0, b, d, e + f * h, g, h, j)
          } else if (!0 == f) for (f = 0; f < q; f++) this.drawImage(c, parseInt(a.charAt(f)) * b, 0, b, d, e + f * h, g, h, j); else if (!1 == f) for (f = q - 1; 0 <= f; f--) this.drawImage(c, parseInt(a.charAt(f)) * b, 0, b, d, e - (q - 1 - f) * h, g, h, j, m.graphics.ANCHOR_RT);
          return this
        }, moveTo: function (a, c) {
          k.moveTo(a, c);
          return this
        }, lineTo: function (a, c) {
          k.lineTo(a, c);
          return this
        }, stroke: function () {
          k.stroke();
          return this
        }, fill: function () {
          k.fill();
          return this
        }, beginPath: function () {
          k.beginPath();
          return this
        },
        closePath: function () {
          k.closePath();
          return this
        }, arc: function (a, c, b, d, e, f) {
          k.arc(a, c, b, d, e, f);
          return this
        }, quadraticCurveTo: function (a, c, b, d) {
          k.quadraticCurveTo(a, c, b, d);
          return this
        }, bezierCurveTo: function (a, c, b, d, e, f) {
          k.bezierCurveTo(a, c, b, d, e, f);
          return this
        }, measureText: function (a) {
          var c = k.measureText(a), b = c.width, c = c.height ? c.height : parseInt(k.font);
          return {width: "j2me" == this.screen.getDevice() ? k.measureText(a) : b, height: c}
        }, translate: function (a, c) {
          k.translate(a, c);
          return this
        }, drawLine: function (a,
                               c, b, d) {
          return this.beginPath().moveTo(a, c).lineTo(b, d).closePath().stroke()
        }, drawRect: function (a, c, b, d, e) {
          return this.strokeRect(a, c, b, d, e)
        }, drawString: function (a, c, d, e, f, h, j, q) {
          g = c;
          B = d;
          k.font = q || p;
          if (e) switch (e) {
            case 4:
              g = 0;
              break;
            case 2:
              g = parseInt(this.screen.getWidth() - this.measureText(a).width >> 1);
              break;
            case 8:
              g = this.screen.getWidth() - this.measureText(a).width
          }
          f && (C = h ? h : "#000000", b = j ? j : "#CCCCCC", this.fillStyle(b).fillText(a, g + 1, B + 1, q).fillStyle(C));
          return this.fillText(a, g, B, q).fillStyle("rgb(0, 0, 0)")
        },
        drawSubstring: function (a, c, b, d, e, f, h, g, j, q) {
          return this.drawString(a.substring(c, c + b), d, e, f, h, g, j, q)
        }, clip: function () {
          k.clip();
          return this
        }, save: function () {
          k.save();
          return this
        }, restore: function () {
          k.restore();
          return this
        }, rect: function (a, c, b, d) {
          k.rect(a, c, b, d);
          return this
        }, rotate: function (a) {
          k.rotate(a);
          return this
        }, setTransform: function (a, c, b, d, e, f) {
          k.setTransform(a, c, b, d, e, f);
          return this
        }, scale: function (a, c) {
          k.scale(a, c);
          return this
        }, globalAlpha: function (a) {
          k.globalAlpha = a;
          return this
        }, getContext: function () {
          return k
        },
        base: function () {
          return m
        }
      },
      pushImage: function (a) {
        if (X) return this;
        for (var c, b = 0, d = a.length; b < d; b++) if ((c = a[b]) && !S[c.id]) S[c.id] = !0, F.push(a[b]);
        return this
      },
      loadImage: function (a) {
        if (f.gameFlow != z.loadImage && 0 < a.length) {
          f.loadedImageToGameFlow = f.gameFlow;
          f.gameFlow = z.loadImage;
          F = a;
          J = F.length;
          for (var a = q = 0, c; c = F[a]; a++) u[c.id] ? q++ : l.setImage(c.id, c.src, c.benchId)
        }
        return this
      },
      asyncImage: function (a) {
        for (var c, b = 0, d = a.length; b < d; b++) c = a[b] || {}, K[c.id] || (K[c.id] = c);
        return this
      },
      verImage: function (a) {
        "" ==
        L && (L = a);
        return this
      },
      loadingCallBack: function (a) {
        "function" == typeof a && (l.loadingCallBack = a);
        return this
      },
      addImage: function (a, c) {
        a && (c && !u[a]) && (u[a] = c);
        return this
      },
      getImage: function (a) {
        return u[a] ? u[a] : {src: null}
      },
      delImage: function (a, c) {
        u[a] && (u[a] = null, delete u[a], c && (u[a] = {id: a, loaded: !0, cache: !0, refreshed: !0}));
        return this
      },
      getAsyncImage: function (a) {
        return K[a] ? K[a] : {src: null}
      },
      clearAsyncImageCache: function () {
        try {
          var a, c, b;
          for (b in u) if (a = u[b]) if (c = K[b]) c.inited = !1, this.delImage(b).canvas.del(b)
        } catch (d) {
        }
        return this
      },
      audio: {
        play: function (a) {
          var c = y[a];
          if (c) try {
            c.currentTime >= c.duration ? this.replay(a) : c.paused && c.play()
          } catch (b) {
          }
          return this
        }, playRange: function (a, c, b) {
          if (a = y[a]) try {
            a.__timeupdateCallBack__ || a.addEventListener("timeupdate", a.__timeupdateCallBack__ = function () {
              this.currentTime >= this.__to__ && (this.loop ? this.currentTime = this.__from__ : this.pause())
            }, !1), a.__from__ = null == c ? 0 : c, a.__to__ = null == b ? a.duration : b, this.setCurrentTime(a.id, a.__from__).play(a.id)
          } catch (d) {
          }
          a = null;
          return this
        }, pause: function (a) {
          if (y[a]) try {
            y[a].pause()
          } catch (c) {
          }
          return this
        },
        pauseAll: function () {
          for (var a in y) this.pause(a);
          return this
        }, mute: function (a, c) {
          if (y[a]) try {
            y[a].muted = c
          } catch (b) {
          }
        }, vol: function (a, c) {
          if (y[a]) try {
            y[a].volume = c
          } catch (b) {
          }
          return this
        }, loop: function (a, c) {
          if (y[a]) try {
            y[a].loop = c
          } catch (b) {
          }
          return this
        }, replay: function (a) {
          this.setCurrentTime(a, 0).play(a);
          return this
        }, setCurrentTime: function (a, c) {
          var b = y[a];
          if (b) try {
            0 > c ? c = 0 : c > b.duration && (c = b.duration), b.currentTime = c || 0
          } catch (d) {
          }
          return this
        }, getAudio: function (a) {
          return y[a]
        }, del: function (a) {
          var c = y[a];
          c && c.__timeupdateCallBack__ && (c.pause(), c.removeEventListener("timeupdate", c.__timeupdateCallBack__, !1), y[a] = null, delete y[a]);
          return this
        }, base: function () {
          return m
        }
      },
      initAudio: function (a) {
        if (!window.Audio) return this;
        if (0 < a.length) {
          y = {};
          for (var c, b = 0; b < a.length; b++) (c = a[b]) && l.setAudio(c.id, c.src, c.loop, c.autoplay, c.preload, c.autobuffer)
        }
        return this
      },
      setRunFrequency: function (a) {
        f.timeout = a;
        return this
      },
      events: {
        keyDown: function (a) {
          d.keyDownGo || (d.keyDownGo = !0);
          d.keyUpGo || (d.keyUpGo = !0);
          d.keyPressedGo ||
          (d.keyPressedGo = !0);
          d.keyDownCallBack = a;
          return this
        }, keyUp: function (a) {
          d.keyDownGo || (d.keyDownGo = !0);
          d.keyUpGo || (d.keyUpGo = !0);
          d.keyPressedGo || (d.keyPressedGo = !0);
          d.keyUpCallBack = a;
          return this
        }, orientationChange: function (a) {
          d.orientationChange = a;
          return this
        }, touchStart: function (a) {
          d.touchStart = a;
          return this
        }, touchEnd: function (a) {
          d.touchEnd = a;
          return this
        }, touchMove: function (a) {
          d.touchMove = a;
          return this
        }, touchCancel: function (a) {
          d.touchCancel = a;
          return this
        }, click: function (a) {
          d.clickCallBack = a;
          return this
        },
        mouseDown: function (a) {
          d.mouseDownCallBack = a;
          return this
        }, mouseUp: function (a) {
          d.mouseUpCallBack = a;
          return this
        }, mouseMove: function (a) {
          d.mouseMoveCallBack = a;
          return this
        }, createEvent: function (a, c) {
          var b = document.getElementById(a);
          if (b) {
            var d = document.createEvent("HTMLEvents");
            d.initEvent(c, !1, !0);
            b.dispatchEvent(d)
          }
        }, pageFocus: function (a) {
          d.pageFocusCallBack = a;
          return this
        }, pageUnFocus: function (a) {
          d.pageUnFocusCallBack = a;
          return this
        }, base: function () {
          return m
        }
      },
      ui: {},
      graphics: {
        HCENTER: 1, VCENTER: 2, LEFT: 4,
        RIGHT: 8, TOP: 16, BOTTOM: 32
      },
      trans: {
        TRANS_NONE: 0,
        TRANS_ROT90: 5,
        TRANS_ROT180: 3,
        TRANS_ROT270: 6,
        TRANS_MIRROR: 2,
        TRANS_MIRROR_ROT90: 7,
        TRANS_MIRROR_ROT180: 1,
        TRANS_MIRROR_ROT270: 4
      },
      request: {
        init: function () {
          l.initUrlParams(window.leiyooHref ? window.leiyooHref : location.href)
        }, get: function (a) {
          return da[a] ? da[a] : ""
        }
      }
    }.init(), $ = document.getElementsByTagName("head")[0], I = null, aa = null, ba = null, ca = null, ga = function () {
      aa && (clearTimeout(aa), aa = null)
    };
  link.getScript = function (a) {
    if (!$ || I) return !1;
    a = m.objExtend({
      url: "", before: function () {
      },
      success: function () {
      }, error: function () {
      }, timeout: 5E3, contentType: "text/javascript", destroyed: !0
    }, a || {});
    "" != a.url && (a.before(), I = document.createElement("script"), I.type = a.contentType, I.async = !0, I.src = a.url, I.destroyed = a.destroyed, ba = a.success, ca = a.error, I.onload = function () {
      ga();
      ba && (ba(), ba = null);
      this.destroyed && $.removeChild(this);
      I = null
    }, $.appendChild(I), ga(), aa = setTimeout(function () {
      ga();
      ca && (ca("timeout"), ca = null);
      I && I.destroyed && $.removeChild(I);
      I = null
    }, a.timeout));
    a = null;
    return m
  };
  var O = function () {
    return (65536 *
      (1 + Math.random()) | 0).toString(16).substring(1)
  };
  link.getNewGuid = function () {
    return O() + O() + "-" + O() + "-" + O() + "-" + O() + "-" + O() + O() + O()
  };
  link.classes.Observer = function () {
    this.group = []
  };
  link.classes.Observer.prototype.register = function (a) {
    if (null == a) return this;
    -1 == m.comm.inArray(a, this.group) && this.group.push(a);
    return this
  };
  link.classes.Observer.prototype.unregister = function (a) {
    if (null == a) return this;
    a = m.commandFuns.inArray(a, this.group);
    -1 < a && this.group.splice(a, 1);
    return this
  };
  link.classes.Observer.prototype.notify =
    function (a) {
      for (var c = 0; c < this.group.length; c++) if (null != this.group[c]) this.group[c](a);
      return this
    };
  link.classes.Observer.prototype.clear = function () {
    0 < this.group.length && this.group.splice(0, this.group.length);
    return this
  };
  link.classes.Timer = function (a, c, b, d, e) {
    this.id = a;
    this._initTime = c;
    this._dateTime = Date.now();
    this.time = this._initTime;
    this.callBack = b;
    this.millisec = d || 1E3;
    this.data = e;
    this.timeout = null
  };
  link.classes.Timer.prototype.stop = function () {
    this.timeout && (clearTimeout(this.timeout), this.timeout =
      null)
  };
  link.classes.Timer.prototype.start = function (a) {
    a && (this.time = this._initTime, this._dateTime = Date.now());
    this.stop();
    this.timeout = setTimeout(function (a) {
      var b = Date.now(), d = parseInt(Math.round((b - a._dateTime) / a.millisec));
      a._dateTime = b;
      a.time -= d;
      a.callBack ? a.callBack(a) : a.stop();
      0 <= a.time ? a.start() : (a.stop(), a.time = 0)
    }, this.millisec, this)
  };
  link.classes.WebSocket = function (a, c, b, d, e) {
    this.ipPort = a || "";
    this.socket = new WebSocket(this.ipPort);
    this.socket.onopen = c;
    this.socket.onmessage = b;
    this.socket.onclose =
      d;
    this.socket.onerror = e
  };
  link.classes.WebSocket.prototype.send = function (a) {
    this.socket.send(a)
  };
  link.classes.WebSocket.prototype.close = function () {
    this.socket.close()
  };
  link.classes.observer = link.classes.Observer;
  link.classes.timer = link.classes.Timer;
  link.classes.webSocket = link.classes.websocket = link.classes.WebSocket;
  link.commandFuns = link.comm;
  link.commandFuns.collisionCheck = link.commandFuns.collision;
  link.commandFuns.circleCollisionCheck = link.commandFuns.circleCollision;
  link.initImage = link.pushImage
})();
(function (g) {
  var B = function (b, e) {
    return 0 == b && 0 == e ? 0 : 0 < b && 0 > e ? 1 : 0 < b && 0 == e ? 2 : 0 < b && 0 < e ? 3 : 0 == b && 0 < e ? 4 : 0 > b && 0 < e ? 5 : 0 > b && 0 == e ? 6 : 0 > b && 0 > e ? 7 : 0
  };
  link.action = {};
  link.action.Role = function (b, e, n, h, j, p, s, t) {
    this.imageNames = j || [];
    this.rects = p || [];
    this.frames = s || [];
    this.actions = t || [];
    j = this.frames;
    p = this.actions;
    s = [];
    if (0 < p.length) {
      for (t = 0; t < p.length; t++) {
        for (var j = [], b = p[t].frames, w = 0; w < b.length; w++) j.push({
          args: [b[w][0], b[w][1], b[w][2]],
          step: b[w][3]
        });
        s.push(new g.action.sprite(j, p[t].loop, 0))
      }
      b = s
    }
    this.sprites =
      b || [];
    this.x = e || 0;
    this.y = n || 0;
    this.step = this.dy = this.dx = 0;
    this.id = "";
    this.mapOffx = this.x;
    this.mapOffy = this.y;
    this.svy = this.svx = null;
    this._cr = this.current = h || 0;
    this.zoom = 1;
    this.angle = 0;
    this._zooms = [];
    this._angles = [];
    this._moveDs = [4, 7, 5, 5, 6, -5, -5, -7];
    this._stopDs = [0, -3, 1, 1, 2, -1, -1, -3];
    this._path = [];
    e = this.getSprite().getFrame();
    e = this.frames[e.args[0]];
    this._fA = e.fA;
    this.aR = e.aR;
    this.bR = e.bR;
    this._skipMoveDs = !1;
    this.onstart = this.onend = this._stopedAction = null;
    this._locked = !1;
    this.speed = 5
  };
  link.action.Role.prototype.setSprite =
    function (b, e, n) {
      if (this._locked) return this;
      var h = void 0 != b ? b : 0, j = 0 <= h ? g.trans.TRANS_NONE : g.trans.TRANS_MIRROR;
      this._cr != h && (this._cr = h, 0 > h && (h = Math.abs(h)), this.current = h >= this.sprites.length ? this.sprites.length - 1 : h, 1 < this.sprites.length && this.setTrans(j), h = this.getSprite(), j = h.getFrame(), e || h.setFrame(0), n && (this._stopedAction = this._cr), h = this.frames[j.args[0]], this._fA = h.fA, this.aR = h.aR, this.bR = h.bR);
      if (this.links) for (h = 0; j = this.links[h]; h++) j.setSprite(b, e, n);
      trans = null;
      return this
    };
  link.action.Role.prototype.lockSprite =
    function () {
      this._locked = !0;
      return this
    };
  link.action.Role.prototype.unlockSprite = function () {
    this._locked = !1;
    return this
  };
  link.action.Role.prototype.setTrans = function (b) {
    this.getSprite().trans = b;
    return this
  };
  link.action.Role.prototype.getSprite = function (b) {
    return this.sprites[null == b ? this.current : b]
  };
  link.action.Role.prototype.getFrame = function (b) {
    return this.frames[null == b ? this.getSprite().getFrame().args[0] : b]
  };
  link.action.Role.prototype.action = function () {
    var b = this.getSprite();
    if (!b) return this;
    var e = b.getFrame(), g, h = 0, j = 0;
    if (e) {
      g = this.frames[e.args[0]];
      this._fA = g.fA;
      this.aR = g.aR;
      this.bR = g.bR;
      if (0 < this._path.length) j = this._path.shift(), h = j[0] || 0, j = j[1] || 0, this._skipMoveDs || this.setSprite(this._moveDs[B(h, j)], !0), this.svx = h, this.svy = j, this.mapOffx += this.svx, this.mapOffy += this.svy; else if (null != this.svx && null != this.svy) {
        this._skipMoveDs || (this.setSprite(this._stopedAction || this._stopDs[B(this.svx, this.svy)]), this._stopedAction = null);
        if (this.onend) this.onend(this);
        this._skipMoveDs = !1;
        this.svy =
          this.svx = null
      }
      0 < this._zooms.length && (g = this._zooms.shift(), "number" == typeof parseInt(g) && this.setZoom(g));
      0 < this._angles.length && (g = this._angles.shift(), "number" == typeof parseInt(g) && this.setRotate(g));
      this.x += e.args[1] + h;
      this.y += e.args[2] + j
    }
    b.nextFrame();
    return this
  };
  link.action.Role.prototype.render = function () {
    var b = this.getSprite();
    if (b && this._fA) {
      var e = this._fA, n = e.length, h = g.canvas, b = b.trans, j, p, s;
      e[0] && (j = this.x, p = this.y, g.canvas.save().translate(j, p).rotate(this.angle * Math.PI / 180).translate(-j,
        -p));
      for (var t = 0; t < n; t++) j = this.rects[e[t][0]][e[t][1]], p = this.imageNames[e[t][0]], s = g.getImage(p), b == g.trans.TRANS_NONE ? h.drawImage(p, j[0], j[1], j[2], j[3], 1 == this.zoom ? parseInt(this.x + this.dx + e[t][2] * this.zoom) : this.x + this.dx + e[t][2] * this.zoom, 1 == this.zoom ? parseInt(this.y + this.dy + e[t][3] * this.zoom) : this.y + this.dy + e[t][3] * this.zoom, j[2] * this.zoom, j[3] * this.zoom) : 1 == this.zoom ? h.drawRegion(p, j[0], j[1], j[2], j[3], b, parseInt(this.x + this.dx - (e[t][2] + j[2])), parseInt(this.y + this.dy + e[t][3])) : h.drawRegionAndZoom(p,
        j[0], j[1], j[2], j[3], b, this.x + this.dx - (e[t][2] + j[2]) * this.zoom, this.y + this.dy + e[t][3] * this.zoom, null, j[2] * this.zoom, j[3] * this.zoom), !s.loaded && s.bench && h.drawImage(s.bench.id || s.benchId, s.bench.sx || 0, s.bench.sy || 0, s.bench.sw || s.bench.w, s.bench.sh || s.bench.h, parseInt(this.x + this.dx - (s.bench.w * this.zoom >> 1)), parseInt(this.y + this.dy - s.bench.h * this.zoom), s.bench.w * this.zoom, s.bench.h * this.zoom);
      e[0] && g.canvas.restore()
    }
    return this
  };
  link.action.Role.prototype.setZoom = function (b) {
    this.zoom = b;
    return this
  };
  link.action.Role.prototype.setZoomTransition = function (b) {
    b && 0 < b.length && (this._zooms = b);
    return this
  };
  link.action.Role.prototype.endZoomTransition = function () {
    return 0 == this._zooms.length
  };
  link.action.Role.prototype.getBodyRect = function (b, e) {
    var n = this.getSprite(null != b ? Math.abs(b) : null);
    if (!n) return null;
    var h = n.getFrame(e);
    if (!h) return null;
    h = this.frames[h.args[0]].bR;
    return null == b && n.trans != g.trans.TRANS_NONE || 0 > b ? [-(h[0] + h[2] * this.zoom), h[1] * this.zoom, h[2] * this.zoom, h[3] * this.zoom] : [h[0] * this.zoom,
      h[1] * this.zoom, h[2] * this.zoom, h[3] * this.zoom]
  };
  link.action.Role.prototype.getAttackRect = function (b, e) {
    var n = this.getSprite(null != b ? Math.abs(b) : null);
    if (!n) return null;
    var h = n.getFrame(e);
    if (!h) return null;
    h = this.frames[h.args[0]].aR;
    return null == b && n.trans != g.trans.TRANS_NONE || 0 > b ? [-(h[0] + h[2] * this.zoom), h[1] * this.zoom, h[2] * this.zoom, h[3] * this.zoom] : [h[0] * this.zoom, h[1] * this.zoom, h[2] * this.zoom, h[3] * this.zoom]
  };
  link.action.Role.prototype.setStep = function (b) {
    this.step = b || 0;
    for (var e = 0, g = this.sprites.length; e <
    g; e++) this.sprites[e].setStep(b);
    return this
  };
  link.action.Role.prototype.collision = function (b, e, n) {
    if (!b) return !1;
    var e = e || "aR", n = n || "aR", h, j;
    "aR" == e ? h = this.aR : "bR" == e && (h = this.bR);
    "aR" == n ? j = b.aR : "bR" == n && (j = b.bR);
    return h && j ? g.comm.collision(this.getSprite().trans == g.trans.TRANS_NONE ? parseInt(this.x + this.dx + h[0] * this.zoom) : parseInt(this.x + this.dx - (h[0] + h[2]) * this.zoom), parseInt(this.y + this.dy + h[1] * this.zoom), parseInt(h[2] * this.zoom), parseInt(h[3] * this.zoom), b.getSprite().trans == g.trans.TRANS_NONE ?
      parseInt(b.x + b.dx + j[0] * b.zoom) : parseInt(b.x + b.dx - (j[0] + j[2]) * b.zoom), parseInt(b.y + b.dy + j[1] * b.zoom), parseInt(j[2] * b.zoom), parseInt(j[3] * b.zoom)) : !1
  };
  link.action.Role.prototype.collisionInput = function (b, e, n, h, j) {
    var j = j || "aR", p;
    "aR" == j ? p = this.aR : "bR" == j && (p = this.bR);
    return p ? g.comm.collision(this.getSprite().trans == g.trans.TRANS_NONE ? parseInt(this.x + this.dx + p[0] * this.zoom) : parseInt(this.x + this.dx - (p[0] + p[2]) * this.zoom), parseInt(this.y + this.dy + p[1] * this.zoom), parseInt(p[2] * this.zoom), parseInt(p[3] *
      this.zoom), b, e, n, h) : !1
  };
  link.action.Role.prototype.setLoop = function (b) {
    for (var e = 0, g = this.sprites.length; e < g; e++) this.sprites[e].setLoop(b);
    return this
  };
  link.action.Role.prototype.setPath = function (b, e) {
    this._path = b || [];
    if (0 < this._path.length && this.onstart) this.onstart(this);
    e && (this._skipMoveDs = !0);
    return this
  };
  link.action.Role.prototype.concatPath = function (b) {
    this._path = this._path.concat(b || []);
    return this
  };
  link.action.Role.prototype.endPath = function () {
    return 0 == this._path.length
  };
  link.action.Role.prototype.clearPath =
    function () {
      this._path = [];
      return this
    };
  link.action.Role.prototype.moveTo = function (b, e, n) {
    n && (this.speed = Math.abs(n));
    this.setPath(g.comm.createPath(this.mapOffx, this.mapOffy, b, e, this.speed));
    return this
  };
  link.action.Role.prototype.setMoveDs = function (b) {
    this._moveDs = b || [4, 7, 5, 5, 6, -5, -5, -7];
    return this
  };
  link.action.Role.prototype.setStopDs = function (b) {
    this._stopDs = b || [0, -3, 1, 1, 2, -1, -1, -3];
    return this
  };
  link.action.Role.prototype.mark = function (b, e, g, h) {
    null != b && (this.x = b);
    null != e && (this.y = e);
    null != g &&
    (this.mapOffx = g);
    null != h && (this.mapOffy = h);
    return this
  };
  link.action.Role.prototype.setSpeed = function (b, e) {
    b && (this.speed = Math.abs(b));
    this.nodeXStep = b;
    this.nodeYStep = e;
    return this
  };
  link.action.Role.prototype.setRotate = function (b) {
    this.angle = Math.abs(b) || 0;
    return this
  };
  link.action.Role.prototype.setRotateTransition = function (b) {
    b && 0 < b.length && (this._angles = b);
    return this
  };
  link.action.Role.prototype.endRotateTransition = function () {
    return 0 == this._angles.length
  };
  link.action.Role.prototype.move = function (b,
                                              e) {
    null != b && (this.x += b);
    null != e && (this.y += e);
    return this
  };
  link.action.Role.prototype.rotate = function (b) {
    null != b && (this.angle += b);
    return this
  };
  link.action.Role.prototype.stoped = function () {
    return null == this.svx
  };
  link.action.Role.prototype.getCurrent = function () {
    return this.current * (this.getSprite().trans == g.trans.TRANS_NONE ? 1 : -1)
  };
  link.action.Sprite = function (b, e, n, h) {
    this.frames = b || [];
    this.loop = e;
    this.current = n || 0;
    this.step = h || 0;
    this.trans = g.trans.TRANS_NONE;
    this.setFrame(n);
    this.runStep = this.getFrame().step ||
      this.step
  };
  link.action.Sprite.prototype.setFrame = function (b) {
    this.current = b >= this.frames.length ? this.frames.length - 1 : 0 < b ? b : 0;
    this.getFrame().step && (this.runStep = this.getFrame().step);
    return this
  };
  link.action.Sprite.prototype.getFrame = function (b) {
    return this.frames[null == b ? this.current : b]
  };
  link.action.Sprite.prototype.nextFrame = function () {
    if (!this.loop && this.endFrame()) return this;
    0 < this.frames.length && (0 >= this.runStep ? (this.loop ? (this.current++, this.current %= this.frames.length) : this.current < this.frames.length -
      1 && this.current++, this.runStep = this.getFrame().step ? this.getFrame().step : this.step) : this.runStep--);
    return this
  };
  link.action.Sprite.prototype.preFrame = function () {
    0 < this.frames.length && (0 >= this.runStep ? (this.loop ? (this.current--, 0 > this.current && (this.current = this.frames.length - 1)) : 0 < this.current && this.current--, this.runStep = this.getFrame().step ? this.getFrame().step : this.step) : this.runStep--);
    return this
  };
  link.action.Sprite.prototype.endFrame = function (b) {
    var e = this.frames.length - 1;
    null != b && (0 <= b && b <=
      this.frames.length - 1) && (e = b);
    return this.current >= e && 0 == this.runStep
  };
  link.action.Sprite.prototype.firstFrame = function () {
    return 0 == this.current && 0 == this.runStep
  };
  link.action.Sprite.prototype.setStep = function (b) {
    this.step = b || 0;
    this.runStep = this.getFrame().step || this.step;
    return this
  };
  link.action.Sprite.prototype.setLoop = function (b) {
    this.loop = b;
    return this
  };
  var C;
  link.action.Fragment = function (b) {
    this.sprites = b || []
  };
  link.action.Fragment.prototype.queue = function () {
    0 < this.sprites.length ? 0 < this.sprites[0].frames.length &&
      (0 >= this.sprites[0].runStep ? (this.sprites[0].runStep = this.sprites[0].step, C = this.sprites[0].frames.shift(), 0 == this.sprites[0].frames.length && this.sprites.shift()) : (C = this.sprites[0].getFrame(), this.sprites[0].runStep--)) : C = null;
    return C
  };
  g.action.role = g.action.Role;
  g.action.sprite = g.action.Sprite;
  g.action.fragment = g.action.Fragment
})(link);
(function (g) {
  var B = navigator.userAgent.toLowerCase(), C = !1;
  0 <= B.indexOf("android") && 0 <= B.indexOf("chrome") && (C = !0);
  g.init(320, 550).pushImage([{id: "bg1", src: "img/bg1.jpg"}, {id: "bg2", src: "img/bg2.jpg"}, {
    id: "s1",
    src: "img/s1.png?123"
  }]).asyncImage([{id: "s2", src: "img/s2.png"}, {id: "n1", src: "img/number1.png"}, {
    id: "n2",
    src: "img/number2.png"
  }]);
  C || g.initAudio([{id: "sound1", src: "sound1.mp3", loop: !1, preload: !0}]);
  g.pageLoad(function () {
    var b, e, n, h, j, p, s, t;
    window.scrollTo(0, 1);
    var w, E;
    g.canvas.screen.setHeight(550 <
    window.innerHeight ? 550 : window.innerHeight);
    w = g.canvas.screen.getWidth();
    E = g.canvas.screen.getHeight();
    _newDate = Date.now();
    var A, D = [];
    A = {
      Button: g.extend(function (b) {
        this.props = g.objExtend({
          id: "",
          value: "",
          x: 0,
          y: 0,
          width: 60,
          height: 30,
          img: null,
          color: "#000",
          strokeColor: "#FFF",
          bgColor: "",
          font: "20px \u5fae\u8f6f\u96c5\u9ed1"
        }, b || {});
        this.collision(0, 0, 0, 0)
      }, null, {
        collision: function (b, d, e, f, h) {
          this._released = this._repeated = this._pressed = !1;
          if (g.comm.collision(b, d, e, f, parseInt(this.props.x), parseInt(this.props.y),
            parseInt(this.props.width), parseInt(this.props.height))) {
            switch (h) {
              case "mousedown":
              case "touchstart":
                this._repeated = this._pressed = !0;
                break;
              case "mouseup":
              case "touchend":
                this._released = !0
            }
            g.audio.playRange("sound1", 9, 11)
          }
          return this
        }, pressed: function () {
          var b = this._pressed;
          this._pressed = !1;
          return b
        }, repeated: function () {
          return this._repeated
        }, released: function () {
          var b = this._released;
          this._released = !1;
          return b
        }, render: function () {
          this.props.img ? g.canvas.drawImage(this.props.img.id, this.props.img.sx,
            this.props.img.sy, this.props.img.sw, this.props.img.sh, parseInt(this.props.x), parseInt(this.props.y), parseInt(this.props.width), parseInt(this.props.height)) : "" != this.props.bgColor && g.canvas.fillStyle(this.props.bgColor).fillRect(parseInt(this.props.x), parseInt(this.props.y), parseInt(this.props.width), parseInt(this.props.height));
          if ("" != this.props.value) {
            var b = g.canvas.measureText(this.props.value);
            g.canvas.drawString(this.props.value, parseInt(this.props.x + (this.props.width - b.width >> 1)), parseInt(this.props.y +
              (this.props.height - b.height >> 1)) + b.height - 2, "", !0, this.props.color, this.props.strokeColor, this.props.font)
          }
          return this
        }
      }), getButton: function (b) {
        for (var d, e = D.length - 1; 0 <= e; e--) if (d = D[e], d.id == b) return d;
        return null
      }, appendButton: function (b) {
        var d;
        b && !this.getButton(b.id) && D.push(d = new this.Button(b));
        return d
      }, removeButton: function (b) {
        for (var d, e = D.length - 1; 0 <= e; e--) if (d = D[e], d.id == b) {
          D.splice(e, 1);
          break
        }
        return this
      }, clearButtons: function () {
        D = [];
        return this
      }, actionButton: function (b, d, e) {
        for (var f,
               g = D.length - 1; 0 <= g; g--) f = D[g], f.collision(d, e, 1, 1, b);
        return this
      }, renderButton: function () {
        for (var b, d = D.length - 1; 0 <= d; d--) (b = D[d]) && b.render();
        return this
      }
    };
    var B = g.canvas.screen.getDevice(), x = {
        bird: null,
        bgType: 0,
        isGameOver: !1,
        bgColor: "#000",
        bgX: 0,
        bgY: 0,
        bgImgW: 288,
        bgImgH: 512,
        bgWidth: 0,
        bgHeight: 0,
        speed: 0,
        landX: 0,
        landY: 0,
        landW: 672,
        landH: 112,
        g: "android" == B && !C ? 0.7 : 1.5,
        jumpSpeed: "android" == B && !C ? -8 : -12,
        vy: 0,
        obses: [],
        obsDate: null,
        obsTimeout: 1800,
        obsFrameNum: 57,
        obsCurrentFrame: 0,
        obsState: "ready",
        score: 0,
        scoreObsId: "",
        obsMapping: {
          mp1: {id: "s2", sx: 112, sy: 130, width: 52, height: 320},
          mp2: {id: "s2", sx: 168, sy: 130, width: 52, height: 320},
          mp3: {id: "s2", sx: 0, sy: 130, width: 52, height: 320},
          mp4: {id: "s2", sx: 56, sy: 130, width: 52, height: 320}
        },
        screenFlush: [],
        birdSpriteId: 0,
        bgId: 1,
        init: function (b, d) {
          this.isGameOver = !1;
          this.bgWidth = 3 * this.bgImgW;
          this.bgHeight = E;
          this.speed = -3;
          this.obses = [];
          this.obsDate = null;
          this.score = 0;
          this.scoreObsId = "";
          this.setBird(this.birdSpriteId, b, d).setBg(this.bgId).landInit();
          null == b && (this.birdSpriteId++,
            this.birdSpriteId %= 3, this.bgId++, 2 < this.bgId && (this.bgId = 1));
          this.screenFlush = [];
          this.obsCurrentFrame = 0;
          return this
        },
        start: function () {
          this.initObses().birdJump();
          x.bird.state = "flying";
          return this
        },
        setBg: function (b) {
          this.bgType = b;
          switch (this.bgType) {
            default:
              b = "bg1";
              this.bgColor = "#4EC0CA";
              break;
            case 2:
              b = "bg2", this.bgColor = "#038794"
          }
          g.canvas.pass("bgCache", this.bgWidth, this.bgHeight).drawImage(b, 0, this.bgHeight - this.bgImgH).drawImage(b, this.bgImgW, this.bgHeight - this.bgImgH).pass();
          return this
        },
        bgRender: function () {
          g.canvas.fillStyle(this.bgColor).fillScreen().drawCache("bgCache",
            this.bgX, this.bgY);
          return this
        },
        gameOver: function () {
          this.screenFade();
          this.isGameOver = !0;
          return this
        },
        screenFade: function () {
          this.isGameOver || (this.screenFlush = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0], g.audio.pauseAll().playRange("sound1", 5, 6), window.dp_submitScore && dp_submitScore(g.localStorage.getItem("FlappyBirdBestScore"), x.score));
          return this
        },
        initObses: function () {
          this.obses = [];
          this.obsDate = Date.now();
          this.obsState = "ready";
          return this
        },
        popObs: function () {
          var b = g.comm.getRandom(60, 170), d = this.obsMapping.mp1, e = this.obsMapping.mp2;
          this.obses.push({
            id: g.getNewGuid(),
            x: w, y: -(d.height - b), width: 52, height: 320, imgObj: d
          });
          this.obses.push({id: g.getNewGuid(), x: w, y: b + 100, width: 52, height: 320, imgObj: e});
          return this
        },
        objesAction: function () {
          if (!this.obsDate) return this;
          switch (this.obsState) {
            case "ready":
              500 <= _newDate - this.obsDate && (this.obsState = "run");
              break;
            case "run":
              for (var b = this.obses.length - 1, d; d = this.obses[b]; b--) d.x += this.speed, this.bird.collisionInput(d.x, d.y, d.width, d.height, "bR") && this.gameOver(), -52 >= d.x && this.obses.splice(b, 1);
              this.obsCurrentFrame++ == this.obsFrameNum &&
              (this.obsCurrentFrame = 0, this.obsDate = _newDate, this.popObs())
          }
          if ((b = this.obses[0]) && b.id != this.scoreObsId && b.x < this.bird.x - 26) this.scoreObsId = b.id, this.score++;
          return this
        },
        objesRender: function () {
          for (var b, d = 0, e; e = this.obses[d]; d++) b = e.imgObj, g.canvas.drawImage(b.id, b.sx, b.sy, b.width, b.height, e.x, e.y, b.width, b.height);
          return this
        },
        setBird: function (b, d, e) {
          this.bird || (this.bird = FlappyBird);
          this.bird.mark(d || 88, e || this.bgHeight - 246).setSprite(b).setStep(2).setRotate(0).setLoop(!0).state = "waiting";
          this.vy =
            0;
          return this
        },
        birdJump: function () {
          this.isGameOver || (this.vy = this.jumpSpeed, g.audio.playRange("sound1", 0, 1));
          return this
        },
        birdAction: function () {
          if (this.bird) switch (this.bird.action(), this.bird.state) {
            case "waiting":
              this.bird.endPath() && this.bird.setPath([[0, -1.5], [0, -1.5], [0, -1.5], [0, -1.5], [0, -1.5], [0, -1], [0, -1], [0, -1], [0, -1], [0, -1], [0, 1.5], [0, 1.5], [0, 1.5], [0, 1.5], [0, 1.5], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]], !0);
              break;
            case "flying":
              this.vy += this.g;
              if (this.bird.collisionInput(0, this.bgHeight - this.landH -
                this.vy, this.landW, this.landH, "bR")) {
                this.bird.clearPath().setRotate(90).state = "die";
                this.bird.y = this.bgHeight - this.landH - (this.bird.getBodyRect()[3] >> 1);
                break
              }
              this.bird.y += this.vy;
              0 > this.bird.y && (this.bird.y = 0);
              if (0 <= this.vy) {
                var b = 3 * this.vy;
                this.bird.setRotate(90 < b ? 90 : b)
              } else this.bird.setRotate(330);
              break;
            case "die":
              this.gameOver(), this.bird.setLoop(!1), this.bird.state = ""
          }
          return this
        },
        birdRender: function () {
          this.bird && this.bird.render();
          return this
        },
        landInit: function () {
          this.landX = 0;
          this.landY = this.bgHeight -
            this.landH;
          g.canvas.pass("landCache", this.landW, this.landH).drawImage("s1", 0, 0, 336, 112, 0, 0, 336, 112).drawImage("s1", 0, 0, 336, 112, 336, 0, 336, 112).pass();
          return this
        },
        landAction: function () {
          this.landX += this.speed;
          this.landX = this.landX < this.landW - this.bgWidth - this.speed ? 0 : this.landX;
          return this
        },
        landRender: function () {
          g.canvas.drawCache("landCache", this.landX, this.landY);
          return this
        },
        scoreRender: function () {
          g.canvas.drawNumber(this.score, "n1", 24, 36, 0, 50, "center");
          return this
        },
        action: function () {
          _newDate = Date.now();
          this.isGameOver || this.objesAction().landAction();
          this.birdAction();
          return this
        },
        screenFlushRender: function () {
          0 < this.screenFlush.length && (g.canvas.fillStyle("rgba(255, 255, 255, " + this.screenFlush.shift() + ")").fillScreen(), 0 == this.screenFlush.length && (g.audio.playRange("sound1", 7, 8), A.clearButtons(), b = 0, e = -1, (g.localStorage.getItem("FlappyBirdBestScore") || 0) < x.score ? (g.localStorage.setItem("FlappyBirdBestScore", x.score), n = !0) : n = !1, h = parseInt(g.localStorage.getItem("FlappyBirdBestScore") || 0), j = d, p =
            [-3, -2, -1, 1, 2, 3], s = d + 500, t = [-200, -100, -70, -40, -20, -10, -5], u = A.appendButton({
            id: "playBtn",
            x: f + 40,
            y: d + 180,
            width: 112,
            height: 66,
            img: {id: "s1", sx: 120, sy: 236, sw: 112, sh: 66}
          }), F = A.appendButton({
            id: "rankBtn",
            x: f + 150,
            y: d + 180,
            width: 112,
            height: 66,
            img: {id: "s1", sx: 240, sy: 236, sw: 112, sh: 66}
          }), g.gameFlow.over()));
          return this
        },
        render: function () {
          this.bgRender().objesRender().birdRender().landRender().scoreRender().screenFlushRender();
          return this
        }
      }, f = w - 300 >> 1, d = E - 240 >> 1, u, F, S = function () {
        x.init();
        A.clearButtons();
        g.gameFlow.zone()
      },
      K = function () {
        g.audio.playRange("sound1", 0, 1);
        x.start();
        A.clearButtons();
        g.gameFlow.run()
      }, J = {
        values: [], opacity: 0, callBack: null, init: function () {
          this.values = [];
          this.opacity = 0;
          this.callBack = null;
          return this
        }, fadeIn: function (b) {
          if (0 < this.values.length) return this;
          this.values = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
          this.callBack = b;
          return this
        }, fadeOut: function (b) {
          if (0 < this.values.length) return this;
          this.values = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0];
          this.callBack = b;
          return this
        }, action: function () {
          0 <
          this.values.length && (this.opacity = this.values.shift(), 0 == this.values.length && this.callBack && this.callBack());
          return this
        }, render: function () {
          0 < this.opacity && g.canvas.fillStyle("rgba(0, 0, 0, " + this.opacity + ")").fillScreen();
          return this
        }
      };
    j = 0;
    p = [];
    s = 0;
    t = [];
    b = 0;
    e = -1;
    h = 0;
    n = !1;
    g.run(function () {
      x.action().render();
      J.action().render()
    }).menu(function () {
      x.birdAction().landAction().bgRender().birdRender().landRender();
      g.canvas.drawImage("s1", 118, 182, 178, 48, f + 61, d, 178, 48);
      A.renderButton();
      u && u.released() &&
      J.fadeIn(function () {
        S();
        J.fadeOut()
      });
      F && F.released() && window.dp_Ranking && dp_Ranking();
      J.action().render()
    }).zone(function () {
      x.birdAction().landAction().bgRender().birdRender().landRender().scoreRender();
      g.canvas.drawImage("s1", 2, 118, 192, 58, f + 54, d, 192, 58).drawImage("s1", 0, 182, 114, 98, f + 93, E - 280, 114, 98);
      J.action().render()
    }).over(function () {
      x.birdAction().bgRender().birdRender().landRender();
      g.canvas.drawImage("s1", 202, 118, 200, 50, f + 50, j, 200, 50).drawImage("s2", 2, 2, 234, 122, f + 33, s, 234, 122);
      switch (b) {
        case 0:
          0 <
          p.length ? j += p.shift() : 0 < t.length ? s += t.shift() : b = 1;
          break;
        case 1:
          e++;
          e >= x.score && (b = 2);
          break;
        case 2:
          A.renderButton(), n && g.canvas.drawImage("s2", 224, 486, 32, 14, f + 68, d + 146, 32, 14)
      }
      0 <= e && g.canvas.drawNumber(e, "n2", 14, 20, f + 240, d + 90, !1).drawNumber(h, "n2", 14, 20, f + 240, d + 130, !1);
      u && u.released() && J.fadeIn(function () {
        S();
        J.fadeOut()
      });
      F && F.released() && window.dp_Ranking && dp_Ranking();
      J.action().render()
    }).events.mouseDown(function () {
      x.birdJump()
    }).touchStart(function () {
      x.birdJump()
    }).mouseUp(function (b, d, e) {
      A.actionButton(b.type,
        d, e, 10, 10);
      g.gameFlow.isIn("zone") && K()
    }).touchEnd(function (b, d, e) {
      window.scrollTo(0, 1);
      A.actionButton(b.type, d, e, 10, 10);
      g.gameFlow.isIn("zone") && K()
    });
    x.init(w >> 1, d + 90);
    A.clearButtons();
    u = A.appendButton({
      id: "playBtn",
      x: f + 40,
      y: d + 180,
      width: 112,
      height: 66,
      img: {id: "s1", sx: 120, sy: 236, sw: 112, sh: 66}
    });
    F = A.appendButton({
      id: "rankBtn",
      x: f + 150,
      y: d + 180,
      width: 112,
      height: 66,
      img: {id: "s1", sx: 240, sy: 236, sw: 112, sh: 66}
    });
    g.gameFlow.menu()
  })
})(link);
var FlappyBird, FlappyBirdNameSpace = {};
(function (g) {
  g.asyncImage([{id: "s2", src: "img/s2.png"}]);
  var B = ["s2"],
    C = [[[230, 142, 34, 24], [230, 194, 34, 24], [230, 246, 34, 24], [230, 298, 34, 24], [230, 350, 34, 24], [174, 466, 34, 24], [118, 466, 34, 24], [62, 466, 34, 24], [6, 466, 34, 24]]],
    b = [{aR: [-15, -30, 30, 30], bR: [-16, -15, 32, 31], fA: [[0, 5, -16, -11, 0]]}, {
      aR: [-15, -30, 30, 30],
      bR: [-16, -15, 32, 31],
      fA: [[0, 0, -16, -11, 0]]
    }, {aR: [-15, -30, 30, 30], bR: [-16, -15, 32, 31], fA: [[0, 1, -16, -11, 0]]}, {
      aR: [-15, -30, 30, 30],
      bR: [-16, -16, 32, 32],
      fA: [[0, 2, -16, -11, 0]]
    }, {
      aR: [-15, -30, 30, 30], bR: [-16, -16, 32, 32],
      fA: [[0, 3, -16, -11, 0]]
    }, {aR: [-15, -30, 30, 30], bR: [-16, -16, 32, 32], fA: [[0, 4, -16, -11, 0]]}, {
      aR: [-15, -30, 30, 30],
      bR: [-16, -16, 32, 32],
      fA: [[0, 8, -16, -11, 0]]
    }, {aR: [-15, -30, 30, 30], bR: [-16, -16, 32, 32], fA: [[0, 7, -16, -11, 0]]}, {
      aR: [-15, -30, 30, 30],
      bR: [-16, -16, 32, 32],
      fA: [[0, 6, -16, -11, 0]]
    }], e = [{loop: !0, frames: [[0, 0, 0, 0], [1, 0, 0, 0], [2, 0, 0, 0], [1, 0, 0, 0]]}, {
      loop: !0,
      frames: [[3, 0, 0, 0], [4, 0, 0, 0], [5, 0, 0, 0], [4, 0, 0, 0]]
    }, {loop: !0, frames: [[6, 0, 0, 0], [7, 0, 0, 0], [8, 0, 0, 0], [7, 0, 0, 0]]}];
  FlappyBirdNameSpace.get = function (n, h) {
    return new g.action.role([],
      0, 0, 0, h ? h : B, C, b, (0 <= n && e[n] ? [e[n]] : e) || e)
  };
  FlappyBird = FlappyBirdNameSpace.get()
})(jsGame);
