$('.moon').click(function(){ 
	
	$('.moon').css('top', '100px');
	$('.moon').css('bottom', '100px');
	$('.moon').css('left', '100px');
	$('.moon').css('right', '1000px');

	setInterval(function(){

		console.log();

		var randomNumber = Math.random() * 500 + "px";

		$('.moon').css('top', randomNumber);
		$('.moon').css('bottom', randomNumber);
		$('.moon').css('left', randomNumber);
		$('.moon').css('right', randomNumber);

	}, 1000)

})


$('.moon').trigger("click")

var $divide = $(".divide");
setInterval(function(){
    $divide.toggleClass("invis");
}, 4000);