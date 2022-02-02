const solution = (input) => {
  const [n, m] = input
    .shift()
    .split(" ")
    .map((num) => +num);
  const board = [];
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  const startList = [];
  const [dx, dy] = [
    [-1, -1, 0, 1, 1, 1, 0, -1],
    [0, 1, 1, 1, 0, -1, -1, -1],
  ];

  for (let i = 0; i < n; i++) {
    board.push(input[i].split(" ").map((num) => +num));
  }

  const bfs = (startList) => {
    const q = [];
    for (let [i, j] of startList) {
      visited[i][j] = 0;
      q.push([i, j, 0]);
    }
    while (q.length > 0) {
      const [nowX, nowY, nowS] = q.shift();
      for (let d = 0; d < 8; d++) {
        const [nx, ny] = [nowX + dx[d], nowY + dy[d]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (board[nx][ny] !== 0) continue;
        visited[nx][ny] = nowS + 1;
        q.push([nx, ny, nowS + 1]);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        startList.push([i, j]);
      }
    }
  }
  bfs(startList);
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (ans < visited[i][j]) {
        ans = visited[i][j];
      }
    }
  }

  return ans;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
