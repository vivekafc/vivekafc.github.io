

function generate (){function randomInt(low, high){
    var random = parseInt(Math.random() * (high-low) + low);
    return random;
  }

  var counter = 0;
  while(counter<300){
    var d = document.createElement("div");
    d.style.backgroundColor = "hsl(" + randomInt(0,360) + ", 100%, 50%)"
    d.style.width = randomInt(10,500) + "px";
    d.style.height = randomInt(10,500) + "px";
    document.body.appendChild(d);
    counter = counter + 1;
  } 
    
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
