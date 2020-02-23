// Searches for an element in a sorted array using Jump Search

const jumpSearch = (array, target, start = 0, block = Math.round(Math.sqrt(array.length))) => {

    // Base case 1
    if (array[start] === target)
    {
        return start;
    }

    // Base case 2: Go back to previous block if jump goes out of bound or beyond target, and perform linear search
    else if (start >= array.length || array[start] > target)
    {
        const limit = start < array.length ? start : array.length;

        for (let i = start - block + 1; i < limit; i++) {
            if (array[i] === target) {
                return i;
            }
        }

        return -1;
    }

    // Recursive case: Jump to next block if first element of current block is less than target
    else
    {
        return jumpSearch(array, target, start + block, block);
    }
};

// Worst case: O(sqrt n) because the number of blocks is sqrt n
// Sqrt n is chosen as the number of blocks because it is the most optimal.
// Best case: Omega(1)