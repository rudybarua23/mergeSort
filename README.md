# Merge Sort (Vanilla JavaScript) + Fibonacci Demos

A small algorithms playground featuring a production-grade **merge sort** implementation alongside iterative and recursive **Fibonacci** demos. The browser page loads the script and prints results to the console for quick inspection.

## ✨ What’s inside

- **Merge Sort**: classic divide-and-conquer sort with a two-pointer `merge(left, right)` helper and a recursive `mergeSort(arr)` that splits, sorts, and merges. :contentReference[oaicite:0]{index=0}  
- **Fibonacci**:
  - `fibs(n)` — iterative generator returning an array of the first `n` numbers. :contentReference[oaicite:1]{index=1}
  - `fibsRec(n)` — recursive variant that builds the array progressively. :contentReference[oaicite:2]{index=2}
- **Browser harness**: `index.html` includes the script and tells you to “Check the console,” so you can see the outputs immediately. :contentReference[oaicite:3]{index=3}

## 📦 Project structure

```text
.
├─ index.html   # Loads fib.js and prints guidance to the page
└─ fib.js       # fibs, fibsRec, merge, mergeSort, and console examples

```

## 🧠 How the algorithms work

- Split the array into two halves until subarrays have length ≤ 1.
- Merge two sorted halves by advancing two pointers and pushing the smaller item each step; append any remainder.
