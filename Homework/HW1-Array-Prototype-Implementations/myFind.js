Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

const array1 = [5, 12, 8, 130, 44];
console.log(array1.myFind((element) => element > 10)); //expected 12
