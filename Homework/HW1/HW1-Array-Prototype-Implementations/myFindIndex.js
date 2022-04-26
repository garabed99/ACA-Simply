Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const array1 = [5, 12, 8, 130, 44];

console.log(array1.myFindIndex((element) => element > 13)); //expected 3
