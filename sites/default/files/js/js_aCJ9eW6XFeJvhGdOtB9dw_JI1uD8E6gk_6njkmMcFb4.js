/* Source and licensing information for the line(s) below can be found at https://movilesdonosti.com/modules/contrib/addtoany/js/addtoany.js. */
(function(a){'use strict';a.behaviors.addToAny={attach:function(a,i){if(a!==document&&window.a2a){a2a.init_all('page')}}}})(Drupal);
/* Source and licensing information for the above line(s) can be found at https://movilesdonosti.com/modules/contrib/addtoany/js/addtoany.js. */;
/* Source and licensing information for the line(s) below can be found at https://movilesdonosti.com/modules/contrib/eu_cookie_compliance/js/eu_cookie_compliance.js. */
(function(i,e,o){'use strict';e.behaviors.euCookieCompliancePopup={attach:function(c){i('body',c).once('sliding-popup').each(function(){var c=o.eu_cookie_compliance;try{var l=c.popup_enabled;if(!l){return};if(!e.eu_cookie_compliance.cookiesEnabled()){return};var n=e.eu_cookie_compliance.getCurrentStatus(),a=c.popup_clicking_confirmation,t=c.popup_agreed_enabled,u=c.popup_hide_agreed;if(n===0){var p=1;if(!a){i('a, input[type=submit]').bind('click.eu_cookie_compliance',function(){if(!t){e.eu_cookie_compliance.setStatus(1);p=2};e.eu_cookie_compliance.changeStatus(p)})};i('.agree-button').click(function(){if(!t){e.eu_cookie_compliance.setStatus(1);p=2};e.eu_cookie_compliance.changeStatus(p)});e.eu_cookie_compliance.createPopup(c.popup_html_info)}
else if(n===1){e.eu_cookie_compliance.createPopup(c.popup_html_agreed);if(u){i('a, input[type=submit]').bind('click.eu_cookie_compliance_hideagreed',function(){e.eu_cookie_compliance.changeStatus(2)})}}}catch(m){}})}};e.eu_cookie_compliance={};e.eu_cookie_compliance.createPopup=function(c){var p=i(c).attr({id:'sliding-popup'}).height(o.eu_cookie_compliance.popup_height).width(o.eu_cookie_compliance.popup_width).hide();var n=p.height();if(o.eu_cookie_compliance.popup_position){p.prependTo('body');p.show().attr({class:'sliding-popup-top clearfix'}).css({top:-1*n}).animate({top:0},o.eu_cookie_compliance.popup_delay)}
else{p.appendTo('body');p.show().attr({class:'sliding-popup-bottom'}).css({bottom:-1*n}).animate({bottom:0},o.eu_cookie_compliance.popup_delay)};p.css({background:'#'+o.eu_cookie_compliance.popup_bg_hex}).find('h2, p').css('color','#'+o.eu_cookie_compliance.popup_text_hex);e.eu_cookie_compliance.attachEvents()};e.eu_cookie_compliance.attachEvents=function(){var c=o.eu_cookie_compliance.popup_clicking_confirmation,p=o.eu_cookie_compliance.popup_agreed_enabled;i('.find-more-button').bind('click',function(){if(o.eu_cookie_compliance.popup_link_new_window){window.open(o.eu_cookie_compliance.popup_link)}
else{window.location.href=o.eu_cookie_compliance.popup_link}});i('.agree-button').bind('click',function(){var o=1;if(!p){e.eu_cookie_compliance.setStatus(1);o=2};if(c){i('a, input[type=submit]').unbind('click.eu_cookie_compliance')};e.eu_cookie_compliance.changeStatus(o)});i('.hide-popup-button').bind('click',function(){e.eu_cookie_compliance.changeStatus(2)})};e.eu_cookie_compliance.getCurrentStatus=function(){var o='cookie-agreed',i=e.eu_cookie_compliance.getCookie(o);return parseInt(i)};e.eu_cookie_compliance.changeStatus=function(c){var p=e.eu_cookie_compliance.getCurrentStatus();if(p===c){return};if(o.eu_cookie_compliance.popup_position){i('.sliding-popup-top').animate({top:i('#sliding-popup').height()*-1},o.eu_cookie_compliance.popup_delay,function(){if(p===0){i('#sliding-popup').html(o.eu_cookie_compliance.popup_html_agreed).animate({top:0},o.eu_cookie_compliance.popup_delay);e.eu_cookie_compliance.attachEvents()};if(p===1){i('#sliding-popup').remove()}})}
else{i('.sliding-popup-bottom').animate({bottom:i('#sliding-popup').height()*-1},o.eu_cookie_compliance.popup_delay,function(){if(p===0){i('#sliding-popup').html(o.eu_cookie_compliance.popup_html_agreed).animate({bottom:0},o.eu_cookie_compliance.popup_delay);e.eu_cookie_compliance.attachEvents()};if(p===1){i('#sliding-popup').remove()}})};e.eu_cookie_compliance.setStatus(c)};e.eu_cookie_compliance.setStatus=function(e){var i=new Date();i.setDate(i.getDate()+100);var c='cookie-agreed='+e+';expires='+i.toUTCString()+';path='+o.path.baseUrl;if(o.eu_cookie_compliance.domain){c+=';domain='+o.eu_cookie_compliance.domain};document.cookie=c};e.eu_cookie_compliance.hasAgreed=function(){var o=e.eu_cookie_compliance.getCurrentStatus();if(o===1||o===2){return!0};return!1};e.eu_cookie_compliance.getCookie=function(e){var c=e+'=',p='0';if(document.cookie.length>0){var o=document.cookie.indexOf(c);if(o!==-1){o+=c.length;var i=document.cookie.indexOf(';',o);if(i===-1){i=document.cookie.length};p=decodeURIComponent(document.cookie.substring(o,i).replace(/\+/g,'%20'))}};return p};e.eu_cookie_compliance.cookiesEnabled=function(){var e=(navigator.cookieEnabled);if(typeof navigator.cookieEnabled==='undefined'&&!e){document.cookie='testcookie';e=(document.cookie.indexOf('testcookie')!==-1)};return(e)}})(jQuery,Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at https://movilesdonosti.com/modules/contrib/eu_cookie_compliance/js/eu_cookie_compliance.js. */;
/* Source and licensing information for the line(s) below can be found at https://movilesdonosti.com/modules/contrib/google_analytics/js/google_analytics.js. */
(function(t,e,o){"use strict";e.google_analytics={};t(document).ready(function(){t(document.body).on("mousedown keyup touchstart",function(a){t(a.target).closest("a,area").each(function(){if(e.google_analytics.isInternal(this.href)){if(t(this).is(".colorbox")&&(o.google_analytics.trackColorbox)){}
else if(o.google_analytics.trackDownload&&e.google_analytics.isDownload(this.href)){ga("send",{hitType:"event",eventCategory:"Downloads",eventAction:e.google_analytics.getDownloadExtension(this.href).toUpperCase(),eventLabel:e.google_analytics.getPageUrl(this.href),transport:"beacon"})}
else if(e.google_analytics.isInternalSpecial(this.href)){ga("send",{hitType:"pageview",page:e.google_analytics.getPageUrl(this.href),transport:"beacon"})}}
else{if(o.google_analytics.trackMailto&&t(this).is("a[href^='mailto:'],area[href^='mailto:']")){ga("send",{hitType:"event",eventCategory:"Mails",eventAction:"Click",eventLabel:this.href.substring(7),transport:"beacon"})}
else if(o.google_analytics.trackOutbound&&this.href.match(/^\w+:\/\//i)){if(o.google_analytics.trackDomainMode!==2||(o.google_analytics.trackDomainMode===2&&!e.google_analytics.isCrossDomain(this.hostname,o.google_analytics.trackCrossDomains))){ga("send",{hitType:"event",eventCategory:"Outbound links",eventAction:"Click",eventLabel:this.href,transport:"beacon"})}}}})});if(o.google_analytics.trackUrlFragments){window.onhashchange=function(){ga("send",{hitType:"pageview",page:location.pathname+location.search+location.hash})}};if(o.google_analytics.trackColorbox){t(document).on("cbox_complete",function(){var o=t.colorbox.element().attr("href");if(o){ga("send",{hitType:"pageview",page:e.google_analytics.getPageUrl(o)})}})}});e.google_analytics.isCrossDomain=function(e,o){return t.inArray(e,o)>-1?!0:!1};e.google_analytics.isDownload=function(e){var t=new RegExp("\\.("+o.google_analytics.trackDownloadExtensions+")([\?#].*)?$","i");return t.test(e)};e.google_analytics.isInternal=function(e){var t=new RegExp("^(https?):\/\/"+window.location.host,"i");return t.test(e)};e.google_analytics.isInternalSpecial=function(e){var t=new RegExp("(\/go\/.*)$","i");return t.test(e)};e.google_analytics.getPageUrl=function(e){var t=new RegExp("^(https?):\/\/"+window.location.host,"i");return e.replace(t,"")};e.google_analytics.getDownloadExtension=function(e){var a=new RegExp("\\.("+o.google_analytics.trackDownloadExtensions+")([\?#].*)?$","i"),t=a.exec(e);return(t===null)?"":t[1]}})(jQuery,Drupal,drupalSettings);
/* Source and licensing information for the above line(s) can be found at https://movilesdonosti.com/modules/contrib/google_analytics/js/google_analytics.js. */;
/* Source and licensing information for the line(s) below can be found at https://movilesdonosti.com/core/misc/debounce.js. */
;Drupal.debounce=function(n,r,t){var u=void 0,i=void 0;return function(){var e=this,o=arguments,a=function(){u=null;if(!t){i=n.apply(e,o)}},l=t&&!u;clearTimeout(u);u=setTimeout(a,r);if(l){i=n.apply(e,o)};return i}};
/* Source and licensing information for the above line(s) can be found at https://movilesdonosti.com/core/misc/debounce.js. */;
/* Source and licensing information for the line(s) below can be found at https://movilesdonosti.com/core/assets/vendor/jquery.cookie/jquery.cookie.min.js. */
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
/* Source and licensing information for the above line(s) can be found at https://movilesdonosti.com/core/assets/vendor/jquery.cookie/jquery.cookie.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://movilesdonosti.com/core/misc/form.js. */
(function(r,t,a){r.fn.drupalGetSummary=function(){var t=this.data('summaryCallback');return this[0]&&t?r.trim(t(this[0])):''};r.fn.drupalSetSummary=function(r){var a=this;if(typeof r!=='function'){var t=r;r=function(){return t}};return this.data('summaryCallback',r).off('formUpdated.summary').on('formUpdated.summary',function(){a.trigger('summaryUpdated')}).trigger('summaryUpdated')};t.behaviors.formSingleSubmit={attach:function(){function t(t){var a=r(t.currentTarget),e=a.serialize(),n=a.attr('data-drupal-form-submit-last');if(n===e){t.preventDefault()}
else{a.attr('data-drupal-form-submit-last',e)}};r('body').once('form-single-submit').on('submit.singleSubmit','form:not([method~="GET"])',t)}};function n(t){r(t).trigger('formUpdated')};function o(t){var a=r(t).find('[name]').map(function(r,t){return t.getAttribute('id')});return r.makeArray(a)};t.behaviors.formUpdated={attach:function(t){var i=r(t),f=i.is('form'),u=(f?i:i.find('form')).once('form-updated'),e=void 0;if(u.length){r.makeArray(u).forEach(function(t){var i='change.formUpdated input.formUpdated ',f=a(function(r){n(r.target)},300);e=o(t).join(',');t.setAttribute('data-drupal-form-fields',e);r(t).on(i,f)})};if(f){e=o(t).join(',');var m=r(t).attr('data-drupal-form-fields');if(e!==m){n(t)}}},detach:function(t,a,n){var e=r(t),i=e.is('form');if(n==='unload'){var o=(i?e:e.find('form')).removeOnce('form-updated');if(o.length){r.makeArray(o).forEach(function(t){t.removeAttribute('data-drupal-form-fields');r(t).off('.formUpdated')})}}}};t.behaviors.fillUserInfoFromBrowser={attach:function(t,e){var n=['name','mail','homepage'],a=r('[data-user-info-from-browser]').once('user-info-from-browser');if(a.length){n.map(function(r){var t=a.find('[name='+r+']'),e=localStorage.getItem('Drupal.visitor.'+r),n=t.val()===''||t.attr('data-drupal-default-value')===t.val();if(t.length&&n&&e){t.val(e)}})};a.on('submit',function(){n.map(function(r){var t=a.find('[name='+r+']');if(t.length){localStorage.setItem('Drupal.visitor.'+r,t.val())}})})}};var i=function(t){var a=void 0;if(t.type==='click'){a=t.currentTarget.location?t.currentTarget.location:t.currentTarget}
else{a=location};var n=a.hash.substr(1);if(n){var e=r('#'+n);r('body').trigger('formFragmentLinkClickOrHashChange',[e]);setTimeout(function(){return e.trigger('focus')},300)}},e=a(i,300,!0);r(window).on('hashchange.form-fragment',e);r(document).on('click.form-fragment','a[href*="#"]',e)})(jQuery,Drupal,Drupal.debounce);
/* Source and licensing information for the above line(s) can be found at https://movilesdonosti.com/core/misc/form.js. */;
/* Source and licensing information for the line(s) below can be found at https://movilesdonosti.com/modules/gva_blockbuilder/vendor/skrollr.min.js. */
/*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
!function(a,b,c){"use strict";function d(c){if(e=b.documentElement,f=b.body,T(),ha=this,c=c||{},ma=c.constants||{},c.easing)for(var d in c.easing)W[d]=c.easing[d];ta=c.edgeStrategy||"set",ka={beforerender:c.beforerender,render:c.render,keyframe:c.keyframe},la=c.forceHeight!==!1,la&&(Ka=c.scale||1),na=c.mobileDeceleration||y,pa=c.smoothScrolling!==!1,qa=c.smoothScrollingDuration||A,ra={targetTop:ha.getScrollTop()},Sa=(c.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||a.opera)})(),Sa?(ja=b.getElementById(c.skrollrBody||z),ja&&ga(),X(),Ea(e,[s,v],[t])):Ea(e,[s,u],[t]),ha.refresh(),wa(a,"resize orientationchange",function(){var a=e.clientWidth,b=e.clientHeight;(b!==Pa||a!==Oa)&&(Pa=b,Oa=a,Qa=!0)});var g=U();return function h(){$(),va=g(h)}(),ha}var e,f,g={get:function(){return ha},init:function(a){return ha||new d(a)},VERSION:"0.6.30"},h=Object.prototype.hasOwnProperty,i=a.Math,j=a.getComputedStyle,k="touchstart",l="touchmove",m="touchcancel",n="touchend",o="skrollable",p=o+"-before",q=o+"-between",r=o+"-after",s="skrollr",t="no-"+s,u=s+"-desktop",v=s+"-mobile",w="linear",x=1e3,y=.004,z="skrollr-body",A=200,B="start",C="end",D="center",E="bottom",F="___skrollable_id",G=/^(?:input|textarea|button|select)$/i,H=/^\s+|\s+$/g,I=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,J=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,K=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,M=function(a,b){return b.toUpperCase()},N=/[\-+]?[\d]*\.?[\d]+/g,O=/\{\?\}/g,P=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,Q=/[a-z\-]+-gradient/g,R="",S="",T=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(j){var b=j(f,null);for(var c in b)if(R=c.match(a)||+c==c&&b[c].match(a))break;if(!R)return void(R=S="");R=R[0],"-"===R.slice(0,1)?(S=R,R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]):S="-"+R.toLowerCase()+"-"}},U=function(){var b=a.requestAnimationFrame||a[R.toLowerCase()+"RequestAnimationFrame"],c=Ha();return(Sa||!b)&&(b=function(b){var d=Ha()-c,e=i.max(0,1e3/60-d);return a.setTimeout(function(){c=Ha(),b()},e)}),b},V=function(){var b=a.cancelAnimationFrame||a[R.toLowerCase()+"CancelAnimationFrame"];return(Sa||!b)&&(b=function(b){return a.clearTimeout(b)}),b},W={begin:function(){return 0},end:function(){return 1},linear:function(a){return a},quadratic:function(a){return a*a},cubic:function(a){return a*a*a},swing:function(a){return-i.cos(a*i.PI)/2+.5},sqrt:function(a){return i.sqrt(a)},outCubic:function(a){return i.pow(a-1,3)+1},bounce:function(a){var b;if(.5083>=a)b=3;else if(.8489>=a)b=9;else if(.96208>=a)b=27;else{if(!(.99981>=a))return 1;b=91}return 1-i.abs(3*i.cos(a*b*1.028)/b)}};d.prototype.refresh=function(a){var d,e,f=!1;for(a===c?(f=!0,ia=[],Ra=0,a=b.getElementsByTagName("*")):a.length===c&&(a=[a]),d=0,e=a.length;e>d;d++){var g=a[d],h=g,i=[],j=pa,k=ta,l=!1;if(f&&F in g&&delete g[F],g.attributes){for(var m=0,n=g.attributes.length;n>m;m++){var p=g.attributes[m];if("data-anchor-target"!==p.name)if("data-smooth-scrolling"!==p.name)if("data-edge-strategy"!==p.name)if("data-emit-events"!==p.name){var q=p.name.match(I);if(null!==q){var r={props:p.value,element:g,eventType:p.name.replace(L,M)};i.push(r);var s=q[1];s&&(r.constant=s.substr(1));var t=q[2];/p$/.test(t)?(r.isPercentage=!0,r.offset=(0|t.slice(0,-1))/100):r.offset=0|t;var u=q[3],v=q[4]||u;u&&u!==B&&u!==C?(r.mode="relative",r.anchors=[u,v]):(r.mode="absolute",u===C?r.isEnd=!0:r.isPercentage||(r.offset=r.offset*Ka))}}else l=!0;else k=p.value;else j="off"!==p.value;else if(h=b.querySelector(p.value),null===h)throw'Unable to find anchor target "'+p.value+'"'}if(i.length){var w,x,y;!f&&F in g?(y=g[F],w=ia[y].styleAttr,x=ia[y].classAttr):(y=g[F]=Ra++,w=g.style.cssText,x=Da(g)),ia[y]={element:g,styleAttr:w,classAttr:x,anchorTarget:h,keyFrames:i,smoothScrolling:j,edgeStrategy:k,emitEvents:l,lastFrameIndex:-1},Ea(g,[o],[])}}}for(Aa(),d=0,e=a.length;e>d;d++){var z=ia[a[d][F]];z!==c&&(_(z),ba(z))}return ha},d.prototype.relativeToAbsolute=function(a,b,c){var d=e.clientHeight,f=a.getBoundingClientRect(),g=f.top,h=f.bottom-f.top;return b===E?g-=d:b===D&&(g-=d/2),c===E?g+=h:c===D&&(g+=h/2),g+=ha.getScrollTop(),g+.5|0},d.prototype.animateTo=function(a,b){b=b||{};var d=Ha(),e=ha.getScrollTop(),f=b.duration===c?x:b.duration;return oa={startTop:e,topDiff:a-e,targetTop:a,duration:f,startTime:d,endTime:d+f,easing:W[b.easing||w],done:b.done},oa.topDiff||(oa.done&&oa.done.call(ha,!1),oa=c),ha},d.prototype.stopAnimateTo=function(){oa&&oa.done&&oa.done.call(ha,!0),oa=c},d.prototype.isAnimatingTo=function(){return!!oa},d.prototype.isMobile=function(){return Sa},d.prototype.setScrollTop=function(b,c){return sa=c===!0,Sa?Ta=i.min(i.max(b,0),Ja):a.scrollTo(0,b),ha},d.prototype.getScrollTop=function(){return Sa?Ta:a.pageYOffset||e.scrollTop||f.scrollTop||0},d.prototype.getMaxScrollTop=function(){return Ja},d.prototype.on=function(a,b){return ka[a]=b,ha},d.prototype.off=function(a){return delete ka[a],ha},d.prototype.destroy=function(){var a=V();a(va),ya(),Ea(e,[t],[s,u,v]);for(var b=0,d=ia.length;d>b;b++)fa(ia[b].element);e.style.overflow=f.style.overflow="",e.style.height=f.style.height="",ja&&g.setStyle(ja,"transform","none"),ha=c,ja=c,ka=c,la=c,Ja=0,Ka=1,ma=c,na=c,La="down",Ma=-1,Oa=0,Pa=0,Qa=!1,oa=c,pa=c,qa=c,ra=c,sa=c,Ra=0,ta=c,Sa=!1,Ta=0,ua=c};var X=function(){var d,g,h,j,o,p,q,r,s,t,u,v;wa(e,[k,l,m,n].join(" "),function(a){var e=a.changedTouches[0];for(j=a.target;3===j.nodeType;)j=j.parentNode;switch(o=e.clientY,p=e.clientX,t=a.timeStamp,G.test(j.tagName)||a.preventDefault(),a.type){case k:d&&d.blur(),ha.stopAnimateTo(),d=j,g=q=o,h=p,s=t;break;case l:G.test(j.tagName)&&b.activeElement!==j&&a.preventDefault(),r=o-q,v=t-u,ha.setScrollTop(Ta-r,!0),q=o,u=t;break;default:case m:case n:var f=g-o,w=h-p,x=w*w+f*f;if(49>x){if(!G.test(d.tagName)){d.focus();var y=b.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,a.view,1,e.screenX,e.screenY,e.clientX,e.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),d.dispatchEvent(y)}return}d=c;var z=r/v;z=i.max(i.min(z,3),-3);var A=i.abs(z/na),B=z*A+.5*na*A*A,C=ha.getScrollTop()-B,D=0;C>Ja?(D=(Ja-C)/B,C=Ja):0>C&&(D=-C/B,C=0),A*=1-D,ha.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),a.scrollTo(0,0),e.style.overflow=f.style.overflow="hidden"},Y=function(){var a,b,c,d,f,g,h,j,k,l,m,n=e.clientHeight,o=Ba();for(j=0,k=ia.length;k>j;j++)for(a=ia[j],b=a.element,c=a.anchorTarget,d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],l=h.offset,m=o[h.constant]||0,h.frame=l,h.isPercentage&&(l*=n,h.frame=l),"relative"===h.mode&&(fa(b),h.frame=ha.relativeToAbsolute(c,h.anchors[0],h.anchors[1])-l,fa(b,!0)),h.frame+=m,la&&!h.isEnd&&h.frame>Ja&&(Ja=h.frame);for(Ja=i.max(Ja,Ca()),j=0,k=ia.length;k>j;j++){for(a=ia[j],d=a.keyFrames,f=0,g=d.length;g>f;f++)h=d[f],m=o[h.constant]||0,h.isEnd&&(h.frame=Ja-h.offset+m);a.keyFrames.sort(Ia)}},Z=function(a,b){for(var c=0,d=ia.length;d>c;c++){var e,f,i=ia[c],j=i.element,k=i.smoothScrolling?a:b,l=i.keyFrames,m=l.length,n=l[0],s=l[l.length-1],t=k<n.frame,u=k>s.frame,v=t?n:s,w=i.emitEvents,x=i.lastFrameIndex;if(t||u){if(t&&-1===i.edge||u&&1===i.edge)continue;switch(t?(Ea(j,[p],[r,q]),w&&x>-1&&(za(j,n.eventType,La),i.lastFrameIndex=-1)):(Ea(j,[r],[p,q]),w&&m>x&&(za(j,s.eventType,La),i.lastFrameIndex=m)),i.edge=t?-1:1,i.edgeStrategy){case"reset":fa(j);continue;case"ease":k=v.frame;break;default:case"set":var y=v.props;for(e in y)h.call(y,e)&&(f=ea(y[e].value),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f));continue}}else 0!==i.edge&&(Ea(j,[o,q],[p,r]),i.edge=0);for(var z=0;m-1>z;z++)if(k>=l[z].frame&&k<=l[z+1].frame){var A=l[z],B=l[z+1];for(e in A.props)if(h.call(A.props,e)){var C=(k-A.frame)/(B.frame-A.frame);C=A.props[e].easing(C),f=da(A.props[e].value,B.props[e].value,C),f=ea(f),0===e.indexOf("@")?j.setAttribute(e.substr(1),f):g.setStyle(j,e,f)}w&&x!==z&&("down"===La?za(j,A.eventType,La):za(j,B.eventType,La),i.lastFrameIndex=z);break}}},$=function(){Qa&&(Qa=!1,Aa());var a,b,d=ha.getScrollTop(),e=Ha();if(oa)e>=oa.endTime?(d=oa.targetTop,a=oa.done,oa=c):(b=oa.easing((e-oa.startTime)/oa.duration),d=oa.startTop+b*oa.topDiff|0),ha.setScrollTop(d,!0);else if(!sa){var f=ra.targetTop-d;f&&(ra={startTop:Ma,topDiff:d-Ma,targetTop:d,startTime:Na,endTime:Na+qa}),e<=ra.endTime&&(b=W.sqrt((e-ra.startTime)/qa),d=ra.startTop+b*ra.topDiff|0)}if(sa||Ma!==d){La=d>Ma?"down":Ma>d?"up":La,sa=!1;var h={curTop:d,lastTop:Ma,maxTop:Ja,direction:La},i=ka.beforerender&&ka.beforerender.call(ha,h);i!==!1&&(Z(d,ha.getScrollTop()),Sa&&ja&&g.setStyle(ja,"transform","translate(0, "+-Ta+"px) "+ua),Ma=d,ka.render&&ka.render.call(ha,h)),a&&a.call(ha,!1)}Na=e},_=function(a){for(var b=0,c=a.keyFrames.length;c>b;b++){for(var d,e,f,g,h=a.keyFrames[b],i={};null!==(g=J.exec(h.props));)f=g[1],e=g[2],d=f.match(K),null!==d?(f=d[1],d=d[2]):d=w,e=e.indexOf("!")?aa(e):[e.slice(1)],i[f]={value:e,easing:W[d]};h.props=i}},aa=function(a){var b=[];return P.lastIndex=0,a=a.replace(P,function(a){return a.replace(N,function(a){return a/255*100+"%"})}),S&&(Q.lastIndex=0,a=a.replace(Q,function(a){return S+a})),a=a.replace(N,function(a){return b.push(+a),"{?}"}),b.unshift(a),b},ba=function(a){var b,c,d={};for(b=0,c=a.keyFrames.length;c>b;b++)ca(a.keyFrames[b],d);for(d={},b=a.keyFrames.length-1;b>=0;b--)ca(a.keyFrames[b],d)},ca=function(a,b){var c;for(c in b)h.call(a.props,c)||(a.props[c]=b[c]);for(c in a.props)b[c]=a.props[c]},da=function(a,b,c){var d,e=a.length;if(e!==b.length)throw"Can't interpolate between \""+a[0]+'" and "'+b[0]+'"';var f=[a[0]];for(d=1;e>d;d++)f[d]=a[d]+(b[d]-a[d])*c;return f},ea=function(a){var b=1;return O.lastIndex=0,a[0].replace(O,function(){return a[b++]})},fa=function(a,b){a=[].concat(a);for(var c,d,e=0,f=a.length;f>e;e++)d=a[e],c=ia[d[F]],c&&(b?(d.style.cssText=c.dirtyStyleAttr,Ea(d,c.dirtyClassAttr)):(c.dirtyStyleAttr=d.style.cssText,c.dirtyClassAttr=Da(d),d.style.cssText=c.styleAttr,Ea(d,c.classAttr)))},ga=function(){ua="translateZ(0)",g.setStyle(ja,"transform",ua);var a=j(ja),b=a.getPropertyValue("transform"),c=a.getPropertyValue(S+"transform"),d=b&&"none"!==b||c&&"none"!==c;d||(ua="")};g.setStyle=function(a,b,c){var d=a.style;if(b=b.replace(L,M).replace("-",""),"zIndex"===b)isNaN(c)?d[b]=c:d[b]=""+(0|c);else if("float"===b)d.styleFloat=d.cssFloat=c;else try{R&&(d[R+b.slice(0,1).toUpperCase()+b.slice(1)]=c),d[b]=c}catch(e){}};var ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa=g.addEvent=function(b,c,d){var e=function(b){return b=b||a.event,b.target||(b.target=b.srcElement),b.preventDefault||(b.preventDefault=function(){b.returnValue=!1,b.defaultPrevented=!0}),d.call(this,b)};c=c.split(" ");for(var f,g=0,h=c.length;h>g;g++)f=c[g],b.addEventListener?b.addEventListener(f,d,!1):b.attachEvent("on"+f,e),Ua.push({element:b,name:f,listener:d})},xa=g.removeEvent=function(a,b,c){b=b.split(" ");for(var d=0,e=b.length;e>d;d++)a.removeEventListener?a.removeEventListener(b[d],c,!1):a.detachEvent("on"+b[d],c)},ya=function(){for(var a,b=0,c=Ua.length;c>b;b++)a=Ua[b],xa(a.element,a.name,a.listener);Ua=[]},za=function(a,b,c){ka.keyframe&&ka.keyframe.call(ha,a,b,c)},Aa=function(){var a=ha.getScrollTop();Ja=0,la&&!Sa&&(f.style.height=""),Y(),la&&!Sa&&(f.style.height=Ja+e.clientHeight+"px"),Sa?ha.setScrollTop(i.min(ha.getScrollTop(),Ja)):ha.setScrollTop(a,!0),sa=!0},Ba=function(){var a,b,c=e.clientHeight,d={};for(a in ma)b=ma[a],"function"==typeof b?b=b.call(ha):/p$/.test(b)&&(b=b.slice(0,-1)/100*c),d[a]=b;return d},Ca=function(){var a,b=0;return ja&&(b=i.max(ja.offsetHeight,ja.scrollHeight)),a=i.max(b,f.scrollHeight,f.offsetHeight,e.scrollHeight,e.offsetHeight,e.clientHeight),a-e.clientHeight},Da=function(b){var c="className";return a.SVGElement&&b instanceof a.SVGElement&&(b=b[c],c="baseVal"),b[c]},Ea=function(b,d,e){var f="className";if(a.SVGElement&&b instanceof a.SVGElement&&(b=b[f],f="baseVal"),e===c)return void(b[f]=d);for(var g=b[f],h=0,i=e.length;i>h;h++)g=Ga(g).replace(Ga(e[h])," ");g=Fa(g);for(var j=0,k=d.length;k>j;j++)-1===Ga(g).indexOf(Ga(d[j]))&&(g+=" "+d[j]);b[f]=Fa(g)},Fa=function(a){return a.replace(H,"")},Ga=function(a){return" "+a+" "},Ha=Date.now||function(){return+new Date},Ia=function(a,b){return a.frame-b.frame},Ja=0,Ka=1,La="down",Ma=-1,Na=Ha(),Oa=0,Pa=0,Qa=!1,Ra=0,Sa=!1,Ta=0,Ua=[];"function"==typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof module&&module.exports?module.exports=g:a.skrollr=g}(window,document);
/* Source and licensing information for the above line(s) can be found at https://movilesdonosti.com/modules/gva_blockbuilder/vendor/skrollr.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://movilesdonosti.com/modules/gva_blockbuilder/vendor/main.js. */
(function(r){r.fn.gav_skrollr=function(t){var l=r(window),n,o=this;th=200;this.one('gav_skrollr',function(){t.refresh()});function i(){var t=o.filter(function(){var o=r(this),t=l.scrollTop(),i=t+l.height(),n=o.offset().top,e=n+o.height();return e>=t-th&&n<=i+th});n=t.trigger('gav_skrollr');o=o.not(n)};r(window).on('scroll.gav_skrollr',i)};r(window).load(function(){setTimeout(function(){s=skrollr.init({forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}});if(r('.skrollable.refresh').length){r('.skrollable.refresh').gav_skrollr(s)}},50)})})(jQuery);
/* Source and licensing information for the above line(s) can be found at https://movilesdonosti.com/modules/gva_blockbuilder/vendor/main.js. */;
