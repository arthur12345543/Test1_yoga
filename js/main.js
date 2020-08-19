/*
	Test task
	for dZENcode front end position
	arthur952010@gmail.com 
*/
$(function(){
	SmoothScroll({ stepSize: 60 });
	$('.gallery .img-wr').hover(function(){
		$(this).find(".hover-effect").css("display","block");
	},function(){
		$(this).find(".hover-effect").css("display","none");
	});
	$('.plan-items .content .buy-now1').hover(function(){
		$(".item1 .title").css("box-shadow","0px 5px 20px 0px rgb(91 108 235)");
	},function(){
		$(".item1 .title").css("box-shadow","none");
	});
	$('.plan-items .content .buy-now2').hover(function(){
		$(".item2 .title").css("box-shadow","0px 5px 20px 0px rgb(91 108 235)");
	},function(){
		$(".item2 .title").css("box-shadow","none");
	});
	$('.plan-items .content .buy-now3').hover(function(){
		$(".item3 .title").css("box-shadow","0px 5px 20px 0px rgb(91 108 235)");
	},function(){
		$(".item3 .title").css("box-shadow","none");
	});
	//about us slide
	$('.carousel').slick({
		accessibility: true,
		arrows: true,
		autoplay: true,
	});
	$('.main-testimonial').slick({//nothing but don't touch while it's working
		accessibility: true,
		arrows: true,
		autoplay: true
	});

	//slides for testimonials
	$('.slider-nav').on('init', function(event, slick) {
 		$('.slider-nav .slick-slide.slick-current').addClass('is-active');
 	}).slick({
		slidesToShow: 1,
 		slidesToScroll: 1,
 		dots: false,
 		arrows: false,
 		focusOnSelect: false,
 		infinite: false
	});
	
	$('.main-testimonial').on('afterChange', function(event, slick, currentSlide){
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.slider-nav').on('click', '.slick-slide', function(event){
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');

		$('.main-testimonial').slick('slickGoTo', goToSingleSlide);
	});

	//smooth scroll all achors links
	$('a[href*=\\#]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});