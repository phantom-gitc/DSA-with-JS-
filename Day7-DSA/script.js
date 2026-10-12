// Q1 : Right Angle Triangle 

const prompt = require('prompt-sync')();

// const n = Number(prompt("Enter the number "));

// for(i = 1 ; i<=n ; i++){
//     for(j = 1 ; j<=i ; j++){
//         process.stdout.write(" * ") ;
//         // process.stdout.write(j + "  ");
//         // process.stdout.write(i + "  ");
//     }
//     console.log();
// }

// Q2: Inverted Right angle Triangle 

// temp = 5 ; 
// for(i = 1 ; i<=n ; i++){
//     for(j = 1 ; j<=temp ; j++){
//         process.stdout.write(" * ");
//     }
//     temp--;

//     console.log();
// }


// for(let i = 1  ; i <= n ; i++){
//     for(j = 1 ; j<= n - i + 1 ; j++){
//         process.stdout.write(" * ");
//     }
//     console.log();
// }


// Q3: Mirror Right Angle Triangle 

// for(let i = 1 ; i<=n ; i++){
//     for(j=1 ; j<=n-i ; j++){
//         process.stdout.write("  ")
//     }
//     for(let j = 1 ; j<=i ;j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }


// Q4: Triangle Pattern (Pyramid)

// for(let i = 1 ; i<=n  ; i++){
//     for(j = 1 ; j<=n - i ; j++){
//         process.stdout.write(" ");
//     }
//     for(let j = 1 ; j<=i ; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }


// Q5 : X - Pattern 

// for(let i = 1 ; i<=n ; i++){
//     for(j=1 ; j<=n ; j++){
//         if(i==j || i+j == n+1){
//             process.stdout.write("*")
//         } else {
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }


// ====================================================================
// MORE PATTERN QUESTIONS & SOLUTIONS (PURELY ITERATIVE - NESTED LOOPS)
// High-frequency pattern problems to master 2D loop coordinates and symmetry
// ====================================================================


// ==========================================
// Q6: Diamond Pattern
// Pattern for n = 4:
//       *
//      * *
//     * * *
//    * * * *
//     * * *
//      * *
//       *
// Concept:
// 1. Top pyramid: i from 1 to n (spaces: n - i, stars: i)
// 2. Bottom inverted: i from n - 1 down to 1 (spaces: n - i, stars: i)
// ==========================================

function printDiamond(n) {
    // Upper Half
    for (let i = 1; i <= n; i++) {
        for (let s = 1; s <= n - i; s++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
    // Lower Half
    for (let i = n - 1; i >= 1; i--) {
        for (let s = 1; s <= n - i; s++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

// Test Q6:
// printDiamond(4);


// ==========================================
// Q7: Hollow Square Pattern
// Pattern for n = 5:
//    * * * * *
//    *       *
//    *       *
//    *       *
//    * * * * *
// Concept:
// Print '*' only at boundaries: first row, last row, first col, or last col!
// ==========================================

function printHollowSquare(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {
                process.stdout.write("* ");
            } else {
                process.stdout.write("  "); // 2 spaces to match "* "
            }
        }
        console.log();
    }
}

// Test Q7:
// printHollowSquare(5);


// ==========================================
// Q8: Floyd's Triangle (Continuous Number Triangle)
// Pattern for n = 4:
//    1
//    2  3
//    4  5  6
//    7  8  9  10
// Concept:
// Keep a running counter `num = 1`. Increment it after printing each element.
// ==========================================

function printFloydsTriangle(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(num + "  ");
            num++;
        }
        console.log();
    }
}

// Test Q8:
// printFloydsTriangle(4);


// ==========================================
// Q9: Binary / 0-1 Triangle
// Pattern for n = 5:
//    1
//    0 1
//    1 0 1
//    0 1 0 1
//    1 0 1 0 1
// Concept:
// If (i + j) is even, print 1. If (i + j) is odd, print 0!
// ==========================================

function printBinaryTriangle(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if ((i + j) % 2 === 0) {
                process.stdout.write("1 ");
            } else {
                process.stdout.write("0 ");
            }
        }
        console.log();
    }
}

// Test Q9:
// printBinaryTriangle(5);


// ==========================================
// Q10: Palindromic Number Pyramid
// Pattern for n = 4:
//          1
//        2 1 2
//      3 2 1 2 3
//    4 3 2 1 2 3 4
// Concept:
// 1. Print leading spaces: 2 * (n - i)
// 2. Count down from i to 1
// 3. Count up from 2 to i
// ==========================================

function printPalindromicPyramid(n) {
    for (let i = 1; i <= n; i++) {
        // Leading spaces
        for (let s = 1; s <= n - i; s++) {
            process.stdout.write("  ");
        }
        // Count down to 1
        for (let j = i; j >= 1; j--) {
            process.stdout.write(j + " ");
        }
        // Count up from 2 to i
        for (let j = 2; j <= i; j++) {
            process.stdout.write(j + " ");
        }
        console.log();
    }
}

// Test Q10:
// printPalindromicPyramid(4);


// ==========================================
// Q11: Butterfly Pattern
// Pattern for n = 4:
//    *             *
//    * *         * *
//    * * *     * * *
//    * * * * * * * *
//    * * *     * * *
//    * *         * *
//    *             *
// Concept:
// Upper Half:
//   - Stars: i, Spaces: 2 * (n - i), Stars: i
// Lower Half (inverted):
//   - Stars: i, Spaces: 2 * (n - i), Stars: i
// ==========================================

function printButterfly(n) {
    // Upper Half
    for (let i = 1; i <= n; i++) {
        // Left stars
        for (let j = 1; j <= i; j++) process.stdout.write("* ");
        // Middle spaces
        for (let s = 1; s <= 2 * (n - i); s++) process.stdout.write("  ");
        // Right stars
        for (let j = 1; j <= i; j++) process.stdout.write("* ");
        console.log();
    }
    // Lower Half
    for (let i = n - 1; i >= 1; i--) {
        // Left stars
        for (let j = 1; j <= i; j++) process.stdout.write("* ");
        // Middle spaces
        for (let s = 1; s <= 2 * (n - i); s++) process.stdout.write("  ");
        // Right stars
        for (let j = 1; j <= i; j++) process.stdout.write("* ");
        console.log();
    }
}

// Test Q11:
// printButterfly(4);


// ==========================================
// Q12: Hourglass Pattern (Sandglass)
// Pattern for n = 4:
//    * * * *
//     * * *
//      * *
//       *
//      * *
//     * * *
//    * * * *
// Concept:
// 1. Inverted pyramid: i goes from n down to 1
// 2. Upright pyramid: i goes from 2 up to n
// ==========================================

function printHourglass(n) {
    // Top inverted pyramid
    for (let i = n; i >= 1; i--) {
        for (let s = 1; s <= n - i; s++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
    // Bottom upright pyramid
    for (let i = 2; i <= n; i++) {
        for (let s = 1; s <= n - i; s++) {
            process.stdout.write(" ");
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

// Test Q12:
// printHourglass(4);
