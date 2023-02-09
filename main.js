/* Le lancé du dé et affichage résultat */
let theDice = document.querySelector("#dice");
const elComeOut = document.querySelector("#roll");
let numberP1 = document.querySelector(".number-p1");

elComeOut.onclick = function rollDice() {
	let diceResult = Math.floor(Math.random() * 6 + 1);

	theDice.classList.add("dice-roll", "face-" + diceResult);
	theDice.addEventListener("animationend", () => {
		theDice.classList.remove("dice-roll");
	});

	for (let i = 1; i <= 6; i++) {
		theDice.classList.remove("face-" + i);
		if (diceResult === i) {
			theDice.classList.add("face-" + i);
		}
	}
};

/* changement pseudo des joueurs*/
let playerOne = document.querySelector("#player-1");
let playerTwo = document.querySelector("#player-2");

playerOne.addEventListener("click", () => {
	let pseudoOne = prompt("Enter player one name");
	playerOne.innerHTML = pseudoOne.toUpperCase;

	if (pseudoOne.length < 2) {
		playerOne.innerHTML = "PLAYER 1";
	}
});

playerTwo.addEventListener("click", () => {
	let pseudoTwo = prompt("Enter player two name");
	playerTwo.innerHTML = pseudoTwo.toLocaleUpperCase;

	if (pseudoTwo.length < 2) {
		playerTwo.innerHTML = "PLAYER 2";
	}
});
