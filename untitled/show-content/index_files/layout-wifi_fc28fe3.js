var $=require("wiki-mobile-common:widget/lib/zepto/zepto.js"),nslog=require("wiki-mobile-common:widget/util/nslog.js");$(".content-img-link").live("click",function(){nslog.q("contentImgClick"),nslog.q("allImgClick"),window.location.href=$(this).attr("data-href")}),$(".role-image").live("click",function(){nslog.q("roleImgClick"),nslog.q("allImgClick"),window.location.href=$(this).attr("data-href")}),$(".content-album-link").live("click",function(){nslog.q("contentAlbumClick"),nslog.q("allImgClick"),window.location.href=$(this).attr("data-href")}),$("#J-quickNav").length>0&&nslog.q("quickNavShow"),$(".quickNav-item").on("tap",function(){nslog.q("quickNavClick")}),$(".J-inlink-title").live("click",function(){nslog.q("inlinkUseTitle"),nslog.q("inlinkUse"),window.open($(this).attr("data-href"))}),$(".J-inlink-img").live("click",function(){nslog.q("inlinkUseImg"),nslog.q("inlinkUse"),window.open($(this).attr("data-href"))}),$(".J-inlink-summary").live("click",function(){nslog.q("inlinkUseSummary"),nslog.q("inlinkUse"),window.open($(this).attr("data-href"))}),$(".J-inlink-bottom").live("click",function(){nslog.q("inlinkUseBottom"),nslog.q("inlinkUse"),window.open($(this).attr("data-href"))}),$(".newsCard").length>0&&nslog.q("newsShow"),$("#J-flower").length>0&&nslog.q("flowerShow"),nslog.q("totalPV"),nslog.qArray("totalFirstPV",["time="+$("#J-vars").data("time")]),nslog.q(window.location.href.indexOf("bk_fr=chain")>-1?"fScreenInlink":"fScreen"),$("#J-feedback").click(function(){nslog.q("feedbackBottomClick")}),$("#J-gotoPC-top").click(function(){nslog.q("gotoPcTopClick")}),$("#J-gotoPC-bottom").click(function(){nslog.q("gotoPcBottomClick")});var timeStart=(new Date).getTime();$(window).unload(function(){var n=$("#J-vars").attr("data-newLemmaId"),i=(new Date).getTime()-timeStart;nslog.qArray("onlineDurationWifi",["newLemmaId="+n,"time="+i])});