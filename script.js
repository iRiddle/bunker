$(function() {
    var videos = $(".main__video");

    videos.on("click", function() {
        var elm = $(this),
            conts = elm.contents(),
            le = conts.length,
            ifr = null;

        for (var i = 0; i < le; i++) {
            if (conts[i].nodeType == 8) ifr = conts[i].textContent;
        }

        elm.addClass("player").html(ifr);
        elm.off("click");
    });
});

$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: $('.slider-arrows__prev'),
        nextArrow: $('.slider-arrows__next')
    });
});