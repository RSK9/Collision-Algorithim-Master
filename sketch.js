var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ABCD =createSprite (300,300,40,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (touching(movingRect, ABCD))
{
    movingRect.shapeColor = "red";
    ABCD.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    ABCD.shapeColor = "green";
  }
  drawSprites();
}
