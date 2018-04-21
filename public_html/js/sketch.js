var bubbles = [];
var bubblesalpha = [];
var cnv;

var direction = 'up';

function setup() {

    
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('pfive');


    for (i = 0; i < 1500; i++) {
        var x = width/2;
        var y = height/2;
        bubbles[i] = new Bubbles(x, y);
        bubblesalpha[i] = new Bubblesalpha(x, y);
    }

    cnv.mouseWheel(wheel);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mouseMoved(){
    for (var i = 0; i < bubbles.length; i++) {
        if(mouseX >= bubbles[i].x - (bubbles[i].width /2) - 40 && mouseX <= (bubbles[i].x + bubbles[i].width / 2) + 40 &&
            mouseY >= bubbles[i].y - (bubbles[i].height /2) - 10  && mouseY <= (bubbles[i].y + bubbles[i].height / 2) + 10){
            bubbles[i].away();
        }
    }
}

function draw() {
    background(0);

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
        bubblesalpha[i].move();
    }

    if (direction == 'up') {
        textSize(32);
        text('Hello', 10, 30);
        fill(124, 0, 153);
    } else {
        textSize(32);
        text('world', 10, 30);
        fill(0, 102, 153);
    }
}

function touch() {

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].electric();
    }
}


function wheel(event) {
    event.preventDefault;
    var dx = event.deltaX;
    var dy = event.deltaY;

    if (dy > 0) {
        direction = 'down';
    }
    else {
        direction = 'up'
    }
    return false;
}
