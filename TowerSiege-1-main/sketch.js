const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
	world = engine.world;
    groundObj = new Ground(600,580,1200,20);
    groundAir = new Ground(700,400,350,10);
    gorundAir2 = new Ground(1000,200,270,10);

    catapult = createSprite(180,500,10,200);
    
    hexObj = new hex(160,450,50,50);

    blockd1 = new block(700,365,40,60);
    blockd2 = new block(660,365,40,60);
    blockd3 = new block(740,365,40,60);
    blockd4 = new block(620,365,40,60);
    blockd5 = new block(780,365,40,60);
    blockd6 = new block(580,365,40,60);
    blockd7 = new block(820,365,40,60);

    blockdu8 = new block(700,305,40,60);
    blockdu9 = new block(660,305,40,60);
    blockdu10 = new block(740,305,40,60);
    blockdu11= new block(620,305,40,60);
    blockdu12 = new block(780,305,40,60);

    blockdu13 = new block(700,245,40,60);
    blockdu14 = new block(740,245,40,60);
    blockdu15 = new block(660,245,40,60);

    blockdu16 = new block(700,185,40,60);

    blocku1 = new block(1000,165,40,60);
    blocku2 = new block(1040,165,40,60);
    blocku3 = new block(960,165,40,60);
    blocku4 = new block(1080,165,40,60);
    blocku5 = new block(920,165,40,60);

    blockuu1 = new block(1000,105,40,60);
    blockuu2 = new block(1040,105,40,60);
    blockuu3 = new block(960,105,40,60);

    blockuu4 = new block(1000,45,40,60);

    sling1 = new rope(hexObj.body,{x: 180, y: 450});
    Engine.run(engine);
}

function draw(){

    background(0);
    drawSprites();
    fill("yellow");
    textSize(30);
    text("Hit all the blocks",6,25);
    text("Press Space to try Again",6,60);
    groundObj.display();
    groundAir.display();
    gorundAir2.display();
    blockd1.display();
    blockd2.display();
    blockd3.display();
    blockd4.display();
    blockd5.display();
    blockd6.display();
    blockd7.display();
    blocku1.display();
    blocku2.display();
    blocku3.display();
    blocku4.display();
    blocku5.display();
    blockdu8.display();
    blockdu9.display();
    blockdu10.display();
    blockdu11.display();
    blockdu12.display();
    blockdu13.display();
    blockdu14.display();
    blockdu15.display();
    blockdu16.display();
    blockuu1.display();
    blockuu2.display();
    blockuu3.display();
    blockuu4.display();
    hexObj.display();
    sling1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexObj.body,{x : mouseX , y: mouseY})
}

function mouseReleased(){
    sling1.fly()
}

function keyPressed(){
    if(keyCode === 32)
    {
        sling1.attach(hexObj.body);
    }
}
