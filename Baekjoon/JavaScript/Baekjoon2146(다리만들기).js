const solution = (input) => {
  let answer = 100 * 100 + 1;
  const N = +input.shift();
  const board = input.map((str) => str.split(" ").map(Number));
  const newBoard = Array.from({ length: N }, () => new Array(N).fill(0));
  const [dx, dy] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];
  let cnt = 1;

  const bfs = (cnt, i, j) => {
    const queue = [];
    queue.push([i, j]);
    newBoard[i][j] = cnt;
    while (queue.length) {
      const [nowX, nowY] = queue.shift();
      for (let d = 0; d < 4; d++) {
        const [nextX, nextY] = [nowX + dx[d], nowY + dy[d]];
        if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
        if (board[nextX][nextY] === 0) continue;
        if (newBoard[nextX][nextY] !== 0) continue;
        newBoard[nextX][nextY] = cnt;
        queue.push([nextX, nextY]);
      }
    }
  };

  const bfs2 = (bridgeNumber, i, j) => {
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    const queue = [];
    queue.push([i, j, 0]);
    visited[i][j] = true;
    while (queue.length) {
      const [nowX, nowY, nowDistance] = queue.shift();
      for (let d = 0; d < 4; d++) {
        const [nextX, nextY] = [nowX + dx[d], nowY + dy[d]];
        if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
        if (newBoard[nextX][nextY] === bridgeNumber) continue;
        if (visited[nextX][nextY]) continue;

        if (newBoard[nextX][nextY] === 0) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY, nowDistance + 1]);
        } else {
          return nowDistance;
        }
      }
    }
    return 100 * 100 + 2;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 0 || newBoard[i][j] !== 0) continue;
      bfs(cnt, i, j);
      cnt += 1;
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (newBoard[i][j] === 0) continue;
      answer = Math.min(bfs2(newBoard[i][j], i, j), answer);
    }
  }
  return answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
