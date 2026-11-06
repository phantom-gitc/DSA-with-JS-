// 1. Sum of First N Numbers
const sumOfN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log("1. Sum of first 10 numbers:", sumOfN(10)); // 55


// 2. Reverse a Number
const reverseNum = (n) => {
  let rev = 0;
  let temp = Math.abs(n);

  while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  return n < 0 ? -rev : rev;
};

console.log("2. Reverse of 123:", reverseNum(123)); // 321


// 3. Count Digits
const countDigit = (n) => {
  if (n === 0) return 1;
  let count = 0;
  let temp = Math.abs(n);

  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }
  return count;
};

console.log("3. Count digits of 111:", countDigit(111)); // 3


// 4. Factorial
const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};

console.log("4. Factorial of 5:", factorial(5)); // 120
