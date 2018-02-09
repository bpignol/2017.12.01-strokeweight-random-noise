//THESE ARE VARIABLES --------------------------------------------------------

var objects = []; // array for the objects
var numLines = 500; // number of objects pre defined


//THIS IS THE BACKGROUND --------------------------------------------------------

function setup (){
  createCanvas(400,400);
  background(0,0,0); //RGB color code

  for (var i = 0; i < numLines; i++) { // show a new line untill pre defined max 
    objects.push(new object(0,i * height / numLines, random(1,6)));
  }

  for (var i = 0; i < objects.length; i++) { // show all lines since begining 
    objects[i].show();
  }
}


//THESE ARE THE CALL'S RESULTS --------------------------------------------------------
// everything is drawn in the background without any specific call triggered. 
// No need for the function draw here since there is no animation and interaction
