(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1336f7a6"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"page-header"},[r("div",{staticClass:"header-content row-center"},[r("div",{staticClass:"header-left row-center"},[r("img",{staticClass:"logo pointer",attrs:{src:n("a1d8"),alt:""},on:{click:function(e){return t.$goto("/")}}}),r("span",{staticClass:"page-title pointer",on:{click:function(e){return t.$goto("/")}}},[t._v(t._s(t.$t("message.__FBSCCYJCFWS__")))]),r("div",{staticClass:"nav-area row-center"},[r("div",{class:["nav-item","home"===t.name?"active":""],on:{click:function(e){return t.$goto("/")}}},[t._v(" "+t._s(t.$t("message.__SY__")))]),r("div",{class:["nav-item","production"===t.name?"active":""],on:{click:function(e){return t.$goto("/productionList")}}},[t._v(" "+t._s(t.$t("message.__CP__")))]),r("div",{class:["nav-item","information"===t.name?"active":""],on:{click:function(e){return t.$goto("/information")}}},[t._v(t._s(t.$t("message.__ZX__")))]),r("div",{class:["nav-item","business"===t.name?"active":""],on:{click:function(e){return t.$goto("/business")}}},[t._v(" "+t._s(t.$t("message.__SW__")))])])]),r("div",{staticClass:"header-right row-center"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.user.id,expression:"!user.id"}],staticClass:"header-button pointer",on:{click:function(e){return t.$goto("/login")}}},[t._v(" "+t._s(t.$t("message.__DL__")))]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.user.id,expression:"!user.id"}],staticClass:"header-button primary pointer",on:{click:function(e){return t.$goto("/register")}}},[t._v(" "+t._s(t.$t("message.__ZC__")))]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.user.id,expression:"user.id"}],staticClass:"user-name-select"},[r("div",{staticClass:"name"},[t._v(t._s(t.user.user_name)+" "),r("a-icon",{staticClass:"down-icon",attrs:{type:"down"}})],1),r("div",{staticClass:"select-panel"},[r("div",{staticClass:"select-item item-1",on:{click:function(e){return t.$goto("/mine")}}},[t._v("个人中心")]),r("div",{staticClass:"select-item",on:{click:t.logout}},[t._v("退出登录")])])])])])])},i=[],s=(n("ac1f"),n("5319"),n("365c")),a={name:"Header",props:{name:{type:String,default:null}},computed:{user:function(){return this.$store.state.user}},data:function(){return{}},methods:{logout:function(){var t=this;this.$store.commit("updateUser",{}),Object(s["p"])().then((function(e){t.$message.success("退出登录成功！"),localStorage.removeItem("token"),t.$router.replace("/")})).catch((function(e){t.$message.error(e||"操作失败，请稍后再试！")}))}}},c=a,o=(n("3b50"),n("2877")),l=Object(o["a"])(c,r,i,!1,null,"0bb985b4",null);e["a"]=l.exports},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"150e":function(t,e,n){},3318:function(t,e,n){"use strict";n("150e")},"3b50":function(t,e,n){"use strict";n("d57b")},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),s=n("7b0b"),a=n("50c4"),c=n("a691"),o=n("1d80"),l=n("8aa5"),u=n("14c3"),v=Math.max,d=Math.min,g=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,p=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,C=r.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(n,r){var i=o(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!m&&C||"string"===typeof r&&-1===r.indexOf(x)){var s=n(e,t,this,r);if(s.done)return s.value}var o=i(t),g=String(this),f="function"===typeof r;f||(r=String(r));var p=o.global;if(p){var E=o.unicode;o.lastIndex=0}var k=[];while(1){var A=u(o,g);if(null===A)break;if(k.push(A),!p)break;var I=String(A[0]);""===I&&(o.lastIndex=l(g,a(o.lastIndex),E))}for(var _="",S=0,b=0;b<k.length;b++){A=k[b];for(var B=String(A[0]),L=v(d(c(A.index),g.length),0),R=[],U=1;U<A.length;U++)R.push(h(A[U]));var y=A.groups;if(f){var P=[B].concat(R,L,g);void 0!==y&&P.push(y);var O=String(r.apply(void 0,P))}else O=w(B,g,L,R,y,r);L>=S&&(_+=g.slice(S,L)+O,S=L+B.length)}return _+g.slice(S)}];function w(t,n,r,i,a,c){var o=r+t.length,l=i.length,u=p;return void 0!==a&&(a=s(a),u=f),e.call(c,u,(function(e,s){var c;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(o);case"<":c=a[s.slice(1,-1)];break;default:var u=+s;if(0===u)return e;if(u>l){var v=g(u/10);return 0===v?e:v<=l?void 0===i[v-1]?s.charAt(1):i[v-1]+s.charAt(1):e}c=i[u-1]}return void 0===c?"":c}))}}))},7291:function(t,e,n){t.exports=n.p+"img/qrcode.5f602ae0.jpg"},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),s=RegExp.prototype.exec,a=String.prototype.replace,c=s,o=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],v=o||u||l;v&&(c=function(t){var e,n,i,c,v=this,d=l&&v.sticky,g=r.call(v),f=v.source,p=0,h=t;return d&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),h=String(t).slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==t[v.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,p++),n=new RegExp("^(?:"+f+")",g)),u&&(n=new RegExp("^"+f+"$(?!\\s)",g)),o&&(e=v.lastIndex),i=s.call(d?n:v,h),d?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=v.lastIndex,v.lastIndex+=i[0].length):v.lastIndex=0:o&&i&&(v.lastIndex=v.global?i.index+i[0].length:e),u&&i&&i.length>1&&a.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a1d8:function(t,e){t.exports="data:image/png;base64,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"},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},d57b:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),s=n("b622"),a=n("9263"),c=n("9112"),o=s("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),v=s("replace"),d=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),g=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,v){var f=s(t),p=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!p||!h||"replace"===t&&(!l||!u||d)||"split"===t&&!g){var m=/./[f],C=n(f,""[t],(function(t,e,n,r,i){return e.exec===a?p&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=C[0],w=C[1];r(String.prototype,t,x),r(RegExp.prototype,f,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}v&&c(RegExp.prototype[f],"sham",!0)}},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer"},[n("div",{staticClass:"footer-content"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"list-1 list"},[n("div",{staticClass:"list-title"},[t._v("产品")]),t._l(t.productList,(function(e,r){return n("div",{key:r,staticClass:"list-item",on:{click:t.alert}},[t._v(" "+t._s(e.product_type_name)+" ")])}))],2),n("div",{staticClass:"list-2 list"},[n("div",{staticClass:"list-title"},[t._v("信息")]),n("div",{staticClass:"list-item",on:{click:function(e){return t.$goto("/information/notice")}}},[t._v("公告")]),n("div",{staticClass:"list-item",on:{click:function(e){return t.$goto("/information/help")}}},[t._v("帮助中心")]),n("div",{staticClass:"list-item",on:{click:function(e){return t.$goto("/business")}}},[t._v("商务合作")])]),t._m(1)]),n("div",{staticClass:"copyright"},[t._v("Copyright "),n("a-icon",{staticClass:"copyright-icon",attrs:{type:"copyright"}}),t._v("2020 IPFS Cloud 深圳储算科技有限公司 ")],1)])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"logo-area"},[r("img",{staticClass:"logo",attrs:{src:n("a1d8"),alt:""}}),r("div",[t._v("分布式存储云基础服务商")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"qrcode-area"},[r("div",{staticClass:"qrcode-1"},[r("img",{staticClass:"img",attrs:{src:n("7291"),alt:""}}),r("div",[t._v("客服微信")])])])}],s={name:"Footer",data:function(){return{}},computed:{productList:function(){return this.$store.state.productList}},created:function(){var t=this.$store.state.productList;t&&0!==t.length||this.$store.dispatch("setProductList")},methods:{alert:function(){this.$message.error("此功能正在开发中，敬请期待！")}}},a=s,c=(n("3318"),n("2877")),o=Object(c["a"])(a,r,i,!1,null,"3ba07b25",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-1336f7a6.499a8714.js.map