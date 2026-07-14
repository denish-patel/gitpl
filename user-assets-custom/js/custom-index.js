$(function () {
    "use strict";

//    $(".dropdown a").click(function (e) { // target any selector
//        e.preventDefault();
//        $('.index  .sub-sub-menu-hs .managedservices').css({'display': 'none'});
//        $('.index .sub-sub-menu-hs .cloudsolution,.index .sub-sub-menu-hs .hardware,.index .sub-sub-menu-hs .software,.index .sub-sub-menu-hs .security').css({'display': 'none'});
//    });

    $('#topbar .smallLogo img, #topbar .smallLogo span').css('display', 'none');

    $(window).scroll(function () {
        var sticky = $('.st'),
                scroll = $(window).scrollTop();

        if (scroll >= 200) {
            sticky.addClass('sticky-topbar');
            $('#topbar .smallLogo img, #topbar .smallLogo span').css('display', 'inline-block');
        } else {
            sticky.removeClass('sticky-topbar');
            $('#topbar .smallLogo img, #topbar .smallLogo span').css('display', 'none');
        }
    });

    // ============================================================== 
    // Home Page Navbar Menu
    // ============================================================== 
    var allLink = $('.sub-sub-menu-hs .cloudsolution,.sub-sub-menu-hs .hardware,.sub-sub-menu-hs .software,.sub-sub-menu-hs .security');
    var managedservice = $('.sub-sub-menu-hs .managedservices');

    allLink.css({'display': 'none'});
    managedservice.css({'display': 'none'});
    

    
    $('.sub-menu-hs .csmenu').click(function () {
        if ($(window).width() >= 950) {
            if ($('.sub-sub-menu-hs .cloudsolution').css("display") === "flex") {
                allLink.css({'display': 'none'});
            } else {
                allLink.css({'display': 'none'});
                $('.sub-sub-menu-hs .cloudsolution').css({'display': 'flex'});
            }
        } else {
            if ($('.sub-sub-menu-hs .cloudsolution').css("display") === "block") {
                allLink.css({'display': 'none'});
            } else {
                allLink.css({'display': 'none'});
                $('.sub-sub-menu-hs .cloudsolution').css({'display': 'block'});
            }
        }
    });

    $('.sub-menu-hs .hwmenu').click(function () {
        if ($(window).width() >= 950) {
            if ($('.sub-sub-menu-hs .hardware').css("display") === "flex") {
                allLink.css({'display': 'none'});
            } else {
                allLink.css({'display': 'none'});
                $('.sub-sub-menu-hs .hardware').css({'display': 'flex'});
            }
        } else {
            if ($('.sub-sub-menu-hs .hardware').css("display") === "block") {
                allLink.css({'display': 'none'});
            } else {
                allLink.css({'display': 'none'});
                $('.sub-sub-menu-hs .hardware').css({'display': 'block'});
            }
        }
    });

    $('.sub-menu-hs .swmenu').click(function () {
        if ($(window).width() >= 950) {
            if ($('.sub-sub-menu-hs .software').css("display") === "flex") {
                allLink.css({'display': 'none'});
            } else {
                allLink.css({'display': 'none'});
                $('.sub-sub-menu-hs .software').css({'display': 'flex'});
            }
        } else {
            if ($('.sub-sub-menu-hs .software').css("display") === "block") {
                allLink.css({'display': 'none'});
            } else {
                allLink.css({'display': 'none'});
                $('.sub-sub-menu-hs .software').css({'display': 'block'});
            }
        }
    });

    $('.sub-menu-hs .symenu').click(function () {
        if ($(window).width() >= 950) {
            if ($('.sub-sub-menu-hs .security').css("display") === "flex") {
                allLink.css({'display': 'none'});
            } else {
                allLink.css({'display': 'none'});
                $('.sub-sub-menu-hs .security').css({'display': 'flex'});
            }
        } else {
            if ($('.sub-sub-menu-hs .security').css("display") === "block") {
                allLink.css({'display': 'none'});
            } else {
                allLink.css({'display': 'none'});
                $('.sub-sub-menu-hs .security').css({'display': 'block'});
            }
        }
    });

    //Service Menu
    $('.sub-menu-hs .msmenu').click(function () {
        if ($(window).width() >= 950) {
            if (managedservice.css("display") === "flex") {
                managedservice.css({'display': 'none'});
            } else {
                managedservice.css({'display': 'none'});
                managedservice.css({'display': 'flex'});
            }
        } else {
            if (managedservice.css("display") === "block") {
                managedservice.css({'display': 'none'});
            } else {
                managedservice.css({'display': 'none'});
                managedservice.css({'display': 'block'});
            }
        }
    });


    //Number animation INDEX PAGE 
    $(window).scroll(function (){
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        $('.startanimation').each(function (i){
            var bottom_of_object = $('.facts').offset().top + $('.facts').outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object){
                $('.lines-1 span').animateNumber({number: 200, numberStep: comma_separator_number_step}, 2000);
                $('.lines-2 span').animateNumber({number: 250, numberStep: comma_separator_number_step}, 2000);
                $('.lines-3 span').animateNumber({number: 4000, numberStep: comma_separator_number_step}, 2000);
                $('.lines-4 span').animateNumber({number: 20, numberStep: comma_separator_number_step}, 2000);
                $('.lines-5 span').animateNumber({number: 100, numberStep: comma_separator_number_step}, 2000);

                $('#formfade').addClass('fadeInRight');
            }
        });
    });
});