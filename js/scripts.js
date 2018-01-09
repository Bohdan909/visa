document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '');

(function($){
    $(document).ready(function() {

        // Placeholder Hide
        $("input, textarea").focus(function(){
           $(this).data("placeholder",$(this).attr("placeholder")).attr("placeholder","");
        }).blur(function(){
           $(this).attr("placeholder",$(this).data("placeholder"));
        });

        


        windowSize();   
        $(window).resize(windowSize); 
        
    });


    var cachedWidth = window.innerWidth;

    function windowSize(){
        var winWidth = window.innerWidth,
            docWidth = $(document).width();

        // Resize Mobile
        if (winWidth !== cachedWidth){
            

            cachedWidth = winWidth;
        }   

        // Mobile Viewport
        if (winWidth >= 767){
            $("").attr("style", "");
        } 
            
    };

    // Click Out
    function ClickOut(element){
        this.element = element;
        
        this.removeClass = function(class_){
            $(document).on("click", function(event) {
                if ($(event.target).closest(element).length) return;
                $(element).removeClass(class_);
                event.stopPropagation();
            });
        };
    };

    // forEach for IE
    (function(){
        if ( typeof NodeList.prototype.forEach === "function" ) return false;
        NodeList.prototype.forEach = Array.prototype.forEach;
    }());
    
}(jQuery))
