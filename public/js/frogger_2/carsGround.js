Controller = {}

Controller.Collision = function(character) {
  this.character = character;
  this.vehicles = [];
  this.logs = [];
}

Controller.Collision.prototype.checkIntersection = function(vehicle) {
  if (this.character.x > vehicle.x + vehicle.width || this.character.x + this.character.width < vehicle.x || this.character.y > vehicle.y + vehicle.height || this.character.y + this.character.height < vehicle.y ) {
    return false
  };
  return true;
}

Controller.Collision.prototype.checkAllVehicleCollisions = function() {
  for (var i in this.vehicles) {
    if (this.checkIntersection(this.vehicles[i])) {
      console.log('you been hit, son')
      resetFrogPosition();
      numOfFrogLives -= 1
    }
  }
}

var collisionController = new Controller.Collision(frog)


var vehicleCreator = function() {
  for (var i = 8; i < 13 ; i++) {
    if (i % 2 == 0) {
      collisionController.vehicles.push(new Vehicle(100, rowHeight * i - rowHeight - 5, "right"));
      collisionController.vehicles.push(new Vehicle(400, rowHeight * i - rowHeight - 5, "right"));
      collisionController.vehicles.push(new Vehicle(700, rowHeight * i - rowHeight - 5, "right"));
    } else {
      collisionController.vehicles.push(new Vehicle(100, rowHeight * i - rowHeight - 5, "left"));
      collisionController.vehicles.push(new Vehicle(400, rowHeight * i - rowHeight - 5, "left"));
      collisionController.vehicles.push(new Vehicle(700, rowHeight * i - rowHeight - 5, "left"));
    }
  }
  for (var i in collisionController.vehicles) {
    stage.addChild(collisionController.vehicles[i]);
    collisionController.vehicles[i].width = collisionController.vehicles[i].getBounds().width;
    collisionController.vehicles[i].height = collisionController.vehicles[i].getBounds().width;
  }
  stage.update();
}

vehicleCreator();
createjs.Ticker.addEventListener('tick', collisionController.checkAllVehicleCollisions.bind(collisionController))


var carWidth=100;
var carHeight=rowHeight - (canvas.height/60);
var truckWidth=180;
var truckHeight=rowHeight - (canvas.height/60);

xDifference = 300;
frogStartRoadXPos=0;
frogStartRoadYPos=borderHeight - rowHeight * 0 + (canvas.height/120);
car1StartXPos=100;
car1StartYPos=borderHeight - rowHeight * 2 + (canvas.height/120);
car2StartXPos=100;
car2StartYPos=borderHeight - rowHeight * 3 + (canvas.height/120);
carLane3StartXPos= 0;
carLane3StartYPos=borderHeight - rowHeight * 4 + (canvas.height/120);
carLane4StartXPos= 0;
carLane4StartYPos=borderHeight - rowHeight * 5 + (canvas.height/120);
carLane5StartXPos= 0;
carLane5StartYPos=borderHeight - rowHeight * 6 + (canvas.height/120);
grassLane6XPos= 0;
grassLane6YPos=borderHeight - rowHeight * 6 + (canvas.height/120);
truck1StartXPos=400;
truck1StartYPos=borderHeight - rowHeight * 2 + (canvas.height/120);
truck2StartXPos=400;
truck2StartYPos=borderHeight - rowHeight * 3 + (canvas.height/120);
frogEndGrassXPos=0
frogEndGrassYPos=borderHeight - rowHeight * 13 + (canvas.height/120);


var lane1Vel=10;
var lane2Vel=10;

var lane1 = [];
var lane2 = [];
var lane3 = [];
var lane4 = [];
var imgLane1 = [];
var imgLane2 = [];


var froggerStartRoad = new createjs.Bitmap("../assets/frogger_2/road.jpg");
froggerStartRoad.x = frogStartRoadXPos;
froggerStartRoad.y = frogStartRoadYPos - 50;
froggerStartRoad.scaleX = 2.5;
froggerStartRoad.scaleY = 1;

var froggerSafeMedian = new createjs.Bitmap("../assets/frogger_2/divider.jpg");
froggerSafeMedian.x = grassLane6XPos;
froggerSafeMedian.y = grassLane6YPos - 50;
froggerSafeMedian.scaleX = 2.5;
froggerSafeMedian.scaleY = .5;

var froggerEndGrass = new createjs.Bitmap("../assets/frogger_2/grass.png");
froggerEndGrass.x = frogEndGrassXPos;
froggerEndGrass.y = frogEndGrassYPos-10;
froggerEndGrass.scaleX = 2.3;
froggerEndGrass.scaleY = .7;


// var imageCar1 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/lingster/817_NYS-impala.png");
// imageCar1.x = car1StartXPos - 10;
// imageCar1.y = car1StartYPos -10;
// imageCar1.scaleX = 0.12;
// imageCar1.scaleY = 0.12;

// var imageTruck1 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/GroovyDave/2BE_schoolbus_GD.png");
// imageTruck1.x = truck1StartXPos - 6;
// imageTruck1.y = truck1StartYPos -7;
// imageTruck1.scaleX = 0.11;
// imageTruck1.scaleY = 0.09;

// var imageBus1 = new createjs.Bitmap("http://roadincorporated.com/images/uploads/ferrari_250/top.png");
// imageBus1.x = car1StartXPos - 10;
// imageBus1.y = car1StartYPos -10;
// imageBus1.scaleX = 0.15;
// imageBus1.scaleY = 0.15;

// var imageCar2 = new createjs.Bitmap("http://roadincorporated.com/images/uploads/ferrari_250/top.png");
// imageCar2.x = car2StartXPos - 10;
// imageCar2.y = car2StartYPos -10;
// imageCar2.scaleX = 0.15;
// imageCar2.scaleY = 0.15;

// var imagetruck2 = new createjs.Bitmap("http://www.dundjinni.com/forums/uploads/heruca/Fire_Truck2_SR_hrc.png");
// imagetruck2.x = truck2StartXPos -3;
// imagetruck2.y = truck2StartYPos - 3;
// imagetruck2.scaleX = 0.25;
// imagetruck2.scaleY = 0.15;

// var imagebus2 = new createjs.Bitmap("http://www.clker.com/cliparts/6/2/7/e/w/Q/blue-bus-180-hi.png");
// imagebus2.x = 710;
// imagebus2.y = 440;
// imagebus2.scaleX = 0.3;
// imagebus2.scaleY = 0.3;

// var imgLane1 = [imageCar1, imageTruck1, imageBus1];
// var imgLane2 = [imageCar2, imagetruck2, imagebus2];

// var car1 = new createjs.Shape();
// car1.graphics.beginFill("white").drawRect(0, 0, carWidth, carHeight);
// car1.x = car1StartXPos;
// car1.y = car1StartYPos;

// var car2 = new createjs.Shape();
// car2.graphics.beginFill("white").drawRect(0, 0, carWidth, carHeight);
// car2.x = car2StartXPos;
// car2.y = car2StartYPos;

// var truck1 = new createjs.Shape();
// truck1.graphics.beginFill("white").drawRect(0, 0, truckWidth, truckHeight);
// truck1.x = truck1StartXPos;
// truck1.y = truck1StartYPos;

// var truck2 = new createjs.Shape();
// truck2.graphics.beginFill("white").drawRect(0, 0, truckWidth, truckHeight);
// truck2.x = truck2StartXPos;
// truck2.y = truck2StartYPos;

// var car4 = new createjs.Shape();
// car4.graphics.beginFill("red").drawRect(0, 0, carWidth, carHeight);
// car4.x = carLane3StartXPos + (xDifference *1);
// car4.y = carLane3StartYPos;

// var car5 = new createjs.Shape();
// car5.graphics.beginFill("blue").drawRect(0, 0, carWidth, carHeight);
// car5.x = carLane3StartXPos + (xDifference * 2);
// car5.y = carLane3StartYPos;

// var car6 = new createjs.Shape();
// car6.graphics.beginFill("green").drawRect(0, 0, carWidth, carHeight);
// car6.x = carLane3StartXPos + (xDifference * 3);
// car6.y = carLane3StartYPos;

// var car7 = new createjs.Shape();
// car7.graphics.beginFill("black").drawRect(0, 0, carWidth, carHeight);
// car7.x = carLane3StartXPos + (xDifference * 4 );
// car7.y = carLane3StartYPos;

// var car8 = new createjs.Shape();
// car8.graphics.beginFill("red").drawRect(0, 0, carWidth, carHeight);
// car8.x = carLane4StartXPos + (xDifference *1);
// car8.y = carLane4StartYPos;

// var car9 = new createjs.Shape();
// car9.graphics.beginFill("blue").drawRect(0, 0, carWidth, carHeight);
// car9.x = carLane4StartXPos + (xDifference * 2);
// car9.y = carLane4StartYPos;

// var car10 = new createjs.Shape();
// car10.graphics.beginFill("green").drawRect(0, 0, carWidth, carHeight);
// car10.x = carLane4StartXPos + (xDifference * 3);
// car10.y = carLane4StartYPos;

// var car11 = new createjs.Shape();
// car11.graphics.beginFill("black").drawRect(0, 0, carWidth, carHeight);
// car11.x = carLane4StartXPos + (xDifference * 4 );
// car11.y = carLane4StartYPos;

// var car12 = new createjs.Shape();
// car12.graphics.beginFill("red").drawRect(0, 0, carWidth, carHeight);
// car12.x = carLane4StartXPos + (xDifference *1);
// car12.y = carLane5StartYPos;

// var car13 = new createjs.Shape();
// car13.graphics.beginFill("blue").drawRect(0, 0, carWidth, carHeight);
// car13.x = carLane4StartXPos + (xDifference * 2);
// car13.y = carLane5StartYPos;

// var car14 = new createjs.Shape();
// car14.graphics.beginFill("green").drawRect(0, 0, carWidth, carHeight);
// car14.x = carLane4StartXPos + (xDifference * 3);
// car14.y = carLane5StartYPos;

// var car15 = new createjs.Shape();
// car15.graphics.beginFill("black").drawRect(0, 0, carWidth, carHeight);
// car15.x = carLane4StartXPos + (xDifference * 4 );
// car15.y = carLane5StartYPos;

// lane1.push(car1, truck1);
// lane2.push(car2, truck2);
// lane3 = [car4, car5, car6, car7];
// lane4 = [car8, car9, car10, car11];
// lane5 = [car12, car13, car14, car15];

// var vehicles = [car1,truck1,car2,truck2,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15]
// stage.addChild(car1, car2, truck1, truck2, imgLane2[0], imgLane2[1], imgLane1[0],imgLane1[1], car4, car5, car6, car7, car8, car9, car10, car11, car12, car13, car14, car15, froggerSafeMedian, froggerStartRoad, froggerEndGrass);
// stage.update();

var moveObjects = function() {
  for (var i in logs) {
    if (logs[i].direction == "right") {
      if (logs[i].x > stage.canvas.width + 100) { logs[i].x = -100 }
        logs[i].x += logs[i].speed;
    } else {
      if (logs[i].x < -110) { logs[i].x = stage.canvas.width + 50 }
        logs[i].x -= logs[i].speed;
    }
    stage.update();
  }
  for (var i in collisionController.vehicles) {
    if (collisionController.vehicles[i].direction == "right") {
      if (collisionController.vehicles[i].x > stage.canvas.width + 100) { collisionController.vehicles[i].x = -100 }
        collisionController.vehicles[i].x += collisionController.vehicles[i].speed;
    } else {
      if (collisionController.vehicles[i].x < -110) { collisionController.vehicles[i].x = stage.canvas.width + 50 }
        collisionController.vehicles[i].x -= collisionController.vehicles[i].speed;
    }
    stage.update();
  }
}

createjs.Ticker.addEventListener("tick", moveObjects);
