function solution(roadRegister) {
  let rowSum = 0;
  let colSum = 0;
  for (let i = 0; i < roadRegister.length; i++) {
    for (let j = 0; j < roadRegister[i].length; j++) {
      if (roadRegister[i][j]) {
        rowSum++;
      }

      if (roadRegister[j][i]) {
        colSum++;
      }
    }

    if (rowSum != colSum) return false;

    rowSum = 0;
    colSum = 0;
  }

  if (rowSum === colSum) {
    return true;
  }
}

// the output should be true
const roadRegister1 = [
  [false, true, false, false],
  [false, false, true, false],
  [true, false, false, true],
  [false, false, true, false],
];

// the output should be true
const roadRegister2 = [
  [false, true, false, false, false, false, false],
  [true, false, false, false, false, false, false],
  [false, false, false, true, false, false, false],
  [false, false, true, false, false, false, false],
  [false, false, false, false, false, false, true],
  [false, false, false, false, true, false, false],
  [false, false, false, false, false, true, false],
];

// the output should be false
const roadRegister = [
  [false, true, false],
  [false, false, false],
  [true, false, false],
];

console.log(solution(roadRegister1));
console.log(solution(roadRegister2));
console.log(solution(roadRegister));
