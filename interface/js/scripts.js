function preload(){
  sound = loadSound('wind.mp3');
}

function setup(){
  let cnv = document.querySelector('canvas');
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}


function generate (){var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

let waveform = fft.waveform();

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr); 
/*context.lineWidth = Math.floor(Math.random() * 4) + 1;*/
context.lineWidth = Math.random(waveform.length);

var step = Math.floor(Math.random() * waveform.length) + 5  ;
var lines = [];

for(var i = step; i <= size - step; i += step) {
    
  var line = [];
  for(var j = step; j <= size - step; j+= step) {
    var random = Math.random() * 10;
    var point = {x: j, y: i + random};
    line.push(point);
  } 
  lines.push(line);
}

for(var i = 0; i < lines.length; i++) {

  context.beginPath();
  context.moveTo(lines[i][0].x, lines[i][0].y);
  
  for(var j = 0; j < lines[i].length; j++) {
    context.lineTo(lines[i][j].x, lines[i][j].y);
  }

context.strokeStyle = Math.floor(Math.random() * 256);
  context.stroke();
}


function random_bg_color() {
    var q = Math.floor(Math.random() * 256);
    var r = Math.floor(Math.random() * 256);
    var m = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + q + "," + r + "," + m + ")";
 console.log(bgColor);
  
   canvas.style.background = bgColor;
    }

random_bg_color();}

generate();
