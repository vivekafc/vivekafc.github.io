var clock = document.getElementById("clock");

function getDate(){

var d = new Date();
var t = d.toLocaleTimeString();
clock.innerHTML = t;

}

getDate()

setInterval(function(){
	getDate()
},1000)

function fontFunction(){

	var font = document.getElementById("myFonts").value;
	clock.style.fontFamily = font;

}
