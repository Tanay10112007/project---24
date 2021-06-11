
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var part1, part2, part3;
function preload()
{
    
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(150,100,30,30);
    ground = new Ground(400,570,9999,25);
    part1 = new Part(485,505,15,75);
    part2 = new Part(665,505,15,75);
    part3 = new Part(575,550,175,15);
	  Engine.run(engine);
    
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  part1.display();
  part2.display();
  part3.display();
 }
 function keyPressed(){
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper.body, paper.body.position, {x:30, y:-50});
   }
 };

