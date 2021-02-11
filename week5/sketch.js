var cat;
var animation = [];
var runanimation = [];
var slideanimation = [];
var catObjects = [];
var catRunObjects = [];
var catSlideObjects = [];
var i = 0;
var j = 0;
var x = 0;
var g = 0;
var Y = 140;
var X = 50;
var counter = 0;

function preload() {
    cat = new imageclass('assets/Idle (1).png', X, Y);
    catObjects[0] = cat;
    cat = new imageclass('assets/Idle (2).png', X, Y);
    catObjects[1] = cat;
    cat = new imageclass('assets/Idle (3).png', X, Y);
    catObjects[2] = cat;
    cat = new imageclass('assets/Idle (4).png', X, Y);
    catObjects[3] = cat;
    cat = new imageclass('assets/Idle (5).png', X, Y);
    catObjects[4] = cat;
    cat = new imageclass('assets/Idle (6).png', X, Y);
    catObjects[5] = cat;
    cat = new imageclass('assets/Idle (7).png', X, Y);
    catObjects[6] = cat;
    cat = new imageclass('assets/Idle (8).png', X, Y);
    catObjects[7] = cat;
    cat = new imageclass('assets/Idle (9).png', X, Y);
    catObjects[8] = cat;
    cat = new imageclass('assets/Idle (10).png', X, Y);
    catObjects[9] = cat;

    cat = new imageclass('assets/Run (1).png', X, Y);
    catRunObjects[0] = cat;
    cat = new imageclass('assets/Run (2).png', X, Y);
    catRunObjects[1] = cat;
    cat = new imageclass('assets/Run (3).png', X, Y);
    catRunObjects[2] = cat;
    cat = new imageclass('assets/Run (4).png', X, Y);
    catRunObjects[3] = cat;
    cat = new imageclass('assets/Run (5).png', X, Y);
    catRunObjects[4] = cat;
    cat = new imageclass('assets/Run (6).png', X, Y);
    catRunObjects[5] = cat;
    cat = new imageclass('assets/Run (7).png', X, Y);
    catRunObjects[6] = cat;
    cat = new imageclass('assets/Run (8).png', X, Y);
    catRunObjects[7] = cat;

    cat = new imageclass('assets/Slide (1).png', X, Y);
    catSlideObjects[0] = cat;
    cat = new imageclass('assets/Slide (2).png', X, Y);
    catSlideObjects[1] = cat;
    cat = new imageclass('assets/Slide (3).png', X, Y);
    catSlideObjects[2] = cat;
    cat = new imageclass('assets/Slide (4).png', X, Y);
    catSlideObjects[3] = cat;
    cat = new imageclass('assets/Slide (5).png', X, Y);
    catSlideObjects[4] = cat;
    cat = new imageclass('assets/Slide (6).png', X, Y);
    catSlideObjects[5] = cat;
    cat = new imageclass('assets/Slide (7).png', X, Y);
    catSlideObjects[6] = cat;
    cat = new imageclass('assets/Slide (8).png', X, Y);
    catSlideObjects[7] = cat;
    cat = new imageclass('assets/Slide (9).png', X, Y);
    catSlideObjects[8] = cat;
    cat = new imageclass('assets/Slide (10).png', X, Y);
    catSlideObjects[9] = cat;

    for (var i = 0; i < catObjects.length; i++) {
        animation[i] = catObjects[i].getImage();

    }

    for (var i = 0; i < catRunObjects.length; i++) {
        runanimation[i] = catRunObjects[i].getImage();
    }

    for (var i = 0; i < catSlideObjects.length; i++) {
       slideanimation[i] = catSlideObjects[i].getImage();
    }

}

function setup() {

    createCanvas(700, 600);
    setInterval(incrementIndex, 50);
}

function draw() {

    background(116, 0, 202);

    // draw each frame based on the index in the array
    if (keyIsPressed) {
        if (key == "d") {
            // continue to display the image
            image(runanimation[j], catRunObjects[j].getX(), catRunObjects[j].getY());
            // this section slows the running down
            counter++;
            if (counter > 5) {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }
        }
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
    }
    else {
        image(animation[i], catObjects[i].getX(), catObjects[i].getY());
    }


}
function incrementIndex() {
    // increment the index
    i += 1;

    // if we reach the end of the array, start over
    if (i >= animation.length) {
        i = 0;
    }
}

function incrementRunIndex() {

    // increment the index
    j += 1;

    // if we reach the end of the array, start over
    if (j >= runanimation.length) {
        j = 0;
    }
}

function incrementSlideIndex() {

    // increment the index
    g += 1;

    // if we reach the end of the array, start over
    if (g >= slideanimation.length) {
        g = 0;
    }
}
