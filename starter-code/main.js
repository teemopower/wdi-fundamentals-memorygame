var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


/*
if(cardTwo === cardFour){
	alert("Sorry, try again.");
} else if(cardTwo === cardThree){
	alert("Sorry, try again.");
} else if(cardOne === cardFour){
	alert("Sorry, try again.");
} else if(cardOne === cardThree){
	alert("Sorry, try again.");
} else if(cardOne === cardTwo){
	alert("You found a match!");
} else if(cardThree === cardFour){
	alert("You found a match!");
}
*/

var gameBoard = document.getElementById('game-board');





var createBoard = function(){
	for(var i=0; i < 4; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	}
}

createBoard();
