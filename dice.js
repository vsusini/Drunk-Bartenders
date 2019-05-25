var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        //console.log("I am rolling the die and got: "+ randomNumber);
        return randomNumber;
    }
}

function printNumber(number) {
    var placeholder = document.getElementById('dice');
    placeholder.innerHTML = number;
}

function rollDie(){
    var result = dice.roll();
    printNumber(result);
    return result;
}