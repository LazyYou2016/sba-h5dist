(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-290fae69"],{"0879":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFaklEQVR4Xu1bi3EUORBtRQAXwUEEQATnngSACIAIMBGcLwJMBJgIMAlMQwT4IjgTwUEETb2tVpUYpNF3mKVsVW25yjsrqV//Xrc0jm74cDdcfroF4NYCbjgCv8QFROQhET0monv2OUng/pGIru3zgZmvttbPZgDM8/zYOfeEiPC5uxREVT+F/3PO/RUR9isRXarq5TRNH7YAYygAIgJBXxLRc9M0qeo359wlER20y8z4mxwiAuuApZyo6hPn3B17GJZxTkTvmBnADBnDABARCH4WaPsdtMfMEL55iIi3omc2CYQ/Y+Y3zZMGP+wGwPz7NTRm82Jj58wMjQ0bIgKrAMAeCFjSq9440QWAiMDUIfxd+LRz7vlowZcIAghVvbCYAWsACBetSDcDICJv4evm46c9m2jZPMBX1XOLERfM/KJlniYAAuH/Na1vnq5iwsH9zBoeEFETCNUALIQ/GRmRWzSIzKOqH51zTSBUAXBswnvAekAoBsAC3ltVhdnvrvlIcAwt4UVpTCoCwFKdqKoz4Xfx+ZyLWEyAOygRcUmKLAVALM8XI5the742wF+wR6SzK1W96qW83lLBPIFADrQsACJyilyPPD9NU6qIya1z+D5CmmK/A4FCbm9mkPM8wwpQW2QVtgqAcfv/TEv3e0hOoJkisIjoH2YG86sexhqxb1gW9p2sHXIAYAN/E9EbZoYlNA0rcOBGteNpqyWICNghaPOqFeQAAIrg4L3a9/PUAoDq8X7tj8zdsG+suzpHEgCrwt5b+QnO3zQaTH+5zqOSaJ5git4Kkpa0BkD2xyWIBKZY8njsGQRE9AGqR4kS1wD4H3l/mqafujk1Owkics3PwmebgyEmmef5K3gBM/8R20AUgCBoofvSbP62AZ+SdgFARJBO0Y+MulIKAB/9s3k0J5WI+Llyj6a+b3YBC4ZQIEr36DwpALz/g0yt9vByUg0AoGsPOWuOAuD9lpmzTLEAgEPjJPfcyvdNdX44nwjKmDiTTVkAiglUEyMAOMzVM3r3AQDACmOBMAnACO5vPrg7APM8X6FhEgNycwD84ntawJpLbw5ALxEaYYl7A4ATHrSx/2y0gq5CLOQiVS4wKghaHGjlAl0cwANuWeBbjNVungYNABxvobCqHV1V6AKAaENncyJkAKBheR0cdGaBQPN1mia0zLpGExEK2Fs3FQ60gIoOB6ilY8javqVXS4WB/OfeXsCCjYVt61UQRmnfrM/T+vJiyCLnahlZqsYFCGiqlrTGmlthy32JyGpZv3lDpBGArgIocDsffJNl/eYtsZ0ByHa1VoudeZ4RuUFgRqWjUhfotgDfGlfVL9M0oUEaHbmu8OFQpLctbsEILWoQouRmgh0iY4ABNt8yERGfdbra4mH+rrYCO1hBO6pU8KWWcEPsova4LNA+Lmjdaz4YMc15K8CFp6cl0d824G+LdTVVbT1YAvwZwSxrFSJSfJZZ1PDInbXZ+fwDnBzbvcBuBrcC9OHKnR2k/nDXMFRYaRVZBEDq2NkOO72mS4xj9DOHi5R2jnjdcoxfBIAh67urMMFHRmubDi9Ho2DzIegh7yPIFtPoYgAWtHIjGYZMW3WWUQXAbwBClfCQpxqAIwahWvhmAI4QhCbhuwDwgTG4rTnEgWsmGXFLtckFFgUObmviymrsvn+NPFXP2t1kXNHturHWDYDfNTovqnpW0/aqktgeHqH1cN1hAJhLgPbiEvNpRxs8iguqOucceAco+fG9MLHctX/RYfHWR5XSg7dNul+8SC081AJSixhFRZ2AeAGm9nDpKhAWlyWdc2Ca8GtcdOzy7xK0fwkAJRvZ65lbAPZC/ljWvbWAY9HEXvv4DvTvRG6vV98TAAAAAElFTkSuQmCC"},"2f27":function(t,e,r){"use strict";r.r(e);var n=r("c24f"),a={name:"user",data:function(){return{userInfo:{name:"",sign:r("0879")},cookiesUserInfo:this.$Cookies.get("userInfo")||null,cellLists:[[{title:"我的比赛",icon:"Trophy",url:"/matchLog"},{title:"我的订单",icon:"order",url:"/order"}],[{title:"联系客服",icon:"customer-service"},{title:"赛事合作",icon:"cooperation"},{title:"设置",icon:"setting",url:"/seting"}]],contactData:"",contactView:!1,contactInfoData:"",contactInfoView:!1}},created:function(){},activated:function(){this.userInfo={name:"",sign:r("0879")},this.getUserDetail(),this.cookiesUserInfo=this.$Cookies.get("userInfo")||null},methods:{getUserDetail:function(){var t=this;Object(n.g)().then((function(e){var n=e.data;t.userInfo=n||{address:"",sign:r("0879"),name:"",phone:""}})).catch((function(t){}))},goLogin:function(){this.$router.push({path:"/login"})},goUserInfo:function(){this.$router.push({path:"/userInfo"})},getContact:function(){var t=this;Object(n.a)().then((function(e){var r=e.data;t.contactData=r,t.contactView=!0})).catch((function(t){}))},getContactInfo:function(){var t=this;Object(n.b)().then((function(e){var r=e.data;t.contactInfoData=r,t.contactInfoView=!0})).catch((function(t){}))},onCopy:function(){this.$Toast({message:"复制成功",position:"bottom"})}}},o=r("2877"),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main main-tabbar main-user"},[r("van-nav-bar",{staticClass:"nav-opa",attrs:{fixed:""}}),r("div",{staticClass:"user-bg"}),r("div",{staticClass:"user"},[r("div",{staticClass:"user-head"},[r("van-row",{attrs:{gutter:"20"}},[r("van-col",{attrs:{span:"6"}},[r("van-image",{staticClass:"user-head-sign",attrs:{src:t.userInfo.avatar?t.$UrlAvatar+t.userInfo.avatar:t.$imgDefault,round:"",type:"cover"}})],1),r("van-col",{attrs:{span:"18"}},[t.cookiesUserInfo?[r("div",{staticClass:"user-head-arrow",on:{click:t.goUserInfo}},[r("div",{staticClass:"user-head-name"},[t._v(t._s(t.userInfo.name))]),r("div",{staticClass:"user-head-small"},[t._v("ID号："+t._s(t.userInfo.id))]),r("van-icon",{attrs:{"class-prefix":"icon",name:"right"}})],1)]:[r("div",{staticClass:"text-white fs-18",on:{click:t.goLogin}},[t._v("请前往登录")])]],2)],1)],1),r("div",{staticClass:"user-main"},[r("card",{staticClass:"user-status"},[r("van-row",[r("van-col",{attrs:{span:"12"},on:{click:function(e){return t.$router.push({path:"/wallet"})}}},[r("div",[r("van-icon",{attrs:{"class-prefix":"icon",name:"gold-coin"}}),r("div",{staticClass:"user-status-label"},[t._v("球币")])],1),r("div",{staticClass:"user-status-value"},[t.cookiesUserInfo?[t._v(" "+t._s(t.userInfo.invented)+" ")]:[r("div")]],2)]),r("van-col",{attrs:{span:"12"},on:{click:function(e){return t.$router.push({path:"/bonus"})}}},[r("div",[r("van-icon",{attrs:{"class-prefix":"icon",name:"bonus"}}),r("div",{staticClass:"user-status-label"},[t._v("奖金")])],1),r("div",{staticClass:"user-status-value"},[t.cookiesUserInfo?[t._v(" ￥ "+t._s(t.userInfo.bonus)+" ")]:[r("div")]],2)])],1)],1),t._l(t.cellLists,(function(e,n){return r("div",{key:n,staticClass:"user-cell m-t-md"},[t._l(e,(function(e,n){return["联系客服"===e.title?[r("van-cell",{key:n,attrs:{title:e.title,"is-link":"",value:e.value,"icon-prefix":"icon",icon:e.icon},on:{click:t.getContact}})]:"赛事合作"===e.title?[r("van-cell",{key:n,attrs:{title:e.title,"is-link":"",value:e.value,"icon-prefix":"icon",icon:e.icon},on:{click:t.getContactInfo}})]:[r("van-cell",{key:n,attrs:{title:e.title,"is-link":"",value:e.value,"icon-prefix":"icon",icon:e.icon,to:e.url}})]]}))],2)}))],2)]),r("van-dialog",{attrs:{title:"联系客服","confirm-button-text":"关闭"},model:{value:t.contactView,callback:function(e){t.contactView=e},expression:"contactView"}},[r("div",{staticClass:"dialog-main text-center"},[t._v(" "+t._s(t.contactData)+" "),r("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.contactData,expression:"contactData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],attrs:{type:"primary",size:"mini"}},[t._v("复制")])],1)]),r("van-dialog",{attrs:{title:"赛事合作","confirm-button-text":"关闭"},model:{value:t.contactInfoView,callback:function(e){t.contactInfoView=e},expression:"contactInfoView"}},[r("div",{staticClass:"dialog-main text-center"},[r("van-row",[r("van-col",{staticClass:"text-right",attrs:{span:"8"}},[t._v(" 官方QQ群：")]),r("van-col",{staticClass:"text-left",attrs:{span:"10"}},[t._v(t._s(t.contactInfoData.QQ))]),r("van-col",{attrs:{span:"6"}},[r("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.contactInfoData.QQ,expression:"contactInfoData.QQ",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],attrs:{type:"primary",size:"mini"}},[t._v("复制")])],1)],1),r("van-row",{staticClass:"m-t-sm"},[r("van-col",{staticClass:"text-right",attrs:{span:"8"}},[t._v(" 官方邮箱：")]),r("van-col",{staticClass:"text-left",attrs:{span:"10"}},[t._v(t._s(t.contactInfoData.email))]),r("van-col",{attrs:{span:"6"}},[r("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.contactInfoData.email,expression:"contactInfoData.email",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],attrs:{type:"primary",size:"mini"}},[t._v("复制")])],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=i.exports},4127:function(t,e,r){"use strict";function n(t,e,r,o,i,c,l,u,f,p,d,v){var y=t;if("function"==typeof l)y=l(e,y);else if(y instanceof Date)y=p(y);else if(null===y){if(o)return c&&!v?c(e,s.encoder):e;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||a.isBuffer(y))return c?[d(v?e:c(e,s.encoder))+"="+d(c(y,s.encoder))]:[d(e)+"="+d(String(y))];var m,g=[];if(void 0===y)return g;if(Array.isArray(l))m=l;else{var b=Object.keys(y);m=u?b.sort(u):b}for(var A=0;A<m.length;++A){var h=m[A];i&&null===y[h]||(g=Array.isArray(y)?g.concat(n(y[h],r(e,h),r,o,i,c,l,u,f,p,d,v)):g.concat(n(y[h],e+(f?"."+h:"["+h+"]"),r,o,i,c,l,u,f,p,d,v)))}return g}var a=r("d2334"),o=r("b313"),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},c=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(t){return c.call(t)},skipNulls:!1,strictNullHandling:!1};t.exports=function(t,e){var r=t,c=e?a.assign({},e):{};if(null!==c.encoder&&void 0!==c.encoder&&"function"!=typeof c.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===c.delimiter?s.delimiter:c.delimiter,u="boolean"==typeof c.strictNullHandling?c.strictNullHandling:s.strictNullHandling,f="boolean"==typeof c.skipNulls?c.skipNulls:s.skipNulls,p="boolean"==typeof c.encode?c.encode:s.encode,d="function"==typeof c.encoder?c.encoder:s.encoder,v="function"==typeof c.sort?c.sort:null,y=void 0!==c.allowDots&&c.allowDots,m="function"==typeof c.serializeDate?c.serializeDate:s.serializeDate,g="boolean"==typeof c.encodeValuesOnly?c.encodeValuesOnly:s.encodeValuesOnly;if(void 0===c.format)c.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,c.format))throw new TypeError("Unknown format option provided.");var b,A,h=o.formatters[c.format];"function"==typeof c.filter?r=(A=c.filter)("",r):Array.isArray(c.filter)&&(b=A=c.filter);var w,C=[];if("object"!=typeof r||null===r)return"";w=c.arrayFormat in i?c.arrayFormat:"indices"in c?c.indices?"indices":"repeat":"indices";var O=i[w];b=b||Object.keys(r),v&&b.sort(v);for(var j=0;j<b.length;++j){var I=b[j];f&&null===r[I]||(C=C.concat(n(r[I],I,O,u,f,p?d:null,A,v,y,m,h,g)))}var x=C.join(l),D=!0===c.addQueryPrefix?"?":"";return 0<x.length?D+x:""}},4328:function(t,e,r){"use strict";var n=r("4127"),a=r("9e6a"),o=r("b313");t.exports={formats:o,parse:a,stringify:n}},"751a":function(t,e,r){"use strict";r("d3b7");var n=r("bb9a"),a=r("4328"),o=r.n(a),i={get:function(t,e){return Object(n.a)({url:t,method:"get",params:e})},post:function(t,e,r){return Object(n.a)({url:t,method:"post",params:e,data:r})},postQs:function(t,e){return Object(n.a)({url:t,method:"post",data:o.a.stringify(e)})},patch:function(t,e){return Object(n.a)({url:t,method:"patch",data:e})},put:function(t,e,r){return new Promise((function(a,o){Object(n.a)({url:t,method:"put",params:e,data:r}).then((function(t){a(t.data)})).catch((function(t){o(t)}))}))}};e.a=i},"9e6a":function(t,e,r){"use strict";function n(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),c=i?n.slice(0,i.index):n,s=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;s.push(c)}for(var l=0;null!==(i=a.exec(n))&&l<r.depth;){if(l+=1,!r.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;s.push(i[1])}return i&&s.push("["+n.slice(i.index)+"]"),function(t,e,r){for(var n=e,a=t.length-1;0<=a;--a){var o,i=t[a];if("[]"===i)o=(o=[]).concat(n);else{o=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(c,10);!isNaN(s)&&i!==c&&String(s)===c&&0<=s&&r.parseArrays&&s<=r.arrayLimit?(o=[])[s]=n:o[c]=n}n=o}return n}(s,e,r)}}var a=r("d2334"),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1};t.exports=function(t,e){var r=e?a.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===t||null==t)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof t?function(t,e){for(var r={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,a=e.parameterLimit===1/0?void 0:e.parameterLimit,c=n.split(e.delimiter,a),s=0;s<c.length;++s){var l,u,f=c[s],p=f.indexOf("]="),d=-1===p?f.indexOf("="):p+1;u=-1===d?(l=e.decoder(f,i.decoder),e.strictNullHandling?null:""):(l=e.decoder(f.slice(0,d),i.decoder),e.decoder(f.slice(d+1),i.decoder)),o.call(r,l)?r[l]=[].concat(r[l]).concat(u):r[l]=u}return r}(t,r):t,s=r.plainObjects?Object.create(null):{},l=Object.keys(c),u=0;u<l.length;++u){var f=l[u],p=n(f,c[f],r);s=a.merge(s,p,r)}return a.compact(s)}},b313:function(t,e,r){"use strict";var n=String.prototype.replace,a=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,a,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c24f:function(t,e,r){"use strict";r.d(e,"g",(function(){return a})),r.d(e,"h",(function(){return o})),r.d(e,"j",(function(){return i})),r.d(e,"f",(function(){return c})),r.d(e,"e",(function(){return s})),r.d(e,"c",(function(){return l})),r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return f})),r.d(e,"i",(function(){return p})),r.d(e,"d",(function(){return d}));var n=r("751a"),a=function(t){return n.a.get("/user/detail",t)},o=function(t,e){return n.a.put("/user/name",t,e)},i=function(t,e){return n.a.put("/user/sex",t,e)},c=function(t,e){return n.a.put("/user/birthday",t,e)},s=function(t,e){return n.a.put("/user/address",t,e)},l=function(t,e){return n.a.put("/user/info",t,e)},u=function(t){return n.a.get("/site/contact",t)},f=function(t){return n.a.get("/site/contact-info",t)},p=function(t){return n.a.get("/user/record",t)},d=function(t,e){return n.a.post("/user/feedback",t,e)}},d2334:function(t,e,r){"use strict";function n(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r}var a=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();t.exports={arrayToObject:n,assign:function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var a=e[n],o=a.obj[a.prop],i=Object.keys(o),c=0;c<i.length;++c){var s=i[c],l=o[s];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(e.push({obj:o,prop:s}),r.push(l))}return function(t){for(var e;t.length;){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var n=[],a=0;a<e.length;++a)void 0!==e[a]&&n.push(e[a]);r.obj[r.prop]=n}}return e}(e)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",n=0;n<e.length;++n){var a=e.charCodeAt(n);45===a||46===a||95===a||126===a||48<=a&&a<=57||65<=a&&a<=90||97<=a&&a<=122?r+=e.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||57344<=a?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},isBuffer:function(t){return null!=t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];!o.plainObjects&&!o.allowPrototypes&&a.call(Object.prototype,r)||(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var i=e;return Array.isArray(e)&&!Array.isArray(r)&&(i=n(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach((function(r,n){a.call(e,n)?e[n]&&"object"==typeof e[n]?e[n]=t(e[n],r,o):e.push(r):e[n]=r})),e):Object.keys(r).reduce((function(e,n){var i=r[n];return a.call(e,n)?e[n]=t(e[n],i,o):e[n]=i,e}),i)}}}}]);