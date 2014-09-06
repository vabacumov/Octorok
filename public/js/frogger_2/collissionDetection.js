frog['radius'] = frogRadius
car1['width'] = carWidth
car1['height'] = carHeight
car2['width'] = carWidth
car2['height'] = carHeight
truck1['width'] = truckWidth
truck1['height'] = truckHeight
truck2['width'] = truckWidth
truck2['height'] = truckHeight


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
    console.log('FROG WAS HIT!')
  }
}

createjs.Ticker.addEventListener('tick', checkAllVehicleCollisions)