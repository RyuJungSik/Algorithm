const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  const N = +input[0];
  const [r1, c1, r2, c2] = input[1].split(" ").map((num) => +num);
  const [dx, dy] = [
    [-2, -2, 0, 0, 2, 2],
    [-1, 1, -2, 2, -1, 1],
  ];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const q = [];
  visited[r1][c1] = true;
  q.push([r1, c1, 0]);

  while (q.length) {
    const now = q.shift();
    const [nowX, nowY, nowSum] = [now[0], now[1], now[2]];
    if (nowX === r2 && nowY === c2) return nowSum;
    for (let i = 0; i < 6; i++) {
      const [nextX, nextY] = [nowX + dx[i], nowY + dy[i]];
      if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
      if (visited[nextX][nextY]) continue;
      visited[nextX][nextY] = true;
      q.push([nextX, nextY, nowSum + 1]);
    }
  }
  return -1;
};

console.log(solution(input));
