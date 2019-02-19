	//图片预加载
	var images = new Array()  
    function preload() {  
        for (i = 0; i < preload.arguments.length; i++) {  
            images[i] = new Image()  
            images[i].src = preload.arguments[i] 
            mui.toast(i);
        }  
    }  
    preload(  
        "img/cpda4.png",  
        "img/cpda2.png",  
        "img/photo.png"  
    ) 