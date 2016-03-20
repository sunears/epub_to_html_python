define("wiki-mobile-lemma:widget/afterContent/zhidao/zhidao.js",function(i){var o=i("wiki-mobile-common:widget/lib/zepto/zepto.js"),t=null;/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?t=1:/(Android)/i.test(navigator.userAgent)&&(t=2),1===t?o("#J-zhidaoDownUrl").attr("href","https://itunes.apple.com/cn/app/bai-du-zhi-dao-yu-yin-wen-da/id465885800?mt=8"):2===t&&o("#J-zhidaoDownUrl").attr("href","http://dl.ops.baidu.com/baiduzhidao_AndroidPhone_baikedibu.apk")});
;define("wiki-mobile-lemma:widget/additionalContent/goTop/goTop.js",function(o){function i(o){d?o===!0||document.body.scrollTop>86+n(window).height()?n(".fixed").show():n(".fixed").hide():n.os.ios&&document.body.scrollTop>131+n(window).height()&&(o||"none"===n(".fixed")[0].style.display?n(".fixed").show():n(".fixed").hide())}function t(o,i){var t=n(window).scrollTop(),e=o-t>0?1:-1,s=Math.abs(o-t);if(o!==t){i=i||800;var l=s/100;l*=e;var d=setInterval(function(){t+=l,s-=Math.abs(l),0>=s?(window.scrollTo(0,o),clearInterval(d)):window.scrollTo(0,t)},i/100)}}var n=o("wiki-mobile-common:widget/lib/zepto/zepto.js"),e=o("wiki-mobile-common:widget/util/nslog.js"),s=n.os.ios&&parseFloat(n.os.version)>=5,l=n.os.android&&parseFloat(n.os.version)>2.1,d=s||l;n("#J-gotop").length>0&&n("#J-gotop").on("tap",function(){e.q("gotopBtnClick"),n("#J-trip-img").length>0&&e.q("tripGotopBtnClick"),t(0),i()}).on("touchstart",function(o){o.preventDefault()}),d?(n(window).on("touchstart touchmove touchend scroll load",i),n(document).on("scrollStop",function(){i()})):n.os.ios&&(n(".fixed").css({position:"absolute"}),n(window).on("touchmove",function(){n(".fixed").hide()}),i()),n.os.ios||setTimeout(function(){i()},1e3)});
;define("wiki-mobile-lemma:widget/content/moduleCommonContent/music/album/album.js",function(o,a){var s=o("wiki-mobile-common:widget/lib/zepto/zepto.js");a.init=function(){s(".music-album").on("tap",".icon-expand",function(){var o=s(s(this).parent()),a=s(s(this).children(".layout-icons")[0]);if(o.hasClass("collapsed"))o.removeClass("collapsed").addClass("expanded"),s(s(this).children(".expand-text")[0]).text("收起"),a.removeClass("layout-icons_down-arrow").addClass("layout-icons_up-arrow");else{o.removeClass("expanded").addClass("collapsed"),s(s(this).children(".expand-text")[0]).text("展开"),a.removeClass("layout-icons_up-arrow").addClass("layout-icons_down-arrow");var e=s(this).offset().top-240;window.scrollTo(0,e)}}).on("tap",".expand-all",function(){if(s(this).children("em").hasClass("layout-icons_down-arrow"))s(".music-album .J-toggle").removeClass("item-hide"),s(this).children("em").removeClass("layout-icons_down-arrow").addClass("layout-icons_up-arrow"),s(this).children("span").text("收起");else{s(".music-album .J-toggle").addClass("item-hide"),s(this).children("em").removeClass("layout-icons_up-arrow").addClass("layout-icons_down-arrow"),s(this).children("span").text("全部");var o=s(this).offset().top-240;window.scrollTo(0,o)}}),s(".music-album .expand-all, .music-album .icon-expand").on("touchstart",function(o){o.preventDefault()})}});
;define("wiki-mobile-lemma:widget/content/moduleCommonContent/role/role.js",function(e,o,t){var s=e("wiki-mobile-common:widget/lib/zepto/zepto.js"),l=function(){s(".js-colpase").tap(function(){var e=s(this).prev();e.hasClass("role-dec")?(e.removeClass("role-dec"),s(s(this).children(".colpase-text")[0]).text("收起"),s(s(this).children("em")[0]).removeClass("layout-icons_down-arrow").addClass("layout-icons_up-arrow")):(e.addClass("role-dec"),s(s(this).children(".colpase-text")[0]).text("展开"),s(s(this).children("em")[0]).removeClass("layout-icons_up-arrow").addClass("layout-icons_down-arrow"))}).on("touchstart",function(e){e.preventDefault()}),s("#J-role-show-all").tap(function(){var e=s(this);e.siblings(".role-list").children().show(),e.remove()}).on("touchstart",function(e){e.preventDefault()})};t.exports=l});
;define("wiki-mobile-lemma:widget/content/moduleCommonContent/series/series.js",function(e,s,o){var i=e("wiki-mobile-common:widget/lib/zepto/zepto.js"),t=e("wiki-mobile-common:widget/util/nslog.js"),r=function(e){function s(s){s=s.toString();var o="sublemmaid="+e.subLemmaId+"&lemmaid="+e.lemmaId+"&modulename="+e.moduleName+"&moduleid="+e.moduleId;o="page="+s+"&"+o;var t="/api/module?"+o;i("#J-serise .nav ul li").removeClass("active"),i('#J-navEpisode [data-page="'+s+'"]').addClass("active"),i('#J-navEpisodeFoot [data-page="'+s+'"]').addClass("active");var r=i("#J-serise").prev().offset().top-46;window.scrollTo(0,r),i.ajax({type:"GET",url:t,success:function(o){i("#J-serise #J-sections").html(o);var t=e.count;if(-1!==s.indexOf("_")){var r=parseInt(s.split("_")[1],10);t>=r+5?(i("#J-serise #J-moreEpisode").html("继续看"+(r+1)+"-"+(r+5)+"集"),i("#J-serise #J-moreEpisode").show(),i("#J-serise #J-moreEpisode").data("page-current",r+1+"_"+(r+5))):r===t?i("#J-serise #J-moreEpisode").hide():r+1===t?(i("#J-serise #J-moreEpisode").html("继续看"+(r+1)+"集"),i("#J-serise #J-moreEpisode").show(),i("#J-serise #J-moreEpisode").data("page-current",r+1)):(i("#J-serise #J-moreEpisode").html("继续看"+(r+1)+"-"+t+"集"),i("#J-serise #J-moreEpisode").show(),i("#J-serise #J-moreEpisode").data("page-current",r+1+"_"+t))}else i("#J-serise #J-moreEpisode").hide()}})}function o(e){return e=e||window.event,e.target||e.srcElement}i("#J-serise #J-choseEpisode").on("tap",function(){"选集"===i("#J-serise #J-choseEpisode-word").text()?(i("#J-serise #J-navEpisode").show(),i("#J-serise #J-choseEpisode-word").text("收起"),t.q("seriesTop")):"收起"===i("#J-serise #J-choseEpisode-word").text()&&(i("#J-serise #J-navEpisode").hide(),i("#J-serise #J-choseEpisode-word").text("选集"))}),i("#J-serise #J-choseEpisodeFoot").on("tap",function(){"选集"===i("#J-serise #J-choseEpisodeFoot-word").text()?(i("#J-serise #J-navEpisodeFoot").show(),i("#J-serise #J-choseEpisodeFoot-word").text("收起"),t.q("seriesBottom")):"收起"===i("#J-serise #J-choseEpisodeFoot-word").text()&&(i("#J-serise #J-navEpisodeFoot").hide(),i("#J-serise #J-choseEpisodeFoot-word").text("选集"))}),i("#J-serise .nav").on("tap",function(e){var r=o(e),d=i(r).data("page");r&&"LI"===r.tagName.toUpperCase()&&(s(d),t.q("seriesSelect"))}),i("#J-serise #J-moreEpisode").on("tap",function(){var e=i("#J-serise #J-moreEpisode").data("page-current");s(e),t.q("seriesNext")}),i("#J-choseEpisode, #J-choseEpisodeFoot, #J-moreEpisode, #J-serise .nav").on("touchstart",function(e){e.preventDefault()})};o.exports=r});