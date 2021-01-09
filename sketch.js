var canvas;
var music;
var o1, o2, o3, o4, ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    o1 = createSprite(210, 580, 100, 20)
    o1.shapeColor = "green";
    o2 = createSprite(100, 580, 100, 20)
    o2.shapeColor = "blue";
    o3 = createSprite(320, 580, 100, 20)
    o3.shapeColor = "red";
    o4 = createSprite(430, 580, 100, 20)
    o4.shapeColor = "yellow";
    ball = createSprite(430, 580, 100, 20)
    ball.shapeColor = "white";
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    if (isTouching(ball, o1)) {
        ball.shapeColor = "green"
    }
    //create edgeSprite
        drawSprites();
    //add condition to check if box touching surface and make it box
}
