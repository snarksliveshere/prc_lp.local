$(document).ready(function () {

    var body = $('body');
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
    } // end of Resize > 768

});
