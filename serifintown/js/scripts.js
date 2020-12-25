
var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
var SPACE_KEY = 32;
var HERO_MOVEMENT = 3;

var lastLoopRun = 0;
var score = 0;
var iterations = 0;

var controller = new Object();
var enemies = new Array();

function createSprite(element, x, y, w, h) {
  var result = new Object();
  result.element = element;
  result.x = x;
  result.y = y;
  result.w = w;
  result.h = h;
  return result;
}

function toggleKey(keyCode, isPressed) {
  if (keyCode == LEFT_KEY) {
    controller.left = isPressed;
  }
  if (keyCode == RIGHT_KEY) {
    controller.right = isPressed;
  }
  if (keyCode == UP_KEY) {
    controller.up = isPressed;
  }
  if (keyCode == DOWN_KEY) {
    controller.down = isPressed;
  }
  if (keyCode == SPACE_KEY) {
    controller.space = isPressed;
  }  
}

function intersects(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function ensureBounds(sprite, ignoreY) {
  if (sprite.x < 20) {
    sprite.x = 20;
  }
  if (!ignoreY && sprite.y < 20) {
    sprite.y = 20;
  }
  if (sprite.x + sprite.w > 1368) {
    sprite.x = 1368 - sprite.w;
  }
  if (!ignoreY && sprite.y + sprite.h > 1368) {
    sprite.y = 1368 - sprite.h;
  }
}

function setPosition(sprite) {
  var e = document.getElementById(sprite.element);
  e.style.left = sprite.x + 'px';
  e.style.top = sprite.y + 'px';
}

function handleControls() {
  if (controller.up) {
    hero.y -= HERO_MOVEMENT;
  }
  if (controller.down) {
    hero.y += HERO_MOVEMENT;
  }
  if (controller.left) {
    hero.x -= HERO_MOVEMENT;
  }
  if (controller.right) {
    hero.x += HERO_MOVEMENT;
  }
  if (controller.space) {
    var laser = getFireableLaser();
    if (laser) {
			laser.x = hero.x + 9;
			laser.y = hero.y - laser.h;
		}
  }
  ensureBounds(hero);
}

function getFireableLaser() {
  var result = null;
  for (var i = 0; i < lasers.length; i++) {
    if (lasers[i].y <= -120) {
      result = lasers[i];
    }
  }
  return result;
}

function getIntersectingLaser(enemy) {
  var result = null;
  for (var i = 0; i < lasers.length; i++) {
    if (intersects(lasers[i], enemy)) {
      result = lasers[i];
      break;
    }
  }
  return result;
}

function checkCollisions() {
  for (var i = 0; i < enemies.length; i++) {
    var laser = getIntersectingLaser(enemies[i]);
    if (laser) {
      var element = document.getElementById(enemies[i].element);
      element.style.visibility = 'hidden';
      element.parentNode.removeChild(element);
      enemies.splice(i, 1);
      i--;
      laser.y = -laser.h;
      score += 100;
    } else if (intersects(hero, enemies[i])) {
      gameOver();
    } else if (enemies[i].y + enemies[i].h >= 500) {
      var element = document.getElementById(enemies[i].element);
      element.style.visibility = 'hidden';
      element.parentNode.removeChild(element);
      enemies.splice(i, 1);
      i--;
    }
  }
}

function gameOver() {
  var element = document.getElementById(hero.element);
  element.style.visibility = 'hidden';
  element = document.getElementById('gameover');
  element.style.visibility = 'visible';
}

function showSprites() {
  setPosition(hero);
  for (var i = 0; i < lasers.length; i++) {
    setPosition(lasers[i]);
  }
  for (var i = 0; i < enemies.length; i++) {
    setPosition(enemies[i]);
  }
  var scoreElement = document.getElementById('score');
  scoreElement.innerHTML = 'SCORE: ' + score;
}

function updatePositions() {
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].y += 4;
    enemies[i].x += getRandom(7) - 3;
    ensureBounds(enemies[i], true);
  }
  for (var i = 0; i < lasers.length; i++) {
    lasers[i].y -= 12;
  }
}

function addEnemy() {
  var interval = 50;
  if (iterations > 1500) {
    interval = 5;
  } else if (iterations > 1000) {
    interval = 20;
  } else if (iterations > 500) {
    interval = 35;
  }
  
  if (getRandom(interval) == 0) {
    var elementName = 'enemy' + getRandom(10000000);
    var enemy = createSprite(elementName, getRandom(1000), -40, 35, 35);
    
    var element = document.createElement('div');
    element.id = enemy.element;
    element.className = 'enemy'; 
    document.children[0].appendChild(element);
    
    enemies[enemies.length] = enemy;
  }
}

function getRandom(maxSize) {
  return parseInt(Math.random() * maxSize);
}

function loop() {
  if (new Date().getTime() - lastLoopRun > 40) {
    updatePositions();
    handleControls();
    checkCollisions();
    
    addEnemy();
    
    showSprites();
    
    lastLoopRun = new Date().getTime();
    iterations++;
  }
  setTimeout('loop();', 2);
}

document.onkeydown = function(evt) {
  toggleKey(evt.keyCode, true);
};

document.onkeyup = function(evt) {
  toggleKey(evt.keyCode, false);
};

var hero = createSprite('hero', 250, 460, 20, 20);
var lasers = new Array();
for (var i = 0; i < 3; i++) {
  lasers[i] = createSprite('laser' + i, 0, -120, 2, 50);
}

loop();