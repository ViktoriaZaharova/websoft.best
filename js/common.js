$(document).ready(function () {
    // Мобильное меню
    $(".menu-btn").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".header-menu").toggleClass("active");
    });

    // Плавный скролл
    $(".go_to").click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href'), top = $(id).offset().top - $('.header').innerHeight();
        $('html,body').animate({ scrollTop: top }, 500);
        if ($(window).width() < 768) $(".header-menu").removeClass("active");
    });

    // Мультиязычность
    $(".language-switcher a").click(function (e) {
        e.preventDefault();
        var lang = $(this).data("lang");
        $(".language-switcher a").removeClass("active");
        $(this).addClass("active");
        $("[data-lang-" + lang + "]").each(function () { $(this).text($(this).data("lang-" + lang)); });
    });

    // Анимация появления при скролле
    function reveal() {
        $('.features-section, .portfolio-section, .templates-section, .howto-section, .contact-section').each(function () {
            var sectionTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > sectionTop - 50) {
                $(this).addClass('visible');

                $(this)
                    .find('.feature-card, .portfolio-card, .template-card, .howto-step, .contact-form-wrap')
                    .each(function (i) {
                        var $el = $(this);
                        setTimeout(function () {
                            $el.addClass('visible');
                        }, i * 150);
                    });
            }
        });
    }
    $(window).on('scroll load', reveal);

});