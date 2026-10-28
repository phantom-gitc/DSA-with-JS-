# Day 8: Arrays in JavaScript & Practice Questions

All questions and solutions are **purely iterative** using loops (no recursion).

---

## 📌 Summary of Questions (Q1 to Q14)

| # | Question | Core Pattern / Concept | Time | Space |
| :---: | :--- | :--- | :---: | :---: |
| **Q1** | Sum & Average of Array | Basic loop accumulator | $O(n)$ | $O(1)$ |
| **Q2** | Find Greatest Element | Single loop tracking `max` | $O(n)$ | $O(1)$ |
| **Q3** | Second Maximum Element | Single loop updating `max` and `secondMax` | $O(n)$ | $O(1)$ |
| **Q4** | Reverse Array | Two pointers (`i < j`) swapping in-place | $O(n)$ | $O(1)$ |
| **Q5** | Move All 0s Left & 1s Right | Two pointers / partition | $O(n)$ | $O(1)$ |
| **Q6** | Left Rotate by 1 | Shift left, place `arr[0]` at `arr[n-1]` | $O(n)$ | $O(1)$ |
| **Q7** | Right Rotate by 1 | Shift right, place `arr[n-1]` at `arr[0]` | $O(n)$ | $O(1)$ |
| **Q8** | Right Rotate by K Positions | 3-Step Reversal Algorithm | $O(n)$ | $O(1)$ |
| **Q9** | Check if Array is Palindrome | Two pointers moving inward | $O(n)$ | $O(1)$ |
| **Q10** | Remove Duplicates (Sorted) | Fast & slow pointers in-place | $O(n)$ | $O(1)$ |
| **Q11** | Two Sum in Sorted Array | Two pointers (`left`, `right`) | $O(n)$ | $O(1)$ |
| **Q12** | Find Missing Number ($1 \dots N$) | Sum formula $n(n+1)/2 - \text{actualSum}$ | $O(n)$ | $O(1)$ |
| **Q13** | Leaders in an Array | Right-to-left scan tracking `maxFromRight` | $O(n)$ | $O(1)$ |
| **Q14** | Maximum Subarray Sum | Kadane's Algorithm | $O(n)$ | $O(1)$ |

---

## 💡 Key Conceptual Takeaways

1. **In-Place Array Reversal (Two Pointers)**:
   Swapping `arr[left]` and `arr[right]` while `left < right` lets you reverse without using extra memory.
2. **K-Step Array Rotation**:
   Reversing the entire array, then reversing the first $k$ elements and the remaining $n - k$ elements rotates the array in $O(n)$ time with $O(1)$ space.
3. **Kadane's Algorithm**:
   If `currentSum` ever falls below `0`, reset it to `0` because a negative running prefix will only hurt any subsequent subarray.
4. **Right-to-Left Traversal (Leaders Problem)**:
   Whenever a question asks about elements compared to *"everything to its right"*, scanning from right to left turns an $O(n^2)$ problem into an $O(n)$ problem!
