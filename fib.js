function fibs(n) {
    
    let result = [0,1];
   
    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0,1];
    }

    for(let i = 2;i < n; i++) {
        let fib = result[i - 2] + result[i - 1];
        result.push(fib);
    }

    return result;
}

console.log(fibs(10));

function fibsRec(n) {
    
    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0,1];
    }

    let sequence = fibsRec(n - 1);
    let nextFib = sequence(sequence.length - 1) + sequence(sequence.length - 2);
    sequence.push(nextFib);

    return sequence;
}

// Helper function to merge two sorted arrays
function merge(left,right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare the left and right arrays and adds the smallest number to result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Concat any remaining elements (if one array is larger than the other)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {

    // Base case: Arrays with 1 or fewer elements are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Find the middle of the array
    const mid = Math.floor(arr.length / 2);

    // Step 2: Slice the array into two halves
    const leftArray = arr.slice(0,mid);
    const rightArray = arr.slice(mid);

    // Step 3: Recursively sort the arrays until each element itself is an array
    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    // Step 4: Merge the two sorted halves
    return merge(sortedLeft, sortedRight);
}

// Test case
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));