var queue;
queue = new createjs.LoadQueue();
queue.installPlugin(createjs.Sound);
queue.loadManifest([
  {id: "die", src: "../assets/frogger_2/Frog_die.mp3"},
  {id: "marioJump", src: "../assets/frogger_2/frog_hop.mp3"},
  {id: "jumpInSlot", src: "../assets/frogger_2/frog_get_to_top.mp3"},
  {id: "playingSong", src: "../assets/frogger_2/playingSong.mp3"},
  {id: "endSong", src: "../assets/frogger_2/frogger_end_song.mp3"}]);

var startButton = new createjs.Shape();
startButton.graphics.beginFill("black").drawCircle(0,0, 500);
startButton.addEventListener("click", playSong);
startButton.x = canvas.width/2;
startButton.y = canvas.height/2;
stage.addChild(startButton);
stage.update();

var welcomeText = new createjs.Text("Welcome to Frogger", "36px Arial", "#277C27");
welcomeText.x = 30;
welcomeText.y = 100;
stage.addChild(welcomeText);
stage.update();

var clickToPlayText = new createjs.Text("Click to Start!", "36px Arial", "#277C27");
clickToPlayText.x = canvas.width/4 ;
clickToPlayText.y = 250;
stage.addChild(clickToPlayText);
stage.update();

function playSong(event){
  stage.removeChild(startButton, welcomeText, clickToPlayText);
  stage.update();
  createjs.Sound.stop("playingSong");
  console.log("click");
  var replay = true;
  var replaying = createjs.Sound.play("playingSong");
  replaying.addEventListener("complete", replayMainSong);
}

function replayMainSong(){
  var replaying = createjs.Sound.play("playingSong");
  replaying.addEventListener("complete", playSong);
  stage.update();
}


var Frog = function(posX, posY) {
  this.lives = 3;
  var that = this;
  this.x = frogXStart;
  this.y = frogYStart;
  this.width = this.getBounds().width;
  this.height = this.getBounds().height;
  this.keepInBounds = function() {
    if (that.x >= (canvas.width - that.width)) {
      that.x = canvas.width - that.width;
    }
    if (that.x <= that.width) {
      that.x = that.width;
    }
    if (that.y >= (gameBottomStart - that.height)) {
      that.y = gameBottomStart - that.height - 1;
    }
    if (that.y <= that.height){
      that.y = that.height;
    }
  };
  this.move = function(direction) {
    if (direction == "up") { that.y = that.y - verticalMoveDistance; }
    if (direction == "down") { that.y = that.y + verticalMoveDistance; }
    if (direction == "left") { that.x = that.x - horizontalMoveDistance; }
    if (direction == "right") { that.x = that.x + horizontalMoveDistance; }
  };
  this.on('animationend', function(){
  switch (this.currentAnimation){
      case "frogJumpUp":
        this.gotoAndStop("frogJumpUp");
        break;
      case "frogJumpDown":
        this.gotoAndStop("frogJumpDown");
        break;
      case "frogJumpLeft":
        this.gotoAndStop("frogJumpLeft");
        break; 
      case "frogJumpRight":
        this.gotoAndStop("frogJumpRight");
        break;
    }
  })
}

Frog.prototype = new createjs.Sprite(froggerSpriteData, "frogJumpUp");
