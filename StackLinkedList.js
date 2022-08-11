class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class MyStackOne {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        if (!this.top) {
            return null
        }
        return this.top.value
    }

    push(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.bottom = newNode
            this.top = this.bottom
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }

        this.length++
        return this.top
    }

    pop(index) {
        if (!this.top) {
            return null
        } else if (this.bottom === this.top) {
            this.bottom = null
        }

        this.top = this.top.next
        this.length--
        return this.top
    }

    isEmpty() {
        if (!this.bottom) {
            return true
        }

        return false
    }
}

// class MyStackTwo {

// }

const stackOne = new MyStackOne()
console.log(stackOne.isEmpty())
console.log(stackOne.push(16))
console.log(stackOne.push(14))
console.log(stackOne.push(32))
console.log(stackOne)
console.log(stackOne.pop())
console.log(stackOne.pop())
console.log(stackOne.pop())
console.log(stackOne.peek())


// node StackLinkedList.js