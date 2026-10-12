# Day 7: Pattern Printing in JavaScript

Mastering nested loops (`for` loops) through visual 2D patterns.

---

## 📌 Summary of Patterns (Q1 to Q12)

| # | Pattern Name | Key Logic / Formula |
| :---: | :--- | :--- |
| **Q1** | Right Angle Triangle | Row $i$ prints $i$ stars. |
| **Q2** | Inverted Right Angle Triangle | Row $i$ prints $n - i + 1$ stars. |
| **Q3** | Mirror Right Angle Triangle | Print $(n - i)$ spaces, then $i$ stars. |
| **Q4** | Pyramid Triangle | Print $(n - i)$ spaces, then $i$ star-spaces (`* `). |
| **Q5** | X-Pattern | Star when $i === j$ or $i + j === n + 1$. |
| **Q6** | Diamond Pattern | Upright pyramid ($1 \dots n$) + Inverted pyramid ($n - 1 \dots 1$). |
| **Q7** | Hollow Square | Star only on borders: $i === 1 \lor i === n \lor j === 1 \lor j === n$. |
| **Q8** | Floyd's Triangle | Maintain continuous counter `num++` across rows. |
| **Q9** | Binary / 0-1 Triangle | If $(i + j)$ is even, print `1`, else print `0`. |
| **Q10** | Palindromic Number Pyramid | Spaces $\rightarrow$ count down $i \dots 1$ $\rightarrow$ count up $2 \dots i$. |
| **Q11** | Butterfly Pattern | Left stars $i$, middle spaces $2(n - i)$, right stars $i$. Mirror for lower half. |
| **Q12** | Hourglass Pattern | Inverted pyramid ($n \dots 1$) + Upright pyramid ($2 \dots n$). |

---

## 💡 The Universal 3-Step Pattern Formula

Whenever you encounter a pattern problem, answer these 3 questions:

1. **How many rows?** (Outer loop `i` from $1$ to $n$)
2. **For each row $i$, how many spaces?** (First inner loop)
3. **For each row $i$, what to print (stars / numbers)?** (Second inner loop)
