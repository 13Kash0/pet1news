//Create variables here
var Dog
var dogImg;
var dogImg1;
var database;
var foodS;
var foodStock;
function preload()
{
  dogImg=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  textSize(20); 
  dog=createSprite(230,300,150,140);
  dog.addImage(dogImg);
  dog.scale=0.15;
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappyImg);
}
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,168,200);
  textSize(12);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}
  function readStock(data){
    foodS=data.val();
  }


  