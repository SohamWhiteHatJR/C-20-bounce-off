var movingRect , fixedRect ; 

function setup() {
  createCanvas(600,600);
 
  movingRect = createSprite(200,800,60,80);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  
  fixedRect = createSprite(200,100,90,90);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0);  

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
  
   if( movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2 ){

    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);

  }

  drawSprites();
}