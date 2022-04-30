function solution(grid) {
  let tempRow = [];
  let tempCol = [];
  // let tempSub = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let subGridRow = i - (i % 3);
      let subGridCol = j - (j % 3);
      // let subGridValue = true;
      let count = 0;

      //check subgrid
      if (grid[i][j] != ".") {
        for (let x = subGridRow; x < subGridRow + 3; x++) {
          for (let y = subGridCol; y < subGridCol + 3; y++) {
            if (grid[i][j] === grid[x][y]) {
              // subGridValue = false;
              count++;
            }
          }
        }

        //check overall grid row/column
        if (
          tempRow.includes(grid[i][j]) ||
          tempCol.includes(grid[j][i]) ||
          count > 3
          // || tempSub.includes[subGridRow][subGridCol]
        )
          return false;
      }
      if (grid[i][j] != ".") tempRow.push(grid[i][j]);
      if (grid[j][i] != ".") tempCol.push(grid[j][i]);
    }
    tempRow = [];
    tempCol = [];
    // tempSub = [];
  }
  return true;
}

// the output should be true
const grid1 = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

// the output should be false
const grid2 = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];
console.log(solution(grid1)); // true
console.log(solution(grid2)); // false

//attempt2
// function solution1(grid) {
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] != ".") {
//         let count = 0;

//         //column
//         for (let row = 0; row < grid.length; row++) {
//           if (grid[row][j] == grid[i][j]) count++;
//         }

//         //row
//         for (let col = 0; col < grid[i].length; col++) {
//           if (grid[i][col] == grid[i][j]) count++;
//         }
//         if (count > 2) return false;

//         //subgrid
//         let subGridRow = i - (i % 3);
//         let subGridCol = j - (j % 3);
//         for (let row = subGridRow; row < subGridRow + 3; row++) {
//           for (let col = subGridCol; col < subGridCol + 3; col++) {
//             if (grid[row][col] == grid[i][j]) count++;

//           }
//         }
//         if (count > 3) return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(solution1(grid1)); // true
// console.log(solution1(grid2)); // false
