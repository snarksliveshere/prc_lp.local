$(document).ready(function () {

    var body = $('body');

    // sticky header
    function fixedPanel() {
        var doc = document.documentElement;
        var scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var offsetTop = $('.header__top').position().top + $('.header__top').height();
        if (scrollTop > offsetTop) {
            body.addClass('fixed_top_panel').css('padding-top', $('.header__top').height());
        } else {
            body.removeClass('fixed_top_panel').css('padding-top', '0');
        }
    }

    var mql = window.matchMedia('all and (max-width: 767px)');
    if (mql.matches) {

    } // end of resize < 768
    else {
        $('.review__item ').click(function () {
            $(this).find('a').eq(0).addClass('active');
            $(this).siblings().children().removeClass('active');
            var good = $(this).data('item');
            var tab = $('.review__bg-item');
            tab.attr('data-bg', good);
            $('.review__bg-head').find('span').eq($(this).index()).addClass('active').siblings().removeClass('active');
            // TODO: здесь возможно пойдет аякс, поэтому мне return false уже не нужен
            return false;
        })

        // TODO: тут странно
        $('.registration__form input, .registration__form textarea').attr('placeholder', '');

        // запускаем sticky
        fixedPanel();
        $(document).scroll(function () {
            fixedPanel();
        });

    } // end of Resize > 768

    // выпадайка на всплывающей форме "спасибо за регистрацию"
    $('.modal__form-dropdown li').click(function () {
        $(this).parent().toggleClass('active');
    });
    // маска для телефона
    body.on('focusin', '.phone', function () {
        $(this).mask('+7 (999) 999-99-99');
    });

    // плавный скролл
    if(window.location.pathname=='/'){
        $("body").on("click", "a.scroll_link", function (event) {
            event.preventDefault();
            var id = $(this.hash);
            var top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }

    // увеличиваем счетчик
    var show = true;
    var countbox = '.profit';
    $(window).on("scroll load resize", function(){
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 1200
            });
            show = false;
        }
    });

    // jsDesc: fancybox
    $(".fancybox").fancybox({
        buttons: ['close']
    });
    $('[data-event]').on('click', function () {
        if ($(this).data('event') == 'fancy') {
            $.fancybox.open({
                src: '#' + $(this).data('name'),
                slideClass: 'modal_forms',
            });
        }
    });

    // var carouselopts = {
    //     responsive: [{
    //         breakpoint: 99999,
    //         settings: "unslick"
    //     },{
    //         breakpoint: 768,
    //         settings: {
    //             centerMode: true,
    //             centerPadding: '25%',
    //             arrows: false,
    //             infinite: false
    //         }
    //     }]
    // };

    $('.advantages__slider, .testimonials__wrap').slick({
        dots: true,
        autoplay: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                    breakpoint: 99999,
                    settings: "unslick"
            },
            // {
            //     breakpoint: 992,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var reviewMenu = $('.review__menu');
    reviewMenu.on('init reInit beforeChange edge setPosition afterChange swipe lazyLoaded breakpoint', function (event, slick, currentSlide, nextSlide) {
        reviewMenu.find('.slick-track').css('transform', 'none');
    });

    // $('.review__bg-wrap').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     autoplay: true,
    //     asNavFor: '.review__menu'
    // });
    // reviewMenu.slick({
    //     slidesToShow: 7,
    //     asNavFor: '.review__bg-wrap',
    //     dots: false,
    //     swipe: false,
    //     waitForAnimate: false,
    //     slidesPerRow: 7,
    //     infinite: false,
    //     accessibility: false,
    //     centerMode: true,
    //     autoplay: false
    //
    //     // focusOnSelect: true
    // });
    // $('.review__menu .slick-track').css('transform','none', 'left', 0);
    
    $('.sandwitch').click(function () {
        $('.header__rollup').fadeIn();
    });
    $('.close_header_mobile-menu').click(function () {
        $('.header__rollup').fadeOut('fast');
    });


});

