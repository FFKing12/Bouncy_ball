var canvas;
var s1,s2,s3,s4;
var box;
var line1,line2,line3,line4;

function preload(){
}


function setup(){
    canvas = createCanvas(800,600);
    s1 = createSprite(610,550,150,10);
    s2 = createSprite(450,550,150,10);
    s3 = createSprite(290,550,150,10);
    s4 = createSprite(130,550,150,10);
    line1 = createSprite(799,300,10,600);
    line2 = createSprite(1,300,10,600);
    line3 = createSprite(400,1,800,10);
    line4 = createSprite(400,599,800,10);

    box = createSprite(400,300,20,20);
    box.velocityX = 3;
    box.velocityY = 5.6;
    createEdgeSprites();
}
function draw() {
    background("white");

    if(box.isTouching(line1)){
        box.bounceOff(line1);
    }
    if(box.isTouching(line2)){
        box.bounceOff(line2);
    }
    if(box.isTouching(line3)){
        box.bounceOff(line3);
    }
    if(box.isTouching(line4)){
        box.bounceOff(line4);
    }
    if(box.isTouching(s3)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
    }
    if(box.isTouching(s2)){
        box.shapeColor="blue";
        box.bounceOff(s2);
    }
    if(box.isTouching(s1)){
        box.shapeColor="green";
        box.bounceOff(s1);
    }
    if(box.isTouching(s4)){
        box.shapeColor="red";
        box.bounceOff(s4);
    }
    s1.shapeColor="green";
    s2.shapeColor="blue";
    s3.shapeColor="yellow";
    s4.shapeColor="red";
drawSprites();
}
