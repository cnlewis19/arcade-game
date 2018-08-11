// Creaties enemy class and allows for them to be drawn on screen
const Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
   if (this.x < 495) {
     this.x += this.speed * dt;
   } else {
     this.x = 0;
   }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Creates player class and draws player on the screen
class Player {
  constructor () {
    this.x = 207;
    this.y = 400;
    this.sprite = 'images/char-pink-girl.png';
  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //Moves player based on the arrow keystroke input
  handleInput(direction){
    switch(direction) {
      case 'up' :
        if (this.y > 0) {
          this.y -= 83;
        }
        break;
      case 'down' :
        if (this.y < 400) {
          this.y += 83;
        }
        break;
      case 'left' :
        if (this.x > 50) {
          this.x -= 101;
        }
        break;
      case 'right' :
        if (this.x < 405) {
          this.x += 101;
        }
        break;
    }
  }
  update()
}


// Creates player and enemies and places them at different places on the board
const enemy1 = new Enemy(10, 55, 150);
const enemy2 = new Enemy(101, 135, 100);
const enemy3 = new Enemy(303, 135, 200);
const enemy4 = new Enemy(10, 230, 150);
const enemy5 = new Enemy(400, 230, 200);
let allEnemies =[enemy1, enemy2, enemy3, enemy4, enemy5];
let player = new Player();



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
