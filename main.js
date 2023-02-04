var elDiceOne = document.getElementById("dice1");
var elComeOut = document.getElementById("roll");

elComeOut.onclick = function () {
	rollDice();
};

function rollDice() {
	var diceOne = Math.floor(Math.random() * 6 + 1);
	

	console.log(diceOne);

	for (var i = 1; i <= 6; i++) {
		elDiceOne.classList.remove("show-" + i);
		if (diceOne === i) {
			elDiceOne.classList.add("show-" + i);
		}
	}
}
