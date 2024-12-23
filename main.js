let navLinks = document.querySelectorAll('.nav-links');
let menuOpen = document.querySelector('#menu-open-button');
let menuClose = document.querySelector('#menu-close-button');

menuOpen.onclick = ()=>{
    document.body.classList.toggle('show')
}
menuClose.onclick = ()=>{
    menuOpen.onclick()
}

navLinks.forEach(link =>{
    link.addEventListener("click", () =>menuOpen.onclick()  );
});
////////////////////////////////////////////////////
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        }, 
        768:{
            slidesPerView:2
        },        
        1024:{
            slidesPerView:3
        },
    }
  
    // And if we need scrollbar
  });