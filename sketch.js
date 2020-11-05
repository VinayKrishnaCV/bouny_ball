//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground,ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = 
  {
    isStatic : true,
  }

  var ball_options =
  {
    restitution : 0.5
  }

  ground = Bodies.rectangle(200,300,400,30,ground_options);
  World.add(world,ground);
  console.log(ground);
  console.log(ground.position.x);

  //creating ball
  ball = Bodies.circle(200,0,25,ball_options);
  World.add(world,ball);
}

function draw() {
  //refreshing background
  background("black");  

  Engine.update(engine);
  
  //centring the rectangle
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
  circle(ball.position.x,ball.position.y,50)
}