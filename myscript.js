

// TODO: 	1: Get player png
//			2: Reset to character 1 after Round Finishes
//			3: End game message?




//------ navbar functions -------------
	function navFunction(){
		var sidePanel = document.getElementById("sidePanel");
		var legendBtn = document.getElementById("legendBtn");

		var panelState = legendBtn.innerText;
		if(!navIsOpen(panelState)){
		   //open nav
		    sidePanel.style.width = "20vw";
			legendBtn.style.width = "20vw";
		  	legendBtn.innerHTML = "× Close Nav";
		  }
		  else{
		  	//close nav
		  	sidePanel.style.width = "0";
		  	legendBtn.style.width = "10vw";
		  	legendBtn.innerHTML = "☰ Legend";
		  }
		}

		function navIsOpen(panelState){
			if(panelState == "☰ Legend"){
				return false;
			}
			return true;
		}



function waitForAction(playerNum){
	var nextPlayer = document.getElementById("nextPlayer");
	nextPlayer.addEventListener("click", function(){nextPlayersTurn(playerNum)});
}

function nextPlayersTurn(playerNum){

	var rollBtn = document.getElementById("rollBtn");
	rollBtn.style.display = "block";

	var nextPlayer = document.getElementById("nextPlayer");
	nextPlayer.style.display = "none";

	var text = document.getElementById("playerNumText");
	stringToDisplay = "Player " + (playerNum+1) + "s turn";
	text.innerHTML = stringToDisplay;

	var card = document.getElementById("cardInfo");
	var cardTextToDisplay = "Player " + (playerNum+1) + ": Roll the dice to \
	select a card";
	card.innerHTML = cardTextToDisplay;

	newNum = playerNum + 1;
	var rollBtn = document.getElementById("rollBtn");
	rollBtn.addEventListener("click", function(){getCard(newNum)});
}

function getCard(playerNum){
	//array size = 31
	var array = ["Youngest Drinks", "Truth or Dare", 
	"Shotgun", "2 + 1 = 3 SHOTS!", "2 Truths, 1 Lie", 
	"Kings Cup", "Take 2 Shots", "Rock, Paper, Scissors (Loser Drinks)", 
	"Take an article of clothing off", "Take 1 shot", "Kill your drink", 
	"Chicks drink", "Everyone drinks", "Compliment to the left, Roast to the right", 
	"Strip 2 clothing items", "Shot per kill", 
	"Shortest of each gender takes 2 shots", "Rank your kills", "Dicks", 
	"Body shot", "Give 5 drinks", "Staring contest (Loser drinks)",
	"Thumbs master (Up = safe, Down = drink)", 
	"Ninja with the person to your right", 
	"You're safe this time! Pick someone to drink in your place",
	"Nose goes", "Fuck, Marry, Kill", "Oldest drinks", "Everyone drinks!", 
	"Take 3 shots", "Mystery Shot"];

	var num = Math.floor(Math.random() * 31);

	var cardInfo = document.getElementById("cardInfo");
	cardInfo.innerHTML = array[num];

	var nextPlayer = document.getElementById("nextPlayer");
	nextPlayer.style.display = "block";

	var rollBtn = document.getElementById("rollBtn");
	rollBtn.style.display = "none";

	waitForAction(playerNum);
}


function startGame(){
	nextPlayersTurn(0);
}

window.addEventListener("load", startGame, false);

