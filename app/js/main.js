$(function () {

    var mixer = mixitup('.products__inner-box');

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });

    $(".product__slider-inner").slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false
    });

});