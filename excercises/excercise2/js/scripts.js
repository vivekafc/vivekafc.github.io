var rotate=true;




$('#name').click(function(){ 

	if(rotate===true){
	
	$('#name').css('-webkit-text-stroke-color', '#7731B6');
	rotate=false;

	}

	else{
		$("#name").css('-webkit-text-stroke-color', 'black')
		rotate=true;


	}

})



