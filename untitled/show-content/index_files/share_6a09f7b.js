define("wiki-mobile-common:widget/component/share/share.js",function(e,i,n){var r=e("wiki-mobile-common:widget/lib/zepto/zepto.js"),a=e("wiki-mobile-common:widget/util/nslog.js"),t={isIphone:navigator.userAgent.indexOf("iPhone")>-1};r("#J-vars").length>0&&r("#J-vars").data("newlemmaid")&&""!==r("#J-vars").data("newlemmaid")&&(t.newLemmaId=r("#J-vars").data("newlemmaid")),t.initBaikeShare=function(e,i,n,r,t,s){var o,l=this;r=encodeURIComponent(r),i.indexOf("【")<=-1&&i.indexOf("】")<=-1&&(i="【"+i+"】"),n=encodeURIComponent(n);var h="",c="",m=i+n;if(""!==t)if(h="&pic="+t,t.indexOf("/sign=")>-1){var u=t.split("/").pop();c="&pics=http://imgsrc.baidu.com/baike/pic/item/"+u}else c="&pics="+t;switch(e){case"weibo":o="/share/share.php?url="+r+"&title="+m+h,o="/urlforjump?urlparam="+encodeURIComponent(o)+"&urlid=3",l.newLemmaId?a.qArray(s.sina,["newLemmaId="+l.newLemmaId]):a.q(s.sina);break;case"Qzone":o="/cgi-bin/qzshare/cgi_qzshare_onekey?url="+r+"&title="+i+c+"&summary="+n,o="/urlforjump?urlparam="+encodeURIComponent(o)+"&urlid=6",l.newLemmaId?a.qArray(s.qq,["newLemmaId="+l.newLemmaId]):a.q(s.qq)}window.location.href=o},t.initShoubaiShare=function(e,i,n,r,a){if(Box.isBox){var t=a.split(",#");r=this.shareUrl(r,"shoubai");for(var s=0;s<t.length;s++)Box.os.isWechat||(Box.share({title:e,content:i,id:t[s],imageUrl:n,iconUrl:n,linkUrl:r}),Box.nativeShare({title:e,content:i,iconUrl:n,imageUrl:n,linkUrl:r}))}},t.initBaiduShare=function(e,i,n,r){if(r=this.shareUrl(r,"bdbrowser"),this.isIphone)window.location.href="bdbrowser://share";else{var a={title:e,content:i,imageurl:n,landurl:r,shareSource:"(@百度百科)"};window._flyflowNative.exec("bd_utils","shareWebPage",JSON.stringify(a),"")}},t.initUCShare=function(e,i,n,r){if(r=this.shareUrl(r,"ucbrowser"),this.isIphone){var a='{"title":"'+e+'","content":"'+i+'","sourceUrl":"'+r;a+='","target":"","disableTarget":"","source":"(@百度百科)","htmlNode":"",',a+='"imageUrl":"'+n+'"}',ucbrowser.web_shareEX(a)}else ucweb.startRequest("shell.page_share",[e,i,r,"",""," (@百度百科)",""])},t.initQQShare=function(e,i,n,r){r=this.shareUrl(r,"qqbrowser"),window.browser.app.share({title:e,description:i,img_url:n,url:r})},t.initWechatShare=function(e,i,n,a){a=this.shareUrl(a,"wechat");var t=this.shareUrl(a,"wechatquan"),s=null;r.ajax({type:"get",url:"/operation/api/getwxsign",dataType:"json",success:function(e){s=e,wx.config({debug:!1,appId:"wxffabe5cc5b36c2d6",timestamp:s.timestamp,nonceStr:s.nonceStr,signature:s.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ"]})}}),wx.ready(function(){wx.onMenuShareTimeline({title:e,link:t,imgUrl:n}),wx.onMenuShareAppMessage({title:e,desc:i,link:a,imgUrl:n,type:"link"}),wx.onMenuShareQQ({title:e,desc:i,link:a,imgUrl:n})})},t.onChangeHashWechatShare=function(e,i,n,r){r=this.shareUrl(r,"wechat");var a=this.shareUrl(r,"wechatquan");wx.ready(function(){wx.onMenuShareTimeline({title:e,link:a,imgUrl:n}),wx.onMenuShareAppMessage({title:e,desc:i,link:r,imgUrl:n,type:"link"}),wx.onMenuShareQQ({title:e,desc:i,link:r,imgUrl:n})})},t.shareUrl=function(e,i){return e.indexOf("#")>-1?e=e.indexOf("bk_share")>-1?e.split("bk_share")[0]+"&bk_share="+i+"#"+e.split("#")[1]:e.split("#")[0]+"?bk_share="+i+"#"+e.split("#")[1]:(e.indexOf("bk_share")>-1&&(e=e.split("bk_share")[0]),e=e.indexOf("?")>-1?e+"&bk_share="+i:e+"?bk_share="+i)},n.exports=t});