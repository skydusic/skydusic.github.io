$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items:1,
      margin:0,
      
      

	  
  });
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30
    });
});