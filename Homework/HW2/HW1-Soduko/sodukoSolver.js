function solution(grid) {
  let tempRow = [];
  let tempCol = [];
  // let tempSub = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let subGridRow = i - (i % 3);
      let subGridCol = j - (j % 3);
      let subGridValue = true;
      //check subgrid
      for (let x = subGridRow; x < subGridRow + 3; x++) {
        for (let y = subGridCol; y < subGridCol + 3; y++) {
          if (grid[i][j] == "." || grid[i][j] === grid[x][y]) {
            subGridValue = false;
          }
        }
      }
      //check overall grid row/column
      if (
        tempRow.includes(grid[i][j]) ||
        tempCol.includes(grid[j][i]) ||
        subGridValue
        // || tempSub.includes[subGridRow][subGridCol]
      )
        return false;
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
