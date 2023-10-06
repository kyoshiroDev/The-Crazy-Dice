// Selection du dé
const theDice = document.querySelector("#dice");
// Selection du bouton "Lancer le dé"
const elComeOut = document.querySelector("#roll");
// Selection du bouton "hold"
const holdButton = document.querySelector(".hold");
const currentTextPlayer1 = document.querySelector(".number-current-p1");
const currentTextPlayer2 = document.querySelector(".number-current-p2");

// Selection des joueurs
const playerOne = document.querySelector("#player-1");
const playerTwo = document.querySelector("#player-2");

// Selection des scores
const numberP1 = document.querySelector(".number-p1");
const numberP2 = document.querySelector(".number-p2");

const newGame = document.querySelector(".newGame");

// Initialisation du résultat du dé
let diceResult = 0;

let player1 = {
	score: 0,
	current: 0,
};

let player2 = {
	score: 0,
	current: 0,
};

const players = [playerOne, playerTwo]; // tableau des joueurs
let randomPlayer = Math.floor(Math.random() * 2); // 0 ou 1
let currentPlayer = players[randomPlayer]; // joueur actuel
currentPlayer.classList.add("active");

// Changer le nom du joueur
players.forEach((player) => {
	player.addEventListener("click", () => {
		let pseudo = prompt("Enter player name");

		// Si le joueur entre un nom, on l'affiche en majuscule
		if (pseudo !== null && pseudo !== "") {
			// Si le joueur entre un nom, on l'affiche en majuscule
			player.innerHTML = pseudo.toUpperCase();
		} else {
			// Si le joueur n'entre pas de nom, on lui attribue le nom par défaut
			player.innerHTML = "PLAYER " + (players.indexOf(player) + 1);
		}
	});
});

elComeOut.addEventListener("click", () => {
	diceResult = Math.floor(Math.random() * 6 + 1);
	theDice.classList.add("dice-roll", "face-" + diceResult);

	for (let i = 1; i <= 6; i++) {
		theDice.classList.remove("face-" + i);
		if (diceResult === i) {
			theDice.classList.add("face-" + i);
		}
	}
});

theDice.addEventListener("animationend", () => {
	theDice.classList.remove("dice-roll");

	// Assigner le score au joueur actuel
	assignScoreToPlayer(diceResult);
});

function assignScoreToPlayer(score) {
	// Si le joueur fait 1, on initialise le score à 0
	if (score === 1) {
		score = 0;
	}

	// Ajouter le score au joueur actuel
	if (score !== 0) {
		if (currentPlayer === playerOne) {
			player1.score += score;
		} else {
			player2.score += score;
		}
	} else {
		// Si le joueur fait 1, on réinitialise son score
		currentPlayer === playerOne ? (player1.score = 0) : (player2.score = 0);

		// Changer le joueur actuel
		switchPlayer();
	}

	// Afficher le score
	numberP1.textContent = player1.score;
	numberP2.textContent = player2.score;

	// Réinitialiser le résultat du dé
	diceResult = 0;
}

// Au clic sur le boutton hold je verouille le score dans le current du joueur actuel
holdButton.addEventListener("click", () => {
	if (currentPlayer === playerOne) {
		player1.current += player1.score;
		player1.score = 0;

		numberP1.textContent = player1.score;
		currentTextPlayer1.textContent = player1.current;
	} else {
		player2.current += player2.score;
		player2.score = 0;

		numberP2.textContent = player2.score;
		currentTextPlayer2.textContent = player2.current;
	}

	// Si le joueur actuel a un score de 100 ou plus, on call la function winner
	if (currentPlayer === playerOne && player1.current >= 100) {
		winner(playerOne.innerHTML);
	} else if (currentPlayer === playerTwo && player2.current >= 100) {
		winner(playerTwo.innerHTML);
	}

	// Changer le joueur actuel
	switchPlayer();
});

newGame.addEventListener("click", () => {
	restart();
});

function switchPlayer() {
	// Assigner le nouveau joueur actuel
	const newCurrentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;

	// Retirer la class active sur le joueur actuel
	currentPlayer.classList.remove("active");

	// Ajouter la class active sur le nouveau joueur
	newCurrentPlayer.classList.add("active");

	// Assigner le nouveau joueur actuel
	currentPlayer = newCurrentPlayer;
}

function winner(player) {
	// Afficher le message de victoire
	alert(player + " a gagné !");

	// Réinitialiser le jeu
	restart();
}

function restart() {
	const restart = confirm("Voulez-vous recommencer ?");
	if (restart) {
		resetGame();
	}
}

function resetGame() {
	// Réinitialiser les scores
	player1.score = 0;
	player2.score = 0;

	// Réinitialiser les scores current
	player1.current += 0;
	player2.current = 0;

	// Réinitialiser les textes des scores
	numberP1.textContent = player1.score;
	numberP2.textContent = player2.score;

	currentTextPlayer1.textContent = player1.current;
	currentTextPlayer2.textContent = player2.current;

	// Réinitialiser le joueur actuel
	currentPlayer = players[Math.floor(Math.random() * 2)];

	// Réinitialiser les classes active
	players.forEach((player) => {
		player.classList.remove("active");
	});

	currentPlayer.classList.add("active");
}
