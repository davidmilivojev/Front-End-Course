function cardHeight() {
    const option = {
        byRow: true,
        property: 'min-height'
    }
    $('.js-card').matchHeight(option);
    $('.card-title').matchHeight();
}

function slickSlider() {
    $('.js-slider').slick();
}

function swiperSlider() {
    const swiper = new Swiper('.js-swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: {
            invert: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
}

function dropdown() {
    $('select').selectric();
}
dropdown();
// swiperSlider();
// slickSlider();
// cardHeight();