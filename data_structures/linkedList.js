const LinkedList = () => {

    // First and last nodes of the linked list
    let head = null, tail = null;

    const createNode = element => ({data: element, next: null});

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
                // Else make the new node point at the first node
                node.next = head;
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
                // Else make the last node point at the new node
                tail.next = node;
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
                        // Make the new node point at wherever the current node is pointing at
                        newNode.next = node.next;
                    } else {
                        // Reassign tail to the new node if the current node is the last node
                        tail = newNode;
                    }

                    // Make the current node point at the new node anyway
                    node.next = newNode;

                    break;
                }

                node = node.next;
            }
        }
    };

    // Insert a newElement before the given element. Runtime: O(n)
    const insertBefore = (element, newElement) => {
        if (element != undefined && newElement != undefined) {
            let node = head, temp = null;

            // Traverse the linked list as long as node is not null
            while (node) {
                if (node.data === element) {

                    // Create a new node
                    const newNode = createNode(newElement);

                    // Make the new node point at the current node
                    newNode.next = node;

                    // Make the previous node or head, whichever is first, point at the new node
                    if (temp) {
                        temp.next = newNode;
                    } else {
                        head = newNode;
                    }

                    break;
                }

                // Previous node for the next iteration
                temp = node;
                node = node.next;
            }
        }
    };

    // Remove the given element from the linked list. Runtime: O(n)
    const remove = element => {
        if (element != undefined) {
            let node = head, temp = null;

            // Traverse the linked list as long as node is not null
            while (node) {
                if (node.data === element) {

                    // Make the previous node or head, whichever is first, point at wherever the current node is pointing
                    if (temp) {
                        temp.next = node.next;
                    } else {
                        head = node.next;
                    }

                    // Reassign tail to the previous node if the current node is the last node
                    if (node === tail) {
                        tail = temp;
                    }

                    break;
                }

                // Previous node for the next iteration
                temp = node;
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

    // Display all the elements of the linked list. Runtime: O(n)
    const display = () => {
        let node = head;

        // Traverse the linked list as long as node is not null
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };

    return {isEmpty, insertAtFront, insertAtBack, insertAfter, insertBefore, remove, includes, display};
};

// Example usage: const linkedList = LinkedList();