
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,300,30);

	bob1 = new Bob(400,700);
	bob2 = new Bob(350,700);
	bob3 = new Bob(450,700);
	bob4 = new Bob(300,700);
	bob5 = new Bob(500,700);
	//bob6 = new Bob(250,400,50);
	//bob7 = new Bob(550,400,50);

	rope1=new Rope(bob1.body,roof.body,0);
	rope2=new Rope(bob2.body,roof.body,-50);
	rope3=new Rope(bob3.body,roof.body,50);
	rope4=new Rope(bob4.body,roof.body,-100);
	rope5=new Rope(bob5.body,roof.body,100);
	//rope6=new Rope(bob6.body,roof.body,-150,0);
	//rope7=new Rope(bob7.body,roof.body,150,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //bob6.display();
  //bob7.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //rope6.display();
  //rope7.display();
  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-100,y:-100})
	}
}


