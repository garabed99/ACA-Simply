//the idea is to get the min value from original array, take it out,
//then place it in the result array while removing it from original array
//return the result array

function sort(input) {
  let inputLength = input.length;
  let removedItem;
  let result = [];

  while (inputLength > 0) {
    removedItem = Math.min(...input);
    result.push(removedItem);
    input.push(input.splice(input.indexOf(removedItem), 1)[0]);
    input.pop();

    inputLength--;
  }

  return result;
}

let arr = [2, 1, 6, 4, 2, 9, 6];
console.log(sort(arr));
