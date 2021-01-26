// ** variables
var counter = 0;
var dotsColor1, dotsColor2, dotsColor3;
var hairColor1,hairColor2,hairColor3;
var eyeColor1, eyeColor2, eyeColor3;
var shoeColor1, shoeColor2, shoeColor3;
var shape1Size = 5;
var shape2Size = 5;
var eyeStroke = 1;
var eye1XPupal = 280;
var eyeYPupal = 300;
var eye2XPupal = 320;
var eye1Size = 20;
var eye2Size = 10;
var hair1y= 300;
var hairStroke = 20;
var shoe1size= 25;
var shoe2size= 10;
var shoe1X= 275;
var shoe2X= 325;
var shoeY= 650;
var dots1X = 300, dots1Y = 350;
var dots2X = 305, dots2Y = 375;
var dots3X = 310, dots3Y = 400;
var dots4X = 315, dots4Y = 450;
var dots5X = 320, dots5Y = 500;
var dots6X = 330, dots6Y = 550;
var dots7X = 350, dots7Y = 600;
var dots8X = 375, dots8Y = 645;
var dots9X = 300, dots9Y = 425;
var dots10X = 290, dots10Y = 590;
var dots11X = 285, dots11Y = 570;
var dots12X = 305, dots12Y = 450;
var dots13X = 265, dots13Y = 500;
var dots14X = 250, dots14Y = 550;
var dots15X = 290, dots15Y = 600;
var dots16X = 300, dots16Y = 630;

function setup() {
    createCanvas(600, 700);
    dotsColor1 = random(255);
    dotsColor2 = random(255);
    dotsColor3 = random(255);
    hairColor1 = random(255);
    hairColor2 = random(255);
    hairColor3 = random(255);
    eyeColor1 = random(255);
    eyeColor2 = random(255);
    eyeColor3 = random(255);
    shoeColor1 = random(255);
    shoeColor2 = random(255);
    shoeColor3 = random(255);
}

function draw() {

    background(50, 55, 100);

    // ** Boarder **

    stroke('black');
    strokeWeight(10);
    fill(0,9,71);
    rect(0, 0, 600, 700);


    //** Text **

    textSize(16);
    fill('yellow');
    text('Mary Primeau', 490, 680);


    textSize(16);
    fill('yellow');
    text('A Witchy Self Portrait', 10, 25);

// change the shapes and color when we hit 1000

if(counter > 1000)
{
    dotsColor1 = random(255);
    dotsColor2 = random(255);
    dotsColor3 = random(255);
    hairColor1 = random(255);
    hairColor2 = random(255);
    hairColor3 = random(255);
    eyeColor1 = random(255);
    eyeColor2 = random(255);
    eyeColor3 = random(255);
    shoeColor1 = random(255);
    shoeColor2 = random(255);
    shoeColor3 = random(255);
    shape1Size = random(30);
    shape2Size = random(30);
    eyeStroke = random(10);
    eye1XPupal = random(270,290);
    eyeYPupal = random(290,310);
    eye2XPupal = random(310,330);
    eye1Size = random(20,40);
    eye2Size = random(5,20);
    hair1y = random(300,600);
    hairStroke = random(5,30);
    shoe1size = random(50);
    shoe2size= random(50);
    shoe1X = random(260,300);
    shoe2X = random(300,340);
    shoeY = random (630,655);
    dots1X = random(290,310);
    dots1Y = random(340,360);
    dots2X = random(295,315);
    dots2Y = random(365,385);
    dots3X = random(305,315);
    dots3Y = random(390,410);
    dots4X = random(310,325);
    dots4Y = random(440,460);
    dots5X = random(310,330);
    dots5Y = random(490,510);
    dots6X = random(320,350);
    dots6Y = random(540,560);
    dots7X = random(340,360);
    dots7Y = random(590,610);
    dots8X = random(350,375);
    dots8Y = random(635,650);
    dots9X = random(290,310);
    dots9Y = random(415,435);
    dots10X = random(280,300);
    dots10Y = random(580,600);
    dots11X = random(295,305);
    dots11Y = random(560,580);
    dots12X = random(295,315);
    dots12Y = random(540,560);
    dots13X = random(255,275);
    dots13Y = random(490,510);
    dots14X = random(240,260);
    dots14Y = random(540,560);
    dots15X = random(280,300);
    dots15Y = random(590,610);
    dots16X = random(290,310);
    dots16Y = random(620,640);
    counter = 0;
}

    // ** Arms **

    push();
    strokeWeight(15);
    stroke(211,172,124);
    line(280, 400, 225, 500);
    line(325, 400, 375, 500);

    noStroke();
    fill(211,172,124);
    ellipse(225, 500, 30, 30);
    ellipse(375, 500, 30, 30);
    pop();

  counter++;

    // ** Dress **

    push();
    stroke('black');
    strokeWeight(1);
    fill('black');
    triangle(300, 300, 210, 650, 400, 650);
    pop();

    //** Dots **

    push();
    noStroke();
    fill(dotsColor1,dotsColor2,dotsColor3);
    ellipse(dots1X, dots1Y, shape1Size, shape2Size);
    ellipse(dots2X, dots2Y, shape1Size, shape2Size);
    ellipse(dots3X, dots3Y, shape1Size, shape2Size);
    ellipse(dots4X, dots4Y, shape1Size, shape2Size);
    ellipse(dots5X, dots5Y, shape1Size, shape2Size);
    ellipse(dots6X, dots6Y, shape1Size, shape2Size);
    ellipse(dots7X, dots7Y, shape1Size, shape2Size);
    ellipse(dots8X, dots8Y, shape1Size, shape2Size);
    ellipse(dots9X, dots9Y, shape1Size, shape2Size);
    ellipse(dots10X, dots10Y, shape1Size, shape2Size);
    ellipse(dots11X, dots11Y, shape1Size, shape2Size);
    ellipse(dots12X, dots12Y, shape1Size, shape2Size);
    ellipse(dots13X, dots13Y, shape1Size, shape2Size);
    ellipse(dots14X, dots14Y, shape1Size, shape2Size);
    ellipse(dots15X, dots15Y, shape1Size, shape2Size);
    ellipse(dots16X, dots16Y, shape1Size, shape2Size);
    pop();

    // ** Face **
    push();
    noStroke();
    fill(211,172,124);
    ellipse(300, 300, 115, 115);
    pop();

    // ** Eyes **
    push();
    stroke('black');
    strokeWeight(1);
    fill('white');
    ellipse(eye1XPupal, eyeYPupal, eye1Size, eye1Size);
    ellipse(eye2XPupal, eyeYPupal, eye1Size, eye1Size);

    stroke(eyeColor1,eyeColor2,eyeColor3);
    strokeWeight(eyeStroke);
    fill('black');
    ellipse(eye1XPupal, eyeYPupal, eye2Size, eye2Size);
    ellipse(eye2XPupal, eyeYPupal, eye2Size, eye2Size);
    pop();

    // ** Mouth **
    push();
    noStroke();
    fill('red');
    triangle(310, 340, 300, 350, 290, 340);
    pop();

    // ** Hair **
    push();
    noStroke();
    fill(hairColor1,hairColor2,hairColor3);
    rect(240,255,115,30);

    strokeWeight(hairStroke);
    stroke(hairColor1,hairColor2,hairColor3);
    line(240, 260, 240, hair1y);
    line(355, 260, 355, hair1y);
    pop();

    // ** Hat **
    push();
    noStroke();
    fill('black');
    ellipse(300, 255, 200, 30);
    triangle(300, 125, 240, 250, 350, 250);
    pop();

    // ** Shoes **
    push();
    noStroke();
    fill(shoeColor1,shoeColor2,shoeColor3);
    ellipse(shoe1X, shoeY, shoe1size, shoe2size);
    ellipse(shoe2X, shoeY, shoe1size, shoe2size);
    pop();

}
