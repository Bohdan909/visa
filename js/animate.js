window.addEventListener("load", function (){
	
	// Animate Slide
	let animateWrap = document.querySelectorAll(".animate-wrap");

	animateWrap.forEach(function(wrapItem){
		let animateList = wrapItem.querySelectorAll(".animate-slide");
		
		for (let i = 0; i < animateList.length; i++){
			animateList[i].setAttribute("style", "animation-delay:" + (0.15 * i) + "s")
		}
	});


	// Menu
	let mobile   = window.innerWidth < 768;
	let body     = document.querySelector("body");
	let btnMenu  = document.querySelector(".btn-menu-block");
	let btnClose = document.querySelectorAll(".btn-close");

	["click", "mouseover", "mouseleave"].map(function(e){

		btnMenu.addEventListener(e, function(){
			let $this = this;

			switch(e){

				case "click":
					menuOpen($this);
				break;

				case "mouseover":
					$this.classList.add("hover");
					$this.classList.remove("leave");
				break;

				case "mouseleave":
					$this.classList.add("leave");
					$this.classList.remove("hover");
				break;
			}

			//$this.classList.toggle("hover", "leave");
		});

		btnClose.forEach(function(closeItem){

			closeItem.addEventListener(e, function(){

				switch(e){
					case "click":
						popupClose(this);
					break;

					case "mouseover":
						closeItem.classList.add("hover");
						closeItem.classList.remove("leave");
					break;

					case "mouseleave":
						closeItem.classList.add("leave");
						closeItem.classList.remove("hover");
					break;
				}
			});
		});
	});

	function menuOpen($this){
		body.classList.toggle("menu-open");
		$this.classList.toggle("active");
		// body.addEventListener("touchstart", function(e){ 
		// 	e.preventDefault(); 
		// 	e.stopPropagation();
		// });

		if (mobile) window.scrollTo(0, 0);

	}

	function popupClose($this){
		let popup = $this.parentNode;

		popup.classList.remove("open");
		body.classList.remove("popup-open");
	}

	// Popup Close


	(function(){
        if ( typeof NodeList.prototype.forEach === "function" ) return false;
        NodeList.prototype.forEach = Array.prototype.forEach;
    }());
	
});