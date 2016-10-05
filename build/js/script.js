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
    $('.accordion-tab>.accordion-link').click(function (event) {
        event.preventDefault();

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
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
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
});



//  KEY API 1
//    AIzaSyAA-YOfc0uWVC8vRXzIZDqMZ0lnkIitgwU
//    $('.accordion-tab>.left__subitem').hide();
//$('.accordion-tab>.accordion-link').addClass('active');