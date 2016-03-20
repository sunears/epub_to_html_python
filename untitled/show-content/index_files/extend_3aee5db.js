define("wiki-mobile-common:widget/lib/extend/extend.js",function(t){var n=t("wiki-mobile-common:widget/lib/zepto/zepto.js");!function(t){var n=/^(?:body|html)$/i;t.extend(t.fn,{offsetParent:function(){return t(t.map(this,function(e){for(var o=e.offsetParent||document.body;o&&!n.test(o.nodeName)&&"static"==t(o).css("position");)o=o.offsetParent;return o}))},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0}})}(n),function(t){t.extend(t,{toString:function(t){return Object.prototype.toString.call(t)},slice:function(t,n){return Array.prototype.slice.call(t,n||0)},later:function(t,n,e,o,r){return window["set"+(e?"Interval":"Timeout")](function(){t.apply(o,r)},n||0)},parseTpl:function(t,n){var e="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+t.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/<%=([\s\S]+?)%>/g,function(t,n){return"',"+n.replace(/\\'/g,"'")+",'"}).replace(/<%([\s\S]+?)%>/g,function(t,n){return"');"+n.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",o=new Function("obj",e);return n?o(n):o},throttle:function(n,e,o){function r(){function t(){c=Date.now(),e.apply(a,s)}function r(){i=void 0}var a=this,u=Date.now()-c,s=arguments;o&&!i&&t(),i&&clearTimeout(i),void 0===o&&u>n?t():i=setTimeout(o?r:t,void 0===o?n-u:n)}var i,c=0;return"function"!=typeof e&&(o=e,e=n,n=250),r._zid=e._zid=e._zid||t.proxy(e)._zid,r},debounce:function(n,e,o){return void 0===e?t.throttle(250,n,!1):t.throttle(n,e,void 0===o?!1:o!==!1)}}),t.each("String Boolean RegExp Number Date Object Null Undefined".split(" "),function(n,e){var o="";switch(e){case"Null":o="obj === null";break;case"Undefined":o="obj === undefined";break;default:o='new RegExp("'+e+']", "i").test(Object.prototype.toString.call(obj))'}t["is"+e]=new Function("obj","return "+o)})}(n),function(t){var n=navigator.userAgent,e=navigator.appVersion,o=t.browser;t.extend(t.browser,{qq:/qq/i.test(n),chrome:/chrome/i.test(n)||/CriOS/i.test(n),uc:/UC/i.test(n)||/UC/i.test(e)}),t.browser.uc=t.browser.uc||!t.browser.qq&&!t.browser.chrome&&!/safari/i.test(n);try{t.browser.version=o.uc?e.match(/UC(?:Browser)?\/([\d.]+)/)[1]:o.qq?n.match(/MQQBrowser\/([\d.]+)/)[1]:o.chrome?n.match(/(?:CriOS|Chrome)\/([\d.]+)/)[1]:o.version}catch(r){}t.support=t.extend(t.support||{},{orientation:!(t.browser.uc||parseFloat(t.os.version)<5&&(t.browser.qq||t.browser.chrome))&&"orientation"in window&&"onorientationchange"in window,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window,has3d:"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix})}(n),function(t){function n(){t(window).on("scroll",t.debounce(80,function(){t(document).trigger("scrollStop")},!1))}function e(){t(window).off("scroll"),n()}t(document).ready(function(){var n,e,o="matchMedia"in window?function(){return window.matchMedia("(orientation: portrait)").matches?"portrait":"landscape"}:function(){var t=document.documentElement;return t.clientWidth/Math.max(t.clientHeight,320)<1.1?"portrait":"landscape"},r=o(),i=function(i){return"orientationchange"==i.type?t(window).trigger("ortchange"):(e=20,clearInterval(n),void(n=t.later(function(){var i=o();r!==i?(r=i,clearInterval(n),t(window).trigger("ortchange")):--e&&clearInterval(n)},50,!0)))};t(window).bind(t.support.orientation?"orientationchange":"resize",t.debounce(i))}),n(),t(window).on("pageshow",function(n){n.persisted&&t(document).off("touchstart",e).one("touchstart",e)})}(n)});