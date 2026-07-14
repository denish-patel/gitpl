$(function () {
    "use strict";
    
    $('#topbar .smallLogo img, #topbar .smallLogo span').css('display', 'none');
    
    $(window).scroll(function () {
        var sticky = $('.st'),
            scroll = $(window).scrollTop();
        
        if (scroll >= 200){
            sticky.addClass('sticky-topbar');
            $('#topbar .smallLogo img, #topbar .smallLogo span').css('display', 'inline-block');
        }else{
            sticky.removeClass('sticky-topbar');
            $('#topbar .smallLogo img, #topbar .smallLogo span').css('display', 'none');
        }
    });
    
    // ============================================================== 
    // Other Page Navbar Menu
    // ============================================================== 
    var allLink = $('.sub-sub-menu-hs .cloudsolution,.sub-sub-menu-hs .hardware,.sub-sub-menu-hs .software,.sub-sub-menu-hs .security');
    var managedservice = $('.sub-sub-menu-ps .managedservices');
    $('.backtomenu-hs, .backtomenu-ps').css({'display':'none'});
    
    allLink.css({'display': 'none'});
    managedservice.css({'display': 'none'});
    $('.sub-sub-menu-hs').css({'display': 'none'});

    /*back menu*/
    $('.backtomenu-hs').click(function () {
        $('.sub-menu-hs').css({'display': 'block'}); //sub menu
        $('.sub-sub-menu-hs').css({'display': 'none'}); //sub sub menu
    });
    $('.backtomenu-ps').click(function () {
        $('.sub-menu-ps').css({'display': 'block'}); //sub menu
        $('.sub-sub-menu-ps').css({'display': 'none'}); //sub sub menu
    });

    $('.sub-menu-hs .csmenu').click(function () {
        $('.sub-menu-hs').css({'display': 'none'}); //sub menu        
        if ($('.sub-sub-menu-hs .cloudsolution').css("display") === "flex") {
            allLink.css({'display': 'none'});
            $('.sub-menu-hs').css({'display': 'block'}); //sub menu
        } else {
            allLink.css({'display': 'none'});
            $('.backtomenu-hs').css({'display':'block'});
            $('.sub-sub-menu-hs').css({'display': 'block'});
            $('.sub-sub-menu-hs .cloudsolution').css({'display': 'flex'});
        }
    });

    $('.sub-menu-hs .hwmenu').click(function () {
        $('.sub-menu-hs').css({'display': 'none'});
        if ($('.sub-sub-menu-hs .hardware').css("display") === "flex") {
            allLink.css({'display': 'none'});
            $('.sub-menu-hs').css({'display': 'block'}); //sub menu
        } else {
            allLink.css({'display': 'none'});
            $('.backtomenu-hs').css({'display':'block'});
            $('.sub-sub-menu-hs').css({'display': 'block'});
            $('.sub-sub-menu-hs .hardware').css({'display': 'flex'});
        }
    });

    $('.sub-menu-hs .swmenu').click(function () {
        $('.sub-menu-hs').css({'display': 'none'});
        if ($('.sub-sub-menu-hs .software').css("display") === "flex") {
            allLink.css({'display': 'none'});
            $('.sub-menu-hs').css({'display': 'block'}); //sub menu
        } else {
            allLink.css({'display': 'none'});
            $('.backtomenu-hs').css({'display':'block'});
            $('.sub-sub-menu-hs').css({'display': 'block'});
            $('.sub-sub-menu-hs .software').css({'display': 'flex'});
        }
    });

    $('.sub-menu-hs .symenu').click(function () {
        $('.sub-menu-hs').css({'display': 'none'});
        if ($('.sub-sub-menu-hs .security').css("display") === "flex") {
            allLink.css({'display': 'none'});
            $('.sub-menu-hs').css({'display': 'block'});
        } else {
            allLink.css({'display': 'none'});
            $('.backtomenu-hs').css({'display':'block'});
            $('.sub-sub-menu-hs').css({'display': 'block'});
            $('.sub-sub-menu-hs .security').css({'display': 'flex'});
        }
    });

    //Service Menu
    $('.sub-menu-ps .msmenu').click(function () {
         $('.sub-menu-ps').css({'display': 'none'});
        if (managedservice.css("display") === "flex") {
            managedservice.css({'display': 'none'});
            $('.sub-menu-ps').css({'display': 'block'});
        } else {
            managedservice.css({'display': 'none'});
            $('.backtomenu-ps').css({'display':'block'});
            $('.sub-sub-menu-ps').css({'display': 'block'});
            managedservice.css({'display': 'flex'});
        }
    });

});