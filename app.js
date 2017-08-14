$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.mainHeader').addClass('is-fixed');
	} else {
		$('.mainHeader').removeClass('is-fixed');
	}
})