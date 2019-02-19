$('li').on('touchstart',function(){
	$(this).addClass('choose').siblings().removeClass('choose');
	$('.nextStep').attr('disabled','false');
	$('.nextStep>p').css({'color':'#ffffff','background-color':'#CA9C68'})
})