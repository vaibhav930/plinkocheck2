const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
//var particles =[];
var plinkos =[];
var divisions= [];
var divisionHeight = 300
var score = 0;
var particle , turn = 0;
var gameState  ="Start";
//var gameState  ="play";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,800,20);

for (var k=10 ; k <= 480; k=k+80){
divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
}


for(var j=40 ; j<= width ; j=j+50){
plinkos.push(new Plinko(j,75))
}
for(var j=60 ; j<= width-10; j=j+50){
plinkos.push(new Plinko(j,175))
}
for(var j=80 ; j<= width-20; j=j+50){
  plinkos.push(new Plinko(j,275))
}
for(var j=100 ; j<= width-30; j=j+50){
  plinkos.push(new Plinko(j,375))
}
for(var j=20; j<= width-40; j=j+50){
  plinkos.push(new Plinko(j,475))
}  



}


function draw() {
  background("blue")            
  Engine.update(engine);
ground.display();
textSize(20)
fill ("blue")
text (" SCORE :" +score,20,700)

for (var i=0 ; i <divisions.length ;  i++){
  divisions[i].display()
}
for (var n=0 ; n <plinkos.length ; n++){
  plinkos[n].display()
}

/*if(frameCount%60 === 0){
  particles.push(new Particles(random(width/2-10,width/2-10),10,10))
 
 };
 for (var i =0 ; i <particles.length ; i++ ){
  particles[i].display()}*/
 
/*if(particle!= null)
{
  particle.display();
  
  if(particle.body.position.y>760)
  {
  if(particle.body.position.x <300)
  {
  score=score+500
  particle=null;
  if(turn>= 5){
    gameState="end"

  }
  }
   }
    }*/
     }


function mousePressed(){
if(gameState!== "end"){
turn++;
particle = new Particles(mouseX,10,10)
particle.display()
console.log("vaibhav")
}
}