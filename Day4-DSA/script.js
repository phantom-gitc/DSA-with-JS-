// Q1: Sum of N numbers
function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log("Q1:", sumOfN(10)); // 55


// Q2: Factorial of a Number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log("Q2:", factorial(5)); // 120


// Q3: Print the sum of all even & odd numbers in a range separately
function sumEvenAndOdd(n) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }

  return { evenSum, oddSum };
}

console.log("Q3:", sumEvenAndOdd(10)); // { evenSum: 30, oddSum: 25 }


// Q4: Find Factors of a Number
function findFactors(n) {
  let factors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  factors.push(n);
  return factors;
}

console.log("Q4:", findFactors(12)); // [1, 2, 3, 4, 6, 12]


// Q5: Check Prime Number
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("Q5:", isPrime(17)); // true
console.log("Q5:", isPrime(18)); // false


// Q6: Print Multiplication Table of a Number
function multiplicationTable(n) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} x ${i} = ${n * i}`);
  }
  return table;
}

console.log("Q6:", multiplicationTable(5));


// Q7: Print Fibonacci Series up to N terms
function fibonacci(n) {
  let series = [];
  let a = 0;
  let b = 1;

  for (let i = 1; i <= n; i++) {
    series.push(a);
    let next = a + b;
    a = b;
    b = next;
  }
  return series;
}

console.log("Q7:", fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]


// Q8: Calculate Power of a Number (base^exp) using Loop
function power(base, exp) {
  let result = 1;
  for (let i = 1; i <= exp; i++) {
    result *= base;
  }
  return result;
}

console.log("Q8:", power(2, 5)); // 32


// Q9: Check if a Number is a Perfect Number
function isPerfectNumber(n) {
  if (n <= 0) return false;
  let divisorSum = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisorSum += i;
    }
  }
  return divisorSum === n;
}

console.log("Q9:", isPerfectNumber(6));  // true (1 + 2 + 3 = 6)
console.log("Q9:", isPerfectNumber(10)); // false


// Q10: Find GCD (Greatest Common Divisor) / HCF of Two Numbers
function findGCD(num1, num2) {
  let gcd = 1;
  let min = num1 < num2 ? num1 : num2;

  for (let i = 1; i <= min; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

console.log("Q10:", findGCD(12, 18)); // 6


// Q11: Print all Prime Numbers from 1 to N (Range)
function primesInRange(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log("Q11:", primesInRange(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
