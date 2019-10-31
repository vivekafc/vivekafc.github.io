function initialise(){
  var canvas = document.getElementById("myCanvas");
}

var color = 0;

var paint = document.getElementById("paint");



document.getElementById("paint").onmousemove= function(event){
  /*console.log(event);*/
    var x = event.pageX - this.offsetLeft; 
    var y = event.pageY - this.offsetTop; 
  /*console.log ( x, y );*/
  var div = document.createElement("div");

  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.backgroundColor = "hsl(" + color + ", 100%, 50%)";
  paint.appendChild(div);

  color = color + 1;
}



generate();

function getPngChart() {
  var element = document.createElement('a');
  element.setAttribute('href', document.getElementById('myCanvas').toDataURL('image/png'));
  element.setAttribute('download', 'chart.png');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
