// Q1: Relation between String and Integer
function stringAndIntegerRelation() {
  let a = 10;
  let b = 20;

  console.log("Q1 (a): sum of " + a + " and " + b + " is " + a + b); // sum of 10 and 20 is 1020
  console.log("Q1 (b): " + (a + b) + " is sum of a and " + b);       // 30 is sum of a and 20
}
stringAndIntegerRelation();


// Q2: Type Coercion
function typeCoercionDemo() {
  console.log("Q2 5 + 5:", 5 + 5);       // 10
  console.log("Q2 5 + '5':", 5 + "5");   // "55"
  console.log("Q2 2 - 2:", 2 - 2);       // 0
  console.log("Q2 '2' - '2':", "2" - "2"); // 0
  console.log("Q2 2 - '2':", 2 - "2");   // 0
}
typeCoercionDemo();


// Q3: Swap 2 variables using 3 methods
function swapMethods(x, y) {
  // Method 1: Using Temp Variable
  let a1 = x, b1 = y;
  let temp = a1;
  a1 = b1;
  b1 = temp;
  console.log("Q3 Method 1 (temp):", a1, b1);

  // Method 2: Arithmetic (+ and -)
  let a2 = x, b2 = y;
  a2 = a2 + b2;
  b2 = a2 - b2;
  a2 = a2 - b2;
  console.log("Q3 Method 2 (math):", a2, b2);

  // Method 3: Destructuring
  let a3 = x, b3 = y;
  [a3, b3] = [b3, a3];
  console.log("Q3 Method 3 (destructure):", a3, b3);
}
swapMethods(10, 20);


// Q4: Difference between (%) and (/)
function quotientAndRemainder(dividend, divisor) {
  let remainder = dividend % divisor;
  let quotientFloat = dividend / divisor;
  let quotientInt = Math.floor(dividend / divisor);

  return { remainder, quotientFloat, quotientInt };
}
console.log("Q4 (10 / 3):", quotientAndRemainder(10, 3));


// Q5: Unary Operator (Pre and Post Increment/Decrement)
function unaryOperatorDemo() {
  let a = 20;
  console.log("Q5 (a++ + ++a):", a++ + ++a); // 20 + 22 = 42
}
unaryOperatorDemo();


// ==========================================
// ASSIGNMENT QUESTIONS
// ==========================================

// Assignment Q1
function assignmentQ1() {
  let i = 11;
  i = i++ + ++i;
  console.log("Assignment Q1:", i); // 24
}
assignmentQ1();

// Assignment Q2
function assignmentQ2() {
  let a = 11, b = 22;
  let c = a + b + a++ + b++ + ++a + ++b;
  console.log(`Assignment Q2: a=${a}, b=${b}, c=${c}`); // a=13, b=24, c=103
}
assignmentQ2();

// Assignment Q3
function assignmentQ3() {
  let i = 0;
  i = i++ - --i + ++i - i--;
  console.log("Assignment Q3:", i); // 0
}
assignmentQ3();

// Assignment Q4
function assignmentQ4() {
  let b = true;
  b++;
  console.log("Assignment Q4:", b); // 2
}
assignmentQ4();

// Assignment Q5
function assignmentQ5() {
  let i = 1, j = 2, k = 3;
  let m = i-- - j-- - k--;
  console.log(`Assignment Q5: i=${i}, j=${j}, k=${k}, m=${m}`); // i=0, j=1, k=2, m=-4
}
assignmentQ5();

// Assignment Q6
function assignmentQ6() {
  let a = 1, b = 2;
  let result = --b - ++a + ++b - --a;
  console.log("Assignment Q6:", result); // 0
}
assignmentQ6();
