// ==========================================
// Standard Sorting Algorithms
// ==========================================

// Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log("Standard Bubble Sort:", bubbleSort([10, 45, 39, 29, 65, 69]));


// Selection Sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}
console.log("Standard Selection Sort:", selectionSort([10, 45, 39, 29, 65, 69]));


// Insertion Sort
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log("Standard Insertion Sort:", insertionSort([10, 45, 39, 29, 65, 69]));


// ==========================================
// PRACTICE QUESTIONS & SOLUTIONS
// ==========================================

// Q1: Optimized Bubble Sort (Early Exit)
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
    if (!swapped) break;
  }
  return arr;
}
console.log("Q1 Optimized Bubble Sort:", optimizedBubbleSort([1, 2, 3, 5, 4])); // [1, 2, 3, 4, 5]


// Q2: Sort Array in Descending Order (Selection Sort)
function selectionSortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < n; j++) {
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
console.log("Q2 Descending Sort:", selectionSortDescending([29, 10, 14, 37, 13])); // [37, 29, 14, 13, 10]


// Q3: Check if Array is Already Sorted
function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log("Q3 Is [1, 3, 7, 9] sorted?:", isArraySorted([1, 3, 7, 9])); // true
console.log("Q3 Is [1, 8, 3, 9] sorted?:", isArraySorted([1, 8, 3, 9])); // false


// Q4: Find K-th Smallest Element using Selection Sort
function findKthSmallest(arr, k) {
  let n = arr.length;
  if (k < 1 || k > n) return null;

  for (let i = 0; i < k; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr[k - 1];
}
console.log("Q4 3rd smallest in [7, 10, 4, 3, 20, 15]:", findKthSmallest([7, 10, 4, 3, 20, 15], 3)); // 7


// Q5: Move All Zeros to the End (Preserve Relative Order)
function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  while (nonZeroIndex < arr.length) {
    arr[nonZeroIndex] = 0;
    nonZeroIndex++;
  }

  return arr;
}
console.log("Q5 Zeros moved to end:", moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]


// Q6: Sort an Array of 0s, 1s, and 2s (Dutch National Flag)
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
      let temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high--;
    }
  }

  return arr;
}
console.log("Q6 Sorted 0s, 1s, 2s:", sort012([2, 0, 2, 1, 1, 0])); // [0, 0, 1, 1, 2, 2]


// Q7: Insertion Sort on Nearly Sorted Array
console.log("Q7 Insertion Sort (nearly sorted):", insertionSort([2, 1, 3, 5, 4])); // [1, 2, 3, 4, 5]
