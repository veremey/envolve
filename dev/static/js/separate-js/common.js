

$(document).ready(function () {

	if (typeof window.document.createElement('div').style.webkitLineClamp !== 'undefined') {
	    document.querySelector('html').classList.add('webkit-line-clamp');
	}


	$('.contact__input, .contact__textarea').change(function () {
		var $this = $(this);

		if( $this.val().length > 0 ) {
			$this.addClass('has-content');
		} else {
			$this.removeClass('has-content');
		}
	});



	var zoom = detectZoom.zoom();
	if(zoom > 1.5) {
		$('.section__s').css({
			'display': 'none'
		});
		$('.page-tab').css({
			'display': 'block'
		});
		$('.mod_s').css({'padding': '0 0 40px'})
	}

	$('.header__skip').click(function (e) {
		e.preventDefault();
		var goTo = $(this).attr('href');
		$('#' + goTo).focus();
	});

	$('.page-tab').click(function () {
		var $this = $(this);
		$(this).toggleClass('is-active');
		$(this).next('.section').toggleClass('is-active');

		$this.next('.section').find('.slick-slider').slick('slickNext');

	});



		Global.dotsSlider({
			slider: '.synk-slider'
		});
		// -----------------------------------------
		//* --- replace slick dots before slider
		var $dots = $('.synk-slider').find('.slick-dots');
		$('.synk-slider').prepend($dots);



		Global.simpleSlider({
			slider: '.single-slider',
			sliderItem: '.event'
		});


		Global.designSlider({
			slider: '.design-slider',
			sliderItem: '.event'
		});
		Global.designerSlider({
			slider: '.designer-slider',
			sliderItem: '.event'
		});

		Global.threeSlider({
			slider: '.third-slider',
			sliderItem: '.news'
		});


	if($(document).width() < 1020) {
		Global.simpleSlider({
			slider: '.startscreen-slider',
			sliderItem: '.startscreen-slider__item'
		});
	}


	$('.burger').click(function () {
		$(this).toggleClass('is-active');
		$('.nav, .header__wrap, .page__wrapper').toggleClass('is-active');
	});

	$('.menu__item_search a').on('click touchstart ', function(e) {
		e.preventDefault();

		$('.header__wrap').addClass('is-active');
		$('.search__input').val('');
	});


	$(document).on('click touchstart ', function(e) {
		var $target = $('.search__input');

		if (!$target.is(e.target) && !$('.menu__item_search *').is(e.target) ) {

			var item = e.target;
			$target.removeClass('is-active');
			$('.header__wrap').removeClass('is-active');
			$('.search__input').val('');

		} else {
			var item = e.target;
			$target.addClass('is-active');
		}

	});




	AOS.init({
		initClassName: 'aos-init',
		animatedClassName: 'aos-animate',
	});


});
/*- end doc ready -*/


/*-   resize doc  -*/

// $(window).on('resize', function () {

// 	Global.simpleSlider({
// 		slider: '.startscreen-slider',
// 		sliderItem: '.startscreen-slider__item'
// 	});


// 	Global.dotsSlider({
// 		slider: '.synk-slider'
// 	});


// });