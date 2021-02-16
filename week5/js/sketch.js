var cat;
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var slideanimation = [];
var currentAnimation = [];
var catObjects = [];
var catRunObjects = [];
var catRunLeftObjects = [];
var catSlideObjects = [];
var i = 0;
var j = 0;
var x = 0;
var g = 0;
var Y = 140;
var X = 50;
var counter = 0;

var results;
var runresults;
var runresultsleft;
var slideresult;

var myInterval;

var index = 0;

function preload() {

    result = loadStrings('assets/catidle.txt');
    runresult = loadStrings('assets/catrun.txt');
    runresultleft = loadStrings('assets/catrunleft.txt');
    slideresult = loadStrings('assets/catslide.txt');

}

function setup() {

    createCanvas(700, 600);
    setInterval(incrementIndex, 50);

    for (var i = 0; i < result.length; i++)
    {
        catObjects.push(new imageclass ('assets/' + result[i], X,Y));
        animation[i] =catObjects[i].getImage();

    }

    for (var i = 0; i < runresult.length; i++)
    {
        catRunObjects.push(new imageclass('assets/' + runresult[i], X,Y));
        runanimation[i] = catRunObjects[i].getImage();
        catRunLeftObjects.push(new imageclass('assets/' + runresultleft[i], X,Y));
        leftrunanimation[i] = catRunLeftObjects[i].getImage();
    }

    currentObjects = catObjects;

    myInterval = setInterval(incrementIndex, 50);
}

function draw() {

    background(116, 0, 202);

    // draw each frame based on the index in the array
    if (keyIsPressed)
    {
      clearInterval(myInterval);
      myInterval = null;

      index++;
      if (index > 3)
      {
        incrementIndex();
        index = 0;
      }

        if (key == "d")
        {
          currentAnimation = runanimation;
          currentObjects = catRunObjects;

            if (counter >= currentAnimation.length)
             {
                counter = 0;
            }
            currentObjects[counter].setX(currentObjects[counter].getX() + 2);

        for (var i = 0; i < catRunLeftObjects.length; i++)
        {
          catRunLeftObjects[i].setX(currentObjects[0].getX());
        }

        catRunObjects = currentObjects;

      }      else if (key == "a")
      {

        currentAnimation = leftrunanimation;
        currentObjects = catRunLeftObjects;

        if (counter >= currentAnimation.length)
        {
          counter = 0;
        }
        currentObjects[counter].setX(currentObjects[counter].getX() - 2);

        for (var i = 0; i < cowGirlRunObjects.length; i++)
        {
          catRunObjects[i].setX(currentObjects[0].getX());
        }


        catRunLeftObjects = currentObjects;
      }

      for (var i = 0; i < catObjects.length; i++)
    catObjects[i].setX(currentObjects[0].getX());

}
// this last part just checks for the idle and resets the animations
else
{
  if (myInterval == null)
  {
    myInterval = setInterval(incrementIndex, 50);
  }
  currentObjects = catObjects;
  currentAnimation = animation;
}

// display the images regardless of the movement or idle
image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());



        // moved this if statement so that it was in the keyIsPressed in the draw function
        if (key == "x") {
            console.log(key);
            // continue to display the image
            image(slideanimation[g], catSlideObjects[g].getX(), catSlideObjects[g].getY());
            // this section slows the slides down
            counter++;
            if (counter > 5) {
                incrementSlideIndex();
                counter = 0;
            }
        }

    else {
        image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());
    }


}

function incrementIndex() {
    // increment the index
    counter += 1;

    // if we reach the end of the array, start over
    if (counter >= currentObjects.length)
     {
        counter = 0;
    }
}
