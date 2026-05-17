let cloudOne= 50 ; //variabl for x position of cloud
var moonFade =255;  //moon fade level
let fadeSpeed=-2; //moon fading speed
let showEgg= false; // secret egg hidden at first

//The setup function only happens once
function setup() {
	createCanvas(windowWidth/2,500); //create a canvas
}

//The draw function happens over and over again
function draw() {
  background(20, 24, 82); //nightsky background

//sun
  fill(255,218,0);
  stroke(255,138,0);
  strokeWeight(20);
  ellipse(530, 59, 110); //(x,y,size)
 
//twinkle star
	for( let star=0; star<40; star++){ // draw star til it reach 40
		let x= random(width);
		let y= random(0,250);
		let size= random(2,6);}
// moon fading
	moonFade+= fadeSpeed;
	if( moonFade<120|| moonFade> 250){ 
		fadeSpeed= fadespeed*-1;}
	fill(255, 245, 180, moonFade);
	noStroke();
	ellipse(width - 100, 80, 100, 100);
	
 /// grass
fill(20, 80, 30);
noStroke();
rect(0, 300, width, 200);
	

// secret egg behind moon
if(showEgg == true){
fill(255);
stroke(255, 120, 180);
strokeWeight(5);
ellipse(width - 100, 80, 60, 80);
	
fill(255, 120, 180);
noStroke();
ellipse(width - 100, 70, 15, 15);
ellipse(width - 115, 90, 12, 12);
ellipse(width - 85, 95, 12, 12);

}

// floating cloud
fill(255);
noStroke();
ellipse(cloudOne, 80, 80, 40);
ellipse(cloudOne - 40, 100, 60, 25);
ellipse(cloudOne + 50, 105, 70, 30);

cloudOne = cloudOne + 1;
if(cloudOne > width + 80){
cloudOne = -80;}


// REDEYE body
fill(247,104,198);
stroke(255,8,170);
strokeWeight(6);
rect(width/2 - 40, 330, 90, 50, 15);

// ears
fill(247,104,198);
stroke(252,237,131);
ellipse(width/2 - 55, 320, 35, 50);
ellipse(width/2 + 65, 320, 35, 50);


// blinking red communication power
fill(255, 0, 0, random(80, 255));
noStroke();
ellipse(width/2 + 60, 350, 25, 25);


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

 
 
 }

function mousePressed() {

// check if mouse clicked the moon

let d = dist(mouseX, mouseY, width - 100, 80);
if(d < 60){ showEgg = true;
  
  }

  
}

  


