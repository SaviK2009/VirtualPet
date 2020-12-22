//Create variables here
var dog, happyDog;
var database;
var foodS,foodStock;
function preload()
{
  //load images here
  dogimg=loadImage("dogImg.png");
  happyimg=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog=loadImage(dogimg)
}


function draw() {  

  drawSprites();
  //add styles here

}



