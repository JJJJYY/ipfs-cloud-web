(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d004f45"],{"00d8":function(e,t){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],n=0;n<e.length;n+=3)for(var s=e[n]<<16|e[n+1]<<8|e[n+2],o=0;o<4;o++)8*n+6*o<=8*e.length?r.push(t.charAt(s>>>6*(3-o)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,s=0;n<e.length;s=++n%4)0!=s&&r.push((t.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<2*s|t.indexOf(e.charAt(n))>>>6-2*s);return r}};e.exports=r})()},"044b":function(e,t){function r(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&r(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},"4de4":function(e,t,r){"use strict";var n=r("23e7"),s=r("b727").filter,o=r("1dde"),a=r("ae40"),i=o("filter"),c=a("filter");n({target:"Array",proto:!0,forced:!i||!c},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"637b":function(e,t,r){"use strict";r("f89e")},6821:function(e,t,r){(function(){var t=r("00d8"),n=r("9a63").utf8,s=r("044b"),o=r("9a63").bin,a=function(e,r){e.constructor==String?e=r&&"binary"===r.encoding?o.stringToBytes(e):n.stringToBytes(e):s(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var i=t.bytesToWords(e),c=8*e.length,l=1732584193,u=-271733879,p=-1732584194,f=271733878,d=0;d<i.length;d++)i[d]=16711935&(i[d]<<8|i[d]>>>24)|4278255360&(i[d]<<24|i[d]>>>8);i[c>>>5]|=128<<c%32,i[14+(c+64>>>9<<4)]=c;var h=a._ff,g=a._gg,m=a._hh,v=a._ii;for(d=0;d<i.length;d+=16){var A=l,y=u,w=p,_=f;l=h(l,u,p,f,i[d+0],7,-680876936),f=h(f,l,u,p,i[d+1],12,-389564586),p=h(p,f,l,u,i[d+2],17,606105819),u=h(u,p,f,l,i[d+3],22,-1044525330),l=h(l,u,p,f,i[d+4],7,-176418897),f=h(f,l,u,p,i[d+5],12,1200080426),p=h(p,f,l,u,i[d+6],17,-1473231341),u=h(u,p,f,l,i[d+7],22,-45705983),l=h(l,u,p,f,i[d+8],7,1770035416),f=h(f,l,u,p,i[d+9],12,-1958414417),p=h(p,f,l,u,i[d+10],17,-42063),u=h(u,p,f,l,i[d+11],22,-1990404162),l=h(l,u,p,f,i[d+12],7,1804603682),f=h(f,l,u,p,i[d+13],12,-40341101),p=h(p,f,l,u,i[d+14],17,-1502002290),u=h(u,p,f,l,i[d+15],22,1236535329),l=g(l,u,p,f,i[d+1],5,-165796510),f=g(f,l,u,p,i[d+6],9,-1069501632),p=g(p,f,l,u,i[d+11],14,643717713),u=g(u,p,f,l,i[d+0],20,-373897302),l=g(l,u,p,f,i[d+5],5,-701558691),f=g(f,l,u,p,i[d+10],9,38016083),p=g(p,f,l,u,i[d+15],14,-660478335),u=g(u,p,f,l,i[d+4],20,-405537848),l=g(l,u,p,f,i[d+9],5,568446438),f=g(f,l,u,p,i[d+14],9,-1019803690),p=g(p,f,l,u,i[d+3],14,-187363961),u=g(u,p,f,l,i[d+8],20,1163531501),l=g(l,u,p,f,i[d+13],5,-1444681467),f=g(f,l,u,p,i[d+2],9,-51403784),p=g(p,f,l,u,i[d+7],14,1735328473),u=g(u,p,f,l,i[d+12],20,-1926607734),l=m(l,u,p,f,i[d+5],4,-378558),f=m(f,l,u,p,i[d+8],11,-2022574463),p=m(p,f,l,u,i[d+11],16,1839030562),u=m(u,p,f,l,i[d+14],23,-35309556),l=m(l,u,p,f,i[d+1],4,-1530992060),f=m(f,l,u,p,i[d+4],11,1272893353),p=m(p,f,l,u,i[d+7],16,-155497632),u=m(u,p,f,l,i[d+10],23,-1094730640),l=m(l,u,p,f,i[d+13],4,681279174),f=m(f,l,u,p,i[d+0],11,-358537222),p=m(p,f,l,u,i[d+3],16,-722521979),u=m(u,p,f,l,i[d+6],23,76029189),l=m(l,u,p,f,i[d+9],4,-640364487),f=m(f,l,u,p,i[d+12],11,-421815835),p=m(p,f,l,u,i[d+15],16,530742520),u=m(u,p,f,l,i[d+2],23,-995338651),l=v(l,u,p,f,i[d+0],6,-198630844),f=v(f,l,u,p,i[d+7],10,1126891415),p=v(p,f,l,u,i[d+14],15,-1416354905),u=v(u,p,f,l,i[d+5],21,-57434055),l=v(l,u,p,f,i[d+12],6,1700485571),f=v(f,l,u,p,i[d+3],10,-1894986606),p=v(p,f,l,u,i[d+10],15,-1051523),u=v(u,p,f,l,i[d+1],21,-2054922799),l=v(l,u,p,f,i[d+8],6,1873313359),f=v(f,l,u,p,i[d+15],10,-30611744),p=v(p,f,l,u,i[d+6],15,-1560198380),u=v(u,p,f,l,i[d+13],21,1309151649),l=v(l,u,p,f,i[d+4],6,-145523070),f=v(f,l,u,p,i[d+11],10,-1120210379),p=v(p,f,l,u,i[d+2],15,718787259),u=v(u,p,f,l,i[d+9],21,-343485551),l=l+A>>>0,u=u+y>>>0,p=p+w>>>0,f=f+_>>>0}return t.endian([l,u,p,f])};a._ff=function(e,t,r,n,s,o,a){var i=e+(t&r|~t&n)+(s>>>0)+a;return(i<<o|i>>>32-o)+t},a._gg=function(e,t,r,n,s,o,a){var i=e+(t&n|r&~n)+(s>>>0)+a;return(i<<o|i>>>32-o)+t},a._hh=function(e,t,r,n,s,o,a){var i=e+(t^r^n)+(s>>>0)+a;return(i<<o|i>>>32-o)+t},a._ii=function(e,t,r,n,s,o,a){var i=e+(r^(t|~n))+(s>>>0)+a;return(i<<o|i>>>32-o)+t},a._blocksize=16,a._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var n=t.wordsToBytes(a(e,r));return r&&r.asBytes?n:r&&r.asString?o.bytesToString(n):t.bytesToHex(n)}})()},"7f54":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMElEQVQ4T62TQStFURSF174JJfIHzIi/YWbCiIlSSmfvwoQJEyMTJkxQZ52UUiaMjMz8DWL2/oBIId2t+3J1Pb3XfXlnuvb6ap29tqDDM7OZQo4x3rQbk1ZBVc8BzAEYBvD5rfcBeAFwSnKz6vkFUNVXADmAQwAXJO+KYVWdcvdlEVkD8ERyrIT8AFS14e6PKaXpTrFCCLciMl5CmgAz23X3LZL9ncylpqofAI6KOE2Aqj67+0lKabsOIISwJyKrJEdKQC4ikzHGhzoAM5tw93uSmZjZrLtfkhysYy5nQgjvWZbNNwF5nl+llAa6Aajqm4gs/D9Crz7xAMB6N2sUkf0Y405vilQpSAPAqLsfi8hZtcoAFgFsAMhIDv2pcgVSxFlpc0zXJJfaHlPrGuuc8xeQX6IV5fkhdAAAAABJRU5ErkJggg=="},"7fcf":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-header"},[n("div",{staticClass:"header-content"},[n("img",{staticClass:"logo pointer",attrs:{src:r("a1d8"),alt:""},on:{click:function(t){return e.$goto("/")}}}),n("span",{staticClass:"pointer",on:{click:function(t){return e.$goto("/")}}},[e._v(e._s(e.$t("message.__FBSCCYJCFWS__")))]),n("span",{staticClass:"split-line"},[e._v("|")]),n("span",{staticClass:"type"},[e._v(e._s(e.$t(e.type)))])])])},s=[],o={name:"LoginHeader",props:{type:{type:String,default:null}}},a=o,i=(r("637b"),r("2877")),c=Object(i["a"])(a,n,s,!1,null,"c322ff22",null);t["a"]=c.exports},"8e16":function(e,t,r){"use strict";r("90bc")},"90bc":function(e,t,r){},"91ec":function(e,t,r){},"957c1":function(e,t,r){},"96ba":function(e,t,r){"use strict";r("91ec")},9804:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIUlEQVQ4T6WTIU8DQRCFvzksNeROoBEkJcGAAokFSSWSYLEkhG0QaBQEQ4IhFAk/AAMKDAkCRRAkJHeu2OaR6+21vZY7mtyKFTvzvryZnTEqjo7DxTRsh8l7WZqNB+TCXbAdxDLQ8PEuxivoylxyMaopAOSiZ8RKlSuMF3Pxap4zAMhFHcR2pXioujUXt/rlpZdcuInsbirxAKItc8l9BjiKHoG1fwGyPQJteKdP1o7Xc0AXmK0GaB/ZF0bH5/1YO26Y3FwTzbz5xwewG9BZASYOCPSB7Lrwbr2lcQCIFsYCcNJPlhyBfSIuJxymAN+DYgkpBDW94Buz8z/Ky0oobWIKCZhHnJb0ZqSJdb8xm4Uag5RbrDXKQ0iNZZrYzCnW+RdRKnuH93AyOAAAAABJRU5ErkJggg=="},"9a63":function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},a1d8:function(e,t){e.exports="data:image/png;base64,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"},b953:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-page"},[n("LoginHeader",{attrs:{type:"message.__ZHZC__"}}),n("div",{staticClass:"account-content"},[n("div",{staticClass:"hint"},[e._v(e._s(e.$t("message.__YYZH__"))),n("span",{staticClass:"pointer orange-mark",on:{click:function(t){return e.$goto("/login")}}},[e._v(e._s(e.$t("message.__DL__")))])]),n("div",{staticClass:"account-operate-panel"},[n("div",{staticClass:"tabs panel-title"},[n("div",{class:["pointer",1===e.type?"orange-mark":""],on:{click:function(t){e.type=1}}},[e._v(" "+e._s(e.$t("message.__SJZC__")))]),n("span",{staticClass:"split-line"},[e._v("|")]),n("div",{class:["pointer",2===e.type?"orange-mark":""],on:{click:function(t){e.type=2}}},[e._v(" "+e._s(e.$t("message.__YXZC__")))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.type,expression:"type===1"}],staticClass:"input-row"},[n("BaseForm",{ref:"PhoneForm",attrs:{formSetting:e.PhoneFormSetting}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.type,expression:"type===2"}],staticClass:"input-row"},[n("BaseForm",{ref:"EmailForm",attrs:{formSetting:e.EmailFormSetting}})],1),n("div",{staticClass:"agree-hint"},[n("img",{directives:[{name:"show",rawName:"v-show",value:!e.isAgree,expression:"!isAgree"}],staticClass:"pointer checkbox-icon",attrs:{src:r("7f54"),alt:""},on:{click:function(t){e.isAgree=!0}}}),n("img",{directives:[{name:"show",rawName:"v-show",value:e.isAgree,expression:"isAgree"}],staticClass:"pointer checkbox-icon",attrs:{src:r("9804"),alt:""},on:{click:function(t){e.isAgree=!1}}}),e._v(e._s(e.$t("message.__WYYDBTY__"))+" "),n("span",{staticClass:"orange-mark pointer"},[e._v(e._s(e.$t("message.__YHXY__")))])]),n("a-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v(e._s(e.$t("message.__LJZC__")))])],1)])],1)},s=[],o=r("6821"),a=r.n(o),i=r("7fcf"),c=r("d504"),l=r("365c"),u={name:"register",components:{LoginHeader:i["a"],BaseForm:c["a"]},data:function(){return{type:1,PhoneFormSetting:p,EmailFormSetting:f,isAgree:!1}},methods:{register:function(){var e=this;this.isAgree?1===this.type?this.$refs.PhoneForm.valid((function(t,r){t||(delete r.passwordCopy,r.password=a()(r.password),Object(l["u"])(r).then((function(t){e.$message.success("注册成功，请登录！"),e.$router.push("/login")})).catch((function(t){e.$message.error(t||"注册失败，请稍后再试！")})))})):this.$refs.EmailForm.valid((function(t,r){t||(delete r.passwordCopy,r.password=a()(r.password),Object(l["t"])(r).then((function(t){e.$message.success("注册成功，请登录！"),e.$router.push("/login")})).catch((function(t){e.$message.error(t||"注册失败，请稍后再试！")})))})):this.$message.error("请先阅读用户协议并同意！")}}},p=[{label:"message.__SJH__",key:"phone",type:"phone",placeholder:"message.__QSRSJH__"},{label:"message.__YZM__",key:"code",type:"code",relationType:"phone",relationKey:"phone",relationLabel:"message.__SJH__",placeholder:"message.__QSRYZM__"},{label:"message.__SZMM__",key:"password",type:"password",placeholder:"message.__QSZMM__"},{label:"message.__QRMM__",key:"passwordCopy",type:"passwordCopy",relationKey:"password",placeholder:"message.__QQRMM__"}],f=[{label:"message.__YX__",key:"email",type:"email",placeholder:"message.__QSRYXH__"},{label:"message.__YZM__",key:"code",type:"code",relationType:"email",relationKey:"email",relationLabel:"message.__YX__",placeholder:"message.__QSRYZM__"},{label:"message.__SZMM__",key:"password",type:"password",placeholder:"message.__QSZMM__"},{label:"message.__QRMM__",key:"passwordCopy",type:"passwordCopy",relationKey:"password",placeholder:"message.__QQRMM__"}],d=u,h=(r("96ba"),r("2877")),g=Object(h["a"])(d,n,s,!1,null,"037e3041",null);t["default"]=g.exports},d504:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.formSetting,(function(t,n){return r("div",{key:n,staticClass:"input-item"},[r("div",{staticClass:"item-row"},[r("div",{staticClass:"item-label"},[e._v(e._s(e.$t(t.label)))]),"code"===t.type?r("div",{staticClass:"code-input ant-input-46"},[r("a-input",{attrs:{placeholder:e.$t(t.placeholder),maxLength:6},model:{value:e.form[t.key],callback:function(r){e.$set(e.form,t.key,r)},expression:"form[item.key]"}}),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCountDown,expression:"!isCountDown"}],staticClass:"orange-mark pointer get-code-btn",on:{click:function(r){return e.getCode(t)}}},[e._v(e._s(e.$t("message.__HQYZM__")))]),r("span",{directives:[{name:"show",rawName:"v-show",value:e.isCountDown,expression:"isCountDown"}],staticClass:"orange-mark pointer get-code-btn disable"},[e._v(e._s(e.second)+"s后重新获取")])],1):"phone"===t.type?r("div",{staticClass:"phont-input ant-input-46"},[r("div",{staticClass:"phone-select"},[e._v("86 "),r("a-icon",{staticClass:"down-icon",attrs:{type:"caret-down"}})],1),r("a-input",{staticClass:"ant-input-46",attrs:{allowClear:"",placeholder:e.$t(t.placeholder),maxLength:20},model:{value:e.form[t.key],callback:function(r){e.$set(e.form,t.key,r)},expression:"form[item.key]"}})],1):"password"===t.type||"passwordCopy"===t.type?r("a-input-password",{staticClass:"ant-input-46",attrs:{allowClear:"",placeholder:e.$t(t.placeholder),maxLength:30},model:{value:e.form[t.key],callback:function(r){e.$set(e.form,t.key,r)},expression:"form[item.key]"}}):r("a-input",{staticClass:"ant-input-46",attrs:{allowClear:"",placeholder:e.$t(t.placeholder),maxLength:40},model:{value:e.form[t.key],callback:function(r){e.$set(e.form,t.key,r)},expression:"form[item.key]"}})],1),r("div",{staticClass:"error-hint"},[e._v(e._s(e.errorHint[t.key]))])])})),0)},s=[],o=(r("4160"),r("159b"),r("5530")),a=r("365c"),i=59,c={name:"BaseForm",props:{formSetting:{type:Array,default:null}},data:function(){return{errorHint:{},form:{},second:i,isCountDown:!1,timer:void 0}},created:function(){var e=this;(this.formSetting||[]).forEach((function(t){e.$set(e.errorHint,t.key,void 0),e.$set(e.form,t.key,void 0)}))},methods:{clear:function(){this.errorHint={},this.form={}},valid:function(e){var t=this,r=!1;this.formSetting.forEach((function(e){var n=t.check(e);t.errorHint[e.key]=n,n&&(r=!0)})),r?e(new Error):e(null,Object(o["a"])({},this.form))},getCode:function(e){var t=this.form[e.relationKey],r=e.relationType;this.check(e,t,r)?this.$message.error("请输入正确的"+this.$t(e.relationLabel)):(this.countDown(),"phone"===r?this.sendPhoneCode(t):"email"===r?this.sendEmailCode(t):"phoneOrEmail"===r&&(/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(t)?this.sendEmailCode(t):/^1[3456789]\d{9}$/.test(t)&&this.sendPhoneCode(t)))},check:function(e,t,r){var n=t||this.form[e.key]||"",s=r||e.type;if(e.noCheck&&!n)return"请输入"+this.$t(e.label);if("phone"===s){var o=/^1[3456789]\d{9}$/.test(n);if(!o)return"请输入正确格式的手机号"}else if("email"===s){var a=/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(n);if(!a)return"请输入正确格式的邮箱"}else if("phoneOrEmail"===s){var i=/^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(n),c=/^1[3456789]\d{9}$/.test(n);if(!i&&!c)return"请输入正确格式的手机号或邮箱"}else if("password"===s){var l=/^[0-9a-zA-Z]{8,20}$/.test(n);if(!l)return"请输入8-20位数字和字母，不包含特殊字符"}else if("passwordCopy"===s){var u=this.form[e.relationKey],p=/^[0-9a-zA-Z]{8,20}$/.test(n)&&n===u;if(!p)return"密码不一致"}else if(!n)return"请输入"+this.$t(e.label)},sendEmailCode:function(e){var t=this;Object(a["w"])({email:e}).then((function(e){t.$message.success("验证码已发送 ~")})).catch((function(e){t.$message.error(e||"发送失败，请稍后再试！"),t.clearCountDown()}))},sendPhoneCode:function(e){var t=this;Object(a["x"])({phone:e}).then((function(e){t.$message.success("验证码已发送 ~")})).catch((function(e){t.$message.error(e||"发送失败，请稍后再试！"),t.clearCountDown()}))},countDown:function(){this.second=i,this.isCountDown=!0,this.countDownHandler()},countDownHandler:function(){var e=this;this.timer=setTimeout((function(){e.second--,0===e.second&&(e.isCountDown=!1,clearTimeout(e.timer)),e.countDownHandler()}),1e3)},clearCountDown:function(){clearTimeout(this.timer),this.isCountDown=!1}}},l=c,u=(r("dbd5"),r("8e16"),r("2877")),p=Object(u["a"])(l,n,s,!1,null,"37dd21b0",null);t["a"]=p.exports},dbb4:function(e,t,r){var n=r("23e7"),s=r("83ab"),o=r("56ef"),a=r("fc6a"),i=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(e){var t,r,n=a(e),s=i.f,l=o(n),u={},p=0;while(l.length>p)r=s(n,t=l[p++]),void 0!==r&&c(u,t,r);return u}})},dbd5:function(e,t,r){"use strict";r("957c1")},e439:function(e,t,r){var n=r("23e7"),s=r("d039"),o=r("fc6a"),a=r("06cf").f,i=r("83ab"),c=s((function(){a(1)})),l=!i||c;n({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},f89e:function(e,t,r){}}]);
//# sourceMappingURL=chunk-5d004f45.39c943aa.js.map