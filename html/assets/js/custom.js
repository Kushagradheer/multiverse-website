(function ($) {

    "use strict";

    // Page Ready

    // Header Scrolling Set White Background
    scrollNavBar();


    // Window Resize Mobile Menu Fix
    mobileNav();
    welcomeFix();


    // Welcome Area background image
    if($('.welcome-area-1').length){
        $('.welcome-area-1 .image-content').imgfix();
    }

    // // Welcome area init
    if ($('.owl-carousel').length) {
        var welcomeSlider = $(".owl-carousel");
        welcomeSlider.owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1.5
                },
                600: {
                    items: 2.5
                },
                1000: {
                    items: 2.5
                },
                1920: {
                    items: 3.5
                }
            }
        });

        checkClasses();
        welcomeSlider.on('translated.owl.carousel', function (event) {
            checkClasses();
        });

        function checkClasses() {
            var total = $('.owl-carousel .owl-stage .owl-item.active').length;

            $('.owl-carousel .owl-stage .owl-item').removeClass('firstActiveItem');

            $('.owl-carousel .owl-stage .owl-item.active').each(function (index) {
                if (index === 0) {
                    $(this).addClass('firstActiveItem');
                }
            });
        }

        $('.base .prev').click(function () {
            welcomeSlider.trigger('prev.owl.carousel');
        });

        $('.base .next').click(function () {
            welcomeSlider.trigger('next.owl.carousel');
        });
    }


    // Menu Dropdown Toggle
    if($('.menu-trigger').length){
        $(".menu-trigger").on('click', function() {
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }


    // Scroll animation init
    window.sr = new scrollReveal();


    // Home number counterup
    if($('.count-item').length){
        $('.count-item strong').counterUp({
            delay: 10,
            time: 1000
        });
    }


    // App single gallery
    if($('.gallery').length && $('.gallery-item').length){
        $('.gallery-item').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
            }
        });
    }


    // Page standard gallery
    if($('.page-gallery').length && $('.page-gallery-wrapper').length){
        $('.page-gallery').imgfix({
            scale: 1.1
        });

        $('.page-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
            }
        });
    }


    // About Us Image
    if($('.about-image').length){
        $('.about-image').imgfix({
            scale: 1.1
        });
    }


    // Blog cover image
    if($('.blog-post-thumb').length){
        $('.blog-post-thumb .img').imgfix();
    }


    // Services page cover image
    if($('.services-post').length){
        $('.services-post .img').imgfix();
    }


    // Page loading animation
    $(window).on('load', function() {
        if($('.cover').length){
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }

        $(".loader-wrapper").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                // Parallax init
                if($('.parallax').length){
                    $('.parallax').parallax({
                        imageSrc: 'assets/images/photos/parallax.jpg',
                        zIndex: '1'
                    });
                }
                $(".loader-wrapper").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });



    // Header Scrolling Set White Background
    $(window).on('scroll', function() {
        scrollNavBar();
    });


    // Window Resize Mobile Menu Fix
    $(window).on('resize', function() {
        mobileNav();
        welcomeFix();
    });


    // Window Resize Mobile Menu Fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function() {
            if(width < 992) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }


    // Navbar Scroll Set White Background Function
    function scrollNavBar() {
        var width = $(window).width();
        if($('.header-white').length) {
            return false;
        }else{
            if(width > 991) {
                var scroll = $(window).scrollTop();
                if (scroll >= 30) {
                    $(".header-area").addClass("header-sticky");
                    $(".header-area .dark-logo").css('display', 'block');
                    $(".header-area .light-logo").css('display', 'none');
                }else{
                    $(".header-area").removeClass("header-sticky");
                    $(".header-area .dark-logo").css('display', 'none');
                    $(".header-area .light-logo").css('display', 'block');
                }
            }
        }
    }

    // Welcome area set position
    function welcomeFix() {
        if($('.welcome-area-1').length){
            var height = $(window).height();
            var wwidth = $(window).width();

            if(wwidth > 992) {
                var sliderPosition = ($('.slider-position').offset().left);

                $('.slider-wrapper').css({
                    'left': sliderPosition,
                    'width': wwidth - sliderPosition,
                    'position': 'absolute'
                });
            }else{
                $('.slider-wrapper').css({
                    'left': '0px',
                    'width': '100%',
                    'position': 'relative'
                });
            }
        }
    }


})(window.jQuery);