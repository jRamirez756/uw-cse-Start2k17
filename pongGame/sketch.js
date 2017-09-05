var pong1_X, pong1_Y;
var pong2_X, pong2_Y;
var canvas_x, canvas_y;
var ball_x, ball_y;
var ballspeed;
var unitVector;
var player1_Score;
var player2_Score;
function setup() {
   ballspeed = 4;
   var v = (random(0,361) * (PI/180));
   unitVector = [cos(v), sin(v)];
   canvas_x = 600;
   canvas_y = 600;
   pong1_X = 0;
   pong2_X = canvas_x-10;
   pong1_Y = (canvas_y/2)-30;
   pong2_Y = (canvas_y/2)-30;
   ball_x = canvas_x/2;
   ball_y = canvas_y/2;
   startGame=0;
   player1_Score = 0;
   player2_Score = 0;
   createCanvas(canvas_x,canvas_y);
   //pong 1
   fill(255,0,0);
   rect(pong1_X,pong1_Y,10,60);
   //pong 2
   fill(0,255,0);
   rect(pong2_X,pong2_Y,10,60);
   //ball
   ellipse(ball_x,ball_y,20,20)
}

function draw() {
   background(200);
   //pong1
   fill(255,0,0);
   rect(pong1_X,pong1_Y,10,60);
   
   //pong 2
   fill(0,255,0);
   rect(pong2_X,pong2_Y,10,60);
   
   //ball
   ellipse(ball_x,ball_y,20,20);
   
   //score
   textSize(100);
   fill(0);
   text(player1_Score,200,70); 
   text(player2_Score,300, 70);
   
   moveBall();
   movePong1();
   movePong2();
   
}

function movePong1(){
  if(keyIsDown(UP_ARROW) && pong1_Y>0){
    pong1_Y -= 5
  }
  if(keyIsDown(DOWN_ARROW)&& pong1_Y<canvas_y-60){
    pong1_Y += 5
  }
}

function movePong2(){
  if(keyIsDown(87)&& pong2_Y>0){
    pong2_Y -= 5
  }
  if(keyIsDown(83)&& pong2_Y<canvas_y-60){
    pong2_Y += 5
  }
} 

function moveBall(){
  
  if(ball_x <= -5 || ball_x >= canvas_x+5){
    if(ball_x <= -5 ){
      player2_Score ++;
    }
    if(ball_x>=canvas_x-5){
      player1_Score++;
    }
    ball_x = canvas_x/2;
    ball_y = canvas_y/2;
    ballspeed = 4
    v = (random(0,361) * (PI/180));
    unitVector = [cos(v),sin(v)];
  }
  else{
    if(ball_x <= pong1_X+10 && (ball_y > pong1_Y-5 && ball_y < pong1_Y+65) ||
      ball_x >= pong2_X && (ball_y > pong2_Y-5 && ball_y < pong2_Y+65)){
        unitVector[0] = -unitVector[0];
        ball_x += ballspeed * unitVector[0];
        ball_y += ballspeed * unitVector[1];  
        ballspeed++;
      }
    else if(ball_y <= -5 || ball_y>= canvas_y+5){
      unitVector[1] = -unitVector[1];
      ball_x += ballspeed * unitVector[0];
      ball_y += ballspeed * unitVector[1]; 
    }
    else{
      ball_x += ballspeed * unitVector[0];
      ball_y += ballspeed * unitVector[1];
    }
  }
}