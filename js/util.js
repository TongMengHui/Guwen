(function(_mui){
	_mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	return $util;
})(mui);

var $util={
	//上啦加载
	pullRefresh:function(dom,callback){
		mui.init({
		  pullRefresh : {
			container:dom,//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
			up : {
			  height:50,//可选.默认50.触发上拉加载拖动距离
			  auto:false,//可选,默认false.自动上拉加载一次
			  contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
			  contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
			  callback :function(){
				  callback(function(){
					  this.endPullupToRefresh(false);
				  }.bind(this));
				  //this.endPullupToRefresh(false);
			  } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			}
		  }
		});
	},
	//弹窗
	dialog(options){
		var __popup__=document.createElement('div');
		__popup__.setAttribute('class','mui-popup');
		document.body.appendChild(__popup__);
	}
}

