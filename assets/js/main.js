$(document).ready(function () {
    var a = $('.arrow');
    var nb = $('#nav');
    var st = $(this).scrollTop();

    if (st > 20)
        stopAnimation();
    else
        a.delay(2500).fadeIn(1000);
    if (st > 200)
        nb.hide();
    else
        nb.show();

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 20)
            stopAnimation();
        else
            a.show();
        if (st > 200)
            nb.fadeOut();
        else
            nb.fadeIn();
    });

    $('#arrow').click(function (e) {
        e.preventDefault();
        scrollToElement($('#what'));
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

    var fni = $('#firstName');
    var ei = $('#email');
    var sb = $('#submit');
    var sbHtml = sb.html();
    var sr = $('#signupRow');
    var dr = $('#disclaimerRow');
    var ar = $('#alertRow');
    var sa = $('#signupAlert');

    $('#signup').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) return;
        ar.hide();
        var firstName = fni.val();
        var email = ei.val();
        e.preventDefault();
        signUp(firstName, email)
    });

    function scrollToElement(el) {
        $('html,body').animate({scrollTop: el.offset().top}, 400);
    }

    function stopAnimation() {
        a.stop();
        a.hide();
        a.removeClass('bounce');
    }

    function signUp(firstName, email) {
        setBusy(true);
        var s = {type: 'POST', contentType: 'application/json'};
        s.data = {firstName: firstName, email: email};
        s.data[r('zntvp')] = r('tjHFzT35mzrhthupR5Ej5AEDX4QiaaTe');
        s[r('hey')] = r('uggcf://havd-fvtahc.urebxhncc.pbz/hfref');
        s.data = JSON.stringify(s.data);
        s.success = function () {
            setBusy(false);
            showAlert(true, firstName);
        };
        s.error = function (jqxhr, status, err) {
            console.log('jqXHR: ' + JSON.stringify(jqxhr));
            console.log('Status: ' + status);
            console.log('Error: ' + err);
            setBusy(false);
            showAlert(false);
        };
        $.ajax(s);
    }

    function setBusy(b) {
        fni.prop('disabled', b);
        ei.prop('disabled', b);
        sb.prop('disabled', b);
        sb.html(b ? '<i class="fa fa-spinner fa-pulse fa-lg"></i>' : sbHtml);
    }

    function showAlert(success, name) {
        sa.removeClass(success ? 'alert-danger' : 'alert-success');
        sa.addClass(success ? 'alert-success' : 'alert-danger');
        if (success) {
            sa.html('<i class="green fa fa-check fa-lg fa-fw"></i>' +
                '&nbsp;Danke für Deine Anmeldung, ' + name + '. Du hörst innerhalb der nächsten Tage von uns.');
            sr.hide();
            dr.hide();
        } else
            sa.html('<i class="red fa fa-close fa-lg fa-fw"></i>' +
                '&nbsp;Beim Senden ging leider etwas schief. Bitte probiere es nochmal.');
        ar.show();
    }

    function r(s) {
        return s.replace(/[a-zA-Z]/g, function (c) {
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
        });
    }
});