// Singleton pattern is used for classes which can be instantiated only once. The single instance
// can be shared throughout our application, which makes Singleton great for managing global state in our application.

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('You can create only one instance of this class!');
    }
    instance = this;
    Object.freeze(instance);
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singletonCounter = new Counter();
export default singletonCounter;

//  potentially can save a lot of memory space, Instead of having to set up memory for a new instance each time.
// anti-pattern in JS to be avoided
// In js we can directly create object in js and this approach is overkill. This is not valid for java,c#..

let count = 0;

const counterObj = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
};

Object.freeze(counterObj);
export { counterObj };
