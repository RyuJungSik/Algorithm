const solution = (input) => {
  let answer = false;
  const board = input.map((str) => str.split(""));
  const n = 8;
  const [dx, dy] = [
    [0, 0, 1, -1, 1, -1, 1, -1, 0],
    [1, -1, 0, 0, 1, 1, -1, -1, 0],
  ];
  const q = [];
  const check = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => new Array(n + 1).fill(false))
  );
  check[7][0][0] = true;
  q.push([7, 0, 0]);

  while (q.length) {
    const [x, y, t] = q.shift();
    if (x === 0 && y === 7) {
      answer = true;
      break;
    }
    for (let k = 0; k < 9; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      const nt = Math.min(t + 1, 8);
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (nx - t >= 0 && board[nx - t][ny] === "#") continue;
      if (nx - t - 1 >= 0 && board[nx - t - 1][ny] === "#") continue;
      if (check[nx][ny][nt] === false) {
        check[nx][ny][nt] = true;
        q.push([nx, ny, nt]);
      }
    }
  }

  if (answer) return 1;
  else return 0;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
