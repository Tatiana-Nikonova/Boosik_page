$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:3,
		speed:1000
	});
	$('.category').slick({
		arrows:true,
		slidesToShow:6,
		slidesToScroll:1,
		speed:1000
	});
});


