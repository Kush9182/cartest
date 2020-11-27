var car, wall; 
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  deformation=0.5*weight*speed*speed/22500;

  wall=createSprite(1500, 200, 60, 200);
  wall.shapeColor=rgb(80,80,80);

  car=createSprite(200,200,30,30);
  car.shapeColor="white";
}

function draw() {
  background("black");  
 
  car.velocityX=speed;
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;}

  if(wall.x-car.x<wall.width/2+car.width/2  && deformation<100){
    car.shapeColor=rgb(0,255,0);}
    
  if(wall.x-car.x<wall.width/2+car.width/2 && deformation>100&&deformation<180){
    car.shapeColor=rgb(230,230,0);}
  
  if(wall.x-car.x<wall.width/2+car.width/2 && deformation>180){
    car.shapeColor=rgb(255,0,0);}  
 
  drawSprites();
}