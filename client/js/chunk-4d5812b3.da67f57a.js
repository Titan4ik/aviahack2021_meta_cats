(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d5812b3"],{2518:function(t,e,s){},d78d:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"create-service"},[s("CustomerForm")],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"}),s("div",{staticClass:"col-6"},[s("h1",{staticClass:"text-center mb-5"},[t._v("Создать услугу")]),s("p",{staticClass:"mb-3"},[t._v(t._s(t.json))]),s("form",{attrs:{enctype:"multipart/form-data",action:"http://188.120.226.213:8000/user_part/set_file/",method:"post"},on:{submit:t.submit}},[t._m(0),t._m(1),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Отправить")])]),t.img?s("img",{staticClass:"mt-3",attrs:{src:"http://188.120.226.213:8000/user_part/get_file/",alt:""}}):s("p",[t._v("sending img...")])]),s("div",{staticClass:"col-3"})])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("label",{staticClass:"from-label"},[t._v(" Какое-то поле "),s("input",{staticClass:"form-control",attrs:{type:"text",name:"name"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("label",{staticClass:"from-label"},[t._v(" Поле с картинкой "),s("input",{attrs:{type:"file",name:"input_file",accept:"image/*"}})])])}],c=s("1da1"),o=(s("96cf"),s("365c")),l={name:"CustomerForm",props:{},data:function(){return{json:"loading",img:!0}},mounted:function(){this.getJson()},methods:{getJson:function(){var t=this;o["a"].personal().then(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!s.ok){e.next=6;break}return e.next=3,s.text();case 3:t.json=e.sent,e.next=7;break;case 6:t.json="response error "+s.status;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.json="response error: "+e}))},submit:function(t){var e=this;t.preventDefault();var s=new FormData(t.target);this.img=!1,o["a"].setFile(s).then((function(t){t.ok&&(e.img=!0)})).catch((function(t){e.json="response error: "+t}))}}},u=l,m=(s("eb37"),s("2877")),p=Object(m["a"])(u,r,i,!1,null,"29c89719",null),f=p.exports,v={name:"CreateService",components:{CustomerForm:f}},b=v,d=Object(m["a"])(b,n,a,!1,null,null,null);e["default"]=d.exports},eb37:function(t,e,s){"use strict";s("2518")}}]);
//# sourceMappingURL=chunk-4d5812b3.da67f57a.js.map