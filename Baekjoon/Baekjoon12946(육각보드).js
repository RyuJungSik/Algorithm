const { BADFLAGS } = require("dns");
const fs = require("fs");
const { start } = require("repl");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input.shift();
input = input.map((str) => str.split(""));
for (let i = 0; i < input.length - 1; i++) input[i].pop();
const solution = (n, input) => {
  let check = Array.from({ length: n }, () => Array(n).fill(0));
  const [dx, dy] = [
    [-1, -1, 0, 0, 1, 1],
    [0, 1, -1, 1, -1, 0],
  ];
  let answer = 0;
  const dfs = (x, y) => {
    for (let d = 0; d < 6; d++) {
      let [nx, ny] = [x + dx[d], y + dy[d]];
      if (
        nx < 0 ||
        nx >= n ||
        ny < 0 ||
        ny >= n ||
        check[nx][ny] !== 0 ||
        input[nx][ny] === "-"
      )
        continue;

      const hubo = new Array(8).fill(false);
      for (let i = 0; i < 6; i++) {
        let [nnx, nny] = [nx + dx[i], ny + dy[i]];
        if (nnx < 0 || nnx >= n || nny < 0 || nny >= n) continue;
        hubo[check[nnx][nny]] = true;
      }
      for (let i = 1; i < 8; i++) {
        if (hubo[i] === false) {
          check[nx][ny] = i;
          break;
        }
      }
      dfs(nx, ny);
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[i][j] === "-" || check[i][j] !== 0) continue;
      check[i][j] = 1;
      dfs(i, j);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (answer < check[i][j]) answer = check[i][j];
    }
  }
  console.log(check);
  console.log(answer);
};

solution(n, input);
