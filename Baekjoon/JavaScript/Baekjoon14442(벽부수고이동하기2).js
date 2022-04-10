const solution = (input) => {
  const [N, M, K] = input.shift().split(" ").map(Number);
  const board = Array.from({ length: N }, (_, idx) =>
    input[idx].split("").map(Number)
  );
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const check = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => new Array(K + 1).fill(0))
  );
  const q = [];
  q.push([0, 0, 0]);
  check[0][0][0] = 1;
  while (q.length) {
    const [x, y, z] = q.shift();
    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (board[nx][ny] === 0 && check[nx][ny][z] === 0) {
        check[nx][ny][z] = check[x][y][z] + 1;
        q.push([nx, ny, z]);
      }
      if (z < K && board[nx][ny] === 1 && check[nx][ny][z + 1] === 0) {
        check[nx][ny][z + 1] = check[x][y][z] + 1;
        q.push([nx, ny, z + 1]);
      }
    }
  }

  const s = new Set(check[N - 1][M - 1]);
  const s2 = [...s];

  if (s2.length === 1 && s2[0] === 0) return -1;
  else {
    let tmp = N * M + 1;
    for (let x of s2) {
      if (x != 0 && tmp > x) {
        tmp = x;
      }
    }
    return tmp;
  }
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
