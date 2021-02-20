var play=1;
var end=0;
var gamestate=1;


var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodgroup, obstaclegroup,spawnobstacle,spawnfood
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 backround = loadImage("cartoon_natural_landscapes_beautiful_vector_585947.jpg")
}



function setup() {
  createCanvas(450,400)
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(500,350,900,10)
  ground.shapeColor="green"
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x)
  ground.visible =false;
   
//  obstacle=createSprite(400,315,20,20)
  
  
  foodgroup = new Group();
  obstaclegroup = new Group();
  
  score = 0;
}


function draw() {
background(backround)
     
  if(gamestate===play){
    
   if(keyDown("space") && monkey.y >= 139) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground); 
    
    
  }
  spawnobstacle();
  spawnfood();
  
  if(obstaclegroup.isTouching(monkey)){
        gameState = end;
    }
     else if(gamestate === end){
 ground.velocityX = 0;
    monkey.velocityY = 0;
    obstaclegroup.setVelocityXEach(0);
    foodgroup.setVelocityXEach(0);
        obstaclegroup.setLifetimeEach(-1);
    foodgroup.setLifetimeEach(-1);
     
     }
  
  
  drawSprites();
   text("Score: "+ score, 500,50);
}

function spawnobstacle() {
 if(frameCount % 60 === 0) {
     obstacle = createSprite (400,315,20,20)  
   obstacle.addImage(obstaceImage)
  obstacle.scale=0.2
     obstacle.velocityX = -6
    obstacle.lifetime = 300;
    obstaclegroup.add(obstacle);
 }
  
}

function spawnfood() {
if(frameCount % 90 === 0) {
   banana  = createSprite (350,180,20,20)  
   banana.addImage(bananaImage)
  banana.scale=0.1
     banana.velocityX = -8
    banana.lifetime = 500;
    foodgroup.add(banana);
 }

}


