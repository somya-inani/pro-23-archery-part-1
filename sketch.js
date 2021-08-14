const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

   computerBase = new ComputerBase(100,Random(200,height-100),280,250);
   playerBase = new PlayerBase(300,Random(400,height-300),180,150);
   player = new PlayerBase(285,PlayerBase.body.position.Player-153,50,180);
   computerplayer = new ComputerPlayer(185,ComputerBase.body.position.player-353,350,380);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  
  ComputerBase.display();
  PlayerBase.display();
  


   //display Player and computerplayer

   Player.display();
   ComputerPlayer.display();
}
