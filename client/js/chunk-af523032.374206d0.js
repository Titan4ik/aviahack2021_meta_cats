(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af523032"],{5639:function(t,e,n){"use strict";n("a7a1")},a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("LoginForm")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",{staticClass:"text-center mb-5"},[t._v("Войти")]),t.isLogin?n("p",[t._v("Вы авторизованы")]):n("form",{on:{submit:t.submit}},[t._m(0),t._m(1),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Войти")])]),t.error?n("p",[t._v(t._s(t.error))]):t._e()])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[t._v("Логин")]),n("input",{staticClass:"form-control",attrs:{type:"text",name:"username",id:"exampleInputEmail1"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[t._v("Пароль")]),n("input",{staticClass:"form-control",attrs:{type:"password",name:"password",id:"exampleInputPassword1"}})])}],c=n("1da1"),i=(n("96cf"),n("365c")),u=n("c0d6"),l={name:"LoginForm",props:{},data:function(){return{error:!1}},computed:{isLogin:function(){return u["a"].isLogin}},mounted:function(){},methods:{submit:function(t){var e=this;t.preventDefault();var n=new FormData(t.target);i["a"].signIn(n).then(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ok){t.next=12;break}return u["a"].isLogin=!0,e.error=!1,t.next=5,n.json();case 5:r=t.sent,console.log(r),localStorage.setItem("access_token",r.access_token),localStorage.setItem("refresh_token",r.refresh_token),e.checkProducer(),t.next=13;break;case 12:e.error="Не удалось авторизоваться: "+n.status;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.error="Не удалось авторизоваться: "+t}))},checkProducer:function(){i["a"].isProducer().then((function(t){u["a"].isProducer=t}))}}},m=l,f=(n("5639"),n("2877")),p=Object(f["a"])(m,s,o,!1,null,"602400b4",null),d=p.exports,b={name:"Login",components:{LoginForm:d}},_=b,v=Object(f["a"])(_,r,a,!1,null,null,null);e["default"]=v.exports},a7a1:function(t,e,n){}}]);
//# sourceMappingURL=chunk-af523032.374206d0.js.map