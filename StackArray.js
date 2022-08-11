class MyStack {
    constructor() {
        this.data = []
        this.length = 0
    }

    push(value) {
        this.data.push(value)
        this.length++
        return this.data
    }

    pop() {
        this.data.pop()
        this.length--
        return this.data
    }

    peek() {
        return this.data[this.length-1]
    }

    look(value) {
        for (let i = 0; i <= this.length - 1; i++) {
            if (this.data[i] === value) {
                return true
            }
        }
        return false
    }

    isEmpty() {
        if (this.length === 0) {
            return true
        }
        return false
    }
}

const stack = new MyStack()
stack.push(5)
stack.push(12)
stack.push(17)
console.log(stack.peek())
stack.pop()
console.log(stack.look(12))
console.log(stack)

// node Stack.js
