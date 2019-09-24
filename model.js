
		var x = 0;
		document.body.onkeyup = function(e){
		    if(e.keyCode == 32){
		        if(x%2==0){
		        	continueGame();
		        }else{
		        	moveToPlayer();
		        }
		        x++;
		    }
		}

			var model = document.getElementById("modelDialog");
			var modelText = document.getElementById("modelText");
			var modelImg = document.getElementById("modelImg");

			var gameScreen = document.getElementById("gameScreen2");
			var coverProof = document.getElementById("coverProof");
			var message;
			var imgSrc

		function mysteryBox1(){
			openModel(0);
		}
		function mysteryBox2(){
			openModel(-1);
		}
		function mysteryBox3(){
			openModel(-2);
		}
		function mysteryBox4(){
			openModel(-3);
		}
		function mysteryBox5(){
			openModel(-4);
		}
		function mysteryBox6(){
			openModel(-5);
		}

		function openModel(cardNum){

			var cardImg = document.getElementsByClassName("gameTile");

            var chanceCards = [
                "Sorry bud, thats gonna cost you a shot!", 
                "I'm impressed... get the rest of them drunk. \nYou've got 4 to give out.", 
                "You're cute, you though't I would give away things in these.", 
                "Who put these in here. Pointless. \n You get to give out a shot though!", 
                "I'm impressed... get the rest of them drunk. \nYou've got 2 to give out.",
                "I'm impressed... get the rest of them drunk. \nYou've got 6 to give out."];
			var randNum = Math.floor(Math.random() * chanceCards.length);

			switch(cardNum){
				case -5:
					if(randNum%2 == 0 || randNum==0){
						imgSrc = "images/badLuck.png";
					}else{imgSrc = "images/goodLuck.png";}
					message = chanceCards[randNum];
					document.getElementById("mysteryBox6").style.display = "none";
					break;
				case -4:
					if(randNum%2 == 0 || randNum==0){
						imgSrc = "images/badLuck.png";
					}else{imgSrc = "images/goodLuck.png";}
					message = chanceCards[randNum];
					document.getElementById("mysteryBox5").style.display = "none";
					break;
				case -3:
					if(randNum%2 == 0 || randNum==0){
						imgSrc = "images/badLuck.png";
					}else{imgSrc = "images/goodLuck.png";}
					message = chanceCards[randNum];
					document.getElementById("mysteryBox4").style.display = "none";
					break;
				case -2:
					if(randNum%2 == 0 || randNum==0){
						imgSrc = "images/badLuck.png";
					}else{imgSrc = "images/goodLuck.png";}
					message = chanceCards[randNum];
					document.getElementById("mysteryBox3").style.display = "none";
					break;
				case -1:
					if(randNum%2 == 0 || randNum==0){
						imgSrc = "images/badLuck.png";
					}else{imgSrc = "images/goodLuck.png";}
					message = chanceCards[randNum];
					document.getElementById("mysteryBox2").style.display = "none";
					break;
				case 0:
					if(randNum%2 == 0 || randNum==0){
						imgSrc = "images/badLuck.png";
					}else{imgSrc = "images/goodLuck.png";}
					message = chanceCards[randNum];
					document.getElementById("mysteryBox1").style.display = "none";
					break;
				case 1:
					//Start Here
					message = "Welcome to the game. Get ready to get hammered. Feel free to click on any card to learn how to play. Good Luck.";
					imgSrc = cardImg[0].src;
					break;
				case 2:
					//Single shot
					message = "Take a shot pussy!";
					imgSrc = cardImg[1].src;
					break;
				case 3:
					//Everyone drinks
					message = "Everyone playing drinks... you really didn't get that one?";
					imgSrc = cardImg[2].src;
					break;
				case 4:
					//
					message = "The youngest in the room. Its the baby. With the bird? Yeah, youngest drink";
					imgSrc = cardImg[3].src;
					break;
				case 5:
					message = "Sorry bud, that blew.";
					imgSrc = cardImg[4].src;
					break;
				case 6:
					message = "One item of clothing please. <br> <br> Hope you wore some layers. ";
					imgSrc = cardImg[5].src;
					break;
				case 7:
					message = "You see that number on the die... Drink that much.";
					imgSrc = cardImg[6].src;
					break;
				case 8:
					message = "Lucky you, hand out two drinks to the rest of them";
					imgSrc = cardImg[7].src;
					break;
				case 9:
					message = "The oldest... Granpda... drink the fuck up!";
					imgSrc = cardImg[8].src;
					break;
				case 10:
					message = "Ladies, please take a drink.";
					imgSrc = cardImg[9].src;
					break;
				case 11:
					message = "Shots! Shots! Shot!";
					imgSrc = cardImg[10].src;
					break;
				case 12:
					message = "I see the ladies drinking in your future!";
					imgSrc = cardImg[11].src;
					break;
				case 13:
					message = "You've gotta have a pong ball... <br> From your seat, hit the closest pong cup. <br> You hit it, you get to give out 6 drinks.";
					imgSrc = cardImg[12].src;
					break;
				case 14:
					message = "If its a shot, you can skip this one on me. ";
					imgSrc = cardImg[13].src;
					break;
				case 15:
					message = "Boys! Drink up!";
					imgSrc = cardImg[14].src;
					break;
				case 16:
					message = "You can save someone from drinking on a turn. Including yourself. Use it whenever. idc. ";
					imgSrc = cardImg[15].src;
					break;
				case 17:
					message = "They ask you a question, you tell them the truth... <br> Or... <br> you can take a drink.";
					imgSrc = cardImg[16].src;
					break;
				case 18:
					message = "Lets take a vote, whos not drunk enough!! Take a shot please.";
					imgSrc = cardImg[17].src;
					break;
				case 19:
					message = "You choose the question. Anyone who has done the same action before, Please drink. <br> <br> I know, I had to help people understand...";
					imgSrc = cardImg[18].src;
					break;
				case 20:
					message = "Two shots please. Come on... we gotta finish the game!";
					imgSrc = cardImg[19].src;
					break;
				case 21:
					message = "Last person to touch there nose... Ha! sorry loser now you know. ";
					imgSrc = cardImg[20].src;
					break;
				case 22:
					message = "You already know baby, lets take it off!";
					imgSrc = cardImg[21].src;
					break;
				case 23:
					message = "Ladies... please and thank you. <br> <br> (Yeah its drink really...)";
					imgSrc = cardImg[22].src;
					break;
				case 24:
					message = "Man again... your wasting my time. Read the fucking card!";
					imgSrc = cardImg[23].src;
					break;
				case 25:
					message = "You won't give it out to the drunkest one...";
					imgSrc = cardImg[24].src;
					break;
				case 26:
					message = "I didn't wanna put this one... they made me. My bad. ";
					imgSrc = cardImg[25].src;
					break;
				case 27:
					message = "To your left or to your right. Loser drinks.";
					imgSrc = cardImg[26].src;
					break;
				case 28:
					message = "I know. Odd. But do it bitch!";
					imgSrc = cardImg[27].src;
					break;
				case 29:
					message = "Hand out six shots. If your from Toronto, go ahead give out another.";
					imgSrc = cardImg[28].src;
					break;
				case 30:
					message = "Ladies lets drink up!";
					imgSrc = cardImg[29].src;
					break;
				case 31:
					message = "It makes sense, drink the cup. Its just one. ";
					imgSrc = cardImg[30].src;
					break;
				case 32:
					message = "Shhhotttttttssssss!";
					imgSrc = cardImg[31].src;
					break;
				case 33:
					message = "Shhhotttttttssssss x 2!";
					imgSrc = cardImg[32].src;
					break;
				case 34:
					message = "Hand out six shots. If your from Toronto, go ahead give out another.";
					imgSrc = cardImg[33].src;
					break;
				case 35:
					message = "Eh. Why are you even looking dude. Its right on the card. ";
					imgSrc = cardImg[34].src;
					break;
				case 36:
					message = "Boys, please drink up!";
					imgSrc = cardImg[35].src;
					break;
				case 37:
					message = "Two items of clothing please and thank you.";
					imgSrc = cardImg[36].src;
					break;
				case 38:
					message = "I know right! Two shots! This late in the game! Its only gonna get worse.";
					imgSrc = cardImg[37].src;
					break;
				case 39:
					message = "You've gotta have a pong ball... <br> From your seat, hit the closest pong cup. <br> You hit it, you get to give out 6 drinks.";
					imgSrc = cardImg[38].src;
					break;
				case 40:
					message = "Sorry guys, I had to it.";
					imgSrc = cardImg[39].src;
					break;
				case 41:
					message = "You choose the question. Anyone who has done the same action before, Please drink. <br> <br> I know, I had to help people understand...";
					imgSrc = cardImg[40].src;
					break;
				case 42:
					message = "The tallest and the smallest can drink. Why? idk. Drink.";
					imgSrc = cardImg[41].src;
					break;
				case 43:
					message = "Tell the truth to one of their questions. Or you can drink the fuck up bitch. ";
					imgSrc = cardImg[42].src;
					break;
				case 44:
					message = "Shot please. I know its getting harder.";
					imgSrc = cardImg[43].src;
					break;
				case 45:
					message = "The number on the roll. You gotta take that many drinks. Sorry bro. ";
					imgSrc = cardImg[44].src;
					break;
				case 46:
					message = "You can save yourself or another player from drinking on a turn. I know big card...";
					imgSrc = cardImg[45].src;
					break;
				case 47:
					message = "I see you. They see you. We all see you. Please drink.";
					imgSrc = cardImg[46].src;
					break;
				case 48:
					message = "Why? Dont ask me? Just listen and take a drink if you are. ";
					imgSrc = cardImg[47].src;
					break;
				case 49:
					message = "Ladies... lets all be sisters and take a drink together.";
					imgSrc = cardImg[48].src;
					break;
				case 50:
					message = "Sisters on three!";
					imgSrc = cardImg[49].src;
					break;
				case 51:
					message = "It's late in the game but you still gotta do it! TWO SHOTS!";
					imgSrc = cardImg[50].src;
					break;
				case 52:
					message = "If you smaller than everyone else... and the opposite... drink...";
					imgSrc = cardImg[51].src;
					break;
				case 53:
					message = "... needs to take a drink?";
					imgSrc = cardImg[52].src;
					break;
				case 54:
					message = "Its late in the game... but all you guys can take another drink. right?";
					imgSrc = cardImg[53].src;
					break;
				case 55:
					message = "You could punish someone with 6 shots right now... or pass them out nicely. Your choice!";
					imgSrc = cardImg[54].src;
					break;
				case 56:
					message = "A thumb war and loser drinks. You choose the two people.";
					imgSrc = cardImg[55].src;
					break;
				case 57:
					message = "Hey loser, atleast now you know! Take a drink for me.";
					imgSrc = cardImg[56].src;
					break;
				case 58:
					message = "Could have been worse, Take a shot for me.";
					imgSrc = cardImg[57].src;
					break;
				case 59:
					message = "Oh, so close. Take two shots for me. Lets end on a high note.";
					imgSrc = cardImg[58].src;
					break;
				case 60:
					message = "Shit. Thats just unlucky. I'm sorry, you know what to do. Good luck.";
					imgSrc = cardImg[59].src;
					break;
				default:
					break;

			}
			document.getElementById("clickMeHand").style.display = "none";
			document.getElementById("die").style.display = "none";
			document.getElementById("rollDie").style.display = "none";

			modelText.innerHTML = message;
			modelImg.src = (imgSrc);

			model.style.display = "block";
			modelText.style.display = "block";
			modelImg.style.display = "block";

			coverProof.style.display = "block";
			gameScreen.style.filter = "blur(50px)";

			document.getElementById("closeModelIcon").style.display = "block";

			//remove players during dialog popup
			var chars = document.getElementsByClassName("playerStyle");
			for(var i=0; i<chars.length; i++){
				chars[i].style.display = "none";
			}
			
		}

		function closeModel(){
			model.style.display = "none";
			modelText.style.display = "none";
			modelImg.style.display = "none";

			coverProof.style.display = "none";
			gameScreen.style.filter = "none";

			document.getElementById("closeModelIcon").style.display = "none";

			document.getElementById("clickMeHand").style.display = "block";
			document.getElementById("die").style.display = "block";
			document.getElementById("rollDie").style.display = "block";

			//remove players during dialog popup
			var chars = document.getElementsByClassName("playerStyle");
			for(var i=0; i<chars.length; i++){
				chars[i].style.display = "block";
			}
		}



		// function navFunction(){
		//   var sidePanel = document.getElementById("sidePanel");
		//   var legendBtn = document.getElementById("helpBtn");

		//   var panelState = legendBtn.innerText;
		//   if(!navIsOpen(panelState)){

		//   	//open nav
		//     sidePanel.style.width = "30vw";
		// 	legendBtn.style.width = "30vw";
		//   	legendBtn.innerHTML = "× Close";

		//   	var textItems = document.getElementsByClassName("itemText");
		//   	var textImg = document.getElementsByClassName("itemImg");
		//   	for(var i=0; i<textItems.length; i++){
		//   		var textItem = textItems[i];
		//   		textItem.style.opacity = "1";
		//   		itemImg[i].style.opacity = "1";
		//   	}
		//   }
		//   else{
		//   	//close nav
		//   	sidePanel.style.width = "0";
		//   	legendBtn.style.width = "5vw";
		//   	legendBtn.innerHTML = "☰ Help";

		//   	var textItems = document.getElementsByClassName("itemText");
		//   	var itemImg = document.getElementsByClassName("itemImg");
		//   	for(var i=0; i<textItems.length; i++){
		//   		var textItem = textItems[i];
		//   		textItem.style.opacity = "0";
		//   		itemImg[i].style.opacity = "0";
		//   	}
		//   }
		// }


		// function navIsOpen(panelState){
		// 	if(panelState == "☰ Help"){
		// 		return false;
		// 	}
		// 	return true;
		// }
