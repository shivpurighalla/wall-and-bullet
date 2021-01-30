var bullet,wall;
var speed;
var df,weight;
function setup() {
  createCanvas(1600,400);
  var thickness = Math.round(random(22,83));
 wall=createSprite(1400,100,20,200);
 wall.shapeColor="grey";
 bullet=createSprite(50,100,15,5);
 bullet.shapeColor="white";

 speed=random(223,321);
 weight=random(30,52);
 bullet.velocityX=speed;
 df=0.5*speed*speed*weight/wall.width*wall.width;
}

function draw() {
  background("black");
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
  }
  if(df > 10 ){
    wall.shapeColor = "red";
}
else if(df>8 && df <=10){
  wall.shapeColor = "yellow";
}
else {
  wall.shapeColor = "green";
}
  drawSprites();
}