// ==========================================
// Q1: Right Angle Triangle Pattern
// ==========================================
function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
}
console.log("Q1 Right Triangle (4):");
printRightTriangle(4);


// ==========================================
// Q2: Inverted Right Angle Triangle Pattern
// ==========================================
function printInvertedRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
}
console.log("\nQ2 Inverted Right Triangle (4):");
printInvertedRightTriangle(4);


// ==========================================
// Q3: Mirror Right Angle Triangle Pattern
// ==========================================
function printMirrorRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "  ";
    }
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
}
console.log("\nQ3 Mirror Right Triangle (4):");
printMirrorRightTriangle(4);


// ==========================================
// Q4: Pyramid Pattern
// ==========================================
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trimEnd());
  }
}
console.log("\nQ4 Pyramid Pattern (4):");
printPyramid(4);


// ==========================================
// Q5: X - Pattern
// ==========================================
function printXPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === j || i + j === n + 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
console.log("\nQ5 X-Pattern (5):");
printXPattern(5);


// ==========================================
// Q6: Diamond Pattern
// ==========================================
function printDiamond(n) {
  // Upper Half
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row.trimEnd());
  }
  // Lower Half
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row.trimEnd());
  }
}
console.log("\nQ6 Diamond Pattern (4):");
printDiamond(4);


// ==========================================
// Q7: Hollow Square Pattern
// ==========================================
function printHollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row.trimEnd());
  }
}
console.log("\nQ7 Hollow Square (5):");
printHollowSquare(5);


// ==========================================
// Q8: Floyd's Triangle
// ==========================================
function printFloydsTriangle(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + "  ";
      num++;
    }
    console.log(row.trimEnd());
  }
}
console.log("\nQ8 Floyd's Triangle (4):");
printFloydsTriangle(4);


// ==========================================
// Q9: Binary / 0-1 Triangle
// ==========================================
function printBinaryTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += ((i + j) % 2 === 0 ? "1 " : "0 ");
    }
    console.log(row.trimEnd());
  }
}
console.log("\nQ9 Binary Triangle (5):");
printBinaryTriangle(5);


// ==========================================
// Q10: Palindromic Number Pyramid
// ==========================================
function printPalindromicPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += "  ";
    for (let j = i; j >= 1; j--) row += j + " ";
    for (let j = 2; j <= i; j++) row += j + " ";
    console.log(row.trimEnd());
  }
}
console.log("\nQ10 Palindromic Pyramid (4):");
printPalindromicPyramid(4);


// ==========================================
// Q11: Butterfly Pattern
// ==========================================
function printButterfly(n) {
  // Upper Half
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    for (let s = 1; s <= 2 * (n - i); s++) row += "  ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row.trimEnd());
  }
  // Lower Half
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    for (let s = 1; s <= 2 * (n - i); s++) row += "  ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row.trimEnd());
  }
}
console.log("\nQ11 Butterfly Pattern (4):");
printButterfly(4);


// ==========================================
// Q12: Hourglass Pattern
// ==========================================
function printHourglass(n) {
  // Top inverted pyramid
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row.trimEnd());
  }
  // Bottom upright pyramid
  for (let i = 2; i <= n; i++) {
    let row = "";
    for (let s = 1; s <= n - i; s++) row += " ";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row.trimEnd());
  }
}
console.log("\nQ12 Hourglass Pattern (4):");
printHourglass(4);
