$(function() {

    $(".stars").rateYo({
        rating: 4.5,
        readOnly: true
      });

    $('.slider__inner').slick({
        arrows: true,
        prevArrow: '<button class="slick-arrow prev-arrow icon-angle-left"></button>',
        nextArrow: '<button class="slick-arrow next-arrow icon-angle-right"></button>'
    });


    var mixer = mixitup('.products__inner');

});

   
