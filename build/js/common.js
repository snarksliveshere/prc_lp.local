$(document).ready(function () {

    var body = $('body');
    var mql = window.matchMedia('all and (max-width: 767px)');
    if (mql.matches) {

    } // end of resize < 768
    else {
        console.log('in');
        // $('.good_tabs .tabset li').click(function () {
        //     var ind = $(this).index();
        //     $(this).addClass('active gradient').siblings().removeClass('active gradient');
        //     // $('.good_tabs .tab').eq(ind).addClass('active').siblings().removeClass('active');
        //     $(this).parents('.good_tabs').find('.tab').eq(ind).addClass('active').siblings().removeClass('active');
        // });
        $('.review__item ').click(function () {
            $(this).find('a').eq(0).addClass('active');
            $(this).siblings().children().removeClass('active');
            var good = $(this).data('item');
            var tab = $('.review__bg-item');
            tab.attr('data-bg', good);
            // tab.find('span').eq($(this).index).addClass('active').siblings().removeClass('active');
            $('.review__bg-head').find('span').eq($(this).index()).addClass('active').siblings().removeClass('active');



            console.log($(this).index());
            return false;
        })
    } // end of Resize > 768

});
