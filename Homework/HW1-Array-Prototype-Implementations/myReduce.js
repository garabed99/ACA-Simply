Array.prototype.myReduce = function (callback, initialValue) {
  let previousValue = initialValue === undefined ? this[0] : initialValue;
  for (let i = 0; i < this.length; i++) {
    previousValue = callback(previousValue, this[i]);
  }
  if (previousValue === undefined && initialValue === undefined) {
    throw new TypeError();
  }
  return previousValue;
};

let array1 = [1, 2, 3, 4];
let array2 = [15, 16, 17, 18, 19];

console.log(array1.myReduce((prev, curr) => prev + curr, 0)); //expected 10
console.log(array2.myReduce((prev, curr) => prev + curr, 10)); //expected 95
