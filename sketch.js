var input;
var enter, enterImg;

var START = 0;
var PLAY1 = 1;
var PLAY2 = 2;
var PLAY3 = 3;
var PLAY4 = 4;
var END = 5;

var gameState = START;

function preload() {
  enterImg = loadImage("images/enter.png");
}





function setup() {
  createCanvas(650,650);

  input = createInput("Name");
  enter = createSprite(400,150);
  enter.addImage(enterImg);
  enter.scale = 1/8;
}

function draw() {
  background(0); 

  if (gameState === START) {
    textSize(20);
    text("Welcome to Harshil's Escape Room", 170,50);
    text("Please Enter Your Name: ",120,100);
    input.position(350,80);

    if (mousePressedOver(enter)) {
      gameState = PLAY1;
    }
 }

  if (gameState === PLAY1) {
    input.hide();
    enter.destroy();
  }











  drawSprites();
}