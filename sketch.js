let cloudOne= 50 ; //variabl for x coordinate of cloud
var darksun =0;  //color of sun

//The setup function only happens once
function setup() {
	createCanvas(600, 400); //create a canvas
}

//The draw function happens over and over again
function draw() {
  background(135, 206, 235); //skyblue background

//sun
  fill(255,218,0);
  stroke(255,138,0);
  strokeWeight(20);
  ellipse(530, 59, 110); //(x,y,size)
 
 //darkcircle
  fill(59,31,2,darksun);
  stroke(59,31,2);
  strokeWeight(0);
  ellipse(530,59,110,110);

 //grass 
 fill (35,94,4);
 strokeWeight(0);
 rect (0,200,600,200);//(x,y,wid,hei)

//draw
 //face
 fill(247,104,198);
 stroke(255,8,170);
 strokeWeight(6);
 rect(400,300,90,50);

//ears
 stroke(252,237,131);
 ellipse(385,289,35);

 stroke(252,237,131);
 ellipse(502,289,35);

//tree
 
 fill(64,45,6);
 strokeWeight(0);
 stroke(31,31,6);
 rect(45,299,20,90);

 fill(141,209,98);
 stroke(37,94,4);
 strokeWeight(1);
 triangle(50,8,10,300,100,300);

 //cloud1
 strokeWeight(0);
 fill(255);
 ellipse(cloudOne,50,80,40);
 ellipse(cloudOne - 40,100,60,20);
 ellipse(cloudOne + 60,150,40,20);
 cloudOne= frameCount%width

 //cloud2
 
 }

function mousePressed(){ //make sun darker

  if (darksun>=255) {
    darksun=0;

  } else {
    darksun=darksun+20;
  }

  

}
