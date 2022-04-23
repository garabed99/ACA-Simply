function calculateRotationNumber(deg) {
  if (deg % 90 !== 0) {
    throw new RangeError("Incorrect value");
  }

  deg = (deg % 360) / 90;
  deg += deg < 0 ? 4 : 0;

  return deg;
}

function rotate90DegreeWithoutDiagonal(matrix) {
  const result = [];
  const length = matrix.length;

  matrix[0].forEach((row, rowIndex) => {
    let temp = [];

    matrix.forEach((column, columnIndex) => {
      if (
        rowIndex === columnIndex ||
        columnIndex === matrix[0] - rowIndex - 1
      ) {
        temp.push(matrix[rowIndex][columnIndex]);
      } else {
        temp.push(matrix[length - columnIndex - 1][rowIndex]);
      }
    });
    result.push(temp);
  });

  return result;
}

function rotateWithoutDiagonal(matrix, deg) {
  const r = calculateRotationNumber(deg);

  return Array.from({ length: r }).reduce(
    (arr) => rotate90DegreeWithoutDiagonal(arr),
    matrix
  );
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

console.log(rotateWithoutDiagonal(matrix1, 90));
console.log(rotateWithoutDiagonal(matrix2, 90));
