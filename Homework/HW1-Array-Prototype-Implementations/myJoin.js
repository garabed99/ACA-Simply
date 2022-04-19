Array.prototype.myJoin = function (seperator) {
  if (this.length === 0) return " ";

  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined || this[i] === null || this[i].length === 0) {
      return "";
    }
    return this[i] + seperator;
  }
};

const elements = ["Fire", "Air", "Water"];
const empty = [];
const containsNull = ["Fire", null, "Water"];

console.log(elements.join()); //expected "Fire,Air,Water"
console.log(elements.join("")); //expected "FireAirWater"
console.log(elements.join("-")); //expected "Fire-Air-Water"
console.log(empty.join()); //expected " " => empty string

console.log(containsNull.join()); //expected "Fire,,Water"
console.log(containsNull.join("")); //expected "FireWater"
console.log(containsNull.join("-")); //expected "Fire--Water"
