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
            createPlayer(0, characterNames[0],characterImages[0]);
            document.getElementById("char1").className += " selected";
            break;
        case 1:
            console.log("You picked Storm Trooper");
            createPlayer(1);
            break;
        case 2:
            console.log("You picked Dildo");
            createPlayer(2);
            break;
        case 3:
            console.log("You Picked Master Cheif");
            createPlayer(3);
            break;
        case 4:
            console.log("You Picked Bran");
            createPlayer(4);
            break;
        case 5:
            console.log("You Picked Crimson Chin");
            createPlayer(5);
            break;
        case 6:
            console.log("You Picked Thor");
            createPlayer(6);
            break;
        case 7:
            console.log("You Picked Houmoninia");
            createPlayer(7);
            break;
        case 8:
            console.log("You Picked Ghost");
            createPlayer(8);
            break;
        case 9:
            console.log("You Picked Camel Toe");
            createPlayer(9);
            break;
        case 10:
            console.log("You Picked Bad Luck Brian");
            createPlayer(10);
            break;
        case 11:
            console.log("You Picked Travis Scott");
            createPlayer(11);
            break;
        case 12:
            console.log("Picked player 12");
            createPlayer(12);
            break;
        case 13:
            console.log("Picked player 13");
            createPlayer(13);
            break;
        case 14:
            console.log("Picked player 14");
            createPlayer(14);
            break;
        case 15:
            console.log("Picked player 15");
            createPlayer(15);
            break;
        case 16:
            console.log("Picked player 16");
            createPlayer(16);
            break;
        case 17:
            console.log("Picked player 17");
            createPlayer(17);
            break;
        case 18:
            console.log("Picked player 18");
            createPlayer(18);
            break;
        case 19:
            console.log("Picked player 19");
            createPlayer(19);
            break;
        case 20:
            console.log("Picked player 20");
            createPlayer(20);
            break;
        case 21:
            console.log("Picked player 21");
            createPlayer(21);
            break;
        case 22:
            console.log("Picked player 22");
            createPlayer(22);
            break;
        case 23:
            console.log("Picked player 23");
            createPlayer(23);
            break;
        case 24:
            console.log("Picked player 24");
            createPlayer(24);
            break;
        case 25:
            console.log("Picked player 25");
            createPlayer(25);
            break;
        case 26:
            console.log("Picked player 26");
            createPlayer(26);
            break;
        default:
            console.log("There was an error choosing a character");
            return -1;
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

function createPlayer(num, name, imageName) {
    let player = new Player(currentPlayerCount, name, 0,imageName);
    playerList[currentPlayerCount] = player;
    console.log("Added Player " + playerList[currentPlayerCount].getPlayerID() + " whos name is " + playerList[currentPlayerCount].getName());
    currentPlayerCount++;
    console.log("currentPLayerOCunt " + currentPlayerCount + " Player count " + playerCount);
    if (currentPlayerCount == playerCount) {
        alert("Starting the Game");
        console.log(playerList);
    } else {
        console.log("Missed it");
    }
}
