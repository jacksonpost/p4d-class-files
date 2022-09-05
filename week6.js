/*
    Paste the code for your week 6 exercise below.
*/

var hw, hh, mainColour;
let clickCount = 0;
let keyCount = 0;
let tSize = 32;

let myObj = {};
myObj.myProperty = "I am a property and a string";
console.log(myObj.myProperty);

let myString = "I am still a property and a string";
myObj.myProperty = myString;
console.log(myObj.myProperty);

let leSquare = {};
let keyLog = [];

function setup() {
  
    if( windowWidth > windowHeight ){
      createCanvas(windowHeight, windowHeight);
    }else{
      createCanvas(windowWidth, windowWidth);
    }
  
    rectMode(CENTER);
    colorMode(HSL, 360, 100, 100);
    mainColour = color(343, 86, 53);

    hw = width/2;
    hh = height/2;

    leSquare.x = hw;
    leSquare.y = hh/2;
    leSquare.size = 50;
    leSquare.fillColour = mainColour;
    leSquare.moveIncrement = 5;
}

function draw() {

    background(255);
    fill(0);

    textSize(tSize);
    text( myString, tSize, hh );
    text( "Clicks: " + clickCount, tSize, hh + tSize );
    text( "Key presses: " + keyCount, tSize, hh + (tSize * 2) );


    // text( "Keylog: ", tSize, hh + (tSize * 3) );
    fill(leSquare.fillColour);
    // Create an empty string variable
    let tempString = "";
    for(i=0; i<keyLog.length; i++){
        // text( keyLog[i], tSize, hh + ( tSize * (4+i) ) );

        // Add each item in the array (plus a space) to our string variable
        // Every key press adds another string to the array
        tempString += keyLog[i] + " ";
    }
    // Print our string variable
    text(tempString, tSize, hh + (tSize * 4) );

    // A simple movement system for our square object 
    if( keyIsDown(UP_ARROW) ) {
        leSquare.y -= leSquare.moveIncrement;
    }
    if( keyIsDown(DOWN_ARROW) ) {
        leSquare.y += leSquare.moveIncrement;
    }
    if( keyIsDown(LEFT_ARROW) ) {
        leSquare.x -= leSquare.moveIncrement;
    }
    if( keyIsDown(RIGHT_ARROW) ) {
        leSquare.x += leSquare.moveIncrement;
    }

    // Draw our square object using its properties
    fill(leSquare.fillColour);
    square(leSquare.x, leSquare.y, leSquare.size);

    // map our mouseX value to a different range
    let xPos = map(mouseX, 0, width, 0, hw, true);
    let ellipseColour = map(mouseX, 0, width, 0, 100, true);
    
    text(ellipseColour, hw,hh/2);
    fill(ellipseColour);
    
    ellipse(mouseX, hh - (tSize*2), 25, 25);

}

// A predefined function you can use to capture mouse clicks
function mouseClicked() {

    clickCount ++;

    // ellipse(mouseX, mouseY, 50, 50);

}

// Another predefined function you can use to capture keyboard input
function keyPressed() {

    keyCount ++;

    // A simple but efficient movement system for our square object
    // doesn't handle key holds, so movement is clunky
    // if (keyCode === UP_ARROW){
    //     leSquare.y -= leSquare.moveIncrement;
    // }else if(keyCode === DOWN_ARROW){
    //     leSquare.y += leSquare.moveIncrement;
    // }else if(keyCode === LEFT_ARROW){
    //     leSquare.x -= leSquare.moveIncrement;
    // }else if(keyCode === RIGHT_ARROW){
    //     leSquare.x += leSquare.moveIncrement;
    // }

    // A basic array to log each key as it's pressed
    keyLog[keyLog.length] = key;

    return false; // prevent any default behaviour
}