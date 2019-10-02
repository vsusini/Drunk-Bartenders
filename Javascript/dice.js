var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        //console.log("I am rolling the die and got: "+ randomNumber);
        return randomNumber;
    }
}

function rollDie(){
    var result = dice.roll();
    return result;
}