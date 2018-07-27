	/*
	
	rather than :active (css), use javascript's click function to add a class
	
	
	*/

	// to remove hover transition after click, 
	// have a class that defines the hover behaviour
	// on click, remove that class

	var tail = document.getElementById("tail");

	tail.addEventListener("click", function(){ 
	tail.classList.add("realtail");
	});

	var bomb = document.getElementById("bomb");

	bomb.addEventListener("click", function(){ 
	bomb.classList.add("realbomb");
	});

	var flag = document.getElementById("flag");

	flag.addEventListener("click", function(){ 
	flag.classList.add("realflag");
	});

	var helmet = document.getElementById("helmet");

	helmet.addEventListener("click", function(){ 
	helmet.classList.add("realhelmet");
	});

	