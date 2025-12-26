$(document).ready(function () {

	//прилипающие меню
	var $menu = $(".header");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
			$menu.removeClass("default").addClass("fixed");
		} else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}

	});

	if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
		$menu.removeClass("default").addClass("fixed");
	} else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}


	//кнопка sandwich
	$(".sandwich").click(function () {
		if ($(".menu-mobile").is(":hidden")) {
			$(".sandwich").addClass("active");
			$(".header").addClass("active");
			$(".menu-mobile").slideDown(200);
			$(".menu-overlay").fadeIn(200);
			$("body").addClass("no-scroll");
		} else {
			$(".sandwich").removeClass("active");
			$(".header").removeClass("active");
			$(".menu-mobile").slideUp(200);
			$(".menu-overlay").fadeOut(200);
			$("body").removeClass("no-scroll");
		}
	});

	$(".menu-overlay").click(function () {
		$(".sandwich").removeClass("active");
		$(".header").removeClass("active");
		$(".menu-mobile").slideUp(200);
		$(".menu-overlay").fadeOut(200);
		$("body").removeClass("no-scroll");
	});

	$(".menu__haschild > i").click(function () {
		if ($(this).siblings("ul").is(":hidden")) {
			$(this).siblings("ul").slideDown(200);
			$(this).parent().addClass("active");
		} else {
			$(this).siblings("ul").slideUp(200);
			$(this).parent().removeClass("active");
		}
	});


	/*input file*/
	$("input[type='file']").change(function () {
		var filename_text = $(this).parent().siblings(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});

	//questions
	$(".item-question__head").click(function () {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	});

	//слайдер

	$('.slider-cases').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.slider-documents').slick({
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	$('.nav-article a').on('click', function (e) {
		e.preventDefault();

		var targetId = $(this).attr('href');
		var headerHeight = $('.header').outerHeight();

		$('html, body').animate({
			scrollTop: $(targetId).offset().top - headerHeight
		}, 800);
	});



	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


});
