var d = new Date();
document.getElementById("demo").innerHTML = d.getHours();

var d = new Date();
document.getElementById("demo2").innerHTML = d.getMinutes();

$('#square').click(function(){ 
	
	$('#square').css('margin-left', '650px');

	setInterval(function(){

		console.log();

		var randomNumber = Math.random() * 80 + "px";

		$('#square').css('margin', randomNumber);

	}, 1000)

})

$('.square').click(function(){ 
	
	$('.square').css('margin', '650px');

	setInterval(function(){

		console.log();

		var randomNumber = Math.random() * 80 + "px";

		$('.square').css('margin', randomNumber);

	}, 1000)

})

$('#square').trigger("click")

$('.square').trigger("click")




