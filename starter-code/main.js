/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

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

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createBoard = function(){
	for(var i=0; i < cards.length; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';

		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);

		gameBoard.appendChild(newCard);
	}
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	
	if(this.getAttribute('data-card') === "queen"){
		this.innerHTML = '<img src="queen.png" alt="Queen of Heart" />';
	} else {
		this.innerHTML = '<img src="king.png" alt="King of Heart" />';
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

var isMatch = function(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		
	} else {
		alert("Sorry, try again.");
		
	}

	//document.getElementById("game-board").innerHTML = " ";
	
}

createBoard();
