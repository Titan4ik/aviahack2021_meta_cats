(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63b09674"],{"888f":function(t,e,r){"use strict";r("d16e")},d16e:function(t,e,r){},f557:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"create-service"},[r("QrCodeForm",{attrs:{docSetId:t.docSetId}})],1)},s=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"text-center mb-5"},[t._v("Получить QR код")]),t.tags?r("div",[r("h2",[t._v("Эти поля будут предзаполнены у клиента")]),t.tags?r("form",{on:{submit:t.submitTags}},[t._l(t.tags,(function(e){return r("div",{key:e,staticClass:"form-group"},[r("label",{staticClass:"w-100"},[t._v(" "+t._s(e)+" "),r("input",{staticClass:"form-control",attrs:{type:"email"===e?"email":"text",name:e}})])])})),t.isTagsSending?r("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:""}},[t._v("Создаем QR код...")]):r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("Создать QR код")]),t.error?r("p",[t._v(t._s(t.error))]):t._e(),t.qrCode?r("div",{staticClass:"answer"},[r("p",[t._v("Ваш QR код:")]),r("img",{staticClass:"mt-3 mw-100",attrs:{src:t.qrCode,alt:""}})]):t._e()],2):t._e()]):r("p",[t._v("Загрузка необходимых полей...")])])},i=[],o=r("1da1"),c=(r("96cf"),r("d3b7"),r("365c")),u={name:"QrCodeForm",props:{docSetId:String},data:function(){return{isSending:!1,error:!1,qrCode:!1,tags:!1,filled:!1,isTagsSubmited:!1,isTagsSending:!1,access_token:localStorage.getItem("access_token"),refresh_token:localStorage.getItem("refresh_token")}},mounted:function(){this.getTags()},methods:{submitTags:function(t){var e=this;t.preventDefault();var r=new FormData(t.target);this.formData=new FormData(t.target),this.isTagsSubmited=!1,this.isTagsSending=!0,c["a"].createQrCode(this.docSetId,r).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.ok){t.next=7;break}return t.next=3,r.text();case 3:e.qrCode=t.sent,e.isTagsSubmited=!0,t.next=8;break;case 7:e.error="response error: "+r.status;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){e.isTagsSending=!1}))},getTags:function(){var t=this;c["a"].getTags(this.docSetId).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r.ok){e.next=6;break}return e.next=3,r.json();case 3:n=e.sent,t.tags=n.tags,t.filled=n.filled;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){return t.getTags=!1}))}}},d=u,l=(r("888f"),r("2877")),f=Object(l["a"])(d,a,i,!1,null,"0f4f9a7e",null),g=f.exports,m={name:"CreateQrCode",props:{docSetId:String},components:{QrCodeForm:g}},p=m,b=Object(l["a"])(p,n,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-63b09674.c20d4e30.js.map