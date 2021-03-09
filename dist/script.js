"use strict";

function scroll() {
  $('.anchor-element').click(function (e) {
    e.preventDefault();
    var jumpId = $(this).attr('href');
    $('body, html').animate({
      scrollTop: $(jumpId).offset().top
    }, 'slow');
  });
}

function smooth_scroll() {
  $("a.scroll").each(function () {
    $(this).on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function () {
          $('.header__container').addClass('active');
        });
      }
    });
  });
} // Run functions on load

function sliderTitle() {
  $('#jsSliderTitle').slick({
    arrows: false,
    fade: true
  });
}

function sliderImagesOne(){
  $('#jsSliderImages1').slick({
    cssEase: 'cubic-bezier(.74,.01,.04,.97)',
    arrows: false,
    asNavFor: '#jsSliderTitle',
    speed: 1000
  })

  $('#jsSliderImages2').slick({
    cssEase: 'cubic-bezier(.74,.01,.04,.97)',
    arrows: false,
    asNavFor: '#jsSliderImages1',
    speed: 1000
  })
  $('#jsSliderImages3').slick({
    cssEase: 'cubic-bezier(.74,.01,.04,.97)',
    arrows: false,
    asNavFor: '#jsSliderImages2, #jsSliderImages1, #jsSliderTitle',
    arrows: true,
    prevArrow: $('#prevArrow'),
    nextArrow: $('#nextarrow'),
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000
  })

  $('#jsSliderImages2').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let currSlide = $('#jsSliderImages3 .slick-active').attr('data-slick-index');
    $('.sliderNav__index').html('0' + currSlide);
  });

  $('#jsMembersSlider').slick({
    cssEase: 'cubic-bezier(.74,.01,.04,.97)',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    infinite: true
  })
}

// const smooth_scroll = () => {
//   $("a.scroll").each(function () {
//     $(this).on("click", function (event) {
//       if (this.hash !== "") {
//         event.preventDefault();
//         var hash = this.hash;
//         $("html, body").animate(
//           {
//             scrollTop: $(hash).offset().top,
//           },
//           1000,
//           function () {
//             $(".header__container").addClass("active");
//           }
//         );
//       }
//     });
//   });
// };

$(function () {
  scroll();
  sliderTitle();
  sliderImagesOne();
  smooth_scroll();
});