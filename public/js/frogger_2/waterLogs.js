var logWidth=50;
var logHeight=25;
var longLogWidth=75;
var longLogHeight=25;

var log1StartXPos=100;
var log1StartYPos=100;
var log2StartXPos=100;
var log2StartYPos=200;
var longLog1StartXPos=400;
var longLog1StartYPos=100;
var longLog2StartXPos=400;
var longLog2StartYPos=200;

var logArray1 = [];
var logArray2 = [];

var log1 = new createjs.Shape();
log1.graphics.beginFill("red").drawRect(0, 0, logWidth, logHeight);
log1.x = log1StartXPos;
log1.y = log1StartYPos;

var log2 = new createjs.Shape();
log2.graphics.beginFill("red").drawRect(0, 0, logWidth, logHeight);
log2.x = log2StartXPos;
log2.y = log2StartYPos;

var longLog1 = new createjs.Shape();
longLog1.graphics.beginFill("blue").drawRect(0, 0, longLogWidth, longLogHeight);
longLog1.x = longLog1StartXPos;
longLog1.y = longLog1StartYPos;

var longLog2 = new createjs.Shape();
longLog2.graphics.beginFill("blue").drawRect(0, 0, longLogWidth, longLogHeight);
longLog2.x = longLog2StartXPos;
longLog2.y = longLog2StartYPos;

logArray1.push(log1, longLog1);
logArray2.push(log2, longLog2);

stage.addChild(log1, log2, longLog1, longLog2);
stage.update();