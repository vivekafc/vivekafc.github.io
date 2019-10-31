

function generate (){var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = window.innerWidth;
var step = 80;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = Math.random() * ['round', 'square'];
context.lineWidth = Math.floor(Math.random() * 100) + 1;


function draw(x, y, width, height) {
var leftToRight = Math.random() >= 0.1;

if(leftToRight) {
  context.moveTo(x, y);
  context.lineTo(x + width, y + height);    
} else {
  context.moveTo(x + width, y);
  context.lineTo(x, y + height);
}
context.strokeStyle = Math.floor(Math.random() * 256);
context.stroke();
}

for(var x = 0; x < size; x += step) {
  for(var y = 0; y < size; y+= step) {
    draw(x, y, step, step);    
  }
}


function random_bg_color() {
    var q = Math.floor(Math.random() * 256);
    var r = Math.floor(Math.random() * 256);
    var m = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + q + "," + r + "," + m + ")";
 console.log(bgColor);
  
   canvas.style.background = bgColor;
    }

random_bg_color();
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
