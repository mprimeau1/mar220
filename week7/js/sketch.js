var catObjects;
var result, runresult, runLeftresult, fallresult, jumpresult, attackresult;
var crystal1;
var crystal1X;
var crystal1Y;

function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runLeftresult = loadStrings ('assets/characterrunleft.txt');
  fallresult = loadStrings ('assets/characterfall.txt');
  jumpresult = loadStrings ('assets/characterjump.txt');
  attackresult = loadStrings ('assets/characterattack.txt');
}

function setup() {
    createCanvas(1000,600);
    catObjects = createSprite(300, 275);
    catObjects.addAnimation('idle', result[0], result[result.length-1]);
    catObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
    catObjects.addAnimation('runLeft', runLeftresult[0], runLeftresult[runLeftresult.length-1]);
    catObjects.addAnimation('fall', fallresult[0], fallresult[fallresult.length-1]);
    catObjects.addAnimation('jump', jumpresult[0], jumpresult[jumpresult.length-1]);
    catObjects.addAnimation('attack', attackresult[0], attackresult[attackresult.length-1]);
    
    
    crystal1 = createSprite(600, 300);
    crystal1.addImage(loadImage('assets/rock1.png'));
    
}

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
      if(catObjects.collide(crystal1))      
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
    }
    
    else if (keyDown('w'))
    {
      catObjects.changeAnimation('jump');
      catObjects.velocity.y -= .5;
      if(catObjects.collide(crystal1))
      {
        catObjects.changeAnimation('idle');
      }
    }
    
    else if (keyDown('x'))
    {
      catObjects.changeAnimation('attack');
      catObjects.velocity.x -= .5;
      if(catObjects.collide(crystal1))
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
    drawSprites();
}
