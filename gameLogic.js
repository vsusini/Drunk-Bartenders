var playerMoveCount = 0;

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
    result = maxSpot / playerCount;
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
        node.setAttribute("id","player"+i);
        node.style.setProperty("left",left+"vw");
        node.setAttribute("src", player.getPicID());
        left = left + result;
    }
}

function movePlayer(player,move){
    console.log("move player");
    console.log(player.getPlayerID());
    var node = document.getElementById("player"+player.getPlayerID());
    var leftVw = node.style.left;
    console.log("leftVw"+leftVw);
    leftVw = leftVw.substring(0,leftVw.length-2);
    console.log(leftVw);
    node.style.setProperty("left",(parseInt(leftVw,10)+(25*move))+"vw");
    console.log((leftVw+(25*move))+"vw");
    //now move the player;
    //increase by 25vw;
    //node.style.setProperty("left",move*25vw);
    
    

}

function addDieValueToScreen(move){
    document.getElementById("dieValue").innerHTML = move;
    alert("move "+move);
}


function continueGame(){
    if (playerList[playerMoveCount].getTileNum() < 80){
        increaseMoveCount();
        var move = rollDie()
        addDieValueToScreen(move);
        console.log(playerList[playerMoveCount].getPlayerID()+" got:"+move+"!");
        movePlayer(playerList[playerMoveCount],move);
        playerList[playerMoveCount].increaseTileNum(move);

    } else {
        alert ("game is over");
    }

}
