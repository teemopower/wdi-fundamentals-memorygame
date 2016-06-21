var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log(cardOne === cardTwo);
console.log(cardOne === cardFour);



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