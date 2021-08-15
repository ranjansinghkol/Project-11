var runner, runnnerAnim;
var path, pathImg;
var invisWall, invisWall2;

function preload(){
  //pre-load images
  runnerAnim = loadAnimation('Runner-1.png', 'Runner-2.png');
  pathImg = loadImage('path.png');
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.scale = 1.2;
  path.velocityY = 4;

  runner = createSprite(200, 350);
  runner.addAnimation('running', runnerAnim);
  runner.scale = 0.05;

  invisWall = createSprite(390, 200, 20, 400);
  invisWall.visible = false;

  invisWall2 = createSprite(10, 200, 20, 400);
  invisWall2.visible = false;
}

function draw() {
  background(0);

  runner.x = mouseX;

  runner.collide(invisWall);
  runner.collide(invisWall2);

  if(path.y>545){
    path.y = 400;
  }

  drawSprites();
}