
document.addEventListener("mousemove", function (event){

  const x = event.clientX - 25
  const y = event.clientY - 25

  const cursor = document.querySelector("#cursor")

  cursor.style.left = x + "px"
  cursor.style.top = y  + "px" 


})

var canvas = document.querySelector('canvas');

var musix = new Array("1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3", "7.mp3", "8.mp3", "9.mp3", "10.mp3");

var randomizer = musix[Math.floor(Math.random() * musix.length)];

function preload(){
  sound = loadSound(randomizer);

}

function setup(){
  let cnv = document.querySelector('canvas');
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}


function generate (){var canvas = document.querySelector('canvas');

var context = canvas.getContext('2d');

fft = new p5.FFT();
let waveform = fft.waveform();

console.log(waveform);

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr); 
context.lineWidth = waveform;


var step = Math.floor(Math.random(waveform) * 10)  ;
var lines = [];

for(var i = step; i <= size - step; i += step) {
    
  var line = [];
  for(var j = step; j <= size - step; j+= step) {
    var random = Math.random(waveform) * 10;
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

context.strokeStyle = Math.floor(Math.random(waveform) * 256);
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


function play(){

       var audio = sound;
       audio.play();


                 }

function reload(){
  window.location.reload(true);
}


  document.querySelector('canvas').onload="play()"




