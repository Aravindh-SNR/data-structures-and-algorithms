// Sorts an array using Selection Sort

const selectionSort = array => {
    const sortedArray = [...array];

	for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
			if (sortedArray[i] > sortedArray[j]) {
				[sortedArray[i], sortedArray[j]] = [sortedArray[j], sortedArray[i]];
            }
        }
    }
    
    return sortedArray;
};

// Looks for the smallest element in the unsorted portion of the array
// and swaps it with the first element in the unsorted portion
// and repeats it till the end of the array is reached.
// With each iteration, the size of the unsorted portion keeps decreasing.

// Worst case: O(n squared)
// Best case: Omega(n squared)

// Number of comparisons made in both the cases:
// (n - 1) + (n - 2) + (n - 3) + ... + 1
// => n * (n - 1) / 2
// => n squared / 2 - n / 2
// => n squared (considering very large input size)