class form{
constructor(){
    
}
display(){
var title=createElement("h2")
title.html("Multiplayer Car Racing Game")
title.position(50,50)
var name=createInput("Enter player name")
name.position(50,200)
var submit=createButton("Submit")
submit.position(200,200)
submit.mousePressed(function(){
var message=createElement("h1")
message.html("Welcome to the game!"+name.value())
message.position(30,30)
title.hide()
name.hide()
submit.hide()
})
}
}