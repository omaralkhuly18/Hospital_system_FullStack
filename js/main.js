document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header-menu-area');

    window.addEventListener('scroll', function () {
        if (window.innerWidth <= 991 && window.innerWidth >= 230) {
            if (window.scrollY > 0) {
                header.classList.add('fixed-header');
            } else {
                header.classList.remove('fixed-header');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.position_top_bar');

    window.addEventListener('scroll', function () {
        if (window.innerWidth <= 991 && window.innerWidth >= 230) {
            if (window.scrollY > 0) {
                header.classList.add('fixed-header');
            } else {
                header.classList.remove('fixed-header');
            }
        }
    });
});

// $(document).ready(function () {
//     // عند التمرير على العنصر
//     $('.section_eight_simple .owl-item').hover(
//         function() {
//             // عند تمرير الفأرة على العنصر
//             $(this).closest('.owl-stage-outer').css('overflow', 'visible');
//             $(this).closest('body').css('overflow', 'hidden');
//         },
//         function() {
//             // عند إزالة الفأرة من العنصر
//             $(this).closest('.owl-stage-outer').css('overflow', 'hidden');
//             $(this).closest('body').css('overflow', 'visible');
//         }
//     );
// });

document.addEventListener('DOMContentLoaded', function () {
    // استرجاع التبويبة من معلمة الـ URL أو الـ hash
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab'); // قراءة معلمة الـ URL
    const hash = window.location.hash.substring(1); // قراءة الـ hash (الجزء بعد #)

    let tabId = tabParam || hash; // تحديد أيهما موجود (معلمة الـ URL أو الـ hash)

    if (tabId) {
        activateTab(tabId);

        // حفظ التبويبة النشطة في localStorage
        saveTab(tabId);
    } else {
        // استرجاع التبويبة النشطة من localStorage
        const activeTab = localStorage.getItem('activeTab');
        if (activeTab) {
            activateTab(activeTab);
        } else {
            // تفعيل التبويبة الافتراضية إذا لم يكن هناك تبويبة نشطة
            const defaultTab = document.querySelector('.nav-link.active');
            if (defaultTab) {
                const defaultTabId = defaultTab.getAttribute('href').substring(1);
                activateTab(defaultTabId);
            }
        }
    }

    // إضافة مستمع للأحداث لتغيير التبويبة عند الضغط
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // منع السلوك الافتراضي للرابط

            const newTabId = this.getAttribute('href').substring(1);

            // تغيير الـ hash بدون إعادة تحميل الصفحة
            window.history.pushState(null, null, `#${newTabId}`);

            activateTab(newTabId);
            saveTab(newTabId);
        });
    });
});

function activateTab(tabId) {
    // إزالة الفئات 'active' و 'show' من كل التبويبات والمقالات
    const allTabs = document.querySelectorAll('.nav-link');
    const allPanes = document.querySelectorAll('.tab-pane');
    allTabs.forEach(tab => tab.classList.remove('active'));
    allPanes.forEach(pane => {
        pane.classList.remove('active');
        pane.classList.remove('show');
    });

    // إضافة الفئات 'active' و 'show' للتبويبة والمقالة النشطة
    const activeTab = document.querySelector(`[href="#${tabId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    const activePane = document.querySelector(`#${tabId}`);
    if (activePane) {
        activePane.classList.add('active');
        activePane.classList.add('show');
    }

    // تفعيل التبويبة باستخدام Bootstrap
    if (activeTab) {
        const tabInstance = new bootstrap.Tab(activeTab);
        tabInstance.show();
    }
}

function saveTab(tabId) {
    localStorage.setItem('activeTab', tabId);
}



(function ($) {

    "use strict";



    // meanmenu

    $('#mobile-menu').meanmenu({

        meanMenuContainer: '.mobile-menu',

        meanScreenWidth: "992"

    });



    // One Page Nav

    var top_offset = $('.header-area').height() - 10;

    $('.main-menu nav ul').onePageNav({

        currentClass: 'active',

        scrollOffset: top_offset,

    });





    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll < 245) {

            $(".header-sticky").removeClass("sticky");

        } else {

            $(".header-sticky").addClass("sticky");

        }

    });



    // data - background

    $("[data-background]").each(function () {

        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")

    })



    /* Search
 
    -------------------------------------------------------*/

    var $searchWrap = $('.search-wrap');

    var $navSearch = $('.nav-search');

    var $searchClose = $('#search-close');



    $('.search-trigger').on('click', function (e) {

        e.preventDefault();

        $searchWrap.animate({ opacity: 'toggle' }, 500);

        $navSearch.add($searchClose).addClass("open");

    });



    $('.search-close').on('click', function (e) {

        e.preventDefault();

        $searchWrap.animate({ opacity: 'toggle' }, 500);

        $navSearch.add($searchClose).removeClass("open");

    });



    function closeSearch() {

        $searchWrap.fadeOut(200);

        $navSearch.add($searchClose).removeClass("open");

    }



    $(document.body).on('click', function (e) {

        closeSearch();

    });



    $(".search-trigger, .main-search-input").on('click', function (e) {

        e.stopPropagation();

    });



    // mainSlider

    function mainSlider() {

        var BasicSlider = $('.slider-active');

        BasicSlider.on('init', function (e, slick) {

            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');

            doAnimations($firstAnimatingElements);

        });

        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {

            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');

            doAnimations($animatingElements);

        });

        BasicSlider.slick({

            autoplay: false,

            autoplaySpeed: 10000,

            dots: false,

            fade: true,

            arrows: true,

            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',

            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

            responsive: [

                {

                    breakpoint: 1024,

                    settings: {

                        slidesToShow: 1,

                        slidesToScroll: 1,

                        infinite: true,

                    }

                },

                {

                    breakpoint: 991,

                    settings: {

                        slidesToShow: 1,

                        slidesToScroll: 1,

                        arrows: false

                    }

                },

                {

                    breakpoint: 767,

                    settings: {

                        slidesToShow: 1,

                        slidesToScroll: 1,

                        arrows: false

                    }

                }

            ]

        });



        function doAnimations(elements) {

            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            elements.each(function () {

                var $this = $(this);

                var $animationDelay = $this.data('delay');

                var $animationType = 'animated ' + $this.data('animation');

                $this.css({

                    'animation-delay': $animationDelay,

                    '-webkit-animation-delay': $animationDelay

                });

                $this.addClass($animationType).one(animationEndEvents, function () {

                    $this.removeClass($animationType);

                });

            });

        }

    }

    mainSlider();





    // owlCarousel

    $('.test-active').owlCarousel({

        loop: true,

        margin: 30,

        items: 1,

        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

        nav: false,

        dots: false,

        responsive: {

            0: {

                items: 1

            },

            767: {

                items: 1

            },

            992: {

                items: 2

            },

            1200: {

                items: 3

            }

        }

    });



    // owlCarousel

    $('.brand-active').owlCarousel({

        loop: true,

        margin: 30,

        items: 1,

        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

        nav: false,

        dots: false,

        responsive: {

            0: {

                items: 2

            },

            767: {

                items: 4

            },

            992: {

                items: 5

            },

            1200: {

                items: 5

            }

        }

    });



    // blog - active

    $('.postbox__gallery').slick({

        dots: false,

        arrows: true,

        infinite: true,

        speed: 300,

        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',

        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',

        slidesToShow: 1,

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    infinite: true,

                }

            },

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            },

            {

                breakpoint: 480,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            }

        ]

    });

    // blog - active

    $('.h4service-active').slick({

        dots: true,

        arrows: true,

        infinite: true,

        speed: 300,

        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',

        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

        slidesToShow: 3,

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true,

                    arrows: false,

                }

            },

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1

                }

            },

            {

                breakpoint: 480,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    arrows: false,

                }

            }

        ]

    });

    // blog - active

    $('.h4gallery-active').slick({

        dots: true,

        arrows: true,

        infinite: true,

        speed: 300,

        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',

        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

        slidesToShow: 2,

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true,

                }

            },

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            },

            {

                breakpoint: 480,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    arrows: false,

                }

            }

        ]

    });







    /* magnificPopup img view */

    $('.popup-image').magnificPopup({

        type: 'image',

        gallery: {

            enabled: true

        }

    });



    /* magnificPopup video view */

    $('.popup-video').magnificPopup({

        type: 'iframe'

    });





    // isotop

    $('.blog-masonry').imagesLoaded(function () {

        // init Isotope

        var $grid = $('.blog-masonry').isotope({

            itemSelector: '.grid-item',

            percentPosition: true,

            masonry: {

                // use outer width of grid-sizer for columnWidth

                columnWidth: '.grid-item',

            }

        });

    });



    // isotop

    $('.row-portfolio').imagesLoaded(function () {

        // init Isotope

        var $grid = $('.row-portfolio').isotope({

            itemSelector: '.grid-item',

            percentPosition: true,

            masonry: {

                // use outer width of grid-sizer for columnWidth

                columnWidth: '.grid-sizer'

            }

        });



        // filter items on button click

        $('.portfolio-filter').on('click', 'button', function () {

            var filterValue = $(this).attr('data-filter');

            $grid.isotope({ filter: filterValue });

        });



    });

    //for menu active class

    $('.portfolio-filter button').on('click', function (event) {

        $(this).siblings('.active').removeClass('active');

        $(this).addClass('active');

        event.preventDefault();

    });





    // isotop

    $('.gallery-portfolio').imagesLoaded(function () {

        // init Isotope

        var $grid = $('.gallery-portfolio').isotope({

            itemSelector: '.grid-gallery',

            percentPosition: true,



        });

        // filter items on button click

        $('.gallery-filter').on('click', 'button', function () {

            var filterValue = $(this).attr('data-filter');

            $grid.isotope({ filter: filterValue });

        });

        //for menu active class

        $('.gallery-filter button').on('click', function (event) {

            $(this).siblings('.active').removeClass('active');

            $(this).addClass('active');

            event.preventDefault();

        });



    });







    // counterUP

    $('.counter').counterUp({

        delay: 10,

        time: 1000

    });





    // testimonials-active

    $('.testimonials-activation').slick({

        dots: false,

        arrows: false,

        infinite: false,

        speed: 300,

        slidesToShow: 2,

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    infinite: true,

                    dots: false

                }

            },

            {

                breakpoint: 600,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 2

                }

            },

            {

                breakpoint: 480,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            }

            // You can unslick at a given breakpoint now by adding:

            // settings: "unslick"

            // instead of a settings object

        ]

    });



    // team-active

    $('.team-activation').slick({

        dots: true,

        infinite: false,

        speed: 300,

        arrows: false,

        slidesToShow: 6,

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 4,

                    slidesToScroll: 1,

                    infinite: true,

                    dots: true

                }

            },

            {

                breakpoint: 600,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 2

                }

            },

            {

                breakpoint: 480,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1

                }

            }

            // You can unslick at a given breakpoint now by adding:

            // settings: "unslick"

            // instead of a settings object

        ]

    });





    // scrollToTop

    $.scrollUp({

        scrollName: 'scrollUp', // Element ID

        topDistance: '300', // Distance from top before showing element (px)

        topSpeed: 300, // Speed back to top (ms)

        animation: 'fade', // Fade, slide, none

        animationInSpeed: 200, // Animation in speed (ms)

        animationOutSpeed: 200, // Animation out speed (ms)

        scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element

        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'

    });



    // nice-slector

    $(document).ready(function () {

        $('select').niceSelect();

    });



    // WOW active

    new WOW().init();





    /*-------------------------
 
        showlogin toggle function
 
    --------------------------*/

    $('#showlogin').on('click', function () {

        $('#checkout-login').slideToggle(900);

    });



    /*-------------------------
 
        showcoupon toggle function
 
    --------------------------*/

    $('#showcoupon').on('click', function () {

        $('#checkout_coupon').slideToggle(900);

    });



    /*-------------------------
 
        Create an account toggle function
 
    --------------------------*/

    $('#cbox').on('click', function () {

        $('#cbox_info').slideToggle(900);

    });



    /*-------------------------
 
        Create an account toggle function
 
    --------------------------*/

    $('#ship-box').on('click', function () {

        $('#ship-box-info').slideToggle(1000);

    });



    // map

    function basicmap() {

        // Basic options for a simple Google Map

        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

        var mapOptions = {

            // How zoomed in you want the map to start at (always required)

            zoom: 11,

            scrollwheel: false,

            // The latitude and longitude to center the map (always required)

            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // This is where you would paste any style found on Snazzy Maps.

            styles: [{ "stylers": [{ "hue": "#dd0d0d" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }]

        };

        // Get the HTML DOM element that will contain your map

        // We are using a div with id="map" seen below in the <body>

        var mapElement = document.getElementById('contact-map');



        // Create the Google Map using our element and options defined above

        var map = new google.maps.Map(mapElement, mapOptions);



        // Let's also add a marker while we're at it

        var marker = new google.maps.Marker({

            position: new google.maps.LatLng(40.6700, -73.9400),

            map: map,

            title: 'Cryptox'

        });

    }

    if ($('#contact-map').length != 0) {

        google.maps.event.addDomListener(window, 'load', basicmap);

    }







})(jQuery);