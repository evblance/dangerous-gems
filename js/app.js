
/* CONSTANTS */
// game area
const TILE_WIDTH = 101;
const TILE_HEIGHT = 83;
const GAME_WIDTH = 5;
const GAME_HEIGHT = 7;

// gem speed values
const BLUE_MIN_SPD = 40;
const BLUE_MAX_SPD = 80;
const GREEN_MIN_SPD = 100;
const GREEN_MAX_SPD = 180;
const ORANGE_MIN_SPD = 200;
const ORANGE_MAX_SPD = 380;

// lower gem roll 'probabilities' [for green (med) and orange (hard) - (remainder are blue)]
const LVL1_HARD_FLOOR = 95;
const LVL1_MED_FLOOR = 70;
const LVL2_HARD_FLOOR = 92;
const LVL2_MED_FLOOR = 60;
const LVL3_HARD_FLOOR = 88;
const LVL3_MED_FLOOR = 50;
const LVL4_HARD_FLOOR = 82;
const LVL4_MED_FLOOR = 40;
const LVL5_HARD_FLOOR = 76;
const LVL5_MED_FLOOR = 30;
const LVL6_HARD_FLOOR = 70;
const LVL6_MED_FLOOR = 25;
const LVL7_HARD_FLOOR = 66;
const LVL7_MED_FLOOR = 20;
const LVL8_HARD_FLOOR = 60;
const LVL8_MED_FLOOR = 15;
const LVL9_HARD_FLOOR = 50;
const LVL9_MED_FLOOR = 10;
const LVL10_HARD_FLOOR = 35;
const LVL10_MED_FLOOR = 5;


// function that generates a gem based on some probability constants
function generateGem(difficulty) {

  var roll = Math.floor(Math.random() * 100);
  var theGem;

  switch (difficulty) {
    case 1:
      if (roll > LVL1_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL1_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 2:
      if (roll > LVL2_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL2_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 3:
      if (roll > LVL3_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL3_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 4:
      if (roll > LVL4_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL4_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 5:
      if (roll > LVL5_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL5_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 6:
      if (roll > LVL6_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL6_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 7:
      if (roll > LVL7_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL7_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 8:
      if (roll > LVL8_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL8_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 9:
      if (roll > LVL9_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL9_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    case 10:
      if (roll > LVL10_HARD_FLOOR) {
        theGem = new Gem('orange');
      } else if (roll > LVL10_MED_FLOOR) {
        theGem = new Gem('green');
      } else {
        theGem = new Gem('blue');
      }
      break;
    default:
      theGem = new Gem('orange');
      break;
  }

  // Make the newly minted gem finalise its property values
  theGem.setSpeed();
  theGem.setSprite();
  theGem.setStartPos();

  return theGem;
}

// function that instantiates the correct number of gems based on the difficulty/level
function instantiateGems(difficulty) {

  var gemArr = [];
  var numGems = 3 + Math.floor(10*Math.log(difficulty));

  for (var i = 0; i < numGems; i++) {
      gemArr.push(generateGem(difficulty));
  }
  console.log(gemArr.length);
  return gemArr;
}

// Game object that tracks difficulty
var Game = function() {
  this.difficulty = 1;
}

Game.prototype.render = function() {
  var difficultyText = 'Level: ' + this.difficulty;
  document.getElementById('score').innerHTML = difficultyText;
}

Game.prototype.reset = function() {
  this.difficulty = 1;
}


// Gems (enemies) our player must avoid
var Gem = function(colour) {

    this.colour = colour
};

// method that allows a gem to set a random entry height
Gem.prototype.setStartY = function() {
  this.y = TILE_HEIGHT * Math.floor(Math.random() * (GAME_HEIGHT-3) + 1);
}

// method that allows a gem to set a random vertical starting position for itself and horizontal
// distance from the play canvas (trick to stagger gem 'release' time)
Gem.prototype.setStartPos = function() {

  this.x = Math.floor(Math.random() * 10*TILE_WIDTH) - 5*TILE_WIDTH;
  this.setStartY();
}

// method that allows a gem to set its correct sprite [avoids resorting to prototypal inheritance
// in creating three different Gem sub-classes for just one property (colour)]
Gem.prototype.setSprite = function() {

  switch (this.colour) {
    case 'blue':
      this.sprite = 'images/gem-blue.png';
      break;
    case 'green':
      this.sprite = 'images/gem-green.png';
      break;
    case 'orange':
      this.sprite = 'images/gem-orange.png';
      break;
    default:
      break;
  }
}

// method that allows a gem to set its speed based on its colour (and some randomness)
Gem.prototype.setSpeed = function() {

  switch (this.colour) {
    case 'blue':
      this.speed = Math.floor(Math.random() * (BLUE_MAX_SPD - BLUE_MIN_SPD + 1)) + BLUE_MIN_SPD;
      break;
    case 'green':
      this.speed = Math.floor(Math.random() * (GREEN_MAX_SPD - GREEN_MIN_SPD + 1)) + GREEN_MIN_SPD;
      break;
    case 'orange':
      this.speed = Math.floor(Math.random() * (ORANGE_MAX_SPD - ORANGE_MIN_SPD + 1)) + ORANGE_MIN_SPD;
      break;
    default:
      break;
  }
}

// Update the dangerous gem's position, required method for game
// Parameter: dt, a time delta between ticks
Gem.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // check if the gem has reached the edge of play area, if so then respawn it
    if (this.x >= GAME_WIDTH*TILE_WIDTH) {
      this.x = Math.floor(Math.random() * -7*TILE_WIDTH) - TILE_WIDTH;
      this.setStartY();
      this.setSpeed();
    }

    this.x += this.speed * dt;
    return;
};

// Draw the enemy on the screen, required method for game
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.sprite = 'images/char-princess-girl.png';
};

Player.prototype.setStartPos = function() {
  this.x = 2 * TILE_WIDTH;
  this.y = 6 * TILE_HEIGHT;
}

Player.prototype.handleInput = function(keyString) {
  // need to check whether the player can validly move as directed
  switch (keyString) {
    case 'left':
      if (this.x - TILE_WIDTH < 0) {
        break;
      } else {
        this.x -= TILE_WIDTH;
        break;
      }
    case 'right':
      if (this.x + TILE_WIDTH >= GAME_WIDTH*TILE_WIDTH) {
        break;
      } else {
        this.x += TILE_WIDTH;
        break;
      }
    case 'up':
      // NOTE: This should probably be a part of collision detection algorithm instead,
      //        so that the game difficulty is not being handled by a Player method.
      // This checks if the player has succeeded in reaching the next crossing (level)
      if (this.y - TILE_HEIGHT < 0) {
        player.setStartPos();
        theGame.difficulty += 1;
        allGems = instantiateGems(theGame.difficulty);
        break;
      } else {
        this.y -= TILE_HEIGHT;
        break;
      }
    case 'down':
      if (this.y + TILE_HEIGHT >= GAME_HEIGHT*TILE_HEIGHT) {
        break;
      } else {
        this.y += TILE_HEIGHT;
        break;
      }
    default:
      break;
  }
};

Player.prototype.update = function() {
  return;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var theGame = new Game();
var allGems = instantiateGems(theGame.difficulty);
var player = new Player();
player.setStartPos();
