# Day 10: Sorting Algorithms & Practice Questions

All questions and solutions are **purely iterative** using loops (no recursion).

---

## 📌 Core Sorting Algorithms Comparison

| Algorithm | How it Works | Best Case | Worst Case | Space | Stability |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **Bubble Sort** | Repeatedly swaps adjacent elements if they are in the wrong order. Large elements "bubble" to the end. | $O(n)$ *(with swap flag)* | $O(n^2)$ | $O(1)$ | Stable |
| **Selection Sort** | Finds the minimum element from the unsorted part and places it at the beginning. | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Unstable |
| **Insertion Sort** | Picks elements one-by-one and inserts them into their correct sorted position (like sorting playing cards). | $O(n)$ *(nearly sorted)* | $O(n^2)$ | $O(1)$ | Stable |

---

## 📝 Practice Questions (Easy to Medium)

### Q1: Optimized Bubble Sort (Early Exit)
- **Concept**: If an array is already sorted, regular bubble sort wastes $O(n^2)$ operations. By using a boolean `swapped = false` flag, if no swaps occur during a pass, we break early ($O(n)$ time).

---

### Q2: Selection Sort in Descending Order
- **Concept**: Modify standard selection sort to find the **maximum** index instead of minimum to sort from largest to smallest.

---

### Q3: Check if Array is Sorted
- **Concept**: $O(n)$ linear scan. If `arr[i] > arr[i + 1]` at any point, return `false`.

---

### Q4: K-th Smallest Element using Selection Sort
- **Concept**: Instead of sorting the entire array ($n$ passes), stop after **$k$ passes**. The element at index `k - 1` will be the $k$-th smallest in $O(k \cdot n)$ time.

---

### Q5: Move All Zeros to the End
- **Concept**: Shift all non-zero elements forward in one pass, then fill the remaining indices with `0`. Preserves relative order in $O(n)$ time.

---

### Q6: Sort Array of 0s, 1s, and 2s (Dutch National Flag)
- **Concept**: 3 pointers (`low`, `mid`, `high`).
  - `arr[mid] === 0`: swap with `arr[low]`, `low++`, `mid++`
  - `arr[mid] === 1`: `mid++`
  - `arr[mid] === 2`: swap with `arr[high]`, `high--`
- **Time Complexity**: $O(n)$ single pass, $O(1)$ extra space.

---

### Q7: Insertion Sort on Nearly Sorted Array
- **Concept**: Demonstrates why Insertion Sort is often preferred for nearly-sorted or streaming data: the inner `while` loop runs at most 1–2 times per element ($O(n)$ overall).
