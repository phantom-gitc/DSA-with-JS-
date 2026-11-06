// ==========================================
// Do-While Loop Practice
// ==========================================

// Q1: Repeat Hello using Do-While
function repeatMessage(count) {
  let messages = [];
  let i = 0;
  do {
    messages.push("Namaste Doston");
    i++;
  } while (i < count);
  return messages;
}

console.log("Q1 Repeat Hello:", repeatMessage(3));


// Q2: Guess the Number Game Simulation
function simulateGuessTheNumber(target, guesses) {
  let log = [];
  let index = 0;
  let won = false;

  do {
    let guess = guesses[index];
    if (guess === undefined) break;

    if (guess > target) {
      log.push(`Guess ${guess}: Number is too high`);
    } else if (guess < target) {
      log.push(`Guess ${guess}: Number is too low`);
    } else {
      log.push(`Guess ${guess}: Correct! 🤩`);
      won = true;
      break;
    }
    index++;
  } while (index < guesses.length);

  return { won, log };
}

console.log("Q2 Guess The Number Simulation:", simulateGuessTheNumber(42, [20, 60, 42]));


// Q3: Calculator
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    case "%":
      return num1 % num2;
    default:
      return "Invalid operator";
  }
}

console.log("Q3 Calculator (10 + 5):", calculate(10, 5, "+"));
console.log("Q3 Calculator (10 / 2):", calculate(10, 2, "/"));
console.log("Q3 Calculator (10 * 3):", calculate(10, 3, "*"));
