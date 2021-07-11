const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg, world, engine;
var snowImg = [];

function preload(){
backgroundImg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)
  if(frameCount % 20 === 0){
    snowImg.push(new Snow(random(100, 700), -50, 10))
  }
  for(var j = 0; j < snowImg.length; j++) {
    snowImg[j].display()
  }
  //drawSprites();
}