var drawin = true;
var eyeOpen = true;
var event = 0;
var colorBody, colorHead,colorLeg;

function setup() {
  createCanvas(1290,960);
  background(255);
  colorBody = color(0,178,136);
  colorHead = color(178,44,0);
  colorLeg = color(0,178,136);
}

function draw() {
  stroke(0);
  background(0,0,255);
  hill(650,720,400,600);
  hill(550,720,400,200);
  hill(350,720,400,600);
  hill(250,720,400,200);
  cloud(100,100,100,100);
  cloud(731,128,200,100);
  cloud(200,200,100,100);
  cloud(800,276,100,100);
  //Body 
  body(colorBody);
  //antennas or ears or whatever
  ears();
  //Neck
  neck();
  //head
  head(colorHead);
  //Eye
  eye(eyeOpen);
  //Pupil
  pupil();
  //Mouth
  mouth();
  //Teeth
  teeth();
  //Leg
  leg(colorLeg);
  //Foot
  foot();
  
}
function hill(x,y,w,h){
  fill(color(0,255,0));
  arc(x+(w/2),y,w,h,PI,0,PIE);
}
function ears(){
  stroke(0);
  fill(0,255,194);
  line(680,120,790,120);
  line(460,120,350,120);
  ellipse(790,120,60,60);
  ellipse(350,120,60,60);
}
function head(colorH){
  fill(colorH);
  ellipse(570,150,240,240);
}
function neck(){
  fill(0,0,255);
  rect(545,240,50,90);
}
function eye(){
  noStroke();
  fill(255,255,255);
  ellipse(570,120,100,100);
  if(mouseIsPressed){
    for(var i  = 0; i<=100;i+=.5){
      fill(0,0,0);
      ellipse(570,120,100,100);
    }
  }
  else{
  for(var i  = 0; i<=100;i+=.5){
      fill(colorHead);
      ellipse(570,120,100,i);
    }
  //triangle(570,150,570,90,630,120);
  //triangle(570,150,570,90,510,120);
}
}

function pupil(){
  fill(0,0,0);
  ellipse(570,120,30,30);
}
function mouth(){
  fill(255,192,203);
  arc(570,180,120,120,0,-PI);
  if(keyCode==LEFT_ARROW){
    noStroke();
    fill(colorHead);
    arc(570,180,220,170,0,-PI);
    stroke(0);
    line(510,179,630,179);
    
  }
}
function teeth(){
  fill(0,0,0);
  triangle(530,180,560,180,545,195);
  triangle(580,180,610,180,595,195)
 // rect(530,180,30,15);
  //rect(580,180,30,15);
}
function body(colorB){
  fill(colorB);
  rect(480,330,180,210);
}
function leg(colorL){
  fill(colorL);
  rect(540,540,60,180);
}
function foot(){
  fill(255,0,0);
  rect(540,660,180,60);
}
function cloud(x,y,w,h) {
    var cloudColor = color(255,240,240);
    fill(cloudColor);
    stroke(cloudColor);
    ellipse(x,y,w,h);
    ellipse(x+(w/2),y,w,h);
    ellipse(x+(w/2),y+(h/2),w,h);
    ellipse(x+(w/6),y-(h/2),w,h);
    ellipse(x+(w/2),y+(h/2),w,h);
    ellipse(x+(w/6),y+(h/2),w,h);
    ellipse(x+w,y,w,h);
}
function keyPressed(){
  if(keyCode==DOWN_ARROW){
    colorBody = color(random(256),random(256),random(256));
    colorHead = color(random(256),random(256),random(256));
    colorLeg = color(random(256),random(256),random(256));
  }
}
