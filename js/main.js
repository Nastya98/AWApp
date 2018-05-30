$(function(){
	//Hamburger menu
	$('.menu-burger, .menu-list').on('click', function() {
  		$('.menu-bg, .menu-list, .menu-burger').toggleClass('fs');
  		$('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
  		if ($('body').hasClass('no-scrolling')) {
            $('body').removeClass('no-scrolling');
        } 
        else {
            ('body').addClass('no-scrolling');
        }
	});
	//Change menu's color
    var scroll_start = 0;
   	var startchange = $('#about');
   	var endchange = $('#app-gallery');
   	var offsets = startchange.offset();
   	var offsete = endchange.offset();
   	$(document).scroll(function() { 
    	scroll_start = $(this).scrollTop();
    	if(scroll_start > offsets.top && scroll_start < offsete.top ) {
    		$('.menu-burger').css({'color': '#333'});
       	} else {
          	$('.menu-burger').css({'color': '#fff'});
       	}
   	});
	//Hidden search input
	$('.icon-search').click(function(){
		$('.hidden-input-search').fadeToggle();
	});
	//Smooth scroll
	$(".menu-list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
	});
	//Slider
	$('.next').click(function(){
		var currentSlide = $('.slide.active'),
			currentSlideIndex = $('.slide.active').index(),
			nextSlideIndex = $('.slide.active').index() + 1,
			nextSlide = $('.slide').eq(nextSlideIndex);

		currentSlide.removeClass('active').fadeOut(300);
		if(nextSlideIndex == ($('.slide:last').index() + 1 )){
			$('.slide').eq(0).fadeIn(300).addClass('active');
		} else{
			nextSlide.fadeIn(300).addClass('active');
		}
	});
	$('.prev').click(function(){
		var currentSlide = $('.slide.active'),
			currentSlideIndex = $('.slide.active').index(),
			prevSlideIndex = $('.slide.active').index() - 1,
			prevSlide = $('.slide').eq(prevSlideIndex);

		currentSlide.fadeOut(300).removeClass('active');
		prevSlide.fadeIn(300).addClass('active');
	});
});