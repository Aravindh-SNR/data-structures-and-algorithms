const Stack = maxSize => {
    
    // Stack represented by an array
    const stack = Array(maxSize);

    // Position of topmost element
    let top = -1;

    // Get current size of stack
    const size = () => top + 1;

    // Check if stack is empty
    const isEmpty = () => size() === 0;

    // Check if stack is full
    const isFull = () => size() === maxSize;

    // Insert an element at the top of the stack and return the element inserted, or null if the stack is full
    const push = element => element != undefined && !isFull() ? stack[++top] = element : null;

    // Remove the element at the top of the stack and return the element removed, or null if the stack is empty
    const pop = () => !isEmpty() ? stack[top--] : null;

    // Return the element at the top of the stack, or null if the stack is empty
    const peek = () => !isEmpty() ? stack[top] : null;

    return {size, isEmpty, isFull, push, pop, peek};
};

// Example usage: const stack1 = Stack(5); const stack2 = Stack(3);
// The runtime of all the operations is O(1)