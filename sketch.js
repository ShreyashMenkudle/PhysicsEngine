const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;
var ball_options;


function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    
    ball_options={ restitution:2.0};

   

   object= Bodies.rectangle(200,390,300,20,object_options);
    World.add(world,object);

   ball = Bodies.rectangle(200,200,5,5,ball_options);
   World.add(world,ball);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,300,50);


    rect(ball.position.x,ball.position.y,10,10);
}
