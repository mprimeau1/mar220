 
let handset;
let hand;
let planets;
let watercolor;
let jelly;


let unicorn;

let shapeArray = [];
var boxTranslationX = -100;
var boxTranslationY = -100;

function preload() {
  handset = loadImage('assets/handset.jpg');
  jelly = loadImage('assets/jelly.jpg');
  hand = loadImage('assets/hand.jpg');
  planets = loadImage('assets/planets.jpg');
  watercolor = loadImage('assets/watercolor.jpg');
  unicorn = loadModel('assets/unicorn.obj', true);
}


function setup() {
  createCanvas(800, 600, WEBGL);

  shapeArray.push(new shapeclass("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, handset));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, 200, 20, 0.01, 0.01, 0, handset));
}

function draw() {

  background(200);
  normalMaterial();

  image(handset);
  image(jelly);
  image(hand);
  image(planets);
  image(watercolor);

  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }


  push();
  translate(-300, -200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(watercolor);
  cone(100, 70);
  pop();


  push();
  translate(-250, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(hand);
  ellipsoid(30, 40, 140);
  pop();


  push();
  translate(150, -150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(planets);
  torus(30, 15);
  pop();


  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  translate(-250, -250);
  texture(handset);
  beginShape();
  vertex(0, 0, 100, 0, 0);
  vertex(200, 0, 50, 1, 0);
  vertex(200, 200, 100, 1, 1);
  vertex(0, 200, 50, 0, 1);
  endShape(CLOSE);
  pop();


  push();
  scale(1);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(jelly);
  model(unicorn);
  pop();


  if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
  }
}