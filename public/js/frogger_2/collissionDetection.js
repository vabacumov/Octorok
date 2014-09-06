WIDTH = $('#game-canvas').width()
HEIGHT = $('#game-canvas').height()
frog['radius'] = frogRadius

car1['width'] = carWidth
car1['height'] = carHeight
car2['width'] = carWidth
car2['height'] = carHeight
truck1['width'] = truckWidth
truck1['height'] = truckHeight
truck2['width'] = truckWidth
truck2['height'] = truckHeight

log1['width'] = logWidth
log1['height'] = logHeight
log2['width'] = logWidth
log2['height'] = logHeight
longLog1['width'] = longLogWidth
longLog1['height'] = longLogHeight
longLog2['width'] = longLogWidth
longLog2['height'] = longLogHeight


function checkVehicleCollision(vehicle){
  var distX = Math.abs(frog.x - (vehicle.x+vehicle.width/2));
  var distY = Math.abs(frog.y - (vehicle.y+vehicle.height/2));

  if (distX > (vehicle.width/2 + frog.radius)) { return false; }
  if (distY > (vehicle.height/2 + frog.radius)) { return false; }

  if (distX <= (vehicle.width/2)) { return true; }
  if (distY <= (vehicle.height/2)) { return true; }

  var dx=distX-vehicle.width/2;
  var dy=distY-vehicle.height/2;
  return (dx*dx+dy*dy<=(frog.radius*frog.radius));
}


var checkAllVehicleCollisions = function() {
  if(checkVehicleCollision(car1) || checkVehicleCollision(car2) || checkVehicleCollision(truck1) || checkVehicleCollision(truck2)) {
    frog.x = 400
    frog.y = 565
  }
}

var checkLogCollision = function(log) {
  var distX = Math.abs(frog.x - (log.x+log.width/2));
  var distY = Math.abs(frog.y - (log.y+log.height/2));

  if (distX > (log.width/4 + frog.radius)) { return false; }
  if (distY > (log.height/4 + frog.radius)) { return false; }

  if (distX <= (log.width/4) && distY <= (log.height/4)) {
    return true;
  }
}

var checkAllLogCollisions = function() {
  if(checkLogCollision(log1) || checkLogCollision(longLog1)) {
    frog.x += 10
  }
  if(checkLogCollision(log2) || checkLogCollision(longLog2)) {
    frog.x -= 10
  }
  stage.update();
}

createjs.Ticker.addEventListener('tick', checkAllVehicleCollisions)
createjs.Ticker.addEventListener('tick', checkAllLogCollisions)
