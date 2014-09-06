var borderWidth=stage.canvas.width;
var borderHeight=stage.canvas.height;
var frogRadius= borderHeight / 26;
var move_distance = borderHeight / 13

var frogXStart=borderWidth/2;
var frogYStart=borderHeight - frogRadius;

var frog = new createjs.Shape();
frog.graphics.beginFill("black").drawCircle(0, 0, frogRadius);
frog.x = frogXStart;
frog.y = frogYStart;

stage.addChild(frog);
stage.update();

$(document).on('keyup', movefrog)

function movefrog(event){
    if (event['keyCode'] === 39 ) {
      frog.x = frog.x + move_distance
      if(frog.x >= (borderWidth-frogRadius)){
        frog.x = borderWidth-frogRadius;
      }
      stage.update()
    }
    if (event['keyCode'] === 37 ) {
      frog.x = frog.x - move_distance
      if(frog.x <= frogRadius){
        frog.x = frogRadius;
      }
      stage.update()
    }
    if (event['keyCode'] === 40 ) {
      frog.y = frog.y + move_distance
      if(frog.y >= (borderHeight - frogRadius)){
        frog.y = borderHeight - frogRadius;
      }
      stage.update()
    }
    if (event['keyCode'] === 38 ) {
      frog.y = frog.y - move_distance
      if(frog.y <= frogRadius){
        frog.y = frogRadius;
      }
      stage.update()
    }
}

