(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e301fb2e"],{4127:function(t,e,r){"use strict";function n(t,e,r,i,o,c,l,u,f,p,d,h){var y=t;if("function"==typeof l)y=l(e,y);else if(y instanceof Date)y=p(y);else if(null===y){if(i)return c&&!h?c(e,s.encoder):e;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||a.isBuffer(y))return c?[d(h?e:c(e,s.encoder))+"="+d(c(y,s.encoder))]:[d(e)+"="+d(String(y))];var m,v=[];if(void 0===y)return v;if(Array.isArray(l))m=l;else{var g=Object.keys(y);m=u?g.sort(u):g}for(var b=0;b<m.length;++b){var j=m[b];o&&null===y[j]||(v=Array.isArray(y)?v.concat(n(y[j],r(e,j),r,i,o,c,l,u,f,p,d,h)):v.concat(n(y[j],e+(f?"."+j:"["+j+"]"),r,i,o,c,l,u,f,p,d,h)))}return v}var a=r("d2334"),i=r("b313"),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},c=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(t){return c.call(t)},skipNulls:!1,strictNullHandling:!1};t.exports=function(t,e){var r=t,c=e?a.assign({},e):{};if(null!==c.encoder&&void 0!==c.encoder&&"function"!=typeof c.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===c.delimiter?s.delimiter:c.delimiter,u="boolean"==typeof c.strictNullHandling?c.strictNullHandling:s.strictNullHandling,f="boolean"==typeof c.skipNulls?c.skipNulls:s.skipNulls,p="boolean"==typeof c.encode?c.encode:s.encode,d="function"==typeof c.encoder?c.encoder:s.encoder,h="function"==typeof c.sort?c.sort:null,y=void 0!==c.allowDots&&c.allowDots,m="function"==typeof c.serializeDate?c.serializeDate:s.serializeDate,v="boolean"==typeof c.encodeValuesOnly?c.encodeValuesOnly:s.encodeValuesOnly;if(void 0===c.format)c.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,c.format))throw new TypeError("Unknown format option provided.");var g,b,j=i.formatters[c.format];"function"==typeof c.filter?r=(b=c.filter)("",r):Array.isArray(c.filter)&&(g=b=c.filter);var O,w=[];if("object"!=typeof r||null===r)return"";O=c.arrayFormat in o?c.arrayFormat:"indices"in c?c.indices?"indices":"repeat":"indices";var A=o[O];g=g||Object.keys(r),h&&g.sort(h);for(var x=0;x<g.length;++x){var C=g[x];f&&null===r[C]||(w=w.concat(n(r[C],C,A,u,f,p?d:null,b,h,y,m,j,v)))}var k=w.join(l),L=!0===c.addQueryPrefix?"?":"";return 0<k.length?L+k:""}},4328:function(t,e,r){"use strict";var n=r("4127"),a=r("9e6a"),i=r("b313");t.exports={formats:i,parse:a,stringify:n}},5114:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return i})),r.d(e,"f",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"e",(function(){return s})),r.d(e,"c",(function(){return l}));var n=r("751a"),a=function(t){return n.a.get("/match/carousel",t)},i=function(t){return n.a.get("/match/index",t)},o=function(t){return n.a.get("/match/venues",t)},c=function(t){return n.a.get("/match/regulation",t)},s=function(t){return n.a.get("/match/reward",t)},l=function(t){return n.a.get("/match/rank",t)}},"751a":function(t,e,r){"use strict";r("d3b7");var n=r("bb9a"),a=r("4328"),i=r.n(a),o={get:function(t,e){return Object(n.a)({url:t,method:"get",params:e})},post:function(t,e,r){return Object(n.a)({url:t,method:"post",params:e,data:r})},postQs:function(t,e){return Object(n.a)({url:t,method:"post",data:i.a.stringify(e)})},patch:function(t,e){return Object(n.a)({url:t,method:"patch",data:e})},put:function(t,e,r){return new Promise((function(a,i){Object(n.a)({url:t,method:"put",params:e,data:r}).then((function(t){a(t.data)})).catch((function(t){i(t)}))}))}};e.a=o},"9e6a":function(t,e,r){"use strict";function n(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/g,o=/(\[[^[\]]*])/.exec(n),c=o?n.slice(0,o.index):n,s=[];if(c){if(!r.plainObjects&&i.call(Object.prototype,c)&&!r.allowPrototypes)return;s.push(c)}for(var l=0;null!==(o=a.exec(n))&&l<r.depth;){if(l+=1,!r.plainObjects&&i.call(Object.prototype,o[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(o[1])}return o&&s.push("["+n.slice(o.index)+"]"),function(t,e,r){for(var n=e,a=t.length-1;0<=a;--a){var i,o=t[a];if("[]"===o)i=(i=[]).concat(n);else{i=r.plainObjects?Object.create(null):{};var c="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,s=parseInt(c,10);!isNaN(s)&&o!==c&&String(s)===c&&0<=s&&r.parseArrays&&s<=r.arrayLimit?(i=[])[s]=n:i[c]=n}n=i}return n}(s,e,r)}}var a=r("d2334"),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1};t.exports=function(t,e){var r=e?a.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"==typeof r.depth?r.depth:o.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===t||null==t)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof t?function(t,e){for(var r={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,a=e.parameterLimit===1/0?void 0:e.parameterLimit,c=n.split(e.delimiter,a),s=0;s<c.length;++s){var l,u,f=c[s],p=f.indexOf("]="),d=-1===p?f.indexOf("="):p+1;u=-1===d?(l=e.decoder(f,o.decoder),e.strictNullHandling?null:""):(l=e.decoder(f.slice(0,d),o.decoder),e.decoder(f.slice(d+1),o.decoder)),i.call(r,l)?r[l]=[].concat(r[l]).concat(u):r[l]=u}return r}(t,r):t,s=r.plainObjects?Object.create(null):{},l=Object.keys(c),u=0;u<l.length;++u){var f=l[u],p=n(f,c[f],r);s=a.merge(s,p,r)}return a.compact(s)}},b313:function(t,e,r){"use strict";var n=String.prototype.replace,a=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,a,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d2334:function(t,e,r){"use strict";function n(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r}var a=Object.prototype.hasOwnProperty,i=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();t.exports={arrayToObject:n,assign:function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var a=e[n],i=a.obj[a.prop],o=Object.keys(i),c=0;c<o.length;++c){var s=o[c],l=i[s];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(e.push({obj:i,prop:s}),r.push(l))}return function(t){for(var e;t.length;){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var n=[],a=0;a<e.length;++a)void 0!==e[a]&&n.push(e[a]);r.obj[r.prop]=n}}return e}(e)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",n=0;n<e.length;++n){var a=e.charCodeAt(n);45===a||46===a||95===a||126===a||48<=a&&a<=57||65<=a&&a<=90||97<=a&&a<=122?r+=e.charAt(n):a<128?r+=i[a]:a<2048?r+=i[192|a>>6]+i[128|63&a]:a<55296||57344<=a?r+=i[224|a>>12]+i[128|a>>6&63]+i[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(n)),r+=i[240|a>>18]+i[128|a>>12&63]+i[128|a>>6&63]+i[128|63&a])}return r},isBuffer:function(t){return null!=t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,r,i){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];!i.plainObjects&&!i.allowPrototypes&&a.call(Object.prototype,r)||(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var o=e;return Array.isArray(e)&&!Array.isArray(r)&&(o=n(e,i)),Array.isArray(e)&&Array.isArray(r)?(r.forEach((function(r,n){a.call(e,n)?e[n]&&"object"==typeof e[n]?e[n]=t(e[n],r,i):e.push(r):e[n]=r})),e):Object.keys(r).reduce((function(e,n){var o=r[n];return a.call(e,n)?e[n]=t(e[n],o,i):e[n]=o,e}),o)}}},e74b:function(t,e,r){"use strict";r.r(e),r("99af"),r("4160"),r("0d03"),r("b0c0"),r("159b");var n=r("5114"),a={name:"home",data:function(){return{url:"http://yingqiu23.com:8082/uploads/",myPlayer:null,listLoading:!1,listFinished:!1,refreshing:!1,listPage:1,pageCount:1,matchlists:[],swiperDatas:[],matchActive:0,matchTabs:[{label:"全部",value:""},{label:"技巧赛",value:"0"},{label:"混合投篮",value:"1"},{label:"三分",value:"2"}]}},mounted:function(){this.getMathcCarousel()},methods:{getMathcCarousel:function(){var t=this;this.listLoading=!0,Object(n.a)().then((function(e){var r=e.data;t.swiperDatas=r,t.$nextTick((function(){t.initVideo()}))})).catch((function(t){}))},getMathcList:function(){var t=this;this.listLoading=!0,Object(n.b)({page:this.listPage,category:this.matchActive}).then((function(e){var r=e.data;r.matches.forEach((function(e){e.date.substring(0,10)>=t.$formatDate("yyyy-MM-dd",new Date)?e.status=0:e.status=1})),t.matchlists=t.matchlists.concat(r.matches),t.listLoading=!1,t.pageCount=r.pages.pageCount,t.listPage+=1,t.refreshing=!1,t.listPage>t.pageCount&&(t.listFinished=!0)})).catch((function(t){}))},onRefresh:function(){this.listPage=1,this.matchlists=[],this.listFinished=!1,this.listLoading=!0,this.getMathcCarousel(),this.getMathcList()},getArea:function(){},goMatch:function(t){this.$router.push({path:"/match",query:{id:t.id,name:t.name}})},goMatchEnd:function(t){this.$router.push({path:"/match/end",query:{id:t.id,name:t.name}})},initVideo:function(){var t=this;this.swiperDatas.forEach((function(e,r){t.$video("#myVideo-"+r,{controls:!0,preload:"auto"})}))}},watch:{matchActive:function(){this.listPage=1,this.matchlists=[],this.listLoading=!0,this.listFinished=!1,this.getMathcList()}}},i=r("2877"),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[r("div",{staticClass:"main main-tabbar"},[r("van-nav-bar",{staticClass:"nav",attrs:{title:"赛事大厅",fixed:""}},[r("van-icon",{attrs:{slot:"right",name:"chat-o"},on:{click:function(e){return t.$router.push({name:"news"})}},slot:"right"})],1),r("van-sticky",{attrs:{"offset-top":38}},[r("van-tabs",{model:{value:t.matchActive,callback:function(e){t.matchActive=e},expression:"matchActive"}},t._l(t.matchTabs,(function(t,e){return r("van-tab",{key:e,attrs:{title:t.label,name:t.value}})})),1)],1),r("van-swipe",t._l(t.swiperDatas,(function(e,n){return r("van-swipe-item",{key:n},[r("video",{staticClass:"video-js",attrs:{id:"myVideo-"+n,poster:t.$UrlCarousel+e.photo_url}},[r("source",{attrs:{src:t.$UrlCarousel+e.video,type:"video/mp4"}})])])})),1),r("van-list",{attrs:{finished:t.listFinished,"finished-text":"没有更多了"},on:{load:t.getMathcList},model:{value:t.listLoading,callback:function(e){t.listLoading=e},expression:"listLoading"}},t._l(t.matchlists,(function(e,n){return r("van-panel",{key:n,staticClass:"cell-list cell-list-home",on:{click:function(r){return t.goMatch(e)}}},[r("van-row",[r("van-col",{attrs:{span:"8"}},[r("van-image",{attrs:{src:t.$UrlUploads+e.photo_url,type:"contain"}})],1),r("van-col",{attrs:{span:"16"}},[r("div",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),r("van-col",{attrs:{span:"16"}},[r("div",{staticClass:"text-gray fs-12"},[t._v(" 项目： "),"0"===e.category?[t._v(" 技巧赛 ")]:"1"===e.category?[t._v(" 混合投篮 ")]:"2"===e.category?[t._v(" 三分 ")]:t._e()],2),r("div",{staticClass:"content"},[r("van-icon",{attrs:{"class-prefix":"icon",name:"time"}}),t._v(" "+t._s(e.date)+" ")],1),r("div",{staticClass:"content"},[t._v(" 冠军："+t._s(e.champion||"暂无")+" ")])]),r("van-col",{staticClass:"tag-container m-t-md",attrs:{span:"8"}},[0===e.status?r("van-tag",{attrs:{type:"primary",size:"large"}},[t._v("进行中")]):r("van-tag",{attrs:{size:"large"}},[t._v("已结束")])],1)],1)],1)],1)})),1)],1)])}),[],!1,null,null,null);e.default=o.exports}}]);