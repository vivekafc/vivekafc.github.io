function preload(){
  sound = loadSound('wind.mp3');
}

function setup(){
  let cnv = createCanvas(100,100);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(0);

  let spectrum = fft.analyze();


  let waveform = fft.waveform();

  context.lineWidth = waveform.length;


var step = Math.random(waveform)  ;
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


  let waveform = fft.waveform();

for(var i = 0; i < waveform.length; i++) {


  context.beginPath();
  context.moveTo(lines[i][0].x, lines[i][0].y);
  
  for(var j = 0; j < lines[i].length; j++) {
    context.lineTo(lines[i][j].x, lines[i][j].y);
  }

context.strokeStyle = Math.floor(Math.random() * 256);
  context.stroke();




}



// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}