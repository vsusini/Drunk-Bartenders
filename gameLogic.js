function increaseMoveCount(){
    playerMoveCount++;
    if (playerMoveCount == playerCount){
        playerMoveCount = 0;
    }
}

//Game portion

function startGame(playerList){
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
