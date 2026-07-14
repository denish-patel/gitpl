$(function () {
    "use strict";
    console.log("Start Javascript Functions is working properly..");

    $(window).load(function () {
        if ($(window).width() >= 950) {
            $('.topbar-inline li #qcMenu').css('display', 'none');
        } else {
            $('.topbar-inline li #qcMenu').css('display', 'block');
        }
    });
    $(window).resize(function () {
        if ($(window).width() >= 950) {
            $('.topbar-inline li #qcMenu').css('display', 'none');
        } else {
            $('.topbar-inline li #qcMenu').css('display', 'block');
        }
    });

    // ============================================================== 
    //Search Icon TOpbar
    // ============================================================== 
    $('.searchText').click(function () {
        $('.searchbtn .search-input input.form-control').val('');
        $('.searchbtn .search-input input.form-control').toggleClass('open');

        var a = $('.searchbtn .search-input input.form-control');
        if (a.hasClass('open')) {
            $('.topbar-inline li.dk').css('display', 'none');
            $('.topbar-inline li #qcMenu').css('display', 'none');
        } else {
            if ($(window).width() >= 950) {
                setTimeout(function () {
                    $('.topbar-inline li.dk').css('display', 'inline-block');
                }, 1000);
            } else {
                setTimeout(function () {
                    $('.topbar-inline li #qcMenu').css({'display': 'block'});
                }, 1000);
            }
        }
    });


    // ============================================================== 
    //scroll top trigger
    // ============================================================== 
    $(".scroll_top").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    // ============================================================== 
    // on scroll animate scrolltop image 
    // ============================================================== 
    $(window).scroll(function (event) {
        if ($(this).scrollTop() > 180) {
            if (!$(".scroll_top").hasClass("done")) {
                $(".scroll_top").animate({
                    right: "+=48px"
                });
                $(".scroll_top").addClass("done");
            }
        } else {
            if ($(".scroll_top").hasClass("done")) {
                $(".scroll_top").animate({
                    right: "-51px"
                });
                $(".scroll_top").removeClass("done");
            }
        }
    });

    // ============================================================== 
    //mega-dropdown
    // ============================================================== 
    jQuery(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation();
    });

    // ============================================================== 
    //tooltip
    // ============================================================== 
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // ============================================================== 
    //Popover
    // ============================================================== 
    $(function () {
        $('[data-toggle="popover"]').popover();
    });

    /****************************************************************/
    $('ul .dropdown-menu').on('click', function (event) {
        event.stopPropagation();
    });

    // ============================================================== 
    //collapse
    // ============================================================== 
    $('.collapse').collapse({
        toggle: false
    });






    // ============================================================== 
    //Menu Filter
    // ============================================================== 
    /*$('.toggle-btn').click(function () {
     $('.filter-btn').toggleClass('open');
     });
     $('.filter-btn a').click(function () {
     $('.filter-btn').removeClass('open');
     });
     $(".filter-btn").draggable();*/

//    $('label.tree-toggler').click(function () {
//        $(this).parent().children('ul.tree').toggle(300);
//    });


    // ============================================================== 
    // This is for the top header part and sidebar part
    // ==============================================================  
    /*var set = function() {
     var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
     var topOffset = 0;
     if (width < 1170) {
     $("body").addClass("mini-sidebar");
     $('.navbar-brand span').hide();
     $(".sidebartoggler i").addClass("ti-menu");
     } else {
     $("body").removeClass("mini-sidebar");
     $('.navbar-brand span').show();
     }
     
     var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
     height = height - topOffset;
     if (height < 1) height = 1;
     if (height > topOffset) {
     $(".page-wrapper").css("min-height", (height) + "px");
     }
     };
     $(window).ready(set);
     $(window).on("resize", set);*/

    // ============================================================== 
    // Theme options
    // ==============================================================     
    /*$(".sidebartoggler").on('click', function() {
     if ($("body").hasClass("mini-sidebar")) {
     $("body").trigger("resize");
     $("body").removeClass("mini-sidebar");
     $('.navbar-brand span').show();
     
     } else {
     $("body").trigger("resize");
     $("body").addClass("mini-sidebar");
     $('.navbar-brand span').hide();
     }
     });*/

    // this is for close icon when navigation open in mobile view
    /*$(".nav-toggler").click(function() {
     $("body").toggleClass("show-sidebar");
     $(".nav-toggler i").toggleClass("ti-menu");
     $(".nav-toggler i").addClass("ti-close");
     });
     
     $(".search-box a, .search-box .app-search .srh-btn").on('click', function() {
     $(".app-search").toggle(200);
     });*/
    // ============================================================== 
    // Right sidebar options
    // ============================================================== 
    /*$(".right-side-toggle").click(function() {
     $(".right-sidebar").slideDown(50);
     $(".right-sidebar").toggleClass("shw-rside");
     });*/
    // ============================================================== 
    // This is for the floating labels
    // ============================================================== 
    /*$('.floating-labels .form-control').on('focus blur', function(e) {
     $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
     }).trigger('blur');*/

    // ============================================================== 
    // Auto select left navbar
    // ============================================================== 
    /*$(function() {
     var url = window.location;
     var element = $('ul#sidebarnav a').filter(function() {
     return this.href == url;
     }).addClass('active').parent().addClass('active');
     while (true) {
     if (element.is('li')) {
     element = element.parent().addClass('in').parent().addClass('active');
     } else {
     break;
     }
     }
     });*/

    // ============================================================== 
    // Sidebarmenu
    // ============================================================== 
    /* $(function() {
     $('#sidebarnav').AdminMenu();
     });*/

    // ============================================================== 
    // Perfact scrollbar
    // ============================================================== 
    /*$('.scroll-sidebar, .right-side-panel, .message-center, .right-sidebar').perfectScrollbar();*/

    // ============================================================== 
    // Resize all elements
    // ============================================================== 
    /*$("body").trigger("resize");*/
    // ============================================================== 
    // To do list
    // ============================================================== 
    /*$(".list-task li label").click(function() {
     $(this).toggleClass("task-done");
     });*/



    // ============================================================== 
    // Collapsable cards
    // ==============================================================
    /*$('a[data-action="collapse"]').on('click', function(e) {
     e.preventDefault();
     $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
     $(this).closest('.card').children('.card-body').collapse('toggle');
     });*/
    // Toggle fullscreen
    /*$('a[data-action="expand"]').on('click', function(e) {
     e.preventDefault();
     $(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
     $(this).closest('.card').toggleClass('card-fullscreen');
     });*/

    // Close Card
    /*$('a[data-action="close"]').on('click', function() {
     $(this).closest('.card').removeClass().slideUp('fast');
     });*/

});