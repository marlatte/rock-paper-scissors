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



// -- On-Screen Content -- //
function startNewGame() {
	roundCounter = 1;
	userScore = 0;
	computerScore = 0;
	computerChoiceDisplay.classList = "shrunk";
	modal.classList.toggle("shrunk");
	displayMessage(3, 2, 1, "fight!");
	setTimeout(() => message.classList.add("shrunk"), 4300);
	welcomeMsg.classList.toggle("hidden");
}

function displayMessage(...msgArray) {
	let i = 0;
	const countdown = setInterval(() => {
		// debugger
		if (i === msgArray.length) {
			clearInterval(countdown);
		} else {
			message.textContent = msgArray[i];
			i++;
		}
	}, 1000);
}


// -------------------------------------------------------------------------------- //
// --------------------     Calls & Event Listeners    ---------------------------- //
// -------------------------------------------------------------------------------- //


// -- Behind the Scenes -- //


// -- On-Screen Content -- //
welcomeMsg.classList = "welcome headers";

startGameBtn.addEventListener("click", startNewGame);


/*
PSEUDO

FUNCTION displayMessage(msgArray, interval)
	FOR (let el of msgArray)
		message.textContent = el;
		message.classList.toggle("shrunk");
		setTimeout(() => message.classList.toggle("shrunk"), (interval * 1000));
	END FOR
END FUNCTION


FOR button OF gameButtons
	EVENT LISTENER button MOUSE ENTER
		button.classList.add("hover");
	END EVENT LISTENER

	EVENT LISTENER button MOUSE LEAVE
		button.classList.remove(.hover);
	END EVENT LISTENER

	EVENT LISTENER button ON CLICK
		handleUserChoice(e)
	END EVENT LISTENER
END FOR

FUNCTION handleUserChoice(e)
	let userChoice = e.target.classList.contains("button") ? e.target.id : e.target.parentElement.id;
	showPlayerChoice(userChoice);
	playRound(userChoice);
END FUNCTION

FUNCTION showPlayerChoice(userChoice)
	let playerChoiceBtn = document.getElementByID(`${userChoice}`);
	playerChoiceBtn.classList.add("selected");
	setTimeout(() => playerChoiceBtn.classList.remove("selected"), 3000);
END FUNCTION

FUNCTION playRound(userChoice)
	let computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * (3))];
	displayComputerChoice(computerChoice);
	let outcome = userChoice === computerChoice ? "tie" : getWinner(userChoice, computerChoice);
	displayMessage([outcome], #);
	IF (outcome === "victory")
		userProgress.value = ++userScore;
	IF (outcome === "defeat")
		computerProgress.value = ++computerScore;
	END IF
	roundDisplay.firstElementChild.textContent = ++roundCounter;
	IF userScore >= 5 || computerScore >= 5
		endGame(userScore > computerScore)
END FUNCTION

FUNCTION displayComputerChoice(computerChoice)
	const computerDictionary = {
		"rock" : "-back-fist", 
		"paper" : "",
		"scissors" : "-scissors",
	}
	computerChoiceDisplay.classList = `fa-regular fa-hand${computerDictionary[computerChoice]}`
END FUNCTION

FUNCTION getWinner(userChoice, computerChoice)
	return {
		"rock-btn" : (computerChoice === "scissors"),
		"paper-btn" : (computerChoice === "rock"),
		"scissors-btn" : (computerChoice === "paper"),
	}[userChoice] ? "victory" : "defeat";
END FUNCTION

FUNCTION endGame(winnerBoolean)
	gameOverMsg.lastElementChild.textContent = winnerBoolean ? "You Win!" : "You Lose!";
	gameOverMsg.style.color = winnerBoolean ? "var(--text-primary)" : "red";
	startGameBtn.textContent = "play again";
	startGameBtn.style.fontSize = "22px";
	modal.classList.toggle("shrunk");
	gameOverMsg.classList = "game-over headers";
END FUNCTION
*/