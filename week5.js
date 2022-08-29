/*
    Paste the code for your week 5 exercise below.
*/

// Declare global variables outside of functions, usually at the top of your code
// see: https://www.w3schools.com/js/js_scope.asp
var shoppingList = ["eggs", "milk", "sugar"];
var hw, hh;

function setup() {

  // createCanvas(400, 400);

  if( windowWidth > windowHeight ){
    createCanvas(windowHeight, windowHeight);
  }else{
    createCanvas(windowWidth, windowWidth);
  }

  hw = width/2;
  hh = height/2;

  // draw rectangles placing the center at the coordinate rather than the top left corner
  rectMode(CENTER);

  // use degrees instead of radians for rotation
  angleMode(DEGREES);

  // We'll need the loop to animate our shape, so make sure noLoop() isn't called
  // noLoop();

  // for(i=0; i<width; i++){
  //   myArray[i] = i;
  // }
  // console.log(myArray);

  // noStroke();
  // noFill();
}
  
function draw() {
  background(255, frameCount%10);

  let strokeW = abs( sin(frameCount) * 20 );
  let fillC = abs( (cos(frameCount)-0.5) * 255 );

  strokeWeight(1);
  fill(0);
  textSize(32);
  for(i = 0; i < shoppingList.length; i++){
    text( shoppingList[i], 0,hh+(32 * i));
  }
  

  strokeWeight(strokeW);
  fill(fillC);

  // rect(frameCount % width, hh, 50, 50);

  translate(hw, hh);
  rotate(frameCount % 360);
  rect(0, 0, frameCount % height, frameCount % height);
  resetMatrix();

  rect(frameCount%width, 5, 10, 10);
  rect(frameCount%width, height-5, 10, 10);
}


function plotCircle(numPoints, rad){
  let x, y, ang;
  let points = [];
  let inc = 360 / numPoints;
  
  for(i=0; i<numPoints; i++){
    ang = i * inc;
    x = sin( radians(ang) ) * rad;
    y = cos( radians(ang) ) * rad;
    points[i] = {'x':x, 'y':y};
  }

  // return an array/object of coordinates
  return points;
}