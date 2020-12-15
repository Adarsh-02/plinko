const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundobj1;
var plinkos=[];
var particles=[];
var divisionobj=[];

function setup() {
    createCanvas(500,900);

    engine = Engine.create();
    world = engine.world;

    groundobj1 = new ground(100,795,1800,20);

    for(var k=0;k<=width; k=k+80){
     divisionobj.push(new Divisions(k,685,10,200))
    }

    for(var j=40;j<=width; j=j+50){
        plinkos.push(new plinko(j,75,5)) ;
       }

       for(var j=15;j<=width-10; j=j+50){
        plinkos.push(new plinko(j,175,5)) ;
       }

       for(var j=40;j<=width-10; j=j+50){
        plinkos.push(new plinko(j,275,5)) ;
       } 

       for(var j=15;j<=width-10; j=j+50){
        plinkos.push(new plinko(j,175,5)) ;
       }   

       for(var j=40;j<=width; j=j+50){
        plinkos.push(new plinko(j,275,5)) ;
       }   

       for(var j=15;j<=width-10; j=j+50){
        plinkos.push(new plinko(j,375,5)) ;
       }   

       Engine.run(engine);
   
}
function draw(){
    background("black");
    groundobj1.display();
    for(var i=0;i<plinkos.length; i=i+1){
        plinkos[i].display ;
       }   

       for(var t=0;t<divisionobj.length; t=t+1){
        divisionobj[t].display ;
       }  

       if(frameCount%60===0){
           particles.push(new particle(random(width/2-10,width/2+10),10,10))
       }

       for(var p=0;p<particles.length;p=p+1){
           particles[p].display();
       }
       drawSprites();
}
