// pagetop
$(function() {
	var pagetop = $("#pagetopBtn");	
	$(window).on("scroll",function () {
		var scrTop = $(this).scrollTop();
		scrTop > 170 ? pagetop.fadeIn() : pagetop.fadeOut();
	
//		var fbbtn_pos = $("#footer").offset().top;
//		var target_pos = scrTop + $(window).height(); 
//
//		if(target_pos > fbbtn_pos) {
//			pagetop.addClass("btm");
//		}else {
//			pagetop.removeClass("btm");
//		}
	});
});

// Smooth Scroll
$(function() {
	$('a[href^=#]').on('click',function(){
		var speed = 500;
		var target= $(this).attr("href");
		if($(target).length && !(target === "#" || target === "")){
			var position = $(target).offset().top;
			$("html, body").animate({scrollTop:position}, speed, "swing");
		}
		return false;
	});
});

// fixHeight

    $(function(){
      $('.fixHeight').children().matchHeight();
    });

// tel_link

$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
        $('.tel_link').each(function(){
            var str = $(this).text();
            $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }
});

// gnavi

$(function() {

	var dir = location.href.split("/");
	var category = dir[3];
	if(category){
		$("#gnavi a").each(function(){
			var href = $(this).attr("href");
			if(href.indexOf(category) !== -1){
				$(this).parent().addClass("current");
			}else {
				$(this).parent().removeClass("current");
			}
		});
	}

});


// mainMenu

$(function(){
	$("#gnavi .navi > li" ).hover(
		function(){
				$(this).parent("li > ul").hide();
				$(this).children("ul").slideToggle();
		},
		function(){
				$(this).children("ul").hide();
		}
	);

});


// acordion

  $(function(){
        $(".categoryLink dt,.accordion dt,.boxarea01 h2").on("click", function() {
            $(this).next().slideToggle();
						$(this).toggleClass("active");
        });

        $(".boxarea01 .close").on("click", function() {
            $(this).parent().parent().slideToggle();
            $(".boxarea01 h2").removeClass();
        });


});

function include_php(file_url,insert){
	$.ajax({
	    url: file_url,
	    type: "post",
	    dataType: "html"
	}).done(function (response) {
	    $(insert).html(response);
	}).fail(function () {
	    $(insert).html('<!-- failed -->');
	});

}


