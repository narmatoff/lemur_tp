$(document).ready(function() {
    console.log('main');

    var swiper = new Swiper('.swiper-container', {
        //    pagination: '.swiper-pagination',
        nextButton: '.left__heading__buttons__wr__next',
        prevButton: '.left__heading__buttons__wr__prev',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 0
    });

});
