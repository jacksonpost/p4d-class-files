/*
    Paste the code for your week 5 exercise below.
*/

// Declare global variables outside of functions, usually at the top of your code
// see: https://www.w3schools.com/js/js_scope.asp

var shoppingList = ["milk", "eggs", "sugar", "flour"];
var xPos = 0;
var hw, hh, circ;

function setup() {

  // createCanvas(400, 400);

  if( windowWidth > windowHeight ){
    createCanvas(windowHeight, windowHeight);
  }else{
    createCanvas(windowWidth, windowWidth);
  }

  hw = width/2;
  hh = height/2;

  // draw rectangles placing the center at the coordinate, rather than the top left corner
  rectMode(CENTER);

  // use degrees (0 to 360) instead of radians for rotation
  angleMode(DEGREES);

  // We'll need the loop to animate our shape, so make sure noLoop() isn't called
  // noLoop();

  for(i=0; i<width; i++){
    shoppingList[i] = abs(sin(i))*i;
  }
  // console.log(myArray);

  // noStroke();
  // noFill();
  circ = plotCircle(8, 100);
}
  
function draw() {

  background(255);
  strokeWeight(1);
  fill(xPos % 255);
  
  textSize(32);
  // text(shoppingList.length,40,40);
  // for(i = 0; i < shoppingList.length; i++){
  //  text( shoppingList[i], 0, hh+(32 * i));
  //  if(hh+(32 * i) > height-64){
  //   break;
  //  }
  // }
  
  // let strokeW = abs( sin(frameCount) * 20 );
  // let fillC = abs( (cos(frameCount)) * 255 );
  // strokeWeight(strokeW);
  // fill(fillC);
  let speed = 1;
  rect(shoppingList[frameCount % shoppingList.length], hh, 50, 50);

  // translate(hw, hh);
  // rotate(frameCount % 360);
  // rect(0, 0, frameCount % height, frameCount % height);
  // resetMatrix();

  rect(frameCount%width, 5, 10, 10);
  rect(frameCount%width, height-5, 10, 10);

  xPos ++;

}


function plotCircle(numPoints, rad){
  let x, y, ang;
  let points = [];
  let inc = TWO_PI / numPoints;
  
  for(i=0; i<numPoints; i++){
    ang = i * inc;
    x = cos( ang ) * rad;
    y = sin( ang ) * rad;
    points[i] = {'x':x, 'y':y};
  }

  // console.log(points);

  // return an array/object of coordinates
  return points;
}

function drawCircle(coords){
  let l = coords.length;
  for(i=0; i<l-1; i++){
    line(coords[i].x, coords[i].y, coords[i+1].x, coords[i+1].x);
  }
  line(coords[l-1].x, coords[l-1].y, coords[0].x, coords[0].y)
}


// https://www.helixsoft.nl/articles/circle/sincos.htm
function draw_circle ()
{
    // int x, y;
    // int length = 50;
    // float angle = 0.0;
    // float angle_stepsize = 0.1;

    // go through all angles from 0 to 2 * PI radians
    while (angle < 2 * PI)
    {
        // calculate x, y from a vector with known length and angle
        x = length * cos (angle);
        y = length * sin (angle);

        putpixel (screen,
            x + SCREEN_W / 2, y + SCREEN_H / 2,
            makecol (255, 255, 255));
        angle += angle_stepsize;
    }
}