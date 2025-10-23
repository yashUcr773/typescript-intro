// Declare a class

class User {
    constructor(first, last) {
        this.first = first;
        this.last = last
    }
    get name() {
        return `${this.first} ${this.last}`
    }
    printName() {
        console.log(`Hello ${this.first} ${this.last}`)
    }
}

const user1 = new User('fname1', 'lname1')
user1.printName()
console.log(user1.name)
// ---------------------------------------------------------------------------

/**
 * Concepts
 * 1. Private
 * 2. Getters
 * 3. Setters
 * 4. Static
 * 5. Class Inheritence
 * 6. Super
 */