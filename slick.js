$(document).ready(function(){
      $('.center-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 300,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true
      })
       $('.img-area').slick({
               dots: true,
               arrows: false,
                autoplay: true,
                autoplaySpeed: 2000
           }) 

    });