$(function(){

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav, .slider-for__info',
      });
      $('.slider-for__info').slick({
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav, .slider-for',
        responsive: [
          {
            breakpoint: 1281,
            settings: {
              arrows: true,
            }
          },
        ]
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for, .slider-for__info',
        dots: true,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
      });

      $('.header__inner-btn').on('click', function () {
        $('.header__inner-nav > ul').slideToggle();
      });


    var mixer = mixitup('.feature__inner-box');

});