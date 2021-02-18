$(function () {
    var videos = $(".main__video");

    videos.on("click", function () {
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

$(document).ready(function () {
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


function toggleMenu(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    else if (window.event) {
        window.event.cancelBubble = true;
    }
    const asideMenu = document.querySelector('#aside');
    const body = document.querySelector('body');
    asideMenu.classList.toggle('aside--shown');

    if (asideMenu.classList.contains('aside--shown')) {
        asideMenu.style.transform = 'translate(0px)';
        body.style.overflow = 'hidden';
    } else {
        asideMenu.style.transform = 'translate(-320px)';
        body.style.overflow = 'auto';
    }
}

function initMenu() {
    const asideMenu = document.querySelector('#aside');
    asideMenu.classList.remove('aside--shown');
    asideMenu.style.transform = 'translate(-320px)';
}

function closeMenu() {
    initMenu();
    document.querySelector('body').style.overflow = 'auto';
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
        initMenu();
    }
})

window.addEventListener('click', (e) => {
    e.stopPropagation();
    const aside = document.querySelector("#aside");
    if (outsideClick(e, aside)) {
        closeMenu()
    }
});


function outsideClick(event, notelem) {
    notelem = $(notelem);
    var clickedOut = true, i, len = notelem.length;
    for (i = 0; i < len; i++) {
        if (event.target == notelem[i] || notelem[i].contains(event.target)) {
            clickedOut = false;
        }
    }
    if (clickedOut) return true;
    else return false;
}