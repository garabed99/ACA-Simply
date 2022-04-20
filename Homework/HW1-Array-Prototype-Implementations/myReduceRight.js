Array.prototype.myReduceRight = function (callback, initialValue) {
  let previousValue = initialValue;
  let index = this.length - 1;

  if (!initialValue) {
    previousValue = this[index];
    index = index - 1;
  }

  for (; index >= 0; index--) {
    previousValue = callback(previousValue, this[index], index, this);
  }

  return previousValue;
};

let array1 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let array2 = [0, 1, 2, 3, 4];

console.log(
  array1.myReduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue)
  )
); //expected [4, 5, 2, 3, 0, 1]

console.log(
  array2.myReduceRight(function (accumulator, currentValue, index, array) {
    return accumulator + currentValue;
  }, 10)
); //expected 20
