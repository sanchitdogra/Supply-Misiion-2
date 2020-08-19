var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1Sprite,box2Sprite,box3Sprite;
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite = createSprite(400,height-50,200,20);
	box1Sprite.shapeColor =color(255,0,0); 

	box2Sprite = createSprite(500,height-90,20,100);
	box2Sprite.shapeColor =color(255,0,0);

	box3Sprite = createSprite(300,height-90,20,100);
	box3Sprite.shapeColor =color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
     ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1Sprite = Bodies.rectangle(400, height-50, 200, 20 , {isStatic:true} );
	 World.add(world,box1Sprite);
	 
	 box2Sprite = Bodies.rectangle(500, height-90, 20, 100 , {isStatic:true} );
	 World.add(world,box2Sprite);
	 
	 box3Sprite = Bodies.rectangle(300, height-90, 20, 100 , {isStatic:true} );
	 World.add(world,box3Sprite);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
	
  }
}



