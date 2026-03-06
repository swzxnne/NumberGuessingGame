const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function welcome() {
  const msg =
    " Welcome to the Number Guessing Game!\n I'm thinking of a number between 1 and 100.\n You have the following mentioned chances to guess the correct number. \n";
  console.log(msg);
}

//functions are same
//maxAtepmts is diff
//create a function that has the diff paaramteres function GameStart(maxAttempts, level)

function GameStart(maxAttepmts, level) {
  const msg = `Great! You have selected the ${level} difficulty level. \nLet's start the game`;
  console.log(msg);

  let randNum = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  function askQuestion() {
    if (attempts >= maxAttepmts) {
      console.log(
        `Sorry! You've used all ${maxAttepmts} attempts. The correct number was ${randNum}.`,
      );
      rl.close();
      return;
    }

    rl.question(
      `Enter your guess, ${maxAttepmts - attempts} chances left:`,
      (guess) => {
        guess = parseInt(guess);

        if (isNaN(guess)) {
          console.log("Please enter a valid number.");
          askQuestion();
          return;
        }
        attempts++;

        switch (true) {
          case guess < randNum:
            console.log(`Incorrect! The number is greater than ${guess}`);
            askQuestion();
            break;

          case guess > randNum:
            console.log(`Incorrect! The number is less than ${guess}`);
            askQuestion();
            break;

          case guess === randNum:
            console.log(
              `Congratulations! You guessed the correct number in ${attempts} attempts.`,
            );
            rl.close();
            break;
          default:
            console.log("Invalid input. Please enter a number.");
            askQuestion();
            break;
        }
      },
    );
  }

  askQuestion();
}
function difficultyLevel() {
  const msg =
    "Please select the difficulty level.\n 1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances) \n";
  console.log(msg);

  rl.question("Please enter your choice: ", (input) => {
    switch (parseInt(input)) {
      case 1:
        GameStart(10, "Easy");
        break;
      case 2:
        GameStart(5, "Medium");
        break;
      case 3:
        GameStart(3, "Hard");
        break;
      default:
        console.log(
          "Please select a number between 1 to 3 for difficulty level",
        );

        difficultyLevel();
        break;
    }
  });
}

welcome();
difficultyLevel();
