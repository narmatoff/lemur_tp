$(document).ready(function() {
    console.log('main.js');

    var swiper = new Swiper('.swiper-tarifs', {
        //    pagination: '.swiper-pagination',
        nextButton: '.tarifs_next',
        prevButton: '.tarifs_prev',
        autoplay:6000,
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 32
    });

    var swiper2 = new Swiper('.logos__slider', {
            // pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplay:6000,
            slidesPerView: 7,
            paginationClickable: true,
            spaceBetween: 44,
            loop: false,
            breakpoints: {
            1310: {
                // slidesPerView: 5,
                // spaceBetween: 80
                nextButton: false,
                prevButton: false,
                uniqueNavElements:false
            }
        }
        });

});
