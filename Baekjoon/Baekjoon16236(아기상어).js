const solution = (input) => {
  const n = Number(input.shift());
  const board = input.map((str) => str.split(" ").map(Number));
  let size = 2;
  let ate = 0;
  let answer = 0;
  let [x, y] = [0, 0];
  const [dx, dy] = [
    [0, 0, 1, -1],
    [1, -1, 0, 0],
  ];

  const bfs = (board, x, y, size) => {
    const q = [];
    const check = Array.from({ length: n }, () => new Array(n).fill(-1));
    const eatList = [];
    q.push([x, y]);
    check[x][y] = 0;

    while (q.length) {
      const [nowX, nowY] = q.shift();
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [nowX + dx[k], nowY + dy[k]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || check[nx][ny] !== -1)
          continue;
        let pass = false;
        let eat = false;
        if (board[nx][ny] === 0) {
          pass = true;
        } else if (size === board[nx][ny]) {
          pass = true;
        } else if (size > board[nx][ny]) {
          pass = true;
          eat = true;
        }

        if (pass) {
          check[nx][ny] = check[nowX][nowY] + 1;
          q.push([nx, ny]);
          if (eat) {
            eatList.push([check[nx][ny], nx, ny]);
          }
        }
      }
    }

    if (eatList.length === 0) {
      return -1;
    }

    eatList.sort((a, b) => {
      if (a[0] === b[0]) {
        if (a[1] === b[1]) {
          return a[2] - b[2];
        } else {
          return a[1] - b[1];
        }
      } else {
        return a[0] - b[0];
      }
    });
    return eatList[0];
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 9) {
        [x, y] = [i, j];
        board[i][j] = 0;
      }
    }
  }

  while (1) {
    const p = bfs(board, x, y, size);
    if (p === -1) {
      break;
    }
    const [dist, nx, ny] = p;
    answer += dist;
    ate += 1;
    x = nx;
    y = ny;
    board[nx][ny] = 0;
    if (size === ate) {
      size += 1;
      ate = 0;
    }
  }
  return answer;
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
console.log(solution(input));
