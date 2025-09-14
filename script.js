// Game state variables
let humanScore = 0;
let computerScore = 0;
const winningScore = 7;

// Make a computer function that returns a value
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Compare the solutions (game logic)
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Scissor") ||
        (humanChoice === "Scissor" && computerChoice === "Rock")
    ) {
        return "You lost";
    } else {
        return "You won";
    }
}

// Main game function (called when button is clicked)
function playGame(humanChoice) {
    // Check if game is already over
    if (humanScore >= winningScore || computerScore >= winningScore) {
        return;
    }

    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    // Display choices
    displayChoices(humanChoice, computerChoice);
    
    // Display result and update scores
    displayResult(result);
    
    // Update scores
    updateScores(result);
    
    // Check for winner
    checkWinner();
}

// Display the choices made by human and computer
function displayChoices(humanChoice, computerChoice) {
    const choicesElement = document.getElementById('choices');
    choicesElement.textContent = `You chose: ${humanChoice} | Computer chose: ${computerChoice}`;
}

// Display the round result with appropriate styling
function displayResult(result) {
    const resultElement = document.getElementById('result');
    
    // Remove previous result classes
    resultElement.classList.remove('win', 'lose', 'tie');
    
    // Set result text and add appropriate class
    resultElement.textContent = result;
    
    if (result === "You won") {
        resultElement.classList.add('win');
    } else if (result === "You lost") {
        resultElement.classList.add('lose');
    } else {
        resultElement.classList.add('tie');
    }
}

// Update the score counters
function updateScores(result) {
    if (result === "You won") {
        humanScore++;
    } else if (result === "You lost") {
        computerScore++;
    }
    
    // Update score display
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}

// Check if someone reached the winning score
function checkWinner() {
    const winnerElement = document.getElementById('winner');
    
    if (humanScore >= winningScore) {
        showWinner(`🎉 Congratulations! You won the game! (${humanScore} - ${computerScore})`);
    } else if (computerScore >= winningScore) {
        showWinner(`😔 Computer won the game! Better luck next time! (${computerScore} - ${humanScore})`);
    }
}

// Display the winner announcement
function showWinner(message) {
    const winnerElement = document.getElementById('winner');
    winnerElement.textContent = message;
    winnerElement.style.display = 'block';
}

// Reset the game to initial state
function resetGame() {
    // Reset scores
    humanScore = 0;
    computerScore = 0;
    
    // Update display
    document.getElementById('humanScore').textContent = '0';
    document.getElementById('computerScore').textContent = '0';
    document.getElementById('choices').textContent = '';
    
    // Reset result display
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Choose your move to start playing!';
    resultElement.classList.remove('win', 'lose', 'tie');
    
    // Hide winner announcement
    document.getElementById('winner').style.display = 'none';
}

// Optional: Add keyboard support
document.addEventListener('keydown', function(event) {
    // Check if game is over
    if (humanScore >= winningScore || computerScore >= winningScore) {
        return;
    }
    
    // Map keys to choices
    switch(event.key.toLowerCase()) {
        case 'r':
            playGame('Rock');
            break;
        case 'p':
            playGame('Paper');
            break;
        case 's':
            playGame('Scissor');
            break;
        case ' ':
            event.preventDefault();
            resetGame();
            break;
    }
});

// Initialize game message
document.addEventListener('DOMContentLoaded', function() {
    console.log("Rock Paper Scissors game loaded!");
    console.log("Keyboard shortcuts: R = Rock, P = Paper, S = Scissor, Space = Reset");
});