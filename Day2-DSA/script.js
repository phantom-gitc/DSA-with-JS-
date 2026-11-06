// ==========================================
// Math Methods Reference & Demos
// ==========================================
function mathDemos() {
  console.log("Math.ceil(4.1):", Math.ceil(4.1));     // 5
  console.log("Math.floor(4.9):", Math.floor(4.9));   // 4
  console.log("Math.round(4.5):", Math.round(4.5));   // 5
  console.log("Math.max(1, 2, 3):", Math.max(1, 2, 3)); // 3
  console.log("Math.min(1, 2, 3):", Math.min(1, 2, 3)); // 1
  console.log("Math.pow(2, 3):", Math.pow(2, 3));     // 8
  console.log("Math.sqrt(16):", Math.sqrt(16));       // 4
  console.log("Math.abs(-5):", Math.abs(-5));         // 5
  console.log("Math.trunc(4.9):", Math.trunc(4.9));   // 4
}
mathDemos();


// ==========================================
// Math Problems
// ==========================================

// Q1: Find Compound Interest
function compoundInterest(p, r, t) {
  let amount = p * Math.pow(1 + r / 100, t);
  let ci = amount - p;
  return Number(ci.toFixed(2));
}
console.log("Q1 Compound Interest (P=1000, R=5, T=2):", compoundInterest(1000, 5, 2));


// Q2: Generate 4-digit OTP
function generateOTP() {
  return Math.floor(Math.random() * 9000 + 1000);
}
console.log("Q2 4-digit OTP:", generateOTP());


// Q3: Area of Triangle using Heron's Formula
function areaOfTriangle(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    return "Invalid input";
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a valid Triangle";
  }

  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return Number(area.toFixed(2));
}
console.log("Q3 Area of Triangle (3, 4, 5):", areaOfTriangle(3, 4, 5)); // 6


// Q4: Circumference and Area of Circle
function circleMetrics(r) {
  let circumference = 2 * Math.PI * r;
  let area = Math.PI * r * r;
  return {
    circumference: Number(circumference.toFixed(2)),
    area: Number(area.toFixed(2))
  };
}
console.log("Q4 Circle Metrics (r=7):", circleMetrics(7));


// ==========================================
// Conditionals Problems
// ==========================================

// Q5 (Conditionals 1): Print greatest between two numbers
function greatestOfTwo(num1, num2) {
  if (num1 > num2) return num1;
  if (num2 > num1) return num2;
  return "Both numbers are equal";
}
console.log("Conditionals Q1 (Greatest of 10, 20):", greatestOfTwo(10, 20));


// Q6 (Conditionals 2): Check Even or Odd
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Conditionals Q2 (7 is):", checkEvenOdd(7));


// Q7 (Conditionals 3): Voter Eligibility
function checkVoterEligibility(name, age) {
  if (isNaN(age) || age <= 0 || age > 120) {
    return "Please enter a valid age";
  }
  if (age >= 18) {
    return `Hello ${name}, you are eligible to vote!`;
  }
  return `Hello ${name}, you are not eligible to vote yet.`;
}
console.log("Conditionals Q3 (Voter):", checkVoterEligibility("Saroj", 20));


// Q8 (Conditionals 4): Greatest among three numbers
function greatestOfThree(num1, num2, num3) {
  if (num1 === num2 && num2 === num3) {
    return "All numbers are equal";
  }
  return Math.max(num1, num2, num3);
}
console.log("Conditionals Q4 (Greatest of 15, 42, 27):", greatestOfThree(15, 42, 27));


// Q9 (Conditionals 5): Leap Year Check
function isLeapYear(year) {
  if (isNaN(year) || year <= 0) return false;
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Conditionals Q5 (2024 is leap year):", isLeapYear(2024)); // true
console.log("Conditionals Q5 (2023 is leap year):", isLeapYear(2023)); // false
