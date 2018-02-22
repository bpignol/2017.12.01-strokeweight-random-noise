// THIS IS AN OBJECT

function object(x, y, w){ // creating an object 
  this.x = x;
  this.y = y;
  this.w = w; //weight 
  var offset = 0; // offset is a list where to pick random numbers from
  var inc = 0.005; // scope of different random numbers

 this.show = function(){ // defining an object
    stroke(random(100, 255)); // color of the shape line
    noFill();
    strokeWeight(this.w); // size of the shape line

    beginShape();
    for (var i = 0 ; i < width; i ++) { // the origins of the lines are random but inside the width of the canvas
      var noiseVal = noise(offset) * this.y; // the trajectory of the lines
      vertex(i, noiseVal); //place points and then draw a line between them. (btw : an elipse is a round shape)
      offset += inc; // the random trajectories won't vary too much from one another
    } 
    endShape();

    // if you want to see points seperately : 
    //  do ellise instead of vertex
    //  no stroke
    //  less points = for loops : till +=10 (instead of the width of 400)
    //  less variance = offset increment : 0 is smooth, 1 is hectic 

    // perlin noise : just use noise, similar to random
    // random (), random (100), etc

    //  var offset = random(1000)

  }
}
