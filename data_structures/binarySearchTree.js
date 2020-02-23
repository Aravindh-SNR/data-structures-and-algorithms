const BinarySearchTree = () => {

    // Root of BST
    let root = null;

    // Create new node
    const createNode = data => ({left: null, data, right: null});

    // Insert new node with given data and return root node containing new links. O(n), Theta(log n or height)
    const insert = data => root = insertNode(data, root);

    const insertNode = (data, node) => {
        if (node) {
            if (data < node.data) {
                node.left = insertNode(data, node.left);
            } else {
                node.right = insertNode(data, node.right);
            }
            return node;
        }
        return createNode(data);
    };

    // Remove node with given data and return root node with updated links. O(n), Theta(log n or height)
    const remove = data => root = deleteNode(data, root);

    const deleteNode = (data, node) => {
        if (node) {
            if (data === node.data) {
                if (node.left && node.right) {

                    // If node to be deleted has two children, perform in-order traversal starting with
                    // right child until minimum value node is reached
                    let newRoot = node.right, temp = null;

                    while (newRoot.left) {
                        // In-order successor's parent
                        temp = newRoot;
                        newRoot = newRoot.left;
                    }

                    // Copy contents of in-order successor to current node
                    node.data = newRoot.data;

                    // Remove in-order successor
                    if (temp) {
                        // In-order successor is not current node's direct right child
                        temp.left = null;
                    } else {
                        // In-order successor is current node's direct right child
                        node.right = newRoot.right;
                    }
                    return node;
                } else if (node.left) {

                    // If node to be deleted has only left child, its left child
                    // will become its parent's left or right child
                    return node.left;
                } else if (node.right) {

                    // If node to be deleted has only right child, its right child
                    // will become its parent's left or right child
                    return node.right;
                } else {

                    // If node to be deleted has no children, its parent's left or right child will become null
                    return null;
                }
            } else if (data < node.data) {
                node.left = deleteNode(data, node.left);
            } else {
                node.right = deleteNode(data, node.right);
            }
            return node;
        }

        // Returs null
        return node;
    };

    // Search for node with given data and return true if found, false otherwise. O(n), Theta(log n or height)
    const search = (data, node = root) => {
        if (node) {
            if (data === node.data) {
                return true;
            } else if (data < node.data) {
                return search(data, node.left);
            } else {
                return search(data, node.right);
            }
        }
        return false;
    };

    // Traverse BST by starting with parent, moving to left child, then right child. O(n)
    const preOrder = (node = root) => {
        if (node) {
            console.log(node.data);
            preOrder(node.left);
            preOrder(node.right);
        }
    };

    // Traverse BST by starting with left child, moving to right child, then parent. O(n)
    const postOrder = (node = root) => {
        if (node) {
            postOrder(node.left);
            postOrder(node.right);
            console.log(node.data);
        }
    };

    // Traverse BST by starting with left child, moving to parent, then right child. O(n)
    const inOrder = (node = root) => {
        if (node) {
            inOrder(node.left);
            console.log(node.data);
            inOrder(node.right);
        }
    };

    // Calculate height of BST. O(n)
    const height = (node = root) => {
        if (node) {
            const leftHeight = height(node.left);
            const rightHeight = height(node.right);
            return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
        }
        return -1;
    };

    // Calculate size (number of nodes) of BST. O(n)
    const size = (node = root) => {
        if (node) {
            return 1 + size(node.left) + size(node.right);
        }
        return 0;
    };

    return {insert, remove, search, preOrder, postOrder, inOrder, height, size};
};

// Example usage: const binarySearchTree = BinarySearchTree();