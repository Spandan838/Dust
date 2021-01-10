
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(510,630,150,20);
	box2 = new Box(565,620,20,70);
	box3 = new Box(445,620,20,70);
	//ball = new Paper(70,20,20,20);

	//Create the Bodies Here.
	
    //ground1 = new ground(width/2, height-35, width,10)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  //ball.display();
  //ground1.display();
  
  drawSprites();
 
}



