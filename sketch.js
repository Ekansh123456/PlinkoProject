var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var balls=[]
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var count=0;
var gameState="Start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 
function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 fill("White")
 text("500",5,550)
 text("500",80,550)
 text("500",160,550)
 text("500",240,550)
 text("100",320,550)
 text("100",400,550)
 text("100",480,550)
 text("200",560,550)
 text("200",640,550)
 text("200",720,550)
  Engine.update(engine);
 ground.display()
 if(gameState=="End"){
text("gameover",150,250)

 }

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
     
   }
  if(particle=null)
  {
    particel.display();

    if(particle.body.position.y>700)
    {
      if(particle.body.position.x<300)
      {
        score=score+500;
        particle=null;
        if(count>=5) gameState="END"
      }
      else if (particle.body.positon.x<600&&particle.body.position.x>301)
    {
score=score+100;
particle=null;
if(count>=5)gameState="END";
    }
else if(particle.body.position.x<900&& particle.body.position.x>601)
{
  score=score+200;
  particle=null;
    if(count>=5)gameState="END"
} 
    }
  }

}

for (var i=0; i<division.length; i++){
divisions[i].display();

}

function mousePressed(){

if(gameState="END") {
  count++;
  particle = new Particle(mouseX,50,10,10);
}
}
