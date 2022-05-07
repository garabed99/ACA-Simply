/*
4 players 0 1 2 3

game:                     played:               to-be-played:
0v1   0v2   0v3           0v1   0v2             0v3
1v2   1v3                 1v2                   1v3
2v3                                             2v3

*/

const solution = (chessPlayers, finishedMatches) => {
  let result = [];
  let includes1;
  let includes2;

  for (let i = 0; i < chessPlayers; i++) {
    for (let j = i + 1; j < chessPlayers; j++) {
      includes1 = finishedMatches.some((a) =>
        [i, j].every((v, z) => v === a[z])
      );

      includes2 = finishedMatches.some((a) =>
        [j, i].every((v, z) => v === a[z])
      );

      if (!includes1 && !includes2) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

let chessPlayers = 4;
let finishedMatches = [
  [0, 1],
  [1, 2],
  [2, 0],
];

console.log(solution(chessPlayers, finishedMatches));
