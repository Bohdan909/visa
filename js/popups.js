
var mobWidth = 1000,
    docHeight = document.innerHeight;

$.fn.dontScrollParent = function(){
    this.bind('mousewheel DOMMouseScroll',function(e){
        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

        if (delta > 0 && $(this).scrollTop() <= 0)
            return false;
        if (delta < 0 && $(this).scrollTop() >= this.scrollHeight - $(this).height())
            return false;

        return true;
    });
};

var popup = {
    init: function(){
        //$(".scroll").perfectScrollbar("update"); 

        if (window.innerWidth < mobWidth){
            $(".popup-wrapper").height(docHeight);
            $("body").scrollTop(0);
            $("body").css("overflow-y", "auto"); 
        } else {
            $(".popup-wrapper").dontScrollParent().height("auto");
            $("body").css("overflow-y", "hidden"); 
        }
    },

    close: function(){
        $(".popup-wrapper").fadeOut().find(".popup").hide();
        $("body").css("overflow-y","auto");
    },

    open: function(){
        $(".popup-wrapper").fadeIn(function(){
            this.init();
        });
    }
}    

window.onload = function(){

    $(".btn").on("click", function(e){
        e.preventDefault();

        popup.open();        
        $("#popup-reg").show();
    });


    $(".popup .close").on("click", function(){
        popup.close();        
    });


    $(".popup-wrapper").on("click", function(event) {
        if ($(this).is(":visible")){
            if ($(event.target).closest(".popup").length) return;
            popup.close(); 
            event.stopPropagation();
        }
    });
};

window.onresize = function(){
    popup.init();
}
