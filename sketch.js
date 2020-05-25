var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,obstacle13;
var obstacle14,obstacle15,obstacle16,obstacle17;
function setup() {
  createCanvas(800,400);
  //top line
  obstacle = createSprite(400,50,700,2);
  obstacle1 = createSprite(400,60,680,2);
  //left line
  obstacle2 = createSprite(50,200,2,300);
  obstacle3 = createSprite(60,200,2,280);
  //right line
  obstacle4 = createSprite(750,200,2,300);
  obstacle5 = createSprite(740,200,2,280);
  //bottom line
  obstacle6 = createSprite(400,350,700,2);
  obstacle7 = createSprite(400,340,680,2);
  //start of pacman
  obstacle8 = createSprite(110,250,100,2);
  obstacle9 = createSprite(110,270,100,2);
  obstacle10 = createSprite(160,225,2,50);
  obstacle11 = createSprite(160,295,2,50);
  obstacle12 = createSprite(180,260,2,160);
  //top start of pacman
  obstacle13 = createSprite(135,200,50,2);
  obstacle14 = createSprite(155,180,50,2);
  obstacle15 = createSprite(110,150,2,100);
  obstacle16 = createSprite(130,150,2,60);
  //top right start of pacman
}
function draw() {
  background(0);  
  drawSprites();
}