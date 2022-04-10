const fs = require("fs");
const { start } = require("repl");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map((num) => +num);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split("");
}

const solution = (N, M, input) => {
  const check = Array.from({ length: N }, () => Array(M).fill(false));
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let flag = false;
  let [i, j] = [0, 0];

  const dfs = (x, y, cnt) => {
    if (flag === true) return;
    else {
      for (let d = 0; d < 4; d++) {
        const [nx, ny] = [x + dx[d], y + dy[d]];
        if (nx === i && ny === j && cnt >= 4) {
          flag = true;
          return;
        }
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (check[nx][ny]) continue;
        if (input[x][y] === input[nx][ny]) {
          check[nx][ny] = true;
          dfs(nx, ny, cnt + 1);
          check[nx][ny] = false;
        }
      }
    }
  };

  for (i = 0; i < N; i++) {
    for (j = 0; j < M; j++) {
      if (flag === true) break;
      check[i][j] = true;
      dfs(i, j, 1);
      check[i][j] = false;
    }
  }
  console.log(flag ? "Yes" : "No");
};

solution(N, M, input);
