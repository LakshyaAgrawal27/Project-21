var canvas;
var music;
var o1, o2, o3, o4, ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edge1 = createSprite(400, 600, 800, 10)
    edge1.shapeColor = "grey";
    edge2 = createSprite(400, 0, 800, 10)
    edge2.shapeColor = "grey";
    edge3 = createSprite(800, 300, 10, 600)
    edge3.shapeColor = "grey";
    edge4 = createSprite(0, 300, 10, 600)
    edge4.shapeColor = "grey";


    o1 = createSprite(210, 580, 100, 20)
    o1.shapeColor = "green";
    o2 = createSprite(100, 580, 100, 20)
    o2.shapeColor = "blue";
    o3 = createSprite(320, 580, 100, 20)
    o3.shapeColor = "red";
    o4 = createSprite(430, 580, 100, 20)
    o4.shapeColor = "yellow";
    ball = createSprite(430, 500, 30, 30)
    ball.shapeColor = "white";
    var rand = Math.round(random(1,6));
    ball.velocityY=2
    ball.velocityX=2
    
 
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    if (isTouching(ball, o1)) {
        ball.shapeColor = "green"
    }
    
    bounceOff(edge1, ball);
    bounceOff(edge2, ball);
    bounceOff(edge3, ball);
    bounceOff(edge4, ball);
    bounceOff(o1, ball);
    bounceOff(o2, ball);
    bounceOff(o3, ball);
    bounceOff(o4, ball);
    //create edgeSprite
        drawSprites();
    //add condition to check if box touching surface and make it box
}
