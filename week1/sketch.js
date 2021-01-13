function setup() {
    createCanvas(600, 700);
}

function draw() {
    push();
    background(50, 55, 100);
    pop();

    push();
    stroke('black');
    strokeWeight(4);
    fill(50, 55, 100);
    rect(2, 2, 596, 696);
    pop();


    // ** BODY **********************************

        push();
        stroke('black');
        strokeWeight(1);
        fill('black');
        triangle(300, 300, 210, 650, 400, 650);
        pop();

        push();
        noStroke();
        fill('white');
        ellipse(300, 350, 10, 10);
        ellipse(305, 375, 10, 10);
        ellipse(310, 400, 10, 10);
        ellipse(315, 450, 10, 10);
        ellipse(320, 500, 10, 10);
        ellipse(330, 550, 10, 10);
        ellipse(350, 600, 10, 10);
        ellipse(375, 640, 10, 10);
        ellipse(300, 425, 10, 10);
        ellipse(285, 590, 10, 10);
        ellipse(275, 570, 10, 10);
        ellipse(275, 450, 10, 10);
        ellipse(265, 500, 10, 10);
        ellipse(250, 550, 10, 10);
        ellipse(230, 600, 10, 10);
        ellipse(225, 630, 10, 10);
        pop();

}
