// Searches for an element in an array using Linear Search

const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
};

// Searches for the given target element by moving through the given array one element at a time
// and returns the index of the element if found, or -1 if not found.

// Worst case: O(n)
// Best case: Omega(1)