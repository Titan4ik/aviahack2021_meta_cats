(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09163800":"7252a052","chunk-4d5812b3":"da67f57a","chunk-5f5297c1":"bc3e5c89"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09163800":1,"chunk-4d5812b3":1,"chunk-5f5297c1":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-09163800":"9fadba22","chunk-4d5812b3":"0427cfdd","chunk-5f5297c1":"ab445c75"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"365c":function(e,t,n){"use strict";n("d3b7");var r={personal:function(){return fetch("http://188.120.226.213:8000/user_part/personal/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:localStorage.getItem("access_token"),refresh_token:localStorage.getItem("refresh_token")})})},setFile:function(e){return fetch("http://188.120.226.213:8000/user_part/set_file/",{method:"POST",body:e,credentials:"include"})},signIn:function(e){return fetch("http://188.120.226.213:8000/users/sign_in/",{method:"POST",body:e,credentials:"include"})}};t["a"]=r},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Подписать документы")]),e._v(" | "),n("router-link",{attrs:{to:"/create-service"}},[e._v("Создать услугу")]),e._v(" | "),n("router-link",{attrs:{to:"/get-service"}},[e._v("Получить услугу")]),e._v(" | "),n("router-link",{attrs:{to:"/login"}},[e._v("Войти")])],1),n("router-view")],1)},o=[],s={name:"app",components:{}},c=s,i=(n("034f"),n("2877")),u=Object(i["a"])(c,a,o,!1,null,null,null),l=u.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Form")],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-3"}),n("div",{staticClass:"col-6"},[n("h1",{staticClass:"text-center mb-5"},[e._v("Подписать документы")]),n("p",{staticClass:"mb-3"},[e._v(e._s(e.json))]),n("form",{attrs:{enctype:"multipart/form-data",action:"http://188.120.226.213:8000/user_part/set_file/",method:"post"},on:{submit:e.submit}},[e._m(0),e._m(1),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Отправить")])]),e.img?n("img",{staticClass:"mt-3",attrs:{src:"http://188.120.226.213:8000/user_part/get_file/",alt:""}}):n("p",[e._v("sending img...")])]),n("div",{staticClass:"col-3"})])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-3"},[n("label",{staticClass:"from-label"},[e._v(" Какое-то поле "),n("input",{staticClass:"form-control",attrs:{type:"text",name:"name"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-3"},[n("label",{staticClass:"from-label"},[e._v(" Поле с картинкой "),n("input",{attrs:{type:"file",name:"input_file",accept:"image/*"}})])])}],v=n("1da1"),b=(n("96cf"),n("365c")),g={name:"Form",props:{},data:function(){return{json:"loading",img:!0}},mounted:function(){this.getJson()},methods:{getJson:function(){var e=this;b["a"].personal().then(function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ok){t.next=6;break}return t.next=3,n.text();case 3:e.json=t.sent,t.next=7;break;case 6:e.json="response error "+n.status;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.json="response error: "+t}))},submit:function(e){var t=this;e.preventDefault();var n=new FormData(e.target);this.img=!1,b["a"].setFile(n).then((function(e){e.ok&&(t.img=!0)})).catch((function(e){t.json="response error: "+e}))}}},_=g,y=(n("a901"),Object(i["a"])(_,m,h,!1,null,"00811827",null)),k=y.exports,C={name:"Home",components:{Form:k}},w=C,j=Object(i["a"])(w,p,d,!1,null,null,null),O=j.exports;r["a"].use(f["a"]);var x=[{path:"/",name:"Home",component:O},{path:"/create-service",name:"CreateService",component:function(){return n.e("chunk-4d5812b3").then(n.bind(null,"d78d"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-5f5297c1").then(n.bind(null,"a55b"))}},{path:"/get-service",name:"GetService",component:function(){return n.e("chunk-09163800").then(n.bind(null,"8a94"))}}],S=new f["a"]({mode:"history",routes:x}),E=S,P=n("2b27"),T=n.n(P);r["a"].use(T.a),new r["a"]({router:E,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},a901:function(e,t,n){"use strict";n("dbfa")},dbfa:function(e,t,n){}});
//# sourceMappingURL=app.d8e324f4.js.map