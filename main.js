/* Le lancé du dé et affichage résultat */
let theDice = document.querySelector("#dice");
const elComeOut = document.querySelector("#roll");
let nomberP1 = document.querySelector(".number-p1");

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
let player1 = document.querySelector("#player1");
let player2 = document.querySelector(".p2");

player1.addEventListener("click"),
	() => {
		let pseudo1 = prompt("Enter player one name");
		player1.innerHTML = pseudo1.toUpperCase;

		if (pseudo1.length < 2) {
			player1.innerHTML = "player 1";
		}
	};
player2.addEventListener("click", () => {
	let pseudo2 = prompt("Enter player two name");
	player2.innerHTML = pseudo2.toLocaleUpperCase;

	if (pseudo2.length < 2) {
		player2.innerHTML = "player 2";
	}
});
