function increaseMoveCount(){
    playerMoveCount++;
    if (playerMoveCount == playerCount){
        playerMoveCount = 0;
    }
}

//Game portion

function startGame(){
    console.log("Made it NOW, we play..");
    while(playerList[playerMoveCount].getTileNum() < 80){
        increaseMoveCount();
        alert("I am rolling the die");
        var move = rollDie()
        console.log(playerList[playerMoveCount].getPlayerID()+" got:"+move+"!");
        playerList[playerMoveCount].increaseTileNum(move);
    }
    console.log("Game Over")
}
