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
//    $('.accordion-tab>.left__subitem').hide();
    
  });
});

//$('.accordion-tab>.accordion-link').addClass('active');