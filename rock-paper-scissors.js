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
            let roundOutcome = (isWin ? "win" : "lose");
            let winningHand = (isWin ? playerSelection: computerSelection);
            let losingHand = (isWin ? computerSelection : playerSelection);
        printOutcome()
            `You ${roundOutcome}! ${winningHand} beats ${losingHand}.`



To create a 5-round game, I'll need  a for loop with i < 5.
Save the roundOutcome for each in a variable. Maybe `Round ${i + 1} goes to ${roundWinner}`
    roundWinner will be dependent on roundOutcome
        let roundWinner = whoWon()
            return roundOutcome === "win" ? "User" : "Computer";

Use counter variables for player/computer that goes up by one when they win. After 5 games (or one side reaches 3 wins), the score that's higher is the gameWinner.
So playerScore/computerScore will be dependent on roundWinner. Then gameWinner will result from an if statement about the counters.

Variables: playerScore, computerScore, gameWinner, roundWinner,

game()
    let playerScore = 0;
    let computerScore = 0;
    for i < 5 {
        playRound()
            return roundOutcome
        let roundWinner = whoWon(roundOutcome)
            if (roundOutcome === "win") {
                roundWinner = "Player"
            } else if (roundOutcome === lose) {
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
            i = 5;
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

function getPlayerChoice(roundNumber) {
    let playerSelection = "";
    let promptAgain = confirm(`Ready for Round ${roundNumber}?`);
    while (promptAgain) {
        let playerInput = prompt("What do you choose?", "");
        if (playerInput === null) {
            playerInput = "exit";
        }
        switch (playerInput.toLowerCase()) {
            case "exit":
                promptAgain = false;
                break;

            case "":
                alert("You have to make a choice! \nTry Again");
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
                alert("Not a valid choice. \nTry Again")
                promptAgain = true;
                break;
        }
    }
    return playerSelection;
}

function printSelections(playerSelection, computerSelection, roundNumber) {
    console.log(`(${roundNumber}) Player selects: ${playerSelection}`);
    console.log(`(${roundNumber}) Computer selects: ${computerSelection}`);
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
    let roundOutcome = (isWin ? "win" : "lose");
    let winningHand = (isWin ? playerSelection: computerSelection);
    let losingHand = (isWin ? computerSelection : playerSelection);
    return [roundOutcome, winningHand, losingHand]
}

function playRound(roundNumber) {
    let playerSelection = getPlayerChoice(roundNumber);
    let computerSelection = getComputerChoice();
    let isTie = (playerSelection === computerSelection);
    if (playerSelection === "") {
        console.log("Round cancelled.")
        roundOutcome = "cancelled"
        return roundOutcome;
    }
    else if (isTie) {
        printSelections(playerSelection, computerSelection,roundNumber);
        roundOutcome = "tie"
        console.log(`(${roundNumber}) It's a tie.`)
        return roundOutcome;
    } else {
        printSelections(playerSelection, computerSelection, roundNumber);
        let isWin = checkWin(playerSelection,  computerSelection);
        let resultArray = checkOutcome(isWin, playerSelection, computerSelection);
        let roundOutcome = resultArray[0];
        let winningHand = resultArray[1];
        let losingHand  = resultArray[2];
        console.log(`(${roundNumber}) You ${roundOutcome}! ${winningHand} beats ${losingHand}.`);
        return roundOutcome;
    };
}

function whoWon(roundOutcome) {
    if (roundOutcome === "win") {
        roundWinner = "Player";
    } else if (roundOutcome === "lose") {
        roundWinner = "Computer";
    } else {
        roundWinner = "no one";
    }
    return roundWinner;
}

function printScores(playerScore, computerScore, roundNumber) {
    console.log(`(${roundNumber}) Player Score: ${playerScore}`)
    console.log(`(${roundNumber}) Computer Score: ${computerScore}`)
 }

 function game(gameLength = 5) {
    prompt(`Let's play! Best of ${gameLength}?`, gameLength)
    let playerScore = 0;
    let computerScore = 0;
    let mercyRule = gameLength/2
    for (let i = 0; i < gameLength; i++) {
        let roundNumber = i + 1;
        let roundOutcome  = playRound(roundNumber);
        if (roundOutcome === "cancelled") {
            console.log(`Game cancelled in round ${roundNumber}`)
            i = gameLength;
        } else {
            let roundWinner = whoWon(roundOutcome)      
            alert(`(${roundNumber}) Round ${roundNumber} goes to ${roundWinner}!`)
            console.log(`(${roundNumber}) Round ${roundNumber} goes to ${roundWinner}!`)
            if (roundWinner === "Player") {
                playerScore++;
            } else if (roundWinner === "Computer") {
                computerScore++;
            }
            printScores(playerScore, computerScore, roundNumber);
            if (playerScore >= 3 || computerScore >= 3)  {
                gameLength = i;
            } else if (i === (gameLength - 1) && playerScore  === computerScore) {
                alert("Tie breaker!");
                gameLength++;
            }
        }
    }
    if (roundOutcome != "cancelled" && playerScore > computerScore) {
        console.log(`You win! ${playerScore} - ${computerScore}`)
    } else if (roundOutcome != "cancelled" && playerScore < computerScore) {
        console.log(`You lose! ${playerScore} - ${computerScore}`)
    } else {
        return `Game ${roundOutcome}.`
    }
}