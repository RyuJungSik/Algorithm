const solution = (input) => {
  const n = +input.shift();
  const board = [];
  input.map((str) => board.push(str.split(" ").map(Number)));
  let ans = 0;
  // 가로는 0 세로는 1 대각선은 2
  // 파이프의 뒤쪽 좌표를 기준으로 한다
  const dfs = (x, y, shape) => {
    if (x === n - 1 && y === n - 1) {
      ans += 1;
      return;
    } else {
      if (shape === 0 || shape === 2) {
        if (y + 1 < n && board[x][y + 1] === 0) dfs(x, y + 1, 0);
      }

      if (shape === 1 || shape === 2) {
        if (x + 1 < n && board[x + 1][y] === 0) dfs(x + 1, y, 1);
      }

      if (shape === 0 || shape === 1 || shape === 2) {
        if (
          x + 1 < n &&
          y + 1 < n &&
          board[x + 1][y] === 0 &&
          board[x][y + 1] === 0 &&
          board[x + 1][y + 1] === 0
        )
          dfs(x + 1, y + 1, 2);
      }
    }
  };

  dfs(0, 1, 0);
  return ans;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
