
//  Name: gameLogic.js
//  Author : Nicolas Gardin
//  Author : Vincent Susinu


var playerMoveCount = 0;
const MOVING_VALUE = 25; //Value that a players vw must be increased. 
const CARD_NUM = 60; //Total number of cards

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
    var result = MOVING_VALUE / playerCount;
    for(var i=0; i<playerCount; i++){
        var game_screen = document.getElementById("gameScreen");
        var node = document.createElement("img");

        var player = playerList[i];

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
            node.style.setProperty("height",  "40vh");
            node.style.setProperty("width",  "7vw");
            break;
        case "RedBull":
            node.style.setProperty("height",  "30vh");
            node.style.setProperty("width",  "6vw");
            node.style.setProperty("bottom",  "12vh");
            break;
        case "Stella":
            node.style.setProperty("height",  "41vh");
            node.style.setProperty("width",  "7vw");
            node.style.setProperty("bottom",  "13vh");
            break;
        case "Whiskey":
            node.style.setProperty("height",  "40vh");
            node.style.setProperty("width",  "7vw");
            break;
        case "Guinness":
            node.style.setProperty("height",  "30vh");
            node.style.setProperty("width",  "8vw");
            node.style.setProperty("bottom",  "11.3vh")
            break;
        case "Smirnoff":
            node.style.setProperty("height",  "25vh");
            node.style.setProperty("width",  "7vw");
            break;
        case "Heineken":
            node.style.setProperty("height",  "41vh");
            node.style.setProperty("width",  "6vw");
            node.style.setProperty("bottom",  "14vh")
            break;
        case "RumAndCoke":
            node.style.setProperty("height",  "32vh");
            node.style.setProperty("width",  "7vw");
            node.style.setProperty("bottom",  "12.3vh")
            break;
         case "Martini":
            node.style.setProperty("height",  "36vh");
            node.style.setProperty("width",  "7vw");
            node.style.setProperty("bottom",  "10.5vh")
            break;
        case "Wine":
            node.style.setProperty("height",  "34vh");
            node.style.setProperty("width",  "5.5vw");
            node.style.setProperty("bottom",  "14vh")
            break;
        case "WhiteClaw":
            node.style.setProperty("height",  "28vh");
            node.style.setProperty("width",  "5vw");
            node.style.setProperty("bottom",  "14vh")
            break;
    }
}

function addDieValueToScreen(move){
    document.getElementById("dieValue").innerHTML = move;

    //die roll animation
    document.getElementById("die").style.opacity = "0";
    document.getElementById("die").style.transform = "rotate(360deg)";
    document.getElementById("die").style.left = "90vw";

    //Display dice value on screen
    dieText = document.getElementById("rollDieText");
    turnText = document.getElementById("rollTurnText");
    dieText.style.display = "none";
    turnText.style.display = "block";
}

//Called when it needs to find the player on the screen 
function moveToPlayer(){

    //add die back to screen
    document.getElementById("die").style.opacity = "1";
    document.getElementById("die").style.transform = "rotate(0deg)";
    document.getElementById("die").style.left = "53vw";

    document.getElementById("dieValue").innerHTML = "";
    var player = document.getElementById("player"+playerMoveCount);
    //Movement to player, currently goes to end of element and is smooth. 
    //If players are movedTo to quickly after they move, moveToPlayer will be a couple vw behind.
    //Not a problem if we have more than 1 player. 
    player.scrollIntoView({block:'end', behavior: 'smooth'});
    //Blank out dice value
    dieText = document.getElementById("rollDieText");
    turnText = document.getElementById("rollTurnText");
    dieText.style.display = "block";
    turnText.style.display = "none";
    playerJump(player);
    //consider trying to discover which way it scrolls and send it.
}

//Player jumps when called
function playerJump(player){
        //Start Jump
        player.style.setProperty("transition", "1s");
        player.style.setProperty("bottom","30vh");

        //Stall for 1sec then lower player again. 
        setTimeout(function(){
            player.style.setProperty("bottom","15vh");
            player.style.setProperty("transition", "2s");
        }, 1000);

}


function movePlayer(player,move){
    if(player.getTileNum()+move >= CARD_NUM){
        move = CARD_NUM - player.getTileNum();
        console.log("Move:"+move);
    }
    //Movement of Player Div
    completeMove(player,move,1);
}

function completeMove(player, move, moveType){
    //console.log("Moving back player: "+player.getName()+"and hes moving back: "+move);
    for (var i = 0; i < move;i++){
        var node = document.getElementById("player"+player.getPlayerID());
        var leftVw = node.style.left;
        leftVw = leftVw.substring(0,leftVw.length-2);
        //console.log("leftVw:"+leftVw);
        if (moveType == 1){
            node.style.setProperty("left",parseInt(leftVw,10)+(MOVING_VALUE)+"vw");
        }else {
            node.style.setProperty("left",parseInt(leftVw,10)-(MOVING_VALUE)+"vw");
        }
    }
    if (moveType == 1){
        window.scrollBy(((window.innerWidth / 4)*move)/1.5,0);
    }else{
        setTimeout(function(){
            window.scrollBy(((((window.innerWidth / 4)*move)/1.5)*-1),0);
        }, 1000);
    }
}

function gameWinAction(player){
    console.log("made it");
    setTimeout(function(){
        console.log("made it *2");
        console.log("PlayerID: "+player.getName());
        var node = document.getElementById("player"+player.getPlayerID());
        console.log("Left:" +node.style.left);
        var leftVw = node.style.left;
        leftVw = leftVw.substring(0,leftVw.length-2);
        node.style.setProperty("left",parseInt(leftVw,10)+(50)+"vw"); //Increase 50 value to push to the right.
        //scroll to the div of the background win pic
        console.log("Left:"+ node.style.left);
        setTimeout(function(){
            console.log("made it *3");
            node.style.setProperty("bottom","60vh"); //vertical height value
        }, 5000);
    }, 3000)
}

function moveBack(player, move){
    player.increaseTileNum(move*-1);
    completeMove(player,move,0);
}

//Ran when rollDie button is clicked
function continueGame(){
    gameOverFlag = true;
    var moveBackFlag = false;
    var move = rollDie();
    addDieValueToScreen(move);
    console.log(playerList[playerMoveCount].getPlayerID()+" got:"+move+"!");
    movePlayer(playerList[playerMoveCount],move);
    playerList[playerMoveCount].increaseTileNum(move);
    console.log("Move for:"+playerList[playerMoveCount].getName()+" its at:"+playerList[playerMoveCount].getTileNum());
    if (playerList[playerMoveCount].getTileNum() > CARD_NUM){
        var gameOverFlag = false;
        turnText.innerHTML = "Game Over!";
        gameWinAction(playerList[playerMoveCount]);
        console.log("game is over");
    }else if(playerList[playerMoveCount].getTileNum() == 5){
        moveBackFlag = true;
        setTimeout(function(){
            //console.log("PLAYER NAME: "+playerList[playerMoveCount].getName());
            moveBack(playerList[playerMoveCount],4);
        }, 3000);
    }else if(playerList[playerMoveCount].getTileNum() == 12){
        moveBackFlag = true;
        setTimeout(function(){
            //console.log("PLAYER NAME: "+playerList[playerMoveCount].getName());
            moveBack(playerList[playerMoveCount],2);
        }, 3000);
    }else if(playerList[playerMoveCount].getTileNum() == 26){
        moveBackFlag = true;
        setTimeout(function(){
            moveBack(playerList[playerMoveCount],3);
        }, 3000);

    }else if(playerList[playerMoveCount].getTileNum() == 40){
        moveBackFlag = true;
        setTimeout(function(){
            moveBack(playerList[playerMoveCount],4);
        }, 3000);

    }else if(playerList[playerMoveCount].getTileNum() == 50){
        moveBackFlag = true;
        setTimeout(function(){
            moveBack(playerList[playerMoveCount],1);
        }, 3000);
    }
    if (gameOverFlag){
        if (moveBackFlag){
                setTimeout(function(){
                increaseMoveCount();
                turnText.innerHTML = playerList[playerMoveCount].getName() + "'s turn";
            },4000);
        } else {
            increaseMoveCount();
            turnText.innerHTML = playerList[playerMoveCount].getName() + "'s turn";
        }
    }
}