(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bfe6774"],{"1d52":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"get-services"}},[n("h1",{staticClass:"text-center mb-5"},[e._v("Список услуг")]),e.docSets?n("div",e._l(e.docSets,(function(t){return n("div",{key:t.producer_name},[n("h2",[e._v(e._s(t.producer_name))]),t.offers?n("ul",{staticClass:"list-group"},e._l(t.offers,(function(t){return n("li",{key:t.offer_id,staticClass:"list-group-item"},[n("a",{attrs:{href:"get-service/"+t.id}},[e._v(e._s(t.name))])])})),0):n("p",[e._v("У этого постовщика пока нет услуг")])])})),0):n("p",[e._v("Получаем доступные услуги...")])])},s=[],c=n("1da1"),i=(n("96cf"),n("365c")),o={name:"GetServices",data:function(){return{docSets:!1}},mounted:function(){this.getDocSets()},methods:{getDocSets:function(){var e=this;i["a"].getDocSets().then(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ok){t.next=4;break}return t.next=3,n.json();case 3:e.docSets=t.sent;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},u=o,a=(n("d402"),n("2877")),f=Object(a["a"])(u,r,s,!1,null,null,null);t["default"]=f.exports},"456b":function(e,t,n){},d402:function(e,t,n){"use strict";n("456b")}}]);
//# sourceMappingURL=chunk-6bfe6774.146c0b0a.js.map