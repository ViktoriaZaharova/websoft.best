$(document).ready(function () {
    $('.slider1').slick({
        slidesToShow: 1,
        vertical: true,
        speed: 1000,
        verticalSwiping: true,
        arrows: true,
        asNavFor: ".main-slider",
        appendArrows: $('.third-arrows'),
        prevArrow: '<div class="main-arrow-prev third-arrow"><img src="img/arrow-back.svg" alt=""></div>',
        nextArrow: '<div class="main-arrow-next third-arrow"><img src="img/arrow-next.svg" alt=""></div>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    swipe: false
                }
            }
        ]
    });

    $('.slider2').slick({
        slidesToShow: 1,
        vertical: true,
        speed: 1000,
        arrows: false,
        verticalSwiping: true,
        cssEase: 'ease-in-out',
        asNavFor: ".main-slider",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    swipe: false
                }
            }
        ]
    });

    $('.slider3').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".main-slider",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    swipe: false
                }
            }
        ]
    });

    $('.slider4').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".main-slider",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    swipe: false
                }
            }
        ]
    });
    $('.slider5').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        speed: 1000,
        verticalSwiping: true,
        asNavFor: ".main-slider",
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    swipe: false
                }
            }
        ]
    });

    $('.price-slider').slick({
        slidesToShow: 1,
        speed: 1000,
        dots: false,
        arrows: false,
        fade: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    touchMove: false
                }
            }
        ]
    });

    // slider arrows my-style
    $('.price-slider__arrow .main-arrow-next').on('click', function () {
        $('.price-slider').slick('slickNext');
    });


    $('.price-slider__arrow .main-arrow-prev').on('click', function () {
        $('.price-slider').slick('slickPrev');
    });
    // slider arrows my-style


    //Меню на мобильном
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');
        $('.menu-list').toggleClass('active');
        $('.menu-overlay').toggleClass('active');
    });

    // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    //Скрытие меню после 2сек
    if ($(window).width() > 992) {
        setTimeout(function () {
            $('.menu-list').removeClass('active');
            $('.menu-btn').removeClass('active');
        }, 2000);
    }


    //плавный скролл
    $(document).ready(function () {
        $('.menu-item-link').click(function () {
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length !== 0) {
                $('html, body').animate({
                    scrollTop: $(scroll_el).offset().top
                }, 500);
            }

            $('.menu-list').addClass('active');
            $('.menu-btn').addClass('active');
            $('.menu-overlay').removeClass('active');

            return false;


        });


    });
    //плавный скролл end



});


$(window).on('load', function () {
    $('.preloader').delay(3700).fadeOut(1000);
});







