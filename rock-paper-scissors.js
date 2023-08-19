// -------------------------------------------------------------------------------- //
// ---------------------------     Variables    ----------------------------------- //
// -------------------------------------------------------------------------------- //


// -- Behind the Scenes -- //
let roundCounter = 1,
	userScore = 0,
	computerScore = 0;


// -- On-Screen Content -- //
const playground = document.querySelector(".playground");
const gameButtons = document.querySelectorAll(".button");
const roundDisplay = document.querySelector(".round-display")

const computerProgress = document.getElementById("computer-progress");
const userProgress = document.getElementById("user-progress");
const computerChoiceDisplay = document.getElementById("comp-choice");
const message = document.getElementById("message");

const modal = document.querySelector(".modal");
const welcomeMsg = document.querySelector(".welcome");
const gameOverMsg = document.querySelector(".game-over");
const startGameBtn = document.getElementById("start-game-btn");

// -------------------------------------------------------------------------------- //
// ----------------------     Functions & Methods    ------------------------------ //
// -------------------------------------------------------------------------------- //


// -- Behind the Scenes -- //
function handleUserChoice(e) {
	let userChoice = (e.target.classList.contains("button") ? e.target.id : e.target.parentElement.id).slice(0, -4);
	showUserChoice(userChoice);
	playRound(userChoice);
}

function playRound(userChoice) {
	let computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * (3))];
	displayComputerChoice(computerChoice);
	let outcome = userChoice === computerChoice ? "tie" : getWinner(userChoice, computerChoice);
	displayOutcome(outcome);
	updateScores(outcome);
	roundDisplay.firstElementChild.textContent = ++roundCounter;
	if (userScore >= 5 || computerScore >= 5) {
		gameButtons.forEach((button) => button.disabled = true)
		setTimeout(() => endGame(userScore > computerScore), 400);
	}
}

function getWinner(userChoice, computerChoice) {
	return {
		"rock": (computerChoice === "scissors"),
		"paper": (computerChoice === "rock"),
		"scissors": (computerChoice === "paper"),
	}[userChoice] ? "victory" : "defeat";
}

// -- On-Screen Content -- //
function startNewGame() {
	gameButtons.forEach((button) => button.disabled = true);
	updateScores("reset");
	computerChoiceDisplay.classList = "shrunk";
	modal.classList.toggle("shrunk");
	showCountdown(3, 2, 1, "fight!");
	setTimeout(() => {
		message.classList.add("shrunk");
		gameButtons.forEach((button) => button.disabled = false);
	}, 3000);
	setTimeout(() => welcomeMsg.classList = "welcome headers hidden", 1000);
}

function showCountdown(...msgArray) {
	let i = 0;
	const countdown = setInterval(() => {
		if (i === msgArray.length) {
			clearInterval(countdown);
		} else {
			message.textContent = msgArray[i];
			i++;
		}
	}, 700);
}

function showUserChoice(userChoice) {
	let userChoiceBtn = document.getElementById(`${userChoice}-btn`);
	userChoiceBtn.classList.add("selected");
	setTimeout(() => userChoiceBtn.classList.remove("selected"), 200);
}

function displayComputerChoice(computerChoice) {
	computerChoiceDisplay.classList = `fa-regular fa-hand${{
		"rock": "-back-fist",
		"paper": "",
		"scissors": "-scissors",
	}[computerChoice]}`
}

function displayOutcome(outcome) {
	message.textContent = outcome;
	message.classList.remove("shrunk");
}

function updateScores(outcome) {
	if (outcome === "victory") {
		userProgress.value = ++userScore;
		userProgress.textContent = userScore;
	} else if (outcome === "defeat") {
		computerProgress.value = ++computerScore;
		computerProgress.textContent = computerScore;
	} else if (outcome === "reset") {
		userScore = 0;
		userProgress.value = 0;
		userProgress.textContent = 0;
		computerScore = 0
		computerProgress.value = 0;
		computerProgress.textContent = 0;
		roundCounter = 1;
		roundDisplay.firstElementChild.textContent = 1;
	}
}

function endGame(winnerBoolean) {
	gameOverMsg.lastElementChild.textContent = winnerBoolean ? "You Win!" : "You Lose!";
	gameOverMsg.style.color = winnerBoolean ? "var(--text-primary)" : "red";
	gameOverMsg.classList = "game-over headers";
	startGameBtn.textContent = "play again";
	startGameBtn.style.fontSize = "22px";
	modal.classList.toggle("shrunk");
	message.textContent = "";
	computerChoiceDisplay.classList = "shrunk";
}

// -------------------------------------------------------------------------------- //
// --------------------     Calls & Event Listeners    ---------------------------- //
// -------------------------------------------------------------------------------- //


setTimeout(() => welcomeMsg.classList = "welcome headers", 200);

startGameBtn.addEventListener("click", () => {
	startGameBtn.style.scale = 1.1;
	setTimeout(() => startGameBtn.style.scale = 1, 100);
	setTimeout(startNewGame, 130);
});

gameButtons.forEach((button) => button.addEventListener("click", handleUserChoice)) 