var x = 0;
var y = 0;


function setup() {
  createCanvas(800, 600, WEBGL);
}

// display all the frames using the draw function as a loop
function draw() {
  background('black');
  normalMaterial();

  createTorus();
  createTorus();
  createCone(25,200,24,24,true);
  createSphere();
  createBox(25, 150, 25, -100, -100, true);
  
  if (keyIsPressed) {
    if (key == 'd') { // move the right
      x += 5;
      }

   else if (key == 'a') { // move to the left

      x -= 1;
      }
    
    else if (key == 'w') { // move up 

      y += 5;
      }

    else if (key == 's') { // move down 

      y -= 1;

      }

}
}

function createBox(w, h, d, transX, transY, move) {
  push();
  if (move) {
    translate(transX + x, transY);

  } else {
    translate(transX, transY);

  }
  if (move) {
    translate(x, transY - y);
    
  } else {
    translate(transX, transY);

  }
  if (keyIsPressed) {
    
    {if (key == 'd')
    scale(2,2);
 } 
  
  {if (key == 'a')
  scale(.5,.5);
  }
  
  {if (key == 'w')
  scale(2,2);
} 

{if (key == 's')
scale(.5,.5);
}

  
}
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  scale(1,1);
  box(w, h, d);
  pop();

}

function createTorus() {
  push();
  translate(150, 150);
  rotateX(frameCount * 0.2);
  rotateY(frameCount * 0.2);
  torus(25, 10, 24, 16);
  pop();
  
  push();
  translate(150, 150);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  torus(100, 20, 24, 16);
  pop();
  
}
   

function createCone() {
  push();
  translate(200, -100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.1);
  cone(25, 200, 24, 24,true);
  pop();
  
}

function createSphere() {
  push();
  translate(-200, 125);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(50);
  pop();
  
  push();
  translate(150, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(20);
  pop();
  
}