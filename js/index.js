$(function () {

    var btnEvent = $('.float');
    btnEvent.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            btnEvent.slideDown();
        } else {
            btnEvent.fadeOut();
        }
    });
});