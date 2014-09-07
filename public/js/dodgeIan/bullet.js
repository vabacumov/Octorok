var Bullet = function (posX, posY, dx, dy) {
  this.radius = Math.random() * 10;
  this.damage = this.radius * 10;
  this.shape = new createjs.Shape();
  this.shape.graphics.beginFill("green").drawCircle(0, 0, this.radius);
  this.shape.x = posX;
  this.shape.y = posY;
  this.dx = dx;
  this.dy = dy;
  this.alive = true;
  var that = this;
  this.move = function() {
    if (that.shape.x + dx > canvas.width || that.shape.x + dx < 0) {
        dx = -dx;
      }
    if (that.shape.y + dy > canvas.height) {
      dy = -dy;
     }
    that.shape.x += dx;
    that.shape.y += dy;
  }
}

var fireBullet = function(bullet) {
  bullet.move();
  stage.update();
  console.log('fire');
}

var destroyBullet = function(bullet) {
  var bulletIndex = stage.children.indexOf(bullet.shape);
  stage.removeChildAt(bulletIndex);
  bullet.alive = false;
  delete bullet;
  console.log(bullet + "was removed from canvas");
}
