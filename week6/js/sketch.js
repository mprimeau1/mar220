var catObjects;
var result, runresult, runLeftresult, fallresult, jumpresult;
var crystal1;
var crystal1X;
var crystal1Y;
var crystal2;
var crystal2X;
var crystal2Y;

function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runLeftresult = loadStrings ('assets/characterrunleft.txt');
  fallresult = loadStrings ('assets/characterfall.txt');
  jumpresult = loadStrings ('assets/characterjump.txt');
}

function setup() {
    createCanvas(1000,600);
    catObjects = createSprite(300, 275);
    catObjects.addAnimation('idle', result[0], result[result.length-1]);
    catObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
    catObjects.addAnimation('runLeft', runLeftresult[0], runLeftresult[runLeftresult.length-1]);
    catObjects.addAnimation('fall', fallresult[0], fallresult[fallresult.length-1]);
    catObjects.addAnimation('jump', jumpresult[0], jumpresult[jumpresult.length-1]);
    
    
    crystal1 = createSprite(random(0,300), 300);
    //compact way to add an image
    crystal1.addImage(loadImage('assets/rock1.png'));
    
    crystal2 = createSprite(random(300,600), 300);
    crystal2.addImage(loadImage('assets/rock2.png'));
    
    exit = createSprite(900, 450);
    exit.addImage(loadImage('assets/exit.png'));
    
}

// display all the frames using the draw function as a loop
function draw()
{
    background(120);

    if(keyDown('d'))
    {
      catObjects.changeAnimation('run');
      catObjects.velocity.x += .5;
      if(catObjects.collide(crystal1))
      {
        catObjects.changeAnimation('idle');
      }
    }
    
    else if (keyDown('a'))
    {
      catObjects.changeAnimation('runLeft');
      catObjects.velocity.x -= .5;
      if(catObjects.collide(crystal2))
      
      {
        catObjects.changeAnimation('idle');
      }
      
      if(catObjects.collide(exit))
      
      {
        catObjects.changeAnimation('idle');
      }
    }
    
    else if (keyDown('s'))
    {
      catObjects.changeAnimation('fall');
      catObjects.velocity.y += .5;
      if(catObjects.collide(crystal1))
          
      {
        catObjects.changeAnimation('idle');
      }
      
      if(catObjects.collide(crystal2))
      
      {
        catObjects.changeAnimation('idle');
      }
      
      if(catObjects.collide(exit))
      
      {
        catObjects.changeAnimation('idle');
      }
    }
    
    else if (keyDown('w'))
    {
      catObjects.changeAnimation('jump');
      catObjects.velocity.y -= .5;
      if(catObjects.collide(crystal1))
      {
        catObjects.changeAnimation('idle');
      }
      
      if(catObjects.collide(crystal2))
      {
        catObjects.changeAnimation('idle');
      }
      
      if(catObjects.collide(exit))
      
      {
        catObjects.changeAnimation('idle');
      }
    }
    
    else
    {
      catObjects.changeAnimation('idle');
      catObjects.velocity.x = 0;
      catObjects.velocity.y = 0;
    }

    catObjects.debug = mouseIsPressed;
    crystal1.debug = mouseIsPressed;
    crystal2.debug = mouseIsPressed;
    exit.debug = mouseIsPressed;
    drawSprites();
}
