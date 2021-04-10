const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var box;


function setup() {
  createCanvas(800,400);
//create your own engine
engine=Engine.create();
//create your world
world=engine.world;

 //create your physical bodies

 //i made options but i didnt use them
var box_options={
  isStatic : true
}

 box=Bodies.rectangle(400,370,800,20,box_options);
 World.add(world,box);
 
 var ball_options={
   restitution:1
  }
ball=Bodies.circle(190,80,40, ball_options); 
World.add(world,ball);

}

function draw() {
  
 //run the engine
 Engine.update(engine)
 background(0);
  
  rectMode(CENTER);
  //shape , drawing
  fill("green")
  rect(box.position.x,box.position.y,800,20);
  
  //shape
  ellipseMode(RADIUS);
  fill("blue")
  ellipse(ball.position.x,ball.position.y,40,40);

}