var catObjects;
var result, runresult, runLeftresult, attackresult;
var crystal1;
const particles = [];
var health = 100;

function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runLeftresult = loadStrings ('assets/characterrunleft.txt');
  attackresult = loadStrings ('assets/characterattack.txt');
}

function setup() {
    createCanvas(1000,600);
    catObjects = createSprite(300, 275);
    catObjects.addAnimation('idle', result[0], result[result.length-1]);
    catObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);
    catObjects.addAnimation('runLeft', runLeftresult[0], runLeftresult[runLeftresult.length-1]);
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
      if (crystal1 != null)
        {
      if(catObjects.collide(crystal1))
      {
        catObjects.changeAnimation('idle');
      }
    }}
    
    else if (keyDown('a'))
    {
      catObjects.changeAnimation('runLeft');
      catObjects.velocity.x -= .5;
      if (crystal1 != null)
      {
      if(catObjects.collide(crystal1))      
      {
        catObjects.changeAnimation('idle');
      }  
    }
  }
    
    else if (keyDown('x'))
    {
      catObjects.changeAnimation('attack');
      if (crystal1 != null)
      {
        if(dist(catObjects.position.x,catObjects.position.y,crystal1.position.x,crystal1.position.y) < 250)
        {
          createParticles(crystal1.position.x, crystal1.position.y);
          health -= 1;
          if(health <= 0)
          {
            crystal1.remove();
            crystal1 = null;
      }
    }
    }
  }
    else
    {
      catObjects.changeAnimation('idle');
      catObjects.velocity.x = 0;
    }

    catObjects.debug = mouseIsPressed;
    drawSprites();
}

function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}
