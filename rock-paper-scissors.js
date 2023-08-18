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



// -------------------------------------------------------------------------------- //
// --------------------     Calls & Event Listeners    ---------------------------- //
// -------------------------------------------------------------------------------- //


// -- Behind the Scenes -- //


// -- On-Screen Content -- //
startGameBtn.textContent = "play";
welcomeMsg.classList.toggle("shrunk");


/*
PSEUDO



EVENT LISTENER startGameBtn ON CLICK
	startNewGame()
END EVENT LISTENER

FUNCTION startNewGame()
	roundCounter = 1;
	userScore = 0;
	computerScore = 0;
	computerChoiceDisplay.classList = "hidden";
	modal.classList.toggle("shrunk");
	welcomeMsg.classList.toggle("shrunk");
	playground.classList.toggle("hidden");
	displayMessage([3, 2, 1, "fight"], #);
END FUNCTION

FUNCTION 

FUNCTION displayMessage(msgArray, interval)
	FOR (let el of msgArray)
		message.textContent = el;
		message.classList.toggle("hidden");
		setTimeOut(() => message.classList.toggle("hidden"), (interval * 1000));
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
	setTimeOut(() => playerChoiceBtn.classList.remove("selected"), 3000);
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
	playground.classList.toggle("hidden");
	gameOverMsg.classList.toggle("hidden")
	modal.classList.toggle("hidden");
END FUNCTION
*/