var searchObj = {
	name : "地址搜索页",
	dom : $('#address'),
	init : function(){
		this.bindEvent();
	},
	bindEvent : function(){
		console.log('绑定事件');
	},
	enter : function(){
		//进入该模块
		console.log('我要进行360度旋转进入');
		this.dom.show();
	},
	leave : function(){
		//离开该模块
		this.dom.hide();
	}
}