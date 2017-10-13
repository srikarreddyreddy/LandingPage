(function($) {
    'use strict';

    // All JavaScript pluging initialization code here

    //mobile meanmenu
    $('.mobile-menu').meanmenu();

    // Portfolio activation
    $('.portfolio-section').imagesLoaded(function() {
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        })

        // Portfolio filtering activation
        $('.portfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // Filter menu active class addition  
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // LOAD MORE BUTTON FOR PORTFOLIO
        $('.load-more-btn').on('click', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-grid').isotope();
            $(this).hide();
            $('.portfolio-section .load-more').append('<a class="button load-more-btn" href="javascript:void(0)">No More Items</a>')
            event.preventDefault();
        });
    });
    // MAGNIFIC POPUP LIGHTBOX IMAGE GALLERY
    $('.preview-icon').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {
            enabled: true
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('data-title');
            }
        }
    });
    
    // WOW JS
    new WOW().init();

    //Venobox
    $('.venobox').venobox();

    // TESTIMONIAL SLIDER
    $('.testimonial-wrapper').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 1 } },
            { breakpoint: 479, settings: { slidesToShow: 1 } },
        ]
    });

    // Single Portfolio
    $('.single-project-wrapper').slick({
        dots: true,
        arrows: false,
        autoPlay: true,
        speed: 500,
        autoPlaySpeed: 3000,
        infinite: true,
        fade: true,
        easing: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // Single Project
    $('.blog-post-wrapper').slick({
        dots: true,
        arrows: false,
        autoPlay: true,
        speed: 500,
        autoPlaySpeed: 3000,
        infinite: true,
        fade: true,
        easing: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // TESTIMONIAL SLIDER
    $('.slider-wrapper').slick({
        dots: false,
        arrows: true,
        autoPlay: true,
        speed: 500,
        autoPlaySpeed: 3000,
        infinite: true,
        fade: true,
        easing: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                arrows: false
            }
        }, ]
    });

    // Instagram Feed JS activation
    var userFeed = new Instafeed({
        get: 'user',
        limit: '6',
        userId: '4713066548',
        accessToken: '4713066548.8d3ef49.6942ccf6893b404185d88e24f7d56229',
        template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>'
    });
    userFeed.run();

    //YoutubeVideo
    $('#video-slide').YTPlayer({
        fitToBackground: true,
        videoId: 'GkYuNHS-D1Q',
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            branding: 0,
            rel: 0,
            autohide: 0,
            start: 0
        }
    });

    /*-------------------------------------------
      SCROLL TO TOP BUTTON
    ---------------------------------------------*/
    $('body').append('<a id="back-to-top" class="to-top-btn" href="#"><i class="fa fa-angle-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    };


    // Overlay search pagination-area
    $('.search-toggle-button').on('click', function() {
        $('.full-width-search-wrapper').toggleClass('search-wrapper-show')
    });
    $('.search-closer').on('click', function() {
        $('.full-width-search-wrapper').toggleClass('search-wrapper-show')
    });


})(jQuery)
