function increaseMoveCount(){
    playerMoveCount++;
    if (playerMoveCount == playerCount){
        playerMoveCount = 0;
    }
}

function layoutStartingPositions(){
    //display characters
    var left = 0;
    maxSpot = 25;
    result = maxSpot / playerCount
    for(var i=0; i<playerCount; i++){
        var game_screen = document.getElementById("gameScreen");
        var node = document.createElement("img");

        player = playerList[i];
        var playerNum = player.getPlayerID();
        // alert("Player num: " + playerNum);

        //add div element to gameScreen
        game_screen.appendChild(node);

        //add class styling
        var myString = "playerStyle";
        node.classList.add(myString);

        var name = player.getName();
        // alert("Player Name: " + name);
        node.style.setProperty("left",left+"vw");
        node.setAttribute("src", player.getPicID());
        left = left + result;
    }
}

//Game portion
function startGame(playerList){
    layoutStartingPositions();

    console.log("Made it NOW, we play..");
    console.log("From console:"+playerList);
    while(playerList[playerMoveCount].getTileNum() < 80){
        increaseMoveCount();
        //alert("I am rolling the die");
        console.log("I role")
        //Button click here
        var move = rollDie()
        console.log(playerList[playerMoveCount].getPlayerID()+" got:"+move+"!");
        playerList[playerMoveCount].increaseTileNum(move);
    }
    console.log("Game Over")
}
