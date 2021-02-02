var dino;
var animation = [];
var runanimation = [];
var dinoObjects = [];
var dinoRunObjects = [];
var i = 0;
var j = 0;
var x = 0;
var counter = 0;

function preload(){
  dino = new imageclass('assets/Idle (1).png', 0, 0);
  dinoObjects[0] = dino;
  dino = new imageclass('assets/Idle (2).png', 0, 0);
  dinoObjects[1] = dino;
  dino = new imageclass('assets/Idle (3).png', 0, 0);
  dinoObjects[2] = dino;
  dino = new imageclass('assets/Idle (4).png', 0, 0);
  dinoObjects[3] = dino;
  dino = new imageclass('assets/Idle (5).png', 0, 0);
  dinoObjects[4] = dino;
  dino = new imageclass('assets/Idle (6).png', 0, 0);
  dinoObjects[5] = dino;
  dino = new imageclass('assets/Idle (7).png', 0, 0);
  dinoObjects[6] = dino;
  dino = new imageclass('assets/Idle (8).png', 0, 0);
  dinoObjects[7] = dino;
  dino = new imageclass('assets/Idle (9).png', 0, 0);
  dinoObjects[8] = dino;
  dino = new imageclass('assets/Idle (10).png', 0, 0);
  dinoObjects[9] = dino;

  dino = new imageclass('assets/Run (1).png', 0, 0);
  dinoRunObjects[0] = dino;
  dino = new imageclass('assets/Run (2).png', 0, 0);
  dinoRunObjects[1] = dino;
  dino = new imageclass('assets/Run (3).png', 0, 0);
  dinoRunObjects[2] = dino;
  dino = new imageclass('assets/Run (4).png', 0, 0);
  dinoRunObjects[3] = dino;
  dino = new imageclass('assets/Run (5).png', 0, 0);
  dinoRunObjects[4] = dino;
  dino = new imageclass('assets/Run (6).png', 0, 0);
  dinoRunObjects[5] = dino;
  dino = new imageclass('assets/Run (7).png', 0, 0);
  dinoRunObjects[6] = dino;
  dino = new imageclass('assets/Run (8).png', 0, 0);
  dinoRunObjects[7] = dino;


  for (var i = 0; i < dinoObjects.length; i++) {
      animation[i] = dinoObjects[i].getImage();

  }

  for(var i = 0; i < dinoRunObjects.length; i++)
  {
    runanimation[i] = dinoRunObjects[i].getImage();
  }

}

function setup() {

    createCanvas(600, 500);
    setInterval(incrementIndex, 50);
}

function draw() {

    background(120);

    // draw each frame based on the index in the array
    if(keyIsPressed)
    {
    if(key == "d")
        {
// continue to display the image
    image(runanimation[j], dinoRunObjects[j].getX(), dinoRunObjects[j].getY());
// this section slows the running down
    counter++;
    if(counter > 5)
            {
// increment the index "j"
    incrementRunIndex();
// restart our counter
    counter = 0;
            }
        }
    }
    else
    {
        image(animation[i], dinoObjects[i].getX(), dinoObjects[i].getY());
    }


}

function incrementIndex()
{
     // increment the index
     i += 1;

     // if we reach the end of the array, start over
     if (i >= animation.length) {
         i = 0;
     }
}

function incrementRunIndex()
{

     // increment the index
     j += 1;

     // if we reach the end of the array, start over
     if (j >= runanimation.length) {
         j = 0;
     }
}
