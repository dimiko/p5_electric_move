function preload(){
    song = loadSound("electricshock.mp3");
}

function Bubbles(x, y){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = this.width;
    
    this.display = function(){
        stroke(0);
        fill(255, 230);
        ellipse(this.x, this.y, 4, 4);
    };
    
    this.move = function(){
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    };
    
    this.electric = function(){
        for(i=0; i<1; i++){
            this.x = this.x + 155;
            //this.x = this.x - 10;
        }
    };
    
    this.away = function(){
        //song.play();
        //song.setVolume(0.5);
        var distX = [40,45,50,55,60,65,70,75,80,-40,-45,-50,-55,-60,-65,-70,-75,-80];
        var distY = [10,-10];
        this.x = this.x + random(distX);
        this.y = this.y + random(-15,15);
    };
    
}