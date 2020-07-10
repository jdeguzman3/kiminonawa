var x = document.querySelector(".switch");
var carousel = document.querySelector(".carousel");

// Rotate the carousel 90 degrees to show enter button. RotateX(90deg)
function rotateCarousel(){
	carousel.animate([
		{ transform: "rotateX(0) rotateY(360deg)" },
		{ transform: "rotateX(90deg) rotateY(0deg)" }
	],{
		// timing options
		duration: 10000
	});
}

function infiniteRotation(){
	carousel.animate([
		{ transform: "rotateX(90deg) rotateY(360deg)" },
		{ transform: "rotateX(90deg) rotateY(0deg)" }
	],{
		// timing options
		duration: 10000,
		iterations: Infinity,
		// Needs delay, else rotateCarousel() animation skips entirely
		delay: 10000
	});
}


/* auxiliary function way, otherwise invoked */
x.addEventListener("click", rotateCarousel);
x.addEventListener("click", infiniteRotation);