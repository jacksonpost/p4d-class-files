/*
    Paste the code for your week 4 exercise below.
*/

let myString = "Hello world!";

// use preload to load resources before drawing e.g. loadFont.  
// n.b. Font loading has  security issues for days.
function preload() {
}

let xPos = 0;
let yPos = 0;
let speed = 10;
let curve = 100;
// let mainColor = '#ED225D';
var mainColor, lighter, hw, hh, pulse1, pulse2, pulse3, oldX, oldY;

function setup() {
    if( windowWidth > windowHeight ){
        createCanvas(windowHeight, windowHeight);
    }else{
        createCanvas(windowWidth, windowWidth);
    }

    hw = width / 2;
    hh = height / 2;
    yPos = random(height);
    
    // noStroke();
    colorMode(HSL, 360, 100, 100);
    mainColor = color(343, 86, 53);

    stroke(mainColor);
    strokeWeight(5);
    background(0);
    noFill();

    console.log("Checking window height:" + windowHeight);
}
  
function draw() {
    // background(0, 10);
    
    curve += random(-1, 1);

    pulse1 = sin( frameCount / curve );
    pulse2 = cos( frameCount / curve );
    pulse3 = tan( frameCount / curve );

    oldX = xPos;
    oldY = yPos;
    xPos = moveX(xPos, pulse2 * speed );
    yPos = moveY(yPos, pulse1 * speed );

    strokeWeight(10);
    let lightPulse = lightness(mainColor) + ( sin(radians(frameCount%360)) * (100-lightness(mainColor)) );
    stroke(hue(mainColor), saturation(mainColor), lightPulse);
    ellipse(hw,hh,(hh+(lightPulse*pulse1)));
    stroke(mainColor);

    if( shortEnough(oldX, oldY, xPos, yPos) ){
        strokeWeight(10*(pulse1+pulse2));
        line(oldX, oldY, xPos, yPos);
    }

    strokeWeight(2);
    // circle(xPos, yPos, 20*pulse3);
    // fill(mainColor);
    
    textSize(36);
    text('LOGO', 10, 50);
    // drawSquare(50,50,50);
}


function drawSquare( x, y, w){
    rect(x, y, w, w);
}

function moveX(x, v){
    x += v;
    // direction = v positive or negative
    if(v > 0){
        if(x > width+5 || x < -5){x = 0}
    }else{
        if(x > width+5 || x < -5){x = width}
    }
    
    return x;
}
function moveY(y, v){
    y += v;
    // direction = v positive or negative
    if(v > 0){
        if(y > height+5 || y < -5){y = 0}
    }else{
        if(y > height+5 || y < -5){y = height}
    }
    return y;
}

function shortEnough(x1, y1, x2, y2){
    // calc distance
    let l1 = abs(x1-x2);
    let l2 = abs(y1-y2);
    let xShort = true;
    let yShort = true;
    if(l1 > width / 2){
        xShort = false;
    }
    if(l2 > height / 2){
        yShort = false;
    }
    if(xShort && yShort){
        return true;
    }else{
        return false;
    }
}

console.log(myString);