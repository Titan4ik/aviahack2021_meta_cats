(function(e){function t(t){for(var r,o,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09163800":"41a3af9a","chunk-22b8f2f0":"03973a75","chunk-7bfce28c":"2d32848a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09163800":1,"chunk-22b8f2f0":1,"chunk-7bfce28c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-09163800":"d0c94e78","chunk-22b8f2f0":"3c9d367f","chunk-7bfce28c":"c44196ef"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"365c":function(e,t,n){"use strict";n("d3b7");var r={personal:function(){return fetch("http://188.120.226.213:8000/user_part/personal/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:localStorage.getItem("access_token"),refresh_token:localStorage.getItem("refresh_token")})})},setFile:function(e){return fetch("http://188.120.226.213:8000/user_part/set_file/",{method:"POST",body:e,credentials:"include"})},signIn:function(e){return fetch("http://188.120.226.213:8000/users/sign_in/",{method:"POST",body:e,credentials:"include"})},addDocs:function(e){return fetch("http://188.120.226.213:8000/documents/add_docs/",{method:"POST",body:e,credentials:"include"})}};t["a"]=r},"4ed6":function(e,t,n){"use strict";n("d8d9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Подписать документы")]),e._v(" | "),n("router-link",{attrs:{to:"/create-service"}},[e._v("Создать услугу")]),e._v(" | "),n("router-link",{attrs:{to:"/get-service"}},[e._v("Получить услугу")]),e._v(" | "),n("router-link",{attrs:{to:"/login"}},[e._v("Войти")])],1),n("div",{staticClass:"col-md-3"}),n("div",{staticClass:"col-md-6 col 12"},[n("router-view")],1),n("div",{staticClass:"col-md-3"})])])},a=[],c={name:"app",components:{}},s=c,i=(n("034f"),n("2877")),u=Object(i["a"])(s,o,a,!1,null,null,null),l=u.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Form")],1)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"text-center mb-5"},[e._v("Подписать документы")]),n("p",{staticClass:"mb-3"},[e._v(e._s(e.json))]),n("form",{attrs:{enctype:"multipart/form-data",action:"http://188.120.226.213:8000/user_part/set_file/",method:"post"},on:{submit:e.submit}},[e._m(0),e._m(1),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Отправить")])]),e.img?n("img",{staticClass:"mt-3",attrs:{src:"http://188.120.226.213:8000/user_part/get_file/",alt:""}}):n("p",[e._v("sending img...")])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-3"},[n("label",{staticClass:"from-label"},[e._v(" Какое-то поле "),n("input",{staticClass:"form-control",attrs:{type:"text",name:"name"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-3"},[n("label",{staticClass:"from-label"},[e._v(" Поле с картинкой "),n("input",{attrs:{type:"file",name:"input_file",accept:"image/*"}})])])}],v=n("1da1"),b=(n("96cf"),n("365c")),g={name:"Form",props:{},data:function(){return{json:"loading",img:!0}},mounted:function(){this.getJson()},methods:{getJson:function(){var e=this;b["a"].personal().then(function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ok){t.next=6;break}return t.next=3,n.text();case 3:e.json=t.sent,t.next=7;break;case 6:e.json="response error "+n.status;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.json="response error: "+t}))},submit:function(e){var t=this;e.preventDefault();var n=new FormData(e.target);this.img=!1,b["a"].setFile(n).then((function(e){e.ok&&(t.img=!0)})).catch((function(e){t.json="response error: "+e}))}}},_=g,y=(n("4ed6"),Object(i["a"])(_,m,h,!1,null,"4eb06dd9",null)),k=y.exports,C={name:"Home",components:{Form:k}},w=C,j=Object(i["a"])(w,d,p,!1,null,null,null),O=j.exports;r["a"].use(f["a"]);var S=[{path:"/",name:"Home",component:O},{path:"/create-service",name:"CreateService",component:function(){return n.e("chunk-22b8f2f0").then(n.bind(null,"d78d"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-7bfce28c").then(n.bind(null,"a55b"))}},{path:"/get-service",name:"GetService",component:function(){return n.e("chunk-09163800").then(n.bind(null,"8a94"))}}],x=new f["a"]({mode:"history",routes:S}),E=x,P=n("2b27"),T=n.n(P);r["a"].use(T.a),new r["a"]({router:E,render:function(e){return e(l)}}).$mount("#app")},"85ec":function(e,t,n){},d8d9:function(e,t,n){}});
//# sourceMappingURL=app.c74f8852.js.map