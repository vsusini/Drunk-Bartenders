var playerCount = window.prompt("How many players would you like?");
alert("You chose " + playerCount + " Players");

var currentPlayerCount = 0;

var playerList = []
var playerMoveCount = 0

function choosePlayer(num){
        switch(num){
            case 0:
                console.log("You picked Kim Jong Un");
                createPlayer(0);
                break;
            case 1:
                console.log("You picked Spongebob");
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
            default:
                console.log("There was an error choosing a character");
                return -1;
        }
}

class Player {
    
    constructor(playerID, name, tileNum, picID){
        this.playerID = playerID;
        this.name = name;
        this.tileNum = tileNum
        this.picID = picID
    }

    getPicID(){
        return this.picID;
    }

    getTileNum(){
        return this.tileNum;
    }

    getPlayerID(){
        return this.playerID;
    }

    getName(){
        return this.name
    }

    increaseTileNum(moveCount){
        this.tileNum = this.tileNum + moveCount;
    }
}

function createPlayer(num){
    let player = new Player(currentPlayerCount,"test",0,num)
    playerList[currentPlayerCount] = player
    console.log("Added Player "+ playerList[currentPlayerCount].getPlayerID() + " whos name is "+ playerList[currentPlayerCount].getName())
    currentPlayerCount++;
    console.log("currentPLayerOCunt "+ currentPlayerCount + " Player count "+playerCount);
    if(currentPlayerCount == playerCount){
        alert("Starting the Game");
    }else{
        console.log("Missed it");
    }
}
