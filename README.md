# 🎮 Number Guessing Game

A simple CLI-based number guessing game built with Node.js. The computer picks a random number between 1 and 100 — your job is to guess it before you run out of chances.

---

## 🚀 How to Run

Make sure you have [Node.js](https://nodejs.org) installed, then run:

```bash
node numberGuessingGame.js
```

No installs. No dependencies. Just Node.

---

## 🎯 How to Play

1. Run the game
2. Pick a difficulty level
3. Enter your guesses
4. The game tells you if the number is **higher** or **lower**
5. Guess correctly before you run out of chances!

---

## ⚙️ Difficulty Levels

| Level  | Chances |
|--------|---------|
| Easy   | 10      |
| Medium | 5       |
| Hard   | 3       |

---

## 📸 Sample Output

```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please select the difficulty level.
 1. Easy (10 chances)
 2. Medium (5 chances)
 3. Hard (3 chances)

Please enter your choice: 2
Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is less than 50.

Enter your guess: 25
Incorrect! The number is greater than 25.

Enter your guess: 35
Congratulations! You guessed the correct number in 3 attempts.
```

---

## 🛠️ Built With

- [Node.js](https://nodejs.org) — JavaScript runtime
- `readline` — built-in Node.js module for CLI input

---

## 📁 Project Structure

```
number-guessing-game/
│
├── numberGuessingGame.js   # Main game file
└── README.md        # You're reading it
```

---

## 🙌 Contributing

Pull requests are welcome! Some ideas to extend the project:

- Add a timer to track how fast you guess
- Add a hint system
- Track high scores across sessions
- Add a play again option after each round

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
