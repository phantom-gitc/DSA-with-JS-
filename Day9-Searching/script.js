// ==========================================
// Basic Search Implementations
// ==========================================

// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let searchArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Linear Search (find 6):", linearSearch(searchArr, 6)); // 5
console.log("Linear Search (find 99):", linearSearch(searchArr, 99)); // -1


// Binary Search
function binarySearch(arr, target) {
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
  return -1;
}

let sortedArr = [2, 5, 8, 19, 45, 67, 78, 88, 94];
console.log("Binary Search (find 67):", binarySearch(sortedArr, 67)); // 5
console.log("Binary Search (find 100):", binarySearch(sortedArr, 100)); // -1


// ==========================================
// PRACTICE QUESTIONS & SOLUTIONS
// ==========================================

// Q1: Count Occurrences in Unsorted Array (Linear Search)
function countOccurrencesLinear(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
console.log("Q1 Occurrences of 4:", countOccurrencesLinear([4, 2, 7, 4, 9, 4, 1], 4)); // 3
console.log("Q1 Occurrences of 5:", countOccurrencesLinear([4, 2, 7, 4, 9, 4, 1], 5)); // 0


// Q2: Find Minimum and Maximum in an Array (Linear Search)
function findMinAndMax(arr) {
  if (arr.length === 0) return null;

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return { min, max };
}
console.log("Q2 Min and Max:", findMinAndMax([22, 14, 8, 65, 3, 42])); // { min: 3, max: 65 }


// Q3: Linear Search in a 2D Array (Matrix)
function searchIn2DArray(matrix, target) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === target) {
        return [row, col];
      }
    }
  }
  return [-1, -1];
}
let matrix = [
  [12, 45, 67],
  [33, 90, 21],
  [78, 15, 88]
];
console.log("Q3 Found 90 in Matrix at:", searchIn2DArray(matrix, 90)); // [1, 1]
console.log("Q3 Found 99 in Matrix at:", searchIn2DArray(matrix, 99)); // [-1, -1]


// Q4: First & Last Occurrence in Sorted Array (Binary Search)
function findFirstOccurrence(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let first = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      first = mid;
      end = mid - 1;
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
      start = mid + 1;
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
let arr4 = [1, 2, 4, 4, 4, 4, 5, 8];
console.log("Q4 First & Last index of 4:", searchRange(arr4, 4)); // [2, 5]
console.log("Q4 First & Last index of 9:", searchRange(arr4, 9)); // [-1, -1]


// Q5: Count Total Occurrences in Sorted Array (Binary Search)
function countOccurrencesInSorted(arr, target) {
  let first = findFirstOccurrence(arr, target);
  if (first === -1) return 0;
  let last = findLastOccurrence(arr, target);
  return last - first + 1;
}
let arr5 = [2, 3, 3, 3, 3, 6, 8, 9];
console.log("Q5 Total count of 3:", countOccurrencesInSorted(arr5, 3)); // 4


// Q6: Search Insert Position (Lower Bound)
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
  return start;
}
console.log("Q6 Insert pos for 5 in [1, 3, 5, 6]:", searchInsertPosition([1, 3, 5, 6], 5)); // 2
console.log("Q6 Insert pos for 2 in [1, 3, 5, 6]:", searchInsertPosition([1, 3, 5, 6], 2)); // 1
console.log("Q6 Insert pos for 7 in [1, 3, 5, 6]:", searchInsertPosition([1, 3, 5, 6], 7)); // 4


// Q7: Floor and Ceil in Sorted Array (Binary Search)
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
      floor = arr[mid];
      start = mid + 1;
    } else {
      ceil = arr[mid];
      end = mid - 1;
    }
  }
  return { floor, ceil };
}
console.log("Q7 Floor and Ceil of 25 in [10, 20, 30, 40, 50]:", findFloorAndCeil([10, 20, 30, 40, 50], 25)); // { floor: 20, ceil: 30 }


// Q8: Square Root using Binary Search (Floor Value)
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
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}
console.log("Q8 Sqrt of 16:", mySqrt(16)); // 4
console.log("Q8 Sqrt of 28:", mySqrt(28)); // 5
