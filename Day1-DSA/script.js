// -------------------------------------------------------
// Q1 : Realtion between String and Integer .

// let a = 10 ;
// let b = 20 ;

// console.log("sum of " + a + " and " + b + " is " + a+b);

// Solution : sum of 10 and 20 is 1020

// console.log((a+b) + " is sum of " + " a and " + b );

// Solution : 30 is sum of  a and 20.

// -------------------------------------------------------

// Q2:  Type Coercion .

// console.log( 5 + 5 ); // 10

// console.log( 5 + "5"); // 55

// console.log(2 - 2); // 0

// console.log("2" - "2"); // 0

// console.log(2 - "2");// 0

// -------------------------------------------------------

// Q3 : User Input 

// let age = Number(prompt("Enter the age ."))
// console.log(age);


// -------------------------------------------------------

// Q4: Swap 2 variable via 3 method .

// ----------Method 1 :-----------

// let a = 10 ;
// let b = 20 ;

// let temp = a ; 
// a = b ;
// b = temp ;

// console.log(a , b); // 20 10


// ------------Method 2 :---------- 

// let a = 10 ;
// let b = 20 ;

// a = a+ b ; // a = 30 
// b = a - b ; // b = 10 
// a = a - b ; // a = 20

// -----------Method 3 :---------

// let a = 10 ;
// let b = 20 ;

// [a , b ] = [b , a ]

// console.log(a,b);

// -------------------------------------------------------

// Q5 : Difference between ( % ) and ( / )..

// % : It return reminder 

// / : It return Quotient .


// Key Points : 

// In Js Intger / Integer is Gives the result in float .
// Which is not a good practise , so we use Math.floor()

// console.log(10/3); // 3.3333333 ❌

// console.log(Math.floor(10/3)); //3 ✅


// -------------------------------------------------------

// Q6 : Relational Operator .

// > , < , >= , <= , == ,=== , != 

// -------------------------------------------------------

// Q7 : Logical Operator .

//   && and || 


// -------------------------------------------------------

// Q8 : Unary Operator - (Pre and Post ) ++ and --

// Pre Increment : Change First -> Then Use 

// Post Increment : Use First --> Then Change 


// let a = 20 ; 
// console.log(a++ + ++a);


// -------------------------------------------------------


// Assignment : 

// Q1:

// let i = 11;
// i = i++ + ++i;
// console.log(i); // 24 


// Q2 :

// let a = 11 ,b = 22 ;
// c = a + b + a++ + b++ + ++a+  ++b;

// console.log("a =" + a); // 13
// console.log("b=" +b); // 24
// console.log("c=" +c);//103


// Q3:


// let i = 0 ;
// i = i++ - --i+ ++i -i--;
// console.log(i); //0


// Q4:
// let b = true ;
// b++;
// console.log(b); //2

// Q5:

// let i = 1 , j = 2 , k= 3;
// let m = i-- -j-- -k--;
// console.log('i=' + i); //0
// console.log('j=' + j);//1
// console.log('k=' + k); //2
// console.log('m=' + m); //-4



// Q6: 

let a = 1 , b = 2 ;

console.log(--b - ++a+ ++b- --a);







