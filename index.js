const choice = ["rock", "paper", "scissors"];

function computerPlay() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  const rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  switch (true) {
    case playerChoice === computerSelection:
      return "It's a tie!";
    case computerSelection === rules[playerChoice]:
      return "You Win this round!";
    default:
      return "You Lose this round!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);

    while (!choice.includes(playerSelection.toLowerCase())) {
      alert("Invalid choice! Please choose Rock, Paper, or Scissors.");
      playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
    }

    const computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);

    console.log(`Round ${i}: ${outcome}`);

    if (outcome.includes("You Win this round!")) {
      playerScore++;
    } else if (outcome.includes("You Lose this round!")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game.");
  } else {
    console.log("It's a tie!");
  }
}

game();
