const prompt = require("prompt");

// Start prompt to get user input
prompt.start();

// Getting the user's selection
prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.log(err);
    return;
  }

  // Converting user input to uppercase for easy comparison
  const userSelection = result.userSelection.toUpperCase();

  // Generate a random number for computer selection
  const randomNum = Math.random();
  let computerSelection;
  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  // Display both user and computer selections
  console.log("User Selection:", userSelection);
  console.log("Computer Selection:", computerSelection);

  // Determine the winner using if statements
  if (userSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins");
  } else {
    console.log("Computer Wins");
  }
});