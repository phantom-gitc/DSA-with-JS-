// Math.ceil(4.1); // 5
// Math.floor(4.9); // 4
// Math.round(4.5); // 5
// Math.max(1, 2, 3); // 3
// Math.min(1, 2, 3); // 1
// Math.random(); // Random number between 0 and 1
// Math.random() * 10; // Random number between 0 and 10
// Math.random() * 10 + 1; // Random number between 1 and 10
// Math.random() * (10 - 1) + 1; // Random number between 1 and 10
// Math.pow(2, 3); // 8 (2 raised to the power of 3)
// Math.sqrt(16); // 4 (square root of 16)
// Math.abs(-5); // 5 (absolute value of -5)
// Math.PI; // 3.141592653589793 (value of π)
// Math.E; // 2.718281828459045 (value of e)
// Math.log(10); // Natural logarithm of 10
// Math.log10(100); // Base 10 logarithm of 100
// Math.log2(8); // Base 2 logarithm of 8
// Math.sin(Math.PI / 2); // 1 (sine of 90 degrees)
// Math.cos(Math.PI); // -1 (cosine of 180 degrees)
// Math.tan(Math.PI / 4); // 1 (tangent of 45 degrees)
// Math.asin(1); // π/2 (inverse sine of 1)
// Math.acos(-1); // π (inverse cosine of -1)
// Math.atan(1); // π/4 (inverse tangent of 1)
// Math.hypot(3, 4); // 5 (hypotenuse of a right triangle with sides 3 and 4)
// Math.ceil(Math.random() * 10); // Random integer between 1 and 10
// Math.floor(Math.random() * 10) + 1; // Random integer between 1 and 10
// Math.trunc(4.9); // 4 (truncates the decimal part)
// Math.sign(-5); // -1 (indicates negative number)
// Math.sign(0); // 0 (indicates zero)
// Math.sign(5); // 1 (indicates positive number)
// Math.clz32(0); // 32 (count of leading zero bits in 32-bit integer)
// Math.imul(2, 3); // 6 (integer multiplication)
// Math.fround(1.5); // 1.5 (single precision float representation)
// Math.cbrt(27); // 3 (cube root of 27)
// Math.log1p(0.5); // Natural logarithm of (1 + 0.5)
// Math.expm1(1); // e^1 - 1 (exponential minus 1)
// Math.sinh(0); // 0 (hyperbolic sine of 0)
// Math.cosh(0); // 1 (hyperbolic cosine of 0)
// Math.tanh(0); // 0 (hyperbolic tangent of 0)
// Math.asinh(0); // 0 (inverse hyperbolic sine of 0)
// Math.acosh(1); // 0 (inverse hyperbolic cosine of 1)
// Math.atanh(0); // 0 (inverse hyperbolic tangent of 0)
// Math.signbit(-5); // true (indicates negative number)
// Math.signbit(5); // false (indicates positive number)
// Math.scale(2, 1, 0, 10, 20); // Scales 2 from range [1, 0] to [10, 20], resulting in 15
// Math.log2(1024); // 10 (base 2 logarithm of 1024)
// Math.log10(1000); // 3 (base 10 logarithm of 1000)
// Math.log(100); // Natural logarithm of 100
// Math.hypot(1, 2, 3); // 3.7416573867739413 (hypotenuse of a triangle with sides 1, 2, and 3)
// Math.imul(0xffffffff, 5); // -5 (integer multiplication with overflow)
// Math.fround(1.337); // 1.337 (single precision float representation)
// Math.cosh(1); // 1.5430806348152437 (hyperbolic cosine of 1)
// Math.sinh(1); // 1.1752011936438014 (hyperbolic sine of 1)
// Math.tanh(1); // 0.7615941559557649 (hyperbolic tangent of 1)

// -------------------------------------------------------------------------


// Q1 : Find the compound Int erset Rate .

// Formula :

/*

A = P * (1 + r/100)^t

CP = A - P

*/

// let p = Number(prompt("Eneter the principal amount"));

// let r = Number(prompt("Enter the rate of interset :"));

// let t = Number(prompt("Enter the time in years :"))

// console.log((p * Math.pow(1 + r / 100 , t ))- p);

// Q2:Generate OTP :

// -------------------------------------------------------------------------


// console.log(Math.floor(Math.random()*9000 + 1000));

// Q3:Area of Triangle by heron's formula.

// let  a = Number(prompt("Enter first  Number :"))
// let  b = Number(prompt("Enter second Number :"))
// let  c = Number(prompt("Enter third  Number :"))

// if(isNaN(a) || isNaN(b) || isNaN(c)){
//     log.log("Please enter a valid number :")
// }
// else if ( a+b<=c || a+c<=b || b+c<=a){
//     console.log("Not a valid Trainage ❌");

// }
// else{
//     let s = (a+b+c)/2;
//     let areas = Math.sqrt((s*(s-a) *(s-b)*(s-c)));
//     console.log(("Area of triange : " + areas));

// }

// -------------------------------------------------------------------------


// Q4: Circumference and Area of Circle.

// let r  = Number(prompt("Enter the radius : "));

// console.log(2*Math.PI*r);

// Conditionals :

// -------------------------------------------------------------------------


//  Q1: Accept two number and print the gretest between them .

// let  num1 = Number(prompt("Enetr the First number : "));

// let  num2 = Number(prompt("Enter the second number :"));

// if(isNaN(num1)|| isNaN(num2)){
//     console.log("Please enter a valid Number:");

// }
// else if (num1>num2){
//     console.log("The gretest number is : " + num1);

// }
// else if (num2>num1){
//     console.log("The gretest number is : " + num2);
// }
// else{
//     console.log("Both numbers are equal.");

// }
// -------------------------------------------------------------------------
// Q2: Even or Odd Number.

// let num = Number(prompt("Enter a number 😒"))

// if(num%2 === 0){
//     console.log("The number is even 😉");

// }else{
//     console.log("The number is odd🥲");

// }

// -------------------------------------------------------------------------


// Q3.Accept name and age from the user. Check if the user is a valid voter or not.


// let name  = prompt("Enter your name 🥰")

// let age = Number(prompt("Enter your age 🥳"));

// if (isNaN(age)|| age<=0 || age>120) {
//     console.log("Please enter a valid age 😒");
// }

// else if (age >= 18){
//     console.log(`Hello ${name} , you are eligible to vote! 💫🗳️`);
    
// }
// else{
//     console.log(`Hello ${name} , you are not eligible to vote yet , please wait until you turn 18! 🥳`);
    
// }

// -------------------------------------------------------------------------


// Q4: Accept three number and  Print the Greatest between them .

// let num1 = Number(prompt("Enter the first number :1️⃣"));

// let num2 = Number(prompt("Enter the second Number :2️⃣"));

// let num3 = Number(prompt("Enter the third Number :3️⃣"));

// if(isNaN(num1)|| isNaN(num2) || isNaN(num3)){
//     console.log("Please enter the valid number 😒");
// }else if (num1===num2 && num2===num3){
//     console.log("All numbers are equal.");
// }
// else if (num1 >= num2 && num1 >= num3) {
//     console.log("The greatest number is : " + num1);
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log("The greatest number is : " + num2);
// } else {
//     console.log("The greatest number is : " + num3);
// }


// -------------------------------------------------------------------------


// Q5: Accept the year from the user and check if it is a leap year or not.

// let year = Number(prompt("Enter the year you want 💫"))

// if(isNaN(year) || year <= 0){
//     console.log("Please enter a valid year 😒");
// }
// else if((year % 4 === 0 && year % 100 !== 0) || (year % 400 ===0)){
//     console.log(year + " is a leap year! 🎉");
// }
// else {
//     console.log(year + " is not a leap year. 😢");
    
// }