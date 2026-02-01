(function ($) {
    "use strict";

    // Spinner - wyłącza białe kółko po załadowaniu
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Inicjalizacja wowjs (animacje przy przewijaniu)
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    // Dropdown na hover (dla komputerów)
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function() {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function() {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    // Przycisk powrotu na górę (Back to top)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Liczniki (Facts counter)
    if ($('[data-toggle="counter-up"]').length > 0) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Główny Carousel (Owl Carousel)
    $(".header-carousel").owlCarousel({
        autoplay: true, // Zmienione na true, żeby slider sam chodził
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{ items:1 },
            768:{ items:2 },
            992:{ items:3 }
        }
    });
    
// Service carousel - teraz tylko 1 element naraz
$(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 0,        // Zmieniamy margines na 0, bo jest tylko 1 element
    loop: true,
    dots: false,
    nav : true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:1   // Zmieniono z 2 na 1
        },
        992:{
            items:1   // Zmieniono z 3 na 1
        }
    }
});

    // Header slider - Twoja własna funkcja (TUTAJ BYŁY BŁĘDY)
    const headerSlider = document.querySelector('.header-slider');
    if (headerSlider) {
        const slides = headerSlider.querySelectorAll('.slide');
        if (slides.length > 0) {
            let currentSlide = 0;
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000);

            // Dodaj klasę active do pierwszego slajdu na start
            slides[0].classList.add('active');
        }
    }

    // Blokada prawego przycisku na wideo (opcjonalne)
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'VIDEO') {
            e.preventDefault();
        }
    });
  
})(jQuery);