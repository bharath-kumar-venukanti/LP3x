class Counter {
    // Private property (hidden from the outside)
    #count = 0;

    // Method to increase the count safely
    increment() {
        this.#count++;
    }

    // Method to read the current count safely
    getCount() {
        return this.#count;
    }
}

// Create an object
const myCounter = new Counter();

myCounter.increment();
myCounter.increment();

console.log(myCounter.getCount()); // Output: 2

// This would cause an error because #count is private:
// console.log(myCounter.#count);