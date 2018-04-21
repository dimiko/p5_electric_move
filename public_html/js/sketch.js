var bubbles = [];
var bubblesalpha = [];
var cnv;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    //cnv.parent('msg');
    cnv.parent('pfive');
    
    for (i = 0; i < 1500; i++) {
        var x = width/2;
        var y = height/2;
        bubbles[i] = new Bubbles(x, y);
        bubblesalpha[i] = new Bubblesalpha(x, y);
    }
    for (i = 0; i < 100; i++) {
        var x = width/2;
        var y = height/2;
        bubblesalpha[i] = new Bubblesalpha(x, y);
    }
    //cnv.mouseOver(touch); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*
function mousePressed(){
    var r = random(10, 20);
    var b = new Bubbles(mouseX, mouseY, r);
    bubbles.push(b);
}
*/
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
        //bubblesalpha[i].display();
    }
}

function touch() {
   
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].electric();
    }
}



/*
 var randomX = random(10, 50);
 var randomY = random(20, 80);
 
 
 function setup(){
 createCanvas(windowWidth, windowHeight);
 }
 
 function draw(){
 var easing = 0.05;
 var randomX = random(0 , 900);
 var randomY = random(0, 800);
 
 background(255);
 
 for(var i=0; i<=10; i++){
 ellipse(randomX , randomY, 50, 50);
 }
 }
 
 
 var x = 0;
 var y = 0;
 
 
 
 function setup(){
 createCanvas(windowWidth, windowHeight);
 }
 
 function draw(){
 var easing = 0.05;
 var diffX = mouseX - x;
 x += diffX * easing;
 
 var diffY = mouseY - y;
 y += diffY * easing;
 
 background(255);
 ellipse(x, y, 50, 50);
 }
 */