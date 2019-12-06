$('.moon').click(function(){ 
	
	$('.moon').css('margin-top', '100px');
	$('.moon').css('margin-bottom', '100px');
	$('.moon').css('margin-left', '100px');
	$('.moon').css('margin-right', '1000px');

	setInterval(function(){

		console.log();

		var randomNumber = Math.random() * 500 + "px";

		$('.moon').css('margin-top', randomNumber);
		$('.moon').css('margin-bottom', randomNumber);
		$('.moon').css('margin-left', randomNumber);
		$('.moon').css('margin-right', randomNumber);

	}, 1000)

})


$('.moon').trigger("click")

