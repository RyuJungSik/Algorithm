const solution = (input) => {
  const k = +input.shift();
  const [m, n] = input.shift().split(" ");
  const board = [];
  const [dx1, dy1] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];
  const [dx2, dy2] = [
    [-2, -1, 1, 2, 2, 1, -1, -2],
    [1, 2, 2, 1, -1, -2, -2, -1],
  ];
  for (let str of input) {
    board.push(str.split(" ").map((num) => +num));
  }
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => new Array(k + 1).fill(0))
  );

  if (+n === 1 && +m === 1 && board[0][0] === 0) return 0;
  const q = [];
  q.push([0, 0, 0]);

  while (q.length) {
    const [nowX, nowY, nowK] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx1, ny1] = [nowX + dx1[i], nowY + dy1[i]];
      if (nx1 < 0 || nx1 >= n || ny1 < 0 || ny1 >= m) continue;
      if (visited[nx1][ny1][nowK] !== 0) continue;
      if (board[nx1][ny1] === 1) continue;
      visited[nx1][ny1][nowK] = visited[nowX][nowY][nowK] + 1;
      q.push([nx1, ny1, nowK]);
    }
    for (let i = 0; i < 8; i++) {
      const [nx1, ny1] = [nowX + dx2[i], nowY + dy2[i]];
      if (nowK > k) continue;
      if (nx1 < 0 || nx1 >= n || ny1 < 0 || ny1 >= m) continue;
      if (visited[nx1][ny1][nowK + 1] !== 0) continue;
      if (board[nx1][ny1] === 1) continue;
      visited[nx1][ny1][nowK + 1] = visited[nowX][nowY][nowK] + 1;
      q.push([nx1, ny1, nowK + 1]);
    }
  }

  let tmp = n * m + 1;
  for (let i = 0; i < k + 1; i++) {
    if (visited[n - 1][m - 1][i] !== 0 && tmp > visited[n - 1][m - 1][i]) {
      tmp = visited[n - 1][m - 1][i];
    }
  }
  if (tmp === n * m + 1) return -1;
  else return tmp;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
