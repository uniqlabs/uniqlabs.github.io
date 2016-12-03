$(document).ready(function () {
    var a = $('.arrow');
    var nb = $('#nav');
    var st = $(this).scrollTop();

    if (st > 20)
        stopAnimation();
    else
        a.delay(2500).fadeIn(1000);
    if (st > 300)
        nb.hide();
    else
        nb.show();

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 20)
            stopAnimation();
        else
            a.show();
        if (st > 300)
            nb.fadeOut();
        else
            nb.fadeIn();
    });

    $('.slides').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        respondTo: 'min',
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.card').flip({
        axis: 'x',
        trigger: 'hover',
        speed: 300
    });

    function stopAnimation() {
        a.stop();
        a.hide();
        a.removeClass('bounce');
    }
});