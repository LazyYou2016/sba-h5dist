(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-99ee83ee"],{"20d0":function(t,e,r){"use strict";function n(t,e){u.apply(t,l(e)?e:[e])}function a(t,e,r,o,c,s,u,f,d,h,m,y,g){var v=t;if("function"==typeof u?v=u(e,v):v instanceof Date?v=h(v):"comma"===r&&l(v)&&(v=v.join(",")),null===v){if(o)return s&&!y?s(e,p.encoder,g):e;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||i.isBuffer(v))return s?[m(y?e:s(e,p.encoder,g))+"="+m(s(v,p.encoder,g))]:[m(e)+"="+m(String(v))];var b,j=[];if(void 0===v)return j;b=l(u)?u:(t=Object.keys(v),f?t.sort(f):t);for(var w=0;w<b.length;++w){var O=b[w];c&&null===v[O]||(l(v)?n(j,a(v[O],"function"==typeof r?r(e,O):e,r,o,c,s,u,f,d,h,m,y,g)):n(j,a(v[O],e+(d?"."+O:"["+O+"]"),r,o,c,s,u,f,d,h,m,y,g)))}return j}var i=r("7b05"),o=r("aaf3"),c=Object.prototype.hasOwnProperty,s={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},l=Array.isArray,u=Array.prototype.push,f=Date.prototype.toISOString,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(t){return f.call(t)},skipNulls:!1,strictNullHandling:!1};t.exports=function(t,e){var r=t,i=function(t){if(!t)return p;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||p.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==t.format){if(!c.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var n=o.formatters[r];r=p.filter;return"function"!=typeof t.filter&&!l(t.filter)||(r=t.filter),{addQueryPrefix:("boolean"==typeof t.addQueryPrefix?t:p).addQueryPrefix,allowDots:void 0===t.allowDots?p.allowDots:!!t.allowDots,charset:e,charsetSentinel:("boolean"==typeof t.charsetSentinel?t:p).charsetSentinel,delimiter:(void 0===t.delimiter?p:t).delimiter,encode:("boolean"==typeof t.encode?t:p).encode,encoder:("function"==typeof t.encoder?t:p).encoder,encodeValuesOnly:("boolean"==typeof t.encodeValuesOnly?t:p).encodeValuesOnly,filter:r,formatter:n,serializeDate:("function"==typeof t.serializeDate?t:p).serializeDate,skipNulls:("boolean"==typeof t.skipNulls?t:p).skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:("boolean"==typeof t.strictNullHandling?t:p).strictNullHandling}}(e);"function"==typeof i.filter?r=(0,i.filter)("",r):l(i.filter)&&(d=i.filter);var u=[];if("object"!=typeof r||null===r)return"";t=e&&e.arrayFormat in s?e.arrayFormat:e&&"indices"in e&&!e.indices?"repeat":"indices";var f=s[t],d=d||Object.keys(r);i.sort&&d.sort(i.sort);for(var h=0;h<d.length;++h){var m=d[h];i.skipNulls&&null===r[m]||n(u,a(r[m],m,f,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}return e=u.join(i.delimiter),t=!0===i.addQueryPrefix?"?":"",i.charsetSentinel&&("iso-8859-1"===i.charset?t+="utf8=%26%2310003%3B&":t+="utf8=%E2%9C%93&"),0<e.length?t+e:""}},5114:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return i})),r.d(e,"f",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return s})),r.d(e,"c",(function(){return l}));var n=r("751a"),a=function(t){return n.a.get("/match/carousel",t)},i=function(t){return n.a.get("/match/index",t)},o=function(t){return n.a.get("/match/venues",t)},c=function(t){return n.a.get("/match/regulation",t)},s=function(t){return n.a.get("/match/reward",t)},l=function(t){return n.a.get("/match/rank",t)}},"751a":function(t,e,r){"use strict";var n=r("186d"),a=r("bb9a"),i=(n=r("fed1"),r.n(n));e.a={get:function(t,e){return Object(a.a)({url:t,method:"get",params:e})},post:function(t,e,r){return Object(a.a)({url:t,method:"post",params:e,data:r})},postQs:function(t,e){return Object(a.a)({url:t,method:"post",data:i.a.stringify(e)})},patch:function(t,e){return Object(a.a)({url:t,method:"patch",data:e})},put:function(t,e,r){return new Promise((function(n,i){Object(a.a)({url:t,method:"put",params:e,data:r}).then((function(t){n(t.data)})).catch((function(t){i(t)}))}))}}},"7b05":function(t,e,r){"use strict";function n(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r}var a=Object.prototype.hasOwnProperty,i=Array.isArray,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();t.exports={arrayToObject:n,assign:function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var a=e[n],o=a.obj[a.prop],c=Object.keys(o),s=0;s<c.length;++s){var l=c[s],u=o[l];"object"==typeof u&&null!==u&&-1===r.indexOf(u)&&(e.push({obj:o,prop:l}),r.push(u))}return function(t){for(;1<t.length;){var e=t.pop(),r=e.obj[e.prop];if(i(r)){for(var n=[],a=0;a<r.length;++a)void 0!==r[a]&&n.push(r[a]);e.obj[e.prop]=n}}}(e),t},decode:function(t,e,r){if(t=t.replace(/\+/g," "),"iso-8859-1"===r)return t.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(t)}catch(e){return t}},encode:function(t,e,r){if(0===t.length)return t;var n="string"==typeof t?t:String(t);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var a="",i=0;i<n.length;++i){var c=n.charCodeAt(i);45===c||46===c||95===c||126===c||48<=c&&c<=57||65<=c&&c<=90||97<=c&&c<=122?a+=n.charAt(i):c<128?a+=o[c]:c<2048?a+=o[192|c>>6]+o[128|63&c]:c<55296||57344<=c?a+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(i)),a+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return a},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,r,o){if(!r)return e;if("object"!=typeof r){if(i(e))e.push(r);else{if(!e||"object"!=typeof e)return[e,r];(o&&(o.plainObjects||o.allowPrototypes)||!a.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(r);var c=e;return i(e)&&!i(r)&&(c=n(e,o)),i(e)&&i(r)?(r.forEach((function(r,n){var i;a.call(e,n)?(i=e[n])&&"object"==typeof i&&r&&"object"==typeof r?e[n]=t(i,r,o):e.push(r):e[n]=r})),e):Object.keys(r).reduce((function(e,n){var i=r[n];return a.call(e,n)?e[n]=t(e[n],i,o):e[n]=i,e}),c)}}},aaf3:function(t,e,r){"use strict";var n=String.prototype.replace,a=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,a,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},df17:function(t,e,r){"use strict";function n(t,e){var r,n,a,s,l={},u=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=(t=e.parameterLimit===1/0?void 0:e.parameterLimit,u.split(e.delimiter,t)),p=-1,d=e.charset;if(e.charsetSentinel)for(r=0;r<f.length;++r)0===f[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[r]?d="utf-8":"utf8=%26%2310003%3B"===f[r]&&(d="iso-8859-1"),p=r,r=f.length);for(r=0;r<f.length;++r)r!==p&&((s=(s=-1===(s=-1===(s=(n=f[r]).indexOf("]="))?n.indexOf("="):s+1)?(a=e.decoder(n,c.decoder,d),e.strictNullHandling?null:""):(a=e.decoder(n.slice(0,s),c.decoder,d),e.decoder(n.slice(s+1),c.decoder,d)))&&e.interpretNumericEntities&&"iso-8859-1"===d?s.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))})):s)&&e.comma&&-1<s.indexOf(",")&&(s=s.split(",")),o.call(l,a)?l[a]=i.combine(l[a],s):l[a]=s);return l}function a(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),c=(t=i?n.slice(0,i.index):n,[]);if(t){if(!r.plainObjects&&o.call(Object.prototype,t)&&!r.allowPrototypes)return;c.push(t)}for(var s=0;null!==(i=a.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(i[1])}return i&&c.push("["+n.slice(i.index)+"]"),function(t,e,r){for(var n=e,a=t.length-1;0<=a;--a){var i,o,c,s=t[a];"[]"===s&&r.parseArrays?i=[].concat(n):(i=r.plainObjects?Object.create(null):{},o="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(o,10),r.parseArrays||""!==o?!isNaN(c)&&s!==o&&String(c)===o&&0<=c&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=n:i[o]=n:i={0:n}),n=i}return n}(c,e,r)}}var i=r("7b05"),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:i.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1};t.exports=function(t,e){var r=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=(void 0===t.charset?c:t).charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:("boolean"==typeof t.allowPrototypes?t:c).allowPrototypes,arrayLimit:("number"==typeof t.arrayLimit?t:c).arrayLimit,charset:e,charsetSentinel:("boolean"==typeof t.charsetSentinel?t:c).charsetSentinel,comma:("boolean"==typeof t.comma?t:c).comma,decoder:("function"==typeof t.decoder?t:c).decoder,delimiter:("string"==typeof t.delimiter||i.isRegExp(t.delimiter)?t:c).delimiter,depth:("number"==typeof t.depth?t:c).depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:("boolean"==typeof t.interpretNumericEntities?t:c).interpretNumericEntities,parameterLimit:("number"==typeof t.parameterLimit?t:c).parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:("boolean"==typeof t.plainObjects?t:c).plainObjects,strictNullHandling:("boolean"==typeof t.strictNullHandling?t:c).strictNullHandling}}(e);if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof t?n(t,r):t,s=r.plainObjects?Object.create(null):{},l=Object.keys(o),u=0;u<l.length;++u){var f=l[u];f=a(f,o[f],r),s=i.merge(s,f,r)}return i.compact(s)}},e74b:function(t,e,r){"use strict";r.r(e),r("9719"),r("6390"),r("1264");var n=r("5114"),a={name:"home",data:function(){return{url:"http://yingqiu23.com:8082/uploads/",myPlayer:null,listLoading:!1,listFinished:!1,refreshing:!1,listPage:1,pageCount:1,matchlists:[],swiperDatas:[],matchActive:0,matchTabs:[{label:"全部",value:""},{label:"三分大赛",value:"2"},{label:"技巧赛",value:"0"},{label:"混合投篮",value:"1"}]}},mounted:function(){this.getMathcCarousel()},methods:{getMathcCarousel:function(){var t=this;this.listLoading=!0,Object(n.a)().then((function(e){e=e.data,t.swiperDatas=e,t.$nextTick((function(){t.initVideo()}))})).catch((function(t){}))},getMathcList:function(){var t=this;this.listLoading=!0;var e={page:this.listPage};""!==this.matchActive&&(e.category=this.matchActive),Object(n.b)(e).then((function(e){e=e.data,e.matches.forEach((function(e){e.date.substring(0,10)>=t.$formatDate("yyyy-MM-dd",new Date)?e.status=0:e.status=1})),t.matchlists=t.matchlists.concat(e.matches),t.listLoading=!1,t.pageCount=e.pages.pageCount,t.listPage+=1,t.refreshing=!1,t.listPage>t.pageCount&&(t.listFinished=!0)})).catch((function(t){}))},onRefresh:function(){this.listPage=1,this.matchlists=[],this.listFinished=!1,this.listLoading=!0,this.getMathcCarousel(),this.getMathcList()},getArea:function(){},goMatch:function(t){this.$router.push({path:"/match",query:{id:t.id,name:t.name}})},goMatchEnd:function(t){this.$router.push({path:"/match/end",query:{id:t.id,name:t.name}})},initVideo:function(){var t=this;this.swiperDatas.forEach((function(e,r){t.$video("#myVideo-"+r,{controls:!0,preload:"auto"})}))}},watch:{matchActive:function(){this.listPage=1,this.matchlists=[],this.listLoading=!0,this.listFinished=!1,this.getMathcList()}}};r=r("5d22"),a=Object(r.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[r("div",{staticClass:"main main-tabbar"},[r("van-nav-bar",{staticClass:"nav",attrs:{title:"赛事大厅",fixed:""}},[r("van-icon",{attrs:{slot:"right",name:"chat-o"},on:{click:function(e){return t.$router.push({name:"news"})}},slot:"right"})],1),r("van-sticky",{attrs:{"offset-top":38}},[r("van-tabs",{model:{value:t.matchActive,callback:function(e){t.matchActive=e},expression:"matchActive"}},t._l(t.matchTabs,(function(t,e){return r("van-tab",{key:e,attrs:{title:t.label,name:t.value}})})),1)],1),r("van-swipe",t._l(t.swiperDatas,(function(e,n){return r("van-swipe-item",{key:n},[r("video",{staticClass:"video-js",attrs:{id:"myVideo-"+n,poster:t.$UrlCarousel+e.photo_url}},[r("source",{attrs:{src:t.$UrlCarousel+e.video,type:"video/mp4"}})])])})),1),r("van-list",{attrs:{finished:t.listFinished,"finished-text":"没有更多了"},on:{load:t.getMathcList},model:{value:t.listLoading,callback:function(e){t.listLoading=e},expression:"listLoading"}},t._l(t.matchlists,(function(e,n){return r("van-panel",{key:n,staticClass:"cell-list cell-list-home",on:{click:function(r){return t.goMatch(e)}}},[r("van-row",[r("van-col",{attrs:{span:"8"}},[r("van-image",{attrs:{src:t.$UrlUploads+e.photo_url,type:"contain"}})],1),r("van-col",{attrs:{span:"16"}},[r("div",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),r("van-col",{attrs:{span:"16"}},[r("div",{staticClass:"text-gray fs-12"},[t._v(" 项目： "),"0"===e.category?[t._v(" 技巧赛 ")]:"1"===e.category?[t._v(" 混合投篮 ")]:"2"===e.category?[t._v(" 三分 ")]:t._e()],2),r("div",{staticClass:"content"},[r("van-icon",{attrs:{"class-prefix":"icon",name:"time"}}),t._v(" "+t._s(e.date)+" ")],1),r("div",{staticClass:"content"},[t._v(" 冠军："+t._s(e.champion||"暂无")+" ")])]),r("van-col",{staticClass:"tag-container m-t-md",attrs:{span:"8"}},[0===e.status?r("van-tag",{attrs:{type:"primary",size:"large"}},[t._v("进行中")]):r("van-tag",{attrs:{size:"large"}},[t._v("已结束")])],1)],1)],1)],1)})),1)],1)])}),[],!1,null,null,null);e.default=a.exports},fed1:function(t,e,r){"use strict";var n=r("20d0"),a=r("df17");r=r("aaf3");t.exports={formats:r,parse:a,stringify:n}}}]);