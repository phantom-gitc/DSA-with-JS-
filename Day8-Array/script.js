// let prompt = require("prompt-sync")();
// let size = Number(prompt("Enter the array size:"));

// Q1: Sum of Array and there Average

// let arr = new Array(size);
// let sum = 0
// for(let i = 0 ; i<arr.length ;i++){
//     arr[i] = Number(prompt("Enter the element "))
//     sum += arr[i];
// }
// console.log(arr);
// console.log(sum) ;
// console.log(sum/arr.length);

// Q2 : Find the Greatest Element in Array

// Basic Type Solution

// let arr = new Array(size);
// arr[0] = Number(prompt("Enter the first element : "))
// let max = arr[0];
// for(let i = 0; i<arr.length;i++){
//     arr[i] = Number(prompt("Enter the element : "  ));
//     if(arr[i] > max){
//         max = arr[i];

//     }
// }
// console.log(max);

// @2 Advanced Type Solution

// if (size <= 0) {
//   console.log("Invalid arry Size ");
// } else {
//   let max = -Infinity;
//   let min = Infinity;
//   let isAllSame = true;
//   let firstValue;

//   for (let i = 0; i < size; i++) {
//     let num = Number(prompt("Enter the element : " + (i + 1) + " : "));
//     if (i === 0) {
//       firstValue = num;
//     } else {
//       if (num !== firstValue) {
//         isAllSame = false;
//       }
//     }

//     if (num > max) max = num;
//     if (num < min) min = num;
//   }

//   console.log("Maxium : ", max);
//   console.log("Minium : ", min);

//   if (isAllSame) {
//     console.log("All elements are same : ");
//   } else {
//     console.log("All elements are not same ");
//   }
// }



// Q3: Find the Second Max Element in Array ..

// let arr = [13 , 45 , 99 , 99 ,23 , 56 , 78  ];

// let max = Math.max(arr[0],arr[1]);
// let SecondMax = Math.min(arr[0],arr[1]);

// for(let i = 2 ; i<arr.length ;i++){
//     if(arr[i]>max){
//       SecondMax = max;
//       max = arr[i];
//     }else if(arr[i]>SecondMax && arr[i]!==max){
//       SecondMax = arr[i];
//     } 
// }
// console.log("Second Max Element : ",SecondMax);


// Q4: Reverse the Array Element.

// Approach 1 (Using Extra Array ( space))...

// let arr = [1 ,2 , 3 , 4 , 5,6,7];

// let tempArr = new Array(arr.length);

// let i = 0 ; 
// for(j = arr.length-1 ; j>=0 ; j--){
//   tempArr[i] = arr[j];
//   i++;
// }
// console.log(tempArr);

// Approach 2 (Without using extra space )

// let arr = [ 1 , 4, 6 ,7,4,9];

// let i = 0  , j = arr.length-1;
// while(i<j){
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// Q5: All Zero to left and All once to right.

// let arr = [ 1 , 0 , 1 , 0 , 1 , 0, 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 ,  1 , 0 , 1 , 0];

// let i = 0 , j = 0 ;

// while(i<arr.length){
//   if(arr[i]==0){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);


// Q6: Array Left Rotation by 1 


// let arr = [ 1 , 2 , 3 , 4 , 5];
// let temp = arr[0];

// for(let i = 0 ; i<arr.length-1 ; i++){
//   arr[i] = arr[i+1];
// }
// arr[arr.length-1] = temp ; 
// console.log(arr)


// Q7: Array Right Rotation by 1 

// let arr = [ 1,2,4,5,2,7];

// let temp = arr[arr.length-1];

// for(let i = arr.length -1 ; i>0 ; i--){
//   arr[i] = arr[i-1];
// }
// arr[0] = temp ;

// console.log(arr);


// ====================================================================
// MORE ARRAY PRACTICE QUESTIONS & SOLUTIONS (PURELY ITERATIVE - NO RECURSION)
// Easy to Medium problems testing Two Pointers, Prefix/Suffix, & In-Place techniques
// ====================================================================


// ==========================================
// Q8: Rotate Array by K Steps (Right Rotation)
// Problem: Given an array and integer k, rotate the array to the right by k steps.
// Example: [1, 2, 3, 4, 5, 6, 7], k = 3 -> [5, 6, 7, 1, 2, 3, 4]
// Concept: The 3-Step Reversal Algorithm (O(1) extra space!):
//   1. Reverse the entire array -> [7, 6, 5, 4, 3, 2, 1]
//   2. Reverse first k elements -> [5, 6, 7, 4, 3, 2, 1]
//   3. Reverse remaining (n-k)  -> [5, 6, 7, 1, 2, 3, 4]
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function reverseSubarray(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateArrayRightByK(arr, k) {
    let n = arr.length;
    k = k % n; // If k > n, only rotate effective steps

    // Step 1: Reverse entire array
    reverseSubarray(arr, 0, n - 1);
    // Step 2: Reverse first k elements
    reverseSubarray(arr, 0, k - 1);
    // Step 3: Reverse the remaining n - k elements
    reverseSubarray(arr, k, n - 1);

    return arr;
}

// Test Q8:
// let arr8 = [1, 2, 3, 4, 5, 6, 7];
// console.log("Rotated by 3:", rotateArrayRightByK(arr8, 3)); // [5, 6, 7, 1, 2, 3, 4]


// ==========================================
// Q9: Check if an Array is a Palindrome
// Problem: Check if array reads the same forward and backward.
// Example: [1, 2, 3, 2, 1] -> true
//          [1, 2, 3, 4, 5] -> false
// Concept: Two pointers (left at 0, right at end) moving inward.
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function isArrayPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Test Q9:
// console.log("Is [1, 2, 3, 2, 1] palindrome?:", isArrayPalindrome([1, 2, 3, 2, 1])); // true
// console.log("Is [1, 2, 3, 4, 5] palindrome?:", isArrayPalindrome([1, 2, 3, 4, 5])); // false


// ==========================================
// Q10: Remove Duplicates from Sorted Array (In-Place)
// Problem: Given a sorted array, remove duplicates in-place such that each unique element appears once.
// Returns the count of unique elements.
// Example: [1, 1, 2, 2, 3, 4, 4] -> returns 4 (unique elements are [1, 2, 3, 4])
// Concept: Two Pointers (Slow pointer 'i' marks unique boundary, fast pointer 'j' scans)
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function removeDuplicatesSorted(arr) {
    if (arr.length === 0) return 0;

    let i = 0; // Points to last unique element found

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j]; // Move new unique element forward
        }
    }

    return i + 1; // Number of unique elements
}

// Test Q10:
// let arr10 = [1, 1, 2, 2, 3, 4, 4];
// let count = removeDuplicatesSorted(arr10);
// console.log("Unique count:", count); // 4
// console.log("Array with unique elements:", arr10.slice(0, count)); // [1, 2, 3, 4]


// ==========================================
// Q11: Two Sum in Sorted Array (Pair with Given Sum)
// Problem: Given a sorted array, find two numbers whose sum equals target.
// Example: arr = [2, 7, 11, 15], target = 9 -> [2, 7]
// Concept: Two Pointers (left at 0, right at end):
//   - If sum === target: found!
//   - If sum < target: need larger number, left++
//   - If sum > target: need smaller number, right--
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function twoSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let currentSum = arr[left] + arr[right];

        if (currentSum === target) {
            return [arr[left], arr[right]];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null; // No pair found
}

// Test Q11:
// let arr11 = [2, 7, 11, 15];
// console.log("Pair with sum 9:", twoSumSorted(arr11, 9)); // [2, 7]
// console.log("Pair with sum 20:", twoSumSorted(arr11, 20)); // null

// ==========================================

// Q12: Find Missing Number from 1 to N
// Problem: Given an array of size (n - 1) containing distinct numbers from 1 to n.
// Find the missing number.
// Example: [1, 2, 4, 5, 6], n = 6 -> Missing is 3
// Concept:
//   - Sum of first n natural numbers = n * (n + 1) / 2
//   - Missing number = (Expected Sum) - (Actual Sum of array)
// Time Complexity: O(n), Space Complexity: O(1)


// ==========================================

function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

// Test Q12:
// let arr12 = [1, 2, 4, 5, 6];
// console.log("Missing number:", findMissingNumber(arr12, 6)); // 3


// ==========================================
// Q13: Leaders in an Array
// Problem: An element is a leader if it is strictly greater than all elements to its right.
// The rightmost element is ALWAYS a leader.
// Example: [16, 17, 4, 3, 5, 2] -> Leaders are [17, 5, 2]
// Concept: Scan from RIGHT to LEFT keeping track of max element seen so far!
// Time Complexity: O(n), Space Complexity: O(1) extra space
// ==========================================

function findLeaders(arr) {
    let n = arr.length;
    if (n === 0) return [];

    let leaders = [];
    let maxFromRight = arr[n - 1];

    // Rightmost element is always a leader
    leaders.push(maxFromRight);

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            maxFromRight = arr[i];
            leaders.push(maxFromRight);
        }
    }

    // Leaders were collected right-to-left, reverse to maintain original order
    leaders.reverse();
    return leaders;
}

// Test Q13:
// let arr13 = [16, 17, 4, 3, 5, 2];
// console.log("Leaders:", findLeaders(arr13)); // [17, 5, 2]


// ==========================================
// Q14: Maximum Subarray Sum (Kadane's Algorithm)
// Problem: Find the contiguous subarray which has the largest sum.
// Example: [-2, 1, -3, 4, -1, 2, 1, -5, 4] -> Subarray [4, -1, 2, 1] has max sum = 6
// Concept:
//   - Keep adding elements to `currentSum`.
//   - If `currentSum > maxSum`, update `maxSum`.
//   - If `currentSum < 0`, reset `currentSum = 0` (negative sum won't help future subarrays).
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function maxSubarraySum(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        // If current sum becomes negative, discard it
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

// Test Q14:
// let arr14 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log("Max Subarray Sum:", maxSubarraySum(arr14)); // 6
