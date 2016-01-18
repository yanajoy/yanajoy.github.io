$("document").ready(function() {

  $('.modal').on('show.bs.modal', function(e) {
    var carousel = $(e.currentTarget).find('.carousel').first();
    if (carousel.hasClass("slick-initialized"))
      return;
    carousel.slick({
      dots: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
      lazyLoad: 'progressive',
      arrows: false,
    });
  })
});
