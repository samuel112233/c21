var movingRect,fixedRect;
var box1,box2;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(600,200,50,50);
  fixedRect=createSprite(400,100,100,50);

  box1=createSprite(200,50,50,50);
  box2=createSprite(300,50,50,50);

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

  box1.shapeColor="green";
  box2.shapeColor="green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5; 
}

function draw() {
  background(0); 
 // movingRect.x=World.mouseX;
//movingRect.y=World.mouseY;

 bounceOff();


  
  drawSprites();
}




