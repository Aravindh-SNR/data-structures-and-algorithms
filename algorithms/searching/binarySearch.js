// Searches for an element in a sorted array using Binary Search

const binarySearch = (array, target, start = 0, end = array.length - 1) => {
    if (end >= start) {
        const middle = Math.floor((start + end) / 2);

        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            return binarySearch(array, target, middle + 1, end);
        } else {
            return binarySearch(array, target, start, middle - 1);
        }
    }

    return -1;
};

// Looks at the mid-element of the given array and returns the index if the element is equal to the given target.
// If the element is smaller than the target, the start index changes to the index right after the mid-element
// and the search for the mid-element is continued recursively.
// If the element is greater than the target, the end index changes to the index right before the mid-element
// and the search for the mid-element is continued recursively.
// Returns -1 if the target is not found.

// Worst case: O(log n)
// How many times can n be divided into half until we reach 1 => log n

// Best case: Omega(1)