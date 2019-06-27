

var numPlayers = document.getElementById("input").value;

function selectPlayers(numPlayers){
	var card1 = document.getElementById("char1");
	var card2 = document.getElementById("char2");
	var card3 = document.getElementById("char3");
	var card4 = document.getElementById("char4");
	var card5 = document.getElementById("char5");
	var card6 = document.getElementById("char6");
	var card7 = document.getElementById("char7");
	var card8 = document.getElementById("char8");
	var card9 = document.getElementById("char9");
	var card10 = document.getElementById("char10");
	var card11 = document.getElementById("char11");
	var card12 = document.getElementById("char12");
	var card13 = document.getElementById("char13");
	var card14 = document.getElementById("char14");
	var card15 = document.getElementById("char15");
	var card16 = document.getElementById("char16");
	var card17 = document.getElementById("char17");
	var card18 = document.getElementById("char18");
	var card19 = document.getElementById("char19");
	var card20 = document.getElementById("char20");
	var card21 = document.getElementById("char21");
	var card22 = document.getElementById("char22");
	var card23 = document.getElementById("char23");
	var card24 = document.getElementById("char24");
	var card25 = document.getElementById("char25");
	var card26 = document.getElementById("char26");

	var selectNum = 0;
	while(selectNum < numPlayers){

		//choose a player
		card1.addEventListener("click", selectPlayers(1));

	}
}


function startGame(){
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var btn3 = document.getElementById("btn3");
	var btn4 = document.getElementById("btn4");
	var btn5 = document.getElementById("btn5");
	var btn6 = document.getElementById("btn6");
	var btn7 = document.getElementById("btn7");
	var btn8 = document.getElementById("btn8");
	var btn9 = document.getElementById("btn9");
	var btn10 = document.getElementById("btn10");
	var btn11 = document.getElementById("btn11");
	var btn12 = document.getElementById("btn12");
	btn1.addEventListener("click", selectPlayers(1));
	btn2.addEventListener("click", selectPlayers(2));
	btn3.addEventListener("click", selectPlayers(3));
	btn4.addEventListener("click", selectPlayers(4));
	btn5.addEventListener("click", selectPlayers(5));
	btn6.addEventListener("click", selectPlayers(6));
	btn7.addEventListener("click", selectPlayers(7));
	btn8.addEventListener("click", selectPlayers(8));
	btn9.addEventListener("click", selectPlayers(9));
	btn10.addEventListener("click", selectPlayers(10));
	btn11.addEventListener("click", selectPlayers(11));
	btn12.addEventListener("click", selectPlayers(12));
	// var btn = document.getElementById("submit");
	// btn.addEventListener("click", start);
}

window.addEventListener("load", startGame, false);

