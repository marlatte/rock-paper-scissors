/*      PLANNING TIME
To play RPS, the computer needs to generate an answer.
Paper beats Rock
Rock beats Scissors
Scissors beats Paper

If I write  it from the user's POV, instead  of  checking  every possible combination, it starts by checking playerSelection first, then compares with computerSelection.

The basic set of functions for 1 round:
    playRound()
        getComputerChoice()
        getPlayerChoice()
        if (playerSelection === computerSelection)
            return "It's a tie. Try Again."
        else
            checkWin()
                if (playerSelection === "Rock")
                    didRockWin()
                        let rockWin = computerSelection === "Scissors" ? true : false;
                else if (playerSelection === "Paper")
                    didPaperWin()
                        let paperWin = computerSelection === "Rock" ? true : false;
                else if (playerSelection === "Scissors")
                    didScissorsWin()
                        let scissorsWin = computerSelection === "Paper" ? true : false;
        checkOutcome()
            let outcome = (isWin ? "win" : "lose");
            let winningHand = (isWin ? playerSelection: computerSelection);
            let losingHand = (isWin ? computerSelection : playerSelection);
        printOutcome()
            `You ${outcome}! ${winningHand} beats ${losingHand}.`



To create a 5-round game, I'll need  a for loop with i < 5.
Save the outcome for each in a variable. Maybe `Round ${i + 1} goes to ${roundWinner}`
    roundWinner will be dependent on outcome
        let roundWinner = whoWon()
            return outcome === "win" ? "User" : "Computer";

Use counter variables for player/computer that goes up by one when they win. After 5 games (or one side reaches 3 wins), the score that's higher is the gameWinner.
So playerScore/computerScore will be dependent on roundWinner. Then gameWinner will result from an if statement about the counters.

Variables: playerScore, computerScore, gameWinner, roundWinner,

game()
    let playerScore = 0;
    let computerScore = 0;
    for i < 5 {
        playRound()
            return outcome
        let roundWinner = whoWon(outcome)
            if (outcome === "win") {
                roundWinner = "Player"
            } else if (outcome === lose) {
                roundWinner = "Computer"
            } else {
                roundWinner = "no one"
            }
        console.log(`Round ${i + 1} goes to ${roundWinner}!`)
        if (roundWinner === "Player") {
            playerScore++
        } else if (roundWinner === "Computer") {
            computerScore++
        }
        printScores()
            console.log(`Player Score: ${playerScore}`)
            console.log(`Computer Score: ${computerScore}`)
        if (playerScore or computerScore >= 3)  {
            Exit the for loop
        }
    }
    if (playerScore > computerScore) {
        You win
    } else {
        You lose
    }
*/


// INGREDIENTS
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

function getPlayerChoice() {
    let playerSelection = "";
    let promptAgain = confirm("Ready to play?");
    while (promptAgain) {
        let playerInput = prompt("What do you choose?", "").toLowerCase();
        switch (playerInput) {
            case "":
                console.log("You have to make a choice!");
                promptAgain = true
                break;
        
            case "rock":
                playerSelection = "Rock";
                promptAgain = false;
                break;
    
            case "paper":
                playerSelection = "Paper";
                promptAgain = false;
                break;

            case "scissors":
                playerSelection = "Scissors";
                promptAgain = false;
                break;
    
            default:
                console.log("Not a valid choice.")
                promptAgain = false;
                break;
        }
    }
    return playerSelection;
}

function printSelections(playerSelection, computerSelection) {
    console.log(`Player selects: ${playerSelection}`);
    console.log(`Computer selects: ${computerSelection}`);
}

function checkWin(playerSelection, computerSelection) {
    let isWin;
    if (playerSelection === "Rock") {
        isWin = didRockWin(computerSelection);
    } else if (playerSelection === "Paper") {
        isWin = didPaperWin(computerSelection);
    } else if (playerSelection === "Scissors") {
        isWin = didScissorsWin(computerSelection);
    }
    return isWin;
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

function checkOutcome(isWin, playerSelection, computerSelection) {
    let outcome = (isWin ? "win" : "lose");
    let winningHand = (isWin ? playerSelection: computerSelection);
    let losingHand = (isWin ? computerSelection : playerSelection);
    return [outcome, winningHand, losingHand]
}

// function printOutcome(outcome, winningHand, losingHand) {
//     let roundMessage = `You ${outcome}! ${winningHand} beats ${losingHand}.`;
//     return roundMessage;
// }

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let isTie = (playerSelection === computerSelection);
    if (playerSelection === "") {
        return "Game cancelled.";
    }
    else if (isTie) {
        printSelections(playerSelection, computerSelection);
        let outcome = "tie"
        console.log("It's a tie.")
        return outcome;
    } else {
        printSelections(playerSelection, computerSelection);
        let isWin = checkWin(playerSelection,  computerSelection);
        let resultArray = checkOutcome(isWin, playerSelection, computerSelection);
        let outcome = resultArray[0];
        let winningHand = resultArray[1];
        let losingHand  = resultArray[2];
        console.log(`You ${outcome}! ${winningHand} beats ${losingHand}.`);
        return outcome;
    };
}