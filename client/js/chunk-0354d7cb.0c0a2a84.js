(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0354d7cb"],{"6bf7":function(e,t,n){"use strict";n("8228")},8228:function(e,t,n){},a55b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("LoginForm")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("h1",{staticClass:"text-center mb-5"},[e._v("Войти")]),e.isLogin?n("p",[e._v("Вы авторизованы")]):n("form",{on:{submit:e.submit}},[n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[e._v("Логин")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login,expression:"login"}],staticClass:"form-control",attrs:{type:"text",name:"username",id:"exampleInputEmail1"},domProps:{value:e.login},on:{input:function(t){t.target.composing||(e.login=t.target.value)}}})]),e._m(0),e.isLoginSending?n("button",{staticClass:"btn btn-primary",attrs:{disabled:""}},[e._v("Производим авторизацию...")]):n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Войти")])]),e.error?n("p",[e._v(e._s(e.error))]):e._e()])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[e._v("Пароль")]),n("input",{staticClass:"form-control",attrs:{type:"password",name:"password",id:"exampleInputPassword1"}})])}],i=n("1da1"),c=(n("96cf"),n("d3b7"),n("b0c0"),n("365c")),u=n("c0d6"),l={name:"LoginForm",props:{},data:function(){return{error:!1,isLoginSending:!1}},computed:{isLogin:function(){return u["a"].isLogin},login:{get:function(){return u["a"].login},set:function(e){localStorage.setItem("login",e),u["a"].login=e}},producerName:{get:function(){return u["a"].producerName},set:function(e){localStorage.setItem("producerName",e),u["a"].producerName=e}}},mounted:function(){},methods:{submit:function(e){var t=this;e.preventDefault();var n=new FormData(e.target);this.isLoginSending=!0,c["a"].signIn(n).then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ok){e.next=12;break}return u["a"].isLogin=!0,t.error=!1,e.next=5,n.json();case 5:r=e.sent,localStorage.setItem("access_token",r.access_token),localStorage.setItem("refresh_token",r.refresh_token),t.checkProducer(),t.$router.push("get-services"),e.next=13;break;case 12:t.error="Не удалось авторизоваться: "+n.status;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.error="Не удалось авторизоваться: "+e})).finally((function(){t.isLoginSending=!1}))},checkProducer:function(){var e=this;c["a"].testProducer().then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ok){t.next=8;break}return t.next=3,n.json();case 3:r=t.sent,u["a"].isProducer=!0,e.producerName=r.name,t.next=9;break;case 8:u["a"].isProducer=!1;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},m=l,p=(n("6bf7"),n("2877")),f=Object(p["a"])(m,o,s,!1,null,"497b63b6",null),d=f.exports,g={name:"Login",components:{LoginForm:d}},b=g,v=Object(p["a"])(b,r,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-0354d7cb.0c0a2a84.js.map