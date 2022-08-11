class MyQueue {
    constructor() {
        this.first = []
        this.last = []
    }

    push(value) {
        for (let i = this.first.length; i > 0; i--) {
            this.last.push(this.first.pop())
        }
        return this.last.push(value)
    }

    pop() {
        for (let i = this.last.length; i > 0; i--) {
            this.first.push(this.last.pop())
        }

        return this.first.pop()
    }

    peek() {
        if (this.first.length > 0) {
            return this.first[this.first.length - 1]
        }

        return this.last[0]
    }

    isEmpty() {
        if (this.first.length === this.last.length) {
            return true
        }
        return false
    }
}

const queue = new MyQueue()
console.log(queue.push(1))
console.log(queue.push(2))
console.log(queue.push(3))
console.log(queue.push(4))
console.log('')
console.log(queue)
// console.log(queue.peek())
console.log(queue.pop())
console.log('')
console.log(queue)
console.log(queue.push(5))
console.log('')
console.log(queue)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
// console.log(queue.isEmpty())

// node QueueStack.js