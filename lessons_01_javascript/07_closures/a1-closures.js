//
//
// // // // // // // // // // // // // // // // // // // // // // // // // //
// closures
function createCounter(initial) {
  var counter = initial;

  function increment(value) {
    if (!isFinite(value) || value < 1) {
      value = 1;
    }
    counter += value;
  }

  function get() {
    return counter;
  }

  return {
    increment: increment,
    get: get,
  };
}

var myCounter = createCounter(100);
console.log(myCounter.get());

myCounter.increment(5);
console.log(myCounter.get());

var myCounter2 = createCounter(50);
console.log(myCounter2.get());

myCounter2.increment(20);
myCounter2.increment(5);
myCounter2.increment(2);
console.log(myCounter2.get());
