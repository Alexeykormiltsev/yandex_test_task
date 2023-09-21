$(function(){


    const swiper = new Swiper('.slider-team', {

        direction: 'horizontal',
        loop: false,
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        spaceBetween: 36,
        pagination: false,
        navigation: true,
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
    
});