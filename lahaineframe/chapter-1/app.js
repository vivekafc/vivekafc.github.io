var url = "https://raw.githubusercontent.com/vivekafc/coreinteraction/master/homework/lahaine/lahaine.json";

$.getJSON(url, function(data){
    console.log(data.chapter1);
    //data.mycollection.sort();

    for (var i = 0; i < data.chapter1.length; i++) {

       
        $("#app").append("<div class='aclass'><div>new class</div><img src='" + data.chapter1[i].image + "' ></div> ")
        $("#app").append("<h2>" + data.chapter1[i].title + "</h2>")
        $("#app").append("<h1>" + data.chapter1[i].description + "</h1>")
        // where is says "app" --> you can attach it to anything like any div to have the info show up in a specific area

    }
})



/*

var haine = [];


	$.getJSON(url, function(data){
		
		console.log(data, "test");

		console.log(data.name[0]);
		//this will log only the names and [0] will make it log only the first item

		haine.push(data);
		//pushing all the data into one array
		
		console.log(haine);
		
		


	});*/


/*document.getElementById("app").innerHTML = `

<h1>Welcome to my inspirations</h1>

<h1>It is currently divided into ${haine.length} categories.</h1>

${haine.map(function(haine) {
	
	return `
	
	<div class = "category" >
	<a href="${haine.url}"><img class = "category-photo" src="${haine.image}"></a>

	<h1>${haine.title}</h1>
	<h2>${haine.description}</h2>
	</div>

	`

})}
`*/