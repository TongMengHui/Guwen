// (function(_mui){

// 	return $util;
// })(mui);

(function(){
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	var BASEURL='http://39.98.77.177:8080';
	function __createDialog__(options){
		var __popup__=document.createElement('div');
		var __body__=document.createElement('div');
		var __title__=document.createElement('div');
		var __text__=document.createElement('textarea');
		var __footer__=document.createElement('div');
		var __btn1__=document.createElement('input');
		var __btn2__=document.createElement('input');
		
		__title__.setAttribute('class','c-d-title');
		__title__.innerText=options.title||'文本输入';
		
		__text__.setAttribute('rows',15);
		__text__.setAttribute('placeholder',options.placeholder||'请输入文字...');
		__text__.setAttribute('maxlength',options.max);
		
		__footer__.setAttribute('class','flex-row-between c-d-footer');
		__btn1__.setAttribute('type','button');
		__btn2__.setAttribute('type','button');
		__btn1__.setAttribute('value','取消');
		__btn2__.setAttribute('value','确认');
		__btn1__.setAttribute('class','c-b-cancel');
		__btn1__.addEventListener('touchend',function(){
			if(options.cancel){
				options.cancel();
			}
			__closeDialog__();
		});
		__btn2__.addEventListener('touchend',function(){
			if(options.confirm){
				var _ctx=__text__.value.trim();
				if(!_ctx){
					mui.toast('内容不可为空!');
				}else{
					options.confirm(_ctx);
					__closeDialog__();
				}
			}
		});
		__footer__.appendChild(__btn1__);
		__footer__.appendChild(__btn2__);
		
		__body__.appendChild(__title__);
		__body__.appendChild(__text__);
		__body__.appendChild(__footer__);
		
		__popup__.setAttribute('class','c-dialog');
		__popup__.appendChild(__body__);
		return __popup__;
	}
	
	function __closeDialog__(){
		mui('.c-dialog')[0].style.display='none';
	}
	
	
	
	window.$util={
		//http methods
// 		options说明:{
// 			type:post/get,
// 			data:提交参数,
// 			success:成功回调,
// 			fail:失败回调
// 		}
		http(url,options){
			mui.ajax(BASEURL+url,{
				headers:{
					'Content-Type':'application/json',
					'id_token':window.__TOKEN__||''
				},
				data:options.data || {},
				dataType:'json',//服务器返回json格式数据
				type:options.type || 'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				success:function(data){
					if(options.success)
						options.success(data)
				},
				error:function(xhr,type,errorThrown){
					console.log(xhr)
					if(xhr.status=='401'){
						//需要重新登陆
					}else{
						mui.toast('HTTP CODE: '+xhr.status);
					}
// 					if(options.fail)
// 						options.fail(xhr,type,errorThrown);
				}
			});
		},
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
			if(document.getElementsByClassName('c-dialog').length){
				mui('.c-dialog')[0].style.display='flex';
			}else{
				var _opt=options||{};
				var __node__=__createDialog__(_opt);
				document.body.appendChild(__node__);
			}
		}
	}
})();


