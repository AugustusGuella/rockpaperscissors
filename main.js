console.log("Hello World")

//Make a computer function that returns a value
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"]
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]
}

//Allow a user to input one of three solutions

function getHumanChoice() {
    let choice = prompt("Enter your choice of: Rock, Paper, or Scissor")
    return choice;
}

//Compare the solutions (ifelse)

function playRound(humanChoice, computerChoice) {
    const human = humanChoice;
    const computer = computerChoice;

    if (human === computer) {
        return "tie";
    } else if ((human === "Rock" && computer === "Paper") ||
        (human === "Paper" && computer === "Scissor") ||
        (human === "Scissor" && computer === "Rock")) {
        return "You lost";
    }
    else {
        return "You won";
    }
}

//Play the game and report
function playGame() {
    const humanChoice= getHumanChoice ()
    const computerChoice= getComputerChoice ()

    console.log("You chose:", humanChoice)
    console.log("Computer chose:", computerChoice)
    console.log(playRound(humanChoice, computerChoice))
}

playGame()