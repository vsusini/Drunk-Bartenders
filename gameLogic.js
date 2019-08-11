
//  Name: gameLogic.js
//  Author : Nicolas Gardin
//  Author : Vincent Susinu


var playerMoveCount = 0;

//Helps increase the move count when it is on the last player.
function increaseMoveCount(){
    playerMoveCount++;
    if (playerMoveCount == playerCount){
        playerMoveCount = 0;
    }
}

/*
 *Depending on # of players chosen, it splits the characters
 *into equal seperations and displays on peice #1
 */
function layoutStartingPositions(){
    //display characters
    var left = 0;
    maxSpot = 25;
    result = maxSpot / playerCount;
    for(var i=0; i<playerCount; i++){
        var game_screen = document.getElementById("gameScreen");
        var node = document.createElement("img");

        player = playerList[i];

        //add div element to gameScreen
        game_screen.appendChild(node);

        //add class styling
        var myString = "playerStyle";
        node.classList.add(myString);

        node.setAttribute("id","player"+i);
        node.style.setProperty("left",left+"vw");
        node.setAttribute("src", player.getPicID());
        left = left + result;

        //allows specific sizing for different character models
        addPlayerStyle(node, player.getName());
    }
}

function addPlayerStyle(player, name){

    switch(name){
        case "Kim Jong Un":
            player.className += " kimStyle";
            break;
        case "Storm Trooper":
            player.className += " trooperStyle";
            break;
        case "McLovin":
            player.className += " mcLovinStyle";
            break;
    }
}

function addDieValueToScreen(move){
    document.getElementById("dieValue").innerHTML = move;

    //Display dice value on screen
    dieText = document.getElementById("rollDieText");
    turnText = document.getElementById("rollTurnText");
    dieText.style.display = "none";
    turnText.style.display = "block";
}

//Called when it needs to find the player on the screen
//Broken I need to fix, I dont think getBoundingClient does what I want it to do. Once I fix
//this is should lead to following the player while they move. 
function moveToPlayer(){
    document.getElementById("dieValue").innerHTML = "";
    var player = document.getElementById("player"+playerMoveCount);
    // player.scrollIntoView();
    alert("player" + playerMoveCount);
    //Move to player position.
    var position = player.getBoundingClientRect();

    alert("player position: x:" + position.x + ", y:" + position.y);
    window.scrollTo(position.x,position.y);

    //Blank out dice value
    dieText = document.getElementById("rollDieText");
    turnText = document.getElementById("rollTurnText");
    dieText.style.display = "block";
    turnText.style.display = "none";
    playerJump(player);
}

//Player jumps when called
function playerJump(player){
        //Start Jump
        player.style.setProperty("bottom","30vh");

        //Stall for 1sec then lower player again. 
        setTimeout(function(){
            player.style.setProperty("bottom","15vh");
        }, 1000);
}

//Moves the players image to the correct board spot
function movePlayer(player,move){
    //Movement of Player Div
    for (var i = 0; i < move;i++){
        var node = document.getElementById("player"+player.getPlayerID());
        console.log(player.getName());
        var leftVw = node.style.left;
        leftVw = leftVw.substring(0,leftVw.length-2);
        console.log("leftVw:"+leftVw);
        node.style.setProperty("left",parseInt(leftVw,10)+25+"vw");
    }

    //node.style.setProperty("left",(parseInt(leftVw,10)+(25*move))+"vw");
    //console.log("leftVw:"+(parseInt(leftVw,10)+(25*move))+"vw");
}

//Ran when rollDie button is clicked
function continueGame(){
    if (playerList[playerMoveCount].getTileNum() < 80){
        var move = rollDie();
        addDieValueToScreen(move);
        //console.log(playerList[playerMoveCount].getPlayerID()+" got:"+move+"!");
        movePlayer(playerList[playerMoveCount],move);
        increaseMoveCount();
        turnText.innerHTML = "Go to player " + playerList[playerMoveCount].getName() + "'s turn";
        playerList[playerMoveCount].increaseTileNum(move);
        //console.log(playerList[playerMoveCount].getTileNum());
    } else {
        alert ("game is over");
    }
}
