$(function(){
	SmoothScroll({ stepSize: 60 });
	$('.gallery .img-wr').hover(function(){
		$(this).find(".hover-effect").css("display","block");
	},function(){
		$(this).find(".hover-effect").css("display","none");
	});
});