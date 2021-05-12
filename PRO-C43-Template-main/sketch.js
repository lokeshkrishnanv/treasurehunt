var bg,bg2,form,system,code,security, security2, system2;
var score=0;

function preload() {
 
  
  bg= loadImage("cave.jpg")
  bg2 = loadImage("cave 1.jpg")
  bg3 = loadImage("cave 2.jpg")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
   /* security2 = new SecurityCopy();
    system2 = new SystemCopy();*/
  
  
}

function draw() {
  background(bg);
  hints();
  security.display();
  textSize(20);
  fill("black");
  text("Score: " + score, 450, 50);

  /*if(score >= 3){
    clear();
    score = 3;
    textSize(20);
    fill("black");
    text("Score: " + score, 450, 50);
    background(bg2);
    hints2();
  }*/
  
  if(score === 3) {
    clear()
    background(bg3)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}