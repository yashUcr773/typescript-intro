// Declare a class - Method 1
// can use public / private / protected modifier in constructor and it will auto initialize and assign values
class User {
    constructor(public first: string, public last: string) {
    }

    printName() {
        console.log(`Hello ${this.first} ${this.last}`)
    }
}

// Declare a class - Method 2
// can declare variable separately and then assign values in constructor. by default public
class User2 {
    first: string
    last: string
    constructor(f: string, l: string) {
        this.first = f
        this.last = l
    }

    printName() {
        console.log(`Hello ${this.first} ${this.last}`)
    }
}

const user1 = new User('fname1', 'lname1')
user1.printName()

const user2 = new User2('fname2', 'lname2')
user2.printName()


// ---------------------------------------------------------------------------
/**
 * Concepts
 * 1. Public
 * 2. Private
 * 3. Protected
 * 4. Readonly
 * 5. Getters
 * 6. Setters
 * 7. Static
 * 8. Abstract
 * 9. Class Inheritence
 * 10. Super
 * 11. Interfaces
 * 12. Interface Inheritence
 * 13. Interface vs type
 * 14. Interface declaration merging
 */