// Q1: Sum of N numbers .

// let n = Number(prompt("Enter the Number :"))
// let sum = 0 ;
// for (let i = 1 ; i<=n ; i++){
//     // sum = sum + i;

//     sum += i;
// }

// console.log(sum);


// Q2: Factorial of Number ..

// let n = Number(prompt("Enter the number "))

// let fact = 1 ;

// for (let i = 1 ; i<=n ; i++){
//     fact *= i;
//     console.log(`The Value of i = ${i} and Value of fact = ${fact}`);
    
// }

// console.log(`The Value of ${n} Factorial is = ${fact}`);



// Q3. Print the sum of all even & odd numbers in a range seperately.



// let n = Number(prompt("Enter the number "))

// let evenSum = 0 ; 
// let oddSum = 0 ;

// for (let i=1 ; i<=n ;i++){
//     if(i%2==0){
//         evenSum += i ;

//         // evenSum = evenSum + 1 

//     }else oddSum += i ;
//     // oddSum = oddSum +  1 ;
// }

// console.log(`The Sum of Even Numbers in Range 1 to ${n} is = ${evenSum}`);
// console.log(`The Sum of Odd Numbers in Range 1 to ${n} is = ${oddSum}`);


// Q4: Find Factor of the NUmber ..

// let n = Number(prompt("Enter the number :"));

// for (let i = 1 ; i<=n/2 ; i++){
//     if(n % i == 0)
//  console.log(i);
//  }

//  console.log(n);
 

// Q5: Prime Number 

// let n = Number(prompt("Enter the number ."))

// let isPrime = true ;

// for(let i = 2 ; i <n/2 ; i++){
//     if(n%2 == 0){
//         isPrime = false ;
//         break;
//     }
// }

// if(isPrime) console.log("Is Prime Number ");
// else console.log("Not Prime Number ");


// Best Approach .Approach

// let n = Number(prompt("Enter the number ."))


// const isPrime = isPrimeFnc(n)
// if(isPrime) console.log("Prime Number ");
// else console.log("Not Prime number");

// function isPrimeFnc(n){
//     if(n<=1) return false ;
//     if(n == 2) return true ;
//     if(n%2 == 0) return false ;
//     for(let i = 3 ; i <= Math.floor(Math.sqrt(n)) ; i += 2){
//         if(n % i == 0 ) return false ;
//     }
//     return true ;
// }


// Q6: Print Multiplication Table of a Number
// let n = Number(prompt("Enter the number for table:"));
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }


// Q7: Print Fibonacci Series up to N terms
// let n = Number(prompt("Enter number of terms for Fibonacci:"));
// let a = 0, b = 1;
// console.log(`Fibonacci Series up to ${n} terms:`);
// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }


// Q8: Calculate Power of a Number (base^exp) using Loop
// let base = Number(prompt("Enter base:"));
// let exp = Number(prompt("Enter exponent:"));
// let power = 1;
// for (let i = 1; i <= exp; i++) {
//     power *= base;
// }
// console.log(`${base}^${exp} = ${power}`);


// Q9: Check if a Number is a Perfect Number
// (Sum of proper divisors equals the number, e.g. 6 = 1 + 2 + 3, 28)
// let n = Number(prompt("Enter number to check if Perfect:"));
// let divisorSum = 0;
// for (let i = 1; i <= n / 2; i++) {
//     if (n % i === 0) {
//         divisorSum += i;
//     }
// }
// if (divisorSum === n && n > 0) {
//     console.log(`${n} is a Perfect Number`);
// } else {
//     console.log(`${n} is NOT a Perfect Number`);
// }


// Q10: Find GCD (Greatest Common Divisor) / HCF of Two Numbers
// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let gcd = 1;
// let min = num1 < num2 ? num1 : num2;
// for (let i = 1; i <= min; i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//         gcd = i;
//     }
// }
// console.log(`GCD of ${num1} and ${num2} is = ${gcd}`);


// Q11: Print all Prime Numbers from 1 to N (Range)
// let n = Number(prompt("Enter upper limit N:"));
// console.log(`Prime numbers between 1 and ${n}:`);
// for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }
