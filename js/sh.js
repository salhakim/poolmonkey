$(function () {
    var northfaceLogo = $("#sbLogo");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 800) {
            northfaceLogo.removeClass('invisible').addClass("visible");
        } else {
            northfaceLogo.removeClass("visible").addClass('invisible');
        }
    });
});