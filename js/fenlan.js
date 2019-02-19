$.fn.toolBar =  function changeBar(firstAction,sectionAction){
    <!--firstAction事件-->
    $("#doing").click(function(){
        var index = $(".g-nav-list").find("li[class=selected]").index();
        if(index == 0)return;
        changeBtnState();
        if(firstAction){
            firstAction();
        }
    });
    <!--sectionAction事件-->
    $("#end").click(function(){
        var index = $(".g-nav-list").find("li[class=selected]").index();
        if(index == 1)return;
        changeBtnState();
        if(sectionAction){
            sectionAction();
        }
    });
}

<!--切换按钮状态-->
function changeBtnState(){
    $(".g-nav-list li").each(function(index){
        if($(this).attr("class")=="selected"){
            $(this).attr("class","none");
        }else{
            $(this).attr("class","selected");
        }
    });
}