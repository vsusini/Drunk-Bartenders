
//  Name: gameLogic.js
//  Author : Nicolas Gardin
//  Author : Vincent Susinu


var playerMoveCount = 0;
const MOVING_VALUE = 25; //Value that a players vw must be increased. 

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
    result = MOVING_VALUE / playerCount;
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

function addPlayerStyle(node, name){

    switch(name){
        case "Budlight":
            node.style.setProperty("height",  "25vh");
            node.style.setProperty("width",  "7vw");
            break;
        case "Corona":
            node.style.setProperty("height",  "30vh");
            node.style.setProperty("width",  "7vw");
            break;
        case "RedBull":
            document.getElementById("player2").style.height = "20vh";
            document.getElementById("player2").style.width = "5vw";
            break;
        case "Stella":
            document.getElementById("player3").style.height = "20vh";
            document.getElementById("player3").style.width = "5vw";
            break;
        case "Whiskey":
            document.getElementById("player4").style.height = "20vh";
            document.getElementById("player4").style.width = "5vw";
            break;
        case "Guinness":
            document.getElementById("player5").style.height = "20vh";
            document.getElementById("player5").style.width = "5vw";
            break;
        case "Smirnoff":
            document.getElementById("player6").style.height = "20vh";
            document.getElementById("player6").style.width = "5vw";
            break;
        case "Heineken":
            document.getElementById("player7").style.height = "20vh";
            document.getElementById("player7").style.width = "5vw";
            break;
        case "RumAndCoke":
            document.getElementById("player8").style.height = "20vh";
            document.getElementById("player8").style.width = "5vw";
            break;
         case "Martini":
            document.getElementById("player9").style.height = "20vh";
            document.getElementById("player9").style.width = "5vw";
            break;
        case "Wine":
            document.getElementById("player10").style.height = "20vh";
            document.getElementById("player10").style.width = "5vw";
            break;
        case "WhiteClaw":
            document.getElementById("player11").style.height = "20vh";
            document.getElementById("player11").style.width = "5vw";
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
function moveToPlayer(){
    document.getElementById("dieValue").innerHTML = "";
    var player = document.getElementById("player"+playerMoveCount);
    //Movement to player, currently goes to end of element and is smooth. 
    //If players are movedTo to quickly after they move, moveToPlayer will be a couple vw behind.
    //Not a problem if we have more than 1 player. 
    player.scrollIntoView({block:'end', behavior: 'smooth'}+100);
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


function movePlayer(player,move){
    if(player.getTileNum()+move >= 60){
        move = 60 - player.getTileNum();
        console.log("Move:"+move);
    }
    //Movement of Player Div
    for (var i = 0; i < move;i++){
        var node = document.getElementById("player"+player.getPlayerID());
        var leftVw = node.style.left;
        leftVw = leftVw.substring(0,leftVw.length-2);
        console.log("leftVw:"+leftVw);
        node.style.setProperty("left",parseInt(leftVw,10)+(MOVING_VALUE)+"vw");
        leftVw = node.style.left;
    }
    window.scrollBy((window.innerWidth / 4)*move,0);
}

function gameWinAction(){
    var node = document.getElementById("player"+player.getPlayerID());
    node.style.setProperty("left","50vw");
    //scroll to the div of the background win pic
    setTimeout(function(){
        node.style.setProperty("bottom","60vh");
    }, 3000);
}

//Ran when rollDie button is clicked
function continueGame(){
    var move = rollDie();
    addDieValueToScreen(move);
    console.log(playerList[playerMoveCount].getPlayerID()+" got:"+move+"!");
    movePlayer(playerList[playerMoveCount],move);
    playerList[playerMoveCount].increaseTileNum(move);
    increaseMoveCount();
    if (playerList[playerMoveCount].getTileNum() <= 60){
        turnText.innerHTML = playerList[playerMoveCount].getName() + "'s turn";
        console.log(playerList[playerMoveCount].getTileNum());
        //console.log(playerList[playerMoveCount].getTileNum());
    } else {
        turnText.innerHTML = "Game Over!";
        gameWinAction();
        console.log("game is over");
    }
}