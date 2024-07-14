let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let round = 1; round <= 5; round++) {
    if (humanScore === 5 || computerScore === 5) {
      break;
    }

    console.log(`Round ${round}`);

    const humanSelection = getHumanChoice();
    if (humanSelection === null) {
      console.log("Invalid choice. Skipping this round.");
      continue;
    }
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore === 5) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore === 5) {
    console.log("Sorry, the computer won the game!");
  } else {
    if (humanScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
      console.log("Sorry, the computer won the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beat paper");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else {
    console.log("It's a tie!");
  }
  console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
  console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
function getHumanChoice() {
  let humanChoicePrompt = prompt("rock, paper or scissors").toLowerCase();
  switch (humanChoicePrompt) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissors":
      return "scissors";
      break;
    default:
      console.log("Please check for spelling mistakes");
      return null;
  }
}
playGame();
