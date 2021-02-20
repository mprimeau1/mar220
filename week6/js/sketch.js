var catObjects;
var result, runresult;
var rock;
var crystal;

function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runLeftresult = loadStrings ('assets/characterrunleft.txt');
}

function setup() {
    createCanvas(800,600);
    catObjects = createSprite(300, 250);
    catObjects.addAnimation('idle', result[0], result[result.length-1]);
    catObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
    catObjects.addAnimation('runLeft', runLeftresult[0], runLeftresult[runLeftresult.length-1]);
    
    
    rock = createSprite(700, 300);
    //compact way to add an image
    rock.addImage(loadImage('assets/rock1.png'));
    
    crystal = createSprite(100,300);
    crystal.addImage(loadImage('assets/rock2.png'));
    
}

// display all the frames using the draw function as a loop
function draw()
{
    background(120);

    if(keyDown('d'))
    {
      catObjects.changeAnimation('run');
      catObjects.velocity.x += .5;
      if(catObjects.collide(rock))
      {
        catObjects.changeAnimation('idle');
      }
    }
    
    else if (keyDown('a'))
    {
      catObjects.changeAnimation('runLeft');
      catObjects.velocity.x -= .5;
      if(catObjects.collide(crystal))
      {
        catObjects.changeAnimation('idle');
      }
    }
    
    else
    {
      catObjects.changeAnimation('idle');
      catObjects.velocity.x = 0;
    }

    catObjects.debug = mouseIsPressed;
    rock.debug = mouseIsPressed;
    drawSprites();
}
