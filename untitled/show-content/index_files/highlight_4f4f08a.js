define("wiki-mobile-common:widget/lib/highlight/highlight.js",function(t){var i=t("wiki-mobile-common:widget/lib/zepto/zepto.js");!function(t){var i,h,o,g=!1,l=function(){clearTimeout(h),i&&(o=i.attr("highlight-cls"))&&(i.removeClass(o).attr("highlight-cls",""),i=null)};t.extend(t.fn,{highlight:function(o){var n=t(document).on("touchend.highlight touchmove.highlight touchcancel.highlight",l);return g=g||!!n,l(),this.each(function(){var g=t(this);g.css("-webkit-tap-highlight-color","rgba(255,255,255,0)").off("touchstart.highlight"),o&&g.on("touchstart.highlight",function(){h=t.later(function(){i=g.attr("highlight-cls",o).addClass(o)},100)})})}})}(i)});