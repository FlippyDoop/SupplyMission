var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	RedFloor = createSprite(width/2, height-50, 200, 20)
	RedSide1 = createSprite((width/2)-100, height-90, 20, 100)
	RedSide2 = createSprite((width/2)+100, height-90, 20, 100)
	

	

	RedFloor.shapeColor = "red";
	RedSide1.shapeColor = "red";
	RedSide2.shapeColor = "red";


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//create a red zone
	RedFloorB = Bodies.rectangle(width/2, height-50, 200, 20 , {isStatic:true});
	RedSide1B = Bodies.rectangle((width/2)-100, height-90, width, 10 , {isStatic:true});
	RedSide2B = Bodies.rectangle((width/2)+100, height-90, width, 10 , {isStatic:true});

	World.add(world, RedFloorB);
	World.add(world, RedSide1B);
	World.add(world, RedSide2B);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);

    
  }
}



