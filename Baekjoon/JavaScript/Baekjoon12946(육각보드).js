const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  let n = parseInt(input[0]);
  let a = input.slice(1, n + 1).map((v) => v.split(""));
  console.log(a);
  let check = Array.from({ length: n }, () => Array(n).fill(-1));
  const [dx, dy] = [
    [-1, -1, 0, 0, 1, 1],
    [0, 1, -1, 1, -1, 0],
  ];
  let answer = 0;
  const dfs = (x, y, c) => {
    check[x][y] = c;
    answer = Math.max(answer, 1);
    for (let d = 0; d < 6; d++) {
      const [nx, ny] = [x + dx[d], y + dy[d]];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (a[nx][ny] === "X") {
          if (check[nx][ny] === -1) {
            dfs(nx, ny, 1 - c);
            answer = Math.max(answer, 2);
          } else if (check[nx][ny] === c) {
            answer = Math.max(answer, 3);
            return;
          }
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (a[i][j] === "X" && check[i][j] === -1) {
        dfs(i, j, 0);
      }
    }
  }

  console.log(answer);
};

solution(input);
