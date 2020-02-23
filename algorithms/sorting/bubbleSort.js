// Sorts an array using Bubble Sort

const bubbleSort = array => {
    const sortedArray = [...array];
    let swapCounter;

    for (let i = sortedArray.length - 1; i > 0; i--) {
        swapCounter = 0;

        for (let j = 0; j < i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
                swapCounter++;
            }
        }

        // Return if no swaps were made in the current iteration, which means the array is sorted
        if (!swapCounter) {
            return sortedArray;
        }
    }

    return sortedArray;
};

// Repeatedly compares adjacent pairs of elements (jth and (j + 1)th)
// and swaps the elements if jth element is bigger.
// At the end of one iteration, the largest element bubbles out to the top/end of the array
// and with each iteration, the number of elements to be compared keeps decreasing.
// If no swaps are made during a particular iteration, the array is sorted already.

// Worst case: O(n squared)
// Number of comparisons made:
// (n - 1) + (n - 2) + (n - 3) + ... + 1
// => n * (n - 1) / 2
// => n squared / 2 - n / 2
// => n squared (considering very large input size)

// Best case: Omega(n)
// The function would return after just 1 iteration of the outer loop if the array was already sorted