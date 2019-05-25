var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
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
}