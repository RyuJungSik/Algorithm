const solution = (input) => {
  const [M, N] = input.shift().split(" ").map(Number);
  const board = input.map((str) => str.split(""));
  const check = Array.from({ length: N }, () => new Array(M).fill(-1));
  const [dx, dy] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];
  let cList = [];
  let answer = N * M + 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "C") {
        cList.push([i, j]);
        board[i][j] = ".";
      }
    }
  }

  const q = [];
  q.push([...cList[0]]);
  check[cList[0][0]][cList[0][1]] = 0;
  while (q.length) {
    const [x, y] = q.shift();
    for (let k = 0; k < 4; k++) {
      let [nx, ny] = [x + dx[k], y + dy[k]];
      while (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (board[nx][ny] === "*") break;
        if (check[nx][ny] === -1) {
          check[nx][ny] = check[x][y] + 1;
          q.push([nx, ny]);
        }
        nx = nx + dx[k];
        ny = ny + dy[k];
      }
    }
  }

  return check[cList[1][0]][cList[1][1]] - 1;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
