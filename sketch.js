const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world, ground;
var ball;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true,
  }
  var ballOptions={
    restitution: 1,
  }
  ground = Bodies.rectangle(200,380,400,50,options);
  World.add(world, ground);
  console.log(ground);
  console.log(ground.position);

  ball = Bodies.circle(200,200,50, ballOptions);
  World.add(world,ball);
  console.log(ball);

}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 50, 50);

  
}