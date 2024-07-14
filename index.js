let humanScore = 0;
let computerScore = 0;
let gameEnded = false;

function playRound(humanChoice) {
  if (gameEnded) {
    console.log("Game has ended. Please refresh to restart.");
    return;
  }
  const computerChoice = getComputerChoice();

  let resultMessage = "";

  if (humanChoice === "rock" && computerChoice === "scissors") {
    resultMessage = "You win! Rock beats scissors";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    resultMessage = "You win! Scissors beat paper";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    resultMessage = "You win! Paper beats rock";
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    resultMessage = "You lose! Paper beats rock";
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    resultMessage = "You lose! Scissors beats paper";
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    resultMessage = "You lose! Paper beats rock";
    computerScore++;
  } else {
    resultMessage = "It's a tie!";
  }
  const resultsDiv = document.querySelector(".result");
  if (resultsDiv) {
    resultsDiv.innerHTML += `<p>You chose: ${humanChoice}. Computer chose: ${computerChoice}</p>`;
    resultsDiv.innerHTML += `<p>${resultMessage}</p>`;
    resultsDiv.innerHTML += `<p>Scores - Human: ${humanScore}, Computer: ${computerScore}</p>`;
  } else {
    console.error("Result div not found.");
  }
  if (humanScore === 5 || computerScore === 5) {
    showWinner();
    gameEnded = true;
    disableButtons();
  }
}
function showWinner() {
  let winnerMessage = "";
  if (humanScore === 5) {
    winnerMessage = "Congratulations! You won the game!";
  } else {
    winnerMessage = "Sorry, the computer won the game!";
  }
  const resultsDiv = document.querySelector(".result");
  if (resultsDiv) {
    resultsDiv.innerHTML += `<p>${winnerMessage}</p>`;
  } else {
    console.error("Results div not found.");
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
const btn_rock = document.querySelector(".user_choice_rock");
const btn_paper = document.querySelector(".user_choice_paper");
const btn_scissors = document.querySelector(".user_choice_scissors");

btn_rock.addEventListener("click", function () {
  playRound("rock");
});

btn_paper.addEventListener("click", function () {
  playRound("paper");
});

btn_scissors.addEventListener("click", function () {
  playRound("scissors");
});

function getComputerChoice() {
  let randomNumber = () => {
    return Math.floor(Math.random() * 3) + 1;
  };
  if (randomNumber() === 1) {
    return "rock";
  } else if (randomNumber() === 2) {
    return "paper";
  } else return "scissors";
}
