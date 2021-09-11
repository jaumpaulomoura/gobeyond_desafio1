import "../sass/main.scss";

$(window).ready(function () {
    $('.main-banner').slick({
        dots: true,
        controls: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: `<button type="button" class="slick-prev"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7134 0.686675L0.400025 12L11.7134 23.3133L13.6 21.428L4.17069 12L13.6 2.57201L11.7134 0.686675Z" fill="#F2F2F2"/>
        </svg></button>`,
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.28664 23.3133L13.6 12L2.28664 0.686657L0.399977 2.57199L9.82931 12L0.399977 21.428L2.28664 23.3133Z" fill="#F2F2F2"/></svg></button>'
    });

    $('.main-banner-mobile').slick({
      dots: true,
      controls: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
  });

    $('.products ul').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7134 0.686675L0.400025 12L11.7134 23.3133L13.6 21.428L4.17069 12L13.6 2.57201L11.7134 0.686675Z" fill="#000000"/>
        </svg></button>`,
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.28664 23.3133L13.6 12L2.28664 0.686657L0.399977 2.57199L9.82931 12L0.399977 21.428L2.28664 23.3133Z" fill="#000000"/></svg></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
        ]
    });
});