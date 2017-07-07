/*  IDEAS FOR ADDITIONAL GAMEPLAY:
 *    - Add a randomly spawned key, which the player must collect before being allowed to
 *      advance to the next level
 *    - Add time constraints to the level progression
 *    - Allow gems to change their colour and hence speed after a certain amount of time has elapsed
 *    - For different gameplay, make gems unable to go through each other but rather slow down to the
 *      speed of the preceding gem if they are about to collide with it
 */


/* CONSTANTS */
// game area constants
var TILE_WIDTH = 101;
var TILE_HEIGHT = 83;
var GAME_WIDTH = 5;
var GAME_HEIGHT = 7;

// gem speed value constants
var BLUE_MIN_SPD = 40;
var BLUE_MAX_SPD = 80;
var GREEN_MIN_SPD = 100;
var GREEN_MAX_SPD = 180;
var ORANGE_MIN_SPD = 200;
var ORANGE_MAX_SPD = 380;

// Constants used to control the random gem 'probability' rolls according to difficulty level
// Used in generateGem function
// { blue gem } | MED_FLOOR | { green gem } | HARD_FLOOR | { orange gem }
var LVL1_HARD_FLOOR = 95;
var LVL1_MED_FLOOR = 70;
var LVL2_HARD_FLOOR = 92;
var LVL2_MED_FLOOR = 60;
var LVL3_HARD_FLOOR = 88;
var LVL3_MED_FLOOR = 50;
var LVL4_HARD_FLOOR = 82;
var LVL4_MED_FLOOR = 40;
var LVL5_HARD_FLOOR = 76;
var LVL5_MED_FLOOR = 30;
var LVL6_HARD_FLOOR = 70;
var LVL6_MED_FLOOR = 25;
var LVL7_HARD_FLOOR = 66;
var LVL7_MED_FLOOR = 20;
var LVL8_HARD_FLOOR = 60;
var LVL8_MED_FLOOR = 15;
var LVL9_HARD_FLOOR = 50;
var LVL9_MED_FLOOR = 10;
var LVL10_HARD_FLOOR = 35;
var LVL10_MED_FLOOR = 5;

/**
 * Function that generates gems according to the game difficulty level
 * @constructor
 * @param {integer} difficulty - The difficulty level of the game
 */
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

/**
 * Function that instatiates the correct number of gems according to difficulty
 * @constructor
 * @param {integer} difficulty - The difficulty level of the game
 */
function instantiateGems(difficulty) {

  var gemArr = [];
  var numGems = 3 + Math.floor(10*Math.log(difficulty));

  for (var i = 0; i < numGems; i++) {
      gemArr.push(generateGem(difficulty));
  }

  return gemArr;
}

/**
 * Object representing the Game
 * @constructor
 */
var Game = function() {

  this.difficulty = 1;
};

/**
 * Displays some game information to the screen
 * @constructor
 */
Game.prototype.render = function() {

  var difficultyText = 'Level: ' + this.difficulty;
  document.getElementById('score').innerHTML = difficultyText;
};

/**
* Performs resetting operations on the object when the game is over
* @constructor
*/
Game.prototype.reset = function() {

  this.difficulty = 1;
};


/**
* Represents Gems (enemy vehicles) our player must avoid
* @constructor
* @param {string} colour - The colour of the gem
*/
var Gem = function(colour) {

    this.colour = colour;
};

/**
* Method that allows a gem to set a random entry height into the game
* @constructor
*/
Gem.prototype.setStartY = function() {

  this.y = TILE_HEIGHT * Math.floor(Math.random() * (GAME_HEIGHT-3) + 1);
};

/**
* Method that allows a gem to set a random vertical starting position for itself
* and horizontal distance from the play canvas (trick to stagger gems)
* @constructor
*/
Gem.prototype.setStartPos = function() {

  this.x = Math.floor(Math.random() * 10*TILE_WIDTH) - 5*TILE_WIDTH;
  this.setStartY();
};

/**
* Method that allows a gem to set its correct sprite
* [avoids resorting to prototypal inheritance in creating three different Gem
* sub-classes for just one property (colour)]
* @constructor
*/
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
};

/**
* Method that allows a gem to set its speed based on its colour (and some randomness)
* @constructor
*/
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
};

/**
* Method that updates the dangerous gem's position
* @constructor
* @param {number} dt - Time delta between ticks of the game engine
*/
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

/**
* Method that draws the dangerous gems on the screen
* @constructor
*/
Gem.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
};


/**
 * Class that represents the player character in the game
 * @constructor
 */
var Player = function() {

  this.sprite = 'images/char-princess-girl.png';
};

/**
* Method that is used to set/reset the player character's starting position in the game
* @constructor
*/
Player.prototype.setStartPos = function() {

  this.x = 2 * TILE_WIDTH;
  this.y = 6 * TILE_HEIGHT;
};

/**
* Method that handles human player input while checking for valid movement
* @constructor
* @param {string} keyString - The string representing the key pressed by the gamer
*/
Player.prototype.handleInput = function(keyString) {
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
      // check if the player has succeeded in reaching the next game level
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

/**
* Method that could be removed if it wasn't required.
* @constructor
*/
Player.prototype.update = function() {

  return;
};

/**
* Method that renders the player character on the screen
* @constructor
*/
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

// Instantiation of game objects and assignment to variables
var theGame = new Game();
var allGems = instantiateGems(theGame.difficulty);
var player = new Player();
player.setStartPos();
