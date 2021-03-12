 
let handset;
let hand;
let planets;
let watercolor;
let jelly;
let lady;
let ss;

let unicorn;
let myFont;

let shapeArray = [];

let handTX = -300;
let handTY = 100;
let waterTX = -300;
let waterTY = -100;

function preload() {
  myFont = loadFont('assets/BeautySunflower.otf');
  handset = loadImage('assets/handset.jpg');
  jelly = loadImage('assets/jelly.jpg');
  hand = loadImage('assets/hand.jpg');
  planets = loadImage('assets/planets.jpg');
  watercolor = loadImage('assets/watercolor.jpg');
  lady = loadImage('assets/lady.jpg');
  ss = loadImage('assets/super.jpg');
  unicorn = loadModel('assets/unicorn.obj', true);
}


function setup() {
  createCanvas(800, 600, WEBGL);
  textFont(myFont);
  textSize(30);
  textAlign(CENTER);

  shapeArray.push(new shapeclass("box", 50, 50, 50, 125, 125, 0.05, 0.05, 0, ss));
  
  shapeArray.push(new shapeclass("cylinder", 50, 600, 0, 350, 0, 0, 0.05, 0, lady));
}

function draw() {

  background('black');
  
  push();
  text('By: Mary Primeau', -400, -250);
  text('Shapes In Space', -400, -200);
  pop();
  
  
  normalMaterial();

  image(handset);
  image(jelly);
  image(hand);
  image(planets);
  image(watercolor);
  image(lady);
  image(ss);

  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }
  
  if (mouseIsPressed == true) {
    handTX = 100;
    handTY = 100;
    waterTX = -100;
    waterTY = -100;    
  }

  push();
  translate(150, -150);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  texture(planets);
  torus(10, 10);
  pop();
    
  push();
  translate(-150, -150);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  texture(planets);
  torus(10, 10);
  pop();

  push();
  translate(waterTX, waterTY);
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.5);
  texture(watercolor);
  cone(50, 200);
  pop();


  push();
  translate(handTX, handTY);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.05);
  texture(hand);
  ellipsoid(25, 25, 25);
  pop();

  push();
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  translate(-175, 175);
  texture(handset);
  beginShape();
  vertex(0, 0, 150, 0, 0);
  vertex(150, 0, 50, 2, 0);
  vertex(150, 150, 150, 2, 2);
  vertex(0, 150, 50, 0, 2);
  endShape(CLOSE);
  pop();

  push();
  scale(1);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(jelly);
  model(unicorn);
  pop();
  
}