/* Le lancé du dé et affichage résultat */
let theDice = document.querySelector("#dice");
const elComeOut = document.querySelector("#roll");
let nomberP1 = document.querySelector("number-p1") 

elComeOut.onclick = function rollDice() {
	let diceResult = Math.floor(Math.random() * 6 + 1);

	theDice.classList.add("dice-roll", "face-" + diceResult);
	theDice.addEventListener("animationend", () => {
		theDice.classList.remove("dice-roll");
	});

	for (var i = 1; i <= 6; i++) {
		theDice.classList.remove("face-" + i);
		if (diceResult === i) {
			theDice.classList.add("face-" + i);
		}
	}

  numberP1.innerHtml =  diceResult;

};

