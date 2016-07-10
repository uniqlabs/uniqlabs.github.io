$(document).ready(function () {
    $('#slides').bxSlider({
        auto: true,
        speed: 1000,
        pause: 8000,
        mode: 'fade',
        controls: false
    });

    $('.navbar-fixed-top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('.navbar-fixed-top').fadeIn();
        } else {
            $('.navbar-fixed-top').fadeOut();
        }
    });
});