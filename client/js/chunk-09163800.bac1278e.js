(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09163800"],{"8a94":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"get-service"}},[t.docSetInfo?i("div",[i("h1",[t._v(t._s(t.docSetInfo.name))]),i("p",[t._v(t._s(t.docSetInfo.description))])]):t._e(),t.isTagsSubmited?t._e():i("div",[t.docs?i("div",[i("p",[t._v("Ваши данные нужны для заполнения следующих документов:")]),i("ul",t._l(t.docs,(function(e){return i("li",{key:e.doc_id},[i("a",{attrs:{href:"http://188.120.226.213:8000/static"+e.path,"data-bs-toggle":"modal","data-bs-target":"#empty"+e.doc_id}},[t._v(t._s(e.doc_name))]),i("div",{staticClass:"modal fade",attrs:{id:"empty"+e.doc_id,tabindex:"-1","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-xl"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title"},[t._v(t._s(e.doc_name))]),i("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),i("div",{staticClass:"modal-body"},[i("object",{attrs:{data:"http://188.120.226.213:8000/static"+e.path,type:"application/pdf",title:"SamplePdf",width:"100%",height:"720"}})]),t._m(0,!0)])])])])})),0)]):i("p",[t._v("Загрузка необходимых документов...")]),t.tags?i("div",[i("h2",[t._v("Для предоставления услуги необходимы следующие данные")]),t.tags?i("form",{on:{submit:t.submitTags}},[t._l(t.tags,(function(e){return i("div",{key:e,staticClass:"form-group"},[i("label",{staticClass:"w-100"},[t._v(" "+t._s(e)+" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filled[e],expression:"filled[tag]"}],staticClass:"form-control",attrs:{type:"text",name:e,required:""},domProps:{value:t.filled[e]},on:{input:function(i){i.target.composing||t.$set(t.filled,e,i.target.value)}}})])])})),t.isTagsSending?i("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:""}},[t._v("Данные отправляются...")]):i("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("Отправить")])],2):t._e()]):i("p",[t._v("Загрузка необходимых полей...")])]),t.isSignSubmited?i("div",[i("p",[t._v("Документы успешно подписаны!")])]):i("div",{attrs:{hidden:!t.isTagsSubmited}},[i("h2",[t._v("Предварительный вид документов")]),t.filledDocs?i("div",[i("p",[t._v("Вы можете проверить вид документов:")]),i("ul",t._l(t.filledDocs,(function(e){return i("li",{key:e.doc_id},[i("a",{attrs:{href:"http://188.120.226.213:8000/static"+e.path,"data-bs-toggle":"modal","data-bs-target":"#filled"+e.doc_id}},[t._v(t._s(e.doc_name))]),i("div",{staticClass:"modal fade",attrs:{id:"filled"+e.doc_id,tabindex:"-1","aria-hidden":"true"}},[i("div",{staticClass:"modal-dialog modal-xl"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("h5",{staticClass:"modal-title"},[t._v(t._s(e.doc_name))]),i("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),i("div",{staticClass:"modal-body"},[i("object",{attrs:{data:"http://188.120.226.213:8000/static/"+e.path,type:"application/pdf",title:"SamplePdf",width:"100%",height:"720"}})]),t._m(1,!0)])])])])})),0)]):t._e(),i("h2",[t._v("Подписать все необходимые документы")]),t._m(2),i("div",[i("button",{staticClass:"clear-button",attrs:{type:"button",id:"clear"},on:{click:t.clearSign}},[t._v("Очистить")])]),t.isSignSending?i("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:""}},[t._v("Подписываем документы...")]):i("button",{staticClass:"btn btn-primary btn-block",on:{click:t.sendSign}},[t._v("Подписать")])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Закрыть")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Закрыть")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"signature_wrapper"},[i("canvas",{staticClass:"signature-pad",attrs:{id:"signature-pad",width:"300",height:"100"}})])}],o=i("1da1"),a=(i("d3b7"),i("96cf"),i("365c"));
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */
class r{constructor(t,e,i){this.x=t,this.y=e,this.time=i||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class c{constructor(t,e,i,n,s,o){this.startPoint=t,this.control2=e,this.control1=i,this.endPoint=n,this.startWidth=s,this.endWidth=o}static fromPoints(t,e){const i=this.calculateControlPoints(t[0],t[1],t[2]).c2,n=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new c(t[1],i,n,t[2],e.start,e.end)}static calculateControlPoints(t,e,i){const n=t.x-e.x,s=t.y-e.y,o=e.x-i.x,a=e.y-i.y,c={x:(t.x+e.x)/2,y:(t.y+e.y)/2},h={x:(e.x+i.x)/2,y:(e.y+i.y)/2},d=Math.sqrt(n*n+s*s),l=Math.sqrt(o*o+a*a),u=c.x-h.x,v=c.y-h.y,m=l/(d+l),_={x:h.x+u*m,y:h.y+v*m},p=e.x-_.x,g=e.y-_.y;return{c1:new r(c.x+p,c.y+g),c2:new r(h.x+p,h.y+g)}}length(){const t=10;let e,i,n=0;for(let s=0;s<=t;s+=1){const o=s/t,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),r=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(s>0){const t=a-e,s=r-i;n+=Math.sqrt(t*t+s*s)}e=a,i=r}return n}point(t,e,i,n,s){return e*(1-t)*(1-t)*(1-t)+3*i*(1-t)*(1-t)*t+3*n*(1-t)*t*t+s*t*t*t}}function h(t,e=250){let i,n,s,o=0,a=null;const r=()=>{o=Date.now(),a=null,i=t.apply(n,s),a||(n=null,s=[])};return function(...c){const h=Date.now(),d=e-(h-o);return n=this,s=c,d<=0||d>e?(a&&(clearTimeout(a),a=null),o=h,i=t.apply(n,s),a||(n=null,s=[])):a||(a=window.setTimeout(r,d)),i}}class d{constructor(t,e={}){this.canvas=t,this.options=e,this._handleMouseDown=t=>{1===t.which&&(this._mouseButtonDown=!0,this._strokeBegin(t))},this._handleMouseMove=t=>{this._mouseButtonDown&&this._strokeMoveUpdate(t)},this._handleMouseUp=t=>{1===t.which&&this._mouseButtonDown&&(this._mouseButtonDown=!1,this._strokeEnd(t))},this._handleTouchStart=t=>{if(t.preventDefault(),1===t.targetTouches.length){const e=t.changedTouches[0];this._strokeBegin(e)}},this._handleTouchMove=t=>{t.preventDefault();const e=t.targetTouches[0];this._strokeMoveUpdate(e)},this._handleTouchEnd=t=>{const e=t.target===this.canvas;if(e){t.preventDefault();const e=t.changedTouches[0];this._strokeEnd(e)}},this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle="throttle"in e?e.throttle:16,this.minDistance="minDistance"in e?e.minDistance:5,this.dotSize=e.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=e.penColor||"black",this.backgroundColor=e.backgroundColor||"rgba(0,0,0,0)",this.onBegin=e.onBegin,this.onEnd=e.onEnd,this._strokeMoveUpdate=this.throttle?h(d.prototype._strokeUpdate,this.throttle):d.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}fromDataURL(t,e={},i){const n=new Image,s=e.ratio||window.devicePixelRatio||1,o=e.width||this.canvas.width/s,a=e.height||this.canvas.height/s;this._reset(),n.onload=()=>{this._ctx.drawImage(n,0,0,o,a),i&&i()},n.onerror=t=>{i&&i(t)},n.src=t,this._isEmpty=!1}toDataURL(t="image/png",e){switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t){this.clear(),this._fromData(t,({color:t,curve:e})=>this._drawCurve({color:t,curve:e}),({color:t,point:e})=>this._drawDot({color:t,point:e})),this._data=t}toData(){return this._data}_strokeBegin(t){const e={color:this.penColor,points:[]};"function"===typeof this.onBegin&&this.onBegin(t),this._data.push(e),this._reset(),this._strokeUpdate(t)}_strokeUpdate(t){if(0===this._data.length)return void this._strokeBegin(t);const e=t.clientX,i=t.clientY,n=this._createPoint(e,i),s=this._data[this._data.length-1],o=s.points,a=o.length>0&&o[o.length-1],r=!!a&&n.distanceTo(a)<=this.minDistance,c=s.color;if(!a||!a||!r){const t=this._addPoint(n);a?t&&this._drawCurve({color:c,curve:t}):this._drawDot({color:c,point:n}),o.push({time:n.time,x:n.x,y:n.y})}}_strokeEnd(t){this._strokeUpdate(t),"function"===typeof this.onEnd&&this.onEnd(t)}_handlePointerEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}_handleMouseEvents(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}_createPoint(t,e){const i=this.canvas.getBoundingClientRect();return new r(t-i.left,e-i.top,(new Date).getTime())}_addPoint(t){const{_lastPoints:e}=this;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);const t=this._calculateCurveWidths(e[1],e[2]),i=c.fromPoints(e,t);return e.shift(),i}return null}_calculateCurveWidths(t,e){const i=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,n=this._strokeWidth(i),s={end:n,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=n,s}_strokeWidth(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}_drawCurveSegment(t,e,i){const n=this._ctx;n.moveTo(t,e),n.arc(t,e,i,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve({color:t,curve:e}){const i=this._ctx,n=e.endWidth-e.startWidth,s=2*Math.floor(e.length());i.beginPath(),i.fillStyle=t;for(let o=0;o<s;o+=1){const t=o/s,i=t*t,a=i*t,r=1-t,c=r*r,h=c*r;let d=h*e.startPoint.x;d+=3*c*t*e.control1.x,d+=3*r*i*e.control2.x,d+=a*e.endPoint.x;let l=h*e.startPoint.y;l+=3*c*t*e.control1.y,l+=3*r*i*e.control2.y,l+=a*e.endPoint.y;const u=Math.min(e.startWidth+a*n,this.maxWidth);this._drawCurveSegment(d,l,u)}i.closePath(),i.fill()}_drawDot({color:t,point:e}){const i=this._ctx,n="function"===typeof this.dotSize?this.dotSize():this.dotSize;i.beginPath(),this._drawCurveSegment(e.x,e.y,n),i.closePath(),i.fillStyle=t,i.fill()}_fromData(t,e,i){for(const n of t){const{color:t,points:s}=n;if(s.length>1)for(let i=0;i<s.length;i+=1){const n=s[i],o=new r(n.x,n.y,n.time);this.penColor=t,0===i&&this._reset();const a=this._addPoint(o);a&&e({color:t,curve:a})}else this._reset(),i({color:t,point:s[0]})}}_toSVG(){const t=this._data,e=Math.max(window.devicePixelRatio||1,1),i=0,n=0,s=this.canvas.width/e,o=this.canvas.height/e,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width",this.canvas.width.toString()),a.setAttribute("height",this.canvas.height.toString()),this._fromData(t,({color:t,curve:e})=>{const i=document.createElement("path");if(!isNaN(e.control1.x)&&!isNaN(e.control1.y)&&!isNaN(e.control2.x)&&!isNaN(e.control2.y)){const n=`M ${e.startPoint.x.toFixed(3)},${e.startPoint.y.toFixed(3)} C ${e.control1.x.toFixed(3)},${e.control1.y.toFixed(3)} ${e.control2.x.toFixed(3)},${e.control2.y.toFixed(3)} ${e.endPoint.x.toFixed(3)},${e.endPoint.y.toFixed(3)}`;i.setAttribute("d",n),i.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),i.setAttribute("stroke",t),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),a.appendChild(i)}},({color:t,point:e})=>{const i=document.createElement("circle"),n="function"===typeof this.dotSize?this.dotSize():this.dotSize;i.setAttribute("r",n.toString()),i.setAttribute("cx",e.x.toString()),i.setAttribute("cy",e.y.toString()),i.setAttribute("fill",t),a.appendChild(i)});const r="data:image/svg+xml;base64,",c=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${i} ${n} ${s} ${o}" width="${s}" height="${o}">`;let h=a.innerHTML;if(void 0===h){const t=document.createElement("dummy"),e=a.childNodes;t.innerHTML="";for(let i=0;i<e.length;i+=1)t.appendChild(e[i].cloneNode(!0));h=t.innerHTML}const d="</svg>",l=c+h+d;return r+btoa(l)}}var l=d,u={name:"GetService",data:function(){return{canvas:{},signaturePad:{},tags:!1,filled:{},docSetInfo:!1,docs:!1,filledDocs:!1,isTagsSubmited:!1,isTagsSending:!1,isSignSubmited:!1,isSignSending:!1,formData:{}}},props:{docSetId:String},components:{},mounted:function(){this.canvas=document.querySelector("#signature-pad"),this.signaturePad=new l(this.canvas,{penColor:"rgb(0, 0, 0)"}),this.getDocSetInfo(),this.getTags(),this.getDocs()},methods:{getDocSetInfo:function(){var t=this;a["a"].getDocSetInfo(this.docSetId).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.ok){e.next=4;break}return e.next=3,i.json();case 3:t.docSetInfo=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){return t.docSetInfo=!1}))},getTags:function(){var t=this;a["a"].getTags(this.docSetId).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(i){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.ok){e.next=6;break}return e.next=3,i.json();case 3:n=e.sent,t.tags=n.tags,t.filled=n.filled;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){return t.getTags=!1}))},getDocs:function(){var t=this;a["a"].getDocs(this.docSetId).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i.ok){e.next=4;break}return e.next=3,i.json();case 3:t.docs=e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){return t.docs=!1}))},submitTags:function(t){var e=this;t.preventDefault();var i=new FormData(t.target);this.formData=new FormData(t.target),this.isTagsSubmited=!1,this.isTagsSending=!0,a["a"].fillDocs(this.docSetId,i).then(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.ok){t.next=5;break}return t.next=3,i.json();case 3:e.filledDocs=t.sent,e.isTagsSubmited=!0;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){e.isTagsSending=!1}))},clearSign:function(){this.signaturePad.clear()},sendSign:function(){var t=this;this.isSignSubmited=!1,this.isSignSending=!0;var e=this.formData;e.set("el_sign",this.signaturePad.toDataURL()),a["a"].sendSign(this.docSetId,e).then(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i.ok&&(t.isSignSubmited=!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){t.isSignSending=!1}))}}},v=u,m=(i("c844"),i("2877")),_=Object(m["a"])(v,n,s,!1,null,null,null);e["default"]=_.exports},c135:function(t,e,i){},c844:function(t,e,i){"use strict";i("c135")}}]);
//# sourceMappingURL=chunk-09163800.bac1278e.js.map