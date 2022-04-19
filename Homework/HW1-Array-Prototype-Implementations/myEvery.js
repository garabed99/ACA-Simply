Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

let array1 = [1, 30, 39, 29, 10, 13];
let array2 = [12, 5, 8, 130, 44];
let array3 = [12, 54, 18, 130, 44];

console.log(array1.myEvery((currentValue) => currentValue < 40)); //expected true
console.log(array2.myEvery((x) => x >= 10)); //expected false
console.log(array3.myEvery((x) => x >= 10)); //expected true
