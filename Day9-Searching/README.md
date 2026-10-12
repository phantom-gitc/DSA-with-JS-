# Day 9: Searching Algorithms & Practice Questions

All questions and solutions are **purely iterative** using basic `for` and `while` loops (No recursion).

---

## 📌 Core Concepts
1. **Linear Search ($O(n)$)**: Scan array elements one-by-one from start to end using a `for` loop. Works on **both unsorted and sorted** arrays.
2. **Binary Search ($O(\log n)$)**: Works **only on sorted arrays**. Uses two pointers (`start` and `end`), finds `mid`, and cuts the search space in half each step using a `while (start <= end)` loop.

---

## 📝 Practice Questions (Easy to Medium)

### Q1: Count Occurrences in Unsorted Array (Linear Search)
- **Concept**: Loop through array with `for` loop, increment a counter every time `arr[i] === target`.
- **Time Complexity**: $O(n)$ | **Space**: $O(1)$

---

### Q2: Find Min and Max Element (Linear Search)
- **Concept**: Initialize `min` and `max` with `arr[0]`, loop from `i = 1` to `arr.length - 1`, updating them as you find smaller or larger values.
- **Time Complexity**: $O(n)$ | **Space**: $O(1)$

---

### Q3: Linear Search in 2D Array / Matrix
- **Concept**: Nested `for` loops (outer loop for rows, inner loop for columns) returning `[row, col]` when element matches.
- **Time Complexity**: $O(\text{rows} \times \text{cols})$ | **Space**: $O(1)$

---

### Q4: First and Last Occurrence in Sorted Array (Binary Search)
- **Problem**: In a sorted array with duplicates (e.g., `[1, 2, 4, 4, 4, 5]`), find first and last index of `4`.
- **Key Insight**: When `arr[mid] === target`, do NOT stop:
  - **First Occurrence**: Save `mid`, search left (`end = mid - 1`).
  - **Last Occurrence**: Save `mid`, search right (`start = mid + 1`).
- **Time Complexity**: $O(\log n)$ | **Space**: $O(1)$

---

### Q5: Count Total Occurrences in Sorted Array
- **Concept**: Since array is sorted, don't use $O(n)$ linear scan!
- **Formula**:
  $$\text{Count} = \text{lastOccurrence} - \text{firstOccurrence} + 1$$
- **Time Complexity**: $O(\log n)$ | **Space**: $O(1)$

---

### Q6: Search Insert Position (Lower Bound)
- **Problem**: If target exists, return its index. If not, return index where it should be inserted to keep order.
- **Key Insight**: When the `while (start <= end)` loop ends, the `start` pointer always stops at the exact insertion position.
- **Time Complexity**: $O(\log n)$ | **Space**: $O(1)$

---

### Q7: Floor and Ceil in Sorted Array
- **Definitions**:
  - **Floor**: Largest element $\le \text{target}$.
  - **Ceil**: Smallest element $\ge \text{target}$.
- **Concept**:
  - If `arr[mid] < target`: record `floor = arr[mid]`, look right (`start = mid + 1`).
  - If `arr[mid] > target`: record `ceil = arr[mid]`, look left (`end = mid - 1`).
- **Time Complexity**: $O(\log n)$ | **Space**: $O(1)$

---

### Q8: Integer Square Root using Binary Search (Floor)
- **Problem**: Calculate $\lfloor\sqrt{x}\rfloor$ without using `Math.sqrt`.
- **Search Space**: Binary search with `start = 1` and `end = x`.
- **Condition**: If $\text{mid} \times \text{mid} \le x$, record candidate `ans = mid` and search higher (`start = mid + 1`).
- **Time Complexity**: $O(\log x)$ | **Space**: $O(1)$
