var j,jrun;
var bomb,b1;
var road,path;
var score = 0
var coin, money;

function preload(){
  //pre-load images
  jrun = loadAnimation('R1.png','R2.png')
  bomb = loadAnimation('bomb.png');
  path = loadAnimation('path.png');
  coin = loadAnimation('coin.png');
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road =createSprite(200,200);
  road.addAnimation('2',path);
  road.velocityY = 2;

  j = createSprite(300,350);
  j.addAnimation('1',jrun);
  j.scale = 0.05;

  b1 = createSprite(300,0);
  b1.addAnimation('2',bomb);
  b1.scale= 0.05;

  money = createSprite(100,0);
  money.addAnimation('2',coin);
  money.scale= 0.25;
  money.velocityY = 2;

  b1.velocityY = 1;
  background(0);
}

function draw() {


  score++;

  path.velocityY = path.velocityY*11;
  b1.velocityY = b1.velocityY*1.005;


  if(b1.y>420){
    b1.y = -10;
    b1.x = j.x;    
  }

  if(money.y>420){
    money.y = -10;
    money.x = 200;
  }

  j.x = World.mouseX;
  if(road.y>500){
    road.y= 200;
  }
  if(j.isTouching(b1)){
    gameEnd();
  }
  if(j.isTouching(money)){
    money.x = 200;
    money.y = 0;
    score += 100;
  }
  if(j.x>310){
    j.x = 309;
}
if(j.x<100){
  j.x = 101;
}
  console.log(j.x);
 
  drawSprites();

}
function gameEnd (){
  j.destroy();
  road.destroy();
  b1.destroy();
  money.destroy();
  background('white');
  text('You lost, Your score is = '+ score ,200,200);
  gs = 'end';
}