Array.prototype.myPop = function () {
  if (this.length === 0) return undefined;

  return this.splice(this.length - 1).toString();
};

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
const fish = ["angel", "clown", "mandarin", "sturgeon"];
const emptyArr = [];

console.log(plants.myPop()); //expected "tomato"
console.log(plants); //expected [ 'broccoli', 'cauliflower', 'cabbage', 'kale' ]

console.log(fish.myPop()); //expected "sturgeon"
console.log(fish); //['angel', 'clown', 'mandarin' ]

console.log(emptyArr.myPop()); //expected undefined
console.log(emptyArr); //expected []
