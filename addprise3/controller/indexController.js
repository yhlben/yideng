"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,n){function t(o,a){try{var u=r[o](a),i=u.value}catch(e){return void n(e)}if(!u.done)return Promise.resolve(i).then(function(e){t("next",e)},function(e){t("throw",e)});e(i)}return t("next")})}}Object.defineProperty(exports,"__esModule",{value:!0});var _praiseModel=require("../models/praiseModel.js"),_praiseModel2=_interopRequireDefault(_praiseModel),indexController={index:function(){var e=this;return function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function r(n,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.render("index",{title:"点赞项目"});case 2:n.body=e.sent;case 3:case"end":return e.stop()}},r,e)}));return function(e,n){return r.apply(this,arguments)}}()},addpraise:function(){var e=this;return function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function r(n,t){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_praiseModel2.default.addpraise();case 2:o=e.sent,console.log(o),n.body=o;case 5:case"end":return e.stop()}},r,e)}));return function(e,n){return r.apply(this,arguments)}}()},selectpraise:function(){var e=this;return function(){var r=_asyncToGenerator(regeneratorRuntime.mark(function r(n,t){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_praiseModel2.default.selectpraise();case 2:o=e.sent,console.log(o),n.body=o;case 5:case"end":return e.stop()}},r,e)}));return function(e,n){return r.apply(this,arguments)}}()}};exports.default=indexController;