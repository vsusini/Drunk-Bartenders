
//  Name: startMenu.js
//  Author : Nicolas Gardin
//  Author : Vincent Susinu



//global Variables
var NUMCHAR = 13;
var playerCount = 0; //FINAL PLAYER COUNT
var currentPlayerCount = 0; //FOR COUNTING CLICKS ON CHARACTERS
var playerList = [];

var characterNames = [
    "Budlight", 
    "Corona", 
    "RedBull", 
    "Stella", 
    "Whiskey", 
    "Guinness", 
    "Smirnoff", 
    "Heineken",
    "RumAndCoke", 
    "Martini", 
    "Wine", 
    "WhiteClaw"];

var characterImages = [
    "Characters/Char/budlight.png",
    "Characters/Char/corona.png",
    "Characters/Char/redbull.png", 
    "Characters/Char/stella.png", 
    "Characters/Char/whiskey.png", 
    "Characters/Char/guinness.png", 
    "Characters/Char/smirnof.png", 
    "Characters/Char/heineken.png", 
    "Characters/Char/rumAndCoke.png",  
    "Characters/Char/martini.png", 
    "Characters/Char/wine.png", 
    "Characters/Char/whiteclaw.png"];

var charSelBottomPanel = document.getElementById("normalText");
var playerNumber = 1;
makeAllPlayerSelected();

function numPlayersSelected(numPlayers){
    for(var i = 1; i<13; i++){
        playerCount = numPlayers;
        var btn = document.getElementById("btn"+i);
        if(!(i==numPlayers)){
            btn.className += " selected";
        }
    }
    document.getElementById("charSelBtn").style.opacity = "0.7";

    var playerElm = document.getElementsByClassName("char");
    removeClassSelectedFromPlayers(playerElm);
    charSelBottomPanel.innerHTML = "Player " + playerNumber + "'s character selection";
}

function toCharSelection() {
    document.getElementById("startScreen").style.opacity = "0";
    setTimeout(displayStartScreen, 2000);
}
function displayStartScreen() {
    document.getElementById("startScreen").style.display = "none";
}

function choosePlayer(num) {
    playerNumber = playerNumber+1;
    charSelBottomPanel.innerHTML = "Player " + playerNumber + "'s character selection";
    switch (num) {
        case 0:
            document.getElementById("char1").className += " selected";
            createPlayer(0, characterNames[0],characterImages[0]);
            break;
        case 1:
            document.getElementById("char2").className += " selected";
            createPlayer(1, characterNames[1],characterImages[1]);
            break;
        case 2:
            document.getElementById("char3").className += " selected";
            createPlayer(2, characterNames[2],characterImages[2]);
            break;
        case 3:
            document.getElementById("char4").className += " selected";
            createPlayer(3, characterNames[3],characterImages[3]);
            break;
        case 4:
            document.getElementById("char5").className += " selected";
            createPlayer(4, characterNames[4],characterImages[4]);
            break;
        case 5:
            document.getElementById("char6").className += " selected";
            createPlayer(5, characterNames[5],characterImages[5]);
            break;
        case 6:
            document.getElementById("char7").className += " selected";
            createPlayer(6, characterNames[6],characterImages[6]);
            break;
        case 7:
            document.getElementById("char8").className += " selected";
            createPlayer(7, characterNames[7],characterImages[7]);
            break;
        case 8:
            document.getElementById("char9").className += " selected";
            createPlayer(8, characterNames[8],characterImages[8]);
            break;
        case 9:
            document.getElementById("char10").className += " selected";
            createPlayer(9, characterNames[9],characterImages[9]);
            break;
        case 10:
            document.getElementById("char11").className += " selected";
            createPlayer(10, characterNames[10],characterImages[10]);
            break;
        case 11:
            document.getElementById("char12").className += " selected";
            createPlayer(11, characterNames[11],characterImages[11]);
        case 12:
            document.getElementById("char13").className += " selected";
            createPlayer(12, characterNames[12],characterImages[12]);
            break;
        case 13:
            document.getElementById("char14").className += " selected";
            createPlayer(13, characterNames[13],characterImages[13]);
            break;
        case 14:
            document.getElementById("char15").className += " selected";
            createPlayer(14, characterNames[14],characterImages[14]);
            break;
        case 15:
            document.getElementById("char16").className += " selected";
            createPlayer(15, characterNames[15],characterImages[15]);
            break;
        case 16:
            document.getElementById("char17").className += " selected";
            createPlayer(16, characterNames[16],characterImages[16]);
            break;
        case 17:
            document.getElementById("char18").className += " selected";
            createPlayer(17, characterNames[17],characterImages[17]);
            break;
        case 18:
            document.getElementById("char19").className += " selected";
            createPlayer(18, characterNames[18],characterImages[18]);
            break;
        case 19:
            document.getElementById("char20").className += " selected";
            createPlayer(19, characterNames[19],characterImages[19]);
            break;
        case 20:
            document.getElementById("char21").className += " selected";
            createPlayer(20, characterNames[20],characterImages[20]);
            break;
        case 21:
            document.getElementById("char22").className += " selected";
            createPlayer(21, characterNames[21],characterImages[21]);
            break;
        case 22:
            document.getElementById("char23").className += " selected";
            createPlayer(22, characterNames[22],characterImages[22]);
            break;
        case 23:
            document.getElementById("char24").className += " selected";
            createPlayer(23, characterNames[23],characterImages[23]);
            break;
        case 24:
            document.getElementById("char25").className += " selected";
            createPlayer(24, characterNames[24],characterImages[24]);
            break;
        case 25:
            document.getElementById("char26").className += " selected";
            createPlayer(25, characterNames[25],characterImages[25]);
            break;
        default:
            console.log("There was an error choosing a character");
            alert("Problem, please restart.");
            return -1;
    }
}


function makeAllPlayerSelected(){
    for (var i = 1; i < NUMCHAR; i++){
        document.getElementById("char"+i).className += " selected";
    }
}


function removeClassSelectedFromPlayers(playerElm){
    for (i = 0; i < playerElm.length; i++) {
        playerElm[i].classList.remove("selected");
    }
}


function changeScreen(){
    var charSelection = document.getElementById("charSelectionDiv");
    var gameScreen = document.getElementById("gameScreen");

    charSelection.style.display = "none";
    gameScreen.style.display = "block";

    var bottomBar = document.getElementsByClassName("bottomPanel");
    for(var i = 0; i<bottomBar.length; i++){
        bottomBar[i].style.display = "block";
    }
}


function createPlayer(num, name, imageName){
    let player = new Player(currentPlayerCount, name, 1,imageName);
    playerList[currentPlayerCount] = player;
    console.log("Added Player " + playerList[currentPlayerCount].getPlayerID() + " whos name is " + playerList[currentPlayerCount].getName());
    currentPlayerCount++;
    console.log("currentPLayerOCunt " + currentPlayerCount + " Player count " + playerCount);
    if (currentPlayerCount == playerCount) {
        console.log(playerList);
        makeAllPlayerSelected();

        document.getElementById("normalText").style.display = "none";
        document.getElementById("startGameBtnText").style.display = "block";
        document.getElementById("startGameBtnText").style.opacity = "1";

        //document.getElementById ("rollDie").addEventListener ("click", continueGame, false);
    } else {
        console.log("Missed it");
    }
}

function startGameClick(){
    changeScreen();
    layoutStartingPositions();
}


class Player{

    constructor(playerID, name, tileNum, picID) {
        this.playerID = playerID;
        this.name = name;
        this.tileNum = tileNum;
        this.picID = picID;
    }
    getPicID() {
        return this.picID;
    }

    getTileNum() {
        return this.tileNum;
    }

    getPlayerID() {
        return this.playerID;
    }

    getName() {
        return this.name;
    }

    increaseTileNum(moveCount) {
        this.tileNum = this.tileNum + moveCount;
    }
}
