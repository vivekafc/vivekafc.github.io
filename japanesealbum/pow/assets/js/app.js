	/*
	
	rather than :active (css), use javascript's click function to add a class
	
	
	*/

	// to remove hover transition after click, 
	// have a class that defines the hover behaviour
	// on click, remove that class

	var face = document.getElementById("face");

	face.addEventListener("click", function(){ 
	face.classList.add("realface");
	});

	var uniform = document.getElementById("uniform");

	uniform.addEventListener("click", function(){ 
	uniform.classList.add("realuniform");
	});

	var hair = document.getElementById("hair");

	hair.addEventListener("click", function(){ 
	hair.classList.add("realhair");
	});

	var helmet = document.getElementById("helmet");

	helmet.addEventListener("click", function(){ 
	helmet.classList.add("realhelmet");
	});

	