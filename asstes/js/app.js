$(function () {
  // banner js section start
  $('.banner_slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'banner_slider_dots',
  });
  // banner js section end

  //   new product js section start
  $('.new_product_slider').slick({
    slidesToShow: 4,
    prevArrow: '<i class="fa-solid fa-chevron-left product_slider_icon"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right product_slider_icon"></i>',
  });

  // new product js section end

  // deals js saction start
  $('#deal_intro').countdown('2024/10/20', function(event) {
    var $this = $(this).html(event.strftime(''
      + ' '
      + '<div><h3>%d</h3><p>Days</p></div> '
      + '<span>:</span>'
      + '<div><h3>%H</h3><p>Hour</p></div> '
      + '<span>:</span>'
      + '<div><h3>%M</h3><p>Minute</p></div> '
      + '<span>:</span>'
      + '<div><h3>%S</h3><p>Sec</p></div>'));
  });
  // deals js section end

  // offer js section start
  $('.offer_slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    dotsClass: 'offer_slider_dots',
  });

  // offer js section end

  // latest js section start
  $('.latest_slider').slick({
    arrows: false,
    slidesToShow: 4,
    dots: true,
    dotsClass: 'latest_slider_dots',
  });
  // latest js section end
})


new VenoBox();





const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))