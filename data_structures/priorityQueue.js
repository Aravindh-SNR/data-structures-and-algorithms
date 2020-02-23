// Priority Queue implemented using array and binary heap

const PriorityQueue = () => {

    // Initial empty queue/heap
    const queue = [];

    // Get index of parent node of given child node
    const getParent = child => Math.floor((child - 1) / 2);

    // Get index of left child of given parent node
    const getLeftChild = parent => (2 * parent) + 1;

    // Get index of right child of given parent node
    const getRightChild = parent => (2 * parent) + 2;

    // Insert item in queue. O(log n)
    const enqueue = item => {

        // Index of item to be inserted as queue's last element
        let child = queue.length;
        queue[child] = item;

        // Get index of parent of item inserted
        let parent = getParent(child);

        // Rebuild min heap as long as item has a parent and parent is greater than item
        while (queue[parent] && queue[parent] > queue[child]) {
            
            // Swap item and its parent
            [queue[parent], queue[child]] = [queue[child], queue[parent]];

            // Current parent becomes child item for next iteration
            child = parent;

            // Current parent's parent becomes parent for next iteration
            parent = getParent(parent);
        }

        // Return item inserted
        return item;
    };

    // Remove highest priority item from queue. O(log n)
    const dequeue = () => {

        // Item to be removed from queue
        const item = queue[0];

        // Replace highest priority item with last item in queue
        queue[0] = queue[queue.length - 1];

        // Decrement queue's length thereby removing an item from it
        queue.length--;
        
        let parent = 0;

        // Get index of left child of parent
        let leftChild = getLeftChild(parent);

        // Rebuild min heap as long as parent has left child
        while (queue[leftChild]) {

            // Get index of right child of parent
            const rightChild = getRightChild(parent);

            const smallerChild = queue[rightChild] && queue[rightChild] < queue[leftChild] ? rightChild : leftChild;

            if (queue[parent] > queue[smallerChild]) {
                [queue[parent], queue[smallerChild]] = [queue[smallerChild], queue[parent]];

                // Index of smaller child before swapping will be index of parent for next iteration
                parent = smallerChild;
                leftChild = getLeftChild(parent);
            }
        }

        // Return item removed
        return item;
    };

    // Peek at highest priority item. O(1)
    const peek = () => queue[0];

    return {enqueue, dequeue, peek};
};

// Example usage: const priorityQueue = PriorityQueue();