const choice = ["rock", "paper", "scissors"];

function computerPlay() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  const rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  switch (true) {
    case playerSelection === computerSelection:
      return "It's a tie!";
    case computerSelection === rules[playerSelection]:
      return "You Win this round!";
    default:
      return "You Lose this round!";
  }
}

function cancelGame(playerSelection) {
  if (playerSelection === null) {
    console.log("Game canceled.");
    return true;
  }
  return false;
}

function validation(playerSelection, i) {
  while (!choice.includes(playerSelection.toLowerCase().trim())) {
    alert("Invalid choice! Please choose Rock, Paper, or Scissors.");
    playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
  }
  return playerSelection.toLowerCase().trim();
}

function game() {
  if (
    !window.confirm("Welcome to Rock-Paper-Scissors game. To start press OK.")
  ) {
    console.log("Game canceled.");
    return;
  }

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);

    if (cancelGame(playerSelection)) {
      return;
    }

    playerSelection = validation(playerSelection, i);

    const computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);

    console.log(`Round ${i}: ${outcome}`);
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (outcome.includes("You Win this round!")) {
      playerScore++;
      console.log(`Score: Player ${playerScore} - Computor ${computerScore}`);
    } else if (outcome.includes("You Lose this round!")) {
      computerScore++;
      console.log(`Score: Player ${playerScore} - Computor ${computerScore}`);
    } else if (outcome.includes("It's a tie!")) {
      console.log(`Score: Player ${playerScore} - Computor ${computerScore}`);
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
