// Sorts an array using Merge Sort

const mergeSort = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        const middle = Math.floor((start + end) / 2);
        mergeSort(array, start, middle);
        mergeSort(array, middle + 1, end);

        let i = start, j = middle + 1, sortedArray = [];

        // Insert elements into sortedArray in ascending order
        while (i <= middle && j <= end) {
            if (array[i] < array[j]) {
                sortedArray = [...sortedArray, array[i++]];
            } else {
                sortedArray = [...sortedArray, array[j++]];
            }
        }

        // Insert remaining elements of left half into sortedArray
        while (i <= middle) {
            sortedArray = [...sortedArray, array[i++]];
        }

        // Insert remaining elements of right half into sortedArray
        while (j <= end) {
            sortedArray = [...sortedArray, array[j++]];
        }

        // Copy elements from sortedArray back to original array
        for (let n = start, index = 0; n <= end; n++) {
            array[n] = sortedArray[index++];
        }
    }
};

// Recursively divides the array into two halves.
// Sorts the left half as long as the number of elements in the half is more than 1.
// Sorts the right half as long as the number of elements in the half is more than 1.

// Merges the two halves by comparing their elements, inserting them into a new array
// and moving their indices forward until the index of any one half goes out of bound

// Any elements remaining in any half after the index of the other half has gone out of bound
// are then added to the end of the new array because they are already sorted

// Worst case: O(n * log n)
// Best case: Omega(n * log n)

// In any case, at each level, the number of subroutines at each level l is 2 ^ l
// and the size of each subroutine is n / (2 ^ l)
// So the work done at each level is (2 ^ l) * n / (2 ^ l) => n
// The total work done therefore is (number of levels) * n => log n * n

// Alternate solution that uses 2 additional arrays for left half and right half, without the need for
// copying items from sorted array back to the original array

const mergeSort = (array, start = 0, end = array.length - 1) => {

    // Base case: Return one-element array if start and end index are same, or empty array if end is less than start
    if (end <= start)
    {
        return array[start] !== undefined ? [array[start]] : array;
    }

    // Recursive case
    const middle = Math.round((start + end) / 2);
    const leftHalf = mergeSort(array, start, middle - 1);
    const rightHalf = mergeSort(array, middle, end);

    let sortedArray = [];
    let i = 0, j = 0;

    // Insert elements into sortedArray in ascending order
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j]) {
            sortedArray = [...sortedArray, leftHalf[i++]];
        } else {
            sortedArray = [...sortedArray, rightHalf[j++]];
        }
    }

    // Insert remaining elements of leftHalf into sortedArray
    while (i < leftHalf.length) {
        sortedArray = [...sortedArray, leftHalf[i++]];
    }

    // Insert remaining elements of rightHalf into sortedArray
    while (j < rightHalf.length) {
        sortedArray = [...sortedArray, rightHalf[j++]];
    }

    return sortedArray;
};