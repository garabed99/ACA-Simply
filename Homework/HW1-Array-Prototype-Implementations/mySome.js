Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 5, 8, 1, 4];
const array3 = [12, 5, 8, 1, 4];
console.log(array1.mySome((element) => element % 2 === 0)); //expected true
console.log(array2.mySome((x) => x > 10)); //expected false
console.log(array3.mySome((x) => x > 10)); //expected true
