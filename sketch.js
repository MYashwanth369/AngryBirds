
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1;
var box2;
var ground;
var gravity=0.5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     box1 = new Box(200,100,50,50);
	 box1 = new Box(100,50,50,100);
	
     ground = new Ground(200,691,1500,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  box1.display();
 
  ground.display();
  box2.display();
}



