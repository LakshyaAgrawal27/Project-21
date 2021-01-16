var canvas;
var music, edges;
var o1, o2, o3, o4, ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    var canvas = createCanvas(600,600);
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
    ball.velocityY=5
    ball.velocityX=3
    
 
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    if (isTouching(ball, o4)) {
        ball.shapeColor = "yellow"
        
    }
    if (isTouching(ball, o3)) {
        ball.shapeColor = "red"
    }
    if (isTouching(ball, o2)) {
        ball.shapeColor = "blue"
        music.stop();
        ball.velocityY=0
        ball.velocityX=0
    }
    if (isTouching(ball, o1)) {
        ball.shapeColor = "green"
        music.play();
    }
    
    
    ball.bounceOff(edges)
    
    //create edgeSprite
    drawSprites();
    //add condition to check if box touching surface and make it box
}

