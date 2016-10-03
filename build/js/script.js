$(document).ready(function(){
  $('.slider-content').slick({
      arrows: true,
      prevArrow: '<img class="adv-button-left" src="img/ic-arr-left.png">',
      nextArrow: '<img class="adv-button-right" src="img/ic-arr-right.png">',
  });
    $('.certificates__multiple').slick({
        arrows: true,
        prevArrow: '<img class="cert-prev" src="img/certificates-prev.png">',
        nextArrow: '<img class="cert-next" src="img/certificates-next.png">',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3 
  });
    $('.guarantee__slider').slick({
      arrows: true,
      prevArrow: '<img class="guarant-prev" src="img/ic-arr-left.png">',
      nextArrow: '<img class="guarant-next" src="img/ic-arr-right.png">',
  });
    $('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
     $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
     });
    $('.slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: false,
          centerMode: false,
          focusOnSelect: true
    });
    // slider for multiple page blocks
    $('.modal-slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.modal-slider-nav'
     });
    $('.modal-slider-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.modal-slider-for',
          dots: false,
          centerMode: false,
          focusOnSelect: true
    });
    
    $('.accordion-tab>.accordion-descr').not(':first').hide();
       $('.accordion-tab>.accordion-link').click(function(event){
           event.preventDefault();
           
    var findArticle = $(this).next();
    var findWrapper = $(this).closest('.accordion-tab');
    if (findArticle.is(':visible')) {
      findArticle.slideUp('slow');
    }
    else {
      findWrapper.find('>.accordion-descr').slideUp();
        findArticle.slideDown();
    }
  });
    
    
    
    
});



//  KEY API 1
//    AIzaSyAA-YOfc0uWVC8vRXzIZDqMZ0lnkIitgwU
//    $('.accordion-tab>.left__subitem').hide();
//$('.accordion-tab>.accordion-link').addClass('active');