const solution = (input) => {
  const N = Number(input.shift());
  const board = input.map((str) => str.split(""));
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const visited1 = Array.from({ length: N }, () => new Array(N).fill(false));
  const visited2 = Array.from({ length: N }, () => new Array(N).fill(false));
  const answer = [0, 0];

  const bfs1 = (x, y) => {
    const q = [];
    const nowColor = board[x][y];
    visited1[x][y] = true;
    q.push([x, y]);
    while (q.length) {
      const [nowX, nowY] = q.shift();
      for (let k = 0; k < 4; k++) {
        const [nextX, nextY] = [nowX + dx[k], nowY + dy[k]];
        if (
          nextX < 0 ||
          nextX >= N ||
          nextY < 0 ||
          nextY >= N ||
          visited1[nextX][nextY] === true
        )
          continue;
        if (nowColor !== board[nextX][nextY]) continue;
        visited1[nextX][nextY] = true;
        q.push([nextX, nextY]);
      }
    }
  };

  const bfs2 = (x, y) => {
    const q = [];
    const nowColor = board[x][y];
    visited2[x][y] = true;
    q.push([x, y]);
    while (q.length) {
      const [nowX, nowY] = q.shift();
      for (let k = 0; k < 4; k++) {
        const [nextX, nextY] = [nowX + dx[k], nowY + dy[k]];
        if (
          nextX < 0 ||
          nextX >= N ||
          nextY < 0 ||
          nextY >= N ||
          visited2[nextX][nextY] === true
        )
          continue;
        if (nowColor !== board[nextX][nextY]) {
          if (nowColor === "B" || board[nextX][nextY] === "B") continue;
        }

        visited2[nextX][nextY] = true;
        q.push([nextX, nextY]);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited1[i][j]) {
        answer[0] += 1;
        bfs1(i, j);
      }
      if (!visited2[i][j]) {
        answer[1] += 1;
        bfs2(i, j);
      }
    }
  }
  console.log(...answer);
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
solution(input);
