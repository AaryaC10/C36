var gameState=0;
var playerCount=0;
function setup(){
 createCanvas(400,400)
 f1=new form()
 f1.display()
 g=new game()

}

function draw(){
 background("yellow");
 if (playerCount===4){
  gameState=1
 }
}
