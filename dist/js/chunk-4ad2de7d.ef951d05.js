(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad2de7d"],{2352:function(s,t,a){"use strict";a("79eb")},"79eb":function(s,t,a){},"93a4":function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"order-detail-page"},[a("Header"),a("div",{staticClass:"page-title"},[a("span",{staticClass:"orange-mark pointer",on:{click:function(t){return s.$goto("/mine/order")}}},[s._v("我的订单")]),s._v(" > 订单详情 ")]),a("div",{staticClass:"content-panel"},[a("div",{staticClass:"receive-info"},[a("div",{staticClass:"title"},[s._v("收货信息")]),a("div",{staticClass:"content"},[a("span",{staticClass:"label"},[s._v("姓名：")]),a("span",{staticClass:"value"},[s._v(s._s(s.user.express_name))]),a("span",{staticClass:"label label-2"},[s._v("电话：")]),a("span",{staticClass:"value"},[s._v(s._s(s.user.express_mobile))])])]),a("div",{staticClass:"order-info"},[a("div",{staticClass:"info-item"},[a("span",{staticClass:"label"},[s._v("订单状态：")]),a("span",{staticClass:"value"},[s._v(s._s(0==s.detail.status?"已取消":1==s.detail.status?"已下单":2==s.detail.status?"已完成":"")+" ")])]),a("div",{staticClass:"info-item"},[a("span",{staticClass:"label"},[s._v("订单号：")]),a("span",{staticClass:"value"},[s._v(s._s(s.detail.order_code))])]),a("div",{staticClass:"info-item"},[a("span",{staticClass:"label"},[s._v("产品名称：")]),a("span",{staticClass:"value"},[s._v(s._s(s.detail.group&&s.detail.group.product_group_name||""))])]),a("div",{staticClass:"info-item"},[a("span",{staticClass:"label"},[s._v("创建时间：")]),a("span",{staticClass:"value"},[s._v(s._s(s.detail.created_at))])]),2==s.detail.status?a("div",{staticClass:"info-item"},[a("span",{staticClass:"label"},[s._v("完成时间：")]),a("span",{staticClass:"value"},[s._v(s._s(s.detail.pay_time))])]):s._e()]),a("div",{staticClass:"product-list"},[s._l(s.detail.info||[],(function(t,i){return a("div",{key:i,staticClass:"product-item"},[a("div",{staticClass:"cube name"},[s._v(s._s(t.product_name))]),a("div",{staticClass:"cube specs"},[s._v(s._s(t.specs))]),a("div",{staticClass:"cube"},[s._v("单价："+s._s(t.price)+" 元/"+s._s(t.unit))]),a("div",{staticClass:"cube"},[s._v("数量："+s._s(t.quantity*t.lowest_num)+" "+s._s(t.unit))]),a("div",{staticClass:"cube"},[s._v("小计："),a("span",{staticClass:"total-price orange-mark"},[s._v("¥"+s._s(t.total_amount))])])])})),a("div",{staticClass:"product-item"},[a("div",{staticClass:"cube name"},[s._v("技术服务费")]),a("div",{staticClass:"cube"},[s._v(s._s(100*Number(s.detail.service_fee||0))+"%/年")]),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"})]),1!=Number(s.detail.discount)?a("div",{staticClass:"product-item"},[a("div",{staticClass:"cube name"},[s._v("专享折扣")]),a("div",{staticClass:"cube"},[s._v(s._s(s.detail.discount&&10*Number(s.detail.discount))+"折")]),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"}),a("div",{staticClass:"cube"})]):s._e()],2),a("div",{staticClass:"fee-info"},[a("div",{staticClass:"total"},[s._v("数量: "+s._s(s.detail.num)+" 集群，总共配置费用："),a("span",{staticClass:"unit orange-mark"},[s._v("¥")]),a("span",{staticClass:"number orange-mark"},[s._v(s._s(s.detail.total_amount))])]),a("div",{staticClass:"hint"},[s._v("已下单，请稍等，平台客户将主动联系您")])])]),a("Footer")],1)},e=[],l=a("0418"),c=a("fd2d"),n=a("365c"),d={name:"mine-order-detail",components:{Header:l["a"],Footer:c["a"]},data:function(){return{user:{express_name:void 0,express_mobile:void 0},detail:{},id:void 0}},created:function(){var s=this.$route.query.id;s?(this.id=s,this.render()):this.$router.go(-1)},methods:{render:function(){var s=this;Object(n["h"])({id:this.id}).then((function(t){var a=t.data||{};s.user=a.express||{},s.detail=a}))}}},v=d,u=(a("2352"),a("2877")),r=Object(u["a"])(v,i,e,!1,null,"282c8455",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-4ad2de7d.ef951d05.js.map