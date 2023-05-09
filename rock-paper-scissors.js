const buttons = document.querySelectorAll("button");
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

//  function game(gameLength = 5) {

//     let mercyRule = gameLength/2;
//     let roundNumber;
//     let roundOutcome;
//     gameLength = prompt(`Let's play! Best of ${gameLength}?`, gameLength)
//     if (gameLength ===  null) {
//         roundOutcome = "cancelled"
//     } else {
//         for (let i = 0; i < gameLength; i++) {
//             roundNumber = i + 1;
//             roundOutcome  = playRound(roundNumber);
//             if (roundOutcome === "cancelled") {
//                 console.log(`Game cancelled in round ${roundNumber}`)
//                 i = gameLength;
//             } else {
//                 let roundWinner = whoWon(roundOutcome)      
//                 alert(`(${roundNumber}) Round ${roundNumber} goes to ${roundWinner}!`)
//                 console.log(`(${roundNumber}) Round ${roundNumber} goes to ${roundWinner}!`)
//                 if (roundWinner === "Player") {
//                     playerScore++;
//                 } else if (roundWinner === "Computer") {
//                     computerScore++;
//                 }
//                 printScores(playerScore, computerScore, roundNumber);
//                 if (playerScore > mercyRule || computerScore >mercyRule)  {
//                     gameLength = i; 
//                     /*Should there be a way to invoke the mercy rule if the losing side can't possibly catch up? 
//                     Eg. if player is losing 2-4 in round 8 of a 9-round game, there's no point in playing round 9. */
                    
//                     // NO! That's too much requirements creep.
//                 } else if (i === (gameLength - 1) && playerScore  === computerScore) {
//                     alert("Tie breaker!");
//                     gameLength++;
//                 }
//             }
//         }
//     }
//     if (roundOutcome != "cancelled" && playerScore > computerScore) {
//         console.log(`You win! ${playerScore} - ${computerScore} in ${roundNumber} rounds.`)
//     } else if (roundOutcome != "cancelled" && playerScore < computerScore) {
//         console.log(`You lose! ${playerScore} - ${computerScore} in ${roundNumber} rounds.`)
//     } else {
//         return `Game ${roundOutcome}.`
//     }
// }

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
	} else {
		resetGame();
	}
}

buttons.forEach(button => {
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
		if (playerScore >= 5) {
			alert("You win! \nPlay again?");
			updateScores("reset")
		} else if (computerScore >= 5) {
			alert("You lose :( \nPlay again?")
			updateScores("reset")
		}
	})
});

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
}