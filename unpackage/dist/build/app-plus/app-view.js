(function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="e4ca")})({"04f0":function(t,e,n){"use strict";n.r(e);var r=n("f78c"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"0562":function(t,e,n){var r=n("9a0d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("7f7e").default;a("5f0c64c0",r,!0,{sourceMap:!1,shadowMode:!1})},"064d":function(t,e,n){"use strict";n.r(e);var r=n("a5bc"),a=n("df87");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("d14e");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"0d2a1010",null,!1,r["a"],o);e["default"]=c.exports},"13c4":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("74c9").default)})),__definePage("pages/category/category",(function(){return Vue.extend(n("064d").default)})),__definePage("pages/cart/cart",(function(){return Vue.extend(n("2ade").default)})),__definePage("pages/user/user",(function(){return Vue.extend(n("b8ea").default)}))},"24fb":function(t,e,n){"use strict";function r(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"===typeof btoa){var i=a(r),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}function a(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"===typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},2957:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"2ade":function(t,e,n){"use strict";n.r(e);var r=n("f613"),a=n("5879");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},5361:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * \u8fd9\u91cc\u662funi-app\u5185\u7f6e\u7684\u5e38\u7528\u6837\u5f0f\u53d8\u91cf\n *\n * uni-app \u5b98\u65b9\u6269\u5c55\u63d2\u4ef6\u53ca\u63d2\u4ef6\u5e02\u573a\uff08https://ext.dcloud.net.cn\uff09\u4e0a\u5f88\u591a\u4e09\u65b9\u63d2\u4ef6\u5747\u4f7f\u7528\u4e86\u8fd9\u4e9b\u6837\u5f0f\u53d8\u91cf\n * \u5982\u679c\u4f60\u662f\u63d2\u4ef6\u5f00\u53d1\u8005\uff0c\u5efa\u8bae\u4f60\u4f7f\u7528scss\u9884\u5904\u7406\uff0c\u5e76\u5728\u63d2\u4ef6\u4ee3\u7801\u4e2d\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u53d8\u91cf\uff08\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\uff09\uff0c\u65b9\u4fbf\u7528\u6237\u901a\u8fc7\u642d\u79ef\u6728\u7684\u65b9\u5f0f\u5f00\u53d1\u6574\u4f53\u98ce\u683c\u4e00\u81f4\u7684App\n *\n */\n/**\n * \u5982\u679c\u4f60\u662fApp\u5f00\u53d1\u8005\uff08\u63d2\u4ef6\u4f7f\u7528\u8005\uff09\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8fd9\u4e9b\u53d8\u91cf\u6765\u5b9a\u5236\u81ea\u5df1\u7684\u63d2\u4ef6\u4e3b\u9898\uff0c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\n *\n * \u5982\u679c\u4f60\u7684\u9879\u76ee\u540c\u6837\u4f7f\u7528\u4e86scss\u9884\u5904\u7406\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u4f60\u7684 scss \u4ee3\u7801\u4e2d\u4f7f\u7528\u5982\u4e0b\u53d8\u91cf\uff0c\u540c\u65f6\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\n */\n/* \u989c\u8272\u53d8\u91cf */\n/* \u884c\u4e3a\u76f8\u5173\u989c\u8272 */\n/* \u6587\u5b57\u57fa\u672c\u989c\u8272 */\n/* \u80cc\u666f\u989c\u8272 */\n/* \u8fb9\u6846\u989c\u8272 */\n/* \u5c3a\u5bf8\u53d8\u91cf */\n/* \u6587\u5b57\u5c3a\u5bf8 */\n/* \u56fe\u7247\u5c3a\u5bf8 */\n/* Border Radius */\n/* \u6c34\u5e73\u95f4\u8ddd */\n/* \u5782\u76f4\u95f4\u8ddd */\n/* \u900f\u660e\u5ea6 */\n/* \u6587\u7ae0\u573a\u666f\u76f8\u5173 */.index_swiper uni-swiper[data-v-82ab702c]{height:340rpx;width:100%}.index_swiper uni-swiper uni-image[data-v-82ab702c]{width:100%}.index_category[data-v-82ab702c]{width:100%;padding:20rpx 20rpx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.index_category uni-navigator[data-v-82ab702c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:15rpx}.index_category uni-navigator uni-image[data-v-82ab702c]{width:100%}.index_floor[data-v-82ab702c]{margin:30rpx 0;padding:0 20rpx}.index_floor .floor_box[data-v-82ab702c]{margin-bottom:20rpx}.index_floor .floor_box .title[data-v-82ab702c]{width:100%}.index_floor .floor_box .title uni-image[data-v-82ab702c]{width:100%}.index_floor .floor_box .goods_group[data-v-82ab702c]{margin-top:10rpx;margin-bottom:50rpx;overflow:hidden}.index_floor .floor_box .goods_group uni-navigator[data-v-82ab702c]{float:left;width:33.33%;height:55.45422vw}.index_floor .floor_box .goods_group uni-navigator[data-v-82ab702c]:nth-last-child(-n+4){height:27.72711vw}.index_floor .floor_box .goods_group uni-navigator uni-image[data-v-82ab702c]{width:100%;height:100%;padding:5rpx;border-radius:5rpx}',""]),t.exports=e},5879:function(t,e,n){"use strict";n.r(e);var r=n("9f22"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"5d5f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("7393"));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{wxsProps:{}}},components:{SearchInput:r.default}};e.default=i},"60e7":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\u6bcf\u4e2a\u9875\u9762\u516c\u5171css */\n/* //\u5c0f\u7a0b\u5e8f\u4e2d\u4e0d\u652f\u6301\u901a\u914d\u7b26 \u201c*\u201d \u81ea\u5df1\u914d\u7f6e*/html,body,body,uni-view,uni-text,uni-swiper,uni-swiper-item,uni-image,uni-navigator{padding:0;margin:0;box-sizing:border-box}\n/* \u4e3b\u9898\u989c\u8272 \u901a\u8fc7\u53d8\u91cf\u6765\u5b9e\u73b0\n  1.less\u4e2d\u5b58\u5728\u53d8\u91cf\u8fd9\u4e2a\u77e5\u8bc6\n  2.\u539f\u751f\u7684css\u548cwxss\u4e5f\u652f\u6301\u53d8\u91cf\n */html,body,body{font-size:28rpx;\n   /* \u5b9a\u4e49\u4e3b\u9898\u989c\u8272 */--themeColor:#eb4450\n   /* \u5b9a\u4e49\u7edf\u4e00\u7684\u5b57\u4f53\u5927\u5c0f \n      \u5047\u8bbe\u8bbe\u8ba1\u7a3f\u5bbd\u5ea6\u4e3a375px:\n      1px=2rpx;\n      14px=28rpx;\n      \u5047\u8bbe\u8bbe\u8ba1\u7a3f\u5bbd\u5ea6\u4e3a750px;\n      1px=1rpx;\n      14px=14rpx;\n    */}uni-image{width:100%}",""]),t.exports=e},"62a9":function(t,e,n){"use strict";n.r(e);var r=n("be25"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"67ed":function(t,e,n){var r=n("60e7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("7f7e").default;a("3a768e3f",r,!0,{sourceMap:!1,shadowMode:!1})},"691a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};e.default=r},7393:function(t,e,n){"use strict";n.r(e);var r=n("a8a5"),a=n("04f0");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("9bcb");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"2240de3e",null,!1,r["a"],o);e["default"]=c.exports},"74c9":function(t,e,n){"use strict";n.r(e);var r=n("e822"),a=n("62a9");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("bfe9");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"82ab702c",null,!1,r["a"],o);e["default"]=c.exports},"7f7e":function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],o=i[0],u=i[1],c=i[2],s=i[3],f={id:t+":"+a,css:u,media:c,sourceMap:s};r[o]?r[o].parts.push(f):n.push(r[o]={id:o,parts:[f]})}return n}n.r(e),n.d(e,"default",(function(){return v}));var a="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=a&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,s=!1,f=function(){},d=null,l="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,a){s=n,d=a||{};var o=r(t,e);return g(o),function(e){for(var n=[],a=0;a<o.length;a++){var u=o[a],c=i[u.id];c.refs--,n.push(c)}e?(o=r(t,e),g(o)):o=[];for(a=0;a<n.length;a++){c=n[a];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(b(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(b(n.parts[a]));i[n.id]={id:n.id,refs:1,parts:o}}}}function _(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function b(t){var e,n,r=document.querySelector("style["+l+'~="'+t.id+'"]');if(r){if(s)return f;r.parentNode.removeChild(r)}if(p){var a=c++;r=u||(u=_()),e=h.bind(null,r,a,!1),n=h.bind(null,r,a,!0)}else r=_(),e=y.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function h(t,e,n,r){var a=n?"":j(r.css);if(t.styleSheet)t.styleSheet.cssText=x(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function y(t,e){var n=j(e.css),r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),d.ssrId&&t.setAttribute(l,e.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var w=/([+-]?\d+(\.\d+)?)[r|u]px/g,m=/var\(--status-bar-height\)/gi,$=/var\(--window-top\)/gi,k=/var\(--window-bottom\)/gi,C=!1;function j(t){if(!uni.canIUse("css.var")){!1===C&&(C=plus.navigator.getStatusbarHeight());var e={statusBarHeight:C,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(m,e.statusBarHeight+"px").replace($,e.top+"px").replace(k,e.bottom+"px")}return t.replace(/\{[\s\S]+?\}/g,(function(t){return t.replace(w,(function(t,e){return uni.upx2px(e)+"px"}))}))}},"9a0d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".app-category[data-v-0d2a1010]{height:100%}.app-category .category_container[data-v-0d2a1010]{height:calc(100vh - 90rpx);display:-webkit-box;display:-webkit-flex;display:flex}.app-category .category_container .left_menu[data-v-0d2a1010]{-webkit-box-flex:2;-webkit-flex:2;flex:2;color:#333;text-align:center}.app-category .category_container .left_menu uni-view[data-v-0d2a1010]{padding:25rpx 0;font-size:32rpx;box-sizing:border-box}.app-category .category_container .left_menu uni-view.cur[data-v-0d2a1010]{color:var(--themeColor);font-weight:700;border-left:6rpx solid var(--themeColor)}.app-category .category_container .right_content[data-v-0d2a1010]{-webkit-box-flex:5;-webkit-flex:5;flex:5;padding-top:30rpx;border-left:2rpx solid #efefef}.app-category .category_container .right_content .goods_group[data-v-0d2a1010]{width:100%;margin-bottom:80rpx}.app-category .category_container .right_content .goods_title[data-v-0d2a1010]{text-align:center;font-size:32rpx;color:#999;margin:20rpx 0;margin-bottom:40rpx}.app-category .category_container .right_content .goods_title uni-text[data-v-0d2a1010]{color:#333}.app-category .category_container .right_content .goods_list[data-v-0d2a1010]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:start;justify-content:start}.app-category .category_container .right_content .goods_list uni-navigator[data-v-0d2a1010]{width:33.3%;text-align:center;margin-bottom:30rpx}.app-category .category_container .right_content .goods_list uni-image[data-v-0d2a1010]{width:50%;display:block;margin:0 auto}",""]),t.exports=e},"9bcb":function(t,e,n){"use strict";var r=n("da22"),a=n.n(r);a.a},"9f22":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};e.default=r},a5bc:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("search-input",{attrs:{_i:1}}),n("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[n("v-uni-scroll-view",{staticClass:t._$g(3,"sc"),attrs:{"scroll-y":!0,_i:3}},t._l(t._$g(4,"f"),(function(e,r,a,i){return n("v-uni-view",{key:e,class:t._$g("4-"+i,"c"),attrs:{"data-index":t._$g("4-"+i,"a-data-index"),_i:"4-"+i},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v(t._$g("4-"+i,"t0-0"))])})),1),n("v-uni-scroll-view",{staticClass:t._$g(5,"sc"),attrs:{"scroll-top":"ScrollTop","scroll-y":!0,_i:5}},t._l(t._$g(6,"f"),(function(e,r,a,i){return n("v-uni-view",{key:e,staticClass:t._$g("6-"+i,"sc"),attrs:{_i:"6-"+i}},[n("v-uni-view",{staticClass:t._$g("7-"+i,"sc"),attrs:{_i:"7-"+i}},[t._v("/"),n("v-uni-text",{attrs:{_i:"8-"+i}},[t._v(t._$g("8-"+i,"t0-0"))]),t._v("/")],1),n("v-uni-view",{staticClass:t._$g("9-"+i,"sc"),attrs:{_i:"9-"+i}},t._l(t._$g("10-"+i,"f"),(function(e,r,a,o){return n("v-uni-navigator",{key:e,attrs:{url:t._$g("10-"+i+"-"+o,"a-url"),_i:"10-"+i+"-"+o}},[n("v-uni-image",{attrs:{src:t._$g("11-"+i+"-"+o,"a-src"),mode:"widthFix",_i:"11-"+i+"-"+o}}),n("v-uni-text",{attrs:{_i:"12-"+i+"-"+o}},[t._v(t._$g("12-"+i+"-"+o,"t0-0"))])],1)})),1)],1)})),1)],1)],1)},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},a8a5:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-navigator",{attrs:{url:"","open-type":"navigate",_i:1}},[t._v("\u641c\u7d22")])],1)},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},b8ea:function(t,e,n){"use strict";n.r(e);var r=n("2957"),a=n("cf65");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports},be25:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("7393"));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{wxsProps:{}}},components:{SearchInput:r.default}};e.default=i},bfe9:function(t,e,n){"use strict";var r=n("dc89"),a=n.n(r);a.a},cf65:function(t,e,n){"use strict";n.r(e);var r=n("691a"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},d14e:function(t,e,n){"use strict";var r=n("0562"),a=n.n(r);a.a},da22:function(t,e,n){var r=n("e369");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("7f7e").default;a("0e20b861",r,!0,{sourceMap:!1,shadowMode:!1})},dc89:function(t,e,n){var r=n("5361");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("7f7e").default;a("86e528e0",r,!0,{sourceMap:!1,shadowMode:!1})},df35:function(t,e,n){"use strict";n.r(e);var r=n("67ed"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},df87:function(t,e,n){"use strict";n.r(e);var r=n("5d5f"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},e369:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * \u8fd9\u91cc\u662funi-app\u5185\u7f6e\u7684\u5e38\u7528\u6837\u5f0f\u53d8\u91cf\n *\n * uni-app \u5b98\u65b9\u6269\u5c55\u63d2\u4ef6\u53ca\u63d2\u4ef6\u5e02\u573a\uff08https://ext.dcloud.net.cn\uff09\u4e0a\u5f88\u591a\u4e09\u65b9\u63d2\u4ef6\u5747\u4f7f\u7528\u4e86\u8fd9\u4e9b\u6837\u5f0f\u53d8\u91cf\n * \u5982\u679c\u4f60\u662f\u63d2\u4ef6\u5f00\u53d1\u8005\uff0c\u5efa\u8bae\u4f60\u4f7f\u7528scss\u9884\u5904\u7406\uff0c\u5e76\u5728\u63d2\u4ef6\u4ee3\u7801\u4e2d\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u53d8\u91cf\uff08\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\uff09\uff0c\u65b9\u4fbf\u7528\u6237\u901a\u8fc7\u642d\u79ef\u6728\u7684\u65b9\u5f0f\u5f00\u53d1\u6574\u4f53\u98ce\u683c\u4e00\u81f4\u7684App\n *\n */\n/**\n * \u5982\u679c\u4f60\u662fApp\u5f00\u53d1\u8005\uff08\u63d2\u4ef6\u4f7f\u7528\u8005\uff09\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u8fd9\u4e9b\u53d8\u91cf\u6765\u5b9a\u5236\u81ea\u5df1\u7684\u63d2\u4ef6\u4e3b\u9898\uff0c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\n *\n * \u5982\u679c\u4f60\u7684\u9879\u76ee\u540c\u6837\u4f7f\u7528\u4e86scss\u9884\u5904\u7406\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728\u4f60\u7684 scss \u4ee3\u7801\u4e2d\u4f7f\u7528\u5982\u4e0b\u53d8\u91cf\uff0c\u540c\u65f6\u65e0\u9700 import \u8fd9\u4e2a\u6587\u4ef6\n */\n/* \u989c\u8272\u53d8\u91cf */\n/* \u884c\u4e3a\u76f8\u5173\u989c\u8272 */\n/* \u6587\u5b57\u57fa\u672c\u989c\u8272 */\n/* \u80cc\u666f\u989c\u8272 */\n/* \u8fb9\u6846\u989c\u8272 */\n/* \u5c3a\u5bf8\u53d8\u91cf */\n/* \u6587\u5b57\u5c3a\u5bf8 */\n/* \u56fe\u7247\u5c3a\u5bf8 */\n/* Border Radius */\n/* \u6c34\u5e73\u95f4\u8ddd */\n/* \u5782\u76f4\u95f4\u8ddd */\n/* \u900f\u660e\u5ea6 */\n/* \u6587\u7ae0\u573a\u666f\u76f8\u5173 */.app-searchinput[data-v-2240de3e]{background:var(--themeColor);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.app-searchinput uni-navigator[data-v-2240de3e]{width:100%;height:70rpx;color:#333;margin:0 10rpx 10rpx;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;border-radius:15rpx}',""]),t.exports=e},e4ca:function(t,e,n){"use strict";function r(){function t(t){var e=n("df35");e.__inject__&&e.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}n("13c4"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},e822:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[n("search-input",{attrs:{_i:1}}),n("v-uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[n("v-uni-swiper",{staticClass:t._$g(3,"sc"),attrs:{"indicator-active-color":"#fff","indicator-dots":!0,autoplay:!0,interval:"3000",circular:!0,_i:3}},t._l(t._$g(4,"f"),(function(e,r,a,i){return n("v-uni-swiper-item",{key:e,attrs:{_i:"4-"+i}},[n("v-uni-navigator",{attrs:{url:t._$g("5-"+i,"a-url"),"open-type":t._$g("5-"+i,"a-open-type"),_i:"5-"+i}},[n("v-uni-image",{attrs:{src:t._$g("6-"+i,"a-src"),mode:"widthFix",_i:"6-"+i}})],1)],1)})),1)],1),n("v-uni-view",{staticClass:t._$g(7,"sc"),attrs:{_i:7}},t._l(t._$g(8,"f"),(function(e,r,a,i){return n("v-uni-navigator",{key:e,attrs:{url:"/pages/category/category","open-type":"switchTab",_i:"8-"+i}},[n("v-uni-image",{attrs:{mode:"widthFix",src:t._$g("9-"+i,"a-src"),_i:"9-"+i}})],1)})),1),n("v-uni-view",{staticClass:t._$g(10,"sc"),attrs:{_i:10}},t._l(t._$g(11,"f"),(function(e,r,a,i){return n("v-uni-view",{key:e,staticClass:t._$g("11-"+i,"sc"),attrs:{_i:"11-"+i}},[n("v-uni-view",{staticClass:t._$g("12-"+i,"sc"),attrs:{_i:"12-"+i}},[n("v-uni-image",{attrs:{src:t._$g("13-"+i,"a-src"),mode:"widthFix",_i:"13-"+i}})],1),n("v-uni-view",{staticClass:t._$g("14-"+i,"sc"),attrs:{_i:"14-"+i}},t._l(t._$g("15-"+i,"f"),(function(e,r,a,o){return n("v-uni-navigator",{key:e,attrs:{url:t._$g("15-"+i+"-"+o,"a-url"),"open-type":"navigate",_i:"15-"+i+"-"+o}},[n("v-uni-image",{attrs:{src:t._$g("16-"+i+"-"+o,"a-src"),_i:"16-"+i+"-"+o}})],1)})),1)],1)})),1)],1)},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,a,i,o,u,c,s){var f,d="function"===typeof t?t.options:t;if(c){d.components||(d.components={});var l=Object.prototype.hasOwnProperty;for(var p in c)l.call(c,p)&&!l.call(d.components,p)&&(d.components[p]=c[p])}if(s&&((s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(d.mixins||(d.mixins=[])).push(s)),e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=f):a&&(f=u?function(){a.call(this,this.$root.$options.shadowRoot)}:a),f)if(d.functional){d._injectStyles=f;var v=d.render;d.render=function(t,e){return f.call(e),v(t,e)}}else{var g=d.beforeCreate;d.beforeCreate=g?[].concat(g,f):[f]}return{exports:t,options:d}}n.d(e,"a",(function(){return r}))},f613:function(t,e,n){"use strict";var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},i=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},f78c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};e.default=r}});