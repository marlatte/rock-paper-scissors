const gameButtons = document.querySelectorAll(".game button");
const resetButton = document.querySelector(".play-again");
let scoreboard = document.querySelector(".scoreboard");
let roundNumber = 1;
let playerScore = +document.querySelector(".player .score").textContent;
let computerScore = +document.querySelector(".computer .score").textContent;



function generateRandomInts(lowerLimit, upperLimit, amount = 1) {
    for (let index = 0; index < amount; index++) {
        const result = Math.floor(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
        return result;
    }
}

function getComputerChoice() {    
    const choices = ["Rock", "Paper", "Scissors"];
    let computerSelection = choices[generateRandomInts(0, 3)];
    return computerSelection;
}

function printSelections(playerSelection, computerSelection) {
	document.querySelector(".player .selects").textContent = playerSelection;
    document.querySelector(".computer .selects").textContent = computerSelection;
}

function checkWin(playerSelection, computerSelection) {
    let playerWin;
    if (playerSelection === "Rock") {
        playerWin = didRockWin(computerSelection);
    } else if (playerSelection === "Paper") {
        playerWin = didPaperWin(computerSelection);
    } else if (playerSelection === "Scissors") {
        playerWin = didScissorsWin(computerSelection);
    }
    return playerWin;
}

    function didRockWin(computerSelection) {
        let rockWin = computerSelection === "Scissors" ? true : false;
        return rockWin;
    }

    function didPaperWin(computerSelection) {
        let paperWin = computerSelection === "Rock" ? true : false;
        return paperWin;
    }

    function didScissorsWin(computerSelection) {
        let scissorsWin = computerSelection === "Paper" ? true : false;
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
	document.querySelector(".game").classList.remove("invisible");
	document.querySelector(".game-over-container").classList.add("invisible");
}

gameButtons.forEach(button => {
	button.addEventListener("click", (e) => {
		let playerSelection = e.target.id;
		document.querySelector(`#${playerSelection}`).classList.add("clicked");
		button.addEventListener("transitionend", removeTransition);
		switch (playerSelection) {
			case "rock":
                playerSelection = "Rock";
                break;
    
            case "paper":
                playerSelection = "Paper";
                break;

            case "scissors":
                playerSelection = "Scissors";
                break;
		}
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