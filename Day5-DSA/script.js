// Q1: Sum of all digits in a number
function sumOfDigits(n) {
  let sum = 0;
  let temp = Math.abs(n);

  while (temp > 0) {
    let rem = temp % 10;
    sum += rem;
    temp = Math.floor(temp / 10);
  }
  return sum;
}

console.log("Q1 Sum of Digits (1234):", sumOfDigits(1234)); // 10


// Q2: Reverse all digits of a number
function reverseDigits(n) {
  let rev = 0;
  let temp = Math.abs(n);

  while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  return n < 0 ? -rev : rev;
}

console.log("Q2 Reverse Digits (12345):", reverseDigits(12345)); // 54321


// Q3: Check if a number is an Automorphic Number
// (A number whose square ends in the same digits as the number itself, e.g. 5^2 = 25, 25^2 = 625)
function isAutomorphic(n) {
  if (n < 0) return false;
  let square = n * n;
  let copy = n;
  let count = 0;

  while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
  }

  let lastDigits = square % Math.pow(10, count || 1);
  return lastDigits === n;
}

console.log("Q3 (5 is Automorphic):", isAutomorphic(5));   // true
console.log("Q3 (25 is Automorphic):", isAutomorphic(25)); // true
console.log("Q3 (7 is Automorphic):", isAutomorphic(7));   // false


// Q4: Switch Case Greeting
function getGreeting(code) {
  switch (code) {
    case 1:
      return "Good Morning";
    case 2:
      return "Good Afternoon";
    case 3:
      return "Good Evening";
    case 4:
      return "Good Night";
    default:
      return "Padhaaee Karo Doston";
  }
}

console.log("Q4 Greeting (1):", getGreeting(1));
console.log("Q4 Greeting (5):", getGreeting(5));


// Q5: Switch Case Day Mapping (Multiple cases with same output)
function getDayGroup(code) {
  switch (code) {
    case 1:
    case 2:
    case 3:
      return "Monday - Wednesday Batch";
    case 4:
    case 5:
    case 6:
      return "Thursday - Saturday Batch";
    default:
      return "Sunday / Invalid Code";
  }
}

console.log("Q5 Day Group (2):", getDayGroup(2));
console.log("Q5 Day Group (5):", getDayGroup(5));
