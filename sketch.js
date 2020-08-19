var hr;
var mn;
var sc;

var hrAngle;
var mnAngle;
var scAngle;

function setup() {
    createCanvas(1500, 850);

    angleMode(DEGREES);
}

function draw() {
    background(0);

    hr = hour();
    mn = minute();
    sc = second();

    hrAngle = map(hr % 12, 0, 12, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    scAngle = map(sc, 0, 60, 0, 360);

    push();
    strokeWeight(7);
    stroke("yellow");
    fill(0);
    ellipse(750, 425, 700, 700);
    pop();

    push();
    fill(255);
    textSize(40);
    text("12", 730, 125);
    text("3", 1060, 440);
    text("6", 740, 755);
    text("9", 420, 440);
    pop();

    push();
    translate(750, 425);
    rotate(scAngle);
    strokeWeight(7);
    stroke("blue");
    line(0, 0, 330, 0);
    pop();

    push();
    translate(750, 425);
    rotate(mnAngle);
    strokeWeight(7);
    stroke("red");
    line(0, 0, 280, 0);
    pop();

    push();
    translate(750, 425);
    rotate(hrAngle);
    strokeWeight(7);
    stroke("green");
    line(0, 0, 230, 0);
    pop();

    drawSprites();
}