$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    
    
//    Main Slider
    $(".main-slider .banner-slides").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: true,
//        nav: true,
        animateOut: "slideOutUp",
        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive : {
            0 : {
                mouseDrag: true
            },
            768 : {
                mouseDrag: false
            }
        }
    });
    $(".main-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("next.owl.carousel");
    });
    $(".main-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("prev.owl.carousel");
    });
    
//    services slider
    $(".products-slider .pslides").owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: false,
        active: true,
        margin: 20,
        smartSpeed: 1000,
        autoplay: false,
//        autoplaySpeed: 4000,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
    $(".products-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".products-slider .pslides").trigger("next.owl.carousel");
    });
    $(".products-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".products-slider .pslides").trigger("prev.owl.carousel");
    });
    
//    testimonial slider
	$('.testimonials-section .testi-slider').owlCarousel({
		loop:true,
		margin: 30,
		items: 2,
		nav: false,
		autoplay: true,
		smartSpeed: 1500,
		dots:true, 
//		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
		}
	});
	
//    product details slider
	$('.product-details-area .pdetails-slides').owlCarousel({
		loop:true,
		margin: 30,
		items: 1,
		nav: false,
		autoplay: true,
		smartSpeed: 1500,
		dots:true, 
	});
	
//    service details slider
    $(".sdetails-slider .sslides").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
        active: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 5000
    });
    
    
});

