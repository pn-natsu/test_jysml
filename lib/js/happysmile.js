
$(function() {

$(window).on('load',function(){

$('.smilelist > ul li').each(function(){
	var dt = $(this).find('dt');
	var img = dt.find('img');
	if(dt.width() < img.attr('width')) {
		img.wrap('<a href="'+img.attr('src')+'" class="boxer icon"></a>');
		dt.find('a').magnificPopup({
			type:'image',
			mainClass: 'mfp-with-zoom',
			zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
		});
	}
});

});

$(window).on('load resize',function(){
	$('.smilelist > ul li dt').attr('data-mh','smph').matchHeight();
});

});
