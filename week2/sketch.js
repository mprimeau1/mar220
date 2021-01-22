// ** variables
var counter = 0;
var dotsColor1, dotsColor2, dotsColor3;
var hairColor1, hairColor2, hairColor3;
var eyeColor1, eyeColor2, eyeColor3;
var shoeColor1, shoeColor2, shoeColor3;
var shape1Size = 5;
var shape2Size = 5;
var eye1size = 1;
var hair1y= 300;



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
    eye1size = random(10);
    hair1y+= random(300);
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
    ellipse(300, 350, shape1Size, shape2Size);
    ellipse(305, 375, shape1Size, shape2Size);
    ellipse(310, 400, shape1Size, shape2Size);
    ellipse(315, 450, shape1Size, shape2Size);
    ellipse(320, 500, shape1Size, shape2Size);
    ellipse(330, 550, shape1Size, shape2Size);
    ellipse(350, 600, shape1Size, shape2Size);
    ellipse(375, 640, shape1Size, shape2Size);
    ellipse(300, 425, shape1Size, shape2Size);
    ellipse(290, 590, shape1Size, shape2Size);
    ellipse(285, 570, shape1Size, shape2Size);
    ellipse(305, 450, shape1Size, shape2Size);
    ellipse(265, 500, shape1Size, shape2Size);
    ellipse(250, 550, shape1Size, shape2Size);
    ellipse(290, 600, shape1Size, shape2Size);
    ellipse(300, 630, shape1Size, shape2Size);
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
    ellipse(280, 300, 20, 20);
    ellipse(320, 300, 20, 20);

    stroke(eyeColor1,eyeColor2,eyeColor3);
    strokeWeight(eye1size);
    fill('black');
    ellipse(280, 300, 10, 10);
    ellipse(320, 300, 10, 10);
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
    rect(255,255,90,30);

    strokeWeight(30);
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
    ellipse(275, 650, 25, 10);
    ellipse(325, 650, 25, 10);
    pop();

}
