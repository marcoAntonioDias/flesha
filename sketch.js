var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  //ja fizeram isso
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  //ja tinha o arco criei a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
  //n lembro como deixar infinito
    scene.velocityX = -3 


    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
  arrow.addimage(arrow0.png)
  arrow.velocityX=4
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(4));
  //não consegui lembrar como faz isso
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1:
    break;
    case 2://chamar o balãoazul
    break;
    case 3://chamar o balãoverde
    break;
    case 4://chamar o balãorosa
break;

  }}
  
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  balaoazul = createsprite (0,math.round(random(50,350)),40,10,10)
  balaoazul.addimage(blue_balloonImage)
  balaoazul.velocityY=3
  balaoazul.scale=1
  balaoazul.lifetime = 150
}

function greenBalloon() {
  balaoverdao = createsprite (0,math.round(random(50,350)),40,10,10)
  balaoverdao.addimage(green_balloonImage)
  balaoverdao.velocityY=3
  balaoverdao.scale=1
  balaoverdao.lifetime = 150
}

function pinkBalloon() {
  rosa = createsprite (0,math.round(random(50,350)),40,10,10)
 rosa.addimage(pink_balloonImage)
  rosa.velocityY=3
  rosa.scale=1
  rosa.lifetime = 150



}
