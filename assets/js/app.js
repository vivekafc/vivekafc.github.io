//cursor function, follows even on scroll

document.addEventListener("mousemove", function (event){

	const x = event.clientX - 25
	const y = event.clientY - 25

	const cursor = document.querySelector("#cursor")

	cursor.style.left = x + "px"
	cursor.style.top = y  + "px" 


})

