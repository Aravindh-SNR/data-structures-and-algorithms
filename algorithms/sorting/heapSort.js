// Sorts an array using Heap Sort

const heapSort = array => {

    // Get the index of left child of given parent node in array/binary heap
    const getLeftChild = parent => (2 * parent) + 1;
    
    // Get the index of right child of given parent node in array/binary heap
    const getRightChild = parent => (2 * parent) + 2;

    // Build max heap
    const buildMaxHeap = (parent, end) => {
        const leftChild = getLeftChild(parent);
        
        // Return if index of left child is greater than the end of unsorted portion of array/heap
        if (leftChild > end) {
            return;
        }
        
        const rightChild = getRightChild(parent);

        const greaterChild = rightChild <= end && array[rightChild] > array[leftChild] ? rightChild : leftChild;

        // Swap parent and greater of the 2 children if parent is smaller, and continue to
        // recursively build max heap starting from the index of greater child which now contains the parent
        if (array[parent] < array[greaterChild]) {
            [array[parent], array[greaterChild]] = [array[greaterChild], array[parent]];
            buildMaxHeap(greaterChild, end);
        }
    };

    // Reorder items of array to represent a max heap
    const heapify = () => {
        for (let index = array.length - 1; index >= 0; index--) {
            buildMaxHeap(index, array.length - 1);
        }
    };

    // Represent end of unsorted portion of array/heap
    let end = array.length - 1;

    // Remove first/maximum item from heap and add it to the end and rebuild heap by decrementing end
    const removeMax = () => {
        [array[0], array[end]] = [array[end], array[0]];
        buildMaxHeap(0, --end);
    };

    // Line that gets executed first when heapSort is called
    heapify();

    // Remove maximum item from heap as long as end of unsorted portion is greater than 0
    while (end) {
        removeMax();
    }
};

// Worst case: O(n * log n)
// Best case: Omega(n)

// Runtime of heapify is O(n), not O(n * log n) because only the root will have to move log n times
// Runtime of removeMax is O(n * log n) in the worst and average cases, and O(n) in the best case
// Runtime of buildMaxHeap is O(log n) in the worst case, and O(1) in the best case