(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b2e201a"],{"54be":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"information-detail"},[i("div",{staticClass:"breadcrumb",on:{click:t.goBack}},[i("a-icon",{attrs:{type:"left"}}),t._v("返回"),i("span",{staticClass:"split-line"}),t._v(t._s(t.higherLevel)+" ")],1),i("div",{staticClass:"article-content"},[i("div",{staticClass:"title"},[t._v(t._s(t.data.title))]),i("div",{staticClass:"time"},[t._v(t._s(t.data.created_at))]),i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.data.content)}}),t.next.pre_info?i("div",{staticClass:"last-article pagination",on:{click:function(e){return t.viewDetail(t.next.pre_info.id)}}},[i("span",{staticClass:"label"},[t._v("上一篇：")]),t._v(" "+t._s(t.next.pre_info.title)+" ")]):t._e(),t.next.next_info?i("div",{staticClass:"next-article pagination",on:{click:function(e){return t.viewDetail(t.next.next_info.id)}}},[i("span",{staticClass:"label"},[t._v("下一篇：")]),t._v(" "+t._s(t.next.next_info.title)+" ")]):t._e()])])},n=[],s=i("365c"),c={name:"detail",data:function(){return{higherLevel:void 0,data:{},next:{},type:void 0,labelMap:{notice:"信息公告",help:"帮助中心"}}},created:function(){this.refresh()},methods:{refresh:function(){var t=this.$route.query,e=t.type,i=t.id;i&&e?(this.type=e,this.renderList(i,e)):this.goBack()},renderList:function(t,e){var i=this;this.higherLevel=this.labelMap[e],"help"===e?Object(s["f"])({id:t}).then((function(t){var e=(t||{}).data||{};i.data=e,i.next=e.next})).catch((function(t){i.$message.error(t||"网络错误，请稍后再试！"),i.goBack()})):Object(s["c"])({id:t}).then((function(t){var e=(t||{}).data||{};i.data=e,i.next=e.next})).catch((function(t){i.$message.error(t||"网络错误，请稍后再试！"),i.goBack()}))},viewDetail:function(t){var e="/information/detail?type="+this.type+"&id="+t;this.$router.push(e),this.refresh()},goBack:function(){this.$router.go(-1)}}},r=c,o=(i("8000"),i("2877")),l=Object(o["a"])(r,a,n,!1,null,"8ab4dff8",null);e["default"]=l.exports},"7c32":function(t,e,i){},8e3:function(t,e,i){"use strict";i("7c32")}}]);
//# sourceMappingURL=chunk-4b2e201a.0b33d6fa.js.map