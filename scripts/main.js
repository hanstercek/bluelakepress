$( document ).ready(function() {

    // Baseline pages layout
    var numPages = 15;
    var pageWidth = $('#tmp-page').width();
    var pagesWidth = (numPages - 2) * pageWidth;
    var winWidth = $(window).width()

    $('#page-wrapper').css('right', -pagesWidth);
    $('#page-cover').css('width', winWidth - (pageWidth * 2));

    // Populate pages
    loadPages(numPages);
    genMarquee(winWidth);

    var navToggle = false;
    $('#nav-button').on('click', function() {
        var op = (navToggle) ? 0 : 1;
        var disp = (navToggle) ? 'visible' : 'hidden';
        var navSize = (navToggle) ? '.5em' : '1.5em';
        var navLeft = (navToggle) ? '0px' : '60px';
        var maskBack = (navToggle) ? 'none': 'no-repeat center/60% url("img/pixel_hand.png")';
        $('#nav-wrapper').css({'opacity': op});
        $('#nav-mask').css({'background': maskBack, 'opacity': op});
        $('#nav').css({'font-size': navSize, 'left': navLeft});
        navToggle = !navToggle;
    });

    // (function() {
    //     function scrollHorizontally(e) {
    //         e = window.event || e;
    //         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    //         document.documentElement.scrollLeft -= (delta*10); // Multiplied by 40
    //         document.body.scrollLeft -= (delta*10); // Multiplied by 40
    //         e.preventDefault();
    //       }
    //         if (window.addEventListener) {
    //             // IE9, Chrome, Safari, Opera
    //             window.addEventListener("mousewheel", scrollHorizontally, false);
    //             // Firefox
    //             window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    //         } else {
    //             // IE 6/7/8
    //             window.attachEvent("onmousewheel", scrollHorizontally);
    //         }
    //     });
});

function loadPages(numPages) {
    for (var i = 1; i < numPages; i++) {
        $('#page-wrapper').append('<div class="page" id="page' + i + '"><img src="img/zines/zine1/page' + i + '.jpg" alt="page' + i + '" /></div>');
    }
    $('.photo').show();
    console.log($('#page-wrapper').css('width'));
}

function movePages(pagesWidth) {
    var scrolled = Math.round(($(window).scrollTop()));
    $('#page-wrapper').css('right', scrolled - pagesWidth);
}

function genMarquee(winWidth) {
    var scrollWidth = $('#scrolling').width();
    while (scrollWidth < winWidth) {
        $('#scrolling').append(' >> scroll >>> scroll');
        scrollWidth = $('#scrolling').width();
    }
    console.log(winWidth)
    console.log(scrollWidth)
}