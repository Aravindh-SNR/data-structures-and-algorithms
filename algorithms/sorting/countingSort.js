// Sorts an array of numbers in a given range using Counting Sort

const countingSort = (array, min, max) => {

    // Array the size of range
    const counts = Array(max - min + 1);

    // Map number of occurences of each element in array to index of counts array. For example,
    // if array is [1, 0, 3, 0, 1], counts[0] would be 2, counts[1] would be 2 and counts[3] would be 1
    for (const element of array) {

        // Index is chosen as (element - min) so that we can have min starting at any number and not just zero
        counts[element - min] = counts[element - min] !== undefined ? counts[element - min] + 1 : 1;
    }

    let sortedArray = Array(array.length), n = 0;

    // Populate sorted array
    for (let i = 0; i < counts.length; i++) {
        if (counts[i]) {

            // Insert (i + min) into sorted array counts[i] times
            for (let j = 0; j < counts[i]; j++) {
                sortedArray[n++] = i + min;
            }
        }
    }

    return sortedArray;
};

// Worst case: O(n + k)
// Best case: Omega(n + k)
// where n is the number of elements in the array and k is the number of possible values in the range