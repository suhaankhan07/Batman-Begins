const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var umbrella;
var drops;
var maxDrops = 500;
var drops = []
var thunder;
var canvas;

function preload(){
    thunderboltImage = loadImage('images/thunderbolt/1.png')
    thunderboltImage2 = loadImage('images/thunderbolt/2.png')
    thunderboltImage3 = loadImage('images/thunderbolt/3.png')
    thunderboltImage4 = loadImage('images/thunderbolt/4.png') 
}

function setup(){
   canvas = createCanvas(displayWidth,displayHeight);
   engine = Engine.create();
   world = engine.world

   umbrella = new Umbrella(200,800,300,300);
   umbrella.scale = 0.1


  if(frameCount % 10 === 0 ) {
   for(var i = 0; i < maxDrops; i ++) {
   drops.push(new Drop(random(0,displayWidth),random(0,1000)))
 }
 }
}

function draw(){
    Engine.update(engine);
    background('black')

    var rand = Math.round(random(1,4));
    if(frameCount % 10 === 0 ) {
        thunder = createSprite(random(200,1000,random(400,500)))
        switch(rand) {
            case 1 : thunder.addImage(thunderboltImage);
            break;
            case 2 : thunder.addImage(thunderboltImage2);
            break;
            case 3 : thunder.addImage(thunderboltImage3);
            break;
            case 4 : thunder.addImage(thunderboltImage4);
            default : break;
        }
    }
    if(frameCount % 11 === 0 || frameCount % 12 === 0  || frameCount % 13 === 0) {
        thunder.destroy();
    }

    umbrella.display();

for(var i = 0; i < maxDrops; i++) {
   drops[i].display();
   drops[i].update();
}

drawSprites();
}
   