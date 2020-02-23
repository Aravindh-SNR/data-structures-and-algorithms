const DoublyLinkedList = () => {

    // First and last nodes of the linked list
    let head = null, tail = null;

    const createNode = element => ({previous: null, data: element, next: null});

    // Check if the linked list is empty
    const isEmpty = () => !head;

    // Insert an element at the beginning of the linked list. Runtime: O(1)
    const insertAtFront = element => {
        if (element != undefined) {

            // Create a new node
            const node = createNode(element);

            if (!head) {
                // Reassign tail to the new node if the list is empty
                tail = node;
            } else {
                // Else make the new node and the first node point at each other
                node.next = head;
                head.previous = node;
            }

            // Reassign head to the new node anyway
            head = node;
        }
    };

    // Insert an element at the end of the linked list. Runtime: O(1)
    const insertAtBack = element => {
        if (element != undefined) {

            // Create a new node
            const node = createNode(element);

            if (!head) {
                // Reassign head to the new node if the list is empty
                head = node;
            } else {
                // Else make the last node and the new node point at each other
                tail.next = node;
                node.previous = tail;
            }

            // Reassign tail to the new node anyway
            tail = node;
        }
    };

    // Insert a newElement after the given element. Runtime: O(n)
    const insertAfter = (element, newElement) => {
        if (element != undefined && newElement != undefined) {
            let node = head;

            // Traverse the linked list as long as node is not null
            while (node) {
                if (node.data === element) {

                    // Create a new node
                    const newNode = createNode(newElement);
                    
                    if (node.next) {
                        // Make the new node and the next node point at each other
                        newNode.next = node.next;
                        newNode.next.previous = newNode;
                    } else {
                        // Reassign tail to the new node if the current node is the last node
                        tail = newNode;
                    }

                    // Make the current node and the new node point at each other anyway
                    node.next = newNode;
                    newNode.previous = node;

                    break;
                }

                node = node.next;
            }
        }
    };

    // Insert a newElement before the given element. Runtime: O(n)
    const insertBefore = (element, newElement) => {
        if (element != undefined && newElement != undefined) {
            let node = head;

            // Traverse the linked list as long as node is not null
            while (node) {
                if (node.data === element) {

                    // Create a new node
                    const newNode = createNode(newElement);

                    // Make the new node point at the current node
                    newNode.next = node;

                    if (node.previous) {
                        // Make the new node and the previous node point at each other
                        newNode.previous = node.previous;
                        newNode.previous.next = newNode;
                    } else {
                        // Reassign head to the new node if the current node is the first node
                        head = newNode;
                    }

                    // Make the current node and the new node point at each other anyway
                    node.previous = newNode;

                    break;
                }

                node = node.next;
            }
        }
    };

    // Remove the given element from the linked list. Runtime: O(n)
    const remove = element => {
        if (element != undefined) {
            let node = head;

            // Traverse the linked list as long as node is not null
            while (node) {
                if (node.data === element) {

                    if (node.previous) {
                        // Make the previous node point at the next node to remove the current node from the chain
                        node.previous.next = node.next;
                    } else {
                        // Reassign head to the next node if the current node is the first node
                        head = node.next;
                    }

                    if (node.next) {
                        // Make the next node point at the previous node to remove the current node from the chain
                        node.next.previous = node.previous;
                    } else {
                        // Reassign tail to the previous node if the current node is the last node
                        tail = node.previous;
                    }

                    break;
                }

                node = node.next;
            }
        }
    };

    // Check if the linked list contains the given element. Runtime: O(n)
    const includes = element => {
        if (element != undefined) {
            let node = head;

            // Traverse the linked list as long as node is not null
            while (node) {
                if (node.data === element) {
                    return true;
                }

                node = node.next;
            }
        }

        return false;
    };

    // Display all the elements of the linked list from head to tail. Runtime: O(n)
    const traverseForward = () => {
        let node = head;

        // Traverse the linked list as long as node is not null
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };

    // Display all the elements of the linked list from tail to head. Runtime: O(n)
    const traverseBackward = () => {
        let node = tail;

        // Traverse the linked list as long as node is not null
        while (node) {
            console.log(node.data);
            node = node.previous;
        }
    };

    return {isEmpty, insertAtFront, insertAtBack, insertAfter, insertBefore, remove, includes, traverseForward, traverseBackward};
};

// Example usage: const doublyLinkedList = DoublyLinkedList();