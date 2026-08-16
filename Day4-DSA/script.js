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
//     for(i = 3 ; Math.floor(Math.sqrt(n)) ; i +=2){
//         if(n % i == 0 ) return false ;
//     }
//     return true ;
// }

// N natural number 


// let count = 0 ;

// for (let i = 2 ; i <=20 ; i += 3){
//     count++;
// }
// console.log(count);

