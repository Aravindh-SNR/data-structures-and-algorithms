// Circular Deque (double ended queue)

const Deque = maxSize => {

    // Deque represented by an array
    const deque = Array(maxSize);

    // Initial front and rear ends of the deque (front signifies head and rear signifies tail)
    let front = -1, rear = -1;

    // Get the current size of the deque
    const size = () => {
        if (front === -1) {
            return 0;
        } else if (rear >= front) {
            return rear - front + 1;
        } else {
            return maxSize - (front - rear) + 1;
        }
    };

    // Check if the deque is empty
    const isEmpty = () => size() === 0;

    // Check if the deque is full
    const isFull = () => size() === maxSize;

    // Insert an element at the front end of the deque and return the element inserted
    const pushFront = element => {

        // Return null if no element was passed or the deque is full
        if (element == undefined || isFull()) {
            return null;
        }

        // Move the position of the front end backward in a circle
        if (front === -1) {
            front = rear = 0;
        } else if (front === 0) {
            front = maxSize - 1;
        } else {
            front--;
        }

        return deque[front] = element;
    };

    // Insert an element at the rear end of the deque and return the element inserted
    const pushBack = element => {

        // Return null if no element was passed or the deque is full
        if (element == undefined || isFull()) {
            return null;
        }

        // Move the position of the rear end forward in a circle
        if (front === -1) {
            front = rear = 0;
        } else if (rear === maxSize - 1) {
            rear = 0;
        } else {
            rear++;
        }

        return deque[rear] = element;
    };

    // Remove the element at the front end of the deque and return the element removed
    const popFront = () => {

        // Return null if the deque is empty
        if (isEmpty()) {
            return null;
        }

        const element = deque[front];

        // Move the position of the front end forward in a circle
        if (front === rear) {
            front = rear = -1;
        } else if (front === maxSize - 1) {
            front = 0;
        } else {
            front++;
        }

        return element;
    };

    // Remove the element at the rear end of the deque and return the element removed
    const popBack = () => {

        // Return null if the deque is empty
        if (isEmpty()) {
            return null;
        }

        const element = deque[rear];

        // Move the position of the rear end backward in a circle
        if (front === rear) {
            front = rear = -1;
        } else if (rear === 0) {
            rear = maxSize - 1;
        } else {
            rear--;
        }

        return element;
    };

    // Return the element at the front end of the deque, or null if the deque is empty
    const peekFront = () => isEmpty() ? null : deque[front];

    // Return the element at the rear end of the deque, or null if the deque is empty
    const peekBack = () => isEmpty() ? null : deque[rear];

    return {size, isEmpty, isFull, pushFront, pushBack, popFront, popBack, peekFront, peekBack};
};

// Example usage: const deque1 = Deque(5); const deque2 = Deque(2)
// The runtime of all the operations is O(1)