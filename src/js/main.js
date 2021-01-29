const burgerOpener = document.querySelector('.burger-opener');
const burgerMenu = document.querySelector('.nav');

const toggleMenu = () => {
    if(burgerOpener.classList.contains('active')){
        burgerOpener.classList.remove('active');
        burgerMenu.classList.remove('active');
    }
    else {
        burgerOpener.classList.add('active');
        burgerMenu.classList.add('active');
    }
}

burgerOpener.onclick = ()=>toggleMenu()


$(window).on('load resize orientationchange', function() {
    $('.services-cards-holder').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    arrows: false,
                    dots: true
                });
            }
        }
    });
});

$(document).ready(function(){
    $('.coaches-cards-holder').slick({
        dots:false,
        arrows: true,
        autoplay:false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1.1,
                    dots:true,
                    arrows:false
                }
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:1.1
                }
            }
        ]
    });
});

$(window).on('load', function(){

    new WOW().init();
});