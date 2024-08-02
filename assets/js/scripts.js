// scroll.js

$(document).ready(function () {
    $('a[href*=#]').each(function () {
        if ($(window).width() > 760) { // Restringe a atuação apenas a resoluções superiores a 760px
            var target = $(this.hash);
            if (target.length) {
                var targetOffset = target.offset().top;
                $(this).click(function () {
                    $('html, body').animate({ scrollTop: targetOffset }, 300);
                    return false;
                });
            }
        }
    });
});
