class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        // const node = new Node(data, this.head)
        // //assign the current node to the next reference to the new node
        // this.head = node
        // //assgin the current node to the head of the linked list

        //OR

        return this.insertAt(data, 0)
    }
}