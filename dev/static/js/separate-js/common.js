

$(document).ready(function () {

	Global.threeSlider({
		slider: '.third-slider',
		sliderItem: '.news'
	});

	if (typeof window.document.createElement('div').style.webkitLineClamp !== 'undefined') {
	    document.querySelector('html').classList.add('webkit-line-clamp');
	}

	$('.page-tab').on('click touchstart ', function () {
		$(this).toggleClass('is-active');
		$(this).next('.section').toggleClass('is-active');


		Global.dotsSlider({
			slider: '.synk-slider'
		});

		Global.simpleSlider({
			slider: '.single-slider',
			sliderItem: '.event'
		});

	});

	// Global.initParallax({
	// 	parent: '#parallax'
	// });
	// Global.initParallax({
	// 	parent: '#parallax2'
	// });

	// Global.fourSlider({
	// 	slider: '.four-slider'
	// });



	// Global.arrowSlider({
	// 	slider: '.arrow-slider'
	// });

	// if($(document).width() > 768) {
		Global.dotsSlider({
			slider: '.synk-slider'
		});

		Global.simpleSlider({
			slider: '.single-slider',
			sliderItem: '.event'
		});
	// }

	if($(document).width() < 1020) {
		Global.simpleSlider({
			slider: '.startscreen-slider',
			sliderItem: '.startscreen-slider__item'
		});
	}

	// Global.pictureSlider({
	// 	slider: '.picture-slider'
	// });

	// Global.tab();

	// Global.square({
	// 	widthEl: '.four-slider__item',
	// 	heightEl: '.four-slider__content',
	// 	offset: 25
	// });

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

$(window).on('resize', function () {

	Global.simpleSlider({
		slider: '.startscreen-slider',
		sliderItem: '.startscreen-slider__item'
	});


	Global.dotsSlider({
		slider: '.synk-slider'
	});


});