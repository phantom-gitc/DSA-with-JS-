//Linear Search 


let prompt = require('prompt-sync')();

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let t = Number(prompt("Enter the number to search: "));
// let index = -1;

// for(let i = 0 ; i<arr.length ;i++){
//     if(arr[i] == t){
//         index = i;
//         break;
//     }
// }

// console.log(index == -1 ? "Element not found" : `Element found at index ${index}`);


// Binaray Search ..

// let arr = [ 2 , 5 , 8 ,19 , 45 ,67 ,78 ,88 , 94 ];

// let target = Number(prompt("Enter the number : "));
// let start = 0 , end = arr.length-1 ; index = -1 ;

// while(start <= end){
//     let mid = Math.floor((start + end)/2);
//     if(arr[mid]== target){
//         index = mid;
//         break ;
//     }
//     else if(arr[mid]<target){
//         start = mid + 1  ;
//     }
//     else end = mid - 1 ;
// }

// if(index == -1 ) console.log("Not found 😓 ");
// else console.log(" Element found at : " + index + " index");


// ====================================================================
// PRACTICE QUESTIONS & SOLUTIONS (ITERATIVE ONLY - NO RECURSION)
// Uses simple loops (for / while) to build solid searching intuition
// ====================================================================


// ==========================================
// Q1: Count Occurrences in Unsorted Array (Linear Search)
// Concept: Traverse with a simple for-loop and count matches
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function countOccurrencesLinear(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

// Test Q1:
// let arr1 = [4, 2, 7, 4, 9, 4, 1];
// console.log("Occurrences of 4:", countOccurrencesLinear(arr1, 4)); // 3
// console.log("Occurrences of 5:", countOccurrencesLinear(arr1, 5)); // 0


// ==========================================
// Q2: Find Minimum and Maximum in an Array (Linear Search)
// Concept: One pass loop keeping track of minimum and maximum values
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function findMinAndMax(arr) {
    if (arr.length === 0) return null;

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

// Test Q2:
// let arr2 = [22, 14, 8, 65, 3, 42];
// console.log("Min and Max:", findMinAndMax(arr2)); // { min: 3, max: 65 }


// ==========================================
// Q3: Linear Search in a 2D Array (Matrix)
// Problem: Find the [row, col] position of target in a 2D array
// Concept: Nested for-loops
// Time Complexity: O(rows * cols), Space Complexity: O(1)
// ==========================================

function searchIn2DArray(matrix, target) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === target) {
                return [row, col]; // Found at [row, col]
            }
        }
    }
    return [-1, -1]; // Not found
}

// Test Q3:
// let matrix = [
//     [12, 45, 67],
//     [33, 90, 21],
//     [78, 15, 88]
// ];
// console.log("Found 90 at:", searchIn2DArray(matrix, 90)); // [1, 1]
// console.log("Found 99 at:", searchIn2DArray(matrix, 99)); // [-1, -1]


// ==========================================
// Q4: First & Last Occurrence in Sorted Array (Binary Search)
// Problem: Given a sorted array with duplicates, find first and last index of target.
// Example: [1, 2, 4, 4, 4, 4, 5, 8], target = 4 -> [2, 5]
// Concept:
// - When target is found at mid, DO NOT stop!
// - To find First: save index and search left (end = mid - 1)
// - To find Last:  save index and search right (start = mid + 1)
// Time Complexity: O(log n), Space Complexity: O(1)
// ==========================================

function findFirstOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let first = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            first = mid;
            end = mid - 1; // Look further left
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return first;
}

function findLastOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let last = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            last = mid;
            start = mid + 1; // Look further right
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return last;
}

function searchRange(arr, target) {
    return [findFirstOccurrence(arr, target), findLastOccurrence(arr, target)];
}

// Test Q4:
// let arr4 = [1, 2, 4, 4, 4, 4, 5, 8];
// console.log("First & Last index of 4:", searchRange(arr4, 4)); // [2, 5]
// console.log("First & Last index of 9:", searchRange(arr4, 9)); // [-1, -1]


// ==========================================
// Q5: Count Total Occurrences in Sorted Array (Binary Search)
// Concept: Since array is sorted, we don't need O(n) scan.
// Total Count = (lastOccurrence - firstOccurrence + 1)
// Time Complexity: O(log n), Space Complexity: O(1)
// ==========================================

function countOccurrencesInSorted(arr, target) {
    let first = findFirstOccurrence(arr, target);
    if (first === -1) return 0; // Element not present

    let last = findLastOccurrence(arr, target);
    return last - first + 1;
}

// Test Q5:
// let arr5 = [2, 3, 3, 3, 3, 6, 8, 9];
// console.log("Total count of 3:", countOccurrencesInSorted(arr5, 3)); // 4
// console.log("Total count of 7:", countOccurrencesInSorted(arr5, 7)); // 0


// ==========================================
// Q6: Search Insert Position (Lower Bound)
// Problem: Given a sorted array and a target:
// - If target is found, return its index.
// - If not found, return the index where it should be inserted in order.
// Example: [1, 3, 5, 6], target = 5 -> 2
//          [1, 3, 5, 6], target = 2 -> 1
//          [1, 3, 5, 6], target = 7 -> 4
// Concept: When while loop ends (start > end), 'start' is always the exact insert position!
// Time Complexity: O(log n), Space Complexity: O(1)
// ==========================================

function searchInsertPosition(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start; // Key insight: 'start' is the insertion index
}

// Test Q6:
// let arr6 = [1, 3, 5, 6];
// console.log("Insert pos for 5:", searchInsertPosition(arr6, 5)); // 2
// console.log("Insert pos for 2:", searchInsertPosition(arr6, 2)); // 1
// console.log("Insert pos for 7:", searchInsertPosition(arr6, 7)); // 4


// ==========================================
// Q7: Floor and Ceil in Sorted Array (Binary Search)
// Definitions:
// - Floor: Greatest element in array that is <= target
// - Ceil:  Smallest element in array that is >= target
// Example: arr = [10, 20, 30, 40, 50], target = 25 -> Floor: 20, Ceil: 30
// Time Complexity: O(log n), Space Complexity: O(1)
// ==========================================

function findFloorAndCeil(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;
    let ceil = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return { floor: arr[mid], ceil: arr[mid] };
        } else if (arr[mid] < target) {
            floor = arr[mid]; // arr[mid] is smaller, candidate for floor
            start = mid + 1;  // look right for a larger possible floor
        } else {
            ceil = arr[mid];  // arr[mid] is bigger, candidate for ceil
            end = mid - 1;    // look left for a smaller possible ceil
        }
    }

    return { floor, ceil };
}

// Test Q7:
// let arr7 = [10, 20, 30, 40, 50];
// console.log("Floor and Ceil of 25:", findFloorAndCeil(arr7, 25)); // { floor: 20, ceil: 30 }
// console.log("Floor and Ceil of 30:", findFloorAndCeil(arr7, 30)); // { floor: 30, ceil: 30 }


// ==========================================
// Q8: Square Root using Binary Search (Floor Value)
// Problem: Given an integer x, find floor of square root of x without using Math.sqrt()
// Example: x = 16 -> 4
//          x = 28 -> 5 (since 5*5=25 <= 28 and 6*6=36 > 28)
// Concept: Binary search on the answer range 1 to x using while loop
// Time Complexity: O(log x), Space Complexity: O(1)
// ==========================================

function mySqrt(x) {
    if (x === 0 || x === 1) return x;

    let start = 1;
    let end = x;
    let ans = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            ans = mid;        // mid is a valid candidate
            start = mid + 1;  // try finding a bigger candidate
        } else {
            end = mid - 1;    // mid * mid > x, search lower
        }
    }

    return ans;
}

// Test Q8:
// console.log("Sqrt of 16:", mySqrt(16)); // 4
// console.log("Sqrt of 28:", mySqrt(28)); // 5
