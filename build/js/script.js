$(document).ready(function () {
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
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {},
            overlay: {
                locked: false
            }
        }
    });
    // ???
    function openPop(el){
  el.fancybox({
   maxWidth : 800,
   maxHeight : 600,
  });
 }  
    // init slider at fancy ///////////////////////////
    var optionsFancy = {
  maxWidth : 800,
  maxHeight : 600,
  helpers: {
   overlay: {
    locked: false 
   }
  }
 }

 $(".see-project , .cl-houses").on('click',function(e){
  var el = $(this),
      idModal = el.attr('href'),
      $slider = $(idModal).find('.modal-slider-nav, .slider-nav');
      $mainSlider = $(idModal).find('.modal-slider-for, .slider-for');
     
     
     
     var mainNav,
         nav;
     if($mainSlider.hasClass('slider-for')){
         mainNav =  '.slider-for';
         nav = '.slider-nav';
     } else {
          mainNav =  '.modal-slider-for';
          nav = '.modal-slider-nav';
     }
     
     
     if (!($slider.hasClass('slick-initialized'))){
         setTimeout(function(){
            $slider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: mainNav,
                dots: false,
                centerMode: false,
                focusOnSelect: true
            });
         },100);
     };
     
     
     if (!($mainSlider.hasClass('slick-initialized'))){
         setTimeout(function(){
           $mainSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: nav
            });
         },100);
     }
  $.fancybox.open( [el], optionsFancy );
  e.preventDefault();
 });
    // accordion
    $('.accordion-tab>.accordion-descr').hide();
    $('.accordion-tab>.accordion-link').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        var findArticle = $(this).next();
        var findWrapper = $(this).closest('.accordion-tab');
        if (findArticle.is(':visible')) {
            findArticle.slideUp('slow');
        } else {
            findWrapper.find('>.accordion-descr').slideUp();
            findArticle.slideDown();
        }
    });
    // smooth scrolling
    $(".anchor").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 30; // высота отступа от верхней границы
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    
//    $('.accordion-tab>.accordion-descr').not(':first').hide();
//    $('.accordion-tab>.accordion-link').click(function (event) {
//        event.preventDefault();
//        $(this).toggleClass('active');
//        var findArticle = $(this).next();
//        var findWrapper = $(this).closest('.accordion-tab');
//        if (findArticle.is(':visible')) {
//            findArticle.slideUp('slow');
//        } else {
//            findWrapper.find('>.accordion-descr').slideUp();
//            findArticle.slideDown();
//        }
//    });
//    // smooth scrolling
//    $(".anchor").on("click", function (event) {
//        event.preventDefault();
//        var id = $(this).attr('href'),
//            top = $(id).offset().top;
//        $('body,html').animate({
//            scrollTop: top
//        }, 1500);
//    });
    
    $("#submit, #submit2, #submit3, #submit4").click(function(e){        
        $.fancybox.open( [$("#" + $(this).data('href'))], { 
            fitToView: true,
            width: '340px',
            height: '280px',
            openEffect: 'fade',
            closeEffect: 'fade',
            padding: false,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    });
    
    // fancybox
    $(".various").click(function (event) {
        event.preventDefault();
        $(".various").fancybox({
            fitToView: true,
            width: '340px',
            height: '280px',
            openEffect: 'fade',
            closeEffect: 'fade',
            padding: false,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    });
    $(".present").fancybox({
        fitToView: true,
        width: '60%',
        height: '80%',
        autoSize: false,
        closeClick: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        padding: false,
        scroll: 'no',
    });
    $(".see-project").fancybox({
        fitToView: true,
        width: '60%',
        height: '100%',
        autoSize: false,
        openEffect: 'fade',
        closeEffect: 'fade',
        padding: false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $(".see-all").fancybox({
        fitToView: true,
        width: '60%',
        height: '80%',
        autoSize: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        padding: false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $(".cl-houses").fancybox({
        fitToView: true,
        width: '60%',
        height: '80%',
        autoSize: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        padding: false,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $(".characteristics-block").fancybox({
        fitToView: true,
        width: '100%',
        height: '80%',
        autoSize: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        padding: true,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    $("#single-1").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
    $("#img-to-large").fancybox({
        helpers: {
            overlay: {
                locked: false
            },
            title: {
                type: 'float'
            }
        }
    });
    $(".img-to-large").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    // up btn
    $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      if ($('#upbutton').is(':hidden')) {
        $('#upbutton').css({
          opacity : 1
        }).fadeIn('slow');
      }
    } else {
      $('#upbutton').stop(true, false).fadeOut('slow');
    }
  });
  $('#upbutton').click(function() {
    $('html, body').stop().animate({
      scrollTop : 0
    }, 700);
  });
    
    // tel mask
    $(".tel-mask").mask("(+7999) 999-99-99");
    
    
});



//  KEY API 1
//    AIzaSyAA-YOfc0uWVC8vRXzIZDqMZ0lnkIitgwU
//    $('.accordion-tab>.left__subitem').hide();
//$('.accordion-tab>.accordion-link').addClass('active');