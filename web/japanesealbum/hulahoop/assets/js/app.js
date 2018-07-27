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

	var tieone = document.getElementById("tieone");

	tieone.addEventListener("click", function(){ 
	tieone.classList.add("realtieone");
	});

	var tietwo = document.getElementById("tietwo");

	tietwo.addEventListener("click", function(){ 
	tietwo.classList.add("realtietwo");
	});

	var hair = document.getElementById("hair");

	hair.addEventListener("click", function(){ 
	hair.classList.add("realhair");
	});

	var kimono = document.getElementById("kimono");

	kimono.addEventListener("click", function(){ 
	kimono.classList.add("realkimono");
	});

	var hoop = document.getElementById("hoop");

	hoop.addEventListener("click", function(){ 
	hoop.classList.add("realhoop");
	});

	var hooptwo = document.getElementById("hooptwo");

	hooptwo.addEventListener("click", function(){ 
	hooptwo.classList.add("realhooptwo");
	});

	var hoopthree = document.getElementById("hoopthree");

	hoopthree.addEventListener("click", function(){ 
	hoopthree.classList.add("realhoopthree");
	});