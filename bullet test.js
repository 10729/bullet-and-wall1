var bullet;
var wall;
var speed = random(0,10);
speed = bullet.velocityX;
var weight = random(100,200);
function setup(){
    createCanvas(400,400);
    bullet = createSprite(10,200,10,10);
    wall = createSprite(360,400,20,360);

}
function draw(){
   background(220);
   speed = bullet.velocityX;
   bullet.collide(wall)
   if(speed>5&&weight>150 && bullet.isTouching(wall)){
       Text("good",0,15);
   }
   else{
       Text("bad",0,15)
   }
}