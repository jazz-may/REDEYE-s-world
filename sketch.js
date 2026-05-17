let cloudOne= 50 ; //variabl for x position of cloud
var moonFade =255;  //moon fade level
let fadeSpeed=-2; //moon fading speed
let showEgg= false; // secret egg hidden at first

//The setup function only happens once
function setup() {
	createCanvas(windowWidth/2,500); //create a canvas
}

//The draw function happens over and over again
function draw(){

// dark night sky
background(20,24,82);


// ---------- Stars ----------
for(let i=0; i<40; i++){ // draw star til reach 40

fill(255,255,255,random(100,255));
noStroke();

ellipse(
random(width),
random(0,250),
random(2,6)
);

}


// ---------- Moon ----------
moonFade += fadeSpeed;

if(moonFade<120 || moonAlpha>255){
fadeSpeed *= -1;
}

fill(240,240,240,moonFade);
noStroke();

ellipse(width-100,80,100,100);


// moon details
fill(220);
ellipse(width-120,60,15,15);

ellipse(width-80,90,10,10);

ellipse(width-105,100,8,8);


// ---------- Hidden Egg ----------
if(showEgg==true){

fill(255);
stroke(255,120,180);
strokeWeight(4);

ellipse(width-100,80,60,80);

fill(255,120,180);

ellipse(width-100,70,10);
ellipse(width-115,90,10);
ellipse(width-85,95,10);

}


// ---------- Grass ----------
fill(35,94,4);

rect(0,300,width,200);


// ---------- Tree ----------
fill(64,45,6);

rect(60,220,35,100);


// tree leaves
fill(141,209,98);

triangle(80,50,10,250,150,250);

triangle(80,120,20,300,140,300);


// ---------- Moving Cloud ----------
fill(255);

ellipse(cloudOne,60,80,40);

ellipse(cloudOne-40,70,60,30);

ellipse(cloudOne+40,70,60,30);


// move cloud
cloudOne++;

if(cloudOne>width+50){

cloudOne=-50;

}

}
  

  


  


