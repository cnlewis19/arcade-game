// Creaties enemy class and allows for them to be drawn on screen. Enemies are created later on in this file using the function below.
const Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

//Has enemy move across screen and once off screen restart from the other side of the screen. The -100 means that the enemy will come in from off screen.
Enemy.prototype.update = function(dt) {
   if (this.x < 495) {
     this.x += this.speed * dt;
   } else {
     this.x = -100;
   }
};
//Draws enemy based on specified x and y.
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Creates player class and specifies the pink girl to start at the middle/bottom of screen and draws player on the screen
class Player {
  constructor () {
    this.x = 205;
    this.y = 405;
    this.sprite = 'images/char-pink-girl.png';
  }
  //Draws girl on screen based on place
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //Moves player based on the arrow keystroke input, moves one box per key.
  handleInput(direction){
    switch(direction) {
      case 'up' :
        if (this.y > -11) {
          this.y -= 83;
        }
        break;
      case 'down' :
        if (this.y < 405) {
          this.y += 83;
        }
        break;
      case 'left' :
        if (this.x > 50) {
          this.x -= 100;
        }
        break;
      case 'right' :
        if (this.x < 405) {
          this.x += 100;
        }
        break;
    }
  }
  //Function for resetting the game, called when collision occurs or game is won.
  reset() {
    this.y = 405;
    this.x = 205;
  }
  //Update checks for collisions and checks if the game is won. If collision happens then the game is reset. If player wins, an alert is shown and game is reset.
  update(){
    for (let enemy of allEnemies) {
      //This code sourced from Matthew Cranford project walkthrough and adapted for the rest of the project code. Code test for collision and resets the game if there is a collision.
      if (this.y === enemy.y && (enemy.x + 50 > this.x && enemy.x -50 < this.x)) {
        this.reset();
      }
    }
    if (this.y === -10) {
      this.y -= 10;
      alert('You win!');
      this.reset();
    }
  }
}


// Creates player and enemies and places them at different places on the board
const enemy1 = new Enemy(05, 73, 150);
const enemy2 = new Enemy(105, 156, 50);
const enemy3 = new Enemy(305, 156, 200);
const enemy4 = new Enemy(05, 239, 100);
const enemy5 = new Enemy(405, 239, 200);
const allEnemies =[enemy1, enemy2, enemy3, enemy4, enemy5];
const player = new Player();



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
