/* Le lancé du dé et affichage résultat */
let theDice = document.querySelector("#dice");
const elComeOut = document.querySelector("#roll");
const theRollDice = document.querySelector("#dice");

elComeOut.onclick = function rollDice() {
	let diceResult = Math.floor(Math.random() * 6 + 1);
	theDice.classList.add("dice-roll");
	console.log(diceResult);

	setTimeout(function rollDice () {
		theDice.classList.remove("dice-roll");
	}, 4000);
};


/*for (let i = 1; i <= 6; i++) {
		if (diceResult === i) {
			theDice.className = "#face-" + i;
		}
	}*/
