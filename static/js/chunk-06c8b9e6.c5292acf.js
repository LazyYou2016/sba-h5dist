(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-06c8b9e6"],{"200c":function(e,t,n){"use strict";n.r(t),n("99af"),n("b0c0"),n("a9e3");var a=n("22ca"),r=n("c24f"),i=n("751a"),o={name:"signUp",data:function(){return{userId:JSON.parse(this.$Cookies.get("userInfo")).user_id,matchId:this.$route.query.matchId,venueId:this.$route.query.venueId,pageName:this.$route.query.name,userInfo:{},signUpVal:1,involveDatas:{address:"",date:"",entry_list:[],is_team:0,match_id:"",match_name:"",ticket:0,ticket_last:0,ticket_nums:0,venue_id:"",challenge_fee:"-",challenge_total:"-",challenge_second:"-"},challengeChecked:!1,openChallenge:!1,openStatementView:!1,openStatementResult:["0"]}},mounted:function(){this.getUserInfo()},methods:{getUserInfo:function(){var e=this;Object(r.g)().then((function(t){var n=t.data;e.userInfo=n,e.getInvolve()})).catch((function(e){}))},toggle:function(){},getInvolve:function(){var e=this;Object(a.b)({match_id:this.matchId,id:this.venueId}).then((function(t){var n=t.data;e.involveDatas=n})).catch((function(e){}))},onChallengeChange:function(e){var t=e.detail;this.setData({challengeChecked:t})},onSubmit:function(){var e=this;return 0===this.openStatementResult.length?(this.$Toast({message:"请阅读并勾选赛事免责声明",position:"bottom"}),!1):0!==this.involveDatas.ticket&&this.userInfo.invented<=this.involveDatas.ticket*this.signUpVal?(this.$Dialog.alert({message:"账户球币余额不足，请充值"}).then((function(){e.$router.push({path:"/wallet"})})),!1):void this.$Dialog.confirm({title:"本次赛事，您选购".concat(this.signUpVal,"张门票，需要消耗").concat(this.involveDatas.ticket*this.signUpVal+this.challengeChecked?this.involveDatas.challenge_fee:0,"个球币")}).then((function(){var t,n;e.$Toast.loading({message:"下单中...",forbidClick:!0}),(t={},n={user_id:e.userId,venue_id:Number(e.venueId),match_id:e.matchId,ticket_number:e.signUpVal,is_challenge:e.challengeChecked?1:0,total_amount:e.involveDatas.ticket*e.signUpVal+e.challengeChecked?e.involveDatas.challenge_fee:0},i.a.post("/consumption/create",t,n)).then((function(t){t.success&&e.$Toast.clear(),!1!==t.success&&e.$router.push({path:"/match/signUpSuccess"})})).catch((function(e){}))})).catch((function(){}))}},watch:{}},s=n("2877"),c=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("van-nav-bar",{staticClass:"nav",attrs:{fixed:"",title:e.pageName,"left-arrow":""},on:{"click-left":e.$back}}),n("div",{staticClass:"page"},[n("div",{staticClass:"page-main"},[n("van-panel",{scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex panel-head"},[n("div",{staticClass:"flex-item title"},[e._v(" "+e._s(e.involveDatas.match_name)+" ")]),n("div",[e._v(" 剩余门票："),n("span",{staticClass:"text-danger"},[e._v(e._s(e.involveDatas.ticket_last)+" / "+e._s(e.involveDatas.ticket_nums))])])])]},proxy:!0}])},[n("van-cell-group",[n("van-cell",{attrs:{title:"地址",value:e.involveDatas.address}}),n("van-cell",{attrs:{title:"比赛时间",value:e.involveDatas.date}})],1)],1),n("van-panel",{staticClass:"m-t-sm",scopedSlots:e._u([{key:"header",fn:function(){return[n("van-cell-group",[n("van-cell",{attrs:{title:"您最多可购买3张参赛券"}},[n("van-stepper",{attrs:{min:"1",max:3<e.involveDatas.ticket_last?3:e.involveDatas.ticket_last},model:{value:e.signUpVal,callback:function(t){e.signUpVal=t},expression:"signUpVal"}})],1)],1)]},proxy:!0}])},[n("div",[n("van-checkbox-group",{model:{value:e.openStatementResult,callback:function(t){e.openStatementResult=t},expression:"openStatementResult"}},[n("van-cell-group",[n("van-cell",{attrs:{clickable:""},scopedSlots:e._u([{key:"title",fn:function(){return[n("van-checkbox",{ref:"checkboxes",attrs:{name:"0"}},[n("span",[e._v("我已经阅读并同意")]),n("span",{staticClass:"text-primary",on:{click:function(t){t.stopPropagation(),e.openStatementView=!0}}},[e._v("赛事免责声明")])])]},proxy:!0}])})],1)],1)],1)]),n("van-panel",{staticClass:"m-t-sm",scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center"},[n("div",{staticClass:"p-t-sm m-b-sm"},[e._v("奖金总奖池(元)")]),n("van-tag",{attrs:{type:"primary",size:"large"}},[e._v(e._s(e.involveDatas.challenge_total))])],1),n("van-cell",{attrs:{center:""},scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{on:{click:function(t){e.openChallenge=!0}}},[e._v(" "+e._s("是否参加："+e.involveDatas.challenge_second+"秒挑战赛（"+e.involveDatas.challenge_fee+"球币）")+" "),n("van-icon",{staticClass:"text-primary",staticStyle:{"vertical-align":"middle"},attrs:{name:"info-o",size:"16"}})],1)]},proxy:!0},{key:"right-icon",fn:function(){return[n("van-switch",{attrs:{"active-color":"#07c160","inactive-color":"#ee0a24",size:"28px"},model:{value:e.challengeChecked,callback:function(t){e.challengeChecked=t},expression:"challengeChecked"}})]},proxy:!0}])})]},proxy:!0}])}),n("van-panel",{staticClass:"m-t-sm",scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"flex panel-head"},[n("div",{staticClass:"flex-item text-danger"},[e._v(" 注：可替赛，不可退票 ")]),n("div",{staticClass:"flex-item text-right"},[e._v(" 费用总额： "+e._s(e.involveDatas.ticket*e.signUpVal+e.challengeChecked?e.involveDatas.challenge_fee:0)+" 球币 ")])])]},proxy:!0}])}),n("van-panel",{staticClass:"m-t-sm",attrs:{title:"已报名的球员"}},[0!==e.involveDatas.entry_list.length?[n("van-grid",{staticClass:"signup-list-main",attrs:{border:!1,"column-num":"6"}},e._l(e.involveDatas.entry_list,(function(t,a){return n("van-grid-item",{key:a},[n("div",{staticClass:"signup-list"},[t.avatar?[n("div",[n("van-image",{staticClass:"user-head-sign",attrs:{src:e.$UrlAvatar+t.avatar,round:"",type:"cover"}}),"1"===t.is_challenge?[n("van-icon",{staticClass:"text-primary is-challenge",attrs:{name:"checked"}})]:e._e()],2)]:[n("div",[n("van-image",{staticClass:"user-head-sign",attrs:{src:e.$imgDefault,round:"",type:"cover"}}),"1"===t.is_challenge?[n("van-icon",{staticClass:"text-primary is-challenge",attrs:{name:"checked"}})]:e._e()],2)],n("div",{staticClass:"signup-list-label"},[e._v(e._s(t.name))])],2)])})),1)]:[n("van-empty",{attrs:{description:"暂无数据"}})]],2)],1),n("div",{staticClass:"page-foot"},["0"!==e.involveDatas.ticket_last?n("van-button",{attrs:{type:"primary",round:"",block:""},on:{click:e.onSubmit}},[e._v("确定")]):n("van-button",{attrs:{type:"primary",round:"",block:"",disabled:""}},[e._v("门票已售罄")])],1)]),n("van-popup",{staticClass:"agreement-popup",style:{height:"100%"},attrs:{closeable:"",position:"bottom"},model:{value:e.openStatementView,callback:function(t){e.openStatementView=t},expression:"openStatementView"}},[n("div",{staticClass:"agreement"},[n("h2",{staticClass:"text-center"},[e._v("赛事免责声明")]),n("div",[e._v(" 1、本人自愿报名并参与全民应球举办的各项赛事，承诺严格遵守组织方制定的各项规则和参赛要求，并承担由于违反规定所造成损失的全部责任。 ")]),n("div",[e._v(" 2、我自愿报名参加本次比赛，并确认本人具有参加本次比赛相应的民事行为能力和民事责任能力,同时已获得监护人的同意； ")]),n("div",[e._v(" 3、我确认已认真阅读了官方就选手参加本次比赛可能发生的一切风险（包括但不限于因参加本次比赛所可能产生的人身伤亡风险）的提示，我在此明确同意将自行承担参加本次比赛所可能存在的风险和责任； ")]),n("div",[e._v(" 4、我承诺已通过正规医疗机构进行体检，并结合检查报告进行自我评估，确认自己的身体状况能够适应于本次比赛中的相关运动，已为参赛做好准备，承诺愿意承担参赛可能带来的一切风险（包括但不限于因参加本次比赛所可能产生的人身伤亡风险）； ")]),n("div",[e._v(" 5、 我承诺，因参加本次比赛以及参赛全过程中所发生的人身伤害、局部或永久性伤残、死亡、医疗或住院费用、财产损坏、任何形式的盗窃或财产损失等事项，由我本人承担全部责任，与全民应球官方无关，对此不承担任何形式的责任； ")]),n("div",[e._v(" 6、我承诺授权赛事组办方及其指定媒体无偿使用本人的肖像、姓名、声音等用于赛事的宣传与推广； ")]),n("div",[e._v(" 7、我接受组办方在比赛期间提供的现场急救性质的医务治疗，但在医院救治等发生的相关费用由我自理； ")]),n("div",[e._v(" 8、我承诺在参赛过程中遵守裁判、医疗人员和安保人员的要求，如比赛过程中出现身体不适或其他情况导致无法继续比赛，我承诺承担因本人坚持比赛所产生的全部责任与后果； ")]),n("div",[e._v(" 凡是报名参加者均视为已经阅读、理解并接受以上几点免责声明，该声明书自报名到达现场后生效至赛事结束时终止。 ")])])]),n("van-popup",{staticClass:"agreement-popup",style:{height:"100%"},attrs:{closeable:"",position:"bottom"},model:{value:e.openChallenge,callback:function(t){e.openChallenge=t},expression:"openChallenge"}},[n("div",{staticClass:"agreement"},[n("h2",{staticClass:"text-center"},[e._v("活动规则")]),n("div",[e._v(" 1、设置秒数挑战赛旨在提升全民篮球基本功。用户支付一定的挑战球币，即可参加本期的秒数挑战赛。如页面显示为50秒挑战赛，那么用户需要在50秒内完成单项赛，完成的视为挑战成功，未完成的视为挑战失败。 ")]),n("div",[e._v(" 2、挑战成功的将瓜分本期奖池所有奖金（本人支付的挑战费用+平分本期挑战失败用户的挑战费用），获得一份 ≥ 单人挑战费用的奖金。奖金在比赛结束后的24小时内发放，用户可到“我的-奖金”查看，可以提现至支付宝。 ")]),n("div",[e._v(" 3、如有疑问，可点击公众号底部的客服进行咨询。本次活动最终解释权归全民应球所有。 ")])])])],1)}),[],!1,null,null,null);t.default=c.exports},"22ca":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var a=n("751a"),r=function(e){return a.a.get("/venue/involve",e)},i=function(e){return a.a.get("/venue/entry-list",e)},o=function(e){return a.a.get("/venue/get-info",e)}},4127:function(e,t,n){"use strict";function a(e,t,n,i,o,s,l,u,p,d,f,v){var h=e;if("function"==typeof l)h=l(t,h);else if(h instanceof Date)h=d(h);else if(null===h){if(i)return s&&!v?s(t,c.encoder):t;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||r.isBuffer(h))return s?[f(v?t:s(t,c.encoder))+"="+f(s(h,c.encoder))]:[f(t)+"="+f(String(h))];var g,m=[];if(void 0===h)return m;if(Array.isArray(l))g=l;else{var y=Object.keys(h);g=u?y.sort(u):y}for(var b=0;b<g.length;++b){var _=g[b];o&&null===h[_]||(m=Array.isArray(h)?m.concat(a(h[_],n(t,_),n,i,o,s,l,u,p,d,f,v)):m.concat(a(h[_],t+(p?"."+_:"["+_+"]"),n,i,o,s,l,u,p,d,f,v)))}return m}var r=n("d2334"),i=n("b313"),o={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(e){return s.call(e)},skipNulls:!1,strictNullHandling:!1};e.exports=function(e,t){var n=e,s=t?r.assign({},t):{};if(null!==s.encoder&&void 0!==s.encoder&&"function"!=typeof s.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===s.delimiter?c.delimiter:s.delimiter,u="boolean"==typeof s.strictNullHandling?s.strictNullHandling:c.strictNullHandling,p="boolean"==typeof s.skipNulls?s.skipNulls:c.skipNulls,d="boolean"==typeof s.encode?s.encode:c.encode,f="function"==typeof s.encoder?s.encoder:c.encoder,v="function"==typeof s.sort?s.sort:null,h=void 0!==s.allowDots&&s.allowDots,g="function"==typeof s.serializeDate?s.serializeDate:c.serializeDate,m="boolean"==typeof s.encodeValuesOnly?s.encodeValuesOnly:c.encodeValuesOnly;if(void 0===s.format)s.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,s.format))throw new TypeError("Unknown format option provided.");var y,b,_=i.formatters[s.format];"function"==typeof s.filter?n=(b=s.filter)("",n):Array.isArray(s.filter)&&(y=b=s.filter);var k,C=[];if("object"!=typeof n||null===n)return"";k=s.arrayFormat in o?s.arrayFormat:"indices"in s?s.indices?"indices":"repeat":"indices";var x=o[k];y=y||Object.keys(n),v&&y.sort(v);for(var j=0;j<y.length;++j){var O=y[j];p&&null===n[O]||(C=C.concat(a(n[O],O,x,u,p,d?f:null,b,v,h,g,_,m)))}var w=C.join(l),D=!0===s.addQueryPrefix?"?":"";return 0<w.length?D+w:""}},4328:function(e,t,n){"use strict";var a=n("4127"),r=n("9e6a"),i=n("b313");e.exports={formats:i,parse:r,stringify:a}},"751a":function(e,t,n){"use strict";n("d3b7");var a=n("bb9a"),r=n("4328"),i=n.n(r),o={get:function(e,t){return Object(a.a)({url:e,method:"get",params:t})},post:function(e,t,n){return Object(a.a)({url:e,method:"post",params:t,data:n})},postQs:function(e,t){return Object(a.a)({url:e,method:"post",data:i.a.stringify(t)})},patch:function(e,t){return Object(a.a)({url:e,method:"patch",data:t})},put:function(e,t,n){return new Promise((function(r,i){Object(a.a)({url:e,method:"put",params:t,data:n}).then((function(e){r(e.data)})).catch((function(e){i(e)}))}))}};t.a=o},"9e6a":function(e,t,n){"use strict";function a(e,t,n){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,r=/(\[[^[\]]*])/g,o=/(\[[^[\]]*])/.exec(a),s=o?a.slice(0,o.index):a,c=[];if(s){if(!n.plainObjects&&i.call(Object.prototype,s)&&!n.allowPrototypes)return;c.push(s)}for(var l=0;null!==(o=r.exec(a))&&l<n.depth;){if(l+=1,!n.plainObjects&&i.call(Object.prototype,o[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(o[1])}return o&&c.push("["+a.slice(o.index)+"]"),function(e,t,n){for(var a=t,r=e.length-1;0<=r;--r){var i,o=e[r];if("[]"===o)i=(i=[]).concat(a);else{i=n.plainObjects?Object.create(null):{};var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,c=parseInt(s,10);!isNaN(c)&&o!==s&&String(c)===s&&0<=c&&n.parseArrays&&c<=n.arrayLimit?(i=[])[c]=a:i[s]=a}a=i}return a}(c,t,n)}}var r=n("d2334"),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1};e.exports=function(e,t){var n=t?r.assign({},t):{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!=typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.ignoreQueryPrefix=!0===n.ignoreQueryPrefix,n.delimiter="string"==typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:o.delimiter,n.depth="number"==typeof n.depth?n.depth:o.depth,n.arrayLimit="number"==typeof n.arrayLimit?n.arrayLimit:o.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"==typeof n.decoder?n.decoder:o.decoder,n.allowDots="boolean"==typeof n.allowDots?n.allowDots:o.allowDots,n.plainObjects="boolean"==typeof n.plainObjects?n.plainObjects:o.plainObjects,n.allowPrototypes="boolean"==typeof n.allowPrototypes?n.allowPrototypes:o.allowPrototypes,n.parameterLimit="number"==typeof n.parameterLimit?n.parameterLimit:o.parameterLimit,n.strictNullHandling="boolean"==typeof n.strictNullHandling?n.strictNullHandling:o.strictNullHandling,""===e||null==e)return n.plainObjects?Object.create(null):{};for(var s="string"==typeof e?function(e,t){for(var n={},a=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,r=t.parameterLimit===1/0?void 0:t.parameterLimit,s=a.split(t.delimiter,r),c=0;c<s.length;++c){var l,u,p=s[c],d=p.indexOf("]="),f=-1===d?p.indexOf("="):d+1;u=-1===f?(l=t.decoder(p,o.decoder),t.strictNullHandling?null:""):(l=t.decoder(p.slice(0,f),o.decoder),t.decoder(p.slice(f+1),o.decoder)),i.call(n,l)?n[l]=[].concat(n[l]).concat(u):n[l]=u}return n}(e,n):e,c=n.plainObjects?Object.create(null):{},l=Object.keys(s),u=0;u<l.length;++u){var p=l[u],d=a(p,s[p],n);c=r.merge(c,d,n)}return r.compact(c)}},b313:function(e,t,n){"use strict";var a=String.prototype.replace,r=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return a.call(e,r,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},c24f:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"h",(function(){return i})),n.d(t,"j",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"i",(function(){return d})),n.d(t,"d",(function(){return f}));var a=n("751a"),r=function(e){return a.a.get("/user/detail",e)},i=function(e,t){return a.a.put("/user/name",e,t)},o=function(e,t){return a.a.put("/user/sex",e,t)},s=function(e,t){return a.a.put("/user/birthday",e,t)},c=function(e,t){return a.a.put("/user/address",e,t)},l=function(e,t){return a.a.put("/user/info",e,t)},u=function(e){return a.a.get("/site/contact",e)},p=function(e){return a.a.get("/site/contact-info",e)},d=function(e){return a.a.get("/user/record",e)},f=function(e,t){return a.a.post("/user/feedback",e,t)}},d2334:function(e,t,n){"use strict";function a(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},a=0;a<e.length;++a)void 0!==e[a]&&(n[a]=e[a]);return n}var r=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}();e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,n){return e[n]=t[n],e}),e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],a=0;a<t.length;++a)for(var r=t[a],i=r.obj[r.prop],o=Object.keys(i),s=0;s<o.length;++s){var c=o[s],l=i[c];"object"==typeof l&&null!==l&&-1===n.indexOf(l)&&(t.push({obj:i,prop:c}),n.push(l))}return function(e){for(var t;e.length;){var n=e.pop();if(t=n.obj[n.prop],Array.isArray(t)){for(var a=[],r=0;r<t.length;++r)void 0!==t[r]&&a.push(t[r]);n.obj[n.prop]=a}}return t}(t)},decode:function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",a=0;a<t.length;++a){var r=t.charCodeAt(a);45===r||46===r||95===r||126===r||48<=r&&r<=57||65<=r&&r<=90||97<=r&&r<=122?n+=t.charAt(a):r<128?n+=i[r]:r<2048?n+=i[192|r>>6]+i[128|63&r]:r<55296||57344<=r?n+=i[224|r>>12]+i[128|r>>6&63]+i[128|63&r]:(a+=1,r=65536+((1023&r)<<10|1023&t.charCodeAt(a)),n+=i[240|r>>18]+i[128|r>>12&63]+i[128|r>>6&63]+i[128|63&r])}return n},isBuffer:function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,n,i){if(!n)return t;if("object"!=typeof n){if(Array.isArray(t))t.push(n);else{if("object"!=typeof t)return[t,n];!i.plainObjects&&!i.allowPrototypes&&r.call(Object.prototype,n)||(t[n]=!0)}return t}if("object"!=typeof t)return[t].concat(n);var o=t;return Array.isArray(t)&&!Array.isArray(n)&&(o=a(t,i)),Array.isArray(t)&&Array.isArray(n)?(n.forEach((function(n,a){r.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e(t[a],n,i):t.push(n):t[a]=n})),t):Object.keys(n).reduce((function(t,a){var o=n[a];return r.call(t,a)?t[a]=e(t[a],o,i):t[a]=o,t}),o)}}}}]);