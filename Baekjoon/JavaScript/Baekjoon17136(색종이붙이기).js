const solution = (input) => {
  const board = [];
  input.map((str) => board.push(str.split(" ").map(Number)));
  const visited = new Array(5).fill(0);
  let answer = 26;
  const dfs = (x, y, count) => {
    if (x >= 10) {
      answer = Math.min(answer, count);
      return;
    }

    if (y >= 10) {
      dfs(x + 1, 0, count);
      return;
    }

    if (board[x][y] === 0) dfs(x, y + 1, count);
    else {
      for (let size = 0; size < 5; size++) {
        if (visited[size] === 5) continue;
        if (x + size >= 10 || y + size >= 10) continue;

        let flag = true;
        for (let i = x; i < x + size + 1; i++) {
          for (let j = y; j < y + size + 1; j++) {
            if (board[i][j] === 0) flag = false;
          }
          if (!flag) break;
        }

        if (flag) {
          for (let i = x; i < x + size + 1; i++) {
            for (let j = y; j < y + size + 1; j++) {
              board[i][j] = 0;
            }
          }
          visited[size] += 1;
          dfs(x, y + size + 1, count + 1);

          visited[size] -= 1;
          for (let i = x; i < x + size + 1; i++) {
            for (let j = y; j < y + size + 1; j++) {
              board[i][j] = 1;
            }
          }
        }
      }
    }
  };

  dfs(0, 0, 0);
  return answer === 26 ? -1 : answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
