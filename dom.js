document.addEventListener("DOMContentLoaded", function () {
  let roundsPlayed = 0;
  let playerPoints = 0;
  let computerPoints = 0;

  const playedDiv = document.querySelector(".played");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    console.log("!");
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => buttonClick(button.id));
  });

  function buttonClick(e) {
    playerSelection = e;
    //generates the computers choice
    const computerChoice = getComputerChoice();
    playGame(computerChoice, playerSelection);
  }
  const roundScoreElement = document.querySelector(".score:nth-of-type(1)");
  const playerPointsElement = document.querySelector(".score:nth-of-type(2)");
  const computerPointsElement = document.querySelector(".score:nth-of-type(3)");

  const btn = document.getElementBy;

  function playGame(computerChoice, playerSelection) {
    const text =
      "Computer played:" +
      computerChoice +
      "\nYou Played: " +
      playerSelection +
      "\n" +
      checkState(computerChoice, playerSelection);
    const newObject = document.createElement("div");
    newObject.innerText = text;
    newObject.classList.add("history-object");
    // Append the text node to the div
    playedDiv.insertBefore(newObject, playedDiv.firstChild);

    console.log(text);
    updatesScores();
  }

  // gets cumputer choice
  function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); // gets random number between 0 - 2 inclusive
    if (randomNum === 0) {
      return "rock";
    } else if (randomNum === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function updatesScores() {
    const itemList = document.getElementsByClassName("scoreboard");
    roundScoreElement.textContent = "Round: " + roundsPlayed;
    playerPointsElement.textContent = "Your Points: " + playerPoints;
    computerPointsElement.textContent = "Computer's Points: " + computerPoints;
  }

  /* check who won the round updates variables
   */
  function checkState(computerChoice, humanChoice) {
    roundsPlayed++;
    if (computerChoice === humanChoice) {
      return "it's a draw";
    } else if (computerChoice === "rock") {
      if (humanChoice === "paper") {
        playerPoints++;
        return "you Won!!!";
      } else {
        computerPoints++;
        return "You Lost !!!";
      }
    } else if (computerChoice === "paper") {
      if (humanChoice === "scissors") {
        playerPoints++;
        return "you Won!!!";
      } else {
        computerPoints++;
        return "You Lost !!!";
      }
    } else {
      //computer choice must be scissors
      if (humanChoice === "rock") {
        playerPoints++;
        return "you Won!!!";
      } else {
        computerPoints++;
        return "You Lost !!!";
      }
    }
  }
});
