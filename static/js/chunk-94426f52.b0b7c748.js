(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-94426f52"],{"007b":function(e,t,r){"use strict";r.r(t),r("9719");var n=r("5114"),o={name:"home",data:function(){return{url:"http://yingqiu23.com:8082/uploads/",swiperDatas:["http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=it&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=1943755668,2676595974&os=1773669304,176151170&simid=3328700673,329524878&pn=2&rn=1&di=111760&ln=1447&fr=&fmq=1589791179124_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fphotocdn.sohu.com%2F20160622%2FImg455679740.jpg&rpstart=0&rpnum=0&adpicid=0&force=undefined"],myPlayer:null,swiperInit:!0,matchlists:[]}},mounted:function(){this.initVideo()},methods:{getMathcList:function(){var e=this;Object(n.b)({page:1}).then((function(t){t=t.data,e.matchlists=t.matches,e.swiperInit&&(e.swiperDatas=t.carousel_url),e.swiperInit=!1})).catch((function(e){}))},getArea:function(){},goMatch:function(e){this.$router.push({path:"/match",query:{id:e}})},initVideo:function(){var e=this;this.swiperDatas.forEach((function(t,r){e.$video("#myVideo-"+r,{controls:!0,preload:"auto"})}))}}},i=r("5d22");o=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main main-tabbar"},[n("van-swipe",{attrs:{autoplay:3e3}},e._l(e.swiperDatas,(function(e,t){return n("van-swipe-item",{key:t},[n("video",{staticClass:"video-js",attrs:{id:"myVideo-"+t,poster:r("06a1")}},[n("source",{attrs:{src:"https://www.w3school.com.cn/i/movie.ogg",type:"video/mp4"}})])])})),1)],1)}),[],!1,null,null,null);t.default=o.exports},"06a1":function(e,t,r){e.exports=r.p+"static/img/arena.b2435496.png"},"20d0":function(e,t,r){"use strict";function n(e,t){l.apply(e,u(t)?t:[t])}function o(e,t,r,a,c,s,l,f,d,h,m,y,b){var g=e;if("function"==typeof l?g=l(t,g):g instanceof Date?g=h(g):"comma"===r&&u(g)&&(g=g.join(",")),null===g){if(a)return s&&!y?s(t,p.encoder,b):t;g=""}if("string"==typeof g||"number"==typeof g||"boolean"==typeof g||i.isBuffer(g))return s?[m(y?t:s(t,p.encoder,b))+"="+m(s(g,p.encoder,b))]:[m(t)+"="+m(String(g))];var v,w=[];if(void 0===g)return w;v=u(l)?l:(e=Object.keys(g),f?e.sort(f):e);for(var j=0;j<v.length;++j){var O=v[j];c&&null===g[O]||(u(g)?n(w,o(g[O],"function"==typeof r?r(t,O):t,r,a,c,s,l,f,d,h,m,y,b)):n(w,o(g[O],t+(d?"."+O:"["+O+"]"),r,a,c,s,l,f,d,h,m,y,b)))}return w}var i=r("7b05"),a=r("aaf3"),c=Object.prototype.hasOwnProperty,s={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},u=Array.isArray,l=Array.prototype.push,f=Date.prototype.toISOString,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,formatter:a.formatters[a.default],indices:!1,serializeDate:function(e){return f.call(e)},skipNulls:!1,strictNullHandling:!1};e.exports=function(e,t){var r=e,i=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=a.default;if(void 0!==e.format){if(!c.call(a.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=a.formatters[r];r=p.filter;return"function"!=typeof e.filter&&!u(e.filter)||(r=e.filter),{addQueryPrefix:("boolean"==typeof e.addQueryPrefix?e:p).addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:("boolean"==typeof e.charsetSentinel?e:p).charsetSentinel,delimiter:(void 0===e.delimiter?p:e).delimiter,encode:("boolean"==typeof e.encode?e:p).encode,encoder:("function"==typeof e.encoder?e:p).encoder,encodeValuesOnly:("boolean"==typeof e.encodeValuesOnly?e:p).encodeValuesOnly,filter:r,formatter:n,serializeDate:("function"==typeof e.serializeDate?e:p).serializeDate,skipNulls:("boolean"==typeof e.skipNulls?e:p).skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:("boolean"==typeof e.strictNullHandling?e:p).strictNullHandling}}(t);"function"==typeof i.filter?r=(0,i.filter)("",r):u(i.filter)&&(d=i.filter);var l=[];if("object"!=typeof r||null===r)return"";e=t&&t.arrayFormat in s?t.arrayFormat:t&&"indices"in t&&!t.indices?"repeat":"indices";var f=s[e],d=d||Object.keys(r);i.sort&&d.sort(i.sort);for(var h=0;h<d.length;++h){var m=d[h];i.skipNulls&&null===r[m]||n(l,o(r[m],m,f,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}return t=l.join(i.delimiter),e=!0===i.addQueryPrefix?"?":"",i.charsetSentinel&&("iso-8859-1"===i.charset?e+="utf8=%26%2310003%3B&":e+="utf8=%E2%9C%93&"),0<t.length?e+t:""}},5114:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"f",(function(){return a})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return u}));var n=r("751a"),o=function(e){return n.a.get("/match/carousel",e)},i=function(e){return n.a.get("/match/index",e)},a=function(e){return n.a.get("/match/venues",e)},c=function(e){return n.a.get("/match/regulation",e)},s=function(e){return n.a.get("/match/reward",e)},u=function(e){return n.a.get("/match/rank",e)}},"751a":function(e,t,r){"use strict";var n=r("186d"),o=r("bb9a"),i=(n=r("fed1"),r.n(n));t.a={get:function(e,t){return Object(o.a)({url:e,method:"get",params:t})},post:function(e,t,r){return Object(o.a)({url:e,method:"post",params:t,data:r})},postQs:function(e,t){return Object(o.a)({url:e,method:"post",data:i.a.stringify(t)})},patch:function(e,t){return Object(o.a)({url:e,method:"patch",data:t})},put:function(e,t,r){return new Promise((function(n,i){Object(o.a)({url:e,method:"put",params:t,data:r}).then((function(e){n(e.data)})).catch((function(e){i(e)}))}))}}},"7b05":function(e,t,r){"use strict";function n(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r}var o=Object.prototype.hasOwnProperty,i=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();e.exports={arrayToObject:n,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],c=Object.keys(a),s=0;s<c.length;++s){var u=c[s],l=a[u];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:u}),r.push(l))}return function(e){for(;1<e.length;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){if(e=e.replace(/\+/g," "),"iso-8859-1"===r)return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch(t){return e}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",i=0;i<n.length;++i){var c=n.charCodeAt(i);45===c||46===c||95===c||126===c||48<=c&&c<=57||65<=c&&c<=90||97<=c&&c<=122?o+=n.charAt(i):c<128?o+=a[c]:c<2048?o+=a[192|c>>6]+a[128|63&c]:c<55296||57344<=c?o+=a[224|c>>12]+a[128|c>>6&63]+a[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(i)),o+=a[240|c>>18]+a[128|c>>12&63]+a[128|c>>6&63]+a[128|63&c])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,a){if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(a&&(a.plainObjects||a.allowPrototypes)||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var c=t;return i(t)&&!i(r)&&(c=n(t,a)),i(t)&&i(r)?(r.forEach((function(r,n){var i;o.call(t,n)?(i=t[n])&&"object"==typeof i&&r&&"object"==typeof r?t[n]=e(i,r,a):t.push(r):t[n]=r})),t):Object.keys(r).reduce((function(t,n){var i=r[n];return o.call(t,n)?t[n]=e(t[n],i,a):t[n]=i,t}),c)}}},aaf3:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},df17:function(e,t,r){"use strict";function n(e,t){var r,n,o,s,u={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=(e=t.parameterLimit===1/0?void 0:t.parameterLimit,l.split(t.delimiter,e)),p=-1,d=t.charset;if(t.charsetSentinel)for(r=0;r<f.length;++r)0===f[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[r]?d="utf-8":"utf8=%26%2310003%3B"===f[r]&&(d="iso-8859-1"),p=r,r=f.length);for(r=0;r<f.length;++r)r!==p&&((s=(s=-1===(s=-1===(s=(n=f[r]).indexOf("]="))?n.indexOf("="):s+1)?(o=t.decoder(n,c.decoder,d),t.strictNullHandling?null:""):(o=t.decoder(n.slice(0,s),c.decoder,d),t.decoder(n.slice(s+1),c.decoder,d)))&&t.interpretNumericEntities&&"iso-8859-1"===d?s.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))})):s)&&t.comma&&-1<s.indexOf(",")&&(s=s.split(",")),a.call(u,o)?u[o]=i.combine(u[o],s):u[o]=s);return u}function o(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),c=(e=i?n.slice(0,i.index):n,[]);if(e){if(!r.plainObjects&&a.call(Object.prototype,e)&&!r.allowPrototypes)return;c.push(e)}for(var s=0;null!==(i=o.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&a.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(i[1])}return i&&c.push("["+n.slice(i.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;0<=o;--o){var i,a,c,s=e[o];"[]"===s&&r.parseArrays?i=[].concat(n):(i=r.plainObjects?Object.create(null):{},a="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(a,10),r.parseArrays||""!==a?!isNaN(c)&&s!==a&&String(c)===a&&0<=c&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=n:i[a]=n:i={0:n}),n=i}return n}(c,t,r)}}var i=r("7b05"),a=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:i.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=(void 0===e.charset?c:e).charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:("boolean"==typeof e.allowPrototypes?e:c).allowPrototypes,arrayLimit:("number"==typeof e.arrayLimit?e:c).arrayLimit,charset:t,charsetSentinel:("boolean"==typeof e.charsetSentinel?e:c).charsetSentinel,comma:("boolean"==typeof e.comma?e:c).comma,decoder:("function"==typeof e.decoder?e:c).decoder,delimiter:("string"==typeof e.delimiter||i.isRegExp(e.delimiter)?e:c).delimiter,depth:("number"==typeof e.depth?e:c).depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:("boolean"==typeof e.interpretNumericEntities?e:c).interpretNumericEntities,parameterLimit:("number"==typeof e.parameterLimit?e:c).parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:("boolean"==typeof e.plainObjects?e:c).plainObjects,strictNullHandling:("boolean"==typeof e.strictNullHandling?e:c).strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var a="string"==typeof e?n(e,r):e,s=r.plainObjects?Object.create(null):{},u=Object.keys(a),l=0;l<u.length;++l){var f=u[l];f=o(f,a[f],r),s=i.merge(s,f,r)}return i.compact(s)}},fed1:function(e,t,r){"use strict";var n=r("20d0"),o=r("df17");r=r("aaf3");e.exports={formats:r,parse:o,stringify:n}}}]);