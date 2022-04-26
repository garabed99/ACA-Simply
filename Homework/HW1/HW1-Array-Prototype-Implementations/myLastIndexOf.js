Array.prototype.myLastIndexOf = function (element) {
  for (let i = this.length; i >= 0; i--) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.myLastIndexOf("Dodo")); //expected: 3
console.log(animals.myLastIndexOf("Tiger")); //expected: 1
console.log(animals.myLastIndexOf("hello")); //expected: -1
