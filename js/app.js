/*
  Enemies will be 3 differently coloured gems where:
    1. Blue has the slowest speed range
    2. Green has an intermediate speed range
    3. Yellow has the highest speed range

  - If the player has won the game should reset but also increase in difficulty
    by presenting a higher proportion of randomly higher colour gems (green, yellow)

  - If the player loses the game the should rest but return the difficulty to the
    lowest level.

  - A counter keeps track of how many consecutive times the player has won the game

*/

function setEnemySpeed(Gem) {
  switch (Gem.colour) {
    case 'blue':
      // some stuff here
      break;
    case 'green':
      // some stuff here
      break;
    case 'orange':
      // some stuff here
      break;
    default:
      break;
  }
}


var BlueGem = function() {
  this.sprite = 'images/gem-blue.png';
};

var GreenGem = function() {
  this.sprite = 'images/gem-green.png';
};

var OrangeGem = function() {
  this.sprite = 'images/gem-orange.png';
};


// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/Rock.png';

    this.position = {
      x: undefined,
      y: undefined
    }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.sprite = 'images/char-princess-girl.png';

  this.position = {
    x: 2,
    y: 0
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
