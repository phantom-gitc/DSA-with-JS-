// ==========================================
// Q1: Sum of Array and their Average
// ==========================================
function sumAndAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = arr.length > 0 ? sum / arr.length : 0;
  return { sum, average: avg };
}
console.log("Q1 Sum and Average:", sumAndAverage([10, 20, 30, 40, 50]));


// ==========================================
// Q2: Find Greatest and Smallest Element in Array
// ==========================================
function findMaxAndMin(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { max, min };
}
console.log("Q2 Max and Min:", findMaxAndMin([12, 45, 2, 67, 34]));


// ==========================================
// Q3: Find Second Max Element in Array
// ==========================================
function findSecondMax(arr) {
  if (arr.length < 2) return null;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax === -Infinity ? null : secondMax;
}
console.log("Q3 Second Max:", findSecondMax([13, 45, 99, 99, 23, 56, 78])); // 78


// ==========================================
// Q4: Reverse Array Elements (In-Place)
// ==========================================
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
console.log("Q4 Reverse Array:", reverseArray([1, 4, 6, 7, 4, 9]));


// ==========================================
// Q5: Move All Zeros to Left and Ones to Right
// ==========================================
function moveZerosToLeft(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}
console.log("Q5 Zeros to Left:", moveZerosToLeft([1, 0, 1, 0, 1, 0, 0, 1]));


// ==========================================
// Q6: Array Left Rotation by 1
// ==========================================
function rotateLeftByOne(arr) {
  if (arr.length <= 1) return arr;
  let temp = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  return arr;
}
console.log("Q6 Rotate Left by 1:", rotateLeftByOne([1, 2, 3, 4, 5])); // [2, 3, 4, 5, 1]


// ==========================================
// Q7: Array Right Rotation by 1
// ==========================================
function rotateRightByOne(arr) {
  if (arr.length <= 1) return arr;
  let temp = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}
console.log("Q7 Rotate Right by 1:", rotateRightByOne([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]


// ==========================================
// Q8: Rotate Array by K Steps (Right Rotation)
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
  k = k % n;

  reverseSubarray(arr, 0, n - 1);
  reverseSubarray(arr, 0, k - 1);
  reverseSubarray(arr, k, n - 1);

  return arr;
}
console.log("Q8 Rotated by 3:", rotateArrayRightByK([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]


// ==========================================
// Q9: Check if an Array is a Palindrome
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
console.log("Q9 Palindrome Check [1, 2, 3, 2, 1]:", isArrayPalindrome([1, 2, 3, 2, 1])); // true
console.log("Q9 Palindrome Check [1, 2, 3, 4, 5]:", isArrayPalindrome([1, 2, 3, 4, 5])); // false


// ==========================================
// Q10: Remove Duplicates from Sorted Array (In-Place)
// ==========================================
function removeDuplicatesSorted(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
let arr10 = [1, 1, 2, 2, 3, 4, 4];
let uniqueCount = removeDuplicatesSorted(arr10);
console.log("Q10 Unique count:", uniqueCount, "Elements:", arr10.slice(0, uniqueCount));


// ==========================================
// Q11: Two Sum in Sorted Array
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
  return null;
}
console.log("Q11 Two Sum Sorted (target 9):", twoSumSorted([2, 7, 11, 15], 9)); // [2, 7]


// ==========================================
// Q12: Find Missing Number from 1 to N
// ==========================================
function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}
console.log("Q12 Missing number from [1, 2, 4, 5, 6]:", findMissingNumber([1, 2, 4, 5, 6], 6)); // 3


// ==========================================
// Q13: Leaders in an Array
// ==========================================
function findLeaders(arr) {
  let n = arr.length;
  if (n === 0) return [];

  let leaders = [];
  let maxFromRight = arr[n - 1];
  leaders.push(maxFromRight);

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      maxFromRight = arr[i];
      leaders.push(maxFromRight);
    }
  }
  leaders.reverse();
  return leaders;
}
console.log("Q13 Leaders in [16, 17, 4, 3, 5, 2]:", findLeaders([16, 17, 4, 3, 5, 2])); // [17, 5, 2]


// ==========================================
// Q14: Maximum Subarray Sum (Kadane's Algorithm)
// ==========================================
function maxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}
console.log("Q14 Max Subarray Sum:", maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6


// ==========================================
// Q15: Count Even and Odd Numbers in Array
// ==========================================
function countEvenAndOdd(arr) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return { even, odd };
}
console.log("Q15 Count Even and Odd:", countEvenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // { even: 4, odd: 5 }
