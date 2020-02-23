// Circular Queue

const Queue = maxSize => {
    
    // Queue represented by an array
    const queue = Array(maxSize);

    // Initial front and rear ends of the queue (front signifies head and rear signifies tail)
    let front = 0, rear = 0;

    // Get the current size of the queue
    const size = () => rear - front;

    // Check if the queue is empty
    const isEmpty = () => size() === 0;

    // Check if the queue is full
    const isFull = () => size() === maxSize;

    // Insert an element at the rear end of the queue, move the position of the rear end forward and return the element inserted; return null if the queue is full
    const enqueue = element => element != undefined && !isFull() ? queue[rear++ % maxSize] = element : null;

    // Remove the element at the front end of the queue, move the position of the front end forward and return the element removed; return null if the queue is empty
    const dequeue = () => !isEmpty() ? queue[front++ % maxSize] : null;

    // Return the element at the front end of the queue, or null if the queue is empty
    const peek = () => !isEmpty() ? queue[front % maxSize] : null;
    
    return {size, isEmpty, isFull, enqueue, dequeue, peek};
};

// Example usage: const queue1 = Queue(5); const queue2 = Queue(1);
// The runtime of all the operations is O(1)
// In enqueue, dequeue and peek functions, % maxSize is for staying within array bounds to make the queue circular
// This is not necessary in JavaScript since memory is managed by the engine itself, but we would have to keep
// out-of-bounds exception in mind in a lower level language like C