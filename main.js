const theDice = document.querySelector("the-dice");
const elComeOut = document.getElementById("roll");
const theRollDice = document.getElementById("dice");

elComeOut.onclick = function () {
	rollDice();
};

function rollDice() {
	let dice = Math.floor(Math.random() * 6 + 1);
	console.log(dice);

	for (let i = 1; i <= 6; i++) {
		theDice.classList.remove("dice-" + i);
		if (dice === i) {
			theDice.classList.add("dice-" + i);
		}
	}
}
