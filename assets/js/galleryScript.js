var slickPrimary = {
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1500,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}

var slickSecondary = {
    autoplay: true,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.image-slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}

$(document).ready(function() {
    $('.image-slider').slick(slickPrimary);
    $('.text-slider').slick(slickSecondary);
});
