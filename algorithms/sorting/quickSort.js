// Sorts an array using Quick Sort

const quickSort = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        // Last element of array segment chosen as pivot
        const pivot = array[end];

        // Index of smaller element
        let i = start - 1;

        for (let j = start; j < end; j++) {

            // Swap current element and latest smallest element if current element is lesser than pivot
            if (array[j] < pivot) {
                i++;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        // Swap pivot and first largest element so that pivot is at its final sorted position
        [array[i + 1], array[end]] = [array[end], array[i + 1]];

        // Recursive calls to sort array segments to the left and right of pivot
        quickSort(array, start, i);
        quickSort(array, i + 2, end);
    }
};

// Choose an element from the array as the pivot, for example, the last element.
// Iteratively compare each element of the array from index 0 to length - 2 with the pivot and
// move those lesser than pivot towards the left, and those greater than pivot towards the right.
// Recursively do this on the left and right segments of the array.

// Worst Case (if we keep getting unbalanced left and right segments):
// (n - 1) + (n - 2) + (n - 3) + ... + 1 => O(n squared)
// Best Case (if the pivot keeps ending up near the middle): Omega(n * log n)

// Alternate solution that uses 2 additional arrays for the left and right segments, and is stable

const quickSort = array => {

    // Base case: Return array as it is if it has one or less elements
    if (array.length <= 1) {
        return array;
    }

    // Recursive case
    const pivot = array[array.length - 1];
    let leftArray = [], rightArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= pivot) {
            leftArray = [...leftArray, array[i]];
        } else {
            rightArray = [...rightArray, array[i]];
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};