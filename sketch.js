var boy,boy_animation,brick_img,brick,bg,bgimg;
var bricksGroup,window_img;
function preload(){
 boy_animation=loadAnimation("assets/boy1.png","assets/boy2.png","assets/boy3.png","assets/boy4.png")
brick_img=loadImage("assets/brick2.png")
bgimg=loadImage("assets/background2.jpg")
window_img=loadImage("assets/window.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bg=createSprite(windowWidth/2,windowHeight/2,windowHeight,windowHeight)
 bg.addImage(bgimg)
 bg.scale=3
 bg.velocityX=-3
  boy= createSprite(100, height-150, 50, 50);
 boy.addAnimation("running",boy_animation)
 bricksGroup=new Group();
}

function draw() {
  background(255,255,255);  
  if(bg.x<0){
    bg.x=bg.width/2
  }
  spwanbricks();
  spwanWindows();
  drawSprites();
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function spwanbricks() {
 
    //write code here to spawn the clouds
    if (frameCount % 120 === 0) {
      var brick = createSprite(600,120,40,10);
      brick.y = Math.round(random(windowHeight-200,windowHeight-100));
      brick.addImage(brick_img);
      brick.scale = 0.2;
      brick.velocityX = -3;
      
       //assign lifetime to the variable
      brick.lifetime = 800;
      
      //adjust the depth
      //cloud.depth = trex.depth;
      //trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      bricksGroup.add(brick);
    }
    
  } 

  
function spwanWindows() {
 
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var castleWindow = createSprite(windowWidth,windowWidth/8,50,50);
    //brick.y = Math.round(random(windowHeight-200,windowHeight-100));
    castleWindow.addImage(window_img);
    castleWindow.scale = 0.5;
    castleWindow.velocityX = -3;
    
     //assign lifetime to the variable
     castleWindow.lifetime = 800;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //bricksGroup.add(brick);
  }
  
} 

