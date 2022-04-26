Array.prototype.myUnshift = function (...args) {
  let newArr = this.slice();
  this.length = 0;

  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }

  for (let i = 0; i < newArr.length; i++) {
    this[this.length] = newArr[i];
  }

  return this.length;
};

const array1 = [1, 2, 3];

console.log(array1.myUnshift(4, 5)); //expected 5
console.log(array1); //expected [ 4, 5, 1, 2, 3 ]
