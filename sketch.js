const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, HiddenRoof1, HiddenRoof2;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;


function setup() 
{
	createCanvas(1300, 700);
	
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800, 75, 600, 50);
	HiddenRoof1 = new HiddenRoof(195, 15, 600, 50);
	HiddenRoof2 = new HiddenRoof(1200, 15, 200, 50);

	bobObject1 = new Bob(600, 600, 50);
	bobObject2 = new Bob(700, 600, 50);
	bobObject3 = new Bob(800, 600, 50);
	bobObject4 = new Bob(900, 600, 50);
	bobObject5 = new Bob(1000, 600, 50);

	rope1 = new Rope(bobObject1.body, roof.body, -200);
	rope2 = new Rope(bobObject2.body, roof.body, -100);
	rope3 = new Rope(bobObject3.body, roof.body, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 100);
	rope5 = new Rope(bobObject5.body, roof.body, 200);
	
	Engine.run(engine);
  
}


function draw() 
{  
	background(48,22,8);
	
	roof.display();
	HiddenRoof1.display();
	HiddenRoof2.display();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	fill(48,22,8);
	stroke("pink");
	strokeWeight(22);
	textSize(20);
	text("# Press LEFT ARROW to swing the FIRST bob", 20, 70);
	text("# Press UP ARROW to swing the SECOND bob", 20, 145);
	text("# Press DOWN ARROW to swing the FOURTH bob", 20, 220);
	text("# Press RIGHT ARROW to swing the FIFTH bob", 20, 295);
	text("Newton's Cradle", 725, 50);

	drawSprites();
 
}

function keyPressed()
{
	if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-600,y:-600})
	}

	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bobObject2.body, bobObject2.body.position,{x:-600,y:-600})
	}
	
	if(keyCode === DOWN_ARROW)
	{
		Matter.Body.applyForce(bobObject4.body, bobObject4.body.position,{x:600,y:600})
	}

	if(keyCode === RIGHT_ARROW)
	{
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position,{x:600,y:600})
	}
}



