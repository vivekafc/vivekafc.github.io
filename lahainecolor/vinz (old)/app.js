var url = "https://raw.githubusercontent.com/vivekafc/coreinteraction/master/homework/lahaine/color.json";

$.getJSON(url, function(data){
    console.log(data.vinz);
    //data.mycollection.sort();

    for (var i = 0; i < data.vinz.length; i++) {

       
        $("#app").append("<div class='section'><img src='" + data.vinz[i].image + "' ></div> ")
        // where is says "app" --> you can attach it to anything like any div to have the info show up in a specific area

        /*var $target = $('.wrapper');
		inView('.section').on('enter', function(el){
  		var color = $(el).attr('data-background-color');
 		$target.css('background-color', color );
		});*/

    }

})

