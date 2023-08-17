// -------------------------------------------------------------------------------- //
// ---------------------------     Variables    ----------------------------------- //
// -------------------------------------------------------------------------------- //


// -- Behind the Scenes -- //
let roundNumber = 1;


// -- On-Screen Content -- //
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const startGameBtn = document.getElementById("start-game-btn");
let computerProgress = document.getElementById("computer-progress");
let userProgress = document.getElementById("user-progress");

// -------------------------------------------------------------------------------- //
// ----------------------     Functions & Methods    ------------------------------ //
// -------------------------------------------------------------------------------- //


// -- Behind the Scenes -- //


// -- On-Screen Content -- //

function generateRandomInts(lowerLimit, upperLimit, amount = 1) {
    for (let index = 0; index < amount; index++) {
        const result = Math.floor(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
        return result;
    }
}

function getComputerChoice() {    
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[generateRandomInts(0, 3)];
    return computerSelection;
}

function printSelections(playerSelection, computerSelection) {
	document.querySelector(".player .selects").textContent = playerSelection;
    document.querySelector(".computer .selects").textContent = computerSelection;
}

function checkWin(playerSelection, computerSelection) {
    let playerWin;
    if (playerSelection === "rock") {
        playerWin = didRockWin(computerSelection);
    } else if (playerSelection === "paper") {
        playerWin = didPaperWin(computerSelection);
    } else if (playerSelection === "scissors") {
        playerWin = didScissorsWin(computerSelection);
    }
    return playerWin;
}

    function didRockWin(computerSelection) {
        let rockWin = computerSelection === "scissors" ? true : false;
        return rockWin;
    }

    function didPaperWin(computerSelection) {
        let paperWin = computerSelection === "rock" ? true : false;
        return paperWin;
    }

    function didScissorsWin(computerSelection) {
        let scissorsWin = computerSelection === "paper" ? true : false;
        return  scissorsWin;
    }

function checkOutcome(playerWin, playerSelection, computerSelection) {
    let roundOutcome = (playerWin ? "win" : "lose");
    let winningHand = (playerWin ? playerSelection: computerSelection);
    let losingHand = (playerWin ? computerSelection : playerSelection);
    return [roundOutcome, winningHand, losingHand]
}

function playRound(playerSelection, roundNumber) {
    let computerSelection = getComputerChoice();
    let tieGame = (playerSelection === computerSelection);
	if (tieGame) {
        printSelections(playerSelection, computerSelection);
        roundOutcome = "tie"
		document.querySelector(".round-outcome").textContent = `It's a tie.`;
        return roundOutcome;
    } else {
        printSelections(playerSelection, computerSelection);
        let playerWin = checkWin(playerSelection,  computerSelection);
        let resultArray = checkOutcome(playerWin, playerSelection, computerSelection);
        let roundOutcome = resultArray[0];
        let winningHand = resultArray[1];
        let losingHand  = resultArray[2];
        document.querySelector(".round-outcome").textContent = `You ${roundOutcome}! ${winningHand} beats ${losingHand}.`;
        return roundOutcome;
    };
}

function printScores(playerScore, computerScore, roundNumber) {
    console.log(`(${roundNumber}) Player Score: ${playerScore}`)
    console.log(`(${roundNumber}) Computer Score: ${computerScore}`)
 }

function updateScores(roundOutcome) {
	if (roundOutcome === "tie") {
		return
	}
	else if (roundOutcome === "win") {
		document.querySelector(".player .score").textContent = ++playerScore;
		return playerScore;
	} else if (roundOutcome === "lose") {
		document.querySelector(".computer .score").textContent = ++computerScore;
		return computerScore;
	}
}

function removeTransition(e) {
	if (e.propertyName !== "scale") return;
	this.classList.remove("clicked");
}

function resetGame() {
	playerScore = 0;
	document.querySelector(".player .score").textContent = playerScore;
	computerScore = 0;
	document.querySelector(".computer .score").textContent = computerScore;
	roundNumber = 1;
	document.querySelector(".round-number .counter").textContent = roundNumber - 1;
	document.querySelector(".player .selects").textContent = "__";
    document.querySelector(".computer .selects").textContent = "__";
	document.querySelector(".round-outcome").textContent = "Outcome"
	document.querySelector(".game").classList.remove("invisible"); // replace "invisible" with "hidden", try to use .toggle() instead too.
	document.querySelector(".game-over-container").classList.add("invisible");
}

gameButtons.forEach(button => {
	button.addEventListener("click", (e) => {
		let playerSelection = e.target.id;
		document.querySelector(`#${playerSelection}`).classList.add("clicked");
		button.addEventListener("transitionend", removeTransition);
		let roundOutcome = playRound(playerSelection, roundNumber);
		updateScores(roundOutcome);
		document.querySelector(".round-number .counter").textContent = roundNumber++;
		checkIfFive(playerScore, computerScore);
	})
});

function checkIfFive(playerScore, computerScore) {
	if (playerScore >= 5) {
		let winner = "player";
		endGame(winner);
	} else if (computerScore >= 5) {
		let winner = "computer";
		endGame(winner);
	} else return
}

function endGame(winner) {
	document.querySelector(".game").classList.add("invisible");
	document.querySelector(".game-over-container").classList.remove("invisible");
	if (winner === "player") {
		document.querySelector(".winner").textContent = `Congrats, you won!`
	} else {
		document.querySelector(".winner").textContent = `Tough luck, you lost!`
	}
}

resetButton.addEventListener("click", resetGame);

// -------------------------------------------------------------------------------- //
// --------------------     Calls & Event Listeners    ---------------------------- //
// -------------------------------------------------------------------------------- //


// -- Behind the Scenes -- //


// -- On-Screen Content -- //



/*
PSEUDO

On start:
	button text is "play",
	unhide welcome message;
On button click: 
	reset player scores,
	reset round counter, 
	reset computer choice, 
	hide modal, 
	unhide playground;
Take user input from a button click;
Check it against a random computer selection;
Show computer choice;
Increment players' and round counters;
Show a result message;
Once a player's score is 5: 
	hide playground, 
	hide welcome, 
	button text is "play again",
	unhide game-over, 
	unhide modal;

*/