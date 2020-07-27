$(function() {

  $('.main__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true
        }
      }
    ]
  });
  $('.news__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    infinite: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true
        }
      }
    ]
  });
  $('[data-modal]').click(function(){
    $('.modal-inner').fadeIn(300)
  });

  $('.modal-inner').click(function(e){
    if (e.target.getAttribute('id') == 'modal-inner') {
      $('.modal-inner').fadeOut(200)
    }
  });
  $('.modal__close').click(function(){
    $('.modal-inner').fadeOut(200)
  });

  $("a[href^='.advice']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top-100+"px"});
    return false;
  });

  $('.nav__burger').click(function(){
    $('.nav__list').toggleClass('nav__list_active');
    $('.nav__burger').toggleClass('nav__burger_active');
  });

});