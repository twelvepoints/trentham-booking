$(function(){var e={};e=2==$(".swiper-container .swiper-slide-duplicate").length?{loop:!1,pagination:{bullets:!1}}:{autoplay:{delay:8e3},loop:!0,pagination:{el:".o-big-slider .swiper-pagination",bullets:!0}};new Swiper(".o-big-slider",e)}),function(e){function t(e){e.isHovering=!1,e.isMouseInDropDown=!1,e.isHovering||e.isMouseInDropDown||(r.removeClass("hover-active"),e.isDropDownOpen=!1)}function n(t,n){console.log("[handleMenu INIT]");var r=e(t).parent();"UL"==r[0].nodeName&&(r=r.context),"LI"!=e(t)[0].nodeName||e(t).hasClass("active")||(e(t).addClass("hover-active"),n.isDropDownOpen=!0),e(r).hasClass("hover-active")||(e(r).addClass("hover-active"),n.isDropDownOpen=!0)}console.log("Script init");var r=e(".l-header .header .section-nav .department-nav li.d-none"),o=e(".l-header .header .section-nav .department-nav li.d-none ul"),a={isHovering:!1,isDropDownOpen:!1,isMouseInDropDown:!1};r.mouseenter(function(t){if(console.log("[DesktopMenuItem INIT]"),console.log(t.target),"A"==e(t.target)[0].nodeName||"LI"==e(t.target)[0].nodeName){console.log("mouseenter desktopMenuItem");e("ul.department-nav").children().removeClass("hover-active"),a.isDropDownOpen=!1,a.isHovering=!0;n(e(t.target),a)}}),o.mouseenter(function(){a.isMouseInDropDown=!0}).mouseleave(function(){t(a)})}(jQuery),$(function(){new Swiper(".o-info-cards",{freeModeMomentum:!0,loop:!0,navigation:{nextEl:".o-info-cards .swiper-button-next",prevEl:".o-info-cards .swiper-button-prev"},breakpoints:{9999:{slidesPerView:4.25,spaceBetween:40},1600:{slidesPerView:4.25,spaceBetween:40},1300:{slidesPerView:3.5,spaceBetween:30},992:{slidesPerView:2.5,spaceBetween:25},767:{slidesPerView:2.3,spaceBetween:20},540:{slidesPerView:1.35,spaceBetween:15}}})}),$(function(){new Swiper(".o-whats-on-cards",{slidesPerView:1.25,spaceBetween:40,freeModeMomentum:!0,centeredSlides:!0,loop:!0,navigation:{nextEl:".o-whats-on-cards .swiper-button-next",prevEl:".o-whats-on-cards .swiper-button-prev"},breakpoints:{9999:{spaceBetween:40},1600:{spaceBetween:40},1300:{spaceBetween:30},992:{spaceBetween:25},767:{navigation:!1,spaceBetween:20},540:{navigation:!1,spaceBetween:15}}})}),$(function(){var e=$(".js-unscrolled");$(window).scroll(function(){$(window).scrollTop()>=140?e.removeClass("js-unscrolled").addClass("js-scrolled"):e.removeClass("js-scrolled").addClass("js-unscrolled")})}),$(function(){$("#megamenu-toggle").click(function(){$(".trentham-megamenu").toggle(),$("#megamenu-toggle,.trentham-megamenu").toggleClass("active")})}),$(function(){$("#search-toggle").click(function(){$(".trentham-search").toggle(),$("#search-toggle,.trentham-search").toggleClass("active")})}),$(document).ready(function(){$("#datePicker").datepicker({format:"dd/mm/yyyy"})}),$(".js-hide").click(function(){$(".warning-panel, .announcement-panel").hide()}),window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return r(b.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&g[o]!==n)return"pfx"!=t||o}return!1}function c(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return!1===r?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+E.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?s(o,t):(o=(e+" "+S.join(r+" ")+r).split(" "),c(o,t,n))}var u,d,p={},f=t.documentElement,m="modernizr",h=t.createElement(m),g=h.style,v=t.createElement("input"),y=":)",w={}.toString,b=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",E=x.split(" "),S=x.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},T={},k={},$={},M=[],j=M.slice,D=function(e,n,r,o){var a,i,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:m+(r+1),l.appendChild(s);return a=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),l.id=m,(u?l:d).innerHTML+=a,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),i=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),f.style.overflow=c),!!i},N=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return D("@media "+t+" { #"+m+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},P=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),B={}.hasOwnProperty;d=a(B,"undefined")||a(B.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return B.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(j.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(j.call(arguments)))};return r}),T.flexbox=function(){return l("flexWrap")},T.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},T.canvastext=function(){return!!p.canvas&&!!a(t.createElement("canvas").getContext("2d").fillText,"function")},T.webgl=function(){return!!e.WebGLRenderingContext},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:D(["@media (",b.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!e.postMessage},T.websqldatabase=function(){return!!e.openDatabase},T.indexedDB=function(){return!!l("indexedDB",e)},T.hashchange=function(){return P("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},T.history=function(){return!!e.history&&!!history.pushState},T.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},T.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},T.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(g.backgroundColor,"rgba")},T.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(g.backgroundColor,"rgba")||i(g.backgroundColor,"hsla")},T.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},T.backgroundsize=function(){return l("backgroundSize")},T.borderimage=function(){return l("borderImage")},T.borderradius=function(){return l("borderRadius")},T.boxshadow=function(){return l("boxShadow")},T.textshadow=function(){return""===t.createElement("div").style.textShadow},T.opacity=function(){return o("opacity:.55"),/^0.55$/.test(g.opacity)},T.cssanimations=function(){return l("animationName")},T.csscolumns=function(){return l("columnCount")},T.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+b.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),i(g.backgroundImage,"gradient")},T.cssreflections=function(){return l("boxReflect")},T.csstransforms=function(){return!!l("transform")},T.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in f.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},T.csstransitions=function(){return l("transition")},T.fontface=function(){var e;return D('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},T.generatedcontent=function(){var e;return D(["#",m,"{font:0/0 a}#",m,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},T.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},T.webworkers=function(){return!!e.Worker},T.applicationcache=function(){return!!e.applicationCache},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C.svg},T.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(C.svg,"animate")))},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(C.svg,"clipPath")))};for(var z in T)d(T,z)&&(u=z.toLowerCase(),p[u]=T[z](),M.push((p[u]?"":"no-")+u));return p.input||function(){p.input=function(n){for(var r=0,o=n.length;r<o;r++)$[n[r]]=n[r]in v;return $.list&&($.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),$}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,s=e.length;i<s;i++)v.setAttribute("type",o=e[i]),r="text"!==v.type,r&&(v.value=y,v.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&v.style.WebkitAppearance!==n?(f.appendChild(v),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(v,null).WebkitAppearance&&0!==v.offsetHeight,f.removeChild(v)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?v.checkValidity&&!1===v.checkValidity():v.value!=y)),k[e[i]]=!!r;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))}(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,f.className+=" "+(t?"":"no-")+e,p[e]=t}return p},r(""),h=v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[m]];return t||(t={},h++,e[m]=h,g[h]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||p.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),c=s.length;i<c;i++)a.createElement(s[i]);return a}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var r=o(e);return v.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,r),e}var l,u,d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",h=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){l=!0,u=!0}}();var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==d.shivCSS,supportsUnknownElements:u,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:c,createElement:a,createDocumentFragment:i};e.html5=v,c(t)}(this,t),p._version="2.8.3",p._prefixes=b,p._domPrefixes=S,p._cssomPrefixes=E,p.mq=N,p.hasEvent=P,p.testProp=function(e){return s([e])},p.testAllProps=l,p.testStyles=D,p.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+M.join(" "),p}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function c(e,n,r,o,a,c,l){function u(t){if(!f&&i(d.readyState)&&(w.r=f=1,!y&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){x.removeChild(d)},50);for(var r in k[n])k[n].hasOwnProperty(r)&&k[n][r].onload()}}var l=l||p.errorTimeout,d=t.createElement(e),f=0,g=0,w={t:r,s:n,e:a,a:c,x:l};1===k[n]&&(g=1,k[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,w),"img"!=e&&(g||2===k[n]?(x.insertBefore(d,b?null:h),m(u,l)):k[n].push(d))}function l(e,t,n,r,a){return y=0,t=t||"j",o(e)?c("c"==t?S:E,e,t,this.i++,n,r,a):(v.splice(this.i++,0,e),1==v.length&&s()),this}function u(){var e=p;return e.loader={load:l,i:0},e}var d,p,f=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,w="MozAppearance"in f.style,b=w&&!!t.createRange().compareNode,x=b?f:h.parentNode,f=e.opera&&"[object Opera]"==g.call(e.opera),f=!!t.attachEvent&&!f,E=w?"object":f?"script":"img",S=f?"script":E,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},T=[],k={},$={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),o=T.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;n<i;n++)r=e[n].split("="),(t=$[r.shift()])&&(a=t(a,r));for(n=0;n<o;n++)a=T[n](a);return a}function i(e,o,a,i,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,a,i,s):(k[c.url]?c.noexec=!0:k[c.url]=1,a.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(o)||r(l))&&a.load(function(){u(),o&&o(c.origUrl,s,i),l&&l(c.origUrl,s,i),k[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}),i(e,d,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(d)?d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(p[c])),i(e[c],d,t,c,l))}else!n&&f()}var s,c,l=!!e.test,u=e.load||e.both,d=e.callback||a,p=d,f=e.complete||a;n(l?e.yep:e.nope,!!u),u&&n(u)}var c,l,d=this.yepnope.loader;if(o(e))i(e,0,d,0);else if(C(e))for(c=0;c<e.length;c++)l=e[c],o(l)?i(l,0,d,0):C(l)?p(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},p.addPrefix=function(e,t){$[e]=t},p.addFilter=function(e){T.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,o,c,l){var u,d,f=t.createElement("script"),o=o||p.errorTimeout;f.src=e;for(d in r)f.setAttribute(d,r[d]);n=l?s:n||a,f.onreadystatechange=f.onload=function(){!u&&i(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),c?f.onload():h.parentNode.insertBefore(f,h)},e.yepnope.injectCss=function(e,n,r,o,i,c){var l,o=t.createElement("link"),n=c?s:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);i||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(e){"use strict";e.matchMedia=e.matchMedia||function(e,t){var n,r=e.documentElement,o=r.firstElementChild||r.firstChild,a=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(a,o),n=42===i.offsetWidth,r.removeChild(a),{matches:n,media:e}}}(e.document)}(this),function(e){"use strict";function t(){b(!0)}var n={};e.respond=n,n.update=function(){};var r=[],o=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var n=o();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},i=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=a,n.queue=r,n.unsupportedmq=i,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var s,c,l,u=e.document,d=u.documentElement,p=[],f=[],m=[],h={},g=u.getElementsByTagName("head")[0]||d,v=u.getElementsByTagName("base")[0],y=g.getElementsByTagName("link"),w=function(){var e,t=u.createElement("div"),n=u.body,r=d.style.fontSize,o=n&&n.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=u.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,a?d.removeChild(n):n.removeChild(t),d.style.fontSize=r,o&&(n.style.fontSize=o),e=l=parseFloat(e)},b=function(t){var n=d.clientWidth,r="CSS1Compat"===u.compatMode&&n||u.body.clientWidth||n,o={},a=y[y.length-1],i=(new Date).getTime();if(t&&s&&i-s<30)return e.clearTimeout(c),void(c=e.setTimeout(b,30));s=i;for(var h in p)if(p.hasOwnProperty(h)){var v=p[h],x=v.minw,E=v.maxw,S=null===x,C=null===E;x&&(x=parseFloat(x)*(x.indexOf("em")>-1?l||w():1)),E&&(E=parseFloat(E)*(E.indexOf("em")>-1?l||w():1)),v.hasquery&&(S&&C||!(S||r>=x)||!(C||r<=E))||(o[v.media]||(o[v.media]=[]),o[v.media].push(f[v.rules]))}for(var T in m)m.hasOwnProperty(T)&&m[T]&&m[T].parentNode===g&&g.removeChild(m[T]);m.length=0;for(var k in o)if(o.hasOwnProperty(k)){var $=u.createElement("style"),M=o[k].join("\n");$.type="text/css",$.media=k,g.insertBefore($,a.nextSibling),$.styleSheet?$.styleSheet.cssText=M:$.appendChild(u.createTextNode(M)),m.push($)}},x=function(e,t,r){var o=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),a=o&&o.length||0;t=t.substring(0,t.lastIndexOf("/"));var s=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},c=!a&&r;t.length&&(t+="/"),c&&(a=1);for(var l=0;l<a;l++){var u,d,m,h;c?(u=r,f.push(s(e))):(u=o[l].match(n.regex.findStyles)&&RegExp.$1,f.push(RegExp.$2&&s(RegExp.$2))),m=u.split(","),h=m.length;for(var g=0;g<h;g++)d=m[g],i(d)||p.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:f.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}b()},E=function(){if(r.length){var t=r.shift();a(t.href,function(n){x(n,t.href,t.media),h[t.href]=!0,e.setTimeout(function(){E()},0)})}},S=function(){for(var t=0;t<y.length;t++){var n=y[t],o=n.href,a=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();o&&i&&!h[o]&&(n.styleSheet&&n.styleSheet.rawCssText?(x(n.styleSheet.rawCssText,o,a),h[o]=!0):(/^([a-zA-Z:]*\/\/)/.test(o)||v)&&o.replace(RegExp.$1,"").split("/")[0]!==e.location.host||("//"===o.substring(0,2)&&(o=e.location.protocol+o),r.push({href:o,media:a})))}E()};S(),n.update=S,n.getEmValue=w,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e){return}();





    // $('.booking-modal-open').click(function () {
    //     $(".booking-modal-container").addClass("toggled");
    //     $('body').css('overflow-y', 'hidden');
    // });

    // $('.booking-modal-close').click(function () {
    //     $(".booking-modal-container").removeClass("toggled");
    //     $('body').css('overflow-y', 'visible');
    // });
