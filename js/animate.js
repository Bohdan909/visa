window.addEventListener("load", function (){

	(function(){
        if ( typeof NodeList.prototype.forEach === "function" ) return false;
        NodeList.prototype.forEach = Array.prototype.forEach;
    }());
	
	// Animate Slide
	let animateWrap = document.querySelectorAll(".animate-wrap");

	animateWrap.forEach(function(wrapItem){
		let animateList = wrapItem.querySelectorAll(".animate-slide");
		
		for (let i = 0; i < animateList.length; i++){
			animateList[i].setAttribute("style", "animation-delay:" + (0.15 * i) + "s")
		}
	});

	
});