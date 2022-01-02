const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = (input) => {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((num) => +num);
  let answer = 0;
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const hubo = [];
  const per = (index, range, now) => {
    if (now.length === 3) {
      hubo.push([...now]);
      return;
    } else {
      for (let i = 0; i < range; i++) {
        if (now.length === 0 || now[now.length - 1] < i) {
          now.push(i);
          per(index + 1, range, now);
          now.pop();
        }
      }
    }
  };

  const bfs = (boardCopy, x, y) => {
    const q = [];
    q.push([x, y]);
    while (q.length) {
      const now = q.shift();
      const [nowX, nowY] = [now[0], now[1]];

      for (let d = 0; d < 4; d++) {
        const [nextX, nextY] = [nowX + dx[d], nowY + dy[d]];
        if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) continue;
        if (boardCopy[nextX][nextY] === 0) {
          boardCopy[nextX][nextY] = 2;
          q.push([nextX, nextY]);
        }
      }
    }
    return boardCopy;
  };

  per(0, N * M, []);

  const board = [];
  const virusPos = [];
  for (let str of input) {
    board.push(str.split(" ").map((num) => +num));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 2) {
        virusPos.push([i, j]);
      }
    }
  }

  let a = 0;
  for (let i of hubo) {
    let boardCopy = board.map((arr) => [...arr]);

    let tmp = 0;
    const [x1, y1, x2, y2, x3, y3] = [
      parseInt(i[0] / M),
      i[0] % M,
      parseInt(i[1] / M),
      i[1] % M,
      parseInt(i[2] / M),
      i[2] % M,
    ];

    if (
      boardCopy[x1][y1] !== 0 ||
      boardCopy[x2][y2] !== 0 ||
      boardCopy[x3][y3] !== 0
    )
      continue;
    boardCopy[x1][y1] = 1;
    boardCopy[x2][y2] = 1;
    boardCopy[x3][y3] = 1;

    for (let v of virusPos) {
      boardCopy = bfs(boardCopy, v[0], v[1]);
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (boardCopy[i][j] === 0) {
          tmp += 1;
        }
      }
    }
    answer = Math.max(answer, tmp);
  }
  return answer;
};

console.log(solution(input));
