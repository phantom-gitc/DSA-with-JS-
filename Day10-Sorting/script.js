// Bubble Sort

// let arr = [10, 45, 39, 29, 65, 69];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//     for (j = 0; j < n - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr);


// Selection Sort 

// let arr = [10, 45, 39, 29, 65, 69];
// let n = arr.length ;

// for(let i = 0 ; i<=n-1 ; i++){
//     let min = i ;
//     for(let j = i+1 ; j<n ;j++){
//         if(arr[j]<arr[min]) min = j ;
//     }

//     if(min != i ){
//         let temp = arr[min]
//         arr[min] = arr[i]
//         arr[i] = temp

//     }
// }

// console.log(arr);


// Insertion Sort

// let arr = [10, 45, 39, 29, 65, 69];
// let n = arr.length ;

// for(let i = 1 ; i < n ; i++){
//     let key = arr[i];
//     let j = i - 1;
//     while(j >= 0 && arr[j] > key){
//         arr[j + 1] = arr[j];
//         j--;
//     }
//     arr[j + 1] = key;
// }

// console.log(arr);


// ====================================================================
// PRACTICE QUESTIONS & SOLUTIONS (PURELY ITERATIVE - NO RECURSION)
// Easy to Medium problems testing Bubble, Selection & Insertion Sort concepts
// ====================================================================


// ==========================================
// Q1: Optimized Bubble Sort (Early Exit)
// Problem: If the array is already sorted, regular bubble sort still takes O(n^2).
// Optimize it so it stops early and takes O(n) in best case.
// Concept: Use a boolean flag `swapped`. If no swaps happen in an entire pass, array is sorted!
// Time Complexity: Best: O(n), Worst: O(n^2)
// ==========================================

function optimizedBubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no two elements were swapped in inner loop, break early!
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Test Q1:
// let arr1 = [1, 2, 3, 5, 4];
// console.log("Optimized Bubble Sort:", optimizedBubbleSort(arr1)); // [1, 2, 3, 4, 5]


// ==========================================
// Q2: Sort Array in Descending Order (Decreasing)
// Problem: Sort an array from largest to smallest using Selection Sort.
// Concept: Instead of finding the minimum, find the MAXIMUM index in the unsorted part!
// Time Complexity: O(n^2), Space Complexity: O(1)
// ==========================================

function selectionSortDescending(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < n; j++) {
            // Compare for largest element
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }

    return arr;
}

// Test Q2:
// let arr2 = [29, 10, 14, 37, 13];
// console.log("Descending Sort:", selectionSortDescending(arr2)); // [37, 29, 14, 13, 10]


// ==========================================
// Q3: Check if Array is Already Sorted
// Problem: Check if given array is sorted in ascending order (returns true or false).
// Concept: Single linear scan. If any arr[i] > arr[i + 1], it is NOT sorted!
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Test Q3:
// console.log("Is [1, 3, 7, 9] sorted?:", isArraySorted([1, 3, 7, 9])); // true
// console.log("Is [1, 8, 3, 9] sorted?:", isArraySorted([1, 8, 3, 9])); // false


// ==========================================
// Q4: Find K-th Smallest Element using Selection Sort
// Problem: Find the k-th smallest element without sorting the whole array.
// Concept: Run Selection Sort for only `k` passes! After k passes, arr[k - 1] is the k-th smallest!
// Time Complexity: O(k * n) instead of O(n^2), Space Complexity: O(1)
// ==========================================

function findKthSmallest(arr, k) {
    let n = arr.length;
    if (k < 1 || k > n) return null;

    // Run selection sort only k times
    for (let i = 0; i < k; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap to put the (i+1)-th smallest in place
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr[k - 1];
}

// Test Q4:
// let arr4 = [7, 10, 4, 3, 20, 15];
// console.log("3rd smallest element:", findKthSmallest(arr4, 3)); // 7 (Sorted order: 3, 4, 7, 10, 15, 20)


// ==========================================
// Q5: Move All Zeros to the End (Preserve Relative Order)
// Problem: Given an array [0, 1, 0, 3, 12], move all 0's to end -> [1, 3, 12, 0, 0]
// Concept: Similar to bubble sort or two-pointer shift:
// 1. Move non-zero elements forward
// 2. Fill the remaining positions with 0
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Shift all non-zero elements forward
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }

    // Fill remaining positions with zeros
    while (nonZeroIndex < arr.length) {
        arr[nonZeroIndex] = 0;
        nonZeroIndex++;
    }

    return arr;
}

// Test Q5:
// let arr5 = [0, 1, 0, 3, 12];
// console.log("Zeros moved to end:", moveZerosToEnd(arr5)); // [1, 3, 12, 0, 0]


// ==========================================
// Q6: Sort an Array of 0s, 1s, and 2s (Dutch National Flag)
// Problem: Given an array containing only 0, 1, and 2, sort it in-place.
// Example: [2, 0, 2, 1, 1, 0] -> [0, 0, 1, 1, 2, 2]
// Concept: 3-pointer approach (low, mid, high)
// - If arr[mid] === 0: swap with arr[low], low++, mid++
// - If arr[mid] === 1: mid++
// - If arr[mid] === 2: swap with arr[high], high--
// Time Complexity: O(n), Space Complexity: O(1)
// ==========================================

function sort012(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            // arr[mid] === 2
            let temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] = temp;
            high--;
        }
    }

    return arr;
}

// Test Q6:
// let arr6 = [2, 0, 2, 1, 1, 0];
// console.log("Sorted 0s, 1s, 2s:", sort012(arr6)); // [0, 0, 1, 1, 2, 2]


// ==========================================
// Q7: Insertion Sort on Nearly Sorted Array (Why Insertion Sort Shines!)
// Problem: Given an array where each element is at most 1 position away from sorted position.
// Example: [2, 1, 3, 5, 4]
// Concept: Insertion sort only takes O(n) on nearly sorted data because inner while-loop runs at most 1-2 times!
// Time Complexity: O(n) for nearly sorted array, Space Complexity: O(1)
// ==========================================

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Shift elements that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

// Test Q7:
// let arr7 = [2, 1, 3, 5, 4];
// console.log("Insertion Sort (nearly sorted):", insertionSort(arr7)); // [1, 2, 3, 4, 5]
