var body = document.body;

/*function boldFunction(){

document.getElementById("name").style.color = "blue";
document.getElementById("name").style.fontFamily = "Arial";
document.getElementById("name").style.fontSize = "larger";
document.getElementById("body").style.background = "grey";
	
	}*/



var clock = document.getElementById("name");

function colourFunction() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

var colourFunc = function colourFunction() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

function sizeFunction(){

	var checkSize = document.getElementById("size").value;

	clock.style.fontSize = checkSize + "px";
	clock.style.color = colourFunc;

}

$('p').click(function(){ 
	
	var checkSize = document.getElementById("size").value;

	clock.style.fontSize = checkSize + "px";

})

$('p').click(function(){ 
	
function colourFunction() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}

})



$('p').click(function(){

	function randLetter() { 
    var letters = ["bajk", "bvek", "bajak", "bajek", "bajajivek", "vibajaj", "vivejaj", "vijaj", "bavivek", "bajvivek", "bajavivek"];
    var name = letters[Math.floor(Math.random() * letters.length)];
    return name
}

$('p').html(randLetter());})



$('p').trigger("click")

