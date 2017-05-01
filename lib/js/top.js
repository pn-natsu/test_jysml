(function($){

$(function() {
	var crsbox = $(".top_mv .crs");
	if(crsbox.length){
	var crs = crsbox.find("ul");
//	var prev = crsbox.find(".prev");
//	var next = crsbox.find(".next");
	var dots =$(".top_mv .dots");
			crs.slick({
				autoplay : true,
				autoplaySpeed : 3000,
	//			prevArrow : prev,
	//			nextArrow : next,
				dots: true,
				centerMode: true,
				appendArrows: ('#arrows'),
				appendDots:dots
		});
	crsbox.css("height","auto").css("overflow","visible");

	}
});



})(jQuery);