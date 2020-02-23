// Sorts an array using Insertion Sort

const insertionSort = array => {
    const sortedArray = [...array];

    for (let i = 1; i < sortedArray.length; i++) {
        for (let j = i; j > 0; j--) {
            if (sortedArray[j] > sortedArray[j - 1]) {
                break;
            }
            [sortedArray[j], sortedArray[j - 1]] = [sortedArray[j - 1], sortedArray[j]];
        }
    }
    
    return sortedArray;
};

// Considers the first element of the array 'sorted'.
// Looks at the next unsorted element and
// inserts it into the sorted section by shifting the requisite number of elements.
// Repeats until all the elements are sorted

// Worst case: O(n squared)
// Number of comparisons made:
// (n - 1) + (n - 2) + (n - 3) + ... + 1
// => n * (n - 1) / 2
// => n squared / 2 - n / 2
// => n squared (considering very large input size)

// Best case: Omega(n)
// If the array was already sorted, the control would break out of the nested for loop after just 1 iteration
// thereby comparing each element with only one other element (its immediately preceding element).