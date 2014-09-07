var Player = function(name, posX, posY, radius, gravatar){
  this.radius = radius
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("red").drawCircle(0, 0, radius);
  this.name = name;
  this.shape.x = posX;
  this.shape.y = posY;
  this.stepSize = 10;
  this.hp = 100;
  this.alive = true;
  var that = this;
  this.step = function(direction) {
    if (direction == "left") {
      that.shape.x -= this.stepSize;
    } else {
      that.shape.x += this.stepSize;
    }
  }
}

var antonio = new Player("Antonio", 400, 30, 30);

stage.addChild(antonio.shape);
stage.update();

var movePlayer = function(event) {
  if (event['keyCode'] === 39 ) {
    antonio.step("right");
    console.log("right");
    stage.update();
  }
  if (event['keyCode'] === 37 ) {
    antonio.step("left");
    console.log("left");
    stage.update();
  }
}

$(document).on('keydown', movePlayer);

createjs.Ticker.addEventListener('tick', movePlayer);
