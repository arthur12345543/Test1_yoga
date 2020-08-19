$(function(){
	SmoothScroll({ stepSize: 60 });
	$('.gallery .img-wr').hover(function(){
		$(this).find(".hover-effect").css("display","block");
	},function(){
		$(this).find(".hover-effect").css("display","none");
	});
	$('.carousel').slick({
		accessibility: true,
		arrows: true,
		autoplay: true,
	});
	$('.main-testimonial').slick({
		accessibility: true,
		arrows: true,
		autoplay: true
	});
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
});