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

    var swiper = new Swiper('.swiper-logos', {
        //    pagination: '.swiper-pagination',
        // nextButton: '.left__heading__buttons__wr__next',
        // prevButton: '.left__heading__buttons__wr__prev',
        slidesPerView: 7,
        paginationClickable: true,
        spaceBetween: 37
    });

});
