$(document).ready(function() {


    //////////////// Plugins ////////////////

    // Images Popup
    if ($(".img-popup").length){
        $(".img-popup").each(function(){
            $(this).magnificPopup({
                delegate: 'a', 
                type: 'image',
                gallery: {
                    enabled:true
                },
                callbacks: {
                    open: function() {
                        $('html, body').on('touchmove', function(e){ 
                             e.preventDefault(); 
                        });
                    },
                    close: function() {
                        $('html, body').off('touchmove');
                    }
                }
            });
        });
    };

    // Select
    if ($(".select-item").length){
        $(".select-item select").selectmenu();
    };

    // Scroll Perfect
    $(".scroll").length && $(".scroll").perfectScrollbar({
        wheelSpeed: 0.5,
        wheelPropagation: false,
        minScrollbarLength: 20
    }); 

    $(".popup-scroll").scroll(function(){
        $(".select-item select").selectmenu("close");
    }); 

    // Checkbox
    $(".checkbox").length && $(".checkbox").iCheck({
        checkboxClass: 'check',
        labelHover: false,
        cursor: true
    });

    // Slick Slider
    if ($(".slick-slider").length){
        $('.slick-slider').slick({
            swipe:false,
            swipeToSlide:false,
            infinite: true,
            adaptiveHeight:true,
            speed: 150,
            arrows: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            fade: true,
            dots: true,

            responsive: [{
                breakpoint: 1018,
                settings: {
                    swipe:true
                }
            }]    
        })
    };

    // Anything Slider
    if ($(".slider").length){
        $(function(){
            $(".slider #slider").anythingSlider({  
                autoPlay            : true,
                delay               : 7000,

                toggleArrows        : false,
                expand              : true,
                resizeContents      : true,
                autoPlayLocked      : true,
                resumeDelay         : 0,
                hashTags            : false,
                infiniteSlides      : true,
                stopAtEnd           : false,

                buildArrows         : true,      
                buildNavigation     : false,      
                buildStartStop      : false,
                mode                : "fade"        
            });              
        });
    };

    // Scroll To
    $("a.scrollto").on("click", function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 900);
        return false;
    });

    // Exists Element
    jQuery.fn.exists = function(){ return this.length > 0; } // $('#elem').exists() ? true : false


    //////////////// End Plugins ////////////////

    
});