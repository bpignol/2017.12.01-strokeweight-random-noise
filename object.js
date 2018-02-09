// THIS IS AN OBJECT

function object(x, y, w){ // creating an object 
  this.x = x;
  this.y = y;
  this.w = w; //weight 
  var offset = 0; // offset is a list where to pick random numbers from
  var inc = 0.005; // scope of different random numbers

  this.show = function(){ // defining an object
    stroke(random(100, 255));
    noFill();
    strokeWeight(this.w);

    beginShape();
    for (var i = 0 ; i < width; i ++) { // the origins of the lines are random but inside the width of the canvas
      var noiseVal = noise(offset) * this.y; // the trajectory of the lines
      vertex(i, noiseVal); //lines between points
      offset += inc; // the random trajectories won't vary too much from one another
    } 
    endShape();
  }
}