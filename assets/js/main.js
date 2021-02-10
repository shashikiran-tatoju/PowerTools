$(document).ready(function(){

	// Slick Slider
	
	$(".slider").slick({
	   slidesToShow: 1,
	   slidesToScroll: 1,
	   autoplay: true,
	   autoplaySpeed: 2000,
	});

	// Search Pop up

	$(".search-pop").on("click", function() {
		$(".pop").toggle(".pop");
	});

	$(".close").on("click", function() {
		$(".pop").toggle(".pop");
	});
	
});