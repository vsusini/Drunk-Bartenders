var NUMCHAR = 27

var playerCount = window.prompt("How many players would you like?");
alert("You chose " + playerCount + " Players");

var currentPlayerCount = 0;

var characterNames = ["Kim Jong Un", "Storm Trooper", "McLovin", "George", "Steven Hawking", "Krimson Chin", "Asian Fellow", "Hoy Me Noy", "Dwight", "Trump", "Brian", "Forest Gump", "Sparta", "Jesus", "Jimmy Neutron", "Bud Light", "Oprah", "Tiger Woods", "Titanic", "Thanos", "Michael Jackson", "Thor", "Donkey", "Joey", "Hirambe", "Johnny Sins"];

var characterImages = ["images/stormtrooper_char.png"];

var playerList = []
var playerMoveCount = 0

function choosePlayer(num) {
    switch (num) {
        case 0:
            console.log("You picked Kim Jong Un");
            document.getElementById("char1").className += " selected";
            createPlayer(0, characterNames[0],characterImages[0]);
            break;
        case 1:
            console.log("You picked Storm Trooper");
            document.getElementById("char2").className += " selected";
            createPlayer(1, characterNames[1],characterImages[1]);
            break;
        case 2:
            console.log("You picked Dildo");
            document.getElementById("char3").className += " selected";
            createPlayer(2, characterNames[2],characterImages[2]);
            break;
        case 3:
            console.log("You Picked Master Cheif");
            document.getElementById("char4").className += " selected";
            createPlayer(3, characterNames[3],characterImages[3]);
            break;
        case 4:
            console.log("You Picked Bran");
            document.getElementById("char5").className += " selected";
            createPlayer(4, characterNames[4],characterImages[4]);
            break;
        case 5:
            console.log("You Picked Crimson Chin");
            document.getElementById("char6").className += " selected";
            createPlayer(5, characterNames[5],characterImages[5]);
            break;
        case 6:
            console.log("You Picked Thor");
            document.getElementById("char7").className += " selected";
            createPlayer(6, characterNames[6],characterImages[6]);
            break;
        case 7:
            console.log("You Picked Houmoninia");
            document.getElementById("char8").className += " selected";
            createPlayer(7, characterNames[7],characterImages[7]);
            break;
        case 8:
            console.log("You Picked Ghost");
            document.getElementById("char9").className += " selected";
            createPlayer(8, characterNames[8],characterImages[8]);
            break;
        case 9:
            console.log("You Picked Camel Toe");
            document.getElementById("char10").className += " selected";
            createPlayer(9, characterNames[9],characterImages[9]);
            break;
        case 10:
            console.log("You Picked Bad Luck Brian");
            document.getElementById("char11").className += " selected";
            createPlayer(10, characterNames[10],characterImages[10]);
            break;
        case 11:
            console.log("You Picked Travis Scott");
            document.getElementById("char12").className += " selected";
            createPlayer(11, characterNames[11],characterImages[11]);
        case 12:
            console.log("Picked player 12");
            document.getElementById("char13").className += " selected";
            createPlayer(12, characterNames[12],characterImages[12]);
            break;
        case 13:
            console.log("Picked player 13");
            document.getElementById("char14").className += " selected";
            createPlayer(13, characterNames[13],characterImages[13]);
            break;
        case 14:
            console.log("Picked player 14");
            document.getElementById("char15").className += " selected";
            createPlayer(14, characterNames[14],characterImages[14]);
            break;
        case 15:
            console.log("Picked player 15");
            document.getElementById("char16").className += " selected";
            createPlayer(15, characterNames[15],characterImages[15]);
            break;
        case 16:
            console.log("Picked player 16");
            document.getElementById("char17").className += " selected";
            createPlayer(16, characterNames[16],characterImages[16]);
            break;
        case 17:
            console.log("Picked player 17");
            document.getElementById("char18").className += " selected";
            createPlayer(17, characterNames[17],characterImages[17]);
            break;
        case 18:
            console.log("Picked player 18");
            document.getElementById("char19").className += " selected";
            createPlayer(18, characterNames[18],characterImages[18]);
            break;
        case 19:
            console.log("Picked player 19");
            document.getElementById("char20").className += " selected";
            createPlayer(19, characterNames[19],characterImages[19]);
            break;
        case 20:
            console.log("Picked player 20");
            document.getElementById("char21").className += " selected";
            createPlayer(20, characterNames[20],characterImages[20]);
            break;
        case 21:
            console.log("Picked player 21");
            document.getElementById("char22").className += " selected";
            createPlayer(21, characterNames[21],characterImages[21]);
            break;
        case 22:
            console.log("Picked player 22");
            document.getElementById("char23").className += " selected";
            createPlayer(22, characterNames[22],characterImages[22]);
            break;
        case 23:
            console.log("Picked player 23");
            document.getElementById("char24").className += " selected";
            createPlayer(23, characterNames[23],characterImages[23]);
            break;
        case 24:
            console.log("Picked player 24");
            document.getElementById("char25").className += " selected";
            createPlayer(24, characterNames[24],characterImages[24]);
            break;
        case 25:
            console.log("Picked 25");
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

class Player {

    constructor(playerID, name, tileNum, picID) {
        this.playerID = playerID;
        this.name = name;
        this.tileNum = tileNum
        this.picID = picID
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
        return this.name
    }

    increaseTileNum(moveCount) {
        this.tileNum = this.tileNum + moveCount;
    }
}

function changeScreen(){
    var charSelection = document.getElementById("charSelection");
    var gameScreen = document.getElementById("gameScreen");

    charSelection.style.display = "none";
    gameScreen.style.display = "block";
}

function createPlayer(num, name, imageName) {
    let player = new Player(currentPlayerCount, name, 0,imageName);
    playerList[currentPlayerCount] = player;
    console.log("Added Player " + playerList[currentPlayerCount].getPlayerID() + " whos name is " + playerList[currentPlayerCount].getName());
    currentPlayerCount++;
    console.log("currentPLayerOCunt " + currentPlayerCount + " Player count " + playerCount);
    if (currentPlayerCount == playerCount) {
        console.log(playerList);
        makeAllPlayerSelected();
        changeScreen();
        startGame(playerList);
    } else {
        console.log("Missed it");
    }
}
