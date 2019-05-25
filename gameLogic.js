

class Player {
    
    constructor(playerID, name,tileNum){
        this.playerID = playerID;
        this.name = name;
        this.tileNum = tileNum
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

function increaseMoveCount(){
    playerMoveCount++;
    if (playerMoveCount == playerCount){
        playerMoveCount = 0;
    }
}

var playerCount = window.prompt("How many players would you like?");
alert("You chose " + playerCount + " Players");

var playerList = []
var playerMoveCount = 0

if(isNaN(playerCount)){
    alert("playerCount not a number")
} else {
    for (var i = 0;i<playerCount; i++){

        let player = new Player(i,"test",0)
        playerList[i] = player
        console.log("Added Player "+ playerList[i].getPlayerID() + " whos name is "+ playerList[i].getName())
    }
}

while(playerList[playerMoveCount].getTileNum() < 80){
    increaseMoveCount();
    alert("I am rolling the die");
    var move = rollDie()
    console.log(playerList[playerMoveCount].getPlayerID()+" got:"+move+"!");
    playerList[playerMoveCount].increaseTileNum(move);

}

console.log("Game Over")




