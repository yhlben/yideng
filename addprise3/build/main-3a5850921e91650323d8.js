!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){n(1),n(2),n(3),t.exports=n(4)},function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function(){function t(e,n,r){o(this,t),this.count=0,this.element=e,this.limit=n,this.callback=r,this.clickElement()}return c(t,[{key:"addPraise",value:function(){this.count=addOne(this.count)}},{key:"clickElement",value:function(){var t=this,e=function(){t.count+1>=t.limit&&($(this).css("filter","grayscale(100%)"),$(this).unbind("click")),t.addPraise(),t.showAnimate(),t.callback()},n=throttle(e,1e3);$(this.element).find(".hand").click(function(){n()})}},{key:"showAnimate",value:function(){var t=$('<div class="hand-small">+'+this.count+"</div>");$(this.element).find(".hand").append(t),$(t).addClass("animate")}}]),t}(),a=function(t){function e(t){var n=t.element,i=t.limit,c=t.callback;return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,c))}return i(e,t),e}(u);e.default=a},function(t,e){},function(t,e,n){"use strict"},function(t,e,n){"use strict"}]);