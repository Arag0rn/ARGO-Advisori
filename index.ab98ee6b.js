!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t){t.preventDefault();var e=this.getAttribute("href"),r=document.querySelector(e);r&&window.scrollTo({top:r.offsetTop,behavior:"smooth"})}document.querySelector(".journey-btn").addEventListener("click",e),document.querySelectorAll(".header-link").forEach((function(t){t.addEventListener("click",e)}));var r={};function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}};var o={},i=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?m:h,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=m,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",m="completed",p={};function v(){}function y(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(T([])));_&&_!==r&&n.call(_,i)&&(w=_);var L=g.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=g,u(L,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(o);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}var a=document.getElementById("my-form");function c(){return(c=t(r)(t(o).mark((function e(r){var n,i,c,u,s,l,f;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r.preventDefault(),n=document.getElementById("my-form-status"),i=!1,c=0;c<a.elements.length;c++)""===(u=a.elements[c]).value.trim()?(u.setAttribute("required","required"),i=!0):u.removeAttribute("required");return i&&(n.innerHTML="Oops! There was a problem submitting your form. Please fill in all required fields.",console.log("There are empty fields")),s=new FormData(r.target),t.prev=6,t.next=9,fetch(r.target.action,{method:a.method,body:s,headers:{Accept:"application/json"}});case 9:if(!(l=t.sent).ok){t.next=14;break}n.innerHTML="Thank you for your message! We will contact you soon.",a.reset(),t.next=18;break;case 14:return t.next=16,l.json();case 16:(f=t.sent).hasOwnProperty("errors")?(n.innerHTML=f.errors.map((function(t){return t.message})).join(", "),console.log(f.errors)):n.innerHTML="Oops! There was a problem submitting your form";case 18:t.next=24;break;case 20:t.prev=20,t.t0=t.catch(6),console.log(t.t0),n.innerHTML="Oops! There was a problem submitting your form";case 24:case"end":return t.stop()}}),e,null,[[6,20]])})))).apply(this,arguments)}a.addEventListener("submit",(function(t){return c.apply(this,arguments)})),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("message").addEventListener("click",(function(){this.setSelectionRange(0,0)}))}));var u=document.querySelectorAll(".journey-container"),s=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("animate__animated","animate__slideInLeft","animate__medium")}))}));u.forEach((function(t){s.observe(t)}));var l=document.querySelectorAll(".fuel-container"),f=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("animate__animated","animate__slideInLeft","animate__medium")}))}));l.forEach((function(t){f.observe(t)}));var h=document.querySelectorAll(".resourses-container"),d=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("animate__animated","animate__backInRight","animate__medium")}))}));h.forEach((function(t){d.observe(t)}));var m=document.querySelectorAll(".our-focus-section-wrap"),p=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("animate__animated","animate__fadeIn","animate__medium")}))}));m.forEach((function(t){p.observe(t)}));var v=document.querySelectorAll(".service-card"),y=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("animate__animated","animate__fadeInRight","animate__medium")}))}));v.forEach((function(t){y.observe(t)}));var g=document.querySelectorAll(".card-text");document.querySelectorAll(".readMore").forEach((function(t,e){var r=!1;t.addEventListener("click",(function(){r?(g[e].style.minHeight="113px",t.textContent="Read more"):(g[e].style.minHeight="300px",t.textContent="Read less"),r=!r}))}));new Swiper(".swiper",{direction:"horizontal",spaceBetween:37,slidesPerView:3.6,freeMode:!0,loop:!0,watchSlidesProgress:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"}})}();
//# sourceMappingURL=index.ab98ee6b.js.map
