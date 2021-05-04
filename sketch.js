
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var ball;
var r1;
var r2;
var ball2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
roof=new Roof(40)
ball=new Ball(150,150)
r1=new Rope(roof.a,ball.b,20)
	//Create the Bodies Here.
ball2=new Ball(-50,150)
r2=new Rope(roof.a,ball2.b,-50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display()
  ball.display()
  r1.display()
  ball2.display()
  r2.display()
  drawSprites();
 
}



