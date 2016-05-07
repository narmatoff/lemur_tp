$(document).ready(function() {
    console.log('main.js');

    var swiper = new Swiper('.swiper-tarifs', {
        //    pagination: '.swiper-pagination',
        nextButton: '.tarifs_next',
        prevButton: '.tarifs_prev',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 32
    });

    var swiper2 = new Swiper('.swiper-container', {
            // pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
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
            // 768: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            // 640: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // },
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 10
            // }
        }
        });

});
