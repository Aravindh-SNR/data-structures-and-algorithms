// Sorts an array of positive numbers using Radix Sort

const radixSort = array => {

    // Get the bit'th bit by ANDing the number with 1 left shifted by bit places
    const getBit = (number, bit) => number & (1 << bit) ? 1 : 0;

    // Sort array based on bit'th bit using counting sort
    const countingSort = (array, bit) => {

        // Store number of numbers with 0's and 1's at bit'th position
        const counts = [0, 0];

        // Fill counts array
        for (const number of array) {
            counts[getBit(number, bit)]++;
        }

        // Store index of next number, i.e.
        // indices[0] is where the next number with 0 at bit'th bit will be inserted in sorted array
        // indices[1] is where the next number with 1 at bit'th bit will be inserted in sorted array
        const indices = [0, counts[0]];

        // Sorted array
        const sortedArray = Array(array.length);

        // Fill sorted array
        for (const number of array) {
            const currentBit = getBit(number, bit);
            sortedArray[indices[currentBit]] = number;
            indices[currentBit]++;
        }

        return sortedArray;
    };

    // Sort array based on binary bits starting from 1st to 64th since JavaScript stores numbers as 64-bit
    for (let bit = 0; bit < 64; bit++) {
        array = countingSort(array, bit);
    }

    return array;
};

// Worst case: O(l * (n + k)) => O(n)
// Best case: Omega(l * (n + k)) => Omega(n)

// l is the number of digits in each item (in our case, it is always 64), n is the number of items to sort
// and k is the number of possible values for each digit (in our case, it is always 2: 0 and 1)