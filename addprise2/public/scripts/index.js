//父类，点赞后count+1
class PraiseButton {
	constructor(element,limit,callback) {
		this.count = 0;
		this.element=element;
		this.limit=limit;
		this.callback=callback;
		this.clickElement();
	}
	addPraise() {
		this.count= addOne(this.count);
	}
	clickElement(){
		var _this=this;
		var op=function(){
			if ( (_this.count+1) >=_this.limit ) {
				//变为灰色
				$(this).css('filter','grayscale(100%)');
				$(this).unbind("click");
			}
			_this.addPraise();
			_this.showAnimate();
			_this.callback();
		}
		//绑定节流函数
		var createThrottle=throttle(op,1000);
		$(this.element).find('.hand').click(function(){
			createThrottle();
		});
	}
	showAnimate() {
		let addone = $('<div class="hand-small">+'+this.count+'</div>');
		$(this.element).find('.hand').append(addone);
		$(addone).addClass('animate');
	}
}
class Thumb extends PraiseButton {
	constructor({element,limit,callback}) {
		super(element,limit,callback);
	}
}
 export default Thumb;
