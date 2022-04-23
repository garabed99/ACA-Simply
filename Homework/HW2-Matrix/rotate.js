function calculateRotationNumber(deg) {
  if (deg % 90 !== 0) {
    throw new RangeError("Incorrect value");
  }

  deg = (deg % 360) / 90;
  deg += deg < 0 ? 4 : 0;

  return deg;
}

function rotate90Degree(matrix) {
  const result = [];
  const length = matrix.length;

  matrix[0].forEach((row, rowIndex) => {
    let temp = [];

    matrix.forEach((column, columnIndex) => {
      temp.push(matrix[length - columnIndex - 1][rowIndex]);
    });
    result.push(temp);
  });
  return result;
}

function rotate(matrix, deg) {
  const r = calculateRotationNumber(deg);

  return Array.from({ length: r }).reduce((arr) => rotate90Degree(arr), matrix);
}

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

const matrix2 = [
  [1, 2, 3],
  [4, 5, []],
  [7, 8, 9],
  [null, 11, 12],
  [13, 14, NaN],
];

console.log(rotate(matrix1, 90));
console.log(rotate(matrix2, 90));
