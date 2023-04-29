/*      PLANNING TIME
To play RPS, the computer needs to generate an answer.
Paper beats Rock
Rock beats Scissors
Scissors beats Paper

If I write  it from the user's POV, instead  of  checking  every possible combination, it starts by checking playerSelection first, then compares with computerSelection.

The basic set of functions:
game()
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
        let roundWinner = outcome === "win" ? "User" : "Computer";

Save all results for that 5-round game to an array to keep score and announce a gameWinner.
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
    let computerChoice = choices[generateRandomInts(0, 3)];
    console.log(`Computer selects: ${computerChoice}`);
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice;
    let promptAgain = confirm("Ready to play?");
    while (promptAgain) {
        let playerInput = prompt("What do you choose?", "").toLowerCase();
        switch (playerInput) {
            case "":
                console.log("You have to make a choice!");
                promptAgain = true
                break;
        
            case "rock":
                playerChoice = "Rock";
                promptAgain = false;
                break;
    
            case "paper":
                playerChoice = "Paper";
                promptAgain = false;
                break;

            case "scissors":
                playerChoice = "Scissors";
                promptAgain = false;
                break;
    
            default:
                console.log("Not a valid choice.")
                promptAgain = false;
                break;
        }
    }
    console.log(`Player selects: ${playerChoice}`);
    return playerChoice;
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

function printOutcome(outcome, winningHand, losingHand) {
    console.log(`You ${outcome}! ${winningHand} beats ${losingHand}.`)
}

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let isTie = (playerSelection === computerSelection);
    if (isTie) {
        return "It's a tie. Try Again."
    } else {
        let isWin = checkWin(playerSelection,  computerSelection);
        let resultArray  = checkOutcome(isWin, playerSelection, computerSelection);
        printOutcome(resultArray[0], resultArray[1], resultArray[2]);
    };
}