import LinkedList from './LinkedList.mjs'

class MyQueue {
    constructor(value) {
        this.data = new LinkedList(value)
        this.length = 1
    }

    enqueue(value) {
        this.data.append(value)
        this.length++
        return this.data
    }

    dequeue() {
        this.data.delete(0)
        this.length--
        return this.data
    }

    peek() {
        return this.data.head.value
    }

    look(value) {
        return this.data.lookUp(value)
    }
}

const queue = new MyQueue(100)
queue.enqueue(78)
// queue.enqueue(35)
// queue.enqueue(123)
queue.dequeue()
queue.dequeue()
// queue.dequeue()
// queue.dequeue()
queue.enqueue(50)
queue.enqueue(70)
queue.enqueue(120)
queue.dequeue()
console.log(queue.peek())
console.log(queue.look(50))
console.log(queue.data)
