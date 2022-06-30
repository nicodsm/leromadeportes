document.addEventListener('DOMContentLoaded', () => {

    var swiper = new Swiper(".hero__container--mySwiper", {
      loop: true,  
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      var swiper = new Swiper(".prod-destacados__mySwiper", {
        slidesPerView: 'auto',
        // spaceBetween: 20,
        loop: true,
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".fa-circle-arrow-right",
          prevEl: ".fa-circle-arrow-left",
        },
      });

      var swiper = new Swiper(".categorias__container--mySwiper", {
        slidesPerView: 'auto',
        // spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      const header = document.querySelector('.header__container');

      window.addEventListener('scroll', ()=>{
        console.log(window.scrollY)

        if(window.scrollY > 300) {
          header.style.background = '#000000cc'
        } else {
          header.style.background = '#00000000'
        }
      })
});